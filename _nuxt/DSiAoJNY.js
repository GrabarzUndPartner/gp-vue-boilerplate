const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BxhVD5_D.js","./UfkYRxg9.js","./BcdjGkd9.js","./DbLVpeZy.js","./CV75n9Ez.js","./B6yxh6QH.js","./entry.BKSDtjdj.css","./B6kWlwct.js","./C0oBzt6b.js","./LinkList.BYmM8PPf.css","./COFaC7Du.js","./LostContainer.6Boc_snp.css","./Footer.CQ-LcZ1Z.css","./DvEyMbtj.js","./UyN3jYML.js","./D6kYxxOz.js","./CkTsLJ1d.js","./xjW1zPCH.js","./Zkh2HkRy.js","./ContentContainer.BXPOKCyJ.css","./Menu.CWfdrVzq.css","./BujOvF_k.js","./C6yQwbtC.js"])))=>i.map(i=>d[i]);
import{_ as b}from"./B6yxh6QH.js";import{q as B}from"./D6kYxxOz.js";import{ap as k,f as h,c as m,_ as L,o as M,k as O,l as p,O as g,F as d,I as H,ac as x,e as E,n as l,K as I,ao as V,aq as $,ar as A,S as T,i as q,B as R,m as C,r as z,G as N,H as F,as as j}from"./CV75n9Ez.js";import{u as G}from"./xjW1zPCH.js";import{_ as K}from"./Zkh2HkRy.js";import{_ as U}from"./BcdjGkd9.js";import{_ as J}from"./COFaC7Du.js";const D=k("layout",()=>{const e=h(!1),o=h(!1);return{preventScrolling:e,scrollDirection:o,togglePreventScrolling:a=>{let r=!e.value;a!==void 0&&(r=a),e.value=r},toggleScrollDirection:a=>{o.value=a}}}),Q=k("modal",()=>{const e=h([]),o=D(),n=t=>{e.value.push(t)},u=t=>{e.value.splice(e.value.indexOf(y(e,t)),1)},a=({name:t})=>{const c=y(e,t);c&&(c.opened=!1),o.togglePreventScrolling(!!e.value.find(_=>_.opened))},r=({name:t,flag:c})=>{const _=y(e,t);_&&(_.opened=c!==void 0?c:!_.opened),o.togglePreventScrolling(!!e.value.find(P=>P.opened))},f=m(()=>t=>y(e,t)),i=m(()=>t=>(y(e,t)||{opened:!1}).opened);return{modals:e,isModalOpened:i,getModal:f,registerModal:n,unregisterModal:u,toggleModal:r,closeModal:a}});function y(e,o){return e.value.find(n=>n.name===o)}const W={class:"logo"},X={__name:"Header",props:{sticky:{type:Boolean,required:!1}},setup(e){const o=D(),n=e,u=m(()=>o.scrollDirection),a=m(()=>({toggle:u.value,sticky:n.sticky}));return(r,f)=>{const i=U,t=J;return M(),O(t,{class:x(["page-header",a.value]),tag:"header"},{container:p(()=>[g("div",W,[d(i,{to:r.localePath({path:"/"})},{default:p(()=>[H(" Logo ")]),_:1},8,["to"])])]),_:1},8,["class"])}}},Y=L(X,[["__scopeId","data-v-3f90f744"]]),Z={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 100 100"},ee=g("g",null,[g("path",{d:"M93.3 24.8H6.7a6.7 6.7 0 0 1 0-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7M93.3 54.8H6.7a6.7 6.7 0 0 1 0-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7M93.3 84.8H6.7a6.7 6.7 0 0 1 0-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7"})],-1),te=g("g",null,[g("path",{d:"M59.6 50 98 11.6c2.7-2.7 2.7-7 0-9.6-2.7-2.7-7-2.7-9.6 0L50 40.4 11.6 2C8.9-.7 4.6-.7 2 2-.7 4.7-.7 9 2 11.6L40.4 50 2 88.4c-2.7 2.7-2.7 7 0 9.6 2.7 2.7 7 2.7 9.6 0L50 59.6 88.4 98c2.7 2.7 7 2.7 9.6 0 2.7-2.7 2.7-7 0-9.6z"})],-1),oe=[ee,te];function ne(e,o){return M(),E("svg",Z,[...oe])}const ae={render:ne},se=["aria-label"],re={__name:"MenuButton",props:{label:{type:String,default(){return"Menu Open/Close"}}},setup(e){const o=D(),n=Q(),u=m(()=>n.isModalOpened("menu")),a=m(()=>o.toggleDirection);function r(){n.toggleModal({name:"menu"})}return(f,i)=>(M(),O(V,{name:"button-toggle"},{default:p(()=>[a.value?I("",!0):(M(),E("button",{key:0,class:x(["page-menu-button",{selected:u.value}]),"aria-label":e.label,onClick:r},[g("i",null,[d(l(ae))])],10,se))]),_:1}))}},le={__name:"default",async setup(e){let o,n;const u=$(()=>b(()=>import("./BxhVD5_D.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url)),a=j(()=>b(()=>import("./DvEyMbtj.js"),__vite__mapDeps([13,2,3,4,5,6,1,7,8,9,14,10,11,15,16,17,18,19,20]),import.meta.url)),r=h(!0);function f(){r.value=!1,document.querySelector(".page-menu").dispatchEvent(new CustomEvent("hydrate"))}const{locale:i}=A(),{data:t}=([o,n]=T(()=>G(`layout-data-${i.value}`,()=>B("layout",i.value).findOne(),{watch:[i]})),o=await o,n(),o),c=h(null);q(async()=>{const{directionDetectionObserver:v}=await b(async()=>{const{directionDetectionObserver:s}=await import("./BujOvF_k.js");return{directionDetectionObserver:s}},__vite__mapDeps([21,22]),import.meta.url),{Subscription:S}=await b(async()=>{const{Subscription:s}=await import("./C6yQwbtC.js");return{Subscription:s}},[],import.meta.url);c.value=new S,c.value.add(v.subscribe(P))}),R(()=>{c.value.unsubscribe()});const _=D();function P(v,S=!1){S?_.toggleScrollDirection(!1):_.toggleScrollDirection(v>0)}return(v,S)=>(M(),O(l(K),null,{before:p(()=>{var s;return[d(l(Y),C((s=l(t))==null?void 0:s.components.pageHeader,{sticky:""}),null,16)]}),default:p(()=>{var s,w;return[d(l(a),C({class:"page-menu"},(s=l(t))==null?void 0:s.components.pageMenu,{opened:!r.value}),null,16,["opened"]),d(l(re),C((w=l(t))==null?void 0:w.components.pageMenuButton,{onClick:f}),null,16),z(v.$slots,"default")]}),after:p(()=>{var s;return[d(l(u),N(F((s=l(t))==null?void 0:s.components.pageFooter)),null,16)]}),_:3}))}},ge=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));export{ge as _,Q as a,D as u};
