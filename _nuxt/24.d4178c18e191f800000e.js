(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{598:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});const n={validate:t=>"BM"===t.toString("ascii",0,2),calculate:t=>({height:Math.abs(t.readInt32LE(22)),width:t.readUInt32LE(18)})};function r(t,e){const n=t.readUInt8(e);return 0===n?256:n}function c(t,e){const n=6+16*e;return{height:r(t,n+1),width:r(t,n)}}const h={validate:t=>0===t.readUInt16LE(0)&&1===t.readUInt16LE(2),calculate(t){const e=t.readUInt16LE(4),n=c(t,0);if(1===e)return n;const r=[n];for(let n=1;n<e;n+=1)r.push(c(t,n));return{height:n.height,images:r,width:n.width}}},o={validate:t=>0===t.readUInt16LE(0)&&2===t.readUInt16LE(2),calculate:t=>h.calculate(t)},d={validate:t=>542327876===t.readUInt32LE(0),calculate:t=>({height:t.readUInt32LE(12),width:t.readUInt32LE(16)})},l=/^GIF8[79]a/,f={validate(t){const e=t.toString("ascii",0,6);return l.test(e)},calculate:t=>({height:t.readUInt16LE(8),width:t.readUInt16LE(6)})},w={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function I(t,e){const n=e+4;return[t.toString("ascii",e,n),t.readUInt32BE(n)]}function E(t){const e=w[t];return{width:e,height:e,type:t}}const U={validate:t=>"icns"===t.toString("ascii",0,4),calculate(t){const e=t.length,n=t.readUInt32BE(4);let r=8,c=I(t,r),h=E(c[0]);if(r+=c[1],r===n)return h;const o={height:h.height,images:[h],width:h.width};for(;r<n&&r<e;)c=I(t,r),h=E(c[0]),r+=c[1],o.images.push(h);return o}},m={validate:t=>"ff4fff51"===t.toString("hex",0,4),calculate:t=>({height:t.readUInt32BE(12),width:t.readUInt32BE(8)})},v="66747970",S="6a703268",B="6a502020",P="72726571",L=t=>({height:t.readUInt32BE(4),width:t.readUInt32BE(8)}),y={validate(t){const e=t.toString("hex",4,8),n=t.readUInt32BE(0);if(e!==B||n<1)return!1;const r=n+4,c=t.readUInt32BE(n);return t.slice(r,r+c).toString("hex",0,4)===v},calculate(t){const e=t.readUInt32BE(0);let n=e+4+t.readUInt16BE(e+2);switch(t.toString("hex",n,n+4)){case P:return n=n+4+4+(t=>{const e=t.readUInt8(0);let n=1+2*e;return n=n+2+t.readUInt16BE(n)*(2+e),n+2+t.readUInt16BE(n)*(16+e)})(t.slice(n+4)),L(t.slice(n+8,n+24));case S:return L(t.slice(n+8,n+24));default:throw new TypeError("Unsupported header found: "+t.toString("ascii",n,n+4))}}};function x(t,e,n,r){n=n||0;return t["readUInt"+e+(r?"BE":"LE")].call(t,n)}const k=6,T=12,M=2;function j(t){return"45786966"===t.toString("hex",2,6)}function G(t,e){return{height:t.readUInt16BE(e),width:t.readUInt16BE(e+2)}}function C(t,e){const n=t.slice(2,e),r=n.toString("hex",k,k+2),c="4d4d"===r;if(c||"4949"===r)return function(t,e){const n=k+8,r=x(t,16,n,e);for(let c=0;c<r;c++){const r=n+M+c*T,h=r+T;if(r>t.length)return;const o=t.slice(r,h);if(274===x(o,16,0,e)){if(3!==x(o,16,2,e))return;if(1!==x(o,32,4,e))return;return x(o,16,8,e)}}}(n,c)}function F(t,e){if(e>t.length)throw new TypeError("Corrupt JPG, exceeded buffer limits");if(255!==t[e])throw new TypeError("Invalid JPG, marker table corrupted")}const J={validate:t=>"ffd8"===t.toString("hex",0,2),calculate(t){let e,n;for(t=t.slice(4);t.length;){const i=t.readUInt16BE(0);if(j(t)&&(e=C(t,i)),F(t,i),n=t[i+1],192===n||193===n||194===n){const n=G(t,i+5);return e?{height:n.height,orientation:e,width:n.width}:n}t=t.slice(i+2)}throw new TypeError("Invalid JPG, no size found")}},N={validate:t=>"KTX 11"===t.toString("ascii",1,7),calculate:t=>({height:t.readUInt32LE(40),width:t.readUInt32LE(36)})},O="CgBI",V={validate(t){if("PNG\r\n\n"===t.toString("ascii",1,8)){let e=t.toString("ascii",12,16);if(e===O&&(e=t.toString("ascii",28,32)),"IHDR"!==e)throw new TypeError("Invalid PNG");return!0}return!1},calculate:t=>t.toString("ascii",12,16)===O?{height:t.readUInt32BE(36),width:t.readUInt32BE(32)}:{height:t.readUInt32BE(20),width:t.readUInt32BE(16)}},W={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},z=Object.keys(W),A={default:t=>{let e=[];for(;t.length>0;){const line=t.shift();if("#"!==line[0]){e=line.split(" ");break}}if(2===e.length)return{height:parseInt(e[1],10),width:parseInt(e[0],10)};throw new TypeError("Invalid PNM")},pam:t=>{const e={};for(;t.length>0;){const line=t.shift();if(line.length>16||line.charCodeAt(0)>128)continue;const[n,r]=line.split(" ");if(n&&r&&(e[n.toLowerCase()]=parseInt(r,10)),e.height&&e.width)break}if(e.height&&e.width)return{height:e.height,width:e.width};throw new TypeError("Invalid PAM")}},R=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,X={height:/\sheight=(['"])([^%]+?)\1/,root:R,viewbox:/\sviewBox=(['"])(.+?)\1/,width:/\swidth=(['"])([^%]+?)\1/},_=2.54,D={cm:96/_,em:16,ex:8,m:96/_*100,mm:96/_/10,pc:96/72/12,pt:96/72};function H(t){const e=/([0-9.]+)([a-z]*)/.exec(t);if(e)return Math.round(parseFloat(e[1])*(D[e[2]]||1))}function K(t){const e=t.split(" ");return{height:H(e[3]),width:H(e[2])}}const $={bmp:n,cur:o,dds:d,gif:f,icns:U,ico:h,j2c:m,jp2:y,jpg:J,ktx:N,png:V,pnm:{validate(t){const e=t.toString("ascii",0,2);return z.includes(e)},calculate(t){const e=t.toString("ascii",0,2),n=W[e],r=t.toString("ascii",3).split(/[\r\n]+/);return(A[n]||A.default)(r)}},psd:{validate:t=>"8BPS"===t.toString("ascii",0,4),calculate:t=>({height:t.readUInt32BE(14),width:t.readUInt32BE(18)})},svg:{validate(t){const e=String(t);return R.test(e)},calculate(t){const e=t.toString("utf8").match(X.root);if(e){const t=function(t){const e=t.match(X.width),n=t.match(X.height),r=t.match(X.viewbox);return{height:n&&H(n[2]),viewbox:r&&K(r[2]),width:e&&H(e[2])}}(e[0]);if(t.width&&t.height)return function(t){return{height:t.height,width:t.width}}(t);if(t.viewbox)return function(t,e){const n=e.width/e.height;return t.width?{height:Math.floor(t.width/n),width:t.width}:t.height?{height:t.height,width:Math.floor(t.height*n)}:{height:e.height,width:e.width}}(t,t.viewbox)}throw new TypeError("Invalid SVG")}},webp:{validate(t){const e="RIFF"===t.toString("ascii",0,4),n="WEBP"===t.toString("ascii",8,12),r="VP8"===t.toString("ascii",12,15);return e&&n&&r},calculate(t){const e=t.toString("ascii",12,16);if(t=t.slice(20,30),"VP8X"===e){const e=t[0];if(0==(192&e)&&0==(1&e))return function(t){return{height:1+t.readUIntLE(7,3),width:1+t.readUIntLE(4,3)}}(t);throw new TypeError("Invalid WebP")}if("VP8 "===e&&47!==t[0])return function(t){return{height:16383&t.readInt16LE(8),width:16383&t.readInt16LE(6)}}(t);const n=t.toString("hex",3,6);if("VP8L"===e&&"9d012a"!==n)return function(t){return{height:1+((15&t[4])<<10|t[3]<<2|(192&t[2])>>6),width:1+((63&t[2])<<8|t[1])}}(t);throw new TypeError("Invalid WebP")}}},Q=t=>"svg"===t?"image/svg+xml":`image/${t}`,Y=Object.keys($),Z={56:"psd",66:"bmp",68:"dds",71:"gif",73:"tiff",77:"tiff",82:"webp",105:"icns",137:"png",255:"jpg"};function tt(t,e){const n=function(t){const e=t[0];if(e in Z){const n=Z[e];if($[n].validate(t))return n}return Y.find((e=>$[e].validate(t)))}(t);if(n&&n in $){const r=$[n].calculate(t,e);if(void 0!==r)return r.type=n,r.mimeType=Q(n),r}throw new TypeError("unsupported file type: "+n+" (file: "+e+")")}const it=Object.keys($);e.imageMeta=function(input){if(t.isBuffer(input))return tt(input);throw new Error("Input should be buffer!")},e.types=it}).call(this,n(290).Buffer)}}]);