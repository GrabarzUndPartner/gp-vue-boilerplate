(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{207:function(e,t,n){var content=n(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(153).default)("2d10542e",content,!0,{sourceMap:!1})},208:function(e,t,n){var content=n(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(153).default)("0245c3c8",content,!0,{sourceMap:!1})},209:function(e,t,n){var content=n(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(153).default)("03b00668",content,!0,{sourceMap:!1})},245:function(e,t,n){"use strict";n(207)},246:function(e,t,n){var o=n(152)((function(i){return i[1]}));o.push([e.i,".atom-headline[data-v-c88686be]{margin:0;line-height:1.5}.atom-headline>*[data-v-c88686be]{display:block}.atom-headline.headline--h2 .overline[data-v-c88686be]{font-size:3.2vw}@media (min-width:576px){.atom-headline.headline--h2 .overline[data-v-c88686be]{font-size:12px}}@media (--xs){.atom-headline.headline--h2 .overline[data-v-c88686be]{font-size:12px}}.atom-headline.headline--h2 .subline[data-v-c88686be]{font-size:4.26667vw}@media (min-width:576px){.atom-headline.headline--h2 .subline[data-v-c88686be]{font-size:16px}}@media (--xs){.atom-headline.headline--h2 .subline[data-v-c88686be]{font-size:16px}}.atom-headline.headline--h2 .headline[data-v-c88686be]{font-size:9.6vw}@media (min-width:576px){.atom-headline.headline--h2 .headline[data-v-c88686be]{font-size:36px}}@media (--xs){.atom-headline.headline--h2 .headline[data-v-c88686be]{font-size:36px}}",""]),o.locals={},e.exports=o},247:function(e,t,n){"use strict";n(208)},248:function(e,t,n){var o=n(152)((function(i){return i[1]}));o.push([e.i,".atom-rich-text[data-v-1a1ea68a]{font-size:4.26667vw;line-height:1.3;letter-spacing:.05625em}@media (min-width:576px){.atom-rich-text[data-v-1a1ea68a]{font-size:16px}}@media (--xs){.atom-rich-text[data-v-1a1ea68a]{font-size:16px}}",""]),o.locals={},e.exports=o},249:function(e,t,n){"use strict";n(209)},250:function(e,t,n){var o=n(152)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},260:function(e,t,n){"use strict";var o={props:{tag:{type:String,default:"h1"},overline:{type:String,default:"Lorem Overline"},headline:{type:String,default:"Lorem Headline"},subline:{type:String,default:"Lorem Subline"}},computed:{styleClasses:function(){var e={};return e["headline--"+this.tag]=!0,e}}},l=(n(245),n(151)),r=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",(function(){return[e.$slots.overline||e.overline?n("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway"),expression:"$getFont('Raleway')"}],staticClass:"overline"},[e._t("overline-slot",(function(){return[e._v("\n        "+e._s(e.overline)+"\n      ")]}))],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Roboto Slab",700),expression:"$getFont('Roboto Slab', 700)"}],staticClass:"headline"},[e._t("headline-slot",(function(){return[e._v("\n        "+e._s(e.headline)+"\n      ")]}))],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway",700),expression:"$getFont('Raleway', 700)"}],staticClass:"subline"},[e._t("subline-slot",(function(){return[e._v("\n        "+e._s(e.subline)+"\n      ")]}))],2):e._e()]}))],2)}),[],!1,null,"c88686be",null).exports,c={props:{content:{type:String,required:!1,default:"Lorem ipsum <strong>dolor sit</strong> amet, consetetur <a href='https://grabarzundpartner.de'>sadipscing elitr</a>, sed diam nonumy eirmod <i>tempor invidunt ut labore</i> et dolore magna aliquyam erat, <u>sed diam voluptua.</u> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}},d=(n(247),{components:{AtomHeadline:r,AtomRichText:Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Raleway"),e.$getFont("Raleway",700,"normal",{selector:"strong"}),e.$getFont("Raleway",400,"italic",{selector:"em"})],expression:"[\n    $getFont('Raleway'),\n    $getFont('Raleway', 700, 'normal', {selector:'strong'}),\n    $getFont('Raleway', 400, 'italic', {selector:'em'})\n  ]"}],staticClass:"atom-rich-text"},[e.$slots.default?e._e():n("div",{domProps:{innerHTML:e._s(e.content)}}),e._v(" "),e._t("default")],2)}),[],!1,null,"1a1ea68a",null).exports},props:{headline:{type:Object,default:function(){return{overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"}}},content:{type:String,default:function(){return"<p>Example Text</p>"}}}}),m=(n(249),Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"molecule-article"},[e.headline?n("header",[n("atom-headline",e._b({attrs:{tag:"h2"}},"atom-headline",e.headline,!1))],1):e._e(),e._v(" "),e._t("default",(function(){return[n("atom-rich-text",{attrs:{content:e.content}})]}))],2)}),[],!1,null,null,null));t.a=m.exports},322:function(e,t,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(153).default)("30392591",content,!0,{sourceMap:!1})},476:function(e,t,n){"use strict";n(322)},477:function(e,t,n){var o=n(152)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},539:function(e,t,n){"use strict";n.r(t);var o=n(174),l=n(260),r={components:{LayoutDefaultContainer:o.a,MoleculeContentArticle:l.a},props:{article:{type:Object,default:function(){return{headline:{overline:"Text Overline",headline:"Text Headline",subline:"Text Subline"},content:"<p>Example Text</p>"}}}}},c=(n(476),n(151)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-default-container",{staticClass:"organism-text"},[n("molecule-content-article",e._b({},"molecule-content-article",e.article,!1))],1)}),[],!1,null,"3f2ddf07",null);t.default=component.exports}}]);