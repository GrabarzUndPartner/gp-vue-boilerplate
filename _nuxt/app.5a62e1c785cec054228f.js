!function(e){function t(data){for(var t,n,o=data[0],c=data[1],i=0,d=[];i<o.length;i++)n=o[i],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(f&&f(data);d.length;)d.shift()()}var n={},r={1:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=c);var d,script=document.createElement("script");script.charset="utf-8",script.timeout=120,o.nc&&script.setAttribute("nonce",o.nc),script.src=function(e){return o.p+""+({2:"pages/index",3:"pages/p/_page",4:"pages/p/_sub/_child",5:"vendors/content/plugin.js"}[e]||e)+"."+{0:"5a980dbbdcbba4033b91",2:"c34558d35c0971a44254",3:"2ec0b3135dd11d9ac687",4:"a17808c791060d6376df",5:"548d467ac603a6a23203",6:"5fe73cd2c3c7e77ba426",7:"45f7aeb282b8b43aca09",8:"dfb6167424ebefbe7bf4",9:"4218d59e14d89f227e89",10:"81f43e67074410d35949",11:"df2bdbd20188da1d15ca",12:"cb9ce38c49dcce1d45d0",13:"42a9fbbbe36cf7466b7b",14:"bf31f804fc2081290b13",15:"9dd100cdc913de6c054b",16:"c8a948435f82009b4d49",17:"68f16610d9a5cc576699",18:"ab0b273e326aa5567892",19:"1957fbd577631c2ad385",20:"c19f7015c6e2168bd510",21:"507a7fd2499af7dc9c19",22:"fa649b40e5a108947c2a",23:"b35c7bd3d3f41405537d",24:"d66c875a9d955f313308"}[e]+".js"}(e);var f=new Error;d=function(t){script.onerror=script.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,n[1](f)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:script})}),12e4);script.onerror=script.onload=d,document.head.appendChild(script)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},o.p="/gp-vue-boilerplate/_nuxt/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var f=d;o(o.s=4)}([function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return h}));var r=n(1);const o={timing:{fcp:500,dcl:800}};let c,d=o;function f(e={}){d={timing:Object.assign({},o.timing,e.timing||{})},d=Object.assign({},o,e)}function l(){return m()&&!0}function m(){if(e.performance){const e=performance.getEntriesByName("first-contentful-paint"),t=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<d.timing.fcp;if(t.length)return t.reduce(((e,t)=>((!e||e<t.responseEnd)&&(e=t.responseEnd),e)),null)<d.timing.dcl}return!1}const h=(e={})=>{const{timeRange:t,threshold:n}=Object.assign({},{timeRange:[150,1e3],threshold:.65},e),o=new r.a(y),d=new r.a(w);return new Promise(((e,f)=>{c=window.performance.now(),Object(r.b)(((e,t,n,r)=>([o,d])=>{const time=window.performance.now()-c,f=d/o;time>e[0]&&f<=1&&f>t?n(!0):time>=e[1]&&r(!1)})(t,n,e,f),[o,d])})).finally((()=>{o.destroy(),d.destroy()}))},y=e=>{let t=performance.now();const n=()=>{const time=performance.now(),r=time-t;t=time;e(r)&&requestAnimationFrame(n)};requestAnimationFrame(n)},w=t=>{const n=r=>{t(r.timeRemaining())&&e.requestIdleCallback(n)};e.requestIdleCallback(n)}}).call(this,n(2))},function(e,t,n){"use strict";function r(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var o=0;function c(e){return"__private_"+o+++"_"+e}var d=c("listeners"),f=c("destroyed");class l{constructor(e){Object.defineProperty(this,d,{writable:!0,value:[]}),Object.defineProperty(this,f,{writable:!0,value:!1}),e((e=>!r(this,f)[f]&&(r(this,d)[d].forEach((t=>t(e))),!0)))}subscribe(e){return r(this,d)[d].push(e),{unsubscribe:()=>{r(this,d)[d]=r(this,d)[d].filter((t=>t===e))}}}destroy(){r(this,f)[f]=!0}}const m=(e,t)=>{let n=[];t.forEach(((r,o)=>{r.subscribe((r=>o=>{n[Number(r)]=o,n.filter(Boolean).length>=t.length&&(e(n),n=[])})(o))}))}},function(e,t){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){"object"==typeof window&&(g=window)}e.exports=g},function(e,t,n){"use strict";(function(e){function r(t){return new RegExp(t.regex).test(e.navigator.userAgent)}n.d(t,"a",(function(){return r}))}).call(this,n(2))},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n(3);let o=!1;const c=e.document.getElementById("nuxt-speedkit-layer"),d=t=>e.dispatchEvent(new CustomEvent("nuxt-speedkit:run",{detail:{sufficient:t}}));async function f(e){if(!o){document.documentElement.classList.remove("nuxt-speedkit-reduced-view");try{return e||await Object(t.c)(),o=!0,d(!0),Promise.all([n.e(9),n.e(6),n.e(7)]).then(n.bind(null,6))}catch(e){d(!1),c&&m("nuxt-speedkit-message-weak-hardware")}return null}}function l(e,t){Array.from(document.querySelectorAll(`#${e}`)).forEach((e=>{e.addEventListener("click",t,{capture:!0,once:!0,passive:!0})}))}function m(t){const n=e.document.getElementById(t);if(!n)throw new Error(`Can't update speedkit-layer, message ${t} missing.`);n.style.display="block",c.className+=" nuxt-speedkit-layer-visible"}function h(){document.documentElement.classList.add("nuxt-speedkit-reduced-view"),e.document.querySelectorAll("[data-font]").forEach((e=>{e.classList.add("font-active")})),Array.from(document.querySelectorAll("noscript.nuxt-speedkit-picture-noscript")).forEach((e=>{const t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t.children[0],e),t.remove()}))}const y=Object(r.a)({regex:new RegExp("((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(14[_.]5|14[_.]([6-9]|\\d{2,})|14[_.]8|14[_.](9|\\d{2,})|(1[5-9]|[2-9]\\d|\\d{3,})[_.]\\d+|15[_.]5|15[_.]([6-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})[_.]\\d+)(?:[_.]\\d+)?)|((?:Chrome).*OPR\\/(89|(9\\d|\\d{3,}))\\.\\d+\\.\\d+)|(SamsungBrowser\\/(15|(1[6-9]|[2-9]\\d|\\d{3,})|17|(1[8-9]|[2-9]\\d|\\d{3,}))\\.\\d+)|(Edge\\/(104|(10[5-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))(?:\\.\\d+)?)|((Chromium|Chrome)\\/(103|(10[4-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+(?:\\.\\d+)?)|(Version\\/(15\\.6|15\\.([7-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})\\.\\d+)(?:\\.\\d+)? Safari\\/)|(Trident\\/7\\.0)|(Firefox\\/(91|(9[2-9]|\\d{3,})|102|(10[3-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+\\.\\d+)|(Firefox\\/(91|(9[2-9]|\\d{3,})|102|(10[3-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+(pre|[ab]\\d+[a-z]*)?)|(([MS]?IE) (11|(1[2-9]|[2-9]\\d|\\d{3,}))\\.\\d+)","")});window.addEventListener("load",(function(){document.getElementById("nuxt-speedkit-layer")?(l("nuxt-speedkit-button-init-reduced-view",h),l("nuxt-speedkit-button-init-app",(()=>f(!0))),Object(t.d)({timing:{fcp:800,dcl:1200}}),"__NUXT_SPEEDKIT_AUTO_INIT__"in e&&e.__NUXT_SPEEDKIT_AUTO_INIT__||Object(t.b)()&&y?f():function(e){e||m("nuxt-speedkit-message-unsupported-browser"),Object(t.a)()||m("nuxt-speedkit-message-reduced-bandwidth")}(y)):f()}))}.call(this,n(2))}]);