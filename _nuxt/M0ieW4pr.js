import{ac as o,f as l,L as u,c as y,p}from"./Ud5EjKRc.js";function f(t){let e=0;if(t.length===0)return e;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e=(e<<5)-e+i,e=e&e}return e}function s(t){return f(t).toString(16)}function c(t){return t.split(`
`).map(e=>e.trim()).join(" ")}function d(t){return{key:t.className,type:"text/css",children:c(t.style)}}function m(t,e){return{key:e.picture,type:"text/css",children:c(t.style)}}function C(t,e,r="high",i="anonymous",n=()=>{}){return{tagPriority:2,fetchpriority:r,"data-key":s(`${t.family}-${t.weight}-${t.style}-${e}`.toLowerCase()),key:s(`${t.family}-${t.weight}-${t.style}-${e}`.toLowerCase()),rel:"preload",as:"font",crossorigin:i,href:t.src,type:t.type,media:e,onload:n}}function $(t,e=!1,r=void 0){return e?g(`<style>${t}</style>`,r):{key:r,type:"text/css",children:c(t)}}function g(t,e=void 0){return{key:e,innerHTML:c(t)}}const a=Symbol("criticalContext");function x({critical:t}={}){const e=o(),r=l("critical"in e?e.critical===""||String(e.critical)==="true":t),i=u(a,r.value||!1),n=y(()=>typeof r.value=="boolean"?r.value:i);return p(a,n.value||t),{isCritical:n,critical:i}}export{$ as a,d as b,m as c,C as g,s as t,x as u};
