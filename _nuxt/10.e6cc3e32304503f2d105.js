(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{174:function(t,e,n){"use strict";var o={props:{tag:{type:String,required:!1,default:function(){return"div"}}}},r=(n(374),n(151)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"layouts-default-container"},[t._t("background"),t._v(" "),t._t("container",(function(){return[t.$slots.default?n("div",{staticClass:"lost-flex-container"},[t._t("default")],2):t._e()]}))],2)}),[],!1,null,null,null);e.a=component.exports},214:function(t,e,n){"use strict";n(64),n(179);var o={props:{url:{type:[String,Object],default:"#"},title:{type:String,default:null},target:{type:String,default:"_blank"}},computed:{isExternal:function(){return"string"==typeof this.url&&(/^(http(s)?|ftp):\/\//.test(this.url)||this.url.startsWith("#"))}}},r=n(151),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal?n("a",{attrs:{href:t.url,target:t.target||"_blank",rel:"noopener",title:t.title}},[t._t("default",(function(){return[t._v(t._s(t.title))]}))],2):t.isExternal?t._e():n("nuxt-link",{attrs:{to:t.url,title:t.title}},[t._t("default",(function(){return[t._v(t._s(t.title))]}))],2)}),[],!1,null,null,null);e.a=component.exports},220:function(t,e,n){"use strict";var o={extends:n(222).a,props:{error:{type:Object,default:function(){return{}}}},head:function(){return{title:this.error.statusCode}},computed:{components:function(){return[{component:"StagePicture",data:{picture:{sources:[{src:"/img/error.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}],title:String(this.error.statusCode),alt:String(this.error.statusCode)}}},{component:"ArticleText",data:{article:{headline:{overline:null,headline:String(this.error.statusCode),subline:null},content:"<p>"+this.error.message+"</p>"}}}]}}},r=n(151),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},t._l(t.components,(function(e,o){return n(e.component,t._b({key:o,tag:"component"},"component",e.data,!1))})),1)}),[],!1,null,null,null);e.a=component.exports},222:function(t,e,n){"use strict";n(63),n(62),n(96),n(98);var o=n(231),r={components:{StagePicture:Object(o.a)((function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,537))})),StageVideo:Object(o.a)((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,538))})),ArticleText:Object(o.a)((function(){return n.e(12).then(n.bind(null,539))})),ArticleTextImage:Object(o.a)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,534))})),SinglePicture:Object(o.a)((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,540))})),SingleVideo:Object(o.a)((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,541))}))}},l=n(151),component=Object(l.a)(r,undefined,undefined,!1,null,null,null);e.a=component.exports},277:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(153).default)("70da7d1a",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(153).default)("0b6722a4",content,!0,{sourceMap:!1})},279:function(t,e){var n=["class","staticClass","style","staticStyle","attrs"];function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},o=Object.keys(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,m=data.class,v=data.staticClass,style=data.style,x=data.staticStyle,h=data.attrs,y=void 0===h?{}:h,_=l(data,n);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[m,v],style:[style,x],attrs:Object.assign({viewBox:"0 0 100 100"},y)},_),f.concat([c("g",[c("path",{attrs:{d:"M93.3 24.8H6.7a6.7 6.7 0 010-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7zM93.3 54.8H6.7a6.7 6.7 0 010-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7zM93.3 84.8H6.7a6.7 6.7 0 010-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7z"}})]),c("g",[c("path",{attrs:{d:"M59.6 50L98 11.6c2.7-2.7 2.7-7 0-9.6-2.7-2.7-7-2.7-9.6 0L50 40.4 11.6 2C8.9-.7 4.6-.7 2 2-.7 4.7-.7 9 2 11.6L40.4 50 2 88.4c-2.7 2.7-2.7 7 0 9.6 2.7 2.7 7 2.7 9.6 0L50 59.6 88.4 98c2.7 2.7 7 2.7 9.6 0 2.7-2.7 2.7-7 0-9.6L59.6 50z"}})])]))}}},280:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(153).default)("5eff0028",content,!0,{sourceMap:!1})},281:function(t){t.exports=JSON.parse('{"de":{"components":{"pageHeader":{},"pageMenu":{"navigation":[{"title":"Home","url":"/"},{"title":"Über uns","url":"/p/ueber-uns"},{"title":"Projekte","url":"/p/projekte","childrens":[{"title":"Projekt 1","url":"/p/projekte/projekt-1"},{"title":"Projekt 2","url":"/p/projekte/projekt-2"}]}]},"pageMenuButton":{"label":"Menu Öffnen/Schließen"},"pageFooter":{"navigation":[{"title":"Kontakt","url":"/p/kontakt"},{"title":"Nutzungsbedingungen","url":"/p/nutzungsbedingungen"},{"title":"Rechtliche Hinweise","url":"/p/rechtliche-hinweise"}]}}},"en":{"components":{"pageHeader":{},"pageMenu":{"navigation":[{"title":"Home","url":"index"},{"title":"About","url":"/p/about"},{"title":"Projects","url":"/p/projects","childrens":[{"title":"Project 1","url":"/p/projects/project-1"},{"title":"Project 2","url":"/p/projects/project-2"}]}]},"pageMenuButton":{"label":"Menu Open/Close"},"pageFooter":{"navigation":[{"title":"Contact","url":"/p/contact"},{"title":"Terms of use","url":"/p/terms"},{"title":"Legals","url":"/p/legals"}]}}}}')},282:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(153).default)("fae9c0a8",content,!0,{sourceMap:!1})},283:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(153).default)("7d77b46b",content,!0,{sourceMap:!1})},284:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(153).default)("86a65876",content,!0,{sourceMap:!1})},311:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-regular.d003394.woff2"},312:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-italic.23f11e5.woff2"},313:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700.3683284.woff2"},314:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700italic.44dad63.woff2"},315:function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-regular.839e5a2.woff2"},316:function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-700.ae7afc8.woff2"},362:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(153).default)("3055e119",content,!0,{sourceMap:!1})},363:function(t,e,n){var o=n(152)((function(i){return i[1]}));o.push([t.i,":root{--color-black:#000;--color-red:red;--color-white:#fff;--color-light-grey:#eee}",""]),o.locals={},t.exports=o},368:function(t,e,n){"use strict";n(277)},369:function(t,e,n){var o=n(152)((function(i){return i[1]}));o.push([t.i,".atom-base-button{color:currentColor;cursor:pointer;background:transparent;border:.0625em solid;border-radius:.3125em;outline:none;transition:transform .1s ease-in;-webkit-appearance:none;appearance:none;will-change:transform}.atom-base-button>*{display:block;padding:.625em 1.25em;cursor:pointer}.atom-base-button:hover{transform:scale(1.05)}.atom-base-button:active{transform:scale(.95)}",""]),o.locals={},t.exports=o},370:function(t,e,n){"use strict";n(278)},371:function(t,e,n){var o=n(152)((function(i){return i[1]}));o.push([t.i,".page-info-layer[data-v-7951f8e0] #nuxt-speedkit__speedkit-layer__content{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:rgba(0,0,0,.25);opacity:0;animation-name:fade-in-data-v-7951f8e0;animation-duration:.2s;animation-delay:3s;-webkit-backdrop-filter:blur(.4375em);backdrop-filter:blur(.4375em);animation-fill-mode:forwards}.page-info-layer[data-v-7951f8e0] #nuxt-speedkit__speedkit-layer__content>div{padding:10px;color:#fff;text-align:center;background-color:rgba(0,0,0,.6);box-shadow:0 0 .625em rgba(0,0,0,.6);transform:translateY(-100%);animation-name:fall-down-data-v-7951f8e0;animation-duration:.2s;animation-delay:.5s;animation-fill-mode:forwards}.page-info-layer.nuxt-speedkit__speedkit-layer--visible[data-v-7951f8e0] #nuxt-speedkit__speedkit-layer__content{animation-delay:0s}ul[data-v-7951f8e0]{padding:0;margin:0}ul>li[data-v-7951f8e0]{display:none}.info_layer__buttons[data-v-7951f8e0]{margin:.625em 0}.info_layer__buttons>*[data-v-7951f8e0]{margin:0 .3125em}@keyframes fade-in-data-v-7951f8e0{to{opacity:1}}@keyframes fall-down-data-v-7951f8e0{to{transform:translateY(0)}}",""]),o.locals={},t.exports=o},372:function(t,e,n){"use strict";n(280)},373:function(t,e,n){var o=n(152)((function(i){return i[1]}));o.push([t.i,'.page-menu-button{position:fixed;bottom:10vh;left:calc(50% - 24px);z-index:1001;box-sizing:border-box;display:block;width:12.8vw;padding:12px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;background:hsla(0,0%,100%,.6);border:none;-webkit-appearance:none;appearance:none;border-radius:50%;outline:none;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);box-shadow:0 0 10px rgba(0,0,0,.3);-webkit-tap-highlight-color:transparent}@media (min-width:576px){.page-menu-button{width:48px}}@media (--xs){.page-menu-button{width:48px}}@media (min-width:992px){.page-menu-button{bottom:80px}}@media (--md){.page-menu-button{bottom:80px}}.page-menu-button svg{display:block;width:100%}.page-menu-button i{position:relative;display:block}.page-menu-button i:before{display:block;padding-top:100%;content:""}.page-menu-button i>*{position:absolute;top:0;left:0}.page-menu-button svg g{transition:transform .3s linear,opacity .3s linear;transform-origin:center center}.page-menu-button svg g:last-child{opacity:0;transition:transform .15s linear,opacity .15s linear;transform:scale(.4)}.page-menu-button.js--selected{background:rgba(0,0,0,.5)}.page-menu-button.js--selected svg{fill:#fff}.page-menu-button.js--selected svg g:first-child{opacity:0;transition:transform .15s linear,opacity .15s linear;transform:scale(.4)}.page-menu-button.js--selected svg g:last-child{opacity:1;transform:scale(1)}.button-toggle-enter-active,.button-toggle-leave-active{transition:transform .3s linear,opacity .3s linear}.button-toggle-enter,.button-toggle-leave-to{opacity:0;transition:transform .15s linear,opacity .15s linear;transform:scale(.4)}',""]),o.locals={},t.exports=o},374:function(t,e,n){"use strict";n(282)},375:function(t,e,n){var o=n(152)((function(i){return i[1]}));o.push([t.i,".layouts-default-container{margin:40px 0}.layouts-default-container:first-child{margin-top:0}.layouts-default-container .lost-flex-container{display:flex}@media (min-width:576px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:540px;margin-left:auto;margin-right:auto}}@media (--xs){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:540px;margin-left:auto;margin-right:auto}}@media (max-width:575px){.layouts-default-container .lost-flex-container{padding:0 15px}}@media (--default-max){.layouts-default-container .lost-flex-container{padding:0 15px}}@media (min-width:768px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:720px;margin-left:auto;margin-right:auto}}@media (--sm){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:720px;margin-left:auto;margin-right:auto}}@media (min-width:992px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:960px;margin-left:auto;margin-right:auto}}@media (--md){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:960px;margin-left:auto;margin-right:auto}}@media (min-width:1200px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:1140px;margin-left:auto;margin-right:auto}}@media (--lg){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:1140px;margin-left:auto;margin-right:auto}}",""]),o.locals={},t.exports=o},376:function(t,e,n){"use strict";n(283)},377:function(t,e,n){var o=n(152)((function(i){return i[1]}));o.push([t.i,".page-header[data-v-6c4ef725]{position:fixed;top:0;left:0;z-index:100;width:100%;margin:0;transition:transform .2s linear,opacity .2s linear}.page-header.sticky[data-v-6c4ef725]{position:sticky}.page-header.js--toggle[data-v-6c4ef725]{opacity:0;transform:translateY(-60%)}.page-header .logo[data-v-6c4ef725]{padding:10px 0;font-size:24px;font-weight:700;text-align:center;background:hsla(0,0%,100%,.5);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);box-shadow:0 0 10px rgba(0,0,0,.3)}.page-header .logo a[data-v-6c4ef725]{color:var(--color-black);text-decoration:none}",""]),o.locals={},t.exports=o},378:function(t,e,n){"use strict";n(284)},379:function(t,e,n){var o=n(152)((function(i){return i[1]}));o.push([t.i,"body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:375px){body{font-size:max(4.266666666666667vw, 1rem)}}@media (min-width:576px){body{font-size:max(2.7777777777777777vw, 1rem)}}@media (min-width:768px){body{font-size:max(2.083333333333333vw, 1rem)}}@media (min-width:992px){body{font-size:max(1.6129032258064515vw, 1rem)}}@media (min-width:1200px){body{font-size:16px}}html[data-prevent-scrolling=true] body{overflow:hidden}",""]),o.locals={},t.exports=o},380:function(t,e,n){"use strict";n.r(e),n.d(e,"actions",(function(){return r}));var o=n(281),r={nuxtServerInit:function(t){(0,t.dispatch)("layout/setData",o)}}},381:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"getters",(function(){return l})),n.d(e,"actions",(function(){return c}));var o=function(){return{data:{},preventScrolling:!1,toggleDirection:!1}},r={data:function(t,e){t.data=e},preventScrolling:function(t,data){t.preventScrolling=Boolean(data)},toggleDirection:function(t,data){t.toggleDirection=Boolean(data)}},l={data:function(t){return t.data},preventScrolling:function(t){return t.preventScrolling},toggleDirection:function(t){return t.toggleDirection}},c={setData:function(t,e){t.commit("data",e)},toggleDirection:function(t,e){t.commit("toggleDirection",e)},togglePreventScrolling:function(t,e){var n=!t.getters.preventScrolling;void 0!==e&&(n=e),t.commit("preventScrolling",n)}}},382:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"getters",(function(){return l})),n.d(e,"actions",(function(){return c}));n(162),n(62),n(154),n(272),n(97);var o=function(){return{modals:[]}},r={toggleModal:function(t,e){var n=t.modals.find((function(t){return t.name===e.name}));n&&(n.opened=void 0!==e.flag?e.flag:!n.opened),this.dispatch("layout/togglePreventScrolling",!!t.modals.find((function(t){return t.opened})))},add:function(t,e){t.modals.push(e)},remove:function(t,e){t.modals.splice(t.modals.indexOf(e),1)}},l={getModal:function(t){return function(e){return d(t.modals,e)}},isModelOpened:function(t){return function(e){return(d(t.modals,e)||{opened:!1}).opened}}},c={registerModal:function(t,e){t.commit("add",Object.assign({name:null,opened:!1},e))},unregisterModal:function(t,e){t.commit("remove",e)},toggleModal:function(t,e){t.commit("toggleModal",e)}};function d(t,e){return t.find((function(t){return t.name===e}))}},426:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-regular.f8d47ad.woff"},427:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-italic.66656db.woff"},428:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700.6aded4d.woff"},429:function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700italic.25b7072.woff"},430:function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-regular.c04c7bf.woff"},431:function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-700.b1d6d7d.woff"},513:function(t,e,n){"use strict";var o=n(65),r=(n(100),n(63),n(62),n(96),n(98),n(101),n(232)),l=n(231),c=n(514),d=n(233),f={props:{label:{type:String,default:"Button Label"}},methods:{onClick:function(t){this.$emit("click",t)}}},m=(n(368),n(151)),v={components:{BaseButton:Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",400,"normal"),expression:"$getFont('Raleway', 400, 'normal')"}],staticClass:"atom-base-button",on:{click:t.onClick}},[t._t("default",(function(){return[n("span",[t._v(t._s(t.label))])]}))],2)}),[],!1,null,null,null).exports,SpeedkitLayer:c.a},data:function(){return{hydrate:!1}},head:function(){return{noscript:[Object(d.b)(".page-info-layer > div { animation-delay: initial !important; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}}},x=(n(370),Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("speedkit-layer",{staticClass:"page-info-layer"},[n("div",[n("p",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",400,"normal"),expression:"$getFont('Raleway', 400, 'normal')"}]},[t._v("\n      Sorry, but you will have a limited user experience due to a…\n    ")]),t._v(" "),n("ul",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",700,"normal"),expression:"$getFont('Raleway', 700, 'normal')"}]},[n("li",{attrs:{id:"nuxt-speedkit__message__nojs"}},[t._v("\n        disabled javascript\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__unsupported-browser"}},[t._v("\n        outdated browser\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__outdated-device"}},[t._v("\n        outdated device\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__slow-connection"}},[t._v("\n        slow connection\n      ")])]),t._v(" "),n("div",{staticClass:"info_layer__buttons"},[n("base-button",{attrs:{id:"nuxt-speedkit__button__init-nojs"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n          OK\n        ")])]),t._v(" "),n("base-button",{attrs:{id:"nuxt-speedkit__button__init-font",onclick:"window.__NUXT_SPEEDKIT_FONT_INIT__ = true;"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n          No\n        ")])]),t._v(" "),n("base-button",{attrs:{id:"nuxt-speedkit__button__init-app",label:"Yes",onclick:"window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"}})],1)])])}),[],!1,null,"7951f8e0",null).exports),h=n(279),y={components:{svgIconMenuClose:n.n(h).a},props:{label:{type:String,default:function(){return"Menu Open/Close"}}},computed:{isMenuOpened:function(){return this.$store.getters["modal/isModelOpened"]("menu")},toggleDirection:function(){return this.$store.getters["layout/toggleDirection"]||!1}},methods:{onClickMenu:function(){this.$store.dispatch("modal/toggleModal",{name:"menu"})}}},_=(n(372),Object(m.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"button-toggle"}},[t.toggleDirection?t._e():n("button",{staticClass:"page-menu-button",class:{"js--selected":t.isMenuOpened},attrs:{"aria-label":t.label},on:{click:t.onClickMenu}},[n("i",[n("svg-icon-menu-close")],1)])])}),[],!1,null,null,null).exports),w=n(281),k={components:{PageMenuButton:_,PageMenu:Object(r.b)((function(){return n.e(13).then(n.bind(null,533))}),{event:"hydrate"}),PageInfoLayer:x,PageHeader:Object(l.a)((function(){return Promise.resolve().then(n.bind(null,515))})),PageFooter:Object(l.a)((function(){return n.e(17).then(n.bind(null,536))}))},data:function(){return{preventMenuOpened:!0}},head:function(){var t=this.$nuxtI18nHead();return t.htmlAttrs[String("data-prevent-scrolling")]=this.preventScrolling,t},computed:{layoutData:function(){return w[this.$i18n.locale]},layoutComponents:function(){return(this.layoutData||{components:[]}).components},preventScrolling:function(){return this.$store.getters["layout/preventScrolling"]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(9),n.e(19)]).then(n.bind(null,520));case 2:o=e.sent,r=o.directionDetectionObserver,t.subscriptions=[r.subscribe(t.onDirectionChange)],t.$nuxt.$on("triggerScroll",(function(){t.onDirectionChange(null,!0)}));case 6:case"end":return e.stop()}}),e)})))()},destroyed:function(){this.subscriptions.forEach((function(t){return t.unsubscribe()}))},methods:{onDirectionChange:function(t,e){void 0===e&&(e=!1),e?this.$store.dispatch("layout/toggleDirection",!1):this.$store.dispatch("layout/toggleDirection",t>0)},onClickMenuButton:function(){this.preventMenuOpened=!1,this.$refs.pageMenu.$el.dispatchEvent(new CustomEvent("hydrate"))}}},O=(n(378),Object(m.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header",t._b({attrs:{sticky:""}},"page-header",t.layoutComponents.pageHeader,!1)),t._v(" "),n("page-menu",t._b({ref:"pageMenu",attrs:{opened:!t.preventMenuOpened}},"page-menu",t.layoutComponents.pageMenu,!1)),t._v(" "),n("page-menu-button",t._b({nativeOn:{click:function(e){return t.onClickMenuButton.apply(null,arguments)}}},"page-menu-button",t.layoutComponents.pageMenuButton,!1)),t._v(" "),n("main",[n("nuxt")],1),t._v(" "),n("page-footer",t._b({},"page-footer",t.layoutComponents.pageFooter,!1)),t._v(" "),n("page-info-layer",{attrs:{critical:""}})],1)}),[],!1,null,null,null));e.a=O.exports},515:function(t,e,n){"use strict";n.r(e);var o=n(174),r=n(214),l={components:{LayoutDefaultContainer:o.a,AtomLinkTo:r.a},props:{sticky:{type:Boolean,required:!1}},computed:{styleClasses:function(){return{"js--toggle":this.toggleDirection,sticky:this.sticky}},isMenuOpened:function(){return this.$store.getters["layout/isModelOpened"]("menu")},toggleDirection:function(){return this.$store.getters["layout/toggleDirection"]}}},c=(n(376),n(151)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-default-container",{staticClass:"page-header",class:t.styleClasses,attrs:{tag:"header"}},[n("template",{slot:"container"},[n("div",{staticClass:"logo"},[n("atom-link-to",{attrs:{url:"/"}},[t._v("\n        Logo\n      ")])],1)])],2)}),[],!1,null,"6c4ef725",null);e.default=component.exports}}]);