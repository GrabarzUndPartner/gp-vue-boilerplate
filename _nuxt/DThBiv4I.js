import{_ as x}from"./BegVi-Uh.js";import{s as P,R as C,S as w,N as B,k as u,o as a,l as _,e as f,T as d,n as h,U as y,F as M,M as g,m as k}from"./CsR5ygFy.js";import{q}from"./D761UEt8.js";import"./D-qMblDg.js";import"./B9IDbHjk.js";function F(){const r=P(),e=C({});return{fetch:async()=>{try{const t=I(r.path).replace("/index",""),{title:c,components:o,i18nParams:l}=await q("pages",t).findOne();return e(l),{components:o,pageMeta:{title:c}}}catch(t){console.error(t)}}}}function I(r){return`${r||"index"}`}const D={__name:"[...slug]",async setup(r){let e,t;const{fetch:c}=F(),{components:o,pageMeta:l}=([e,t]=w(()=>c()),e=await e,t(),e);return B({title:()=>l.title}),(N,R)=>{const i=x;return a(),u(i,{class:"content"},{default:_(()=>{var m;return[(a(!0),f(y,null,d((m=h(o))==null?void 0:m.slice(0,1),(n,s)=>(a(),u(g(n.component),k({key:s,ref_for:!0},n.data,{critical:""}),null,16))),128)),M(i,null,{default:_(()=>{var n;return[(a(!0),f(y,null,d((n=h(o))==null?void 0:n.slice(1),(s,p)=>(a(),u(g(s.component),k({key:p,critical:p<1,ref_for:!0},s.data),null,16,["critical"]))),128))]}),_:1})]}),_:1})}}};export{D as default};