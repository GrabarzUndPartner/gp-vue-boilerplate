(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{144:function(t,r,e){"use strict";var n={bmp:e(267),cur:e(268),dds:e(269),gif:e(270),ico:e(145),jpg:e(271),png:e(272),psd:e(273),svg:e(274),webp:e(275)};t.exports=n},145:function(t,r,e){"use strict";var n=1,c=6,o=16;function h(t,r){var e=t.readUInt8(r);return 0===e?256:e}function d(t,r){var e=c+r*o;return{width:h(t,e),height:h(t,e+1)}}t.exports={detect:function(t){return 0===t.readUInt16LE(0)&&t.readUInt16LE(2)===n},calculate:function(t){var r,e=t.readUInt16LE(4),n=d(t,0);if(1===e)return n;for(n.images=[{width:n.width,height:n.height}],r=1;r<e;r+=1)n.images.push(d(t,r));return n}}},266:function(t,r,e){"use strict";(function(r){var n=e(144),c=e(276);t.exports=function(input){if(r.isBuffer(input))return function(t){var r=c(t);if(r in n){var e=n[r].calculate(t);if(!1!==e)return e.type=r,e}throw new TypeError("unsupported file type: "+r)}(input);throw new TypeError("expecting only a buffer as input")},t.exports.types=Object.keys(n)}).call(this,e(116).Buffer)},267:function(t,r,e){"use strict";t.exports={detect:function(t){return"BM"===t.toString("ascii",0,2)},calculate:function(t){return{width:t.readUInt32LE(18),height:Math.abs(t.readInt32LE(22))}}}},268:function(t,r,e){"use strict";var n=2;t.exports={detect:function(t){return 0===t.readUInt16LE(0)&&t.readUInt16LE(2)===n},calculate:e(145).calculate}},269:function(t,r,e){"use strict";t.exports={detect:function(t){return 542327876===t.readUInt32LE(0)},calculate:function(t){return{height:t.readUInt32LE(12),width:t.readUInt32LE(16)}}}},270:function(t,r,e){"use strict";var n=/^GIF8[79]a/;t.exports={detect:function(t){var r=t.toString("ascii",0,6);return n.test(r)},calculate:function(t){return{width:t.readUInt16LE(6),height:t.readUInt16LE(8)}}}},271:function(t,r,e){"use strict";function n(t,i){return{height:t.readUInt16BE(i),width:t.readUInt16BE(i+2)}}function c(t,i){if(i>t.length)throw new TypeError("Corrupt JPG, exceeded buffer limits");if(255!==t[i])throw new TypeError("Invalid JPG, marker table corrupted")}t.exports={detect:function(t){return"ffd8"===t.toString("hex",0,2)},calculate:function(t){var i,r;for(t=t.slice(4);t.length;){if(i=t.readUInt16BE(0),c(t,i),192===(r=t[i+1])||193===r||194===r)return n(t,i+5);t=t.slice(i+2)}throw new TypeError("Invalid JPG, no size found")}}},272:function(t,r,e){"use strict";var n="PNG\r\n\n",c="IHDR",o="CgBI";t.exports={detect:function(t){if(n===t.toString("ascii",1,8)){var r=t.toString("ascii",12,16);if(r===o&&(r=t.toString("ascii",28,32)),r!==c)throw new TypeError("invalid png");return!0}},calculate:function(t){return t.toString("ascii",12,16)===o?{width:t.readUInt32BE(32),height:t.readUInt32BE(36)}:{width:t.readUInt32BE(16),height:t.readUInt32BE(20)}}}},273:function(t,r,e){"use strict";t.exports={detect:function(t){return"8BPS"===t.toString("ascii",0,4)},calculate:function(t){return{width:t.readUInt32BE(18),height:t.readUInt32BE(14)}}}},274:function(t,r,e){"use strict";var n=/<svg[^>]+[^>]*>/;var c={root:/<svg\s[^>]+>/,width:/\bwidth=(['"])([^%]+?)\1/,height:/\bheight=(['"])([^%]+?)\1/,viewbox:/\bviewBox=(['"])(.+?)\1/};function o(t){var r=t.split(" ");return{width:parseInt(r[2],10),height:parseInt(r[3],10)}}t.exports={detect:function(t){return n.test(t)},calculate:function(t){var r=t.toString("utf8").match(c.root);if(r){var e=function(t){var r=t.match(c.width),e=t.match(c.height),n=t.match(c.viewbox);return{width:r&&parseInt(r[2],10),height:e&&parseInt(e[2],10),viewbox:n&&o(n[2])}}(r[0]);if(e.width&&e.height)return function(t){return{width:t.width,height:t.height}}(e);if(e.viewbox)return function(t){var r=t.viewbox.width/t.viewbox.height;return t.width?{width:t.width,height:Math.floor(t.width/r)}:t.height?{width:Math.floor(t.height*r),height:t.height}:{width:t.viewbox.width,height:t.viewbox.height}}(e)}throw new TypeError("invalid svg")}}},275:function(t,r,e){"use strict";t.exports={detect:function(t){var r="RIFF"===t.toString("ascii",0,4),e="WEBP"===t.toString("ascii",8,12),n="VP8"===t.toString("ascii",12,15);return r&&e&&n},calculate:function(t){var r=t.toString("ascii",12,16);if(t=t.slice(20,30),"VP8X"===r){var e=t[0];return!(!(0==(192&e))||!(0==(1&e)))&&function(t){return{width:1+t.readUIntLE(4,3),height:1+t.readUIntLE(7,3)}}(t)}if("VP8 "===r&&47!==t[0])return function(t){return{width:16383&t.readInt16LE(6),height:16383&t.readInt16LE(8)}}(t);var n=t.toString("hex",3,6);return"VP8L"===r&&"9d012a"!==n&&function(t){return{width:1+((63&t[2])<<8|t[1]),height:1+((15&t[4])<<10|t[3]<<2|(192&t[2])>>6)}}(t)}}},276:function(t,r,e){"use strict";var n=e(144);t.exports=function(t){var r;for(r in n)if(n[r].detect(t))return r}}}]);