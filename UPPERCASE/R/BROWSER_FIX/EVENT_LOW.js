OVERRIDE({origin:EVENT_LOW,func:function(n){"use strict";global.EVENT_LOW=CLASS({preset:function(){return n},init:function(n,o,i,a,t){var e,c,h,r=a.node,l=a.name;"hashchange"===l&&void 0===global.onhashchange&&(e=location.hash,c=setInterval(function(){location.hash!==e&&(e=location.hash,t(void 0,r))},100),OVERRIDE({origin:i.remove,func:function(){i.remove=h=function(){clearInterval(c)}}}))}})}});