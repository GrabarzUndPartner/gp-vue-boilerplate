import{c as l,d as y,r as v,K as w,b as z,v as k,h as N,a as m,af as _,S as A,a4 as B,n as I,y as C,k as h,J as j}from"./DNr4lprF.js";import{p as u,u as S}from"./CRnDRioN.js";import"./DZigvJJo.js";function q(e){var i;(i=performance==null?void 0:performance.mark)==null||i.call(performance,"mark_feature_usage",{detail:{feature:e}})}const x={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},L=e=>{const i=l(()=>({provider:e.provider,preset:e.preset})),a=l(()=>({width:u(e.width),height:u(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=S(),s=l(()=>({...e.modifiers,width:u(e.width),height:u(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:i,attrs:a,modifiers:s}},P={...x,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},O=y({name:"NuxtImg",props:P,emits:["load","error"],setup:(e,i)=>{const a=S(),r=L(e),s=v(!1),n=v(),o=l(()=>a.getSizes(e.src,{...r.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...r.modifiers.value,width:u(e.width),height:u(e.height)}})),b=l(()=>{const t={...r.attrs.value,"data-nuxt-img":""};return(!e.placeholder||s.value)&&(t.sizes=o.value.sizes,t.srcset=o.value.srcset),t}),c=l(()=>{let t=e.placeholder;if(t===""&&(t=!0),!t||s.value)return!1;if(typeof t=="string")return t;const d=Array.isArray(t)?t:typeof t=="number"?[t,t]:[10,10];return a(e.src,{...r.modifiers.value,width:d[0],height:d[1],quality:d[2]||50,blur:d[3]||3},r.options.value)}),g=l(()=>e.sizes?o.value.src:a(e.src,r.modifiers.value,r.options.value)),f=l(()=>c.value?c.value:g.value);if(e.preload){const t=Object.values(o.value).every(d=>d);w({link:[{rel:"preload",as:"image",nonce:e.nonce,...t?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:f.value},...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}}]})}const p=z().isHydrating;return k(()=>{if(c.value){const t=new Image;t.src=g.value,e.sizes&&(t.sizes=o.value.sizes||"",t.srcset=o.value.srcset),t.onload=d=>{s.value=!0,i.emit("load",d)},q("nuxt-image");return}n.value&&(n.value.complete&&p&&(n.value.getAttribute("data-error")?i.emit("error",new Event("error")):i.emit("load",new Event("load"))),n.value.onload=t=>{i.emit("load",t)},n.value.onerror=t=>{i.emit("error",t)})}),()=>N("img",{ref:n,...b.value,...i.attrs,class:e.placeholder&&!s.value?[e.placeholderClass]:void 0,src:f.value})}}),H=y({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const i=m().public.mdc.useNuxtImage?O:"img",a=e,r=l(()=>{var s;if((s=a.src)!=null&&s.startsWith("/")&&!a.src.startsWith("//")){const n=_(A(m().app.baseURL));if(n!=="/"&&!a.src.startsWith(n))return B(n,a.src)}return a.src});return(s,n)=>(I(),C(j(h(i)),{src:h(r),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{H as default};
