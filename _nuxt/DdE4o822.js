import{_ as f}from"./LYWhYbA_.js";import{d as l,w as s,u as d,h as c}from"./Daz8ghuc.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./DLgXdXGp.js";import"./B4HnVoib.js";const $=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,i,u;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(i=t==null?void 0:t.value)==null?void 0:i._path}.${(u=t==null?void 0:t.value)==null?void 0:u._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var a,o;const n=d(),{value:e,excerpt:i,tag:u}=t,r=i?e==null?void 0:e.excerpt:e==null?void 0:e.body;return!((a=r==null?void 0:r.children)!=null&&a.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:i,tag:u,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:i,tag:u,...this.$attrs}):(r==null?void 0:r.type)==="root"&&((o=r==null?void 0:r.children)!=null&&o.length)?c(f,{value:e,excerpt:i,tag:u,...this.$attrs}):c("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:i,tag:u},null,2))}});export{$ as default};
