!function(e){function t(data){for(var t,n,o=data[0],c=data[1],i=0,d=[];i<o.length;i++)n=o[i],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(f&&f(data);d.length;)d.shift()()}var n={},r={1:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=c);var d,script=document.createElement("script");script.charset="utf-8",script.timeout=120,o.nc&&script.setAttribute("nonce",o.nc),script.src=function(e){return o.p+""+({2:"pages/index",3:"pages/p/_page",4:"pages/p/_sub/_child",5:"vendors/content/plugin.js"}[e]||e)+"."+{0:"f6d58cd383cf851b0c51",2:"4b24dde132ca79ae3a94",3:"487b531a8a007d635c6b",4:"ccab98fc629259762b54",5:"02ba669c6aa57449263d",6:"d1dd4484d61a5b82fc32",7:"0fc63962386b737fa0c3",8:"8d46b947bc2f9e7a1ae3",9:"fc94001e104f50e12dae",10:"fdea7c64a49d3261380d",11:"94618f33ca45c8419a7a",12:"c117e1cf5f055c9f4d1f",13:"f5bdbbda1517500bda96",14:"06ffde30e5bdc8fbb5bd",15:"edea06c99b1f266c8fa7",16:"6e3512bd1256f053f099",17:"477b69ff4c8817b528df",18:"50a2de7610dd110b1ce5",19:"ba1f94a4e309a593cb06",20:"435a4f629fbb886b63d0",21:"a12d84dff262ff88bcee",22:"bae44ea80fd176a82844",23:"c6b040bccbc70e5e8701",24:"a2e662edf739f5f82892"}[e]+".js"}(e);var f=new Error;d=function(t){script.onerror=script.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,n[1](f)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:script})}),12e4);script.onerror=script.onload=d,document.head.appendChild(script)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},o.p="/gp-vue-boilerplate/_nuxt/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var f=d;o(o.s=4)}([function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return h}));var r=n(1);const o={timing:{fcp:500,dcl:800}};let c,d=o;function f(e={}){d={timing:Object.assign({},o.timing,e.timing||{})},d=Object.assign({},o,e)}function l(){return m()&&!0}function m(){if(e.performance){const e=performance.getEntriesByName("first-contentful-paint"),t=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<d.timing.fcp;if(t.length)return t.reduce(((e,t)=>((!e||e<t.responseEnd)&&(e=t.responseEnd),e)),null)<d.timing.dcl}return!1}const h=async(t={})=>{if(e.requestIdleCallback){await new Promise((e=>{"hidden"===document.visibilityState?document.addEventListener("visibilitychange",(()=>e()),{once:!0}):e()}));const{maxTime:e,threshold:n}=Object.assign({},{maxTime:1e3,threshold:.65},t),o=new r.a(y),d=new r.a(v);return new Promise(((t,f)=>{c=window.performance.now(),Object(r.b)(((e,t,n,r)=>{const o=new w(10,t/2);return([d,f])=>{const time=window.performance.now()-c,l=f/d;l<=1&&o.add(l),o.avg<=1&&o.avg>t?n(!0):time>=e&&r(!1)}})(e,n,t,f),[o,d])})).finally((()=>{o.destroy(),d.destroy()}))}},y=e=>{let t=performance.now();const n=()=>{const time=performance.now(),r=time-t;t=time;e(r)&&requestAnimationFrame(n)};requestAnimationFrame(n)},v=t=>{const n=r=>{t(r.timeRemaining())&&e.requestIdleCallback(n)};e.requestIdleCallback(n)};class w{constructor(e=10,t=0){this.list=void 0,this.index=0,this.list=Array(e).fill(t)}add(e){this.list[this.index]=e,this.index=(this.index+1)%this.list.length}get avg(){return this.list.reduce(((e,t)=>e+t),0)/this.list.length}}}).call(this,n(2))},function(e,t,n){"use strict";function r(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var o=0;function c(e){return"__private_"+o+++"_"+e}var d=c("listeners"),f=c("destroyed");class l{constructor(e){Object.defineProperty(this,d,{writable:!0,value:[]}),Object.defineProperty(this,f,{writable:!0,value:!1}),e((e=>!r(this,f)[f]&&(r(this,d)[d].forEach((t=>t(e))),!0)))}subscribe(e){return r(this,d)[d].push(e),{unsubscribe:()=>{r(this,d)[d]=r(this,d)[d].filter((t=>t===e))}}}destroy(){r(this,f)[f]=!0}}const m=(e,t)=>{let n=[];t.forEach(((r,o)=>{r.subscribe((r=>o=>{n[Number(r)]=o,n.filter(Boolean).length>=t.length&&(e(n),n=[])})(o))}))}},function(e,t){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){"object"==typeof window&&(g=window)}e.exports=g},function(e,t,n){"use strict";(function(e){function r(t){return new RegExp(t.regex).test(e.navigator.userAgent)}n.d(t,"a",(function(){return r}))}).call(this,n(2))},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n(3);let o=!1;const c=e.document.getElementById("nuxt-speedkit-layer"),d="__NUXT_SPEEDKIT_FORCE_INIT__"in e&&e.__NUXT_SPEEDKIT_FORCE_INIT__,f=t=>e.dispatchEvent(new CustomEvent("nuxt-speedkit:run",{detail:{sufficient:t}}));async function l(e){if(!o){document.documentElement.classList.remove("nuxt-speedkit-reduced-view");try{return e||await Object(t.c)(),o=!0,f(!0),Promise.all([n.e(9),n.e(6),n.e(7)]).then(n.bind(null,6))}catch(e){if(f(!1),c)return h("nuxt-speedkit-message-weak-hardware"),null}return null}}function m(e,t){Array.from(document.querySelectorAll(`#${e}`)).forEach((e=>{e.addEventListener("click",t,{capture:!0,once:!0,passive:!0})}))}function h(t){const n=e.document.getElementById(t);if(!n)throw new Error(`Can't update speedkit-layer, message ${t} missing.`);n.style.display="block",c.className+=" nuxt-speedkit-layer-visible"}function y(){document.documentElement.classList.add("nuxt-speedkit-reduced-view"),e.document.querySelectorAll("[data-font]").forEach((e=>{e.classList.add("font-active")})),Array.from(document.querySelectorAll("noscript.nuxt-speedkit-picture-noscript")).forEach((e=>{const t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t.children[0],e),t.remove()}))}const v=Object(r.a)({regex:new RegExp("((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(15[_.]6|15[_.]([7-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})[_.]\\d+|16[_.]0|16[_.]([1-9]|\\d{2,})|(1[7-9]|[2-9]\\d|\\d{3,})[_.]\\d+)(?:[_.]\\d+)?)|((?:Chrome).*OPR\\/(94|(9[5-9]|\\d{3,}))\\.\\d+\\.\\d+)|(SamsungBrowser\\/(19|([2-9]\\d|\\d{3,}))\\.\\d+)|(Edge\\/(108|(109|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))(?:\\.\\d+)?)|((Chromium|Chrome)\\/(108|(109|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+(?:\\.\\d+)?)|(Trident\\/7\\.0)|(Firefox\\/(102|(10[3-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,})|108|(109|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+\\.\\d+)|(Firefox\\/(102|(10[3-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,})|108|(109|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+(pre|[ab]\\d+[a-z]*)?)|(([MS]?IE) (11|(1[2-9]|[2-9]\\d|\\d{3,}))\\.\\d+)","")});window.addEventListener("load",(function(){document.getElementById("nuxt-speedkit-layer")?(m("nuxt-speedkit-button-init-reduced-view",y),m("nuxt-speedkit-button-init-app",(()=>l(!0))),Object(t.d)({timing:{fcp:800,dcl:1200}}),"__NUXT_SPEEDKIT_AUTO_INIT__"in e&&e.__NUXT_SPEEDKIT_AUTO_INIT__||Object(t.b)()&&v?l():function(e){e||h("nuxt-speedkit-message-unsupported-browser"),Object(t.a)()||h("nuxt-speedkit-message-reduced-bandwidth")}(v)):l(d)}))}.call(this,n(2))}]);