import{_ as k}from"./Cjk7UZVT.js";import{s as x,P as C,Q as w,N as B,k as u,o as a,l as _,e as f,R as d,n as h,S as y,F as M,M as g,m as P}from"./BFbNfJ5c.js";import{q}from"./Bmm7VM1P.js";import"./DP45TdIg.js";import"./jFQZix2f.js";function F(){const r=x(),e=C({});return{fetch:async()=>{try{const t=I(r.path).replace("/index",""),{title:c,components:o,i18nParams:l}=await q("pages",t).findOne();return e(l),{components:o,pageMeta:{title:c}}}catch(t){console.error(t)}}}}function I(r){return`${r||"index"}`}const D={__name:"[...slug]",async setup(r){let e,t;const{fetch:c}=F(),{components:o,pageMeta:l}=([e,t]=w(()=>c()),e=await e,t(),e);return B({title:()=>l.title}),(N,R)=>{const i=k;return a(),u(i,{class:"content"},{default:_(()=>{var m;return[(a(!0),f(y,null,d((m=h(o))==null?void 0:m.slice(0,1),(n,s)=>(a(),u(g(n.component),P({key:s,ref_for:!0},n.data,{critical:""}),null,16))),128)),M(i,null,{default:_(()=>{var n;return[(a(!0),f(y,null,d((n=h(o))==null?void 0:n.slice(1),(s,p)=>(a(),u(g(s.component),P({key:p,critical:p<1,ref_for:!0},s.data),null,16,["critical"]))),128))]}),_:1})]}),_:1})}}};export{D as default};