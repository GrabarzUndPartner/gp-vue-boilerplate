!function(t){function e(data){for(var e,o,c=data[0],d=data[1],f=data[2],i=0,v=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(t[e]=d[e]);for(m&&m(data);v.length;)v.shift()();return l.push.apply(l,f||[]),n()}function n(){for(var t,i=0;i<l.length;i++){for(var e=l[i],n=!0,o=1;o<e.length;o++){var d=e[o];0!==r[d]&&(n=!1)}n&&(l.splice(i--,1),t=c(c.s=e[0]))}return t}var o={},r={1:0},l=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var l,script=document.createElement("script");script.charset="utf-8",script.timeout=120,c.nc&&script.setAttribute("nonce",c.nc),script.src=function(t){return c.p+""+({3:"pages/index",4:"pages/p/_page",5:"pages/p/_sub/_child",7:"vendors/content/plugin.js"}[t]||t)+"."+{0:"cbb8ccfc2d4c03f31432",3:"ff851676820313f005b4",4:"85fc6ec53c3d03856d32",5:"2ea32e14f1d7a3416ac5",7:"16386443f44575def587",8:"36a5449f062e5397b9f1",9:"8a2a7d9168601e5227a6",10:"140cbccb816403f542f5",11:"1b997f3d3f72250cfb0c",12:"8badb13ff93825e4df47",13:"8d3b383a9be7d98d4466",14:"ef160f20ccc7b5cedd36",15:"abd69ddbea183b4d6390",16:"85de8d1625629ba46167",17:"9d84b90a48c9f42a2f59",18:"0204c181b7452210b253",19:"131a80d778fd0acc50d9",20:"35a868f87d66128c4791",21:"d3e8014774104054a628",22:"be23bce783f1fbde73bf",23:"2d6a88873d123f21b66d",24:"244fd8e7ed15b395c345"}[t]+".js"}(t);var d=new Error;l=function(e){script.onerror=script.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),l=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",d.name="ChunkLoadError",d.type=o,d.request=l,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:script})}),12e4);script.onerror=script.onload=l,document.head.appendChild(script)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},c.p="/gp-vue-boilerplate/_nuxt/",c.oe=function(t){throw console.error(t),t};var d=window.webpackJsonp=window.webpackJsonp||[],f=d.push.bind(d);d.push=e,d=d.slice();for(var i=0;i<d.length;i++)e(d[i]);var m=f;l.push([278,2,6]),n()}({142:function(t){t.exports=JSON.parse('{"de":{"components":{"pageHeader":{},"pageMenu":{"navigation":[{"title":"Home","url":"/"},{"title":"Über uns","url":"/p/ueber-uns"},{"title":"Projekte","url":"/p/projekte","childrens":[{"title":"Projekt 1","url":"/p/projekte/projekt-1"},{"title":"Projekt 2","url":"/p/projekte/projekt-2"}]}]},"pageMenuButton":{"label":"Menu Öffnen/Schließen"},"pageFooter":{"navigation":[{"title":"Kontakt","url":"/p/kontakt"},{"title":"Nutzungsbedingungen","url":"/p/nutzungsbedingungen"},{"title":"Rechtliche Hinweise","url":"/p/rechtliche-hinweise"}]}}},"en":{"components":{"pageHeader":{},"pageMenu":{"navigation":[{"title":"Home","url":"index"},{"title":"About","url":"/p/about"},{"title":"Projects","url":"/p/projects","childrens":[{"title":"Project 1","url":"/p/projects/project-1"},{"title":"Project 2","url":"/p/projects/project-2"}]}]},"pageMenuButton":{"label":"Menu Open/Close"},"pageFooter":{"navigation":[{"title":"Contact","url":"/p/contact"},{"title":"Terms of use","url":"/p/terms"},{"title":"Legals","url":"/p/legals"}]}}}}')},176:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return y}));var o=n(181),r=n(273),l=n(182),c=n(272),d=n(52),f=n(81),m=n(95),v=n(177),h=Object(o.a)(t,"resize").pipe(Object(l.a)(0),Object(c.a)((function(){return Object(r.a)(350)})),Object(d.a)((function(){return A()})),Object(f.a)()),x=Object(v.b)(),y=Object(v.a)().pipe(Object(d.a)((function(t){var e=new m.a((function(){return(t-x)/Math.abs(t-x)}));return x=t,{position:t,direction:e}})),Object(f.a)());Object(o.a)(t,"orientationchange").pipe(Object(l.a)(0),Object(c.a)((function(){return Object(r.a)(350)})),Object(d.a)((function(){return A()})),Object(f.a)());function A(){var e=void 0!==t&&t,n=void 0!==e.document&&e.document,o=n&&n.documentElement;return new m.a(_(o.clientWidth,e.innerWidth),_(o.clientHeight,e.innerHeight))}function _(a,b){return a<b?b:a}}).call(this,n(19))},177:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v}));n(12),n(100),n(6),n(11),n(101),n(102),n(103),n(104),n(105),n(106),n(107),n(108),n(109),n(110),n(111),n(112),n(113),n(15);var o=n(181),r=n(182),l=n(52),c=n(81),d=n(95),f=new Map;m();function m(e){return void 0===e&&(e=t),f.has(e)||f.set(e,Object(o.a)(e,"scroll")),f.get(e).pipe(Object(r.a)(0),Object(l.a)((function(){return v(e)})),Object(c.a)())}function v(e){void 0===e&&(e=t);var n=t.document,o=n&&n.documentElement||{scrollLeft:0,scrollTop:0};return new d.a(e.scrollLeft||t.pageXOffset||o.scrollLeft,e.scrollTop||t.pageYOffset||o.scrollTop)}}).call(this,n(19))},183:function(t,e,n){"use strict";var o={props:{tag:{type:String,required:!1,default:function(){return"div"}}}},r=(n(329),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"layouts-default-container"},[t._t("background"),t._v(" "),t._t("container",[t.$slots.default?n("div",{staticClass:"lost-flex-container"},[t._t("default")],2):t._e()])],2)}),[],!1,null,null,null);e.a=component.exports},184:function(t,e,n){"use strict";n(91);var o={props:{url:{type:[String,Object],default:"#"},title:{type:String,default:null},target:{type:String,default:"_blank"}},computed:{isExternal:function(){return"string"==typeof this.url&&(/^(http(s)?|ftp):\/\//.test(this.url)||this.url.startsWith("#"))}}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal?n("a",{attrs:{href:t.url,target:t.target||"_blank",rel:"noopener",title:t.title}},[t._t("default",[t._v(t._s(t.title))])],2):t.isExternal?t._e():n("nuxt-link",{attrs:{to:t.url,title:t.title}},[t._t("default",[t._v(t._s(t.title))])],2)}),[],!1,null,null,null);e.a=component.exports},186:function(t,e,n){"use strict";n(12),n(6),n(11),n(15);var o={speedkitComponents:{StagePicture:function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,484))},StageVideo:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,485))},ArticleText:function(){return n.e(9).then(n.bind(null,486))},ArticleTextImage:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,482))},SinglePicture:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,487))},SingleVideo:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,488))}}},r=n(10),component=Object(r.a)(o,undefined,undefined,!1,null,null,null);e.a=component.exports},219:function(t,e,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("230fbd13",content,!0,{sourceMap:!1})},221:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("144e9bf0",content,!0,{sourceMap:!1})},223:function(t,e){var n=["class","staticClass","style","staticStyle","attrs"];function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},o=Object.keys(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,m=data.class,v=data.staticClass,style=data.style,h=data.staticStyle,x=data.attrs,y=void 0===x?{}:x,A=l(data,n);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[m,v],style:[style,h],attrs:Object.assign({viewBox:"0 0 100 100"},y)},A),f.concat([c("g",[c("path",{attrs:{d:"M93.3 24.8H6.7a6.7 6.7 0 010-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7zM93.3 54.8H6.7a6.7 6.7 0 010-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7zM93.3 84.8H6.7a6.7 6.7 0 010-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7z"}})]),c("g",[c("path",{attrs:{d:"M59.6 50L98 11.6c2.7-2.7 2.7-7 0-9.6-2.7-2.7-7-2.7-9.6 0L50 40.4 11.6 2C8.9-.7 4.6-.7 2 2-.7 4.7-.7 9 2 11.6L40.4 50 2 88.4c-2.7 2.7-2.7 7 0 9.6 2.7 2.7 7 2.7 9.6 0L50 59.6 88.4 98c2.7 2.7 7 2.7 9.6 0 2.7-2.7 2.7-7 0-9.6L59.6 50z"}})])]))}}},224:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("ccb4df68",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("5f57434c",content,!0,{sourceMap:!1})},226:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("384551a5",content,!0,{sourceMap:!1})},227:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("bab17f6a",content,!0,{sourceMap:!1})},248:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-regular.d003394.woff2"},249:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-italic.23f11e5.woff2"},250:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700.3683284.woff2"},251:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700italic.44dad63.woff2"},252:function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-regular.839e5a2.woff2"},253:function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-700.ae7afc8.woff2"},270:function(t,e,n){"use strict";n(12),n(6),n(11),n(15),n(62);var o={props:{label:{type:String,default:"Button Label"}},methods:{onClick:function(t){this.$emit("click",t)}}},r=(n(319),n(10)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",400,"normal"),expression:"$getFont('Raleway', 400, 'normal')"}],staticClass:"atom-base-button",on:{click:t.onClick}},[t._t("default",[n("span",[t._v(t._s(t.label))])])],2)}),[],!1,null,null,null).exports,c=n(271),d=n(63),f={components:{BaseButton:l,SpeedkitLayer:c.a},data:function(){return{hydrate:!1}},head:function(){return{noscript:[Object(d.c)(".page-info-layer > div { animation-delay: initial !important; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}}},m=(n(323),Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("speedkit-layer",{staticClass:"page-info-layer"},[n("div",[n("p",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",400,"normal"),expression:"$getFont('Raleway', 400, 'normal')"}]},[t._v("\n      Sorry, but you will have a limited user experience due to a…\n    ")]),t._v(" "),n("ul",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",700,"normal"),expression:"$getFont('Raleway', 700, 'normal')"}]},[n("li",{attrs:{id:"nuxt-speedkit__message__nojs"}},[t._v("\n        disabled javascript\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__unsupported-browser"}},[t._v("\n        outdated browser\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__outdated-device"}},[t._v("\n        outdated device\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__slow-connection"}},[t._v("\n        slow connection\n      ")])]),t._v(" "),n("div",{staticClass:"info_layer__buttons"},[n("base-button",{attrs:{id:"nuxt-speedkit__button__init-nojs"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n          OK\n        ")])]),t._v(" "),n("base-button",{attrs:{id:"nuxt-speedkit__button__init-font",onclick:"window.__NUXT_SPEEDKIT_FONT_INIT__ = true;"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n          No\n        ")])]),t._v(" "),n("base-button",{attrs:{id:"nuxt-speedkit__button__init-app",label:"Yes",onclick:"window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"}})],1)])])}),[],!1,null,"1521a0e2",null).exports),v=n(133),h=n(385),x=n(386),y=n(382),A=n(383),map=n(52),filter=n(384),_=n(176),w=Object(h.a)(_.a,_.b).pipe(Object(x.a)({refCount:!0,bufferSize:1})).pipe(Object(y.a)(1)).pipe(Object(y.a)("direction")).pipe(Object(A.a)(3,1)).pipe(Object(map.a)((function(t){return t.reduce((function(t,e){return t+e.y}),0)/t.length}))).pipe(Object(filter.a)((function(t){return!(t%1)}))).pipe(Object(x.a)({refCount:!0,bufferSize:1})),j=n(223),O={components:{svgIconMenuClose:n.n(j).a},props:{label:{type:String,default:function(){return"Menu Open/Close"}}},computed:{isMenuOpened:function(){return this.$store.getters["modal/isModelOpened"]("menu")},toggleDirection:function(){return this.$store.getters["layout/toggleDirection"]||!1}},methods:{onClickMenu:function(){this.$store.dispatch("modal/toggleModal",{name:"menu"})}}},k=(n(327),Object(r.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"button-toggle"}},[t.toggleDirection?t._e():n("button",{staticClass:"page-menu-button",class:{"js--selected":t.isMenuOpened},attrs:{"aria-label":t.label},on:{click:t.onClickMenu}},[n("i",[n("svg-icon-menu-close")],1)])])}),[],!1,null,null,null).exports),M=n(142),C={components:{PageMenuButton:k,PageMenu:Object(v.a)((function(){return n.e(10).then(n.bind(null,481))}),{event:"hydrate"}),PageInfoLayer:m},speedkitComponents:{PageHeader:function(){return Promise.resolve().then(n.bind(null,380))},PageFooter:function(){return n.e(13).then(n.bind(null,483))}},data:function(){return{preventMenuOpened:!0}},head:function(){var t=this.$nuxtI18nSeo();return t.htmlAttrs[String("data-prevent-scrolling")]=this.preventScrolling,t},computed:{layoutData:function(){return M[this.$i18n.locale]},layoutComponents:function(){return(this.layoutData||{components:[]}).components},preventScrolling:function(){return this.$store.getters["layout/preventScrolling"]}},mounted:function(){var t=this;this.subscriptions=[w.subscribe(this.onDirectionChange)],this.$nuxt.$on("triggerScroll",(function(){t.onDirectionChange(null,!0)}))},destroyed:function(){this.subscriptions.forEach((function(t){return t.unsubscribe()}))},methods:{onDirectionChange:function(t,e){void 0===e&&(e=!1),e?this.$store.dispatch("layout/toggleDirection",!1):this.$store.dispatch("layout/toggleDirection",t>0)},onClickMenuButton:function(){this.preventMenuOpened=!1,this.$refs.pageMenu.$el.dispatchEvent(new CustomEvent("hydrate"))}}},E=(n(333),Object(r.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header",t._b({attrs:{sticky:""}},"page-header",t.layoutComponents.pageHeader,!1)),t._v(" "),n("page-menu",t._b({ref:"pageMenu",attrs:{opened:!t.preventMenuOpened}},"page-menu",t.layoutComponents.pageMenu,!1)),t._v(" "),n("page-menu-button",t._b({nativeOn:{click:function(e){return t.onClickMenuButton(e)}}},"page-menu-button",t.layoutComponents.pageMenuButton,!1)),t._v(" "),n("main",[n("nuxt")],1),t._v(" "),n("page-footer",t._b({},"page-footer",t.layoutComponents.pageFooter,!1)),t._v(" "),n("page-info-layer",{attrs:{critical:""}})],1)}),[],!1,null,null,null));e.a=E.exports},278:function(t,e,n){t.exports=n(279)},308:function(t,e,n){t.exports=n.p+"img/414.c91de65.jpg"},309:function(t,e,n){t.exports=n.p+"img/576.f614056.jpg"},310:function(t,e,n){t.exports=n.p+"img/768.4cf4890.jpg"},311:function(t,e,n){t.exports=n.p+"img/992.e4dfdca.jpg"},312:function(t,e,n){t.exports=n.p+"img/1200.3ec4550.jpg"},313:function(t,e,n){t.exports=n.p+"img/1600.f0531af.jpg"},314:function(t,e,n){t.exports=n.p+"img/1920.d628427.jpg"},319:function(t,e,n){"use strict";n(219)},320:function(t,e,n){var o=n(46)((function(i){return i[1]}));o.push([t.i,".atom-base-button{color:currentColor;cursor:pointer;background:transparent;border:.0625em solid;border-radius:.3125em;outline:none;transition:transform .1s ease-in;-webkit-appearance:none;-moz-appearance:none;appearance:none;will-change:transform}.atom-base-button>*{display:block;padding:.625em 1.25em;cursor:pointer}.atom-base-button:hover{transform:scale(1.05)}.atom-base-button:active{transform:scale(.95)}",""]),o.locals={},t.exports=o},323:function(t,e,n){"use strict";n(221)},324:function(t,e,n){var o=n(46)((function(i){return i[1]}));o.push([t.i,".page-info-layer[data-v-1521a0e2] #nuxt-speedkit__speedkit-layer__content{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:rgba(0,0,0,.25);opacity:0;animation-name:fade-in-data-v-1521a0e2;animation-duration:.2s;animation-delay:3s;-webkit-backdrop-filter:blur(.4375em);backdrop-filter:blur(.4375em);animation-fill-mode:forwards}.page-info-layer[data-v-1521a0e2] #nuxt-speedkit__speedkit-layer__content>div{padding:10px;color:#fff;text-align:center;background-color:rgba(0,0,0,.6);box-shadow:0 0 .625em rgba(0,0,0,.6);transform:translateY(-100%);animation-name:fall-down-data-v-1521a0e2;animation-duration:.2s;animation-delay:.5s;animation-fill-mode:forwards}.page-info-layer.nuxt-speedkit__speedkit-layer--visible[data-v-1521a0e2] #nuxt-speedkit__speedkit-layer__content{animation-delay:0s}ul[data-v-1521a0e2]{padding:0;margin:0}ul>li[data-v-1521a0e2]{display:none}.info_layer__buttons[data-v-1521a0e2]{margin:.625em 0}.info_layer__buttons>*[data-v-1521a0e2]{margin:0 .3125em}@keyframes fade-in-data-v-1521a0e2{to{opacity:1}}@keyframes fall-down-data-v-1521a0e2{to{transform:translateY(0)}}",""]),o.locals={},t.exports=o},327:function(t,e,n){"use strict";n(224)},328:function(t,e,n){var o=n(46)((function(i){return i[1]}));o.push([t.i,'.page-menu-button{position:fixed;bottom:10vh;left:calc(50% - 24px);z-index:1001;box-sizing:border-box;display:block;width:12.8vw;padding:12px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;background:hsla(0,0%,100%,.6);border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:50%;outline:none;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);box-shadow:0 0 10px rgba(0,0,0,.3);-webkit-tap-highlight-color:transparent}@media (min-width:576px){.page-menu-button{width:48px}}@media (min-width:992px){.page-menu-button{bottom:80px}}.page-menu-button svg{display:block;width:100%}.page-menu-button i{position:relative;display:block}.page-menu-button i:before{display:block;padding-top:100%;content:""}.page-menu-button i>*{position:absolute;top:0;left:0}.page-menu-button svg g{transition:transform .3s linear,opacity .3s linear;transform-origin:center center}.page-menu-button svg g:last-child{opacity:0;transition:transform .15s linear,opacity .15s linear;transform:scale(.4)}.page-menu-button.js--selected{background:rgba(0,0,0,.5)}.page-menu-button.js--selected svg{fill:#fff}.page-menu-button.js--selected svg g:first-child{opacity:0;transition:transform .15s linear,opacity .15s linear;transform:scale(.4)}.page-menu-button.js--selected svg g:last-child{opacity:1;transform:scale(1)}.button-toggle-enter-active,.button-toggle-leave-active{transition:transform .3s linear,opacity .3s linear}.button-toggle-enter,.button-toggle-leave-to{opacity:0;transition:transform .15s linear,opacity .15s linear;transform:scale(.4)}',""]),o.locals={},t.exports=o},329:function(t,e,n){"use strict";n(225)},330:function(t,e,n){var o=n(46)((function(i){return i[1]}));o.push([t.i,".layouts-default-container{margin:40px 0}.layouts-default-container:first-child{margin-top:0}.layouts-default-container .lost-flex-container{display:flex}@media (min-width:576px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:540px;margin-left:auto;margin-right:auto}}@media (max-width:575px){.layouts-default-container .lost-flex-container{padding:0 15px}}@media (min-width:768px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:720px;margin-left:auto;margin-right:auto}}@media (min-width:992px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:960px;margin-left:auto;margin-right:auto}}@media (min-width:1200px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:1140px;margin-left:auto;margin-right:auto}}",""]),o.locals={},t.exports=o},331:function(t,e,n){"use strict";n(226)},332:function(t,e,n){var o=n(46)((function(i){return i[1]}));o.push([t.i,".page-header[data-v-0b5a7d7d]{position:fixed;top:0;left:0;z-index:100;width:100%;margin:0;transition:transform .2s linear,opacity .2s linear}.page-header.sticky[data-v-0b5a7d7d]{position:sticky}.page-header.js--toggle[data-v-0b5a7d7d]{opacity:0;transform:translateY(-60%)}.page-header .logo[data-v-0b5a7d7d]{padding:10px 0;font-size:24px;font-weight:700;text-align:center;background:hsla(0,0%,100%,.5);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);box-shadow:0 0 10px rgba(0,0,0,.3)}.page-header .logo a[data-v-0b5a7d7d]{color:#000;text-decoration:none}",""]),o.locals={},t.exports=o},333:function(t,e,n){"use strict";n(227)},334:function(t,e,n){var o=n(46)((function(i){return i[1]}));o.push([t.i,"body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}html[data-prevent-scrolling=true] body{overflow:hidden}",""]),o.locals={},t.exports=o},335:function(t,e,n){"use strict";n.r(e),n.d(e,"actions",(function(){return r}));var o=n(142),r={nuxtServerInit:function(t){(0,t.dispatch)("layout/setData",o)}}},336:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"getters",(function(){return l})),n.d(e,"actions",(function(){return c}));var o=function(){return{data:{},preventScrolling:!1,toggleDirection:!1}},r={data:function(t,e){t.data=e},preventScrolling:function(t,data){t.preventScrolling=Boolean(data)},toggleDirection:function(t,data){t.toggleDirection=Boolean(data)}},l={data:function(t){return t.data},preventScrolling:function(t){return t.preventScrolling},toggleDirection:function(t){return t.toggleDirection}},c={setData:function(t,e){t.commit("data",e)},toggleDirection:function(t,e){t.commit("toggleDirection",e)},togglePreventScrolling:function(t,e){var n=!t.getters.preventScrolling;void 0!==e&&(n=e),t.commit("preventScrolling",n)}}},337:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"getters",(function(){return l})),n.d(e,"actions",(function(){return c}));n(61),n(17),n(217),n(20);var o=function(){return{modals:[]}},r={toggleModal:function(t,e){var n=t.modals.find((function(t){return t.name===e.name}));n&&(n.opened=void 0!==e.flag?e.flag:!n.opened),this.dispatch("layout/togglePreventScrolling",!!t.modals.find((function(t){return t.opened})))},add:function(t,e){t.modals.push(e)},remove:function(t,e){t.modals.splice(t.modals.indexOf(e),1)}},l={getModal:function(t){return function(e){return d(t.modals,e)}},isModelOpened:function(t){return function(e){return(d(t.modals,e)||{opened:!1}).opened}}},c={registerModal:function(t,e){t.commit("add",Object.assign({name:null,opened:!1},e))},unregisterModal:function(t,e){t.commit("remove",e)},toggleModal:function(t,e){t.commit("toggleModal",e)}};function d(t,e){return t.find((function(t){return t.name===e}))}},367:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-regular.f8d47ad.woff"},368:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-italic.66656db.woff"},369:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700.6aded4d.woff"},370:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700italic.25b7072.woff"},371:function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-regular.c04c7bf.woff"},372:function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-700.b1d6d7d.woff"},380:function(t,e,n){"use strict";n.r(e);var o=n(183),r=n(184),l={components:{LayoutDefaultContainer:o.a,AtomLinkTo:r.a},props:{sticky:{type:Boolean,required:!1}},computed:{styleClasses:function(){return{"js--toggle":this.toggleDirection,sticky:this.sticky}},isMenuOpened:function(){return this.$store.getters["layout/isModelOpened"]("menu")},toggleDirection:function(){return this.$store.getters["layout/toggleDirection"]}}},c=(n(331),n(10)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-default-container",{staticClass:"page-header",class:t.styleClasses,attrs:{tag:"header"}},[n("template",{slot:"container"},[n("div",{staticClass:"logo"},[n("atom-link-to",{attrs:{url:"/"}},[t._v("\n        Logo\n      ")])],1)])],2)}),[],!1,null,"0b5a7d7d",null);e.default=component.exports},65:function(t,e,n){"use strict";var o={extends:n(186).a,props:{error:{type:Object,default:function(){return{}}}},head:function(){return{title:this.error.statusCode}},computed:{components:function(){return[{component:"StagePicture",data:{picture:{placeholders:[{format:"jpg",url:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCNEVGN0EyNkU5RTExRUJCMDkwQ0MwRUY0MUI3MjY2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCNEVGN0ExNkU5RTExRUJCMDkwQ0MwRUY0MUI3MjY2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUM2QjRDNzlGRkRBMTFFOUJFRjk4MkQ3MEUxODg0RDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUM2QjRDN0FGRkRBMTFFOUJFRjk4MkQ3MEUxODg0RDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAARAB4DAREAAhEBAxEB/8QAWwABAQEBAAAAAAAAAAAAAAAAAAUCCAEBAAAAAAAAAAAAAAAAAAAAABAAAgICAgICAwAAAAAAAAAAAgMBBAAFEgYRITETcSIUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDlTAqaTr9vcEYVWoFoMQoEtaINadlwpCErmeTPBF5Lj8R7wN9u1uv1faNrrNcxjaVC02qlzZiTOEnK5OeMRH7SPmIwJGAwK/Xd5X09j+uaIWbyXVrFGyTGDKDruFszADPE/sgeE8onx8x7wNdztay523cXdW2W663cdYqmQyBfW45YIkJe/I8uM/jAjYDAYDAYH//Z"}],sources:[{format:"jpg",sizes:[{width:414,media:"all",url:n(308)},{width:576,media:"(min-width: 576px)",url:n(309)},{width:768,media:"(min-width: 768px)",url:n(310)},{width:992,media:"(min-width: 992px)",url:n(311)},{width:1200,media:"(min-width: 1200px)",url:n(312)},{width:1600,media:"(min-width: 1600px)",url:n(313)},{width:1600,media:"(min-width: 1900)",url:n(314)}]}]}}},{component:"ArticleText",data:{article:{headline:{overline:null,headline:String(this.error.statusCode),subline:null},content:"<p>"+this.error.message+"</p>"}}}]}}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},t._l(t.components,(function(e,o){return n(e.component,t._b({key:o,tag:"component"},"component",e.data,!1))})),1)}),[],!1,null,null,null);e.a=component.exports}});