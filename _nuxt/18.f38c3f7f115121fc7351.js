(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{246:function(e,t,l){var content=l(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(192).default)("667a9b47",content,!0,{sourceMap:!1})},259:function(e,t,l){"use strict";var n={components:{AtomLinkTo:l(250).a},props:{type:{type:String,default:function(){return null}},list:{type:Array,default:function(){return[]}}},computed:{styleClasses:function(){var e={};return e["type--"+this.type]=this.type,e}},methods:{getUrl:function(e){return"$i18n"in this?this.localePath(e.url):e.url}}},o=(l(288),l(190)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("ul",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Raleway"),expression:"$getFont('Raleway')"}],staticClass:"molecule-link-list",class:e.styleClasses},[e._t("default",(function(){return e._l(e.list,(function(l){return t("li",{key:l.title},[t("atom-link-to",{attrs:{url:e.getUrl(l)}},[e._v("\n        "+e._s(l.title)+"\n      ")])],1)}))}))],2)}),[],!1,null,null,null);t.a=component.exports},288:function(e,t,l){"use strict";l(246)},289:function(e,t,l){var n=l(191)((function(i){return i[1]}));n.push([e.i,".molecule-link-list.type--page-menu-links{padding:0;margin:0;list-style:none;}.molecule-link-list.type--page-menu-links li{display:block;font-size:8.53333vw;line-height:2em;}@media (min-width: 576px){.molecule-link-list.type--page-menu-links li{font-size:32px;}}@media (--xs){.molecule-link-list.type--page-menu-links li{font-size:32px;}}@media (min-width: 992px){.molecule-link-list.type--page-menu-links li{font-size:36px;}}@media (--md){.molecule-link-list.type--page-menu-links li{font-size:36px;}}.molecule-link-list.type--page-menu-links li a{color:var(--color-black);text-decoration:none;opacity:.6;}.molecule-link-list.type--page-menu-links li a.nuxt-link-exact-active{opacity:1}.type--page-menu-links .molecule-link-list.type--page-menu-links{line-height:1;text-align:center;}.type--page-menu-links .molecule-link-list.type--page-menu-links li{display:inline-block;margin:0 2.66667vw;font-size:5.86667vw;line-height:1.5em;}@media (min-width: 576px){.type--page-menu-links .molecule-link-list.type--page-menu-links li{margin-left:10px;margin-bottom:0;margin-right:10px;margin-top:0;font-size:22px;}}@media (--xs){.type--page-menu-links .molecule-link-list.type--page-menu-links li{margin-left:10px;margin-bottom:0;margin-right:10px;margin-top:0;font-size:22px;}}@media (min-width: 992px){.type--page-menu-links .molecule-link-list.type--page-menu-links li{font-size:26px;}}@media (--md){.type--page-menu-links .molecule-link-list.type--page-menu-links li{font-size:26px;}}.molecule-link-list.type--page-footer{padding:0;margin:0;list-style:none;}@media (max-width: 991px){.molecule-link-list.type--page-footer{text-align:center;}}@media (--sm-max){.molecule-link-list.type--page-footer{text-align:center;}}.molecule-link-list.type--page-footer li{display:inline-block;margin-right:2.66667vw;font-size:4.26667vw;line-height:2em;}@media (min-width: 576px){.molecule-link-list.type--page-footer li{font-size:16px;}}@media (--xs){.molecule-link-list.type--page-footer li{font-size:16px;}}.molecule-link-list.type--page-footer li a{color:var(--color-black);text-decoration:none;opacity:.6;}.molecule-link-list.type--page-footer li a.nuxt-link-exact-active{opacity:1}",""]),n.locals={},e.exports=n},370:function(e,t,l){var content=l(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(192).default)("9270879e",content,!0,{sourceMap:!1})},536:function(e,t,l){"use strict";l(370)},537:function(e,t,l){var n=l(191)((function(i){return i[1]}));n.push([e.i,".page-footer{padding:5.33333% 0;margin:0;}@media (min-width: 576px){.page-footer{padding-left:0;padding-bottom:20px;padding-right:0;padding-top:20px;}}@media (--xs){.page-footer{padding-left:0;padding-bottom:20px;padding-right:0;padding-top:20px;}}.page-footer{background:var(--color-light-grey);}",""]),n.locals={},e.exports=n},580:function(e,t,l){"use strict";l.r(t);var n=l(210),o=l(259),r={components:{LayoutLostContainer:n.a,LinkList:o.a},props:{options:{type:Object,default:function(){return{}}},navigation:{type:Array,default:function(){return[]}}}},m=(l(536),l(190)),component=Object(m.a)(r,(function(){var e=this._self._c;return e("layout-lost-container",{staticClass:"page-footer",attrs:{tag:"footer"}},[e("nav",[e("link-list",{attrs:{list:this.navigation,type:"page-footer"}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);