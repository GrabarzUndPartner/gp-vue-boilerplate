import{a as c,t as p,u as g}from"./CHVf1Br0.js";import{a as f,v as m,af as d,a0 as h,V as y}from"./CsR5ygFy.js";function S(){const{booster:o}=f().public;return o}class C{constructor(){this.list=[]}getKey(){return u(JSON.stringify(this.list.map(t=>t.getKey())))}add(t){const i={name:"data-font",value:`${u(JSON.stringify(t.map(e=>e.getKey())))}`};return this.list=[...this.list,...t.map(e=>(e.setRootSelector(i),e))],i}getPreloadDescriptions(t,i="anonymous"){return Array.from(this.list.reduce((e,n)=>e,new Map).values())}getStyleDescriptions(t){return l([c(this.list.map(i=>i.getCSSText(t)).join(" "),!1,this.getKey())])}getNoScriptStyleDescriptions(){return l([c(this.list.map(t=>t.getNoScriptCSSText()).join(" "),!0,this.getKey())])}get size(){return this.list.length}toJSON(){return{list:this.list.map(t=>t.toJSON())}}}function u(o,t){return p(`${o}_${t}`).padStart(9,"-")}function l(o){return o.filter(t=>t.key!=="0")}function D(o){const{isCritical:t,critical:i}=g(o),e=S(),n=m(),r=d(new C),a={usedFontaine:e.usedFontaine};try{const s=n.$booster.head.push(r,t.value,a);h(()=>y(()=>s.dispose()))}catch(s){console.error(s)}return{isCritical:t,critical:i,$getFont:(...s)=>({runtimeConfig:e,isCritical:t.value,fontCollection:r,definition:n.$booster.getFont(...s)})}}export{D as u};