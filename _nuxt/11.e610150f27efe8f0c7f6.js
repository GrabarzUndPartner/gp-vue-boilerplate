(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{220:function(t,e,n){var content=n(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(193).default)("8c724af4",content,!0,{sourceMap:!1})},249:function(t,e,n){"use strict";n(220)},250:function(t,e,n){var o=n(192)((function(i){return i[1]}));o.push([t.i,'*[data-v-514cb2af]{margin:0}[data-debug][data-v-514cb2af]{position:relative}[data-debug] pre[data-v-514cb2af]{bottom:0;font-family:monospace;font-weight:400;left:0;margin:0;position:absolute;right:0;top:0;z-index:10000}[data-debug] pre[data-v-514cb2af]:before{border:2px dotted #333;bottom:0;box-sizing:border-box;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}[data-debug] pre[data-v-514cb2af]:after{background:#333;bottom:0;color:#fff;content:"H" attr(data-debug-context-level);font-size:13px;letter-spacing:.1em;padding:5px;position:absolute;right:0;z-index:10000}',""]),o.locals={},t.exports=o},252:function(t,e,n){var content=n(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(193).default)("fa89aa7e",content,!0,{sourceMap:!1})},253:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(193).default)("6979baa3",content,!0,{sourceMap:!1})},254:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(193).default)("3e60a14b",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{tag:{type:String,default:null},font:{type:[Object,Array],default:function(){return[]}}},data:function(){return{debug:!1}},computed:{contextLevel:function(){return t=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(t,6));var t}},mounted:function(){this.debug="debug-headline"in this.$route.query}},l=(n(249),n(191)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e(t.tag||"h"+t.contextLevel,t._g(t._b({directives:[{name:"font",rawName:"v-font",value:t.font,expression:"font"}],tag:"component",attrs:{"data-debug":t.debug}},"component",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t.debug?e("pre",{attrs:{"data-debug-context-level":t.contextLevel}}):t._e()],2)}),[],!1,null,"514cb2af",null);e.a=component.exports},293:function(t,e,n){"use strict";n(252)},294:function(t,e,n){var o=n(192)((function(i){return i[1]}));o.push([t.i,".atom-headline[data-v-0b858b12]{line-height:1.5;margin:0}.atom-headline>*[data-v-0b858b12]{display:block}h2.atom-headline .overline[data-v-0b858b12]{font-size:3.2vw}@media (min-width:576px){h2.atom-headline .overline[data-v-0b858b12]{font-size:12px}}h2.atom-headline .subline[data-v-0b858b12]{font-size:4.26667vw}@media (min-width:576px){h2.atom-headline .subline[data-v-0b858b12]{font-size:16px}}h2.atom-headline .headline[data-v-0b858b12]{font-size:9.6vw}@media (min-width:576px){h2.atom-headline .headline[data-v-0b858b12]{font-size:36px}}",""]),o.locals={},t.exports=o},295:function(t,e,n){"use strict";n(253)},296:function(t,e,n){var o=n(192)((function(i){return i[1]}));o.push([t.i,".atom-rich-text[data-v-1a1ea68a]{font-size:4.26667vw;letter-spacing:.05625em;line-height:1.3}@media (min-width:576px){.atom-rich-text[data-v-1a1ea68a]{font-size:16px}}",""]),o.locals={},t.exports=o},297:function(t,e,n){"use strict";n(254)},298:function(t,e,n){var o=n(192)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},308:function(t,e,n){"use strict";var o=n(222),l={components:{BaseContentHeadline:n(260).a},props:{tag:{type:String,default:"h1"},overline:{type:String,default:"Lorem Overline"},headline:{type:String,default:"Lorem Headline"},subline:{type:String,default:"Lorem Subline"}}},r=(n(293),n(191)),c=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("base-content-headline",{staticClass:"atom-headline"},[t._t("default",(function(){return[t.$slots.overline||t.overline?e("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway"),expression:"$getFont('Raleway')"}],staticClass:"overline"},[t._t("overline-slot",(function(){return[t._v("\n        "+t._s(t.overline)+"\n      ")]}))],2):t._e(),t._v(" "),t.$slots.headline||t.headline?e("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Roboto Slab",700),expression:"$getFont('Roboto Slab', 700)"}],staticClass:"headline"},[t._t("headline-slot",(function(){return[t._v("\n        "+t._s(t.headline)+"\n      ")]}))],2):t._e(),t._v(" "),t.$slots.subline||t.subline?e("span",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",700),expression:"$getFont('Raleway', 700)"}],staticClass:"subline"},[t._t("subline-slot",(function(){return[t._v("\n        "+t._s(t.subline)+"\n      ")]}))],2):t._e()]}))],2)}),[],!1,null,"0b858b12",null).exports,d={props:{content:{type:String,required:!1,default:"Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href='https://grabarzundpartner.de'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}},m=(n(295),{components:{AtomHeadline:c,AtomRichText:Object(r.a)(d,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Raleway"),t.$getFont("Raleway",700,"normal",{selector:"strong"}),t.$getFont("Raleway",400,"italic",{selector:"em"})],expression:"[\n    $getFont('Raleway'),\n    $getFont('Raleway', 700, 'normal', {selector:'strong'}),\n    $getFont('Raleway', 400, 'italic', {selector:'em'})\n  ]"}],staticClass:"atom-rich-text"},[t.$slots.default?t._e():e("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),t._t("default")],2)}),[],!1,null,"1a1ea68a",null).exports,BaseContentContainer:o.a},props:{headline:{type:Object,default:function(){return{overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"}}},content:{type:String,default:function(){return"<p>Example Text</p>"}}}}),f=(n(297),Object(r.a)(m,(function(){var t=this,e=t._self._c;return e("base-content-container",{staticClass:"molecule-article",scopedSlots:t._u([{key:"header",fn:function(){return[t.headline?e("atom-headline",t._b({},"atom-headline",t.headline,!1)):t._e()]},proxy:!0},{key:"default",fn:function(){return[t._t("default",(function(){return[e("atom-rich-text",{attrs:{content:t.content}})]}))]},proxy:!0}],null,!0)})}),[],!1,null,null,null));e.a=f.exports},373:function(t,e,n){var content=n(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(193).default)("16e8e915",content,!0,{sourceMap:!1})},543:function(t,e,n){"use strict";n(373)},544:function(t,e,n){var o=n(192)((function(i){return i[1]}));o.push([t.i,".layout-two-column-container .lost-flex-container{align-items:center}@media (max-width:767px){.layout-two-column-container .lost-flex-container{flex-direction:column}}.layout-two-column-container .lost-flex-container>div{flex-basis:99.9%;flex-grow:0;flex-shrink:0;max-width:99.9%;width:99.9%}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-left:0;margin-right:0}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0}@media (min-width:768px){.layout-two-column-container .lost-flex-container>div{flex-basis:calc(49.95% - 7.5px);flex-grow:0;flex-shrink:0;max-width:calc(49.95% - 7.5px);width:calc(49.95% - 7.5px)}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-left:0;margin-right:15px}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0}.layout-two-column-container .lost-flex-container>div:nth-child(12n){margin-left:auto;margin-right:0}}.layout-two-column-container.column-align--left .lost-flex-container>div:first-child{order:0}.layout-two-column-container.column-align--left .lost-flex-container>div:last-child{order:1}.layout-two-column-container.column-align--right .lost-flex-container>div:first-child{order:1}.layout-two-column-container.column-align--right .lost-flex-container>div:last-child{order:0}",""]),o.locals={},t.exports=o},597:function(t,e,n){"use strict";n.r(e);var o=n(257),l=n(222),r={components:{LayoutLostContainer:n(216).a},props:{options:{type:Object,default:function(){return{}}},mirror:{type:Boolean,default:function(){return!1}}},computed:{styleClasses:function(){return{"column-align--left":!this.mirror,"column-align--right":this.mirror}}}},c=(n(543),n(191)),d=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("layout-lost-container",{staticClass:"layout-two-column-container",class:t.styleClasses,attrs:{visible:t.options.visible},scopedSlots:t._u([{key:"background",fn:function(){return[t._t("background")]},proxy:!0},{key:"container",fn:function(){return[e("div",{staticClass:"lost-flex-container"},[e("div",[t._t("left")],2),t._v(" "),e("div",[t._t("right")],2)])]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports,m=n(308),f={components:{BaseContentContainer:l.a,LayoutTwoColumnContainer:d,MoleculeContent:m.a,SpeedkitPicture:o.a},props:{mirror:{type:Boolean,default:!1},overline:{type:String,default:"Text Image Overline"},headline:{type:String,default:"Text Image Headline"},subline:{type:String,default:"Text Image Subline"},content:{type:String,default:"<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>"},picture:{type:Object,required:!1,default:function(){return{sources:[{src:"/img/sample-a-16-9.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]}}}}},v=Object(c.a)(f,(function(){var t=this,e=t._self._c;return e("base-content-container",[e("layout-two-column-container",{staticClass:"organism-text-image",attrs:{mirror:t.mirror},scopedSlots:t._u([{key:"left",fn:function(){return[e("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1))]},proxy:!0},{key:"right",fn:function(){return[e("molecule-content",t._b({},"molecule-content",{headline:{overline:t.overline,headline:t.headline,subline:t.subline},content:t.content},!1))]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=v.exports}}]);