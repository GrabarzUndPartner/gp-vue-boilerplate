const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CxVGZQrV.js","./Ot5TeaXS.js","./o0rgd9nA.js","./Cuirnaoe.js","./B4RdgG52.js","./D76WrNzC.js","./entry.CXeSEdd5.css","./CTLjel6x.js","./BIp_OXlx.js","./LinkList.husJzA3_.css","./CeK0zJn4.js","./LostContainer.z6PENh0k.css","./Footer.CR_LwV7_.css","./HvSiV655.js","./BO1KAPzs.js","./qS4lFqUb.js","./ContentContainer.CRAlIpSc.css","./IrmWPtpb.js","./BbXme8YB.js","./2BhqPTNL.js","./Menu.COAuMpwb.css","./CmjkkL9_.js","./Dy4ma93A.js"])))=>i.map(i=>d[i]);
import{_ as D}from"./D76WrNzC.js";import{_ as L}from"./qS4lFqUb.js";import{_ as H}from"./o0rgd9nA.js";import{_ as I}from"./CeK0zJn4.js";import{aq as k,f as M,c as f,_ as V,a8 as $,o as S,k as O,l as g,O as p,F as m,n as l,I as A,ab as x,e as B,K as T,ap as q,am as R,Q as z,i as N,B as F,ar as j,m as C,r as G,G as K,H as Q,as as U}from"./B4RdgG52.js";import{q as J}from"./IrmWPtpb.js";import{u as W}from"./2BhqPTNL.js";const P=k("layout",()=>{const e=M(!1),t=M(!1);return{preventScrolling:e,scrollDirection:t,togglePreventScrolling:a=>{let c=!e.value;a!==void 0&&(c=a),e.value=c},toggleScrollDirection:a=>{t.value=a}}}),X=k("modal",()=>{const e=M([]),t=P(),n=o=>{e.value.push(o)},i=o=>{e.value.splice(e.value.indexOf(y(e,o)),1)},a=({name:o})=>{const s=y(e,o);s&&(s.opened=!1),t.togglePreventScrolling(!!e.value.find(u=>u.opened))},c=({name:o,flag:s})=>{const u=y(e,o);u&&(u.opened=s!==void 0?s:!u.opened),t.togglePreventScrolling(!!e.value.find(b=>b.opened))},_=f(()=>o=>y(e,o)),d=f(()=>o=>(y(e,o)||{opened:!1}).opened);return{modals:e,isModalOpened:d,getModal:_,registerModal:n,unregisterModal:i,toggleModal:c,closeModal:a}});function y(e,t){return e.value.find(n=>n.name===t)}const Y={class:"logo"},Z={__name:"Header",props:{sticky:{type:Boolean,required:!1}},setup(e){const t=P(),n=$(),i=e,a=f(()=>t.scrollDirection),c=f(()=>({toggle:a.value,sticky:i.sticky}));return(_,d)=>{const o=H,s=I;return S(),O(s,{class:x(["page-header",c.value]),tag:"header"},{container:g(()=>[p("div",Y,[m(o,{to:l(n)({path:"/"})},{default:g(()=>d[0]||(d[0]=[A(" Logo ")])),_:1},8,["to"])])]),_:1},8,["class"])}}},ee=V(Z,[["__scopeId","data-v-dec09cb7"]]),te={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 100 100"};function oe(e,t){return S(),B("svg",te,t[0]||(t[0]=[p("g",null,[p("path",{d:"M93.3 24.8H6.7a6.7 6.7 0 0 1 0-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7M93.3 54.8H6.7a6.7 6.7 0 0 1 0-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7M93.3 84.8H6.7a6.7 6.7 0 0 1 0-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7"})],-1),p("g",null,[p("path",{d:"M59.6 50 98 11.6c2.7-2.7 2.7-7 0-9.6-2.7-2.7-7-2.7-9.6 0L50 40.4 11.6 2C8.9-.7 4.6-.7 2 2-.7 4.7-.7 9 2 11.6L40.4 50 2 88.4c-2.7 2.7-2.7 7 0 9.6 2.7 2.7 7 2.7 9.6 0L50 59.6 88.4 98c2.7 2.7 7 2.7 9.6 0 2.7-2.7 2.7-7 0-9.6z"})],-1)]))}const ne={render:oe},ae=["aria-label"],se={__name:"MenuButton",props:{label:{type:String,default(){return"Menu Open/Close"}}},setup(e){const t=P(),n=X(),i=f(()=>n.isModalOpened("menu")),a=f(()=>t.toggleDirection);function c(){n.toggleModal({name:"menu"})}return(_,d)=>(S(),O(q,{name:"button-toggle"},{default:g(()=>[a.value?T("",!0):(S(),B("button",{key:0,class:x(["page-menu-button",{selected:i.value}]),"aria-label":e.label,onClick:c},[p("i",null,[m(l(ne))])],10,ae))]),_:1}))}},re={__name:"default",async setup(e){let t,n;const a=j()(()=>D(()=>import("./CxVGZQrV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url)),c=U(()=>D(()=>import("./HvSiV655.js"),__vite__mapDeps([13,2,3,4,5,6,1,7,8,9,14,10,11,15,16,17,18,19,20]),import.meta.url)),_=M(!0);function d(){_.value=!1,document.querySelector(".page-menu").dispatchEvent(new CustomEvent("hydrate"))}const{locale:o}=R(),{data:s}=([t,n]=z(()=>W(`layout-data-${o.value}`,()=>J("layout",o.value).findOne(),{watch:[o]})),t=await t,n(),t),u=M(null);N(async()=>{const{directionDetectionObserver:v}=await D(async()=>{const{directionDetectionObserver:r}=await import("./CmjkkL9_.js");return{directionDetectionObserver:r}},__vite__mapDeps([21,22]),import.meta.url),{Subscription:h}=await D(async()=>{const{Subscription:r}=await import("./Dy4ma93A.js");return{Subscription:r}},[],import.meta.url);u.value=new h,u.value.add(v.subscribe(E))}),F(()=>{u.value.unsubscribe()});const b=P();function E(v,h=!1){h?b.toggleScrollDirection(!1):b.toggleScrollDirection(v>0)}return(v,h)=>(S(),O(l(L),null,{before:g(()=>{var r;return[m(l(ee),C((r=l(s))==null?void 0:r.components.pageHeader,{sticky:""}),null,16)]}),default:g(()=>{var r,w;return[m(l(c),C({class:"page-menu"},(r=l(s))==null?void 0:r.components.pageMenu,{opened:!_.value}),null,16,["opened"]),m(l(se),C((w=l(s))==null?void 0:w.components.pageMenuButton,{onClick:d}),null,16),G(v.$slots,"default")]}),after:g(()=>{var r;return[m(l(a),K(Q((r=l(s))==null?void 0:r.components.pageFooter)),null,16)]}),_:3}))}},me=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{me as _,X as a,P as u};
