(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{123:function(e,t,n){var content=n(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("16e8e915",content,!0,{sourceMap:!1})},16:function(e,t,n){var content=n(26);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("8c724af4",content,!0,{sourceMap:!1})},245:function(e,t,n){"use strict";n(123)},246:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,".layout-two-column-container .lost-flex-container{align-items:center}@media (max-width:767px){.layout-two-column-container .lost-flex-container{flex-direction:column}}.layout-two-column-container .lost-flex-container>div{flex-basis:99.9%;flex-grow:0;flex-shrink:0;max-width:99.9%;width:99.9%}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-left:0;margin-right:0}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0}@media (min-width:768px){.layout-two-column-container .lost-flex-container>div{flex-basis:calc(49.95% - 7.5px);flex-grow:0;flex-shrink:0;max-width:calc(49.95% - 7.5px);width:calc(49.95% - 7.5px)}.layout-two-column-container .lost-flex-container>div:nth-child(1n){margin-left:0;margin-right:15px}.layout-two-column-container .lost-flex-container>div:last-child{margin-right:0}.layout-two-column-container .lost-flex-container>div:nth-child(12n){margin-left:auto;margin-right:0}}.layout-two-column-container.column-align--left .lost-flex-container>div:first-child{order:0}.layout-two-column-container.column-align--left .lost-flex-container>div:last-child{order:1}.layout-two-column-container.column-align--right .lost-flex-container>div:first-child{order:1}.layout-two-column-container.column-align--right .lost-flex-container>div:last-child{order:0}",""]),o.locals={},e.exports=o},25:function(e,t,n){"use strict";n(16)},26:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,'*[data-v-514cb2af]{margin:0}[data-debug][data-v-514cb2af]{position:relative}[data-debug] pre[data-v-514cb2af]{bottom:0;font-family:monospace;font-weight:400;left:0;margin:0;position:absolute;right:0;top:0;z-index:10000}[data-debug] pre[data-v-514cb2af]:before{border:2px dotted #333;bottom:0;box-sizing:border-box;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}[data-debug] pre[data-v-514cb2af]:after{background:#333;bottom:0;color:#fff;content:"H" attr(data-debug-context-level);font-size:13px;letter-spacing:.1em;padding:5px;position:absolute;right:0;z-index:10000}',""]),o.locals={},e.exports=o},28:function(e,t,n){var content=n(56);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("fa89aa7e",content,!0,{sourceMap:!1})},29:function(e,t,n){var content=n(58);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("6979baa3",content,!0,{sourceMap:!1})},296:function(e,t,n){"use strict";n.r(t);var o=n(33),l=n(18),r={components:{LayoutLostContainer:n(15).a},props:{options:{type:Object,default:()=>({})},mirror:{type:Boolean,default:()=>!1}},computed:{styleClasses(){return{"column-align--left":!this.mirror,"column-align--right":this.mirror}}}},c=(n(245),n(7)),d=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("layout-lost-container",{staticClass:"layout-two-column-container",class:e.styleClasses,attrs:{visible:e.options.visible},scopedSlots:e._u([{key:"background",fn:function(){return[e._t("background")]},proxy:!0},{key:"container",fn:function(){return[t("div",{staticClass:"lost-flex-container"},[t("div",[e._t("left")],2),e._v(" "),t("div",[e._t("right")],2)])]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports,m=n(70),f={components:{BaseContentContainer:l.a,LayoutTwoColumnContainer:d,MoleculeContent:m.a,SpeedkitPicture:o.a},props:{mirror:{type:Boolean,default:!1},overline:{type:String,default:"Text Image Overline"},headline:{type:String,default:"Text Image Headline"},subline:{type:String,default:"Text Image Subline"},content:{type:String,default:"<p>Scelerisque morbi blandit voluptate possimus vitae illum tristique, atque perspiciatis maecenas laudantium! Morbi, venenatis purus amet, rem eius ligula! Penatibus eleifend curabitur temporibus asperiores tempora cum accumsan egestas viverra laborum.</p><p>Arcu primis enim, parturient! Excepturi adipisci! Incidunt quibusdam ex. Non, impedit est. Ullam eiusmod semper pretium necessitatibus nostrum voluptatem ullamcorper, hac condimentum! Vestibulum rhoncus? Impedit culpa, error tempus. Ligula diam.</p>"},picture:{type:Object,required:!1,default:()=>({sources:[{src:"/img/sample-a-16-9.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]})}}},v=Object(c.a)(f,(function(){var e=this,t=e._self._c;return t("base-content-container",[t("layout-two-column-container",{staticClass:"organism-text-image",attrs:{mirror:e.mirror},scopedSlots:e._u([{key:"left",fn:function(){return[t("speedkit-picture",e._b({},"speedkit-picture",e.picture,!1))]},proxy:!0},{key:"right",fn:function(){return[t("molecule-content",e._b({},"molecule-content",{headline:{overline:e.overline,headline:e.headline,subline:e.subline},content:e.content},!1))]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=v.exports},30:function(e,t,n){var content=n(60);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("3e60a14b",content,!0,{sourceMap:!1})},36:function(e,t,n){"use strict";var o={inject:{parentLevel:{from:"parentLevel",default:1}},inheritAttrs:!1,props:{tag:{type:String,default:null},font:{type:[Object,Array],default:()=>[]}},data:()=>({debug:!1}),computed:{contextLevel(){return e=(this.parentLevel-this.parentLevel%2)/2,Math.max(1,Math.min(e,6));var e}},mounted(){this.debug="debug-headline"in this.$route.query}},l=(n(25),n(7)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t(e.tag||`h${e.contextLevel}`,e._g(e._b({directives:[{name:"font",rawName:"v-font",value:e.font,expression:"font"}],tag:"component",attrs:{"data-debug":e.debug}},"component",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e.debug?t("pre",{attrs:{"data-debug-context-level":e.contextLevel}}):e._e()],2)}),[],!1,null,"514cb2af",null);t.a=component.exports},55:function(e,t,n){"use strict";n(28)},56:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,".atom-headline[data-v-0b858b12]{line-height:1.5;margin:0}.atom-headline>*[data-v-0b858b12]{display:block}h2.atom-headline .overline[data-v-0b858b12]{font-size:3.2vw}@media (min-width:576px){h2.atom-headline .overline[data-v-0b858b12]{font-size:12px}}h2.atom-headline .subline[data-v-0b858b12]{font-size:4.26667vw}@media (min-width:576px){h2.atom-headline .subline[data-v-0b858b12]{font-size:16px}}h2.atom-headline .headline[data-v-0b858b12]{font-size:9.6vw}@media (min-width:576px){h2.atom-headline .headline[data-v-0b858b12]{font-size:36px}}",""]),o.locals={},e.exports=o},57:function(e,t,n){"use strict";n(29)},58:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,".atom-rich-text[data-v-1a1ea68a]{font-size:4.26667vw;letter-spacing:.05625em;line-height:1.3}@media (min-width:576px){.atom-rich-text[data-v-1a1ea68a]{font-size:16px}}",""]),o.locals={},e.exports=o},59:function(e,t,n){"use strict";n(30)},60:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},70:function(e,t,n){"use strict";var o=n(18),l={components:{BaseContentHeadline:n(36).a},props:{tag:{type:String,default:"h1"},overline:{type:String,default:"Lorem Overline"},headline:{type:String,default:"Lorem Headline"},subline:{type:String,default:"Lorem Subline"}}},r=(n(55),n(7)),c=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("base-content-headline",{staticClass:"atom-headline"},[e._t("default",(function(){return[e.$slots.overline||e.overline?t("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway"),expression:"$getFont('Raleway')"}],staticClass:"overline"},[e._t("overline-slot",(function(){return[e._v("\n        "+e._s(e.overline)+"\n      ")]}))],2):e._e(),e._v(" "),e.$slots.headline||e.headline?t("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Roboto Slab",700),expression:"$getFont('Roboto Slab', 700)"}],staticClass:"headline"},[e._t("headline-slot",(function(){return[e._v("\n        "+e._s(e.headline)+"\n      ")]}))],2):e._e(),e._v(" "),e.$slots.subline||e.subline?t("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway",700),expression:"$getFont('Raleway', 700)"}],staticClass:"subline"},[e._t("subline-slot",(function(){return[e._v("\n        "+e._s(e.subline)+"\n      ")]}))],2):e._e()]}))],2)}),[],!1,null,"0b858b12",null).exports,d={props:{content:{type:String,required:!1,default:"Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href='https://grabarzundpartner.de'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}},m=(n(57),{components:{AtomHeadline:c,AtomRichText:Object(r.a)(d,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Raleway"),e.$getFont("Raleway",700,"normal",{selector:"strong"}),e.$getFont("Raleway",400,"italic",{selector:"em"})],expression:"[\n    $getFont('Raleway'),\n    $getFont('Raleway', 700, 'normal', {selector:'strong'}),\n    $getFont('Raleway', 400, 'italic', {selector:'em'})\n  ]"}],staticClass:"atom-rich-text"},[e.$slots.default?e._e():t("div",{domProps:{innerHTML:e._s(e.content)}}),e._v(" "),e._t("default")],2)}),[],!1,null,"1a1ea68a",null).exports,BaseContentContainer:o.a},props:{headline:{type:Object,default:()=>({overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"})},content:{type:String,default:()=>"<p>Example Text</p>"}}}),f=(n(59),Object(r.a)(m,(function(){var e=this,t=e._self._c;return t("base-content-container",{staticClass:"molecule-article",scopedSlots:e._u([{key:"header",fn:function(){return[e.headline?t("atom-headline",e._b({},"atom-headline",e.headline,!1)):e._e()]},proxy:!0},{key:"default",fn:function(){return[e._t("default",(function(){return[t("atom-rich-text",{attrs:{content:e.content}})]}))]},proxy:!0}],null,!0)})}),[],!1,null,null,null));t.a=f.exports}}]);