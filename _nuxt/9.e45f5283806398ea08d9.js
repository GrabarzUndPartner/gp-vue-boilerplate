(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{193:function(e,t,n){"use strict";(function(e){var r=n(54),o=n(198),l=n(19),c=n(194),d=n(199),m=n(25);const f=new d.a;function h({type:e}){return e===Object(c.a)("webp")}t.a={props:{sources:{type:Array,default:()=>[]},preload:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head(){let data={};if(this.preload.length&&(this.isCritical||this.visible)){const source=this.getPreloadSource();f.getPromise(Object(m.a)(source.srcset),((t,n)=>{Object(o.a)()?data={link:[Object(l.b)(source,this.crossorigin,t)]}:function({srcset:t,sizes:n},r,o=(()=>{})){{const img=new e.Image;img.onload=o,img.crossorigin=r,img.sizes=n,img.srcset=t}}(source,this.crossorigin,t)})).then((e=>this.onPreload(e)))}return data},watch:{sources(){this.imageSources.length||(this.imageSources=this.sources)}},mounted(){Object(r.a)(this.$el,(e=>{this.visible=!0,this.$emit("enter",e)}))},destroyed(){Object(r.b)(this.$el)},methods:{onPreload(e){this.style.backgroundImage=`url(${this.$refs.image.currentSrc})`,this.imageSources=this.preload,this.inProgress=!1,this.$emit("load")},getPreloadSource(){const e=function(e){return e.filter((source=>!h(source)||h(source)&&o.b))}(this.preload),t=Array.from(new Set(e.map((({type:e})=>e)))).shift(),{srcset:n,sizes:r}=e.filter((source=>source.type===t)).reduce(((e,source)=>(e.srcset.push(source.srcset),e.sizes.push(source.sizes),e)),{srcset:[],sizes:[]});return{srcset:n.join(", "),sizes:r.join(", "),type:t}}}}}).call(this,n(8))},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const r={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(e){return r[String(e)]}},195:function(e,t,n){var content=n(201);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("0a50f448",content,!0,{sourceMap:!1})},196:function(e,t,n){var content=n(203);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("d5e7f610",content,!0,{sourceMap:!1})},197:function(e,t,n){var content=n(205);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("f993c9e6",content,!0,{sourceMap:!1})},198:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var r=n(39);const o=function(){const t=e.document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}();function l(){if(Object(r.a)())return!1;{const t=e.document.createElement("link").relList;return function(element,t){let n={};e.document&&(n=e.document.createElement(element));if(t in n)return!0;return!1}("link","imageSrcset")&&!!(t&&t.supports&&t.supports("preload"))}}}).call(this,n(8))},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(66);class o{constructor(){this.map=new Map}getPromise(e,t){if(!this.map.has(e)){const n=new r.a;this.map.set(e,n.promise),t(n.resolve,n.reject)}return this.map.get(e)}}},200:function(e,t,n){"use strict";n(195)},201:function(e,t,n){var r=n(12)((function(i){return i[1]}));r.push([e.i,'picture[data-v-112b0aa6]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-112b0aa6]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);font-family:"object-fit:cover";object-fit:cover}',""]),e.exports=r},202:function(e,t,n){"use strict";n(196)},203:function(e,t,n){var r=n(12)((function(i){return i[1]}));r.push([e.i,".nuxt-speedkit__noscript[data-v-62a7a308]{display:block;height:inherit}",""]),e.exports=r},204:function(e,t,n){"use strict";n(197)},205:function(e,t,n){var r=n(12)((function(i){return i[1]}));r.push([e.i,".nuxt-speedkit__speedkit-picture[data-v-2e74cd6a]{width:100%;height:inherit;margin:0}",""]),e.exports=r},206:function(e,t,n){"use strict";var r=n(194),o=n(19),l=n(193).a,c=(n(200),n(5)),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("picture",{style:e.style},[e._l(e.imageSources,(function(source,e){return n("source",{key:e,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),e._v(" "),n("img",{ref:"image",class:{"in-progress":e.inProgress},attrs:{loading:"lazy",alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],2)}),[],!1,null,"112b0aa6",null).exports,m=(n(202),{components:{CustomPicture:d,CustomNoScript:Object(c.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this,t=e.$createElement;e._self._c;return e._t("default")},staticRenderFns:[]}})}),[],!1,null,"62a7a308",null).exports},props:{sources:{type:Array,default:()=>[]},placeholders:{type:Array,default:()=>[]},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{resolvedPlacholders:this.getPlaceholders(),resolvedSources:this.getSources()}},head:()=>({noscript:[Object(o.c)(".nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}),computed:{hasSlot(){return this.$slots.caption}},methods:{getPlaceholders(){return this.placeholders.map((({media:e,url:t,format:n})=>({media:e,url:t,type:Object(r.a)(n)})))},getSources(){return this.sources.map((({sizes:e,format:t,media:n})=>{const o=e.sort(((a,b)=>a.width>b.width?-1:1));return{media:n,srcset:o.map((({width:e,url:t})=>e?`${t} ${e}w`:t)).join(", "),sizes:o.map((({width:e,media:t})=>t?`${t} ${e}px`:`${e}px`)).join(", "),type:Object(r.a)(t)}}))}}}),f=(n(204),Object(c.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{staticClass:"nuxt-speedkit__speedkit-picture"},[n("custom-no-script",[n("custom-picture",{attrs:{sources:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],1),e._v(" "),n("custom-picture",e._g({attrs:{sources:e.resolvedPlacholders,preload:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}},e.$listeners)),e._v(" "),e.hasSlot?n("figcaption",[e._t("caption")],2):e._e()],1)}),[],!1,null,"2e74cd6a",null));t.a=f.exports},207:function(e,t,n){var content=n(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("2d10542e",content,!0,{sourceMap:!1})},208:function(e,t,n){var content=n(216);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("0245c3c8",content,!0,{sourceMap:!1})},209:function(e,t,n){var content=n(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("03b00668",content,!0,{sourceMap:!1})},213:function(e,t,n){"use strict";n(207)},214:function(e,t,n){var r=n(12)((function(i){return i[1]}));r.push([e.i,".atom-headline[data-v-c88686be]{margin:0;line-height:1.5}.atom-headline>*[data-v-c88686be]{display:block}.atom-headline.headline--h2 .overline[data-v-c88686be]{font-size:3.2vw}@media (min-width: 576px){.atom-headline.headline--h2 .overline[data-v-c88686be]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-c88686be]{font-size:4.26667vw}@media (min-width: 576px){.atom-headline.headline--h2 .subline[data-v-c88686be]{font-size:16px}}.atom-headline.headline--h2 .headline[data-v-c88686be]{font-size:9.6vw}@media (min-width: 576px){.atom-headline.headline--h2 .headline[data-v-c88686be]{font-size:36px}}",""]),e.exports=r},215:function(e,t,n){"use strict";n(208)},216:function(e,t,n){var r=n(12)((function(i){return i[1]}));r.push([e.i,".atom-rich-text[data-v-1a1ea68a]{font-size:4.26667vw;line-height:1.3;letter-spacing:.05625em}@media (min-width: 576px){.atom-rich-text[data-v-1a1ea68a]{font-size:16px}}",""]),e.exports=r},217:function(e,t,n){"use strict";n(209)},218:function(e,t,n){var r=n(12)((function(i){return i[1]}));r.push([e.i,"",""]),e.exports=r},221:function(e,t,n){"use strict";var r={props:{tag:{type:String,default:"h1"},overline:{type:String,default:"Lorem Overline"},headline:{type:String,default:"Lorem Headline"},subline:{type:String,default:"Lorem Subline"}},computed:{styleClasses(){const e={};return e[`headline--${this.tag}`]=!0,e}}},o=(n(213),n(5)),l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway"),expression:"$getFont('Raleway')"}],staticClass:"overline"},[e._t("overline-slot",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Roboto Slab",700),expression:"$getFont('Roboto Slab', 700)"}],staticClass:"headline"},[e._t("headline-slot",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway",700),expression:"$getFont('Raleway', 700)"}],staticClass:"subline"},[e._t("subline-slot",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"c88686be",null).exports,c={props:{content:{type:String,required:!1,default:"Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href='https://grabarzundpartner.de'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}},d=(n(215),{components:{AtomHeadline:l,AtomRichText:Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Raleway"),e.$getFont("Raleway",700,"normal",{selector:"strong"}),e.$getFont("Raleway",400,"italic",{selector:"em"})],expression:"[\n    $getFont('Raleway'),\n    $getFont('Raleway', 700, 'normal', {selector:'strong'}),\n    $getFont('Raleway', 400, 'italic', {selector:'em'})\n  ]"}],staticClass:"atom-rich-text"},[e.$slots.default?e._e():n("div",{domProps:{innerHTML:e._s(e.content)}}),e._v(" "),e._t("default")],2)}),[],!1,null,"1a1ea68a",null).exports},props:{headline:{type:Object,default:()=>({overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"})},content:{type:String,default:()=>"<p>Example Text</p>"}}}),m=(n(217),Object(o.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"molecule-article"},[e.headline?n("header",[n("atom-headline",e._b({attrs:{tag:"h2"}},"atom-headline",e.headline,!1))],1):e._e(),e._v(" "),e._t("default",[n("atom-rich-text",{attrs:{content:e.content}})])],2)}),[],!1,null,null,null));t.a=m.exports},225:function(e,t,n){var content=n(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("1358b9e8",content,!0,{sourceMap:!1})},239:function(e,t,n){"use strict";n(225)},240:function(e,t,n){var r=n(12)((function(i){return i[1]}));r.push([e.i,".layout-two-column-container .lost-flex-container{align-items:center}@media (max-width: 767px){.layout-two-column-container .lost-flex-container{flex-direction:column}}.layout-two-column-container .lost-flex-container>div{flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 12/12);max-width:calc(99.9% * 12/12);width:calc(99.9% * 12/12)}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-right:0;margin-left:0}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0}@media (min-width: 768px){.layout-two-column-container .lost-flex-container>div{flex-grow:0;flex-shrink:0;flex-basis:calc(99.9% * 6/12 - (15px - 15px * 6/12));max-width:calc(99.9% * 6/12 - (15px - 15px * 6/12));width:calc(99.9% * 6/12 - (15px - 15px * 6/12))}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-right:15px;margin-left:0}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0}.layout-two-column-container .lost-flex-container>div:nth-child(12n){margin-right:0;margin-left:auto}}.layout-two-column-container.column-align--left .lost-flex-container>div:first-child{order:0}.layout-two-column-container.column-align--left .lost-flex-container>div:last-child{order:1}.layout-two-column-container.column-align--right .lost-flex-container>div:first-child{order:1}.layout-two-column-container.column-align--right .lost-flex-container>div:last-child{order:0}",""]),e.exports=r},265:function(e,t,n){"use strict";n.r(t);var r={components:{LayoutDefaultContainer:n(65).a},props:{options:{type:Object,default:()=>({})},mirror:{type:Boolean,default:()=>!1}},computed:{styleClasses(){return{"column-align--left":!this.mirror,"column-align--right":this.mirror}}}},o=(n(239),n(5)),l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-default-container",{staticClass:"layout-two-column-container",class:e.styleClasses,attrs:{visible:e.options.visible},scopedSlots:e._u([{key:"background",fn:function(){return[e._t("background")]},proxy:!0},{key:"container",fn:function(){return[n("div",{staticClass:"lost-flex-container"},[n("div",[e._t("left")],2),e._v(" "),n("div",[e._t("right")],2)])]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports,c=n(221),d=n(206),m={components:{LayoutTwoColumnContainer:l,MoleculeContentArticle:c.a,SpeedkitPicture:d.a},props:{mirror:{type:Boolean,default:!1},overline:{type:String,default:"Text Image Overline"},headline:{type:String,default:"Text Image Headline"},subline:{type:String,default:"Text Image Subline"},content:{type:String,default:"<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>"},picture:{type:Object,required:!1,default:()=>({placeholders:[{format:"jpg",url:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjA2MTQ3MDIzMTU5MTFBRkYxQzFFNUExMTk5Q0FEMUFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4OTdCREZBNkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4OTdCREY5NkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFiN2YyNTUtZjAzZC00MDA1LWIzN2ItZDUzZDk0ZDBhNzQxIiBzdFJlZjpkb2N1bWVudElEPSIwNjE0NzAyMzE1OTExQUZGMUMxRTVBMTE5OUNBRDFBRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIABEAHgMBEQACEQEDEQH/xACCAAEAAwEAAAAAAAAAAAAAAAAGAgUHBAEAAwEBAAAAAAAAAAAAAAAAAgQFAwYQAAIBAwICBQoHAAAAAAAAAAECAxEEBQASIQYxkTITB1FxgcHRIkJysnMzsxQ0dDU2EQABAwMEAQUBAAAAAAAAAAACAAEDESExYYESMhNRwUJSBBT/2gAMAwEAAhEDEQA/AEmE8f45ZVimsLN5iGOyOPazMBwVArNUnq1zrtOOBEtleKGH7k26lkPGjmCbJ/oMbyvbyXZFVt5J2WUMBuO+MEBAB5dORQzegs+iXLwt8idtkT5n568QeYLOZchdSYbG2oEd1HjnSWNTIvauCrq7buim4+bW5QSk13QxfogB7NfX2QJ+X7M3ccozMBtVU1j7mQELtIrtrQ9esPA9KUTf9rZqiuNEpQOhSMn3Y1Ttn0e3TbkpzRukOAyr4u7e9ZzdXUNGtUmeRIAwFS0oU7pQvwpWleJ4aMJGG9KugOJytWyvbTm+fLYd4csZbjIWrPO0gRYu9haqEQJEgSscbHgy0I41ppoJeQ3ylDicSthCTcxI6r3UgsJB3ggPbMQPbDbukAV6dY8hrotuJLnxf7+H5R9GlSVAVY2v9UPuevQj2RF1WiZr/PL/ABI/yzquXRSR7rNJ/wAe1+y/06jDh1TfLL//2Q=="}],sources:[{format:"jpg",sizes:[{width:414,media:"all",url:"img/sample-a-16-9/412x232.jpg"},{width:576,media:"(min-width: 576px)",url:"img/sample-a-16-9/768x432.jpg"},{width:768,media:"(min-width: 768px)",url:"img/sample-a-16-9/992x558.jpg"},{width:1024,media:"(min-width: 1024px)",url:"img/sample-a-16-9/1200x675.jpg"},{width:1200,media:"(min-width: 1200px)",url:"img/sample-a-16-9/1600x900.jpg"},{width:1600,media:"(min-width: 1600px)",url:"img/sample-a-16-9/1920x1080.jpg"}]}]})}}},f=Object(o.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-two-column-container",{staticClass:"organism-text-image",attrs:{mirror:e.mirror},scopedSlots:e._u([{key:"left",fn:function(){return[n("speedkit-picture",e._b({},"speedkit-picture",e.picture,!1))]},proxy:!0},{key:"right",fn:function(){return[n("molecule-content-article",e._b({},"molecule-content-article",{headline:{overline:e.overline,headline:e.headline,subline:e.subline},content:e.content},!1))]},proxy:!0}])})}),[],!1,null,null,null);t.default=f.exports}}]);