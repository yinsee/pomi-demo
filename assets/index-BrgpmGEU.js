(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ch={exports:{}},qo={};var f_;function Ny(){if(f_)return qo;f_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return qo.Fragment=t,qo.jsx=i,qo.jsxs=i,qo}var h_;function Oy(){return h_||(h_=1,Ch.exports=Ny()),Ch.exports}var Nt=Oy(),wh={exports:{}},ue={};var d_;function Py(){if(d_)return ue;d_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=g&&R[g]||R["@@iterator"],typeof R=="function"?R:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function y(R,z,J){this.props=R,this.context=z,this.refs=M,this.updater=J||E}y.prototype.isReactComponent={},y.prototype.setState=function(R,z){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,z,"setState")},y.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function D(){}D.prototype=y.prototype;function U(R,z,J){this.props=R,this.context=z,this.refs=M,this.updater=J||E}var L=U.prototype=new D;L.constructor=U,w(L,y.prototype),L.isPureReactComponent=!0;var B=Array.isArray;function I(){}var H={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(R,z,J){var ht=J.ref;return{$$typeof:r,type:R,key:z,ref:ht!==void 0?ht:null,props:J}}function _t(R,z){return N(R.type,z,R.props)}function k(R){return typeof R=="object"&&R!==null&&R.$$typeof===r}function et(R){var z={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(J){return z[J]})}var at=/\/+/g;function ot(R,z){return typeof R=="object"&&R!==null&&R.key!=null?et(""+R.key):z.toString(36)}function nt(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(I,I):(R.status="pending",R.then(function(z){R.status==="pending"&&(R.status="fulfilled",R.value=z)},function(z){R.status==="pending"&&(R.status="rejected",R.reason=z)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function P(R,z,J,ht,wt){var Z=typeof R;(Z==="undefined"||Z==="boolean")&&(R=null);var rt=!1;if(R===null)rt=!0;else switch(Z){case"bigint":case"string":case"number":rt=!0;break;case"object":switch(R.$$typeof){case r:case t:rt=!0;break;case _:return rt=R._init,P(rt(R._payload),z,J,ht,wt)}}if(rt)return wt=wt(R),rt=ht===""?"."+ot(R,0):ht,B(wt)?(J="",rt!=null&&(J=rt.replace(at,"$&/")+"/"),P(wt,z,J,"",function(Yt){return Yt})):wt!=null&&(k(wt)&&(wt=_t(wt,J+(wt.key==null||R&&R.key===wt.key?"":(""+wt.key).replace(at,"$&/")+"/")+rt)),z.push(wt)),1;rt=0;var xt=ht===""?".":ht+":";if(B(R))for(var Pt=0;Pt<R.length;Pt++)ht=R[Pt],Z=xt+ot(ht,Pt),rt+=P(ht,z,J,Z,wt);else if(Pt=S(R),typeof Pt=="function")for(R=Pt.call(R),Pt=0;!(ht=R.next()).done;)ht=ht.value,Z=xt+ot(ht,Pt++),rt+=P(ht,z,J,Z,wt);else if(Z==="object"){if(typeof R.then=="function")return P(nt(R),z,J,ht,wt);throw z=String(R),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return rt}function G(R,z,J){if(R==null)return R;var ht=[],wt=0;return P(R,ht,"","",function(Z){return z.call(J,Z,wt++)}),ht}function ct(R){if(R._status===-1){var z=R._result;z=z(),z.then(function(J){(R._status===0||R._status===-1)&&(R._status=1,R._result=J)},function(J){(R._status===0||R._status===-1)&&(R._status=2,R._result=J)}),R._status===-1&&(R._status=0,R._result=z)}if(R._status===1)return R._result.default;throw R._result}var mt=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},Ct={map:G,forEach:function(R,z,J){G(R,function(){z.apply(this,arguments)},J)},count:function(R){var z=0;return G(R,function(){z++}),z},toArray:function(R){return G(R,function(z){return z})||[]},only:function(R){if(!k(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return ue.Activity=v,ue.Children=Ct,ue.Component=y,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=U,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ue.__COMPILER_RUNTIME={__proto__:null,c:function(R){return H.H.useMemoCache(R)}},ue.cache=function(R){return function(){return R.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(R,z,J){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ht=w({},R.props),wt=R.key;if(z!=null)for(Z in z.key!==void 0&&(wt=""+z.key),z)!T.call(z,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&z.ref===void 0||(ht[Z]=z[Z]);var Z=arguments.length-2;if(Z===1)ht.children=J;else if(1<Z){for(var rt=Array(Z),xt=0;xt<Z;xt++)rt[xt]=arguments[xt+2];ht.children=rt}return N(R.type,wt,ht)},ue.createContext=function(R){return R={$$typeof:f,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},ue.createElement=function(R,z,J){var ht,wt={},Z=null;if(z!=null)for(ht in z.key!==void 0&&(Z=""+z.key),z)T.call(z,ht)&&ht!=="key"&&ht!=="__self"&&ht!=="__source"&&(wt[ht]=z[ht]);var rt=arguments.length-2;if(rt===1)wt.children=J;else if(1<rt){for(var xt=Array(rt),Pt=0;Pt<rt;Pt++)xt[Pt]=arguments[Pt+2];wt.children=xt}if(R&&R.defaultProps)for(ht in rt=R.defaultProps,rt)wt[ht]===void 0&&(wt[ht]=rt[ht]);return N(R,Z,wt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(R){return{$$typeof:d,render:R}},ue.isValidElement=k,ue.lazy=function(R){return{$$typeof:_,_payload:{_status:-1,_result:R},_init:ct}},ue.memo=function(R,z){return{$$typeof:p,type:R,compare:z===void 0?null:z}},ue.startTransition=function(R){var z=H.T,J={};H.T=J;try{var ht=R(),wt=H.S;wt!==null&&wt(J,ht),typeof ht=="object"&&ht!==null&&typeof ht.then=="function"&&ht.then(I,mt)}catch(Z){mt(Z)}finally{z!==null&&J.types!==null&&(z.types=J.types),H.T=z}},ue.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ue.use=function(R){return H.H.use(R)},ue.useActionState=function(R,z,J){return H.H.useActionState(R,z,J)},ue.useCallback=function(R,z){return H.H.useCallback(R,z)},ue.useContext=function(R){return H.H.useContext(R)},ue.useDebugValue=function(){},ue.useDeferredValue=function(R,z){return H.H.useDeferredValue(R,z)},ue.useEffect=function(R,z){return H.H.useEffect(R,z)},ue.useEffectEvent=function(R){return H.H.useEffectEvent(R)},ue.useId=function(){return H.H.useId()},ue.useImperativeHandle=function(R,z,J){return H.H.useImperativeHandle(R,z,J)},ue.useInsertionEffect=function(R,z){return H.H.useInsertionEffect(R,z)},ue.useLayoutEffect=function(R,z){return H.H.useLayoutEffect(R,z)},ue.useMemo=function(R,z){return H.H.useMemo(R,z)},ue.useOptimistic=function(R,z){return H.H.useOptimistic(R,z)},ue.useReducer=function(R,z,J){return H.H.useReducer(R,z,J)},ue.useRef=function(R){return H.H.useRef(R)},ue.useState=function(R){return H.H.useState(R)},ue.useSyncExternalStore=function(R,z,J){return H.H.useSyncExternalStore(R,z,J)},ue.useTransition=function(){return H.H.useTransition()},ue.version="19.2.4",ue}var p_;function pp(){return p_||(p_=1,wh.exports=Py()),wh.exports}var Ue=pp(),Dh={exports:{}},Yo={},Uh={exports:{}},Lh={};var m_;function zy(){return m_||(m_=1,(function(r){function t(P,G){var ct=P.length;P.push(G);t:for(;0<ct;){var mt=ct-1>>>1,Ct=P[mt];if(0<l(Ct,G))P[mt]=G,P[ct]=Ct,ct=mt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var G=P[0],ct=P.pop();if(ct!==G){P[0]=ct;t:for(var mt=0,Ct=P.length,R=Ct>>>1;mt<R;){var z=2*(mt+1)-1,J=P[z],ht=z+1,wt=P[ht];if(0>l(J,ct))ht<Ct&&0>l(wt,J)?(P[mt]=wt,P[ht]=ct,mt=ht):(P[mt]=J,P[z]=ct,mt=z);else if(ht<Ct&&0>l(wt,ct))P[mt]=wt,P[ht]=ct,mt=ht;else break t}}return G}function l(P,G){var ct=P.sortIndex-G.sortIndex;return ct!==0?ct:P.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(P){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=P)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function B(P){if(w=!1,L(P),!E)if(i(m)!==null)E=!0,I||(I=!0,et());else{var G=i(p);G!==null&&nt(B,G.startTime-P)}}var I=!1,H=-1,T=5,N=-1;function _t(){return M?!0:!(r.unstable_now()-N<T)}function k(){if(M=!1,I){var P=r.unstable_now();N=P;var G=!0;try{t:{E=!1,w&&(w=!1,D(H),H=-1),S=!0;var ct=g;try{e:{for(L(P),v=i(m);v!==null&&!(v.expirationTime>P&&_t());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,g=v.priorityLevel;var Ct=mt(v.expirationTime<=P);if(P=r.unstable_now(),typeof Ct=="function"){v.callback=Ct,L(P),G=!0;break e}v===i(m)&&s(m),L(P)}else s(m);v=i(m)}if(v!==null)G=!0;else{var R=i(p);R!==null&&nt(B,R.startTime-P),G=!1}}break t}finally{v=null,g=ct,S=!1}G=void 0}}finally{G?et():I=!1}}}var et;if(typeof U=="function")et=function(){U(k)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ot=at.port2;at.port1.onmessage=k,et=function(){ot.postMessage(null)}}else et=function(){y(k,0)};function nt(P,G){H=y(function(){P(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(P){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ct=g;g=G;try{return P()}finally{g=ct}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ct=g;g=P;try{return G()}finally{g=ct}},r.unstable_scheduleCallback=function(P,G,ct){var mt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?mt+ct:mt):ct=mt,P){case 1:var Ct=-1;break;case 2:Ct=250;break;case 5:Ct=1073741823;break;case 4:Ct=1e4;break;default:Ct=5e3}return Ct=ct+Ct,P={id:_++,callback:G,priorityLevel:P,startTime:ct,expirationTime:Ct,sortIndex:-1},ct>mt?(P.sortIndex=ct,t(p,P),i(m)===null&&P===i(p)&&(w?(D(H),H=-1):w=!0,nt(B,ct-mt))):(P.sortIndex=Ct,t(m,P),E||S||(E=!0,I||(I=!0,et()))),P},r.unstable_shouldYield=_t,r.unstable_wrapCallback=function(P){var G=g;return function(){var ct=g;g=G;try{return P.apply(this,arguments)}finally{g=ct}}}})(Lh)),Lh}var g_;function Iy(){return g_||(g_=1,Uh.exports=zy()),Uh.exports}var Nh={exports:{}},Ln={};var __;function Fy(){if(__)return Ln;__=1;var r=pp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Ln.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var v_;function By(){if(v_)return Nh.exports;v_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Nh.exports=Fy(),Nh.exports}var x_;function Hy(){if(x_)return Yo;x_=1;var r=Iy(),t=pp(),i=By();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=h;break}if(A===o){x=!0,o=u,a=h;break}A=A.sibling}if(!x){for(A=h.child;A;){if(A===a){x=!0,a=h,o=u;break}if(A===o){x=!0,o=h,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),_t=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case I:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var nt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},mt=[],Ct=-1;function R(e){return{current:e}}function z(e){0>Ct||(e.current=mt[Ct],mt[Ct]=null,Ct--)}function J(e,n){Ct++,mt[Ct]=e.current,e.current=n}var ht=R(null),wt=R(null),Z=R(null),rt=R(null);function xt(e,n){switch(J(Z,n),J(wt,e),J(ht,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?O0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=O0(n),e=P0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(ht),J(ht,e)}function Pt(){z(ht),z(wt),z(Z)}function Yt(e){e.memoizedState!==null&&J(rt,e);var n=ht.current,a=P0(n,e.type);n!==a&&(J(wt,e),J(ht,a))}function $t(e){wt.current===e&&(z(ht),z(wt)),rt.current===e&&(z(rt),Vo._currentValue=ct)}var fe,pe;function xe(e){if(fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);fe=n&&n[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fe+e+pe}var Ee=!1;function ee(e,n){if(!e||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ut){var st=ut}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ut){st=ut}e.call(Mt.prototype)}}else{try{throw Error()}catch(ut){st=ut}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ut){if(ut&&st&&typeof ut.stack=="string")return[ut.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],A=h[1];if(x&&A){var F=x.split(`
`),tt=A.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===tt.length)for(o=F.length-1,u=tt.length-1;1<=o&&0<=u&&F[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==tt[u]){var gt=`
`+F[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xe(a):""}function ke(e,n){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe("Lazy");case 13:return e.child!==n&&n!==null?xe("Suspense Fallback"):xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return xe("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=ke(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Fe=Object.prototype.hasOwnProperty,Me=r.unstable_scheduleCallback,Ae=r.unstable_cancelCallback,Gt=r.unstable_shouldYield,O=r.unstable_requestPaint,b=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,vt=r.unstable_UserBlockingPriority,dt=r.unstable_NormalPriority,bt=r.unstable_LowPriority,At=r.unstable_IdlePriority,Xt=r.log,Jt=r.unstable_setDisableYieldValue,Tt=null,Et=null;function Ft(e){if(typeof Xt=="function"&&Jt(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Tt,e)}catch{}}var Lt=Math.clz32?Math.clz32:W,Ut=Math.log,ie=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ut(e)/ie|0)|0}var Dt=256,yt=262144,Bt=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Rt(o):(x&=A,x!==0?u=Rt(x):a||(a=A&~e,a!==0&&(u=Rt(a))))):(A=o&~h,A!==0?u=Rt(A):x!==0?u=Rt(x):a||(a=o&~e,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function De(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function oe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function he(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ln(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,tt=e.hiddenUpdates;for(a=x&~a;0<a;){var gt=31-Lt(a),Mt=1<<gt;A[gt]=0,F[gt]=-1;var st=tt[gt];if(st!==null)for(tt[gt]=null,gt=0;gt<st.length;gt++){var ut=st[gt];ut!==null&&(ut.lane&=-536870913)}a&=~Mt}o!==0&&kn(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function kn(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Lt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function In(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Lt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ti(e,n){var a=n&-n;return a=(a&42)!==0?1:Ws(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fi(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:a_(e.type))}function Ys(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var Ri=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ri,_n="__reactProps$"+Ri,ea="__reactContainer$"+Ri,Ua="__reactEvents$"+Ri,vl="__reactListeners$"+Ri,xl="__reactHandles$"+Ri,Sl="__reactResources$"+Ri,ps="__reactMarker$"+Ri;function io(e){delete e[cn],delete e[_n],delete e[Ua],delete e[vl],delete e[xl]}function La(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ea]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=V0(e);e!==null;){if(a=e[cn])return a;e=V0(e)}return n}e=a,a=e.parentNode}return null}function Na(e){if(e=e[cn]||e[ea]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ms(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function C(e){var n=e[Sl];return n||(n=e[Sl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[ps]=!0}var lt=new Set,it={};function Q(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(it[e]=n,e=0;e<n.length;e++)lt.add(n[e])}var kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Zt={};function Qt(e){return Fe.call(Zt,e)?!0:Fe.call(It,e)?!1:kt.test(e)?Zt[e]=!0:(It[e]=!0,!1)}function re(e,n,a){if(Qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ce(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ne(e){if(!e._valueTracker){var n=Je(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function vn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Je(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fn=/[\n"\\]/g;function le(e){return e.replace(Fn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bn(e,n,a,o,u,h,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+me(n)):e.value!==""+me(n)&&(e.value=""+me(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Ci(e,x,me(n)):a!=null?Ci(e,x,me(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+me(A):e.removeAttribute("name")}function ei(e,n,a,o,u,h,x,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ne(e);return}a=a!=null?""+me(a):"",n=n!=null?""+me(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ne(e)}function Ci(e,n,a){n==="number"&&jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ni(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+me(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+me(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+me(a):""}function un(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(nt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=me(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ne(e)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var fn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wi(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||fn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function na(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wi(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&wi(e,h,n[h])}function js(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(e){return Dx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ia(){}var bu=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Ks=null;function Np(e){var n=Na(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(s(90));Bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&vn(o)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ni(e,!!a.multiple,n,!1)}}}var Au=!1;function Op(e,n,a){if(Au)return e(n,a);Au=!0;try{var o=e(n);return o}finally{if(Au=!1,(Zs!==null||Ks!==null)&&(lc(),Zs&&(n=Zs,e=Ks,Ks=Zs=null,Np(n),e)))for(n=0;n<e.length;n++)Np(e[n])}}function ao(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=!1;if(aa)try{var so={};Object.defineProperty(so,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Ru=!1}var Oa=null,Cu=null,Ml=null;function Pp(){if(Ml)return Ml;var e,n=Cu,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return Ml=u.slice(e,1<o?1-o:void 0)}function El(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function zp(){return!1}function Xn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?bl:zp,this.isPropagationStopped=zp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),n}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Xn(gs),ro=v({},gs,{view:0,detail:0}),Ux=Xn(ro),wu,Du,oo,Al=v({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(wu=e.screenX-oo.screenX,Du=e.screenY-oo.screenY):Du=wu=0,oo=e),wu)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),Ip=Xn(Al),Lx=v({},Al,{dataTransfer:0}),Nx=Xn(Lx),Ox=v({},ro,{relatedTarget:0}),Uu=Xn(Ox),Px=v({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=Xn(Px),Ix=v({},gs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fx=Xn(Ix),Bx=v({},gs,{data:0}),Fp=Xn(Bx),Hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vx[e])?!!n[e]:!1}function Lu(){return kx}var Xx=v({},ro,{key:function(e){if(e.key){var n=Hx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wx=Xn(Xx),qx=v({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Xn(qx),Yx=v({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),jx=Xn(Yx),Zx=v({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=Xn(Zx),Jx=v({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=Xn(Jx),$x=v({},gs,{newState:0,oldState:0}),tS=Xn($x),eS=[9,13,27,32],Nu=aa&&"CompositionEvent"in window,lo=null;aa&&"documentMode"in document&&(lo=document.documentMode);var nS=aa&&"TextEvent"in window&&!lo,Hp=aa&&(!Nu||lo&&8<lo&&11>=lo),Gp=" ",Vp=!1;function kp(e,n){switch(e){case"keyup":return eS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Js=!1;function iS(e,n){switch(e){case"compositionend":return Xp(n);case"keypress":return n.which!==32?null:(Vp=!0,Gp);case"textInput":return e=n.data,e===Gp&&Vp?null:e;default:return null}}function aS(e,n){if(Js)return e==="compositionend"||!Nu&&kp(e,n)?(e=Pp(),Ml=Cu=Oa=null,Js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hp&&n.locale!=="ko"?null:n.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sS[e.type]:n==="textarea"}function qp(e,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=mc(n,"onChange"),0<n.length&&(a=new Tl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var co=null,uo=null;function rS(e){C0(e,0)}function Rl(e){var n=ms(e);if(vn(n))return e}function Yp(e,n){if(e==="change")return n}var jp=!1;if(aa){var Ou;if(aa){var Pu="oninput"in document;if(!Pu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Pu=typeof Zp.oninput=="function"}Ou=Pu}else Ou=!1;jp=Ou&&(!document.documentMode||9<document.documentMode)}function Kp(){co&&(co.detachEvent("onpropertychange",Jp),uo=co=null)}function Jp(e){if(e.propertyName==="value"&&Rl(uo)){var n=[];qp(n,uo,e,Tu(e)),Op(rS,n)}}function oS(e,n,a){e==="focusin"?(Kp(),co=n,uo=a,co.attachEvent("onpropertychange",Jp)):e==="focusout"&&Kp()}function lS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(uo)}function cS(e,n){if(e==="click")return Rl(n)}function uS(e,n){if(e==="input"||e==="change")return Rl(n)}function fS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ii=typeof Object.is=="function"?Object.is:fS;function fo(e,n){if(ii(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Fe.call(n,u)||!ii(e[u],n[u]))return!1}return!0}function Qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $p(e,n){var a=Qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qp(a)}}function tm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function em(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=jt(e.document)}return n}function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var hS=aa&&"documentMode"in document&&11>=document.documentMode,Qs=null,Iu=null,ho=null,Fu=!1;function nm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||Qs==null||Qs!==jt(o)||(o=Qs,"selectionStart"in o&&zu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=mc(Iu,"onSelect"),0<o.length&&(n=new Tl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Qs)))}function _s(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var $s={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},Bu={},im={};aa&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function vs(e){if(Bu[e])return Bu[e];if(!$s[e])return e;var n=$s[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in im)return Bu[e]=n[a];return e}var am=vs("animationend"),sm=vs("animationiteration"),rm=vs("animationstart"),dS=vs("transitionrun"),pS=vs("transitionstart"),mS=vs("transitioncancel"),om=vs("transitionend"),lm=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function Di(e,n){lm.set(e,n),Q(n,[e])}var Cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mi=[],tr=0,Gu=0;function wl(){for(var e=tr,n=Gu=tr=0;n<e;){var a=mi[n];mi[n++]=null;var o=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var h=mi[n];if(mi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&cm(a,u,h)}}function Dl(e,n,a,o){mi[tr++]=e,mi[tr++]=n,mi[tr++]=a,mi[tr++]=o,Gu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Vu(e,n,a,o){return Dl(e,n,a,o),Ul(e)}function xs(e,n){return Dl(e,null,null,n),Ul(e)}function cm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Lt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Ul(e){if(50<Po)throw Po=0,Qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var er={};function gS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,n,a,o){return new gS(e,n,a,o)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,n){var a=e.alternate;return a===null?(a=ai(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function um(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ll(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")ku(e)&&(x=1);else if(typeof e=="string")x=yy(e,a,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=ai(31,a,n,u),e.elementType=N,e.lanes=h,e;case w:return Ss(a.children,u,h,n);case M:x=8,u|=24;break;case y:return e=ai(12,a,n,u|2),e.elementType=y,e.lanes=h,e;case B:return e=ai(13,a,n,u),e.elementType=B,e.lanes=h,e;case I:return e=ai(19,a,n,u),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case D:x=9;break t;case L:x=11;break t;case H:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ai(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Ss(e,n,a,o){return e=ai(7,e,o,n),e.lanes=a,e}function Xu(e,n,a){return e=ai(6,e,null,n),e.lanes=a,e}function fm(e){var n=ai(18,null,null,0);return n.stateNode=e,n}function Wu(e,n,a){return n=ai(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var hm=new WeakMap;function gi(e,n){if(typeof e=="object"&&e!==null){var a=hm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},hm.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var nr=[],ir=0,Nl=null,po=0,_i=[],vi=0,Pa=null,Bi=1,Hi="";function ra(e,n){nr[ir++]=po,nr[ir++]=Nl,Nl=e,po=n}function dm(e,n,a){_i[vi++]=Bi,_i[vi++]=Hi,_i[vi++]=Pa,Pa=e;var o=Bi;e=Hi;var u=32-Lt(o)-1;o&=~(1<<u),a+=1;var h=32-Lt(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Bi=1<<32-Lt(n)+u|a<<u|o,Hi=h+e}else Bi=1<<h|a<<u|o,Hi=e}function qu(e){e.return!==null&&(ra(e,1),dm(e,1,0))}function Yu(e){for(;e===Nl;)Nl=nr[--ir],nr[ir]=null,po=nr[--ir],nr[ir]=null;for(;e===Pa;)Pa=_i[--vi],_i[vi]=null,Hi=_i[--vi],_i[vi]=null,Bi=_i[--vi],_i[vi]=null}function pm(e,n){_i[vi++]=Bi,_i[vi++]=Hi,_i[vi++]=Pa,Bi=n.id,Hi=n.overflow,Pa=e}var Tn=null,Ze=null,we=!1,za=null,xi=!1,ju=Error(s(519));function Ia(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(gi(n,e)),ju}function mm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[_n]=o,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)Te(Io[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),ei(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),un(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||L0(n.textContent,a)?(o.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),o.onScroll!=null&&Te("scroll",n),o.onScrollEnd!=null&&Te("scrollend",n),o.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||Ia(e,!0)}function gm(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Tn=Tn.return}}function ar(e){if(e!==Tn)return!1;if(!we)return gm(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||dh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ia(e),gm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=G0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=G0(e)}else n===27?(n=Ze,Ja(e.type)?(e=vh,vh=null,Ze=e):Ze=n):Ze=Tn?yi(e.stateNode.nextSibling):null;return!0}function ys(){Ze=Tn=null,we=!1}function Zu(){var e=za;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),za=null),e}function mo(e){za===null?za=[e]:za.push(e)}var Ku=R(null),Ms=null,oa=null;function Fa(e,n,a){J(Ku,n._currentValue),n._currentValue=a}function la(e){e._currentValue=Ku.current,z(Ku)}function Ju(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var F=0;F<n.length;F++)if(A.context===n[F]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Ju(h.return,a,e),o||(x=null);break t}h=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),Ju(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function sr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;ii(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===rt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}u=u.return}e!==null&&Qu(n,e,a,o),n.flags|=262144}function Ol(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ms=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return _m(Ms,e)}function Pl(e,n){return Ms===null&&Es(e),_m(e,n)}function _m(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(s(308));oa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else oa=oa.next=n;return a}var _S=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vS=r.unstable_scheduleCallback,xS=r.unstable_NormalPriority,hn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new _S,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&vS(xS,function(){e.controller.abort()})}var _o=null,tf=0,rr=0,or=null;function SS(e,n){if(_o===null){var a=_o=[];tf=0,rr=ah(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return tf++,n.then(vm,vm),n}function vm(){if(--tf===0&&_o!==null){or!==null&&(or.status="fulfilled");var e=_o;_o=null,rr=0,or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var xm=P.S;P.S=function(e,n){n0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&SS(e,n),xm!==null&&xm(e,n)};var bs=R(null);function ef(){var e=bs.current;return e!==null?e:je.pooledCache}function zl(e,n){n===null?J(bs,bs.current):J(bs,n.pool)}function Sm(){var e=ef();return e===null?null:{parent:hn._currentValue,pool:e}}var lr=Error(s(460)),nf=Error(s(474)),Il=Error(s(542)),Fl={then:function(){}};function ym(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bm(e),e;default:if(typeof n.status=="string")n.then(ia,ia);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bm(e),e}throw As=n,lr}}function Ts(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,lr):a}}var As=null;function Em(){if(As===null)throw Error(s(459));var e=As;return As=null,e}function bm(e){if(e===lr||e===Il)throw Error(s(483))}var cr=null,vo=0;function Bl(e){var n=vo;return vo+=1,cr===null&&(cr=[]),Mm(cr,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Hl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Tm(e){function n(K,X){if(e){var $=K.deletions;$===null?(K.deletions=[X],K.flags|=16):$.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=sa(K,X),K.index=0,K.sibling=null,K}function h(K,X,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<X?(K.flags|=67108866,X):$):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,X,$,St){return X===null||X.tag!==6?(X=Xu($,K.mode,St),X.return=K,X):(X=u(X,$),X.return=K,X)}function F(K,X,$,St){var te=$.type;return te===w?gt(K,X,$.props.children,St,$.key):X!==null&&(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===T&&Ts(te)===X.type)?(X=u(X,$.props),xo(X,$),X.return=K,X):(X=Ll($.type,$.key,$.props,null,K.mode,St),xo(X,$),X.return=K,X)}function tt(K,X,$,St){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Wu($,K.mode,St),X.return=K,X):(X=u(X,$.children||[]),X.return=K,X)}function gt(K,X,$,St,te){return X===null||X.tag!==7?(X=Ss($,K.mode,St,te),X.return=K,X):(X=u(X,$),X.return=K,X)}function Mt(K,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Xu(""+X,K.mode,$),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return $=Ll(X.type,X.key,X.props,null,K.mode,$),xo($,X),$.return=K,$;case E:return X=Wu(X,K.mode,$),X.return=K,X;case T:return X=Ts(X),Mt(K,X,$)}if(nt(X)||et(X))return X=Ss(X,K.mode,$,null),X.return=K,X;if(typeof X.then=="function")return Mt(K,Bl(X),$);if(X.$$typeof===U)return Mt(K,Pl(K,X),$);Hl(K,X)}return null}function st(K,X,$,St){var te=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return te!==null?null:A(K,X,""+$,St);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===te?F(K,X,$,St):null;case E:return $.key===te?tt(K,X,$,St):null;case T:return $=Ts($),st(K,X,$,St)}if(nt($)||et($))return te!==null?null:gt(K,X,$,St,null);if(typeof $.then=="function")return st(K,X,Bl($),St);if($.$$typeof===U)return st(K,X,Pl(K,$),St);Hl(K,$)}return null}function ut(K,X,$,St,te){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return K=K.get($)||null,A(X,K,""+St,te);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case S:return K=K.get(St.key===null?$:St.key)||null,F(X,K,St,te);case E:return K=K.get(St.key===null?$:St.key)||null,tt(X,K,St,te);case T:return St=Ts(St),ut(K,X,$,St,te)}if(nt(St)||et(St))return K=K.get($)||null,gt(X,K,St,te,null);if(typeof St.then=="function")return ut(K,X,$,Bl(St),te);if(St.$$typeof===U)return ut(K,X,$,Pl(X,St),te);Hl(X,St)}return null}function qt(K,X,$,St){for(var te=null,Oe=null,Kt=X,ge=X=0,Ce=null;Kt!==null&&ge<$.length;ge++){Kt.index>ge?(Ce=Kt,Kt=null):Ce=Kt.sibling;var Pe=st(K,Kt,$[ge],St);if(Pe===null){Kt===null&&(Kt=Ce);break}e&&Kt&&Pe.alternate===null&&n(K,Kt),X=h(Pe,X,ge),Oe===null?te=Pe:Oe.sibling=Pe,Oe=Pe,Kt=Ce}if(ge===$.length)return a(K,Kt),we&&ra(K,ge),te;if(Kt===null){for(;ge<$.length;ge++)Kt=Mt(K,$[ge],St),Kt!==null&&(X=h(Kt,X,ge),Oe===null?te=Kt:Oe.sibling=Kt,Oe=Kt);return we&&ra(K,ge),te}for(Kt=o(Kt);ge<$.length;ge++)Ce=ut(Kt,K,ge,$[ge],St),Ce!==null&&(e&&Ce.alternate!==null&&Kt.delete(Ce.key===null?ge:Ce.key),X=h(Ce,X,ge),Oe===null?te=Ce:Oe.sibling=Ce,Oe=Ce);return e&&Kt.forEach(function(ns){return n(K,ns)}),we&&ra(K,ge),te}function ne(K,X,$,St){if($==null)throw Error(s(151));for(var te=null,Oe=null,Kt=X,ge=X=0,Ce=null,Pe=$.next();Kt!==null&&!Pe.done;ge++,Pe=$.next()){Kt.index>ge?(Ce=Kt,Kt=null):Ce=Kt.sibling;var ns=st(K,Kt,Pe.value,St);if(ns===null){Kt===null&&(Kt=Ce);break}e&&Kt&&ns.alternate===null&&n(K,Kt),X=h(ns,X,ge),Oe===null?te=ns:Oe.sibling=ns,Oe=ns,Kt=Ce}if(Pe.done)return a(K,Kt),we&&ra(K,ge),te;if(Kt===null){for(;!Pe.done;ge++,Pe=$.next())Pe=Mt(K,Pe.value,St),Pe!==null&&(X=h(Pe,X,ge),Oe===null?te=Pe:Oe.sibling=Pe,Oe=Pe);return we&&ra(K,ge),te}for(Kt=o(Kt);!Pe.done;ge++,Pe=$.next())Pe=ut(Kt,K,ge,Pe.value,St),Pe!==null&&(e&&Pe.alternate!==null&&Kt.delete(Pe.key===null?ge:Pe.key),X=h(Pe,X,ge),Oe===null?te=Pe:Oe.sibling=Pe,Oe=Pe);return e&&Kt.forEach(function(Ly){return n(K,Ly)}),we&&ra(K,ge),te}function qe(K,X,$,St){if(typeof $=="object"&&$!==null&&$.type===w&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var te=$.key;X!==null;){if(X.key===te){if(te=$.type,te===w){if(X.tag===7){a(K,X.sibling),St=u(X,$.props.children),St.return=K,K=St;break t}}else if(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===T&&Ts(te)===X.type){a(K,X.sibling),St=u(X,$.props),xo(St,$),St.return=K,K=St;break t}a(K,X);break}else n(K,X);X=X.sibling}$.type===w?(St=Ss($.props.children,K.mode,St,$.key),St.return=K,K=St):(St=Ll($.type,$.key,$.props,null,K.mode,St),xo(St,$),St.return=K,K=St)}return x(K);case E:t:{for(te=$.key;X!==null;){if(X.key===te)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(K,X.sibling),St=u(X,$.children||[]),St.return=K,K=St;break t}else{a(K,X);break}else n(K,X);X=X.sibling}St=Wu($,K.mode,St),St.return=K,K=St}return x(K);case T:return $=Ts($),qe(K,X,$,St)}if(nt($))return qt(K,X,$,St);if(et($)){if(te=et($),typeof te!="function")throw Error(s(150));return $=te.call($),ne(K,X,$,St)}if(typeof $.then=="function")return qe(K,X,Bl($),St);if($.$$typeof===U)return qe(K,X,Pl(K,$),St);Hl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(K,X.sibling),St=u(X,$),St.return=K,K=St):(a(K,X),St=Xu($,K.mode,St),St.return=K,K=St),x(K)):a(K,X)}return function(K,X,$,St){try{vo=0;var te=qe(K,X,$,St);return cr=null,te}catch(Kt){if(Kt===lr||Kt===Il)throw Kt;var Oe=ai(29,Kt,null,K.mode);return Oe.lanes=St,Oe.return=K,Oe}}}var Rs=Tm(!0),Am=Tm(!1),Ba=!1;function af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ul(e),cm(e,null,a),n}return Dl(e,o,n,a),Ul(e)}function So(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,In(e,a)}}function rf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var of=!1;function yo(){if(of){var e=or;if(e!==null)throw e}}function Mo(e,n,a,o){of=!1;var u=e.updateQueue;Ba=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,tt=F.next;F.next=null,x===null?h=tt:x.next=tt,x=F;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,A=gt.lastBaseUpdate,A!==x&&(A===null?gt.firstBaseUpdate=tt:A.next=tt,gt.lastBaseUpdate=F))}if(h!==null){var Mt=u.baseState;x=0,gt=tt=F=null,A=h;do{var st=A.lane&-536870913,ut=st!==A.lane;if(ut?(Re&st)===st:(o&st)===st){st!==0&&st===rr&&(of=!0),gt!==null&&(gt=gt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var qt=e,ne=A;st=n;var qe=a;switch(ne.tag){case 1:if(qt=ne.payload,typeof qt=="function"){Mt=qt.call(qe,Mt,st);break t}Mt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=ne.payload,st=typeof qt=="function"?qt.call(qe,Mt,st):qt,st==null)break t;Mt=v({},Mt,st);break t;case 2:Ba=!0}}st=A.callback,st!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[st]:ut.push(st))}else ut={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},gt===null?(tt=gt=ut,F=Mt):gt=gt.next=ut,x|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);gt===null&&(F=Mt),u.baseState=F,u.firstBaseUpdate=tt,u.lastBaseUpdate=gt,h===null&&(u.shared.lanes=0),qa|=x,e.lanes=x,e.memoizedState=Mt}}function Rm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Cm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Rm(a[e],n)}var ur=R(null),Gl=R(0);function wm(e,n){e=_a,J(Gl,e),J(ur,n),_a=e|n.baseLanes}function lf(){J(Gl,_a),J(ur,ur.current)}function cf(){_a=Gl.current,z(ur),z(Gl)}var si=R(null),Si=null;function Va(e){var n=e.alternate;J(rn,rn.current&1),J(si,e),Si===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(Si=e)}function uf(e){J(rn,rn.current),J(si,e),Si===null&&(Si=e)}function Dm(e){e.tag===22?(J(rn,rn.current),J(si,e),Si===null&&(Si=e)):ka()}function ka(){J(rn,rn.current),J(si,si.current)}function ri(e){z(si),Si===e&&(Si=null),z(rn)}var rn=R(0);function Vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||gh(a)||_h(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,de=null,Xe=null,dn=null,kl=!1,fr=!1,Cs=!1,Xl=0,Eo=0,hr=null,MS=0;function nn(){throw Error(s(321))}function ff(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ii(e[a],n[a]))return!1;return!0}function hf(e,n,a,o,u,h){return ca=h,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?dg:Rf,Cs=!1,h=a(o,u),Cs=!1,fr&&(h=Lm(n,a,o,u)),Um(e),h}function Um(e){P.H=Ao;var n=Xe!==null&&Xe.next!==null;if(ca=0,dn=Xe=de=null,kl=!1,Eo=0,hr=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&Ol(e)&&(pn=!0))}function Lm(e,n,a,o){de=e;var u=0;do{if(fr&&(hr=null),Eo=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,dn=Xe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=pg,h=n(a,o)}while(fr);return h}function ES(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?bo(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(de.flags|=1024),n}function df(){var e=Xl!==0;return Xl=0,e}function pf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function mf(e){if(kl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}kl=!1}ca=0,dn=Xe=de=null,fr=!1,Eo=Xl=0,hr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?de.memoizedState=dn=e:dn=dn.next=e,dn}function on(){if(Xe===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=dn===null?de.memoizedState:dn.next;if(n!==null)dn=n,Xe=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},dn===null?de.memoizedState=dn=e:dn=dn.next=e}return dn}function Wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(e){var n=Eo;return Eo+=1,hr===null&&(hr=[]),e=Mm(hr,e,n),n=de,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?dg:Rf),e}function ql(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bo(e);if(e.$$typeof===U)return An(e)}throw Error(s(438,String(e)))}function gf(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Wl(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=_t;return n.index++,a}function ua(e,n){return typeof n=="function"?n(e):n}function Yl(e){var n=on();return _f(n,Xe,e)}function _f(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=x=null,F=null,tt=n,gt=!1;do{var Mt=tt.lane&-536870913;if(Mt!==tt.lane?(Re&Mt)===Mt:(ca&Mt)===Mt){var st=tt.revertLane;if(st===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),Mt===rr&&(gt=!0);else if((ca&st)===st){tt=tt.next,st===rr&&(gt=!0);continue}else Mt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(A=F=Mt,x=h):F=F.next=Mt,de.lanes|=st,qa|=st;Mt=tt.action,Cs&&a(h,Mt),h=tt.hasEagerState?tt.eagerState:a(h,Mt)}else st={lane:Mt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(A=F=st,x=h):F=F.next=st,de.lanes|=Mt,qa|=Mt;tt=tt.next}while(tt!==null&&tt!==n);if(F===null?x=h:F.next=A,!ii(h,e.memoizedState)&&(pn=!0,gt&&(a=or,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function vf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);ii(h,n.memoizedState)||(pn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Nm(e,n,a){var o=de,u=on(),h=we;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ii((Xe||u).memoizedState,a);if(x&&(u.memoizedState=a,pn=!0),u=u.queue,yf(zm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,dr(9,{destroy:void 0},Pm.bind(null,o,u,a,n),null),je===null)throw Error(s(349));h||(ca&127)!==0||Om(o,n,a)}return a}function Om(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Wl(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Pm(e,n,a,o){n.value=a,n.getSnapshot=o,Im(n)&&Fm(e)}function zm(e,n,a){return a(function(){Im(n)&&Fm(e)})}function Im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ii(e,a)}catch{return!0}}function Fm(e){var n=xs(e,2);n!==null&&Zn(n,e,2)}function xf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Cs){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},n}function Bm(e,n,a,o){return e.baseState=a,_f(e,Xe,typeof o=="function"?o:ua)}function bS(e,n,a,o,u){if(Kl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Hm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Hm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=P.T,x={};P.T=x;try{var A=a(u,o),F=P.S;F!==null&&F(x,A),Gm(e,n,A)}catch(tt){Sf(e,n,tt)}finally{h!==null&&x.types!==null&&(h.types=x.types),P.T=h}}else try{h=a(u,o),Gm(e,n,h)}catch(tt){Sf(e,n,tt)}}function Gm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Vm(e,n,o)},function(o){return Sf(e,n,o)}):Vm(e,n,a)}function Vm(e,n,a){n.status="fulfilled",n.value=a,km(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Hm(e,a)))}function Sf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,km(n),n=n.next;while(n!==o)}e.action=null}function km(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Xm(e,n){return n}function Wm(e,n){if(we){var a=je.formState;if(a!==null){t:{var o=de;if(we){if(Ze){e:{for(var u=Ze,h=xi;u.nodeType!==8;){if(!h){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ze=yi(u.nextSibling),o=u.data==="F!";break t}}Ia(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:n},a.queue=o,a=ug.bind(null,de,o),o.dispatch=a,o=xf(!1),h=Af.bind(null,de,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=bS.bind(null,de,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function qm(e){var n=on();return Ym(n,Xe,e)}function Ym(e,n,a){if(n=_f(e,n,Xm)[0],e=Yl(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=bo(n)}catch(x){throw x===lr?Il:x}else o=n;n=on();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,dr(9,{destroy:void 0},TS.bind(null,u,a),null)),[o,h,e]}function TS(e,n){e.action=n}function jm(e){var n=on(),a=Xe;if(a!==null)return Ym(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function dr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=Wl(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Zm(){return on().memoizedState}function jl(e,n,a,o){var u=Gn();de.flags|=e,u.memoizedState=dr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Zl(e,n,a,o){var u=on();o=o===void 0?null:o;var h=u.memoizedState.inst;Xe!==null&&o!==null&&ff(o,Xe.memoizedState.deps)?u.memoizedState=dr(n,h,a,o):(de.flags|=e,u.memoizedState=dr(1|n,h,a,o))}function Km(e,n){jl(8390656,8,e,n)}function yf(e,n){Zl(2048,8,e,n)}function AS(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=Wl(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Jm(e){var n=on().memoizedState;return AS({ref:n,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Qm(e,n){return Zl(4,2,e,n)}function $m(e,n){return Zl(4,4,e,n)}function tg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function eg(e,n,a){a=a!=null?a.concat([e]):null,Zl(4,4,tg.bind(null,n,e),a)}function Mf(){}function ng(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ff(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function ig(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ff(n,o[1]))return o[0];if(o=e(),Cs){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o}function Ef(e,n,a){return a===void 0||(ca&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=a0(),de.lanes|=e,qa|=e,a)}function ag(e,n,a,o){return ii(a,n)?a:ur.current!==null?(e=Ef(e,a,o),ii(e,n)||(pn=!0),e):(ca&42)===0||(ca&1073741824)!==0&&(Re&261930)===0?(pn=!0,e.memoizedState=a):(e=a0(),de.lanes|=e,qa|=e,n)}function sg(e,n,a,o,u){var h=G.p;G.p=h!==0&&8>h?h:8;var x=P.T,A={};P.T=A,Af(e,!1,n,a);try{var F=u(),tt=P.S;if(tt!==null&&tt(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var gt=yS(F,o);To(e,n,gt,ci(e))}else To(e,n,o,ci(e))}catch(Mt){To(e,n,{then:function(){},status:"rejected",reason:Mt},ci())}finally{G.p=h,x!==null&&A.types!==null&&(x.types=A.types),P.T=x}}function RS(){}function bf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=rg(e).queue;sg(e,u,n,ct,a===null?RS:function(){return og(e),a(o)})}function rg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ct},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function og(e){var n=rg(e);n.next===null&&(n=e.alternate.memoizedState),To(e,n.next.queue,{},ci())}function Tf(){return An(Vo)}function lg(){return on().memoizedState}function cg(){return on().memoizedState}function CS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();e=Ha(a);var o=Ga(n,e,a);o!==null&&(Zn(o,n,a),So(o,n,a)),n={cache:$u()},e.payload=n;return}n=n.return}}function wS(e,n,a){var o=ci();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Kl(e)?fg(n,a):(a=Vu(e,n,a,o),a!==null&&(Zn(a,e,o),hg(a,n,o)))}function ug(e,n,a){var o=ci();To(e,n,a,o)}function To(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Kl(e))fg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,A=h(x,a);if(u.hasEagerState=!0,u.eagerState=A,ii(A,x))return Dl(e,n,u,0),je===null&&wl(),!1}catch{}if(a=Vu(e,n,u,o),a!==null)return Zn(a,e,o),hg(a,n,o),!0}return!1}function Af(e,n,a,o){if(o={lane:2,revertLane:ah(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Kl(e)){if(n)throw Error(s(479))}else n=Vu(e,a,o,2),n!==null&&Zn(n,e,2)}function Kl(e){var n=e.alternate;return e===de||n!==null&&n===de}function fg(e,n){fr=kl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function hg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,In(e,a)}}var Ao={readContext:An,use:ql,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Ao.useEffectEvent=nn;var dg={readContext:An,use:ql,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Km,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,jl(4194308,4,tg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return jl(4194308,4,e,n)},useInsertionEffect:function(e,n){jl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(Cs){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Cs){Ft(!0);try{a(n)}finally{Ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=wS.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=xf(e);var n=e.queue,a=ug.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Mf,useDeferredValue:function(e,n){var a=Gn();return Ef(a,e,n)},useTransition:function(){var e=xf(!1);return e=sg.bind(null,de,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=Gn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(Re&127)!==0||Om(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Km(zm.bind(null,o,h,e),[e]),o.flags|=2048,dr(9,{destroy:void 0},Pm.bind(null,o,h,a,n),null),a},useId:function(){var e=Gn(),n=je.identifierPrefix;if(we){var a=Hi,o=Bi;a=(o&~(1<<32-Lt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=MS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Tf,useFormState:Wm,useActionState:Wm,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Af.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:gf,useCacheRefresh:function(){return Gn().memoizedState=CS.bind(null,de)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Rf={readContext:An,use:ql,useCallback:ng,useContext:An,useEffect:yf,useImperativeHandle:eg,useInsertionEffect:Qm,useLayoutEffect:$m,useMemo:ig,useReducer:Yl,useRef:Zm,useState:function(){return Yl(ua)},useDebugValue:Mf,useDeferredValue:function(e,n){var a=on();return ag(a,Xe.memoizedState,e,n)},useTransition:function(){var e=Yl(ua)[0],n=on().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:Nm,useId:lg,useHostTransitionStatus:Tf,useFormState:qm,useActionState:qm,useOptimistic:function(e,n){var a=on();return Bm(a,Xe,e,n)},useMemoCache:gf,useCacheRefresh:cg};Rf.useEffectEvent=Jm;var pg={readContext:An,use:ql,useCallback:ng,useContext:An,useEffect:yf,useImperativeHandle:eg,useInsertionEffect:Qm,useLayoutEffect:$m,useMemo:ig,useReducer:vf,useRef:Zm,useState:function(){return vf(ua)},useDebugValue:Mf,useDeferredValue:function(e,n){var a=on();return Xe===null?Ef(a,e,n):ag(a,Xe.memoizedState,e,n)},useTransition:function(){var e=vf(ua)[0],n=on().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:Nm,useId:lg,useHostTransitionStatus:Tf,useFormState:jm,useActionState:jm,useOptimistic:function(e,n){var a=on();return Xe!==null?Bm(a,Xe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:gf,useCacheRefresh:cg};pg.useEffectEvent=Jm;function Cf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var wf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ci(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(Zn(n,e,o),So(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ci(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(Zn(n,e,o),So(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ci(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Ga(e,o,a),n!==null&&(Zn(n,e,a),So(n,e,a))}};function mg(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,h):!0}function gg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&wf.enqueueReplaceState(n,n.state,null)}function ws(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function _g(e){Cl(e)}function vg(e){console.error(e)}function xg(e){Cl(e)}function Jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Sg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Df(e,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Jl(e,n)},a}function yg(e){return e=Ha(e),e.tag=3,e}function Mg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Sg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Sg(n,a,o),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function DS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?cc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Fl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),eh(e,o,u)),!1;case 22:return a.flags|=65536,o===Fl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),eh(e,o,u)),!1}throw Error(s(435,a.tag))}return eh(e,o,u),cc(),!1}if(we)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ju&&(e=Error(s(422),{cause:o}),mo(gi(e,a)))):(o!==ju&&(n=Error(s(423),{cause:o}),mo(gi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=gi(o,a),u=Df(e.stateNode,o,u),rf(e,u),an!==4&&(an=2)),!1;var h=Error(s(520),{cause:o});if(h=gi(h,a),Oo===null?Oo=[h]:Oo.push(h),an!==4&&(an=2),n===null)return!0;o=gi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Df(a.stateNode,o,e),rf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ya===null||!Ya.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=yg(u),Mg(u,e,a,o),rf(a,u),!1}a=a.return}while(a!==null);return!1}var Uf=Error(s(461)),pn=!1;function Rn(e,n,a,o){n.child=e===null?Am(n,null,a,o):Rs(n,e.child,a,o)}function Eg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Es(n),o=hf(e,n,a,x,h,u),A=df(),e!==null&&!pn?(pf(e,n,u),fa(e,n,u)):(we&&A&&qu(n),n.flags|=1,Rn(e,n,o,u),n.child)}function bg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!ku(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Tg(e,n,h,o,u)):(e=Ll(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Bf(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(x,o)&&e.ref===n.ref)return fa(e,n,u)}return n.flags|=1,e=sa(h,o),e.ref=n.ref,e.return=n,n.child=e}function Tg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(fo(h,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=h,Bf(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,fa(e,n,u)}return Lf(e,n,a,o,u)}function Ag(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Rg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&zl(n,h!==null?h.cachePool:null),h!==null?wm(n,h):lf(),Dm(n);else return o=n.lanes=536870912,Rg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(zl(n,h.cachePool),wm(n,h),ka(),n.memoizedState=null):(e!==null&&zl(n,null),lf(),ka());return Rn(e,n,u,a),n.child}function Ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rg(e,n,a,o,u){var h=ef();return h=h===null?null:{parent:hn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&zl(n,null),lf(),Dm(n),e!==null&&sr(e,n,o,!0),n.childLanes=u,null}function Ql(e,n){return n=tc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Cg(e,n,a){return Rs(n,e.child,null,a),e=Ql(n,n.pendingProps),e.flags|=2,ri(n),n.memoizedState=null,e}function US(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=Ql(n,o),n.lanes=536870912,Ro(null,e);if(uf(n),(e=Ze)?(e=H0(e,xi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Bi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=fm(e),a.return=n,n.child=a,Tn=n,Ze=null)):e=null,e===null)throw Ia(n);return n.lanes=536870912,null}return Ql(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(uf(n),u)if(n.flags&256)n.flags&=-257,n=Cg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||sr(e,n,a,!1),u=(a&e.childLanes)!==0,pn||u){if(o=je,o!==null&&(x=ti(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,xs(e,x),Zn(o,e,x),Uf;cc(),n=Cg(e,n,a)}else e=h.treeContext,Ze=yi(x.nextSibling),Tn=n,we=!0,za=null,xi=!1,e!==null&&pm(n,e),n=Ql(n,o),n.flags|=4096;return n}return e=sa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function $l(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Lf(e,n,a,o,u){return Es(n),a=hf(e,n,a,o,void 0,u),o=df(),e!==null&&!pn?(pf(e,n,u),fa(e,n,u)):(we&&o&&qu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function wg(e,n,a,o,u,h){return Es(n),n.updateQueue=null,a=Lm(n,o,a,u),Um(e),o=df(),e!==null&&!pn?(pf(e,n,h),fa(e,n,h)):(we&&o&&qu(n),n.flags|=1,Rn(e,n,a,h),n.child)}function Dg(e,n,a,o,u){if(Es(n),n.stateNode===null){var h=er,x=a.contextType;typeof x=="object"&&x!==null&&(h=An(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=wf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},af(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?An(x):er,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Cf(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&wf.enqueueReplaceState(h,h.state,null),Mo(n,o,h,u),yo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,F=ws(a,A);h.props=F;var tt=h.context,gt=a.contextType;x=er,typeof gt=="object"&&gt!==null&&(x=An(gt));var Mt=a.getDerivedStateFromProps;gt=typeof Mt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,gt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||tt!==x)&&gg(n,h,o,x),Ba=!1;var st=n.memoizedState;h.state=st,Mo(n,o,h,u),yo(),tt=n.memoizedState,A||st!==tt||Ba?(typeof Mt=="function"&&(Cf(n,a,Mt,o),tt=n.memoizedState),(F=Ba||mg(n,a,F,o,st,tt,x))?(gt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),h.props=o,h.state=tt,h.context=x,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,sf(e,n),x=n.memoizedProps,gt=ws(a,x),h.props=gt,Mt=n.pendingProps,st=h.context,tt=a.contextType,F=er,typeof tt=="object"&&tt!==null&&(F=An(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==Mt||st!==F)&&gg(n,h,o,F),Ba=!1,st=n.memoizedState,h.state=st,Mo(n,o,h,u),yo();var ut=n.memoizedState;x!==Mt||st!==ut||Ba||e!==null&&e.dependencies!==null&&Ol(e.dependencies)?(typeof A=="function"&&(Cf(n,a,A,o),ut=n.memoizedState),(gt=Ba||mg(n,a,gt,o,st,ut,F)||e!==null&&e.dependencies!==null&&Ol(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=F,o=gt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,$l(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Rs(n,e.child,null,u),n.child=Rs(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=fa(e,n,u),e}function Ug(e,n,a,o){return ys(),n.flags|=256,Rn(e,n,a,o),n.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Of(e){return{baseLanes:e,cachePool:Sm()}}function Pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function Lg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Va(n):ka(),(e=Ze)?(e=H0(e,xi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Bi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=fm(e),a.return=n,n.child=a,Tn=n,Ze=null)):e=null,e===null)throw Ia(n);return _h(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(ka(),u=n.mode,A=tc({mode:"hidden",children:A},u),o=Ss(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Of(a),o.childLanes=Pf(e,x,a),n.memoizedState=Nf,Ro(null,o)):(Va(n),zf(n,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(h)n.flags&256?(Va(n),n.flags&=-257,n=If(e,n,a)):n.memoizedState!==null?(ka(),n.child=e.child,n.flags|=128,n=null):(ka(),A=o.fallback,u=n.mode,o=tc({mode:"visible",children:o.children},u),A=Ss(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Rs(n,e.child,null,a),o=n.child,o.memoizedState=Of(a),o.childLanes=Pf(e,x,a),n.memoizedState=Nf,n=Ro(null,o));else if(Va(n),_h(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var tt=x.dgst;x=tt,o=Error(s(419)),o.stack="",o.digest=x,mo({value:o,source:null,stack:null}),n=If(e,n,a)}else if(pn||sr(e,n,a,!1),x=(a&e.childLanes)!==0,pn||x){if(x=je,x!==null&&(o=ti(x,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,xs(e,o),Zn(x,e,o),Uf;gh(A)||cc(),n=If(e,n,a)}else gh(A)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Ze=yi(A.nextSibling),Tn=n,we=!0,za=null,xi=!1,e!==null&&pm(n,e),n=zf(n,o.children),n.flags|=4096);return n}return u?(ka(),A=o.fallback,u=n.mode,F=e.child,tt=F.sibling,o=sa(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,tt!==null?A=sa(tt,A):(A=Ss(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Ro(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Of(a):(u=A.cachePool,u!==null?(F=hn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Sm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Pf(e,x,a),n.memoizedState=Nf,Ro(e.child,o)):(Va(n),a=e.child,e=a.sibling,a=sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function zf(e,n){return n=tc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function tc(e,n){return e=ai(22,e,null,n),e.lanes=0,e}function If(e,n,a){return Rs(n,e.child,null,a),e=zf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ng(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ju(e.return,n,a)}function Ff(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function Og(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=rn.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,J(rn,x),Rn(e,n,o,a),o=we?po:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ng(e,a,n);else if(e.tag===19)Ng(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Vl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ff(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Vl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ff(n,!0,a,null,h,o);break;case"together":Ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function fa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(sr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=sa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=sa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ol(e)))}function LS(e,n,a){switch(n.tag){case 3:xt(n,n.stateNode.containerInfo),Fa(n,hn,e.memoizedState.cache),ys();break;case 27:case 5:Yt(n);break;case 4:xt(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Lg(e,n,a):(Va(n),e=fa(e,n,a),e!==null?e.sibling:null);Va(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Og(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),J(rn,rn.current),o)break;return null;case 22:return n.lanes=0,Ag(e,n,a,n.pendingProps);case 24:Fa(n,hn,e.memoizedState.cache)}return fa(e,n,a)}function Pg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!Bf(e,a)&&(n.flags&128)===0)return pn=!1,LS(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,we&&(n.flags&1048576)!==0&&dm(n,po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ts(n.elementType),n.type=e,typeof e=="function")ku(e)?(o=ws(e,o),n.tag=1,n=Dg(null,n,e,o,a)):(n.tag=0,n=Lf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=Eg(null,n,e,o,a);break t}else if(u===H){n.tag=14,n=bg(null,n,e,o,a);break t}}throw n=ot(e)||e,Error(s(306,n,""))}}return n;case 0:return Lf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ws(o,n.pendingProps),Dg(e,n,o,u,a);case 3:t:{if(xt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,sf(e,n),Mo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Fa(n,hn,o),o!==h.cache&&Qu(n,[hn],a,!0),yo(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Ug(e,n,o,a);break t}else if(o!==u){u=gi(Error(s(424)),n),mo(u),n=Ug(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=yi(e.firstChild),Tn=n,we=!0,za=null,xi=!0,a=Am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),o===u){n=fa(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return $l(e,n),e===null?(a=q0(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=gc(Z.current).createElement(a),o[cn]=n,o[_n]=e,Cn(o,a,e),q(o),n.stateNode=o):n.memoizedState=q0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yt(n),e===null&&we&&(o=n.stateNode=k0(n.type,n.pendingProps,Z.current),Tn=n,xi=!0,u=Ze,Ja(n.type)?(vh=u,Ze=yi(o.firstChild)):Ze=u),Rn(e,n,n.pendingProps.children,a),$l(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Ze)&&(o=ly(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Tn=n,Ze=yi(o.firstChild),xi=!1,u=!0):u=!1),u||Ia(n)),Yt(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,dh(u,h)?o=null:x!==null&&dh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=hf(e,n,ES,null,null,a),Vo._currentValue=u),$l(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Ze)&&(a=cy(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Tn=n,Ze=null,e=!0):e=!1),e||Ia(n)),null;case 13:return Lg(e,n,a);case 4:return xt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Rs(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return Eg(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Es(n),u=An(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return bg(e,n,n.type,n.pendingProps,a);case 15:return Tg(e,n,n.type,n.pendingProps,a);case 19:return Og(e,n,a);case 31:return US(e,n,a);case 22:return Ag(e,n,a,n.pendingProps);case 24:return Es(n),o=An(hn),e===null?(u=ef(),u===null&&(u=je,h=$u(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},af(n),Fa(n,hn,u)):((e.lanes&a)!==0&&(sf(e,n),Mo(n,null,null,a),yo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,hn,o)):(o=h.cache,Fa(n,hn,o),o!==u.cache&&Qu(n,[hn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(e){e.flags|=4}function Hf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(l0())e.flags|=8192;else throw As=Fl,nf}else e.flags&=-16777217}function zg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!J0(n))if(l0())e.flags|=8192;else throw As=Fl,nf}function ec(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?De():536870912,e.lanes|=n,_r|=n)}function Co(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function NS(e,n,a){var o=n.pendingProps;switch(Yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),la(hn),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ar(n)?ha(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zu())),Ke(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ha(n),h!==null?(Ke(n),zg(n,h)):(Ke(n),Hf(n,u,null,o,a))):h?h!==e.memoizedState?(ha(n),Ke(n),zg(n,h)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ha(n),Ke(n),Hf(n,u,e,o,a)),null;case 27:if($t(n),a=Z.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=ht.current,ar(n)?mm(n):(e=k0(u,o,a),n.stateNode=e,ha(n))}return Ke(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(h=ht.current,ar(n))mm(n);else{var x=gc(Z.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[cn]=n,h[_n]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(Cn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ha(n)}}return Ke(n),Hf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Z.current,ar(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||L0(e.nodeValue,a)),e||Ia(n,!0)}else e=gc(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ar(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ec(n,n.updateQueue),Ke(n),null);case 4:return Pt(),e===null&&lh(n.stateNode.containerInfo),Ke(n),null;case 10:return la(n.type),Ke(n),null;case 19:if(z(rn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Co(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Vl(e),h!==null){for(n.flags|=128,Co(o,!1),e=h.updateQueue,n.updateQueue=e,ec(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)um(a,e),a=a.sibling;return J(rn,rn.current&1|2),we&&ra(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>rc&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304)}else{if(!u)if(e=Vl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ec(n,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!we)return Ke(n),null}else 2*b()-o.renderingStartTime>rc&&a!==536870912&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=rn.current,J(rn,u?a&1|2:a&1),we&&ra(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ri(n),cf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&ec(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&z(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(hn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function OS(e,n){switch(Yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return la(hn),Pt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ri(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(rn),null;case 4:return Pt(),null;case 10:return la(n.type),null;case 22:case 23:return ri(n),cf(),e!==null&&z(bs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return la(hn),null;case 25:return null;default:return null}}function Ig(e,n){switch(Yu(n),n.tag){case 3:la(hn),Pt();break;case 26:case 27:case 5:$t(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:z(rn);break;case 10:la(n.type);break;case 22:case 23:ri(n),cf(),e!==null&&z(bs);break;case 24:la(hn)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Xa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var F=a,tt=A;try{tt()}catch(gt){Ge(u,F,gt)}}}o=o.next}while(o!==h)}}catch(gt){Ge(n,n.return,gt)}}function Fg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Cm(n,a)}catch(o){Ge(e,e.return,o)}}}function Bg(e,n,a){a.props=ws(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Do(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Gi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function Hg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Gf(e,n,a){try{var o=e.stateNode;ny(o,e.type,a,n),o[_n]=n}catch(u){Ge(e,e.return,u)}}function Gg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function Vf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Gg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(kf(e,n,a),e=e.sibling;e!==null;)kf(e,n,a),e=e.sibling}function nc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(nc(e,n,a),e=e.sibling;e!==null;)nc(e,n,a),e=e.sibling}function Vg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[cn]=e,n[_n]=a}catch(h){Ge(e,e.return,h)}}var da=!1,mn=!1,Xf=!1,kg=typeof WeakSet=="function"?WeakSet:Set,En=null;function PS(e,n){if(e=e.containerInfo,fh=Ec,e=em(e),zu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,A=-1,F=-1,tt=0,gt=0,Mt=e,st=null;e:for(;;){for(var ut;Mt!==a||u!==0&&Mt.nodeType!==3||(A=x+u),Mt!==h||o!==0&&Mt.nodeType!==3||(F=x+o),Mt.nodeType===3&&(x+=Mt.nodeValue.length),(ut=Mt.firstChild)!==null;)st=Mt,Mt=ut;for(;;){if(Mt===e)break e;if(st===a&&++tt===u&&(A=x),st===h&&++gt===o&&(F=x),(ut=Mt.nextSibling)!==null)break;Mt=st,st=Mt.parentNode}Mt=ut}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(hh={focusedElem:e,selectionRange:a},Ec=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var qt=ws(a.type,u);e=o.getSnapshotBeforeUpdate(qt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Ge(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)mh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Xg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),o&4&&wo(5,a);break;case 1:if(ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ge(a,a.return,x)}else{var u=ws(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(a,a.return,x)}}o&64&&Fg(a),o&512&&Do(a,a.return);break;case 3:if(ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cm(e,n)}catch(x){Ge(a,a.return,x)}}break;case 27:n===null&&o&4&&Vg(a);case 26:case 5:ma(e,a),n===null&&o&4&&Hg(a),o&512&&Do(a,a.return);break;case 12:ma(e,a);break;case 31:ma(e,a),o&4&&Yg(e,a);break;case 13:ma(e,a),o&4&&jg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=XS.bind(null,a),uy(e,a))));break;case 22:if(o=a.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||mn,u=da;var h=mn;da=o,(mn=n)&&!h?ga(e,a,(a.subtreeFlags&8772)!==0):ma(e,a),da=u,mn=h}break;case 30:break;default:ma(e,a)}}function Wg(e){var n=e.alternate;n!==null&&(e.alternate=null,Wg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&io(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Wn=!1;function pa(e,n,a){for(a=a.child;a!==null;)qg(e,n,a),a=a.sibling}function qg(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:mn||Gi(a,n),pa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Gi(a,n);var o=$e,u=Wn;Ja(a.type)&&($e=a.stateNode,Wn=!1),pa(e,n,a),Bo(a.stateNode),$e=o,Wn=u;break;case 5:mn||Gi(a,n);case 6:if(o=$e,u=Wn,$e=null,pa(e,n,a),$e=o,Wn=u,$e!==null)if(Wn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(h){Ge(a,n,h)}else try{$e.removeChild(a.stateNode)}catch(h){Ge(a,n,h)}break;case 18:$e!==null&&(Wn?(e=$e,F0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tr(e)):F0($e,a.stateNode));break;case 4:o=$e,u=Wn,$e=a.stateNode.containerInfo,Wn=!0,pa(e,n,a),$e=o,Wn=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),mn||Xa(4,a,n),pa(e,n,a);break;case 1:mn||(Gi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Bg(a,n,o)),pa(e,n,a);break;case 21:pa(e,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,pa(e,n,a),mn=o;break;default:pa(e,n,a)}}function Yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(a){Ge(n,n.return,a)}}}function jg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(a){Ge(n,n.return,a)}}function zS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new kg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new kg),n;default:throw Error(s(435,e.tag))}}function ic(e,n){var a=zS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=WS.bind(null,e,o);o.then(u,u)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(Ja(A.type)){$e=A.stateNode,Wn=!1;break t}break;case 5:$e=A.stateNode,Wn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Wn=!0;break t}A=A.return}if($e===null)throw Error(s(160));qg(h,x,u),$e=null,Wn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zg(n,e),n=n.sibling}var Ui=null;function Zg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),o&4&&(Xa(3,e,e.return),wo(3,e),Xa(5,e,e.return));break;case 1:qn(n,e),Yn(e),o&512&&(mn||a===null||Gi(a,a.return)),o&64&&da&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ui;if(qn(n,e),Yn(e),o&512&&(mn||a===null||Gi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ps]||h[cn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,o,a),h[cn]=e,q(h),o=h;break t;case"link":var x=Z0("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(h=x[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;case"meta":if(x=Z0("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(h=x[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[cn]=e,q(h),o=h}e.stateNode=o}else K0(u,e.type,e.stateNode);else e.stateNode=j0(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?K0(u,e.type,e.stateNode):j0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Gf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),o&512&&(mn||a===null||Gi(a,a.return)),a!==null&&o&4&&Gf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),o&512&&(mn||a===null||Gi(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(qt){Ge(e,e.return,qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Gf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Xf=!0);break;case 6:if(qn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(qt){Ge(e,e.return,qt)}}break;case 3:if(xc=null,u=Ui,Ui=_c(n.containerInfo),qn(n,e),Ui=u,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(qt){Ge(e,e.return,qt)}Xf&&(Xf=!1,Kg(e));break;case 4:o=Ui,Ui=_c(e.stateNode.containerInfo),qn(n,e),Yn(e),Ui=o;break;case 12:qn(n,e),Yn(e);break;case 31:qn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ic(e,o)));break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sc=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ic(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,tt=da,gt=mn;if(da=tt||u,mn=gt||F,qn(n,e),mn=gt,da=tt,Yn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||da||mn||Ds(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=F.stateNode;var Mt=F.memoizedProps.style,st=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(qt){Ge(F,F.return,qt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(qt){Ge(F,F.return,qt)}}}else if(n.tag===18){if(a===null){F=n;try{var ut=F.stateNode;u?B0(ut,!0):B0(F.stateNode,!1)}catch(qt){Ge(F,F.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ic(e,a))));break;case 19:qn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ic(e,o)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Gg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Vf(e);nc(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(Hn(x,""),a.flags&=-33);var A=Vf(e);nc(e,A,x);break;case 3:case 4:var F=a.stateNode.containerInfo,tt=Vf(e);kf(e,tt,F);break;default:throw Error(s(161))}}catch(gt){Ge(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Kg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Kg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xg(e,n.alternate,n),n=n.sibling}function Ds(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Ds(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bg(n,n.return,a),Ds(n);break;case 27:Bo(n.stateNode);case 26:case 5:Gi(n,n.return),Ds(n);break;case 22:n.memoizedState===null&&Ds(n);break;case 30:Ds(n);break;default:Ds(n)}e=e.sibling}}function ga(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:ga(u,h,a),wo(4,h);break;case 1:if(ga(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ge(o,o.return,tt)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Rm(F[u],A)}catch(tt){Ge(o,o.return,tt)}}a&&x&64&&Fg(h),Do(h,h.return);break;case 27:Vg(h);case 26:case 5:ga(u,h,a),a&&o===null&&x&4&&Hg(h),Do(h,h.return);break;case 12:ga(u,h,a);break;case 31:ga(u,h,a),a&&x&4&&Yg(u,h);break;case 13:ga(u,h,a),a&&x&4&&jg(u,h);break;case 22:h.memoizedState===null&&ga(u,h,a),Do(h,h.return);break;case 30:break;default:ga(u,h,a)}n=n.sibling}}function Wf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&go(a))}function qf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jg(e,n,a,o),n=n.sibling}function Jg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&wo(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,A=h.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Ge(n,n.return,F)}}else Li(e,n,a,o);break;case 31:Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?Li(e,n,a,o):Uo(e,n):h._visibility&2?Li(e,n,a,o):(h._visibility|=2,pr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Wf(x,n);break;case 24:Li(e,n,a,o),u&2048&&qf(n.alternate,n);break;default:Li(e,n,a,o)}}function pr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,A=a,F=o,tt=x.flags;switch(x.tag){case 0:case 11:case 15:pr(h,x,A,F,u),wo(8,x);break;case 23:break;case 22:var gt=x.stateNode;x.memoizedState!==null?gt._visibility&2?pr(h,x,A,F,u):Uo(h,x):(gt._visibility|=2,pr(h,x,A,F,u)),u&&tt&2048&&Wf(x.alternate,x);break;case 24:pr(h,x,A,F,u),u&&tt&2048&&qf(x.alternate,x);break;default:pr(h,x,A,F,u)}n=n.sibling}}function Uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Uo(a,o),u&2048&&Wf(o.alternate,o);break;case 24:Uo(a,o),u&2048&&qf(o.alternate,o);break;default:Uo(a,o)}n=n.sibling}}var Lo=8192;function mr(e,n,a){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)Qg(e,n,a),e=e.sibling}function Qg(e,n,a){switch(e.tag){case 26:mr(e,n,a),e.flags&Lo&&e.memoizedState!==null&&My(a,Ui,e.memoizedState,e.memoizedProps);break;case 5:mr(e,n,a);break;case 3:case 4:var o=Ui;Ui=_c(e.stateNode.containerInfo),mr(e,n,a),Ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,mr(e,n,a),Lo=o):mr(e,n,a));break;default:mr(e,n,a)}}function $g(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,e0(o,e)}$g(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)t0(e),e=e.sibling}function t0(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ac(e)):No(e);break;default:No(e)}}function ac(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,e0(o,e)}$g(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),ac(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ac(n));break;default:ac(n)}e=e.sibling}}function e0(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,h=o.return;if(Wg(o),o===a){En=null;break t}if(u!==null){u.return=h,En=u;break t}En=h}}}var IS={getCacheForType:function(e){var n=An(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(hn).controller.signal}},FS=typeof WeakMap=="function"?WeakMap:Map,Ie=0,je=null,be=null,Re=0,He=0,oi=null,Wa=!1,gr=!1,Yf=!1,_a=0,an=0,qa=0,Us=0,jf=0,li=0,_r=0,Oo=null,jn=null,Zf=!1,sc=0,n0=0,rc=1/0,oc=null,Ya=null,xn=0,ja=null,vr=null,va=0,Kf=0,Jf=null,i0=null,Po=0,Qf=null;function ci(){return(Ie&2)!==0&&Re!==0?Re&-Re:P.T!==null?ah():Fi()}function a0(){if(li===0)if((Re&536870912)===0||we){var e=yt;yt<<=1,(yt&3932160)===0&&(yt=262144),li=e}else li=536870912;return e=si.current,e!==null&&(e.flags|=32),li}function Zn(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(xr(e,0),Za(e,Re,li,!1)),he(e,a),((Ie&2)===0||e!==je)&&(e===je&&((Ie&2)===0&&(Us|=a),an===4&&Za(e,Re,li,!1)),Vi(e))}function s0(e,n,a){if((Ie&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||zt(e,n),u=o?GS(e,n):th(e,n,!0),h=o;do{if(u===0){gr&&!o&&Za(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!BS(a)){u=th(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=Oo;var F=A.current.memoizedState.isDehydrated;if(F&&(xr(A,x).flags|=256),x=th(A,x,!1),x!==2){if(Yf&&!F){A.errorRecoveryDisabledLanes|=h,Us|=h,u=4;break t}h=jn,jn=u,h!==null&&(jn===null?jn=h:jn.push.apply(jn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){xr(e,0),Za(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,li,!Wa);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=sc+300-b(),10<u)){if(Za(o,n,li,!Wa),ft(o,0,!0)!==0)break t;va=n,o.timeoutHandle=z0(r0.bind(null,o,a,jn,oc,Zf,n,li,Us,_r,Wa,h,"Throttled",-0,0),u);break t}r0(o,a,jn,oc,Zf,n,li,Us,_r,Wa,h,null,-0,0)}}break}while(!0);Vi(e)}function r0(e,n,a,o,u,h,x,A,F,tt,gt,Mt,st,ut){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},Qg(n,h,Mt);var qt=(h&62914560)===h?sc-b():(h&4194048)===h?n0-b():0;if(qt=Ey(Mt,qt),qt!==null){va=h,e.cancelPendingCommit=qt(p0.bind(null,e,n,h,a,o,u,x,A,F,gt,Mt,null,st,ut)),Za(e,h,x,!tt);return}}p0(e,n,h,a,o,u,x,A,F)}function BS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ii(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(e,n,a,o){n&=~jf,n&=~Us,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Lt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&kn(e,a,n)}function lc(){return(Ie&6)===0?(zo(0),!1):!0}function $f(){if(be!==null){if(He===0)var e=be.return;else e=be,oa=Ms=null,mf(e),cr=null,vo=0,e=be;for(;e!==null;)Ig(e.alternate,e),e=e.return;be=null}}function xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),va=0,$f(),je=e,be=a=sa(e.current,null),Re=n,He=0,oi=null,Wa=!1,gr=zt(e,n),Yf=!1,_r=li=jf=Us=qa=an=0,jn=Oo=null,Zf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Lt(o),h=1<<u;n|=e[u],o&=~h}return _a=n,wl(),a}function o0(e,n){de=null,P.H=Ao,n===lr||n===Il?(n=Em(),He=3):n===nf?(n=Em(),He=4):He=n===Uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,be===null&&(an=1,Jl(e,gi(n,e.current)))}function l0(){var e=si.current;return e===null?!0:(Re&4194048)===Re?Si===null:(Re&62914560)===Re||(Re&536870912)!==0?e===Si:!1}function c0(){var e=P.H;return P.H=Ao,e===null?Ao:e}function u0(){var e=P.A;return P.A=IS,e}function cc(){an=4,Wa||(Re&4194048)!==Re&&si.current!==null||(gr=!0),(qa&134217727)===0&&(Us&134217727)===0||je===null||Za(je,Re,li,!1)}function th(e,n,a){var o=Ie;Ie|=2;var u=c0(),h=u0();(je!==e||Re!==n)&&(oc=null,xr(e,n)),n=!1;var x=an;t:do try{if(He!==0&&be!==null){var A=be,F=oi;switch(He){case 8:$f(),x=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var tt=He;if(He=0,oi=null,Sr(e,A,F,tt),a&&gr){x=0;break t}break;default:tt=He,He=0,oi=null,Sr(e,A,F,tt)}}HS(),x=an;break}catch(gt){o0(e,gt)}while(!0);return n&&e.shellSuspendCounter++,oa=Ms=null,Ie=o,P.H=u,P.A=h,be===null&&(je=null,Re=0,wl()),x}function HS(){for(;be!==null;)f0(be)}function GS(e,n){var a=Ie;Ie|=2;var o=c0(),u=u0();je!==e||Re!==n?(oc=null,rc=b()+500,xr(e,n)):gr=zt(e,n);t:do try{if(He!==0&&be!==null){n=be;var h=oi;e:switch(He){case 1:He=0,oi=null,Sr(e,n,h,1);break;case 2:case 9:if(ym(h)){He=0,oi=null,h0(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),Vi(e)},h.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:ym(h)?(He=0,oi=null,h0(n)):(He=0,oi=null,Sr(e,n,h,7));break;case 5:var x=null;switch(be.tag){case 26:x=be.memoizedState;case 5:case 27:var A=be;if(x?J0(x):A.stateNode.complete){He=0,oi=null;var F=A.sibling;if(F!==null)be=F;else{var tt=A.return;tt!==null?(be=tt,uc(tt)):be=null}break e}}He=0,oi=null,Sr(e,n,h,5);break;case 6:He=0,oi=null,Sr(e,n,h,6);break;case 8:$f(),an=6;break t;default:throw Error(s(462))}}VS();break}catch(gt){o0(e,gt)}while(!0);return oa=Ms=null,P.H=o,P.A=u,Ie=a,be!==null?0:(je=null,Re=0,wl(),an)}function VS(){for(;be!==null&&!Gt();)f0(be)}function f0(e){var n=Pg(e.alternate,e,_a);e.memoizedProps=e.pendingProps,n===null?uc(e):be=n}function h0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=wg(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=wg(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:mf(n);default:Ig(a,n),n=be=um(n,_a),n=Pg(a,n,_a)}e.memoizedProps=e.pendingProps,n===null?uc(e):be=n}function Sr(e,n,a,o){oa=Ms=null,mf(n),cr=null,vo=0;var u=n.return;try{if(DS(e,u,n,a,Re)){an=1,Jl(e,gi(a,e.current)),be=null;return}}catch(h){if(u!==null)throw be=u,h;an=1,Jl(e,gi(a,e.current)),be=null;return}n.flags&32768?(we||o===1?e=!0:gr||(Re&536870912)!==0?e=!1:(Wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),d0(n,e)):uc(n)}function uc(e){var n=e;do{if((n.flags&32768)!==0){d0(n,Wa);return}e=n.return;var a=NS(n.alternate,n,_a);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);an===0&&(an=5)}function d0(e,n){do{var a=OS(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);an=6,be=null}function p0(e,n,a,o,u,h,x,A,F){e.cancelPendingCommit=null;do fc();while(xn!==0);if((Ie&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Gu,ln(e,a,h,x,A,F),e===je&&(be=je=null,Re=0),vr=n,ja=e,va=a,Kf=h,Jf=u,i0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qS(dt,function(){return x0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=G.p,G.p=2,x=Ie,Ie|=4;try{PS(e,n,a)}finally{Ie=x,G.p=u,P.T=o}}xn=1,m0(),g0(),_0()}}function m0(){if(xn===1){xn=0;var e=ja,n=vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=Ie;Ie|=4;try{Zg(n,e);var h=hh,x=em(e.containerInfo),A=h.focusedElem,F=h.selectionRange;if(x!==A&&A&&A.ownerDocument&&tm(A.ownerDocument.documentElement,A)){if(F!==null&&zu(A)){var tt=F.start,gt=F.end;if(gt===void 0&&(gt=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(gt,A.value.length);else{var Mt=A.ownerDocument||document,st=Mt&&Mt.defaultView||window;if(st.getSelection){var ut=st.getSelection(),qt=A.textContent.length,ne=Math.min(F.start,qt),qe=F.end===void 0?ne:Math.min(F.end,qt);!ut.extend&&ne>qe&&(x=qe,qe=ne,ne=x);var K=$p(A,ne),X=$p(A,qe);if(K&&X&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var $=Mt.createRange();$.setStart(K.node,K.offset),ut.removeAllRanges(),ne>qe?(ut.addRange($),ut.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ut.addRange($))}}}}for(Mt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&Mt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Mt.length;A++){var St=Mt[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}Ec=!!fh,hh=fh=null}finally{Ie=u,G.p=o,P.T=a}}e.current=n,xn=2}}function g0(){if(xn===2){xn=0;var e=ja,n=vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=Ie;Ie|=4;try{Xg(e,n.alternate,n)}finally{Ie=u,G.p=o,P.T=a}}xn=3}}function _0(){if(xn===4||xn===3){xn=0,O();var e=ja,n=vr,a=va,o=i0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,vr=ja=null,v0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ya=null),qs(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=G.p,G.p=2,P.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];h(A.value,{componentStack:A.stack})}}finally{P.T=n,G.p=u}}(va&3)!==0&&fc(),Vi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Qf?Po++:(Po=0,Qf=e):Po=0,zo(0)}}function v0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,go(n)))}function fc(){return m0(),g0(),_0(),x0()}function x0(){if(xn!==5)return!1;var e=ja,n=Kf;Kf=0;var a=qs(va),o=P.T,u=G.p;try{G.p=32>a?32:a,P.T=null,a=Jf,Jf=null;var h=ja,x=va;if(xn=0,vr=ja=null,va=0,(Ie&6)!==0)throw Error(s(331));var A=Ie;if(Ie|=4,t0(h.current),Jg(h,h.current,x,a),Ie=A,zo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Tt,h)}catch{}return!0}finally{G.p=u,P.T=o,v0(e,n)}}function S0(e,n,a){n=gi(a,n),n=Df(e.stateNode,n,2),e=Ga(e,n,2),e!==null&&(he(e,2),Vi(e))}function Ge(e,n,a){if(e.tag===3)S0(e,e,a);else for(;n!==null;){if(n.tag===3){S0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){e=gi(a,e),a=yg(2),o=Ga(n,a,2),o!==null&&(Mg(a,o,n,e),he(o,2),Vi(o));break}}n=n.return}}function eh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new FS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Yf=!0,u.add(a),e=kS.bind(null,e,n,a),n.then(e,e))}function kS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Re&a)===a&&(an===4||an===3&&(Re&62914560)===Re&&300>b()-sc?(Ie&2)===0&&xr(e,0):jf|=a,_r===Re&&(_r=0)),Vi(e)}function y0(e,n){n===0&&(n=De()),e=xs(e,n),e!==null&&(he(e,n),Vi(e))}function XS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),y0(e,a)}function WS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),y0(e,a)}function qS(e,n){return Me(e,n)}var hc=null,yr=null,nh=!1,dc=!1,ih=!1,Ka=0;function Vi(e){e!==yr&&e.next===null&&(yr===null?hc=yr=e:yr=yr.next=e),dc=!0,nh||(nh=!0,jS())}function zo(e,n){if(!ih&&dc){ih=!0;do for(var a=!1,o=hc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Lt(42|e)+1)-1,h&=u&~(x&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,T0(o,h))}else h=Re,h=ft(o,o===je?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||zt(o,h)||(a=!0,T0(o,h));o=o.next}while(a);ih=!1}}function YS(){M0()}function M0(){dc=nh=!1;var e=0;Ka!==0&&ay()&&(e=Ka);for(var n=b(),a=null,o=hc;o!==null;){var u=o.next,h=E0(o,n);h===0?(o.next=null,a===null?hc=u:a.next=u,u===null&&(yr=a)):(a=o,(e!==0||(h&3)!==0)&&(dc=!0)),o=u}xn!==0&&xn!==5||zo(e),Ka!==0&&(Ka=0)}function E0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Lt(h),A=1<<x,F=u[x];F===-1?((A&a)===0||(A&o)!==0)&&(u[x]=ae(A,n)):F<=n&&(e.expiredLanes|=A),h&=~A}if(n=je,a=Re,a=ft(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ae(o),qs(a)){case 2:case 8:a=vt;break;case 32:a=dt;break;case 268435456:a=At;break;default:a=dt}return o=b0.bind(null,e),a=Me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function b0(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(fc()&&e.callbackNode!==a)return null;var o=Re;return o=ft(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(s0(e,o,n),E0(e,b()),e.callbackNode!=null&&e.callbackNode===a?b0.bind(null,e):null)}function T0(e,n){if(fc())return null;s0(e,n,!0)}function jS(){ry(function(){(Ie&6)!==0?Me(pt,YS):M0()})}function ah(){if(Ka===0){var e=rr;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Ka=e}return Ka}function A0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yl(""+e)}function R0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ZS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=A0((u[_n]||null).action),x=o.submitter;x&&(n=(n=x[_n]||null)?A0(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var A=new Tl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var F=x?R0(u,x):new FormData(u);bf(a,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(A.preventDefault(),F=x?R0(u,x):new FormData(u),bf(a,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var sh=0;sh<Hu.length;sh++){var rh=Hu[sh],KS=rh.toLowerCase(),JS=rh[0].toUpperCase()+rh.slice(1);Di(KS,"on"+JS)}Di(am,"onAnimationEnd"),Di(sm,"onAnimationIteration"),Di(rm,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(dS,"onTransitionRun"),Di(pS,"onTransitionStart"),Di(mS,"onTransitionCancel"),Di(om,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function C0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],F=A.instance,tt=A.currentTarget;if(A=A.listener,F!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=tt;try{h(u)}catch(gt){Cl(gt)}u.currentTarget=null,h=F}else for(x=0;x<o.length;x++){if(A=o[x],F=A.instance,tt=A.currentTarget,A=A.listener,F!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=tt;try{h(u)}catch(gt){Cl(gt)}u.currentTarget=null,h=F}}}}function Te(e,n){var a=n[Ua];a===void 0&&(a=n[Ua]=new Set);var o=e+"__bubble";a.has(o)||(w0(n,e,2,!1),a.add(o))}function oh(e,n,a){var o=0;n&&(o|=4),w0(a,e,o,n)}var pc="_reactListening"+Math.random().toString(36).slice(2);function lh(e){if(!e[pc]){e[pc]=!0,lt.forEach(function(a){a!=="selectionchange"&&(QS.has(a)||oh(a,!1,e),oh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[pc]||(n[pc]=!0,oh("selectionchange",!1,n))}}function w0(e,n,a,o){switch(a_(n)){case 2:var u=Ay;break;case 8:u=Ry;break;default:u=Eh}a=u.bind(null,n,a,e),u=void 0,!Ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ch(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=La(A),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){o=h=x;continue t}A=A.parentNode}}o=o.return}Op(function(){var tt=h,gt=Tu(a),Mt=[];t:{var st=lm.get(e);if(st!==void 0){var ut=Tl,qt=e;switch(e){case"keypress":if(El(a)===0)break t;case"keydown":case"keyup":ut=Wx;break;case"focusin":qt="focus",ut=Uu;break;case"focusout":qt="blur",ut=Uu;break;case"beforeblur":case"afterblur":ut=Uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=jx;break;case am:case sm:case rm:ut=zx;break;case om:ut=Kx;break;case"scroll":case"scrollend":ut=Ux;break;case"wheel":ut=Qx;break;case"copy":case"cut":case"paste":ut=Fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Bp;break;case"toggle":case"beforetoggle":ut=tS}var ne=(n&4)!==0,qe=!ne&&(e==="scroll"||e==="scrollend"),K=ne?st!==null?st+"Capture":null:st;ne=[];for(var X=tt,$;X!==null;){var St=X;if($=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||$===null||K===null||(St=ao(X,K),St!=null&&ne.push(Fo(X,St,$))),qe)break;X=X.return}0<ne.length&&(st=new ut(st,qt,null,a,gt),Mt.push({event:st,listeners:ne}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",st&&a!==bu&&(qt=a.relatedTarget||a.fromElement)&&(La(qt)||qt[ea]))break t;if((ut||st)&&(st=gt.window===gt?gt:(st=gt.ownerDocument)?st.defaultView||st.parentWindow:window,ut?(qt=a.relatedTarget||a.toElement,ut=tt,qt=qt?La(qt):null,qt!==null&&(qe=c(qt),ne=qt.tag,qt!==qe||ne!==5&&ne!==27&&ne!==6)&&(qt=null)):(ut=null,qt=tt),ut!==qt)){if(ne=Ip,St="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Bp,St="onPointerLeave",K="onPointerEnter",X="pointer"),qe=ut==null?st:ms(ut),$=qt==null?st:ms(qt),st=new ne(St,X+"leave",ut,a,gt),st.target=qe,st.relatedTarget=$,St=null,La(gt)===tt&&(ne=new ne(K,X+"enter",qt,a,gt),ne.target=$,ne.relatedTarget=qe,St=ne),qe=St,ut&&qt)e:{for(ne=$S,K=ut,X=qt,$=0,St=K;St;St=ne(St))$++;St=0;for(var te=X;te;te=ne(te))St++;for(;0<$-St;)K=ne(K),$--;for(;0<St-$;)X=ne(X),St--;for(;$--;){if(K===X||X!==null&&K===X.alternate){ne=K;break e}K=ne(K),X=ne(X)}ne=null}else ne=null;ut!==null&&D0(Mt,st,ut,ne,!1),qt!==null&&qe!==null&&D0(Mt,qe,qt,ne,!0)}}t:{if(st=tt?ms(tt):window,ut=st.nodeName&&st.nodeName.toLowerCase(),ut==="select"||ut==="input"&&st.type==="file")var Oe=Yp;else if(Wp(st))if(jp)Oe=uS;else{Oe=lS;var Kt=oS}else ut=st.nodeName,!ut||ut.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?tt&&js(tt.elementType)&&(Oe=Yp):Oe=cS;if(Oe&&(Oe=Oe(e,tt))){qp(Mt,Oe,a,gt);break t}Kt&&Kt(e,st,tt),e==="focusout"&&tt&&st.type==="number"&&tt.memoizedProps.value!=null&&Ci(st,"number",st.value)}switch(Kt=tt?ms(tt):window,e){case"focusin":(Wp(Kt)||Kt.contentEditable==="true")&&(Qs=Kt,Iu=tt,ho=null);break;case"focusout":ho=Iu=Qs=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,nm(Mt,a,gt);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":nm(Mt,a,gt)}var ge;if(Nu)t:{switch(e){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else Js?kp(e,a)&&(Ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Hp&&a.locale!=="ko"&&(Js||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Js&&(ge=Pp()):(Oa=gt,Cu="value"in Oa?Oa.value:Oa.textContent,Js=!0)),Kt=mc(tt,Ce),0<Kt.length&&(Ce=new Fp(Ce,e,null,a,gt),Mt.push({event:Ce,listeners:Kt}),ge?Ce.data=ge:(ge=Xp(a),ge!==null&&(Ce.data=ge)))),(ge=nS?iS(e,a):aS(e,a))&&(Ce=mc(tt,"onBeforeInput"),0<Ce.length&&(Kt=new Fp("onBeforeInput","beforeinput",null,a,gt),Mt.push({event:Kt,listeners:Ce}),Kt.data=ge)),ZS(Mt,e,tt,a,gt)}C0(Mt,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function mc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=ao(e,a),u!=null&&o.unshift(Fo(e,u,h)),u=ao(e,n),u!=null&&o.push(Fo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function $S(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function D0(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var A=a,F=A.alternate,tt=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||tt===null||(F=tt,u?(tt=ao(a,h),tt!=null&&x.unshift(Fo(a,tt,F))):u||(tt=ao(a,h),tt!=null&&x.push(Fo(a,tt,F)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var ty=/\r\n?/g,ey=/\u0000|\uFFFD/g;function U0(e){return(typeof e=="string"?e:""+e).replace(ty,`
`).replace(ey,"")}function L0(e,n){return n=U0(n),U0(e)===n}function We(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":ce(e,"class",o);break;case"tabIndex":ce(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ce(e,a,o);break;case"style":na(e,o,h);break;case"data":if(n!=="object"){ce(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=yl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&We(e,n,"name",u.name,u,null),We(e,n,"formEncType",u.formEncType,u,null),We(e,n,"formMethod",u.formMethod,u,null),We(e,n,"formTarget",u.formTarget,u,null)):(We(e,n,"encType",u.encType,u,null),We(e,n,"method",u.method,u,null),We(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=yl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ia);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=yl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Te("beforetoggle",e),Te("toggle",e),re(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":re(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wx.get(a)||a,re(e,a,o))}}function uh(e,n,a,o,u,h){switch(a){case"style":na(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[_n]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):re(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,h,x,a,null)}}u&&We(e,n,"srcSet",a.srcSet,a,null),o&&We(e,n,"src",a.src,a,null);return;case"input":Te("invalid",e);var A=h=x=u=null,F=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":x=gt;break;case"checked":F=gt;break;case"defaultChecked":tt=gt;break;case"value":h=gt;break;case"defaultValue":A=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:We(e,n,o,gt,a,null)}}ei(e,h,A,F,tt,x,u,!1);return;case"select":Te("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:We(e,n,u,A,a,null)}n=h,a=x,e.multiple=!!o,n!=null?ni(e,!!o,n,!1):a!=null&&ni(e,!!o,a,!0);return;case"textarea":Te("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:We(e,n,x,A,a,null)}un(e,o,u,h);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":We(e,n,F,o,a,null));return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)Te(Io[o],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,tt,o,a,null)}return;default:if(js(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&uh(e,n,gt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&We(e,n,A,o,a,null))}function ny(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,A=null,F=null,tt=null,gt=null;for(ut in a){var Mt=a[ut];if(a.hasOwnProperty(ut)&&Mt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":F=Mt;default:o.hasOwnProperty(ut)||We(e,n,ut,null,o,Mt)}}for(var st in o){var ut=o[st];if(Mt=a[st],o.hasOwnProperty(st)&&(ut!=null||Mt!=null))switch(st){case"type":h=ut;break;case"name":u=ut;break;case"checked":tt=ut;break;case"defaultChecked":gt=ut;break;case"value":x=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==Mt&&We(e,n,st,ut,o,Mt)}}Bn(e,x,A,F,tt,gt,h,u);return;case"select":ut=x=A=st=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ut=F;default:o.hasOwnProperty(h)||We(e,n,h,null,o,F)}for(u in o)if(h=o[u],F=a[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":st=h;break;case"defaultValue":A=h;break;case"multiple":x=h;default:h!==F&&We(e,n,u,h,o,F)}n=A,a=x,o=ut,st!=null?ni(e,!!a,st,!1):!!o!=!!a&&(n!=null?ni(e,!!a,n,!0):ni(e,!!a,a?[]:"",!1));return;case"textarea":ut=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:We(e,n,A,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":st=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&We(e,n,x,u,o,h)}Be(e,st,ut);return;case"option":for(var qt in a)st=a[qt],a.hasOwnProperty(qt)&&st!=null&&!o.hasOwnProperty(qt)&&(qt==="selected"?e.selected=!1:We(e,n,qt,null,o,st));for(F in o)st=o[F],ut=a[F],o.hasOwnProperty(F)&&st!==ut&&(st!=null||ut!=null)&&(F==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":We(e,n,F,st,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)st=a[ne],a.hasOwnProperty(ne)&&st!=null&&!o.hasOwnProperty(ne)&&We(e,n,ne,null,o,st);for(tt in o)if(st=o[tt],ut=a[tt],o.hasOwnProperty(tt)&&st!==ut&&(st!=null||ut!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:We(e,n,tt,st,o,ut)}return;default:if(js(n)){for(var qe in a)st=a[qe],a.hasOwnProperty(qe)&&st!==void 0&&!o.hasOwnProperty(qe)&&uh(e,n,qe,void 0,o,st);for(gt in o)st=o[gt],ut=a[gt],!o.hasOwnProperty(gt)||st===ut||st===void 0&&ut===void 0||uh(e,n,gt,st,o,ut);return}}for(var K in a)st=a[K],a.hasOwnProperty(K)&&st!=null&&!o.hasOwnProperty(K)&&We(e,n,K,null,o,st);for(Mt in o)st=o[Mt],ut=a[Mt],!o.hasOwnProperty(Mt)||st===ut||st==null&&ut==null||We(e,n,Mt,st,o,ut)}function N0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,A=u.duration;if(h&&A&&N0(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],tt=F.startTime;if(tt>A)break;var gt=F.transferSize,Mt=F.initiatorType;gt&&N0(Mt)&&(F=F.responseEnd,x+=gt*(F<A?1:(A-tt)/(F-tt)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fh=null,hh=null;function gc(e){return e.nodeType===9?e:e.ownerDocument}function O0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function P0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function dh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ph=null;function ay(){var e=window.event;return e&&e.type==="popstate"?e===ph?!1:(ph=e,!0):(ph=null,!1)}var z0=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(e){return I0.resolve(null).then(e).catch(oy)}:z0;function oy(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function F0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var h=a.firstChild;h;){var x=h.nextSibling,A=h.nodeName;h[ps]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Bo(e.ownerDocument.body);a=u}while(a);Tr(n)}function B0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function mh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mh(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ly(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ps])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function cy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function H0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=yi(e.nextSibling),e===null))return null;return e}function gh(e){return e.data==="$?"||e.data==="$~"}function _h(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function yi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var vh=null;function G0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return yi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function V0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function k0(e,n,a){switch(n=gc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);io(e)}var Mi=new Map,X0=new Set;function _c(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=G.d;G.d={f:fy,r:hy,D:dy,C:py,L:my,m:gy,X:vy,S:_y,M:xy};function fy(){var e=xa.f(),n=lc();return e||n}function hy(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?og(n):xa.r(e)}var Mr=typeof document>"u"?null:document;function W0(e,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=le(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),X0.has(u)||(X0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),q(n),o.head.appendChild(n)))}}function dy(e){xa.D(e),W0("dns-prefetch",e,null)}function py(e,n){xa.C(e,n),W0("preconnect",e,n)}function my(e,n,a){xa.L(e,n,a);var o=Mr;if(o&&e&&n){var u='link[rel="preload"][as="'+le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+le(a.imageSizes)+'"]')):u+='[href="'+le(e)+'"]';var h=u;switch(n){case"style":h=Er(e);break;case"script":h=br(e)}Mi.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Mi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ho(h))||n==="script"&&o.querySelector(Go(h))||(n=o.createElement("link"),Cn(n,"link",e),q(n),o.head.appendChild(n)))}}function gy(e,n){xa.m(e,n);var a=Mr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+le(o)+'"][href="'+le(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=br(e)}if(!Mi.has(h)&&(e=v({rel:"modulepreload",href:e},n),Mi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(h)))return}o=a.createElement("link"),Cn(o,"link",e),q(o),a.head.appendChild(o)}}}function _y(e,n,a){xa.S(e,n,a);var o=Mr;if(o&&e){var u=C(o).hoistableStyles,h=Er(e);n=n||"default";var x=u.get(h);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Ho(h)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Mi.get(h))&&xh(e,a);var F=x=o.createElement("link");q(F),Cn(F,"link",e),F._p=new Promise(function(tt,gt){F.onload=tt,F.onerror=gt}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,vc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(h,x)}}}function vy(e,n){xa.X(e,n);var a=Mr;if(a&&e){var o=C(a).hoistableScripts,u=br(e),h=o.get(u);h||(h=a.querySelector(Go(u)),h||(e=v({src:e,async:!0},n),(n=Mi.get(u))&&Sh(e,n),h=a.createElement("script"),q(h),Cn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function xy(e,n){xa.M(e,n);var a=Mr;if(a&&e){var o=C(a).hoistableScripts,u=br(e),h=o.get(u);h||(h=a.querySelector(Go(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=Mi.get(u))&&Sh(e,n),h=a.createElement("script"),q(h),Cn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function q0(e,n,a,o){var u=(u=Z.current)?_c(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Er(a.href),a=C(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Er(a.href);var h=C(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Ho(e)))&&!h._p&&(x.instance=h,x.state.loading=5),Mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(e,a),h||Sy(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=br(a),a=C(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Er(e){return'href="'+le(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function Y0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Sy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),q(n),e.head.appendChild(n))}function br(e){return'[src="'+le(e)+'"]'}function Go(e){return"script[async]"+e}function j0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+le(a.href)+'"]');if(o)return n.instance=o,q(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),q(o),Cn(o,"style",u),vc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Er(a.href);var h=e.querySelector(Ho(u));if(h)return n.state.loading|=4,n.instance=h,q(h),h;o=Y0(a),(u=Mi.get(u))&&xh(o,u),h=(e.ownerDocument||e).createElement("link"),q(h);var x=h;return x._p=new Promise(function(A,F){x.onload=A,x.onerror=F}),Cn(h,"link",o),n.state.loading|=4,vc(h,a.precedence,e),n.instance=h;case"script":return h=br(a.src),(u=e.querySelector(Go(h)))?(n.instance=u,q(u),u):(o=a,(u=Mi.get(h))&&(o=v({},a),Sh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,vc(o,a.precedence,e));return n.instance}function vc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var xc=null;function Z0(e,n,a){if(xc===null){var o=new Map,u=xc=new Map;u.set(a,o)}else u=xc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[ps]||h[cn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(h):o.set(x,[h])}}return o}function K0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function yy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function J0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function My(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Er(o.href),h=n.querySelector(Ho(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Sc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,q(h);return}h=n.ownerDocument||n,o=Y0(o),(u=Mi.get(u))&&xh(o,u),h=h.createElement("link"),q(h);var x=h;x._p=new Promise(function(A,F){x.onload=A,x.onerror=F}),Cn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Sc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var yh=0;function Ey(e,n){return e.stylesheets&&e.count===0&&Mc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Mc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&yh===0&&(yh=62500*iy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>yh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function Mc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,n.forEach(by,e),yc=null,Sc.call(e))}function by(e,n){if(!(n.state.loading&4)){var a=yc.get(e);if(a)var o=a.get(null);else{a=new Map,yc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=Sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Vo={$$typeof:U,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function Ty(e,n,a,o,u,h,x,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oe(0),this.hiddenUpdates=oe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Q0(e,n,a,o,u,h,x,A,F,tt,gt,Mt){return e=new Ty(e,n,a,x,F,tt,gt,Mt,A),n=1,h===!0&&(n|=24),h=ai(3,null,null,n),e.current=h,h.stateNode=e,n=$u(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},af(h),e}function $0(e){return e?(e=er,e):er}function t_(e,n,a,o,u,h){u=$0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ga(e,o,n),a!==null&&(Zn(a,e,n),So(a,e,n))}function e_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Mh(e,n){e_(e,n),(e=e.alternate)&&e_(e,n)}function n_(e){if(e.tag===13||e.tag===31){var n=xs(e,67108864);n!==null&&Zn(n,e,67108864),Mh(e,67108864)}}function i_(e){if(e.tag===13||e.tag===31){var n=ci();n=Ws(n);var a=xs(e,n);a!==null&&Zn(a,e,n),Mh(e,n)}}var Ec=!0;function Ay(e,n,a,o){var u=P.T;P.T=null;var h=G.p;try{G.p=2,Eh(e,n,a,o)}finally{G.p=h,P.T=u}}function Ry(e,n,a,o){var u=P.T;P.T=null;var h=G.p;try{G.p=8,Eh(e,n,a,o)}finally{G.p=h,P.T=u}}function Eh(e,n,a,o){if(Ec){var u=bh(o);if(u===null)ch(e,n,o,bc,a),s_(e,o);else if(wy(u,e,n,a,o))o.stopPropagation();else if(s_(e,o),n&4&&-1<Cy.indexOf(e)){for(;u!==null;){var h=Na(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Rt(h.pendingLanes);if(x!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var F=1<<31-Lt(x);A.entanglements[1]|=F,x&=~F}Vi(h),(Ie&6)===0&&(rc=b()+500,zo(0))}}break;case 31:case 13:A=xs(h,2),A!==null&&Zn(A,h,2),lc(),Mh(h,2)}if(h=bh(o),h===null&&ch(e,n,o,bc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else ch(e,n,o,null,a)}}function bh(e){return e=Tu(e),Th(e)}var bc=null;function Th(e){if(bc=null,e=La(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return bc=e,null}function a_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case pt:return 2;case vt:return 8;case dt:case bt:return 32;case At:return 268435456;default:return 32}default:return 32}}var Ah=!1,Qa=null,$a=null,ts=null,ko=new Map,Xo=new Map,es=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s_(e,n){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&n_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function wy(e,n,a,o,u){switch(n){case"focusin":return Qa=Wo(Qa,e,n,a,o,u),!0;case"dragenter":return $a=Wo($a,e,n,a,o,u),!0;case"mouseover":return ts=Wo(ts,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return ko.set(h,Wo(ko.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Xo.set(h,Wo(Xo.get(h)||null,e,n,a,o,u)),!0}return!1}function r_(e){var n=La(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ys(e.priority,function(){i_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ys(e.priority,function(){i_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=bh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);bu=o,a.target.dispatchEvent(o),bu=null}else return n=Na(a),n!==null&&n_(n),e.blockedOn=a,!1;n.shift()}return!0}function o_(e,n,a){Tc(e)&&a.delete(n)}function Dy(){Ah=!1,Qa!==null&&Tc(Qa)&&(Qa=null),$a!==null&&Tc($a)&&($a=null),ts!==null&&Tc(ts)&&(ts=null),ko.forEach(o_),Xo.forEach(o_)}function Ac(e,n){e.blockedOn===n&&(e.blockedOn=null,Ah||(Ah=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Dy)))}var Rc=null;function l_(e){Rc!==e&&(Rc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Rc===e&&(Rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Th(o||a)===null)continue;break}var h=Na(a);h!==null&&(e.splice(n,3),n-=3,bf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(e){function n(F){return Ac(F,e)}Qa!==null&&Ac(Qa,e),$a!==null&&Ac($a,e),ts!==null&&Ac(ts,e),ko.forEach(n),Xo.forEach(n);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)r_(a),a.blockedOn===null&&es.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[_n]||null;if(typeof h=="function")x||l_(a);else if(x){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[_n]||null)A=x.formAction;else if(Th(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),l_(a)}}}function c_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Rh(e){this._internalRoot=e}Cc.prototype.render=Rh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ci();t_(a,o,e,n,null,null)},Cc.prototype.unmount=Rh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;t_(e.current,2,null,e,null,null),lc(),n[ea]=null}};function Cc(e){this._internalRoot=e}Cc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,e),a===0&&r_(e)}};var u_=t.version;if(u_!=="19.2.4")throw Error(s(527,u_,"19.2.4"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Uy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{Tt=wc.inject(Uy),Et=wc}catch{}}return Yo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=_g,h=vg,x=xg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Q0(e,1,!1,null,null,a,o,null,u,h,x,c_),e[ea]=n.current,lh(e),new Rh(n)},Yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=_g,x=vg,A=xg,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=Q0(e,1,!0,n,a??null,o,u,F,h,x,A,c_),n.context=$0(null),a=n.current,o=ci(),o=Ws(o),u=Ha(o),u.callback=null,Ga(a,u,o),a=o,n.current.lanes=a,he(n,a),Vi(n),e[ea]=n.current,lh(e),new Cc(n)},Yo.version="19.2.4",Yo}var S_;function Gy(){if(S_)return Dh.exports;S_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Dh.exports=Hy(),Dh.exports}var Vy=Gy();const ky=""+new URL("brick1-CblEgGr6.jpg",import.meta.url).href,Xy=Object.freeze(Object.defineProperty({__proto__:null,default:ky},Symbol.toStringTag,{value:"Module"})),Wy=""+new URL("brick2-hWfaQQqu.jpg",import.meta.url).href,qy=Object.freeze(Object.defineProperty({__proto__:null,default:Wy},Symbol.toStringTag,{value:"Module"})),Yy=""+new URL("carpet1-BzNfJJEG.jpg",import.meta.url).href,jy=Object.freeze(Object.defineProperty({__proto__:null,default:Yy},Symbol.toStringTag,{value:"Module"})),Zy=""+new URL("tile1-BrPdUzSx.jpg",import.meta.url).href,Ky=Object.freeze(Object.defineProperty({__proto__:null,default:Zy},Symbol.toStringTag,{value:"Module"})),Jy=""+new URL("wood1-BLL9CwBR.jpg",import.meta.url).href,Qy=Object.freeze(Object.defineProperty({__proto__:null,default:Jy},Symbol.toStringTag,{value:"Module"})),$y=""+new URL("wood2-CxJQSYbi.jpg",import.meta.url).href,tM=Object.freeze(Object.defineProperty({__proto__:null,default:$y},Symbol.toStringTag,{value:"Module"})),eM=""+new URL("wood3-5pdkI4Gb.jpg",import.meta.url).href,nM=Object.freeze(Object.defineProperty({__proto__:null,default:eM},Symbol.toStringTag,{value:"Module"}));const mp="183",Aa={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iM=0,y_=1,aM=2,lu=1,Pv=2,nl=3,hs=0,$n=1,zi=2,Ra=0,kr=1,M_=2,E_=3,b_=4,sM=5,Fs=100,rM=101,oM=102,lM=103,cM=104,uM=200,fM=201,hM=202,dM=203,Sd=204,yd=205,pM=206,mM=207,gM=208,_M=209,vM=210,xM=211,SM=212,yM=213,MM=214,Md=0,Ed=1,bd=2,Wr=3,Td=4,Ad=5,Rd=6,Cd=7,zv=0,EM=1,bM=2,ji=0,Iv=1,Fv=2,Bv=3,Hv=4,Gv=5,Vv=6,kv=7,Xv=300,Vs=301,qr=302,Oh=303,Ph=304,Su=306,pu=1e3,Ta=1001,wd=1002,wn=1003,TM=1004,Dc=1005,Pn=1006,zh=1007,Hs=1008,hi=1009,Wv=1010,qv=1011,cl=1012,gp=1013,Ji=1014,qi=1015,wa=1016,_p=1017,vp=1018,ul=1020,Yv=35902,jv=35899,Zv=1021,Kv=1022,Ii=1023,Da=1026,Gs=1027,Jv=1028,xp=1029,Yr=1030,Sp=1031,yp=1033,cu=33776,uu=33777,fu=33778,hu=33779,Dd=35840,Ud=35841,Ld=35842,Nd=35843,Od=36196,Pd=37492,zd=37496,Id=37488,Fd=37489,Bd=37490,Hd=37491,Gd=37808,Vd=37809,kd=37810,Xd=37811,Wd=37812,qd=37813,Yd=37814,jd=37815,Zd=37816,Kd=37817,Jd=37818,Qd=37819,$d=37820,tp=37821,ep=36492,np=36494,ip=36495,ap=36283,sp=36284,rp=36285,op=36286,AM=3200,Qv=0,RM=1,us="",bi="srgb",jr="srgb-linear",mu="linear",Ve="srgb",Ar=7680,T_=519,CM=512,wM=513,DM=514,Mp=515,UM=516,LM=517,Ep=518,NM=519,A_=35044,R_="300 es",Yi=2e3,fl=2001;function OM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function hl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function PM(){const r=hl("canvas");return r.style.display="block",r}const C_={};function w_(...r){const t="THREE."+r.shift();console.log(t,...r)}function $v(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function se(...r){r=$v(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function ze(...r){r=$v(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function gu(...r){const t=r.join(" ");t in C_||(C_[t]=!0,se(...r))}function zM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const IM={[Md]:Ed,[bd]:Rd,[Td]:Cd,[Wr]:Ad,[Ed]:Md,[Rd]:bd,[Cd]:Td,[Ad]:Wr};class Xs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,lp=180/Math.PI;function Qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function ye(r,t,i){return Math.max(t,Math.min(i,r))}function FM(r,t){return(r%t+t)%t}function Ih(r,t,i){return(1-i)*r+i*t}function jo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const BM={DEG2RAD:sl};class Vt{constructor(t=0,i=0){Vt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ds{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],S=c[f+1],E=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==S||_!==E){let M=m*g+p*S+_*E+v*w;M<0&&(g=-g,S=-S,E=-E,w=-w,M=-M);let y=1-d;if(M<.9995){const D=Math.acos(M),U=Math.sin(D);y=Math.sin(y*D)/U,d=Math.sin(d*D)/U,m=m*y+g*d,p=p*y+S*d,_=_*y+E*d,v=v*y+w*d}else{m=m*y+g*d,p=p*y+S*d,_=_*y+E*d,v=v*y+w*d;const D=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=D,p*=D,_*=D,v*=D}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+_*v+m*S-p*g,t[i+1]=m*E+_*g+p*v-d*S,t[i+2]=p*E+_*S+d*g-m*v,t[i+3]=_*E-d*v-m*g-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),g=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+d+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,s=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(D_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(D_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Fh.copy(this).projectOnVector(t),this.sub(Fh)}reflect(t){return this.sub(Fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fh=new Y,D_=new ds;class _e{constructor(t,i,s,l,c,f,d,m,p){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],S=s[5],E=s[8],w=l[0],M=l[3],y=l[6],D=l[1],U=l[4],L=l[7],B=l[2],I=l[5],H=l[8];return c[0]=f*w+d*D+m*B,c[3]=f*M+d*U+m*I,c[6]=f*y+d*L+m*H,c[1]=p*w+_*D+v*B,c[4]=p*M+_*U+v*I,c[7]=p*y+_*L+v*H,c[2]=g*w+S*D+E*B,c[5]=g*M+S*U+E*I,c[8]=g*y+S*L+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,g=d*m-_*c,S=p*c-f*m,E=i*v+s*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*f)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=S*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Bh.makeScale(t,i)),this}rotate(t){return this.premultiply(Bh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Bh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new _e,U_=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HM(){const r={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=Ca(l.r),l.g=Ca(l.g),l.b=Ca(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?mu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return gu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return gu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[jr]:{primaries:t,whitePoint:s,transfer:mu,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),r}const Le=HM();function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rr;class GM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Rr===void 0&&(Rr=hl("canvas")),Rr.width=t.width,Rr.height=t.height;const l=Rr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Rr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=hl("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ca(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VM=0;class bp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Hh(l[f].image)):c.push(Hh(l[f]))}else c=Hh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?GM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let kM=0;const Gh=new Y;class zn extends Xs{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=Ta,l=Ta,c=Pn,f=Hs,d=Ii,m=hi,p=zn.DEFAULT_ANISOTROPY,_=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Qr(),this.name="",this.source=new bp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pu:t.x=t.x-Math.floor(t.x);break;case Ta:t.x=t.x<0?0:1;break;case wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pu:t.y=t.y-Math.floor(t.y);break;case Ta:t.y=t.y<0?0:1;break;case wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Xv;zn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],w=m[2],M=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,L=(S+1)/2,B=(y+1)/2,I=(_+g)/4,H=(v+w)/4,T=(E+M)/4;return U>L&&U>B?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=I/s,c=H/s):L>B?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=I/l,c=T/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=H/c,l=T/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-E)*(M-E)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(v-w)/D,this.z=(g-_)/D,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XM extends Xs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new zn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new bp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends XM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class tx extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WM extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(t,i,s,l,c,f,d,m,p,_,v,g,S,E,w,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,v,g,S,E,w,M)}set(t,i,s,l,c,f,d,m,p,_,v,g,S,E,w,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=d,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Cr.setFromMatrixColumn(t,0).length(),c=1/Cr.setFromMatrixColumn(t,1).length(),f=1/Cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,S=f*v,E=d*_,w=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,S=m*v,E=p*_,w=p*v;i[0]=g+w*d,i[4]=E*d-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=S*d-E,i[6]=w+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,S=m*v,E=p*_,w=p*v;i[0]=g-w*d,i[4]=-f*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*_,i[9]=w-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,S=f*v,E=d*_,w=d*v;i[0]=m*_,i[4]=E*p-S,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,S=f*p,E=d*m,w=d*p;i[0]=m*_,i[4]=w-g*v,i[8]=E*v+S,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*v+E,i[10]=g-w*v}else if(t.order==="XZY"){const g=f*m,S=f*p,E=d*m,w=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+w,i[5]=f*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qM,t,YM)}lookAt(t,i,s){const l=this.elements;return ui.subVectors(t,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),is.crossVectors(s,ui),is.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),is.crossVectors(s,ui)),is.normalize(),Uc.crossVectors(ui,is),l[0]=is.x,l[4]=Uc.x,l[8]=ui.x,l[1]=is.y,l[5]=Uc.y,l[9]=ui.y,l[2]=is.z,l[6]=Uc.z,l[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],S=s[13],E=s[2],w=s[6],M=s[10],y=s[14],D=s[3],U=s[7],L=s[11],B=s[15],I=l[0],H=l[4],T=l[8],N=l[12],_t=l[1],k=l[5],et=l[9],at=l[13],ot=l[2],nt=l[6],P=l[10],G=l[14],ct=l[3],mt=l[7],Ct=l[11],R=l[15];return c[0]=f*I+d*_t+m*ot+p*ct,c[4]=f*H+d*k+m*nt+p*mt,c[8]=f*T+d*et+m*P+p*Ct,c[12]=f*N+d*at+m*G+p*R,c[1]=_*I+v*_t+g*ot+S*ct,c[5]=_*H+v*k+g*nt+S*mt,c[9]=_*T+v*et+g*P+S*Ct,c[13]=_*N+v*at+g*G+S*R,c[2]=E*I+w*_t+M*ot+y*ct,c[6]=E*H+w*k+M*nt+y*mt,c[10]=E*T+w*et+M*P+y*Ct,c[14]=E*N+w*at+M*G+y*R,c[3]=D*I+U*_t+L*ot+B*ct,c[7]=D*H+U*k+L*nt+B*mt,c[11]=D*T+U*et+L*P+B*Ct,c[15]=D*N+U*at+L*G+B*R,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],S=t[14],E=t[3],w=t[7],M=t[11],y=t[15],D=m*S-p*g,U=d*S-p*v,L=d*g-m*v,B=f*S-p*_,I=f*g-m*_,H=f*v-d*_;return i*(w*D-M*U+y*L)-s*(E*D-M*B+y*I)+l*(E*U-w*B+y*H)-c*(E*L-w*I+M*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],S=t[11],E=t[12],w=t[13],M=t[14],y=t[15],D=i*d-s*f,U=i*m-l*f,L=i*p-c*f,B=s*m-l*d,I=s*p-c*d,H=l*p-c*m,T=_*w-v*E,N=_*M-g*E,_t=_*y-S*E,k=v*M-g*w,et=v*y-S*w,at=g*y-S*M,ot=D*at-U*et+L*k+B*_t-I*N+H*T;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const nt=1/ot;return t[0]=(d*at-m*et+p*k)*nt,t[1]=(l*et-s*at-c*k)*nt,t[2]=(w*H-M*I+y*B)*nt,t[3]=(g*I-v*H-S*B)*nt,t[4]=(m*_t-f*at-p*N)*nt,t[5]=(i*at-l*_t+c*N)*nt,t[6]=(M*L-E*H-y*U)*nt,t[7]=(_*H-g*L+S*U)*nt,t[8]=(f*et-d*_t+p*T)*nt,t[9]=(s*_t-i*et-c*T)*nt,t[10]=(E*I-w*L+y*D)*nt,t[11]=(v*L-_*I-S*D)*nt,t[12]=(d*N-f*k-m*T)*nt,t[13]=(i*k-s*N+l*T)*nt,t[14]=(w*U-E*B-M*D)*nt,t[15]=(_*B-v*U+g*D)*nt,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,v=d+d,g=c*p,S=c*_,E=c*v,w=f*_,M=f*v,y=d*v,D=m*p,U=m*_,L=m*v,B=s.x,I=s.y,H=s.z;return l[0]=(1-(w+y))*B,l[1]=(S+L)*B,l[2]=(E-U)*B,l[3]=0,l[4]=(S-L)*I,l[5]=(1-(g+y))*I,l[6]=(M+D)*I,l[7]=0,l[8]=(E+U)*H,l[9]=(M-D)*H,l[10]=(1-(g+w))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Cr.set(l[0],l[1],l[2]).length();const d=Cr.set(l[4],l[5],l[6]).length(),m=Cr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ni.copy(this);const p=1/f,_=1/d,v=1/m;return Ni.elements[0]*=p,Ni.elements[1]*=p,Ni.elements[2]*=p,Ni.elements[4]*=_,Ni.elements[5]*=_,Ni.elements[6]*=_,Ni.elements[8]*=v,Ni.elements[9]*=v,Ni.elements[10]*=v,i.setFromRotationMatrix(Ni),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=Yi,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),S=(s+l)/(s-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(d===Yi)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(d===fl)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Yi,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(d===Yi)E=-2/(f-c),w=-(f+c)/(f-c);else if(d===fl)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Cr=new Y,Ni=new tn,qM=new Y(0,0,0),YM=new Y(1,1,1),is=new Y,Uc=new Y,ui=new Y,N_=new tn,O_=new ds;class Qi{constructor(t=0,i=0,s=0,l=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return N_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(N_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return O_.setFromEuler(this),this.setFromQuaternion(O_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class ex{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jM=0;const P_=new Y,wr=new ds,Sa=new tn,Lc=new Y,Zo=new Y,ZM=new Y,KM=new ds,z_=new Y(1,0,0),I_=new Y(0,1,0),F_=new Y(0,0,1),B_={type:"added"},JM={type:"removed"},Dr={type:"childadded",child:null},Vh={type:"childremoved",child:null};class Dn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const t=new Y,i=new Qi,s=new ds,l=new Y(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new _e}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ex,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(z_,t)}rotateY(t){return this.rotateOnAxis(I_,t)}rotateZ(t){return this.rotateOnAxis(F_,t)}translateOnAxis(t,i){return P_.copy(t).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(z_,t)}translateY(t){return this.translateOnAxis(I_,t)}translateZ(t){return this.translateOnAxis(F_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Lc.copy(t):Lc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(Zo,Lc,this.up):Sa.lookAt(Lc,Zo,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(Sa),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(B_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(JM),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(B_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,t,ZM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,KM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new Y(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vr extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),y=this._getHandJoint(p,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Vr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Xh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ve{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=bi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=FM(t,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Xh(f,c,t+1/3),this.g=Xh(f,c,t),this.b=Xh(f,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=bi){function s(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=bi){const s=nx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bi){return Le.workingToColorSpace(On.copy(this),t),Math.round(ye(On.r*255,0,255))*65536+Math.round(ye(On.g*255,0,255))*256+Math.round(ye(On.b*255,0,255))}getHexString(t=bi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=bi){Le.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==bi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(as),this.setHSL(as.h+t,as.s+i,as.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(as),t.getHSL(Nc);const s=Ih(as.h,Nc.h,i),l=Ih(as.s,Nc.s,i),c=Ih(as.l,Nc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new ve;ve.NAMES=nx;class $M extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new Y,ya=new Y,Wh=new Y,Ma=new Y,Ur=new Y,Lr=new Y,H_=new Y,qh=new Y,Yh=new Y,jh=new Y,Zh=new sn,Kh=new sn,Jh=new sn;class Ai{constructor(t=new Y,i=new Y,s=new Y){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Oi.subVectors(t,i),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Oi.subVectors(l,i),ya.subVectors(s,i),Wh.subVectors(t,i);const f=Oi.dot(Oi),d=Oi.dot(ya),m=Oi.dot(Wh),p=ya.dot(ya),_=ya.dot(Wh),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-d*_)*g,E=(f*_-d*m)*g;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ma.x),m.addScaledVector(f,Ma.y),m.addScaledVector(d,Ma.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Zh.setScalar(0),Kh.setScalar(0),Jh.setScalar(0),Zh.fromBufferAttribute(t,i),Kh.fromBufferAttribute(t,s),Jh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Zh,c.x),f.addScaledVector(Kh,c.y),f.addScaledVector(Jh,c.z),f}static isFrontFacing(t,i,s,l){return Oi.subVectors(s,i),ya.subVectors(t,i),Oi.cross(ya).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Oi.cross(ya).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Ur.subVectors(l,s),Lr.subVectors(c,s),qh.subVectors(t,s);const m=Ur.dot(qh),p=Lr.dot(qh);if(m<=0&&p<=0)return i.copy(s);Yh.subVectors(t,l);const _=Ur.dot(Yh),v=Lr.dot(Yh);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Ur,f);jh.subVectors(t,c);const S=Ur.dot(jh),E=Lr.dot(jh);if(E>=0&&S<=E)return i.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Lr,d);const M=_*E-S*v;if(M<=0&&v-_>=0&&S-E>=0)return H_.subVectors(c,l),d=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(H_,d);const y=1/(M+w+g);return f=w*y,d=g*y,i.copy(s).addScaledVector(Ur,f).addScaledVector(Lr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $r{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Oc.copy(s.boundingBox)),Oc.applyMatrix4(t.matrixWorld),this.union(Oc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ko),Pc.subVectors(this.max,Ko),Nr.subVectors(t.a,Ko),Or.subVectors(t.b,Ko),Pr.subVectors(t.c,Ko),ss.subVectors(Or,Nr),rs.subVectors(Pr,Or),Ls.subVectors(Nr,Pr);let i=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ls.z,Ls.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ls.z,0,-Ls.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ls.y,Ls.x,0];return!Qh(i,Nr,Or,Pr,Pc)||(i=[1,0,0,0,1,0,0,0,1],!Qh(i,Nr,Or,Pr,Pc))?!1:(zc.crossVectors(ss,rs),i=[zc.x,zc.y,zc.z],Qh(i,Nr,Or,Pr,Pc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ea=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Pi=new Y,Oc=new $r,Nr=new Y,Or=new Y,Pr=new Y,ss=new Y,rs=new Y,Ls=new Y,Ko=new Y,Pc=new Y,zc=new Y,Ns=new Y;function Qh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ns.fromArray(r,c);const d=l.x*Math.abs(Ns.x)+l.y*Math.abs(Ns.y)+l.z*Math.abs(Ns.z),m=t.dot(Ns),p=i.dot(Ns),_=s.dot(Ns);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const gn=new Y,Ic=new Vt;let tE=0;class Ki{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=A_,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ic.fromBufferAttribute(this,i),Ic.applyMatrix3(t),this.setXY(i,Ic.x,Ic.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=jo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=jo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=jo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=jo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=jo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==A_&&(t.usage=this.usage),t}}class ix extends Ki{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ax extends Ki{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Un extends Ki{constructor(t,i,s){super(new Float32Array(t),i,s)}}const eE=new $r,Jo=new Y,$h=new Y;class yu{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):eE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add($h)),this.expandByPoint(Jo.copy(t.center).sub($h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let nE=0;const Ei=new tn,td=new Dn,zr=new Y,fi=new $r,Qo=new $r,bn=new Y;class pi extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(OM(t)?ax:ix)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _e().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,i,s){return Ei.makeTranslation(t,i,s),this.applyMatrix4(Ei),this}scale(t,i,s){return Ei.makeScale(t,i,s),this.applyMatrix4(Ei),this}lookAt(t){return td.lookAt(t),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Un(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(fi.min,Qo.min),fi.expandByPoint(bn),bn.addVectors(fi.max,Qo.max),fi.expandByPoint(bn)):(fi.expandByPoint(Qo.min),fi.expandByPoint(Qo.max))}fi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)bn.fromBufferAttribute(d,p),m&&(zr.fromBufferAttribute(t,p),bn.add(zr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new Y,m[T]=new Y;const p=new Y,_=new Y,v=new Y,g=new Vt,S=new Vt,E=new Vt,w=new Y,M=new Y;function y(T,N,_t){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,N),v.fromBufferAttribute(s,_t),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,N),E.fromBufferAttribute(c,_t),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(k),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(k),d[T].add(w),d[N].add(w),d[_t].add(w),m[T].add(M),m[N].add(M),m[_t].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,N=D.length;T<N;++T){const _t=D[T],k=_t.start,et=_t.count;for(let at=k,ot=k+et;at<ot;at+=3)y(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const U=new Y,L=new Y,B=new Y,I=new Y;function H(T){B.fromBufferAttribute(l,T),I.copy(B);const N=d[T];U.copy(N),U.sub(B.multiplyScalar(B.dot(N))).normalize(),L.crossVectors(I,N);const k=L.dot(m[T])<0?-1:1;f.setXYZW(T,U.x,U.y,U.z,k)}for(let T=0,N=D.length;T<N;++T){const _t=D[T],k=_t.start,et=_t.count;for(let at=k,ot=k+et;at<ot;at+=3)H(t.getX(at+0)),H(t.getX(at+1)),H(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ki(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new Y,c=new Y,f=new Y,d=new Y,m=new Y,p=new Y,_=new Y,v=new Y;if(t)for(let g=0,S=t.count;g<S;g+=3){const E=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?S=m[w]*d.data.stride+d.offset:S=m[w]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new Ki(g,_,v)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=t(g,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let iE=0;class to extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=kr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=yd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sd&&(s.blendSrc=this.blendSrc),this.blendDst!==yd&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ba=new Y,ed=new Y,Fc=new Y,os=new Y,nd=new Y,Bc=new Y,id=new Y;class Tp{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ed.copy(t).add(i).multiplyScalar(.5),Fc.copy(i).sub(t).normalize(),os.copy(this.origin).sub(ed);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Fc),d=os.dot(this.direction),m=-os.dot(Fc),p=os.lengthSq(),_=Math.abs(1-f*f);let v,g,S,E;if(_>0)if(v=f*m-d,g=f*d-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const w=1/_;v*=w,g*=w,S=v*(v+f*g+2*d)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ed).addScaledVector(Fc,g),S}intersectSphere(t,i){ba.subVectors(t.center,this.origin);const s=ba.dot(this.direction),l=ba.dot(ba)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ba)!==null}intersectTriangle(t,i,s,l,c){nd.subVectors(i,t),Bc.subVectors(s,t),id.crossVectors(nd,Bc);let f=this.direction.dot(id),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;os.subVectors(this.origin,t);const m=d*this.direction.dot(Bc.crossVectors(os,Bc));if(m<0)return null;const p=d*this.direction.dot(nd.cross(os));if(p<0||m+p>f)return null;const _=-d*os.dot(id);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sx extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const G_=new tn,Os=new Tp,Hc=new yu,V_=new Y,Gc=new Y,Vc=new Y,kc=new Y,ad=new Y,Xc=new Y,k_=new Y,Wc=new Y;class di extends Dn{constructor(t=new pi,i=new sx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Xc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(ad.fromBufferAttribute(v,t),f?Xc.addScaledVector(ad,_):Xc.addScaledVector(ad.sub(i),_))}i.add(Xc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(c),Os.copy(t.ray).recast(t.near),!(Hc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Hc,V_)===null||Os.origin.distanceToSquared(V_)>(t.far-t.near)**2))&&(G_.copy(c).invert(),Os.copy(t.ray).applyMatrix4(G_),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Os)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],y=f[M.materialIndex],D=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let L=D,B=U;L<B;L+=3){const I=d.getX(L),H=d.getX(L+1),T=d.getX(L+2);l=qc(this,y,t,s,p,_,v,I,H,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let M=E,y=w;M<y;M+=3){const D=d.getX(M),U=d.getX(M+1),L=d.getX(M+2);l=qc(this,f,t,s,p,_,v,D,U,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],y=f[M.materialIndex],D=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let L=D,B=U;L<B;L+=3){const I=L,H=L+1,T=L+2;l=qc(this,y,t,s,p,_,v,I,H,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=E,y=w;M<y;M+=3){const D=M,U=M+1,L=M+2;l=qc(this,f,t,s,p,_,v,D,U,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function aE(r,t,i,s,l,c,f,d){let m;if(t.side===$n?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===hs,d),m===null)return null;Wc.copy(d),Wc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Wc);return p<i.near||p>i.far?null:{distance:p,point:Wc.clone(),object:r}}function qc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Gc),r.getVertexPosition(m,Vc),r.getVertexPosition(p,kc);const _=aE(r,t,i,s,Gc,Vc,kc,k_);if(_){const v=new Y;Ai.getBarycoord(k_,Gc,Vc,kc,v),l&&(_.uv=Ai.getInterpolatedAttribute(l,d,m,p,v,new Vt)),c&&(_.uv1=Ai.getInterpolatedAttribute(c,d,m,p,v,new Vt)),f&&(_.normal=Ai.getInterpolatedAttribute(f,d,m,p,v,new Y),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new Y,materialIndex:0};Ai.getNormal(Gc,Vc,kc,g.normal),_.face=g,_.barycoord=v}return _}class sE extends zn{constructor(t=null,i=1,s=1,l,c,f,d,m,p=wn,_=wn,v,g){super(null,f,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sd=new Y,rE=new Y,oE=new _e;class cs{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=sd.subVectors(s,i).cross(rE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(sd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||oE.getNormalMatrix(t),l=this.coplanarPoint(sd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new yu,lE=new Vt(.5,.5),Yc=new Y;class Ap{constructor(t=new cs,i=new cs,s=new cs,l=new cs,c=new cs,f=new cs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Yi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],w=c[9],M=c[10],y=c[11],D=c[12],U=c[13],L=c[14],B=c[15];if(l[0].setComponents(p-f,S-_,y-E,B-D).normalize(),l[1].setComponents(p+f,S+_,y+E,B+D).normalize(),l[2].setComponents(p+d,S+v,y+w,B+U).normalize(),l[3].setComponents(p-d,S-v,y-w,B-U).normalize(),s)l[4].setComponents(m,g,M,L).normalize(),l[5].setComponents(p-m,S-g,y-M,B-L).normalize();else if(l[4].setComponents(p-m,S-g,y-M,B-L).normalize(),i===Yi)l[5].setComponents(p+m,S+g,y+M,B+L).normalize();else if(i===fl)l[5].setComponents(m,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);const i=lE.distanceTo(t.center);return Ps.radius=.7071067811865476+i,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Yc.x=l.normal.x>0?t.max.x:t.min.x,Yc.y=l.normal.y>0?t.max.y:t.min.y,Yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _u extends to{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vu=new Y,xu=new Y,X_=new tn,$o=new Tp,jc=new yu,rd=new Y,W_=new Y;class cE extends Dn{constructor(t=new pi,i=new _u){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)vu.fromBufferAttribute(i,l-1),xu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=vu.distanceTo(xu);t.setAttribute("lineDistance",new Un(s,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),jc.copy(s.boundingSphere),jc.applyMatrix4(l),jc.radius+=c,t.ray.intersectsSphere(jc)===!1)return;X_.copy(l).invert(),$o.copy(t.ray).applyMatrix4(X_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let w=S,M=E-1;w<M;w+=p){const y=_.getX(w),D=_.getX(w+1),U=Zc(this,t,$o,m,y,D,w);U&&i.push(U)}if(this.isLineLoop){const w=_.getX(E-1),M=_.getX(S),y=Zc(this,t,$o,m,w,M,E-1);y&&i.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let w=S,M=E-1;w<M;w+=p){const y=Zc(this,t,$o,m,w,w+1,w);y&&i.push(y)}if(this.isLineLoop){const w=Zc(this,t,$o,m,E-1,S,E-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Zc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(vu.fromBufferAttribute(d,l),xu.fromBufferAttribute(d,c),i.distanceSqToSegment(vu,xu,rd,W_)>s)return;rd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(rd);if(!(p<t.near||p>t.far))return{distance:p,point:W_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const q_=new Y,Y_=new Y;class cp extends cE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)q_.fromBufferAttribute(i,l),Y_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+q_.distanceTo(Y_);t.setAttribute("lineDistance",new Un(s,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rx extends zn{constructor(t=[],i=Vs,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dl extends zn{constructor(t,i,s=Ji,l,c,f,d=wn,m=wn,p,_=Da,v=1){if(_!==Da&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class uE extends dl{constructor(t,i=Ji,s=Vs,l,c,f=wn,d=wn,m,p=Da){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ox extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class eo extends pi{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Un(p,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(v,2));function E(w,M,y,D,U,L,B,I,H,T,N){const _t=L/H,k=B/T,et=L/2,at=B/2,ot=I/2,nt=H+1,P=T+1;let G=0,ct=0;const mt=new Y;for(let Ct=0;Ct<P;Ct++){const R=Ct*k-at;for(let z=0;z<nt;z++){const J=z*_t-et;mt[w]=J*D,mt[M]=R*U,mt[y]=ot,p.push(mt.x,mt.y,mt.z),mt[w]=0,mt[M]=0,mt[y]=I>0?1:-1,_.push(mt.x,mt.y,mt.z),v.push(z/H),v.push(1-Ct/T),G+=1}}for(let Ct=0;Ct<T;Ct++)for(let R=0;R<H;R++){const z=g+R+nt*Ct,J=g+R+nt*(Ct+1),ht=g+(R+1)+nt*(Ct+1),wt=g+(R+1)+nt*Ct;m.push(z,J,wt),m.push(J,ht,wt),ct+=6}d.addGroup(S,ct,N),S+=ct,g+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const Kc=new Y,Jc=new Y,od=new Y,Qc=new Ai;class j_ extends pi{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(sl*i),f=t.getIndex(),d=t.getAttribute("position"),m=f?f.count:d.count,p=[0,0,0],_=["a","b","c"],v=new Array(3),g={},S=[];for(let E=0;E<m;E+=3){f?(p[0]=f.getX(E),p[1]=f.getX(E+1),p[2]=f.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:w,b:M,c:y}=Qc;if(w.fromBufferAttribute(d,p[0]),M.fromBufferAttribute(d,p[1]),y.fromBufferAttribute(d,p[2]),Qc.getNormal(od),v[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,v[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,v[2]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let D=0;D<3;D++){const U=(D+1)%3,L=v[D],B=v[U],I=Qc[_[D]],H=Qc[_[U]],T=`${L}_${B}`,N=`${B}_${L}`;N in g&&g[N]?(od.dot(g[N].normal)<=c&&(S.push(I.x,I.y,I.z),S.push(H.x,H.y,H.z)),g[N]=null):T in g||(g[T]={index0:p[D],index1:p[U],normal:od.clone()})}}for(const E in g)if(g[E]){const{index0:w,index1:M}=g[E];Kc.fromBufferAttribute(d,w),Jc.fromBufferAttribute(d,M),S.push(Kc.x,Kc.y,Kc.z),S.push(Jc.x,Jc.y,Jc.z)}this.setAttribute("position",new Un(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ta{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,S=(f-_)/g;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new Vt:new Y);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new Y,l=[],c=[],f=[],d=new Y,m=new tn;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new Y)}c[0]=new Y,f[0]=new Y;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(ye(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,E))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(ye(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rp extends ta{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Vt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=m-this.aX,S=p-this.aY;m=g*_-S*v+this.aX,p=g*v+S*_+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class fE extends Rp{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Cp(){let r=0,t=0,i=0,s=0;function l(c,f,d,m){r=c,t=d,i=-3*c+3*f-2*d-m,s=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,_,v){let g=(f-c)/p-(d-c)/(p+_)+(d-f)/_,S=(d-f)/_-(m-f)/(_+v)+(m-d)/v;g*=_,S*=_,l(f,d,g,S)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const $c=new Y,ld=new Cp,cd=new Cp,ud=new Cp;class hE extends ta{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new Y){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:($c.subVectors(l[0],l[1]).add(l[0]),p=$c);const v=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:($c.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=$c),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),S),w=Math.pow(v.distanceToSquared(g),S),M=Math.pow(g.distanceToSquared(_),S);w<1e-4&&(w=1),E<1e-4&&(E=w),M<1e-4&&(M=w),ld.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,w,M),cd.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,w,M),ud.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,w,M)}else this.curveType==="catmullrom"&&(ld.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),cd.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),ud.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(ld.calc(m),cd.calc(m),ud.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Y().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Z_(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+f)*m+(-3*i+3*s-2*c-f)*d+c*r+i}function dE(r,t){const i=1-r;return i*i*t}function pE(r,t){return 2*(1-r)*r*t}function mE(r,t){return r*r*t}function rl(r,t,i,s){return dE(r,t)+pE(r,i)+mE(r,s)}function gE(r,t){const i=1-r;return i*i*i*t}function _E(r,t){const i=1-r;return 3*i*i*r*t}function vE(r,t){return 3*(1-r)*r*r*t}function xE(r,t){return r*r*r*t}function ol(r,t,i,s,l){return gE(r,t)+_E(r,i)+vE(r,s)+xE(r,l)}class lx extends ta{constructor(t=new Vt,i=new Vt,s=new Vt,l=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Vt){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(ol(t,l.x,c.x,f.x,d.x),ol(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class SE extends ta{constructor(t=new Y,i=new Y,s=new Y,l=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Y){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(ol(t,l.x,c.x,f.x,d.x),ol(t,l.y,c.y,f.y,d.y),ol(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cx extends ta{constructor(t=new Vt,i=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Vt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Vt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yE extends ta{constructor(t=new Y,i=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Y){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Y){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ux extends ta{constructor(t=new Vt,i=new Vt,s=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Vt){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(rl(t,l.x,c.x,f.x),rl(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ME extends ta{constructor(t=new Y,i=new Y,s=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Y){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(rl(t,l.x,c.x,f.x),rl(t,l.y,c.y,f.y),rl(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fx extends ta{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Vt){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],_=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(Z_(d,m.x,p.x,_.x,v.x),Z_(d,m.y,p.y,_.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Vt().fromArray(l))}return this}}var K_=Object.freeze({__proto__:null,ArcCurve:fE,CatmullRomCurve3:hE,CubicBezierCurve:lx,CubicBezierCurve3:SE,EllipseCurve:Rp,LineCurve:cx,LineCurve3:yE,QuadraticBezierCurve:ux,QuadraticBezierCurve3:ME,SplineCurve:fx});class EE extends ta{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new K_[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,d=this.curves[c],m=d.getLength(),p=m===0?0:1-f/m;return d.getPointAt(p,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(d);for(let p=0;p<m.length;p++){const _=m[p];s&&s.equals(_)||(i.push(_),s=_)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new K_[l.type]().fromJSON(l))}return this}}class J_ extends EE{constructor(t){super(),this.type="Path",this.currentPoint=new Vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new cx(this.currentPoint.clone(),new Vt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new ux(this.currentPoint.clone(),new Vt(t,i),new Vt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,f){const d=new lx(this.currentPoint.clone(),new Vt(t,i),new Vt(s,l),new Vt(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new fx(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,f){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,i+m,s,l,c,f),this}absarc(t,i,s,l,c,f){return this.absellipse(t,i,s,s,l,c,f),this}ellipse(t,i,s,l,c,f,d,m){const p=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(t+p,i+_,s,l,c,f,d,m),this}absellipse(t,i,s,l,c,f,d,m){const p=new Rp(t,i,s,l,c,f,d,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const _=p.getPoint(1);return this.currentPoint.copy(_),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hx extends J_{constructor(t){super(t),this.uuid=Qr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new J_().fromJSON(l))}return this}}function bE(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=dx(r,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,m,p;if(s&&(c=wE(r,t,c,i)),r.length>80*i){d=r[0],m=r[1];let _=d,v=m;for(let g=i;g<l;g+=i){const S=r[g],E=r[g+1];S<d&&(d=S),E<m&&(m=E),S>_&&(_=S),E>v&&(v=E)}p=Math.max(_-d,v-m),p=p!==0?32767/p:0}return pl(c,f,i,d,m,p,0),f}function dx(r,t,i,s,l){let c;if(l===HE(r,t,i,s)>0)for(let f=t;f<i;f+=s)c=Q_(f/s|0,r[f],r[f+1],c);else for(let f=i-s;f>=t;f-=s)c=Q_(f/s|0,r[f],r[f+1],c);return c&&Zr(c,c.next)&&(gl(c),c=c.next),c}function ks(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(Zr(i,i.next)||en(i.prev,i,i.next)===0)){if(gl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function pl(r,t,i,s,l,c,f){if(!r)return;!f&&c&&OE(r,s,l,c);let d=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?AE(r,s,l,c):TE(r)){t.push(m.i,r.i,p.i),gl(r),r=p.next,d=p.next;continue}if(r=p,r===d){f?f===1?(r=RE(ks(r),t),pl(r,t,i,s,l,c,2)):f===2&&CE(r,t,i,s,l,c):pl(ks(r),t,i,s,l,c,1);break}}}function TE(r){const t=r.prev,i=r,s=r.next;if(en(t,i,s)>=0)return!1;const l=t.x,c=i.x,f=s.x,d=t.y,m=i.y,p=s.y,_=Math.min(l,c,f),v=Math.min(d,m,p),g=Math.max(l,c,f),S=Math.max(d,m,p);let E=s.next;for(;E!==t;){if(E.x>=_&&E.x<=g&&E.y>=v&&E.y<=S&&il(l,d,c,m,f,p,E.x,E.y)&&en(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function AE(r,t,i,s){const l=r.prev,c=r,f=r.next;if(en(l,c,f)>=0)return!1;const d=l.x,m=c.x,p=f.x,_=l.y,v=c.y,g=f.y,S=Math.min(d,m,p),E=Math.min(_,v,g),w=Math.max(d,m,p),M=Math.max(_,v,g),y=up(S,E,t,i,s),D=up(w,M,t,i,s);let U=r.prevZ,L=r.nextZ;for(;U&&U.z>=y&&L&&L.z<=D;){if(U.x>=S&&U.x<=w&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&il(d,_,m,v,p,g,U.x,U.y)&&en(U.prev,U,U.next)>=0||(U=U.prevZ,L.x>=S&&L.x<=w&&L.y>=E&&L.y<=M&&L!==l&&L!==f&&il(d,_,m,v,p,g,L.x,L.y)&&en(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;U&&U.z>=y;){if(U.x>=S&&U.x<=w&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&il(d,_,m,v,p,g,U.x,U.y)&&en(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;L&&L.z<=D;){if(L.x>=S&&L.x<=w&&L.y>=E&&L.y<=M&&L!==l&&L!==f&&il(d,_,m,v,p,g,L.x,L.y)&&en(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function RE(r,t){let i=r;do{const s=i.prev,l=i.next.next;!Zr(s,l)&&mx(s,i,i.next,l)&&ml(s,l)&&ml(l,s)&&(t.push(s.i,i.i,l.i),gl(i),gl(i.next),i=r=l),i=i.next}while(i!==r);return ks(i)}function CE(r,t,i,s,l,c){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&IE(f,d)){let m=gx(f,d);f=ks(f,f.next),m=ks(m,m.next),pl(f,t,i,s,l,c,0),pl(m,t,i,s,l,c,0);return}d=d.next}f=f.next}while(f!==r)}function wE(r,t,i,s){const l=[];for(let c=0,f=t.length;c<f;c++){const d=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=dx(r,d,m,s,!1);p===p.next&&(p.steiner=!0),l.push(zE(p))}l.sort(DE);for(let c=0;c<l.length;c++)i=UE(l[c],i);return i}function DE(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function UE(r,t){const i=LE(r,t);if(!i)return t;const s=gx(i,r);return ks(s,s.next),ks(i,i.next)}function LE(r,t){let i=t;const s=r.x,l=r.y;let c=-1/0,f;if(Zr(r,i))return i;do{if(Zr(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const v=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(v<=s&&v>c&&(c=v,f=i.x<i.next.x?i:i.next,v===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,m=f.x,p=f.y;let _=1/0;i=f;do{if(s>=i.x&&i.x>=m&&s!==i.x&&px(l<p?s:c,l,m,p,l<p?c:s,l,i.x,i.y)){const v=Math.abs(l-i.y)/(s-i.x);ml(i,r)&&(v<_||v===_&&(i.x>f.x||i.x===f.x&&NE(f,i)))&&(f=i,_=v)}i=i.next}while(i!==d);return f}function NE(r,t){return en(r.prev,r,t.prev)<0&&en(t.next,r,r.next)<0}function OE(r,t,i,s){let l=r;do l.z===0&&(l.z=up(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,PE(l)}function PE(r){let t,i=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,d=0;for(let p=0;p<i&&(d++,f=f.nextZ,!!f);p++);let m=i;for(;d>0||m>0&&f;)d!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,i*=2}while(t>1);return r}function up(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function zE(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function px(r,t,i,s,l,c,f,d){return(l-f)*(t-d)>=(r-f)*(c-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(s-d)}function il(r,t,i,s,l,c,f,d){return!(r===f&&t===d)&&px(r,t,i,s,l,c,f,d)}function IE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!FE(r,t)&&(ml(r,t)&&ml(t,r)&&BE(r,t)&&(en(r.prev,r,t.prev)||en(r,t.prev,t))||Zr(r,t)&&en(r.prev,r,r.next)>0&&en(t.prev,t,t.next)>0)}function en(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function Zr(r,t){return r.x===t.x&&r.y===t.y}function mx(r,t,i,s){const l=eu(en(r,t,i)),c=eu(en(r,t,s)),f=eu(en(i,s,r)),d=eu(en(i,s,t));return!!(l!==c&&f!==d||l===0&&tu(r,i,t)||c===0&&tu(r,s,t)||f===0&&tu(i,r,s)||d===0&&tu(i,t,s))}function tu(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function eu(r){return r>0?1:r<0?-1:0}function FE(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&mx(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function ml(r,t){return en(r.prev,r,r.next)<0?en(r,t,r.next)>=0&&en(r,r.prev,t)>=0:en(r,t,r.prev)<0||en(r,r.next,t)<0}function BE(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function gx(r,t){const i=fp(r.i,r.x,r.y),s=fp(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function Q_(r,t,i,s){const l=fp(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function gl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function fp(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function HE(r,t,i,s){let l=0;for(let c=t,f=i-s;c<i;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class GE{static triangulate(t,i,s=2){return bE(t,i,s)}}class ll{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return ll.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];$_(t),tv(s,t);let f=t.length;i.forEach($_);for(let m=0;m<i.length;m++)l.push(f),f+=i[m].length,tv(s,i[m]);const d=GE.triangulate(s,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function $_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function tv(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class _l extends pi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=i/m,S=[],E=[],w=[],M=[];for(let y=0;y<_;y++){const D=y*g-f;for(let U=0;U<p;U++){const L=U*v-c;E.push(L,-D,0),w.push(0,0,1),M.push(U/d),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<d;D++){const U=D+p*y,L=D+p*(y+1),B=D+1+p*(y+1),I=D+1+p*y;S.push(U,L,I),S.push(L,B,I)}this.setIndex(S),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(w,3)),this.setAttribute("uv",new Un(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.width,t.height,t.widthSegments,t.heightSegments)}}class wp extends pi{constructor(t=new hx([new Vt(0,.5),new Vt(-.5,-.5),new Vt(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const s=[],l=[],c=[],f=[];let d=0,m=0;if(Array.isArray(t)===!1)p(t);else for(let _=0;_<t.length;_++)p(t[_]),this.addGroup(d,m,_),d+=m,m=0;this.setIndex(s),this.setAttribute("position",new Un(l,3)),this.setAttribute("normal",new Un(c,3)),this.setAttribute("uv",new Un(f,2));function p(_){const v=l.length/3,g=_.extractPoints(i);let S=g.shape;const E=g.holes;ll.isClockWise(S)===!1&&(S=S.reverse());for(let M=0,y=E.length;M<y;M++){const D=E[M];ll.isClockWise(D)===!0&&(E[M]=D.reverse())}const w=ll.triangulateShape(S,E);for(let M=0,y=E.length;M<y;M++){const D=E[M];S=S.concat(D)}for(let M=0,y=S.length;M<y;M++){const D=S[M];l.push(D.x,D.y,0),c.push(0,0,1),f.push(D.x,D.y)}for(let M=0,y=w.length;M<y;M++){const D=w[M],U=D[0]+v,L=D[1]+v,B=D[2]+v;s.push(U,L,B),m+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return VE(i,t)}static fromJSON(t,i){const s=[];for(let l=0,c=t.shapes.length;l<c;l++){const f=i[t.shapes[l]];s.push(f)}return new wp(s,t.curveSegments)}}function VE(r,t){if(t.shapes=[],Array.isArray(r))for(let i=0,s=r.length;i<s;i++){const l=r[i];t.shapes.push(l.uuid)}else t.shapes.push(r.uuid);return t}function Kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Vn(r){const t={};for(let i=0;i<r.length;i++){const s=Kr(r[i]);for(const l in s)t[l]=s[l]}return t}function kE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function _x(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const XE={clone:Kr,merge:Vn};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=qE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=kE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class YE extends $i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vx extends to{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qv,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jE extends vx{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ZE extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class KE extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(ev(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!ev(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function ev(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class JE{constructor(t,i,s){const l=this;let c=!1,f=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,d),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,d),f===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=p.length;v<g;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const QE=new JE;class Dp{constructor(t){this.manager=t!==void 0?t:QE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Dp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ir=new WeakMap;class $E extends Dp{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=fd.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let v=Ir.get(f);v===void 0&&(v=[],Ir.set(f,v)),v.push({onLoad:i,onError:l})}return f}const d=hl("img");function m(){_(),i&&i(this);const v=Ir.get(this)||[];for(let g=0;g<v.length;g++){const S=v[g];S.onLoad&&S.onLoad(this)}Ir.delete(this),c.manager.itemEnd(t)}function p(v){_(),l&&l(v),fd.remove(`image:${t}`);const g=Ir.get(this)||[];for(let S=0;S<g.length;S++){const E=g[S];E.onError&&E.onError(v)}Ir.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),fd.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class tb extends Dp{constructor(t){super(t)}load(t,i,s,l){const c=new zn,f=new $E(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class xx extends Dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const hd=new tn,nv=new Y,iv=new Y;class eb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ap,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;nv.setFromMatrixPosition(t.matrixWorld),i.position.copy(nv),iv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(iv),i.updateMatrixWorld(),hd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===fl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(hd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nu=new Y,iu=new ds,ki=new Y;class Sx extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nu,iu,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,ki.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(nu,iu,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new Y,av=new Vt,sv=new Vt;class Ti extends Sx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lp*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,i){return this.getViewBounds(t,av,sv),i.subVectors(sv,av)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Up extends Sx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nb extends eb{constructor(){super(new Up(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rv extends xx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new nb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class ib extends xx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fr=-90,Br=1;class ab extends Dn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(Fr,Br,t,i);l.layers=this.layers,this.add(l);const c=new Ti(Fr,Br,t,i);c.layers=this.layers,this.add(c);const f=new Ti(Fr,Br,t,i);f.layers=this.layers,this.add(f);const d=new Ti(Fr,Br,t,i);d.layers=this.layers,this.add(d);const m=new Ti(Fr,Br,t,i);m.layers=this.layers,this.add(m);const p=new Ti(Fr,Br,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===fl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class sb extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ov{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ye(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rb extends cp{constructor(t=10,i=10,s=4473924,l=8947848){s=new ve(s),l=new ve(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let g=0,S=0,E=-d;g<=i;g++,E+=f){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const w=g===c?s:l;w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3}const _=new pi;_.setAttribute("position",new Un(m,3)),_.setAttribute("color",new Un(p,3));const v=new _u({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ob extends Xs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function lv(r,t,i,s){const l=lb(s);switch(i){case Zv:return r*t;case Jv:return r*t/l.components*l.byteLength;case xp:return r*t/l.components*l.byteLength;case Yr:return r*t*2/l.components*l.byteLength;case Sp:return r*t*2/l.components*l.byteLength;case Kv:return r*t*3/l.components*l.byteLength;case Ii:return r*t*4/l.components*l.byteLength;case yp:return r*t*4/l.components*l.byteLength;case cu:case uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case fu:case hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:case Nd:return Math.max(r,16)*Math.max(t,8)/4;case Dd:case Ld:return Math.max(r,8)*Math.max(t,8)/2;case Od:case Pd:case Id:case Fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zd:case Bd:case Hd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case kd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case qd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case jd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Qd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case $d:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case tp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ep:case np:case ip:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ap:case sp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case rp:case op:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lb(r){switch(r){case hi:case Wv:return{byteLength:1,components:1};case cl:case qv:case wa:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case Ji:case gp:case qi:return{byteLength:4,components:1};case Yv:case jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);function yx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function cb(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fb=`#ifdef USE_ALPHAHASH
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
#endif`,hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
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
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
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
#endif`,bb=`#ifdef USE_BUMPMAP
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
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Nb=`#define PI 3.141592653589793
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
} // validated`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pb=`vec3 transformedNormal = objectNormal;
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
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vb=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
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
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eT=`uniform bool receiveShadow;
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
#endif`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oT=`PhysicalMaterial material;
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
#endif`,lT=`uniform sampler2D dfgLUT;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
}`,cT=`
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
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xT=`#if defined( USE_POINTS_UV )
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
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ET=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TT=`#ifdef USE_MORPHTARGETS
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
#endif`,AT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LT=`#ifdef USE_NORMALMAP
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
#endif`,NT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,BT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jT=`float getShadowMask() {
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
}`,ZT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KT=`#ifdef USE_SKINNING
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
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QT=`#ifdef USE_SKINNING
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
#endif`,$T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
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
#endif`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u1=`uniform sampler2D t2D;
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
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
}`,g1=`#if DEPTH_PACKING == 3200
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
}`,_1=`#define DISTANCE
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
}`,v1=`#define DISTANCE
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`uniform float scale;
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,b1=`uniform vec3 diffuse;
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
}`,T1=`#define LAMBERT
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
}`,A1=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,R1=`#define MATCAP
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
}`,C1=`#define MATCAP
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
}`,w1=`#define NORMAL
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
}`,D1=`#define NORMAL
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
}`,U1=`#define PHONG
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
}`,L1=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,N1=`#define STANDARD
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
}`,O1=`#define STANDARD
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
}`,P1=`#define TOON
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
}`,z1=`#define TOON
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
}`,I1=`uniform float size;
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
}`,F1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,G1=`uniform float rotation;
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
}`,V1=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:ub,alphahash_pars_fragment:fb,alphamap_fragment:hb,alphamap_pars_fragment:db,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:_b,batching_pars_vertex:vb,batching_vertex:xb,begin_vertex:Sb,beginnormal_vertex:yb,bsdfs:Mb,iridescence_fragment:Eb,bumpmap_pars_fragment:bb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:Rb,clipping_planes_vertex:Cb,color_fragment:wb,color_pars_fragment:Db,color_pars_vertex:Ub,color_vertex:Lb,common:Nb,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:Pb,displacementmap_pars_vertex:zb,displacementmap_vertex:Ib,emissivemap_fragment:Fb,emissivemap_pars_fragment:Bb,colorspace_fragment:Hb,colorspace_pars_fragment:Gb,envmap_fragment:Vb,envmap_common_pars_fragment:kb,envmap_pars_fragment:Xb,envmap_pars_vertex:Wb,envmap_physical_pars_fragment:nT,envmap_vertex:qb,fog_vertex:Yb,fog_pars_vertex:jb,fog_fragment:Zb,fog_pars_fragment:Kb,gradientmap_pars_fragment:Jb,lightmap_pars_fragment:Qb,lights_lambert_fragment:$b,lights_lambert_pars_fragment:tT,lights_pars_begin:eT,lights_toon_fragment:iT,lights_toon_pars_fragment:aT,lights_phong_fragment:sT,lights_phong_pars_fragment:rT,lights_physical_fragment:oT,lights_physical_pars_fragment:lT,lights_fragment_begin:cT,lights_fragment_maps:uT,lights_fragment_end:fT,logdepthbuf_fragment:hT,logdepthbuf_pars_fragment:dT,logdepthbuf_pars_vertex:pT,logdepthbuf_vertex:mT,map_fragment:gT,map_pars_fragment:_T,map_particle_fragment:vT,map_particle_pars_fragment:xT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:yT,morphinstance_vertex:MT,morphcolor_vertex:ET,morphnormal_vertex:bT,morphtarget_pars_vertex:TT,morphtarget_vertex:AT,normal_fragment_begin:RT,normal_fragment_maps:CT,normal_pars_fragment:wT,normal_pars_vertex:DT,normal_vertex:UT,normalmap_pars_fragment:LT,clearcoat_normal_fragment_begin:NT,clearcoat_normal_fragment_maps:OT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:zT,opaque_fragment:IT,packing:FT,premultiplied_alpha_fragment:BT,project_vertex:HT,dithering_fragment:GT,dithering_pars_fragment:VT,roughnessmap_fragment:kT,roughnessmap_pars_fragment:XT,shadowmap_pars_fragment:WT,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:jT,skinbase_vertex:ZT,skinning_pars_vertex:KT,skinning_vertex:JT,skinnormal_vertex:QT,specularmap_fragment:$T,specularmap_pars_fragment:t1,tonemapping_fragment:e1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:a1,uv_pars_fragment:s1,uv_pars_vertex:r1,uv_vertex:o1,worldpos_vertex:l1,background_vert:c1,background_frag:u1,backgroundCube_vert:f1,backgroundCube_frag:h1,cube_vert:d1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distance_vert:_1,distance_frag:v1,equirect_vert:x1,equirect_frag:S1,linedashed_vert:y1,linedashed_frag:M1,meshbasic_vert:E1,meshbasic_frag:b1,meshlambert_vert:T1,meshlambert_frag:A1,meshmatcap_vert:R1,meshmatcap_frag:C1,meshnormal_vert:w1,meshnormal_frag:D1,meshphong_vert:U1,meshphong_frag:L1,meshphysical_vert:N1,meshphysical_frag:O1,meshtoon_vert:P1,meshtoon_frag:z1,points_vert:I1,points_frag:F1,shadow_vert:B1,shadow_frag:H1,sprite_vert:G1,sprite_frag:V1},Ht={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Wi={basic:{uniforms:Vn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Vn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Vn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Vn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Vn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Vn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Vn([Ht.points,Ht.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Vn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Vn([Ht.common,Ht.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Vn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Vn([Ht.sprite,Ht.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Vn([Ht.common,Ht.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Vn([Ht.lights,Ht.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Wi.physical={uniforms:Vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const au={r:0,b:0,g:0},zs=new Qi,k1=new tn;function X1(r,t,i,s,l,c){const f=new ve(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function S(D){let U=D.isScene===!0?D.background:null;if(U&&U.isTexture){const L=D.backgroundBlurriness>0;U=t.get(U,L)}return U}function E(D){let U=!1;const L=S(D);L===null?M(f,d):L&&L.isColor&&(M(L,1),U=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(D,U){const L=S(U);L&&(L.isCubeTexture||L.mapping===Su)?(p===void 0&&(p=new di(new eo(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Kr(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),zs.copy(U.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(zs)),p.material.toneMapped=Le.getTransfer(L.colorSpace)!==Ve,(_!==L||v!==L.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=L,v=L.version,g=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new di(new _l(2,2),new $i({name:"BackgroundMaterial",uniforms:Kr(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Le.getTransfer(L.colorSpace)!==Ve,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=L,v=L.version,g=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,U){D.getRGB(au,_x(r)),i.buffers.color.setClear(au.r,au.g,au.b,U,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,U=1){f.set(D),d=U,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,M(f,d)},render:E,addToRenderList:w,dispose:y}}function W1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(k,et,at,ot,nt){let P=!1;const G=v(k,ot,at,et);c!==G&&(c=G,p(c.object)),P=S(k,ot,at,nt),P&&E(k,ot,at,nt),nt!==null&&t.update(nt,r.ELEMENT_ARRAY_BUFFER),(P||f)&&(f=!1,L(k,et,at,ot),nt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function m(){return r.createVertexArray()}function p(k){return r.bindVertexArray(k)}function _(k){return r.deleteVertexArray(k)}function v(k,et,at,ot){const nt=ot.wireframe===!0;let P=s[et.id];P===void 0&&(P={},s[et.id]=P);const G=k.isInstancedMesh===!0?k.id:0;let ct=P[G];ct===void 0&&(ct={},P[G]=ct);let mt=ct[at.id];mt===void 0&&(mt={},ct[at.id]=mt);let Ct=mt[nt];return Ct===void 0&&(Ct=g(m()),mt[nt]=Ct),Ct}function g(k){const et=[],at=[],ot=[];for(let nt=0;nt<i;nt++)et[nt]=0,at[nt]=0,ot[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:at,attributeDivisors:ot,object:k,attributes:{},index:null}}function S(k,et,at,ot){const nt=c.attributes,P=et.attributes;let G=0;const ct=at.getAttributes();for(const mt in ct)if(ct[mt].location>=0){const R=nt[mt];let z=P[mt];if(z===void 0&&(mt==="instanceMatrix"&&k.instanceMatrix&&(z=k.instanceMatrix),mt==="instanceColor"&&k.instanceColor&&(z=k.instanceColor)),R===void 0||R.attribute!==z||z&&R.data!==z.data)return!0;G++}return c.attributesNum!==G||c.index!==ot}function E(k,et,at,ot){const nt={},P=et.attributes;let G=0;const ct=at.getAttributes();for(const mt in ct)if(ct[mt].location>=0){let R=P[mt];R===void 0&&(mt==="instanceMatrix"&&k.instanceMatrix&&(R=k.instanceMatrix),mt==="instanceColor"&&k.instanceColor&&(R=k.instanceColor));const z={};z.attribute=R,R&&R.data&&(z.data=R.data),nt[mt]=z,G++}c.attributes=nt,c.attributesNum=G,c.index=ot}function w(){const k=c.newAttributes;for(let et=0,at=k.length;et<at;et++)k[et]=0}function M(k){y(k,0)}function y(k,et){const at=c.newAttributes,ot=c.enabledAttributes,nt=c.attributeDivisors;at[k]=1,ot[k]===0&&(r.enableVertexAttribArray(k),ot[k]=1),nt[k]!==et&&(r.vertexAttribDivisor(k,et),nt[k]=et)}function D(){const k=c.newAttributes,et=c.enabledAttributes;for(let at=0,ot=et.length;at<ot;at++)et[at]!==k[at]&&(r.disableVertexAttribArray(at),et[at]=0)}function U(k,et,at,ot,nt,P,G){G===!0?r.vertexAttribIPointer(k,et,at,nt,P):r.vertexAttribPointer(k,et,at,ot,nt,P)}function L(k,et,at,ot){w();const nt=ot.attributes,P=at.getAttributes(),G=et.defaultAttributeValues;for(const ct in P){const mt=P[ct];if(mt.location>=0){let Ct=nt[ct];if(Ct===void 0&&(ct==="instanceMatrix"&&k.instanceMatrix&&(Ct=k.instanceMatrix),ct==="instanceColor"&&k.instanceColor&&(Ct=k.instanceColor)),Ct!==void 0){const R=Ct.normalized,z=Ct.itemSize,J=t.get(Ct);if(J===void 0)continue;const ht=J.buffer,wt=J.type,Z=J.bytesPerElement,rt=wt===r.INT||wt===r.UNSIGNED_INT||Ct.gpuType===gp;if(Ct.isInterleavedBufferAttribute){const xt=Ct.data,Pt=xt.stride,Yt=Ct.offset;if(xt.isInstancedInterleavedBuffer){for(let $t=0;$t<mt.locationSize;$t++)y(mt.location+$t,xt.meshPerAttribute);k.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let $t=0;$t<mt.locationSize;$t++)M(mt.location+$t);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let $t=0;$t<mt.locationSize;$t++)U(mt.location+$t,z/mt.locationSize,wt,R,Pt*Z,(Yt+z/mt.locationSize*$t)*Z,rt)}else{if(Ct.isInstancedBufferAttribute){for(let xt=0;xt<mt.locationSize;xt++)y(mt.location+xt,Ct.meshPerAttribute);k.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let xt=0;xt<mt.locationSize;xt++)M(mt.location+xt);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let xt=0;xt<mt.locationSize;xt++)U(mt.location+xt,z/mt.locationSize,wt,R,z*Z,z/mt.locationSize*xt*Z,rt)}}else if(G!==void 0){const R=G[ct];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(mt.location,R);break;case 3:r.vertexAttrib3fv(mt.location,R);break;case 4:r.vertexAttrib4fv(mt.location,R);break;default:r.vertexAttrib1fv(mt.location,R)}}}}D()}function B(){N();for(const k in s){const et=s[k];for(const at in et){const ot=et[at];for(const nt in ot){const P=ot[nt];for(const G in P)_(P[G].object),delete P[G];delete ot[nt]}}delete s[k]}}function I(k){if(s[k.id]===void 0)return;const et=s[k.id];for(const at in et){const ot=et[at];for(const nt in ot){const P=ot[nt];for(const G in P)_(P[G].object),delete P[G];delete ot[nt]}}delete s[k.id]}function H(k){for(const et in s){const at=s[et];for(const ot in at){const nt=at[ot];if(nt[k.id]===void 0)continue;const P=nt[k.id];for(const G in P)_(P[G].object),delete P[G];delete nt[k.id]}}}function T(k){for(const et in s){const at=s[et],ot=k.isInstancedMesh===!0?k.id:0,nt=at[ot];if(nt!==void 0){for(const P in nt){const G=nt[P];for(const ct in G)_(G[ct].object),delete G[ct];delete nt[P]}delete at[ot],Object.keys(at).length===0&&delete s[et]}}}function N(){_t(),f=!0,c!==l&&(c=l,p(c.object))}function _t(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:_t,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:M,disableUnusedAttributes:D}}function q1(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let S=0;for(let E=0;E<v;E++)S+=_[E];i.update(S,s,1)}function m(p,_,v,g){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],_[E],g[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w]*g[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Y1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==Ii&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const T=H===wa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==hi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==qi&&!T)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(se("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:L,maxSamples:B,samples:I}}function j1(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new cs,d=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||s!==0||l;return l=g,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const D=c?0:s,U=D*4;let L=y.clippingState||null;m.value=L,L=_(E,g,U,S);for(let B=0;B!==U;++B)L[B]=i[B];y.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,S,E){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const y=S+w*4,D=g.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let U=0,L=S;U!==w;++U,L+=4)f.copy(v[U]).applyMatrix4(D,d),f.normal.toArray(M,L),M[L+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const fs=4,cv=[.125,.215,.35,.446,.526,.582],Bs=20,Z1=256,tl=new Up,uv=new ve;let dd=null,pd=0,md=0,gd=!1;const K1=new Y;class fv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=K1}=c;dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dd,pd,md),this._renderer.xr.enabled=gd,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Vs||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:wa,format:Ii,colorSpace:jr,depthBuffer:!1},l=hv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J1(c)),this._blurMaterial=$1(c,t,i),this._ggxMaterial=Q1(c,t,i)}return l}_compileMaterial(t){const i=new di(new pi,t);this._renderer.compile(i,tl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ti(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(uv),v.toneMapping=ji,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new eo,new sx({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let y=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,y=!0):(M.color.copy(uv),y=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):L===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const B=this._cubeSize;Hr(l,L*B,U>2?B:0,B,B),v.setRenderTarget(l),y&&v.render(w,m),v.render(t,m)}v.toneMapping=S,v.autoClear=g,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Vs||t.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Hr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,tl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,w=this._sizeLods[s],M=3*w*(s>E-fs?s-E+fs:0),y=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Hr(c,M,y,3*w,2*w),l.setRenderTarget(c),l.render(d,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Hr(t,M,y,3*w,2*w),l.setRenderTarget(t),l.render(d,tl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Bs-1),w=c/E,M=isFinite(c)?1+Math.floor(_*w):Bs;M>Bs&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Bs}`);const y=[];let D=0;for(let H=0;H<Bs;++H){const T=H/w,N=Math.exp(-T*T/2);y.push(N),H===0?D+=N:H<M&&(D+=2*N)}for(let H=0;H<y.length;H++)y[H]=y[H]/D;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:U}=this;g.dTheta.value=E,g.mipInt.value=U-s;const L=this._sizeLods[l],B=3*L*(l>U-fs?l-U+fs:0),I=4*(this._cubeSize-L);Hr(i,B,I,3*L,2*L),m.setRenderTarget(i),m.render(v,tl)}}function J1(r){const t=[],i=[],s=[];let l=r;const c=r-fs+1+cv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-fs?m=cv[f-r+fs-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,w=3,M=2,y=1,D=new Float32Array(w*E*S),U=new Float32Array(M*E*S),L=new Float32Array(y*E*S);for(let I=0;I<S;I++){const H=I%3*2/3-1,T=I>2?0:-1,N=[H,T,0,H+2/3,T,0,H+2/3,T+1,0,H,T,0,H+2/3,T+1,0,H,T+1,0];D.set(N,w*E*I),U.set(g,M*E*I);const _t=[I,I,I,I,I,I];L.set(_t,y*E*I)}const B=new pi;B.setAttribute("position",new Ki(D,w)),B.setAttribute("uv",new Ki(U,M)),B.setAttribute("faceIndex",new Ki(L,y)),s.push(new di(B,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function hv(r,t,i){const s=new Zi(r,t,i);return s.texture.mapping=Su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Q1(r,t,i){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function $1(r,t,i){const s=new Float32Array(Bs),l=new Y(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function dv(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function pv(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}class Mx extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new rx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new eo(5,5,5),c=new $i({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Ra});c.uniforms.tEquirect.value=i;const f=new di(l,c),d=i.minFilter;return i.minFilter===Hs&&(i.minFilter=Pn),new ab(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function tA(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Oh||S===Ph)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new Mx(E.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,E=S===Oh||S===Ph,w=S===Vs||S===qr;if(E||w){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new fv(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const D=g.image;return E&&D&&D.height>0||w&&D&&m(D)?(s===null&&(s=new fv(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,S){return S===Oh?g.mapping=Vs:S===Ph&&(g.mapping=qr),g}function m(g){let S=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function eA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gu("WebGLRenderer: "+s+" extension not supported."),l}}}function nA(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(t.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)t.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(S!==null){const D=S.array;w=S.version;for(let U=0,L=D.length;U<L;U+=3){const B=D[U+0],I=D[U+1],H=D[U+2];g.push(B,I,I,H,H,B)}}else{const D=E.array;w=E.version;for(let U=0,L=D.length/3-1;U<L;U+=3){const B=U+0,I=U+1,H=U+2;g.push(B,I,I,H,H,B)}}const M=new(E.count>=65535?ax:ix)(g,1);M.version=w;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function iA(r,t,i){let s;function l(g){s=g}let c,f;function d(g){c=g.type,f=g.bytesPerElement}function m(g,S){r.drawElements(s,S,c,g*f),i.update(S,s,1)}function p(g,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,g*f,E),i.update(S,s,E))}function _(g,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,g,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,s,1)}function v(g,S,E,w){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<g.length;y++)p(g[y]/f,S[y],w[y]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,g,0,w,0,E);let y=0;for(let D=0;D<E;D++)y+=S[D]*w[D];i.update(y,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function aA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:ze("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function sA(r,t,i){const s=new WeakMap,l=new sn;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let N=function(){H.dispose(),s.delete(d),d.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let U=0;S===!0&&(U=1),E===!0&&(U=2),w===!0&&(U=3);let L=d.attributes.position.count*U,B=1;L>t.maxTextureSize&&(B=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const I=new Float32Array(L*B*4*v),H=new tx(I,L,B,v);H.type=qi,H.needsUpdate=!0;const T=U*4;for(let _t=0;_t<v;_t++){const k=M[_t],et=y[_t],at=D[_t],ot=L*B*4*_t;for(let nt=0;nt<k.count;nt++){const P=nt*T;S===!0&&(l.fromBufferAttribute(k,nt),I[ot+P+0]=l.x,I[ot+P+1]=l.y,I[ot+P+2]=l.z,I[ot+P+3]=0),E===!0&&(l.fromBufferAttribute(et,nt),I[ot+P+4]=l.x,I[ot+P+5]=l.y,I[ot+P+6]=l.z,I[ot+P+7]=0),w===!0&&(l.fromBufferAttribute(at,nt),I[ot+P+8]=l.x,I[ot+P+9]=l.y,I[ot+P+10]=l.z,I[ot+P+11]=at.itemSize===4?l.w:1)}}g={count:v,texture:H,size:new Vt(L,B)},s.set(d,g),d.addEventListener("dispose",N)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const E=d.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function rA(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const oA={[Iv]:"LINEAR_TONE_MAPPING",[Fv]:"REINHARD_TONE_MAPPING",[Bv]:"CINEON_TONE_MAPPING",[Hv]:"ACES_FILMIC_TONE_MAPPING",[Vv]:"AGX_TONE_MAPPING",[kv]:"NEUTRAL_TONE_MAPPING",[Gv]:"CUSTOM_TONE_MAPPING"};function lA(r,t,i,s,l){const c=new Zi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Zi(t,i,{type:wa,depthBuffer:!1,stencilBuffer:!1}),d=new pi;d.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Un([0,2,0,0,2,0],2));const m=new YE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new di(d,m),_=new Up(-1,1,1,-1,0,1);let v=null,g=null,S=!1,E,w=null,M=[],y=!1;this.setSize=function(D,U){c.setSize(D,U),f.setSize(D,U);for(let L=0;L<M.length;L++){const B=M[L];B.setSize&&B.setSize(D,U)}},this.setEffects=function(D){M=D,y=M.length>0&&M[0].isRenderPass===!0;const U=c.width,L=c.height;for(let B=0;B<M.length;B++){const I=M[B];I.setSize&&I.setSize(U,L)}},this.begin=function(D,U){if(S||D.toneMapping===ji&&M.length===0)return!1;if(w=U,U!==null){const L=U.width,B=U.height;(c.width!==L||c.height!==B)&&this.setSize(L,B)}return y===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=ji,!0},this.hasRenderPass=function(){return y},this.end=function(D,U){D.toneMapping=E,S=!0;let L=c,B=f;for(let I=0;I<M.length;I++){const H=M[I];if(H.enabled!==!1&&(H.render(D,B,L,U),H.needsSwap!==!1)){const T=L;L=B,B=T}}if(v!==D.outputColorSpace||g!==D.toneMapping){v=D.outputColorSpace,g=D.toneMapping,m.defines={},Le.getTransfer(v)===Ve&&(m.defines.SRGB_TRANSFER="");const I=oA[g];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(w),D.render(p,_),w=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const Ex=new zn,hp=new dl(1,1),bx=new tx,Tx=new WM,Ax=new rx,mv=[],gv=[],_v=new Float32Array(16),vv=new Float32Array(9),xv=new Float32Array(4);function no(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=mv[l];if(c===void 0&&(c=new Float32Array(l),mv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Eu(r,t){let i=gv[t];i===void 0&&(i=new Int32Array(t),gv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function cA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function uA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2fv(this.addr,t),Mn(i,t)}}function fA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;r.uniform3fv(this.addr,t),Mn(i,t)}}function hA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4fv(this.addr,t),Mn(i,t)}}function dA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;xv.set(s),r.uniformMatrix2fv(this.addr,!1,xv),Mn(i,s)}}function pA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;vv.set(s),r.uniformMatrix3fv(this.addr,!1,vv),Mn(i,s)}}function mA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;_v.set(s),r.uniformMatrix4fv(this.addr,!1,_v),Mn(i,s)}}function gA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function _A(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2iv(this.addr,t),Mn(i,t)}}function vA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3iv(this.addr,t),Mn(i,t)}}function xA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4iv(this.addr,t),Mn(i,t)}}function SA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function yA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2uiv(this.addr,t),Mn(i,t)}}function MA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3uiv(this.addr,t),Mn(i,t)}}function EA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4uiv(this.addr,t),Mn(i,t)}}function bA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(hp.compareFunction=i.isReversedDepthBuffer()?Ep:Mp,c=hp):c=Ex,i.setTexture2D(t||c,l)}function TA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Tx,l)}function AA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ax,l)}function RA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||bx,l)}function CA(r){switch(r){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return hA;case 35674:return dA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return _A;case 35668:case 35672:return vA;case 35669:case 35673:return xA;case 5125:return SA;case 36294:return yA;case 36295:return MA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return RA}}function wA(r,t){r.uniform1fv(this.addr,t)}function DA(r,t){const i=no(t,this.size,2);r.uniform2fv(this.addr,i)}function UA(r,t){const i=no(t,this.size,3);r.uniform3fv(this.addr,i)}function LA(r,t){const i=no(t,this.size,4);r.uniform4fv(this.addr,i)}function NA(r,t){const i=no(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function OA(r,t){const i=no(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function PA(r,t){const i=no(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function zA(r,t){r.uniform1iv(this.addr,t)}function IA(r,t){r.uniform2iv(this.addr,t)}function FA(r,t){r.uniform3iv(this.addr,t)}function BA(r,t){r.uniform4iv(this.addr,t)}function HA(r,t){r.uniform1uiv(this.addr,t)}function GA(r,t){r.uniform2uiv(this.addr,t)}function VA(r,t){r.uniform3uiv(this.addr,t)}function kA(r,t){r.uniform4uiv(this.addr,t)}function XA(r,t,i){const s=this.cache,l=t.length,c=Eu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=hp:f=Ex;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function WA(r,t,i){const s=this.cache,l=t.length,c=Eu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Tx,c[f])}function qA(r,t,i){const s=this.cache,l=t.length,c=Eu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Ax,c[f])}function YA(r,t,i){const s=this.cache,l=t.length,c=Eu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||bx,c[f])}function jA(r){switch(r){case 5126:return wA;case 35664:return DA;case 35665:return UA;case 35666:return LA;case 35674:return NA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return zA;case 35667:case 35671:return IA;case 35668:case 35672:return FA;case 35669:case 35673:return BA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return YA}}class ZA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=CA(i.type)}}class KA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jA(i.type)}}class JA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function Sv(r,t){r.seq.push(t),r.map[t.id]=t}function QA(r,t,i){const s=r.name,l=s.length;for(_d.lastIndex=0;;){const c=_d.exec(s),f=_d.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Sv(i,p===void 0?new ZA(d,r,t):new KA(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new JA(d),Sv(i,v)),i=v}}}class du{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);QA(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function yv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const $A=37297;let tR=0;function eR(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Mv=new _e;function nR(r){Le._getMatrix(Mv,Le.workingColorSpace,r);const t=`mat3( ${Mv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case mu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ev(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+eR(r.getShaderSource(t),d)}else return c}function iR(r,t){const i=nR(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const aR={[Iv]:"Linear",[Fv]:"Reinhard",[Bv]:"Cineon",[Hv]:"ACESFilmic",[Vv]:"AgX",[kv]:"Neutral",[Gv]:"Custom"};function sR(r,t){const i=aR[t];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const su=new Y;function rR(){Le.getLuminanceCoefficients(su);const r=su.x.toFixed(4),t=su.y.toFixed(4),i=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function lR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function cR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function al(r){return r!==""}function bv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uR=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(r){return r.replace(uR,hR)}const fR=new Map;function hR(r,t){let i=Se[t];if(i===void 0){const s=fR.get(t);if(s!==void 0)i=Se[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return dp(i)}const dR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Av(r){return r.replace(dR,pR)}function pR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Rv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const mR={[lu]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function gR(r){return mR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _R={[Vs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[Su]:"ENVMAP_TYPE_CUBE_UV"};function vR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_R[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xR={[qr]:"ENVMAP_MODE_REFRACTION"};function SR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yR={[zv]:"ENVMAP_BLENDING_MULTIPLY",[EM]:"ENVMAP_BLENDING_MIX",[bM]:"ENVMAP_BLENDING_ADD"};function MR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yR[r.combine]||"ENVMAP_BLENDING_NONE"}function ER(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function bR(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=gR(i),p=vR(i),_=SR(i),v=MR(i),g=ER(i),S=oR(i),E=lR(c),w=l.createProgram();let M,y,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),y.length>0&&(y+=`
`)):(M=[Rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),y=[Rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?Se.tonemapping_pars_fragment:"",i.toneMapping!==ji?sR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,iR("linearToOutputTexel",i.outputColorSpace),rR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),f=dp(f),f=bv(f,i),f=Tv(f,i),d=dp(d),d=bv(d,i),d=Tv(d,i),f=Av(f),d=Av(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=D+M+f,L=D+y+d,B=yv(l,l.VERTEX_SHADER,U),I=yv(l,l.FRAGMENT_SHADER,L);l.attachShader(w,B),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function H(k){if(r.debug.checkShaderErrors){const et=l.getProgramInfoLog(w)||"",at=l.getShaderInfoLog(B)||"",ot=l.getShaderInfoLog(I)||"",nt=et.trim(),P=at.trim(),G=ot.trim();let ct=!0,mt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ct=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,B,I);else{const Ct=Ev(l,B,"vertex"),R=Ev(l,I,"fragment");ze("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+nt+`
`+Ct+`
`+R)}else nt!==""?se("WebGLProgram: Program Info Log:",nt):(P===""||G==="")&&(mt=!1);mt&&(k.diagnostics={runnable:ct,programLog:nt,vertexShader:{log:P,prefix:M},fragmentShader:{log:G,prefix:y}})}l.deleteShader(B),l.deleteShader(I),T=new du(l,w),N=cR(l,w)}let T;this.getUniforms=function(){return T===void 0&&H(this),T};let N;this.getAttributes=function(){return N===void 0&&H(this),N};let _t=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _t===!1&&(_t=l.getProgramParameter(w,$A)),_t},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tR++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=I,this}let TR=0;class AR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new RR(t),i.set(t,s)),s}}class RR{constructor(t){this.id=TR++,this.code=t,this.usedTimes=0}}function CR(r,t,i,s,l,c){const f=new ex,d=new AR,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,_t,k,et){const at=k.fog,ot=et.geometry,nt=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,G=t.get(T.envMap||nt,P),ct=G&&G.mapping===Su?G.image.height:null,mt=S[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&se("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Ct=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,R=Ct!==void 0?Ct.length:0;let z=0;ot.morphAttributes.position!==void 0&&(z=1),ot.morphAttributes.normal!==void 0&&(z=2),ot.morphAttributes.color!==void 0&&(z=3);let J,ht,wt,Z;if(mt){const oe=Wi[mt];J=oe.vertexShader,ht=oe.fragmentShader}else J=T.vertexShader,ht=T.fragmentShader,d.update(T),wt=d.getVertexShaderID(T),Z=d.getFragmentShaderID(T);const rt=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),Pt=et.isInstancedMesh===!0,Yt=et.isBatchedMesh===!0,$t=!!T.map,fe=!!T.matcap,pe=!!G,xe=!!T.aoMap,Ee=!!T.lightMap,ee=!!T.bumpMap,ke=!!T.normalMap,V=!!T.displacementMap,Fe=!!T.emissiveMap,Me=!!T.metalnessMap,Ae=!!T.roughnessMap,Gt=T.anisotropy>0,O=T.clearcoat>0,b=T.dispersion>0,j=T.iridescence>0,pt=T.sheen>0,vt=T.transmission>0,dt=Gt&&!!T.anisotropyMap,bt=O&&!!T.clearcoatMap,At=O&&!!T.clearcoatNormalMap,Xt=O&&!!T.clearcoatRoughnessMap,Jt=j&&!!T.iridescenceMap,Tt=j&&!!T.iridescenceThicknessMap,Et=pt&&!!T.sheenColorMap,Ft=pt&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ut=!!T.specularColorMap,ie=!!T.specularIntensityMap,W=vt&&!!T.transmissionMap,Dt=vt&&!!T.thicknessMap,yt=!!T.gradientMap,Bt=!!T.alphaMap,Rt=T.alphaTest>0,ft=!!T.alphaHash,zt=!!T.extensions;let ae=ji;T.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ae=r.toneMapping);const De={shaderID:mt,shaderType:T.type,shaderName:T.name,vertexShader:J,fragmentShader:ht,defines:T.defines,customVertexShaderID:wt,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Yt,batchingColor:Yt&&et._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&et.instanceColor!==null,instancingMorph:Pt&&et.morphTexture!==null,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:jr,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:fe,envMap:pe,envMapMode:pe&&G.mapping,envMapCubeUVHeight:ct,aoMap:xe,lightMap:Ee,bumpMap:ee,normalMap:ke,displacementMap:V,emissiveMap:Fe,normalMapObjectSpace:ke&&T.normalMapType===RM,normalMapTangentSpace:ke&&T.normalMapType===Qv,metalnessMap:Me,roughnessMap:Ae,anisotropy:Gt,anisotropyMap:dt,clearcoat:O,clearcoatMap:bt,clearcoatNormalMap:At,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:j,iridescenceMap:Jt,iridescenceThicknessMap:Tt,sheen:pt,sheenColorMap:Et,sheenRoughnessMap:Ft,specularMap:Lt,specularColorMap:Ut,specularIntensityMap:ie,transmission:vt,transmissionMap:W,thicknessMap:Dt,gradientMap:yt,opaque:T.transparent===!1&&T.blending===kr&&T.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Rt,alphaHash:ft,combine:T.combine,mapUv:$t&&E(T.map.channel),aoMapUv:xe&&E(T.aoMap.channel),lightMapUv:Ee&&E(T.lightMap.channel),bumpMapUv:ee&&E(T.bumpMap.channel),normalMapUv:ke&&E(T.normalMap.channel),displacementMapUv:V&&E(T.displacementMap.channel),emissiveMapUv:Fe&&E(T.emissiveMap.channel),metalnessMapUv:Me&&E(T.metalnessMap.channel),roughnessMapUv:Ae&&E(T.roughnessMap.channel),anisotropyMapUv:dt&&E(T.anisotropyMap.channel),clearcoatMapUv:bt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:At&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(T.sheenRoughnessMap.channel),specularMapUv:Lt&&E(T.specularMap.channel),specularColorMapUv:Ut&&E(T.specularColorMap.channel),specularIntensityMapUv:ie&&E(T.specularIntensityMap.channel),transmissionMapUv:W&&E(T.transmissionMap.channel),thicknessMapUv:Dt&&E(T.thicknessMap.channel),alphaMapUv:Bt&&E(T.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(ke||Gt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ot.attributes.uv&&($t||Bt),fog:!!at,useFog:T.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ot.attributes.normal===void 0&&ke===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:xt,skinning:et.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:z,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&_t.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&Le.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:Fe&&T.emissiveMap.isVideoTexture===!0&&Le.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zi,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||Yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return De.vertexUv1s=m.has(1),De.vertexUv2s=m.has(2),De.vertexUv3s=m.has(3),m.clear(),De}function M(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const _t in T.defines)N.push(_t),N.push(T.defines[_t]);return T.isRawShaderMaterial===!1&&(y(N,T),D(N,T),N.push(r.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function y(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function D(T,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),T.push(f.mask)}function U(T){const N=S[T.type];let _t;if(N){const k=Wi[N];_t=XE.clone(k.uniforms)}else _t=T.uniforms;return _t}function L(T,N){let _t=_.get(N);return _t!==void 0?++_t.usedTimes:(_t=new bR(r,N,T,l),p.push(_t),_.set(N,_t)),_t}function B(T){if(--T.usedTimes===0){const N=p.indexOf(T);p[N]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function I(T){d.remove(T)}function H(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:U,acquireProgram:L,releaseProgram:B,releaseShaderCache:I,programs:p,dispose:H}}function wR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function DR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Cv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function wv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,E,w,M,y){let D=r[t];return D===void 0?(D={id:g.id,object:g,geometry:S,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:y},r[t]=D):(D.id=g.id,D.object=g,D.geometry=S,D.material=E,D.materialVariant=f(g),D.groupOrder=w,D.renderOrder=g.renderOrder,D.z=M,D.group=y),t++,D}function m(g,S,E,w,M,y){const D=d(g,S,E,w,M,y);E.transmission>0?s.push(D):E.transparent===!0?l.push(D):i.push(D)}function p(g,S,E,w,M,y){const D=d(g,S,E,w,M,y);E.transmission>0?s.unshift(D):E.transparent===!0?l.unshift(D):i.unshift(D)}function _(g,S){i.length>1&&i.sort(g||DR),s.length>1&&s.sort(S||Cv),l.length>1&&l.sort(S||Cv)}function v(){for(let g=t,S=r.length;g<S;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function UR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new wv,r.set(s,[f])):l>=c.length?(f=new wv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function LR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new ve};break;case"SpotLight":i={position:new Y,direction:new Y,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":i={color:new ve,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=i,i}}}function NR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let OR=0;function PR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function zR(r){const t=new LR,i=NR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Y);const l=new Y,c=new tn,f=new tn;function d(p){let _=0,v=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,E=0,w=0,M=0,y=0,D=0,U=0,L=0,B=0,I=0,H=0;p.sort(PR);for(let N=0,_t=p.length;N<_t;N++){const k=p[N],et=k.color,at=k.intensity,ot=k.distance;let nt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Yr?nt=k.shadow.map.texture:nt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=et.r*at,v+=et.g*at,g+=et.b*at;else if(k.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(k.sh.coefficients[P],at);H++}else if(k.isDirectionalLight){const P=t.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,ct=i.get(k);ct.shadowIntensity=G.intensity,ct.shadowBias=G.bias,ct.shadowNormalBias=G.normalBias,ct.shadowRadius=G.radius,ct.shadowMapSize=G.mapSize,s.directionalShadow[S]=ct,s.directionalShadowMap[S]=nt,s.directionalShadowMatrix[S]=k.shadow.matrix,D++}s.directional[S]=P,S++}else if(k.isSpotLight){const P=t.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(et).multiplyScalar(at),P.distance=ot,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,s.spot[w]=P;const G=k.shadow;if(k.map&&(s.spotLightMap[B]=k.map,B++,G.updateMatrices(k),k.castShadow&&I++),s.spotLightMatrix[w]=G.matrix,k.castShadow){const ct=i.get(k);ct.shadowIntensity=G.intensity,ct.shadowBias=G.bias,ct.shadowNormalBias=G.normalBias,ct.shadowRadius=G.radius,ct.shadowMapSize=G.mapSize,s.spotShadow[w]=ct,s.spotShadowMap[w]=nt,L++}w++}else if(k.isRectAreaLight){const P=t.get(k);P.color.copy(et).multiplyScalar(at),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=P,M++}else if(k.isPointLight){const P=t.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){const G=k.shadow,ct=i.get(k);ct.shadowIntensity=G.intensity,ct.shadowBias=G.bias,ct.shadowNormalBias=G.normalBias,ct.shadowRadius=G.radius,ct.shadowMapSize=G.mapSize,ct.shadowCameraNear=G.camera.near,ct.shadowCameraFar=G.camera.far,s.pointShadow[E]=ct,s.pointShadowMap[E]=nt,s.pointShadowMatrix[E]=k.shadow.matrix,U++}s.point[E]=P,E++}else if(k.isHemisphereLight){const P=t.get(k);P.skyColor.copy(k.color).multiplyScalar(at),P.groundColor.copy(k.groundColor).multiplyScalar(at),s.hemi[y]=P,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==D||T.numPointShadows!==U||T.numSpotShadows!==L||T.numSpotMaps!==B||T.numLightProbes!==H)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=M,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=L+B-I,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=H,T.directionalLength=S,T.pointLength=E,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=D,T.numPointShadows=U,T.numSpotShadows=L,T.numSpotMaps=B,T.numLightProbes=H,s.version=OR++)}function m(p,_){let v=0,g=0,S=0,E=0,w=0;const M=_.matrixWorldInverse;for(let y=0,D=p.length;y<D;y++){const U=p[y];if(U.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),v++}else if(U.isSpotLight){const L=s.spot[S];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),g++}else if(U.isHemisphereLight){const L=s.hemi[w];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function Dv(r){const t=new zR(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function IR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Dv(r),t.set(l,[d])):c>=f.length?(d=new Dv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const FR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BR=`uniform sampler2D shadow_pass;
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
}`,HR=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],GR=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Uv=new tn,el=new Y,vd=new Y;function VR(r,t,i){let s=new Ap;const l=new Vt,c=new Vt,f=new sn,d=new ZE,m=new KE,p={},_=i.maxTextureSize,v={[hs]:$n,[$n]:hs,[zi]:zi},g=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:FR,fragmentShader:BR}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new pi;E.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new di(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let y=this.type;this.render=function(I,H,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;this.type===Pv&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=lu);const N=r.getRenderTarget(),_t=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),et=r.state;et.setBlending(Ra),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const at=y!==this.type;at&&H.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(nt=>nt.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,nt=I.length;ot<nt;ot++){const P=I[ot],G=P.shadow;if(G===void 0){se("WebGLShadowMap:",P,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ct=G.getFrameExtents();l.multiply(ct),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ct.x),l.x=c.x*ct.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ct.y),l.y=c.y*ct.y,G.mapSize.y=c.y));const mt=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=mt,G.map===null||at===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===nl){if(P.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Zi(l.x,l.y,{format:Yr,type:wa,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),G.map.texture.name=P.name+".shadowMap",G.map.depthTexture=new dl(l.x,l.y,qi),G.map.depthTexture.name=P.name+".shadowMapDepth",G.map.depthTexture.format=Da,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn}else P.isPointLight?(G.map=new Mx(l.x),G.map.depthTexture=new uE(l.x,Ji)):(G.map=new Zi(l.x,l.y),G.map.depthTexture=new dl(l.x,l.y,Ji)),G.map.depthTexture.name=P.name+".shadowMap",G.map.depthTexture.format=Da,this.type===lu?(G.map.depthTexture.compareFunction=mt?Ep:Mp,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn);G.camera.updateProjectionMatrix()}const Ct=G.map.isWebGLCubeRenderTarget?6:1;for(let R=0;R<Ct;R++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,R),r.clear();else{R===0&&(r.setRenderTarget(G.map),r.clear());const z=G.getViewport(R);f.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),et.viewport(f)}if(P.isPointLight){const z=G.camera,J=G.matrix,ht=P.distance||z.far;ht!==z.far&&(z.far=ht,z.updateProjectionMatrix()),el.setFromMatrixPosition(P.matrixWorld),z.position.copy(el),vd.copy(z.position),vd.add(HR[R]),z.up.copy(GR[R]),z.lookAt(vd),z.updateMatrixWorld(),J.makeTranslation(-el.x,-el.y,-el.z),Uv.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Uv,z.coordinateSystem,z.reversedDepth)}else G.updateMatrices(P);s=G.getFrustum(),L(H,T,G.camera,P,this.type)}G.isPointLightShadow!==!0&&this.type===nl&&D(G,T),G.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(N,_t,k)};function D(I,H){const T=t.update(w);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Zi(l.x,l.y,{format:Yr,type:wa})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(H,null,T,g,w,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(H,null,T,S,w,null)}function U(I,H,T,N){let _t=null;const k=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)_t=k;else if(_t=T.isPointLight===!0?m:d,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const et=_t.uuid,at=H.uuid;let ot=p[et];ot===void 0&&(ot={},p[et]=ot);let nt=ot[at];nt===void 0&&(nt=_t.clone(),ot[at]=nt,H.addEventListener("dispose",B)),_t=nt}if(_t.visible=H.visible,_t.wireframe=H.wireframe,N===nl?_t.side=H.shadowSide!==null?H.shadowSide:H.side:_t.side=H.shadowSide!==null?H.shadowSide:v[H.side],_t.alphaMap=H.alphaMap,_t.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,_t.map=H.map,_t.clipShadows=H.clipShadows,_t.clippingPlanes=H.clippingPlanes,_t.clipIntersection=H.clipIntersection,_t.displacementMap=H.displacementMap,_t.displacementScale=H.displacementScale,_t.displacementBias=H.displacementBias,_t.wireframeLinewidth=H.wireframeLinewidth,_t.linewidth=H.linewidth,T.isPointLight===!0&&_t.isMeshDistanceMaterial===!0){const et=r.properties.get(_t);et.light=T}return _t}function L(I,H,T,N,_t){if(I.visible===!1)return;if(I.layers.test(H.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&_t===nl)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const at=t.update(I),ot=I.material;if(Array.isArray(ot)){const nt=at.groups;for(let P=0,G=nt.length;P<G;P++){const ct=nt[P],mt=ot[ct.materialIndex];if(mt&&mt.visible){const Ct=U(I,mt,N,_t);I.onBeforeShadow(r,I,H,T,at,Ct,ct),r.renderBufferDirect(T,null,at,Ct,I,ct),I.onAfterShadow(r,I,H,T,at,Ct,ct)}}}else if(ot.visible){const nt=U(I,ot,N,_t);I.onBeforeShadow(r,I,H,T,at,nt,null),r.renderBufferDirect(T,null,at,nt,I,null),I.onAfterShadow(r,I,H,T,at,nt,null)}}const et=I.children;for(let at=0,ot=et.length;at<ot;at++)L(et[at],H,T,N,_t)}function B(I){I.target.removeEventListener("dispose",B);for(const T in p){const N=p[T],_t=I.target.uuid;_t in N&&(N[_t].dispose(),delete N[_t])}}}function kR(r,t){function i(){let W=!1;const Dt=new sn;let yt=null;const Bt=new sn(0,0,0,0);return{setMask:function(Rt){yt!==Rt&&!W&&(r.colorMask(Rt,Rt,Rt,Rt),yt=Rt)},setLocked:function(Rt){W=Rt},setClear:function(Rt,ft,zt,ae,De){De===!0&&(Rt*=ae,ft*=ae,zt*=ae),Dt.set(Rt,ft,zt,ae),Bt.equals(Dt)===!1&&(r.clearColor(Rt,ft,zt,ae),Bt.copy(Dt))},reset:function(){W=!1,yt=null,Bt.set(-1,0,0,0)}}}function s(){let W=!1,Dt=!1,yt=null,Bt=null,Rt=null;return{setReversed:function(ft){if(Dt!==ft){const zt=t.get("EXT_clip_control");ft?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Dt=ft;const ae=Rt;Rt=null,this.setClear(ae)}},getReversed:function(){return Dt},setTest:function(ft){ft?rt(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(ft){yt!==ft&&!W&&(r.depthMask(ft),yt=ft)},setFunc:function(ft){if(Dt&&(ft=IM[ft]),Bt!==ft){switch(ft){case Md:r.depthFunc(r.NEVER);break;case Ed:r.depthFunc(r.ALWAYS);break;case bd:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case Td:r.depthFunc(r.EQUAL);break;case Ad:r.depthFunc(r.GEQUAL);break;case Rd:r.depthFunc(r.GREATER);break;case Cd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=ft}},setLocked:function(ft){W=ft},setClear:function(ft){Rt!==ft&&(Rt=ft,Dt&&(ft=1-ft),r.clearDepth(ft))},reset:function(){W=!1,yt=null,Bt=null,Rt=null,Dt=!1}}}function l(){let W=!1,Dt=null,yt=null,Bt=null,Rt=null,ft=null,zt=null,ae=null,De=null;return{setTest:function(oe){W||(oe?rt(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(oe){Dt!==oe&&!W&&(r.stencilMask(oe),Dt=oe)},setFunc:function(oe,he,ln){(yt!==oe||Bt!==he||Rt!==ln)&&(r.stencilFunc(oe,he,ln),yt=oe,Bt=he,Rt=ln)},setOp:function(oe,he,ln){(ft!==oe||zt!==he||ae!==ln)&&(r.stencilOp(oe,he,ln),ft=oe,zt=he,ae=ln)},setLocked:function(oe){W=oe},setClear:function(oe){De!==oe&&(r.clearStencil(oe),De=oe)},reset:function(){W=!1,Dt=null,yt=null,Bt=null,Rt=null,ft=null,zt=null,ae=null,De=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,S=[],E=null,w=!1,M=null,y=null,D=null,U=null,L=null,B=null,I=null,H=new ve(0,0,0),T=0,N=!1,_t=null,k=null,et=null,at=null,ot=null;const nt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,G=0;const ct=r.getParameter(r.VERSION);ct.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ct)[1]),P=G>=1):ct.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),P=G>=2);let mt=null,Ct={};const R=r.getParameter(r.SCISSOR_BOX),z=r.getParameter(r.VIEWPORT),J=new sn().fromArray(R),ht=new sn().fromArray(z);function wt(W,Dt,yt,Bt){const Rt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(W,ft),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<yt;zt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Dt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Rt):r.texImage2D(Dt+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Rt);return ft}const Z={};Z[r.TEXTURE_2D]=wt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),rt(r.DEPTH_TEST),f.setFunc(Wr),ee(!1),ke(y_),rt(r.CULL_FACE),xe(Ra);function rt(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function xt(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Pt(W,Dt){return v[W]!==Dt?(r.bindFramebuffer(W,Dt),v[W]=Dt,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Dt),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Yt(W,Dt){let yt=S,Bt=!1;if(W){yt=g.get(Dt),yt===void 0&&(yt=[],g.set(Dt,yt));const Rt=W.textures;if(yt.length!==Rt.length||yt[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,zt=Rt.length;ft<zt;ft++)yt[ft]=r.COLOR_ATTACHMENT0+ft;yt.length=Rt.length,Bt=!0}}else yt[0]!==r.BACK&&(yt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(yt)}function $t(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const fe={[Fs]:r.FUNC_ADD,[rM]:r.FUNC_SUBTRACT,[oM]:r.FUNC_REVERSE_SUBTRACT};fe[lM]=r.MIN,fe[cM]=r.MAX;const pe={[uM]:r.ZERO,[fM]:r.ONE,[hM]:r.SRC_COLOR,[Sd]:r.SRC_ALPHA,[vM]:r.SRC_ALPHA_SATURATE,[gM]:r.DST_COLOR,[pM]:r.DST_ALPHA,[dM]:r.ONE_MINUS_SRC_COLOR,[yd]:r.ONE_MINUS_SRC_ALPHA,[_M]:r.ONE_MINUS_DST_COLOR,[mM]:r.ONE_MINUS_DST_ALPHA,[xM]:r.CONSTANT_COLOR,[SM]:r.ONE_MINUS_CONSTANT_COLOR,[yM]:r.CONSTANT_ALPHA,[MM]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(W,Dt,yt,Bt,Rt,ft,zt,ae,De,oe){if(W===Ra){w===!0&&(xt(r.BLEND),w=!1);return}if(w===!1&&(rt(r.BLEND),w=!0),W!==sM){if(W!==M||oe!==N){if((y!==Fs||L!==Fs)&&(r.blendEquation(r.FUNC_ADD),y=Fs,L=Fs),oe)switch(W){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M_:r.blendFunc(r.ONE,r.ONE);break;case E_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case b_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ze("WebGLState: Invalid blending: ",W);break}else switch(W){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case E_:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b_:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",W);break}D=null,U=null,B=null,I=null,H.set(0,0,0),T=0,M=W,N=oe}return}Rt=Rt||Dt,ft=ft||yt,zt=zt||Bt,(Dt!==y||Rt!==L)&&(r.blendEquationSeparate(fe[Dt],fe[Rt]),y=Dt,L=Rt),(yt!==D||Bt!==U||ft!==B||zt!==I)&&(r.blendFuncSeparate(pe[yt],pe[Bt],pe[ft],pe[zt]),D=yt,U=Bt,B=ft,I=zt),(ae.equals(H)===!1||De!==T)&&(r.blendColor(ae.r,ae.g,ae.b,De),H.copy(ae),T=De),M=W,N=!1}function Ee(W,Dt){W.side===zi?xt(r.CULL_FACE):rt(r.CULL_FACE);let yt=W.side===$n;Dt&&(yt=!yt),ee(yt),W.blending===kr&&W.transparent===!1?xe(Ra):xe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Bt=W.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Fe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ee(W){_t!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),_t=W)}function ke(W){W!==iM?(rt(r.CULL_FACE),W!==k&&(W===y_?r.cullFace(r.BACK):W===aM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),k=W}function V(W){W!==et&&(P&&r.lineWidth(W),et=W)}function Fe(W,Dt,yt){W?(rt(r.POLYGON_OFFSET_FILL),(at!==Dt||ot!==yt)&&(at=Dt,ot=yt,f.getReversed()&&(Dt=-Dt),r.polygonOffset(Dt,yt))):xt(r.POLYGON_OFFSET_FILL)}function Me(W){W?rt(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function Ae(W){W===void 0&&(W=r.TEXTURE0+nt-1),mt!==W&&(r.activeTexture(W),mt=W)}function Gt(W,Dt,yt){yt===void 0&&(mt===null?yt=r.TEXTURE0+nt-1:yt=mt);let Bt=Ct[yt];Bt===void 0&&(Bt={type:void 0,texture:void 0},Ct[yt]=Bt),(Bt.type!==W||Bt.texture!==Dt)&&(mt!==yt&&(r.activeTexture(yt),mt=yt),r.bindTexture(W,Dt||Z[W]),Bt.type=W,Bt.texture=Dt)}function O(){const W=Ct[mt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){ze("WebGLState:",W)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(W){ze("WebGLState:",W)}}function pt(){try{r.texSubImage2D(...arguments)}catch(W){ze("WebGLState:",W)}}function vt(){try{r.texSubImage3D(...arguments)}catch(W){ze("WebGLState:",W)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(W){ze("WebGLState:",W)}}function bt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){ze("WebGLState:",W)}}function At(){try{r.texStorage2D(...arguments)}catch(W){ze("WebGLState:",W)}}function Xt(){try{r.texStorage3D(...arguments)}catch(W){ze("WebGLState:",W)}}function Jt(){try{r.texImage2D(...arguments)}catch(W){ze("WebGLState:",W)}}function Tt(){try{r.texImage3D(...arguments)}catch(W){ze("WebGLState:",W)}}function Et(W){J.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),J.copy(W))}function Ft(W){ht.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),ht.copy(W))}function Lt(W,Dt){let yt=p.get(Dt);yt===void 0&&(yt=new WeakMap,p.set(Dt,yt));let Bt=yt.get(W);Bt===void 0&&(Bt=r.getUniformBlockIndex(Dt,W.name),yt.set(W,Bt))}function Ut(W,Dt){const Bt=p.get(Dt).get(W);m.get(Dt)!==Bt&&(r.uniformBlockBinding(Dt,Bt,W.__bindingPointIndex),m.set(Dt,Bt))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},mt=null,Ct={},v={},g=new WeakMap,S=[],E=null,w=!1,M=null,y=null,D=null,U=null,L=null,B=null,I=null,H=new ve(0,0,0),T=0,N=!1,_t=null,k=null,et=null,at=null,ot=null,J.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:rt,disable:xt,bindFramebuffer:Pt,drawBuffers:Yt,useProgram:$t,setBlending:xe,setMaterial:Ee,setFlipSided:ee,setCullFace:ke,setLineWidth:V,setPolygonOffset:Fe,setScissorTest:Me,activeTexture:Ae,bindTexture:Gt,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:Jt,texImage3D:Tt,updateUBOMapping:Lt,uniformBlockBinding:Ut,texStorage2D:At,texStorage3D:Xt,texSubImage2D:pt,texSubImage3D:vt,compressedTexSubImage2D:dt,compressedTexSubImage3D:bt,scissor:Et,viewport:Ft,reset:ie}}function XR(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Vt,_=new WeakMap;let v;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return S?new OffscreenCanvas(O,b):hl("canvas")}function w(O,b,j){let pt=1;const vt=Gt(O);if((vt.width>j||vt.height>j)&&(pt=j/Math.max(vt.width,vt.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const dt=Math.floor(pt*vt.width),bt=Math.floor(pt*vt.height);v===void 0&&(v=E(dt,bt));const At=b?E(dt,bt):v;return At.width=dt,At.height=bt,At.getContext("2d").drawImage(O,0,0,dt,bt),se("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+dt+"x"+bt+")."),At}else return"data"in O&&se("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),O;return O}function M(O){return O.generateMipmaps}function y(O){r.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(O,b,j,pt,vt=!1){if(O!==null){if(r[O]!==void 0)return r[O];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let dt=b;if(b===r.RED&&(j===r.FLOAT&&(dt=r.R32F),j===r.HALF_FLOAT&&(dt=r.R16F),j===r.UNSIGNED_BYTE&&(dt=r.R8)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.R8UI),j===r.UNSIGNED_SHORT&&(dt=r.R16UI),j===r.UNSIGNED_INT&&(dt=r.R32UI),j===r.BYTE&&(dt=r.R8I),j===r.SHORT&&(dt=r.R16I),j===r.INT&&(dt=r.R32I)),b===r.RG&&(j===r.FLOAT&&(dt=r.RG32F),j===r.HALF_FLOAT&&(dt=r.RG16F),j===r.UNSIGNED_BYTE&&(dt=r.RG8)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.RG8UI),j===r.UNSIGNED_SHORT&&(dt=r.RG16UI),j===r.UNSIGNED_INT&&(dt=r.RG32UI),j===r.BYTE&&(dt=r.RG8I),j===r.SHORT&&(dt=r.RG16I),j===r.INT&&(dt=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),j===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),j===r.UNSIGNED_INT&&(dt=r.RGB32UI),j===r.BYTE&&(dt=r.RGB8I),j===r.SHORT&&(dt=r.RGB16I),j===r.INT&&(dt=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),j===r.UNSIGNED_INT&&(dt=r.RGBA32UI),j===r.BYTE&&(dt=r.RGBA8I),j===r.SHORT&&(dt=r.RGBA16I),j===r.INT&&(dt=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),b===r.RGBA){const bt=vt?mu:Le.getTransfer(pt);j===r.FLOAT&&(dt=r.RGBA32F),j===r.HALF_FLOAT&&(dt=r.RGBA16F),j===r.UNSIGNED_BYTE&&(dt=bt===Ve?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function L(O,b){let j;return O?b===null||b===Ji||b===ul?j=r.DEPTH24_STENCIL8:b===qi?j=r.DEPTH32F_STENCIL8:b===cl&&(j=r.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===ul?j=r.DEPTH_COMPONENT24:b===qi?j=r.DEPTH_COMPONENT32F:b===cl&&(j=r.DEPTH_COMPONENT16),j}function B(O,b){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==wn&&O.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function I(O){const b=O.target;b.removeEventListener("dispose",I),T(b),b.isVideoTexture&&_.delete(b)}function H(O){const b=O.target;b.removeEventListener("dispose",H),_t(b)}function T(O){const b=s.get(O);if(b.__webglInit===void 0)return;const j=O.source,pt=g.get(j);if(pt){const vt=pt[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&N(O),Object.keys(pt).length===0&&g.delete(j)}s.remove(O)}function N(O){const b=s.get(O);r.deleteTexture(b.__webglTexture);const j=O.source,pt=g.get(j);delete pt[b.__cacheKey],f.memory.textures--}function _t(O){const b=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let vt=0;vt<b.__webglFramebuffer[pt].length;vt++)r.deleteFramebuffer(b.__webglFramebuffer[pt][vt]);else r.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)r.deleteFramebuffer(b.__webglFramebuffer[pt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=O.textures;for(let pt=0,vt=j.length;pt<vt;pt++){const dt=s.get(j[pt]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),f.memory.textures--),s.remove(j[pt])}s.remove(O)}let k=0;function et(){k=0}function at(){const O=k;return O>=l.maxTextures&&se("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),k+=1,O}function ot(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function nt(O,b){const j=s.get(O);if(O.isVideoTexture&&Me(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&j.__version!==O.version){const pt=O.image;if(pt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(j,O,b);return}}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function P(O,b){const j=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){Z(j,O,b);return}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function G(O,b){const j=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){Z(j,O,b);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function ct(O,b){const j=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&j.__version!==O.version){rt(j,O,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const mt={[pu]:r.REPEAT,[Ta]:r.CLAMP_TO_EDGE,[wd]:r.MIRRORED_REPEAT},Ct={[wn]:r.NEAREST,[TM]:r.NEAREST_MIPMAP_NEAREST,[Dc]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[zh]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},R={[CM]:r.NEVER,[NM]:r.ALWAYS,[wM]:r.LESS,[Mp]:r.LEQUAL,[DM]:r.EQUAL,[Ep]:r.GEQUAL,[UM]:r.GREATER,[LM]:r.NOTEQUAL};function z(O,b){if(b.type===qi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Pn||b.magFilter===zh||b.magFilter===Dc||b.magFilter===Hs||b.minFilter===Pn||b.minFilter===zh||b.minFilter===Dc||b.minFilter===Hs)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,mt[b.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,mt[b.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,mt[b.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Ct[b.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Ct[b.minFilter]),b.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,R[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==Dc&&b.minFilter!==Hs||b.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function J(O,b){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",I));const pt=b.source;let vt=g.get(pt);vt===void 0&&(vt={},g.set(pt,vt));const dt=ot(b);if(dt!==O.__cacheKey){vt[dt]===void 0&&(vt[dt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),vt[dt].usedTimes++;const bt=vt[O.__cacheKey];bt!==void 0&&(vt[O.__cacheKey].usedTimes--,bt.usedTimes===0&&N(b)),O.__cacheKey=dt,O.__webglTexture=vt[dt].texture}return j}function ht(O,b,j){return Math.floor(Math.floor(O/j)/b)}function wt(O,b,j,pt){const dt=O.updateRanges;if(dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,pt,b.data);else{dt.sort((Tt,Et)=>Tt.start-Et.start);let bt=0;for(let Tt=1;Tt<dt.length;Tt++){const Et=dt[bt],Ft=dt[Tt],Lt=Et.start+Et.count,Ut=ht(Ft.start,b.width,4),ie=ht(Et.start,b.width,4);Ft.start<=Lt+1&&Ut===ie&&ht(Ft.start+Ft.count-1,b.width,4)===Ut?Et.count=Math.max(Et.count,Ft.start+Ft.count-Et.start):(++bt,dt[bt]=Ft)}dt.length=bt+1;const At=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),Jt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Tt=0,Et=dt.length;Tt<Et;Tt++){const Ft=dt[Tt],Lt=Math.floor(Ft.start/4),Ut=Math.ceil(Ft.count/4),ie=Lt%b.width,W=Math.floor(Lt/b.width),Dt=Ut,yt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ie,W,Dt,yt,j,pt,b.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,At),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Jt)}}function Z(O,b,j){let pt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=r.TEXTURE_3D);const vt=J(O,b),dt=b.source;i.bindTexture(pt,O.__webglTexture,r.TEXTURE0+j);const bt=s.get(dt);if(dt.version!==bt.__version||vt===!0){i.activeTexture(r.TEXTURE0+j);const At=Le.getPrimaries(Le.workingColorSpace),Xt=b.colorSpace===us?null:Le.getPrimaries(b.colorSpace),Jt=b.colorSpace===us||At===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Tt=w(b.image,!1,l.maxTextureSize);Tt=Ae(b,Tt);const Et=c.convert(b.format,b.colorSpace),Ft=c.convert(b.type);let Lt=U(b.internalFormat,Et,Ft,b.colorSpace,b.isVideoTexture);z(pt,b);let Ut;const ie=b.mipmaps,W=b.isVideoTexture!==!0,Dt=bt.__version===void 0||vt===!0,yt=dt.dataReady,Bt=B(b,Tt);if(b.isDepthTexture)Lt=L(b.format===Gs,b.type),Dt&&(W?i.texStorage2D(r.TEXTURE_2D,1,Lt,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,Lt,Tt.width,Tt.height,0,Et,Ft,null));else if(b.isDataTexture)if(ie.length>0){W&&Dt&&i.texStorage2D(r.TEXTURE_2D,Bt,Lt,ie[0].width,ie[0].height);for(let Rt=0,ft=ie.length;Rt<ft;Rt++)Ut=ie[Rt],W?yt&&i.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Ut.width,Ut.height,Et,Ft,Ut.data):i.texImage2D(r.TEXTURE_2D,Rt,Lt,Ut.width,Ut.height,0,Et,Ft,Ut.data);b.generateMipmaps=!1}else W?(Dt&&i.texStorage2D(r.TEXTURE_2D,Bt,Lt,Tt.width,Tt.height),yt&&wt(b,Tt,Et,Ft)):i.texImage2D(r.TEXTURE_2D,0,Lt,Tt.width,Tt.height,0,Et,Ft,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Lt,ie[0].width,ie[0].height,Tt.depth);for(let Rt=0,ft=ie.length;Rt<ft;Rt++)if(Ut=ie[Rt],b.format!==Ii)if(Et!==null)if(W){if(yt)if(b.layerUpdates.size>0){const zt=lv(Ut.width,Ut.height,b.format,b.type);for(const ae of b.layerUpdates){const De=Ut.data.subarray(ae*zt/Ut.data.BYTES_PER_ELEMENT,(ae+1)*zt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,ae,Ut.width,Ut.height,1,Et,De)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,0,Ut.width,Ut.height,Tt.depth,Et,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Rt,Lt,Ut.width,Ut.height,Tt.depth,0,Ut.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?yt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,0,Ut.width,Ut.height,Tt.depth,Et,Ft,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Rt,Lt,Ut.width,Ut.height,Tt.depth,0,Et,Ft,Ut.data)}else{W&&Dt&&i.texStorage2D(r.TEXTURE_2D,Bt,Lt,ie[0].width,ie[0].height);for(let Rt=0,ft=ie.length;Rt<ft;Rt++)Ut=ie[Rt],b.format!==Ii?Et!==null?W?yt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Rt,0,0,Ut.width,Ut.height,Et,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,Rt,Lt,Ut.width,Ut.height,0,Ut.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?yt&&i.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Ut.width,Ut.height,Et,Ft,Ut.data):i.texImage2D(r.TEXTURE_2D,Rt,Lt,Ut.width,Ut.height,0,Et,Ft,Ut.data)}else if(b.isDataArrayTexture)if(W){if(Dt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Lt,Tt.width,Tt.height,Tt.depth),yt)if(b.layerUpdates.size>0){const Rt=lv(Tt.width,Tt.height,b.format,b.type);for(const ft of b.layerUpdates){const zt=Tt.data.subarray(ft*Rt/Tt.data.BYTES_PER_ELEMENT,(ft+1)*Rt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ft,Tt.width,Tt.height,1,Et,Ft,zt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Et,Ft,Tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,Tt.width,Tt.height,Tt.depth,0,Et,Ft,Tt.data);else if(b.isData3DTexture)W?(Dt&&i.texStorage3D(r.TEXTURE_3D,Bt,Lt,Tt.width,Tt.height,Tt.depth),yt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Et,Ft,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,Lt,Tt.width,Tt.height,Tt.depth,0,Et,Ft,Tt.data);else if(b.isFramebufferTexture){if(Dt)if(W)i.texStorage2D(r.TEXTURE_2D,Bt,Lt,Tt.width,Tt.height);else{let Rt=Tt.width,ft=Tt.height;for(let zt=0;zt<Bt;zt++)i.texImage2D(r.TEXTURE_2D,zt,Lt,Rt,ft,0,Et,Ft,null),Rt>>=1,ft>>=1}}else if(ie.length>0){if(W&&Dt){const Rt=Gt(ie[0]);i.texStorage2D(r.TEXTURE_2D,Bt,Lt,Rt.width,Rt.height)}for(let Rt=0,ft=ie.length;Rt<ft;Rt++)Ut=ie[Rt],W?yt&&i.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Et,Ft,Ut):i.texImage2D(r.TEXTURE_2D,Rt,Lt,Et,Ft,Ut);b.generateMipmaps=!1}else if(W){if(Dt){const Rt=Gt(Tt);i.texStorage2D(r.TEXTURE_2D,Bt,Lt,Rt.width,Rt.height)}yt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,Ft,Tt)}else i.texImage2D(r.TEXTURE_2D,0,Lt,Et,Ft,Tt);M(b)&&y(pt),bt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function rt(O,b,j){if(b.image.length!==6)return;const pt=J(O,b),vt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+j);const dt=s.get(vt);if(vt.version!==dt.__version||pt===!0){i.activeTexture(r.TEXTURE0+j);const bt=Le.getPrimaries(Le.workingColorSpace),At=b.colorSpace===us?null:Le.getPrimaries(b.colorSpace),Xt=b.colorSpace===us||bt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let ft=0;ft<6;ft++)!Jt&&!Tt?Et[ft]=w(b.image[ft],!0,l.maxCubemapSize):Et[ft]=Tt?b.image[ft].image:b.image[ft],Et[ft]=Ae(b,Et[ft]);const Ft=Et[0],Lt=c.convert(b.format,b.colorSpace),Ut=c.convert(b.type),ie=U(b.internalFormat,Lt,Ut,b.colorSpace),W=b.isVideoTexture!==!0,Dt=dt.__version===void 0||pt===!0,yt=vt.dataReady;let Bt=B(b,Ft);z(r.TEXTURE_CUBE_MAP,b);let Rt;if(Jt){W&&Dt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ie,Ft.width,Ft.height);for(let ft=0;ft<6;ft++){Rt=Et[ft].mipmaps;for(let zt=0;zt<Rt.length;zt++){const ae=Rt[zt];b.format!==Ii?Lt!==null?W?yt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,ae.width,ae.height,Lt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,ie,ae.width,ae.height,0,ae.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?yt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,ae.width,ae.height,Lt,Ut,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,ie,ae.width,ae.height,0,Lt,Ut,ae.data)}}}else{if(Rt=b.mipmaps,W&&Dt){Rt.length>0&&Bt++;const ft=Gt(Et[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ie,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Tt){W?yt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Et[ft].width,Et[ft].height,Lt,Ut,Et[ft].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ie,Et[ft].width,Et[ft].height,0,Lt,Ut,Et[ft].data);for(let zt=0;zt<Rt.length;zt++){const De=Rt[zt].image[ft].image;W?yt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,De.width,De.height,Lt,Ut,De.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,ie,De.width,De.height,0,Lt,Ut,De.data)}}else{W?yt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Lt,Ut,Et[ft]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ie,Lt,Ut,Et[ft]);for(let zt=0;zt<Rt.length;zt++){const ae=Rt[zt];W?yt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,Lt,Ut,ae.image[ft]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,ie,Lt,Ut,ae.image[ft])}}}M(b)&&y(r.TEXTURE_CUBE_MAP),dt.__version=vt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function xt(O,b,j,pt,vt,dt){const bt=c.convert(j.format,j.colorSpace),At=c.convert(j.type),Xt=U(j.internalFormat,bt,At,j.colorSpace),Jt=s.get(b),Tt=s.get(j);if(Tt.__renderTarget=b,!Jt.__hasExternalTextures){const Et=Math.max(1,b.width>>dt),Ft=Math.max(1,b.height>>dt);vt===r.TEXTURE_3D||vt===r.TEXTURE_2D_ARRAY?i.texImage3D(vt,dt,Xt,Et,Ft,b.depth,0,bt,At,null):i.texImage2D(vt,dt,Xt,Et,Ft,0,bt,At,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),Fe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,vt,Tt.__webglTexture,0,V(b)):(vt===r.TEXTURE_2D||vt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,vt,Tt.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(O,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,O),b.depthBuffer){const pt=b.depthTexture,vt=pt&&pt.isDepthTexture?pt.type:null,dt=L(b.stencilBuffer,vt),bt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Fe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),dt,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),dt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,dt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,O)}else{const pt=b.textures;for(let vt=0;vt<pt.length;vt++){const dt=pt[vt],bt=c.convert(dt.format,dt.colorSpace),At=c.convert(dt.type),Xt=U(dt.internalFormat,bt,At,dt.colorSpace);Fe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(b),Xt,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(b),Xt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Yt(O,b,j){const pt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(b.depthTexture);if(vt.__renderTarget=b,(!vt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pt){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),vt.__webglTexture===void 0){vt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),z(r.TEXTURE_CUBE_MAP,b.depthTexture);const Jt=c.convert(b.depthTexture.format),Tt=c.convert(b.depthTexture.type);let Et;b.depthTexture.format===Da?Et=r.DEPTH_COMPONENT24:b.depthTexture.format===Gs&&(Et=r.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Et,b.width,b.height,0,Jt,Tt,null)}}else nt(b.depthTexture,0);const dt=vt.__webglTexture,bt=V(b),At=pt?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,Xt=b.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Da)Fe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,At,dt,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,At,dt,0);else if(b.depthTexture.format===Gs)Fe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,At,dt,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,At,dt,0);else throw new Error("Unknown depthTexture format")}function $t(O){const b=s.get(O),j=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",vt)};pt.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=pt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let pt=0;pt<6;pt++)Yt(b.__webglFramebuffer[pt],O,pt);else{const pt=O.texture.mipmaps;pt&&pt.length>0?Yt(b.__webglFramebuffer[0],O,0):Yt(b.__webglFramebuffer,O,0)}else if(j){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=r.createRenderbuffer(),Pt(b.__webglDepthbuffer[pt],O,!1);else{const vt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,dt)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Pt(b.__webglDepthbuffer,O,!1);else{const vt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(O,b,j){const pt=s.get(O);b!==void 0&&xt(pt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&$t(O)}function pe(O){const b=O.texture,j=s.get(O),pt=s.get(b);O.addEventListener("dispose",H);const vt=O.textures,dt=O.isWebGLCubeRenderTarget===!0,bt=vt.length>1;if(bt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=b.version,f.memory.textures++),dt){j.__webglFramebuffer=[];for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[At]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)j.__webglFramebuffer[At][Xt]=r.createFramebuffer()}else j.__webglFramebuffer[At]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let At=0;At<b.mipmaps.length;At++)j.__webglFramebuffer[At]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(bt)for(let At=0,Xt=vt.length;At<Xt;At++){const Jt=s.get(vt[At]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&Fe(O)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let At=0;At<vt.length;At++){const Xt=vt[At];j.__webglColorRenderbuffer[At]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[At]);const Jt=c.convert(Xt.format,Xt.colorSpace),Tt=c.convert(Xt.type),Et=U(Xt.internalFormat,Jt,Tt,Xt.colorSpace,O.isXRRenderTarget===!0),Ft=V(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,Et,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,j.__webglColorRenderbuffer[At])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(j.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),z(r.TEXTURE_CUBE_MAP,b);for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)xt(j.__webglFramebuffer[At][Xt],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Xt);else xt(j.__webglFramebuffer[At],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(b)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(bt){for(let At=0,Xt=vt.length;At<Xt;At++){const Jt=vt[At],Tt=s.get(Jt);let Et=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Et=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Et,Tt.__webglTexture),z(Et,Jt),xt(j.__webglFramebuffer,O,Jt,r.COLOR_ATTACHMENT0+At,Et,0),M(Jt)&&y(Et)}i.unbindTexture()}else{let At=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(At=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,pt.__webglTexture),z(At,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)xt(j.__webglFramebuffer[Xt],O,b,r.COLOR_ATTACHMENT0,At,Xt);else xt(j.__webglFramebuffer,O,b,r.COLOR_ATTACHMENT0,At,0);M(b)&&y(At),i.unbindTexture()}O.depthBuffer&&$t(O)}function xe(O){const b=O.textures;for(let j=0,pt=b.length;j<pt;j++){const vt=b[j];if(M(vt)){const dt=D(O),bt=s.get(vt).__webglTexture;i.bindTexture(dt,bt),y(dt),i.unbindTexture()}}}const Ee=[],ee=[];function ke(O){if(O.samples>0){if(Fe(O)===!1){const b=O.textures,j=O.width,pt=O.height;let vt=r.COLOR_BUFFER_BIT;const dt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=s.get(O),At=b.length>1;if(At)for(let Jt=0;Jt<b.length;Jt++)i.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const Xt=O.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Jt=0;Jt<b.length;Jt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(vt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(vt|=r.STENCIL_BUFFER_BIT)),At){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[Jt]);const Tt=s.get(b[Jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,j,pt,0,0,j,pt,vt,r.NEAREST),m===!0&&(Ee.length=0,ee.length=0,Ee.push(r.COLOR_ATTACHMENT0+Jt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ee.push(dt),ee.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ee)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ee))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),At)for(let Jt=0;Jt<b.length;Jt++){i.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.RENDERBUFFER,bt.__webglColorRenderbuffer[Jt]);const Tt=s.get(b[Jt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.TEXTURE_2D,Tt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function V(O){return Math.min(l.maxSamples,O.samples)}function Fe(O){const b=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Me(O){const b=f.render.frame;_.get(O)!==b&&(_.set(O,b),O.update())}function Ae(O,b){const j=O.colorSpace,pt=O.format,vt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||j!==jr&&j!==us&&(Le.getTransfer(j)===Ve?(pt!==Ii||vt!==hi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",j)),b}function Gt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=et,this.setTexture2D=nt,this.setTexture2DArray=P,this.setTexture3D=G,this.setTextureCube=ct,this.rebindTextures=fe,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function WR(r,t){function i(s,l=us){let c;const f=Le.getTransfer(l);if(s===hi)return r.UNSIGNED_BYTE;if(s===_p)return r.UNSIGNED_SHORT_4_4_4_4;if(s===vp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Yv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===jv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Wv)return r.BYTE;if(s===qv)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===gp)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===qi)return r.FLOAT;if(s===wa)return r.HALF_FLOAT;if(s===Zv)return r.ALPHA;if(s===Kv)return r.RGB;if(s===Ii)return r.RGBA;if(s===Da)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===Jv)return r.RED;if(s===xp)return r.RED_INTEGER;if(s===Yr)return r.RG;if(s===Sp)return r.RG_INTEGER;if(s===yp)return r.RGBA_INTEGER;if(s===cu||s===uu||s===fu||s===hu)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===cu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===cu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dd||s===Ud||s===Ld||s===Nd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ld)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd||s===Hd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Od||s===Pd)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Id)return c.COMPRESSED_R11_EAC;if(s===Fd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Bd)return c.COMPRESSED_RG11_EAC;if(s===Hd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===Yd||s===jd||s===Zd||s===Kd||s===Jd||s===Qd||s===$d||s===tp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Gd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$d)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ep||s===np||s===ip)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===ep)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ip)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ap||s===sp||s===rp||s===op)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ap)return c.COMPRESSED_RED_RGTC1_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const qR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YR=`
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

}`;class jR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ox(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new $i({vertexShader:qR,fragmentShader:YR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new _l(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZR extends Xs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",M=new jR,y={},D=i.getContextAttributes();let U=null,L=null;const B=[],I=[],H=new Vt;let T=null;const N=new Ti;N.viewport=new sn;const _t=new Ti;_t.viewport=new sn;const k=[N,_t],et=new sb;let at=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=B[Z];return rt===void 0&&(rt=new kh,B[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=B[Z];return rt===void 0&&(rt=new kh,B[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=B[Z];return rt===void 0&&(rt=new kh,B[Z]=rt),rt.getHandSpace()};function nt(Z){const rt=I.indexOf(Z.inputSource);if(rt===-1)return;const xt=B[rt];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,p||f),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function P(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",G);for(let Z=0;Z<B.length;Z++){const rt=I[Z];rt!==null&&(I[Z]=null,B[Z].disconnect(rt))}at=null,ot=null,M.reset();for(const Z in y)delete y[Z];t.setRenderTarget(U),S=null,g=null,v=null,l=null,L=null,wt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",P),l.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(H),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Pt=null,Yt=null;D.depth&&(Yt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=D.stencil?Gs:Da,Pt=D.stencil?ul:Ji);const $t={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer($t),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new Zi(g.textureWidth,g.textureHeight,{format:Ii,type:hi,depthTexture:new dl(g.textureWidth,g.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const xt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Zi(S.framebufferWidth,S.framebufferHeight,{format:Ii,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(Z){for(let rt=0;rt<Z.removed.length;rt++){const xt=Z.removed[rt],Pt=I.indexOf(xt);Pt>=0&&(I[Pt]=null,B[Pt].disconnect(xt))}for(let rt=0;rt<Z.added.length;rt++){const xt=Z.added[rt];let Pt=I.indexOf(xt);if(Pt===-1){for(let $t=0;$t<B.length;$t++)if($t>=I.length){I.push(xt),Pt=$t;break}else if(I[$t]===null){I[$t]=xt,Pt=$t;break}if(Pt===-1)break}const Yt=B[Pt];Yt&&Yt.connect(xt)}}const ct=new Y,mt=new Y;function Ct(Z,rt,xt){ct.setFromMatrixPosition(rt.matrixWorld),mt.setFromMatrixPosition(xt.matrixWorld);const Pt=ct.distanceTo(mt),Yt=rt.projectionMatrix.elements,$t=xt.projectionMatrix.elements,fe=Yt[14]/(Yt[10]-1),pe=Yt[14]/(Yt[10]+1),xe=(Yt[9]+1)/Yt[5],Ee=(Yt[9]-1)/Yt[5],ee=(Yt[8]-1)/Yt[0],ke=($t[8]+1)/$t[0],V=fe*ee,Fe=fe*ke,Me=Pt/(-ee+ke),Ae=Me*-ee;if(rt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(Me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Yt[10]===-1)Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Gt=fe+Me,O=pe+Me,b=V-Ae,j=Fe+(Pt-Ae),pt=xe*pe/O*Gt,vt=Ee*pe/O*Gt;Z.projectionMatrix.makePerspective(b,j,pt,vt,Gt,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function R(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let rt=Z.near,xt=Z.far;M.texture!==null&&(M.depthNear>0&&(rt=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),et.near=_t.near=N.near=rt,et.far=_t.far=N.far=xt,(at!==et.near||ot!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),at=et.near,ot=et.far),et.layers.mask=Z.layers.mask|6,N.layers.mask=et.layers.mask&-5,_t.layers.mask=et.layers.mask&-3;const Pt=Z.parent,Yt=et.cameras;R(et,Pt);for(let $t=0;$t<Yt.length;$t++)R(Yt[$t],Pt);Yt.length===2?Ct(et,N,_t):et.projectionMatrix.copy(N.projectionMatrix),z(Z,et,Pt)};function z(Z,rt,xt){xt===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=lp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(Z){m=Z,g!==null&&(g.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(et)},this.getCameraTexture=function(Z){return y[Z]};let J=null;function ht(Z,rt){if(_=rt.getViewerPose(p||f),E=rt,_!==null){const xt=_.views;S!==null&&(t.setRenderTargetFramebuffer(L,S.framebuffer),t.setRenderTarget(L));let Pt=!1;xt.length!==et.cameras.length&&(et.cameras.length=0,Pt=!0);for(let pe=0;pe<xt.length;pe++){const xe=xt[pe];let Ee=null;if(S!==null)Ee=S.getViewport(xe);else{const ke=v.getViewSubImage(g,xe);Ee=ke.viewport,pe===0&&(t.setRenderTargetTextures(L,ke.colorTexture,ke.depthStencilTexture),t.setRenderTarget(L))}let ee=k[pe];ee===void 0&&(ee=new Ti,ee.layers.enable(pe),ee.viewport=new sn,k[pe]=ee),ee.matrix.fromArray(xe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(xe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),pe===0&&(et.matrix.copy(ee.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Pt===!0&&et.cameras.push(ee)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const pe=v.getDepthInformation(xt[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(Yt&&Yt.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let pe=0;pe<xt.length;pe++){const xe=xt[pe].camera;if(xe){let Ee=y[xe];Ee||(Ee=new ox,y[xe]=Ee);const ee=v.getCameraImage(xe);Ee.sourceTexture=ee}}}}for(let xt=0;xt<B.length;xt++){const Pt=I[xt],Yt=B[xt];Pt!==null&&Yt!==void 0&&Yt.update(Pt,rt,p||f)}J&&J(Z,rt),rt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:rt}),E=null}const wt=new yx;wt.setAnimationLoop(ht),this.setAnimationLoop=function(Z){J=Z},this.dispose=function(){}}}const Is=new Qi,KR=new tn;function JR(r,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,_x(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,D,U,L){y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),_(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,L)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),w(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?m(M,y,D,U):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===$n&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===$n&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=t.get(y),U=D.envMap,L=D.envMapRotation;U&&(M.envMap.value=U,Is.copy(L),Is.x*=-1,Is.y*=-1,Is.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),M.envMapRotation.value.setFromMatrix4(KR.makeRotationFromEuler(Is)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,D,U){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=U*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===$n&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const D=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function QR(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const L=U.program;s.uniformBlockBinding(D,L)}function p(D,U){let L=l[D.id];L===void 0&&(E(D),L=_(D),l[D.id]=L,D.addEventListener("dispose",M));const B=U.program;s.updateUBOMapping(D,B);const I=t.render.frame;c[D.id]!==I&&(g(D),c[D.id]=I)}function _(D){const U=v();D.__bindingPointIndex=U;const L=r.createBuffer(),B=D.__size,I=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,L),L}function v(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const U=l[D.id],L=D.uniforms,B=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let I=0,H=L.length;I<H;I++){const T=Array.isArray(L[I])?L[I]:[L[I]];for(let N=0,_t=T.length;N<_t;N++){const k=T[N];if(S(k,I,N,B)===!0){const et=k.__offset,at=Array.isArray(k.value)?k.value:[k.value];let ot=0;for(let nt=0;nt<at.length;nt++){const P=at[nt],G=w(P);typeof P=="number"||typeof P=="boolean"?(k.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,et+ot,k.__data)):P.isMatrix3?(k.__data[0]=P.elements[0],k.__data[1]=P.elements[1],k.__data[2]=P.elements[2],k.__data[3]=0,k.__data[4]=P.elements[3],k.__data[5]=P.elements[4],k.__data[6]=P.elements[5],k.__data[7]=0,k.__data[8]=P.elements[6],k.__data[9]=P.elements[7],k.__data[10]=P.elements[8],k.__data[11]=0):(P.toArray(k.__data,ot),ot+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,et,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,U,L,B){const I=D.value,H=U+"_"+L;if(B[H]===void 0)return typeof I=="number"||typeof I=="boolean"?B[H]=I:B[H]=I.clone(),!0;{const T=B[H];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return B[H]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function E(D){const U=D.uniforms;let L=0;const B=16;for(let H=0,T=U.length;H<T;H++){const N=Array.isArray(U[H])?U[H]:[U[H]];for(let _t=0,k=N.length;_t<k;_t++){const et=N[_t],at=Array.isArray(et.value)?et.value:[et.value];for(let ot=0,nt=at.length;ot<nt;ot++){const P=at[ot],G=w(P),ct=L%B,mt=ct%G.boundary,Ct=ct+mt;L+=mt,Ct!==0&&B-Ct<G.storage&&(L+=B-Ct),et.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=L,L+=G.storage}}}const I=L%B;return I>0&&(L+=B-I),D.__size=L,D.__cache={},this}function w(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",D),U}function M(D){const U=D.target;U.removeEventListener("dispose",M);const L=f.indexOf(U.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function y(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}const $R=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function tC(){return Xi===null&&(Xi=new sE($R,16,16,Yr,wa),Xi.name="DFG_LUT",Xi.minFilter=Pn,Xi.magFilter=Pn,Xi.wrapS=Ta,Xi.wrapT=Ta,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class eC{constructor(t={}){const{canvas:i=PM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=hi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const w=S,M=new Set([yp,Sp,xp]),y=new Set([hi,Ji,cl,ul,_p,vp]),D=new Uint32Array(4),U=new Int32Array(4);let L=null,B=null;const I=[],H=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let _t=!1;this._outputColorSpace=bi;let k=0,et=0,at=null,ot=-1,nt=null;const P=new sn,G=new sn;let ct=null;const mt=new ve(0);let Ct=0,R=i.width,z=i.height,J=1,ht=null,wt=null;const Z=new sn(0,0,R,z),rt=new sn(0,0,R,z);let xt=!1;const Pt=new Ap;let Yt=!1,$t=!1;const fe=new tn,pe=new Y,xe=new sn,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ke(){return at===null?J:1}let V=s;function Fe(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",ae,!1),i.addEventListener("webglcontextcreationerror",De,!1),V===null){const q="webgl2";if(V=Fe(q,C),V===null)throw Fe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw ze("WebGLRenderer: "+C.message),C}let Me,Ae,Gt,O,b,j,pt,vt,dt,bt,At,Xt,Jt,Tt,Et,Ft,Lt,Ut,ie,W,Dt,yt,Bt;function Rt(){Me=new eA(V),Me.init(),Dt=new WR(V,Me),Ae=new Y1(V,Me,t,Dt),Gt=new kR(V,Me),Ae.reversedDepthBuffer&&g&&Gt.buffers.depth.setReversed(!0),O=new aA(V),b=new wR,j=new XR(V,Me,Gt,b,Ae,Dt,O),pt=new tA(N),vt=new cb(V),yt=new W1(V,vt),dt=new nA(V,vt,O,yt),bt=new rA(V,dt,vt,yt,O),Ut=new sA(V,Ae,j),Et=new j1(b),At=new CR(N,pt,Me,Ae,yt,Et),Xt=new JR(N,b),Jt=new UR,Tt=new IR(Me),Lt=new X1(N,pt,Gt,bt,E,m),Ft=new VR(N,bt,Ae),Bt=new QR(V,O,Ae,Gt),ie=new q1(V,Me,O),W=new iA(V,Me,O),O.programs=At.programs,N.capabilities=Ae,N.extensions=Me,N.properties=b,N.renderLists=Jt,N.shadowMap=Ft,N.state=Gt,N.info=O}Rt(),w!==hi&&(T=new lA(w,i.width,i.height,l,c));const ft=new ZR(N,V);this.xr=ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(R,z,!1))},this.getSize=function(C){return C.set(R,z)},this.setSize=function(C,q,lt=!0){if(ft.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}R=C,z=q,i.width=Math.floor(C*J),i.height=Math.floor(q*J),lt===!0&&(i.style.width=C+"px",i.style.height=q+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(R*J,z*J).floor()},this.setDrawingBufferSize=function(C,q,lt){R=C,z=q,J=lt,i.width=Math.floor(C*lt),i.height=Math.floor(q*lt),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(w===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,q,lt,it){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,q,lt,it),Gt.viewport(P.copy(Z).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(rt)},this.setScissor=function(C,q,lt,it){C.isVector4?rt.set(C.x,C.y,C.z,C.w):rt.set(C,q,lt,it),Gt.scissor(G.copy(rt).multiplyScalar(J).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(C){Gt.setScissorTest(xt=C)},this.setOpaqueSort=function(C){ht=C},this.setTransparentSort=function(C){wt=C},this.getClearColor=function(C){return C.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,lt=!0){let it=0;if(C){let Q=!1;if(at!==null){const Ot=at.texture.format;Q=M.has(Ot)}if(Q){const Ot=at.texture.type,kt=y.has(Ot),It=Lt.getClearColor(),Zt=Lt.getClearAlpha(),Qt=It.r,re=It.g,ce=It.b;kt?(D[0]=Qt,D[1]=re,D[2]=ce,D[3]=Zt,V.clearBufferuiv(V.COLOR,0,D)):(U[0]=Qt,U[1]=re,U[2]=ce,U[3]=Zt,V.clearBufferiv(V.COLOR,0,U))}else it|=V.COLOR_BUFFER_BIT}q&&(it|=V.DEPTH_BUFFER_BIT),lt&&(it|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&V.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",ae,!1),i.removeEventListener("webglcontextcreationerror",De,!1),Lt.dispose(),Jt.dispose(),Tt.dispose(),b.dispose(),pt.dispose(),bt.dispose(),yt.dispose(),Bt.dispose(),At.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ws),ft.removeEventListener("sessionend",qs),Fi.stop()};function zt(C){C.preventDefault(),w_("WebGLRenderer: Context Lost."),_t=!0}function ae(){w_("WebGLRenderer: Context Restored."),_t=!1;const C=O.autoReset,q=Ft.enabled,lt=Ft.autoUpdate,it=Ft.needsUpdate,Q=Ft.type;Rt(),O.autoReset=C,Ft.enabled=q,Ft.autoUpdate=lt,Ft.needsUpdate=it,Ft.type=Q}function De(C){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oe(C){const q=C.target;q.removeEventListener("dispose",oe),he(q)}function he(C){ln(C),b.remove(C)}function ln(C){const q=b.get(C).programs;q!==void 0&&(q.forEach(function(lt){At.releaseProgram(lt)}),C.isShaderMaterial&&At.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,lt,it,Q,Ot){q===null&&(q=Ee);const kt=Q.isMesh&&Q.matrixWorld.determinant()<0,It=Sl(C,q,lt,it,Q);Gt.setMaterial(it,kt);let Zt=lt.index,Qt=1;if(it.wireframe===!0){if(Zt=dt.getWireframeAttribute(lt),Zt===void 0)return;Qt=2}const re=lt.drawRange,ce=lt.attributes.position;let Wt=re.start*Qt,me=(re.start+re.count)*Qt;Ot!==null&&(Wt=Math.max(Wt,Ot.start*Qt),me=Math.min(me,(Ot.start+Ot.count)*Qt)),Zt!==null?(Wt=Math.max(Wt,0),me=Math.min(me,Zt.count)):ce!=null&&(Wt=Math.max(Wt,0),me=Math.min(me,ce.count));const Je=me-Wt;if(Je<0||Je===1/0)return;yt.setup(Q,it,It,lt,Zt);let Qe,Ne=ie;if(Zt!==null&&(Qe=vt.get(Zt),Ne=W,Ne.setIndex(Qe)),Q.isMesh)it.wireframe===!0?(Gt.setLineWidth(it.wireframeLinewidth*ke()),Ne.setMode(V.LINES)):Ne.setMode(V.TRIANGLES);else if(Q.isLine){let vn=it.linewidth;vn===void 0&&(vn=1),Gt.setLineWidth(vn*ke()),Q.isLineSegments?Ne.setMode(V.LINES):Q.isLineLoop?Ne.setMode(V.LINE_LOOP):Ne.setMode(V.LINE_STRIP)}else Q.isPoints?Ne.setMode(V.POINTS):Q.isSprite&&Ne.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)gu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Ne.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const vn=Q._multiDrawStarts,jt=Q._multiDrawCounts,Fn=Q._multiDrawCount,le=Zt?vt.get(Zt).bytesPerElement:1,Bn=b.get(it).currentProgram.getUniforms();for(let ei=0;ei<Fn;ei++)Bn.setValue(V,"_gl_DrawID",ei),Ne.render(vn[ei]/le,jt[ei])}else if(Q.isInstancedMesh)Ne.renderInstances(Wt,Je,Q.count);else if(lt.isInstancedBufferGeometry){const vn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,jt=Math.min(lt.instanceCount,vn);Ne.renderInstances(Wt,Je,jt)}else Ne.render(Wt,Je)};function kn(C,q,lt){C.transparent===!0&&C.side===zi&&C.forceSinglePass===!1?(C.side=$n,C.needsUpdate=!0,Ua(C,q,lt),C.side=hs,C.needsUpdate=!0,Ua(C,q,lt),C.side=zi):Ua(C,q,lt)}this.compile=function(C,q,lt=null){lt===null&&(lt=C),B=Tt.get(lt),B.init(q),H.push(B),lt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),C!==lt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),B.setupLights();const it=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ot=Q.material;if(Ot)if(Array.isArray(Ot))for(let kt=0;kt<Ot.length;kt++){const It=Ot[kt];kn(It,lt,Q),it.add(It)}else kn(Ot,lt,Q),it.add(Ot)}),B=H.pop(),it},this.compileAsync=function(C,q,lt=null){const it=this.compile(C,q,lt);return new Promise(Q=>{function Ot(){if(it.forEach(function(kt){b.get(kt).currentProgram.isReady()&&it.delete(kt)}),it.size===0){Q(C);return}setTimeout(Ot,10)}Me.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let In=null;function ti(C){In&&In(C)}function Ws(){Fi.stop()}function qs(){Fi.start()}const Fi=new yx;Fi.setAnimationLoop(ti),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(C){In=C,ft.setAnimationLoop(C),C===null?Fi.stop():Fi.start()},ft.addEventListener("sessionstart",Ws),ft.addEventListener("sessionend",qs),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_t===!0)return;const lt=ft.enabled===!0&&ft.isPresenting===!0,it=T!==null&&(at===null||lt)&&T.begin(N,at);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(q),q=ft.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,q,at),B=Tt.get(C,H.length),B.init(q),H.push(B),fe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Pt.setFromProjectionMatrix(fe,Yi,q.reversedDepth),$t=this.localClippingEnabled,Yt=Et.init(this.clippingPlanes,$t),L=Jt.get(C,I.length),L.init(),I.push(L),ft.enabled===!0&&ft.isPresenting===!0){const kt=N.xr.getDepthSensingMesh();kt!==null&&Ys(kt,q,-1/0,N.sortObjects)}Ys(C,q,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(ht,wt),ee=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ee&&Lt.addToRenderList(L,C),this.info.render.frame++,Yt===!0&&Et.beginShadows();const Q=B.state.shadowsArray;if(Ft.render(Q,C,q),Yt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&T.hasRenderPass())===!1){const kt=L.opaque,It=L.transmissive;if(B.setupLights(),q.isArrayCamera){const Zt=q.cameras;if(It.length>0)for(let Qt=0,re=Zt.length;Qt<re;Qt++){const ce=Zt[Qt];cn(kt,It,C,ce)}ee&&Lt.render(C);for(let Qt=0,re=Zt.length;Qt<re;Qt++){const ce=Zt[Qt];Ri(L,C,ce,ce.viewport)}}else It.length>0&&cn(kt,It,C,q),ee&&Lt.render(C),Ri(L,C,q)}at!==null&&et===0&&(j.updateMultisampleRenderTarget(at),j.updateRenderTargetMipmap(at)),it&&T.end(N),C.isScene===!0&&C.onAfterRender(N,C,q),yt.resetDefaultState(),ot=-1,nt=null,H.pop(),H.length>0?(B=H[H.length-1],Yt===!0&&Et.setGlobalState(N.clippingPlanes,B.state.camera)):B=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function Ys(C,q,lt,it){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)B.pushLight(C),C.castShadow&&B.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Pt.intersectsSprite(C)){it&&xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(fe);const kt=bt.update(C),It=C.material;It.visible&&L.push(C,kt,It,lt,xe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Pt.intersectsObject(C))){const kt=bt.update(C),It=C.material;if(it&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xe.copy(C.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),xe.copy(kt.boundingSphere.center)),xe.applyMatrix4(C.matrixWorld).applyMatrix4(fe)),Array.isArray(It)){const Zt=kt.groups;for(let Qt=0,re=Zt.length;Qt<re;Qt++){const ce=Zt[Qt],Wt=It[ce.materialIndex];Wt&&Wt.visible&&L.push(C,kt,Wt,lt,xe.z,ce)}}else It.visible&&L.push(C,kt,It,lt,xe.z,null)}}const Ot=C.children;for(let kt=0,It=Ot.length;kt<It;kt++)Ys(Ot[kt],q,lt,it)}function Ri(C,q,lt,it){const{opaque:Q,transmissive:Ot,transparent:kt}=C;B.setupLightsView(lt),Yt===!0&&Et.setGlobalState(N.clippingPlanes,lt),it&&Gt.viewport(P.copy(it)),Q.length>0&&_n(Q,q,lt),Ot.length>0&&_n(Ot,q,lt),kt.length>0&&_n(kt,q,lt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function cn(C,q,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[it.id]===void 0){const Wt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[it.id]=new Zi(1,1,{generateMipmaps:!0,type:Wt?wa:hi,minFilter:Hs,samples:Math.max(4,Ae.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Ot=B.state.transmissionRenderTarget[it.id],kt=it.viewport||P;Ot.setSize(kt.z*N.transmissionResolutionScale,kt.w*N.transmissionResolutionScale);const It=N.getRenderTarget(),Zt=N.getActiveCubeFace(),Qt=N.getActiveMipmapLevel();N.setRenderTarget(Ot),N.getClearColor(mt),Ct=N.getClearAlpha(),Ct<1&&N.setClearColor(16777215,.5),N.clear(),ee&&Lt.render(lt);const re=N.toneMapping;N.toneMapping=ji;const ce=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),B.setupLightsView(it),Yt===!0&&Et.setGlobalState(N.clippingPlanes,it),_n(C,lt,it),j.updateMultisampleRenderTarget(Ot),j.updateRenderTargetMipmap(Ot),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let me=0,Je=q.length;me<Je;me++){const Qe=q[me],{object:Ne,geometry:vn,material:jt,group:Fn}=Qe;if(jt.side===zi&&Ne.layers.test(it.layers)){const le=jt.side;jt.side=$n,jt.needsUpdate=!0,ea(Ne,lt,it,vn,jt,Fn),jt.side=le,jt.needsUpdate=!0,Wt=!0}}Wt===!0&&(j.updateMultisampleRenderTarget(Ot),j.updateRenderTargetMipmap(Ot))}N.setRenderTarget(It,Zt,Qt),N.setClearColor(mt,Ct),ce!==void 0&&(it.viewport=ce),N.toneMapping=re}function _n(C,q,lt){const it=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ot=C.length;Q<Ot;Q++){const kt=C[Q],{object:It,geometry:Zt,group:Qt}=kt;let re=kt.material;re.allowOverride===!0&&it!==null&&(re=it),It.layers.test(lt.layers)&&ea(It,q,lt,Zt,re,Qt)}}function ea(C,q,lt,it,Q,Ot){C.onBeforeRender(N,q,lt,it,Q,Ot),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(N,q,lt,it,C,Ot),Q.transparent===!0&&Q.side===zi&&Q.forceSinglePass===!1?(Q.side=$n,Q.needsUpdate=!0,N.renderBufferDirect(lt,q,it,Q,C,Ot),Q.side=hs,Q.needsUpdate=!0,N.renderBufferDirect(lt,q,it,Q,C,Ot),Q.side=zi):N.renderBufferDirect(lt,q,it,Q,C,Ot),C.onAfterRender(N,q,lt,it,Q,Ot)}function Ua(C,q,lt){q.isScene!==!0&&(q=Ee);const it=b.get(C),Q=B.state.lights,Ot=B.state.shadowsArray,kt=Q.state.version,It=At.getParameters(C,Q.state,Ot,q,lt),Zt=At.getProgramCacheKey(It);let Qt=it.programs;it.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,it.fog=q.fog;const re=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;it.envMap=pt.get(C.envMap||it.environment,re),it.envMapRotation=it.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Qt===void 0&&(C.addEventListener("dispose",oe),Qt=new Map,it.programs=Qt);let ce=Qt.get(Zt);if(ce!==void 0){if(it.currentProgram===ce&&it.lightsStateVersion===kt)return xl(C,It),ce}else It.uniforms=At.getUniforms(C),C.onBeforeCompile(It,N),ce=At.acquireProgram(It,Zt),Qt.set(Zt,ce),it.uniforms=It.uniforms;const Wt=it.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=Et.uniform),xl(C,It),it.needsLights=io(C),it.lightsStateVersion=kt,it.needsLights&&(Wt.ambientLightColor.value=Q.state.ambient,Wt.lightProbe.value=Q.state.probe,Wt.directionalLights.value=Q.state.directional,Wt.directionalLightShadows.value=Q.state.directionalShadow,Wt.spotLights.value=Q.state.spot,Wt.spotLightShadows.value=Q.state.spotShadow,Wt.rectAreaLights.value=Q.state.rectArea,Wt.ltc_1.value=Q.state.rectAreaLTC1,Wt.ltc_2.value=Q.state.rectAreaLTC2,Wt.pointLights.value=Q.state.point,Wt.pointLightShadows.value=Q.state.pointShadow,Wt.hemisphereLights.value=Q.state.hemi,Wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Wt.spotLightMatrix.value=Q.state.spotLightMatrix,Wt.spotLightMap.value=Q.state.spotLightMap,Wt.pointShadowMatrix.value=Q.state.pointShadowMatrix),it.currentProgram=ce,it.uniformsList=null,ce}function vl(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=du.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function xl(C,q){const lt=b.get(C);lt.outputColorSpace=q.outputColorSpace,lt.batching=q.batching,lt.batchingColor=q.batchingColor,lt.instancing=q.instancing,lt.instancingColor=q.instancingColor,lt.instancingMorph=q.instancingMorph,lt.skinning=q.skinning,lt.morphTargets=q.morphTargets,lt.morphNormals=q.morphNormals,lt.morphColors=q.morphColors,lt.morphTargetsCount=q.morphTargetsCount,lt.numClippingPlanes=q.numClippingPlanes,lt.numIntersection=q.numClipIntersection,lt.vertexAlphas=q.vertexAlphas,lt.vertexTangents=q.vertexTangents,lt.toneMapping=q.toneMapping}function Sl(C,q,lt,it,Q){q.isScene!==!0&&(q=Ee),j.resetTextureUnits();const Ot=q.fog,kt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?q.environment:null,It=at===null?N.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:jr,Zt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Qt=pt.get(it.envMap||kt,Zt),re=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ce=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Wt=!!lt.morphAttributes.position,me=!!lt.morphAttributes.normal,Je=!!lt.morphAttributes.color;let Qe=ji;it.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Qe=N.toneMapping);const Ne=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,vn=Ne!==void 0?Ne.length:0,jt=b.get(it),Fn=B.state.lights;if(Yt===!0&&($t===!0||C!==nt)){const fn=C===nt&&it.id===ot;Et.setState(it,C,fn)}let le=!1;it.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Fn.state.version||jt.outputColorSpace!==It||Q.isBatchedMesh&&jt.batching===!1||!Q.isBatchedMesh&&jt.batching===!0||Q.isBatchedMesh&&jt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&jt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&jt.instancing===!1||!Q.isInstancedMesh&&jt.instancing===!0||Q.isSkinnedMesh&&jt.skinning===!1||!Q.isSkinnedMesh&&jt.skinning===!0||Q.isInstancedMesh&&jt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&jt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&jt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&jt.instancingMorph===!1&&Q.morphTexture!==null||jt.envMap!==Qt||it.fog===!0&&jt.fog!==Ot||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Et.numPlanes||jt.numIntersection!==Et.numIntersection)||jt.vertexAlphas!==re||jt.vertexTangents!==ce||jt.morphTargets!==Wt||jt.morphNormals!==me||jt.morphColors!==Je||jt.toneMapping!==Qe||jt.morphTargetsCount!==vn)&&(le=!0):(le=!0,jt.__version=it.version);let Bn=jt.currentProgram;le===!0&&(Bn=Ua(it,q,Q));let ei=!1,Ci=!1,ni=!1;const Be=Bn.getUniforms(),un=jt.uniforms;if(Gt.useProgram(Bn.program)&&(ei=!0,Ci=!0,ni=!0),it.id!==ot&&(ot=it.id,Ci=!0),ei||nt!==C){Gt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Be.setValue(V,"projectionMatrix",C.projectionMatrix),Be.setValue(V,"viewMatrix",C.matrixWorldInverse);const wi=Be.map.cameraPosition;wi!==void 0&&wi.setValue(V,pe.setFromMatrixPosition(C.matrixWorld)),Ae.logarithmicDepthBuffer&&Be.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Be.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),nt!==C&&(nt=C,Ci=!0,ni=!0)}if(jt.needsLights&&(Fn.state.directionalShadowMap.length>0&&Be.setValue(V,"directionalShadowMap",Fn.state.directionalShadowMap,j),Fn.state.spotShadowMap.length>0&&Be.setValue(V,"spotShadowMap",Fn.state.spotShadowMap,j),Fn.state.pointShadowMap.length>0&&Be.setValue(V,"pointShadowMap",Fn.state.pointShadowMap,j)),Q.isSkinnedMesh){Be.setOptional(V,Q,"bindMatrix"),Be.setOptional(V,Q,"bindMatrixInverse");const fn=Q.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Be.setValue(V,"boneTexture",fn.boneTexture,j))}Q.isBatchedMesh&&(Be.setOptional(V,Q,"batchingTexture"),Be.setValue(V,"batchingTexture",Q._matricesTexture,j),Be.setOptional(V,Q,"batchingIdTexture"),Be.setValue(V,"batchingIdTexture",Q._indirectTexture,j),Be.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Be.setValue(V,"batchingColorTexture",Q._colorsTexture,j));const Hn=lt.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Ut.update(Q,lt,Bn),(Ci||jt.receiveShadow!==Q.receiveShadow)&&(jt.receiveShadow=Q.receiveShadow,Be.setValue(V,"receiveShadow",Q.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&q.environment!==null&&(un.envMapIntensity.value=q.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=tC()),Ci&&(Be.setValue(V,"toneMappingExposure",N.toneMappingExposure),jt.needsLights&&ps(un,ni),Ot&&it.fog===!0&&Xt.refreshFogUniforms(un,Ot),Xt.refreshMaterialUniforms(un,it,J,z,B.state.transmissionRenderTarget[C.id]),du.upload(V,vl(jt),un,j)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(du.upload(V,vl(jt),un,j),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Be.setValue(V,"center",Q.center),Be.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Be.setValue(V,"normalMatrix",Q.normalMatrix),Be.setValue(V,"modelMatrix",Q.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const fn=it.uniformsGroups;for(let wi=0,na=fn.length;wi<na;wi++){const js=fn[wi];Bt.update(js,Bn),Bt.bind(js,Bn)}}return Bn}function ps(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function io(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(C,q,lt){const it=b.get(C);it.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=q,b.get(C.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const lt=b.get(C);lt.__webglFramebuffer=q,lt.__useDefaultFramebuffer=q===void 0};const La=V.createFramebuffer();this.setRenderTarget=function(C,q=0,lt=0){at=C,k=q,et=lt;let it=null,Q=!1,Ot=!1;if(C){const It=b.get(C);if(It.__useDefaultFramebuffer!==void 0){Gt.bindFramebuffer(V.FRAMEBUFFER,It.__webglFramebuffer),P.copy(C.viewport),G.copy(C.scissor),ct=C.scissorTest,Gt.viewport(P),Gt.scissor(G),Gt.setScissorTest(ct),ot=-1;return}else if(It.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(It.__hasExternalTextures)j.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const re=C.depthTexture;if(It.__boundDepthTexture!==re){if(re!==null&&b.has(re)&&(C.width!==re.image.width||C.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}const Zt=C.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ot=!0);const Qt=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qt[q])?it=Qt[q][lt]:it=Qt[q],Q=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?it=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Qt)?it=Qt[lt]:it=Qt,P.copy(C.viewport),G.copy(C.scissor),ct=C.scissorTest}else P.copy(Z).multiplyScalar(J).floor(),G.copy(rt).multiplyScalar(J).floor(),ct=xt;if(lt!==0&&(it=La),Gt.bindFramebuffer(V.FRAMEBUFFER,it)&&Gt.drawBuffers(C,it),Gt.viewport(P),Gt.scissor(G),Gt.setScissorTest(ct),Q){const It=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,It.__webglTexture,lt)}else if(Ot){const It=q;for(let Zt=0;Zt<C.textures.length;Zt++){const Qt=b.get(C.textures[Zt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Zt,Qt.__webglTexture,lt,It)}}else if(C!==null&&lt!==0){const It=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,It.__webglTexture,lt)}ot=-1},this.readRenderTargetPixels=function(C,q,lt,it,Q,Ot,kt,It=0){if(!(C&&C.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Zt=Zt[kt]),Zt){Gt.bindFramebuffer(V.FRAMEBUFFER,Zt);try{const Qt=C.textures[It],re=Qt.format,ce=Qt.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+It),!Ae.textureFormatReadable(re)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(ce)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-it&&lt>=0&&lt<=C.height-Q&&V.readPixels(q,lt,it,Q,Dt.convert(re),Dt.convert(ce),Ot)}finally{const Qt=at!==null?b.get(at).__webglFramebuffer:null;Gt.bindFramebuffer(V.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(C,q,lt,it,Q,Ot,kt,It=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Zt=Zt[kt]),Zt)if(q>=0&&q<=C.width-it&&lt>=0&&lt<=C.height-Q){Gt.bindFramebuffer(V.FRAMEBUFFER,Zt);const Qt=C.textures[It],re=Qt.format,ce=Qt.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+It),!Ae.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Wt),V.bufferData(V.PIXEL_PACK_BUFFER,Ot.byteLength,V.STREAM_READ),V.readPixels(q,lt,it,Q,Dt.convert(re),Dt.convert(ce),0);const me=at!==null?b.get(at).__webglFramebuffer:null;Gt.bindFramebuffer(V.FRAMEBUFFER,me);const Je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await zM(V,Je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Wt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ot),V.deleteBuffer(Wt),V.deleteSync(Je),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,lt=0){const it=Math.pow(2,-lt),Q=Math.floor(C.image.width*it),Ot=Math.floor(C.image.height*it),kt=q!==null?q.x:0,It=q!==null?q.y:0;j.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,kt,It,Q,Ot),Gt.unbindTexture()};const Na=V.createFramebuffer(),ms=V.createFramebuffer();this.copyTextureToTexture=function(C,q,lt=null,it=null,Q=0,Ot=0){let kt,It,Zt,Qt,re,ce,Wt,me,Je;const Qe=C.isCompressedTexture?C.mipmaps[Ot]:C.image;if(lt!==null)kt=lt.max.x-lt.min.x,It=lt.max.y-lt.min.y,Zt=lt.isBox3?lt.max.z-lt.min.z:1,Qt=lt.min.x,re=lt.min.y,ce=lt.isBox3?lt.min.z:0;else{const un=Math.pow(2,-Q);kt=Math.floor(Qe.width*un),It=Math.floor(Qe.height*un),C.isDataArrayTexture?Zt=Qe.depth:C.isData3DTexture?Zt=Math.floor(Qe.depth*un):Zt=1,Qt=0,re=0,ce=0}it!==null?(Wt=it.x,me=it.y,Je=it.z):(Wt=0,me=0,Je=0);const Ne=Dt.convert(q.format),vn=Dt.convert(q.type);let jt;q.isData3DTexture?(j.setTexture3D(q,0),jt=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(j.setTexture2DArray(q,0),jt=V.TEXTURE_2D_ARRAY):(j.setTexture2D(q,0),jt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const Fn=V.getParameter(V.UNPACK_ROW_LENGTH),le=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Bn=V.getParameter(V.UNPACK_SKIP_PIXELS),ei=V.getParameter(V.UNPACK_SKIP_ROWS),Ci=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,re),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ce);const ni=C.isDataArrayTexture||C.isData3DTexture,Be=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const un=b.get(C),Hn=b.get(q),fn=b.get(un.__renderTarget),wi=b.get(Hn.__renderTarget);Gt.bindFramebuffer(V.READ_FRAMEBUFFER,fn.__webglFramebuffer),Gt.bindFramebuffer(V.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let na=0;na<Zt;na++)ni&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(C).__webglTexture,Q,ce+na),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Ot,Je+na)),V.blitFramebuffer(Qt,re,kt,It,Wt,me,kt,It,V.DEPTH_BUFFER_BIT,V.NEAREST);Gt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||b.has(C)){const un=b.get(C),Hn=b.get(q);Gt.bindFramebuffer(V.READ_FRAMEBUFFER,Na),Gt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ms);for(let fn=0;fn<Zt;fn++)ni?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,un.__webglTexture,Q,ce+fn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,un.__webglTexture,Q),Be?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Hn.__webglTexture,Ot,Je+fn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Hn.__webglTexture,Ot),Q!==0?V.blitFramebuffer(Qt,re,kt,It,Wt,me,kt,It,V.COLOR_BUFFER_BIT,V.NEAREST):Be?V.copyTexSubImage3D(jt,Ot,Wt,me,Je+fn,Qt,re,kt,It):V.copyTexSubImage2D(jt,Ot,Wt,me,Qt,re,kt,It);Gt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Be?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(jt,Ot,Wt,me,Je,kt,It,Zt,Ne,vn,Qe.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(jt,Ot,Wt,me,Je,kt,It,Zt,Ne,Qe.data):V.texSubImage3D(jt,Ot,Wt,me,Je,kt,It,Zt,Ne,vn,Qe):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ot,Wt,me,kt,It,Ne,vn,Qe.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ot,Wt,me,Qe.width,Qe.height,Ne,Qe.data):V.texSubImage2D(V.TEXTURE_2D,Ot,Wt,me,kt,It,Ne,vn,Qe);V.pixelStorei(V.UNPACK_ROW_LENGTH,Fn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,le),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bn),V.pixelStorei(V.UNPACK_SKIP_ROWS,ei),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ci),Ot===0&&q.generateMipmaps&&V.generateMipmap(jt),Gt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),Gt.unbindTexture()},this.resetState=function(){k=0,et=0,at=null,Gt.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const Lv={type:"change"},Lp={type:"start"},Rx={type:"end"},ru=new Tp,Nv=new cs,nC=Math.cos(70*BM.DEG2RAD),Sn=new Y,Jn=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xd=1e-6;class iC extends ob{constructor(t,i=null){super(t,i),this.state=Ye.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Aa.ROTATE,MIDDLE:Aa.DOLLY,RIGHT:Aa.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new ds,this._lastTargetPosition=new Y,this._quat=new ds().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ov,this._sphericalDelta=new ov,this._scale=1,this._panOffset=new Y,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new Y,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sC.bind(this),this._onPointerDown=aC.bind(this),this._onPointerUp=rC.bind(this),this._onContextMenu=dC.bind(this),this._onMouseWheel=cC.bind(this),this._onKeyDown=uC.bind(this),this._onTouchStart=fC.bind(this),this._onTouchMove=hC.bind(this),this._onMouseDown=oC.bind(this),this._onMouseMove=lC.bind(this),this._interceptControlDown=pC.bind(this),this._interceptControlUp=mC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lv),this.update(),this.state=Ye.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Sn.copy(i).sub(this.target),Sn.applyQuaternion(this._quat),this._spherical.setFromVector3(Sn),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Jn:s>Math.PI&&(s-=Jn),l<-Math.PI?l+=Jn:l>Math.PI&&(l-=Jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Sn.setFromSpherical(this._spherical),Sn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Sn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Y(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Y(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=Sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(ru.origin.copy(this.object.position),ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ru.direction))<nC?this.object.lookAt(this.target):(Nv.setFromNormalAndCoplanarPoint(this.object.up,this.target),ru.intersectPlane(Nv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>xd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xd||this._lastTargetPosition.distanceToSquared(this.target)>xd?(this.dispatchEvent(Lv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Jn/60*this.autoRotateSpeed*t:Jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Sn.setFromMatrixColumn(i,0),Sn.multiplyScalar(-t),this._panOffset.add(Sn)}_panUp(t,i){this.screenSpacePanning===!0?Sn.setFromMatrixColumn(i,1):(Sn.setFromMatrixColumn(i,0),Sn.crossVectors(this.object.up,Sn)),Sn.multiplyScalar(t),this._panOffset.add(Sn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Sn.copy(l).sub(this.target);let c=Sn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Vt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function aC(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function sC(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function rC(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rx),this.state=Ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function oC(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Aa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case Aa.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case Aa.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Lp)}function lC(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function cC(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(Lp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Rx))}function uC(r){this.enabled!==!1&&this._handleKeyDown(r)}function fC(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Lp)}function hC(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function dC(r){this.enabled!==!1&&r.preventDefault()}function pC(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mC(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%209l9-7%209%207v11a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2z'%3e%3c/path%3e%3cpolyline%20points='9%2022%209%2012%2015%2012%2015%2022'%3e%3c/polyline%3e%3c/svg%3e",Qn=50,ou={"INNER WALL":[1,.84,0,1],"OUTER WALL":[.18,.8,.44,1],GLAZING:[0,.85,.95,.25],TILING1:[.55,.75,.85,1],TILING2:[.85,.78,.65,1],"VINYL PLANK":[.65,.45,.28,1],"VINYL SHEET":[.72,.55,.38,1],LAMINATE:[.6,.42,.25,1],HYBRID:[.58,.48,.35,1],TIMBER:[.5,.33,.18,1],CARPET:[.65,.72,.6,1],NONE:[.78,.78,.78,1],GROUND:[.07,.78,1,1]},_C=r=>r.startsWith("data:"),vC=r=>({...r,materials:Object.fromEntries(Object.entries(r.materials).map(([t,i])=>{const s=i.texture,l=s&&_C(s)?"":s;return[t,{...i,texture:l}]}))}),xC="pomi_textures_db",Jr="textures",Cx=()=>new Promise((r,t)=>{const i=indexedDB.open(xC,1);i.onupgradeneeded=()=>{const s=i.result;s.objectStoreNames.contains(Jr)||s.createObjectStore(Jr,{keyPath:"id"})},i.onsuccess=()=>r(i.result),i.onerror=()=>t(i.error)}),Ov=async(r,t,i)=>{const s=await Cx();return new Promise((l,c)=>{const f=s.transaction(Jr,"readwrite");f.objectStore(Jr).put({id:r,name:t,data:i}),f.oncomplete=()=>l(),f.onerror=()=>c(f.error)})},SC=async r=>{const t=await Cx();return new Promise((i,s)=>{const c=t.transaction(Jr,"readonly").objectStore(Jr).get(r);c.onsuccess=()=>i(c.result?.data),c.onerror=()=>s(c.error)})},yC=r=>r.id?`id:${r.id}`:r.url,MC=({data:r,onReset:t})=>{const i=Ue.useRef(null),s=Ue.useRef(null),l=Ue.useRef(null),c=Ue.useRef(null),f=Ue.useRef(null),d=Ue.useRef(null),m=Ue.useRef({}),p=Ue.useRef(null),_=Ue.useRef(null),v=Ue.useRef(null),g=Ue.useRef(null),S=Ue.useRef(null),E=Ue.useRef({}),[w,M]=Ue.useState(0),[y,D]=Ue.useState(!1),[U,L]=Ue.useState(()=>localStorage.getItem("pomi_theme")||"dark");Ue.useEffect(()=>{document.documentElement.setAttribute("data-theme",U),localStorage.setItem("pomi_theme",U)},[U]);const[B,I]=Ue.useState(()=>{const R=localStorage.getItem("pomi_settings");if(R)try{return JSON.parse(R)}catch(z){console.error("Failed to parse settings cache:",z)}return{shadows:!0,wireframe:!1,lightV:2e3,lightH:-2e3,materials:{}}});Ue.useEffect(()=>{try{localStorage.setItem("pomi_settings",JSON.stringify(vC(B)))}catch(R){console.warn("Failed to persist settings cache:",R)}},[B]);const[H,T]=Ue.useState([]),[N,_t]=Ue.useState(null),[k,et]=Ue.useState(()=>{const R=localStorage.getItem("custom_textures_index");if(!R)return[];try{const z=JSON.parse(R);return Array.isArray(z)?z.map(J=>({id:J.id,name:J.name,url:""})):[]}catch{return[]}}),[at,ot]=Ue.useState([]),[nt,P]=Ue.useState(null);Ue.useEffect(()=>{const z=Object.entries(Object.assign({"./textures/brick1.jpg":Xy,"./textures/brick2.jpg":qy,"./textures/carpet1.jpg":jy,"./textures/tile1.jpg":Ky,"./textures/wood1.jpg":Qy,"./textures/wood2.jpg":tM,"./textures/wood3.jpg":nM})).map(([J,ht])=>({name:J.split("/").pop()||J,url:ht.default||ht}));ot(z)},[]),Ue.useEffect(()=>{let R=!1;return(async()=>{const J=localStorage.getItem("custom_textures");if(J){try{const rt=JSON.parse(J);if(Array.isArray(rt)){const xt=[];for(const Pt of rt){if(!Pt?.url||!Pt?.name)continue;const Yt=crypto.randomUUID();await Ov(Yt,Pt.name,Pt.url),xt.push({id:Yt,name:Pt.name})}xt.length>0&&localStorage.setItem("custom_textures_index",JSON.stringify(xt))}}catch(rt){console.warn("Failed to migrate legacy custom textures:",rt)}localStorage.removeItem("custom_textures")}const ht=localStorage.getItem("custom_textures_index");if(!ht)return;let wt=[];try{const rt=JSON.parse(ht);wt=Array.isArray(rt)?rt:[]}catch(rt){console.warn("Failed to parse custom textures index:",rt);return}const Z=[];for(const rt of wt)if(rt?.id)try{const xt=await SC(rt.id);xt&&(E.current[rt.id]=xt,Z.push({id:rt.id,name:rt.name||rt.id,url:xt}))}catch(xt){console.warn("Failed to load custom texture:",xt)}R||(et(Z),M(rt=>rt+1))})(),()=>{R=!0}},[]);const G=(Array.isArray(at)?at:[]).concat(Array.isArray(k)?k:[]),ct=R=>R?R.startsWith("id:")?E.current[R.slice(3)]||"":R:"";Ue.useEffect(()=>{H.length!==0&&I(R=>{const z={...R.materials};let J=!1;return H.forEach(ht=>{if(!z[ht]){const wt=ou[ht]||[.8,.8,.8,1];z[ht]={color:"#"+new ve(wt[0],wt[1],wt[2]).getHexString(),opacity:wt[3],texture:""},J=!0}}),J?{...R,materials:z}:R})},[H]),Ue.useEffect(()=>{if(l.current){const R=U==="light"?15790837:723736;l.current.background=new ve(R)}if(g.current){const R=U==="light"?0:16777215,z=U==="light"?.1:.2;g.current.material.color.setHex(R),g.current.material.opacity=z,g.current.material.transparent=!0}S.current&&S.current()},[U]),Ue.useEffect(()=>{if(!i.current||!s.current||!c.current)return;const R=i.current,z=new ResizeObserver(()=>{const J=R.clientWidth,ht=R.clientHeight;c.current&&(c.current.aspect=J/ht,c.current.updateProjectionMatrix()),s.current&&s.current.setSize(J,ht),S.current&&S.current()});return z.observe(R),()=>z.disconnect()},[y]),Ue.useEffect(()=>{if(!i.current)return;const R=new $M,z=U==="light"?15790837:723736;R.background=new ve(z),l.current=R;const J=i.current,ht=new Ti(45,J.clientWidth/J.clientHeight,1,5e4);c.current=ht;const wt=new eC({antialias:!0,logarithmicDepthBuffer:!0});wt.setSize(J.clientWidth,J.clientHeight),wt.setPixelRatio(Math.min(window.devicePixelRatio,2)),wt.shadowMap.enabled=!0,wt.shadowMap.type=Pv,J.appendChild(wt.domElement),s.current=wt;const Z=new iC(ht,wt.domElement);Z.enableDamping=!0,Z.dampingFactor=.08,Z.mouseButtons={LEFT:Aa.ROTATE,MIDDLE:Aa.DOLLY,RIGHT:Aa.PAN},Z.maxPolarAngle=Math.PI/2,f.current=Z;let rt=!1;const xt=()=>{rt||(rt=!0,requestAnimationFrame(Pt))},Pt=()=>{rt=!1;const bt=Z.update();wt.render(R,ht);const At=document.getElementById("stats");At&&(At.innerText=`CAM: ${ht.position.x.toFixed(1)}, ${ht.position.y.toFixed(1)}, ${ht.position.z.toFixed(1)}`),bt&&xt()};S.current=xt;const Yt=()=>{const bt={position:{x:ht.position.x,y:ht.position.y,z:ht.position.z},target:{x:Z.target.x,y:Z.target.y,z:Z.target.z}};localStorage.setItem("pomi_camera_state",JSON.stringify(bt)),xt()};Z.addEventListener("change",Yt),R.add(ht);const $t=new ib(16777215,1.5);R.add($t);const fe=new rv(16777215,1.5);fe.castShadow=!0;const pe=5e3;fe.shadow.mapSize.width=4096,fe.shadow.mapSize.height=4096,fe.shadow.camera.near=1,fe.shadow.camera.far=15e3,fe.shadow.camera.left=-pe,fe.shadow.camera.right=pe,fe.shadow.camera.top=pe,fe.shadow.camera.bottom=-pe,fe.shadow.normalBias=5,fe.shadow.radius=3,fe.position.set(-2e3,2e3,0),ht.add(fe),ht.add(fe.target),fe.target.position.set(0,0,-2e3),d.current=fe;const xe=new rv(5221630,.4);xe.position.set(-1500,1e3,-800),R.add(xe);const Ee=new Vr,ee=new Vr;ee.visible=!1,R.add(Ee),R.add(ee),p.current=Ee,_.current=ee;const ke=new $r,V=m.current,Fe=new Set,Me=(bt,At)=>{if(!V[bt]){const Xt=At[3]<1,Jt=new ve(At[0],At[1],At[2]),Tt=bt==="GLAZING"?new jE({color:Jt,transparent:!0,opacity:At[3],transmission:.9,thickness:.6,roughness:.45,metalness:0,ior:1.4,side:zi}):new vx({color:Jt,transparent:Xt,opacity:At[3],roughness:.7,metalness:.1,side:zi});Tt.userData.baseColor="#"+Tt.color.getHexString(),V[bt]=Tt}return V[bt]};r.walls.forEach(bt=>{Fe.add(bt.type);const[At,Xt,Jt,Tt,Et,Ft]=bt.box,Lt=Math.abs(Xt-At),Ut=Math.abs(Ft-Et),ie=Math.abs(Tt-Jt);if(Lt<1||Ut<1||ie<1)return;const W=new eo(Lt,Ut,ie),Dt=new Y((At+Xt)/2,(Et+Ft)/2,(Jt+Tt)/2),yt=W.attributes.uv.array,Bt=Dt.x,Rt=Dt.y,ft=Dt.z;for(let oe=0;oe<2;oe++){const he=oe*8,ln=(ft-ie/2)/Qn,kn=(ft+ie/2)/Qn,In=(Rt-Ut/2)/Qn,ti=(Rt+Ut/2)/Qn;yt[he+0]=ln,yt[he+1]=ti,yt[he+2]=kn,yt[he+3]=ti,yt[he+4]=ln,yt[he+5]=In,yt[he+6]=kn,yt[he+7]=In}for(let oe=2;oe<4;oe++){const he=oe*8,ln=(Bt-Lt/2)/Qn,kn=(Bt+Lt/2)/Qn,In=(ft-ie/2)/Qn,ti=(ft+ie/2)/Qn;yt[he+0]=ln,yt[he+1]=In,yt[he+2]=kn,yt[he+3]=In,yt[he+4]=ln,yt[he+5]=ti,yt[he+6]=kn,yt[he+7]=ti}for(let oe=4;oe<6;oe++){const he=oe*8,ln=(Bt-Lt/2)/Qn,kn=(Bt+Lt/2)/Qn,In=(Rt-Ut/2)/Qn,ti=(Rt+Ut/2)/Qn;yt[he+0]=ln,yt[he+1]=ti,yt[he+2]=kn,yt[he+3]=ti,yt[he+4]=ln,yt[he+5]=In,yt[he+6]=kn,yt[he+7]=In}W.attributes.uv.needsUpdate=!0;const zt=new di(W,Me(bt.type,bt.color||ou[bt.type]||[.7,.7,.7,1]));zt.position.copy(Dt),zt.userData.materialType=bt.type,bt.type==="GLAZING"?(zt.castShadow=!1,zt.receiveShadow=!1):(zt.castShadow=!0,zt.receiveShadow=!0),Ee.add(zt),ke.expandByObject(zt);const ae=new j_(W),De=new cp(ae,new _u({color:5221630,transparent:!0,opacity:.8}));De.position.copy(zt.position),ee.add(De),De.userData.materialType=bt.type}),r.floors.forEach(bt=>{if(Fe.add(bt.type),!bt.polygon||bt.polygon.length<3)return;const At=new hx;bt.polygon.forEach((Ut,ie)=>{ie===0?At.moveTo(Ut[0],-Ut[1]):At.lineTo(Ut[0],-Ut[1])});const Xt=new wp(At),Jt=Xt.attributes.position.array,Tt=Xt.attributes.uv.array;for(let Ut=0;Ut<Jt.length/3;Ut++)Tt[Ut*2+0]=Jt[Ut*3+0]/Qn,Tt[Ut*2+1]=Jt[Ut*3+1]/Qn;Xt.attributes.uv.needsUpdate=!0;const Et=new di(Xt,Me(bt.type,bt.color||ou[bt.type]||[.7,.7,.7,1]));Et.rotation.x=-Math.PI/2,Et.position.y=bt.z,Et.userData.materialType=bt.type,bt.type==="GLAZING"?(Et.castShadow=!1,Et.receiveShadow=!1):Et.receiveShadow=!0,Ee.add(Et),ke.expandByObject(Et);const Ft=new j_(Xt),Lt=new cp(Ft,new _u({color:5221630,transparent:!0,opacity:.8}));Lt.rotation.x=-Math.PI/2,Lt.position.y=bt.z,ee.add(Lt),Lt.userData.materialType=bt.type});const Ae=ke.getSize(new Y),Gt=ke.getCenter(new Y),O=Math.max(Ae.x,Ae.z)+100,b=new _l(O,O),j=Me("GROUND",ou.GROUND),pt=new di(b,j);pt.rotation.x=-Math.PI/2,pt.position.set(Gt.x,-.1,Gt.z),pt.receiveShadow=!0,R.add(pt),v.current=pt,Fe.add("GROUND");const vt=new rb(O,O/10,16777215,16777215);vt.material.transparent=!0,vt.material.opacity=.5,vt.material.color.setHex(3355460),vt.position.set(Gt.x,0,Gt.z),R.add(vt),g.current=vt,vt.userData={targetOpacity:.5},V.GRID={color:vt.material.color,set opacity(bt){vt.userData.targetOpacity=bt,ee.visible||(vt.material.opacity=bt)},get opacity(){return vt.userData.targetOpacity},set transparent(bt){vt.material.transparent=bt},get transparent(){return vt.material.transparent},userData:{baseColor:"#"+vt.material.color.getHexString()}},Fe.add("GRID"),Ee.position.sub(Gt),ee.position.sub(Gt),pt.position.sub(Gt),vt.position.sub(Gt);const dt=localStorage.getItem("pomi_camera_state");if(dt)try{const{position:bt,target:At}=JSON.parse(dt);ht.position.set(bt.x,bt.y,bt.z),Z.target.set(At.x,At.y,At.z),ht.updateProjectionMatrix(),Z.update()}catch(bt){console.error("Failed to load camera cache:",bt)}else{const bt=Math.max(Ae.x,Ae.y,Ae.z)||1e3;ht.position.set(bt*1.5,bt*1.2,bt*1.5),ht.lookAt(0,0,0),Z.update()}return T(Array.from(Fe)),xt(),()=>{Z.removeEventListener("change",Yt),S.current=null,wt.dispose(),J.innerHTML=""}},[r,U]),Ue.useEffect(()=>{if(!s.current||!p.current||!_.current)return;const R=B.shadows&&!B.wireframe;s.current.shadowMap.enabled=R,p.current.visible=!B.wireframe,_.current.visible=B.wireframe,v.current&&(v.current.visible=!B.wireframe,v.current.receiveShadow=R),g.current&&(g.current.material.opacity=B.wireframe?.2:g.current.userData.targetOpacity),d.current&&(d.current.position.set(B.lightH,B.lightV,0),d.current.castShadow=R),p.current.children.forEach(z=>{z instanceof di&&(z.userData.materialType==="GLAZING"?(z.castShadow=!1,z.receiveShadow=!1):(z.castShadow=R,z.receiveShadow=R))}),Object.keys(B.materials).forEach(z=>{const J=m.current[z],ht=B.materials[z];if(J){J.userData&&(J.userData.baseColor=ht.color),J.opacity!==void 0&&(J.opacity=ht.opacity),_.current?.children.forEach(Z=>{const rt=Z;if(rt.userData.materialType===z){const xt=rt.material;xt.color.set(ht.color),xt.opacity=ht.opacity}});const wt=ht.texture.startsWith("id:")?E.current[ht.texture.slice(3)]:ht.texture;if(wt&&z!=="GRID"&&z!=="GROUND"){const Z=new tb,rt=wt;Z.load(rt,xt=>{xt.wrapS=xt.wrapT=pu,J.map=xt,J.userData.textureUrl=wt,J.color.set(16777215),J.needsUpdate=!0,S.current&&S.current()})}else J.map&&(J.map=null,J.needsUpdate=!0),J.color&&J.color.set&&J.color.set(ht.color)}}),S.current&&S.current()},[B,w]);const mt=(R,z,J)=>{I(ht=>{const wt=ht.materials[R]||{color:m.current[R]?.userData.baseColor||"#ffffff",opacity:m.current[R]?.opacity||1,texture:""};return{...ht,materials:{...ht.materials,[R]:{...wt,[z]:J}}}})},Ct=R=>{const z=R.target.files?.[0];if(!z)return;const J=new Image;J.onload=()=>{if(J.width>1024||J.height>1024){alert("Texture size must be max 1024x1024");return}const ht=new FileReader;ht.onload=async wt=>{const Z=wt.target?.result,rt=crypto.randomUUID(),xt={id:rt,name:z.name,url:Z};try{await Ov(rt,z.name,Z),E.current[rt]=Z,M(Pt=>Pt+1)}catch(Pt){console.warn("Failed to store texture data:",Pt)}et(Pt=>{const Yt=[...Pt,xt];try{const $t=Yt.map(fe=>({id:fe.id,name:fe.name}));localStorage.setItem("custom_textures_index",JSON.stringify($t))}catch($t){console.warn("Failed to persist custom textures index:",$t)}return Yt}),N&&mt(N,"texture",`id:${rt}`)},ht.readAsDataURL(z)},J.src=URL.createObjectURL(z)};return Nt.jsxs(Nt.Fragment,{children:[Nt.jsxs("nav",{className:"navbar",children:[Nt.jsx("div",{id:"hamburger",className:y?"open":"",onClick:()=>D(!y),children:Nt.jsx("span",{})}),Nt.jsxs("div",{className:"nav-brand",children:[Nt.jsx("img",{src:gC,alt:"POMI.AI Logo",style:{width:24,height:24,marginRight:8}}),"POMI.AI"]}),Nt.jsx("div",{className:"nav-spacer"}),Nt.jsxs("div",{className:"nav-actions",children:[Nt.jsx("button",{className:"nav-btn reset-btn",onClick:t,children:"Start Over"}),Nt.jsx("div",{className:"theme-toggle",onClick:()=>L(U==="dark"?"light":"dark"),children:U==="dark"?Nt.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Nt.jsx("circle",{cx:"12",cy:"12",r:"5"}),Nt.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),Nt.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),Nt.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),Nt.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),Nt.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),Nt.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),Nt.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),Nt.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}):Nt.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Nt.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})]})]}),Nt.jsxs("div",{id:"drawer",className:y?"open":"",children:[Nt.jsx("div",{className:"section-title",children:"Global Settings"}),Nt.jsxs("div",{className:"control-group",children:[Nt.jsxs("div",{className:"toggle-item",children:[Nt.jsx("span",{children:"Dynamic Shadows"}),Nt.jsxs("label",{className:"switch",children:[Nt.jsx("input",{type:"checkbox",checked:B.shadows,onChange:R=>I(z=>({...z,shadows:R.target.checked})),disabled:B.wireframe}),Nt.jsx("span",{className:"slider"})]})]}),Nt.jsxs("div",{className:"toggle-item",children:[Nt.jsx("span",{children:"Wireframe Mode"}),Nt.jsxs("label",{className:"switch",children:[Nt.jsx("input",{type:"checkbox",checked:B.wireframe,onChange:R=>I(z=>({...z,wireframe:R.target.checked}))}),Nt.jsx("span",{className:"slider"})]})]}),Nt.jsxs("div",{style:{marginTop:20},children:[Nt.jsx("span",{style:{fontSize:14,color:"#e0e0f0"},children:"Light Position"}),Nt.jsx("div",{className:"light-controls",children:[{l:"↖",v:2e3,h:-2e3},{l:"↑",v:2e3,h:0},{l:"↗",v:2e3,h:2e3},{l:"←",v:0,h:-2e3},{l:"•",v:0,h:0},{l:"→",v:0,h:2e3}].map(R=>Nt.jsx("button",{className:`light-btn ${B.lightV===R.v&&B.lightH===R.h?"active":""}`,onClick:()=>I(z=>({...z,lightV:R.v,lightH:R.h})),children:R.l},R.l))})]})]}),Nt.jsx("div",{className:"section-title",children:"Materials Overlay"}),Nt.jsx("div",{id:"legend",children:H.map(R=>{const z=B.materials[R]||{color:m.current[R]?.userData?.baseColor||"#ffffff",opacity:m.current[R]?.opacity??1,texture:""};return Nt.jsxs("div",{className:"legend-item",children:[Nt.jsxs("div",{className:"legend-header",onClick:()=>_t(N===R?null:R),children:[Nt.jsx("span",{className:"swatch",style:{backgroundColor:z.color,backgroundImage:ct(z.texture)?`url(${ct(z.texture)})`:"none",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})," ",R]}),Nt.jsxs("div",{className:`material-panel ${N===R?"active":""}`,children:[Nt.jsxs("div",{className:"mat-control",children:[Nt.jsx("label",{children:"Hex Color"}),Nt.jsx("input",{type:"color",value:z.color,onChange:J=>mt(R,"color",J.target.value)})]}),Nt.jsxs("div",{className:"mat-control",children:[Nt.jsx("label",{children:"Opacity"}),Nt.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:z.opacity,onChange:J=>mt(R,"opacity",parseFloat(J.target.value))})]}),R!=="GROUND"&&R!=="GRID"&&Nt.jsxs("div",{className:"mat-control",children:[Nt.jsx("label",{children:"Texture"}),Nt.jsx("div",{className:"texture-select-btn",onClick:J=>{J.stopPropagation(),P({open:!0,materialType:R})},children:ct(z.texture)?Nt.jsx("img",{src:ct(z.texture),alt:"Selected Texture"}):Nt.jsx("span",{children:"None"})})]})]})]},R)})}),Nt.jsxs("div",{style:{marginTop:0,fontSize:10,lineHeight:1.6},children:["POMI.AI ARCHITECTURAL CORE v2.5",Nt.jsx("br",{}),"Ctrl + Drag to Pan View."]})]}),nt&&Nt.jsx("div",{className:"modal-overlay",onClick:()=>P(null),children:Nt.jsxs("div",{className:"modal-content",onClick:R=>R.stopPropagation(),children:[Nt.jsxs("div",{className:"modal-header",children:[Nt.jsx("h2",{children:"Select Texture"}),Nt.jsx("div",{className:"modal-close",onClick:()=>P(null),children:"✕"})]}),Nt.jsxs("div",{className:"texture-grid",children:[Nt.jsx("div",{className:`texture-item none ${B.materials[nt.materialType]?.texture?"":"selected"}`,onClick:()=>{mt(nt.materialType,"texture",""),P(null)},children:"None"}),G.map(R=>{const z=yC(R);return Nt.jsx("div",{className:`texture-item ${B.materials[nt.materialType]?.texture===z?"selected":""}`,onClick:()=>{mt(nt.materialType,"texture",z),P(null)},children:Nt.jsx("img",{src:R.url,alt:R.name,title:R.name})},z)})]}),Nt.jsxs("div",{className:"texture-upload-area",onClick:()=>document.getElementById("texture-upload-input")?.click(),children:[Nt.jsx("span",{children:"Click to upload (max 1024x1024)"}),Nt.jsx("input",{id:"texture-upload-input",type:"file",accept:"image/*",style:{display:"none"},onChange:Ct})]})]})}),Nt.jsx("div",{id:"canvas-container",className:y?"drawer-open":"",ref:i}),Nt.jsx("div",{id:"stats",children:"CAM: 0.0, 0.0, 0.0"})]})};function EC(){const[r,t]=Ue.useState(()=>{const c=localStorage.getItem("cached_model");if(c)try{const f=JSON.parse(c);if(f.walls||f.floors)return f}catch{localStorage.removeItem("cached_model")}return null}),i=c=>{const f=c.target.files?.[0];if(!f)return;const d=new FileReader;d.onload=m=>{try{const p=m.target?.result,_=JSON.parse(p);if(!_.walls&&!_.floors){alert("Invalid model data: missing walls/floors");return}localStorage.setItem("cached_model",p),t(_)}catch(p){alert("Invalid JSON file"),console.error(p)}},d.readAsText(f)},s=async()=>{try{const c=await fetch(new URL(""+new URL("model-DiW0W92k.json",import.meta.url).href,import.meta.url));if(!c.ok){alert("Failed to load sample model");return}const f=await c.json();if(!f.walls&&!f.floors){alert("Invalid model data: missing walls/floors");return}localStorage.setItem("cached_model",JSON.stringify(f)),t(f)}catch(c){alert("Failed to load sample model"),console.error(c)}},l=()=>{window.confirm("Are you sure you want to start over? This will clear the current model and cache.")&&(localStorage.removeItem("cached_model"),localStorage.removeItem("pomi_settings"),localStorage.removeItem("pomi_camera_state"),t(null))};return r?Nt.jsx(MC,{data:r,onReset:l}):Nt.jsx("div",{className:"file-upload-container",children:Nt.jsxs("div",{className:"file-upload-box",children:[Nt.jsx("div",{className:"drop-text",children:"Drop your JSON model here"}),Nt.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:14},children:"or click to browse"}),Nt.jsxs("div",{className:"upload-actions",children:[Nt.jsxs("label",{className:"upload-btn",children:["Choose File",Nt.jsx("input",{type:"file",className:"file-input",accept:".json",onChange:i})]}),Nt.jsx("button",{type:"button",className:"upload-btn secondary",onClick:s,children:"Load sample model"})]})]})})}Vy.createRoot(document.getElementById("root")).render(Nt.jsx(Ue.StrictMode,{children:Nt.jsx(EC,{})}));
