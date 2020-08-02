<head>
    <meta charset="utf-8" />
    <title>3SChat [APP]</title>
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="/_site/css/3P/jQKeyboard.css">
    <script type="text/javascript" src="/_site/js/vendor/jq/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="/_site/js/3S/3SKeyboard/jQKeyboard.js"></script>
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
        (() => loadStyle('/_site/css/vendor/bs/',  /***/ ['bootstrap-4.0.0.min']))();
        (() => loadStyle('/_site/css/vendor/nd2/', /***/ ['material', 'waves-0.7.2.min', 'wow-1.1.2.animate', 'nativeDroid2']))();
        (() => loadStyle('/_site/css/3S/Chat/',    /***/ ['main', 'ticker']))();
        (() => loadStyle('/_site/css/vendor/fa/',  /***/ ['all']))();
        (() => loadStyle('/_site/css/3P/Keyboard/',/***/ ['import']))();
        //https://7pub.github.io/_site/css/3P/Keyboard/import.css
        (() => loadStyle('/_site/css/vendor/jq/',  /***/ ['jquery-1.4.5.mobile.min']))();
    </script>
    <script type="text/javascript" src="/_site/js/vendor/jq/jquery-3.3.1.min.js"></script>
</head>