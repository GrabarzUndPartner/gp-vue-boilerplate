import{_}from"./CMNiDYwa.js";import{_ as v}from"./EBl5VjDG.js";import{c as b,n as c,y as p,z as r,q as a,L as i,a7 as g,k as d,A as n,B as u,C as m}from"./DNr4lprF.js";import{_ as x}from"./DnU9c9Rg.js";import{_ as h}from"./DKEWBEN0.js";import"./C7JRsKyW.js";import"./8PXCAZPU.js";import"./ClB08n8T.js";import"./DZigvJJo.js";import"./Bf_bBgyk.js";import"./CRnDRioN.js";const w={class:"lost-flex-container"},y={__name:"TwoColumnContainer",props:{options:{type:Object,default(){return{}}},mirror:{type:Boolean,default(){return!1}}},setup(e){const s=e,o=b(()=>({mirror:s.mirror}));return(t,l)=>(c(),p(d(v),{class:g(["layout-two-column-container",o.value]),visible:e.options.visible},{background:r(()=>[a(t.$slots,"background")]),container:r(()=>[i("div",w,[i("div",null,[a(t.$slots,"left")]),i("div",null,[a(t.$slots,"right")])])]),_:3},8,["class","visible"]))}},O={__name:"TextImage",props:{mirror:{type:Boolean,default:!1},overline:{type:String,default:"Text Image Overline"},headline:{type:String,default:"Text Image Headline"},subline:{type:String,default:"Text Image Subline"},content:{type:String,default:"<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>"},picture:{type:Object,required:!1,default(){return{sources:[{src:"/img/sample-a-16-9.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]}}}},setup(e){return(s,o)=>{const t=_,l=y,f=x;return c(),p(f,null,{default:r(()=>[n(l,{class:"organism-text-image",mirror:e.mirror},{left:r(()=>[n(d(h),u(m(e.picture)),null,16)]),right:r(()=>[n(t,u(m({headline:{overline:e.overline,headline:e.headline,subline:e.subline},content:e.content})),null,16)]),_:1},8,["mirror"])]),_:1})}}};export{O as default};
