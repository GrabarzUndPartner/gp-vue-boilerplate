(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{249:function(t,e,r){"use strict";r.r(e);var n=r(164),c=r(367),o={components:{LayoutDefaultContainer:n.a,AtomResponsiveImage:c.a},props:{options:{type:Object,default:function(){return{}}},picture:{type:Object,required:!1,default:function(){return{sources:[{media:"default",srcset:"img/sample-a-16-9/412x232.jpg"},{media:"xs",srcset:"img/sample-a-16-9/768x432.jpg"},{media:"sm",srcset:"img/sample-a-16-9/992x558.jpg"},{media:"md",srcset:"img/sample-a-16-9/1200x675.jpg"},{media:"lg",srcset:"img/sample-a-16-9/1600x900.jpg"},{media:"xl",srcset:"img/sample-a-16-9/1920x1080.jpg"}]}}}}},m=r(19),component=Object(m.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout-default-container",this._b({staticClass:"organism-stage-picture"},"layout-default-container",this.options,!1),[e("template",{slot:"background"},[this.picture?e("atom-responsive-image",this._b({},"atom-responsive-image",this.picture,!1)):this._e()],1)],2)}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,r){"use strict";r.r(e),r.d(e,"Stage",(function(){return o}));r(97);var n=r(388),c=r(249);e.default={title:"Organism/Stage",component:c.default,argTypes:{picture:{control:{type:"select",options:{SetA:Object(n.a)("dog"),SetB:Object(n.a)("skyscrapers")}},defaultValue:Object(n.a)("dog")}}};var o=function(t,e){var r=e.argTypes;return{components:{OrganismStagePicture:c.default},props:Object.keys(r),template:'<organism-stage-picture :picture="JSON.parse($props.picture)" />'}}},360:function(t,e,r){"use strict";(function(t){r(32),r(247),r(246),r(27),r(362),r(8),r(21),r(38),r(46),r(39);var n=r(363),c={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",webp:"image/webp"};e.a={props:{loading:{type:String,default:"auto"},sourceClientOnly:{type:Boolean,default:!0},placeholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},sources:{type:[Array,Object],default:function(){return[{media:"default",srcset:"img/sample-a-16-9/412x232.jpg"},{media:"xs",srcset:"img/sample-a-16-9/768x432.jpg"},{media:"sm",srcset:"img/sample-a-16-9/992x558.jpg"},{media:"md",srcset:"img/sample-a-16-9/1200x675.jpg"},{media:"lg",srcset:"img/sample-a-16-9/1600x900.jpg"},{media:"xl",srcset:"img/sample-a-16-9/1920x1080.jpg"}]}},width:{type:Number,default:null},height:{type:Number,default:null},title:{type:String,default:"image title"},alt:{type:String,default:"image description"}},computed:{sorted:function(){return function(t,pattern){return t.sort((function(a,b){return pattern.indexOf(a.media)===pattern.indexOf(b.media)?0:pattern.indexOf(a.media)>pattern.indexOf(b.media)?1:-1}))}([].concat(this.sources),Array.from(n.a.keys())).reverse()},items:function(){var t=this;return this.sorted.map((function(source){var e;return(source=Object.assign({},source)).type="",t.sourceClientOnly,source.type=c[(e=source.srcset.replace(/.*\.(\w{3,4}).*$/,"$1"),/\w+$/.exec(e)[0])],source.media=n.a.get(source.media),source}))}},methods:{onLoad:function(){"objectFitImages"in t&&t.objectFitImages(this.$el.querySelector("img"))}}}}).call(this,r(33))},361:function(t,e,r){var content=r(366);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("baea8822",content,!0,{sourceMap:!1})},362:function(t,e,r){"use strict";var n=r(22),c=r(13),o=r(95),m=r(28),l=r(23),d=r(67),f=r(167),h=r(126),x=r(9),A=r(96),y=r(165).f,w=r(76).f,j=r(29).f,N=r(248).trim,O=c.Number,v=O.prototype,I="Number"==d(A(v)),S=function(t){var e,r,n,c,o,m,l,code,d=h(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=N(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+d}for(m=(o=d.slice(2)).length,l=0;l<m;l++)if((code=o.charCodeAt(l))<48||code>c)return NaN;return parseInt(o,n)}return+d};if(o("Number",!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var E,_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(I?x((function(){v.valueOf.call(r)})):"Number"!=d(r))?f(new O(S(e)),r,_):S(e)},k=n?y(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;k.length>C;C++)l(O,E=k[C])&&!l(_,E)&&j(_,E,w(O,E));_.prototype=v,v.constructor=_,m(c,"Number",_)}},363:function(t,e,r){"use strict";r(47),r(168),r(166),r(8),r(21),r(38),r(46),r(60),r(39);var n,c=r(364),o=new Map(Object.entries(c));e.a=(n=new Map,o.forEach((function(t,e){n.set(e.replace("--",""),t)})),n)},364:function(t){t.exports=JSON.parse('{"--default":"all","--default-max":"(max-width: 575px)","--xs":"(min-width: 576px)","--xs-max":"(max-width: 767px)","--sm":"(min-width: 768px)","--sm-max":"(max-width: 991px)","--md":"(min-width: 992px)","--md-max":"(max-width: 1199px)","--lg":"(min-width: 1200px)","--lg-max":"(max-width: 1599px)","--xl":"(min-width: 1600px)","--xl-max":"(max-width: 1919px)","--xxl":"(min-width: 1920px)"}')},365:function(t,e,r){"use strict";r(361)},366:function(t,e,r){(e=r(58)(!1)).push([t.i,"picture,picture img{display:block}picture img{width:100%;max-width:100%}",""]),t.exports=e},367:function(t,e,r){"use strict";var n=r(360).a,c=(r(365),r(19)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{staticClass:"atom-responsive-image"},[t._l(t.items,(function(source,e){return r("source",t._b({key:e},"source",source,!1))})),t._v(" "),r("img",{attrs:{src:t.placeholder,alt:t.alt,title:t.title,loading:t.loading,width:t.width,height:t.height},on:{load:t.onLoad}})],2)}),[],!1,null,null,null);e.a=component.exports},388:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r(40),r(41);var n=[{name:"dog",sources:[{media:"xl",srcset:"https://picsum.photos/id/237/1920/200"},{media:"l",srcset:"https://picsum.photos/id/237/1599/200"},{media:"md",srcset:"https://picsum.photos/id/237/1199/200"},{media:"sm",srcset:"https://picsum.photos/id/237/991/200"},{media:"xs",srcset:"https://picsum.photos/id/237/767/200"},{media:"default",srcset:"https://picsum.photos/id/237/575/200"}],alt:"dog",title:"dog"},{name:"skyscrapers",sources:[{media:"xl",srcset:"https://picsum.photos/id/238/1920/200"},{media:"l",srcset:"https://picsum.photos/id/238/1599/200"},{media:"md",srcset:"https://picsum.photos/id/238/1199/200"},{media:"sm",srcset:"https://picsum.photos/id/238/991/200"},{media:"xs",srcset:"https://picsum.photos/id/238/767/200"},{media:"default",srcset:"https://picsum.photos/id/238/575/200"}],alt:"skyscrapers",title:"skyscrapers"}];function c(t){return JSON.stringify(n.find((function(picture){return picture.name===t})))}}}]);