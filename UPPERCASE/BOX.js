global.BOX=METHOD({statics:function(t){"use strict";t.boxes={}},run:function(t,o){"use strict";var i;return i=function(t){var o,n,r,e=t.split(".");for(r=0;r<e.length;r+=1)o=e[r],void 0===n?(void 0===i[o]&&(i[o]={}),n=i[o]):(void 0===n[o]&&(n[o]={}),n=n[o]);return n},i.boxName=o,i.type=BOX,t.boxes[o]=i,i}});