(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{379:function(t,e,n){"use strict";(function(t){n(62);var r=n(145),o=n(384),l=n(55),c=n(380),d=n(385),m=n(67),f=new d.a;function h(t){return t.type===Object(c.a)("webp")}e.a={props:{sources:{type:Array,default:function(){return[]}},preload:{type:Array,default:function(){return[]}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head:function(){var e=this,data={};if(this.preload.length&&(this.isCritical||this.visible)){var source=function(t){return t.filter((function(source){return!h(source)||h(source)&&o.b}))}(this.preload)[0];f.getPromise(Object(m.a)(source.srcset),(function(n,r){Object(o.a)()?data={link:[Object(l.b)(source,e.crossorigin,n)]}:function(e,n,r){var o=e.srcset,l=e.sizes;void 0===r&&(r=function(){});var img=new t.Image;img.onload=r,img.crossorigin=n,img.sizes=l,img.srcset=o}(source,e.crossorigin,n)})).then((function(t){return e.onPreload(t)}))}return data},watch:{sources:function(){this.imageSources.length||(this.imageSources=this.sources)}},mounted:function(){var t=this;Object(r.a)(this.$el,(function(e){t.visible=!0,t.$emit("enter",e)}))},destroyed:function(){Object(r.b)(this.$el)},methods:{onPreload:function(t){this.style.backgroundImage="url("+this.$refs.image.currentSrc+")",this.imageSources=this.preload,this.inProgress=!1,this.$emit("load")}}}}).call(this,n(18))},380:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(t){return r[String(t)]}},381:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("0a7c9b2a",content,!0,{sourceMap:!1})},382:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("4d9dc503",content,!0,{sourceMap:!1})},383:function(t,e,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("3f6c6f66",content,!0,{sourceMap:!1})},384:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));var r=n(115);var o,l=!(!(o=t.document.createElement("canvas")).getContext||!o.getContext("2d"))&&0===o.toDataURL("image/webp").indexOf("data:image/webp");function c(){if(Object(r.a)())return!1;var e=t.document.createElement("link").relList;return function(element,e){var n={};t.document&&(n=t.document.createElement(element));if(e in n)return!0;return!1}("link","imageSrcset")&&!!(e&&e.supports&&e.supports("preload"))}}).call(this,n(18))},385:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(28),n(21),n(101),n(5),n(32),n(102),n(103),n(104),n(105),n(106),n(107),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(36);var r=n(181),o=function(){function t(){this.map=new Map}return t.prototype.getPromise=function(t,e){if(!this.map.has(t)){var n=new r.a;this.map.set(t,n.promise),e(n.resolve,n.reject)}return this.map.get(t)},t}()},386:function(t,e,n){"use strict";n(381)},387:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,'picture[data-v-22740056]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-22740056]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);font-family:"object-fit:cover";object-fit:cover}',""]),t.exports=r},388:function(t,e,n){"use strict";n(382)},389:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,".nuxt-speedkit__noscript[data-v-e63e686a]{display:block;height:inherit}",""]),t.exports=r},390:function(t,e,n){"use strict";n(383)},391:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,".nuxt-speedkit__speedkit-picture[data-v-231a42ed]{width:100%;height:inherit;margin:0}",""]),t.exports=r},392:function(t,e,n){"use strict";n(70),n(21);var r=n(380),o=n(55),l=n(379).a,c=(n(386),n(10)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",{style:t.style},[t._l(t.imageSources,(function(source,t){return n("source",{key:t,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),t._v(" "),n("img",{ref:"image",class:{"in-progress":t.inProgress},attrs:{loading:"lazy",alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],2)}),[],!1,null,"22740056",null).exports,m=(n(388),{components:{CustomPicture:d,CustomNoScript:Object(c.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"e63e686a",null).exports},props:{sources:{type:Array,default:function(){return[]}},placeholders:{type:Array,default:function(){return[]}},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{resolvedPlacholders:this.getPlaceholders(),resolvedSources:this.getSources()}},head:function(){return{noscript:[Object(o.c)(".nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}},computed:{hasSlot:function(){return this.$slots.caption}},methods:{getPlaceholders:function(){return this.placeholders.map((function(t){var e=t.media,n=t.url,o=t.format;return{media:e,url:n,type:Object(r.a)(o)}}))},getSources:function(){return this.sources.map((function(t){var e=t.sizes,n=t.format;return{media:t.media,srcset:e.map((function(t){var e=t.width,n=t.url;return e?n+" "+e+"w":n})).join(", "),sizes:e.map((function(t){var e=t.width,n=t.media;return n?n+" "+e+"px":e+"px"})).sort((function(a,b){return a.width>b.width?1:-1})).join(", "),type:Object(r.a)(n)}}))}}}),f=(n(390),Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"nuxt-speedkit__speedkit-picture"},[n("custom-no-script",[n("custom-picture",{attrs:{sources:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],1),t._v(" "),n("custom-picture",t._g({attrs:{sources:t.resolvedPlacholders,preload:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}},t.$listeners)),t._v(" "),t.hasSlot?n("figcaption",[t._t("caption")],2):t._e()],1)}),[],!1,null,"231a42ed",null));e.a=f.exports},393:function(t,e,n){var content=n(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("2d10542e",content,!0,{sourceMap:!1})},394:function(t,e,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("0245c3c8",content,!0,{sourceMap:!1})},395:function(t,e,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("03b00668",content,!0,{sourceMap:!1})},399:function(t,e,n){"use strict";n(393)},400:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,".atom-headline[data-v-c88686be]{margin:0;line-height:1.5}.atom-headline>*[data-v-c88686be]{display:block}.atom-headline.headline--h2 .overline[data-v-c88686be]{font-size:3.2vw}@media (min-width:576px){.atom-headline.headline--h2 .overline[data-v-c88686be]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-c88686be]{font-size:4.26667vw}@media (min-width:576px){.atom-headline.headline--h2 .subline[data-v-c88686be]{font-size:16px}}.atom-headline.headline--h2 .headline[data-v-c88686be]{font-size:9.6vw}@media (min-width:576px){.atom-headline.headline--h2 .headline[data-v-c88686be]{font-size:36px}}",""]),t.exports=r},401:function(t,e,n){"use strict";n(394)},402:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,".atom-rich-text[data-v-1a1ea68a]{font-size:4.26667vw;line-height:1.3;letter-spacing:.05625em}@media (min-width:576px){.atom-rich-text[data-v-1a1ea68a]{font-size:16px}}",""]),t.exports=r},403:function(t,e,n){"use strict";n(395)},404:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,"",""]),t.exports=r},407:function(t,e,n){"use strict";var r={props:{tag:{type:String,default:"h1"},overline:{type:String,default:"Lorem Overline"},headline:{type:String,default:"Lorem Headline"},subline:{type:String,default:"Lorem Subline"}},computed:{styleClasses:function(){var t={};return t["headline--"+this.tag]=!0,t}}},o=(n(399),n(10)),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"atom-headline",class:t.styleClasses},[t._t("default",[t.$slots.overline||t.overline?n("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway"),expression:"$getFont('Raleway')"}],staticClass:"overline"},[t._t("overline-slot",[t._v("\n        "+t._s(t.overline)+"\n      ")])],2):t._e(),t._v(" "),t.$slots.headline||t.headline?n("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Roboto Slab",700),expression:"$getFont('Roboto Slab', 700)"}],staticClass:"headline"},[t._t("headline-slot",[t._v("\n        "+t._s(t.headline)+"\n      ")])],2):t._e(),t._v(" "),t.$slots.subline||t.subline?n("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",700),expression:"$getFont('Raleway', 700)"}],staticClass:"subline"},[t._t("subline-slot",[t._v("\n        "+t._s(t.subline)+"\n      ")])],2):t._e()])],2)}),[],!1,null,"c88686be",null).exports,c={props:{content:{type:String,required:!1,default:"Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href='https://grabarzundpartner.de'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}},d=(n(401),{components:{AtomHeadline:l,AtomRichText:Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Raleway"),t.$getFont("Raleway",700,"normal",{selector:"strong"}),t.$getFont("Raleway",400,"italic",{selector:"em"})],expression:"[\n    $getFont('Raleway'),\n    $getFont('Raleway', 700, 'normal', {selector:'strong'}),\n    $getFont('Raleway', 400, 'italic', {selector:'em'})\n  ]"}],staticClass:"atom-rich-text"},[t.$slots.default?t._e():n("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),t._t("default")],2)}),[],!1,null,"1a1ea68a",null).exports},props:{headline:{type:Object,default:function(){return{overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"}}},content:{type:String,default:function(){return"<p>Example Text</p>"}}}}),m=(n(403),Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"molecule-article"},[t.headline?n("header",[n("atom-headline",t._b({attrs:{tag:"h2"}},"atom-headline",t.headline,!1))],1):t._e(),t._v(" "),t._t("default",[n("atom-rich-text",{attrs:{content:t.content}})])],2)}),[],!1,null,null,null));e.a=m.exports},411:function(t,e,n){var content=n(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("1358b9e8",content,!0,{sourceMap:!1})},425:function(t,e,n){"use strict";n(411)},426:function(t,e,n){var r=n(37)((function(i){return i[1]}));r.push([t.i,".layout-two-column-container .lost-flex-container{align-items:center}@media (max-width:767px){.layout-two-column-container .lost-flex-container{flex-direction:column}}.layout-two-column-container .lost-flex-container>div{flex-grow:0;flex-shrink:0;flex-basis:99.9%;max-width:99.9%;width:99.9%}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-right:0;margin-left:0}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0}@media (min-width:768px){.layout-two-column-container .lost-flex-container>div{flex-grow:0;flex-shrink:0;flex-basis:calc(49.95% - 7.5px);max-width:calc(49.95% - 7.5px);width:calc(49.95% - 7.5px)}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-right:15px;margin-left:0}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0}.layout-two-column-container .lost-flex-container>div:nth-child(12n){margin-right:0;margin-left:auto}}.layout-two-column-container.column-align--left .lost-flex-container>div:first-child{order:0}.layout-two-column-container.column-align--left .lost-flex-container>div:last-child{order:1}.layout-two-column-container.column-align--right .lost-flex-container>div:first-child{order:1}.layout-two-column-container.column-align--right .lost-flex-container>div:last-child{order:0}",""]),t.exports=r},454:function(t,e,n){"use strict";n.r(e);var r={components:{LayoutDefaultContainer:n(180).a},props:{options:{type:Object,default:function(){return{}}},mirror:{type:Boolean,default:function(){return!1}}},computed:{styleClasses:function(){return{"column-align--left":!this.mirror,"column-align--right":this.mirror}}}},o=(n(425),n(10)),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-default-container",{staticClass:"layout-two-column-container",class:t.styleClasses,attrs:{visible:t.options.visible},scopedSlots:t._u([{key:"background",fn:function(){return[t._t("background")]},proxy:!0},{key:"container",fn:function(){return[n("div",{staticClass:"lost-flex-container"},[n("div",[t._t("left")],2),t._v(" "),n("div",[t._t("right")],2)])]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports,c=n(407),d=n(392),m={components:{LayoutTwoColumnContainer:l,MoleculeContentArticle:c.a,SpeedkitPicture:d.a},props:{mirror:{type:Boolean,default:!1},overline:{type:String,default:"Text Image Overline"},headline:{type:String,default:"Text Image Headline"},subline:{type:String,default:"Text Image Subline"},content:{type:String,default:"<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>"},picture:{type:Object,required:!1,default:function(){return{placeholders:[{format:"jpg",url:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjA2MTQ3MDIzMTU5MTFBRkYxQzFFNUExMTk5Q0FEMUFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4OTdCREZBNkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4OTdCREY5NkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFiN2YyNTUtZjAzZC00MDA1LWIzN2ItZDUzZDk0ZDBhNzQxIiBzdFJlZjpkb2N1bWVudElEPSIwNjE0NzAyMzE1OTExQUZGMUMxRTVBMTE5OUNBRDFBRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIABEAHgMBEQACEQEDEQH/xACCAAEAAwEAAAAAAAAAAAAAAAAGAgUHBAEAAwEBAAAAAAAAAAAAAAAAAgQFAwYQAAIBAwICBQoHAAAAAAAAAAECAxEEBQASIQYxkTITB1FxgcHRIkJysnMzsxQ0dDU2EQABAwMEAQUBAAAAAAAAAAACAAEDESExYYESMhNRwUJSBBT/2gAMAwEAAhEDEQA/AEmE8f45ZVimsLN5iGOyOPazMBwVArNUnq1zrtOOBEtleKGH7k26lkPGjmCbJ/oMbyvbyXZFVt5J2WUMBuO+MEBAB5dORQzegs+iXLwt8idtkT5n568QeYLOZchdSYbG2oEd1HjnSWNTIvauCrq7buim4+bW5QSk13QxfogB7NfX2QJ+X7M3ccozMBtVU1j7mQELtIrtrQ9esPA9KUTf9rZqiuNEpQOhSMn3Y1Ttn0e3TbkpzRukOAyr4u7e9ZzdXUNGtUmeRIAwFS0oU7pQvwpWleJ4aMJGG9KugOJytWyvbTm+fLYd4csZbjIWrPO0gRYu9haqEQJEgSscbHgy0I41ppoJeQ3ylDicSthCTcxI6r3UgsJB3ggPbMQPbDbukAV6dY8hrotuJLnxf7+H5R9GlSVAVY2v9UPuevQj2RF1WiZr/PL/ABI/yzquXRSR7rNJ/wAe1+y/06jDh1TfLL//2Q=="}],sources:[{format:"jpg",sizes:[{width:414,media:"all",url:"img/sample-a-16-9/412x232.jpg"},{width:576,media:"(min-width: 576px)",url:"img/sample-a-16-9/768x432.jpg"},{width:768,media:"(min-width: 768px)",url:"img/sample-a-16-9/992x558.jpg"},{width:1024,media:"(min-width: 1024px)",url:"img/sample-a-16-9/1200x675.jpg"},{width:1200,media:"(min-width: 1200px)",url:"img/sample-a-16-9/1600x900.jpg"},{width:1600,media:"(min-width: 1600px)",url:"img/sample-a-16-9/1920x1080.jpg"}]}]}}}}},f=Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-two-column-container",{staticClass:"organism-text-image",attrs:{mirror:t.mirror},scopedSlots:t._u([{key:"left",fn:function(){return[n("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1))]},proxy:!0},{key:"right",fn:function(){return[n("molecule-content-article",t._b({},"molecule-content-article",{headline:{overline:t.overline,headline:t.headline,subline:t.subline},content:t.content},!1))]},proxy:!0}])})}),[],!1,null,null,null);e.default=f.exports}}]);