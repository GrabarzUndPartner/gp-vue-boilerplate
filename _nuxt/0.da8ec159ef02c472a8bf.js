(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(t,e,r){var content=r(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("ff52ae56",content,!0,{sourceMap:!1})},119:function(t,e,r){var content=r(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("644fe1e2",content,!0,{sourceMap:!1})},234:function(t,e,r){"use strict";(function(t,n){r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return h}));var o=r(22);const c=["avif","webp","png","jpg","gif"],l=t=>{const{pathname:e}=Object(o.i)(t),r=/[.]/.exec(e)&&/[^.]+$/.exec(e)[0];return c.includes(r)?r:"jpg"},h=async(source,e,r)=>{if(t.Image)source=source.modify({src:e});else{let t=e;Object.entries(r||{}).length&&(t=Object.entries(r||{}).find((([,e])=>e.endsWith(t)))[0]),source=source.modify({src:Object(o.d)(t)?t:Object(o.j)(t,n.env.NUXT_SPEEDKIT_INTERAL_URL)})}const{width:c,height:l}=await t.nuxtSpeedkit_getImageSize(source.src);return source.modify({width:c,height:l})}}).call(this,r(2),r(45))},235:function(t,e,r){"use strict";r(118)},236:function(t,e,r){var n=r(8)((function(i){return i[1]}));n.push([t.i,".nuxt-speedkit-image[data-v-79fe3340]{content-visibility:auto;display:block;height:auto;object-fit:cover;width:100%}",""]),n.locals={},t.exports=n},237:function(t,e){const r=/(!?\(\s*min(-device-)?-width)(.|\n)+\(\s*max(-device)?-width/i,n=/(!?\(\s*max(-device)?-width)(.|\n)+\(\s*min(-device)?-width/i,o=x(r,n,/\(\s*min(-device)?-width/i),c=x(n,r,/\(\s*max(-device)?-width/i),l=/(!?\(\s*min(-device)?-height)(.|\n)+\(\s*max(-device)?-height/i,h=/(!?\(\s*max(-device)?-height)(.|\n)+\(\s*min(-device)?-height/i,d=x(l,h,/\(\s*min(-device)?-height/i),f=x(h,l,/\(\s*max(-device)?-height/i),m=/print/i,y=/^print$/i,v=Number.MAX_VALUE;function w(t){let e=/(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(t);if(null===e&&(o(t)||d(t))&&(e=/(\d)/.exec(t)),"0"===e)return 0;if(null===e)return v;let r=e[1];switch(e[2]){case"ch":r=8.8984375*parseFloat(r);break;case"em":case"rem":r=16*parseFloat(r);break;case"ex":r=8.296875*parseFloat(r);break;case"px":r=parseFloat(r)}return+r}function x(t,e,r){return function(n){return!!t.test(n)||!e.test(n)&&r.test(n)}}function O(a,b){const t=m.test(a),e=y.test(a),r=m.test(b),n=y.test(b);return t&&r?!e&&n?1:e&&!n?-1:a.localeCompare(b):t?1:r?-1:null}t.exports=function(t){const e=(t||{}).unitlessMqAlwaysFirst;function r(a,b){const t=O(a,b);if(null!==t)return t;const r=o(a)||d(a),n=c(a)||f(a),l=o(b)||d(b),h=c(b)||f(b);if(!e||(r||n)&&(l||h)){if(r&&h)return-1;if(n&&l)return 1;const t=w(a),e=w(b);return t===v&&e===v?a.localeCompare(b):t===v?1:e===v?-1:t>e?n?-1:1:t<e?n?1:-1:a.localeCompare(b)}return r||n||l||h?l||h?-1:1:a.localeCompare(b)}return r.desktopFirst=function(a,b){const t=O(a,b);if(null!==t)return t;const r=o(a)||d(a),n=c(a)||f(a),l=o(b)||d(b),h=c(b)||f(b);if(!e||(r||n)&&(l||h)){if(r&&h)return 1;if(n&&l)return-1;const t=w(a),e=w(b);return t===v&&e===v?a.localeCompare(b):t===v?1:e===v?-1:t>e?n?-1:1:t<e?n?1:-1:-a.localeCompare(b)}return r||n||l||h?l||h?-1:1:a.localeCompare(b)},r}},238:function(t,e,r){"use strict";r(119)},239:function(t,e,r){var n=r(8)((function(i){return i[1]}));n.push([t.i,'.nuxt-speedkit-picture[data-v-5cdfb38d]{box-sizing:border-box;display:block;position:relative;width:100%}.nuxt-speedkit-picture img[data-v-5cdfb38d]{bottom:0;box-sizing:border-box;left:0;position:absolute;right:0;top:0}.nuxt-speedkit-picture[data-v-5cdfb38d]:before{box-sizing:border-box;content:"";display:block;position:relative}@supports (aspect-ratio:1){.nuxt-speedkit-picture[data-v-5cdfb38d]{position:unset}.nuxt-speedkit-picture img[data-v-5cdfb38d]{bottom:unset;left:unset;position:unset;right:unset;top:unset}.nuxt-speedkit-picture[data-v-5cdfb38d]:before{display:none}}',""]),n.locals={},t.exports=n},33:function(t,e,r){"use strict";var n=r(79);function o(t,e){return t=void 0===(t=!0===t?"anonymous":t)?e||"anonymous":t}var c=r(234),l=r(24);function h(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var d=0;function f(t){return"__private_"+d+++"_"+t}var m=f("src"),y=f("sizes"),v=f("media"),w=f("width"),x=f("height"),O=f("format"),j=f("quality"),$=f("preload"),S=f("modifiers"),k=f("provider"),N=f("preset");class _{constructor({src:t,sizes:e,width:r,height:n,media:o="all",quality:c=70,format:l=null,preload:d=!1,modifiers:f={},provider:_,preset:z}){Object.defineProperty(this,m,{writable:!0,value:null}),Object.defineProperty(this,y,{writable:!0,value:null}),Object.defineProperty(this,v,{writable:!0,value:null}),Object.defineProperty(this,w,{writable:!0,value:null}),Object.defineProperty(this,x,{writable:!0,value:null}),Object.defineProperty(this,O,{writable:!0,value:null}),Object.defineProperty(this,j,{writable:!0,value:null}),Object.defineProperty(this,$,{writable:!0,value:!1}),Object.defineProperty(this,S,{writable:!0,value:{}}),Object.defineProperty(this,k,{writable:!0,value:void 0}),Object.defineProperty(this,N,{writable:!0,value:void 0}),h(this,m)[m]=t,h(this,y)[y]=e,h(this,v)[v]=o,h(this,w)[w]=r,h(this,x)[x]=n,h(this,O)[O]=l,h(this,j)[j]=c,h(this,$)[$]=d,h(this,S)[S]=f,h(this,k)[k]=_,h(this,N)[N]=z}get key(){return Object(l.a)(JSON.stringify(this.toJSON()))}get src(){return h(this,m)[m]}get sizes(){return h(this,y)[y]}get media(){return h(this,v)[v]}get width(){return h(this,w)[w]}get height(){return h(this,x)[x]}get ratio(){return h(this,w)[w]/h(this,x)[x]}get format(){var t;const e=Object(c.a)(h(this,m)[m]);return null!=(t=h(this,O)[O])&&t.includes(e)?e:h(this,O)[O]||e}get quality(){return h(this,j)[j]}get preload(){return h(this,$)[$]}get modifiers(){return h(this,S)[S]}get provider(){return h(this,k)[k]}get preset(){return h(this,N)[N]}get className(){return`image-${Object(l.a)(this.src)}`}get style(){return`\n      @supports (aspect-ratio: 1) {\n        @media ${this.media} { .${this.className} { aspect-ratio: ${this.width} / ${this.height}; } }\n      }\n    `}getModifiers(){return Object.assign({},this.modifiers,{format:this.format,quality:this.quality})}getOptions(){return{provider:this.provider,preset:this.preset}}getMeta(t,e){return Object(c.b)(new _(Object.assign({},this.toJSON())),t,e)}getPreload(t,e,r){const n={rel:"preload",as:"image",imagesrcset:t,imagesizes:e,media:this.media};return r&&(n.crossorigin=r),n}modify(t){return new _(Object.assign({},this.toJSON(),t))}toJSON(){return{src:h(this,m)[m],sizes:h(this,y)[y],media:h(this,v)[v],width:h(this,w)[w],height:h(this,x)[x],format:h(this,O)[O],quality:h(this,j)[j],preload:h(this,$)[$],modifiers:h(this,S)[S],provider:h(this,k)[k],preset:h(this,N)[N]}}static create(...t){return new this(...t)}}var z=r(50),M={inheritAttrs:!1,props:{source:{type:[_,Object],default:null},title:{type:String,required:!0},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default(){return this.$speedkit.crossorigin},validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)},loadingSpinner:{type:z.a,default(){return this.$speedkit.loader()}}},data:()=>({className:null,loading:!0,config:null,meta:null}),fetchKey(t){let e;var r;this.source?e=`image-${null==(r=new _(this.source))?void 0:r.key}`:e="image";return`${e}-${t(e)}`},async fetch(){if(this.source){var t;const source=new _(this.source);this.config=this.$img.getSizes(source.src,Object.assign({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions()));const{ssrContext:e}=this.$nuxt.context;this.meta=await source.getMeta(this.config.src,(null==e||null==(t=e.nuxt)?void 0:t._img)||{}),this.className=this.meta.className}},head(){return{style:this.style,link:this.preload,noscript:[{hid:"img-nojs",innerHTML:"<style>img { content-visibility: unset !important; }</style>"}],__dangerouslyDisableSanitizers:["noscript"]}},computed:{classNames(){const t=[{loading:this.loading}].concat(this.className);return this.loadingSpinner&&t.push(this.loadingSpinner.className),t},srcset(){var t,e;return(null==(t=this.config)?void 0:t.srcset)||(null==(e=this.config)?void 0:e.src)},sizes(){var t;return null==(t=this.config)?void 0:t.sizes},width(){var t;return this.$attrs.width||(null==(t=this.meta)?void 0:t.width)},height(){var t;return this.$attrs.height||(null==(t=this.meta)?void 0:t.height)},loadingMode(){return this.isCritical?"eager":"lazy"},decodingMode(){return this.source&&"svg"===new _(this.source).format?"sync":"async"},style(){return[this.loadingSpinner&&{hid:this.loadingSpinner.className,type:"text/css",cssText:this.loadingSpinner.style},this.meta&&{hid:this.className,type:"text/css",cssText:new _(this.meta).style}].filter(Boolean)},preload(){return this.config&&this.isCritical?[new _(this.source).getPreload(this.config.srcset,this.config.sizes,o(this.crossorigin))]:[]}},mounted(){this.loading=!this.$el.complete},methods:{getCrossorigin:o,onLoad(t){this.loading=!1,this.$emit("load",t.target.currentSrc)}}},P=(r(235),r(7)),C=Object(P.a)(M,(function(){var t=this;return(0,t._self._c)("img",t._g(t._b({staticClass:"nuxt-speedkit-image",class:t.classNames,attrs:{srcset:t.srcset,sizes:t.sizes,width:t.width,height:t.height,title:t.title,alt:t.alt||t.title,loading:t.loadingMode,decoding:t.decodingMode,crossorigin:t.getCrossorigin(t.crossorigin)}},"img",t.$attrs,!1),Object.assign({},t.$listeners,{load:t.onLoad})))}),[],!1,null,"79fe3340",null).exports,L=r(237);let A;function F(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var T=0;function J(t){return"__private_"+T+++"_"+t}const B=r.n(L)()();var E=J("list");A=Symbol.iterator;class I{constructor(t){Object.defineProperty(this,E,{writable:!0,value:[]}),F(this,E)[E]=F(this,E)[E].concat(Array.from(t||F(this,E)[E]).map((t=>new _(t))))}[A](){return F(this,E)[E].values()}get key(){return F(this,E)[E].map((source=>source.key)).join("-")}get list(){return F(this,E)[E]}get sorted(){return F(this,E)[E].sort(((a,b)=>B(a.media,b.media)))}get style(){return F(this,E)[E].map((({media:t,width:e,height:r,style:n})=>`\n      @media ${t} { .${this.className}::before { padding-top: calc((1 / (${e} / ${r})) * 100%); } }\n      @supports (aspect-ratio: 1) {\n        @media ${t} { .${this.className} { aspect-ratio: ${e} / ${r}; } }\n      }\n      ${n}\n    `)).reverse().join(" ")}get className(){return`picture-${Object(l.a)(this.sorted.map((({src:t})=>t)).join(","))}`}get classNames(){return{picture:this.className,image:F(this,E)[E].map((source=>source.className))}}getFormats(t,e,r){return this.sorted.reduce(((n,source)=>n.concat(t.map((t=>source.modify({format:t,preload:t.includes(e)&&r}))))),[])}async getMeta(t,e){const r=await Promise.all(this.sorted.map((source=>{var r;const n=t.getSizes(source.src,Object.assign({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions()));return source.getMeta(n.src,null==e||null==(r=e.nuxt)?void 0:r._img)})));return new I(r)}toJSON(){return F(this,E)[E]}static create(...t){return new this(...t)}}const K=new Map([["jpg","jpeg"]]);var U={props:{source:{type:_,required:!0},crossorigin:{type:[Boolean,String],default(){return this.$speedkit.crossorigin},validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)}},data:()=>({config:null}),fetchKey(t){const e=`source-${this.source.key}`;return`${e}-${t(e)}`},fetch(){this.config=this.$img.getSizes(this.source.src,Object.assign({sizes:this.source.sizes,modifiers:this.source.getModifiers()},this.source.getOptions()))},head(){const t=new _(this.source);return this.config&&t.preload?{link:[t.getPreload(this.config.srcset,this.config.sizes,o(this.crossorigin))]}:{}},computed:{srcset(){return this.config.srcset||this.config.src},type(){return`image/${K.get(this.source.format)||this.source.format}`}}},D=Object(P.a)(U,(function(){var t=this;return(0,t._self._c)("source",{attrs:{srcset:t.srcset,sizes:t.config.sizes,media:t.source.media,type:t.type}})}),[],!1,null,null,null).exports;const R=["avif","webp","png","jpg","gif"];var X={components:{PictureSource:D,BaseImage:C},props:{sources:{type:[Array,I],required:!0},formats:{type:Array,default(){return this.$speedkit.targetFormats}},loadingSpinner:{type:z.a,default:void 0},title:{type:String,default:null},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default(){return this.$speedkit.crossorigin},validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)}},data:()=>({metaSources:{},classNames:{}}),async fetch(){const{ssrContext:t}=this.$nuxt.context;this.metaSources=await this.sourceList.getMeta(this.$img,t),this.classNames=this.metaSources.classNames},head(){return{style:this.style}},fetchKey(t){const e=`picture-${this.sourceList.key}`;return`${e}-${t(e)}`},computed:{sourceList(){return I.create(this.sources)},formatSources(){const t=Array.from(new Set(R.map((t=>this.formats.find((e=>e.includes(t))))))).filter(Boolean),e=R.find((t=>this.formats.find((e=>e.includes(t)))));return this.sourceList.getFormats(t,e,this.isCritical)},style(){if(!this.metaSources)return[];const t=this.metaSources.length&&new I(this.metaSources)||this.metaSources;return[{hid:this.classNames.picture,type:"text/css",cssText:t.style}]}},methods:{onLoad(t){this.$emit("load",t)}}},H=(r(238),Object(P.a)(X,(function(){var t=this,e=t._self._c;return e("picture",{staticClass:"nuxt-speedkit-picture",class:t.classNames.picture},[t._l(t.formatSources,(function(source){return e("picture-source",{key:source.key,attrs:{source:source,crossorigin:t.crossorigin}})})),t._v(" "),e("base-image",{class:t.classNames.image,attrs:{title:t.title,alt:t.alt,"loading-spinner":t.loadingSpinner,crossorigin:t.crossorigin,width:"0",height:"0"},on:{load:t.onLoad}})],2)}),[],!1,null,"5cdfb38d",null).exports),V={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render(t){return this.hydrate?t(H,{props:Object.assign({},this.$attrs,{critical:this.isCritical}),on:this.$listeners}):t(n.a,{props:{never:!0}},[t("noscript",{class:"nuxt-speedkit-picture-noscript"},[t(H,{props:Object.assign({},this.$attrs,{critical:this.hydrate}),on:this.$listeners})])])}},W=Object(P.a)(V,undefined,undefined,!1,null,null,null);e.a=W.exports}}]);