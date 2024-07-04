import{a as lt}from"./chunk-YU6ABFKD.js";import{a as G,b as J,c as W,d as X,e as Y,f as q,h as K,i as Q,j as tt,k as et,l as nt,m as it,n as ot,o as rt,p as at}from"./chunk-XDNQYSIB.js";import{d as z,o as H,p as Z}from"./chunk-UM72FLCA.js";import{Fb as m,Gb as _,Ja as L,Ma as g,Mb as j,Pa as p,Pb as M,Qb as b,Ra as I,Ta as F,Va as E,Xa as D,Ya as $,Zb as B,_ as O,ba as R,fb as h,ha as d,hb as u,la as k,lb as A,nb as f,ob as v,pa as w,pb as a,qa as N,qb as l,rb as C,sb as U,va as T,vb as V,wa as S,xb as c}from"./chunk-OGSRAZ73.js";var st=[{path:"",loadComponent:()=>import("./chunk-JF5O4H4K.js"),title:"Todo | Home"},{path:"auth",loadComponent:()=>import("./chunk-CA6VNJCJ.js"),title:"Todo | Authentication",canActivate:[at]},{path:"profile",loadComponent:()=>import("./chunk-SWIFAPJZ.js"),title:"Todo | Profile",canActivate:[rt]},{path:"card",component:lt,title:"Todo | Card Testing"},{path:"**",loadComponent:()=>import("./chunk-AVEHFPSD.js"),title:"Todo | Not Found"}];var Ct="@",_t=(()=>{let t=class t{constructor(i,o,r,s,y){this.doc=i,this.delegate=o,this.zone=r,this.animationType=s,this.moduleImpl=y,this._rendererFactoryPromise=null,this.scheduler=d(F,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-4XCQNV7I.js").then(o=>o)).catch(o=>{throw new O(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:r})=>{this._engine=o(this.animationType,this.doc);let s=new r(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(i,o){let r=this.delegate.createRenderer(i,o);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new P(r);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(y=>{let ft=y.createRenderer(i,o);s.use(ft),this.scheduler?.notify(9)}).catch(y=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(o){I()},t.\u0275prov=R({token:t,factory:t.\u0275fac});let n=t;return n})(),P=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,i,o){this.delegate.insertBefore(t,e,i,o)}removeChild(t,e,i){this.delegate.removeChild(t,e,i)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,i,o){this.delegate.setAttribute(t,e,i,o)}removeAttribute(t,e,i){this.delegate.removeAttribute(t,e,i)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,i,o){this.delegate.setStyle(t,e,i,o)}removeStyle(t,e,i){this.delegate.removeStyle(t,e,i)}setProperty(t,e,i){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(t,e,i)),this.delegate.setProperty(t,e,i)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,i){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(t,e,i)),this.delegate.listen(t,e,i)}shouldReplay(t){return this.replay!==null&&t.startsWith(Ct)}};function pt(n="animations"){return D("NgAsyncAnimations"),w([{provide:E,useFactory:(t,e,i)=>new _t(t,e,i,n),deps:[z,X,$]},{provide:L,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var dt={providers:[B({eventCoalescing:!0}),Q(st),J(W()),pt(),N(nt.forRoot({config:{tokenGetter:()=>localStorage.getItem("access_token"),allowedDomains:[et]}}))]};var ct=[],mt=[{title:"Log in",path:"auth"},{title:"Register",path:"auth"}],gt=[{title:"Profile",path:"profile"}],ht=[];var x=(n,t)=>t.title;function yt(n,t){if(n&1&&(a(0,"a",15),m(1),l()),n&2){let e=t.$implicit;u("routerLink",e.path),p(),_(e.title)}}function xt(n,t){if(n&1&&f(0,yt,2,2,"a",15,x),n&2){let e=c();v(e.navigationLeftAfter)}}function At(n,t){if(n&1&&(a(0,"a",15),m(1),l()),n&2){let e=t.$implicit;u("routerLink",e.path),p(),_(e.title)}}function Mt(n,t){if(n&1&&f(0,At,2,2,"a",15,x),n&2){let e=c();v(e.navigationLeft)}}function bt(n,t){if(n&1&&(a(0,"a",16),m(1),l()),n&2){let e=t.$implicit;u("routerLink",e.path),p(),_(e.title)}}function Pt(n,t){if(n&1){let e=U();f(0,bt,2,2,"a",16,x),a(2,"a",17),V("click",function(){T(e);let o=c();return S(o.logOut())}),m(3,"Log Out"),l()}if(n&2){let e=c();v(e.navigationRightAfter)}}function Ot(n,t){if(n&1&&(a(0,"a",16),m(1),l()),n&2){let e=t.$implicit;u("routerLink",e.path),p(),_(e.title)}}function Rt(n,t){if(n&1&&f(0,Ot,2,2,"a",16,x),n&2){let e=c();v(e.navigationRight)}}var ut=(()=>{let t=class t{constructor(){this.http=d(G),this.sweetAlert=d(it),this.auth=d(ot),this.user$=this.auth.user$,this.navigationLeft=ct,this.navigationRight=mt,this.navigationLeftAfter=ht,this.navigationRightAfter=gt}logOut(){this.auth.logOut()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=k({type:t,selectors:[["app-root"]],standalone:!0,features:[j],decls:23,vars:6,consts:[["rel","preconnect","href",g`https://fonts.googleapis.com`],["rel","preconnect","href",g`https://fonts.gstatic.com`,"crossorigin",""],["href",g`https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap`,"rel","stylesheet"],["href",g`https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`,"rel","stylesheet"],["data-bs-theme","dark",1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["href","#",1,"navbar-brand"],[1,"fa-regular","fa-clipboard"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavAltMarkup","aria-controls","navbarNavAltMarkup","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNavAltMarkup",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"wrapper"],[1,"loginRegister"],["routerLink","",1,"headerLogin"],["aria-current","page",1,"nav-link",3,"routerLink"],[1,"headerLogin",3,"routerLink"],["routerLink","",1,"headerLogin",3,"click"]],template:function(o,r){o&1&&(C(0,"link",0)(1,"link",1)(2,"link",2)(3,"link",0)(4,"link",1)(5,"link",3),a(6,"nav",4)(7,"div",5)(8,"a",6),C(9,"i",7),l(),a(10,"button",8),C(11,"span",9),l(),a(12,"div",10)(13,"div",11)(14,"div",12),h(15,xt,2,0),M(16,"async"),h(17,Mt,2,0),l(),a(18,"div",13),h(19,Pt,4,0,"a",14),M(20,"async"),h(21,Rt,2,0),l()()()()(),C(22,"router-outlet")),o&2&&(p(15),A(b(16,2,r.user$)?15:17),p(4),A(b(20,4,r.user$)?19:21))},dependencies:[q,tt,K,Z,H],styles:["nav[_ngcontent-%COMP%]   div.container-fluid[_ngcontent-%COMP%]   div#navbarNavAltMarkup[_ngcontent-%COMP%]   div.navbar-nav[_ngcontent-%COMP%]{width:100%;justify-content:space-between}nav[_ngcontent-%COMP%]   div.container-fluid[_ngcontent-%COMP%]   div#navbarNavAltMarkup[_ngcontent-%COMP%]   div.navbar-nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex}nav[_ngcontent-%COMP%]   div.container-fluid[_ngcontent-%COMP%]   div#navbarNavAltMarkup[_ngcontent-%COMP%]   div.navbar-nav[_ngcontent-%COMP%]   .loginRegister[_ngcontent-%COMP%]{display:flex;gap:30px}nav[_ngcontent-%COMP%]   div.container-fluid[_ngcontent-%COMP%]   div#navbarNavAltMarkup[_ngcontent-%COMP%]   div.navbar-nav[_ngcontent-%COMP%]   .loginRegister[_ngcontent-%COMP%]   .headerLogin[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;color:#fff;font-size:large;cursor:pointer;font-size:16px}@media (max-width: 768px){nav[_ngcontent-%COMP%]   div.container-fluid[_ngcontent-%COMP%]   div#navbarNavAltMarkup[_ngcontent-%COMP%]   div.navbar-nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}nav[_ngcontent-%COMP%]   div.container-fluid[_ngcontent-%COMP%]   div#navbarNavAltMarkup[_ngcontent-%COMP%]   div.navbar-nav[_ngcontent-%COMP%]   .loginRegister[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}}"]});let n=t;return n})();Y(ut,dt).catch(n=>console.error(n));