RUN(function(){"use strict";var E=function(E){document.write('<script src="/UPPERCASE/R/BROWSER_FIX/IE/'+E+'.js"></script>')};global.IE={},/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent),IE.version=parseInt(RegExp.$1,10),E("INFO"),RUN(function(){var E=document.createElement("canvas");return void 0===E.getContext||void 0===E.getContext("2d")})===!0&&(E("LIB/fxcanvas/jooscript"),E("LIB/fxcanvas/fxcanvas"),E("LIB/fxcanvas/flash_backend"),E("DOM/CANVAS"),E("CONTEXT"),E("INFO_NO_CANVAS")),E("E"),E("EVENT_LOW"),void 0===global.innerWidth&&E("WIN_WIDTH"),void 0===global.innerHeight&&E("WIN_HEIGHT"),E("ADD_STYLE"),IE.version<=8&&E("DOM/IMG"),IE.version<=7&&E("DOM/IFRAME"),IE.version<=7&&E("CLEAR_BOTH"),IE.version<=8&&(E("COPY/COPY_DATA"),E("COPY/COPY_ARRAY"),E("PACK_DATA"),E("UNPACK_DATA"),E("REMOVE_TO_DELETE")),IE.version<=7&&E("DOM/TABLE"),IE.version<=8&&E("DOM/TD"),IE.version<=8&&(E("ANIMATE"),E("KEYFRAME")),IE.version<=7&&E("CLOSE_WIN")});