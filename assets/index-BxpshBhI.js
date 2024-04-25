import{a as D,R as G,e as ct,j as n,D as ut,C as ne,_ as mt}from"./colors-DUWFvP72.js";import{B as Ce,T as dt}from"./App-DVeftLKR.js";import{R as ht,P as pt,E as ft,V as F,Q as He,a as fe,O as ge,S as We,b as H,M as ie,T as le,u as te,c as gt,d as k,e as Ke,f as yt,C as bt,g as wt,A as xt,h as ye,i as vt,j as St,k as jt}from"./Rug-UcPjUHa7.js";import{G as Ee}from"./Grid-GVVgzhsc.js";import"./index-DGwp89xd.js";var he=(a=>(a.Architect="an Architect",a.StructuralEngineer="a Structural Engineer",a.SoftwareEngineer="a Software Engineer",a.WebDeveloper="a Web Developer",a.Artist="an Artist",a))(he||{});function we(a,o,r,e){return new(r||(r=Promise))(function(i,p){function h(v){try{u(e.next(v))}catch(l){p(l)}}function c(v){try{u(e.throw(v))}catch(l){p(l)}}function u(v){var l;v.done?i(v.value):(l=v.value,l instanceof r?l:new r(function(g){g(l)})).then(h,c)}u((e=e.apply(a,o||[])).next())})}function oe(a,o){var r,e,i,p,h={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return p={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(p[Symbol.iterator]=function(){return this}),p;function c(u){return function(v){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;h;)try{if(r=1,e&&(i=2&l[0]?e.return:l[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,l[1])).done)return i;switch(e=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return h.label++,{value:l[1],done:!1};case 5:h.label++,e=l[1],l=[0];continue;case 7:l=h.ops.pop(),h.trys.pop();continue;default:if(i=h.trys,!((i=i.length>0&&i[i.length-1])||l[0]!==6&&l[0]!==2)){h=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){h.label=l[1];break}if(l[0]===6&&h.label<i[1]){h.label=i[1],i=l;break}if(i&&h.label<i[2]){h.label=i[2],h.ops.push(l);break}i[2]&&h.ops.pop(),h.trys.pop();continue}l=o.call(a,h)}catch(g){l=[6,g],e=0}finally{r=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,v])}}}function Pe(a){var o=typeof Symbol=="function"&&Symbol.iterator,r=o&&a[o],e=0;if(r)return r.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&e>=a.length&&(a=void 0),{value:a&&a[e++],done:!a}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")}function W(a,o){var r=typeof Symbol=="function"&&a[Symbol.iterator];if(!r)return a;var e,i,p=r.call(a),h=[];try{for(;(o===void 0||o-- >0)&&!(e=p.next()).done;)h.push(e.value)}catch(c){i={error:c}}finally{try{e&&!e.done&&(r=p.return)&&r.call(p)}finally{if(i)throw i.error}}return h}function Z(a,o,r){if(r||arguments.length===2)for(var e,i=0,p=o.length;i<p;i++)!e&&i in o||(e||(e=Array.prototype.slice.call(o,0,i)),e[i]=o[i]);return a.concat(e||Array.prototype.slice.call(o))}function Ue(a,o,r,e,i){for(var p=[],h=5;h<arguments.length;h++)p[h-5]=arguments[h];return we(this,void 0,void 0,function(){var c,u,v,l,g,j;return oe(this,function(S){switch(S.label){case 0:S.trys.push([0,12,13,14]),c=Pe(p),u=c.next(),S.label=1;case 1:if(u.done)return[3,11];switch(v=u.value,typeof v){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,Et(a,o,v,r,e,i)];case 3:return S.sent(),[3,10];case 4:return[4,Xe(v)];case 5:return S.sent(),[3,10];case 6:return[4,v.apply(void 0,Z([a,o,r,e,i],W(p),!1))];case 7:return S.sent(),[3,10];case 8:return[4,v];case 9:S.sent(),S.label=10;case 10:return u=c.next(),[3,1];case 11:return[3,14];case 12:return l=S.sent(),g={error:l},[3,14];case 13:try{u&&!u.done&&(j=c.return)&&j.call(c)}finally{if(g)throw g.error}return[7];case 14:return[2]}})})}function Et(a,o,r,e,i,p){return we(this,void 0,void 0,function(){var h,c;return oe(this,function(u){switch(u.label){case 0:return h=a.textContent||"",c=function(v,l){var g=W(l).slice(0);return Z(Z([],W(v),!1),[NaN],!1).findIndex(function(j,S){return g[S]!==j})}(h,r),[4,Ct(a,Z(Z([],W(Tt(h,o,c)),!1),W(Pt(r,o,c)),!1),e,i,p)];case 1:return u.sent(),[2]}})})}function Xe(a){return we(this,void 0,void 0,function(){return oe(this,function(o){switch(o.label){case 0:return[4,new Promise(function(r){return setTimeout(r,a)})];case 1:return o.sent(),[2]}})})}function Ct(a,o,r,e,i){return we(this,void 0,void 0,function(){var p,h,c,u,v,l,g,j,S,L,z,_,N;return oe(this,function(E){switch(E.label){case 0:if(p=o,i){for(h=0,c=1;c<o.length;c++)if(u=W([o[c-1],o[c]],2),v=u[0],(l=u[1]).length>v.length||l===""){h=c;break}p=o.slice(h,o.length)}E.label=1;case 1:E.trys.push([1,6,7,8]),g=Pe(function(I){var P,b,y,Y,T,M,f;return oe(this,function(O){switch(O.label){case 0:P=function(K){return oe(this,function(U){switch(U.label){case 0:return[4,{op:function(X){return requestAnimationFrame(function(){return X.textContent=K})},opCode:function(X){var ae=X.textContent||"";return K===""||ae.length>K.length?"DELETE":"WRITING"}}];case 1:return U.sent(),[2]}})},O.label=1;case 1:O.trys.push([1,6,7,8]),b=Pe(I),y=b.next(),O.label=2;case 2:return y.done?[3,5]:(Y=y.value,[5,P(Y)]);case 3:O.sent(),O.label=4;case 4:return y=b.next(),[3,2];case 5:return[3,8];case 6:return T=O.sent(),M={error:T},[3,8];case 7:try{y&&!y.done&&(f=b.return)&&f.call(b)}finally{if(M)throw M.error}return[7];case 8:return[2]}})}(p)),j=g.next(),E.label=2;case 2:return j.done?[3,5]:(S=j.value,L=S.opCode(a)==="WRITING"?r+r*(Math.random()-.5):e+e*(Math.random()-.5),S.op(a),[4,Xe(L)]);case 3:E.sent(),E.label=4;case 4:return j=g.next(),[3,2];case 5:return[3,8];case 6:return z=E.sent(),_={error:z},[3,8];case 7:try{j&&!j.done&&(N=g.return)&&N.call(g)}finally{if(_)throw _.error}return[7];case 8:return[2]}})})}function Pt(a,o,r){var e,i;return r===void 0&&(r=0),oe(this,function(p){switch(p.label){case 0:e=o(a),i=e.length,p.label=1;case 1:return r<i?[4,e.slice(0,++r).join("")]:[3,3];case 2:return p.sent(),[3,1];case 3:return[2]}})}function Tt(a,o,r){var e,i;return r===void 0&&(r=0),oe(this,function(p){switch(p.label){case 0:e=o(a),i=e.length,p.label=1;case 1:return i>r?[4,e.slice(0,--i).join("")]:[3,3];case 2:return p.sent(),[3,1];case 3:return[2]}})}var Mt="index-module_type__E-SaG";(function(a,o){o===void 0&&(o={});var r=o.insertAt;if(a&&typeof document<"u"){var e=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",r==="top"&&e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i),i.styleSheet?i.styleSheet.cssText=a:i.appendChild(document.createTextNode(a))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var Ot=D.memo(D.forwardRef(function(a,o){var r=a.sequence,e=a.repeat,i=a.className,p=a.speed,h=p===void 0?40:p,c=a.deletionSpeed,u=a.omitDeletionAnimation,v=u!==void 0&&u,l=a.preRenderFirstString,g=l!==void 0&&l,j=a.wrapper,S=j===void 0?"span":j,L=a.splitter,z=L===void 0?function(w){return Z([],W(w),!1)}:L,_=a.cursor,N=_===void 0||_,E=a.style,I=function(w,A){var B={};for(var R in w)Object.prototype.hasOwnProperty.call(w,R)&&A.indexOf(R)<0&&(B[R]=w[R]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function"){var J=0;for(R=Object.getOwnPropertySymbols(w);J<R.length;J++)A.indexOf(R[J])<0&&Object.prototype.propertyIsEnumerable.call(w,R[J])&&(B[R[J]]=w[R[J]])}return B}(a,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),P=I["aria-label"],b=I["aria-hidden"],y=I.role;c||(c=h);var Y=new Array(2).fill(40);[h,c].forEach(function(w,A){switch(typeof w){case"number":Y[A]=Math.abs(w-100);break;case"object":var B=w.type,R=w.value;if(typeof R!="number")break;B==="keyStrokeDelayInMs"&&(Y[A]=R)}});var T,M,f,O,K,U,X=Y[0],ae=Y[1],re=function(w,A){A===void 0&&(A=null);var B=D.useRef(A);return D.useEffect(function(){w&&(typeof w=="function"?w(B.current):w.current=B.current)},[w]),B}(o),ce=Mt;T=i?"".concat(N?ce+" ":"").concat(i):N?ce:"",M=D.useRef(function(){var w,A=r;e===1/0?w=Ue:typeof e=="number"&&(A=Array(1+e).fill(r).flat());var B=w?Z(Z([],W(A),!1),[w],!1):Z([],W(A),!1);return Ue.apply(void 0,Z([re.current,z,X,ae,v],W(B),!1)),function(){re.current}}),f=D.useRef(),O=D.useRef(!1),K=D.useRef(!1),U=W(D.useState(0),2)[1],O.current&&(K.current=!0),D.useEffect(function(){return O.current||(f.current=M.current(),O.current=!0),U(function(w){return w+1}),function(){K.current&&f.current&&f.current()}},[]);var $=S,se=g?r.find(function(w){return typeof w=="string"})||"":null;return G.createElement($,{"aria-hidden":b,"aria-label":P,role:y,style:E,className:T,children:P?G.createElement("span",{"aria-hidden":"true",ref:re,children:se}):se,ref:P?void 0:re})}),function(a,o){return!0});const _t=()=>{const[a]=ct();return n.jsx(n.Fragment,{children:n.jsx(Ce,{component:"div",sx:{backgroundColor:a===ut.DARK?ne.Dark5:ne.Light2,color:"#fff",fontFamily:"monospace",padding:"20px",borderRadius:"10px",minHeight:"200px",width:{sx:"98vw",sm:"98vw",md:"98vw",lg:"700px"},overflowY:"auto",textAlign:"start",border:`2px solid ${ne.Blue8}`},children:n.jsxs(Ce,{component:"div",display:"flex",children:[n.jsx(dt,{sx:{fontSize:"20px",fontWeight:700,color:ne.Blue8,mr:"5px"},children:"~/intro: "}),n.jsx(Ot,{sequence:[`Hello, Kelly here 👋🏾 . Thanks for stopping by. Please enjoy the glimpse into my world as ${he.Architect}, ${he.StructuralEngineer}, ${he.SoftwareEngineer}, ${he.Artist}, and most importantly, a Sci-Fi/Fantasy Nerd.. 
Appreciate you.`],wrapper:"span",speed:10,cursor:!1,style:{whiteSpace:"pre-wrap",fontSize:"20px",fontWeight:400,display:"inline-block",width:"700px",zIndex:0,position:void 0,color:ne.Blue8},className:"typing"})]})})})};var At=Object.defineProperty,Rt=(a,o,r)=>o in a?At(a,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[o]=r,m=(a,o,r)=>(Rt(a,typeof o!="symbol"?o+"":o,r),r);const be=new ht,Ze=new pt,Dt=Math.cos(70*(Math.PI/180)),Ge=(a,o)=>(a%o+o)%o;let kt=class extends ft{constructor(o,r){super(),m(this,"object"),m(this,"domElement"),m(this,"enabled",!0),m(this,"target",new F),m(this,"minDistance",0),m(this,"maxDistance",1/0),m(this,"minZoom",0),m(this,"maxZoom",1/0),m(this,"minPolarAngle",0),m(this,"maxPolarAngle",Math.PI),m(this,"minAzimuthAngle",-1/0),m(this,"maxAzimuthAngle",1/0),m(this,"enableDamping",!1),m(this,"dampingFactor",.05),m(this,"enableZoom",!0),m(this,"zoomSpeed",1),m(this,"enableRotate",!0),m(this,"rotateSpeed",1),m(this,"enablePan",!0),m(this,"panSpeed",1),m(this,"screenSpacePanning",!0),m(this,"keyPanSpeed",7),m(this,"zoomToCursor",!1),m(this,"autoRotate",!1),m(this,"autoRotateSpeed",2),m(this,"reverseOrbit",!1),m(this,"reverseHorizontalOrbit",!1),m(this,"reverseVerticalOrbit",!1),m(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),m(this,"mouseButtons",{LEFT:ie.ROTATE,MIDDLE:ie.DOLLY,RIGHT:ie.PAN}),m(this,"touches",{ONE:le.ROTATE,TWO:le.DOLLY_PAN}),m(this,"target0"),m(this,"position0"),m(this,"zoom0"),m(this,"_domElementKeyEvents",null),m(this,"getPolarAngle"),m(this,"getAzimuthalAngle"),m(this,"setPolarAngle"),m(this,"setAzimuthalAngle"),m(this,"getDistance"),m(this,"listenToKeyEvents"),m(this,"stopListenToKeyEvents"),m(this,"saveState"),m(this,"reset"),m(this,"update"),m(this,"connect"),m(this,"dispose"),this.object=o,this.domElement=r,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>l.phi,this.getAzimuthalAngle=()=>l.theta,this.setPolarAngle=t=>{let s=Ge(t,2*Math.PI),d=l.phi;d<0&&(d+=2*Math.PI),s<0&&(s+=2*Math.PI);let x=Math.abs(s-d);2*Math.PI-x<x&&(s<d?s+=2*Math.PI:d+=2*Math.PI),g.phi=s-d,e.update()},this.setAzimuthalAngle=t=>{let s=Ge(t,2*Math.PI),d=l.theta;d<0&&(d+=2*Math.PI),s<0&&(s+=2*Math.PI);let x=Math.abs(s-d);2*Math.PI-x<x&&(s<d?s+=2*Math.PI:d+=2*Math.PI),g.theta=s-d,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",Se),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(i),e.update(),u=c.NONE},this.update=(()=>{const t=new F,s=new F(0,1,0),d=new He().setFromUnitVectors(o.up,s),x=d.clone().invert(),C=new F,V=new He,ee=2*Math.PI;return function(){const Fe=e.object.position;d.setFromUnitVectors(o.up,s),x.copy(d).invert(),t.copy(Fe).sub(e.target),t.applyQuaternion(d),l.setFromVector3(t),e.autoRotate&&u===c.NONE&&X(K()),e.enableDamping?(l.theta+=g.theta*e.dampingFactor,l.phi+=g.phi*e.dampingFactor):(l.theta+=g.theta,l.phi+=g.phi);let q=e.minAzimuthAngle,Q=e.maxAzimuthAngle;isFinite(q)&&isFinite(Q)&&(q<-Math.PI?q+=ee:q>Math.PI&&(q-=ee),Q<-Math.PI?Q+=ee:Q>Math.PI&&(Q-=ee),q<=Q?l.theta=Math.max(q,Math.min(Q,l.theta)):l.theta=l.theta>(q+Q)/2?Math.max(q,l.theta):Math.min(Q,l.theta)),l.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,l.phi)),l.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(S,e.dampingFactor):e.target.add(S),e.zoomToCursor&&M||e.object.isOrthographicCamera?l.radius=B(l.radius):l.radius=B(l.radius*j),t.setFromSpherical(l),t.applyQuaternion(x),Fe.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(g.theta*=1-e.dampingFactor,g.phi*=1-e.dampingFactor,S.multiplyScalar(1-e.dampingFactor)):(g.set(0,0,0),S.set(0,0,0));let ue=!1;if(e.zoomToCursor&&M){let me=null;if(e.object instanceof fe&&e.object.isPerspectiveCamera){const de=t.length();me=B(de*j);const pe=de-me;e.object.position.addScaledVector(Y,pe),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const de=new F(T.x,T.y,0);de.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/j)),e.object.updateProjectionMatrix(),ue=!0;const pe=new F(T.x,T.y,0);pe.unproject(e.object),e.object.position.sub(pe).add(de),e.object.updateMatrixWorld(),me=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;me!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(me).add(e.object.position):(be.origin.copy(e.object.position),be.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(be.direction))<Dt?o.lookAt(e.target):(Ze.setFromNormalAndCoplanarPoint(e.object.up,e.target),be.intersectPlane(Ze,e.target))))}else e.object instanceof ge&&e.object.isOrthographicCamera&&(ue=j!==1,ue&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/j)),e.object.updateProjectionMatrix()));return j=1,M=!1,ue||C.distanceToSquared(e.object.position)>v||8*(1-V.dot(e.object.quaternion))>v?(e.dispatchEvent(i),C.copy(e.object.position),V.copy(e.object.quaternion),ue=!1,!0):!1}})(),this.connect=t=>{t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Be),e.domElement.addEventListener("pointerdown",Le),e.domElement.addEventListener("pointercancel",Ne),e.domElement.addEventListener("wheel",Ie)},this.dispose=()=>{var t,s,d,x,C,V;(t=e.domElement)==null||t.removeEventListener("contextmenu",Be),(s=e.domElement)==null||s.removeEventListener("pointerdown",Le),(d=e.domElement)==null||d.removeEventListener("pointercancel",Ne),(x=e.domElement)==null||x.removeEventListener("wheel",Ie),(C=e.domElement)==null||C.ownerDocument.removeEventListener("pointermove",xe),(V=e.domElement)==null||V.ownerDocument.removeEventListener("pointerup",ve),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Se)};const e=this,i={type:"change"},p={type:"start"},h={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=c.NONE;const v=1e-6,l=new We,g=new We;let j=1;const S=new F,L=new H,z=new H,_=new H,N=new H,E=new H,I=new H,P=new H,b=new H,y=new H,Y=new F,T=new H;let M=!1;const f=[],O={};function K(){return 2*Math.PI/60/60*e.autoRotateSpeed}function U(){return Math.pow(.95,e.zoomSpeed)}function X(t){e.reverseOrbit||e.reverseHorizontalOrbit?g.theta+=t:g.theta-=t}function ae(t){e.reverseOrbit||e.reverseVerticalOrbit?g.phi+=t:g.phi-=t}const re=(()=>{const t=new F;return function(d,x){t.setFromMatrixColumn(x,0),t.multiplyScalar(-d),S.add(t)}})(),ce=(()=>{const t=new F;return function(d,x){e.screenSpacePanning===!0?t.setFromMatrixColumn(x,1):(t.setFromMatrixColumn(x,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(d),S.add(t)}})(),$=(()=>{const t=new F;return function(d,x){const C=e.domElement;if(C&&e.object instanceof fe&&e.object.isPerspectiveCamera){const V=e.object.position;t.copy(V).sub(e.target);let ee=t.length();ee*=Math.tan(e.object.fov/2*Math.PI/180),re(2*d*ee/C.clientHeight,e.object.matrix),ce(2*x*ee/C.clientHeight,e.object.matrix)}else C&&e.object instanceof ge&&e.object.isOrthographicCamera?(re(d*(e.object.right-e.object.left)/e.object.zoom/C.clientWidth,e.object.matrix),ce(x*(e.object.top-e.object.bottom)/e.object.zoom/C.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function se(t){e.object instanceof fe&&e.object.isPerspectiveCamera||e.object instanceof ge&&e.object.isOrthographicCamera?j/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function w(t){e.object instanceof fe&&e.object.isPerspectiveCamera||e.object instanceof ge&&e.object.isOrthographicCamera?j*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function A(t){if(!e.zoomToCursor||!e.domElement)return;M=!0;const s=e.domElement.getBoundingClientRect(),d=t.clientX-s.left,x=t.clientY-s.top,C=s.width,V=s.height;T.x=d/C*2-1,T.y=-(x/V)*2+1,Y.set(T.x,T.y,1).unproject(e.object).sub(e.object.position).normalize()}function B(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function R(t){L.set(t.clientX,t.clientY)}function J(t){A(t),P.set(t.clientX,t.clientY)}function Me(t){N.set(t.clientX,t.clientY)}function Ve(t){z.set(t.clientX,t.clientY),_.subVectors(z,L).multiplyScalar(e.rotateSpeed);const s=e.domElement;s&&(X(2*Math.PI*_.x/s.clientHeight),ae(2*Math.PI*_.y/s.clientHeight)),L.copy(z),e.update()}function qe(t){b.set(t.clientX,t.clientY),y.subVectors(b,P),y.y>0?se(U()):y.y<0&&w(U()),P.copy(b),e.update()}function Qe(t){E.set(t.clientX,t.clientY),I.subVectors(E,N).multiplyScalar(e.panSpeed),$(I.x,I.y),N.copy(E),e.update()}function $e(t){A(t),t.deltaY<0?w(U()):t.deltaY>0&&se(U()),e.update()}function Je(t){let s=!1;switch(t.code){case e.keys.UP:$(0,e.keyPanSpeed),s=!0;break;case e.keys.BOTTOM:$(0,-e.keyPanSpeed),s=!0;break;case e.keys.LEFT:$(e.keyPanSpeed,0),s=!0;break;case e.keys.RIGHT:$(-e.keyPanSpeed,0),s=!0;break}s&&(t.preventDefault(),e.update())}function Oe(){if(f.length==1)L.set(f[0].pageX,f[0].pageY);else{const t=.5*(f[0].pageX+f[1].pageX),s=.5*(f[0].pageY+f[1].pageY);L.set(t,s)}}function _e(){if(f.length==1)N.set(f[0].pageX,f[0].pageY);else{const t=.5*(f[0].pageX+f[1].pageX),s=.5*(f[0].pageY+f[1].pageY);N.set(t,s)}}function Ae(){const t=f[0].pageX-f[1].pageX,s=f[0].pageY-f[1].pageY,d=Math.sqrt(t*t+s*s);P.set(0,d)}function et(){e.enableZoom&&Ae(),e.enablePan&&_e()}function tt(){e.enableZoom&&Ae(),e.enableRotate&&Oe()}function Re(t){if(f.length==1)z.set(t.pageX,t.pageY);else{const d=je(t),x=.5*(t.pageX+d.x),C=.5*(t.pageY+d.y);z.set(x,C)}_.subVectors(z,L).multiplyScalar(e.rotateSpeed);const s=e.domElement;s&&(X(2*Math.PI*_.x/s.clientHeight),ae(2*Math.PI*_.y/s.clientHeight)),L.copy(z)}function De(t){if(f.length==1)E.set(t.pageX,t.pageY);else{const s=je(t),d=.5*(t.pageX+s.x),x=.5*(t.pageY+s.y);E.set(d,x)}I.subVectors(E,N).multiplyScalar(e.panSpeed),$(I.x,I.y),N.copy(E)}function ke(t){const s=je(t),d=t.pageX-s.x,x=t.pageY-s.y,C=Math.sqrt(d*d+x*x);b.set(0,C),y.set(0,Math.pow(b.y/P.y,e.zoomSpeed)),se(y.y),P.copy(b)}function ot(t){e.enableZoom&&ke(t),e.enablePan&&De(t)}function rt(t){e.enableZoom&&ke(t),e.enableRotate&&Re(t)}function Le(t){var s,d;e.enabled!==!1&&(f.length===0&&((s=e.domElement)==null||s.ownerDocument.addEventListener("pointermove",xe),(d=e.domElement)==null||d.ownerDocument.addEventListener("pointerup",ve)),lt(t),t.pointerType==="touch"?st(t):nt(t))}function xe(t){e.enabled!==!1&&(t.pointerType==="touch"?it(t):at(t))}function ve(t){var s,d,x;ze(t),f.length===0&&((s=e.domElement)==null||s.releasePointerCapture(t.pointerId),(d=e.domElement)==null||d.ownerDocument.removeEventListener("pointermove",xe),(x=e.domElement)==null||x.ownerDocument.removeEventListener("pointerup",ve)),e.dispatchEvent(h),u=c.NONE}function Ne(t){ze(t)}function nt(t){let s;switch(t.button){case 0:s=e.mouseButtons.LEFT;break;case 1:s=e.mouseButtons.MIDDLE;break;case 2:s=e.mouseButtons.RIGHT;break;default:s=-1}switch(s){case ie.DOLLY:if(e.enableZoom===!1)return;J(t),u=c.DOLLY;break;case ie.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;Me(t),u=c.PAN}else{if(e.enableRotate===!1)return;R(t),u=c.ROTATE}break;case ie.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;R(t),u=c.ROTATE}else{if(e.enablePan===!1)return;Me(t),u=c.PAN}break;default:u=c.NONE}u!==c.NONE&&e.dispatchEvent(p)}function at(t){if(e.enabled!==!1)switch(u){case c.ROTATE:if(e.enableRotate===!1)return;Ve(t);break;case c.DOLLY:if(e.enableZoom===!1)return;qe(t);break;case c.PAN:if(e.enablePan===!1)return;Qe(t);break}}function Ie(t){e.enabled===!1||e.enableZoom===!1||u!==c.NONE&&u!==c.ROTATE||(t.preventDefault(),e.dispatchEvent(p),$e(t),e.dispatchEvent(h))}function Se(t){e.enabled===!1||e.enablePan===!1||Je(t)}function st(t){switch(Ye(t),f.length){case 1:switch(e.touches.ONE){case le.ROTATE:if(e.enableRotate===!1)return;Oe(),u=c.TOUCH_ROTATE;break;case le.PAN:if(e.enablePan===!1)return;_e(),u=c.TOUCH_PAN;break;default:u=c.NONE}break;case 2:switch(e.touches.TWO){case le.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;et(),u=c.TOUCH_DOLLY_PAN;break;case le.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;tt(),u=c.TOUCH_DOLLY_ROTATE;break;default:u=c.NONE}break;default:u=c.NONE}u!==c.NONE&&e.dispatchEvent(p)}function it(t){switch(Ye(t),u){case c.TOUCH_ROTATE:if(e.enableRotate===!1)return;Re(t),e.update();break;case c.TOUCH_PAN:if(e.enablePan===!1)return;De(t),e.update();break;case c.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ot(t),e.update();break;case c.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;rt(t),e.update();break;default:u=c.NONE}}function Be(t){e.enabled!==!1&&t.preventDefault()}function lt(t){f.push(t)}function ze(t){delete O[t.pointerId];for(let s=0;s<f.length;s++)if(f[s].pointerId==t.pointerId){f.splice(s,1);return}}function Ye(t){let s=O[t.pointerId];s===void 0&&(s=new H,O[t.pointerId]=s),s.set(t.pageX,t.pageY)}function je(t){const s=t.pointerId===f[0].pointerId?f[1]:f[0];return O[s.pointerId]}r!==void 0&&this.connect(r),this.update()}};const Lt=D.forwardRef(({makeDefault:a,camera:o,regress:r,domElement:e,enableDamping:i=!0,keyEvents:p=!1,onChange:h,onStart:c,onEnd:u,...v},l)=>{const g=te(y=>y.invalidate),j=te(y=>y.camera),S=te(y=>y.gl),L=te(y=>y.events),z=te(y=>y.setEvents),_=te(y=>y.set),N=te(y=>y.get),E=te(y=>y.performance),I=o||j,P=e||L.connected||S.domElement,b=D.useMemo(()=>new kt(I),[I]);return gt(()=>{b.enabled&&b.update()},-1),D.useEffect(()=>(p&&b.connect(p===!0?P:p),b.connect(P),()=>void b.dispose()),[p,P,r,b,g]),D.useEffect(()=>{const y=M=>{g(),r&&E.regress(),h&&h(M)},Y=M=>{c&&c(M)},T=M=>{u&&u(M)};return b.addEventListener("change",y),b.addEventListener("start",Y),b.addEventListener("end",T),()=>{b.removeEventListener("start",Y),b.removeEventListener("end",T),b.removeEventListener("change",y)}},[h,c,u,b,g,z]),D.useEffect(()=>{if(a){const y=N().controls;return _({controls:b}),()=>_({controls:y})}},[a,b]),D.createElement("primitive",mt({ref:l,object:b,enableDamping:i},v))}),Nt=a=>{const{nodes:o,materials:r}=k("models/Chair.glb"),e=G.useRef(null);return n.jsxs("group",{ref:e,...a,dispose:null,children:[n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["Node-Mesh"].geometry,material:r.Executive}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["Node-Mesh_1"].geometry,material:r.Executive__1}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["Node-Mesh_2"].geometry,material:r.Executive__2}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["Node-Mesh_3"].geometry,material:r.Executive__3})]})};k.preload("models/Chair.glb");const It=a=>{const{nodes:o,materials:r}=k("models/Adjustable Desk.glb"),e=G.useRef(null);return n.jsxs("group",{ref:e,...a,dispose:null,children:[n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube007_Cube008.geometry,material:r.GrayPlastic}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube006_Cube007.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder013.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder012.geometry,material:r.WhiteSteelScrew}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder011.geometry,material:r.BlackPlastic}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder010.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder009.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube005_Cube006.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder008.geometry,material:r.BlackPlastic}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder007.geometry,material:r.WhiteSteelScrew}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube004_Cube005.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder006.geometry,material:r.WhiteSteelScrew}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder005.geometry,material:r.BlackPlastic}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube003_Cube004.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube002_Cube003.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube001_Cube002.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Plane001_Plane002.geometry,material:r.BlackWood}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder004.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder003.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder002.geometry,material:r.BlackPlastic}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder001.geometry,material:r.WhiteSteelScrew}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cylinder.geometry,material:r.BlackCoatSteel}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube_Cube001.geometry,material:r.BlackCoatSteel})]})};k.preload("models/Adjustable Desk.glb");const Bt=a=>{const{nodes:o,materials:r}=k("models/MacBookPro.glb"),e=G.useRef(null);return n.jsxs("group",{ref:e,...a,dispose:null,children:[n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.mesh485226736.geometry,material:r.mat16}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.mesh485226736_1.geometry,material:r.mat23}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.mesh485226736_2.geometry,material:r.mat17}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.mesh485226736_3.geometry,material:r.mat15}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.mesh256948792.geometry,material:r.mat16}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.mesh256948792_1.geometry,material:r.mat23}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.mesh256948792_2.geometry,material:r.mat17}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.mesh256948792_3.geometry,material:r.mat25})]})};k.preload("models/MacBookPro.glb");const zt=a=>{const{nodes:o,materials:r}=k("models/Computer mouse.glb"),e=G.useRef(null);return n.jsx("group",{ref:e,...a,dispose:null,children:n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.ComputerMouse_mesh.geometry,material:r.ComputerMouse_mat1})})};k.preload("models/Computer mouse.glb");const Yt=a=>{const{nodes:o,materials:r}=k("models/Houseplant.glb"),e=G.useRef(null);return n.jsxs("group",{ref:e,...a,dispose:null,children:[n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["plant_01_Cube006-Mesh"].geometry,material:r[795548]}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["plant_01_Cube006-Mesh_1"].geometry,material:r["8BC34A"]}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["plant_01_Cube006-Mesh_2"].geometry,material:r.F8BBD0}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["plant_01_Cube006-Mesh_3"].geometry,material:r["455A64"]})]})};k.preload("models/Houseplant.glb");const Ft=a=>{const{nodes:o,materials:r}=k("models/Mug With Office Tool.glb"),e=G.useRef(null);return n.jsx("group",{ref:e,...a,dispose:null,children:n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Mug_with_office_tools.geometry,material:r.Material})})};k.preload("models/Mug With Office Tool.glb");const Ht=a=>{const{nodes:o,materials:r}=k("models/Coffee cup.glb"),e=G.useRef(null);return n.jsx("group",{ref:e,...a,dispose:null,children:n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube_Cube022.geometry,material:r["Material.005"]})})};k.preload("models/Coffee cup.glb");const Wt=a=>{const{nodes:o,materials:r}=k("models/Bicycle.glb"),e=G.useRef(null),i=new Ke({color:ne.Blue8});return n.jsxs("group",{ref:e,...a,dispose:null,children:[n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["Circle004-Mesh"].geometry,material:r["1A1A1A"]}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["Circle004-Mesh_1"].geometry,material:i}),n.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:o["Circle004-Mesh_2"].geometry,material:r["78909C"]})]})};k.preload("models/Bicycle.glb");const Ut=new yt,Zt=new Ke({color:new bt("white"),opacity:.75,transparent:!0}),Te=new wt(Ut,Zt);Te.scale.set(3,3,3);Te.rotation.set(-Math.PI*.5,0,0);Te.position.set(0,0,-10);const Gt=()=>n.jsxs(n.Fragment,{children:[n.jsx("ambientLight",{intensity:.5}),n.jsx("group",{position:[0,.5,1],children:n.jsx(xt,{animation:"Typing"})}),n.jsx("group",{position:[-8.4,.5,6.3],scale:.025,children:n.jsx(Nt,{})}),n.jsx("group",{position:[0,.5,1.8],scale:.75,rotation:[0,ye.degToRad(90),0],children:n.jsx(It,{})}),n.jsx("group",{position:[0,.5,1.5],scale:.5,rotation:[0,ye.degToRad(90),0],children:n.jsx(vt,{})}),n.jsx("group",{position:[.1,1.25,1.7],scale:.2,rotation:[0,ye.degToRad(180),0],children:n.jsx(Bt,{})}),n.jsx("group",{position:[-.3,1.2,1.7],scale:.03,children:n.jsx(zt,{})}),n.jsx("group",{position:[-1,.5,1.7],scale:.006,children:n.jsx(Yt,{})}),n.jsx("group",{position:[.5,1.3,1.6],scale:.15,children:n.jsx(Ht,{})}),n.jsx("group",{position:[-.5,1.2,1.5],scale:100,children:n.jsx(Ft,{})}),n.jsx("group",{position:[1.3,.5,.75],scale:.1,rotation:[0,ye.degToRad(180),0],children:n.jsx(Wt,{})})]}),Kt={xs:12,sm:12,md:12,lg:12,xl:7},Xt={xs:12,sm:12,md:12,lg:12,xl:5},Vt=()=>n.jsx(n.Fragment,{children:n.jsx(Ce,{component:"div",sx:{mt:"20vh",padding:"1vw",alignItems:"flex-start"},children:n.jsxs(Ee,{container:!0,spacing:4,gap:{xs:20,sm:10,md:0,lg:0},children:[n.jsx(Ee,{item:!0,sx:{height:"300px"},...Xt,children:n.jsx(_t,{})}),n.jsx(Ee,{item:!0,...Kt,children:n.jsxs(St,{camera:{position:[0,3,4],fov:40},style:{height:"500px",borderRadius:"10px",border:`2px solid ${ne.Blue8}`},children:[n.jsx(Lt,{makedefault:!0}),n.jsx(jt,{preset:"city"}),n.jsx(Gt,{})]})})]})})}),ro=Vt;export{ro as default};
