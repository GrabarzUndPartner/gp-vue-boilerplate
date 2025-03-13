import{fromEvent as zt,startWith as xt,map as L,share as tt,debounce as Dt,timer as kt,combineLatest as Bt,pluck as Pt,bufferCount as Kt,filter as vt,shareReplay as Ft}from"./CZqGRR4s.js";function et(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function It(e,t){const{x:n,y:r,z:o}=t,{x:s,y:i,z:u,w:h}=e,c=h*n+i*o-u*r,f=h*r+u*n-s*o,a=h*o+s*r-i*n,x=-s*n-i*r-u*o,S=c*h+x*-s+f*-u-a*-i,j=f*h+x*-i+a*-s-c*-u,y=a*h+x*-u+c*-i-f*-s;return new t.constructor(S,j,y)}const wt=Math.PI,ut=Math.PI*2;function H(e){let t=e%ut;return t<-wt?t+=ut:t>wt&&(t-=ut),t}function te(e){return e>-1?e<1?Math.acos(e):0:wt}function ee(e,[t,n,r]){const[o,s,i]=e;return new e.constructor(new o.constructor(o.x*t.x+s.x*t.y+i.x*t.z,o.y*t.x+s.y*t.y+i.y*t.z,o.z*t.x+s.z*t.y+i.z*t.z),new o.constructor(o.x*n.x+s.x*n.y+i.x*n.z,o.y*n.x+s.y*n.y+i.y*n.z,o.z*n.x+s.z*n.y+i.z*n.z),new o.constructor(o.x*r.x+s.x*r.y+i.x*r.z,o.y*r.x+s.y*r.y+i.y*r.z,o.z*r.x+s.z*r.y+i.z*r.z))}function ne(e,{x:t,y:n,z:r}){const[o,s,i]=e;return new o.constructor(o.x*t+s.x*n+i.x*r,o.y*t+s.y*n+i.y*r,o.z*t+s.z*n+i.z*r)}function re(e,[t,n,r]){return new e.constructor(e.dot(t),e.dot(n),e.dot(r))}function M(e){return typeof e=="number"||(e==null?void 0:e.constructor)===Number}const oe=e=>{try{F(e),U(e,4)}catch(t){console.error("error while hijackDOMPoint"),console.error(t)}},W=0,St=1,Et=2,Ot=3,B=9999999999999,K=void 0,Xt=Symbol("vector length"),nt=Symbol("get source"),$t=Symbol("checked");let p=K,V,D;const se=[0,1,2,6,24,120,720,5760,51840,518400,5702400,68428800,889574400,12454041600,186810624e3],mt=[];let O=-1,ht=!1;const G=[];function lt(e,t,n){p=e,O=-1,D=1;const r=t(n);if(!M(r))throw new Error(`
      your assigned progress did not not return a primitive!
      calc() does not support logical operators (|| && ==) directly

      instead of calc(() => v1 || v2);
      use        calc(() => +v1 || +v2);

      instead of calc(() => v1);
      use        calc(v1);
      `);return r}function v(e){const t=e[nt];return t?t(e).length:e[Xt]||3}function ie(e,t){return v(e)>v(t)?e:t}function ce(e,t){if(D+=1,t===B)return D;if(t>=v(e))return 0;const n=e[nt];if(n)return 1*n(e)[t];if(t===W)return 1*e.x;if(t===St)return 1*e.y;if(t===Et)return 1*e.z;if(t===Ot)return 1*e.w}function Jt(e,t,n){const r=e[nt];if(r){r(e)[t]=n;return}if(t===W){e.x=n;return}if(t===St){e.y=n;return}t===Et&&(e.z=n),t===Ot&&(e.w=n)}function Q(e,t=void 0){if(typeof e!="function")throw new Error("no function assigned");if(p!==K)throw new Error("something wrong, do you use calc() inside calc?");try{const n=typeof t>"u",r=typeof t=="function",o=!r&&!n?t:void 0,s=lt(W,e,o);if(n&&typeof V>"u")return s;const i=V?v(V):0;if(i===B){if(!e[$t]){const f=lt(B,e),a=se[D];if(Math.abs(f-a)>Number.EPSILON)throw new Error(`
            algebraic multiplication works only in calls with *

            calc(() => v * m);
            calc(() => m * v);
            calc(() => m * m);
            calc(() => m * m * v);

            `);e[$t]=!0}let c=mt[0];for(let f=1;f<D-1;f+=1){const a=mt[f];if(!c.multiply)throw new Error(`cannot find method multiply() on ${c}`);c=c.multiply(a)}return c}let u=r?t.length:i;if(u||(u=i),u<i)throw new Error("Your assigned result Vector cant use higher space Operands than it has");const h=new Array(u);h[0]=s,o&&Jt(o,p,h[0]);for(let c=1;c<u;c+=1){const f=lt(c,e,o);h[c]=f,o&&Jt(o,p,f)}return n?new V.constructor(...h):r?t(...h):o}finally{p=K,V=void 0}}function F(e,t){const n=e.prototype;n[nt]=t;const r=n[Symbol.toPrimitive]||function(o){return o==="string"?this.toString():this.valueOf()};n[Symbol.toPrimitive]=function(o){return p===W&&(V=V?ie(V,this):this,mt[D-1]=this),p===K?r.call(this,o):ce(this,p)}}function bt(e){return function(...t){if(p===W){if(ht)return e.apply(this,t);try{ht=!0,O+=1;const n=e.apply(this,t);return G[O]=n,n}finally{ht=!1}}return p===St||p===Et||p===Ot?(O+=1,G[O]):e.apply(this,t)}}function w(e,t){const n=e.prototype,r=n[t];n[t]=bt(r)}function rt(e,t){const n=e.prototype,r=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(n,t,{get:bt(function(){return r.get.call(this)})})}function U(e,t){const n=e.prototype;Object.defineProperty(n,Xt,{value:t})}function Lt(e){U(e,B)}function Vt(e){return bt(e)}typeof DOMPoint<"u"&&oe(DOMPoint);function ue(e){let t="";return e&&(t=`${e}-`),t}function Y(e,t,n={}){const r=ue(e);return Object.entries(t).forEach(([o,s])=>{n[`--${r}${o}`]=s}),n}const dt=0,pt=1,g=Symbol("axes");function he(e,t,n,r){const o=Math.atan2(e,t),s=Math.atan2(n,r);return H(o-s)}function Tt(e){return e*e}class z{constructor(...t){typeof t[0]=="function"?Q(t[0],(n,r)=>{this[g]=[n,r]}):et(t[0])?this[g]=[...t[0]]:t[0]&&M(t[0].x)?this[g]=[t[0].x||0,t[0].y||0]:this[g]=[t[0]||0,t[1]||0]}valueOf(){throw new Error("valueOf() not implemented, looks like you try to calculate outside of calc")}normalize(){const{length:t}=this;return new this.constructor(this.x/t,this.y/t)}norm(){return this.normalize()}dot(t){return this.x*t.x+this.y*t.y}getRad(){return H(Math.atan2(this.y,this.x))}angleTo(t){return he(this.y,this.x,t.y,t.x)}rotate(t){const n=Math.sin(t),r=Math.cos(t),o=this.x*r-this.y*n,s=this.x*n+this.y*r;return new this.constructor(o,s)}distance(t){return Math.sqrt(Tt(this.x-t.x)+Tt(this.y-t.y))}dist(t){return this.distance(t)}toArray(){return[this.x,this.y]}calc(t){throw new Error("calc() not implemented")}clone(){throw new Error("clone() not implemented")}equals(t){return this.x===t.x&&this.y===t.y}toJSON(){return{x:this.x,y:this.y}}toString(){return JSON.stringify(this.toJSON())}toCSSVars(t,n){return Y(t,this.toJSON(),n)}get lengthSq(){return this.dot(this)}get length(){return Math.sqrt(this.lengthSq)}get lensq(){return this.lengthSq}get len(){return this.length}get x(){return this[g][dt]}set x(t){throw new Error("set x() not implemented")}get y(){return this[g][pt]}set y(t){throw new Error("set y() not implemented")}get z(){throw new Error("get z() not implemented")}set z(t){throw new Error("set z() not implemented")}[Symbol.iterator](){return this[g].values()}}F(z);U(z,2);w(z,"dot");w(z,"angleTo");w(z,"distance");w(z,"toArray");w(z,"getRad");rt(z,"length");rt(z,"lengthSq");class Mt extends z{set x(t){this[g][dt]=t}set y(t){this[g][pt]=t}get x(){return this[g][dt]}get y(){return this[g][pt]}calc(t){return Q(t,this)}clone(){return new Mt(this.x,this.y)}}class X extends z{toPoint(){return new Mt(this.x,this.y)}}const le=Vt((e,t)=>new X(e,t)),ot=(e,t)=>le(e,t);ot(0,0);ot(0,-1);ot(-1,0);const J=0,T=1,R=2,l=Symbol("axes");function yt(e){return e*e}class m{constructor(...t){typeof t[0]=="function"?Q(t[0],(n,r,o)=>{this[l]=[n,r,o]}):et(t[0])?this[l]=[...t[0]]:t[0]&&M(t[0].x)?this[l]=[t[0].x||0,t[0].y||0,t[0].z||0]:this[l]=[t[0]||0,t[1]||0,t[2]||0]}valueOf(){throw new Error("valueOf() not implemented, looks like you try to calculate outside of calc")}normalize(){const{length:t}=this;return new this.constructor(this.x/t,this.y/t,this.z/t)}norm(){return this.normalize()}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}cross(t){return new this.constructor(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}crossNormalize(t){const n=this.cross(t),{length:r}=n;return n[l][J]/=r,n[l][T]/=r,n[l][R]/=r,n}cn(t){return this.crossNormalize(t)}toAngles(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length)}}angleTo(t){return H(te(this.dot(t)/(this.length*t.length)))}multiply(t){return t.x===void 0?this.multiplyMat3(t):t.w===void 0?this.multiplyVec3(t):It(t,this)}multiplyMat3(t){return re(this,t)}multiplyVec3({x:t,y:n,z:r}){return new this.constructor(this.x*t,this.y*n,this.z*r)}distance(t){return Math.sqrt(yt(this.x-t.x)+yt(this.y-t.y)+yt(this.z-t.z))}dist(t){return this.distance(t)}toArray(){return[this.x,this.y,this.z]}swizzle(t){const n=t.split("").map(r=>this[r]);return n.length===2?new X(n[0],n[1]):new this.constructor(n[0],n[1],n[2])}calc(t){throw new Error("calc() not implemented")}clone(){throw new Error("clone() not implemented")}equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}toJSON(){return{x:this.x,y:this.y,z:this.z}}toString(){return JSON.stringify(this.toJSON())}toCSSVars(t,n){return Y(t,this.toJSON(),n)}get lengthSq(){return this.dot(this)}set lengthSq(t){throw new Error("set lengthSq() not implemented")}get length(){return Math.sqrt(this.lengthSq)}set length(t){throw new Error("set length() not implemented")}get lensq(){return this.lengthSq}set lensq(t){throw new Error("set lensq() not implemented")}get len(){return this.length}set len(t){throw new Error("set len() not implemented")}get x(){return this[l][J]}set x(t){throw new Error("set x() not implemented")}get y(){return this[l][T]}set y(t){throw new Error("set y() not implemented")}get z(){return this[l][R]}set z(t){throw new Error("set z() not implemented")}get xy(){return new X(this[l][J],this[l][T])}set xy(t){throw new Error("set xz() not implemented")}get xz(){return new X(this[l][J],this[l][R])}set xz(t){throw new Error("set xz() not implemented")}get yz(){return new X(this[l][T],this[l][R])}set yz(t){throw new Error("set yz() not implemented")}[Symbol.iterator](){return this[l].values()}}F(m);U(m,3);w(m,"dot");w(m,"cross");w(m,"crossNormalize");w(m,"toAngles");w(m,"angleTo");w(m,"rotate");w(m,"distance");w(m,"toArray");rt(m,"length");rt(m,"lengthSq");class qt extends m{set x(t){this[l][J]=t}set y(t){this[l][T]=t}set z(t){this[l][R]=t}get x(){return this[l][J]}get y(){return this[l][T]}get z(){return this[l][R]}calc(t){return Q(t,this)}clone(){return new qt(this.x,this.y,this.z)}}class st extends m{toVector(){return new qt(this.x,this.y,this.z)}clone(){return this}}const ye=Vt((e,t,n)=>new st(e,t,n)),q=(e,t,n)=>ye(e,t,n);q(0,0,0);const Ht=q(0,0,-1);q(0,0,1);const At=q(-1,0,0);q(1,0,0);const Wt=q(0,1,0);q(0,-1,0);q(1,1,1);const b=Symbol("angle rad"),Qt=Math.PI/180;class k{constructor(t){t instanceof k?this[b]=t[b]:this[b]=H(t*Qt)}valueOf(){return this[b]}toJSON(){return{angle:this[b]}}toString(){return JSON.stringify(this.toJSON())}toCSSVars(t,n){return Y(t,this.toJSON(),n)}}class Ut extends k{set(t){t instanceof k?this[b]=t[b]:this[b]=H((t||0)*Qt)}}class fe extends k{toDegree(){return new Ut(this[b])}}new fe(0);function ae(e){return new Ut(e)}function we(e){return M(e)||e instanceof k}const C=0,N=1,_=2,P=3,$=Symbol("axes"),me=Symbol("forward cache"),de=Symbol("left cache"),pe=Symbol("up cache"),ge=Symbol("inverse cache");function ze([e,t,n,r]){return Math.sqrt(e*e+t*t+n*n+r*r)}function xe(e){const t=ze(e);e[C]/=t,e[N]/=t,e[_]/=t,e[P]/=t}function Se(e,t){const n=e.normalize(),r=t.crossNormalize(n),o=n.crossNormalize(r),s=r.x,i=r.y,u=r.z,h=o.x,c=o.y,f=o.z,a=n.x,x=n.y,S=n.z,j=s+c+S,y=new Array(4);if(j>0){let d=Math.sqrt(j+1);return y[P]=d*.5,d=.5/d,y[C]=(f-x)*d,y[N]=(a-u)*d,y[_]=(i-h)*d,y}if(s>=c&&s>=S){const d=Math.sqrt(1+s-c-S),A=.5/d;return y[C]=.5*d,y[N]=(i+h)*A,y[_]=(u+a)*A,y[P]=(f-x)*A,y}if(c>S){const d=Math.sqrt(1+c-s-S),A=.5/d;return y[C]=(h+i)*A,y[N]=.5*d,y[_]=(x+f)*A,y[P]=(a-u)*A,y}const _t=Math.sqrt(1+S-s-c),ct=.5/_t;return y[C]=(a+u)*ct,y[N]=(x+f)*ct,y[_]=.5*_t,y[P]=(i-h)*ct,y}function Ee(e,t){const n=new Array(4),r=t*.5,o=Math.sin(r),s=Math.cos(r);return n[C]=o*e.x,n[N]=o*e.y,n[_]=o*e.z,n[P]=s,n}function gt(e,t,n,r){if(M(e))return[e,t,n,r];if(et(e))return[...e];if(we(t))return Ee(e,t);if(e&&t)return Se(e,t)}function Oe(e,t,n,r){return e&&M(e.w)?gt(e.x,e.y,e.z,e.w):gt(e,t,n,r)||[0,0,0,1]}class Ct{constructor(t,n,r,o){this[$]=Oe(t,n,r,o),xe(this[$])}set(t,n,r,o){throw new Error("set x() not implemented")}multiply(t,n,r,o){if(M(t.w))return this.multiplyQuaternion(t);const s=gt(t,n,r,o);return s?this.multiplyQuaternion(new this.constructor(s)):this.multiplyVector(t)}multiplyVector(t){return It(this,t)}multiplyQuaternion(t){const n=this.x,r=this.y,o=this.z,s=this.w,i=t.x,u=t.y,h=t.z,c=t.w,f=s*i+n*c+r*h-o*u,a=s*u+r*c+o*i-n*h,x=s*h+o*c+n*u-r*i,S=s*c-n*i-r*u-o*h;return new this.constructor(f,a,x,S)}mul(t,n,r,o){return this.multiply(t,n,r,o)}get inverse(){const{x:t,y:n,z:r,w:o}=this;return this.constructor(t*-1,n*-1,r*-1,o)}get inv(){return this.inverse}equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w}get left(){return this.multiplyVector(At)}get dir(){return this.multiplyVector(Ht)}get up(){return this.multiplyVector(Wt)}get 0(){return this.left}get 1(){return this.dir}get 2(){return this.up}get x(){return this[$][C]}set x(t){throw new Error("set x() not implemented")}get y(){return this[$][N]}set y(t){throw new Error("set y() not implemented")}get z(){return this[$][_]}set z(t){throw new Error("set z() not implemented")}get w(){return this[$][P]}set w(t){throw new Error("set w() not implemented")}toJSON(){const{x:t,y:n,z:r,w:o}=this;return{x:t,y:n,z:r,w:o,a1:1-n*n*2-r*r*2,a2:t*n*2-r*o*2,a3:t*r*2+n*o*2,b1:t*n*2+r*o*2,b2:1-t*t*2-r*r*2,b3:n*r*2-t*o*2,c1:t*r*2-n*o*2,c2:n*r*2+t*o*2,c3:1-t*t*2-n*n*2}}toString(){return JSON.stringify(this.toJSON())}toCSSVars(t,n){return Y(t,this.toJSON(),n)}}F(Ct);Lt(Ct);function Z(e,t,n){let r=e[t];return r||(r=n(),e[t]=r),r}class Yt extends Ct{get left(){return Z(this,de,()=>this.multiplyVector(At))}get dir(){return Z(this,me,()=>this.multiplyVector(Ht))}get up(){return Z(this,pe,()=>this.multiplyVector(Wt))}get inverse(){return Z(this,ge,()=>{const{x:t,y:n,z:r,w:o}=this;return this.constructor(t*-1,n*-1,r*-1,o)})}}const be=Vt((e,t,n,r)=>new Yt(e,t,n,r)),Ve=(e,t,n,r)=>be(e,t,n,r);new Yt(At,ae(90));Ve(0,0,0,1);const Me=0,qe=1,Ae=2,Ce=3,E=Symbol("axes");class Nt{constructor(t,n,r,o){typeof t=="function"?Q(t,(s,i,u,h)=>{this[E]=[s,i,u,h]}):et(t)?this[E]=[...t]:t&&M(t.x)?this[E]=[t.x||0,t.y||0,t.z||0,t.w||0]:this[E]=[t||0,n||0,r||0,o||0]}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}valueOf(){throw new Error("valueOf() not implemented, looks like you try to calculate outside of calc")}toArray(){return[this.x,this.y,this.z,this.w]}calc(t){throw new Error("calc() not implemented")}clone(){throw new Error("clone() not implemented")}equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w}toJSON(){return{x:this.x,y:this.y,z:this.z,w:this.w}}toString(){return JSON.stringify(this.toJSON())}toCSSVars(t,n){return Y(t,this.toJSON(),n)}get x(){return this[E][Me]}set x(t){throw new Error("set x() not implemented")}get y(){return this[E][qe]}set y(t){throw new Error("set y() not implemented")}get z(){return this[E][Ae]}set z(t){throw new Error("set z() not implemented")}get w(){return this[E][Ce]}set w(t){throw new Error("set w() not implemented")}[Symbol.iterator](){return this[E].values()}}F(Nt);U(Nt,4);w(Nt,"toArray");const I=Symbol("data");class it{constructor(...t){this[I]=t}get 0(){return this[I][0]}set 0(t){throw new Error("set [0] not implemented")}get 1(){return this[I][1]}set 1(t){throw new Error("set [1] not implemented")}get 2(){return this[I][2]}set 2(t){throw new Error("set [2] not implemented")}multiplyMat(t){return ee(this,t)}multiplyVec(t){return ne(this,t)}multiply(t){if(t instanceof it)return this.multiplyMat(t);const{x:n,y:r,z:o}=t;if(n===void 0||r===void 0||o===void 0)throw new Error(`multiply only works with mat3 and vec3, not supported ${t}`);return this.multiplyVec(t)}[Symbol.iterator](){return this[I].values()}}F(it);Lt(it);const ft=new Map;jt();function jt(e=window){return ft.has(e)||ft.set(e,zt(e,"scroll",{passive:!0})),ft.get(e).pipe(xt(0),L(()=>Gt(e)),tt())}function Gt(e=window){const t=window.document,n=t&&t.documentElement||{scrollLeft:0,scrollTop:0};return new st(e.scrollLeft||window.pageXOffset||n.scrollLeft,e.scrollTop||window.pageYOffset||n.scrollTop)}const Ne=zt(window,"resize").pipe(xt(0),Dt(()=>kt(350)),L(()=>Zt()),tt());let at=Gt();const _e=jt().pipe(L(e=>{const t=ot(e.x,Math.max(e.y,0),e.z),n=new st(()=>(t-at)/Math.abs(t-at));return at=t,{position:e,direction:n}}),tt());zt(window,"orientationchange").pipe(xt(0),Dt(()=>kt(350)),L(()=>Zt()),tt());function Zt(){const e=typeof window<"u"&&window,t=typeof e.document<"u"&&e.document,n=t&&t.documentElement;return new st(Rt(n.clientWidth,e.innerWidth),Rt(n.clientHeight,e.innerHeight))}function Rt(e,t){return e<t?t:e}const Pe=Bt(Ne,_e).pipe(Ft({refCount:!0,bufferSize:1})),$e=6,Te=Pe.pipe(Pt(1)).pipe(Pt("direction")).pipe(Kt($e,1)).pipe(L(e=>e.reduce((t,n)=>t+n.y,0)/e.length)).pipe(vt(e=>!(e%1))).pipe(Ft({refCount:!0,bufferSize:1}));export{Te as directionDetectionObserver,Pe as viewportObserver};
