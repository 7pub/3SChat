<head>
    <meta charset="utf-8" />
    <title>3SChat [APP]</title>
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="/cdn-gw/css/jQKeyboard/style.css">
    <script type="text/javascript" src="/cdn-gw/vendor/jquery/js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="/cdn-gw/js/jQKeyboard/s.js"></script>
    <script>
        function loadStyle(directory, files) {
            var head = document.getElementsByTagName("head")[0]
            var extension = '.css'
            for (var file of files) {
                var path = directory + file + extension
                var link = document.createElement("link")
                link.href = path
                link.type = "text/css"
                link.rel = "stylesheet"
                head.appendChild(link)
            }
        }
        (() => loadStyle('/cdn-gw/vendor/bootstrap/css/',  /***/ ['bootstrap-4.0.0.min']))();
        (() => loadStyle('/cdn-gw/vendor/nativedroid2/css/',  /***/ ['material', 'waves-0.7.2.min', 'wow-1.1.2.animate', 'nativeDroid2']))();
        (() => loadStyle('/cdn-gw/css/3SChat/',  /***/ ['main', 'ticker']))();
        (() => loadStyle('/cdn-gw/vendor/font-awesome/css/',  /***/ ['all']))();
        (() => loadStyle('/cdn-gw/css/jqkeyboard_en.bg/',  /***/ ['import']))();
        (() => loadStyle('/cdn-gw/vendor/jquerymobile/css/',  /***/ ['jquery-1.4.5.mobile.min']))();
    </script>
    <script type="text/javascript" src="/cdn-gw/vendor/jquery/js/jquery-3.3.1.min.js"></script>
</head>