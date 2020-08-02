<script>
    function x13(x) {if (x.keyCode == 13) return false;}
    function cleartxtEnc() {document.getElementById('txtEnc').value = "";}
    function cleartxtIn() {document.getElementById('txtInput').value = "";}
</script>

<!-- Vendor Library -->
<script src="/_site/js/vendor/jq/jquery-3.3.1.min.js"></script>
<script src="/_site/js/vendor/jq/jquery-1.11.4.ui.min.js"></script>
<script src="/_site/js/vendor/bs/bootstrap-4.0.0.min.js"></script>

<!--Root-->
<script src="/_site/js/vendor/nd2/nativedroid2.js"></script>
<script src="/_site/js/vendor/nd2/nd2settings.js"></script>

<!-- Caliweb -->
<script src="/_site/js/Caliweb/3SChat/client.js"></script>
<script src="/_site/js/Caliweb/3SChat/crypto-js-4.0.0.min.js"></script>

<script src="/_site/js/vendor/nd2/waves-0.7.2.min.js"></script>
<script src="/_site/js/vendor/nd2/wow-1.1.2.min.js"></script>
<script src="/_site/js/vendor/nd2/material-components-web.min.js"></script>

<!-- Helpers [html5Shiv 373 printshiv]-->
<script src="/_site/js/vendor/helpers/html5Shiv.3.7.3/Printshiv.min.js" async></script>

<!-- 3Party [consol-log-div]-->
<script src="/_site/js/3P/console.log/es5-shim.js"></script>
<script src="/_site/js/3P/console.log/div.js"></script>

<!-- 3Party [jqkeyboard]-->
<script src="/_site/js/3P/Keyboard/jqkeyboard.js"></script>
<script src="/_site/js/3P/Keyboard/jqkeyboard-min.js"></script>
<script src="/_site/js/3P/Keyboard/jqkeyboard-white.js"></script>
<script src="/_site/js/3P/Keyboard/jqk.layout.en-bg.js"></script>
<script src="/_site/js/3P/Keyboard/jqk.layout.en.js"></script>

<script>
    mdc.autoInit();
    var strategy = "aes";

    function encrypt(text, password) {
        switch (strategy) {
            case "aes":
                return CryptoJS.AES.encrypt(text, password);
            case "des":
                return CryptoJS.DES.encrypt(text, password);
            case "rc4":
                return CryptoJS.RC4.encrypt(text, password);
            case "rc4drop":
                return CryptoJS.RC4Drop.encrypt(text, password);
            case "rabbit":
                return CryptoJS.Rabbit.encrypt(text, password);
            case "rabbitlegacy":
                return CryptoJS.RabbitLegacy.encrypt(text, password);
            case "tripledes":
                return CryptoJS.TripleDES.encrypt(text, password);
        }
    }

    function decrypt(cipher, password) {
        switch (strategy) {
            case "aes":
                return CryptoJS.AES.decrypt(cipher, password).toString(
                    CryptoJS.enc.Utf8
                );
            case "des":
                return CryptoJS.DES.decrypt(cipher, password).toString(
                    CryptoJS.enc.Utf8
                );
            case "rc4":
                return CryptoJS.RC4.decrypt(cipher, password).toString(
                    CryptoJS.enc.Utf8
                );
            case "rc4drop":
                return CryptoJS.RC4Drop.decrypt(cipher, password).toString(
                    CryptoJS.enc.Utf8
                );
            case "rabbit":
                return CryptoJS.Rabbit.decrypt(cipher, password).toString(
                    CryptoJS.enc.Utf8
                );
            case "rabbitlegacy":
                return CryptoJS.RabbitLegacy.decrypt(cipher, password).toString(
                    CryptoJS.enc.Utf8
                );
            case "tripledes":
                return CryptoJS.TripleDES.decrypt(cipher, password).toString(
                    CryptoJS.enc.Utf8
                );
        }
    }
    $(".encrypt--strategy").get(0)
        .MDCSelect.listen("MDCSelect:change", function() {
            strategy = $(".encrypt--strategy").get(0).MDCSelect.value;
            $(".encrypt--cipher").get(0).MDCTextField.value = encrypt(
                $(".encrypt--text").get(0).MDCTextField.value,
                $(".encrypt--password").get(0).MDCTextField.value
            );
        });
    $(".encrypt--text textarea").on("input", function() {
        $(".encrypt--cipher").get(0).MDCTextField.value = encrypt(
            $(".encrypt--text").get(0).MDCTextField.value,
            $(".encrypt--password").get(0).MDCTextField.value
        );
    });
    $(".encrypt--password input").on("input", function() {
        $(".encrypt--cipher").get(0).MDCTextField.value = encrypt(
            $(".encrypt--text").get(0).MDCTextField.value,
            $(".encrypt--password").get(0).MDCTextField.value
        );
    });
    $(".encrypt--cipher textarea").on("input", function() {
        $(".encrypt--text").get(0).MDCTextField.value = decrypt(
            $(".encrypt--cipher").get(0).MDCTextField.value,
            $(".encrypt--password").get(0).MDCTextField.value
        );
    });
</script>
