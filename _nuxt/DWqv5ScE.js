import{X as a,j as l,q as u,l as f,p}from"./xL0OVFL7.js";function y(e){let t=0;if(e.length===0)return t;for(let i=0;i<e.length;i++){const r=e.charCodeAt(i);t=(t<<5)-t+r,t=t&t}return t}function m(e){return y(e).toString(16)}function n(e){return e.split(`
`).map(t=>t.trim()).join(" ")}function d(e){return{key:e.className,type:"text/css",children:n(e.style)}}function x(e,t){return{key:t.picture,type:"text/css",children:n(e.style)}}function C(e,t=!1,i){return t?g(`<style>${e}</style>`,i):{key:i,type:"text/css",children:n(e)}}function g(e,t){return{key:t,innerHTML:n(e)}}const s=Symbol("criticalContext");function S(e={}){const t=a(),{critical:i}={critical:void 0,...e},r=l("critical"in t?t.critical===""||String(t.critical)==="true":i),o=u(s,r.value||!1),c=f(()=>typeof r.value=="boolean"?r.value:o);return p(s,c.value||i),{isCritical:c}}export{d as a,x as b,C as g,m as t,S as u};
