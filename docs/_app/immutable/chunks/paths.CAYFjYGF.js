import{n as l,f as x,r as q,s as A,h as k}from"./scheduler.CrsDffe0.js";const u=[];function v(e,i){return{subscribe:z(e,i).subscribe}}function z(e,i=l){let r;const n=new Set;function c(t){if(A(e,t)&&(e=t,r)){const o=!u.length;for(const s of n)s[1](),u.push(s,e);if(o){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function b(t){c(t(e))}function f(t,o=l){const s=[t,o];return n.add(s),n.size===1&&(r=i(c,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:c,update:b,subscribe:f}}function E(e,i,r){const n=!Array.isArray(e),c=n?[e]:e;if(!c.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=i.length<2;return v(r,(f,t)=>{let o=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const a=i(n?s[0]:s,f,t);b?f(a):p=k(a)?a:l},y=c.map((a,_)=>x(a,w=>{s[_]=w,d&=~(1<<_),o&&g()},()=>{d|=1<<_}));return o=!0,g(),function(){q(y),p(),o=!1}})}var h;const T=((h=globalThis.__sveltekit_moxnct)==null?void 0:h.base)??"/IAincomics";var m;const I=((m=globalThis.__sveltekit_moxnct)==null?void 0:m.assets)??T;export{I as a,T as b,E as d,v as r,z as w};
