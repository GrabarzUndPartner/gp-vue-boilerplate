(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,e,r){var content=r(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("69cdee36",content,!0,{sourceMap:!1})},112:function(t,e,r){var content=r(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("dd986f34",content,!0,{sourceMap:!1})},222:function(t,e,r){"use strict";(function(t,n){r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return h}));var o=r(19);const c=["avif","webp","png","jpg","gif"],l=t=>{const{pathname:e}=Object(o.i)(t),r=/[.]/.exec(e)&&/[^.]+$/.exec(e)[0];return c.includes(r)?r:"jpg"},h=async(source,e,c)=>{if(t.Image){source=source.modify({src:e});const r=await new Promise((e=>{const img=new t.Image;img.onload=()=>e(img),img.src=source.src}));return source.modify({width:r.naturalWidth,height:r.naturalHeight})}{let t=e;Object.entries(c||{}).length&&(t=Object.entries(c||{}).find((([,e])=>e.endsWith(t)))[0]),source=source.modify({src:Object(o.f)(n.env.NUXT_SPEEDKIT_INTERAL_URL,t)});const l=await fetch(source.src),h=(await r.e(13).then(r.t.bind(null,252,7))).default,{width:d,height:m}=h(await l.buffer());return source.modify({width:d,height:m})}}}).call(this,r(1),r(39))},223:function(t,e,r){"use strict";r(111)},224:function(t,e,r){var n=r(7)((function(i){return i[1]}));n.push([t.i,"\n.nuxt-speedkit-image[data-v-57afda4f]{content-visibility:auto;display:block;width:100%;height:auto;object-fit:cover}",""]),n.locals={},t.exports=n},225:function(t,e){const r=/(!?\(\s*min(-device-)?-width)(.|\n)+\(\s*max(-device)?-width/i,n=/(!?\(\s*max(-device)?-width)(.|\n)+\(\s*min(-device)?-width/i,o=x(r,n,/\(\s*min(-device)?-width/i),c=x(n,r,/\(\s*max(-device)?-width/i),l=/(!?\(\s*min(-device)?-height)(.|\n)+\(\s*max(-device)?-height/i,h=/(!?\(\s*max(-device)?-height)(.|\n)+\(\s*min(-device)?-height/i,d=x(l,h,/\(\s*min(-device)?-height/i),m=x(h,l,/\(\s*max(-device)?-height/i),f=/print/i,y=/^print$/i,v=Number.MAX_VALUE;function w(t){if(null===(t=/(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(t)))return v;let e=t[1];switch(t[2]){case"ch":e=8.8984375*parseFloat(e);break;case"em":case"rem":e=16*parseFloat(e);break;case"ex":e=8.296875*parseFloat(e);break;case"px":e=parseFloat(e)}return+e}function x(t,e,r){return function(n){return!!t.test(n)||!e.test(n)&&r.test(n)}}function O(a,b){const t=f.test(a),e=y.test(a),r=f.test(b),n=y.test(b);return t&&r?!e&&n?1:e&&!n?-1:a.localeCompare(b):t?1:r?-1:null}t.exports=function(t){const e=(t||{}).unitlessMqAlwaysFirst;function r(a,b){const t=O(a,b);if(null!==t)return t;const r=o(a)||d(a),n=c(a)||m(a),l=o(b)||d(b),h=c(b)||m(b);if(!e||(r||n)&&(l||h)){if(r&&h)return-1;if(n&&l)return 1;const t=w(a),e=w(b);return t===v&&e===v?a.localeCompare(b):t===v?1:e===v?-1:t>e?n?-1:1:t<e?n?1:-1:a.localeCompare(b)}return r||n||l||h?l||h?-1:1:a.localeCompare(b)}return r.desktopFirst=function(a,b){const t=O(a,b);if(null!==t)return t;const r=o(a)||d(a),n=c(a)||m(a),l=o(b)||d(b),h=c(b)||m(b);if(!e||(r||n)&&(l||h)){if(r&&h)return 1;if(n&&l)return-1;const t=w(a),e=w(b);return t===v&&e===v?a.localeCompare(b):t===v?1:e===v?-1:t>e?n?-1:1:t<e?n?1:-1:-a.localeCompare(b)}return r||n||l||h?l||h?-1:1:a.localeCompare(b)},r}},226:function(t,e,r){"use strict";r(112)},227:function(t,e,r){var n=r(7)((function(i){return i[1]}));n.push([t.i,'\n.nuxt-speedkit-picture[data-v-3b19115a]{position:relative;box-sizing:border-box;display:block;width:100%}.nuxt-speedkit-picture img[data-v-3b19115a]{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.nuxt-speedkit-picture[data-v-3b19115a]:before{position:relative;box-sizing:border-box;display:block;content:""}@supports (aspect-ratio:1){.nuxt-speedkit-picture[data-v-3b19115a]{position:unset}.nuxt-speedkit-picture img[data-v-3b19115a]{position:unset;top:unset;right:unset;bottom:unset;left:unset}.nuxt-speedkit-picture[data-v-3b19115a]:before{display:none}}',""]),n.locals={},t.exports=n},28:function(t,e,r){"use strict";var n=r(41),o=r(21),c=r(222);function l(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var h=0;function d(t){return"__private_"+h+++"_"+t}var m=d("src"),f=d("sizes"),y=d("media"),v=d("width"),w=d("height"),x=d("format"),O=d("quality"),j=d("preload"),$=d("modifiers"),S=d("provider"),k=d("preset");class N{constructor({src:t,sizes:e,width:r,height:n,media:o="all",quality:c=70,format:h=null,preload:d=!1,modifiers:N={},provider:_,preset:z}){Object.defineProperty(this,m,{writable:!0,value:null}),Object.defineProperty(this,f,{writable:!0,value:null}),Object.defineProperty(this,y,{writable:!0,value:null}),Object.defineProperty(this,v,{writable:!0,value:null}),Object.defineProperty(this,w,{writable:!0,value:null}),Object.defineProperty(this,x,{writable:!0,value:null}),Object.defineProperty(this,O,{writable:!0,value:null}),Object.defineProperty(this,j,{writable:!0,value:!1}),Object.defineProperty(this,$,{writable:!0,value:{}}),Object.defineProperty(this,S,{writable:!0,value:void 0}),Object.defineProperty(this,k,{writable:!0,value:void 0}),l(this,m)[m]=t,l(this,f)[f]=e,l(this,y)[y]=o,l(this,v)[v]=r,l(this,w)[w]=n,l(this,x)[x]=h,l(this,O)[O]=c,l(this,j)[j]=d,l(this,$)[$]=N,l(this,S)[S]=_,l(this,k)[k]=z}get key(){return Object(o.a)(JSON.stringify(this.toJSON()))}get src(){return l(this,m)[m]}get sizes(){return l(this,f)[f]}get media(){return l(this,y)[y]}get width(){return l(this,v)[v]}get height(){return l(this,w)[w]}get ratio(){return l(this,v)[v]/l(this,w)[w]}get format(){var t;const e=Object(c.a)(l(this,m)[m]);return null!=(t=l(this,x)[x])&&t.includes(e)?e:l(this,x)[x]||e}get quality(){return l(this,O)[O]}get preload(){return l(this,j)[j]}get modifiers(){return l(this,$)[$]}get provider(){return l(this,S)[S]}get preset(){return l(this,k)[k]}get className(){return`image-${Object(o.a)(this.src)}`}get style(){return`\n      @supports (aspect-ratio: 1) {\n        @media ${this.media} { .${this.className} { aspect-ratio: ${this.width} / ${this.height}; } }\n      }\n    `}getModifiers(){return Object.assign({},this.modifiers,{format:this.format,quality:this.quality})}getOptions(){return{provider:this.provider,preset:this.preset}}getMeta(t,e){return Object(c.b)(new N(Object.assign({},this.toJSON())),t,e)}getPreload(t,e,r){return{rel:"preload",as:"image",imagesrcset:t,imagesizes:e,media:this.media,crossorigin:r}}modify(t){return new N(Object.assign({},this.toJSON(),t))}toJSON(){return{src:l(this,m)[m],sizes:l(this,f)[f],media:l(this,y)[y],width:l(this,v)[v],height:l(this,w)[w],format:l(this,x)[x],quality:l(this,O)[O],preload:l(this,j)[j],modifiers:l(this,$)[$],provider:l(this,S)[S],preset:l(this,k)[k]}}static create(...t){return new this(...t)}}var _=r(46),z={inheritAttrs:!1,props:{source:{type:[N,Object],default:null},title:{type:String,required:!0},alt:{type:String,default:null},loadingSpinner:{type:_.a,default(){return this.$speedkit.loader()}}},data:()=>({className:null,loading:!0,config:null,meta:null}),fetchKey(){var t;return this.source?`image-${null==(t=new N(this.source))?void 0:t.key}`:"image"},async fetch(){if(this.source){var t;const source=new N(this.source);this.config=this.$img.getSizes(source.src,Object.assign({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions()));const{ssrContext:e}=this.$nuxt.context;this.meta=await source.getMeta(this.config.src,(null==e||null==(t=e.nuxt)?void 0:t._img)||{}),this.className=this.meta.className}},head(){return{style:this.style,link:this.preload,noscript:[{hid:"img-nojs",innerHTML:"<style>img { content-visibility: unset !important; }</style>"}],__dangerouslyDisableSanitizers:["noscript"]}},computed:{classNames(){const t=[{loading:this.loading}].concat(this.className);return this.loadingSpinner&&t.push(this.loadingSpinner.className),t},srcset(){var t,e;return(null==(t=this.config)?void 0:t.srcset)||(null==(e=this.config)?void 0:e.src)},sizes(){var t;return null==(t=this.config)?void 0:t.sizes},width(){var t;return this.$attrs.width||(null==(t=this.meta)?void 0:t.width)},height(){var t;return this.$attrs.height||(null==(t=this.meta)?void 0:t.height)},loadingMode(){return this.isCritical?"eager":"lazy"},decodingMode(){return this.source&&"svg"===new N(this.source).format?"sync":"async"},style(){return[this.loadingSpinner&&{hid:this.loadingSpinner.className,type:"text/css",cssText:this.loadingSpinner.style},this.meta&&{hid:this.className,type:"text/css",cssText:new N(this.meta).style}].filter(Boolean)},preload(){return this.config&&this.isCritical?[new N(this.source).getPreload(this.config.srcset,this.config.sizes)]:[]}},mounted(){this.loading=!this.$el.complete},methods:{onLoad(t){this.loading=!1,this.$emit("load",t.target.currentSrc)}}},M=(r(223),r(6)),P=Object(M.a)(z,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",t._g(t._b({staticClass:"nuxt-speedkit-image",class:t.classNames,attrs:{srcset:t.srcset,sizes:t.sizes,width:t.width,height:t.height,title:t.title,alt:t.alt||t.title,loading:t.loadingMode,decoding:t.decodingMode,crossorigin:t.$speedkit.crossorigin}},"img",t.$attrs,!1),Object.assign({},t.$listeners,{load:t.onLoad})))}),[],!1,null,"57afda4f",null).exports,C=r(225);let L;function A(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var E=0;function F(t){return"__private_"+E+++"_"+t}const T=r.n(C)()();var J=F("list");L=Symbol.iterator;class I{constructor(t){Object.defineProperty(this,J,{writable:!0,value:[]}),A(this,J)[J]=A(this,J)[J].concat(Array.from(t||A(this,J)[J]).map((t=>new N(t))))}[L](){return A(this,J)[J].values()}get key(){return A(this,J)[J].map((source=>source.key)).join("-")}get list(){return A(this,J)[J]}get sorted(){return A(this,J)[J].sort(((a,b)=>T(a.media,b.media)))}get style(){return A(this,J)[J].map((({media:t,width:e,height:r,style:n})=>`\n      @media ${t} { .${this.className}::before { padding-top: calc((1 / (${e} / ${r})) * 100%); } }\n      @supports (aspect-ratio: 1) {\n        @media ${t} { .${this.className} { aspect-ratio: ${e} / ${r}; } }\n      }\n      ${n}\n    `)).reverse().join(" ")}get className(){return`picture-${Object(o.a)(this.sorted.map((({src:t})=>t)).join(","))}`}get classNames(){return{picture:this.className,image:A(this,J)[J].map((source=>source.className))}}getFormats(t,e,r){return this.sorted.reduce(((n,source)=>n.concat(t.map((t=>source.modify({format:t,preload:t.includes(e)&&r}))))),[])}async getMeta(t,e){const r=await Promise.all(this.sorted.map((source=>{var r;const n=t.getSizes(source.src,Object.assign({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions()));return source.getMeta(n.src,null==e||null==(r=e.nuxt)?void 0:r._img)})));return new I(r)}toJSON(){return A(this,J)[J]}static create(...t){return new this(...t)}}const B=new Map([["jpg","jpeg"]]);var K={props:{source:{type:N,required:!0}},data:()=>({config:null}),fetchKey(){return`source-${this.source.key}`},fetch(){this.config=this.$img.getSizes(this.source.src,Object.assign({sizes:this.source.sizes,modifiers:this.source.getModifiers()},this.source.getOptions()))},head(){const t=new N(this.source);return this.config&&t.preload?{link:[t.getPreload(this.config.srcset,this.config.sizes,this.$speedkit.crossorigin)]}:{}},computed:{srcset(){return this.config.srcset||this.config.src},type(){return`image/${B.get(this.source.format)||this.source.format}`}}},U=Object(M.a)(K,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("source",{attrs:{srcset:t.srcset,sizes:t.config.sizes,media:t.source.media,type:t.type}})}),[],!1,null,null,null).exports;const D=["avif","webp","png","jpg","gif"];var H={components:{PictureSource:U,BaseImage:P},props:{sources:{type:[Array,I],required:!0},formats:{type:Array,default(){return this.$speedkit.targetFormats}},loadingSpinner:{type:_.a,default:void 0},title:{type:String,default:null},alt:{type:String,default:null}},data:()=>({metaSources:{},classNames:{}}),async fetch(){const{ssrContext:t}=this.$nuxt.context;this.metaSources=await this.sourceList.getMeta(this.$img,t),this.classNames=this.metaSources.classNames},head(){return{style:this.style}},fetchKey(){return`picture-${this.sourceList.key}`},computed:{sourceList(){return I.create(this.sources)},formatSources(){const t=Array.from(new Set(D.map((t=>this.formats.find((e=>e.includes(t))))))).filter(Boolean),e=D.find((t=>this.formats.find((e=>e.includes(t)))));return this.sourceList.getFormats(t,e,this.isCritical)},style(){if(!this.metaSources)return[];const t=this.metaSources.length&&new I(this.metaSources)||this.metaSources;return[{hid:this.classNames.picture,type:"text/css",cssText:t.style}]}},methods:{onLoad(t){this.$emit("load",t)}}},R=(r(226),Object(M.a)(H,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{staticClass:"nuxt-speedkit-picture",class:t.classNames.picture},[t._l(t.formatSources,(function(source){return r("picture-source",{key:source.key,attrs:{source:source}})})),t._v(" "),r("base-image",{class:t.classNames.image,attrs:{title:t.title,alt:t.alt,"loading-spinner":t.loadingSpinner,width:"0",height:"0"},on:{load:t.onLoad}})],2)}),[],!1,null,"3b19115a",null).exports),W={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render(t){return this.hydrate?t(R,{props:Object.assign({},this.$attrs,{critical:this.isCritical}),on:this.$listeners}):t(n.a,{props:{never:!0}},[t("noscript",{class:"nuxt-speedkit-picture-noscript"},[t(R,{props:Object.assign({},this.$attrs,{critical:this.hydrate}),on:this.$listeners})])])}},X=Object(M.a)(W,undefined,undefined,!1,null,null,null);e.a=X.exports}}]);