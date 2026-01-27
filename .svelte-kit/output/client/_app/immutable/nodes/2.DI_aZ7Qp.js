import{f as Ct,a as ht,d as Jn,c as Xh}from"../chunks/BGe0dSUI.js";import{e as Jo,Q as Ou,P as Fa,h as xn,G as Wh,M as Bu,t as g,a4 as $h,X as Yh,Y as qh,Z as qc,W as Oa,i as gs,U as Zh,aE as Kh,an as Zc,c as jh,f as Qo,s as Jh,aH as Le,af as Kc,aC as ku,aL as Qh,aM as zu,r as Vu,p as ep,aN as Hu,aO as tp,aP as Ba,V as np,aQ as ip,aR as rp,aB as sp,d as ap,q as Qs,aS as Gu,aT as op,aU as lp,I as cp,R as fp,aV as up,K as dp,_ as hp,aW as pp,aw as Xu,aX as mp,aY as Hr,l as an,aZ as gp,$ as _p,a_ as vp,av as xp,z as en,D as Ge,E as Be,F as be,B as Tt,aK as lt,C as tn,aI as Ke,a$ as Mr,b0 as oc,a6 as H,aJ as Mp,a5 as Gt,A as di,b1 as mt,b2 as lc,k as Er}from"../chunks/BXKEqkmd.js";import{a as bp,d as mn,e as li,s as Dn}from"../chunks/BHKB4wiq.js";import{p as it,b as En,i as ea,c as Sp}from"../chunks/BLleZ4uT.js";import{i as cc}from"../chunks/B6K7roEG.js";import{s as he,r as Wu}from"../chunks/dXO3lkpX.js";import{B as yp}from"../chunks/Blxebib7.js";import{o as $u}from"../chunks/CGKtECOU.js";function Un(n,e){return e}function Ep(n,e,t){for(var i=[],r=e.length,s=0;s<r;s++)ip(e[s].e,i,!0);rp(i,()=>{var a=i.length===0&&t!==null;if(a){var o=t,l=o.parentNode;sp(l),l.append(o),n.items.clear(),kn(n,e[0].prev,e[r-1].next)}for(var c=0;c<r;c++){var f=e[c];a||(n.items.delete(f.k),kn(n,f.prev,f.next)),ap(f.e,!a)}n.first===e[0]&&(n.first=e[0].prev)})}function Nn(n,e,t,i,r,s=null){var a=n,o=new Map,l=null,c=(e&Gu)!==0,f=(e&Hu)!==0,u=(e&zu)!==0;if(c){var d=n;a=xn?Fa(Wh(d)):d.appendChild(Jo())}xn&&Bu();var p=null,v=$h(()=>{var S=t();return Qh(S)?S:S==null?[]:ku(S)}),x,m=!0;function h(){wp(T,x,a,e,i),p!==null&&(x.length===0?(p.fragment?(a.before(p.fragment),p.fragment=null):Vu(p.effect),E.first=p.effect):ep(p.effect,()=>{p=null}))}var E=Ou(()=>{x=g(v);var S=x.length;let A=!1;if(xn){var C=Yh(a)===qh;C!==(S===0)&&(a=qc(),Fa(a),Oa(!1),A=!0)}for(var R=new Set,y=jh,_=null,b=Jh(),P=0;P<S;P+=1){xn&&gs.nodeType===Zh&&gs.data===Kh&&(a=gs,A=!0,Oa(!1));var I=x[P],D=i(I,P),O=m?null:o.get(D);O?(f&&Zc(O.v,I),u?Zc(O.i,P):O.i=P,b&&y.skipped_effects.delete(O.e)):(O=Tp(m?a:null,_,I,D,P,r,e,t),m&&(O.o=!0,_===null?l=O:_.next=O,_=O),o.set(D,O)),R.add(D)}if(S===0&&s&&!p)if(m)p={fragment:null,effect:Qo(()=>s(a))};else{var k=document.createDocumentFragment(),z=Jo();k.append(z),p={fragment:k,effect:Qo(()=>s(z))}}if(xn&&S>0&&Fa(qc()),!m)if(b){for(const[N,W]of o)R.has(N)||y.skipped_effects.add(W.e);y.oncommit(h),y.ondiscard(()=>{})}else h();A&&Oa(!0),g(v)}),T={effect:E,items:o,first:l};m=!1,xn&&(a=gs)}function wp(n,e,t,i,r){var s=(i&op)!==0,a=e.length,o=n.items,l=n.first,c,f=null,u,d=[],p=[],v,x,m,h;if(s)for(h=0;h<a;h+=1)v=e[h],x=r(v,h),m=o.get(x),m.a?.measure(),(u??=new Set).add(m);for(h=0;h<a;h+=1){if(v=e[h],x=r(v,h),m=o.get(x),n.first??=m,!m.o){m.o=!0;var E=f?f.next:l;kn(n,f,m),kn(n,m,E),ka(m,E,t),f=m,d=[],p=[],l=f.next;continue}if((m.e.f&Ba)!==0&&(Vu(m.e),s&&(m.a?.unfix(),(u??=new Set).delete(m))),m!==l){if(c!==void 0&&c.has(m)){if(d.length<p.length){var T=p[0],S;f=T.prev;var A=d[0],C=d[d.length-1];for(S=0;S<d.length;S+=1)ka(d[S],T,t);for(S=0;S<p.length;S+=1)c.delete(p[S]);kn(n,A.prev,C.next),kn(n,f,A),kn(n,C,T),l=T,f=C,h-=1,d=[],p=[]}else c.delete(m),ka(m,l,t),kn(n,m.prev,m.next),kn(n,m,f===null?n.first:f.next),kn(n,f,m),f=m;continue}for(d=[],p=[];l!==null&&l.k!==x;)(l.e.f&Ba)===0&&(c??=new Set).add(l),p.push(l),l=l.next;if(l===null)continue;m=l}d.push(m),f=m,l=m.next}if(l!==null||c!==void 0){for(var R=c===void 0?[]:ku(c);l!==null;)(l.e.f&Ba)===0&&R.push(l),l=l.next;var y=R.length;if(y>0){var _=(i&Gu)!==0&&a===0?t:null;if(s){for(h=0;h<y;h+=1)R[h].a?.measure();for(h=0;h<y;h+=1)R[h].a?.fix()}Ep(n,R,_)}}s&&Qs(()=>{if(u!==void 0)for(m of u)m.a?.apply()})}function Tp(n,e,t,i,r,s,a,o){var l=(a&Hu)!==0,c=(a&tp)===0,f=l?c?Le(t,!1,!1):Kc(t):t,u=(a&zu)===0?r:Kc(r),d={i:u,v:f,k:i,a:null,e:null,o:!1,prev:e,next:null};try{if(n===null){var p=document.createDocumentFragment();p.append(n=Jo())}return d.e=Qo(()=>s(n,f,u,o)),e!==null&&(e.next=d),d}finally{}}function ka(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==null&&s!==i;){var a=np(s);r.before(s),s=a}}function kn(n,e,t){e===null?(n.first=t,n.effect.first=t&&t.e):(e.e.next&&(e.e.next.prev=null),e.next=t,e.e.next=t&&t.e),t===null?n.effect.last=e&&e.e:(t.e.prev&&(t.e.prev.next=null),t.prev=e,t.e.prev=e&&e.e)}function fc(n,e,t){xn&&Bu();var i=new yp(n),r=!lp();Ou(()=>{var s=e();r&&s!==null&&typeof s=="object"&&(s={}),i.ensure(s,t)})}const jc=[...` 	
\r\f \v\uFEFF`];function Ap(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||jc.includes(i[a-1]))&&(o===i.length||jc.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function Rp(n,e){return n==null?null:String(n)}function Zi(n,e,t,i,r,s){var a=n.__className;if(xn||a!==t||a===void 0){var o=Ap(t,i,s);(!xn||o!==n.getAttribute("class"))&&(o==null?n.removeAttribute("class"):n.className=o),n.__className=t}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return s}function on(n,e,t,i){var r=n.__style;if(xn||r!==e){var s=Rp(e);(!xn||s!==n.getAttribute("style"))&&(s==null?n.removeAttribute("style"):n.style.cssText=s),n.__style=e}return i}const Cp=()=>performance.now(),ci={tick:n=>requestAnimationFrame(n),now:()=>Cp(),tasks:new Set};function Yu(){const n=ci.now();ci.tasks.forEach(e=>{e.c(n)||(ci.tasks.delete(e),e.f())}),ci.tasks.size!==0&&ci.tick(Yu)}function Pp(n){let e;return ci.tasks.size===0&&ci.tick(Yu),{promise:new Promise(t=>{ci.tasks.add(e={c:n,f:t})}),abort(){ci.tasks.delete(e)}}}function _s(n,e){Xu(()=>{n.dispatchEvent(new CustomEvent(e))})}function Lp(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Jc(n){const e={},t=n.split(";");for(const i of t){const[r,s]=i.split(":");if(!r||s===void 0)break;const a=Lp(r.trim());e[a]=s.trim()}return e}const Dp=n=>n;function Ip(n,e,t,i){var r=(n&pp)!==0,s="both",a,o=e.inert,l=e.style.overflow,c,f;function u(){return Xu(()=>a??=t()(e,i?.()??{},{direction:s}))}var d={is_global:r,in(){e.inert=o,_s(e,"introstart"),c=el(e,u(),f,1,()=>{_s(e,"introend"),c?.abort(),c=a=void 0,e.style.overflow=l})},out(m){e.inert=!0,_s(e,"outrostart"),f=el(e,u(),c,0,()=>{_s(e,"outroend"),m?.()})},stop:()=>{c?.abort(),f?.abort()}},p=cp;if((p.transitions??=[]).push(d),bp){var v=r;if(!v){for(var x=p.parent;x&&(x.f&fp)!==0;)for(;(x=x.parent)&&(x.f&up)===0;);v=!x||(x.f&dp)!==0}v&&hp(()=>{an(()=>d.in())})}}function el(n,e,t,i,r){var s=i===1;if(mp(e)){var a,o=!1;return Qs(()=>{if(!o){var m=e({direction:s?"in":"out"});a=el(n,m,t,i,r)}}),{abort:()=>{o=!0,a?.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(t?.deactivate(),!e?.duration)return r(),{abort:Hr,deactivate:Hr,reset:Hr,t:()=>i};const{delay:l=0,css:c,tick:f,easing:u=Dp}=e;var d=[];if(s&&t===void 0&&(f&&f(0,1),c)){var p=Jc(c(0,1));d.push(p,p)}var v=()=>1-i,x=n.animate(d,{duration:l,fill:"forwards"});return x.onfinish=()=>{x.cancel();var m=t?.t()??1-i;t?.abort();var h=i-m,E=e.duration*Math.abs(h),T=[];if(E>0){var S=!1;if(c)for(var A=Math.ceil(E/16.666666666666668),C=0;C<=A;C+=1){var R=m+h*u(C/A),y=Jc(c(R,1-R));T.push(y),S||=y.overflow==="hidden"}S&&(n.style.overflow="hidden"),v=()=>{var _=x.currentTime;return m+h*u(_/E)},f&&Pp(()=>{if(x.playState!=="running")return!1;var _=v();return f(_,1-_),!0})}x=n.animate(T,{duration:E,fill:"forwards"}),x.onfinish=()=>{v=()=>i,f?.(i,1-i),r()}},{abort:()=>{x&&(x.cancel(),x.effect=null,x.onfinish=Hr)},deactivate:()=>{r=Hr},reset:()=>{i===0&&f?.(1,0)},t:()=>v()}}const za=new Set;function qu(n,e,t,i,r=i){var s=t.getAttribute("type")==="checkbox",a=n;let o=!1;if(e!==null)for(var l of e)a=a[l]??=[];a.push(t),gp(t,"change",()=>{var c=t.__value;s&&(c=Qc(a,c,t.checked)),r(c)},()=>r(s?[]:null)),_p(()=>{var c=i();if(xn&&t.defaultChecked!==t.checked){o=!0;return}s?(c=c||[],t.checked=c.includes(t.__value)):t.checked=vp(t.__value,c)}),xp(()=>{var c=a.indexOf(t);c!==-1&&a.splice(c,1)}),za.has(a)||(za.add(a),Qs(()=>{a.sort((c,f)=>c.compareDocumentPosition(f)===4?-1:1),za.delete(a)})),Qs(()=>{if(o){var c;if(s)c=Qc(a,c,t.checked);else{var f=a.find(u=>u.checked);c=f?.__value}r(c)}})}function Qc(n,e,t){for(var i=new Set,r=0;r<n.length;r+=1)n[r].checked&&i.add(n[r].__value);return t||i.delete(e),Array.from(i)}var Up=Ct('<header class="app-header"><div>Yannik Stegmaier<span style="color: #999;">&nbsp;– Progammiertes Entwerfen 2</span></div></header>');function Np(n){var e=Up();ht(n,e)}function Fp(n){const e=n-1;return e*e*e+1}function Op(n,{delay:e=0,duration:t=400,easing:i=Fp,axis:r="y"}={}){const s=getComputedStyle(n),a=+s.opacity,o=r==="y"?"height":"width",l=parseFloat(s[o]),c=r==="y"?["top","bottom"]:["left","right"],f=c.map(h=>`${h[0].toUpperCase()}${h.slice(1)}`),u=parseFloat(s[`padding${f[0]}`]),d=parseFloat(s[`padding${f[1]}`]),p=parseFloat(s[`margin${f[0]}`]),v=parseFloat(s[`margin${f[1]}`]),x=parseFloat(s[`border${f[0]}Width`]),m=parseFloat(s[`border${f[1]}Width`]);return{delay:e,duration:t,easing:i,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*a};${o}: ${h*l}px;padding-${c[0]}: ${h*u}px;padding-${c[1]}: ${h*d}px;margin-${c[0]}: ${h*p}px;margin-${c[1]}: ${h*v}px;border-${c[0]}-width: ${h*x}px;border-${c[1]}-width: ${h*m}px;min-${o}: 0`}}var Bp=Ct('<div class="slider svelte-pc7g35"><div class="label svelte-pc7g35"> </div> <div class="track svelte-pc7g35" role="presentation"><div class="thumb svelte-pc7g35" role="slider" tabindex="0"> </div></div></div>');function Mn(n,e){en(e,!0);let t=it(e,"min",11,0),i=it(e,"max",11,100),r=it(e,"step",11,1),s=it(e,"value",15,50),a=it(e,"label",11,"Slider"),o=it(e,"snapValues",19,()=>[]),l=it(e,"snapWidth",3,16),c=Ke(null),f=Ke(null),u=Ke(0),d=lt(()=>g(c)?g(c).clientWidth+g(u)*0:0),p=lt(()=>g(f)?g(f).clientWidth+g(u)*0:0),v=lt(()=>(g(d)-g(p))/(i()-t())),x=lt(()=>(s()-t())/(i()-t())*(g(d)-g(p)));o().sort((I,D)=>I-D);function m(I){if(o().length===0)return I;let D=o()[0],O=Math.abs(I-D);for(let k=1;k<o().length;k++){let z=Math.abs(I-o()[k]);z<O&&(D=o()[k],O=z)}return O*g(v)<l()/2?D:I}function h(I){I.stopPropagation(),I.preventDefault(),I.clientX,s(),E(I.pointerId,I.clientX,s())}function E(I,D,O){if(g(f)&&g(f).setPointerCapture)try{g(f).setPointerCapture(I)}catch{}function k(N){const ee=N.clientX-D,te=Math.round((O-t()+ee/g(v))/r())*r()+t();s(Math.min(Math.max(m(te),t()),i()))}function z(N){if(g(f)&&g(f).releasePointerCapture)try{g(f).releasePointerCapture(I)}catch{}window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",z)}window.addEventListener("pointermove",k),window.addEventListener("pointerup",z)}function T(I){const D=g(c).getBoundingClientRect(),O=I.clientX-D.left,k=Math.min(Math.max(O-g(p)/2,0),g(d)-g(p)),z=Math.round(k/(g(d)-g(p))*(i()-t())/r())*r()+t();s(Math.min(Math.max(m(z),t()),i())),h(I)}function S(I){I.key==="ArrowLeft"||I.key==="ArrowDown"?(I.preventDefault(),s(Math.max(s()-r(),t()))):(I.key==="ArrowRight"||I.key==="ArrowUp")&&(I.preventDefault(),s(Math.min(s()+r(),i())))}function A(I){let D=(r().toString().split(".")[1]||"").length;return I.toFixed(D)}var C=Bp();li("resize",Mr,()=>{oc(u)});var R=Ge(C),y=Ge(R,!0);Be(R);var _=be(R,2);_.__pointerdown=T;var b=Ge(_);b.__pointerdown=h,b.__keydown=S;var P=Ge(b,!0);Be(b),En(b,I=>H(f,I),()=>g(f)),Be(_),En(_,I=>H(c,I),()=>g(c)),Be(C),Tt(I=>{Dn(y,a()),he(b,"aria-valuemin",t()),he(b,"aria-valuemax",i()),he(b,"aria-valuenow",s()),he(b,"aria-label",a()+" slider thumb"),on(b,`left: ${g(x)??""}px;`),Dn(P,I)},[()=>A(s())]),ht(n,C),tn()}mn(["pointerdown","keydown"]);mn(["click"]);function ef(n){if(!n||n[0]!=="#")return n;const e=n.slice(1),t=parseInt(e.substr(0,2),16),i=parseInt(e.substr(2,2),16),r=parseInt(e.substr(4,2),16),s=(255-t).toString(16).padStart(2,"0"),a=(255-i).toString(16).padStart(2,"0"),o=(255-r).toString(16).padStart(2,"0");return`#${s}${a}${o}`}class tl{constructor(e,t,i=0,r="beige",s=null,a=null,o=null,l=null,c=!0){if(s!==null?this.x=(e%s+s)%s:this.x=e,a!==null?this.y=(t%a+a)%a:this.y=t,this.rotation=i,this.type="trapez",this.h=Math.sin(Math.PI/3)*50,l!=null&&c){const f=i===180?l%2===1:l%2===0;this.fill=f?r:ef(r)}else if(l!=null&&!c)this.fill=r;else if(o&&o.length>0){const u=Math.floor(this.x/50),d=Math.floor(this.y/50),p=(u+d)%o.length,v=o[p];this.fill=(u+d)%2===0?v:ef(v)}else this.fill=r}getPoints(){return`-25 ${-this.h/2}, 25 ${-this.h/2}, 50 ${this.h/2} -50 ${this.h/2}`}getTransform(){return this.rotation!==0?`translate(${this.x} ${this.y}) rotate(${this.rotation})`:`translate(${this.x} ${this.y})`}}function tf(n){if(!n||n[0]!=="#")return n;const e=n.slice(1),t=parseInt(e.substr(0,2),16),i=parseInt(e.substr(2,2),16),r=parseInt(e.substr(4,2),16),s=(255-t).toString(16).padStart(2,"0"),a=(255-i).toString(16).padStart(2,"0"),o=(255-r).toString(16).padStart(2,"0");return`#${s}${a}${o}`}class ta{constructor(e,t,i=0,r="teal",s=null,a=null,o=null,l=null,c=!0){if(s!==null?this.x=(e%s+s)%s:this.x=e,a!==null?this.y=(t%a+a)%a:this.y=t,this.rotation=i,this.type="dreieck",this.h=Math.sin(Math.PI/3)*50,l!=null&&c)this.fill=l%2===0?r:tf(r);else if(l!=null&&!c)this.fill=r;else if(o&&o.length>0){const u=Math.floor(this.x/50),d=Math.floor(this.y/50),p=(u+d)%o.length,v=o[p];this.fill=(u+d)%2===0?v:tf(v)}else this.fill=r}getPoints(){return`0 ${this.h/2} 25 ${-this.h/2} -25 ${-this.h/2}`}getTransform(){return this.rotation!==0?`translate(${this.x} ${this.y}) rotate(${this.rotation})`:`translate(${this.x} ${this.y})`}}function nf(n){if(!n||n[0]!=="#")return n;const e=n.slice(1),t=parseInt(e.substr(0,2),16),i=parseInt(e.substr(2,2),16),r=parseInt(e.substr(4,2),16),s=(255-t).toString(16).padStart(2,"0"),a=(255-i).toString(16).padStart(2,"0"),o=(255-r).toString(16).padStart(2,"0");return`#${s}${a}${o}`}class rf{constructor(e,t,i=0,r="blue",s=!1,a=null,o=null,l=null,c=null,f=!0){if(a!==null?this.x=(e%a+a)%a:this.x=e,o!==null?this.y=(t%o+o)%o:this.y=t,this.rotation=i,this.mirrored=s,this.type="parallelogramm",this.h=Math.sin(Math.PI/3)*50,c!=null&&f)this.fill=c%2===0?r:nf(r);else if(c!=null&&!f)this.fill=r;else if(l&&l.length>0){const d=Math.floor(this.x/50),p=Math.floor(this.y/50),v=(d+p)%l.length,x=l[v];this.fill=(d+p)%2===0?x:nf(x)}else this.fill=r}getPoints(){return this.mirrored?`25 ${-this.h/2}, -25 ${-this.h/2}, -50 ${this.h/2}, 0 ${this.h/2}`:`-25 ${-this.h/2}, 25 ${-this.h/2}, 50 ${this.h/2}, 0 ${this.h/2}`}getTransform(){return this.rotation!==0?`translate(${this.x} ${this.y}) rotate(${this.rotation})`:`translate(${this.x} ${this.y})`}}class vs{constructor(e,t=0,i=!1,r={},s=0){this.y=e,this.offsetX=t,this.reverse=i,this.options=r,this.rowIndex=s,this.h=Math.sin(Math.PI/3)*50,this.elements=[],this.wrapWidth=r.wrapWidth||null,this.wrapHeight=r.wrapHeight||null,this.useModulo=r.useModulo!==void 0?r.useModulo:!0,this.generateElements()}generateElements(){let e=[{x:40,y:this.y,rotation:0},{x:65,y:this.y-this.h,rotation:0},{x:115,y:this.y,rotation:180},{x:140,y:this.y-this.h,rotation:180},{x:190,y:this.y,rotation:0},{x:215,y:this.y-this.h,rotation:0},{x:290,y:this.y,rotation:0},{x:315,y:this.y-this.h,rotation:0},{x:415,y:this.y,rotation:180},{x:440,y:this.y-this.h,rotation:180}];this.reverse&&(e=e.map(f=>({...f,x:480-f.x}))),e=e.map(c=>({...c,x:c.x+this.offsetX}));const t=this.options.trapezColor||"beige";e.forEach((c,f)=>{this.elements.push(new tl(c.x,c.y,c.rotation,t,this.wrapWidth,this.wrapHeight,null,f,this.useModulo))});let i=265,r=240,s=365,a=340;this.reverse&&(i=480-i,r=480-r,s=480-s,a=480-a),i+=this.offsetX,r+=this.offsetX,s+=this.offsetX,a+=this.offsetX;const o=this.options.dreieckColor||"teal",l=this.options.parallelogrammColor||"blue";this.elements.push(new ta(i,this.y-43.301,0,o,this.wrapWidth,this.wrapHeight,null,0,this.useModulo)),this.elements.push(new ta(r,this.y,0,o,this.wrapWidth,this.wrapHeight,null,1,this.useModulo)),this.elements.push(new rf(s,this.y-43.301,0,l,this.reverse,this.wrapWidth,this.wrapHeight,null,0,this.useModulo)),this.elements.push(new rf(a,this.y,0,l,this.reverse,this.wrapWidth,this.wrapHeight,null,1,this.useModulo))}getAllElements(){return this.elements}}class kp{constructor(e=100,t=0,i={}){this.h=Math.sin(Math.PI/3)*50,this.offsetX=t,this.options=i,this.rows=[],this.useModulo=i.useModulo!==void 0?i.useModulo:!0,this.generateRows(e)}generateRows(e){const t=this.options.rowOffsetX||0,i=this.options.baseStartX||0,r=this.options.rowSpacing!==void 0?this.options.rowSpacing:50,s=this.options.row1OffsetX!==void 0?this.options.row1OffsetX:0,a=this.options.row2OffsetX!==void 0?this.options.row2OffsetX:0,o=this.options.row3OffsetX!==void 0?this.options.row3OffsetX:r,l=this.options.row4OffsetX!==void 0?this.options.row4OffsetX:r,c=this.options.row1Mirror!==void 0?this.options.row1Mirror:!1,f=this.options.row2Mirror!==void 0?this.options.row2Mirror:!0,u=this.options.row3Mirror!==void 0?this.options.row3Mirror:!0,d=this.options.row4Mirror!==void 0?this.options.row4Mirror:!1,p={...this.options,useModulo:this.useModulo};this.rows.push(new vs(e,this.offsetX+i+t+s,c,p,0)),this.rows.push(new vs(e+2*this.h,this.offsetX+i+t+a,f,p,1)),this.rows.push(new vs(e+4*this.h,this.offsetX+i+t+o,u,p,2)),this.rows.push(new vs(e+6*this.h,this.offsetX+i+t+l,d,p,3))}getAllElements(){let e=[];return this.rows.forEach(t=>{e=[...e,...t.getAllElements()]}),e}regenerateRows(e,t){this.options={...this.options,...t},this.rows=[],this.generateRows(e)}}class pa{constructor(e=100,t={}){this.startY=e,this.h=Math.sin(Math.PI/3)*50,this.segmentWidth=t.segmentWidth||450,this.segmentHeight=t.segmentHeight||8*this.h,this.segmentOffsetX=t.segmentOffsetX||0,this.segmentOffsetY=t.segmentOffsetY||0,this.segmentSpacingX=t.segmentSpacingX!==void 0?t.segmentSpacingX:0,this.segmentSpacingY=t.segmentSpacingY!==void 0?t.segmentSpacingY:0,this.trapezColor=t.trapezColor||"beige",this.dreieckColor=t.dreieckColor||"teal",this.parallelogrammColor=t.parallelogrammColor||"midnightblue",this.rowOffsetX=t.rowOffsetX||0,this.rowSpacing=t.rowSpacing!==void 0?t.rowSpacing:50,this.baseStartX=t.baseStartX||100,this.row1OffsetX=t.row1OffsetX,this.row2OffsetX=t.row2OffsetX,this.row3OffsetX=t.row3OffsetX,this.row4OffsetX=t.row4OffsetX,this.row1Mirror=t.row1Mirror,this.row2Mirror=t.row2Mirror,this.row3Mirror=t.row3Mirror,this.row4Mirror=t.row4Mirror,this.useModulo=t.useModulo!==void 0?t.useModulo:!0,this.segments=[]}addSegment(e,t){const i=(this.cols-1)/2,r=(this.rows-1)/2,s=t-i,a=e-r,o=s*this.segmentSpacingX,l=a*this.segmentSpacingY,c=t*this.segmentWidth+this.segmentOffsetX+o,f=e*this.segmentHeight+this.segmentOffsetY+l,u=new kp(this.startY+f,c,{rowOffsetX:this.rowOffsetX,rowSpacing:this.rowSpacing,baseStartX:this.baseStartX,trapezColor:this.trapezColor,dreieckColor:this.dreieckColor,parallelogrammColor:this.parallelogrammColor,row1OffsetX:this.row1OffsetX,row2OffsetX:this.row2OffsetX,row3OffsetX:this.row3OffsetX,row4OffsetX:this.row4OffsetX,row1Mirror:this.row1Mirror,row2Mirror:this.row2Mirror,row3Mirror:this.row3Mirror,row4Mirror:this.row4Mirror,useModulo:this.useModulo});return this.segments.push({segment:u,row:e,col:t}),u}generateGrid(e,t){this.segments=[],this.rows=e,this.cols=t;for(let i=0;i<e;i++)for(let r=0;r<t;r++)this.addSegment(i,r)}updateOptions(e){Object.assign(this,e),this.segments.forEach(({segment:t})=>{t.options={...t.options,...e},t.rows=[],t.generateRows(this.startY+t.offsetX/this.segmentWidth*this.segmentHeight)})}getAllElements(){let e=[];return this.segments.forEach(({segment:t})=>{e=[...e,...t.getAllElements()]}),e}}var zp=Ct('<div class="slider svelte-14iab8y"><div class="label svelte-14iab8y"> </div> <div class="track svelte-14iab8y" role="switch" tabindex="0"><div aria-hidden="true"></div></div></div>');function Sn(n,e){en(e,!0);let t=it(e,"value",15,!1),i=it(e,"label",11,"Slider"),r=Ke(null),s=Ke(null),a=Ke(0),o=lt(()=>g(r)?g(r).clientWidth+g(a)*0:0),l=lt(()=>g(s)?g(s).clientWidth+g(a)*0:0),c=lt(()=>g(o)-g(l)),f=lt(()=>t()?g(o)-g(l)-4:0),u=Ke(!1),d=Ke(0),p=Ke(0),v=Ke(!1);$u(async()=>{await Mp(),H(v,!0)});function x(y){y.stopPropagation(),y.preventDefault(),H(d,y.clientX!==void 0?y.clientX:y.touches&&y.touches[0]&&y.touches[0].clientX||0,!0),H(p,t()?1:0,!0),H(u,!0);let _=!1;if(g(s)&&g(s).setPointerCapture&&y.pointerId!==void 0)try{g(s).setPointerCapture(y.pointerId)}catch{}function b(I){if(!g(u))return;const O=(I.clientX!==void 0?I.clientX:I.touches&&I.touches[0]&&I.touches[0].clientX||0)-g(d);Math.abs(O)>4&&(_=!0);const k=Math.round(g(p)+O/g(c));t(k>=.5)}function P(I){if(H(u,!1),_||t(!t()),g(s)&&g(s).releasePointerCapture&&I.pointerId!==void 0)try{g(s).releasePointerCapture(I.pointerId)}catch{}window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",P)}window.addEventListener("pointermove",b),window.addEventListener("pointerup",P)}function m(y){y.stopPropagation(),y.preventDefault();const _=y.clientX!==void 0?y.clientX:y.touches&&y.touches[0]&&y.touches[0].clientX||0;let b=!1;function P(D){const O=D.clientX!==void 0?D.clientX:D.touches&&D.touches[0]&&D.touches[0].clientX||0;Math.abs(O-_)>4&&(b=!0)}function I(D){window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",I),b||t(!t());const O=g(r).getBoundingClientRect(),k=(D.clientX!==void 0?D.clientX:D.touches&&D.touches[0]&&D.touches[0].clientX||0)-O.left||0,z=Math.min(Math.max(k-g(l)/2,0),g(o)-g(l)),N=Math.round(z/(g(o)-g(l)));t(N>=.5)}window.addEventListener("pointermove",P),window.addEventListener("pointerup",I)}function h(y){(y.key===" "||y.key==="Enter")&&(y.preventDefault(),t(!t()))}var E=zp();li("resize",Mr,()=>{oc(a)});var T=Ge(E),S=Ge(T,!0);Be(T);var A=be(T,2);A.__pointerdown=m,A.__keydown=h;var C=Ge(A);let R;C.__pointerdown=x,En(C,y=>H(s,y),()=>g(s)),Be(A),En(A,y=>H(r,y),()=>g(r)),Be(E),Tt(y=>{Dn(S,i()),he(A,"aria-checked",!!t()),he(A,"aria-label",i()+" toggle"),R=Zi(C,1,"thumb svelte-14iab8y",null,R,{mounted:g(v)}),on(C,`left: ${y??""}px;`)},[()=>Math.min(Math.max(g(f),0),Math.max(g(o)-g(l)-2,0))]),ht(n,E),tn()}mn(["pointerdown","keydown"]);var Vp=Ct('<div class="slider svelte-nry0le"><div class="label svelte-nry0le"> </div> <div class="track svelte-nry0le" role="presentation"><div class="range-highlight svelte-nry0le" aria-hidden="true" tabindex="-1"></div> <div class="thumb low svelte-nry0le" role="slider" tabindex="0"> </div> <div class="thumb high svelte-nry0le" role="slider" tabindex="0"> </div></div></div>');function hi(n,e){en(e,!0);let t=it(e,"min",11,0),i=it(e,"max",11,100),r=it(e,"step",11,1),s=it(e,"value1",15,0),a=it(e,"value2",15,100),o=it(e,"label",11,"Slider"),l=it(e,"pushThreshold",11,15),c=Ke(null),f=Ke(null),u=Ke(null),d=Ke(null),p=Ke(0),v=lt(()=>g(c)?g(c).clientWidth+g(p)*0:0),x=lt(()=>g(f)?g(f).clientWidth+g(p)*0:0),m=lt(()=>(g(v)-2*g(x))/(i()-t())),h=lt(()=>(s()-t())/(i()-t())*(g(v)-2*g(x))),E=lt(()=>(a()-t())/(i()-t())*(g(v)-2*g(x))+g(x));function T(N,W){let ee=!1;W||(W=N.target===g(f)?"low":"high");let te=W==="low"?g(f):g(u);N.stopPropagation(),N.preventDefault();const J=N.clientX,ge=W==="low"?s():a();if(te&&te.setPointerCapture)try{te.setPointerCapture(N.pointerId)}catch{}function se(ve){const $=ve.clientX-J,ce=Math.round((ge+$/g(m))/r())*r()+t();let _e=Math.min(Math.max(ce,t()),i());W==="low"?((a()-_e)*g(m)<-l()||_e>=i()?ee=!0:(a()-_e)*g(m)>0&&(ee=!1),ee?(s(_e),a(_e)):s(Math.min(_e,a()))):((_e-s())*g(m)<-l()||_e<=t()?ee=!0:(_e-s())*g(m)>0&&(ee=!1),ee?(s(_e),a(_e)):a(Math.max(_e,s())))}function Fe(ve){if(te&&te.releasePointerCapture)try{te.releasePointerCapture(N.pointerId)}catch{}window.removeEventListener("pointermove",se),window.removeEventListener("pointerup",Fe)}window.addEventListener("pointermove",se),window.addEventListener("pointerup",Fe)}function S(N){N.stopPropagation(),N.preventDefault();const W=N.clientX,ee=s(),J=a()-ee;if(g(d)&&g(d).setPointerCapture)try{g(d).setPointerCapture(N.pointerId)}catch{}function ge(Fe){const ve=Fe.clientX-W;let G=Math.round((ee+ve/g(m))/r())*r()+t(),$=G+J;G=Math.min(Math.max(G,t()),$),$=Math.max(Math.min($,i()),G),$-G<J&&(G<=t()?(G=t(),$=G+J):$>=i()&&($=i(),G=$-J)),s(Math.min(Math.max(G,t()),a())),a(Math.max(Math.min($,i()),s()))}function se(Fe){if(g(d)&&g(d).releasePointerCapture)try{g(d).releasePointerCapture(N.pointerId)}catch{}window.removeEventListener("pointermove",ge),window.removeEventListener("pointerup",se)}window.addEventListener("pointermove",ge),window.addEventListener("pointerup",se)}function A(N){const W=g(c).getBoundingClientRect(),ee=N.clientX-W.left,te=Math.abs(ee-g(h)-g(x)/2),J=Math.abs(ee-g(E)-g(x)/2);let ge=te<J?"low":"high";const se=ge==="low"?0:g(x),Fe=Math.min(Math.max(ee-g(x)/2-se,0),g(v)-2*g(x)+se),ve=Math.round(Fe/(g(v)-2*g(x))*(i()-t())/r())*r()+t();ge==="low"?s(Math.min(Math.max(ve,t()),a())):a(Math.min(Math.max(ve,s()),i())),T(N,ge)}function C(N,W){N.key==="ArrowLeft"||N.key==="ArrowDown"?(N.preventDefault(),W==="low"?s(Math.max(s()-r(),t())):a(Math.max(a()-r(),t()))):(N.key==="ArrowRight"||N.key==="ArrowUp")&&(N.preventDefault(),W==="low"?s(Math.min(s()+r(),a())):a(Math.min(a()+r(),i())))}function R(N){let W=(r().toString().split(".")[1]||"").length;return N.toFixed(W)}var y=Vp();li("resize",Mr,()=>{oc(p)});var _=Ge(y),b=Ge(_,!0);Be(_);var P=be(_,2);P.__pointerdown=A;var I=Ge(P);I.__pointerdown=S,En(I,N=>H(d,N),()=>g(d));var D=be(I,2);D.__pointerdown=N=>T(N,"low"),D.__keydown=N=>C(N,"low");var O=Ge(D,!0);Be(D),En(D,N=>H(f,N),()=>g(f));var k=be(D,2);k.__pointerdown=N=>T(N,"high"),k.__keydown=N=>C(N,"high");var z=Ge(k,!0);Be(k),En(k,N=>H(u,N),()=>g(u)),Be(P),En(P,N=>H(c,N),()=>g(c)),Be(y),Tt((N,W)=>{Dn(b,o()),on(I,`left:${g(h)+g(x)-1}px; width:${g(E)-g(h)-g(x)+2}px;`),he(D,"aria-valuemin",t()),he(D,"aria-valuemax",i()),he(D,"aria-valuenow",s()),he(D,"aria-label",o()+" slider thumb low"),on(D,`left: ${g(h)??""}px;`),Dn(O,N),he(k,"aria-valuemin",t()),he(k,"aria-valuemax",i()),he(k,"aria-valuenow",a()),he(k,"aria-label",o()+" slider thumb high"),on(k,`left: ${g(E)??""}px;`),Dn(z,W)},[()=>R(s()),()=>R(a())]),ht(n,y),tn()}mn(["pointerdown","keydown"]);var Hp=Jn('<polygon stroke="black" stroke-width="1"></polygon>'),Gp=Jn("<g></g>"),Xp=Ct('<label><input type="radio" name="palette" class="palette-radio svelte-fignol"/> <svg viewBox="0 0 300 100" class="palette-preview svelte-fignol"><rect x="0" y="0" width="100" height="100"></rect><rect x="100" y="0" width="100" height="100"></rect><rect x="200" y="0" width="100" height="100"></rect></svg> <span class="palette-name svelte-fignol"> </span></label>'),Wp=Ct('<p class="description svelte-fignol">Wähle eine Farbpalette aus der Galerie.</p> <div class="palette-gallery svelte-fignol"></div>',1),$p=Ct('<p class="description svelte-fignol">Stelle die Farben mit den Slidern ein.</p> <!> <!> <!>',1),Yp=Ct('<div class="svg-container"><svg class="svg-canvas"><rect x="0" y="0" fill="#2d2d2dff" stroke="none"></rect><!></svg></div> <div class="sidebar-right svelte-fignol"><button>Reset All</button> <hr/> <p class="description svelte-fignol">Wähle einen Farbmodus:</p> <div class="mode-selector svelte-fignol"><button>Paletten</button> <button>Slider</button></div> <hr/> <!> <!> <hr/> <p class="description svelte-fignol">Wechsle zwischen Original- und Negativfarben bei aufeinanderfolgenden Elementen.</p> <!></div>',1);function qp(n,e){en(e,!0);const t=[],i=[{name:"Autumn",colors:["#ffd7b5","#d2691e","#8b4513"]},{name:"Earth Tones",colors:["#d4c5b9","#8b7355","#5c4a3a"]}],r={rows:4,cols:4,startY:-149,segmentWidth:450,segmentHeight:346,segmentOffsetX:0,segmentOffsetY:0,scale:1,rowOffsetX:0,rowSpacing:50,baseStartX:-440,useModulo:!0},s=r.rows,a=r.cols,o=r.startY,l=r.segmentWidth,c=r.segmentHeight,f=r.segmentOffsetX,u=r.segmentOffsetY,d=r.scale,p=r.rowOffsetX,v=r.rowSpacing,x=r.baseStartX;let m=Ke(Gt(r.useModulo)),h=Ke("palette"),E=Ke(0),T=Ke(30),S=Ke(15),A=Ke(70),C=Ke(60),R=Ke(70),y=Ke(40);function _(Ue,U,tt){Ue=Ue/360,U=U/100,tt=tt/100;let Ye,je,me;if(U===0)Ye=je=me=tt;else{const M=(Q,K,ie)=>(ie<0&&(ie+=1),ie>1&&(ie-=1),ie<.16666666666666666?Q+(K-Q)*6*ie:ie<.5?K:ie<.6666666666666666?Q+(K-Q)*(.6666666666666666-ie)*6:Q),F=tt<.5?tt*(1+U):tt+U-tt*U,j=2*tt-F;Ye=M(j,F,Ue+1/3),je=M(j,F,Ue),me=M(j,F,Ue-1/3)}const L=M=>{const F=Math.round(M*255).toString(16);return F.length===1?"0"+F:F};return`#${L(Ye)}${L(je)}${L(me)}`}let b=lt(()=>g(h)==="slider"?_(g(T),g(A),g(R)):i[g(E)].colors[0]),P=lt(()=>g(h)==="slider"?_(g(S),g(C),g(y)):i[g(E)].colors[1]),I=lt(()=>g(h)==="slider"?_((g(T)+g(S))/2,(g(A)+g(C))/2,(g(R)+g(y))/2):i[g(E)].colors[2]);function D(){H(E,0),H(m,r.useModulo,!0),H(h,"palette"),H(T,30),H(S,15),H(A,70),H(C,60),H(R,70),H(y,40)}let O=lt(()=>`${g(m)}-${g(E)}-${g(h)}-${g(T)}-${g(S)}`);function k(){H(h,"slider")}let z=lt(()=>{const Ue=new pa(o,{segmentWidth:l,segmentHeight:c,segmentOffsetX:f,segmentOffsetY:u,trapezColor:g(b),dreieckColor:g(P),parallelogrammColor:g(I),rowOffsetX:p,rowSpacing:v,baseStartX:x,useModulo:g(m)});return Ue.generateGrid(s,a),Ue.getAllElements()});const N=1e3;let W=lt(()=>N),ee=lt(()=>N);var te=Yp(),J=di(te),ge=Ge(J);he(ge,"viewBox",`0 0 ${g(W)??""} ${g(ee)??""}`);var se=Ge(ge);he(se,"width",g(W)),he(se,"height",g(ee));var Fe=be(se);fc(Fe,()=>g(O),Ue=>{var U=Gp();Nn(U,21,()=>g(z),Un,(tt,Ye)=>{var je=Hp();Tt((me,L)=>{he(je,"points",me),he(je,"fill",g(Ye).fill),he(je,"transform",L)},[()=>g(Ye).getPoints(),()=>g(Ye).getTransform()]),ht(tt,je)}),Be(U),Tt(()=>he(U,"transform",`translate(0, 0) scale(${d})`)),ht(Ue,U)}),Be(ge),Be(J);var ve=be(J,2),G=Ge(ve);G.__click=D;var $=be(G,6),ce=Ge($);ce.__click=()=>H(h,"palette");let _e;var xe=be(ce,2);xe.__click=k;let Ve;Be($);var ot=be($,4);{var Se=Ue=>{var U=Wp(),tt=be(di(U),2);Nn(tt,21,()=>i,Un,(Ye,je,me)=>{var L=Xp();let M;var F=Ge(L);Wu(F),F.value=F.__value=me;var j=be(F,2),Q=Ge(j),K=be(Q),ie=be(K);Be(j);var fe=be(j,2),Pe=Ge(fe,!0);Be(fe),Be(L),Tt(()=>{M=Zi(L,1,"palette-item svelte-fignol",null,M,{selected:g(E)===me}),he(Q,"fill",g(je).colors[0]),he(K,"fill",g(je).colors[1]),he(ie,"fill",g(je).colors[2]),Dn(Pe,g(je).name)}),qu(t,[],F,()=>g(E),Oe=>H(E,Oe)),ht(Ye,L)}),Be(tt),ht(Ue,U)};ea(ot,Ue=>{g(h)==="palette"&&Ue(Se)})}var ke=be(ot,2);{var Ze=Ue=>{var U=$p(),tt=be(di(U),2);hi(tt,{min:0,max:360,label:"Hue (Trapez → Dreieck)",get value1(){return g(T)},set value1(me){H(T,me,!0)},get value2(){return g(S)},set value2(me){H(S,me,!0)}});var Ye=be(tt,2);hi(Ye,{min:0,max:100,label:"Saturation (Trapez → Dreieck)",get value1(){return g(A)},set value1(me){H(A,me,!0)},get value2(){return g(C)},set value2(me){H(C,me,!0)}});var je=be(Ye,2);hi(je,{min:0,max:100,label:"Luminance (Trapez → Dreieck)",get value1(){return g(R)},set value1(me){H(R,me,!0)},get value2(){return g(y)},set value2(me){H(y,me,!0)}}),ht(Ue,U)};ea(ke,Ue=>{g(h)==="slider"&&Ue(Ze)})}var He=be(ke,6);Sn(He,{label:"Modulo aktivieren",get value(){return g(m)},set value(Ue){H(m,Ue,!0)}}),Be(ve),Tt(()=>{_e=Zi(ce,1,"svelte-fignol",null,_e,{active:g(h)==="palette"}),Ve=Zi(xe,1,"svelte-fignol",null,Ve,{active:g(h)==="slider"})}),ht(n,te),tn()}mn(["click"]);var Zp=Jn('<polygon stroke="black" stroke-width="1"></polygon>'),Kp=Ct('<div class="svg-container"><svg class="svg-canvas"><rect x="0" y="0" fill="#2d2d2dff" stroke="none"></rect><g></g></svg></div> <div class="sidebar-right svelte-y0owfy"><button>Reset All</button> <hr/> <p class="description svelte-y0owfy">Wechsle zwischen Original- und Negativfarben bei aufeinanderfolgenden Elementen.</p> <!> <hr/> <p class="description svelte-y0owfy">Bewege Segmente von der Mitte des Canvas weg (oben/unten, links/rechts).</p> <!> <!> <hr/> <p class="description svelte-y0owfy">Stelle die X-Position jeder Reihe individuell ein.</p> <!> <!> <!> <!></div>',1);function jp(n,e){en(e,!1);const t=Le(),i=Le(),r=Le(),s=Le(),a=Le(),o=Le(),l=Le(),c=Le(),f=Le(),u=Le(),d=Le(),p={rows:2,cols:2,startY:197,segmentWidth:450,segmentHeight:346,segmentSpacingX:0,segmentSpacingY:0,scale:1,trapezColor:"#ffd7b5",dreieckColor:"#d2691e",parallelogrammColor:"#8b4513",rowOffsetX:0,rowSpacing:50,useModulo:!0},v=p.rows,x=p.cols,m=p.startY,h=p.scale,E=p.trapezColor,T=p.dreieckColor,S=p.parallelogrammColor;let A=Le(p.segmentWidth),C=Le(p.segmentHeight),R=Le(p.segmentSpacingX),y=Le(p.segmentSpacingY),_=Le(p.rowOffsetX),b=Le(p.rowSpacing),P=Le(0),I=Le(0),D=Le(0),O=Le(0),k=Le(p.useModulo);const z=1e3,N=10;let W=Le();function ee(){H(A,p.segmentWidth),H(C,p.segmentHeight),H(R,p.segmentSpacingX),H(y,p.segmentSpacingY),H(_,p.rowOffsetX),H(b,p.rowSpacing),H(P,0),H(I,0),H(D,0),H(O,0),H(k,p.useModulo)}mt(()=>(g(A),g(C),g(R),g(y),g(_),g(b),g(P),g(I),g(D),g(O),g(k)),()=>{H(t,(()=>{const ke=new pa(m,{segmentWidth:g(A),segmentHeight:g(C),segmentSpacingX:g(R),segmentSpacingY:g(y),trapezColor:E,dreieckColor:T,parallelogrammColor:S,rowOffsetX:g(_),rowSpacing:g(b),baseStartX:N,row1OffsetX:g(P),row2OffsetX:g(I),row3OffsetX:g(D)+50,row4OffsetX:g(O)+50,useModulo:g(k)});return ke.generateGrid(v,x),H(W,ke),ke.getAllElements()})())}),mt(()=>{},()=>{H(i,z)}),mt(()=>{},()=>{H(r,z)}),mt(()=>(g(_),g(R)),()=>{H(s,N+g(_)-g(R))}),mt(()=>(g(s),g(A),g(R)),()=>{H(a,g(s)+x*g(A)+2*g(R))}),mt(()=>(g(a),g(s)),()=>{H(o,g(a)-g(s))}),mt(()=>g(y),()=>{H(l,m-g(y))}),mt(()=>(g(C),g(y)),()=>{H(c,m+v*g(C)+g(y))}),mt(()=>(g(c),g(l)),()=>{H(f,g(c)-g(l))}),mt(()=>{},()=>{H(u,0)}),mt(()=>{},()=>{H(d,0)}),lc(),cc();var te=Kp(),J=di(te),ge=Ge(J),se=Ge(ge),Fe=be(se);Nn(Fe,5,()=>g(t),Un,(ke,Ze)=>{var He=Zp();Tt((Ue,U)=>{he(He,"points",Ue),he(He,"fill",(g(Ze),an(()=>g(Ze).fill))),he(He,"transform",U)},[()=>(g(Ze),an(()=>g(Ze).getPoints())),()=>(g(Ze),an(()=>g(Ze).getTransform()))]),ht(ke,He)}),Be(Fe),Be(ge),Be(J);var ve=be(J,2),G=Ge(ve);G.__click=ee;var $=be(G,6);Sn($,{label:"Modulo aktivieren",get value(){return g(k)},set value(ke){H(k,ke)},$$legacy:!0});var ce=be($,6);Mn(ce,{min:0,max:100,snapValues:[0,50,100],label:"Horizontal (px)",get value(){return g(R)},set value(ke){H(R,ke)},$$legacy:!0});var _e=be(ce,2);Mn(_e,{min:0,max:100,snapValues:[0,50,100],label:"Vertikal (px)",get value(){return g(y)},set value(ke){H(y,ke)},$$legacy:!0});var xe=be(_e,6);Mn(xe,{min:-100,max:100,snapValues:[-100,-50,0,50,100],label:"Reihe 1 Offset-X (px)",get value(){return g(P)},set value(ke){H(P,ke)},$$legacy:!0});var Ve=be(xe,2);Mn(Ve,{min:-100,max:100,snapValues:[-100,-50,0,50,100],label:"Reihe 2 Offset-X (px)",get value(){return g(I)},set value(ke){H(I,ke)},$$legacy:!0});var ot=be(Ve,2);Mn(ot,{min:-100,max:100,snapValues:[-100,-50,0,50,100],label:"Reihe 3 Offset-X (px)",get value(){return g(D)},set value(ke){H(D,ke)},$$legacy:!0});var Se=be(ot,2);Mn(Se,{min:-100,max:100,snapValues:[-100,-50,0,50,100],label:"Reihe 4 Offset-X (px)",get value(){return g(O)},set value(ke){H(O,ke)},$$legacy:!0}),Be(ve),Tt(()=>{he(ge,"viewBox",`0 0 ${g(i)??""} ${g(r)??""}`),he(se,"width",g(i)),he(se,"height",g(r)),he(Fe,"transform",`translate(${g(u)??""}, ${g(d)??""}) scale(${h})`)}),ht(n,te),tn()}mn(["click"]);var Jp=Jn('<polygon stroke="black" stroke-width="1"></polygon>'),Qp=Ct('<div class="svg-container"><svg class="svg-canvas"><rect x="0" y="0" fill="#2d2d2dff" stroke="none"></rect><g><!></g></svg></div> <div class="sidebar-right svelte-79b917"><button>Reset All</button> <hr/> <p class="description svelte-79b917">Wechsle zwischen Original- und Negativfarben bei aufeinanderfolgenden Elementen.</p> <!> <hr/> <p class="description svelte-79b917">Spiegele jede Reihe einzeln. Jedes Segment hat 4 Reihen.</p> <!> <!> <!> <!></div>',1);function e0(n,e){en(e,!1);const t=Le(),i=Le(),r=Le(),s=Le(),a=Le(),o=Le(),l=Le(),c=Le(),f=Le(),u=Le(),d=Le(),p=Le(),v=Le(),x={rows:4,cols:4,startY:-149,segmentWidth:450,segmentHeight:346,segmentOffsetX:0,segmentOffsetY:0,scale:1,trapezColor:"#ffd7b5",dreieckColor:"#d2691e",parallelogrammColor:"#8b4513",rowOffsetX:0,rowSpacing:50,baseStartX:-440,useModulo:!0},m=x.rows,h=x.cols,E=x.startY,T=x.segmentWidth,S=x.segmentHeight,A=x.segmentOffsetX,C=x.segmentOffsetY,R=x.scale,y=x.trapezColor,_=x.dreieckColor,b=x.parallelogrammColor,P=x.rowOffsetX,I=x.rowSpacing,D=x.baseStartX;let O=Le(!1),k=Le(!0),z=Le(!0),N=Le(!1),W=Le(x.useModulo);function ee(){H(O,!1),H(k,!0),H(z,!0),H(N,!1),H(W,x.useModulo)}mt(()=>(g(O),g(k),g(z),g(N),g(W)),()=>{H(t,`${g(O)}-${g(k)}-${g(z)}-${g(N)}-${g(W)}`)}),mt(()=>(g(O),g(k),g(z),g(N),g(W)),()=>{H(i,(()=>{const Se=new pa(E,{segmentWidth:T,segmentHeight:S,segmentOffsetX:A,segmentOffsetY:C,trapezColor:y,dreieckColor:_,parallelogrammColor:b,rowOffsetX:P,rowSpacing:I,baseStartX:D,row1Mirror:g(O),row2Mirror:g(k),row3Mirror:g(z),row4Mirror:g(N),useModulo:g(W)});return Se.generateGrid(m,h),Se.getAllElements()})())}),mt(()=>{},()=>{H(r,1e3)}),mt(()=>g(r),()=>{H(s,g(r))}),mt(()=>g(r),()=>{H(a,g(r))}),mt(()=>{},()=>{H(o,D+P+A)}),mt(()=>g(o),()=>{H(l,g(o)+h*T)}),mt(()=>(g(l),g(o)),()=>{H(c,g(l)-g(o))}),mt(()=>{},()=>{H(f,E)}),mt(()=>{},()=>{H(u,E+m*S+C)}),mt(()=>(g(u),g(f)),()=>{H(d,g(u)-g(f))}),mt(()=>{},()=>{H(p,0)}),mt(()=>{},()=>{H(v,0)}),lc(),cc();var te=Qp(),J=di(te),ge=Ge(J),se=Ge(ge),Fe=be(se),ve=Ge(Fe);fc(ve,()=>g(t),Se=>{var ke=Xh(),Ze=di(ke);Nn(Ze,1,()=>g(i),Un,(He,Ue)=>{var U=Jp();Tt((tt,Ye)=>{he(U,"points",tt),he(U,"fill",(g(Ue),an(()=>g(Ue).fill))),he(U,"transform",Ye)},[()=>(g(Ue),an(()=>g(Ue).getPoints())),()=>(g(Ue),an(()=>g(Ue).getTransform()))]),ht(He,U)}),ht(Se,ke)}),Be(Fe),Be(ge),Be(J);var G=be(J,2),$=Ge(G);$.__click=ee;var ce=be($,6);Sn(ce,{label:"Modulo aktivieren",get value(){return g(W)},set value(Se){H(W,Se)},$$legacy:!0});var _e=be(ce,6);Sn(_e,{label:"Reihe 1 spiegeln",get value(){return g(O)},set value(Se){H(O,Se)},$$legacy:!0});var xe=be(_e,2);Sn(xe,{label:"Reihe 2 spiegeln",get value(){return g(k)},set value(Se){H(k,Se)},$$legacy:!0});var Ve=be(xe,2);Sn(Ve,{label:"Reihe 3 spiegeln",get value(){return g(z)},set value(Se){H(z,Se)},$$legacy:!0});var ot=be(Ve,2);Sn(ot,{label:"Reihe 4 spiegeln",get value(){return g(N)},set value(Se){H(N,Se)},$$legacy:!0}),Be(G),Tt(()=>{he(ge,"viewBox",`0 0 ${g(s)??""} ${g(a)??""}`),he(se,"width",g(s)),he(se,"height",g(a)),he(Fe,"transform",`translate(${g(p)??""}, ${g(v)??""}) scale(${R})`)}),ht(n,te),tn()}mn(["click"]);const Zu=(n,e)=>{if(typeof n=="number"){if(e===3)return{mode:"rgb",r:(n>>8&15|n>>4&240)/255,g:(n>>4&15|n&240)/255,b:(n&15|n<<4&240)/255};if(e===4)return{mode:"rgb",r:(n>>12&15|n>>8&240)/255,g:(n>>8&15|n>>4&240)/255,b:(n>>4&15|n&240)/255,alpha:(n&15|n<<4&240)/255};if(e===6)return{mode:"rgb",r:(n>>16&255)/255,g:(n>>8&255)/255,b:(n&255)/255};if(e===8)return{mode:"rgb",r:(n>>24&255)/255,g:(n>>16&255)/255,b:(n>>8&255)/255,alpha:(n&255)/255}}},t0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},n0=n=>Zu(t0[n.toLowerCase()],6),i0=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,r0=n=>{let e;return(e=n.match(i0))?Zu(parseInt(e[1],16),e[1].length):void 0},Pi="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Qr=`${Pi}%`,uc=`(?:${Pi}%|${Pi})`,s0=`(?:${Pi}(deg|grad|rad|turn)|${Pi})`,wr="\\s*,\\s*",a0=new RegExp(`^rgba?\\(\\s*${Pi}${wr}${Pi}${wr}${Pi}\\s*(?:,\\s*${uc}\\s*)?\\)$`),o0=new RegExp(`^rgba?\\(\\s*${Qr}${wr}${Qr}${wr}${Qr}\\s*(?:,\\s*${uc}\\s*)?\\)$`),l0=n=>{let e={mode:"rgb"},t;if(t=n.match(a0))t[1]!==void 0&&(e.r=t[1]/255),t[2]!==void 0&&(e.g=t[2]/255),t[3]!==void 0&&(e.b=t[3]/255);else if(t=n.match(o0))t[1]!==void 0&&(e.r=t[1]/100),t[2]!==void 0&&(e.g=t[2]/100),t[3]!==void 0&&(e.b=t[3]/100);else return;return t[4]!==void 0?e.alpha=Math.max(0,Math.min(1,t[4]/100)):t[5]!==void 0&&(e.alpha=Math.max(0,Math.min(1,+t[5]))),e},c0=(n,e)=>n===void 0?void 0:typeof n!="object"?Qu(n):n.mode!==void 0?n:e?{...n,mode:e}:void 0,es=(n="rgb")=>e=>(e=c0(e,n))!==void 0?e.mode===n?e:Vn[e.mode][n]?Vn[e.mode][n](e):n==="rgb"?Vn[e.mode].rgb(e):Vn.rgb[n](Vn[e.mode].rgb(e)):void 0,Vn={},Ku={},na=[],ju={},f0=n=>n,vt=n=>(Vn[n.mode]={...Vn[n.mode],...n.toMode},Object.keys(n.fromMode||{}).forEach(e=>{Vn[e]||(Vn[e]={}),Vn[e][n.mode]=n.fromMode[e]}),n.ranges||(n.ranges={}),n.difference||(n.difference={}),n.channels.forEach(e=>{if(n.ranges[e]===void 0&&(n.ranges[e]=[0,1]),!n.interpolate[e])throw new Error(`Missing interpolator for: ${e}`);typeof n.interpolate[e]=="function"&&(n.interpolate[e]={use:n.interpolate[e]}),n.interpolate[e].fixup||(n.interpolate[e].fixup=f0)}),Ku[n.mode]=n,(n.parse||[]).forEach(e=>{d0(e,n.mode)}),es(n.mode)),u0=n=>Ku[n],d0=(n,e)=>{if(typeof n=="string"){if(!e)throw new Error("'mode' required when 'parser' is a string");ju[n]=e}else typeof n=="function"&&na.indexOf(n)<0&&na.push(n)},nl=/[^\x00-\x7F]|[a-zA-Z_]/,h0=/[^\x00-\x7F]|[-\w]/,le={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let $e=0;function xs(n){let e=n[$e],t=n[$e+1];return e==="-"||e==="+"?/\d/.test(t)||t==="."&&/\d/.test(n[$e+2]):e==="."?/\d/.test(t):/\d/.test(e)}function il(n){if($e>=n.length)return!1;let e=n[$e];if(nl.test(e))return!0;if(e==="-"){if(n.length-$e<2)return!1;let t=n[$e+1];return!!(t==="-"||nl.test(t))}return!1}const p0={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function Gr(n){let e="";if((n[$e]==="-"||n[$e]==="+")&&(e+=n[$e++]),e+=Ms(n),n[$e]==="."&&/\d/.test(n[$e+1])&&(e+=n[$e++]+Ms(n)),(n[$e]==="e"||n[$e]==="E")&&((n[$e+1]==="-"||n[$e+1]==="+")&&/\d/.test(n[$e+2])?e+=n[$e++]+n[$e++]+Ms(n):/\d/.test(n[$e+1])&&(e+=n[$e++]+Ms(n))),il(n)){let t=ia(n);return t==="deg"||t==="rad"||t==="turn"||t==="grad"?{type:le.Hue,value:e*p0[t]}:void 0}return n[$e]==="%"?($e++,{type:le.Percentage,value:+e}):{type:le.Number,value:+e}}function Ms(n){let e="";for(;/\d/.test(n[$e]);)e+=n[$e++];return e}function ia(n){let e="";for(;$e<n.length&&h0.test(n[$e]);)e+=n[$e++];return e}function m0(n){let e=ia(n);return n[$e]==="("?($e++,{type:le.Function,value:e}):e==="none"?{type:le.None,value:void 0}:{type:le.Ident,value:e}}function g0(n=""){let e=n.trim(),t=[],i;for($e=0;$e<e.length;){if(i=e[$e++],i===`
`||i==="	"||i===" "){for(;$e<e.length&&(e[$e]===`
`||e[$e]==="	"||e[$e]===" ");)$e++;continue}if(i===",")return;if(i===")"){t.push({type:le.ParenClose});continue}if(i==="+"){if($e--,xs(e)){t.push(Gr(e));continue}return}if(i==="-"){if($e--,xs(e)){t.push(Gr(e));continue}if(il(e)){t.push({type:le.Ident,value:ia(e)});continue}return}if(i==="."){if($e--,xs(e)){t.push(Gr(e));continue}return}if(i==="/"){for(;$e<e.length&&(e[$e]===`
`||e[$e]==="	"||e[$e]===" ");)$e++;let r;if(xs(e)&&(r=Gr(e),r.type!==le.Hue)){t.push({type:le.Alpha,value:r});continue}if(il(e)&&ia(e)==="none"){t.push({type:le.Alpha,value:{type:le.None,value:void 0}});continue}return}if(/\d/.test(i)){$e--,t.push(Gr(e));continue}if(nl.test(i)){$e--,t.push(m0(e));continue}return}return t}function _0(n){n._i=0;let e=n[n._i++];if(!e||e.type!==le.Function||e.value!=="color"||(e=n[n._i++],e.type!==le.Ident))return;const t=ju[e.value];if(!t)return;const i={mode:t},r=Ju(n,!1);if(!r)return;const s=u0(t).channels;for(let a=0,o,l;a<s.length;a++)o=r[a],l=s[a],o.type!==le.None&&(i[l]=o.type===le.Number?o.value:o.value/100,l==="alpha"&&(i[l]=Math.max(0,Math.min(1,i[l]))));return i}function Ju(n,e){const t=[];let i;for(;n._i<n.length;){if(i=n[n._i++],i.type===le.None||i.type===le.Number||i.type===le.Alpha||i.type===le.Percentage||e&&i.type===le.Hue){t.push(i);continue}if(i.type===le.ParenClose){if(n._i<n.length)return;continue}return}if(!(t.length<3||t.length>4)){if(t.length===4){if(t[3].type!==le.Alpha)return;t[3]=t[3].value}return t.length===3&&t.push({type:le.None,value:void 0}),t.every(r=>r.type!==le.Alpha)?t:void 0}}function v0(n,e){n._i=0;let t=n[n._i++];if(!t||t.type!==le.Function)return;let i=Ju(n,e);if(i)return i.unshift(t.value),i}const Qu=n=>{if(typeof n!="string")return;const e=g0(n),t=e?v0(e,!0):void 0;let i,r=0,s=na.length;for(;r<s;)if((i=na[r++](n,t))!==void 0)return i;return e?_0(e):void 0};function x0(n,e){if(!e||e[0]!=="rgb"&&e[0]!=="rgba")return;const t={mode:"rgb"},[,i,r,s,a]=e;if(!(i.type===le.Hue||r.type===le.Hue||s.type===le.Hue))return i.type!==le.None&&(t.r=i.type===le.Number?i.value/255:i.value/100),r.type!==le.None&&(t.g=r.type===le.Number?r.value/255:r.value/100),s.type!==le.None&&(t.b=s.type===le.Number?s.value/255:s.value/100),a.type!==le.None&&(t.alpha=Math.min(1,Math.max(0,a.type===le.Number?a.value:a.value/100))),t}const M0=n=>n==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,b0=(n,e,t)=>n+t*(e-n),S0=n=>{let e=[];for(let t=0;t<n.length-1;t++){let i=n[t],r=n[t+1];i===void 0&&r===void 0?e.push(void 0):i!==void 0&&r!==void 0?e.push([i,r]):e.push(i!==void 0?[i,i]:[r,r])}return e},y0=n=>e=>{let t=S0(e);return i=>{let r=i*t.length,s=i>=1?t.length-1:Math.max(Math.floor(r),0),a=t[s];return a===void 0?void 0:n(a[0],a[1],r-s)}},Ee=y0(b0),zt=n=>{let e=!1,t=n.map(i=>i!==void 0?(e=!0,i):1);return e?t:n},Dr={mode:"rgb",channels:["r","g","b","alpha"],parse:[x0,r0,l0,n0,M0,"srgb"],serialize:"srgb",interpolate:{r:Ee,g:Ee,b:Ee,alpha:{use:Ee,fixup:zt}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},Va=(n=0)=>Math.pow(Math.abs(n),563/256)*Math.sign(n),sf=n=>{let e=Va(n.r),t=Va(n.g),i=Va(n.b),r={mode:"xyz65",x:.5766690429101305*e+.1855582379065463*t+.1882286462349947*i,y:.297344975250536*e+.6273635662554661*t+.0752914584939979*i,z:.0270313613864123*e+.0706888525358272*t+.9913375368376386*i};return n.alpha!==void 0&&(r.alpha=n.alpha),r},Ha=n=>Math.pow(Math.abs(n),256/563)*Math.sign(n),af=({x:n,y:e,z:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r={mode:"a98",r:Ha(n*2.0415879038107465-e*.5650069742788597-.3447313507783297*t),g:Ha(n*-.9692436362808798+e*1.8759675015077206+.0415550574071756*t),b:Ha(n*.0134442806320312-e*.1183623922310184+1.0151749943912058*t)};return i!==void 0&&(r.alpha=i),r},Ga=(n=0)=>{const e=Math.abs(n);return e<=.04045?n/12.92:(Math.sign(n)||1)*Math.pow((e+.055)/1.055,2.4)},Ir=({r:n,g:e,b:t,alpha:i})=>{let r={mode:"lrgb",r:Ga(n),g:Ga(e),b:Ga(t)};return i!==void 0&&(r.alpha=i),r},er=n=>{let{r:e,g:t,b:i,alpha:r}=Ir(n),s={mode:"xyz65",x:.4123907992659593*e+.357584339383878*t+.1804807884018343*i,y:.2126390058715102*e+.715168678767756*t+.0721923153607337*i,z:.0193308187155918*e+.119194779794626*t+.9505321522496607*i};return r!==void 0&&(s.alpha=r),s},Xa=(n=0)=>{const e=Math.abs(n);return e>.0031308?(Math.sign(n)||1)*(1.055*Math.pow(e,1/2.4)-.055):n*12.92},Ur=({r:n,g:e,b:t,alpha:i},r="rgb")=>{let s={mode:r,r:Xa(n),g:Xa(e),b:Xa(t)};return i!==void 0&&(s.alpha=i),s},tr=({x:n,y:e,z:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=Ur({r:n*3.2409699419045226-e*1.537383177570094-.4986107602930034*t,g:n*-.9692436362808796+e*1.8759675015077204+.0415550574071756*t,b:n*.0556300796969936-e*.2039769588889765+1.0569715142428784*t});return i!==void 0&&(r.alpha=i),r},E0={...Dr,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:n=>af(er(n)),xyz65:af},toMode:{rgb:n=>tr(sf(n)),xyz65:sf}},Wt=n=>(n=n%360)<0?n+360:n,w0=(n,e)=>n.map((t,i,r)=>{if(t===void 0)return t;let s=Wt(t);return i===0||n[i-1]===void 0?s:e(s-Wt(r[i-1]))}).reduce((t,i)=>!t.length||i===void 0||t[t.length-1]===void 0?(t.push(i),t):(t.push(i+t[t.length-1]),t),[]),Mi=n=>w0(n,e=>Math.abs(e)<=180?e:e-360*Math.sign(e)),Ht=[-.14861,1.78277,-.29227,-.90649,1.97294,0],T0=Math.PI/180,A0=180/Math.PI;let of=Ht[3]*Ht[4],lf=Ht[1]*Ht[4],cf=Ht[1]*Ht[2]-Ht[0]*Ht[3];const R0=({r:n,g:e,b:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=(cf*t+n*of-e*lf)/(cf+of-lf),s=t-r,a=(Ht[4]*(e-r)-Ht[2]*s)/Ht[3],o={mode:"cubehelix",l:r,s:r===0||r===1?void 0:Math.sqrt(s*s+a*a)/(Ht[4]*r*(1-r))};return o.s&&(o.h=Math.atan2(a,s)*A0-120),i!==void 0&&(o.alpha=i),o},C0=({h:n,s:e,l:t,alpha:i})=>{let r={mode:"rgb"};n=(n===void 0?0:n+120)*T0,t===void 0&&(t=0);let s=e===void 0?0:e*t*(1-t),a=Math.cos(n),o=Math.sin(n);return r.r=t+s*(Ht[0]*a+Ht[1]*o),r.g=t+s*(Ht[2]*a+Ht[3]*o),r.b=t+s*(Ht[4]*a+Ht[5]*o),i!==void 0&&(r.alpha=i),r},ma=(n,e)=>{if(n.h===void 0||e.h===void 0||!n.s||!e.s)return 0;let t=Wt(n.h),i=Wt(e.h),r=Math.sin((i-t+360)/2*Math.PI/180);return 2*Math.sqrt(n.s*e.s)*r},P0=(n,e)=>{if(n.h===void 0||e.h===void 0)return 0;let t=Wt(n.h),i=Wt(e.h);return Math.abs(i-t)>180?t-(i-360*Math.sign(i-t)):i-t},ga=(n,e)=>{if(n.h===void 0||e.h===void 0||!n.c||!e.c)return 0;let t=Wt(n.h),i=Wt(e.h),r=Math.sin((i-t+360)/2*Math.PI/180);return 2*Math.sqrt(n.c*e.c)*r},bi=n=>{let e=n.reduce((i,r)=>{if(r!==void 0){let s=r*Math.PI/180;i.sin+=Math.sin(s),i.cos+=Math.cos(s)}return i},{sin:0,cos:0}),t=Math.atan2(e.sin,e.cos)*180/Math.PI;return t<0?360+t:t},L0={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:R0},toMode:{rgb:C0},interpolate:{h:{use:Ee,fixup:Mi},s:Ee,l:Ee,alpha:{use:Ee,fixup:zt}},difference:{h:ma},average:{h:bi}},Li=({l:n,a:e,b:t,alpha:i},r="lch")=>{e===void 0&&(e=0),t===void 0&&(t=0);let s=Math.sqrt(e*e+t*t),a={mode:r,l:n,c:s};return s&&(a.h=Wt(Math.atan2(t,e)*180/Math.PI)),i!==void 0&&(a.alpha=i),a},Di=({l:n,c:e,h:t,alpha:i},r="lab")=>{t===void 0&&(t=0);let s={mode:r,l:n,a:e?e*Math.cos(t/180*Math.PI):0,b:e?e*Math.sin(t/180*Math.PI):0};return i!==void 0&&(s.alpha=i),s},ed=Math.pow(29,3)/Math.pow(3,3),td=Math.pow(6,3)/Math.pow(29,3),Ft={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},br={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let Wa=n=>Math.pow(n,3)>td?Math.pow(n,3):(116*n-16)/ed;const nd=({l:n,a:e,b:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=(n+16)/116,s=e/500+r,a=r-t/200,o={mode:"xyz65",x:Wa(s)*br.X,y:Wa(r)*br.Y,z:Wa(a)*br.Z};return i!==void 0&&(o.alpha=i),o},_a=n=>tr(nd(n)),$a=n=>n>td?Math.cbrt(n):(ed*n+16)/116,id=({x:n,y:e,z:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=$a(n/br.X),s=$a(e/br.Y),a=$a(t/br.Z),o={mode:"lab65",l:116*s-16,a:500*(r-s),b:200*(s-a)};return i!==void 0&&(o.alpha=i),o},va=n=>{let e=id(er(n));return n.r===n.b&&n.b===n.g&&(e.a=e.b=0),e},ra=1,rd=1,ts=26/180*Math.PI,sa=Math.cos(ts),aa=Math.sin(ts),sd=100/Math.log(139/100),rl=({l:n,c:e,h:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r={mode:"lab65",l:(Math.exp(n*ra/sd)-1)/.0039},s=(Math.exp(.0435*e*rd*ra)-1)/.075,a=s*Math.cos(t/180*Math.PI-ts),o=s*Math.sin(t/180*Math.PI-ts);return r.a=a*sa-o/.83*aa,r.b=a*aa+o/.83*sa,i!==void 0&&(r.alpha=i),r},sl=({l:n,a:e,b:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=e*sa+t*aa,s=.83*(t*sa-e*aa),a=Math.sqrt(r*r+s*s),o={mode:"dlch",l:sd/ra*Math.log(1+.0039*n),c:Math.log(1+.075*a)/(.0435*rd*ra)};return o.c&&(o.h=Wt((Math.atan2(s,r)+ts)/Math.PI*180)),i!==void 0&&(o.alpha=i),o},ff=n=>rl(Li(n,"dlch")),uf=n=>Di(sl(n),"dlab"),D0={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:ff,rgb:n=>_a(ff(n))},fromMode:{lab65:uf,rgb:n=>uf(va(n))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:Ee,a:Ee,b:Ee,alpha:{use:Ee,fixup:zt}}},I0={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:rl,dlab:n=>Di(n,"dlab"),rgb:n=>_a(rl(n))},fromMode:{lab65:sl,dlab:n=>Li(n,"dlch"),rgb:n=>sl(va(n))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:Ee,c:Ee,h:{use:Ee,fixup:Mi},alpha:{use:Ee,fixup:zt}},difference:{h:ga},average:{h:bi}};function U0({h:n,s:e,i:t,alpha:i}){n=Wt(n!==void 0?n:0),e===void 0&&(e=0),t===void 0&&(t=0);let r=Math.abs(n/60%2-1),s;switch(Math.floor(n/60)){case 0:s={r:t*(1+e*(3/(2-r)-1)),g:t*(1+e*(3*(1-r)/(2-r)-1)),b:t*(1-e)};break;case 1:s={r:t*(1+e*(3*(1-r)/(2-r)-1)),g:t*(1+e*(3/(2-r)-1)),b:t*(1-e)};break;case 2:s={r:t*(1-e),g:t*(1+e*(3/(2-r)-1)),b:t*(1+e*(3*(1-r)/(2-r)-1))};break;case 3:s={r:t*(1-e),g:t*(1+e*(3*(1-r)/(2-r)-1)),b:t*(1+e*(3/(2-r)-1))};break;case 4:s={r:t*(1+e*(3*(1-r)/(2-r)-1)),g:t*(1-e),b:t*(1+e*(3/(2-r)-1))};break;case 5:s={r:t*(1+e*(3/(2-r)-1)),g:t*(1-e),b:t*(1+e*(3*(1-r)/(2-r)-1))};break;default:s={r:t*(1-e),g:t*(1-e),b:t*(1-e)}}return s.mode="rgb",i!==void 0&&(s.alpha=i),s}function N0({r:n,g:e,b:t,alpha:i}){n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=Math.max(n,e,t),s=Math.min(n,e,t),a={mode:"hsi",s:n+e+t===0?0:1-3*s/(n+e+t),i:(n+e+t)/3};return r-s!==0&&(a.h=(r===n?(e-t)/(r-s)+(e<t)*6:r===e?(t-n)/(r-s)+2:(n-e)/(r-s)+4)*60),i!==void 0&&(a.alpha=i),a}const F0={mode:"hsi",toMode:{rgb:U0},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:N0},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:Ee,fixup:Mi},s:Ee,i:Ee,alpha:{use:Ee,fixup:zt}},difference:{h:ma},average:{h:bi}};function O0({h:n,s:e,l:t,alpha:i}){n=Wt(n!==void 0?n:0),e===void 0&&(e=0),t===void 0&&(t=0);let r=t+e*(t<.5?t:1-t),s=r-(r-t)*2*Math.abs(n/60%2-1),a;switch(Math.floor(n/60)){case 0:a={r,g:s,b:2*t-r};break;case 1:a={r:s,g:r,b:2*t-r};break;case 2:a={r:2*t-r,g:r,b:s};break;case 3:a={r:2*t-r,g:s,b:r};break;case 4:a={r:s,g:2*t-r,b:r};break;case 5:a={r,g:2*t-r,b:s};break;default:a={r:2*t-r,g:2*t-r,b:2*t-r}}return a.mode="rgb",i!==void 0&&(a.alpha=i),a}function B0({r:n,g:e,b:t,alpha:i}){n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=Math.max(n,e,t),s=Math.min(n,e,t),a={mode:"hsl",s:r===s?0:(r-s)/(1-Math.abs(r+s-1)),l:.5*(r+s)};return r-s!==0&&(a.h=(r===n?(e-t)/(r-s)+(e<t)*6:r===e?(t-n)/(r-s)+2:(n-e)/(r-s)+4)*60),i!==void 0&&(a.alpha=i),a}const k0=(n,e)=>{switch(e){case"deg":return+n;case"rad":return n/Math.PI*180;case"grad":return n/10*9;case"turn":return n*360}},z0=new RegExp(`^hsla?\\(\\s*${s0}${wr}${Qr}${wr}${Qr}\\s*(?:,\\s*${uc}\\s*)?\\)$`),V0=n=>{let e=n.match(z0);if(!e)return;let t={mode:"hsl"};return e[3]!==void 0?t.h=+e[3]:e[1]!==void 0&&e[2]!==void 0&&(t.h=k0(e[1],e[2])),e[4]!==void 0&&(t.s=Math.min(Math.max(0,e[4]/100),1)),e[5]!==void 0&&(t.l=Math.min(Math.max(0,e[5]/100),1)),e[6]!==void 0?t.alpha=Math.max(0,Math.min(1,e[6]/100)):e[7]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+e[7]))),t};function H0(n,e){if(!e||e[0]!=="hsl"&&e[0]!=="hsla")return;const t={mode:"hsl"},[,i,r,s,a]=e;if(i.type!==le.None){if(i.type===le.Percentage)return;t.h=i.value}if(r.type!==le.None){if(r.type===le.Hue)return;t.s=r.value/100}if(s.type!==le.None){if(s.type===le.Hue)return;t.l=s.value/100}return a.type!==le.None&&(t.alpha=Math.min(1,Math.max(0,a.type===le.Number?a.value:a.value/100))),t}const ad={mode:"hsl",toMode:{rgb:O0},fromMode:{rgb:B0},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[H0,V0],serialize:n=>`hsl(${n.h!==void 0?n.h:"none"} ${n.s!==void 0?n.s*100+"%":"none"} ${n.l!==void 0?n.l*100+"%":"none"}${n.alpha<1?` / ${n.alpha}`:""})`,interpolate:{h:{use:Ee,fixup:Mi},s:Ee,l:Ee,alpha:{use:Ee,fixup:zt}},difference:{h:ma},average:{h:bi}};function od({h:n,s:e,v:t,alpha:i}){n=Wt(n!==void 0?n:0),e===void 0&&(e=0),t===void 0&&(t=0);let r=Math.abs(n/60%2-1),s;switch(Math.floor(n/60)){case 0:s={r:t,g:t*(1-e*r),b:t*(1-e)};break;case 1:s={r:t*(1-e*r),g:t,b:t*(1-e)};break;case 2:s={r:t*(1-e),g:t,b:t*(1-e*r)};break;case 3:s={r:t*(1-e),g:t*(1-e*r),b:t};break;case 4:s={r:t*(1-e*r),g:t*(1-e),b:t};break;case 5:s={r:t,g:t*(1-e),b:t*(1-e*r)};break;default:s={r:t*(1-e),g:t*(1-e),b:t*(1-e)}}return s.mode="rgb",i!==void 0&&(s.alpha=i),s}function ld({r:n,g:e,b:t,alpha:i}){n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=Math.max(n,e,t),s=Math.min(n,e,t),a={mode:"hsv",s:r===0?0:1-s/r,v:r};return r-s!==0&&(a.h=(r===n?(e-t)/(r-s)+(e<t)*6:r===e?(t-n)/(r-s)+2:(n-e)/(r-s)+4)*60),i!==void 0&&(a.alpha=i),a}const cd={mode:"hsv",toMode:{rgb:od},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:ld},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:Ee,fixup:Mi},s:Ee,v:Ee,alpha:{use:Ee,fixup:zt}},difference:{h:ma},average:{h:bi}};function G0({h:n,w:e,b:t,alpha:i}){if(e===void 0&&(e=0),t===void 0&&(t=0),e+t>1){let r=e+t;e/=r,t/=r}return od({h:n,s:t===1?1:1-e/(1-t),v:1-t,alpha:i})}function X0(n){let e=ld(n);if(e===void 0)return;let t=e.s!==void 0?e.s:0,i=e.v!==void 0?e.v:0,r={mode:"hwb",w:(1-t)*i,b:1-i};return e.h!==void 0&&(r.h=e.h),e.alpha!==void 0&&(r.alpha=e.alpha),r}function W0(n,e){if(!e||e[0]!=="hwb")return;const t={mode:"hwb"},[,i,r,s,a]=e;if(i.type!==le.None){if(i.type===le.Percentage)return;t.h=i.value}if(r.type!==le.None){if(r.type===le.Hue)return;t.w=r.value/100}if(s.type!==le.None){if(s.type===le.Hue)return;t.b=s.value/100}return a.type!==le.None&&(t.alpha=Math.min(1,Math.max(0,a.type===le.Number?a.value:a.value/100))),t}const $0={mode:"hwb",toMode:{rgb:G0},fromMode:{rgb:X0},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[W0],serialize:n=>`hwb(${n.h!==void 0?n.h:"none"} ${n.w!==void 0?n.w*100+"%":"none"} ${n.b!==void 0?n.b*100+"%":"none"}${n.alpha<1?` / ${n.alpha}`:""})`,interpolate:{h:{use:Ee,fixup:Mi},w:Ee,b:Ee,alpha:{use:Ee,fixup:zt}},difference:{h:P0},average:{h:bi}},fd=203,xa=.1593017578125,ud=78.84375,Ma=.8359375,ba=18.8515625,Sa=18.6875;function Ya(n){if(n<0)return 0;const e=Math.pow(n,1/ud);return 1e4*Math.pow(Math.max(0,e-Ma)/(ba-Sa*e),1/xa)}function qa(n){if(n<0)return 0;const e=Math.pow(n/1e4,xa);return Math.pow((Ma+ba*e)/(1+Sa*e),ud)}const Za=n=>Math.max(n/fd,0),df=({i:n,t:e,p:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);const r=Ya(n+.008609037037932761*e+.11102962500302593*t),s=Ya(n-.00860903703793275*e-.11102962500302599*t),a=Ya(n+.5600313357106791*e-.32062717498731885*t),o={mode:"xyz65",x:Za(2.070152218389422*r-1.3263473389671556*s+.2066510476294051*a),y:Za(.3647385209748074*r+.680566024947227*s-.0453045459220346*a),z:Za(-.049747207535812*r-.0492609666966138*s+1.1880659249923042*a)};return i!==void 0&&(o.alpha=i),o},Ka=(n=0)=>Math.max(n*fd,0),hf=({x:n,y:e,z:t,alpha:i})=>{const r=Ka(n),s=Ka(e),a=Ka(t),o=qa(.3592832590121217*r+.6976051147779502*s-.0358915932320289*a),l=qa(-.1920808463704995*r+1.1004767970374323*s+.0753748658519118*a),c=qa(.0070797844607477*r+.0748396662186366*s+.8433265453898765*a),f=.5*o+.5*l,u=1.61376953125*o-3.323486328125*l+1.709716796875*c,d=4.378173828125*o-4.24560546875*l-.132568359375*c,p={mode:"itp",i:f,t:u,p:d};return i!==void 0&&(p.alpha=i),p},Y0={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:df,rgb:n=>tr(df(n))},fromMode:{xyz65:hf,rgb:n=>hf(er(n))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:Ee,t:Ee,p:Ee,alpha:{use:Ee,fixup:zt}}},q0=134.03437499999998,Z0=16295499532821565e-27,ja=n=>{if(n<0)return 0;let e=Math.pow(n/1e4,xa);return Math.pow((Ma+ba*e)/(1+Sa*e),q0)},Ja=(n=0)=>Math.max(n*203,0),dd=({x:n,y:e,z:t,alpha:i})=>{n=Ja(n),e=Ja(e),t=Ja(t);let r=1.15*n-.15*t,s=.66*e+.34*n,a=ja(.41478972*r+.579999*s+.014648*t),o=ja(-.20151*r+1.120649*s+.0531008*t),l=ja(-.0166008*r+.2648*s+.6684799*t),c=(a+o)/2,f={mode:"jab",j:.44*c/(1-.56*c)-Z0,a:3.524*a-4.066708*o+.542708*l,b:.199076*a+1.096799*o-1.295875*l};return i!==void 0&&(f.alpha=i),f},K0=134.03437499999998,pf=16295499532821565e-27,Qa=n=>{if(n<0)return 0;let e=Math.pow(n,1/K0);return 1e4*Math.pow((Ma-e)/(Sa*e-ba),1/xa)},eo=n=>n/203,hd=({j:n,a:e,b:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=(n+pf)/(.44+.56*(n+pf)),s=Qa(r+.13860504*e+.058047316*t),a=Qa(r-.13860504*e-.058047316*t),o=Qa(r-.096019242*e-.8118919*t),l={mode:"xyz65",x:eo(1.661373024652174*s-.914523081304348*a+.23136208173913045*o),y:eo(-.3250758611844533*s+1.571847026732543*a-.21825383453227928*o),z:eo(-.090982811*s-.31272829*a+1.5227666*o)};return i!==void 0&&(l.alpha=i),l},pd=n=>{let e=dd(er(n));return n.r===n.b&&n.b===n.g&&(e.a=e.b=0),e},md=n=>tr(hd(n)),j0={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:pd,xyz65:dd},toMode:{rgb:md,xyz65:hd},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:Ee,a:Ee,b:Ee,alpha:{use:Ee,fixup:zt}}},mf=({j:n,a:e,b:t,alpha:i})=>{e===void 0&&(e=0),t===void 0&&(t=0);let r=Math.sqrt(e*e+t*t),s={mode:"jch",j:n,c:r};return r&&(s.h=Wt(Math.atan2(t,e)*180/Math.PI)),i!==void 0&&(s.alpha=i),s},gf=({j:n,c:e,h:t,alpha:i})=>{t===void 0&&(t=0);let r={mode:"jab",j:n,a:e?e*Math.cos(t/180*Math.PI):0,b:e?e*Math.sin(t/180*Math.PI):0};return i!==void 0&&(r.alpha=i),r},J0={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:gf,rgb:n=>md(gf(n))},fromMode:{rgb:n=>mf(pd(n)),jab:mf},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:Ee,fixup:Mi},c:Ee,j:Ee,alpha:{use:Ee,fixup:zt}},difference:{h:ga},average:{h:bi}},ya=Math.pow(29,3)/Math.pow(3,3),dc=Math.pow(6,3)/Math.pow(29,3);let to=n=>Math.pow(n,3)>dc?Math.pow(n,3):(116*n-16)/ya;const hc=({l:n,a:e,b:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=(n+16)/116,s=e/500+r,a=r-t/200,o={mode:"xyz50",x:to(s)*Ft.X,y:to(r)*Ft.Y,z:to(a)*Ft.Z};return i!==void 0&&(o.alpha=i),o},os=({x:n,y:e,z:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=Ur({r:n*3.1341359569958707-e*1.6173863321612538-.4906619460083532*t,g:n*-.978795502912089+e*1.916254567259524+.03344273116131949*t,b:n*.07195537988411677-e*.2289768264158322+1.405386058324125*t});return i!==void 0&&(r.alpha=i),r},gd=n=>os(hc(n)),ls=n=>{let{r:e,g:t,b:i,alpha:r}=Ir(n),s={mode:"xyz50",x:.436065742824811*e+.3851514688337912*t+.14307845442264197*i,y:.22249319175623702*e+.7168870538238823*t+.06061979053616537*i,z:.013923904500943465*e+.09708128566574634*t+.7140993584005155*i};return r!==void 0&&(s.alpha=r),s},no=n=>n>dc?Math.cbrt(n):(ya*n+16)/116,pc=({x:n,y:e,z:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=no(n/Ft.X),s=no(e/Ft.Y),a=no(t/Ft.Z),o={mode:"lab",l:116*s-16,a:500*(r-s),b:200*(s-a)};return i!==void 0&&(o.alpha=i),o},_d=n=>{let e=pc(ls(n));return n.r===n.b&&n.b===n.g&&(e.a=e.b=0),e};function Q0(n,e){if(!e||e[0]!=="lab")return;const t={mode:"lab"},[,i,r,s,a]=e;if(!(i.type===le.Hue||r.type===le.Hue||s.type===le.Hue))return i.type!==le.None&&(t.l=Math.min(Math.max(0,i.value),100)),r.type!==le.None&&(t.a=r.type===le.Number?r.value:r.value*125/100),s.type!==le.None&&(t.b=s.type===le.Number?s.value:s.value*125/100),a.type!==le.None&&(t.alpha=Math.min(1,Math.max(0,a.type===le.Number?a.value:a.value/100))),t}const mc={mode:"lab",toMode:{xyz50:hc,rgb:gd},fromMode:{xyz50:pc,rgb:_d},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[Q0],serialize:n=>`lab(${n.l!==void 0?n.l:"none"} ${n.a!==void 0?n.a:"none"} ${n.b!==void 0?n.b:"none"}${n.alpha<1?` / ${n.alpha}`:""})`,interpolate:{l:Ee,a:Ee,b:Ee,alpha:{use:Ee,fixup:zt}}},em={...mc,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:nd,rgb:_a},fromMode:{xyz65:id,rgb:va},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function tm(n,e){if(!e||e[0]!=="lch")return;const t={mode:"lch"},[,i,r,s,a]=e;if(i.type!==le.None){if(i.type===le.Hue)return;t.l=Math.min(Math.max(0,i.value),100)}if(r.type!==le.None&&(t.c=Math.max(0,r.type===le.Number?r.value:r.value*150/100)),s.type!==le.None){if(s.type===le.Percentage)return;t.h=s.value}return a.type!==le.None&&(t.alpha=Math.min(1,Math.max(0,a.type===le.Number?a.value:a.value/100))),t}const gc={mode:"lch",toMode:{lab:Di,rgb:n=>gd(Di(n))},fromMode:{rgb:n=>Li(_d(n)),lab:Li},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[tm],serialize:n=>`lch(${n.l!==void 0?n.l:"none"} ${n.c!==void 0?n.c:"none"} ${n.h!==void 0?n.h:"none"}${n.alpha<1?` / ${n.alpha}`:""})`,interpolate:{h:{use:Ee,fixup:Mi},c:Ee,l:Ee,alpha:{use:Ee,fixup:zt}},difference:{h:ga},average:{h:bi}},nm={...gc,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:n=>Di(n,"lab65"),rgb:n=>_a(Di(n,"lab65"))},fromMode:{rgb:n=>Li(va(n),"lch65"),lab65:n=>Li(n,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},vd=({l:n,u:e,v:t,alpha:i})=>{e===void 0&&(e=0),t===void 0&&(t=0);let r=Math.sqrt(e*e+t*t),s={mode:"lchuv",l:n,c:r};return r&&(s.h=Wt(Math.atan2(t,e)*180/Math.PI)),i!==void 0&&(s.alpha=i),s},xd=({l:n,c:e,h:t,alpha:i})=>{t===void 0&&(t=0);let r={mode:"luv",l:n,u:e?e*Math.cos(t/180*Math.PI):0,v:e?e*Math.sin(t/180*Math.PI):0};return i!==void 0&&(r.alpha=i),r},Md=(n,e,t)=>4*n/(n+15*e+3*t),bd=(n,e,t)=>9*e/(n+15*e+3*t),im=Md(Ft.X,Ft.Y,Ft.Z),rm=bd(Ft.X,Ft.Y,Ft.Z),sm=n=>n<=dc?ya*n:116*Math.cbrt(n)-16,al=({x:n,y:e,z:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=sm(e/Ft.Y),s=Md(n,e,t),a=bd(n,e,t);!isFinite(s)||!isFinite(a)?r=s=a=0:(s=13*r*(s-im),a=13*r*(a-rm));let o={mode:"luv",l:r,u:s,v:a};return i!==void 0&&(o.alpha=i),o},am=(n,e,t)=>4*n/(n+15*e+3*t),om=(n,e,t)=>9*e/(n+15*e+3*t),lm=am(Ft.X,Ft.Y,Ft.Z),cm=om(Ft.X,Ft.Y,Ft.Z),ol=({l:n,u:e,v:t,alpha:i})=>{if(n===void 0&&(n=0),n===0)return{mode:"xyz50",x:0,y:0,z:0};e===void 0&&(e=0),t===void 0&&(t=0);let r=e/(13*n)+lm,s=t/(13*n)+cm,a=Ft.Y*(n<=8?n/ya:Math.pow((n+16)/116,3)),o=a*(9*r)/(4*s),l=a*(12-3*r-20*s)/(4*s),c={mode:"xyz50",x:o,y:a,z:l};return i!==void 0&&(c.alpha=i),c},fm=n=>vd(al(ls(n))),um=n=>os(ol(xd(n))),dm={mode:"lchuv",toMode:{luv:xd,rgb:um},fromMode:{rgb:fm,luv:vd},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:Ee,fixup:Mi},c:Ee,l:Ee,alpha:{use:Ee,fixup:zt}},difference:{h:ga},average:{h:bi}},hm={...Dr,mode:"lrgb",toMode:{rgb:Ur},fromMode:{rgb:Ir},parse:["srgb-linear"],serialize:"srgb-linear"},pm={mode:"luv",toMode:{xyz50:ol,rgb:n=>os(ol(n))},fromMode:{xyz50:al,rgb:n=>al(ls(n))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:Ee,u:Ee,v:Ee,alpha:{use:Ee,fixup:zt}}},Sd=({r:n,g:e,b:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=Math.cbrt(.412221469470763*n+.5363325372617348*e+.0514459932675022*t),s=Math.cbrt(.2119034958178252*n+.6806995506452344*e+.1073969535369406*t),a=Math.cbrt(.0883024591900564*n+.2817188391361215*e+.6299787016738222*t),o={mode:"oklab",l:.210454268309314*r+.7936177747023054*s-.0040720430116193*a,a:1.9779985324311684*r-2.42859224204858*s+.450593709617411*a,b:.0259040424655478*r+.7827717124575296*s-.8086757549230774*a};return i!==void 0&&(o.alpha=i),o},Ea=n=>{let e=Sd(Ir(n));return n.r===n.b&&n.b===n.g&&(e.a=e.b=0),e},cs=({l:n,a:e,b:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=Math.pow(n+.3963377773761749*e+.2158037573099136*t,3),s=Math.pow(n-.1055613458156586*e-.0638541728258133*t,3),a=Math.pow(n-.0894841775298119*e-1.2914855480194092*t,3),o={mode:"lrgb",r:4.076741636075957*r-3.3077115392580616*s+.2309699031821044*a,g:-1.2684379732850317*r+2.6097573492876887*s-.3413193760026573*a,b:-.0041960761386756*r-.7034186179359362*s+1.7076146940746117*a};return i!==void 0&&(o.alpha=i),o},wa=n=>Ur(cs(n));function ll(n){const i=1.170873786407767;return .5*(i*n-.206+Math.sqrt((i*n-.206)*(i*n-.206)+4*.03*i*n))}function oa(n){return(n*n+.206*n)/(1.170873786407767*(n+.03))}function mm(n,e){let t,i,r,s,a,o,l,c;-1.88170328*n-.80936493*e>1?(t=1.19086277,i=1.76576728,r=.59662641,s=.75515197,a=.56771245,o=4.0767416621,l=-3.3077115913,c=.2309699292):1.81444104*n-1.19445276*e>1?(t=.73956515,i=-.45954404,r=.08285427,s=.1254107,a=.14503204,o=-1.2684380046,l=2.6097574011,c=-.3413193965):(t=1.35733652,i=-.00915799,r=-1.1513021,s=-.50559606,a=.00692167,o=-.0041960863,l=-.7034186147,c=1.707614701);let f=t+i*n+r*e+s*n*n+a*n*e,u=.3963377774*n+.2158037573*e,d=-.1055613458*n-.0638541728*e,p=-.0894841775*n-1.291485548*e;{let v=1+f*u,x=1+f*d,m=1+f*p,h=v*v*v,E=x*x*x,T=m*m*m,S=3*u*v*v,A=3*d*x*x,C=3*p*m*m,R=6*u*u*v,y=6*d*d*x,_=6*p*p*m,b=o*h+l*E+c*T,P=o*S+l*A+c*C,I=o*R+l*y+c*_;f=f-b*P/(P*P-.5*b*I)}return f}function _c(n,e){let t=mm(n,e),i=cs({l:1,a:t*n,b:t*e}),r=Math.cbrt(1/Math.max(i.r,i.g,i.b)),s=r*t;return[r,s]}function gm(n,e,t,i,r,s=null){s||(s=_c(n,e));let a;if((t-r)*s[1]-(s[0]-r)*i<=0)a=s[1]*r/(i*s[0]+s[1]*(r-t));else{a=s[1]*(r-1)/(i*(s[0]-1)+s[1]*(r-t));{let o=t-r,l=i,c=.3963377774*n+.2158037573*e,f=-.1055613458*n-.0638541728*e,u=-.0894841775*n-1.291485548*e,d=o+l*c,p=o+l*f,v=o+l*u;{let x=r*(1-a)+a*t,m=a*i,h=x+m*c,E=x+m*f,T=x+m*u,S=h*h*h,A=E*E*E,C=T*T*T,R=3*d*h*h,y=3*p*E*E,_=3*v*T*T,b=6*d*d*h,P=6*p*p*E,I=6*v*v*T,D=4.0767416621*S-3.3077115913*A+.2309699292*C-1,O=4.0767416621*R-3.3077115913*y+.2309699292*_,k=4.0767416621*b-3.3077115913*P+.2309699292*I,z=O/(O*O-.5*D*k),N=-D*z,W=-1.2684380046*S+2.6097574011*A-.3413193965*C-1,ee=-1.2684380046*R+2.6097574011*y-.3413193965*_,te=-1.2684380046*b+2.6097574011*P-.3413193965*I,J=ee/(ee*ee-.5*W*te),ge=-W*J,se=-.0041960863*S-.7034186147*A+1.707614701*C-1,Fe=-.0041960863*R-.7034186147*y+1.707614701*_,ve=-.0041960863*b-.7034186147*P+1.707614701*I,G=Fe/(Fe*Fe-.5*se*ve),$=-se*G;N=z>=0?N:1e6,ge=J>=0?ge:1e6,$=G>=0?$:1e6,a+=Math.min(N,Math.min(ge,$))}}}return a}function vc(n,e,t=null){t||(t=_c(n,e));let i=t[0],r=t[1];return[r/i,r/(1-i)]}function yd(n,e,t){let i=_c(e,t),r=gm(e,t,n,1,n,i),s=vc(e,t,i),a=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),o=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e)))),l=r/Math.min(n*s[0],(1-n)*s[1]),c=n*a,f=(1-n)*o,u=.9*l*Math.sqrt(Math.sqrt(1/(1/(c*c*c*c)+1/(f*f*f*f))));return c=n*.4,f=(1-n)*.8,[Math.sqrt(1/(1/(c*c)+1/(f*f))),u,r]}function _f(n){const e=n.l!==void 0?n.l:0,t=n.a!==void 0?n.a:0,i=n.b!==void 0?n.b:0,r={mode:"okhsl",l:ll(e)};n.alpha!==void 0&&(r.alpha=n.alpha);let s=Math.sqrt(t*t+i*i);if(!s)return r.s=0,r;let[a,o,l]=yd(e,t/s,i/s),c;if(s<o){let f=0,u=.8*a,d=1-u/o;c=(s-f)/(u+d*(s-f))*.8}else{let f=o,u=.2*o*o*1.25*1.25/a,d=1-u/(l-o);c=.8+.2*((s-f)/(u+d*(s-f)))}return c&&(r.s=c,r.h=Wt(Math.atan2(i,t)*180/Math.PI)),r}function vf(n){let e=n.h!==void 0?n.h:0,t=n.s!==void 0?n.s:0,i=n.l!==void 0?n.l:0;const r={mode:"oklab",l:oa(i)};if(n.alpha!==void 0&&(r.alpha=n.alpha),!t||i===1)return r.a=r.b=0,r;let s=Math.cos(e/180*Math.PI),a=Math.sin(e/180*Math.PI),[o,l,c]=yd(r.l,s,a),f,u,d,p;t<.8?(f=1.25*t,u=0,d=.8*o,p=1-d/l):(f=5*(t-.8),u=l,d=.2*l*l*1.25*1.25/o,p=1-d/(c-l));let v=u+f*d/(1-p*f);return r.a=v*s,r.b=v*a,r}const _m={...ad,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:_f,rgb:n=>_f(Ea(n))},toMode:{oklab:vf,rgb:n=>wa(vf(n))}};function xf(n){let e=n.l!==void 0?n.l:0,t=n.a!==void 0?n.a:0,i=n.b!==void 0?n.b:0,r=Math.sqrt(t*t+i*i),s=r?t/r:1,a=r?i/r:1,[o,l]=vc(s,a),c=.5,f=1-c/o,u=l/(r+e*l),d=u*e,p=u*r,v=oa(d),x=p*v/d,m=cs({l:v,a:s*x,b:a*x}),h=Math.cbrt(1/Math.max(m.r,m.g,m.b,0));e=e/h,r=r/h*ll(e)/e,e=ll(e);const E={mode:"okhsv",s:r?(c+l)*p/(l*c+l*f*p):0,v:e?e/d:0};return E.s&&(E.h=Wt(Math.atan2(i,t)*180/Math.PI)),n.alpha!==void 0&&(E.alpha=n.alpha),E}function Mf(n){const e={mode:"oklab"};n.alpha!==void 0&&(e.alpha=n.alpha);const t=n.h!==void 0?n.h:0,i=n.s!==void 0?n.s:0,r=n.v!==void 0?n.v:0,s=Math.cos(t/180*Math.PI),a=Math.sin(t/180*Math.PI),[o,l]=vc(s,a),c=.5,f=1-c/o,u=1-i*c/(c+l-l*f*i),d=i*l*c/(c+l-l*f*i),p=oa(u),v=d*p/u,x=cs({l:p,a:s*v,b:a*v}),m=Math.cbrt(1/Math.max(x.r,x.g,x.b,0)),h=oa(r*u),E=d*h/u;return e.l=h*m,e.a=E*s*m,e.b=E*a*m,e}const vm={...cd,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:xf,rgb:n=>xf(Ea(n))},toMode:{oklab:Mf,rgb:n=>wa(Mf(n))}};function xm(n,e){if(!e||e[0]!=="oklab")return;const t={mode:"oklab"},[,i,r,s,a]=e;if(!(i.type===le.Hue||r.type===le.Hue||s.type===le.Hue))return i.type!==le.None&&(t.l=Math.min(Math.max(0,i.type===le.Number?i.value:i.value/100),1)),r.type!==le.None&&(t.a=r.type===le.Number?r.value:r.value*.4/100),s.type!==le.None&&(t.b=s.type===le.Number?s.value:s.value*.4/100),a.type!==le.None&&(t.alpha=Math.min(1,Math.max(0,a.type===le.Number?a.value:a.value/100))),t}const Mm={...mc,mode:"oklab",toMode:{lrgb:cs,rgb:wa},fromMode:{lrgb:Sd,rgb:Ea},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[xm],serialize:n=>`oklab(${n.l!==void 0?n.l:"none"} ${n.a!==void 0?n.a:"none"} ${n.b!==void 0?n.b:"none"}${n.alpha<1?` / ${n.alpha}`:""})`};function bm(n,e){if(!e||e[0]!=="oklch")return;const t={mode:"oklch"},[,i,r,s,a]=e;if(i.type!==le.None){if(i.type===le.Hue)return;t.l=Math.min(Math.max(0,i.type===le.Number?i.value:i.value/100),1)}if(r.type!==le.None&&(t.c=Math.max(0,r.type===le.Number?r.value:r.value*.4/100)),s.type!==le.None){if(s.type===le.Percentage)return;t.h=s.value}return a.type!==le.None&&(t.alpha=Math.min(1,Math.max(0,a.type===le.Number?a.value:a.value/100))),t}const Sm={...gc,mode:"oklch",toMode:{oklab:n=>Di(n,"oklab"),rgb:n=>wa(Di(n,"oklab"))},fromMode:{rgb:n=>Li(Ea(n),"oklch"),oklab:n=>Li(n,"oklch")},parse:[bm],serialize:n=>`oklch(${n.l!==void 0?n.l:"none"} ${n.c!==void 0?n.c:"none"} ${n.h!==void 0?n.h:"none"}${n.alpha<1?` / ${n.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},bf=n=>{let{r:e,g:t,b:i,alpha:r}=Ir(n),s={mode:"xyz65",x:.486570948648216*e+.265667693169093*t+.1982172852343625*i,y:.2289745640697487*e+.6917385218365062*t+.079286914093745*i,z:0*e+.0451133818589026*t+1.043944368900976*i};return r!==void 0&&(s.alpha=r),s},Sf=({x:n,y:e,z:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r=Ur({r:n*2.4934969119414263-e*.9313836179191242-.402710784450717*t,g:n*-.8294889695615749+e*1.7626640603183465+.0236246858419436*t,b:n*.0358458302437845-e*.0761723892680418+.9568845240076871*t},"p3");return i!==void 0&&(r.alpha=i),r},ym={...Dr,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:n=>Sf(er(n)),xyz65:Sf},toMode:{rgb:n=>tr(bf(n)),xyz65:bf}},io=n=>{let e=Math.abs(n);return e>=1/512?Math.sign(n)*Math.pow(e,1/1.8):16*n},yf=({x:n,y:e,z:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r={mode:"prophoto",r:io(n*1.3457868816471585-e*.2555720873797946-.0511018649755453*t),g:io(n*-.5446307051249019+e*1.5082477428451466+.0205274474364214*t),b:io(n*0+e*0+1.2119675456389452*t)};return i!==void 0&&(r.alpha=i),r},ro=(n=0)=>{let e=Math.abs(n);return e>=16/512?Math.sign(n)*Math.pow(e,1.8):n/16},Ef=n=>{let e=ro(n.r),t=ro(n.g),i=ro(n.b),r={mode:"xyz50",x:.7977666449006423*e+.1351812974005331*t+.0313477341283922*i,y:.2880748288194013*e+.7118352342418731*t+899369387256e-16*i,z:0*e+0*t+.8251046025104602*i};return n.alpha!==void 0&&(r.alpha=n.alpha),r},Em={...Dr,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:yf,rgb:n=>yf(ls(n))},toMode:{xyz50:Ef,rgb:n=>os(Ef(n))}},wf=1.09929682680944,wm=.018053968510807,so=n=>{const e=Math.abs(n);return e>wm?(Math.sign(n)||1)*(wf*Math.pow(e,.45)-(wf-1)):4.5*n},Tf=({x:n,y:e,z:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);let r={mode:"rec2020",r:so(n*1.7166511879712683-e*.3556707837763925-.2533662813736599*t),g:so(n*-.6666843518324893+e*1.6164812366349395+.0157685458139111*t),b:so(n*.0176398574453108-e*.0427706132578085+.9421031212354739*t)};return i!==void 0&&(r.alpha=i),r},Af=1.09929682680944,Tm=.018053968510807,ao=(n=0)=>{let e=Math.abs(n);return e<Tm*4.5?n/4.5:(Math.sign(n)||1)*Math.pow((e+Af-1)/Af,1/.45)},Rf=n=>{let e=ao(n.r),t=ao(n.g),i=ao(n.b),r={mode:"xyz65",x:.6369580483012911*e+.1446169035862083*t+.1688809751641721*i,y:.262700212011267*e+.6779980715188708*t+.059301716469862*i,z:0*e+.0280726930490874*t+1.0609850577107909*i};return n.alpha!==void 0&&(r.alpha=n.alpha),r},Am={...Dr,mode:"rec2020",fromMode:{xyz65:Tf,rgb:n=>Tf(er(n))},toMode:{xyz65:Rf,rgb:n=>tr(Rf(n))},parse:["rec2020"],serialize:"rec2020"},Ki=.0037930732552754493,Ed=Math.cbrt(Ki),oo=n=>Math.cbrt(n)-Ed,Rm=n=>{const{r:e,g:t,b:i,alpha:r}=Ir(n),s=oo(.3*e+.622*t+.078*i+Ki),a=oo(.23*e+.692*t+.078*i+Ki),o=oo(.2434226892454782*e+.2047674442449682*t+.5518098665095535*i+Ki),l={mode:"xyb",x:(s-a)/2,y:(s+a)/2,b:o-(s+a)/2};return r!==void 0&&(l.alpha=r),l},lo=n=>Math.pow(n+Ed,3),Cm=({x:n,y:e,b:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);const r=lo(n+e)-Ki,s=lo(e-n)-Ki,a=lo(t+e)-Ki,o=Ur({r:11.031566904639861*r-9.866943908131562*s-.16462299650829934*a,g:-3.2541473810744237*r+4.418770377582723*s-.16462299650829934*a,b:-3.6588512867136815*r+2.7129230459360922*s+1.9459282407775895*a});return i!==void 0&&(o.alpha=i),o},Pm={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:Cm},fromMode:{rgb:Rm},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:Ee,y:Ee,b:Ee,alpha:{use:Ee,fixup:zt}}},Lm={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:os,lab:pc},fromMode:{rgb:ls,lab:hc},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:Ee,y:Ee,z:Ee,alpha:{use:Ee,fixup:zt}}},Dm=n=>{let{x:e,y:t,z:i,alpha:r}=n;e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0);let s={mode:"xyz50",x:1.0479298208405488*e+.0229467933410191*t-.0501922295431356*i,y:.0296278156881593*e+.990434484573249*t-.0170738250293851*i,z:-.0092430581525912*e+.0150551448965779*t+.7518742899580008*i};return r!==void 0&&(s.alpha=r),s},Im=n=>{let{x:e,y:t,z:i,alpha:r}=n;e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0);let s={mode:"xyz65",x:.9554734527042182*e-.0230985368742614*t+.0632593086610217*i,y:-.0283697069632081*e+1.0099954580058226*t+.021041398966943*i,z:.0123140016883199*e-.0205076964334779*t+1.3303659366080753*i};return r!==void 0&&(s.alpha=r),s},Um={mode:"xyz65",toMode:{rgb:tr,xyz50:Dm},fromMode:{rgb:er,xyz50:Im},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:Ee,y:Ee,z:Ee,alpha:{use:Ee,fixup:zt}}},Nm=({r:n,g:e,b:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);const r={mode:"yiq",y:.29889531*n+.58662247*e+.11448223*t,i:.59597799*n-.2741761*e-.32180189*t,q:.21147017*n-.52261711*e+.31114694*t};return i!==void 0&&(r.alpha=i),r},Fm=({y:n,i:e,q:t,alpha:i})=>{n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=0);const r={mode:"rgb",r:n+.95608445*e+.6208885*t,g:n-.27137664*e-.6486059*t,b:n-1.10561724*e+1.70250126*t};return i!==void 0&&(r.alpha=i),r},Om={mode:"yiq",toMode:{rgb:Fm},fromMode:{rgb:Nm},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:Ee,i:Ee,q:Ee,alpha:{use:Ee,fixup:zt}}},Bm=n=>Math.max(0,Math.min(1,n||0)),co=n=>Math.round(Bm(n)*255),km=es("rgb"),zm=n=>{if(n===void 0)return;let e=co(n.r),t=co(n.g),i=co(n.b);return"#"+(1<<24|e<<16|t<<8|i).toString(16).slice(1)},cl=n=>zm(km(n));vt(E0);vt(L0);vt(D0);vt(I0);vt(F0);vt(ad);vt(cd);vt($0);vt(Y0);vt(j0);vt(J0);vt(mc);vt(em);vt(gc);vt(nm);vt(dm);vt(hm);vt(pm);vt(_m);vt(vm);vt(Mm);vt(Sm);vt(ym);vt(Em);vt(Am);vt(Dr);vt(Pm);vt(Lm);vt(Um);vt(Om);const xc="182",Vm=0,Cf=1,Hm=2,Ys=1,Gm=2,jr=3,Ii=0,ln=1,Hn=2,pi=0,Sr=1,Pf=2,Lf=3,Df=4,Xm=5,Wi=100,Wm=101,$m=102,Ym=103,qm=104,Zm=200,Km=201,jm=202,Jm=203,fl=204,ul=205,Qm=206,eg=207,tg=208,ng=209,ig=210,rg=211,sg=212,ag=213,og=214,dl=0,hl=1,pl=2,Tr=3,ml=4,gl=5,_l=6,vl=7,wd=0,lg=1,cg=2,Wn=0,Td=1,Ad=2,Rd=3,Cd=4,Pd=5,Ld=6,Dd=7,Id=300,Ji=301,Ar=302,xl=303,Ml=304,Ta=306,bl=1e3,fi=1001,Sl=1002,Xt=1003,fg=1004,bs=1005,qt=1006,fo=1007,Yi=1008,yn=1009,Ud=1010,Nd=1011,ns=1012,Mc=1013,Zn=1014,Gn=1015,_i=1016,bc=1017,Sc=1018,is=1020,Fd=35902,Od=35899,Bd=1021,kd=1022,Ln=1023,vi=1026,qi=1027,zd=1028,yc=1029,Rr=1030,Ec=1031,wc=1033,qs=33776,Zs=33777,Ks=33778,js=33779,yl=35840,El=35841,wl=35842,Tl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Ll=37489,Dl=37490,Il=37491,Ul=37808,Nl=37809,Fl=37810,Ol=37811,Bl=37812,kl=37813,zl=37814,Vl=37815,Hl=37816,Gl=37817,Xl=37818,Wl=37819,$l=37820,Yl=37821,ql=36492,Zl=36494,Kl=36495,jl=36283,Jl=36284,Ql=36285,ec=36286,ug=3200,dg=0,hg=1,Ri="",vn="srgb",Qi="srgb-linear",la="linear",bt="srgb",ir=7680,If=519,pg=512,mg=513,gg=514,Tc=515,_g=516,vg=517,Ac=518,xg=519,Uf=35044,Nf="300 es",Xn=2e3,ca=2001;function Vd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mg(){const n=fa("canvas");return n.style.display="block",n}const Ff={};function Of(...n){const e="THREE."+n.shift();console.log(e,...n)}function Qe(...n){const e="THREE."+n.shift();console.warn(e,...n)}function _t(...n){const e="THREE."+n.shift();console.error(e,...n)}function rs(...n){const e=n.join(" ");e in Ff||(Ff[e]=!0,Qe(...n))}function bg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uo=Math.PI/180,tc=180/Math.PI;function fs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Sg(n,e){return(n%e+e)%e}function ho(n,e,t){return(1-t)*n+t*e}function Xr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class us{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(u!==x||l!==d||c!==p||f!==v){let m=l*d+c*p+f*v+u*x;m<0&&(d=-d,p=-p,v=-v,x=-x,m=-m);let h=1-o;if(m<.9995){const E=Math.acos(m),T=Math.sin(E);h=Math.sin(h*E)/T,o=Math.sin(o*E)/T,l=l*h+d*o,c=c*h+p*o,f=f*h+v*o,u=u*h+x*o}else{l=l*h+d*o,c=c*h+p*o,f=f*h+v*o,u=u*h+x*o;const E=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=E,c*=E,f*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[a],d=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+f*u+l*p-c*d,e[t+1]=l*v+f*d+c*u-o*p,e[t+2]=c*v+f*p+o*d-l*u,e[t+3]=f*v-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*f*u+c*p*v,this._y=c*p*u-d*f*v,this._z=c*f*v+d*p*u,this._w=c*f*u-d*p*v;break;case"YXZ":this._x=d*f*u+c*p*v,this._y=c*p*u-d*f*v,this._z=c*f*v-d*p*u,this._w=c*f*u+d*p*v;break;case"ZXY":this._x=d*f*u-c*p*v,this._y=c*p*u+d*f*v,this._z=c*f*v+d*p*u,this._w=c*f*u-d*p*v;break;case"ZYX":this._x=d*f*u-c*p*v,this._y=c*p*u+d*f*v,this._z=c*f*v-d*p*u,this._w=c*f*u+d*p*v;break;case"YZX":this._x=d*f*u+c*p*v,this._y=c*p*u+d*f*v,this._z=c*f*v-d*p*u,this._w=c*f*u-d*p*v;break;case"XZY":this._x=d*f*u-c*p*v,this._y=c*p*u-d*f*v,this._z=c*f*v+d*p*u,this._w=c*f*u+d*p*v;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*f,this.y=i+l*f+o*c-s*u,this.z=r+l*u+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new q,Bf=new us;class st{constructor(e,t,i,r,s,a,o,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],u=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],h=r[6],E=r[1],T=r[4],S=r[7],A=r[2],C=r[5],R=r[8];return s[0]=a*x+o*E+l*A,s[3]=a*m+o*T+l*C,s[6]=a*h+o*S+l*R,s[1]=c*x+f*E+u*A,s[4]=c*m+f*T+u*C,s[7]=c*h+f*S+u*R,s[2]=d*x+p*E+v*A,s[5]=d*m+p*T+v*C,s[8]=d*h+p*S+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,d=o*l-f*s,p=c*s-a*l,v=t*u+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=u*x,e[1]=(r*c-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(f*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new st,kf=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zf=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yg(){const n={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ri?la:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qi]:{primaries:e,whitePoint:i,transfer:la,toXYZ:kf,fromXYZ:zf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:kf,fromXYZ:zf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}const pt=yg();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rr;class Eg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rr===void 0&&(rr=fa("canvas")),rr.width=e.width,rr.height=e.height;const r=rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wg=0;class Rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(go(r[a].image)):s.push(go(r[a]))}else s=go(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let Tg=0;const _o=new q;class Qt extends Nr{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=fi,r=fi,s=qt,a=Yi,o=Ln,l=yn,c=Qt.DEFAULT_ANISOTROPY,f=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=fs(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bl:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bl:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Id;Qt.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(f-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(p+1)/2,A=(h+1)/2,C=(f+d)/4,R=(u+x)/4,y=(v+m)/4;return T>S&&T>A?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=R/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=y/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=y/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(d-f)*(d-f));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(u-x)/E,this.z=(d-f)/E,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ag extends Nr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Qt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Rc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Ag{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hd extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rg extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ss.copy(i.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),ys.subVectors(this.max,Wr),sr.subVectors(e.a,Wr),ar.subVectors(e.b,Wr),or.subVectors(e.c,Wr),Si.subVectors(ar,sr),yi.subVectors(or,ar),Bi.subVectors(sr,or);let t=[0,-Si.z,Si.y,0,-yi.z,yi.y,0,-Bi.z,Bi.y,Si.z,0,-Si.x,yi.z,0,-yi.x,Bi.z,0,-Bi.x,-Si.y,Si.x,0,-yi.y,yi.x,0,-Bi.y,Bi.x,0];return!vo(t,sr,ar,or,ys)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,sr,ar,or,ys))?!1:(Es.crossVectors(Si,yi),t=[Es.x,Es.y,Es.z],vo(t,sr,ar,or,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ti=[new q,new q,new q,new q,new q,new q,new q,new q],An=new q,Ss=new ds,sr=new q,ar=new q,or=new q,Si=new q,yi=new q,Bi=new q,Wr=new q,ys=new q,Es=new q,ki=new q;function vo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ki.fromArray(n,s);const o=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),f=i.dot(ki);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Cg=new ds,$r=new q,xo=new q;class Cc{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(xo)),this.expandByPoint($r.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ni=new q,Mo=new q,ws=new q,Ei=new q,bo=new q,Ts=new q,So=new q;class Pg{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mo.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Mo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ws),o=Ei.dot(this.direction),l=-Ei.dot(ws),c=Ei.lengthSq(),f=Math.abs(1-a*a);let u,d,p,v;if(f>0)if(u=a*l-o,d=a*o-l,v=s*f,u>=0)if(d>=-v)if(d<=v){const x=1/f;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Mo).addScaledVector(ws,d),p}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,r,s){bo.subVectors(t,e),Ts.subVectors(i,e),So.crossVectors(bo,Ts);let a=this.direction.dot(So),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(Ts.crossVectors(Ei,Ts));if(l<0)return null;const c=o*this.direction.dot(bo.cross(Ei));if(c<0||l+c>a)return null;const f=-o*Ei.dot(So);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,i,r,s,a,o,l,c,f,u,d,p,v,x,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,u,d,p,v,x,m)}set(e,t,i,r,s,a,o,l,c,f,u,d,p,v,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=u,h[14]=d,h[3]=p,h[7]=v,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*f,p=a*u,v=o*f,x=o*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=p+v*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*f,p=l*u,v=c*f,x=c*u;t[0]=d+x*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=p*o-v,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*f,p=l*u,v=c*f,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*f,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*f,p=a*u,v=o*f,x=o*u;t[0]=l*f,t[4]=v*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*f,t[4]=x-d*u,t[8]=v*u+p,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=p*u+v,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=d*u+x,t[5]=a*f,t[9]=p*u-v,t[2]=v*u-p,t[6]=o*f,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lg,e,Dg)}lookAt(e,t,i){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),wi.crossVectors(i,un),wi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),wi.crossVectors(i,un)),wi.normalize(),As.crossVectors(un,wi),r[0]=wi.x,r[4]=As.x,r[8]=un.x,r[1]=wi.y,r[5]=As.y,r[9]=un.y,r[2]=wi.z,r[6]=As.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],u=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],h=i[14],E=i[3],T=i[7],S=i[11],A=i[15],C=r[0],R=r[4],y=r[8],_=r[12],b=r[1],P=r[5],I=r[9],D=r[13],O=r[2],k=r[6],z=r[10],N=r[14],W=r[3],ee=r[7],te=r[11],J=r[15];return s[0]=a*C+o*b+l*O+c*W,s[4]=a*R+o*P+l*k+c*ee,s[8]=a*y+o*I+l*z+c*te,s[12]=a*_+o*D+l*N+c*J,s[1]=f*C+u*b+d*O+p*W,s[5]=f*R+u*P+d*k+p*ee,s[9]=f*y+u*I+d*z+p*te,s[13]=f*_+u*D+d*N+p*J,s[2]=v*C+x*b+m*O+h*W,s[6]=v*R+x*P+m*k+h*ee,s[10]=v*y+x*I+m*z+h*te,s[14]=v*_+x*D+m*N+h*J,s[3]=E*C+T*b+S*O+A*W,s[7]=E*R+T*P+S*k+A*ee,s[11]=E*y+T*I+S*z+A*te,s[15]=E*_+T*D+S*N+A*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],h=e[15],E=l*p-c*d,T=o*p-c*u,S=o*d-l*u,A=a*p-c*f,C=a*d-l*f,R=a*u-o*f;return t*(x*E-m*T+h*S)-i*(v*E-m*A+h*C)+r*(v*T-x*A+h*R)-s*(v*S-x*C+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],h=e[15],E=u*m*c-x*d*c+x*l*p-o*m*p-u*l*h+o*d*h,T=v*d*c-f*m*c-v*l*p+a*m*p+f*l*h-a*d*h,S=f*x*c-v*u*c+v*o*p-a*x*p-f*o*h+a*u*h,A=v*u*l-f*x*l-v*o*d+a*x*d+f*o*m-a*u*m,C=t*E+i*T+r*S+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=E*R,e[1]=(x*d*s-u*m*s-x*r*p+i*m*p+u*r*h-i*d*h)*R,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*h+i*l*h)*R,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*p-i*l*p)*R,e[4]=T*R,e[5]=(f*m*s-v*d*s+v*r*p-t*m*p-f*r*h+t*d*h)*R,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*h-t*l*h)*R,e[7]=(a*d*s-f*l*s+f*r*c-t*d*c-a*r*p+t*l*p)*R,e[8]=S*R,e[9]=(v*u*s-f*x*s-v*i*p+t*x*p+f*i*h-t*u*h)*R,e[10]=(a*x*s-v*o*s+v*i*c-t*x*c-a*i*h+t*o*h)*R,e[11]=(f*o*s-a*u*s-f*i*c+t*u*c+a*i*p-t*o*p)*R,e[12]=A*R,e[13]=(f*x*r-v*u*r+v*i*d-t*x*d-f*i*m+t*u*m)*R,e[14]=(v*o*r-a*x*r-v*i*l+t*x*l+a*i*m-t*o*m)*R,e[15]=(a*u*r-f*o*r+f*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,u=o+o,d=s*c,p=s*f,v=s*u,x=a*f,m=a*u,h=o*u,E=l*c,T=l*f,S=l*u,A=i.x,C=i.y,R=i.z;return r[0]=(1-(x+h))*A,r[1]=(p+S)*A,r[2]=(v-T)*A,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(d+h))*C,r[6]=(m+E)*C,r[7]=0,r[8]=(v+T)*R,r[9]=(m-E)*R,r[10]=(1-(d+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=lr.set(r[0],r[1],r[2]).length();const a=lr.set(r[4],r[5],r[6]).length(),o=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Rn.copy(this);const c=1/s,f=1/a,u=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=f,Rn.elements[5]*=f,Rn.elements[6]*=f,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Xn,l=!1){const c=this.elements,f=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let v,x;if(l)v=s/(a-s),x=a*s/(a-s);else if(o===Xn)v=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ca)v=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Xn,l=!1){const c=this.elements,f=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let v,x;if(l)v=1/(a-s),x=a/(a-s);else if(o===Xn)v=-2/(a-s),x=-(a+s)/(a-s);else if(o===ca)v=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lr=new q,Rn=new Ot,Lg=new q(0,0,0),Dg=new q(1,1,1),wi=new q,As=new q,un=new q,Vf=new Ot,Hf=new us;class xi{constructor(e=0,t=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ig=0;const Gf=new q,cr=new us,ii=new Ot,Rs=new q,Yr=new q,Ug=new q,Ng=new us,Xf=new q(1,0,0),Wf=new q(0,1,0),$f=new q(0,0,1),Yf={type:"added"},Fg={type:"removed"},fr={type:"childadded",child:null},yo={type:"childremoved",child:null};class pn extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new q,t=new xi,i=new us,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new st}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis(Wf,e)}rotateZ(e){return this.rotateOnAxis($f,e)}translateOnAxis(e,t){return Gf.copy(e).applyQuaternion(this.quaternion),this.position.add(Gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis(Wf,e)}translateZ(e){return this.translateOnAxis($f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rs.copy(e):Rs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Yr,Rs,this.up):ii.lookAt(Rs,Yr,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(ii),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yf),fr.child=e,this.dispatchEvent(fr),fr.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fg),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yf),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,Ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Ng,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new q(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new q,ri=new q,Eo=new q,si=new q,ur=new q,dr=new q,qf=new q,wo=new q,To=new q,Ao=new q,Ro=new Dt,Co=new Dt,Po=new Dt;class Pn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Cn.subVectors(e,t),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Cn.subVectors(r,t),ri.subVectors(i,t),Eo.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(ri),l=Cn.dot(Eo),c=ri.dot(ri),f=ri.dot(Eo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*f)*d,v=(a*f-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,i),Po.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ro,s.x),a.addScaledVector(Co,s.y),a.addScaledVector(Po,s.z),a}static isFrontFacing(e,t,i,r){return Cn.subVectors(i,t),ri.subVectors(e,t),Cn.cross(ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Cn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ur.subVectors(r,i),dr.subVectors(s,i),wo.subVectors(e,i);const l=ur.dot(wo),c=dr.dot(wo);if(l<=0&&c<=0)return t.copy(i);To.subVectors(e,r);const f=ur.dot(To),u=dr.dot(To);if(f>=0&&u<=f)return t.copy(r);const d=l*u-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(ur,a);Ao.subVectors(e,s);const p=ur.dot(Ao),v=dr.dot(Ao);if(v>=0&&p<=v)return t.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(dr,o);const m=f*v-p*u;if(m<=0&&u-f>=0&&p-v>=0)return qf.subVectors(s,r),o=(u-f)/(u-f+(p-v)),t.copy(r).addScaledVector(qf,o);const h=1/(m+x+d);return a=x*h,o=d*h,t.copy(i).addScaledVector(ur,a).addScaledVector(dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Lo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let yt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=pt.workingColorSpace){if(e=Sg(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Lo(a,s,e+1/3),this.g=Lo(a,s,e),this.b=Lo(a,s,e-1/3)}return pt.colorSpaceToWorking(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=Xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return pt.workingToColorSpace(Yt.copy(this),e),Math.round(dt(Yt.r*255,0,255))*65536+Math.round(dt(Yt.g*255,0,255))*256+Math.round(dt(Yt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=vn){pt.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Cs);const i=ho(Ti.h,Cs.h,t),r=ho(Ti.s,Cs.s,t),s=ho(Ti.l,Cs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Yt=new yt;yt.NAMES=Xd;let Og=0;class Aa extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Sr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=ul,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==ul&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==If&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pc extends Aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new q,Ps=new Et;let Bg=0;class Yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uf,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uf&&(e.usage=this.usage),e}}class Wd extends Yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $d extends Yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hn extends Yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kg=0;const _n=new Ot,Do=new pn,hr=new q,dn=new ds,qr=new ds,Vt=new q;class Qn extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?$d:Wd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new st().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new hn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(dn.min,qr.min),dn.expandByPoint(Vt),Vt.addVectors(dn.max,qr.max),dn.expandByPoint(Vt)):(dn.expandByPoint(qr.min),dn.expandByPoint(qr.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Vt.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(e,c),Vt.add(hr)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new q,l[y]=new q;const c=new q,f=new q,u=new q,d=new Et,p=new Et,v=new Et,x=new q,m=new q;function h(y,_,b){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,_),u.fromBufferAttribute(i,b),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,_),v.fromBufferAttribute(s,b),f.sub(c),u.sub(c),p.sub(d),v.sub(d);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(P),o[y].add(x),o[_].add(x),o[b].add(x),l[y].add(m),l[_].add(m),l[b].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let y=0,_=E.length;y<_;++y){const b=E[y],P=b.start,I=b.count;for(let D=P,O=P+I;D<O;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const T=new q,S=new q,A=new q,C=new q;function R(y){A.fromBufferAttribute(r,y),C.copy(A);const _=o[y];T.copy(_),T.sub(A.multiplyScalar(A.dot(_))).normalize(),S.crossVectors(C,_);const P=S.dot(l[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,P)}for(let y=0,_=E.length;y<_;++y){const b=E[y],P=b.start,I=b.count;for(let D=P,O=P+I;D<O;D+=3)R(e.getX(D+0)),R(e.getX(D+1)),R(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,f=new q,u=new q;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,d=new c.constructor(l.length*f);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let h=0;h<f;h++)d[v++]=c[p++]}return new Yn(d,f,u)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const d=c[f],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let d=0,p=u.length;d<p;d++)f.push(u[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zf=new Ot,zi=new Pg,Ls=new Cc,Kf=new q,Ds=new q,Is=new q,Us=new q,Io=new q,Ns=new q,jf=new q,Fs=new q;class Kn extends pn{constructor(e=new Qn,t=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&(Io.fromBufferAttribute(u,e),a?Ns.addScaledVector(Io,f):Ns.addScaledVector(Io.sub(t),f))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),zi.copy(e.ray).recast(e.near),!(Ls.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Ls,Kf)===null||zi.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(Zf.copy(s).invert(),zi.copy(e.ray).applyMatrix4(Zf),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const m=d[v],h=a[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,A=T;S<A;S+=3){const C=o.getX(S),R=o.getX(S+1),y=o.getX(S+2);r=Os(this,h,e,i,c,f,u,C,R,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const E=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);r=Os(this,a,e,i,c,f,u,E,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const m=d[v],h=a[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,A=T;S<A;S+=3){const C=S,R=S+1,y=S+2;r=Os(this,h,e,i,c,f,u,C,R,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const E=m,T=m+1,S=m+2;r=Os(this,a,e,i,c,f,u,E,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function zg(n,e,t,i,r,s,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ii,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:n}}function Os(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ds),n.getVertexPosition(l,Is),n.getVertexPosition(c,Us);const f=zg(n,e,t,i,Ds,Is,Us,jf);if(f){const u=new q;Pn.getBarycoord(jf,Ds,Is,Us,u),r&&(f.uv=Pn.getInterpolatedAttribute(r,o,l,c,u,new Et)),s&&(f.uv1=Pn.getInterpolatedAttribute(s,o,l,c,u,new Et)),a&&(f.normal=Pn.getInterpolatedAttribute(a,o,l,c,u,new q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new q,materialIndex:0};Pn.getNormal(Ds,Is,Us,d.normal),f.face=d,f.barycoord=u}return f}class hs extends Qn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(f,3)),this.setAttribute("uv",new hn(u,2));function v(x,m,h,E,T,S,A,C,R,y,_){const b=S/R,P=A/y,I=S/2,D=A/2,O=C/2,k=R+1,z=y+1;let N=0,W=0;const ee=new q;for(let te=0;te<z;te++){const J=te*P-D;for(let ge=0;ge<k;ge++){const se=ge*b-I;ee[x]=se*E,ee[m]=J*T,ee[h]=O,c.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[h]=C>0?1:-1,f.push(ee.x,ee.y,ee.z),u.push(ge/R),u.push(1-te/y),N+=1}}for(let te=0;te<y;te++)for(let J=0;J<R;J++){const ge=d+J+k*te,se=d+J+k*(te+1),Fe=d+(J+1)+k*(te+1),ve=d+(J+1)+k*te;l.push(ge,se,ve),l.push(se,Fe,ve),W+=6}o.addGroup(p,W,_),p+=W,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=Cr(n[t]);for(const r in i)e[r]=i[r]}return e}function Vg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Hg={clone:Cr,merge:Jt};var Gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends Aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gg,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=Vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qd extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new q,Jf=new Et,Qf=new Et;class bn extends qd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tc*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Jf,Qf),t.subVectors(Qf,Jf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pr=-90,mr=1;class Wg extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(pr,mr,e,t);r.layers=this.layers,this.add(r);const s=new bn(pr,mr,e,t);s.layers=this.layers,this.add(s);const a=new bn(pr,mr,e,t);a.layers=this.layers,this.add(a);const o=new bn(pr,mr,e,t);o.layers=this.layers,this.add(o);const l=new bn(pr,mr,e,t);l.layers=this.layers,this.add(l);const c=new bn(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(u,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Zd extends Qt{constructor(e=[],t=Ji,i,r,s,a,o,l,c,f){super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kd extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hs(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:pi});s.uniforms.tEquirect.value=t;const a=new Kn(r,s),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=qt),new Wg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Bs extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $g={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=f.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($g)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Yg extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qg extends Qt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Xt,f=Xt,u,d){super(null,a,o,l,c,f,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const No=new q,Zg=new q,Kg=new st;class Xi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=No.subVectors(i,t).cross(Zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(No),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Kg.getNormalMatrix(e),r=this.coplanarPoint(No).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Cc,jg=new Et(.5,.5),ks=new q;class jd{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,s=new Xi,a=new Xi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],u=s[5],d=s[6],p=s[7],v=s[8],x=s[9],m=s[10],h=s[11],E=s[12],T=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,p-f,h-v,A-E).normalize(),r[1].setComponents(c+a,p+f,h+v,A+E).normalize(),r[2].setComponents(c+o,p+u,h+x,A+T).normalize(),r[3].setComponents(c-o,p-u,h-x,A-T).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,p-d,h-m,A-S).normalize();else if(r[4].setComponents(c-l,p-d,h-m,A-S).normalize(),t===Xn)r[5].setComponents(c+l,p+d,h+m,A+S).normalize();else if(t===ca)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);const t=jg.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ks.x=r.normal.x>0?e.max.x:e.min.x,ks.y=r.normal.y>0?e.max.y:e.min.y,ks.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ss extends Qt{constructor(e,t,i=Zn,r,s,a,o=Xt,l=Xt,c,f=vi,u=1){if(f!==vi&&f!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jg extends ss{constructor(e,t=Zn,i=Ji,r,s,a=Xt,o=Xt,l,c=vi){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jd extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ra extends Qn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,u=e/o,d=t/l,p=[],v=[],x=[],m=[];for(let h=0;h<f;h++){const E=h*d-a;for(let T=0;T<c;T++){const S=T*u-s;v.push(S,-E,0),x.push(0,0,1),m.push(T/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const T=E+c*h,S=E+c*(h+1),A=E+1+c*(h+1),C=E+1+c*h;p.push(T,S,C),p.push(S,A,C)}this.setIndex(p),this.setAttribute("position",new hn(v,3)),this.setAttribute("normal",new hn(x,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qg extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class e_ extends Aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t_ extends Aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qd extends qd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class n_ extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function eu(n,e,t,i){const r=i_(i);switch(t){case Bd:return n*e;case zd:return n*e/r.components*r.byteLength;case yc:return n*e/r.components*r.byteLength;case Rr:return n*e*2/r.components*r.byteLength;case Ec:return n*e*2/r.components*r.byteLength;case kd:return n*e*3/r.components*r.byteLength;case Ln:return n*e*4/r.components*r.byteLength;case wc:return n*e*4/r.components*r.byteLength;case qs:case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ks:case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:case Tl:return Math.max(n,16)*Math.max(e,8)/4;case yl:case wl:return Math.max(n,8)*Math.max(e,8)/2;case Al:case Rl:case Pl:case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Dl:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ql:case Zl:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ql:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i_(n){switch(n){case yn:case Ud:return{byteLength:1,components:1};case ns:case Nd:case _i:return{byteLength:2,components:1};case bc:case Sc:return{byteLength:2,components:4};case Zn:case Mc:case Gn:return{byteLength:4,components:1};case Fd:case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);function eh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function r_(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const f=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,f);else{u.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<u.length;p++){const v=u[d],x=u[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,v=u.length;p<v;p++){const x=u[p];n.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var s_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,p_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,__=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,R_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,C_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N_="gl_FragColor = linearToOutputTexel( gl_FragColor );",F_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,j_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,av=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:s_,alphahash_pars_fragment:a_,alphamap_fragment:o_,alphamap_pars_fragment:l_,alphatest_fragment:c_,alphatest_pars_fragment:f_,aomap_fragment:u_,aomap_pars_fragment:d_,batching_pars_vertex:h_,batching_vertex:p_,begin_vertex:m_,beginnormal_vertex:g_,bsdfs:__,iridescence_fragment:v_,bumpmap_pars_fragment:x_,clipping_planes_fragment:M_,clipping_planes_pars_fragment:b_,clipping_planes_pars_vertex:S_,clipping_planes_vertex:y_,color_fragment:E_,color_pars_fragment:w_,color_pars_vertex:T_,color_vertex:A_,common:R_,cube_uv_reflection_fragment:C_,defaultnormal_vertex:P_,displacementmap_pars_vertex:L_,displacementmap_vertex:D_,emissivemap_fragment:I_,emissivemap_pars_fragment:U_,colorspace_fragment:N_,colorspace_pars_fragment:F_,envmap_fragment:O_,envmap_common_pars_fragment:B_,envmap_pars_fragment:k_,envmap_pars_vertex:z_,envmap_physical_pars_fragment:j_,envmap_vertex:V_,fog_vertex:H_,fog_pars_vertex:G_,fog_fragment:X_,fog_pars_fragment:W_,gradientmap_pars_fragment:$_,lightmap_pars_fragment:Y_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:Z_,lights_pars_begin:K_,lights_toon_fragment:J_,lights_toon_pars_fragment:Q_,lights_phong_fragment:ev,lights_phong_pars_fragment:tv,lights_physical_fragment:nv,lights_physical_pars_fragment:iv,lights_fragment_begin:rv,lights_fragment_maps:sv,lights_fragment_end:av,logdepthbuf_fragment:ov,logdepthbuf_pars_fragment:lv,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:fv,map_fragment:uv,map_pars_fragment:dv,map_particle_fragment:hv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:_v,morphcolor_vertex:vv,morphnormal_vertex:xv,morphtarget_pars_vertex:Mv,morphtarget_vertex:bv,normal_fragment_begin:Sv,normal_fragment_maps:yv,normal_pars_fragment:Ev,normal_pars_vertex:wv,normal_vertex:Tv,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:Rv,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Lv,opaque_fragment:Dv,packing:Iv,premultiplied_alpha_fragment:Uv,project_vertex:Nv,dithering_fragment:Fv,dithering_pars_fragment:Ov,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:kv,shadowmap_pars_fragment:zv,shadowmap_pars_vertex:Vv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Gv,skinbase_vertex:Xv,skinning_pars_vertex:Wv,skinning_vertex:$v,skinnormal_vertex:Yv,specularmap_fragment:qv,specularmap_pars_fragment:Zv,tonemapping_fragment:Kv,tonemapping_pars_fragment:jv,transmission_fragment:Jv,transmission_pars_fragment:Qv,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,worldpos_vertex:ix,background_vert:rx,background_frag:sx,backgroundCube_vert:ax,backgroundCube_frag:ox,cube_vert:lx,cube_frag:cx,depth_vert:fx,depth_frag:ux,distance_vert:dx,distance_frag:hx,equirect_vert:px,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:_x,meshbasic_vert:vx,meshbasic_frag:xx,meshlambert_vert:Mx,meshlambert_frag:bx,meshmatcap_vert:Sx,meshmatcap_frag:yx,meshnormal_vert:Ex,meshnormal_frag:wx,meshphong_vert:Tx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Lx,points_vert:Dx,points_frag:Ix,shadow_vert:Ux,shadow_frag:Nx,sprite_vert:Fx,sprite_frag:Ox},we={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},zn={basic:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new yt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Jt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Jt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new yt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Jt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Jt([we.points,we.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Jt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Jt([we.common,we.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Jt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Jt([we.sprite,we.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Jt([we.common,we.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Jt([we.lights,we.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};zn.physical={uniforms:Jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const zs={r:0,b:0,g:0},Hi=new xi,Bx=new Ot;function kx(n,e,t,i,r,s,a){const o=new yt(0);let l=s===!0?0:1,c,f,u=null,d=0,p=null;function v(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1;const A=v(T);A===null?h(o,l):A&&A.isColor&&(h(A,1),S=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){const A=v(S);A&&(A.isCubeTexture||A.mapping===Ta)?(f===void 0&&(f=new Kn(new hs(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Cr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Hi.copy(S.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(Hi)),f.material.toneMapped=pt.getTransfer(A.colorSpace)!==bt,(u!==A||d!==A.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,u=A,d=A.version,p=n.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Kn(new Ra(2,2),new jn({name:"BackgroundMaterial",uniforms:Cr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=pt.getTransfer(A.colorSpace)!==bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,S){T.getRGB(zs,Yd(n)),i.buffers.color.setClear(zs.r,zs.g,zs.b,S,a)}function E(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:x,addToRenderList:m,dispose:E}}function zx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(b,P,I,D,O){let k=!1;const z=u(D,I,P);s!==z&&(s=z,c(s.object)),k=p(b,D,I,O),k&&v(b,D,I,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,S(b,P,I,D),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function f(b){return n.deleteVertexArray(b)}function u(b,P,I){const D=I.wireframe===!0;let O=i[b.id];O===void 0&&(O={},i[b.id]=O);let k=O[P.id];k===void 0&&(k={},O[P.id]=k);let z=k[D];return z===void 0&&(z=d(l()),k[D]=z),z}function d(b){const P=[],I=[],D=[];for(let O=0;O<t;O++)P[O]=0,I[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:D,object:b,attributes:{},index:null}}function p(b,P,I,D){const O=s.attributes,k=P.attributes;let z=0;const N=I.getAttributes();for(const W in N)if(N[W].location>=0){const te=O[W];let J=k[W];if(J===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),te===void 0||te.attribute!==J||J&&te.data!==J.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function v(b,P,I,D){const O={},k=P.attributes;let z=0;const N=I.getAttributes();for(const W in N)if(N[W].location>=0){let te=k[W];te===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const J={};J.attribute=te,te&&te.data&&(J.data=te.data),O[W]=J,z++}s.attributes=O,s.attributesNum=z,s.index=D}function x(){const b=s.newAttributes;for(let P=0,I=b.length;P<I;P++)b[P]=0}function m(b){h(b,0)}function h(b,P){const I=s.newAttributes,D=s.enabledAttributes,O=s.attributeDivisors;I[b]=1,D[b]===0&&(n.enableVertexAttribArray(b),D[b]=1),O[b]!==P&&(n.vertexAttribDivisor(b,P),O[b]=P)}function E(){const b=s.newAttributes,P=s.enabledAttributes;for(let I=0,D=P.length;I<D;I++)P[I]!==b[I]&&(n.disableVertexAttribArray(I),P[I]=0)}function T(b,P,I,D,O,k,z){z===!0?n.vertexAttribIPointer(b,P,I,O,k):n.vertexAttribPointer(b,P,I,D,O,k)}function S(b,P,I,D){x();const O=D.attributes,k=I.getAttributes(),z=P.defaultAttributeValues;for(const N in k){const W=k[N];if(W.location>=0){let ee=O[N];if(ee===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),ee!==void 0){const te=ee.normalized,J=ee.itemSize,ge=e.get(ee);if(ge===void 0)continue;const se=ge.buffer,Fe=ge.type,ve=ge.bytesPerElement,G=Fe===n.INT||Fe===n.UNSIGNED_INT||ee.gpuType===Mc;if(ee.isInterleavedBufferAttribute){const $=ee.data,ce=$.stride,_e=ee.offset;if($.isInstancedInterleavedBuffer){for(let xe=0;xe<W.locationSize;xe++)h(W.location+xe,$.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let xe=0;xe<W.locationSize;xe++)m(W.location+xe);n.bindBuffer(n.ARRAY_BUFFER,se);for(let xe=0;xe<W.locationSize;xe++)T(W.location+xe,J/W.locationSize,Fe,te,ce*ve,(_e+J/W.locationSize*xe)*ve,G)}else{if(ee.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)h(W.location+$,ee.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let $=0;$<W.locationSize;$++)m(W.location+$);n.bindBuffer(n.ARRAY_BUFFER,se);for(let $=0;$<W.locationSize;$++)T(W.location+$,J/W.locationSize,Fe,te,J*ve,J/W.locationSize*$*ve,G)}}else if(z!==void 0){const te=z[N];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(W.location,te);break;case 3:n.vertexAttrib3fv(W.location,te);break;case 4:n.vertexAttrib4fv(W.location,te);break;default:n.vertexAttrib1fv(W.location,te)}}}}E()}function A(){y();for(const b in i){const P=i[b];for(const I in P){const D=P[I];for(const O in D)f(D[O].object),delete D[O];delete P[I]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const I in P){const D=P[I];for(const O in D)f(D[O].object),delete D[O];delete P[I]}delete i[b.id]}function R(b){for(const P in i){const I=i[P];if(I[b.id]===void 0)continue;const D=I[b.id];for(const O in D)f(D[O].object),delete D[O];delete I[b.id]}}function y(){_(),a=!0,s!==r&&(s=r,c(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Vx(n,e,t){let i;function r(c){i=c}function s(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function a(c,f,u){u!==0&&(n.drawArraysInstanced(i,c,f,u),t.update(f,i,u))}function o(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let p=0;for(let v=0;v<u;v++)p+=f[v];t.update(p,i,1)}function l(c,f,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],f[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,u);let v=0;for(let x=0;x<u;x++)v+=f[x]*d[x];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Ln&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==yn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Gn&&!y)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Qe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:S,maxSamples:A,samples:C}}function Gx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Xi,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=f(u,d,0)},this.setState=function(u,d,p){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!r||v===null||v.length===0||s&&!m)s?f(null):c();else{const E=s?0:i,T=E*4;let S=h.clippingState||null;l.value=S,S=f(v,d,T,p);for(let A=0;A!==T;++A)S[A]=t[A];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,d,p,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const h=p+x*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,S=p;T!==x;++T,S+=4)a.copy(u[T]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Xx(n){let e=new WeakMap;function t(a,o){return o===xl?a.mapping=Ji:o===Ml&&(a.mapping=Ar),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===xl||o===Ml)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Kd(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ci=4,tu=[.125,.215,.35,.446,.526,.582],$i=20,Wx=256,Zr=new Qd,nu=new yt;let Fo=null,Oo=0,Bo=0,ko=!1;const $x=new q;class iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=$x}=s;Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Oo,Bo),this._renderer.xr.enabled=ko,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:_i,format:Ln,colorSpace:Qi,depthBuffer:!1},r=ru(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yx(s)),this._blurMaterial=Zx(s,e,t),this._ggxMaterial=qx(s,e,t)}return r}_compileMaterial(e){const t=new Kn(new Qn,e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,i,r,s){const l=new bn(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(nu),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kn(new hs,new Pc({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let h=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,h=!0):(m.color.copy(nu),h=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[T],s.y,s.z)):S===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[T]));const A=this._cubeSize;gr(r,S*A,T>2?A:0,A,A),u.setRenderTarget(r),h&&u.render(x,l),u.render(e,l)}u.toneMapping=p,u.autoClear=d,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ji||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Zr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),d=0+c*1.25,p=u*d,{_lodMax:v}=this,x=this._sizeLods[i],m=3*x*(i>v-Ci?i-v+Ci:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,gr(s,m,h,3*x,2*x),r.setRenderTarget(s),r.render(o,Zr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,gr(e,m,h,3*x,2*x),r.setRenderTarget(e),r.render(o,Zr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$i-1),x=s/v,m=isFinite(s)?1+Math.floor(f*x):$i;m>$i&&Qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const h=[];let E=0;for(let R=0;R<$i;++R){const y=R/x,_=Math.exp(-y*y/2);h.push(_),R===0?E+=_:R<m&&(E+=2*_)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=v,d.mipInt.value=T-i;const S=this._sizeLods[r],A=3*S*(r>T-Ci?r-T+Ci:0),C=4*(this._cubeSize-S);gr(t,A,C,3*S,2*S),l.setRenderTarget(t),l.render(u,Zr)}}function Yx(n){const e=[],t=[],i=[];let r=n;const s=n-Ci+1+tu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Ci?l=tu[a-n+Ci-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,u=1+c,d=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,v=6,x=3,m=2,h=1,E=new Float32Array(x*v*p),T=new Float32Array(m*v*p),S=new Float32Array(h*v*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,y=C>2?0:-1,_=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];E.set(_,x*v*C),T.set(d,m*v*C);const b=[C,C,C,C,C,C];S.set(b,h*v*C)}const A=new Qn;A.setAttribute("position",new Yn(E,x)),A.setAttribute("uv",new Yn(T,m)),A.setAttribute("faceIndex",new Yn(S,h)),i.push(new Kn(A,null)),r>Ci&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ru(n,e,t){const i=new $n(n,e,t);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function qx(n,e,t){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ca(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Zx(n,e,t){const i=new Float32Array($i),r=new q(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function su(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function au(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===xl||l===Ml,f=l===Ji||l===Ar;if(c||f){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new iu(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||f&&p&&r(p)?(t===null&&(t=new iu(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function jx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&rs("WebGLRenderer: "+i+" extension not supported."),r}}}function Jx(n,e,t,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,v=u.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let T=0,S=E.length;T<S;T+=3){const A=E[T+0],C=E[T+1],R=E[T+2];d.push(A,C,C,R,R,A)}}else if(v!==void 0){const E=v.array;x=v.version;for(let T=0,S=E.length/3-1;T<S;T+=3){const A=T+0,C=T+1,R=T+2;d.push(A,C,C,R,R,A)}}else return;const m=new(Vd(d)?$d:Wd)(d,1);m.version=x;const h=s.get(u);h&&e.remove(h),s.set(u,m)}function f(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function Qx(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function c(d,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,d*a,v),t.update(p,i,v))}function f(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];t.update(m,i,1)}function u(d,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let h=0;for(let E=0;E<v;E++)h+=p[E]*x[E];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function e1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:_t("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function t1(n,e,t){const i=new WeakMap,r=new Dt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let _=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),v===!0&&(T=2),x===!0&&(T=3);let S=o.attributes.position.count*T,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*A*4*u),R=new Hd(C,S,A,u);R.type=Gn,R.needsUpdate=!0;const y=T*4;for(let b=0;b<u;b++){const P=m[b],I=h[b],D=E[b],O=S*A*4*b;for(let k=0;k<P.count;k++){const z=k*y;p===!0&&(r.fromBufferAttribute(P,k),C[O+z+0]=r.x,C[O+z+1]=r.y,C[O+z+2]=r.z,C[O+z+3]=0),v===!0&&(r.fromBufferAttribute(I,k),C[O+z+4]=r.x,C[O+z+5]=r.y,C[O+z+6]=r.z,C[O+z+7]=0),x===!0&&(r.fromBufferAttribute(D,k),C[O+z+8]=r.x,C[O+z+9]=r.y,C[O+z+10]=r.z,C[O+z+11]=D.itemSize===4?r.w:1)}}d={count:u,texture:R,size:new Et(S,A)},i.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function n1(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const i1={[Td]:"LINEAR_TONE_MAPPING",[Ad]:"REINHARD_TONE_MAPPING",[Rd]:"CINEON_TONE_MAPPING",[Cd]:"ACES_FILMIC_TONE_MAPPING",[Ld]:"AGX_TONE_MAPPING",[Dd]:"NEUTRAL_TONE_MAPPING",[Pd]:"CUSTOM_TONE_MAPPING"};function r1(n,e,t,i,r){const s=new $n(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new $n(e,t,{type:_i,depthBuffer:!1,stencilBuffer:!1}),o=new Qn;o.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new hn([0,2,0,0,2,0],2));const l=new Qg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Kn(o,l),f=new Qd(-1,1,1,-1,0,1);let u=null,d=null,p=!1,v,x=null,m=[],h=!1;this.setSize=function(E,T){s.setSize(E,T),a.setSize(E,T);for(let S=0;S<m.length;S++){const A=m[S];A.setSize&&A.setSize(E,T)}},this.setEffects=function(E){m=E,h=m.length>0&&m[0].isRenderPass===!0;const T=s.width,S=s.height;for(let A=0;A<m.length;A++){const C=m[A];C.setSize&&C.setSize(T,S)}},this.begin=function(E,T){if(p||E.toneMapping===Wn&&m.length===0)return!1;if(x=T,T!==null){const S=T.width,A=T.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return h===!1&&E.setRenderTarget(s),v=E.toneMapping,E.toneMapping=Wn,!0},this.hasRenderPass=function(){return h},this.end=function(E,T){E.toneMapping=v,p=!0;let S=s,A=a;for(let C=0;C<m.length;C++){const R=m[C];if(R.enabled!==!1&&(R.render(E,A,S,T),R.needsSwap!==!1)){const y=S;S=A,A=y}}if(u!==E.outputColorSpace||d!==E.toneMapping){u=E.outputColorSpace,d=E.toneMapping,l.defines={},pt.getTransfer(u)===bt&&(l.defines.SRGB_TRANSFER="");const C=i1[d];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,E.setRenderTarget(x),E.render(c,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const th=new Qt,nc=new ss(1,1),nh=new Hd,ih=new Rg,rh=new Zd,ou=[],lu=[],cu=new Float32Array(16),fu=new Float32Array(9),uu=new Float32Array(4);function Fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ou[r];if(s===void 0&&(s=new Float32Array(r),ou[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pa(n,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function s1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function a1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function o1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function c1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;uu.set(i),n.uniformMatrix2fv(this.addr,!1,uu),kt(t,i)}}function f1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;fu.set(i),n.uniformMatrix3fv(this.addr,!1,fu),kt(t,i)}}function u1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;cu.set(i),n.uniformMatrix4fv(this.addr,!1,cu),kt(t,i)}}function d1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function g1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function v1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function x1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function M1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(nc.compareFunction=t.isReversedDepthBuffer()?Ac:Tc,s=nc):s=th,t.setTexture2D(e||s,r)}function b1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ih,r)}function S1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rh,r)}function y1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nh,r)}function E1(n){switch(n){case 5126:return s1;case 35664:return a1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return f1;case 35676:return u1;case 5124:case 35670:return d1;case 35667:case 35671:return h1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return _1;case 36295:return v1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return y1}}function w1(n,e){n.uniform1fv(this.addr,e)}function T1(n,e){const t=Fr(e,this.size,2);n.uniform2fv(this.addr,t)}function A1(n,e){const t=Fr(e,this.size,3);n.uniform3fv(this.addr,t)}function R1(n,e){const t=Fr(e,this.size,4);n.uniform4fv(this.addr,t)}function C1(n,e){const t=Fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P1(n,e){const t=Fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L1(n,e){const t=Fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D1(n,e){n.uniform1iv(this.addr,e)}function I1(n,e){n.uniform2iv(this.addr,e)}function U1(n,e){n.uniform3iv(this.addr,e)}function N1(n,e){n.uniform4iv(this.addr,e)}function F1(n,e){n.uniform1uiv(this.addr,e)}function O1(n,e){n.uniform2uiv(this.addr,e)}function B1(n,e){n.uniform3uiv(this.addr,e)}function k1(n,e){n.uniform4uiv(this.addr,e)}function z1(n,e,t){const i=this.cache,r=e.length,s=Pa(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=nc:a=th;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function V1(n,e,t){const i=this.cache,r=e.length,s=Pa(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ih,s[a])}function H1(n,e,t){const i=this.cache,r=e.length,s=Pa(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rh,s[a])}function G1(n,e,t){const i=this.cache,r=e.length,s=Pa(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nh,s[a])}function X1(n){switch(n){case 5126:return w1;case 35664:return T1;case 35665:return A1;case 35666:return R1;case 35674:return C1;case 35675:return P1;case 35676:return L1;case 5124:case 35670:return D1;case 35667:case 35671:return I1;case 35668:case 35672:return U1;case 35669:case 35673:return N1;case 5125:return F1;case 36294:return O1;case 36295:return B1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return G1}}class W1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=E1(t.type)}}class $1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X1(t.type)}}class Y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function du(n,e){n.seq.push(e),n.map[e.id]=e}function q1(n,e,t){const i=n.name,r=i.length;for(zo.lastIndex=0;;){const s=zo.exec(i),a=zo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){du(t,c===void 0?new W1(o,n,e):new $1(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Y1(o),du(t,u)),t=u}}}class Js{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);q1(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function hu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Z1=37297;let K1=0;function j1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const pu=new st;function J1(n){pt._getMatrix(pu,pt.workingColorSpace,n);const e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case la:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+j1(n.getShaderSource(e),o)}else return s}function Q1(n,e){const t=J1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const eM={[Td]:"Linear",[Ad]:"Reinhard",[Rd]:"Cineon",[Cd]:"ACESFilmic",[Ld]:"AgX",[Dd]:"Neutral",[Pd]:"Custom"};function tM(n,e){const t=eM[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new q;function nM(){pt.getLuminanceCoefficients(Vs);const n=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function rM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Jr(n){return n!==""}function gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(aM,lM)}const oM=new Map;function lM(n,e){let t=at[e];if(t===void 0){const i=oM.get(e);if(i!==void 0)t=at[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ic(t)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(n){return n.replace(cM,fM)}function fM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const uM={[Ys]:"SHADOWMAP_TYPE_PCF",[jr]:"SHADOWMAP_TYPE_VSM"};function dM(n){return uM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hM={[Ji]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE_UV"};function pM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":hM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const mM={[Ar]:"ENVMAP_MODE_REFRACTION"};function gM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _M={[wd]:"ENVMAP_BLENDING_MULTIPLY",[lg]:"ENVMAP_BLENDING_MIX",[cg]:"ENVMAP_BLENDING_ADD"};function vM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_M[n.combine]||"ENVMAP_BLENDING_NONE"}function xM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function MM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dM(t),c=pM(t),f=gM(t),u=vM(t),d=xM(t),p=iM(t),v=rM(s),x=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Jr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Jr).join(`
`),h.length>0&&(h+=`
`)):(m=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),h=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?at.tonemapping_pars_fragment:"",t.toneMapping!==Wn?tM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Q1("linearToOutputTexel",t.outputColorSpace),nM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),a=ic(a),a=gu(a,t),a=_u(a,t),o=ic(o),o=gu(o,t),o=_u(o,t),a=vu(a),o=vu(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=E+m+a,S=E+h+o,A=hu(r,r.VERTEX_SHADER,T),C=hu(r,r.FRAGMENT_SHADER,S);r.attachShader(x,A),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(P){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(x)||"",D=r.getShaderInfoLog(A)||"",O=r.getShaderInfoLog(C)||"",k=I.trim(),z=D.trim(),N=O.trim();let W=!0,ee=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,C);else{const te=mu(r,A,"vertex"),J=mu(r,C,"fragment");_t("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+te+`
`+J)}else k!==""?Qe("WebGLProgram: Program Info Log:",k):(z===""||N==="")&&(ee=!1);ee&&(P.diagnostics={runnable:W,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:N,prefix:h}})}r.deleteShader(A),r.deleteShader(C),y=new Js(r,x),_=sM(r,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let _;this.getAttributes=function(){return _===void 0&&R(this),_};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,Z1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}let bM=0;class SM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yM(e),t.set(e,i)),i}}class yM{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}}function EM(n,e,t,i,r,s,a){const o=new Gd,l=new SM,c=new Set,f=[],u=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,b,P,I,D){const O=I.fog,k=D.geometry,z=_.isMeshStandardMaterial?I.environment:null,N=(_.isMeshStandardMaterial?t:e).get(_.envMap||z),W=N&&N.mapping===Ta?N.image.height:null,ee=v[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&Qe("WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,J=te!==void 0?te.length:0;let ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let se,Fe,ve,G;if(ee){const xt=zn[ee];se=xt.vertexShader,Fe=xt.fragmentShader}else se=_.vertexShader,Fe=_.fragmentShader,l.update(_),ve=l.getVertexShaderID(_),G=l.getFragmentShaderID(_);const $=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),_e=D.isInstancedMesh===!0,xe=D.isBatchedMesh===!0,Ve=!!_.map,ot=!!_.matcap,Se=!!N,ke=!!_.aoMap,Ze=!!_.lightMap,He=!!_.bumpMap,Ue=!!_.normalMap,U=!!_.displacementMap,tt=!!_.emissiveMap,Ye=!!_.metalnessMap,je=!!_.roughnessMap,me=_.anisotropy>0,L=_.clearcoat>0,M=_.dispersion>0,F=_.iridescence>0,j=_.sheen>0,Q=_.transmission>0,K=me&&!!_.anisotropyMap,ie=L&&!!_.clearcoatMap,fe=L&&!!_.clearcoatNormalMap,Pe=L&&!!_.clearcoatRoughnessMap,Oe=F&&!!_.iridescenceMap,re=F&&!!_.iridescenceThicknessMap,ue=j&&!!_.sheenColorMap,Re=j&&!!_.sheenRoughnessMap,De=!!_.specularMap,pe=!!_.specularColorMap,nt=!!_.specularIntensityMap,B=Q&&!!_.transmissionMap,Te=Q&&!!_.thicknessMap,de=!!_.gradientMap,Ce=!!_.alphaMap,ae=_.alphaTest>0,ne=!!_.alphaHash,Me=!!_.extensions;let Je=Wn;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Je=n.toneMapping);const At={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:Fe,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:G,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:xe,batchingColor:xe&&D._colorsTexture!==null,instancing:_e,instancingColor:_e&&D.instanceColor!==null,instancingMorph:_e&&D.morphTexture!==null,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Qi,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:ot,envMap:Se,envMapMode:Se&&N.mapping,envMapCubeUVHeight:W,aoMap:ke,lightMap:Ze,bumpMap:He,normalMap:Ue,displacementMap:U,emissiveMap:tt,normalMapObjectSpace:Ue&&_.normalMapType===hg,normalMapTangentSpace:Ue&&_.normalMapType===dg,metalnessMap:Ye,roughnessMap:je,anisotropy:me,anisotropyMap:K,clearcoat:L,clearcoatMap:ie,clearcoatNormalMap:fe,clearcoatRoughnessMap:Pe,dispersion:M,iridescence:F,iridescenceMap:Oe,iridescenceThicknessMap:re,sheen:j,sheenColorMap:ue,sheenRoughnessMap:Re,specularMap:De,specularColorMap:pe,specularIntensityMap:nt,transmission:Q,transmissionMap:B,thicknessMap:Te,gradientMap:de,opaque:_.transparent===!1&&_.blending===Sr&&_.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ae,alphaHash:ne,combine:_.combine,mapUv:Ve&&x(_.map.channel),aoMapUv:ke&&x(_.aoMap.channel),lightMapUv:Ze&&x(_.lightMap.channel),bumpMapUv:He&&x(_.bumpMap.channel),normalMapUv:Ue&&x(_.normalMap.channel),displacementMapUv:U&&x(_.displacementMap.channel),emissiveMapUv:tt&&x(_.emissiveMap.channel),metalnessMapUv:Ye&&x(_.metalnessMap.channel),roughnessMapUv:je&&x(_.roughnessMap.channel),anisotropyMapUv:K&&x(_.anisotropyMap.channel),clearcoatMapUv:ie&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(_.sheenRoughnessMap.channel),specularMapUv:De&&x(_.specularMap.channel),specularColorMapUv:pe&&x(_.specularColorMap.channel),specularIntensityMapUv:nt&&x(_.specularIntensityMap.channel),transmissionMapUv:B&&x(_.transmissionMap.channel),thicknessMapUv:Te&&x(_.thicknessMap.channel),alphaMapUv:Ce&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ue||me),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Ve||Ce),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===bt,decodeVideoTextureEmissive:tt&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===bt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hn,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Me&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&_.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function h(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(E(b,_),T(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function E(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function T(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),_.push(o.mask)}function S(_){const b=v[_.type];let P;if(b){const I=zn[b];P=Hg.clone(I.uniforms)}else P=_.uniforms;return P}function A(_,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new MM(n,b,_,s),f.push(P),u.set(b,P)),P}function C(_){if(--_.usedTimes===0){const b=f.indexOf(_);f[b]=f[f.length-1],f.pop(),u.delete(_.cacheKey),_.destroy()}}function R(_){l.remove(_)}function y(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:A,releaseProgram:C,releaseShaderCache:R,programs:f,dispose:y}}function wM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function TM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Mu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,p,v,x,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:d,material:p,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=u.renderOrder,h.z=x,h.group=m),e++,h}function o(u,d,p,v,x,m){const h=a(u,d,p,v,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(u,d,p,v,x,m){const h=a(u,d,p,v,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(u,d){t.length>1&&t.sort(u||TM),i.length>1&&i.sort(d||Mu),r.length>1&&r.sort(d||Mu)}function f(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function AM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new bu,n.set(i,[a])):r>=s.length?(a=new bu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function RM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new yt};break;case"SpotLight":t={position:new q,direction:new q,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function CM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PM=0;function LM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function DM(n){const e=new RM,t=CM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Ot,a=new Ot;function o(c){let f=0,u=0,d=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,v=0,x=0,m=0,h=0,E=0,T=0,S=0,A=0,C=0,R=0;c.sort(LM);for(let _=0,b=c.length;_<b;_++){const P=c[_],I=P.color,D=P.intensity,O=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Rr?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=I.r*D,u+=I.g*D,d+=I.b*D;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],D);R++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const N=P.shadow,W=t.get(P);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=P.shadow.matrix,E++}i.directional[p]=z,p++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(I).multiplyScalar(D),z.distance=O,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[x]=z;const N=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,N.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[x]=N.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=k,S++}x++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(I).multiplyScalar(D),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const N=P.shadow,W=t.get(P);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,W.shadowCameraNear=N.camera.near,W.shadowCameraFar=N.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=k,i.pointShadowMatrix[v]=P.shadow.matrix,T++}i.point[v]=z,v++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(D),z.groundColor.copy(P.groundColor).multiplyScalar(D),i.hemi[h]=z,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==p||y.pointLength!==v||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==h||y.numDirectionalShadows!==E||y.numPointShadows!==T||y.numSpotShadows!==S||y.numSpotMaps!==A||y.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,y.directionalLength=p,y.pointLength=v,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=h,y.numDirectionalShadows=E,y.numPointShadows=T,y.numSpotShadows=S,y.numSpotMaps=A,y.numLightProbes=R,i.version=PM++)}function l(c,f){let u=0,d=0,p=0,v=0,x=0;const m=f.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const T=c[h];if(T.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(T.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Su(n){const e=new DM(n),t=[],i=[];function r(f){c.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function a(f){i.push(f)}function o(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function IM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Su(n),e.set(r,[o])):s>=a.length?(o=new Su(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FM=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],OM=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],yu=new Ot,Kr=new q,Vo=new q;function BM(n,e,t){let i=new jd;const r=new Et,s=new Et,a=new Dt,o=new e_,l=new t_,c={},f=t.maxTextureSize,u={[Ii]:ln,[ln]:Ii,[Hn]:Hn},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:UM,fragmentShader:NM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Qn;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Kn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let h=this.type;this.render=function(C,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===Gm&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=Ys);const _=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(pi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=h!==this.type;D&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(k=>k.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,k=C.length;O<k;O++){const z=C[O],N=z.shadow;if(N===void 0){Qe("WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const W=N.getFrameExtents();if(r.multiply(W),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/W.x),r.x=s.x*W.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/W.y),r.y=s.y*W.y,N.mapSize.y=s.y)),N.map===null||D===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===jr){if(z.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new $n(r.x,r.y,{format:Rr,type:_i,minFilter:qt,magFilter:qt,generateMipmaps:!1}),N.map.texture.name=z.name+".shadowMap",N.map.depthTexture=new ss(r.x,r.y,Gn),N.map.depthTexture.name=z.name+".shadowMapDepth",N.map.depthTexture.format=vi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Xt,N.map.depthTexture.magFilter=Xt}else{z.isPointLight?(N.map=new Kd(r.x),N.map.depthTexture=new Jg(r.x,Zn)):(N.map=new $n(r.x,r.y),N.map.depthTexture=new ss(r.x,r.y,Zn)),N.map.depthTexture.name=z.name+".shadowMap",N.map.depthTexture.format=vi;const te=n.state.buffers.depth.getReversed();this.type===Ys?(N.map.depthTexture.compareFunction=te?Ac:Tc,N.map.depthTexture.minFilter=qt,N.map.depthTexture.magFilter=qt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Xt,N.map.depthTexture.magFilter=Xt)}N.camera.updateProjectionMatrix()}const ee=N.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<ee;te++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,te),n.clear();else{te===0&&(n.setRenderTarget(N.map),n.clear());const J=N.getViewport(te);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),I.viewport(a)}if(z.isPointLight){const J=N.camera,ge=N.matrix,se=z.distance||J.far;se!==J.far&&(J.far=se,J.updateProjectionMatrix()),Kr.setFromMatrixPosition(z.matrixWorld),J.position.copy(Kr),Vo.copy(J.position),Vo.add(FM[te]),J.up.copy(OM[te]),J.lookAt(Vo),J.updateMatrixWorld(),ge.makeTranslation(-Kr.x,-Kr.y,-Kr.z),yu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),N._frustum.setFromProjectionMatrix(yu,J.coordinateSystem,J.reversedDepth)}else N.updateMatrices(z);i=N.getFrustum(),S(R,y,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===jr&&E(N,y),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(_,b,P)};function E(C,R){const y=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $n(r.x,r.y,{format:Rr,type:_i})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,y,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,y,p,x,null)}function T(C,R,y,_){let b=null;const P=y.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)b=P;else if(b=y.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=b.uuid,D=R.uuid;let O=c[I];O===void 0&&(O={},c[I]=O);let k=O[D];k===void 0&&(k=b.clone(),O[D]=k,R.addEventListener("dispose",A)),b=k}if(b.visible=R.visible,b.wireframe=R.wireframe,_===jr?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=n.properties.get(b);I.light=y}return b}function S(C,R,y,_,b){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===jr)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,C.matrixWorld);const D=e.update(C),O=C.material;if(Array.isArray(O)){const k=D.groups;for(let z=0,N=k.length;z<N;z++){const W=k[z],ee=O[W.materialIndex];if(ee&&ee.visible){const te=T(C,ee,_,b);C.onBeforeShadow(n,C,R,y,D,te,W),n.renderBufferDirect(y,null,D,te,C,W),C.onAfterShadow(n,C,R,y,D,te,W)}}}else if(O.visible){const k=T(C,O,_,b);C.onBeforeShadow(n,C,R,y,D,k,null),n.renderBufferDirect(y,null,D,k,C,null),C.onAfterShadow(n,C,R,y,D,k,null)}}const I=C.children;for(let D=0,O=I.length;D<O;D++)S(I[D],R,y,_,b)}function A(C){C.target.removeEventListener("dispose",A);for(const y in c){const _=c[y],b=C.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}const kM={[dl]:hl,[pl]:_l,[ml]:vl,[Tr]:gl,[hl]:dl,[_l]:pl,[vl]:ml,[gl]:Tr};function zM(n,e){function t(){let B=!1;const Te=new Dt;let de=null;const Ce=new Dt(0,0,0,0);return{setMask:function(ae){de!==ae&&!B&&(n.colorMask(ae,ae,ae,ae),de=ae)},setLocked:function(ae){B=ae},setClear:function(ae,ne,Me,Je,At){At===!0&&(ae*=Je,ne*=Je,Me*=Je),Te.set(ae,ne,Me,Je),Ce.equals(Te)===!1&&(n.clearColor(ae,ne,Me,Je),Ce.copy(Te))},reset:function(){B=!1,de=null,Ce.set(-1,0,0,0)}}}function i(){let B=!1,Te=!1,de=null,Ce=null,ae=null;return{setReversed:function(ne){if(Te!==ne){const Me=e.get("EXT_clip_control");ne?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),Te=ne;const Je=ae;ae=null,this.setClear(Je)}},getReversed:function(){return Te},setTest:function(ne){ne?$(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(ne){de!==ne&&!B&&(n.depthMask(ne),de=ne)},setFunc:function(ne){if(Te&&(ne=kM[ne]),Ce!==ne){switch(ne){case dl:n.depthFunc(n.NEVER);break;case hl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case Tr:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case _l:n.depthFunc(n.GREATER);break;case vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=ne}},setLocked:function(ne){B=ne},setClear:function(ne){ae!==ne&&(Te&&(ne=1-ne),n.clearDepth(ne),ae=ne)},reset:function(){B=!1,de=null,Ce=null,ae=null,Te=!1}}}function r(){let B=!1,Te=null,de=null,Ce=null,ae=null,ne=null,Me=null,Je=null,At=null;return{setTest:function(xt){B||(xt?$(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(xt){Te!==xt&&!B&&(n.stencilMask(xt),Te=xt)},setFunc:function(xt,On,ei){(de!==xt||Ce!==On||ae!==ei)&&(n.stencilFunc(xt,On,ei),de=xt,Ce=On,ae=ei)},setOp:function(xt,On,ei){(ne!==xt||Me!==On||Je!==ei)&&(n.stencilOp(xt,On,ei),ne=xt,Me=On,Je=ei)},setLocked:function(xt){B=xt},setClear:function(xt){At!==xt&&(n.clearStencil(xt),At=xt)},reset:function(){B=!1,Te=null,de=null,Ce=null,ae=null,ne=null,Me=null,Je=null,At=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},u={},d=new WeakMap,p=[],v=null,x=!1,m=null,h=null,E=null,T=null,S=null,A=null,C=null,R=new yt(0,0,0),y=0,_=!1,b=null,P=null,I=null,D=null,O=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,N=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=N>=1):W.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=N>=2);let ee=null,te={};const J=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),se=new Dt().fromArray(J),Fe=new Dt().fromArray(ge);function ve(B,Te,de,Ce){const ae=new Uint8Array(4),ne=n.createTexture();n.bindTexture(B,ne),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<de;Me++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(Te+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ne}const G={};G[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(n.DEPTH_TEST),a.setFunc(Tr),He(!1),Ue(Cf),$(n.CULL_FACE),ke(pi);function $(B){f[B]!==!0&&(n.enable(B),f[B]=!0)}function ce(B){f[B]!==!1&&(n.disable(B),f[B]=!1)}function _e(B,Te){return u[B]!==Te?(n.bindFramebuffer(B,Te),u[B]=Te,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Te),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function xe(B,Te){let de=p,Ce=!1;if(B){de=d.get(Te),de===void 0&&(de=[],d.set(Te,de));const ae=B.textures;if(de.length!==ae.length||de[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,Me=ae.length;ne<Me;ne++)de[ne]=n.COLOR_ATTACHMENT0+ne;de.length=ae.length,Ce=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(de)}function Ve(B){return v!==B?(n.useProgram(B),v=B,!0):!1}const ot={[Wi]:n.FUNC_ADD,[Wm]:n.FUNC_SUBTRACT,[$m]:n.FUNC_REVERSE_SUBTRACT};ot[Ym]=n.MIN,ot[qm]=n.MAX;const Se={[Zm]:n.ZERO,[Km]:n.ONE,[jm]:n.SRC_COLOR,[fl]:n.SRC_ALPHA,[ig]:n.SRC_ALPHA_SATURATE,[tg]:n.DST_COLOR,[Qm]:n.DST_ALPHA,[Jm]:n.ONE_MINUS_SRC_COLOR,[ul]:n.ONE_MINUS_SRC_ALPHA,[ng]:n.ONE_MINUS_DST_COLOR,[eg]:n.ONE_MINUS_DST_ALPHA,[rg]:n.CONSTANT_COLOR,[sg]:n.ONE_MINUS_CONSTANT_COLOR,[ag]:n.CONSTANT_ALPHA,[og]:n.ONE_MINUS_CONSTANT_ALPHA};function ke(B,Te,de,Ce,ae,ne,Me,Je,At,xt){if(B===pi){x===!0&&(ce(n.BLEND),x=!1);return}if(x===!1&&($(n.BLEND),x=!0),B!==Xm){if(B!==m||xt!==_){if((h!==Wi||S!==Wi)&&(n.blendEquation(n.FUNC_ADD),h=Wi,S=Wi),xt)switch(B){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pf:n.blendFunc(n.ONE,n.ONE);break;case Lf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Df:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",B);break}else switch(B){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Lf:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Df:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",B);break}E=null,T=null,A=null,C=null,R.set(0,0,0),y=0,m=B,_=xt}return}ae=ae||Te,ne=ne||de,Me=Me||Ce,(Te!==h||ae!==S)&&(n.blendEquationSeparate(ot[Te],ot[ae]),h=Te,S=ae),(de!==E||Ce!==T||ne!==A||Me!==C)&&(n.blendFuncSeparate(Se[de],Se[Ce],Se[ne],Se[Me]),E=de,T=Ce,A=ne,C=Me),(Je.equals(R)===!1||At!==y)&&(n.blendColor(Je.r,Je.g,Je.b,At),R.copy(Je),y=At),m=B,_=!1}function Ze(B,Te){B.side===Hn?ce(n.CULL_FACE):$(n.CULL_FACE);let de=B.side===ln;Te&&(de=!de),He(de),B.blending===Sr&&B.transparent===!1?ke(pi):ke(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const Ce=B.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),tt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function Ue(B){B!==Vm?($(n.CULL_FACE),B!==P&&(B===Cf?n.cullFace(n.BACK):B===Hm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),P=B}function U(B){B!==I&&(z&&n.lineWidth(B),I=B)}function tt(B,Te,de){B?($(n.POLYGON_OFFSET_FILL),(D!==Te||O!==de)&&(n.polygonOffset(Te,de),D=Te,O=de)):ce(n.POLYGON_OFFSET_FILL)}function Ye(B){B?$(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function je(B){B===void 0&&(B=n.TEXTURE0+k-1),ee!==B&&(n.activeTexture(B),ee=B)}function me(B,Te,de){de===void 0&&(ee===null?de=n.TEXTURE0+k-1:de=ee);let Ce=te[de];Ce===void 0&&(Ce={type:void 0,texture:void 0},te[de]=Ce),(Ce.type!==B||Ce.texture!==Te)&&(ee!==de&&(n.activeTexture(de),ee=de),n.bindTexture(B,Te||G[B]),Ce.type=B,Ce.texture=Te)}function L(){const B=te[ee];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(B){_t("WebGLState:",B)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(B){_t("WebGLState:",B)}}function j(){try{n.texSubImage2D(...arguments)}catch(B){_t("WebGLState:",B)}}function Q(){try{n.texSubImage3D(...arguments)}catch(B){_t("WebGLState:",B)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(B){_t("WebGLState:",B)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(B){_t("WebGLState:",B)}}function fe(){try{n.texStorage2D(...arguments)}catch(B){_t("WebGLState:",B)}}function Pe(){try{n.texStorage3D(...arguments)}catch(B){_t("WebGLState:",B)}}function Oe(){try{n.texImage2D(...arguments)}catch(B){_t("WebGLState:",B)}}function re(){try{n.texImage3D(...arguments)}catch(B){_t("WebGLState:",B)}}function ue(B){se.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),se.copy(B))}function Re(B){Fe.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Fe.copy(B))}function De(B,Te){let de=c.get(Te);de===void 0&&(de=new WeakMap,c.set(Te,de));let Ce=de.get(B);Ce===void 0&&(Ce=n.getUniformBlockIndex(Te,B.name),de.set(B,Ce))}function pe(B,Te){const Ce=c.get(Te).get(B);l.get(Te)!==Ce&&(n.uniformBlockBinding(Te,Ce,B.__bindingPointIndex),l.set(Te,Ce))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ee=null,te={},u={},d=new WeakMap,p=[],v=null,x=!1,m=null,h=null,E=null,T=null,S=null,A=null,C=null,R=new yt(0,0,0),y=0,_=!1,b=null,P=null,I=null,D=null,O=null,se.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:ce,bindFramebuffer:_e,drawBuffers:xe,useProgram:Ve,setBlending:ke,setMaterial:Ze,setFlipSided:He,setCullFace:Ue,setLineWidth:U,setPolygonOffset:tt,setScissorTest:Ye,activeTexture:je,bindTexture:me,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:F,texImage2D:Oe,texImage3D:re,updateUBOMapping:De,uniformBlockBinding:pe,texStorage2D:fe,texStorage3D:Pe,texSubImage2D:j,texSubImage3D:Q,compressedTexSubImage2D:K,compressedTexSubImage3D:ie,scissor:ue,viewport:Re,reset:nt}}function VM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,f=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,M){return p?new OffscreenCanvas(L,M):fa("canvas")}function x(L,M,F){let j=1;const Q=me(L);if((Q.width>F||Q.height>F)&&(j=F/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const K=Math.floor(j*Q.width),ie=Math.floor(j*Q.height);u===void 0&&(u=v(K,ie));const fe=M?v(K,ie):u;return fe.width=K,fe.height=ie,fe.getContext("2d").drawImage(L,0,0,K,ie),Qe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+ie+")."),fe}else return"data"in L&&Qe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function m(L){return L.generateMipmaps}function h(L){n.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(L,M,F,j,Q=!1){if(L!==null){if(n[L]!==void 0)return n[L];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=M;if(M===n.RED&&(F===n.FLOAT&&(K=n.R32F),F===n.HALF_FLOAT&&(K=n.R16F),F===n.UNSIGNED_BYTE&&(K=n.R8)),M===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.R8UI),F===n.UNSIGNED_SHORT&&(K=n.R16UI),F===n.UNSIGNED_INT&&(K=n.R32UI),F===n.BYTE&&(K=n.R8I),F===n.SHORT&&(K=n.R16I),F===n.INT&&(K=n.R32I)),M===n.RG&&(F===n.FLOAT&&(K=n.RG32F),F===n.HALF_FLOAT&&(K=n.RG16F),F===n.UNSIGNED_BYTE&&(K=n.RG8)),M===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RG8UI),F===n.UNSIGNED_SHORT&&(K=n.RG16UI),F===n.UNSIGNED_INT&&(K=n.RG32UI),F===n.BYTE&&(K=n.RG8I),F===n.SHORT&&(K=n.RG16I),F===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGB8UI),F===n.UNSIGNED_SHORT&&(K=n.RGB16UI),F===n.UNSIGNED_INT&&(K=n.RGB32UI),F===n.BYTE&&(K=n.RGB8I),F===n.SHORT&&(K=n.RGB16I),F===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),F===n.UNSIGNED_INT&&(K=n.RGBA32UI),F===n.BYTE&&(K=n.RGBA8I),F===n.SHORT&&(K=n.RGBA16I),F===n.INT&&(K=n.RGBA32I)),M===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),M===n.RGBA){const ie=Q?la:pt.getTransfer(j);F===n.FLOAT&&(K=n.RGBA32F),F===n.HALF_FLOAT&&(K=n.RGBA16F),F===n.UNSIGNED_BYTE&&(K=ie===bt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(L,M){let F;return L?M===null||M===Zn||M===is?F=n.DEPTH24_STENCIL8:M===Gn?F=n.DEPTH32F_STENCIL8:M===ns&&(F=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zn||M===is?F=n.DEPTH_COMPONENT24:M===Gn?F=n.DEPTH_COMPONENT32F:M===ns&&(F=n.DEPTH_COMPONENT16),F}function A(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xt&&L.minFilter!==qt?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function C(L){const M=L.target;M.removeEventListener("dispose",C),y(M),M.isVideoTexture&&f.delete(M)}function R(L){const M=L.target;M.removeEventListener("dispose",R),b(M)}function y(L){const M=i.get(L);if(M.__webglInit===void 0)return;const F=L.source,j=d.get(F);if(j){const Q=j[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&_(L),Object.keys(j).length===0&&d.delete(F)}i.remove(L)}function _(L){const M=i.get(L);n.deleteTexture(M.__webglTexture);const F=L.source,j=d.get(F);delete j[M.__cacheKey],a.memory.textures--}function b(L){const M=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Q=0;Q<M.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=L.textures;for(let j=0,Q=F.length;j<Q;j++){const K=i.get(F[j]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(F[j])}i.remove(L)}let P=0;function I(){P=0}function D(){const L=P;return L>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),P+=1,L}function O(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function k(L,M){const F=i.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&F.__version!==L.version){const j=L.image;if(j===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{G(F,L,M);return}}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+M)}function z(L,M){const F=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){G(F,L,M);return}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+M)}function N(L,M){const F=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){G(F,L,M);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+M)}function W(L,M){const F=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&F.__version!==L.version){$(F,L,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+M)}const ee={[bl]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},te={[Xt]:n.NEAREST,[fg]:n.NEAREST_MIPMAP_NEAREST,[bs]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[fo]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},J={[pg]:n.NEVER,[xg]:n.ALWAYS,[mg]:n.LESS,[Tc]:n.LEQUAL,[gg]:n.EQUAL,[Ac]:n.GEQUAL,[_g]:n.GREATER,[vg]:n.NOTEQUAL};function ge(L,M){if(M.type===Gn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qt||M.magFilter===fo||M.magFilter===bs||M.magFilter===Yi||M.minFilter===qt||M.minFilter===fo||M.minFilter===bs||M.minFilter===Yi)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ee[M.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ee[M.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ee[M.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,te[M.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xt||M.minFilter!==bs&&M.minFilter!==Yi||M.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function se(L,M){let F=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",C));const j=M.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const K=O(M);if(K!==L.__cacheKey){Q[K]===void 0&&(Q[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[K].usedTimes++;const ie=Q[L.__cacheKey];ie!==void 0&&(Q[L.__cacheKey].usedTimes--,ie.usedTimes===0&&_(M)),L.__cacheKey=K,L.__webglTexture=Q[K].texture}return F}function Fe(L,M,F){return Math.floor(Math.floor(L/F)/M)}function ve(L,M,F,j){const K=L.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,F,j,M.data);else{K.sort((re,ue)=>re.start-ue.start);let ie=0;for(let re=1;re<K.length;re++){const ue=K[ie],Re=K[re],De=ue.start+ue.count,pe=Fe(Re.start,M.width,4),nt=Fe(ue.start,M.width,4);Re.start<=De+1&&pe===nt&&Fe(Re.start+Re.count-1,M.width,4)===pe?ue.count=Math.max(ue.count,Re.start+Re.count-ue.start):(++ie,K[ie]=Re)}K.length=ie+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let re=0,ue=K.length;re<ue;re++){const Re=K[re],De=Math.floor(Re.start/4),pe=Math.ceil(Re.count/4),nt=De%M.width,B=Math.floor(De/M.width),Te=pe,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,nt,B,Te,de,F,j,M.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function G(L,M,F){let j=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=n.TEXTURE_3D);const Q=se(L,M),K=M.source;t.bindTexture(j,L.__webglTexture,n.TEXTURE0+F);const ie=i.get(K);if(K.version!==ie.__version||Q===!0){t.activeTexture(n.TEXTURE0+F);const fe=pt.getPrimaries(pt.workingColorSpace),Pe=M.colorSpace===Ri?null:pt.getPrimaries(M.colorSpace),Oe=M.colorSpace===Ri||fe===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let re=x(M.image,!1,r.maxTextureSize);re=je(M,re);const ue=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let De=T(M.internalFormat,ue,Re,M.colorSpace,M.isVideoTexture);ge(j,M);let pe;const nt=M.mipmaps,B=M.isVideoTexture!==!0,Te=ie.__version===void 0||Q===!0,de=K.dataReady,Ce=A(M,re);if(M.isDepthTexture)De=S(M.format===qi,M.type),Te&&(B?t.texStorage2D(n.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,De,re.width,re.height,0,ue,Re,null));else if(M.isDataTexture)if(nt.length>0){B&&Te&&t.texStorage2D(n.TEXTURE_2D,Ce,De,nt[0].width,nt[0].height);for(let ae=0,ne=nt.length;ae<ne;ae++)pe=nt[ae],B?de&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,pe.width,pe.height,ue,Re,pe.data):t.texImage2D(n.TEXTURE_2D,ae,De,pe.width,pe.height,0,ue,Re,pe.data);M.generateMipmaps=!1}else B?(Te&&t.texStorage2D(n.TEXTURE_2D,Ce,De,re.width,re.height),de&&ve(M,re,ue,Re)):t.texImage2D(n.TEXTURE_2D,0,De,re.width,re.height,0,ue,Re,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){B&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,De,nt[0].width,nt[0].height,re.depth);for(let ae=0,ne=nt.length;ae<ne;ae++)if(pe=nt[ae],M.format!==Ln)if(ue!==null)if(B){if(de)if(M.layerUpdates.size>0){const Me=eu(pe.width,pe.height,M.format,M.type);for(const Je of M.layerUpdates){const At=pe.data.subarray(Je*Me/pe.data.BYTES_PER_ELEMENT,(Je+1)*Me/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Je,pe.width,pe.height,1,ue,At)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,re.depth,ue,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,De,pe.width,pe.height,re.depth,0,pe.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,re.depth,ue,Re,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,De,pe.width,pe.height,re.depth,0,ue,Re,pe.data)}else{B&&Te&&t.texStorage2D(n.TEXTURE_2D,Ce,De,nt[0].width,nt[0].height);for(let ae=0,ne=nt.length;ae<ne;ae++)pe=nt[ae],M.format!==Ln?ue!==null?B?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,pe.width,pe.height,ue,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,De,pe.width,pe.height,0,pe.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?de&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,pe.width,pe.height,ue,Re,pe.data):t.texImage2D(n.TEXTURE_2D,ae,De,pe.width,pe.height,0,ue,Re,pe.data)}else if(M.isDataArrayTexture)if(B){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,De,re.width,re.height,re.depth),de)if(M.layerUpdates.size>0){const ae=eu(re.width,re.height,M.format,M.type);for(const ne of M.layerUpdates){const Me=re.data.subarray(ne*ae/re.data.BYTES_PER_ELEMENT,(ne+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,re.width,re.height,1,ue,Re,Me)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,Re,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,ue,Re,re.data);else if(M.isData3DTexture)B?(Te&&t.texStorage3D(n.TEXTURE_3D,Ce,De,re.width,re.height,re.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,Re,re.data)):t.texImage3D(n.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,ue,Re,re.data);else if(M.isFramebufferTexture){if(Te)if(B)t.texStorage2D(n.TEXTURE_2D,Ce,De,re.width,re.height);else{let ae=re.width,ne=re.height;for(let Me=0;Me<Ce;Me++)t.texImage2D(n.TEXTURE_2D,Me,De,ae,ne,0,ue,Re,null),ae>>=1,ne>>=1}}else if(nt.length>0){if(B&&Te){const ae=me(nt[0]);t.texStorage2D(n.TEXTURE_2D,Ce,De,ae.width,ae.height)}for(let ae=0,ne=nt.length;ae<ne;ae++)pe=nt[ae],B?de&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ue,Re,pe):t.texImage2D(n.TEXTURE_2D,ae,De,ue,Re,pe);M.generateMipmaps=!1}else if(B){if(Te){const ae=me(re);t.texStorage2D(n.TEXTURE_2D,Ce,De,ae.width,ae.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Re,re)}else t.texImage2D(n.TEXTURE_2D,0,De,ue,Re,re);m(M)&&h(j),ie.__version=K.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function $(L,M,F){if(M.image.length!==6)return;const j=se(L,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+F);const K=i.get(Q);if(Q.version!==K.__version||j===!0){t.activeTexture(n.TEXTURE0+F);const ie=pt.getPrimaries(pt.workingColorSpace),fe=M.colorSpace===Ri?null:pt.getPrimaries(M.colorSpace),Pe=M.colorSpace===Ri||ie===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Oe=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!Oe&&!re?ue[ne]=x(M.image[ne],!0,r.maxCubemapSize):ue[ne]=re?M.image[ne].image:M.image[ne],ue[ne]=je(M,ue[ne]);const Re=ue[0],De=s.convert(M.format,M.colorSpace),pe=s.convert(M.type),nt=T(M.internalFormat,De,pe,M.colorSpace),B=M.isVideoTexture!==!0,Te=K.__version===void 0||j===!0,de=Q.dataReady;let Ce=A(M,Re);ge(n.TEXTURE_CUBE_MAP,M);let ae;if(Oe){B&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,nt,Re.width,Re.height);for(let ne=0;ne<6;ne++){ae=ue[ne].mipmaps;for(let Me=0;Me<ae.length;Me++){const Je=ae[Me];M.format!==Ln?De!==null?B?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Je.width,Je.height,De,Je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,nt,Je.width,Je.height,0,Je.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Je.width,Je.height,De,pe,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,nt,Je.width,Je.height,0,De,pe,Je.data)}}}else{if(ae=M.mipmaps,B&&Te){ae.length>0&&Ce++;const ne=me(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,nt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(re){B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,De,pe,ue[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,nt,ue[ne].width,ue[ne].height,0,De,pe,ue[ne].data);for(let Me=0;Me<ae.length;Me++){const At=ae[Me].image[ne].image;B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,At.width,At.height,De,pe,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,nt,At.width,At.height,0,De,pe,At.data)}}else{B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De,pe,ue[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,nt,De,pe,ue[ne]);for(let Me=0;Me<ae.length;Me++){const Je=ae[Me];B?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,De,pe,Je.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,nt,De,pe,Je.image[ne])}}}m(M)&&h(n.TEXTURE_CUBE_MAP),K.__version=Q.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ce(L,M,F,j,Q,K){const ie=s.convert(F.format,F.colorSpace),fe=s.convert(F.type),Pe=T(F.internalFormat,ie,fe,F.colorSpace),Oe=i.get(M),re=i.get(F);if(re.__renderTarget=M,!Oe.__hasExternalTextures){const ue=Math.max(1,M.width>>K),Re=Math.max(1,M.height>>K);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,Pe,ue,Re,M.depth,0,ie,fe,null):t.texImage2D(Q,K,Pe,ue,Re,0,ie,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Q,re.__webglTexture,0,U(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Q,re.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(L,M,F){if(n.bindRenderbuffer(n.RENDERBUFFER,L),M.depthBuffer){const j=M.depthTexture,Q=j&&j.isDepthTexture?j.type:null,K=S(M.stencilBuffer,Q),ie=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;tt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(M),K,M.width,M.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(M),K,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,K,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,L)}else{const j=M.textures;for(let Q=0;Q<j.length;Q++){const K=j[Q],ie=s.convert(K.format,K.colorSpace),fe=s.convert(K.type),Pe=T(K.internalFormat,ie,fe,K.colorSpace);tt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(M),Pe,M.width,M.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(M),Pe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(L,M,F){const j=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ge(n.TEXTURE_CUBE_MAP,M.depthTexture);const Oe=s.convert(M.depthTexture.format),re=s.convert(M.depthTexture.type);let ue;M.depthTexture.format===vi?ue=n.DEPTH_COMPONENT24:M.depthTexture.format===qi&&(ue=n.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ue,M.width,M.height,0,Oe,re,null)}}else k(M.depthTexture,0);const K=Q.__webglTexture,ie=U(M),fe=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Pe=M.depthTexture.format===qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===vi)tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,fe,K,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,fe,K,0);else if(M.depthTexture.format===qi)tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,fe,K,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,fe,K,0);else throw new Error("Unknown depthTexture format")}function Ve(L){const M=i.get(L),F=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const j=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=j}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let j=0;j<6;j++)xe(M.__webglFramebuffer[j],L,j);else{const j=L.texture.mipmaps;j&&j.length>0?xe(M.__webglFramebuffer[0],L,0):xe(M.__webglFramebuffer,L,0)}else if(F){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=n.createRenderbuffer(),_e(M.__webglDepthbuffer[j],L,!1);else{const Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}else{const j=L.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),_e(M.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(L,M,F){const j=i.get(L);M!==void 0&&ce(j.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ve(L)}function Se(L){const M=L.texture,F=i.get(L),j=i.get(M);L.addEventListener("dispose",R);const Q=L.textures,K=L.isWebGLCubeRenderTarget===!0,ie=Q.length>1;if(ie||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=M.version,a.memory.textures++),K){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)F.__webglFramebuffer[fe][Pe]=n.createFramebuffer()}else F.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)F.__webglFramebuffer[fe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ie)for(let fe=0,Pe=Q.length;fe<Pe;fe++){const Oe=i.get(Q[fe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(L.samples>0&&tt(L)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const Pe=Q[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Oe=s.convert(Pe.format,Pe.colorSpace),re=s.convert(Pe.type),ue=T(Pe.internalFormat,Oe,re,Pe.colorSpace,L.isXRRenderTarget===!0),Re=U(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ue,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(F.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ge(n.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)ce(F.__webglFramebuffer[fe][Pe],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe);else ce(F.__webglFramebuffer[fe],L,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let fe=0,Pe=Q.length;fe<Pe;fe++){const Oe=Q[fe],re=i.get(Oe);let ue=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,re.__webglTexture),ge(ue,Oe),ce(F.__webglFramebuffer,L,Oe,n.COLOR_ATTACHMENT0+fe,ue,0),m(Oe)&&h(ue)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,j.__webglTexture),ge(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)ce(F.__webglFramebuffer[Pe],L,M,n.COLOR_ATTACHMENT0,fe,Pe);else ce(F.__webglFramebuffer,L,M,n.COLOR_ATTACHMENT0,fe,0);m(M)&&h(fe),t.unbindTexture()}L.depthBuffer&&Ve(L)}function ke(L){const M=L.textures;for(let F=0,j=M.length;F<j;F++){const Q=M[F];if(m(Q)){const K=E(L),ie=i.get(Q).__webglTexture;t.bindTexture(K,ie),h(K),t.unbindTexture()}}}const Ze=[],He=[];function Ue(L){if(L.samples>0){if(tt(L)===!1){const M=L.textures,F=L.width,j=L.height;let Q=n.COLOR_BUFFER_BIT;const K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=i.get(L),fe=M.length>1;if(fe)for(let Oe=0;Oe<M.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const Pe=L.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let Oe=0;Oe<M.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ie.__webglColorRenderbuffer[Oe]);const re=i.get(M[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,F,j,0,0,F,j,Q,n.NEAREST),l===!0&&(Ze.length=0,He.length=0,Ze.push(n.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ze.push(K),He.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Oe=0;Oe<M.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,ie.__webglColorRenderbuffer[Oe]);const re=i.get(M[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const M=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function U(L){return Math.min(r.maxSamples,L.samples)}function tt(L){const M=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(L){const M=a.render.frame;f.get(L)!==M&&(f.set(L,M),L.update())}function je(L,M){const F=L.colorSpace,j=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||F!==Qi&&F!==Ri&&(pt.getTransfer(F)===bt?(j!==Ln||Q!==yn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",F)),M}function me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=N,this.setTextureCube=W,this.rebindTextures=ot,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HM(n,e){function t(i,r=Ri){let s;const a=pt.getTransfer(r);if(i===yn)return n.UNSIGNED_BYTE;if(i===bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Od)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ud)return n.BYTE;if(i===Nd)return n.SHORT;if(i===ns)return n.UNSIGNED_SHORT;if(i===Mc)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===Bd)return n.ALPHA;if(i===kd)return n.RGB;if(i===Ln)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===zd)return n.RED;if(i===yc)return n.RED_INTEGER;if(i===Rr)return n.RG;if(i===Ec)return n.RG_INTEGER;if(i===wc)return n.RGBA_INTEGER;if(i===qs||i===Zs||i===Ks||i===js)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===El||i===wl||i===Tl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl||i===Il)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Al||i===Rl)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pl)return s.COMPRESSED_R11_EAC;if(i===Ll)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Dl)return s.COMPRESSED_RG11_EAC;if(i===Il)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Vl||i===Hl||i===Gl||i===Xl||i===Wl||i===$l||i===Yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ul)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ol)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yl)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===Zl||i===Kl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ql)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===Jl||i===Ql||i===ec)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ec)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Jd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new jn({vertexShader:GM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kn(new Ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $M extends Nr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,d=null,p=null,v=null;const x=typeof XRWebGLBinding<"u",m=new WM,h={},E=t.getContextAttributes();let T=null,S=null;const A=[],C=[],R=new Et;let y=null;const _=new bn;_.viewport=new Dt;const b=new bn;b.viewport=new Dt;const P=[_,b],I=new n_;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=A[G];return $===void 0&&($=new Uo,A[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=A[G];return $===void 0&&($=new Uo,A[G]=$),$.getGripSpace()},this.getHand=function(G){let $=A[G];return $===void 0&&($=new Uo,A[G]=$),$.getHandSpace()};function k(G){const $=C.indexOf(G.inputSource);if($===-1)return;const ce=A[$];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",N);for(let G=0;G<A.length;G++){const $=C[G];$!==null&&(C[G]=null,A[G].disconnect($))}D=null,O=null,m.reset();for(const G in h)delete h[G];e.setRenderTarget(T),p=null,d=null,u=null,r=null,S=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",z),r.addEventListener("inputsourceschange",N),E.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,_e=null,xe=null;E.depth&&(xe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=E.stencil?qi:vi,_e=E.stencil?is:Zn);const Ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new $n(d.textureWidth,d.textureHeight,{format:Ln,type:yn,depthTexture:new ss(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $n(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(G){for(let $=0;$<G.removed.length;$++){const ce=G.removed[$],_e=C.indexOf(ce);_e>=0&&(C[_e]=null,A[_e].disconnect(ce))}for(let $=0;$<G.added.length;$++){const ce=G.added[$];let _e=C.indexOf(ce);if(_e===-1){for(let Ve=0;Ve<A.length;Ve++)if(Ve>=C.length){C.push(ce),_e=Ve;break}else if(C[Ve]===null){C[Ve]=ce,_e=Ve;break}if(_e===-1)break}const xe=A[_e];xe&&xe.connect(ce)}}const W=new q,ee=new q;function te(G,$,ce){W.setFromMatrixPosition($.matrixWorld),ee.setFromMatrixPosition(ce.matrixWorld);const _e=W.distanceTo(ee),xe=$.projectionMatrix.elements,Ve=ce.projectionMatrix.elements,ot=xe[14]/(xe[10]-1),Se=xe[14]/(xe[10]+1),ke=(xe[9]+1)/xe[5],Ze=(xe[9]-1)/xe[5],He=(xe[8]-1)/xe[0],Ue=(Ve[8]+1)/Ve[0],U=ot*He,tt=ot*Ue,Ye=_e/(-He+Ue),je=Ye*-He;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(je),G.translateZ(Ye),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),xe[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const me=ot+Ye,L=Se+Ye,M=U-je,F=tt+(_e-je),j=ke*Se/L*me,Q=Ze*Se/L*me;G.projectionMatrix.makePerspective(M,F,j,Q,me,L),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function J(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let $=G.near,ce=G.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),I.near=b.near=_.near=$,I.far=b.far=_.far=ce,(D!==I.near||O!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),D=I.near,O=I.far),I.layers.mask=G.layers.mask|6,_.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const _e=G.parent,xe=I.cameras;J(I,_e);for(let Ve=0;Ve<xe.length;Ve++)J(xe[Ve],_e);xe.length===2?te(I,_,b):I.projectionMatrix.copy(_.projectionMatrix),ge(G,I,_e)};function ge(G,$,ce){ce===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=tc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(G){return h[G]};let se=null;function Fe(G,$){if(f=$.getViewerPose(c||a),v=$,f!==null){const ce=f.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let _e=!1;ce.length!==I.cameras.length&&(I.cameras.length=0,_e=!0);for(let Se=0;Se<ce.length;Se++){const ke=ce[Se];let Ze=null;if(p!==null)Ze=p.getViewport(ke);else{const Ue=u.getViewSubImage(d,ke);Ze=Ue.viewport,Se===0&&(e.setRenderTargetTextures(S,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(S))}let He=P[Se];He===void 0&&(He=new bn,He.layers.enable(Se),He.viewport=new Dt,P[Se]=He),He.matrix.fromArray(ke.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ke.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Se===0&&(I.matrix.copy(He.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),_e===!0&&I.cameras.push(He)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const Se=u.getDepthInformation(ce[0]);Se&&Se.isValid&&Se.texture&&m.init(Se,r.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let Se=0;Se<ce.length;Se++){const ke=ce[Se].camera;if(ke){let Ze=h[ke];Ze||(Ze=new Jd,h[ke]=Ze);const He=u.getCameraImage(ke);Ze.sourceTexture=He}}}}for(let ce=0;ce<A.length;ce++){const _e=C[ce],xe=A[ce];_e!==null&&xe!==void 0&&xe.update(_e,$,c||a)}se&&se(G,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),v=null}const ve=new eh;ve.setAnimationLoop(Fe),this.setAnimationLoop=function(G){se=G},this.dispose=function(){}}}const Gi=new xi,YM=new Ot;function qM(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Yd(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,T,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),u(m,h)):h.isMeshPhongMaterial?(s(m,h),f(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,E,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),T=E.envMap,S=E.envMapRotation;T&&(m.envMap.value=T,Gi.copy(S),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(YM.makeRotationFromEuler(Gi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=T*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZM(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const S=T.program;i.uniformBlockBinding(E,S)}function c(E,T){let S=r[E.id];S===void 0&&(v(E),S=f(E),r[E.id]=S,E.addEventListener("dispose",m));const A=T.program;i.updateUBOMapping(E,A);const C=e.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function f(E){const T=u();E.__bindingPointIndex=T;const S=n.createBuffer(),A=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const T=r[E.id],S=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,R=S.length;C<R;C++){const y=Array.isArray(S[C])?S[C]:[S[C]];for(let _=0,b=y.length;_<b;_++){const P=y[_];if(p(P,C,_,A)===!0){const I=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let k=0;k<D.length;k++){const z=D[k],N=x(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,I+O,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,O),O+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,T,S,A){const C=E.value,R=T+"_"+S;if(A[R]===void 0)return typeof C=="number"||typeof C=="boolean"?A[R]=C:A[R]=C.clone(),!0;{const y=A[R];if(typeof C=="number"||typeof C=="boolean"){if(y!==C)return A[R]=C,!0}else if(y.equals(C)===!1)return y.copy(C),!0}return!1}function v(E){const T=E.uniforms;let S=0;const A=16;for(let R=0,y=T.length;R<y;R++){const _=Array.isArray(T[R])?T[R]:[T[R]];for(let b=0,P=_.length;b<P;b++){const I=_[b],D=Array.isArray(I.value)?I.value:[I.value];for(let O=0,k=D.length;O<k;O++){const z=D[O],N=x(z),W=S%A,ee=W%N.boundary,te=W+ee;S+=ee,te!==0&&A-te<N.storage&&(S+=A-te),I.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=N.storage}}}const C=S%A;return C>0&&(S+=A-C),E.__size=S,E.__cache={},this}function x(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Qe("WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const KM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function jM(){return Bn===null&&(Bn=new qg(KM,16,16,Rr,_i),Bn.name="DFG_LUT",Bn.minFilter=qt,Bn.magFilter=qt,Bn.wrapS=fi,Bn.wrapT=fi,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class JM{constructor(e={}){const{canvas:t=Mg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=yn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const x=p,m=new Set([wc,Ec,yc]),h=new Set([yn,Zn,ns,is,bc,Sc]),E=new Uint32Array(4),T=new Int32Array(4);let S=null,A=null;const C=[],R=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let b=!1;this._outputColorSpace=vn;let P=0,I=0,D=null,O=-1,k=null;const z=new Dt,N=new Dt;let W=null;const ee=new yt(0);let te=0,J=t.width,ge=t.height,se=1,Fe=null,ve=null;const G=new Dt(0,0,J,ge),$=new Dt(0,0,J,ge);let ce=!1;const _e=new jd;let xe=!1,Ve=!1;const ot=new Ot,Se=new q,ke=new Dt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Ue(){return D===null?se:1}let U=i;function tt(w,V){return t.getContext(w,V)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xc}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",xt,!1),U===null){const V="webgl2";if(U=tt(V,w),U===null)throw tt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw _t("WebGLRenderer: "+w.message),w}let Ye,je,me,L,M,F,j,Q,K,ie,fe,Pe,Oe,re,ue,Re,De,pe,nt,B,Te,de,Ce,ae;function ne(){Ye=new jx(U),Ye.init(),de=new HM(U,Ye),je=new Hx(U,Ye,e,de),me=new zM(U,Ye),je.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),L=new e1(U),M=new wM,F=new VM(U,Ye,me,M,je,de,L),j=new Xx(_),Q=new Kx(_),K=new r_(U),Ce=new zx(U,K),ie=new Jx(U,K,L,Ce),fe=new n1(U,ie,K,L),nt=new t1(U,je,F),Re=new Gx(M),Pe=new EM(_,j,Q,Ye,je,Ce,Re),Oe=new qM(_,M),re=new AM,ue=new IM(Ye),pe=new kx(_,j,Q,me,fe,v,l),De=new BM(_,fe,je),ae=new ZM(U,L,je,me),B=new Vx(U,Ye,L),Te=new Qx(U,Ye,L),L.programs=Pe.programs,_.capabilities=je,_.extensions=Ye,_.properties=M,_.renderLists=re,_.shadowMap=De,_.state=me,_.info=L}ne(),x!==yn&&(y=new r1(x,t.width,t.height,r,s));const Me=new $M(_,U);this.xr=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(w){w!==void 0&&(se=w,this.setSize(J,ge,!1))},this.getSize=function(w){return w.set(J,ge)},this.setSize=function(w,V,Z=!0){if(Me.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,ge=V,t.width=Math.floor(w*se),t.height=Math.floor(V*se),Z===!0&&(t.style.width=w+"px",t.style.height=V+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(J*se,ge*se).floor()},this.setDrawingBufferSize=function(w,V,Z){J=w,ge=V,se=Z,t.width=Math.floor(w*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(x===yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(G)},this.setViewport=function(w,V,Z,Y){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,V,Z,Y),me.viewport(z.copy(G).multiplyScalar(se).round())},this.getScissor=function(w){return w.copy($)},this.setScissor=function(w,V,Z,Y){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,V,Z,Y),me.scissor(N.copy($).multiplyScalar(se).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(w){me.setScissorTest(ce=w)},this.setOpaqueSort=function(w){Fe=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,Z=!0){let Y=0;if(w){let X=!1;if(D!==null){const ye=D.texture.format;X=m.has(ye)}if(X){const ye=D.texture.type,Ie=h.has(ye),Ae=pe.getClearColor(),Ne=pe.getClearAlpha(),ze=Ae.r,qe=Ae.g,Xe=Ae.b;Ie?(E[0]=ze,E[1]=qe,E[2]=Xe,E[3]=Ne,U.clearBufferuiv(U.COLOR,0,E)):(T[0]=ze,T[1]=qe,T[2]=Xe,T[3]=Ne,U.clearBufferiv(U.COLOR,0,T))}else Y|=U.COLOR_BUFFER_BIT}V&&(Y|=U.DEPTH_BUFFER_BIT),Z&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),pe.dispose(),re.dispose(),ue.dispose(),M.dispose(),j.dispose(),Q.dispose(),fe.dispose(),Ce.dispose(),ae.dispose(),Pe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Vc),Me.removeEventListener("sessionend",Hc),Fi.stop()};function Je(w){w.preventDefault(),Of("WebGLRenderer: Context Lost."),b=!0}function At(){Of("WebGLRenderer: Context Restored."),b=!1;const w=L.autoReset,V=De.enabled,Z=De.autoUpdate,Y=De.needsUpdate,X=De.type;ne(),L.autoReset=w,De.enabled=V,De.autoUpdate=Z,De.needsUpdate=Y,De.type=X}function xt(w){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function On(w){const V=w.target;V.removeEventListener("dispose",On),ei(V)}function ei(w){Fh(w),M.remove(w)}function Fh(w){const V=M.get(w).programs;V!==void 0&&(V.forEach(function(Z){Pe.releaseProgram(Z)}),w.isShaderMaterial&&Pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Z,Y,X,ye){V===null&&(V=Ze);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,Ae=Bh(w,V,Z,Y,X);me.setMaterial(Y,Ie);let Ne=Z.index,ze=1;if(Y.wireframe===!0){if(Ne=ie.getWireframeAttribute(Z),Ne===void 0)return;ze=2}const qe=Z.drawRange,Xe=Z.attributes.position;let ct=qe.start*ze,St=(qe.start+qe.count)*ze;ye!==null&&(ct=Math.max(ct,ye.start*ze),St=Math.min(St,(ye.start+ye.count)*ze)),Ne!==null?(ct=Math.max(ct,0),St=Math.min(St,Ne.count)):Xe!=null&&(ct=Math.max(ct,0),St=Math.min(St,Xe.count));const Pt=St-ct;if(Pt<0||Pt===1/0)return;Ce.setup(X,Y,Ae,Z,Ne);let Lt,wt=B;if(Ne!==null&&(Lt=K.get(Ne),wt=Te,wt.setIndex(Lt)),X.isMesh)Y.wireframe===!0?(me.setLineWidth(Y.wireframeLinewidth*Ue()),wt.setMode(U.LINES)):wt.setMode(U.TRIANGLES);else if(X.isLine){let We=Y.linewidth;We===void 0&&(We=1),me.setLineWidth(We*Ue()),X.isLineSegments?wt.setMode(U.LINES):X.isLineLoop?wt.setMode(U.LINE_LOOP):wt.setMode(U.LINE_STRIP)}else X.isPoints?wt.setMode(U.POINTS):X.isSprite&&wt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)rs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const We=X._multiDrawStarts,Mt=X._multiDrawCounts,gt=X._multiDrawCount,cn=Ne?K.get(Ne).bytesPerElement:1,nr=M.get(Y).currentProgram.getUniforms();for(let fn=0;fn<gt;fn++)nr.setValue(U,"_gl_DrawID",fn),wt.render(We[fn]/cn,Mt[fn])}else if(X.isInstancedMesh)wt.renderInstances(ct,Pt,X.count);else if(Z.isInstancedBufferGeometry){const We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Mt=Math.min(Z.instanceCount,We);wt.renderInstances(ct,Pt,Mt)}else wt.render(ct,Pt)};function zc(w,V,Z){w.transparent===!0&&w.side===Hn&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,ms(w,V,Z),w.side=Ii,w.needsUpdate=!0,ms(w,V,Z),w.side=Hn):ms(w,V,Z)}this.compile=function(w,V,Z=null){Z===null&&(Z=w),A=ue.get(Z),A.init(V),R.push(A),Z.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),w!==Z&&w.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),A.setupLights();const Y=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ye=X.material;if(ye)if(Array.isArray(ye))for(let Ie=0;Ie<ye.length;Ie++){const Ae=ye[Ie];zc(Ae,Z,X),Y.add(Ae)}else zc(ye,Z,X),Y.add(ye)}),A=R.pop(),Y},this.compileAsync=function(w,V,Z=null){const Y=this.compile(w,V,Z);return new Promise(X=>{function ye(){if(Y.forEach(function(Ie){M.get(Ie).currentProgram.isReady()&&Y.delete(Ie)}),Y.size===0){X(w);return}setTimeout(ye,10)}Ye.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ia=null;function Oh(w){Ia&&Ia(w)}function Vc(){Fi.stop()}function Hc(){Fi.start()}const Fi=new eh;Fi.setAnimationLoop(Oh),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(w){Ia=w,Me.setAnimationLoop(w),w===null?Fi.stop():Fi.start()},Me.addEventListener("sessionstart",Vc),Me.addEventListener("sessionend",Hc),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const Z=Me.enabled===!0&&Me.isPresenting===!0,Y=y!==null&&(D===null||Z)&&y.begin(_,D);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(V),V=Me.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,V,D),A=ue.get(w,R.length),A.init(V),R.push(A),ot.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),_e.setFromProjectionMatrix(ot,Xn,V.reversedDepth),Ve=this.localClippingEnabled,xe=Re.init(this.clippingPlanes,Ve),S=re.get(w,C.length),S.init(),C.push(S),Me.enabled===!0&&Me.isPresenting===!0){const Ie=_.xr.getDepthSensingMesh();Ie!==null&&Ua(Ie,V,-1/0,_.sortObjects)}Ua(w,V,0,_.sortObjects),S.finish(),_.sortObjects===!0&&S.sort(Fe,ve),He=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,He&&pe.addToRenderList(S,w),this.info.render.frame++,xe===!0&&Re.beginShadows();const X=A.state.shadowsArray;if(De.render(X,w,V),xe===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&y.hasRenderPass())===!1){const Ie=S.opaque,Ae=S.transmissive;if(A.setupLights(),V.isArrayCamera){const Ne=V.cameras;if(Ae.length>0)for(let ze=0,qe=Ne.length;ze<qe;ze++){const Xe=Ne[ze];Xc(Ie,Ae,w,Xe)}He&&pe.render(w);for(let ze=0,qe=Ne.length;ze<qe;ze++){const Xe=Ne[ze];Gc(S,w,Xe,Xe.viewport)}}else Ae.length>0&&Xc(Ie,Ae,w,V),He&&pe.render(w),Gc(S,w,V)}D!==null&&I===0&&(F.updateMultisampleRenderTarget(D),F.updateRenderTargetMipmap(D)),Y&&y.end(_),w.isScene===!0&&w.onAfterRender(_,w,V),Ce.resetDefaultState(),O=-1,k=null,R.pop(),R.length>0?(A=R[R.length-1],xe===!0&&Re.setGlobalState(_.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function Ua(w,V,Z,Y){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||_e.intersectsSprite(w)){Y&&ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);const Ie=fe.update(w),Ae=w.material;Ae.visible&&S.push(w,Ie,Ae,Z,ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||_e.intersectsObject(w))){const Ie=fe.update(w),Ae=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ke.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ke.copy(Ie.boundingSphere.center)),ke.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(Ae)){const Ne=Ie.groups;for(let ze=0,qe=Ne.length;ze<qe;ze++){const Xe=Ne[ze],ct=Ae[Xe.materialIndex];ct&&ct.visible&&S.push(w,Ie,ct,Z,ke.z,Xe)}}else Ae.visible&&S.push(w,Ie,Ae,Z,ke.z,null)}}const ye=w.children;for(let Ie=0,Ae=ye.length;Ie<Ae;Ie++)Ua(ye[Ie],V,Z,Y)}function Gc(w,V,Z,Y){const{opaque:X,transmissive:ye,transparent:Ie}=w;A.setupLightsView(Z),xe===!0&&Re.setGlobalState(_.clippingPlanes,Z),Y&&me.viewport(z.copy(Y)),X.length>0&&ps(X,V,Z),ye.length>0&&ps(ye,V,Z),Ie.length>0&&ps(Ie,V,Z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Xc(w,V,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Y.id]===void 0){const ct=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Y.id]=new $n(1,1,{generateMipmaps:!0,type:ct?_i:yn,minFilter:Yi,samples:je.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const ye=A.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||z;ye.setSize(Ie.z*_.transmissionResolutionScale,Ie.w*_.transmissionResolutionScale);const Ae=_.getRenderTarget(),Ne=_.getActiveCubeFace(),ze=_.getActiveMipmapLevel();_.setRenderTarget(ye),_.getClearColor(ee),te=_.getClearAlpha(),te<1&&_.setClearColor(16777215,.5),_.clear(),He&&pe.render(Z);const qe=_.toneMapping;_.toneMapping=Wn;const Xe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),xe===!0&&Re.setGlobalState(_.clippingPlanes,Y),ps(w,Z,Y),F.updateMultisampleRenderTarget(ye),F.updateRenderTargetMipmap(ye),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let St=0,Pt=V.length;St<Pt;St++){const Lt=V[St],{object:wt,geometry:We,material:Mt,group:gt}=Lt;if(Mt.side===Hn&&wt.layers.test(Y.layers)){const cn=Mt.side;Mt.side=ln,Mt.needsUpdate=!0,Wc(wt,Z,Y,We,Mt,gt),Mt.side=cn,Mt.needsUpdate=!0,ct=!0}}ct===!0&&(F.updateMultisampleRenderTarget(ye),F.updateRenderTargetMipmap(ye))}_.setRenderTarget(Ae,Ne,ze),_.setClearColor(ee,te),Xe!==void 0&&(Y.viewport=Xe),_.toneMapping=qe}function ps(w,V,Z){const Y=V.isScene===!0?V.overrideMaterial:null;for(let X=0,ye=w.length;X<ye;X++){const Ie=w[X],{object:Ae,geometry:Ne,group:ze}=Ie;let qe=Ie.material;qe.allowOverride===!0&&Y!==null&&(qe=Y),Ae.layers.test(Z.layers)&&Wc(Ae,V,Z,Ne,qe,ze)}}function Wc(w,V,Z,Y,X,ye){w.onBeforeRender(_,V,Z,Y,X,ye),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(_,V,Z,Y,w,ye),X.transparent===!0&&X.side===Hn&&X.forceSinglePass===!1?(X.side=ln,X.needsUpdate=!0,_.renderBufferDirect(Z,V,Y,X,w,ye),X.side=Ii,X.needsUpdate=!0,_.renderBufferDirect(Z,V,Y,X,w,ye),X.side=Hn):_.renderBufferDirect(Z,V,Y,X,w,ye),w.onAfterRender(_,V,Z,Y,X,ye)}function ms(w,V,Z){V.isScene!==!0&&(V=Ze);const Y=M.get(w),X=A.state.lights,ye=A.state.shadowsArray,Ie=X.state.version,Ae=Pe.getParameters(w,X.state,ye,V,Z),Ne=Pe.getProgramCacheKey(Ae);let ze=Y.programs;Y.environment=w.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(w.isMeshStandardMaterial?Q:j).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",On),ze=new Map,Y.programs=ze);let qe=ze.get(Ne);if(qe!==void 0){if(Y.currentProgram===qe&&Y.lightsStateVersion===Ie)return Yc(w,Ae),qe}else Ae.uniforms=Pe.getUniforms(w),w.onBeforeCompile(Ae,_),qe=Pe.acquireProgram(Ae,Ne),ze.set(Ne,qe),Y.uniforms=Ae.uniforms;const Xe=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=Re.uniform),Yc(w,Ae),Y.needsLights=zh(w),Y.lightsStateVersion=Ie,Y.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=qe,Y.uniformsList=null,qe}function $c(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Js.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Yc(w,V){const Z=M.get(w);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Bh(w,V,Z,Y,X){V.isScene!==!0&&(V=Ze),F.resetTextureUnits();const ye=V.fog,Ie=Y.isMeshStandardMaterial?V.environment:null,Ae=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Qi,Ne=(Y.isMeshStandardMaterial?Q:j).get(Y.envMap||Ie),ze=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qe=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Xe=!!Z.morphAttributes.position,ct=!!Z.morphAttributes.normal,St=!!Z.morphAttributes.color;let Pt=Wn;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Pt=_.toneMapping);const Lt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,wt=Lt!==void 0?Lt.length:0,We=M.get(Y),Mt=A.state.lights;if(xe===!0&&(Ve===!0||w!==k)){const Kt=w===k&&Y.id===O;Re.setState(Y,w,Kt)}let gt=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Mt.state.version||We.outputColorSpace!==Ae||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isBatchedMesh&&We.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&We.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&We.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&We.instancingMorph===!1&&X.morphTexture!==null||We.envMap!==Ne||Y.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Re.numPlanes||We.numIntersection!==Re.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==qe||We.morphTargets!==Xe||We.morphNormals!==ct||We.morphColors!==St||We.toneMapping!==Pt||We.morphTargetsCount!==wt)&&(gt=!0):(gt=!0,We.__version=Y.version);let cn=We.currentProgram;gt===!0&&(cn=ms(Y,V,X));let nr=!1,fn=!1,Vr=!1;const Rt=cn.getUniforms(),nn=We.uniforms;if(me.useProgram(cn.program)&&(nr=!0,fn=!0,Vr=!0),Y.id!==O&&(O=Y.id,fn=!0),nr||k!==w){me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Rt.setValue(U,"projectionMatrix",w.projectionMatrix),Rt.setValue(U,"viewMatrix",w.matrixWorldInverse);const rn=Rt.map.cameraPosition;rn!==void 0&&rn.setValue(U,Se.setFromMatrixPosition(w.matrixWorld)),je.logarithmicDepthBuffer&&Rt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Rt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,fn=!0,Vr=!0)}if(We.needsLights&&(Mt.state.directionalShadowMap.length>0&&Rt.setValue(U,"directionalShadowMap",Mt.state.directionalShadowMap,F),Mt.state.spotShadowMap.length>0&&Rt.setValue(U,"spotShadowMap",Mt.state.spotShadowMap,F),Mt.state.pointShadowMap.length>0&&Rt.setValue(U,"pointShadowMap",Mt.state.pointShadowMap,F)),X.isSkinnedMesh){Rt.setOptional(U,X,"bindMatrix"),Rt.setOptional(U,X,"bindMatrixInverse");const Kt=X.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Rt.setValue(U,"boneTexture",Kt.boneTexture,F))}X.isBatchedMesh&&(Rt.setOptional(U,X,"batchingTexture"),Rt.setValue(U,"batchingTexture",X._matricesTexture,F),Rt.setOptional(U,X,"batchingIdTexture"),Rt.setValue(U,"batchingIdTexture",X._indirectTexture,F),Rt.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&Rt.setValue(U,"batchingColorTexture",X._colorsTexture,F));const gn=Z.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&nt.update(X,Z,cn),(fn||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,Rt.setValue(U,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(nn.envMap.value=Ne,nn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(nn.envMapIntensity.value=V.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=jM()),fn&&(Rt.setValue(U,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&kh(nn,Vr),ye&&Y.fog===!0&&Oe.refreshFogUniforms(nn,ye),Oe.refreshMaterialUniforms(nn,Y,se,ge,A.state.transmissionRenderTarget[w.id]),Js.upload(U,$c(We),nn,F)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Js.upload(U,$c(We),nn,F),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Rt.setValue(U,"center",X.center),Rt.setValue(U,"modelViewMatrix",X.modelViewMatrix),Rt.setValue(U,"normalMatrix",X.normalMatrix),Rt.setValue(U,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Kt=Y.uniformsGroups;for(let rn=0,Na=Kt.length;rn<Na;rn++){const Oi=Kt[rn];ae.update(Oi,cn),ae.bind(Oi,cn)}}return cn}function kh(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function zh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,V,Z){const Y=M.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=V,M.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const Z=M.get(w);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const Vh=U.createFramebuffer();this.setRenderTarget=function(w,V=0,Z=0){D=w,P=V,I=Z;let Y=null,X=!1,ye=!1;if(w){const Ae=M.get(w);if(Ae.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(U.FRAMEBUFFER,Ae.__webglFramebuffer),z.copy(w.viewport),N.copy(w.scissor),W=w.scissorTest,me.viewport(z),me.scissor(N),me.setScissorTest(W),O=-1;return}else if(Ae.__webglFramebuffer===void 0)F.setupRenderTarget(w);else if(Ae.__hasExternalTextures)F.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qe=w.depthTexture;if(Ae.__boundDepthTexture!==qe){if(qe!==null&&M.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const ze=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[V])?Y=ze[V][Z]:Y=ze[V],X=!0):w.samples>0&&F.useMultisampledRTT(w)===!1?Y=M.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?Y=ze[Z]:Y=ze,z.copy(w.viewport),N.copy(w.scissor),W=w.scissorTest}else z.copy(G).multiplyScalar(se).floor(),N.copy($).multiplyScalar(se).floor(),W=ce;if(Z!==0&&(Y=Vh),me.bindFramebuffer(U.FRAMEBUFFER,Y)&&me.drawBuffers(w,Y),me.viewport(z),me.scissor(N),me.setScissorTest(W),X){const Ae=M.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ae.__webglTexture,Z)}else if(ye){const Ae=V;for(let Ne=0;Ne<w.textures.length;Ne++){const ze=M.get(w.textures[Ne]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ne,ze.__webglTexture,Z,Ae)}}else if(w!==null&&Z!==0){const Ae=M.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ae.__webglTexture,Z)}O=-1},this.readRenderTargetPixels=function(w,V,Z,Y,X,ye,Ie,Ae=0){if(!(w&&w.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){me.bindFramebuffer(U.FRAMEBUFFER,Ne);try{const ze=w.textures[Ae],qe=ze.format,Xe=ze.type;if(!je.textureFormatReadable(qe)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Xe)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Y&&Z>=0&&Z<=w.height-X&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae),U.readPixels(V,Z,Y,X,de.convert(qe),de.convert(Xe),ye))}finally{const ze=D!==null?M.get(D).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,V,Z,Y,X,ye,Ie,Ae=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne)if(V>=0&&V<=w.width-Y&&Z>=0&&Z<=w.height-X){me.bindFramebuffer(U.FRAMEBUFFER,Ne);const ze=w.textures[Ae],qe=ze.format,Xe=ze.type;if(!je.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.bufferData(U.PIXEL_PACK_BUFFER,ye.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae),U.readPixels(V,Z,Y,X,de.convert(qe),de.convert(Xe),0);const St=D!==null?M.get(D).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,St);const Pt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await bg(U,Pt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ye),U.deleteBuffer(ct),U.deleteSync(Pt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,Z=0){const Y=Math.pow(2,-Z),X=Math.floor(w.image.width*Y),ye=Math.floor(w.image.height*Y),Ie=V!==null?V.x:0,Ae=V!==null?V.y:0;F.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Ie,Ae,X,ye),me.unbindTexture()};const Hh=U.createFramebuffer(),Gh=U.createFramebuffer();this.copyTextureToTexture=function(w,V,Z=null,Y=null,X=0,ye=null){ye===null&&(X!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=X,X=0):ye=0);let Ie,Ae,Ne,ze,qe,Xe,ct,St,Pt;const Lt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(Z!==null)Ie=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,ze=Z.min.x,qe=Z.min.y,Xe=Z.isBox3?Z.min.z:0;else{const gn=Math.pow(2,-X);Ie=Math.floor(Lt.width*gn),Ae=Math.floor(Lt.height*gn),w.isDataArrayTexture?Ne=Lt.depth:w.isData3DTexture?Ne=Math.floor(Lt.depth*gn):Ne=1,ze=0,qe=0,Xe=0}Y!==null?(ct=Y.x,St=Y.y,Pt=Y.z):(ct=0,St=0,Pt=0);const wt=de.convert(V.format),We=de.convert(V.type);let Mt;V.isData3DTexture?(F.setTexture3D(V,0),Mt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(F.setTexture2DArray(V,0),Mt=U.TEXTURE_2D_ARRAY):(F.setTexture2D(V,0),Mt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const gt=U.getParameter(U.UNPACK_ROW_LENGTH),cn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),nr=U.getParameter(U.UNPACK_SKIP_PIXELS),fn=U.getParameter(U.UNPACK_SKIP_ROWS),Vr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ze),U.pixelStorei(U.UNPACK_SKIP_ROWS,qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xe);const Rt=w.isDataArrayTexture||w.isData3DTexture,nn=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const gn=M.get(w),Kt=M.get(V),rn=M.get(gn.__renderTarget),Na=M.get(Kt.__renderTarget);me.bindFramebuffer(U.READ_FRAMEBUFFER,rn.__webglFramebuffer),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Oi=0;Oi<Ne;Oi++)Rt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,M.get(w).__webglTexture,X,Xe+Oi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,M.get(V).__webglTexture,ye,Pt+Oi)),U.blitFramebuffer(ze,qe,Ie,Ae,ct,St,Ie,Ae,U.DEPTH_BUFFER_BIT,U.NEAREST);me.bindFramebuffer(U.READ_FRAMEBUFFER,null),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||M.has(w)){const gn=M.get(w),Kt=M.get(V);me.bindFramebuffer(U.READ_FRAMEBUFFER,Hh),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Gh);for(let rn=0;rn<Ne;rn++)Rt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gn.__webglTexture,X,Xe+rn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gn.__webglTexture,X),nn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kt.__webglTexture,ye,Pt+rn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kt.__webglTexture,ye),X!==0?U.blitFramebuffer(ze,qe,Ie,Ae,ct,St,Ie,Ae,U.COLOR_BUFFER_BIT,U.NEAREST):nn?U.copyTexSubImage3D(Mt,ye,ct,St,Pt+rn,ze,qe,Ie,Ae):U.copyTexSubImage2D(Mt,ye,ct,St,ze,qe,Ie,Ae);me.bindFramebuffer(U.READ_FRAMEBUFFER,null),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Mt,ye,ct,St,Pt,Ie,Ae,Ne,wt,We,Lt.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Mt,ye,ct,St,Pt,Ie,Ae,Ne,wt,Lt.data):U.texSubImage3D(Mt,ye,ct,St,Pt,Ie,Ae,Ne,wt,We,Lt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ye,ct,St,Ie,Ae,wt,We,Lt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ye,ct,St,Lt.width,Lt.height,wt,Lt.data):U.texSubImage2D(U.TEXTURE_2D,ye,ct,St,Ie,Ae,wt,We,Lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,cn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nr),U.pixelStorei(U.UNPACK_SKIP_ROWS,fn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vr),ye===0&&V.generateMipmaps&&U.generateMipmap(Mt),me.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&F.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?F.setTextureCube(w,0):w.isData3DTexture?F.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?F.setTexture2DArray(w,0):F.setTexture2D(w,0),me.unbindTexture()},this.resetState=function(){P=0,I=0,D=null,me.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}var QM=Ct('<div id="color-gradient" class="svelte-p2smfz"></div>');function eb(n,e){en(e,!0);let t=it(e,"width",3,180),i=it(e,"height",3,180);it(e,"scale",3,1);let r=Ke(null);pt.enabled=!1;const s=new Yg,a=new bn(90,1,.1,1e3);a.position.z=(e.max-e.min)/2;let o,l;const c=new Qn,f=4,u=e.max-e.min,d=u/2,p=u/f,v=[],x=[],m=[],h=es("rgb");let E=lt(()=>{const A=[];for(let C=0;C<=f;C++)for(let R=0;R<=f;R++){let y=e.hsvValues[0],_=(e.max-e.min)/f*R+e.min,b=(e.max-e.min)/f*C+e.min,P=h({mode:"okhsv",h:y,s:_,v:1-b});A.push(P.r,P.g,P.b)}return A});$u(()=>{o=new JM,o.setPixelRatio(window.devicePixelRatio),o.setSize(t(),i()),o.setClearColor(6710886,1),o.outputColorSpace=Qi;for(let C=0;C<=f;C++){const R=C*p-d;for(let y=0;y<=f;y++){const _=y*p-d;x.push(_,-R,0),m.push(0,0,1)}}for(let C=0;C<f;C++)for(let R=0;R<f;R++){const y=C*(f+1)+(R+1),_=C*(f+1)+R,b=(C+1)*(f+1)+R,P=(C+1)*(f+1)+(R+1);v.push(y,_,P),v.push(_,b,P)}c.setIndex(v),c.setAttribute("position",new hn(x,3)),c.setAttribute("normal",new hn(m,3)),c.setAttribute("color",new hn(g(E),3));const A=new Pc({side:Hn,vertexColors:!0});l=new Kn(c,A),s.add(l),g(r).appendChild(o.domElement),T()});function T(){g(r)&&o.render(s,a)}Er(()=>{c.setAttribute("color",new hn(g(E),3)),T()});var S=QM();En(S,A=>H(r,A),()=>g(r)),Tt(()=>on(S,`width:${t()-2}px; height:${i()-2}px;`)),ht(n,S),tn()}var tb=Jn('<g style="touch-action: none; -webkit-user-drag: none;"><filter id="shadow"><feDropShadow dx="1" dy="1" stdDeviation="1" flood-opacity="0.5"></feDropShadow></filter><g filter="url(#shadow)"><circle cx="0" cy="0" r="8" fill="#f000" stroke="none"></circle><circle cx="0" cy="0" r="5" stroke="#fff" stroke-width="2"></circle></g></g>');function sh(n,e){en(e,!0);let t=it(e,"dragAreaElement",7),i=it(e,"x",15),r=it(e,"y",15),s=it(e,"minX",3,0),a=it(e,"maxX",3,1),o=it(e,"minY",3,0),l=it(e,"maxY",3,1),c=Ke(!1),f,u,d,p,v=null,x=Ke(null),m=!1;function h(_){}function E(_){H(c,!0),v=_.pointerId??null;try{g(x)&&v!=null&&g(x).setPointerCapture&&g(x).setPointerCapture(v)}catch{}_.preventDefault&&_.preventDefault(),f=_.clientX,u=_.clientY,d=i(),p=r()}function T(_){if(v!=null&&_.pointerId!==v)return;_.preventDefault&&_.preventDefault();let b=_.clientX-f,P=_.clientY-u;i(d+b),r(p+P),s()!=null&&a()!=null&&i(Math.min(Math.max(i(),s()),a())),o()!=null&&l()!=null&&r(Math.min(Math.max(r(),o()),l())),e.onchange&&e.onchange()}function S(_){if(!(v!=null&&_&&_.pointerId!==v)){H(c,!1);try{g(x)&&v!=null&&g(x).releasePointerCapture&&g(x).releasePointerCapture(v)}catch{}v=null;try{m&&(window.removeEventListener("pointermove",T),window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),m=!1)}catch{}}}function A(_){}Er(()=>{if(t()){try{t().style.touchAction="none"}catch{}t().onpointerdown=function(_){console.log("drag area pointerdown",_),_.preventDefault&&_.preventDefault(),i(_.clientX-t().getBoundingClientRect().left+s()),r(_.clientY-t().getBoundingClientRect().top+o()),s()!=null&&a()!=null&&i(Math.min(Math.max(i(),s()),a())),o()!=null&&l()!=null&&r(Math.min(Math.max(r(),o()),l())),e.onchange&&e.onchange(),E(_);let b=!1;try{const P=_.currentTarget||_.target;P&&_.pointerId!=null&&P.setPointerCapture&&(P.setPointerCapture(_.pointerId),b=!0,v=_.pointerId)}catch{b=!1}b||m||(window.addEventListener("pointermove",T,{passive:!1}),window.addEventListener("pointerup",S),window.addEventListener("pointercancel",S),m=!0)}}});var C=tb();li("pointermove",Mr,function(..._){(g(c)?T:null)?.apply(this,_)}),li("pointerup",Mr,function(..._){(g(c)?S:null)?.apply(this,_)}),li("pointercancel",Mr,function(..._){(g(c)?S:null)?.apply(this,_)}),C.__pointerdown=E;var R=be(Ge(C)),y=be(Ge(R));Be(R),Be(C),En(C,_=>H(x,_),()=>g(x)),Tt(()=>{he(C,"transform",`translate(${i()??""} ${r()??""})`),he(y,"fill",e.color)}),li("pointerenter",C,h),li("pointerleave",C,A),ht(n,C),tn()}mn(["pointerdown"]);var nb=Ct('<div class="container svelte-1jn74ui"><!> <svg class="svelte-1jn74ui"><rect fill="#f000" stroke-width="2"></rect><!></svg></div>');function ib(n,e){en(e,!0);let t=it(e,"hsvValues",15),i=it(e,"width",3,200),r=it(e,"height",3,180),s=it(e,"scale",3,1),a=0,o=1,l=Ke(null),c=lt(()=>t()[1]*(i()-2)/o+1),f=lt(()=>(1-t()[2])*(r()-2)/o+1),u=10;function d(){t(t()[1]=(g(c)-1)*o/(i()-2),!0),t(t()[2]=o-(g(f)-1)*o/(r()-2),!0)}let p=lt(()=>cl({mode:"okhsv",h:t()[0],s:t()[1],v:t()[2]}));var v=nb(),x=Ge(v);eb(x,{get width(){return i()},get height(){return r()},get hsvValues(){return t()},get scale(){return s()},min:a,max:o});var m=be(x,2);on(m,"left:-10px; top:-10px");var h=Ge(m);he(h,"x",0),he(h,"y",0),En(h,T=>H(l,T),()=>g(l));var E=be(h);{let T=lt(()=>i()-1),S=lt(()=>r()-1);sh(E,{minX:1,get maxX(){return g(T)},minY:1,get maxY(){return g(S)},get color(){return g(p)},onchange:d,get dragAreaElement(){return g(l)},set dragAreaElement(A){H(l,A,!0)},get x(){return g(c)},set x(A){H(c,A)},get y(){return g(f)},set y(A){H(f,A)}})}Be(m),Be(v),Tt(()=>{on(v,`width: ${i()??""}px; height: ${r()??""}px`),he(m,"viewBox",`-10 -10 ${i()+2*u} ${r()+2*u}`),he(m,"width",i()+2*u),he(m,"height",r()+2*u),he(h,"width",i()),he(h,"height",r())}),ht(n,v),tn()}const{min:rb,max:sb}=Math,ji=(n,e=0,t=1)=>rb(sb(e,n),t),Lc=n=>{n._clipped=!1,n._unclipped=n.slice(0);for(let e=0;e<=3;e++)e<3?((n[e]<0||n[e]>255)&&(n._clipped=!0),n[e]=ji(n[e],0,255)):e===3&&(n[e]=ji(n[e],0,1));return n},ah={};for(let n of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])ah[`[object ${n}]`]=n.toLowerCase();function ft(n){return ah[Object.prototype.toString.call(n)]||"object"}const rt=(n,e=null)=>n.length>=3?Array.prototype.slice.call(n):ft(n[0])=="object"&&e?e.split("").filter(t=>n[0][t]!==void 0).map(t=>n[0][t]):n[0].slice(0),Or=n=>{if(n.length<2)return null;const e=n.length-1;return ft(n[e])=="string"?n[e].toLowerCase():null},{PI:La,min:oh,max:lh}=Math,wn=n=>Math.round(n*100)/100,rc=n=>Math.round(n*100)/100,oi=La*2,Ho=La/3,ab=La/180,ob=180/La;function ch(n){return[...n.slice(0,3).reverse(),...n.slice(3)]}const et={format:{},autodetect:[]};class oe{constructor(...e){const t=this;if(ft(e[0])==="object"&&e[0].constructor&&e[0].constructor===this.constructor)return e[0];let i=Or(e),r=!1;if(!i){r=!0,et.sorted||(et.autodetect=et.autodetect.sort((s,a)=>a.p-s.p),et.sorted=!0);for(let s of et.autodetect)if(i=s.test(...e),i)break}if(et.format[i]){const s=et.format[i].apply(null,r?e:e.slice(0,-1));t._rgb=Lc(s)}else throw new Error("unknown format: "+e);t._rgb.length===3&&t._rgb.push(1)}toString(){return ft(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}}const lb="3.2.0",ut=(...n)=>new oe(...n);ut.version=lb;const Pr={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},cb=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,fb=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,fh=n=>{if(n.match(cb)){(n.length===4||n.length===7)&&(n=n.substr(1)),n.length===3&&(n=n.split(""),n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);const e=parseInt(n,16),t=e>>16,i=e>>8&255,r=e&255;return[t,i,r,1]}if(n.match(fb)){(n.length===5||n.length===9)&&(n=n.substr(1)),n.length===4&&(n=n.split(""),n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]);const e=parseInt(n,16),t=e>>24&255,i=e>>16&255,r=e>>8&255,s=Math.round((e&255)/255*100)/100;return[t,i,r,s]}throw new Error(`unknown hex color: ${n}`)},{round:Hs}=Math,uh=(...n)=>{let[e,t,i,r]=rt(n,"rgba"),s=Or(n)||"auto";r===void 0&&(r=1),s==="auto"&&(s=r<1?"rgba":"rgb"),e=Hs(e),t=Hs(t),i=Hs(i);let o="000000"+(e<<16|t<<8|i).toString(16);o=o.substr(o.length-6);let l="0"+Hs(r*255).toString(16);switch(l=l.substr(l.length-2),s.toLowerCase()){case"rgba":return`#${o}${l}`;case"argb":return`#${l}${o}`;default:return`#${o}`}};oe.prototype.name=function(){const n=uh(this._rgb,"rgb");for(let e of Object.keys(Pr))if(Pr[e]===n)return e.toLowerCase();return n};et.format.named=n=>{if(n=n.toLowerCase(),Pr[n])return fh(Pr[n]);throw new Error("unknown color name: "+n)};et.autodetect.push({p:5,test:(n,...e)=>{if(!e.length&&ft(n)==="string"&&Pr[n.toLowerCase()])return"named"}});oe.prototype.alpha=function(n,e=!1){return n!==void 0&&ft(n)==="number"?e?(this._rgb[3]=n,this):new oe([this._rgb[0],this._rgb[1],this._rgb[2],n],"rgb"):this._rgb[3]};oe.prototype.clipped=function(){return this._rgb._clipped||!1};const qn={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},ub=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function ui(n){const e=ub.get(String(n).toLowerCase());if(!e)throw new Error("unknown Lab illuminant "+n);qn.labWhitePoint=n,qn.Xn=e[0],qn.Zn=e[1]}function as(){return qn.labWhitePoint}const Dc=(...n)=>{n=rt(n,"lab");const[e,t,i]=n,[r,s,a]=db(e,t,i),[o,l,c]=dh(r,s,a);return[o,l,c,n.length>3?n[3]:1]},db=(n,e,t)=>{const{kE:i,kK:r,kKE:s,Xn:a,Yn:o,Zn:l}=qn,c=(n+16)/116,f=.002*e+c,u=c-.005*t,d=f*f*f,p=u*u*u,v=d>i?d:(116*f-16)/r,x=n>s?Math.pow((n+16)/116,3):n/r,m=p>i?p:(116*u-16)/r,h=v*a,E=x*o,T=m*l;return[h,E,T]},Go=n=>{const e=Math.sign(n);return n=Math.abs(n),(n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055)*e},dh=(n,e,t)=>{const{MtxAdaptMa:i,MtxAdaptMaI:r,MtxXYZ2RGB:s,RefWhiteRGB:a,Xn:o,Yn:l,Zn:c}=qn,f=o*i.m00+l*i.m10+c*i.m20,u=o*i.m01+l*i.m11+c*i.m21,d=o*i.m02+l*i.m12+c*i.m22,p=a.X*i.m00+a.Y*i.m10+a.Z*i.m20,v=a.X*i.m01+a.Y*i.m11+a.Z*i.m21,x=a.X*i.m02+a.Y*i.m12+a.Z*i.m22,m=(n*i.m00+e*i.m10+t*i.m20)*(p/f),h=(n*i.m01+e*i.m11+t*i.m21)*(v/u),E=(n*i.m02+e*i.m12+t*i.m22)*(x/d),T=m*r.m00+h*r.m10+E*r.m20,S=m*r.m01+h*r.m11+E*r.m21,A=m*r.m02+h*r.m12+E*r.m22,C=Go(T*s.m00+S*s.m10+A*s.m20),R=Go(T*s.m01+S*s.m11+A*s.m21),y=Go(T*s.m02+S*s.m12+A*s.m22);return[C*255,R*255,y*255]},Ic=(...n)=>{const[e,t,i,...r]=rt(n,"rgb"),[s,a,o]=hh(e,t,i),[l,c,f]=hb(s,a,o);return[l,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]};function hb(n,e,t){const{Xn:i,Yn:r,Zn:s,kE:a,kK:o}=qn,l=n/i,c=e/r,f=t/s,u=l>a?Math.pow(l,1/3):(o*l+16)/116,d=c>a?Math.pow(c,1/3):(o*c+16)/116,p=f>a?Math.pow(f,1/3):(o*f+16)/116;return[116*d-16,500*(u-d),200*(d-p)]}function Xo(n){const e=Math.sign(n);return n=Math.abs(n),(n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4))*e}const hh=(n,e,t)=>{n=Xo(n/255),e=Xo(e/255),t=Xo(t/255);const{MtxRGB2XYZ:i,MtxAdaptMa:r,MtxAdaptMaI:s,Xn:a,Yn:o,Zn:l,As:c,Bs:f,Cs:u}=qn;let d=n*i.m00+e*i.m10+t*i.m20,p=n*i.m01+e*i.m11+t*i.m21,v=n*i.m02+e*i.m12+t*i.m22;const x=a*r.m00+o*r.m10+l*r.m20,m=a*r.m01+o*r.m11+l*r.m21,h=a*r.m02+o*r.m12+l*r.m22;let E=d*r.m00+p*r.m10+v*r.m20,T=d*r.m01+p*r.m11+v*r.m21,S=d*r.m02+p*r.m12+v*r.m22;return E*=x/c,T*=m/f,S*=h/u,d=E*s.m00+T*s.m10+S*s.m20,p=E*s.m01+T*s.m11+S*s.m21,v=E*s.m02+T*s.m12+S*s.m22,[d,p,v]};oe.prototype.lab=function(){return Ic(this._rgb)};const pb=(...n)=>new oe(...n,"lab");Object.assign(ut,{lab:pb,getLabWhitePoint:as,setLabWhitePoint:ui});et.format.lab=Dc;et.autodetect.push({p:2,test:(...n)=>{if(n=rt(n,"lab"),ft(n)==="array"&&n.length===3)return"lab"}});oe.prototype.darken=function(n=1){const e=this,t=e.lab();return t[0]-=qn.Kn*n,new oe(t,"lab").alpha(e.alpha(),!0)};oe.prototype.brighten=function(n=1){return this.darken(-n)};oe.prototype.darker=oe.prototype.darken;oe.prototype.brighter=oe.prototype.brighten;oe.prototype.get=function(n){const[e,t]=n.split("."),i=this[e]();if(t){const r=e.indexOf(t)-(e.substr(0,2)==="ok"?2:0);if(r>-1)return i[r];throw new Error(`unknown channel ${t} in mode ${e}`)}else return i};const{pow:mb}=Math,gb=1e-7,_b=20;oe.prototype.luminance=function(n,e="rgb"){if(n!==void 0&&ft(n)==="number"){if(n===0)return new oe([0,0,0,this._rgb[3]],"rgb");if(n===1)return new oe([255,255,255,this._rgb[3]],"rgb");let t=this.luminance(),i=_b;const r=(a,o)=>{const l=a.interpolate(o,.5,e),c=l.luminance();return Math.abs(n-c)<gb||!i--?l:c>n?r(a,l):r(l,o)},s=(t>n?r(new oe([0,0,0]),this):r(this,new oe([255,255,255]))).rgb();return new oe([...s,this._rgb[3]])}return vb(...this._rgb.slice(0,3))};const vb=(n,e,t)=>(n=Wo(n),e=Wo(e),t=Wo(t),.2126*n+.7152*e+.0722*t),Wo=n=>(n/=255,n<=.03928?n/12.92:mb((n+.055)/1.055,2.4)),Zt={},Lr=(n,e,t=.5,...i)=>{let r=i[0]||"lrgb";if(!Zt[r]&&!i.length&&(r=Object.keys(Zt)[0]),!Zt[r])throw new Error(`interpolation mode ${r} is not defined`);return ft(n)!=="object"&&(n=new oe(n)),ft(e)!=="object"&&(e=new oe(e)),Zt[r](n,e,t).alpha(n.alpha()+t*(e.alpha()-n.alpha()))};oe.prototype.mix=oe.prototype.interpolate=function(n,e=.5,...t){return Lr(this,n,e,...t)};oe.prototype.premultiply=function(n=!1){const e=this._rgb,t=e[3];return n?(this._rgb=[e[0]*t,e[1]*t,e[2]*t,t],this):new oe([e[0]*t,e[1]*t,e[2]*t,t],"rgb")};const{sin:xb,cos:Mb}=Math,ph=(...n)=>{let[e,t,i]=rt(n,"lch");return isNaN(i)&&(i=0),i=i*ab,[e,Mb(i)*t,xb(i)*t]},Uc=(...n)=>{n=rt(n,"lch");const[e,t,i]=n,[r,s,a]=ph(e,t,i),[o,l,c]=Dc(r,s,a);return[o,l,c,n.length>3?n[3]:1]},bb=(...n)=>{const e=ch(rt(n,"hcl"));return Uc(...e)},{sqrt:Sb,atan2:yb,round:Eb}=Math,mh=(...n)=>{const[e,t,i]=rt(n,"lab"),r=Sb(t*t+i*i);let s=(yb(i,t)*ob+360)%360;return Eb(r*1e4)===0&&(s=Number.NaN),[e,r,s]},Nc=(...n)=>{const[e,t,i,...r]=rt(n,"rgb"),[s,a,o]=Ic(e,t,i),[l,c,f]=mh(s,a,o);return[l,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]};oe.prototype.lch=function(){return Nc(this._rgb)};oe.prototype.hcl=function(){return ch(Nc(this._rgb))};const wb=(...n)=>new oe(...n,"lch"),Tb=(...n)=>new oe(...n,"hcl");Object.assign(ut,{lch:wb,hcl:Tb});et.format.lch=Uc;et.format.hcl=bb;["lch","hcl"].forEach(n=>et.autodetect.push({p:2,test:(...e)=>{if(e=rt(e,n),ft(e)==="array"&&e.length===3)return n}}));oe.prototype.saturate=function(n=1){const e=this,t=e.lch();return t[1]+=qn.Kn*n,t[1]<0&&(t[1]=0),new oe(t,"lch").alpha(e.alpha(),!0)};oe.prototype.desaturate=function(n=1){return this.saturate(-n)};oe.prototype.set=function(n,e,t=!1){const[i,r]=n.split("."),s=this[i]();if(r){const a=i.indexOf(r)-(i.substr(0,2)==="ok"?2:0);if(a>-1){if(ft(e)=="string")switch(e.charAt(0)){case"+":s[a]+=+e;break;case"-":s[a]+=+e;break;case"*":s[a]*=+e.substr(1);break;case"/":s[a]/=+e.substr(1);break;default:s[a]=+e}else if(ft(e)==="number")s[a]=e;else throw new Error("unsupported value for Color.set");const o=new oe(s,i);return t?(this._rgb=o._rgb,this):o}throw new Error(`unknown channel ${r} in mode ${i}`)}else return s};oe.prototype.tint=function(n=.5,...e){return Lr(this,"white",n,...e)};oe.prototype.shade=function(n=.5,...e){return Lr(this,"black",n,...e)};const Ab=(n,e,t)=>{const i=n._rgb,r=e._rgb;return new oe(i[0]+t*(r[0]-i[0]),i[1]+t*(r[1]-i[1]),i[2]+t*(r[2]-i[2]),"rgb")};Zt.rgb=Ab;const{sqrt:$o,pow:_r}=Math,Rb=(n,e,t)=>{const[i,r,s]=n._rgb,[a,o,l]=e._rgb;return new oe($o(_r(i,2)*(1-t)+_r(a,2)*t),$o(_r(r,2)*(1-t)+_r(o,2)*t),$o(_r(s,2)*(1-t)+_r(l,2)*t),"rgb")};Zt.lrgb=Rb;const Cb=(n,e,t)=>{const i=n.lab(),r=e.lab();return new oe(i[0]+t*(r[0]-i[0]),i[1]+t*(r[1]-i[1]),i[2]+t*(r[2]-i[2]),"lab")};Zt.lab=Cb;const Br=(n,e,t,i)=>{let r,s;i==="hsl"?(r=n.hsl(),s=e.hsl()):i==="hsv"?(r=n.hsv(),s=e.hsv()):i==="hcg"?(r=n.hcg(),s=e.hcg()):i==="hsi"?(r=n.hsi(),s=e.hsi()):i==="lch"||i==="hcl"?(i="hcl",r=n.hcl(),s=e.hcl()):i==="oklch"&&(r=n.oklch().reverse(),s=e.oklch().reverse());let a,o,l,c,f,u;(i.substr(0,1)==="h"||i==="oklch")&&([a,l,f]=r,[o,c,u]=s);let d,p,v,x;return!isNaN(a)&&!isNaN(o)?(o>a&&o-a>180?x=o-(a+360):o<a&&a-o>180?x=o+360-a:x=o-a,p=a+t*x):isNaN(a)?isNaN(o)?p=Number.NaN:(p=o,(f==1||f==0)&&i!="hsv"&&(d=c)):(p=a,(u==1||u==0)&&i!="hsv"&&(d=l)),d===void 0&&(d=l+t*(c-l)),v=f+t*(u-f),i==="oklch"?new oe([v,d,p],i):new oe([p,d,v],i)},gh=(n,e,t)=>Br(n,e,t,"lch");Zt.lch=gh;Zt.hcl=gh;const Pb=n=>{if(ft(n)=="number"&&n>=0&&n<=16777215){const e=n>>16,t=n>>8&255,i=n&255;return[e,t,i,1]}throw new Error("unknown num color: "+n)},Lb=(...n)=>{const[e,t,i]=rt(n,"rgb");return(e<<16)+(t<<8)+i};oe.prototype.num=function(){return Lb(this._rgb)};const Db=(...n)=>new oe(...n,"num");Object.assign(ut,{num:Db});et.format.num=Pb;et.autodetect.push({p:5,test:(...n)=>{if(n.length===1&&ft(n[0])==="number"&&n[0]>=0&&n[0]<=16777215)return"num"}});const Ib=(n,e,t)=>{const i=n.num(),r=e.num();return new oe(i+t*(r-i),"num")};Zt.num=Ib;const{floor:Ub}=Math,Nb=(...n)=>{n=rt(n,"hcg");let[e,t,i]=n,r,s,a;i=i*255;const o=t*255;if(t===0)r=s=a=i;else{e===360&&(e=0),e>360&&(e-=360),e<0&&(e+=360),e/=60;const l=Ub(e),c=e-l,f=i*(1-t),u=f+o*(1-c),d=f+o*c,p=f+o;switch(l){case 0:[r,s,a]=[p,d,f];break;case 1:[r,s,a]=[u,p,f];break;case 2:[r,s,a]=[f,p,d];break;case 3:[r,s,a]=[f,u,p];break;case 4:[r,s,a]=[d,f,p];break;case 5:[r,s,a]=[p,f,u];break}}return[r,s,a,n.length>3?n[3]:1]},Fb=(...n)=>{const[e,t,i]=rt(n,"rgb"),r=oh(e,t,i),s=lh(e,t,i),a=s-r,o=a*100/255,l=r/(255-a)*100;let c;return a===0?c=Number.NaN:(e===s&&(c=(t-i)/a),t===s&&(c=2+(i-e)/a),i===s&&(c=4+(e-t)/a),c*=60,c<0&&(c+=360)),[c,o,l]};oe.prototype.hcg=function(){return Fb(this._rgb)};const Ob=(...n)=>new oe(...n,"hcg");ut.hcg=Ob;et.format.hcg=Nb;et.autodetect.push({p:1,test:(...n)=>{if(n=rt(n,"hcg"),ft(n)==="array"&&n.length===3)return"hcg"}});const Bb=(n,e,t)=>Br(n,e,t,"hcg");Zt.hcg=Bb;const{cos:vr}=Math,kb=(...n)=>{n=rt(n,"hsi");let[e,t,i]=n,r,s,a;return isNaN(e)&&(e=0),isNaN(t)&&(t=0),e>360&&(e-=360),e<0&&(e+=360),e/=360,e<1/3?(a=(1-t)/3,r=(1+t*vr(oi*e)/vr(Ho-oi*e))/3,s=1-(a+r)):e<2/3?(e-=1/3,r=(1-t)/3,s=(1+t*vr(oi*e)/vr(Ho-oi*e))/3,a=1-(r+s)):(e-=2/3,s=(1-t)/3,a=(1+t*vr(oi*e)/vr(Ho-oi*e))/3,r=1-(s+a)),r=ji(i*r*3),s=ji(i*s*3),a=ji(i*a*3),[r*255,s*255,a*255,n.length>3?n[3]:1]},{min:zb,sqrt:Vb,acos:Hb}=Math,Gb=(...n)=>{let[e,t,i]=rt(n,"rgb");e/=255,t/=255,i/=255;let r;const s=zb(e,t,i),a=(e+t+i)/3,o=a>0?1-s/a:0;return o===0?r=NaN:(r=(e-t+(e-i))/2,r/=Vb((e-t)*(e-t)+(e-i)*(t-i)),r=Hb(r),i>t&&(r=oi-r),r/=oi),[r*360,o,a]};oe.prototype.hsi=function(){return Gb(this._rgb)};const Xb=(...n)=>new oe(...n,"hsi");ut.hsi=Xb;et.format.hsi=kb;et.autodetect.push({p:2,test:(...n)=>{if(n=rt(n,"hsi"),ft(n)==="array"&&n.length===3)return"hsi"}});const Wb=(n,e,t)=>Br(n,e,t,"hsi");Zt.hsi=Wb;const sc=(...n)=>{n=rt(n,"hsl");const[e,t,i]=n;let r,s,a;if(t===0)r=s=a=i*255;else{const o=[0,0,0],l=[0,0,0],c=i<.5?i*(1+t):i+t-i*t,f=2*i-c,u=e/360;o[0]=u+1/3,o[1]=u,o[2]=u-1/3;for(let d=0;d<3;d++)o[d]<0&&(o[d]+=1),o[d]>1&&(o[d]-=1),6*o[d]<1?l[d]=f+(c-f)*6*o[d]:2*o[d]<1?l[d]=c:3*o[d]<2?l[d]=f+(c-f)*(2/3-o[d])*6:l[d]=f;[r,s,a]=[l[0]*255,l[1]*255,l[2]*255]}return n.length>3?[r,s,a,n[3]]:[r,s,a,1]},_h=(...n)=>{n=rt(n,"rgba");let[e,t,i]=n;e/=255,t/=255,i/=255;const r=oh(e,t,i),s=lh(e,t,i),a=(s+r)/2;let o,l;return s===r?(o=0,l=Number.NaN):o=a<.5?(s-r)/(s+r):(s-r)/(2-s-r),e==s?l=(t-i)/(s-r):t==s?l=2+(i-e)/(s-r):i==s&&(l=4+(e-t)/(s-r)),l*=60,l<0&&(l+=360),n.length>3&&n[3]!==void 0?[l,o,a,n[3]]:[l,o,a]};oe.prototype.hsl=function(){return _h(this._rgb)};const $b=(...n)=>new oe(...n,"hsl");ut.hsl=$b;et.format.hsl=sc;et.autodetect.push({p:2,test:(...n)=>{if(n=rt(n,"hsl"),ft(n)==="array"&&n.length===3)return"hsl"}});const Yb=(n,e,t)=>Br(n,e,t,"hsl");Zt.hsl=Yb;const{floor:qb}=Math,Zb=(...n)=>{n=rt(n,"hsv");let[e,t,i]=n,r,s,a;if(i*=255,t===0)r=s=a=i;else{e===360&&(e=0),e>360&&(e-=360),e<0&&(e+=360),e/=60;const o=qb(e),l=e-o,c=i*(1-t),f=i*(1-t*l),u=i*(1-t*(1-l));switch(o){case 0:[r,s,a]=[i,u,c];break;case 1:[r,s,a]=[f,i,c];break;case 2:[r,s,a]=[c,i,u];break;case 3:[r,s,a]=[c,f,i];break;case 4:[r,s,a]=[u,c,i];break;case 5:[r,s,a]=[i,c,f];break}}return[r,s,a,n.length>3?n[3]:1]},{min:Kb,max:jb}=Math,Jb=(...n)=>{n=rt(n,"rgb");let[e,t,i]=n;const r=Kb(e,t,i),s=jb(e,t,i),a=s-r;let o,l,c;return c=s/255,s===0?(o=Number.NaN,l=0):(l=a/s,e===s&&(o=(t-i)/a),t===s&&(o=2+(i-e)/a),i===s&&(o=4+(e-t)/a),o*=60,o<0&&(o+=360)),[o,l,c]};oe.prototype.hsv=function(){return Jb(this._rgb)};const Qb=(...n)=>new oe(...n,"hsv");ut.hsv=Qb;et.format.hsv=Zb;et.autodetect.push({p:2,test:(...n)=>{if(n=rt(n,"hsv"),ft(n)==="array"&&n.length===3)return"hsv"}});const eS=(n,e,t)=>Br(n,e,t,"hsv");Zt.hsv=eS;function ua(n,e){let t=n.length;Array.isArray(n[0])||(n=[n]),Array.isArray(e[0])||(e=e.map(a=>[a]));let i=e[0].length,r=e[0].map((a,o)=>e.map(l=>l[o])),s=n.map(a=>r.map(o=>Array.isArray(a)?a.reduce((l,c,f)=>l+c*(o[f]||0),0):o.reduce((l,c)=>l+c*a,0)));return t===1&&(s=s[0]),i===1?s.map(a=>a[0]):s}const Fc=(...n)=>{n=rt(n,"lab");const[e,t,i,...r]=n,[s,a,o]=tS([e,t,i]),[l,c,f]=dh(s,a,o);return[l,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]};function tS(n){var e=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],t=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],i=ua(t,n);return ua(e,i.map(r=>r**3))}const Oc=(...n)=>{const[e,t,i,...r]=rt(n,"rgb"),s=hh(e,t,i);return[...nS(s),...r.length>0&&r[0]<1?[r[0]]:[]]};function nS(n){const e=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],t=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],i=ua(e,n);return ua(t,i.map(r=>Math.cbrt(r)))}oe.prototype.oklab=function(){return Oc(this._rgb)};const iS=(...n)=>new oe(...n,"oklab");Object.assign(ut,{oklab:iS});et.format.oklab=Fc;et.autodetect.push({p:2,test:(...n)=>{if(n=rt(n,"oklab"),ft(n)==="array"&&n.length===3)return"oklab"}});const rS=(n,e,t)=>{const i=n.oklab(),r=e.oklab();return new oe(i[0]+t*(r[0]-i[0]),i[1]+t*(r[1]-i[1]),i[2]+t*(r[2]-i[2]),"oklab")};Zt.oklab=rS;const sS=(n,e,t)=>Br(n,e,t,"oklch");Zt.oklch=sS;const{pow:Yo,sqrt:qo,PI:Zo,cos:Eu,sin:wu,atan2:aS}=Math,oS=(n,e="lrgb",t=null)=>{const i=n.length;t||(t=Array.from(new Array(i)).map(()=>1));const r=i/t.reduce(function(u,d){return u+d});if(t.forEach((u,d)=>{t[d]*=r}),n=n.map(u=>new oe(u)),e==="lrgb")return lS(n,t);const s=n.shift(),a=s.get(e),o=[];let l=0,c=0;for(let u=0;u<a.length;u++)if(a[u]=(a[u]||0)*t[0],o.push(isNaN(a[u])?0:t[0]),e.charAt(u)==="h"&&!isNaN(a[u])){const d=a[u]/180*Zo;l+=Eu(d)*t[0],c+=wu(d)*t[0]}let f=s.alpha()*t[0];n.forEach((u,d)=>{const p=u.get(e);f+=u.alpha()*t[d+1];for(let v=0;v<a.length;v++)if(!isNaN(p[v]))if(o[v]+=t[d+1],e.charAt(v)==="h"){const x=p[v]/180*Zo;l+=Eu(x)*t[d+1],c+=wu(x)*t[d+1]}else a[v]+=p[v]*t[d+1]});for(let u=0;u<a.length;u++)if(e.charAt(u)==="h"){let d=aS(c/o[u],l/o[u])/Zo*180;for(;d<0;)d+=360;for(;d>=360;)d-=360;a[u]=d}else a[u]=a[u]/o[u];return f/=i,new oe(a,e).alpha(f>.99999?1:f,!0)},lS=(n,e)=>{const t=n.length,i=[0,0,0,0];for(let r=0;r<n.length;r++){const s=n[r],a=e[r]/t,o=s._rgb;i[0]+=Yo(o[0],2)*a,i[1]+=Yo(o[1],2)*a,i[2]+=Yo(o[2],2)*a,i[3]+=o[3]*a}return i[0]=qo(i[0]),i[1]=qo(i[1]),i[2]=qo(i[2]),i[3]>.9999999&&(i[3]=1),new oe(Lc(i))},{pow:cS}=Math;function da(n){let e="rgb",t=ut("#ccc"),i=0,r=[0,1],s=[0,1],a=[],o=[0,0],l=!1,c=[],f=!1,u=0,d=1,p=!1,v={},x=!0,m=1;const h=function(y){if(y=y||["#fff","#000"],y&&ft(y)==="string"&&ut.brewer&&ut.brewer[y.toLowerCase()]&&(y=ut.brewer[y.toLowerCase()]),ft(y)==="array"){y.length===1&&(y=[y[0],y[0]]),y=y.slice(0);for(let _=0;_<y.length;_++)y[_]=ut(y[_]);a.length=0;for(let _=0;_<y.length;_++)a.push(_/(y.length-1))}return C(),c=y},E=function(y){if(l!=null){const _=l.length-1;let b=0;for(;b<_&&y>=l[b];)b++;return b-1}return 0};let T=y=>y,S=y=>y;const A=function(y,_){let b,P;if(_==null&&(_=!1),isNaN(y)||y===null)return t;_?P=y:l&&l.length>2?P=E(y)/(l.length-2):d!==u?P=(y-u)/(d-u):P=1,P=S(P),_||(P=T(P)),m!==1&&(P=cS(P,m)),P=o[0]+P*(1-o[0]-o[1]),P=ji(P,0,1);const I=Math.floor(P*1e4);if(x&&v[I])b=v[I];else{if(ft(c)==="array")for(let D=0;D<a.length;D++){const O=a[D];if(P<=O){b=c[D];break}if(P>=O&&D===a.length-1){b=c[D];break}if(P>O&&P<a[D+1]){P=(P-O)/(a[D+1]-O),b=ut.interpolate(c[D],c[D+1],P,e);break}}else ft(c)==="function"&&(b=c(P));x&&(v[I]=b)}return b};var C=()=>v={};h(n);const R=function(y){const _=ut(A(y));return f&&_[f]?_[f]():_};return R.classes=function(y){if(y!=null){if(ft(y)==="array")l=y,r=[y[0],y[y.length-1]];else{const _=ut.analyze(r);y===0?l=[_.min,_.max]:l=ut.limits(_,"e",y)}return R}return l},R.domain=function(y){if(!arguments.length)return s;s=y.slice(0),u=y[0],d=y[y.length-1],a=[];const _=c.length;if(y.length===_&&u!==d)for(let b of Array.from(y))a.push((b-u)/(d-u));else{for(let b=0;b<_;b++)a.push(b/(_-1));if(y.length>2){const b=y.map((I,D)=>D/(y.length-1)),P=y.map(I=>(I-u)/(d-u));P.every((I,D)=>b[D]===I)||(S=I=>{if(I<=0||I>=1)return I;let D=0;for(;I>=P[D+1];)D++;const O=(I-P[D])/(P[D+1]-P[D]);return b[D]+O*(b[D+1]-b[D])})}}return r=[u,d],R},R.mode=function(y){return arguments.length?(e=y,C(),R):e},R.range=function(y,_){return h(y),R},R.out=function(y){return f=y,R},R.spread=function(y){return arguments.length?(i=y,R):i},R.correctLightness=function(y){return y==null&&(y=!0),p=y,C(),p?T=function(_){const b=A(0,!0).lab()[0],P=A(1,!0).lab()[0],I=b>P;let D=A(_,!0).lab()[0];const O=b+(P-b)*_;let k=D-O,z=0,N=1,W=20;for(;Math.abs(k)>.01&&W-- >0;)(function(){return I&&(k*=-1),k<0?(z=_,_+=(N-_)*.5):(N=_,_+=(z-_)*.5),D=A(_,!0).lab()[0],k=D-O})();return _}:T=_=>_,R},R.padding=function(y){return y!=null?(ft(y)==="number"&&(y=[y,y]),o=y,R):o},R.colors=function(y,_){arguments.length<2&&(_="hex");let b=[];if(arguments.length===0)b=c.slice(0);else if(y===1)b=[R(.5)];else if(y>1){const P=r[0],I=r[1]-P;b=fS(0,y).map(D=>R(P+D/(y-1)*I))}else{n=[];let P=[];if(l&&l.length>2)for(let I=1,D=l.length,O=1<=D;O?I<D:I>D;O?I++:I--)P.push((l[I-1]+l[I])*.5);else P=r;b=P.map(I=>R(I))}return ut[_]&&(b=b.map(P=>P[_]())),b},R.cache=function(y){return y!=null?(x=y,R):x},R.gamma=function(y){return y!=null?(m=y,R):m},R.nodata=function(y){return y!=null?(t=ut(y),R):t},R}function fS(n,e,t){let i=[],r=n<e,s=e;for(let a=n;r?a<s:a>s;r?a++:a--)i.push(a);return i}const uS=function(n){let e=[1,1];for(let t=1;t<n;t++){let i=[1];for(let r=1;r<=e.length;r++)i[r]=(e[r]||0)+e[r-1];e=i}return e},dS=function(n){let e,t,i,r;if(n=n.map(s=>new oe(s)),n.length===2)[t,i]=n.map(s=>s.lab()),e=function(s){const a=[0,1,2].map(o=>t[o]+s*(i[o]-t[o]));return new oe(a,"lab")};else if(n.length===3)[t,i,r]=n.map(s=>s.lab()),e=function(s){const a=[0,1,2].map(o=>(1-s)*(1-s)*t[o]+2*(1-s)*s*i[o]+s*s*r[o]);return new oe(a,"lab")};else if(n.length===4){let s;[t,i,r,s]=n.map(a=>a.lab()),e=function(a){const o=[0,1,2].map(l=>(1-a)*(1-a)*(1-a)*t[l]+3*(1-a)*(1-a)*a*i[l]+3*(1-a)*a*a*r[l]+a*a*a*s[l]);return new oe(o,"lab")}}else if(n.length>=5){let s,a,o;s=n.map(l=>l.lab()),o=n.length-1,a=uS(o),e=function(l){const c=1-l,f=[0,1,2].map(u=>s.reduce((d,p,v)=>d+a[v]*c**(o-v)*l**v*p[u],0));return new oe(f,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return e},hS=n=>{const e=dS(n);return e.scale=()=>da(e),e},{round:vh}=Math;oe.prototype.rgb=function(n=!0){return n===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(vh)};oe.prototype.rgba=function(n=!0){return this._rgb.slice(0,4).map((e,t)=>t<3?n===!1?e:vh(e):e)};const pS=(...n)=>new oe(...n,"rgb");Object.assign(ut,{rgb:pS});et.format.rgb=(...n)=>{const e=rt(n,"rgba");return e[3]===void 0&&(e[3]=1),e};et.autodetect.push({p:3,test:(...n)=>{if(n=rt(n,"rgba"),ft(n)==="array"&&(n.length===3||n.length===4&&ft(n[3])=="number"&&n[3]>=0&&n[3]<=1))return"rgb"}});const Fn=(n,e,t)=>{if(!Fn[t])throw new Error("unknown blend mode "+t);return Fn[t](n,e)},Ui=n=>(e,t)=>{const i=ut(t).rgb(),r=ut(e).rgb();return ut.rgb(n(i,r))},Ni=n=>(e,t)=>{const i=[];return i[0]=n(e[0],t[0]),i[1]=n(e[1],t[1]),i[2]=n(e[2],t[2]),i},mS=n=>n,gS=(n,e)=>n*e/255,_S=(n,e)=>n>e?e:n,vS=(n,e)=>n>e?n:e,xS=(n,e)=>255*(1-(1-n/255)*(1-e/255)),MS=(n,e)=>e<128?2*n*e/255:255*(1-2*(1-n/255)*(1-e/255)),bS=(n,e)=>255*(1-(1-e/255)/(n/255)),SS=(n,e)=>n===255?255:(n=255*(e/255)/(1-n/255),n>255?255:n);Fn.normal=Ui(Ni(mS));Fn.multiply=Ui(Ni(gS));Fn.screen=Ui(Ni(xS));Fn.overlay=Ui(Ni(MS));Fn.darken=Ui(Ni(_S));Fn.lighten=Ui(Ni(vS));Fn.dodge=Ui(Ni(SS));Fn.burn=Ui(Ni(bS));const{pow:yS,sin:ES,cos:wS}=Math;function TS(n=300,e=-1.5,t=1,i=1,r=[0,1]){let s=0,a;ft(r)==="array"?a=r[1]-r[0]:(a=0,r=[r,r]);const o=function(l){const c=oi*((n+120)/360+e*l),f=yS(r[0]+a*l,i),d=(s!==0?t[0]+l*s:t)*f*(1-f)/2,p=wS(c),v=ES(c),x=f+d*(-.14861*p+1.78277*v),m=f+d*(-.29227*p-.90649*v),h=f+d*(1.97294*p);return ut(Lc([x*255,m*255,h*255,1]))};return o.start=function(l){return l==null?n:(n=l,o)},o.rotations=function(l){return l==null?e:(e=l,o)},o.gamma=function(l){return l==null?i:(i=l,o)},o.hue=function(l){return l==null?t:(t=l,ft(t)==="array"?(s=t[1]-t[0],s===0&&(t=t[1])):s=0,o)},o.lightness=function(l){return l==null?r:(ft(l)==="array"?(r=l,a=l[1]-l[0]):(r=[l,l],a=0),o)},o.scale=()=>ut.scale(o),o.hue(t),o}const AS="0123456789abcdef",{floor:RS,random:CS}=Math,PS=(n=CS)=>{let e="#";for(let t=0;t<6;t++)e+=AS.charAt(RS(n()*16));return new oe(e,"hex")},{log:Tu,pow:LS,floor:DS,abs:IS}=Math;function xh(n,e=null){const t={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return ft(n)==="object"&&(n=Object.values(n)),n.forEach(i=>{e&&ft(i)==="object"&&(i=i[e]),i!=null&&!isNaN(i)&&(t.values.push(i),t.sum+=i,i<t.min&&(t.min=i),i>t.max&&(t.max=i),t.count+=1)}),t.domain=[t.min,t.max],t.limits=(i,r)=>Mh(t,i,r),t}function Mh(n,e="equal",t=7){ft(n)=="array"&&(n=xh(n));const{min:i,max:r}=n,s=n.values.sort((o,l)=>o-l);if(t===1)return[i,r];const a=[];if(e.substr(0,1)==="c"&&(a.push(i),a.push(r)),e.substr(0,1)==="e"){a.push(i);for(let o=1;o<t;o++)a.push(i+o/t*(r-i));a.push(r)}else if(e.substr(0,1)==="l"){if(i<=0)throw new Error("Logarithmic scales are only possible for values > 0");const o=Math.LOG10E*Tu(i),l=Math.LOG10E*Tu(r);a.push(i);for(let c=1;c<t;c++)a.push(LS(10,o+c/t*(l-o)));a.push(r)}else if(e.substr(0,1)==="q"){a.push(i);for(let o=1;o<t;o++){const l=(s.length-1)*o/t,c=DS(l);if(c===l)a.push(s[c]);else{const f=l-c;a.push(s[c]*(1-f)+s[c+1]*f)}}a.push(r)}else if(e.substr(0,1)==="k"){let o;const l=s.length,c=new Array(l),f=new Array(t);let u=!0,d=0,p=null;p=[],p.push(i);for(let m=1;m<t;m++)p.push(i+m/t*(r-i));for(p.push(r);u;){for(let h=0;h<t;h++)f[h]=0;for(let h=0;h<l;h++){const E=s[h];let T=Number.MAX_VALUE,S;for(let A=0;A<t;A++){const C=IS(p[A]-E);C<T&&(T=C,S=A),f[S]++,c[h]=S}}const m=new Array(t);for(let h=0;h<t;h++)m[h]=null;for(let h=0;h<l;h++)o=c[h],m[o]===null?m[o]=s[h]:m[o]+=s[h];for(let h=0;h<t;h++)m[h]*=1/f[h];u=!1;for(let h=0;h<t;h++)if(m[h]!==p[h]){u=!0;break}p=m,d++,d>200&&(u=!1)}const v={};for(let m=0;m<t;m++)v[m]=[];for(let m=0;m<l;m++)o=c[m],v[o].push(s[m]);let x=[];for(let m=0;m<t;m++)x.push(v[m][0]),x.push(v[m][v[m].length-1]);x=x.sort((m,h)=>m-h),a.push(x[0]);for(let m=1;m<x.length;m+=2){const h=x[m];!isNaN(h)&&a.indexOf(h)===-1&&a.push(h)}}return a}const US=(n,e)=>{n=new oe(n),e=new oe(e);const t=n.luminance(),i=e.luminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)};const Au=.027,NS=5e-4,FS=.1,Ru=1.14,Gs=.022,Cu=1.414,OS=(n,e)=>{n=new oe(n),e=new oe(e),n.alpha()<1&&(n=Lr(e,n,n.alpha(),"rgb"));const t=Pu(...n.rgb()),i=Pu(...e.rgb()),r=t>=Gs?t:t+Math.pow(Gs-t,Cu),s=i>=Gs?i:i+Math.pow(Gs-i,Cu),a=Math.pow(s,.56)-Math.pow(r,.57),o=Math.pow(s,.65)-Math.pow(r,.62),l=Math.abs(s-r)<NS?0:r<s?a*Ru:o*Ru;return(Math.abs(l)<FS?0:l>0?l-Au:l+Au)*100};function Pu(n,e,t){return .2126729*Math.pow(n/255,2.4)+.7151522*Math.pow(e/255,2.4)+.072175*Math.pow(t/255,2.4)}const{sqrt:ai,pow:Ut,min:BS,max:kS,atan2:Lu,abs:Du,cos:Xs,sin:Iu,exp:zS,PI:Uu}=Math;function VS(n,e,t=1,i=1,r=1){var s=function(se){return 360*se/(2*Uu)},a=function(se){return 2*Uu*se/360};n=new oe(n),e=new oe(e);const[o,l,c]=Array.from(n.lab()),[f,u,d]=Array.from(e.lab()),p=(o+f)/2,v=ai(Ut(l,2)+Ut(c,2)),x=ai(Ut(u,2)+Ut(d,2)),m=(v+x)/2,h=.5*(1-ai(Ut(m,7)/(Ut(m,7)+Ut(25,7)))),E=l*(1+h),T=u*(1+h),S=ai(Ut(E,2)+Ut(c,2)),A=ai(Ut(T,2)+Ut(d,2)),C=(S+A)/2,R=s(Lu(c,E)),y=s(Lu(d,T)),_=R>=0?R:R+360,b=y>=0?y:y+360,P=Du(_-b)>180?(_+b+360)/2:(_+b)/2,I=1-.17*Xs(a(P-30))+.24*Xs(a(2*P))+.32*Xs(a(3*P+6))-.2*Xs(a(4*P-63));let D=b-_;D=Du(D)<=180?D:b<=_?D+360:D-360,D=2*ai(S*A)*Iu(a(D)/2);const O=f-o,k=A-S,z=1+.015*Ut(p-50,2)/ai(20+Ut(p-50,2)),N=1+.045*C,W=1+.015*C*I,ee=30*zS(-Ut((P-275)/25,2)),J=-(2*ai(Ut(C,7)/(Ut(C,7)+Ut(25,7))))*Iu(2*a(ee)),ge=ai(Ut(O/(t*z),2)+Ut(k/(i*N),2)+Ut(D/(r*W),2)+J*(k/(i*N))*(D/(r*W)));return kS(0,BS(100,ge))}function HS(n,e,t="lab"){n=new oe(n),e=new oe(e);const i=n.get(t),r=e.get(t);let s=0;for(let a in i){const o=(i[a]||0)-(r[a]||0);s+=o*o}return Math.sqrt(s)}const GS=(...n)=>{try{return new oe(...n),!0}catch{return!1}},XS={cool(){return da([ut.hsl(180,1,.9),ut.hsl(250,.7,.4)])},hot(){return da(["#000","#f00","#ff0","#fff"]).mode("rgb")}},ac={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},bh=Object.keys(ac),Nu=new Map(bh.map(n=>[n.toLowerCase(),n])),WS=typeof Proxy=="function"?new Proxy(ac,{get(n,e){const t=e.toLowerCase();if(Nu.has(t))return n[Nu.get(t)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(bh)}}):ac,$S=(...n)=>{n=rt(n,"cmyk");const[e,t,i,r]=n,s=n.length>4?n[4]:1;return r===1?[0,0,0,s]:[e>=1?0:255*(1-e)*(1-r),t>=1?0:255*(1-t)*(1-r),i>=1?0:255*(1-i)*(1-r),s]},{max:Fu}=Math,YS=(...n)=>{let[e,t,i]=rt(n,"rgb");e=e/255,t=t/255,i=i/255;const r=1-Fu(e,Fu(t,i)),s=r<1?1/(1-r):0,a=(1-e-r)*s,o=(1-t-r)*s,l=(1-i-r)*s;return[a,o,l,r]};oe.prototype.cmyk=function(){return YS(this._rgb)};const qS=(...n)=>new oe(...n,"cmyk");Object.assign(ut,{cmyk:qS});et.format.cmyk=$S;et.autodetect.push({p:2,test:(...n)=>{if(n=rt(n,"cmyk"),ft(n)==="array"&&n.length===4)return"cmyk"}});const ZS=(...n)=>{const e=rt(n,"hsla");let t=Or(n)||"lsa";return e[0]=wn(e[0]||0)+"deg",e[1]=wn(e[1]*100)+"%",e[2]=wn(e[2]*100)+"%",t==="hsla"||e.length>3&&e[3]<1?(e[3]="/ "+(e.length>3?e[3]:1),t="hsla"):e.length=3,`${t.substr(0,3)}(${e.join(" ")})`},KS=(...n)=>{const e=rt(n,"lab");let t=Or(n)||"lab";return e[0]=wn(e[0])+"%",e[1]=wn(e[1]),e[2]=wn(e[2]),t==="laba"||e.length>3&&e[3]<1?e[3]="/ "+(e.length>3?e[3]:1):e.length=3,`lab(${e.join(" ")})`},jS=(...n)=>{const e=rt(n,"lch");let t=Or(n)||"lab";return e[0]=wn(e[0])+"%",e[1]=wn(e[1]),e[2]=isNaN(e[2])?"none":wn(e[2])+"deg",t==="lcha"||e.length>3&&e[3]<1?e[3]="/ "+(e.length>3?e[3]:1):e.length=3,`lch(${e.join(" ")})`},JS=(...n)=>{const e=rt(n,"lab");return e[0]=wn(e[0]*100)+"%",e[1]=rc(e[1]),e[2]=rc(e[2]),e.length>3&&e[3]<1?e[3]="/ "+(e.length>3?e[3]:1):e.length=3,`oklab(${e.join(" ")})`},Sh=(...n)=>{const[e,t,i,...r]=rt(n,"rgb"),[s,a,o]=Oc(e,t,i),[l,c,f]=mh(s,a,o);return[l,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]},QS=(...n)=>{const e=rt(n,"lch");return e[0]=wn(e[0]*100)+"%",e[1]=rc(e[1]),e[2]=isNaN(e[2])?"none":wn(e[2])+"deg",e.length>3&&e[3]<1?e[3]="/ "+(e.length>3?e[3]:1):e.length=3,`oklch(${e.join(" ")})`},{round:Ko}=Math,e2=(...n)=>{const e=rt(n,"rgba");let t=Or(n)||"rgb";if(t.substr(0,3)==="hsl")return ZS(_h(e),t);if(t.substr(0,3)==="lab"){const i=as();ui("d50");const r=KS(Ic(e),t);return ui(i),r}if(t.substr(0,3)==="lch"){const i=as();ui("d50");const r=jS(Nc(e),t);return ui(i),r}return t.substr(0,5)==="oklab"?JS(Oc(e)):t.substr(0,5)==="oklch"?QS(Sh(e)):(e[0]=Ko(e[0]),e[1]=Ko(e[1]),e[2]=Ko(e[2]),(t==="rgba"||e.length>3&&e[3]<1)&&(e[3]="/ "+(e.length>3?e[3]:1),t="rgba"),`${t.substr(0,3)}(${e.slice(0,t==="rgb"?3:4).join(" ")})`)},yh=(...n)=>{n=rt(n,"lch");const[e,t,i,...r]=n,[s,a,o]=ph(e,t,i),[l,c,f]=Fc(s,a,o);return[l,c,f,...r.length>0&&r[0]<1?[r[0]]:[]]},gi=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,In=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,ha=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,Tn=/\s*/.source,kr=/\s+/.source,Bc=/\s*,\s*/.source,Da=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,zr=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,Eh=new RegExp("^rgba?\\("+Tn+[gi,gi,gi].join(kr)+zr+"\\)$"),wh=new RegExp("^rgb\\("+Tn+[gi,gi,gi].join(Bc)+Tn+"\\)$"),Th=new RegExp("^rgba\\("+Tn+[gi,gi,gi,In].join(Bc)+Tn+"\\)$"),Ah=new RegExp("^hsla?\\("+Tn+[Da,ha,ha].join(kr)+zr+"\\)$"),Rh=new RegExp("^hsl?\\("+Tn+[Da,ha,ha].join(Bc)+Tn+"\\)$"),Ch=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Ph=new RegExp("^lab\\("+Tn+[In,In,In].join(kr)+zr+"\\)$"),Lh=new RegExp("^lch\\("+Tn+[In,In,Da].join(kr)+zr+"\\)$"),Dh=new RegExp("^oklab\\("+Tn+[In,In,In].join(kr)+zr+"\\)$"),Ih=new RegExp("^oklch\\("+Tn+[In,In,Da].join(kr)+zr+"\\)$"),{round:Uh}=Math,xr=n=>n.map((e,t)=>t<=2?ji(Uh(e),0,255):e),Nt=(n,e=0,t=100,i=!1)=>(typeof n=="string"&&n.endsWith("%")&&(n=parseFloat(n.substring(0,n.length-1))/100,i?n=e+(n+1)*.5*(t-e):n=e+n*(t-e)),+n),jt=(n,e)=>n==="none"?e:n,kc=n=>{if(n=n.toLowerCase().trim(),n==="transparent")return[0,0,0,0];let e;if(et.format.named)try{return et.format.named(n)}catch{}if((e=n.match(Eh))||(e=n.match(wh))){let t=e.slice(1,4);for(let r=0;r<3;r++)t[r]=+Nt(jt(t[r],0),0,255);t=xr(t);const i=e[4]!==void 0?+Nt(e[4],0,1):1;return t[3]=i,t}if(e=n.match(Th)){const t=e.slice(1,5);for(let i=0;i<4;i++)t[i]=+Nt(t[i],0,255);return t}if((e=n.match(Ah))||(e=n.match(Rh))){const t=e.slice(1,4);t[0]=+jt(t[0].replace("deg",""),0),t[1]=+Nt(jt(t[1],0),0,100)*.01,t[2]=+Nt(jt(t[2],0),0,100)*.01;const i=xr(sc(t)),r=e[4]!==void 0?+Nt(e[4],0,1):1;return i[3]=r,i}if(e=n.match(Ch)){const t=e.slice(1,4);t[1]*=.01,t[2]*=.01;const i=sc(t);for(let r=0;r<3;r++)i[r]=Uh(i[r]);return i[3]=+e[4],i}if(e=n.match(Ph)){const t=e.slice(1,4);t[0]=Nt(jt(t[0],0),0,100),t[1]=Nt(jt(t[1],0),-125,125,!0),t[2]=Nt(jt(t[2],0),-125,125,!0);const i=as();ui("d50");const r=xr(Dc(t));ui(i);const s=e[4]!==void 0?+Nt(e[4],0,1):1;return r[3]=s,r}if(e=n.match(Lh)){const t=e.slice(1,4);t[0]=Nt(t[0],0,100),t[1]=Nt(jt(t[1],0),0,150,!1),t[2]=+jt(t[2].replace("deg",""),0);const i=as();ui("d50");const r=xr(Uc(t));ui(i);const s=e[4]!==void 0?+Nt(e[4],0,1):1;return r[3]=s,r}if(e=n.match(Dh)){const t=e.slice(1,4);t[0]=Nt(jt(t[0],0),0,1),t[1]=Nt(jt(t[1],0),-.4,.4,!0),t[2]=Nt(jt(t[2],0),-.4,.4,!0);const i=xr(Fc(t)),r=e[4]!==void 0?+Nt(e[4],0,1):1;return i[3]=r,i}if(e=n.match(Ih)){const t=e.slice(1,4);t[0]=Nt(jt(t[0],0),0,1),t[1]=Nt(jt(t[1],0),0,.4,!1),t[2]=+jt(t[2].replace("deg",""),0);const i=xr(yh(t)),r=e[4]!==void 0?+Nt(e[4],0,1):1;return i[3]=r,i}};kc.test=n=>Eh.test(n)||Ah.test(n)||Ph.test(n)||Lh.test(n)||Dh.test(n)||Ih.test(n)||wh.test(n)||Th.test(n)||Rh.test(n)||Ch.test(n)||n==="transparent";oe.prototype.css=function(n){return e2(this._rgb,n)};const t2=(...n)=>new oe(...n,"css");ut.css=t2;et.format.css=kc;et.autodetect.push({p:5,test:(n,...e)=>{if(!e.length&&ft(n)==="string"&&kc.test(n))return"css"}});et.format.gl=(...n)=>{const e=rt(n,"rgba");return e[0]*=255,e[1]*=255,e[2]*=255,e};const n2=(...n)=>new oe(...n,"gl");ut.gl=n2;oe.prototype.gl=function(){const n=this._rgb;return[n[0]/255,n[1]/255,n[2]/255,n[3]]};oe.prototype.hex=function(n){return uh(this._rgb,n)};const i2=(...n)=>new oe(...n,"hex");ut.hex=i2;et.format.hex=fh;et.autodetect.push({p:4,test:(n,...e)=>{if(!e.length&&ft(n)==="string"&&[3,4,5,6,7,8,9].indexOf(n.length)>=0)return"hex"}});const{log:Ws}=Math,Nh=n=>{const e=n/100;let t,i,r;return e<66?(t=255,i=e<6?0:-155.25485562709179-.44596950469579133*(i=e-2)+104.49216199393888*Ws(i),r=e<20?0:-254.76935184120902+.8274096064007395*(r=e-10)+115.67994401066147*Ws(r)):(t=351.97690566805693+.114206453784165*(t=e-55)-40.25366309332127*Ws(t),i=325.4494125711974+.07943456536662342*(i=e-50)-28.0852963507957*Ws(i),r=255),[t,i,r,1]},{round:r2}=Math,s2=(...n)=>{const e=rt(n,"rgb"),t=e[0],i=e[2];let r=1e3,s=4e4;const a=.4;let o;for(;s-r>a;){o=(s+r)*.5;const l=Nh(o);l[2]/l[0]>=i/t?s=o:r=o}return r2(o)};oe.prototype.temp=oe.prototype.kelvin=oe.prototype.temperature=function(){return s2(this._rgb)};const jo=(...n)=>new oe(...n,"temp");Object.assign(ut,{temp:jo,kelvin:jo,temperature:jo});et.format.temp=et.format.kelvin=et.format.temperature=Nh;oe.prototype.oklch=function(){return Sh(this._rgb)};const a2=(...n)=>new oe(...n,"oklch");Object.assign(ut,{oklch:a2});et.format.oklch=yh;et.autodetect.push({p:2,test:(...n)=>{if(n=rt(n,"oklch"),ft(n)==="array"&&n.length===3)return"oklch"}});Object.assign(ut,{analyze:xh,average:oS,bezier:hS,blend:Fn,brewer:WS,Color:oe,colors:Pr,contrast:US,contrastAPCA:OS,cubehelix:TS,deltaE:VS,distance:HS,input:et,interpolate:Lr,limits:Mh,mix:Lr,random:PS,scale:da,scales:XS,valid:GS});var o2=Jn("<stop></stop>"),l2=Ct('<div class="container svelte-1s1qea5"><svg id="gradient"><rect rx="4" ry="4" fill="#444"></rect><g><linearGradient id="luminanceGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" y2="0"></linearGradient><rect fill="url(#luminanceGradient)" rx="3" ry="3"></rect></g></svg> <svg id="slider" class="svelte-1s1qea5"><rect fill="#f000"></rect><!></svg></div>');function c2(n,e){en(e,!0);let t=it(e,"hsvValues",15),i=it(e,"width",3,200),r=it(e,"height",3,14);it(e,"margin",3,6);let s=360,a=Ke(null),o=lt(()=>t()[0]/s*(i()-2)+1);function l(){t(t()[0]=(g(o)-1)*s/(i()-2),!0)}let c=lt(()=>cl({mode:"okhsv",h:t()[0],s:t()[1],v:t()[2]})),f=10,u=10,d=lt(()=>{let C=[];for(let R=0;R<=1;R+=1/u){let y=cl({mode:"okhsv",h:R*360,s:t()[1],v:t()[2]});C.push({color:y,offset:R})}return C});var p=l2(),v=Ge(p),x=Ge(v);he(x,"x",0),he(x,"y",0);var m=be(x),h=Ge(m);Nn(h,21,()=>g(d),Un,(C,R)=>{var y=o2();Tt(()=>{he(y,"offset",g(R).offset),on(y,"stop-color:"+g(R).color)}),ht(C,y)}),Be(h);var E=be(h);he(E,"x",1),he(E,"y",1),Be(m),Be(v);var T=be(v,2);on(T,"left: -10px; top: 0px;");var S=Ge(T);he(S,"x",0),he(S,"y",0),En(S,C=>H(a,C),()=>g(a));var A=be(S);{let C=lt(()=>i()-1);sh(A,{get dragAreaElement(){return g(a)},y:7,minX:1,get maxX(){return g(C)},minY:7,maxY:7,get color(){return g(c)},onchange:l,get x(){return g(o)},set x(R){H(o,R)}})}Be(T),Be(p),Tt(()=>{on(p,`width: ${i()??""}px; height: ${r()??""}px`),he(v,"viewBox",`0 0 ${i()??""} ${r()??""}`),he(v,"width",i()),he(v,"height",r()),he(x,"width",i()),he(x,"height",r()),he(h,"x2",i()),he(E,"width",i()-2),he(E,"height",r()-2),he(T,"viewBox",`-10 0 ${i()+2*f} ${r()??""}`),he(T,"width",i()+2*f),he(T,"height",r()),he(S,"width",i()),he(S,"height",r())}),ht(n,p),tn()}var f2=Ct('<div class="container svelte-x1xg4e"><!> <!></div>');function u2(n,e){en(e,!0);let t=it(e,"color",15),i=it(e,"onColorChange",3,void 0),r=it(e,"width",3,200),s=it(e,"height",7);s(s()||r());const a=es("okhsv"),o=es("rgb");let l=Ke(Gt([0,1,1])),c=Ke(1),f=Ke(!1),u=Ke(null);function d(S){return S==null||Number.isNaN(S)?0:Math.max(0,Math.min(1,S))}function p(S){const A=Math.round(d(S.r)*255),C=Math.round(d(S.g)*255),R=Math.round(d(S.b)*255),y=S.alpha??S.a??1;function _(I){return I.toString(16).padStart(2,"0")}const b=`#${_(A)}${_(C)}${_(R)}`;if(y==null||y>=1)return b.toLowerCase();const P=Math.round(d(y)*255);return`${b}${_(P)}`.toLowerCase()}function v(S){if(S==null)return null;try{return String(S).trim().toLowerCase()}catch{return null}}function x(S){try{const A=Qu(S);return A?a(A):null}catch{return null}}Er(()=>{const S=v(t());if(S==null||g(f)&&(H(f,!1),S===g(u))||S===g(u))return;const A=x(t());A&&(g(l)[0]=A.h??0,g(l)[1]=d(A.s??0),g(l)[2]=d(A.v??0),H(c,A.alpha??A.a??1,!0),H(u,S,!0))}),Er(()=>{const S=g(l)[0],A=g(l)[1],C=g(l)[2],R=g(c),_=o({mode:"okhsv",h:S,s:A,v:C})||{};R!=null&&(_.a=R);const b=p({r:_.r??0,g:_.g??0,b:_.b??0,a:_.a??R??1,alpha:_.a??R??1}),P=v(b);P!=null&&P!==g(u)&&(H(f,!0),i()?i()(b):t(b),H(u,P,!0))});function m(S){S.preventDefault();let A=S.deltaY;Math.abs(S.deltaX)>Math.abs(S.deltaY)&&(A=-S.deltaX),g(l)[0]=(g(l)[0]+A/10+360)%360}var h=f2(),E=Ge(h);ib(E,{get width(){return r()},get height(){return s()},get hsvValues(){return g(l)},set hsvValues(S){H(l,S,!0)}});var T=be(E,2);c2(T,{get width(){return r()},get hsvValues(){return g(l)},set hsvValues(S){H(l,S,!0)}}),Be(h),Tt(()=>on(h,`width: ${r()??""}px; height: ${s()+20}px;`)),li("wheel",h,m),ht(n,h),tn()}var d2=Ct('<button aria-label="Color Swatch"></button>'),h2=Ct('<div class="editable-color-palette svelte-115gi70"><div class="color-palette svelte-115gi70"></div> <div class="color-picker-container svelte-115gi70"><!></div></div>');function p2(n,e){en(e,!0);let t=it(e,"colors",31,()=>Gt(["#ff0000","#00ff00","#0000ff"])),i=it(e,"selectedColorIndex",15,0),r=it(e,"height",7),s=it(e,"swatchSize",3,40);r(r()||e.width);let a=Ke(Gt(t()[i()]||"#ff0000"));Er(()=>{H(a,t()[i()]||"#ff0000",!0)});function o(d){t(t()[i()]=d,!0),t([...t()])}var l=h2(),c=Ge(l);Nn(c,21,t,Un,(d,p,v)=>{var x=d2();x.__click=()=>i(v),Tt(()=>{Zi(x,1,`color-swatch ${v===i()?"selected":""}`,"svelte-115gi70"),on(x,`background-color: ${g(p)??""}; width: ${s()??""}px; height: ${s()??""}px;`)}),ht(d,x)}),Be(c);var f=be(c,2),u=Ge(f);u2(u,{get color(){return g(a)},onColorChange:o,get width(){return e.width},get height(){return r()}}),Be(f),Be(l),Tt(()=>on(l,`width: ${e.width??""}px;`)),ht(n,l),tn()}mn(["click"]);var m2=Jn('<polygon stroke="black" stroke-width="1"></polygon>'),g2=Jn('<svg class="svg-canvas"><rect x="0" y="0" fill="#2d2d2dff" stroke="none"></rect><g></g></svg>'),_2=Ct('<label><input type="radio" name="palette" class="palette-radio svelte-yv94u4"/> <svg viewBox="0 0 300 100" class="palette-preview svelte-yv94u4"><rect x="0" y="0" width="100" height="100"></rect><rect x="100" y="0" width="100" height="100"></rect><rect x="200" y="0" width="100" height="100"></rect></svg> <span class="palette-name svelte-yv94u4"> </span></label>'),v2=Ct('<div class="palette-gallery svelte-yv94u4"></div>'),x2=Ct('<div class="svg-container"><!></div> <div class="sidebar-right svelte-yv94u4"><button>Reset All</button> <hr/> <p class="description svelte-yv94u4">Wähle die Farben für Trapez, Dreieck und Parallelogramm.</p> <button class="toggle-gallery-btn svelte-yv94u4"> </button> <!> <!> <hr/> <p class="description svelte-yv94u4">Aktiviere/Deaktiviere die Farb-Invertierung.</p> <!> <hr/> <p class="description svelte-yv94u4">Bewege Segmente von der Mitte des Canvas weg.</p> <!> <!> <hr/> <p class="description svelte-yv94u4">Stelle die X-Position jeder Reihe individuell ein.</p> <!> <!> <!> <!> <hr/> <p class="description svelte-yv94u4">Spiegle einzelne Reihen horizontal.</p> <!> <!> <!> <!></div>',1);function M2(n,e){en(e,!1);const t=Le(),i=Le(),r=Le(),s=Le(),a=Le(),o=Le(),l=Le(),c=[],f=[{name:"Autumn",colors:["#ffd7b5","#d2691e","#8b4513"]}],u={rows:4,cols:4,startY:-149,segmentWidth:450,segmentHeight:346,segmentOffsetX:0,segmentOffsetY:0,segmentSpacingX:0,segmentSpacingY:0,scale:1,trapezColor:"#ffd7b5",dreieckColor:"#d2691e",parallelogrammColor:"#8b4513",rowOffsetX:0,rowSpacing:50,baseStartX:-440,useModulo:!0},d=u.rows,p=u.cols,v=u.startY,x=u.segmentWidth,m=u.segmentHeight,h=u.segmentOffsetX,E=u.segmentOffsetY,T=u.scale,S=u.rowOffsetX,A=u.rowSpacing,C=u.baseStartX;let R=Le(u.trapezColor),y=Le(u.dreieckColor),_=Le(u.parallelogrammColor),b=Le(u.useModulo),P=Le(u.segmentSpacingX),I=Le(u.segmentSpacingY),D=Le(0),O=Le(0),k=Le(0),z=Le(0),N=Le(!1),W=Le(!0),ee=Le(!0),te=Le(!1),J=Le(),ge=Le(0),se=Le([g(R),g(y),g(_)]),Fe=Le(0),ve=Le(!1);function G(){H(R,u.trapezColor),H(y,u.dreieckColor),H(_,u.parallelogrammColor),H(b,u.useModulo),H(P,u.segmentSpacingX),H(I,u.segmentSpacingY),H(D,0),H(O,0),H(k,0),H(z,0),H(N,!1),H(W,!0),H(ee,!0),H(te,!1),H(Fe,0),H(se,[g(R),g(y),g(_)])}function $(){H(ve,!g(ve))}mt(()=>g(Fe),()=>{g(Fe)!==-1&&H(se,[...f[g(Fe)].colors])}),mt(()=>g(se),()=>{H(R,g(se)[0]),H(y,g(se)[1]),H(_,g(se)[2])}),mt(()=>(g(b),g(se),g(N),g(W),g(ee),g(te),g(P),g(I),g(D),g(O),g(k),g(z)),()=>{H(t,`${g(b)}-${g(se).join("-")}-${g(N)}-${g(W)}-${g(ee)}-${g(te)}-${g(P)}-${g(I)}-${g(D)}-${g(O)}-${g(k)}-${g(z)}`)}),mt(()=>(g(P),g(I),g(R),g(y),g(_),g(D),g(O),g(k),g(z),g(N),g(W),g(ee),g(te),g(b)),()=>{H(i,(()=>{const ie=new pa(v,{segmentWidth:x,segmentHeight:m,segmentOffsetX:h,segmentOffsetY:E,segmentSpacingX:g(P),segmentSpacingY:g(I),trapezColor:g(R),dreieckColor:g(y),parallelogrammColor:g(_),rowOffsetX:S,rowSpacing:A,baseStartX:C,row1OffsetX:g(D)+50,row2OffsetX:g(O)+50,row3OffsetX:g(k)+50,row4OffsetX:g(z)+50,row1Mirror:g(N),row2Mirror:g(W),row3Mirror:g(ee),row4Mirror:g(te),useModulo:g(b)});return ie.generateGrid(d,p),H(J,ie),ie.getAllElements()})())}),mt(()=>{},()=>{H(r,1e3)}),mt(()=>g(r),()=>{H(s,g(r))}),mt(()=>g(r),()=>{H(a,g(r))}),mt(()=>{},()=>{H(o,0)}),mt(()=>{},()=>{H(l,0)}),lc(),cc();var ce=x2(),_e=di(ce),xe=Ge(_e);fc(xe,()=>g(t),ie=>{var fe=g2(),Pe=Ge(fe),Oe=be(Pe);Nn(Oe,5,()=>g(i),Un,(re,ue)=>{var Re=m2();Tt((De,pe)=>{he(Re,"points",De),he(Re,"fill",(g(ue),an(()=>g(ue).fill))),he(Re,"transform",pe)},[()=>(g(ue),an(()=>g(ue).getPoints())),()=>(g(ue),an(()=>g(ue).getTransform()))]),ht(re,Re)}),Be(Oe),Be(fe),Tt(()=>{he(fe,"viewBox",`0 0 ${g(s)??""} ${g(a)??""}`),he(Pe,"width",g(s)),he(Pe,"height",g(a)),he(Oe,"transform",`translate(${g(o)??""}, ${g(l)??""}) scale(${T})`)}),ht(ie,fe)}),Be(_e);var Ve=be(_e,2),ot=Ge(Ve);ot.__click=G;var Se=be(ot,6);Se.__click=$;var ke=Ge(Se);Be(Se);var Ze=be(Se,2);{var He=ie=>{var fe=v2();Nn(fe,5,()=>f,Un,(Pe,Oe,re)=>{var ue=_2();let Re;var De=Ge(ue);Wu(De),De.value=De.__value=re;var pe=be(De,2),nt=Ge(pe),B=be(nt),Te=be(B);Be(pe);var de=be(pe,2),Ce=Ge(de,!0);Be(de),Be(ue),Tt(()=>{Re=Zi(ue,1,"palette-item svelte-yv94u4",null,Re,{selected:g(Fe)===re}),he(nt,"fill",(g(Oe),an(()=>g(Oe).colors[0]))),he(B,"fill",(g(Oe),an(()=>g(Oe).colors[1]))),he(Te,"fill",(g(Oe),an(()=>g(Oe).colors[2]))),Dn(Ce,(g(Oe),an(()=>g(Oe).name)))}),qu(c,[],De,()=>g(Fe),ae=>H(Fe,ae)),ht(Pe,ue)}),Be(fe),ht(ie,fe)};ea(Ze,ie=>{g(ve)&&ie(He)})}var Ue=be(Ze,2);p2(Ue,{get colors(){return g(se)},set colors(ie){H(se,ie)},get selectedColorIndex(){return g(ge)},set selectedColorIndex(ie){H(ge,ie)},$$legacy:!0});var U=be(Ue,6);Sn(U,{label:"Modulo aktiv",get value(){return g(b)},set value(ie){H(b,ie)},$$legacy:!0});var tt=be(U,6);Mn(tt,{min:0,max:100,snapValues:[0,50,100],label:"Horizontal (px)",get value(){return g(P)},set value(ie){H(P,ie)},$$legacy:!0});var Ye=be(tt,2);Mn(Ye,{min:0,max:100,snapValues:[0,50,100],label:"Vertikal (px)",get value(){return g(I)},set value(ie){H(I,ie)},$$legacy:!0});var je=be(Ye,6);Mn(je,{min:-100,max:100,snapValues:[-100,-50,0,50,100],label:"Reihe 1 Offset-X (px)",get value(){return g(D)},set value(ie){H(D,ie)},$$legacy:!0});var me=be(je,2);Mn(me,{min:-100,max:100,snapValues:[-100,-50,0,50,100],label:"Reihe 2 Offset-X (px)",get value(){return g(O)},set value(ie){H(O,ie)},$$legacy:!0});var L=be(me,2);Mn(L,{min:-100,max:100,snapValues:[-100,-50,0,50,100],label:"Reihe 3 Offset-X (px)",get value(){return g(k)},set value(ie){H(k,ie)},$$legacy:!0});var M=be(L,2);Mn(M,{min:-100,max:100,snapValues:[-100,-50,0,50,100],label:"Reihe 4 Offset-X (px)",get value(){return g(z)},set value(ie){H(z,ie)},$$legacy:!0});var F=be(M,6);Sn(F,{label:"Reihe 1 spiegeln",get value(){return g(N)},set value(ie){H(N,ie)},$$legacy:!0});var j=be(F,2);Sn(j,{label:"Reihe 2 spiegeln",get value(){return g(W)},set value(ie){H(W,ie)},$$legacy:!0});var Q=be(j,2);Sn(Q,{label:"Reihe 3 spiegeln",get value(){return g(ee)},set value(ie){H(ee,ie)},$$legacy:!0});var K=be(Q,2);Sn(K,{label:"Reihe 4 spiegeln",get value(){return g(te)},set value(ie){H(te,ie)},$$legacy:!0}),Be(Ve),Tt(()=>Dn(ke,`${g(ve)?"▼":"▶"} Farbauswahl`)),ht(n,ce),tn()}mn(["click"]);const b2=50,S2=Math.sin(Math.PI/3)*b2;class $s{constructor(e,t=6,i={}){this.yTop=e,this.count=t,this.options=i,this.h=S2,this.elements=[];const r=i.offsetX??0,s=i.colorTop??"#ffffff",a=i.colorBottom??"#ffffff",o=i.colorTri??"#c52b1e",l=i.mirror??!1,c=100,f=0+r,u=500;for(let d=0;d<t;d++){let p=f+d*c;l&&(p=u-(p-u));const v=l?180:0;this.elements.push(new tl(p+(l?-25:25),this.yTop,v,s,null,null,null,d*4+2,!1)),this.elements.push(new tl(p,this.yTop+this.h,v,a,null,null,null,d*4+3,!1)),this.elements.push(new ta(p+(l?-75:75),this.yTop,l?180:0,o,null,null,null,d*4,!1)),this.elements.push(new ta(p+(l?-50:50),this.yTop+this.h,l?180:0,o,null,null,null,d*4+1,!1))}}getAllElements(){return this.elements}}class y2{constructor(e=100,t=0,i={}){this.h=Math.sin(Math.PI/3)*50,this.offsetX=t,this.options=i,this.rows=[],this.generateRows(e)}generateRows(e){const t=this.options.rowOffsetX||0,i=this.options.baseStartX||0;this.options.rowSpacing!==void 0&&this.options.rowSpacing;const r=this.options.row1OffsetX!==void 0?this.options.row1OffsetX:0,s=this.options.row2OffsetX!==void 0?this.options.row2OffsetX:0,a=this.options.row3OffsetX!==void 0?this.options.row3OffsetX:0,o=this.options.row4OffsetX!==void 0?this.options.row4OffsetX:0,l=this.options.row1Mirror!==void 0?this.options.row1Mirror:!1,c=this.options.row2Mirror!==void 0?this.options.row2Mirror:!1,f=this.options.row3Mirror!==void 0?this.options.row3Mirror:!1,u=this.options.row4Mirror!==void 0?this.options.row4Mirror:!1,d=this.options.colorTop||"#ffffff",p=this.options.colorBottom||"#ffffff",v=this.options.colorTri||"#c52b1e",x=this.options.countPerRow||7;this.rows.push(new $s(e,x,{colorTop:d,colorBottom:p,colorTri:v,offsetX:this.offsetX+i+t+r,mirror:l})),this.rows.push(new $s(e+2*this.h,x,{colorTop:d,colorBottom:p,colorTri:v,offsetX:this.offsetX+i+t+s-50,mirror:c})),this.rows.push(new $s(e+4*this.h,x,{colorTop:d,colorBottom:p,colorTri:v,offsetX:this.offsetX+i+t+a-100,mirror:f})),this.rows.push(new $s(e+6*this.h,x,{colorTop:d,colorBottom:p,colorTri:v,offsetX:this.offsetX+i+t+o-150,mirror:u}))}getAllElements(){let e=[];return this.rows.forEach(t=>{e=[...e,...t.getAllElements()]}),e}}class E2{constructor(e=100,t={}){this.startY=e,this.h=Math.sin(Math.PI/3)*50,this.segmentWidth=t.segmentWidth||450,this.segmentHeight=t.segmentHeight||8*this.h,this.segmentOffsetX=t.segmentOffsetX||0,this.segmentOffsetY=t.segmentOffsetY||0,this.segmentSpacingX=t.segmentSpacingX!==void 0?t.segmentSpacingX:0,this.segmentSpacingY=t.segmentSpacingY!==void 0?t.segmentSpacingY:0,this.colorTop=t.colorTop||"#ffffff",this.colorBottom=t.colorBottom||"#ffffff",this.colorTri=t.colorTri||"#c52b1e",this.rowOffsetX=t.rowOffsetX||0,this.rowSpacing=t.rowSpacing!==void 0?t.rowSpacing:0,this.baseStartX=t.baseStartX||100,this.countPerRow=t.countPerRow||7,this.row1OffsetX=t.row1OffsetX,this.row2OffsetX=t.row2OffsetX,this.row3OffsetX=t.row3OffsetX,this.row4OffsetX=t.row4OffsetX,this.row1Mirror=t.row1Mirror,this.row2Mirror=t.row2Mirror,this.row3Mirror=t.row3Mirror,this.row4Mirror=t.row4Mirror,this.segments=[]}addSegment(e,t){const i=(this.cols-1)/2,r=(this.rows-1)/2,s=t-i,a=e-r,o=s*this.segmentSpacingX,l=a*this.segmentSpacingY,c=t*this.segmentWidth+this.segmentOffsetX+o,f=e*this.segmentHeight+this.segmentOffsetY+l,u=new y2(this.startY+f,c,{rowOffsetX:this.rowOffsetX,rowSpacing:this.rowSpacing,baseStartX:this.baseStartX,colorTop:this.colorTop,colorBottom:this.colorBottom,colorTri:this.colorTri,countPerRow:this.countPerRow,row1OffsetX:this.row1OffsetX,row2OffsetX:this.row2OffsetX,row3OffsetX:this.row3OffsetX,row4OffsetX:this.row4OffsetX,row1Mirror:this.row1Mirror,row2Mirror:this.row2Mirror,row3Mirror:this.row3Mirror,row4Mirror:this.row4Mirror});return this.segments.push({segment:u,row:e,col:t}),u}generateGrid(e,t){this.segments=[],this.rows=e,this.cols=t;for(let i=0;i<e;i++)for(let r=0;r<t;r++)this.addSegment(i,r)}getAllElements(){let e=[];return this.segments.forEach(({segment:t})=>{e=[...e,...t.getAllElements()]}),e}}var w2=Jn('<polygon stroke="black" stroke-width="1"></polygon>'),T2=Ct('<div class="svg-container"><svg class="svg-canvas"><rect x="0" y="0" fill="#2d2d2dff" stroke="none"></rect><!></svg></div> <div class="sidebar-right"><button>Reset All</button> <hr/> <p class="description svelte-dc12cc">Stelle die Farben mit den Slidern ein.</p> <!> <!> <!></div>',1);function A2(n,e){en(e,!0);const t={rows:4,cols:4,startY:-149,segmentWidth:500,segmentHeight:346,segmentOffsetX:0,segmentOffsetY:0,rowOffsetX:0,rowSpacing:0,baseStartX:-250,countPerRow:7,hueRange:[30,25],saturationRange:[100,76],luminanceRange:[85,31]},i=t.rows,r=t.cols,s=t.startY,a=t.segmentWidth,o=t.segmentHeight,l=t.segmentOffsetX,c=t.segmentOffsetY,f=t.rowOffsetX,u=t.rowSpacing,d=t.baseStartX,p=t.countPerRow;let v=Ke(Gt(t.hueRange[0])),x=Ke(Gt(t.hueRange[1])),m=Ke(Gt(t.saturationRange[0])),h=Ke(Gt(t.saturationRange[1])),E=Ke(Gt(t.luminanceRange[0])),T=Ke(Gt(t.luminanceRange[1]));function S(){H(v,t.hueRange[0],!0),H(x,t.hueRange[1],!0),H(m,t.saturationRange[0],!0),H(h,t.saturationRange[1],!0),H(E,t.luminanceRange[0],!0),H(T,t.luminanceRange[1],!0)}function A(J,ge,se){J=J/360,ge=ge/100,se=se/100;let Fe,ve,G;if(ge===0)Fe=ve=G=se;else{const ce=(Ve,ot,Se)=>(Se<0&&(Se+=1),Se>1&&(Se-=1),Se<.16666666666666666?Ve+(ot-Ve)*6*Se:Se<.5?ot:Se<.6666666666666666?Ve+(ot-Ve)*(.6666666666666666-Se)*6:Ve),_e=se<.5?se*(1+ge):se+ge-se*ge,xe=2*se-_e;Fe=ce(xe,_e,J+1/3),ve=ce(xe,_e,J),G=ce(xe,_e,J-1/3)}const $=ce=>{const _e=Math.round(ce*255).toString(16);return _e.length===1?"0"+_e:_e};return`#${$(Fe)}${$(ve)}${$(G)}`}let C=lt(()=>A(g(v),g(m),g(E))),R=lt(()=>A(g(x),g(h),g(T))),y=lt(()=>g(C)),_=lt(()=>{const J=new E2(s,{segmentWidth:a,segmentHeight:o,segmentOffsetX:l,segmentOffsetY:c,colorTop:g(C),colorBottom:g(y),colorTri:g(R),rowOffsetX:f,rowSpacing:u,baseStartX:d,countPerRow:p});return J.generateGrid(i,r),J.getAllElements()});const b=1e3;var P=T2(),I=di(P),D=Ge(I);he(D,"viewBox","0 0 1000 1000");var O=Ge(D);he(O,"width",b),he(O,"height",b);var k=be(O);Nn(k,17,()=>g(_),Un,(J,ge)=>{var se=w2();Tt((Fe,ve)=>{he(se,"points",Fe),he(se,"fill",g(ge).fill),he(se,"transform",ve)},[()=>g(ge).getPoints(),()=>g(ge).getTransform()]),ht(J,se)}),Be(D),Be(I);var z=be(I,2),N=Ge(z);N.__click=S;var W=be(N,6);hi(W,{min:0,max:360,label:"Hue (Farbe 1 → Farbe 2)",get value1(){return g(v)},set value1(J){H(v,J,!0)},get value2(){return g(x)},set value2(J){H(x,J,!0)}});var ee=be(W,2);hi(ee,{min:0,max:100,label:"Saturation (Farbe 1 → Farbe 2)",get value1(){return g(m)},set value1(J){H(m,J,!0)},get value2(){return g(h)},set value2(J){H(h,J,!0)}});var te=be(ee,2);hi(te,{min:0,max:100,label:"Luminance (Farbe 1 → Farbe 2)",get value1(){return g(E)},set value1(J){H(E,J,!0)},get value2(){return g(T)},set value2(J){H(T,J,!0)}}),Be(z),ht(n,P),tn()}mn(["click"]);class R2{colorIndices;startY;segmentWidth;segmentHeight;baseStartX;countPerRow;mirrorRow1;mirrorRow2;mirrorRow3;mirrorRow4;offsetRow1;offsetRow2;offsetRow3;offsetRow4;rows;cols;useModulo;constructor(e,t=-149,i=500,r=346,s=-250,a=3,o=!1,l=!1,c=!1,f=!1,u=0,d=-150,p=-300,v=-450,x=4,m=4,h=!1){this.colorIndices=e,this.startY=t,this.segmentWidth=i,this.segmentHeight=r,this.baseStartX=s,this.countPerRow=a,this.mirrorRow1=o,this.mirrorRow2=l,this.mirrorRow3=c,this.mirrorRow4=f,this.offsetRow1=u,this.offsetRow2=d,this.offsetRow3=p,this.offsetRow4=v,this.rows=x,this.cols=m,this.useModulo=h,this.segments=[],this.generateGrid()}generateGrid(){this.segments=[];for(let e=0;e<this.rows;e++)for(let t=0;t<this.cols;t++){const i=this.baseStartX+t*this.segmentWidth,r=this.startY+e*this.segmentHeight,s=new CustomSegment(i,this.colorIndices,this.mirrorRow1,this.mirrorRow2,this.mirrorRow3,this.mirrorRow4,this.offsetRow1,this.offsetRow2,this.offsetRow3,this.offsetRow4,this.segmentWidth,this.countPerRow,this.useModulo);this.segments.push({segment:s,row:e,col:t,startY:r})}}getAllElements(){let e=[];return this.segments.forEach(({segment:t,startY:i})=>{const r=t.getAllElements();r.forEach(s=>{s.y+=i}),e=[...e,...r]}),e}}var C2=Jn('<polygon stroke="black" stroke-width="1"></polygon>'),P2=Ct('<div class="svg-container"><svg class="svg-canvas"><rect x="0" y="0" fill="#2d2d2dff" stroke="none"></rect><!></svg></div> <div class="sidebar-right"><button>Reset All</button> <hr/> <p class="description svelte-dl7c1v">Stelle die Farben mit den Slidern ein.</p> <!> <!> <!></div>',1);function L2(n,e){en(e,!0);const t={rows:4,cols:4,startY:-149,segmentWidth:400,segmentHeight:346,baseStartX:-440,countPerRow:1,offsetRow1:0,offsetRow2:-50,offsetRow3:-100,offsetRow4:-150,mirrorRow1:!1,mirrorRow2:!1,mirrorRow3:!1,mirrorRow4:!1,hueRange:[30,25],opacityRange:[100,76],luminanceRange:[85,31],useModulo:!1},i=t.rows,r=t.cols,s=t.startY,a=t.segmentWidth,o=t.segmentHeight,l=t.baseStartX,c=t.countPerRow,f=t.offsetRow1,u=t.offsetRow2,d=t.offsetRow3,p=t.offsetRow4,v=t.mirrorRow1,x=t.mirrorRow2,m=t.mirrorRow3,h=t.mirrorRow4;let E=Ke(Gt(t.hueRange[0])),T=Ke(Gt(t.hueRange[1])),S=Ke(Gt(t.opacityRange[0])),A=Ke(Gt(t.opacityRange[1])),C=Ke(Gt(t.luminanceRange[0])),R=Ke(Gt(t.luminanceRange[1]));Gt(t.useModulo);function y(){H(E,t.hueRange[0],!0),H(T,t.hueRange[1],!0),H(S,t.opacityRange[0],!0),H(A,t.opacityRange[1],!0),H(C,t.luminanceRange[0],!0),H(R,t.luminanceRange[1],!0)}function _(ve,G,$){ve=ve/360,G=G/100,$=$/100;let ce,_e,xe;if(G===0)ce=_e=xe=$;else{const ot=(Ze,He,Ue)=>(Ue<0&&(Ue+=1),Ue>1&&(Ue-=1),Ue<.16666666666666666?Ze+(He-Ze)*6*Ue:Ue<.5?He:Ue<.6666666666666666?Ze+(He-Ze)*(.6666666666666666-Ue)*6:Ze),Se=$<.5?$*(1+G):$+G-$*G,ke=2*$-Se;ce=ot(ke,Se,ve+1/3),_e=ot(ke,Se,ve),xe=ot(ke,Se,ve-1/3)}const Ve=ot=>{const Se=Math.round(ot*255).toString(16);return Se.length===1?"0"+Se:Se};return`#${Ve(ce)}${Ve(_e)}${Ve(xe)}`}let b=lt(()=>{const ve=_(g(E),g(S),g(C)),G=_(g(T),g(A),g(R));return console.log("adjustedColors updated:",{color1:ve,color2:G,hueMin:g(E),hueMax:g(T),satMin:g(S),satMax:g(A),lumMin:g(C),lumMax:g(R)}),[ve,G,ve,G,ve,G]}),P=lt(()=>g(b));Er(()=>{console.log("expandedColors changed:",g(P))});let I=lt(()=>new R2(g(P),s,a,o,l,c,v,x,m,h,f,u,d,p,i,r,!1)),D=lt(()=>g(I).getAllElements());const O=1e3;var k=P2(),z=di(k),N=Ge(z);he(N,"viewBox","0 0 1000 1000");var W=Ge(N);he(W,"width",O),he(W,"height",O);var ee=be(W);Nn(ee,17,()=>g(D),Un,(ve,G)=>{var $=C2();Tt((ce,_e)=>{he($,"points",ce),he($,"fill",g(G).fill),he($,"transform",_e)},[()=>g(G).getPoints(),()=>g(G).getTransform()]),ht(ve,$)}),Be(N),Be(z);var te=be(z,2),J=Ge(te);J.__click=y;var ge=be(J,6);hi(ge,{min:0,max:360,label:"Hue (Farbe 1 → Farbe 2)",get value1(){return g(E)},set value1(ve){H(E,ve,!0)},get value2(){return g(T)},set value2(ve){H(T,ve,!0)}});var se=be(ge,2);hi(se,{min:0,max:100,label:"Saturation (Farbe 1 → Farbe 2)",get value1(){return g(S)},set value1(ve){H(S,ve,!0)},get value2(){return g(A)},set value2(ve){H(A,ve,!0)}});var Fe=be(se,2);hi(Fe,{min:0,max:100,label:"Luminance (Farbe 1 → Farbe 2)",get value1(){return g(C)},set value1(ve){H(C,ve,!0)},get value2(){return g(R)},set value2(ve){H(R,ve,!0)}}),Be(te),ht(n,k),tn()}mn(["click"]);var D2=Ct('<div class="sidebar-left-description"> </div>'),I2=Ct("<button> <!></button>"),U2=Ct('<div class="app-container"><!> <main class="app-main"><div class="sidebar-left"></div> <!></main></div>');function X2(n){let e=[{name:"Stripe-Row Pattern",component:A2,description:"StripeRow-Muster: 16 Segmente (4x4) mit je 4 Reihen, alle Features."},{name:"Ziczac-Row Pattern",component:L2,description:"Trapez-Parallelogramm-Trapez Muster mit 4 Reihen."},{name:"Pattern Trapez A - Nur Farben",component:qp,description:"Trapez-Muster mit Farbsteuerung."},{name:"Pattern Trapez B - Positionen & Abstände",component:jp,description:"Trapez-Muster mit Position und Abstand-Steuerung."},{name:"Pattern Trapez C - Reihen-Spiegelung",component:e0,description:"Trapez-Muster mit Reihen-Spiegelung."},{name:"Pattern Trapez D - Master Pattern",component:M2,description:"Vollständiges Trapez-Muster mit allen Funktionen."}],t=Ke(0),i=lt(()=>e[g(t)].component);var r=U2(),s=Ge(r);Np(s);var a=be(s,2),o=Ge(a);Nn(o,21,()=>e,Un,(c,f,u)=>{var d=I2();let p;d.__click=()=>H(t,u,!0);var v=Ge(d),x=be(v);{var m=h=>{var E=D2(),T=Ge(E,!0);Be(E),Tt(()=>Dn(T,g(f).description)),Ip(3,E,()=>Op),ht(h,E)};ea(x,h=>{g(t)===u&&h(m)})}Be(d),Tt(()=>{p=Zi(d,1,"sidebar-left-item",null,p,{selected:g(t)===u}),Dn(v,`${g(f).name??""} `)}),ht(c,d)}),Be(o);var l=be(o,2);Sp(l,()=>g(i),(c,f)=>{f(c,{})}),Be(a),Be(r),ht(n,r)}mn(["click"]);export{X2 as component};
