const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ZCiEmPkK.js","./entry.CXeSEdd5.css"])))=>i.map(i=>d[i]);
var A=Object.defineProperty;var L=t=>{throw TypeError(t)};var k=(t,e,n)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var E=(t,e,n)=>k(t,typeof e!="symbol"?e+"":e,n),O=(t,e,n)=>e.has(t)||L("Cannot "+n);var w=(t,e,n)=>(O(t,e,"read from private field"),n?n.call(t):e.get(t)),_=(t,e,n)=>e.has(t)?L("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),x=(t,e,n,r)=>(O(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);const N="modulepreload",q=function(t,e){return new URL(t,e).href},R={},j=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=q(c,r),c in R)return;R[c]=!0;const f=c.endsWith(".css"),U=f?'[rel="stylesheet"]':"";if(!!r)for(let m=a.length-1;m>=0;m--){const p=a[m];if(p.href===c&&(!f||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${U}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":N,f||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),f)return new Promise((m,p)=>{u.addEventListener("load",m),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return o.then(a=>{for(const i of a||[])i.status==="rejected"&&s(i.reason);return e().catch(s)})};var d,h;class S{constructor(e){_(this,d,[]);_(this,h,!1);e(n=>w(this,h)?!1:(w(this,d).forEach(r=>r(n)),!0))}subscribe(e){return w(this,d).push(e),{unsubscribe:()=>{x(this,d,w(this,d).filter(n=>n===e))}}}destroy(){x(this,h,!0)}}d=new WeakMap,h=new WeakMap;const F=(t,e)=>{let n=[];const r=o=>s=>{n[Number(o)]=s,n.filter(Boolean).length>=e.length&&(t(n),n=[])};e.forEach((o,s)=>{o.subscribe(r(s))})},B={timing:{fcp:500,dcl:800}};let y=B;function V(t={}){y={timing:{...B.timing,...t.timing||{}}},y={...B,...t}}function D(){return C()&&!0}function C(){if(window.performance){const t=performance.getEntriesByName("first-contentful-paint"),e=performance.getEntriesByType("resource");if(t.length)return t[0].startTime<y.timing.fcp;if(e.length)return e.reduce((n,r)=>((!n||n<r.responseEnd)&&(n=r.responseEnd),n),null)<y.timing.dcl}return!1}let P;const X=(t,e,n,r)=>{const o=new H(10,e/2);return([s,a])=>{const i=window.performance.now()-P,l=a/s;l<=1&&o.add(l),o.avg<=1&&o.avg>e?n(!0):i>=t&&r(!1)}},M=()=>({maxTime:1e3,threshold:.65}),W=async(t={})=>{if(window.requestIdleCallback){const{maxTime:e,threshold:n}={...M(),...t},r=new S($),o=new S(z);return new Promise((s,a)=>{P=window.performance.now(),F(X(e,n,s,a),[r,o])}).finally(()=>{r.destroy(),o.destroy()})}},$=t=>{let e=performance.now();const n=()=>{const r=performance.now(),o=r-e;e=r,t(o)&&requestAnimationFrame(n)};requestAnimationFrame(n)},z=t=>{const e=n=>{t(n.timeRemaining())&&window.requestIdleCallback(e)};window.requestIdleCallback(e)};class H{constructor(e=10,n=0){E(this,"list");E(this,"index",0);this.list=Array(e).fill(n)}add(e){this.list[this.index]=e,this.index=(this.index+1)%this.list.length}get avg(){return this.list.reduce((e,n)=>e+=n,0)/this.list.length}}const Y=Symbol("pending"),G=Symbol("fulfilled"),J=Symbol("rejected");class b{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n,this.state=Y}).then(e=>(this.state=G,e)).catch(e=>{throw this.state=J,new Error(e)})}static create(){return new b}}const T=t=>window.dispatchEvent(new CustomEvent("nuxt-booster:run",{detail:{sufficient:t}})),g=(t,e)=>{Array.from(document.querySelectorAll(t)).forEach(n=>{n.addEventListener("click",e,{capture:!0,once:!0,passive:!0})})},v=(t,e)=>{const n=window.document.getElementById(e);if(n)n.style.display="block",t.className+=" nuxt-booster-layer-visible";else throw new Error("Can't update booster-layer, message "+e+" missing.")},K=(t,e)=>{e||v(t,"nuxt-booster-message-unsupported-browser"),C()||v(t,"nuxt-booster-message-reduced-bandwidth")},I=()=>{document.documentElement.classList.add("nuxt-booster-reduced-view"),window.document.querySelectorAll("[data-font]").forEach(t=>{t.classList.add("font-active")}),Array.from(document.querySelectorAll("noscript.nuxt-booster-picture-noscript")).forEach(t=>{const e=document.createElement("div");e.innerHTML=t.innerHTML,t.parentNode.replaceChild(e.children[0],t),e.remove()})},Q=async t=>{try{if(await e0())throw new Error("Battery is low.")}catch(e){if(e.message==="Battery is low.")throw e;await t0(t)}},Z=()=>{const{promise:t,resolve:e}=new b;return document.visibilityState==="hidden"?document.addEventListener("visibilitychange",e,{once:!0}):e(),t},e0=async()=>{const e=await window.navigator.getBattery();return!e.charging&&e.level<=.2},t0=async t=>{const e=URL.createObjectURL(t);try{const n=document.createElement("video");n.muted=!0,n.playsinline=!0,n.src=e;const{promise:r,resolve:o}=new b,s=window.setTimeout(o,500);await Promise.race([n.play(),r]),window.clearTimeout(s),URL.revokeObjectURL(e)}catch(n){throw URL.revokeObjectURL(e),n}},n0=t=>{document.querySelector("#nuxt-booster-button-init-nojs, #nuxt-booster-button-init-app, #nuxt-booster-button-init-reduced-view")&&(console.warn("The `#nuxt-booster-button-init-nojs`, `#nuxt-booster-button-init-reduced-view` and `#nuxt-booster-button-init-app` ids are deprecated. Please use the following classes instead: `.nuxt-booster-button-init-nojs`, `.nuxt-booster-button-init-reduced-view` and `.nuxt-booster-button-init-app`."),g("#nuxt-booster-button-init-reduced-view",I),g("#nuxt-booster-button-init-app",()=>t(!0)))};function r0(t){return new RegExp(t.regex).test(window.navigator.userAgent)}const d0=(t,e)=>(t=t===!0?"anonymous":t,t=t===void 0?"anonymous":t,t),o0=new Blob([new Uint8Array([0,0,0,28,102,116,121,112,105,115,111,109,0,0,2,0,105,115,111,109,105,115,111,50,109,112,52,49,0,0,0,8,102,114,101,101,0,0,2,239,109,100,97,116,33,16,5,32,164,27,255,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,167,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,33,16,5,32,164,27,255,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,167,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,0,0,2,194,109,111,111,118,0,0,0,108,109,118,104,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,232,0,0,0,47,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,236,116,114,97,107,0,0,0,92,116,107,104,100,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,101,100,116,115,0,0,0,28,101,108,115,116,0,0,0,0,0,0,0,1,0,0,0,47,0,0,0,0,0,1,0,0,0,0,1,100,109,100,105,97,0,0,0,32,109,100,104,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,68,0,0,8,0,85,196,0,0,0,0,0,45,104,100,108,114,0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0,0,0,1,15,109,105,110,102,0,0,0,16,115,109,104,100,0,0,0,0,0,0,0,0,0,0,0,36,100,105,110,102,0,0,0,28,100,114,101,102,0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1,0,0,0,211,115,116,98,108,0,0,0,103,115,116,115,100,0,0,0,0,0,0,0,1,0,0,0,87,109,112,52,97,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,2,0,16,0,0,0,0,172,68,0,0,0,0,0,51,101,115,100,115,0,0,0,0,3,128,128,128,34,0,2,0,4,128,128,128,20,64,21,0,0,0,0,1,244,0,0,1,243,249,5,128,128,128,2,18,16,6,128,128,128,1,2,0,0,0,24,115,116,116,115,0,0,0,0,0,0,0,1,0,0,0,2,0,0,4,0,0,0,0,28,115,116,115,99,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,1,0,0,0,28,115,116,115,122,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,115,0,0,1,116,0,0,0,20,115,116,99,111,0,0,0,0,0,0,0,1,0,0,0,44,0,0,0,98,117,100,116,97,0,0,0,90,109,101,116,97,0,0,0,0,0,0,0,33,104,100,108,114,0,0,0,0,0,0,0,0,109,100,105,114,97,112,112,108,0,0,0,0,0,0,0,0,0,0,0,0,45,105,108,115,116,0,0,0,37,169,116,111,111,0,0,0,29,100,97,116,97,0,0,0,1,0,0,0,0,76,97,118,102,53,54,46,52,48,46,49,48,49])],{type:"video/mp4"});i0();function i0(){return a0().then(()=>s0())}function s0(){return j(()=>import("./ZCiEmPkK.js").then(t=>t.az),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.default)}function a0(){const t=new b;let e=!1;const n=window.document.getElementById("nuxt-booster-layer"),r="__NUXT_BOOSTER_FORCE_INIT__"in window&&window.__NUXT_BOOSTER_FORCE_INIT__;async function o(a){e&&t.resolve(),await Z(),document.documentElement.classList.remove("nuxt-booster-reduced-view");try{a||await Q(o0)}catch(i){if(console.warn(i),T(!1),n)return v(n,"nuxt-booster-message-low-battery"),null}try{a||await W(),e=!0,T(!0),t.resolve()}catch(i){if(console.warn(i),T(!1),n)return v(n,"nuxt-booster-message-weak-hardware"),null}return null}const s=r0({regex:new RegExp(/Trident\/[78]\.0|Edge?\/(13\d|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(9[5-9]|\d{3,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(17[._]([6-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+/)});return window.addEventListener("load",function(){document.getElementById("nuxt-booster-layer")?(g(".nuxt-booster-button-init-reduced-view",I),g(".nuxt-booster-button-init-app",()=>o(!0)),n0(o),V({timing:{fcp:800,dcl:1200}}),"__NUXT_BOOSTER_AUTO_INIT__"in window&&window.__NUXT_BOOSTER_AUTO_INIT__||D()&&s?o():K(n,s)):o(r)}),t.promise}export{b as D,j as _,d0 as g,r0 as i};
