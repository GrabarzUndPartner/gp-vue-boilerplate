import{B as y}from"./YsUTsUeh.js";import{_ as f,a9 as h,o,k as _,l as p,r,aa as u,e as l,I as d,J as m,n as s,K as i,G as b,m as $,F as k}from"./BFbNfJ5c.js";import{u as g}from"./DjTjvGCt.js";import{_ as S}from"./Cjk7UZVT.js";const L={key:0,class:"overline"},w={key:1,class:"headline"},R={key:2,class:"subline"},B={__name:"Headline",props:{tag:{type:String,default:"h1"},overline:{type:String,default:"Lorem Overline"},content:{type:String,default:"Lorem Headline"},subline:{type:String,default:"Lorem Subline"}},setup(e){const{$getFont:n}=g();return(t,c)=>{const a=h("font");return o(),_(s(y),{class:"element-headline"},{default:p(()=>[r(t.$slots,"default",{},()=>[t.$slots.overline||e.overline?u((o(),l("span",L,[r(t.$slots,"overline-slot",{},()=>[d(m(e.overline),1)],!0)])),[[a,s(n)("Raleway")]]):i("",!0),t.$slots.default||e.content?u((o(),l("span",w,[r(t.$slots,"headline-slot",{},()=>[d(m(e.content),1)],!0)])),[[a,s(n)("Roboto Slab",700)]]):i("",!0),t.$slots.subline||e.subline?u((o(),l("span",R,[r(t.$slots,"subline-slot",{},()=>[d(m(e.subline),1)],!0)])),[[a,s(n)("Raleway",700)]]):i("",!0)],!0)]),_:3})}}},H=f(B,[["__scopeId","data-v-f79f79e3"]]),x={class:"element-rich-text"},A=["innerHTML"],T={__name:"RichText",props:{content:{type:String,required:!1,default:"Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href='https://grabarzundpartner.de'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}},setup(e){const{$getFont:n}=g();return(t,c)=>{const a=h("font");return u((o(),l("div",x,[t.$slots.default?i("",!0):(o(),l("div",{key:0,innerHTML:e.content},null,8,A)),r(t.$slots,"default",{},void 0,!0)])),[[a,[s(n)("Raleway"),s(n)("Raleway",700,"normal",{selector:"strong"}),s(n)("Raleway",400,"italic",{selector:"em"})]]])}}},C=f(T,[["__scopeId","data-v-500e2922"]]),I={__name:"Content",props:{headline:{type:Object,default(){return{overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"}}},content:{type:String,default(){return"<p>Example Text</p>"}}},setup(e){return(n,t)=>{const c=H,a=C,v=S;return o(),_(v,{class:"fragment-article"},{header:p(()=>[e.headline?(o(),_(c,b($({key:0},e.headline)),null,16)):i("",!0)]),default:p(()=>[r(n.$slots,"default",{},()=>[k(a,{content:e.content},null,8,["content"])])]),_:3})}}};export{I as _};