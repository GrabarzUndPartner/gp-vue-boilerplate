(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{251:function(t,e,o){var content=o(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(193).default)("69047851",content,!0,{sourceMap:!1})},290:function(t,e){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var r=["class","staticClass","style","staticStyle","attrs"];function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t,e,r){return(e=function(t){var e=function(input,t){if("object"!==o(input)||null===input)return input;var e=input[Symbol.toPrimitive];if(void 0!==e){var r=e.call(input,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(input)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(source,t){if(null==source)return{};var e,i,o=function(source,t){if(null==source)return{};var e,i,o={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(o[e]=source[e]);return o}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(o[e]=source[e])}return o}t.exports={functional:!0,render:function(t,e){var o=e._c,data=(e._v,e.data),d=e.children,v=void 0===d?[]:d,f=data.class,y=data.staticClass,style=data.style,m=data.staticStyle,h=data.attrs,w=void 0===h?{}:h,x=c(data,r);return o("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){l(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,y],style:[style,m],attrs:Object.assign({viewBox:"0 0 20 20",fill:"currentColor"},w)},x),v.concat([o("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"}})]))}}},291:function(t,e,o){"use strict";o(251)},292:function(t,e,o){var r=o(192)((function(i){return i[1]}));r.push([t.i,'.atom-responsive-video[data-v-a634cc02]{background:var(--color-black);position:relative}.atom-responsive-video[data-v-a634cc02]:before{content:"";display:block;padding-top:177.77778%}@media (min-width:576px){.atom-responsive-video[data-v-a634cc02]:before{padding-top:56.25%}}.atom-responsive-video video[data-v-a634cc02]{height:100%;left:0;position:absolute;top:0;width:100%;z-index:5}.atom-responsive-video .poster[data-v-a634cc02]{height:100%;left:0;position:absolute;top:0;width:100%;z-index:10}.atom-responsive-video .poster[data-v-a634cc02]:before{content:"";display:block;padding-top:177.77778%}@media (min-width:576px){.atom-responsive-video .poster[data-v-a634cc02]:before{padding-top:56.25%}}.atom-responsive-video .poster[data-v-a634cc02] picture{height:100%;left:0;position:absolute;top:0;width:100%}.atom-responsive-video .poster[data-v-a634cc02] img{left:0;position:absolute;top:0;width:100%}.atom-responsive-video .play-button[data-v-a634cc02]{cursor:pointer;height:100%;left:0;position:absolute;top:0;width:100%;z-index:11}.atom-responsive-video .play-button svg[data-v-a634cc02]{color:var(--color-white);filter:drop-shadow(0 0 6px black);height:64px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:64px}.atom-responsive-video.js--started .play-button[data-v-a634cc02],.atom-responsive-video.js--started .poster[data-v-a634cc02]{opacity:0;pointer-events:none}',""]),r.locals={},t.exports=r},309:function(t,e,o){"use strict";o(129),o(55);var r=o(257),n=o(290),l=o.n(n),c={components:{SpeedkitPicture:r.a,SvgIconPlay:l.a},props:{poster:{type:Object,required:!1,default:function(){return{title:"Text Image",alt:"Text Image",sources:[{src:"/img/sample-a-16-9.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]}}},sources:{type:Array,required:!1,default:function(){return[{type:"video/mp4",src:"video/9_16/BigBuckBunny_9_16.mp4",media:"all and (max-width:575px)"},{type:"video/mp4",src:"video/16_9/BigBuckBunny_16_9.mp4",media:"all and (min-width:576px)"}]}},autoplay:{type:Boolean,required:!1,default:function(){return!1}},muted:{type:Boolean,required:!1,default:function(){return!1}},loop:{type:Boolean,required:!1,default:function(){return!1}},controls:{type:Boolean,required:!1,default:function(){return!0}},playsinline:{type:Boolean,required:!1,default:function(){return!1}},preload:{type:String,required:!1,default:function(){return"none"}}},data:function(){return{videoPlaying:!1,videoStarted:!1}},computed:{videoAttributes:function(){return{playsinline:this.playsinline,preload:this.preload,loop:this.loop,controls:this.controls,muted:this.muted}},styleClasses:function(){return{"js--started":this.videoStarted,"js--playing":this.videoPlaying}},filteredSources:function(){var t=this;return this.$isServer?[]:this.sources.filter((function(source){return t.isMedia(source.media)}))}},mounted:function(){var t=this;this.$nextTick((function(){t.autoplay&&t.$refs.video.play()}))},methods:{isMedia:function(t){return!!this.$isServer||t&&window.matchMedia(t).matches},onClickPlayButton:function(){this.$refs.video.play()},onPlay:function(){this.videoStarted=this.videoPlaying=!0},onPause:function(){this.videoPlaying=!1}}},d=(o(291),o(191)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"atom-responsive-video",class:t.styleClasses},[e("client-only",[e("video",t._b({ref:"video",on:{play:t.onPlay,pause:t.onPause}},"video",t.videoAttributes,!1),t._l(t.filteredSources,(function(source,o){return e("source",t._b({key:o},"source",source,!1))})),0)]),t._v(" "),e("speedkit-picture",t._b({staticClass:"poster"},"speedkit-picture",t.poster,!1)),t._v(" "),t.autoplay?t._e():e("span",{staticClass:"play-button",on:{click:t.onClickPlayButton}},[e("svg-icon-play")],1)],1)}),[],!1,null,"a634cc02",null);e.a=component.exports},371:function(t,e,o){var content=o(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(193).default)("655bbdc4",content,!0,{sourceMap:!1})},539:function(t,e,o){"use strict";o(371)},540:function(t,e,o){var r=o(192)((function(i){return i[1]}));r.push([t.i,".organism-stage-video[data-v-00ea137c]{position:relative;width:100%}.organism-stage-video[data-v-00ea137c]:first-child{margin-top:0}",""]),r.locals={},t.exports=r},601:function(t,e,o){"use strict";o.r(e);var r=o(216),n=o(309),l={components:{LayoutLostContainer:r.a,AtomResponsiveVideo:n.a},props:{video:{type:Object,required:!1,default:function(){return{poster:{sources:[{src:"/img/sample-a-16-9.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}]}}}}}},c=(o(539),o(191)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("layout-lost-container",{staticClass:"organism-stage-video"},[e("template",{slot:"background"},[t.video?e("atom-responsive-video",t._b({},"atom-responsive-video",t.video,!1)):t._e()],1)],2)}),[],!1,null,"00ea137c",null);e.default=component.exports}}]);