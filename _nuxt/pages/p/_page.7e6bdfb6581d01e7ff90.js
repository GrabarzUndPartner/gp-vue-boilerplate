(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{242:function(n,t,e){"use strict";var r=e(72),o=(e(116),e(187),e(68),e(70),e(192),e(252));function c(path,n){return n+"/"+((path=path.replace(/^\//,"").replace(n,"").replace(/^[\\/]?/,"").replace(/^\//,""))||"index")}var l={components:{BaseContentContainer:e(203).a},extends:o.a,asyncData:function(n){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,o,l,f,d,path,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.$content,r=n.store,o=n.app,l=n.error,f=n.route,d=o.i18n.locale,path=c(f.path,d),t.next=5,e(path).fetch().catch((function(n){return l(n)}));case 5:return data=t.sent,Array.isArray(data)&&(data=data.find((function(n){return"index"===n.slug}))),"routeParams"in data&&r.dispatch("i18n/setRouteParams",data.routeParams),t.abrupt("return",{title:data.title,components:data.components});case 9:case"end":return t.stop()}}),t)})))()},data:function(){return{title:"title of page",components:[]}},head:function(){return{title:this.title}}},f=e(177),component=Object(f.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("base-content-container",{staticClass:"content"},[n._l(n.components.slice(0,1),(function(t,r){return e(t.component,n._b({key:r,tag:"component",attrs:{critical:""}},"component",t.data,!1))})),n._v(" "),e("base-content-container",n._l(n.components.slice(1),(function(t,r){return e(t.component,n._b({key:r,tag:"component"},"component",t.data,!1))})),1)],2)}),[],!1,null,null,null);t.a=component.exports},586:function(n,t,e){"use strict";e.r(t);var r={extends:e(242).a,nuxtI18n:{paths:{de:"/p/:page",en:"/p/:page"}}},o=e(177),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);