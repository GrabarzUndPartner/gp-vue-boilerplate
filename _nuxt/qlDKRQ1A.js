const __vite__fileDeps=["./TwMvRj5k.js","./Daz8ghuc.js","./B4HnVoib.js","./entry.BKSDtjdj.css","./BwNkzkWK.js","./DLgXdXGp.js","./C-v3KzvZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as m}from"./CrsMRjpH.js";import{_ as v}from"./B4HnVoib.js";import{b as d,f as l,ad as g,a as y,d as h,t as _,c as w,u as C,h as p}from"./Daz8ghuc.js";import{h as f,u as P}from"./DLgXdXGp.js";import{q as $,w as c,e as x,s as N,j as E,u as T}from"./BwNkzkWK.js";import{_ as b}from"./Bu19xH1W.js";const j="$s";function S(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=j+n,r=d(),i=l(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(g(s))return r.payload.state[a]=s,s;i.value=s}return i}const D=async t=>{const{content:e}=y().public;typeof(t==null?void 0:t.params)!="function"&&(t=$(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${x(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(N())return(await v(()=>import("./TwMvRj5k.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:E(n),previewToken:P().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},R=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=_(t),n=w(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&S("dd-navigation").value){const{navigation:a}=T();return{navigation:a}}const{data:o}=await m(`content-navigation-${f(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=C(),{navigation:n}=t,o=i=>p(b,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),V=R;export{V as default};
