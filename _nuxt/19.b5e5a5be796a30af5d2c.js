(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{513:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return w}));var c=n(542),r=n(556),o=n(563),f=n(543),O=n(270),j=n(537),d=n(348),l=n(514),v=Object(c.a)(e,"resize").pipe(Object(o.a)(0),Object(f.a)((function(){return Object(r.a)(350)})),Object(O.a)((function(){return m()})),Object(j.a)()),h=Object(l.b)(),w=Object(l.a)().pipe(Object(O.a)((function(e){var t=new d.a((function(){return(e-h)/Math.abs(e-h)}));return h=e,{position:e,direction:t}})),Object(j.a)());Object(c.a)(e,"orientationchange").pipe(Object(o.a)(0),Object(f.a)((function(){return Object(r.a)(350)})),Object(O.a)((function(){return m()})),Object(j.a)());function m(){var t=void 0!==e&&e,n=void 0!==t.document&&t.document,c=n&&n.documentElement;return new d.a(z(c.clientWidth,t.innerWidth),z(c.clientHeight,t.innerHeight))}function z(a,b){return a<b?b:a}}).call(this,n(33))},514:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l}));n(66),n(197),n(65),n(103),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(105);var c=n(542),r=n(563),o=n(270),f=n(537),O=n(348),j=new Map;d();function d(t){return void 0===t&&(t=e),j.has(t)||j.set(t,Object(c.a)(t,"scroll")),j.get(t).pipe(Object(r.a)(0),Object(o.a)((function(){return l(t)})),Object(f.a)())}function l(t){void 0===t&&(t=e);var n=e.document,c=n&&n.documentElement||{scrollLeft:0,scrollTop:0};return new O.a(t.scrollLeft||e.pageXOffset||c.scrollLeft,t.scrollTop||e.pageYOffset||c.scrollTop)}}).call(this,n(33))},541:function(e,t,n){"use strict";n.r(t),n.d(t,"viewportObserver",(function(){return l})),n.d(t,"directionDetectionObserver",(function(){return v}));n(65);var c=n(567),r=n(568),o=n(544),f=n(545),O=n(270),j=n(546),d=n(513),l=Object(c.a)(d.a,d.b).pipe(Object(r.a)({refCount:!0,bufferSize:1})),v=l.pipe(Object(o.a)(1)).pipe(Object(o.a)("direction")).pipe(Object(f.a)(3,1)).pipe(Object(O.a)((function(e){return e.reduce((function(e,t){return e+t.y}),0)/e.length}))).pipe(Object(j.a)((function(e){return!(e%1)}))).pipe(Object(r.a)({refCount:!0,bufferSize:1}))}}]);