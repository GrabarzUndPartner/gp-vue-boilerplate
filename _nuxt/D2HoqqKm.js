import{_ as R}from"./UyN3jYML.js";import{o as r,e as l,O as m,_ as S,f as s,c as o,a7 as M,a as V,i as b,V as I,F as d,l as T,m as p,U as j,T as z,n as v,K as A,ac as L}from"./CV75n9Ez.js";import{_ as N}from"./BOiCO4tv.js";const U={xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},F=m("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16M9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664z","clip-rule":"evenodd"},null,-1),O=[F];function E(n,e){return r(),l("svg",U,[...O])}const K={render:E},$={__name:"ResponsiveVideo",props:{poster:{type:Object,required:!1,default(){return{title:"Text Image",alt:"Text Image",sources:[{src:"/img/sample-a-16-9.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]}}},sources:{type:Array,required:!1,default(){return[{type:"video/mp4",src:"/video/9_16/BigBuckBunny_9_16.mp4",media:"all and (max-width:575px)"},{type:"video/mp4",src:"/video/16_9/BigBuckBunny_16_9.mp4",media:"all and (min-width:576px)"}]}},autoplay:{type:Boolean,required:!1,default(){return!1}},muted:{type:Boolean,required:!1,default(){return!1}},loop:{type:Boolean,required:!1,default(){return!1}},controls:{type:Boolean,required:!1,default(){return!0}},playsinline:{type:Boolean,required:!1,default(){return!1}},preload:{type:String,required:!1,default(){return"none"}}},setup(n){const e=n,u=s(!1),i=s(!1),f=s(!1),_=o(()=>({playsinline:e.playsinline,preload:e.preload,loop:e.loop,controls:e.controls,muted:e.muted})),y=o(()=>({started:f.value,playing:i.value})),x=o(()=>e.sources.map(t=>{let a=t.src;return/^\/[^/]+/.test(a)&&(a=M(V().app.baseURL,a)),{...t,src:a}})),w=o(()=>u.value?[]:x.value.filter(t=>g(t.media))),c=s(null);b(()=>{u.value=!1,I(()=>{e.autoplay&&c.value.play()})});function g(t){return u.value?!0:t&&window.matchMedia(t).matches}function B(){c.value.play()}function h(){f.value=i.value=!0}function k(){i.value=!1}return(t,a)=>{const q=R;return r(),l("div",{class:L(["element-responsive-video",y.value])},[d(q,null,{default:T(()=>[m("video",p({ref_key:"videoRef",ref:c},_.value,{onPlay:h,onPause:k}),[(r(!0),l(j,null,z(w.value,(C,P)=>(r(),l("source",p({key:P,ref_for:!0},C),null,16))),128))],16)]),_:1}),d(v(N),p(n.poster,{class:"poster"}),null,16),n.autoplay?A("",!0):(r(),l("span",{key:0,class:"play-button",onClick:B},[d(v(K))]))],2)}}},J=S($,[["__scopeId","data-v-0839e029"]]);export{J as _};
