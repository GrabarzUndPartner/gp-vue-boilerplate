const __vite__fileDeps=["./Daz8ghuc.js","./entry.BKSDtjdj.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var A=Object.defineProperty;var B=e=>{throw TypeError(e)};var k=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var g=(e,t,n)=>k(e,typeof t!="symbol"?t+"":t,n),C=(e,t,n)=>t.has(e)||B("Cannot "+n);var m=(e,t,n)=>(C(e,t,"read from private field"),n?n.call(e):t.get(e)),E=(e,t,n)=>t.has(e)?B("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),v=(e,t,n,r)=>(C(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);const U="modulepreload",N=function(e,t){return e[0]==="."?new URL(e,t).href:e},S={},q=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.all(n.map(a=>{if(a=N(a,r),a in S)return;S[a]=!0;const l=a.endsWith(".css"),I=l?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const h=i[f];if(h.href===a&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${I}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":U,l||(u.as="script",u.crossOrigin=""),u.href=a,c&&u.setAttribute("nonce",c),document.head.appendChild(u),l)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},D=(...e)=>q(...e).catch(t=>{const n=new Event("nuxt.preloadError");throw n.payload=t,window.dispatchEvent(n),t});var d,w;class O{constructor(t){E(this,d,[]);E(this,w,!1);t(n=>m(this,w)?!1:(m(this,d).forEach(r=>r(n)),!0))}subscribe(t){return m(this,d).push(t),{unsubscribe:()=>{v(this,d,m(this,d).filter(n=>n===t))}}}destroy(){v(this,w,!0)}}d=new WeakMap,w=new WeakMap;const F=(e,t)=>{let n=[];const r=o=>i=>{n[Number(o)]=i,n.filter(Boolean).length>=t.length&&(e(n),n=[])};t.forEach((o,i)=>{o.subscribe(r(i))})},x={timing:{fcp:500,dcl:800}};let b=x;function V(e={}){b={timing:{...x.timing,...e.timing||{}}},b={...x,...e}}function j(){return L()&&!0}function L(){if(window.performance){const e=performance.getEntriesByName("first-contentful-paint"),t=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<b.timing.fcp;if(t.length)return t.reduce((n,r)=>((!n||n<r.responseEnd)&&(n=r.responseEnd),n),null)<b.timing.dcl}return!1}let P;const X=(e,t,n,r)=>{const o=new z(10,t/2);return([i,s])=>{const c=window.performance.now()-P,a=s/i;a<=1&&o.add(a),o.avg<=1&&o.avg>t?n(!0):c>=e&&r(!1)}},M=()=>({maxTime:1e3,threshold:.65}),W=()=>new Promise(e=>{document.visibilityState==="hidden"?document.addEventListener("visibilitychange",()=>e(),{once:!0}):e()}),$=async(e={})=>{if(window.requestIdleCallback){await W();const{maxTime:t,threshold:n}={...M(),...e},r=new O(H),o=new O(Y);return new Promise((i,s)=>{P=window.performance.now(),F(X(t,n,i,s),[r,o])}).finally(()=>{r.destroy(),o.destroy()})}},H=e=>{let t=performance.now();const n=()=>{const r=performance.now(),o=r-t;t=r,e(o)&&requestAnimationFrame(n)};requestAnimationFrame(n)},Y=e=>{const t=n=>{e(n.timeRemaining())&&window.requestIdleCallback(t)};window.requestIdleCallback(t)};class z{constructor(t=10,n=0){g(this,"list");g(this,"index",0);this.list=Array(t).fill(n)}add(t){this.list[this.index]=t,this.index=(this.index+1)%this.list.length}get avg(){return this.list.reduce((t,n)=>t+=n,0)/this.list.length}}const _=e=>window.dispatchEvent(new CustomEvent("nuxt-booster:run",{detail:{sufficient:e}})),p=(e,t)=>{Array.from(document.querySelectorAll(e)).forEach(n=>{n.addEventListener("click",t,{capture:!0,once:!0,passive:!0})})},y=(e,t)=>{const n=window.document.getElementById(t);if(n)n.style.display="block",e.className+=" nuxt-booster-layer-visible";else throw new Error("Can't update booster-layer, message "+t+" missing.")},G=(e,t)=>{t||y(e,"nuxt-booster-message-unsupported-browser"),L()||y(e,"nuxt-booster-message-reduced-bandwidth")},R=()=>{document.documentElement.classList.add("nuxt-booster-reduced-view"),window.document.querySelectorAll("[data-font]").forEach(e=>{e.classList.add("font-active")}),Array.from(document.querySelectorAll("noscript.nuxt-booster-picture-noscript")).forEach(e=>{const t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t.children[0],e),t.remove()})},J=async e=>{try{if(await K())throw new Error("Battery is low.")}catch(t){if(t.message==="Battery is low.")throw t;await Q(e)}},K=async()=>{const t=await window.navigator.getBattery();return!t.charging&&t.level<=.2},Q=e=>{const t=document.createElement("video");return t.muted=!0,t.playsinline=!0,t.src=URL.createObjectURL(e),t.play()},Z=e=>{document.querySelector("#nuxt-booster-button-init-nojs, #nuxt-booster-button-init-app, #nuxt-booster-button-init-reduced-view")&&(console.warn("The `#nuxt-booster-button-init-nojs`, `#nuxt-booster-button-init-reduced-view` and `#nuxt-booster-button-init-app` ids are deprecated. Please use the following classes instead: `.nuxt-booster-button-init-nojs`, `.nuxt-booster-button-init-reduced-view` and `.nuxt-booster-button-init-app`."),p("#nuxt-booster-button-init-reduced-view",R),p("#nuxt-booster-button-init-app",()=>e(!0)))},e0=Symbol("pending"),t0=Symbol("fulfilled"),n0=Symbol("rejected");class T{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n,this.state=e0}).then(t=>(this.state=t0,t)).catch(t=>{throw this.state=n0,new Error(t)})}static create(){return new T}}function r0(e){return new RegExp(e.regex).test(window.navigator.userAgent)}const d0=(e,t)=>(e=e===!0?"anonymous":e,e=e===void 0?"anonymous":e,e),o0=new Blob([new Uint8Array([0,0,0,28,102,116,121,112,105,115,111,109,0,0,2,0,105,115,111,109,105,115,111,50,109,112,52,49,0,0,0,8,102,114,101,101,0,0,2,239,109,100,97,116,33,16,5,32,164,27,255,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,167,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,33,16,5,32,164,27,255,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,167,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,0,0,2,194,109,111,111,118,0,0,0,108,109,118,104,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,232,0,0,0,47,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,236,116,114,97,107,0,0,0,92,116,107,104,100,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,101,100,116,115,0,0,0,28,101,108,115,116,0,0,0,0,0,0,0,1,0,0,0,47,0,0,0,0,0,1,0,0,0,0,1,100,109,100,105,97,0,0,0,32,109,100,104,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,68,0,0,8,0,85,196,0,0,0,0,0,45,104,100,108,114,0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0,0,0,1,15,109,105,110,102,0,0,0,16,115,109,104,100,0,0,0,0,0,0,0,0,0,0,0,36,100,105,110,102,0,0,0,28,100,114,101,102,0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1,0,0,0,211,115,116,98,108,0,0,0,103,115,116,115,100,0,0,0,0,0,0,0,1,0,0,0,87,109,112,52,97,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,2,0,16,0,0,0,0,172,68,0,0,0,0,0,51,101,115,100,115,0,0,0,0,3,128,128,128,34,0,2,0,4,128,128,128,20,64,21,0,0,0,0,1,244,0,0,1,243,249,5,128,128,128,2,18,16,6,128,128,128,1,2,0,0,0,24,115,116,116,115,0,0,0,0,0,0,0,1,0,0,0,2,0,0,4,0,0,0,0,28,115,116,115,99,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,1,0,0,0,28,115,116,115,122,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,115,0,0,1,116,0,0,0,20,115,116,99,111,0,0,0,0,0,0,0,1,0,0,0,44,0,0,0,98,117,100,116,97,0,0,0,90,109,101,116,97,0,0,0,0,0,0,0,33,104,100,108,114,0,0,0,0,0,0,0,0,109,100,105,114,97,112,112,108,0,0,0,0,0,0,0,0,0,0,0,0,45,105,108,115,116,0,0,0,37,169,116,111,111,0,0,0,29,100,97,116,97,0,0,0,1,0,0,0,0,76,97,118,102,53,54,46,52,48,46,49,48,49])],{type:"video/mp4"});i0();function i0(){return a0().then(()=>s0())}function s0(){return D(()=>import("./Daz8ghuc.js").then(e=>e.aC),__vite__mapDeps([0,1]),import.meta.url).then(e=>e.default)}function a0(){const e=new T;let t=!1;const n=window.document.getElementById("nuxt-booster-layer"),r="__NUXT_BOOSTER_FORCE_INIT__"in window&&window.__NUXT_BOOSTER_FORCE_INIT__;async function o(s){t&&e.resolve(),document.documentElement.classList.remove("nuxt-booster-reduced-view");try{s||await J(o0)}catch(c){if(console.warn(c),_(!1),n)return y(n,"nuxt-booster-message-low-battery"),null}try{s||await $(),t=!0,_(!0),e.resolve()}catch(c){if(console.warn(c),_(!1),n)return y(n,"nuxt-booster-message-weak-hardware"),null}return null}const i=r0({regex:new RegExp(/Trident\/[78]\.0|Edge?\/(12[4-9]|1[3-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(12[1-9]|1[3-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(17\.([4-9]|\d{2,})|(1[89]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(16[._]([6-9]|\d{2,})|(1[7-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android.+Chrom(ium|e)\/(12[6-9]|1[3-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|SamsungBrowser\/(2[5-9]|[3-9]\d|\d{3,})\.\d+/)});return window.addEventListener("load",function(){document.getElementById("nuxt-booster-layer")?(p(".nuxt-booster-button-init-reduced-view",R),p(".nuxt-booster-button-init-app",()=>o(!0)),Z(o),V({timing:{fcp:800,dcl:1200}}),"__NUXT_BOOSTER_AUTO_INIT__"in window&&window.__NUXT_BOOSTER_AUTO_INIT__||j()&&i?o():G(n,i)):o(r)}),e.promise}export{T as D,D as _,d0 as g,r0 as i};
