import{l as b,m as d,f as D,s as O,n as B,q as M,v as z,w as E,x as g,y as H,z as R,g as S,A as V}from"./ZCiEmPkK.js";const j=s=>s==="defer"||s===!1;function q(...s){var p;const i=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(i);let[t,u,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=b(),P=u,w=()=>d.value,C=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??w,a.getCachedData=a.getCachedData??C,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const f=a.getCachedData(t,e),m=f!=null;if(!e._asyncData[t]||!a.immediate){(p=e.payload._errors)[t]??(p[t]=d.errorValue);const o=a.deep?D:O;e._asyncData[t]={data:o(m?f:a.default()),pending:D(!m),error:B(e.payload._errors,t),status:D("idle"),_default:a.default}}const r={...e._asyncData[t]};delete r._default,r.refresh=r.execute=(o={})=>{if(e._asyncDataPromises[t]){if(j(o.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(o._initial||e.isHydrating&&o._initial!==!1){const c=o._initial?f:a.getCachedData(t,e);if(c!=null)return Promise.resolve(c)}r.pending.value=!0,r.status.value="pending";const l=new Promise((c,n)=>{try{c(P(e))}catch(y){n(y)}}).then(async c=>{if(l.cancelled)return e._asyncDataPromises[t];let n=c;a.transform&&(n=await a.transform(c)),a.pick&&(n=N(n,a.pick)),e.payload.data[t]=n,r.data.value=n,r.error.value=d.errorValue,r.status.value="success"}).catch(c=>{if(l.cancelled)return e._asyncDataPromises[t];r.error.value=H(c),r.data.value=R(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]},r.clear=()=>K(e,t);const h=()=>r.refresh({_initial:!0}),_=a.server!==!1&&e.payload.serverRendered;{const o=S();if(o&&_&&a.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const n=o._nuxtOnBeforeMountCbs;M(()=>{n.forEach(y=>{y()}),n.splice(0,n.length)}),z(()=>n.splice(0,n.length))}_&&e.isHydrating&&(r.error.value||f!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):o&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(h):a.immediate&&h();const l=V();if(a.watch){const n=E(a.watch,()=>r.refresh());l&&g(n)}const c=e.hook("app:data:refresh",async n=>{(!n||n.includes(t))&&await r.refresh()});l&&g(c)}const v=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(v,r),v}function K(s,i){i in s.payload.data&&(s.payload.data[i]=void 0),i in s.payload._errors&&(s.payload._errors[i]=d.errorValue),s._asyncData[i]&&(s._asyncData[i].data.value=void 0,s._asyncData[i].error.value=d.errorValue,s._asyncData[i].pending.value=!1,s._asyncData[i].status.value="idle"),i in s._asyncDataPromises&&(s._asyncDataPromises[i]&&(s._asyncDataPromises[i].cancelled=!0),s._asyncDataPromises[i]=void 0)}function N(s,i){const t={};for(const u of i)t[u]=s[u];return t}export{q as u};
