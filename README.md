# 3SChat



```logo

-------------------------------------------------------------
 __          __     ______   _
 \ \        / /\   |  ____| | |
  \ \  /\  / /  \  | |__    | |__  _   _ _ __   __ _ ___ ___
   \ \/  \/ / /\ \ |  __|   | '_ \| | | | '_ \ / _` / __/ __|
    \  /\  / ____ \| |      | |_) | |_| | |_) | (_| \__ \__ \
     \/  \/_/    \_\_|      |_.__/ \__, | .__/ \__,_|___/___/
                                    __/ | |
                                   |___/|_|

-------------------------------------------------------------

```

## ``Matchmaking function``

Sometimes old IP's become different people's server. For example a
company uses a Digitalocean VPS and after one year they switched to amazon
so they remove their VPS instance. The IP is then released and then used by
some dude's server for a hobby project. To verify if we got a hit, we need
to inspect the HTML and compare it from the WAF and the direct IP and Calculate
a match percentage. This is exactly what we are going to do here.
This script is called later on in the script.


### ``IP Validation``

We need to check if the IP we find is not just the current IP and not
a public WAF service.


### ``Subdomain Gathering``

## Subdomains can point to origin IP's behind the firewall (WAF)

## ``Get IP's from subdomains``


### ``Bypass Test``

## For each IP test the bypass and calculate the match %

```bash
echo -e "${YELLOW}[-] Launching requests to origin servers...${NC}"
if [[ $checkall -eq 0 ]];then
  for ip in $list_ips;do
    if [[ $(ip_is_waf $ip) -eq 0 ]];then
      # Remove current IP's via nslookup
      currentips=$(nslookup $domain | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}')
      protocol="https"
      (if (curl --fail --max-time 10 --silent -k "$protocol://$domain" --resolve "$domain:443:$ip" | grep "html" | grep -q -v "was rejected" );then if [[ $currentips != *"$ip"* ]];then curl --silent -o "/tmp/waf-bypass-$protocol-$ip-$domain" -k -H "Host: $domain" "$protocol"://"$ip"/ ; matchmaking "/tmp/waf-bypass-$protocol-$domain" "/tmp/waf-bypass-$protocol-$ip-$domain" "$ip" "$checkall" "$domain" "$protocol";wait; fi; fi) & pid=$!;
      PID_LIST+=" $pid";
      protocol="http"
      (if (curl --fail --max-time 10 --silent -k "$protocol://$domain" --resolve "$domain:80:$ip" | grep "html" | grep -q -v "was rejected" );then if [[ $currentips != *"$ip"* ]];then curl --silent -o "/tmp/waf-bypass-$protocol-$ip-$domain" -k -H "Host: $domain" "$protocol"://"$ip"/ ; matchmaking "/tmp/waf-bypass-$protocol-$domain" "/tmp/waf-bypass-$protocol-$ip-$domain" "$ip" "$checkall" "$domain" "$protocol";wait; fi; fi) & pid=$!;
      PID_LIST+=" $pid";
    fi
  done
else
for domainitem in "${domainlist[@]}";do
  tempstorage=$domain
  domain=$domainitem
  for ip in $list_ips;do
    if [[ $(ip_is_waf $ip) -eq 0 ]];then
      # Remove current IP's via nslookup
      currentips=$(nslookup $domain | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}')
      protocol="https"
      (if (curl --fail --max-time 10 --silent -k "$protocol://$domain" --resolve "$domain:443:$ip" | grep "html" | grep -q -v "was rejected" );then if [[ $currentips != *"$ip"* ]];then curl --silent -o "/tmp/waf-bypass-$protocol-$ip-$domain" -k -H "Host: $domain" "$protocol"://"$ip"/ ; matchmaking "/tmp/waf-bypass-$protocol-$domain" "/tmp/waf-bypass-$protocol-$ip-$domain" "$ip" "$checkall" "$domain" "$protocol";wait; fi; fi) & pid=$!;
      PID_LIST+=" $pid";
      protocol="http"
      (if (curl --fail --max-time 10 --silent -k "$protocol://$domain" --resolve "$domain:80:$ip" | grep "html" | grep -q -v "was rejected" );then if [[ $currentips != *"$ip"* ]];then curl --silent -o "/tmp/waf-bypass-$protocol-$ip-$domain" -k -H "Host: $domain" "$protocol"://"$ip"/ ; matchmaking "/tmp/waf-bypass-$protocol-$domain" "/tmp/waf-bypass-$protocol-$ip-$domain" "$ip" "$checkall" "$domain" "$protocol";wait; fi; fi) & pid=$!;
      PID_LIST+=" $pid";
    fi
  done
  domain=$tempstorage
done
fi
echo -e "${YELLOW}[-] Waiting on replies from origin servers...${NC}"
trap "kill $PID_LIST" SIGINT
wait $PID_LIST
if [ ! -f "$outfile" ]; then
  echo -e "${RED}[-] No Bypass found!${NC}"
else
  echo -e "${GREEN}[+] Bypass found!${NC}"
  sort -u -o "$outfile" "$outfile"
  if [[ $checkall -eq 0 ]];then
    echo -e "[IP] | [Confidence] | [Organisation]" >>  /tmp/waf-bypass-output-$domain-2.txt
  else
    echo -e "[Domain] | [IP] | [Confidence] | [Organisation]" >>  /tmp/waf-bypass-output-$domain-2.txt
  fi
  cat /tmp/waf-bypass-output-$domain.txt | sort -ur >> /tmp/waf-bypass-output-$domain-2.txt
  cat /tmp/waf-bypass-output-$domain-2.txt > /tmp/waf-bypass-output-$domain.txt
fi
```

### ``Presenting output + cleanup``

## When checkall is enabled, merge all results to main file

```bash
for domainitem in "${domainlist[@]}"
do
  if [ "$domainitem" != "$domain" ];then
    touch "/tmp/waf-bypass-output-$domainitem.txt"
    cat "/tmp/waf-bypass-output-$domainitem.txt" >> "/tmp/waf-bypass-output-$domain.txt"
  fi
done

touch /tmp/waf-bypass-output-$domain.txt # If no IP's were found, the script will be empty.
cat "/tmp/waf-bypass-output-$domain.txt" | column -s"|" -t

# Cleanup temp files
rm /tmp/waf-bypass-*$domain*
```
