import n from"./CFHQ-djs.js";import{d as c,u as l,h as p}from"./CsR5ygFy.js";import"./BhbJ0d0o.js";import"./D761UEt8.js";import"./D-qMblDg.js";import"./B9IDbHjk.js";const u=(r,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),h=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:f,query:o}=r,m={...o||{},path:f||(o==null?void 0:o.path)||"/"};return p(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):u("not-found",e==null?void 0:e.data)}})}}),q=h;export{q as default};