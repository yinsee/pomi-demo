(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Rh={exports:{}},Xo={};var u_;function wy(){if(u_)return Xo;u_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var f_;function Dy(){return f_||(f_=1,Rh.exports=wy()),Rh.exports}var Dt=Dy(),Ch={exports:{}},ue={};var h_;function Uy(){if(h_)return ue;h_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function y(N,j,ht){this.props=N,this.context=j,this.refs=M,this.updater=ht||E}y.prototype.isReactComponent={},y.prototype.setState=function(N,j){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,j,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function D(){}D.prototype=y.prototype;function L(N,j,ht){this.props=N,this.context=j,this.refs=M,this.updater=ht||E}var U=L.prototype=new D;U.constructor=L,w(U,y.prototype),U.isPureReactComponent=!0;var V=Array.isArray;function I(){}var H={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(N,j,ht){var Rt=ht.ref;return{$$typeof:r,type:N,key:j,ref:Rt!==void 0?Rt:null,props:ht}}function mt(N,j){return O(N.type,j,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function Q(N){var j={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ht){return j[ht]})}var rt=/\/+/g;function ot(N,j){return typeof N=="object"&&N!==null&&N.key!=null?Q(""+N.key):j.toString(36)}function at(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(j){N.status==="pending"&&(N.status="fulfilled",N.value=j)},function(j){N.status==="pending"&&(N.status="rejected",N.reason=j)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function R(N,j,ht,Rt,Gt){var tt=typeof N;(tt==="undefined"||tt==="boolean")&&(N=null);var vt=!1;if(N===null)vt=!0;else switch(tt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(N.$$typeof){case r:case t:vt=!0;break;case _:return vt=N._init,R(vt(N._payload),j,ht,Rt,Gt)}}if(vt)return Gt=Gt(N),vt=Rt===""?"."+ot(N,0):Rt,V(Gt)?(ht="",vt!=null&&(ht=vt.replace(rt,"$&/")+"/"),R(Gt,j,ht,"",function(Zt){return Zt})):Gt!=null&&(G(Gt)&&(Gt=mt(Gt,ht+(Gt.key==null||N&&N.key===Gt.key?"":(""+Gt.key).replace(rt,"$&/")+"/")+vt)),j.push(Gt)),1;vt=0;var Tt=Rt===""?".":Rt+":";if(V(N))for(var kt=0;kt<N.length;kt++)Rt=N[kt],tt=Tt+ot(Rt,kt),vt+=R(Rt,j,ht,tt,Gt);else if(kt=S(N),typeof kt=="function")for(N=kt.call(N),kt=0;!(Rt=N.next()).done;)Rt=Rt.value,tt=Tt+ot(Rt,kt++),vt+=R(Rt,j,ht,tt,Gt);else if(tt==="object"){if(typeof N.then=="function")return R(at(N),j,ht,Rt,Gt);throw j=String(N),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return vt}function z(N,j,ht){if(N==null)return N;var Rt=[],Gt=0;return R(N,Rt,"","",function(tt){return j.call(ht,tt,Gt++)}),Rt}function K(N){if(N._status===-1){var j=N._result;j=j(),j.then(function(ht){(N._status===0||N._status===-1)&&(N._status=1,N._result=ht)},function(ht){(N._status===0||N._status===-1)&&(N._status=2,N._result=ht)}),N._status===-1&&(N._status=0,N._result=j)}if(N._status===1)return N._result.default;throw N._result}var $=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},_t={map:z,forEach:function(N,j,ht){z(N,function(){j.apply(this,arguments)},ht)},count:function(N){var j=0;return z(N,function(){j++}),j},toArray:function(N){return z(N,function(j){return j})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ue.Activity=v,ue.Children=_t,ue.Component=y,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=L,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ue.__COMPILER_RUNTIME={__proto__:null,c:function(N){return H.H.useMemoCache(N)}},ue.cache=function(N){return function(){return N.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(N,j,ht){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Rt=w({},N.props),Gt=N.key;if(j!=null)for(tt in j.key!==void 0&&(Gt=""+j.key),j)!T.call(j,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&j.ref===void 0||(Rt[tt]=j[tt]);var tt=arguments.length-2;if(tt===1)Rt.children=ht;else if(1<tt){for(var vt=Array(tt),Tt=0;Tt<tt;Tt++)vt[Tt]=arguments[Tt+2];Rt.children=vt}return O(N.type,Gt,Rt)},ue.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ue.createElement=function(N,j,ht){var Rt,Gt={},tt=null;if(j!=null)for(Rt in j.key!==void 0&&(tt=""+j.key),j)T.call(j,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Gt[Rt]=j[Rt]);var vt=arguments.length-2;if(vt===1)Gt.children=ht;else if(1<vt){for(var Tt=Array(vt),kt=0;kt<vt;kt++)Tt[kt]=arguments[kt+2];Gt.children=Tt}if(N&&N.defaultProps)for(Rt in vt=N.defaultProps,vt)Gt[Rt]===void 0&&(Gt[Rt]=vt[Rt]);return O(N,tt,Gt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(N){return{$$typeof:d,render:N}},ue.isValidElement=G,ue.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:K}},ue.memo=function(N,j){return{$$typeof:p,type:N,compare:j===void 0?null:j}},ue.startTransition=function(N){var j=H.T,ht={};H.T=ht;try{var Rt=N(),Gt=H.S;Gt!==null&&Gt(ht,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(I,$)}catch(tt){$(tt)}finally{j!==null&&ht.types!==null&&(j.types=ht.types),H.T=j}},ue.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ue.use=function(N){return H.H.use(N)},ue.useActionState=function(N,j,ht){return H.H.useActionState(N,j,ht)},ue.useCallback=function(N,j){return H.H.useCallback(N,j)},ue.useContext=function(N){return H.H.useContext(N)},ue.useDebugValue=function(){},ue.useDeferredValue=function(N,j){return H.H.useDeferredValue(N,j)},ue.useEffect=function(N,j){return H.H.useEffect(N,j)},ue.useEffectEvent=function(N){return H.H.useEffectEvent(N)},ue.useId=function(){return H.H.useId()},ue.useImperativeHandle=function(N,j,ht){return H.H.useImperativeHandle(N,j,ht)},ue.useInsertionEffect=function(N,j){return H.H.useInsertionEffect(N,j)},ue.useLayoutEffect=function(N,j){return H.H.useLayoutEffect(N,j)},ue.useMemo=function(N,j){return H.H.useMemo(N,j)},ue.useOptimistic=function(N,j){return H.H.useOptimistic(N,j)},ue.useReducer=function(N,j,ht){return H.H.useReducer(N,j,ht)},ue.useRef=function(N){return H.H.useRef(N)},ue.useState=function(N){return H.H.useState(N)},ue.useSyncExternalStore=function(N,j,ht){return H.H.useSyncExternalStore(N,j,ht)},ue.useTransition=function(){return H.H.useTransition()},ue.version="19.2.4",ue}var d_;function dp(){return d_||(d_=1,Ch.exports=Uy()),Ch.exports}var Be=dp(),wh={exports:{}},Wo={},Dh={exports:{}},Uh={};var p_;function Ly(){return p_||(p_=1,(function(r){function t(R,z){var K=R.length;R.push(z);t:for(;0<K;){var $=K-1>>>1,_t=R[$];if(0<l(_t,z))R[$]=z,R[K]=_t,K=$;else break t}}function i(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var z=R[0],K=R.pop();if(K!==z){R[0]=K;t:for(var $=0,_t=R.length,N=_t>>>1;$<N;){var j=2*($+1)-1,ht=R[j],Rt=j+1,Gt=R[Rt];if(0>l(ht,K))Rt<_t&&0>l(Gt,ht)?(R[$]=Gt,R[Rt]=K,$=Rt):(R[$]=ht,R[j]=K,$=j);else if(Rt<_t&&0>l(Gt,K))R[$]=Gt,R[Rt]=K,$=Rt;else break t}}return z}function l(R,z){var K=R.sortIndex-z.sortIndex;return K!==0?K:R.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(R){for(var z=i(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=R)s(p),z.sortIndex=z.expirationTime,t(m,z);else break;z=i(p)}}function V(R){if(w=!1,U(R),!E)if(i(m)!==null)E=!0,I||(I=!0,Q());else{var z=i(p);z!==null&&at(V,z.startTime-R)}}var I=!1,H=-1,T=5,O=-1;function mt(){return M?!0:!(r.unstable_now()-O<T)}function G(){if(M=!1,I){var R=r.unstable_now();O=R;var z=!0;try{t:{E=!1,w&&(w=!1,D(H),H=-1),S=!0;var K=g;try{e:{for(U(R),v=i(m);v!==null&&!(v.expirationTime>R&&mt());){var $=v.callback;if(typeof $=="function"){v.callback=null,g=v.priorityLevel;var _t=$(v.expirationTime<=R);if(R=r.unstable_now(),typeof _t=="function"){v.callback=_t,U(R),z=!0;break e}v===i(m)&&s(m),U(R)}else s(m);v=i(m)}if(v!==null)z=!0;else{var N=i(p);N!==null&&at(V,N.startTime-R),z=!1}}break t}finally{v=null,g=K,S=!1}z=void 0}}finally{z?Q():I=!1}}}var Q;if(typeof L=="function")Q=function(){L(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ot=rt.port2;rt.port1.onmessage=G,Q=function(){ot.postMessage(null)}}else Q=function(){y(G,0)};function at(R,z){H=y(function(){R(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(R){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var K=g;g=z;try{return R()}finally{g=K}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var K=g;g=R;try{return z()}finally{g=K}},r.unstable_scheduleCallback=function(R,z,K){var $=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?$+K:$):K=$,R){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=K+_t,R={id:_++,callback:z,priorityLevel:R,startTime:K,expirationTime:_t,sortIndex:-1},K>$?(R.sortIndex=K,t(p,R),i(m)===null&&R===i(p)&&(w?(D(H),H=-1):w=!0,at(V,K-$))):(R.sortIndex=_t,t(m,R),E||S||(E=!0,I||(I=!0,Q()))),R},r.unstable_shouldYield=mt,r.unstable_wrapCallback=function(R){var z=g;return function(){var K=g;g=z;try{return R.apply(this,arguments)}finally{g=K}}}})(Uh)),Uh}var m_;function Ny(){return m_||(m_=1,Dh.exports=Ly()),Dh.exports}var Lh={exports:{}},Dn={};var g_;function Oy(){if(g_)return Dn;g_=1;var r=dp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Dn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var __;function Py(){if(__)return Lh.exports;__=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Lh.exports=Oy(),Lh.exports}var v_;function zy(){if(v_)return Wo;v_=1;var r=Ny(),t=dp(),i=Py();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=h;break}if(A===o){x=!0,o=u,a=h;break}A=A.sibling}if(!x){for(A=h.child;A;){if(A===a){x=!0,a=h,o=u;break}if(A===o){x=!0,o=h,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),mt=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case I:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var at=Array.isArray,R=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},$=[],_t=-1;function N(e){return{current:e}}function j(e){0>_t||(e.current=$[_t],$[_t]=null,_t--)}function ht(e,n){_t++,$[_t]=e.current,e.current=n}var Rt=N(null),Gt=N(null),tt=N(null),vt=N(null);function Tt(e,n){switch(ht(tt,n),ht(Gt,e),ht(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?N0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=N0(n),e=O0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Rt),ht(Rt,e)}function kt(){j(Rt),j(Gt),j(tt)}function Zt(e){e.memoizedState!==null&&ht(vt,e);var n=Rt.current,a=O0(n,e.type);n!==a&&(ht(Gt,e),ht(Rt,a))}function ee(e){Gt.current===e&&(j(Rt),j(Gt)),vt.current===e&&(j(vt),Ho._currentValue=K)}var Ge,re;function he(e){if(Ge===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ge=n&&n[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ge+e+re}var Ae=!1;function oe(e,n){if(!e||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ft){var st=ft}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ft){st=ft}e.call(yt.prototype)}}else{try{throw Error()}catch(ft){st=ft}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ft){if(ft&&st&&typeof ft.stack=="string")return[ft.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],A=h[1];if(x&&A){var F=x.split(`
`),nt=A.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===nt.length)for(o=F.length-1,u=nt.length-1;1<=o&&0<=u&&F[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==nt[u]){var pt=`
`+F[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?he(a):""}function Oe(e,n){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he("Lazy");case 13:return e.child!==n&&n!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return he("Activity");default:return""}}function B(e){try{var n="",a=null;do n+=Oe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qe=Object.prototype.hasOwnProperty,Se=r.unstable_scheduleCallback,Ht=r.unstable_cancelCallback,Ot=r.unstable_shouldYield,P=r.unstable_requestPaint,b=r.unstable_now,Y=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,ct=r.unstable_NormalPriority,wt=r.unstable_LowPriority,Ct=r.unstable_IdlePriority,Kt=r.log,$t=r.unstable_setDisableYieldValue,gt=null,bt=null;function Ft(e){if(typeof Kt=="function"&&$t(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(gt,e)}catch{}}var Lt=Math.clz32?Math.clz32:X,Pt=Math.log,fe=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Pt(e)/fe|0)|0}var At=256,St=262144,Nt=4194304;function Et(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Et(o):(x&=A,x!==0?u=Et(x):a||(a=A&~e,a!==0&&(u=Et(a))))):(A=o&~h,A!==0?u=Et(A):x!==0?u=Et(x):a||(a=o&~e,a!==0&&(u=Et(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,nt=e.hiddenUpdates;for(a=x&~a;0<a;){var pt=31-Lt(a),yt=1<<pt;A[pt]=0,F[pt]=-1;var st=nt[pt];if(st!==null)for(nt[pt]=null,pt=0;pt<st.length;pt++){var ft=st[pt];ft!==null&&(ft.lane&=-536870913)}a&=~yt}o!==0&&to(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function to(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Lt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Vs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Lt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function gl(e,n){var a=n&-n;return a=(a&42)!==0?1:ks(a),(a&(e.suspendedLanes|n))!==0?0:a}function ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oi(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:i_(e.type))}function Ws(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var bi=Math.random().toString(36).slice(2),on="__reactFiber$"+bi,mn="__reactProps$"+bi,Qi="__reactContainer$"+bi,Ca="__reactEvents$"+bi,_l="__reactListeners$"+bi,vl="__reactHandles$"+bi,xl="__reactResources$"+bi,fs="__reactMarker$"+bi;function eo(e){delete e[on],delete e[mn],delete e[Ca],delete e[_l],delete e[vl]}function wa(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=G0(e);e!==null;){if(a=e[on])return a;e=G0(e)}return n}e=a,a=e.parentNode}return null}function Da(e){if(e=e[on]||e[Qi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function hs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function C(e){var n=e[xl];return n||(n=e[xl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(e){e[fs]=!0}var lt=new Set,it={};function J(e,n){Ut(e,n),Ut(e+"Capture",n)}function Ut(e,n){for(it[e]=n,e=0;e<n.length;e++)lt.add(n[e])}var Xt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},jt={};function Qt(e){return qe.call(jt,e)?!0:qe.call(It,e)?!1:Xt.test(e)?jt[e]=!0:(It[e]=!0,!1)}function ae(e,n,a){if(Qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ce(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function we(e){if(!e._valueTracker){var n=Ke(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function gn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Yt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function le(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function In(e,n,a,o,u,h,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pe(n)):e.value!==""+pe(n)&&(e.value=""+pe(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Ti(e,x,pe(n)):a!=null?Ti(e,x,pe(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+pe(A):e.removeAttribute("name")}function Jn(e,n,a,o,u,h,x,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){we(e);return}a=a!=null?""+pe(a):"",n=n!=null?""+pe(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),we(e)}function Ti(e,n,a){n==="number"&&Yt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+pe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Pe(e,n,a){if(n!=null&&(n=""+pe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pe(a):""}function ln(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(at(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=pe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),we(e)}function Fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ai(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function $i(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ai(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Ai(e,h,n[h])}function qs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(e){return Ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var Eu=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,js=null;function Lp(e){var n=Da(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(In(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[mn]||null;if(!u)throw Error(s(90));In(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&gn(o)}break t;case"textarea":Pe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qn(e,!!a.multiple,n,!1)}}}var Tu=!1;function Np(e,n,a){if(Tu)return e(n,a);Tu=!0;try{var o=e(n);return o}finally{if(Tu=!1,(Ys!==null||js!==null)&&(oc(),Ys&&(n=Ys,e=js,js=Ys=null,Lp(n),e)))for(n=0;n<e.length;n++)Lp(e[n])}}function no(e,n){var a=e.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(ea)try{var io={};Object.defineProperty(io,"passive",{get:function(){Au=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Au=!1}var Ua=null,Ru=null,yl=null;function Op(){if(yl)return yl;var e,n=Ru,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return yl=u.slice(e,1<o?1-o:void 0)}function Ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function El(){return!0}function Pp(){return!1}function Gn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?El:Pp,this.isPropagationStopped=Pp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),n}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Gn(ds),ao=v({},ds,{view:0,detail:0}),Rx=Gn(ao),Cu,wu,so,Tl=v({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Cu=e.screenX-so.screenX,wu=e.screenY-so.screenY):wu=Cu=0,so=e),Cu)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),zp=Gn(Tl),Cx=v({},Tl,{dataTransfer:0}),wx=Gn(Cx),Dx=v({},ao,{relatedTarget:0}),Du=Gn(Dx),Ux=v({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=Gn(Ux),Nx=v({},ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ox=Gn(Nx),Px=v({},ds,{data:0}),Ip=Gn(Px),zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fx[e])?!!n[e]:!1}function Uu(){return Bx}var Hx=v({},ao,{key:function(e){if(e.key){var n=zx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ix[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?Ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gx=Gn(Hx),Vx=v({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Gn(Vx),kx=v({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Xx=Gn(kx),Wx=v({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),qx=Gn(Wx),Yx=v({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=Gn(Yx),Zx=v({},ds,{newState:0,oldState:0}),Kx=Gn(Zx),Jx=[9,13,27,32],Lu=ea&&"CompositionEvent"in window,ro=null;ea&&"documentMode"in document&&(ro=document.documentMode);var Qx=ea&&"TextEvent"in window&&!ro,Bp=ea&&(!Lu||ro&&8<ro&&11>=ro),Hp=" ",Gp=!1;function Vp(e,n){switch(e){case"keyup":return Jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function $x(e,n){switch(e){case"compositionend":return kp(n);case"keypress":return n.which!==32?null:(Gp=!0,Hp);case"textInput":return e=n.data,e===Hp&&Gp?null:e;default:return null}}function tS(e,n){if(Zs)return e==="compositionend"||!Lu&&Vp(e,n)?(e=Op(),yl=Ru=Ua=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bp&&n.locale!=="ko"?null:n.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!eS[e.type]:n==="textarea"}function Wp(e,n,a,o){Ys?js?js.push(o):js=[o]:Ys=o,n=pc(n,"onChange"),0<n.length&&(a=new bl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var oo=null,lo=null;function nS(e){R0(e,0)}function Al(e){var n=hs(e);if(gn(n))return e}function qp(e,n){if(e==="change")return n}var Yp=!1;if(ea){var Nu;if(ea){var Ou="oninput"in document;if(!Ou){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Ou=typeof jp.oninput=="function"}Nu=Ou}else Nu=!1;Yp=Nu&&(!document.documentMode||9<document.documentMode)}function Zp(){oo&&(oo.detachEvent("onpropertychange",Kp),lo=oo=null)}function Kp(e){if(e.propertyName==="value"&&Al(lo)){var n=[];Wp(n,lo,e,bu(e)),Np(nS,n)}}function iS(e,n,a){e==="focusin"?(Zp(),oo=n,lo=a,oo.attachEvent("onpropertychange",Kp)):e==="focusout"&&Zp()}function aS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Al(lo)}function sS(e,n){if(e==="click")return Al(n)}function rS(e,n){if(e==="input"||e==="change")return Al(n)}function oS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:oS;function co(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qe.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qp(e,n){var a=Jp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jp(a)}}function $p(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$p(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Yt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Yt(e.document)}return n}function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lS=ea&&"documentMode"in document&&11>=document.documentMode,Ks=null,zu=null,uo=null,Iu=!1;function em(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Iu||Ks==null||Ks!==Yt(o)||(o=Ks,"selectionStart"in o&&Pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&co(uo,o)||(uo=o,o=pc(zu,"onSelect"),0<o.length&&(n=new bl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ks)))}function ps(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Fu={},nm={};ea&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ms(e){if(Fu[e])return Fu[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in nm)return Fu[e]=n[a];return e}var im=ms("animationend"),am=ms("animationiteration"),sm=ms("animationstart"),cS=ms("transitionrun"),uS=ms("transitionstart"),fS=ms("transitioncancel"),rm=ms("transitionend"),om=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function Ri(e,n){om.set(e,n),J(n,[e])}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Qs=0,Hu=0;function Cl(){for(var e=Qs,n=Hu=Qs=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var h=ui[n];if(ui[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&lm(a,u,h)}}function wl(e,n,a,o){ui[Qs++]=e,ui[Qs++]=n,ui[Qs++]=a,ui[Qs++]=o,Hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gu(e,n,a,o){return wl(e,n,a,o),Dl(e)}function gs(e,n){return wl(e,null,null,n),Dl(e)}function lm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Lt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Dl(e){if(50<No)throw No=0,Jf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $s={};function hS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new hS(e,n,a,o)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function cm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ul(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")Vu(e)&&(x=1);else if(typeof e=="string")x=_y(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ti(31,a,n,u),e.elementType=O,e.lanes=h,e;case w:return _s(a.children,u,h,n);case M:x=8,u|=24;break;case y:return e=ti(12,a,n,u|2),e.elementType=y,e.lanes=h,e;case V:return e=ti(13,a,n,u),e.elementType=V,e.lanes=h,e;case I:return e=ti(19,a,n,u),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:x=10;break t;case D:x=9;break t;case U:x=11;break t;case H:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function _s(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function ku(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function um(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Xu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var fm=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=fm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:B(n)},fm.set(e,n),n)}return{value:e,source:n,stack:B(n)}}var tr=[],er=0,Ll=null,fo=0,hi=[],di=0,La=null,Pi=1,zi="";function ia(e,n){tr[er++]=fo,tr[er++]=Ll,Ll=e,fo=n}function hm(e,n,a){hi[di++]=Pi,hi[di++]=zi,hi[di++]=La,La=e;var o=Pi;e=zi;var u=32-Lt(o)-1;o&=~(1<<u),a+=1;var h=32-Lt(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Pi=1<<32-Lt(n)+u|a<<u|o,zi=h+e}else Pi=1<<h|a<<u|o,zi=e}function Wu(e){e.return!==null&&(ia(e,1),hm(e,1,0))}function qu(e){for(;e===Ll;)Ll=tr[--er],tr[er]=null,fo=tr[--er],tr[er]=null;for(;e===La;)La=hi[--di],hi[di]=null,zi=hi[--di],hi[di]=null,Pi=hi[--di],hi[di]=null}function dm(e,n){hi[di++]=Pi,hi[di++]=zi,hi[di++]=La,Pi=n.id,zi=n.overflow,La=e}var En=null,je=null,Te=!1,Na=null,pi=!1,Yu=Error(s(519));function Oa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(fi(n,e)),Yu}function pm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[mn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)Me(Po[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Jn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),ln(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||U0(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Oa(e,!0)}function mm(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:En=En.return}}function nr(e){if(e!==En)return!1;if(!Te)return mm(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hh(e.type,e.memoizedProps)),a=!a),a&&je&&Oa(e),mm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=H0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=H0(e)}else n===27?(n=je,ja(e.type)?(e=_h,_h=null,je=e):je=n):je=En?gi(e.stateNode.nextSibling):null;return!0}function vs(){je=En=null,Te=!1}function ju(){var e=Na;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Na=null),e}function ho(e){Na===null?Na=[e]:Na.push(e)}var Zu=N(null),xs=null,aa=null;function Pa(e,n,a){ht(Zu,n._currentValue),n._currentValue=a}function sa(e){e._currentValue=Zu.current,j(Zu)}function Ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ju(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var F=0;F<n.length;F++)if(A.context===n[F]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Ku(h.return,a,e),o||(x=null);break t}h=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),Ku(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ir(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;$n(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===vt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}u=u.return}e!==null&&Ju(n,e,a,o),n.flags|=262144}function Nl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){xs=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return gm(xs,e)}function Ol(e,n){return xs===null&&Ss(e),gm(e,n)}function gm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(s(308));aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else aa=aa.next=n;return a}var dS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},pS=r.unstable_scheduleCallback,mS=r.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new dS,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&pS(mS,function(){e.controller.abort()})}var mo=null,$u=0,ar=0,sr=null;function gS(e,n){if(mo===null){var a=mo=[];$u=0,ar=ih(),sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(_m,_m),n}function _m(){if(--$u===0&&mo!==null){sr!==null&&(sr.status="fulfilled");var e=mo;mo=null,ar=0,sr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _S(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var vm=R.S;R.S=function(e,n){e0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gS(e,n),vm!==null&&vm(e,n)};var ys=N(null);function tf(){var e=ys.current;return e!==null?e:Ye.pooledCache}function Pl(e,n){n===null?ht(ys,ys.current):ht(ys,n.pool)}function xm(){var e=tf();return e===null?null:{parent:un._currentValue,pool:e}}var rr=Error(s(460)),ef=Error(s(474)),zl=Error(s(542)),Il={then:function(){}};function Sm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ym(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Em(e),e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Em(e),e}throw Es=n,rr}}function Ms(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,rr):a}}var Es=null;function Mm(){if(Es===null)throw Error(s(459));var e=Es;return Es=null,e}function Em(e){if(e===rr||e===zl)throw Error(s(483))}var or=null,go=0;function Fl(e){var n=go;return go+=1,or===null&&(or=[]),ym(or,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Bl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bm(e){function n(Z,k){if(e){var et=Z.deletions;et===null?(Z.deletions=[k],Z.flags|=16):et.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=na(Z,k),Z.index=0,Z.sibling=null,Z}function h(Z,k,et){return Z.index=et,e?(et=Z.alternate,et!==null?(et=et.index,et<k?(Z.flags|=67108866,k):et):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,et,xt){return k===null||k.tag!==6?(k=ku(et,Z.mode,xt),k.return=Z,k):(k=u(k,et),k.return=Z,k)}function F(Z,k,et,xt){var te=et.type;return te===w?pt(Z,k,et.props.children,xt,et.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===T&&Ms(te)===k.type)?(k=u(k,et.props),_o(k,et),k.return=Z,k):(k=Ul(et.type,et.key,et.props,null,Z.mode,xt),_o(k,et),k.return=Z,k)}function nt(Z,k,et,xt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=Xu(et,Z.mode,xt),k.return=Z,k):(k=u(k,et.children||[]),k.return=Z,k)}function pt(Z,k,et,xt,te){return k===null||k.tag!==7?(k=_s(et,Z.mode,xt,te),k.return=Z,k):(k=u(k,et),k.return=Z,k)}function yt(Z,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ku(""+k,Z.mode,et),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return et=Ul(k.type,k.key,k.props,null,Z.mode,et),_o(et,k),et.return=Z,et;case E:return k=Xu(k,Z.mode,et),k.return=Z,k;case T:return k=Ms(k),yt(Z,k,et)}if(at(k)||Q(k))return k=_s(k,Z.mode,et,null),k.return=Z,k;if(typeof k.then=="function")return yt(Z,Fl(k),et);if(k.$$typeof===L)return yt(Z,Ol(Z,k),et);Bl(Z,k)}return null}function st(Z,k,et,xt){var te=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return te!==null?null:A(Z,k,""+et,xt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return et.key===te?F(Z,k,et,xt):null;case E:return et.key===te?nt(Z,k,et,xt):null;case T:return et=Ms(et),st(Z,k,et,xt)}if(at(et)||Q(et))return te!==null?null:pt(Z,k,et,xt,null);if(typeof et.then=="function")return st(Z,k,Fl(et),xt);if(et.$$typeof===L)return st(Z,k,Ol(Z,et),xt);Bl(Z,et)}return null}function ft(Z,k,et,xt,te){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Z=Z.get(et)||null,A(k,Z,""+xt,te);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case S:return Z=Z.get(xt.key===null?et:xt.key)||null,F(k,Z,xt,te);case E:return Z=Z.get(xt.key===null?et:xt.key)||null,nt(k,Z,xt,te);case T:return xt=Ms(xt),ft(Z,k,et,xt,te)}if(at(xt)||Q(xt))return Z=Z.get(et)||null,pt(k,Z,xt,te,null);if(typeof xt.then=="function")return ft(Z,k,et,Fl(xt),te);if(xt.$$typeof===L)return ft(Z,k,et,Ol(k,xt),te);Bl(k,xt)}return null}function qt(Z,k,et,xt){for(var te=null,De=null,Jt=k,me=k=0,be=null;Jt!==null&&me<et.length;me++){Jt.index>me?(be=Jt,Jt=null):be=Jt.sibling;var Ue=st(Z,Jt,et[me],xt);if(Ue===null){Jt===null&&(Jt=be);break}e&&Jt&&Ue.alternate===null&&n(Z,Jt),k=h(Ue,k,me),De===null?te=Ue:De.sibling=Ue,De=Ue,Jt=be}if(me===et.length)return a(Z,Jt),Te&&ia(Z,me),te;if(Jt===null){for(;me<et.length;me++)Jt=yt(Z,et[me],xt),Jt!==null&&(k=h(Jt,k,me),De===null?te=Jt:De.sibling=Jt,De=Jt);return Te&&ia(Z,me),te}for(Jt=o(Jt);me<et.length;me++)be=ft(Jt,Z,me,et[me],xt),be!==null&&(e&&be.alternate!==null&&Jt.delete(be.key===null?me:be.key),k=h(be,k,me),De===null?te=be:De.sibling=be,De=be);return e&&Jt.forEach(function($a){return n(Z,$a)}),Te&&ia(Z,me),te}function ne(Z,k,et,xt){if(et==null)throw Error(s(151));for(var te=null,De=null,Jt=k,me=k=0,be=null,Ue=et.next();Jt!==null&&!Ue.done;me++,Ue=et.next()){Jt.index>me?(be=Jt,Jt=null):be=Jt.sibling;var $a=st(Z,Jt,Ue.value,xt);if($a===null){Jt===null&&(Jt=be);break}e&&Jt&&$a.alternate===null&&n(Z,Jt),k=h($a,k,me),De===null?te=$a:De.sibling=$a,De=$a,Jt=be}if(Ue.done)return a(Z,Jt),Te&&ia(Z,me),te;if(Jt===null){for(;!Ue.done;me++,Ue=et.next())Ue=yt(Z,Ue.value,xt),Ue!==null&&(k=h(Ue,k,me),De===null?te=Ue:De.sibling=Ue,De=Ue);return Te&&ia(Z,me),te}for(Jt=o(Jt);!Ue.done;me++,Ue=et.next())Ue=ft(Jt,Z,me,Ue.value,xt),Ue!==null&&(e&&Ue.alternate!==null&&Jt.delete(Ue.key===null?me:Ue.key),k=h(Ue,k,me),De===null?te=Ue:De.sibling=Ue,De=Ue);return e&&Jt.forEach(function(Cy){return n(Z,Cy)}),Te&&ia(Z,me),te}function Xe(Z,k,et,xt){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case S:t:{for(var te=et.key;k!==null;){if(k.key===te){if(te=et.type,te===w){if(k.tag===7){a(Z,k.sibling),xt=u(k,et.props.children),xt.return=Z,Z=xt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===T&&Ms(te)===k.type){a(Z,k.sibling),xt=u(k,et.props),_o(xt,et),xt.return=Z,Z=xt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}et.type===w?(xt=_s(et.props.children,Z.mode,xt,et.key),xt.return=Z,Z=xt):(xt=Ul(et.type,et.key,et.props,null,Z.mode,xt),_o(xt,et),xt.return=Z,Z=xt)}return x(Z);case E:t:{for(te=et.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(Z,k.sibling),xt=u(k,et.children||[]),xt.return=Z,Z=xt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}xt=Xu(et,Z.mode,xt),xt.return=Z,Z=xt}return x(Z);case T:return et=Ms(et),Xe(Z,k,et,xt)}if(at(et))return qt(Z,k,et,xt);if(Q(et)){if(te=Q(et),typeof te!="function")throw Error(s(150));return et=te.call(et),ne(Z,k,et,xt)}if(typeof et.then=="function")return Xe(Z,k,Fl(et),xt);if(et.$$typeof===L)return Xe(Z,k,Ol(Z,et),xt);Bl(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(Z,k.sibling),xt=u(k,et),xt.return=Z,Z=xt):(a(Z,k),xt=ku(et,Z.mode,xt),xt.return=Z,Z=xt),x(Z)):a(Z,k)}return function(Z,k,et,xt){try{go=0;var te=Xe(Z,k,et,xt);return or=null,te}catch(Jt){if(Jt===rr||Jt===zl)throw Jt;var De=ti(29,Jt,null,Z.mode);return De.lanes=xt,De.return=Z,De}}}var bs=bm(!0),Tm=bm(!1),za=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Dl(e),lm(e,null,a),n}return wl(e,o,n,a),Dl(e)}function vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vs(e,a)}}function sf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var rf=!1;function xo(){if(rf){var e=sr;if(e!==null)throw e}}function So(e,n,a,o){rf=!1;var u=e.updateQueue;za=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,nt=F.next;F.next=null,x===null?h=nt:x.next=nt,x=F;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==x&&(A===null?pt.firstBaseUpdate=nt:A.next=nt,pt.lastBaseUpdate=F))}if(h!==null){var yt=u.baseState;x=0,pt=nt=F=null,A=h;do{var st=A.lane&-536870913,ft=st!==A.lane;if(ft?(Ee&st)===st:(o&st)===st){st!==0&&st===ar&&(rf=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var qt=e,ne=A;st=n;var Xe=a;switch(ne.tag){case 1:if(qt=ne.payload,typeof qt=="function"){yt=qt.call(Xe,yt,st);break t}yt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=ne.payload,st=typeof qt=="function"?qt.call(Xe,yt,st):qt,st==null)break t;yt=v({},yt,st);break t;case 2:za=!0}}st=A.callback,st!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[st]:ft.push(st))}else ft={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(nt=pt=ft,F=yt):pt=pt.next=ft,x|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ft=A,A=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);pt===null&&(F=yt),u.baseState=F,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,h===null&&(u.shared.lanes=0),ka|=x,e.lanes=x,e.memoizedState=yt}}function Am(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Rm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Am(a[e],n)}var lr=N(null),Hl=N(0);function Cm(e,n){e=pa,ht(Hl,e),ht(lr,n),pa=e|n.baseLanes}function of(){ht(Hl,pa),ht(lr,lr.current)}function lf(){pa=Hl.current,j(lr),j(Hl)}var ei=N(null),mi=null;function Ba(e){var n=e.alternate;ht(sn,sn.current&1),ht(ei,e),mi===null&&(n===null||lr.current!==null||n.memoizedState!==null)&&(mi=e)}function cf(e){ht(sn,sn.current),ht(ei,e),mi===null&&(mi=e)}function wm(e){e.tag===22?(ht(sn,sn.current),ht(ei,e),mi===null&&(mi=e)):Ha()}function Ha(){ht(sn,sn.current),ht(ei,ei.current)}function ni(e){j(ei),mi===e&&(mi=null),j(sn)}var sn=N(0);function Gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mh(a)||gh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,de=null,Ve=null,fn=null,Vl=!1,cr=!1,Ts=!1,kl=0,yo=0,ur=null,vS=0;function en(){throw Error(s(321))}function uf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function ff(e,n,a,o,u,h){return ra=h,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?hg:Af,Ts=!1,h=a(o,u),Ts=!1,cr&&(h=Um(n,a,o,u)),Dm(e),h}function Dm(e){R.H=bo;var n=Ve!==null&&Ve.next!==null;if(ra=0,fn=Ve=de=null,Vl=!1,yo=0,ur=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&Nl(e)&&(hn=!0))}function Um(e,n,a,o){de=e;var u=0;do{if(cr&&(ur=null),yo=0,cr=!1,25<=u)throw Error(s(301));if(u+=1,fn=Ve=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}R.H=dg,h=n(a,o)}while(cr);return h}function xS(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?Mo(n):n,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(de.flags|=1024),n}function hf(){var e=kl!==0;return kl=0,e}function df(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pf(e){if(Vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Vl=!1}ra=0,fn=Ve=de=null,cr=!1,yo=kl=0,ur=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?de.memoizedState=fn=e:fn=fn.next=e,fn}function rn(){if(Ve===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=fn===null?de.memoizedState:fn.next;if(n!==null)fn=n,Ve=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},fn===null?de.memoizedState=fn=e:fn=fn.next=e}return fn}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var n=yo;return yo+=1,ur===null&&(ur=[]),e=ym(ur,e,n),n=de,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?hg:Af),e}function Wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===L)return bn(e)}throw Error(s(438,String(e)))}function mf(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xl(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=mt;return n.index++,a}function oa(e,n){return typeof n=="function"?n(e):n}function ql(e){var n=rn();return gf(n,Ve,e)}function gf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=x=null,F=null,nt=n,pt=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(Ee&yt)===yt:(ra&yt)===yt){var st=nt.revertLane;if(st===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===ar&&(pt=!0);else if((ra&st)===st){nt=nt.next,st===ar&&(pt=!0);continue}else yt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(A=F=yt,x=h):F=F.next=yt,de.lanes|=st,ka|=st;yt=nt.action,Ts&&a(h,yt),h=nt.hasEagerState?nt.eagerState:a(h,yt)}else st={lane:yt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(A=F=st,x=h):F=F.next=st,de.lanes|=yt,ka|=yt;nt=nt.next}while(nt!==null&&nt!==n);if(F===null?x=h:F.next=A,!$n(h,e.memoizedState)&&(hn=!0,pt&&(a=sr,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function _f(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);$n(h,n.memoizedState)||(hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Lm(e,n,a){var o=de,u=rn(),h=Te;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!$n((Ve||u).memoizedState,a);if(x&&(u.memoizedState=a,hn=!0),u=u.queue,Sf(Pm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,fr(9,{destroy:void 0},Om.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));h||(ra&127)!==0||Nm(o,n,a)}return a}function Nm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Xl(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Om(e,n,a,o){n.value=a,n.getSnapshot=o,zm(n)&&Im(e)}function Pm(e,n,a){return a(function(){zm(n)&&Im(e)})}function zm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Im(e){var n=gs(e,2);n!==null&&qn(n,e,2)}function vf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),Ts){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},n}function Fm(e,n,a,o){return e.baseState=a,gf(e,Ve,typeof o=="function"?o:oa)}function SS(e,n,a,o,u){if(Zl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};R.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Bm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Bm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=R.T,x={};R.T=x;try{var A=a(u,o),F=R.S;F!==null&&F(x,A),Hm(e,n,A)}catch(nt){xf(e,n,nt)}finally{h!==null&&x.types!==null&&(h.types=x.types),R.T=h}}else try{h=a(u,o),Hm(e,n,h)}catch(nt){xf(e,n,nt)}}function Hm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Gm(e,n,o)},function(o){return xf(e,n,o)}):Gm(e,n,a)}function Gm(e,n,a){n.status="fulfilled",n.value=a,Vm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Bm(e,a)))}function xf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Vm(n),n=n.next;while(n!==o)}e.action=null}function Vm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function km(e,n){return n}function Xm(e,n){if(Te){var a=Ye.formState;if(a!==null){t:{var o=de;if(Te){if(je){e:{for(var u=je,h=pi;u.nodeType!==8;){if(!h){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){je=gi(u.nextSibling),o=u.data==="F!";break t}}Oa(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:km,lastRenderedState:n},a.queue=o,a=cg.bind(null,de,o),o.dispatch=a,o=vf(!1),h=Tf.bind(null,de,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=SS.bind(null,de,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Wm(e){var n=rn();return qm(n,Ve,e)}function qm(e,n,a){if(n=gf(e,n,km)[0],e=ql(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(x){throw x===rr?zl:x}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,fr(9,{destroy:void 0},yS.bind(null,u,a),null)),[o,h,e]}function yS(e,n){e.action=n}function Ym(e){var n=rn(),a=Ve;if(a!==null)return qm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function fr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=Xl(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function jm(){return rn().memoizedState}function Yl(e,n,a,o){var u=Bn();de.flags|=e,u.memoizedState=fr(1|n,{destroy:void 0},a,o===void 0?null:o)}function jl(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ve!==null&&o!==null&&uf(o,Ve.memoizedState.deps)?u.memoizedState=fr(n,h,a,o):(de.flags|=e,u.memoizedState=fr(1|n,h,a,o))}function Zm(e,n){Yl(8390656,8,e,n)}function Sf(e,n){jl(2048,8,e,n)}function MS(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=Xl(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Km(e){var n=rn().memoizedState;return MS({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Jm(e,n){return jl(4,2,e,n)}function Qm(e,n){return jl(4,4,e,n)}function $m(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function tg(e,n,a){a=a!=null?a.concat([e]):null,jl(4,4,$m.bind(null,n,e),a)}function yf(){}function eg(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function ng(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=e(),Ts){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o}function Mf(e,n,a){return a===void 0||(ra&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=i0(),de.lanes|=e,ka|=e,a)}function ig(e,n,a,o){return $n(a,n)?a:lr.current!==null?(e=Mf(e,a,o),$n(e,n)||(hn=!0),e):(ra&42)===0||(ra&1073741824)!==0&&(Ee&261930)===0?(hn=!0,e.memoizedState=a):(e=i0(),de.lanes|=e,ka|=e,n)}function ag(e,n,a,o,u){var h=z.p;z.p=h!==0&&8>h?h:8;var x=R.T,A={};R.T=A,Tf(e,!1,n,a);try{var F=u(),nt=R.S;if(nt!==null&&nt(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var pt=_S(F,o);Eo(e,n,pt,si(e))}else Eo(e,n,o,si(e))}catch(yt){Eo(e,n,{then:function(){},status:"rejected",reason:yt},si())}finally{z.p=h,x!==null&&A.types!==null&&(x.types=A.types),R.T=x}}function ES(){}function Ef(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=sg(e).queue;ag(e,u,n,K,a===null?ES:function(){return rg(e),a(o)})}function sg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function rg(e){var n=sg(e);n.next===null&&(n=e.alternate.memoizedState),Eo(e,n.next.queue,{},si())}function bf(){return bn(Ho)}function og(){return rn().memoizedState}function lg(){return rn().memoizedState}function bS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ia(a);var o=Fa(n,e,a);o!==null&&(qn(o,n,a),vo(o,n,a)),n={cache:Qu()},e.payload=n;return}n=n.return}}function TS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zl(e)?ug(n,a):(a=Gu(e,n,a,o),a!==null&&(qn(a,e,o),fg(a,n,o)))}function cg(e,n,a){var o=si();Eo(e,n,a,o)}function Eo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zl(e))ug(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,A=h(x,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,x))return wl(e,n,u,0),Ye===null&&Cl(),!1}catch{}if(a=Gu(e,n,u,o),a!==null)return qn(a,e,o),fg(a,n,o),!0}return!1}function Tf(e,n,a,o){if(o={lane:2,revertLane:ih(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Zl(e)){if(n)throw Error(s(479))}else n=Gu(e,a,o,2),n!==null&&qn(n,e,2)}function Zl(e){var n=e.alternate;return e===de||n!==null&&n===de}function ug(e,n){cr=Vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function fg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vs(e,a)}}var bo={readContext:bn,use:Wl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};bo.useEffectEvent=en;var hg={readContext:bn,use:Wl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:Zm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Yl(4194308,4,$m.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Yl(4194308,4,e,n)},useInsertionEffect:function(e,n){Yl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(Ts){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(Ts){Ft(!0);try{a(n)}finally{Ft(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=TS.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=vf(e);var n=e.queue,a=cg.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:yf,useDeferredValue:function(e,n){var a=Bn();return Mf(a,e,n)},useTransition:function(){var e=vf(!1);return e=ag.bind(null,de,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=Bn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Ee&127)!==0||Nm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Zm(Pm.bind(null,o,h,e),[e]),o.flags|=2048,fr(9,{destroy:void 0},Om.bind(null,o,h,a,n),null),a},useId:function(){var e=Bn(),n=Ye.identifierPrefix;if(Te){var a=zi,o=Pi;a=(o&~(1<<32-Lt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=kl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=vS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:bf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:mf,useCacheRefresh:function(){return Bn().memoizedState=bS.bind(null,de)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:bn,use:Wl,useCallback:eg,useContext:bn,useEffect:Sf,useImperativeHandle:tg,useInsertionEffect:Jm,useLayoutEffect:Qm,useMemo:ng,useReducer:ql,useRef:jm,useState:function(){return ql(oa)},useDebugValue:yf,useDeferredValue:function(e,n){var a=rn();return ig(a,Ve.memoizedState,e,n)},useTransition:function(){var e=ql(oa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Lm,useId:og,useHostTransitionStatus:bf,useFormState:Wm,useActionState:Wm,useOptimistic:function(e,n){var a=rn();return Fm(a,Ve,e,n)},useMemoCache:mf,useCacheRefresh:lg};Af.useEffectEvent=Km;var dg={readContext:bn,use:Wl,useCallback:eg,useContext:bn,useEffect:Sf,useImperativeHandle:tg,useInsertionEffect:Jm,useLayoutEffect:Qm,useMemo:ng,useReducer:_f,useRef:jm,useState:function(){return _f(oa)},useDebugValue:yf,useDeferredValue:function(e,n){var a=rn();return Ve===null?Mf(a,e,n):ig(a,Ve.memoizedState,e,n)},useTransition:function(){var e=_f(oa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Lm,useId:og,useHostTransitionStatus:bf,useFormState:Ym,useActionState:Ym,useOptimistic:function(e,n){var a=rn();return Ve!==null?Fm(a,Ve,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:lg};dg.useEffectEvent=Km;function Rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ia(o);u.payload=n,a!=null&&(u.callback=a),n=Fa(e,u,o),n!==null&&(qn(n,e,o),vo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ia(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fa(e,u,o),n!==null&&(qn(n,e,o),vo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ia(a);o.tag=2,n!=null&&(o.callback=n),n=Fa(e,o,a),n!==null&&(qn(n,e,a),vo(n,e,a))}};function pg(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(u,h):!0}function mg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Cf.enqueueReplaceState(n,n.state,null)}function As(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function gg(e){Rl(e)}function _g(e){console.error(e)}function vg(e){Rl(e)}function Kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function xg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wf(e,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(e,n)},a}function Sg(e){return e=Ia(e),e.tag=3,e}function yg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){xg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){xg(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function AS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ir(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?lc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),th(e,o,u)),!1;case 22:return a.flags|=65536,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),th(e,o,u)),!1}throw Error(s(435,a.tag))}return th(e,o,u),lc(),!1}if(Te)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Yu&&(e=Error(s(422),{cause:o}),ho(fi(e,a)))):(o!==Yu&&(n=Error(s(423),{cause:o}),ho(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=wf(e.stateNode,o,u),sf(e,u),nn!==4&&(nn=2)),!1;var h=Error(s(520),{cause:o});if(h=fi(h,a),Lo===null?Lo=[h]:Lo.push(h),nn!==4&&(nn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=wf(a.stateNode,o,e),sf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Xa===null||!Xa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Sg(u),yg(u,e,a,o),sf(a,u),!1}a=a.return}while(a!==null);return!1}var Df=Error(s(461)),hn=!1;function Tn(e,n,a,o){n.child=e===null?Tm(n,null,a,o):bs(n,e.child,a,o)}function Mg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return Ss(n),o=ff(e,n,a,x,h,u),A=hf(),e!==null&&!hn?(df(e,n,u),la(e,n,u)):(Te&&A&&Wu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function Eg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Vu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,bg(e,n,h,o,u)):(e=Ul(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Ff(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(x,o)&&e.ref===n.ref)return la(e,n,u)}return n.flags|=1,e=na(h,o),e.ref=n.ref,e.return=n,n.child=e}function bg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(co(h,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=h,Ff(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,la(e,n,u)}return Uf(e,n,a,o,u)}function Tg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Ag(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(n,h!==null?h.cachePool:null),h!==null?Cm(n,h):of(),wm(n);else return o=n.lanes=536870912,Ag(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Pl(n,h.cachePool),Cm(n,h),Ha(),n.memoizedState=null):(e!==null&&Pl(n,null),of(),Ha());return Tn(e,n,u,a),n.child}function To(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ag(e,n,a,o,u){var h=tf();return h=h===null?null:{parent:un._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Pl(n,null),of(),wm(n),e!==null&&ir(e,n,o,!0),n.childLanes=u,null}function Jl(e,n){return n=$l({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Rg(e,n,a){return bs(n,e.child,null,a),e=Jl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function RS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Jl(n,o),n.lanes=536870912,To(null,e);if(cf(n),(e=je)?(e=B0(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=um(e),a.return=n,n.child=a,En=n,je=null)):e=null,e===null)throw Oa(n);return n.lanes=536870912,null}return Jl(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=Rg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||ir(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=Ye,o!==null&&(x=gl(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,gs(e,x),qn(o,e,x),Df;lc(),n=Rg(e,n,a)}else e=h.treeContext,je=gi(x.nextSibling),En=n,Te=!0,Na=null,pi=!1,e!==null&&dm(n,e),n=Jl(n,o),n.flags|=4096;return n}return e=na(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uf(e,n,a,o,u){return Ss(n),a=ff(e,n,a,o,void 0,u),o=hf(),e!==null&&!hn?(df(e,n,u),la(e,n,u)):(Te&&o&&Wu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Cg(e,n,a,o,u,h){return Ss(n),n.updateQueue=null,a=Um(n,o,a,u),Dm(e),o=hf(),e!==null&&!hn?(df(e,n,h),la(e,n,h)):(Te&&o&&Wu(n),n.flags|=1,Tn(e,n,a,h),n.child)}function wg(e,n,a,o,u){if(Ss(n),n.stateNode===null){var h=$s,x=a.contextType;typeof x=="object"&&x!==null&&(h=bn(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Cf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},nf(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?bn(x):$s,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Rf(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Cf.enqueueReplaceState(h,h.state,null),So(n,o,h,u),xo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,F=As(a,A);h.props=F;var nt=h.context,pt=a.contextType;x=$s,typeof pt=="object"&&pt!==null&&(x=bn(pt));var yt=a.getDerivedStateFromProps;pt=typeof yt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||nt!==x)&&mg(n,h,o,x),za=!1;var st=n.memoizedState;h.state=st,So(n,o,h,u),xo(),nt=n.memoizedState,A||st!==nt||za?(typeof yt=="function"&&(Rf(n,a,yt,o),nt=n.memoizedState),(F=za||pg(n,a,F,o,st,nt,x))?(pt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=x,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,af(e,n),x=n.memoizedProps,pt=As(a,x),h.props=pt,yt=n.pendingProps,st=h.context,nt=a.contextType,F=$s,typeof nt=="object"&&nt!==null&&(F=bn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==yt||st!==F)&&mg(n,h,o,F),za=!1,st=n.memoizedState,h.state=st,So(n,o,h,u),xo();var ft=n.memoizedState;x!==yt||st!==ft||za||e!==null&&e.dependencies!==null&&Nl(e.dependencies)?(typeof A=="function"&&(Rf(n,a,A,o),ft=n.memoizedState),(pt=za||pg(n,a,pt,o,st,ft,F)||e!==null&&e.dependencies!==null&&Nl(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ft,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ft,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),h.props=o,h.state=ft,h.context=F,o=pt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ql(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=bs(n,e.child,null,u),n.child=bs(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=la(e,n,u),e}function Dg(e,n,a,o){return vs(),n.flags|=256,Tn(e,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(e){return{baseLanes:e,cachePool:xm()}}function Of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function Ug(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Ba(n):Ha(),(e=je)?(e=B0(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=um(e),a.return=n,n.child=a,En=n,je=null)):e=null,e===null)throw Oa(n);return gh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ha(),u=n.mode,A=$l({mode:"hidden",children:A},u),o=_s(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(e,x,a),n.memoizedState=Lf,To(null,o)):(Ba(n),Pf(n,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(h)n.flags&256?(Ba(n),n.flags&=-257,n=zf(e,n,a)):n.memoizedState!==null?(Ha(),n.child=e.child,n.flags|=128,n=null):(Ha(),A=o.fallback,u=n.mode,o=$l({mode:"visible",children:o.children},u),A=_s(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,bs(n,e.child,null,a),o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(e,x,a),n.memoizedState=Lf,n=To(null,o));else if(Ba(n),gh(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var nt=x.dgst;x=nt,o=Error(s(419)),o.stack="",o.digest=x,ho({value:o,source:null,stack:null}),n=zf(e,n,a)}else if(hn||ir(e,n,a,!1),x=(a&e.childLanes)!==0,hn||x){if(x=Ye,x!==null&&(o=gl(x,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,gs(e,o),qn(x,e,o),Df;mh(A)||lc(),n=zf(e,n,a)}else mh(A)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,je=gi(A.nextSibling),En=n,Te=!0,Na=null,pi=!1,e!==null&&dm(n,e),n=Pf(n,o.children),n.flags|=4096);return n}return u?(Ha(),A=o.fallback,u=n.mode,F=e.child,nt=F.sibling,o=na(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,nt!==null?A=na(nt,A):(A=_s(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,To(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Nf(a):(u=A.cachePool,u!==null?(F=un._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=xm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Of(e,x,a),n.memoizedState=Lf,To(e.child,o)):(Ba(n),a=e.child,e=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Pf(e,n){return n=$l({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function $l(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function zf(e,n,a){return bs(n,e.child,null,a),e=Pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Lg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ku(e.return,n,a)}function If(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function Ng(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=sn.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,ht(sn,x),Tn(e,n,o,a),o=Te?fo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lg(e,a,n);else if(e.tag===19)Lg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Gl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),If(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Gl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}If(n,!0,a,null,h,o);break;case"together":If(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=na(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=na(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Nl(e)))}function CS(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Pa(n,un,e.memoizedState.cache),vs();break;case 27:case 5:Zt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ug(e,n,a):(Ba(n),e=la(e,n,a),e!==null?e.sibling:null);Ba(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ir(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ng(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ht(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Tg(e,n,a,n.pendingProps);case 24:Pa(n,un,e.memoizedState.cache)}return la(e,n,a)}function Og(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Ff(e,a)&&(n.flags&128)===0)return hn=!1,CS(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Te&&(n.flags&1048576)!==0&&hm(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ms(n.elementType),n.type=e,typeof e=="function")Vu(e)?(o=As(e,o),n.tag=1,n=wg(null,n,e,o,a)):(n.tag=0,n=Uf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Mg(null,n,e,o,a);break t}else if(u===H){n.tag=14,n=Eg(null,n,e,o,a);break t}}throw n=ot(e)||e,Error(s(306,n,""))}}return n;case 0:return Uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=As(o,n.pendingProps),wg(e,n,o,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,af(e,n),So(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Pa(n,un,o),o!==h.cache&&Ju(n,[un],a,!0),xo(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Dg(e,n,o,a);break t}else if(o!==u){u=fi(Error(s(424)),n),ho(u),n=Dg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=gi(e.firstChild),En=n,Te=!0,Na=null,pi=!0,a=Tm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vs(),o===u){n=la(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Ql(e,n),e===null?(a=W0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=mc(tt.current).createElement(a),o[on]=n,o[mn]=e,An(o,a,e),W(o),n.stateNode=o):n.memoizedState=W0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Te&&(o=n.stateNode=V0(n.type,n.pendingProps,tt.current),En=n,pi=!0,u=je,ja(n.type)?(_h=u,je=gi(o.firstChild)):je=u),Tn(e,n,n.pendingProps.children,a),Ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=je)&&(o=ay(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,En=n,je=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Oa(n)),Zt(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,hh(u,h)?o=null:x!==null&&hh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(e,n,xS,null,null,a),Ho._currentValue=u),Ql(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=je)&&(a=sy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,En=n,je=null,e=!0):e=!1),e||Oa(n)),null;case 13:return Ug(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=bs(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return Mg(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ss(n),u=bn(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return Eg(e,n,n.type,n.pendingProps,a);case 15:return bg(e,n,n.type,n.pendingProps,a);case 19:return Ng(e,n,a);case 31:return RS(e,n,a);case 22:return Tg(e,n,a,n.pendingProps);case 24:return Ss(n),o=bn(un),e===null?(u=tf(),u===null&&(u=Ye,h=Qu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},nf(n),Pa(n,un,u)):((e.lanes&a)!==0&&(af(e,n),So(n,null,null,a),xo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,un,o)):(o=h.cache,Pa(n,un,o),o!==u.cache&&Ju(n,[un],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ca(e){e.flags|=4}function Bf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(o0())e.flags|=8192;else throw Es=Il,ef}else e.flags&=-16777217}function Pg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!K0(n))if(o0())e.flags|=8192;else throw Es=Il,ef}function tc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,mr|=n)}function Ao(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function wS(e,n,a){var o=n.pendingProps;switch(qu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),sa(un),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nr(n)?ca(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),Ze(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ca(n),h!==null?(Ze(n),Pg(n,h)):(Ze(n),Bf(n,u,null,o,a))):h?h!==e.memoizedState?(ca(n),Ze(n),Pg(n,h)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ca(n),Ze(n),Bf(n,u,e,o,a)),null;case 27:if(ee(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Rt.current,nr(n)?pm(n):(e=V0(u,o,a),n.stateNode=e,ca(n))}return Ze(n),null;case 5:if(ee(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(h=Rt.current,nr(n))pm(n);else{var x=mc(tt.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[on]=n,h[mn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(An(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ca(n)}}return Ze(n),Bf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,nr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||U0(e.nodeValue,a)),e||Oa(n,!0)}else e=mc(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=nr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=nr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),tc(n,n.updateQueue),Ze(n),null);case 4:return kt(),e===null&&oh(n.stateNode.containerInfo),Ze(n),null;case 10:return sa(n.type),Ze(n),null;case 19:if(j(sn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Ao(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Gl(e),h!==null){for(n.flags|=128,Ao(o,!1),e=h.updateQueue,n.updateQueue=e,tc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)cm(a,e),a=a.sibling;return ht(sn,sn.current&1|2),Te&&ia(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>sc&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304)}else{if(!u)if(e=Gl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,tc(n,e),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Te)return Ze(n),null}else 2*b()-o.renderingStartTime>sc&&a!==536870912&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=sn.current,ht(sn,u?a&1|2:a&1),Te&&ia(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ni(n),lf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&tc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&j(ys),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),sa(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function DS(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return sa(un),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ee(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(sn),null;case 4:return kt(),null;case 10:return sa(n.type),null;case 22:case 23:return ni(n),lf(),e!==null&&j(ys),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return sa(un),null;case 25:return null;default:return null}}function zg(e,n){switch(qu(n),n.tag){case 3:sa(un),kt();break;case 26:case 27:case 5:ee(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:j(sn);break;case 10:sa(n.type);break;case 22:case 23:ni(n),lf(),e!==null&&j(ys);break;case 24:sa(un)}}function Ro(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){Fe(n,n.return,A)}}function Ga(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var F=a,nt=A;try{nt()}catch(pt){Fe(u,F,pt)}}}o=o.next}while(o!==h)}}catch(pt){Fe(n,n.return,pt)}}function Ig(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rm(n,a)}catch(o){Fe(e,e.return,o)}}}function Fg(e,n,a){a.props=As(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function Co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Bg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function Hf(e,n,a){try{var o=e.stateNode;QS(o,e.type,a,n),o[mn]=n}catch(u){Fe(e,e.return,u)}}function Hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function Gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Vf(e,n,a),e=e.sibling;e!==null;)Vf(e,n,a),e=e.sibling}function ec(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ec(e,n,a),e=e.sibling;e!==null;)ec(e,n,a),e=e.sibling}function Gg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[on]=e,n[mn]=a}catch(h){Fe(e,e.return,h)}}var ua=!1,dn=!1,kf=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function US(e,n){if(e=e.containerInfo,uh=Mc,e=tm(e),Pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,A=-1,F=-1,nt=0,pt=0,yt=e,st=null;e:for(;;){for(var ft;yt!==a||u!==0&&yt.nodeType!==3||(A=x+u),yt!==h||o!==0&&yt.nodeType!==3||(F=x+o),yt.nodeType===3&&(x+=yt.nodeValue.length),(ft=yt.firstChild)!==null;)st=yt,yt=ft;for(;;){if(yt===e)break e;if(st===a&&++nt===u&&(A=x),st===h&&++pt===o&&(F=x),(ft=yt.nextSibling)!==null)break;yt=st,st=yt.parentNode}yt=ft}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:e,selectionRange:a},Mc=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var qt=As(a.type,u);e=o.getSnapshotBeforeUpdate(qt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Fe(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ph(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ph(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function kg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&Ro(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Fe(a,a.return,x)}else{var u=As(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Fe(a,a.return,x)}}o&64&&Ig(a),o&512&&Co(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rm(e,n)}catch(x){Fe(a,a.return,x)}}break;case 27:n===null&&o&4&&Gg(a);case 26:case 5:ha(e,a),n===null&&o&4&&Bg(a),o&512&&Co(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),o&4&&qg(e,a);break;case 13:ha(e,a),o&4&&Yg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=HS.bind(null,a),ry(e,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||dn,u=ua;var h=dn;ua=o,(dn=n)&&!h?da(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),ua=u,dn=h}break;case 30:break;default:ha(e,a)}}function Xg(e){var n=e.alternate;n!==null&&(e.alternate=null,Xg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&eo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Vn=!1;function fa(e,n,a){for(a=a.child;a!==null;)Wg(e,n,a),a=a.sibling}function Wg(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(gt,a)}catch{}switch(a.tag){case 26:dn||Ii(a,n),fa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Ii(a,n);var o=Qe,u=Vn;ja(a.type)&&(Qe=a.stateNode,Vn=!1),fa(e,n,a),Io(a.stateNode),Qe=o,Vn=u;break;case 5:dn||Ii(a,n);case 6:if(o=Qe,u=Vn,Qe=null,fa(e,n,a),Qe=o,Vn=u,Qe!==null)if(Vn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(h){Fe(a,n,h)}else try{Qe.removeChild(a.stateNode)}catch(h){Fe(a,n,h)}break;case 18:Qe!==null&&(Vn?(e=Qe,I0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Er(e)):I0(Qe,a.stateNode));break;case 4:o=Qe,u=Vn,Qe=a.stateNode.containerInfo,Vn=!0,fa(e,n,a),Qe=o,Vn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),dn||Ga(4,a,n),fa(e,n,a);break;case 1:dn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Fg(a,n,o)),fa(e,n,a);break;case 21:fa(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,fa(e,n,a),dn=o;break;default:fa(e,n,a)}}function qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(a){Fe(n,n.return,a)}}}function Yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(a){Fe(n,n.return,a)}}function LS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Vg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Vg),n;default:throw Error(s(435,e.tag))}}function nc(e,n){var a=LS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=GS.bind(null,e,o);o.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(ja(A.type)){Qe=A.stateNode,Vn=!1;break t}break;case 5:Qe=A.stateNode,Vn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,Vn=!0;break t}A=A.return}if(Qe===null)throw Error(s(160));Wg(h,x,u),Qe=null,Vn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jg(n,e),n=n.sibling}var Ci=null;function jg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),o&4&&(Ga(3,e,e.return),Ro(3,e),Ga(5,e,e.return));break;case 1:kn(n,e),Xn(e),o&512&&(dn||a===null||Ii(a,a.return)),o&64&&ua&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(kn(n,e),Xn(e),o&512&&(dn||a===null||Ii(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[fs]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),An(h,o,a),h[on]=e,W(h),o=h;break t;case"link":var x=j0("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(h=x[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;case"meta":if(x=j0("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(h=x[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[on]=e,W(h),o=h}e.stateNode=o}else Z0(u,e.type,e.stateNode);else e.stateNode=Y0(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Z0(u,e.type,e.stateNode):Y0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),o&512&&(dn||a===null||Ii(a,a.return)),a!==null&&o&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),o&512&&(dn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{Fn(u,"")}catch(qt){Fe(e,e.return,qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Hf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(kf=!0);break;case 6:if(kn(n,e),Xn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(qt){Fe(e,e.return,qt)}}break;case 3:if(vc=null,u=Ci,Ci=gc(n.containerInfo),kn(n,e),Ci=u,Xn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(qt){Fe(e,e.return,qt)}kf&&(kf=!1,Zg(e));break;case 4:o=Ci,Ci=gc(e.stateNode.containerInfo),kn(n,e),Xn(e),Ci=o;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ac=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,nt=ua,pt=dn;if(ua=nt||u,dn=pt||F,kn(n,e),dn=pt,ua=nt,Xn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||ua||dn||Rs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=F.stateNode;var yt=F.memoizedProps.style,st=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(qt){Fe(F,F.return,qt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(qt){Fe(F,F.return,qt)}}}else if(n.tag===18){if(a===null){F=n;try{var ft=F.stateNode;u?F0(ft,!0):F0(F.stateNode,!1)}catch(qt){Fe(F,F.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,nc(e,a))));break;case 19:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Hg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Gf(e);ec(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(Fn(x,""),a.flags&=-33);var A=Gf(e);ec(e,A,x);break;case 3:case 4:var F=a.stateNode.containerInfo,nt=Gf(e);Vf(e,nt,F);break;default:throw Error(s(161))}}catch(pt){Fe(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Zg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ha(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)kg(e,n.alternate,n),n=n.sibling}function Rs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),Rs(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Fg(n,n.return,a),Rs(n);break;case 27:Io(n.stateNode);case 26:case 5:Ii(n,n.return),Rs(n);break;case 22:n.memoizedState===null&&Rs(n);break;case 30:Rs(n);break;default:Rs(n)}e=e.sibling}}function da(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:da(u,h,a),Ro(4,h);break;case 1:if(da(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Fe(o,o.return,nt)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Am(F[u],A)}catch(nt){Fe(o,o.return,nt)}}a&&x&64&&Ig(h),Co(h,h.return);break;case 27:Gg(h);case 26:case 5:da(u,h,a),a&&o===null&&x&4&&Bg(h),Co(h,h.return);break;case 12:da(u,h,a);break;case 31:da(u,h,a),a&&x&4&&qg(u,h);break;case 13:da(u,h,a),a&&x&4&&Yg(u,h);break;case 22:h.memoizedState===null&&da(u,h,a),Co(h,h.return);break;case 30:break;default:da(u,h,a)}n=n.sibling}}function Xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function Wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Kg(e,n,a,o),n=n.sibling}function Kg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&Ro(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,A=h.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Fe(n,n.return,F)}}else wi(e,n,a,o);break;case 31:wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?wi(e,n,a,o):wo(e,n):h._visibility&2?wi(e,n,a,o):(h._visibility|=2,hr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Xf(x,n);break;case 24:wi(e,n,a,o),u&2048&&Wf(n.alternate,n);break;default:wi(e,n,a,o)}}function hr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,A=a,F=o,nt=x.flags;switch(x.tag){case 0:case 11:case 15:hr(h,x,A,F,u),Ro(8,x);break;case 23:break;case 22:var pt=x.stateNode;x.memoizedState!==null?pt._visibility&2?hr(h,x,A,F,u):wo(h,x):(pt._visibility|=2,hr(h,x,A,F,u)),u&&nt&2048&&Xf(x.alternate,x);break;case 24:hr(h,x,A,F,u),u&&nt&2048&&Wf(x.alternate,x);break;default:hr(h,x,A,F,u)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:wo(a,o),u&2048&&Xf(o.alternate,o);break;case 24:wo(a,o),u&2048&&Wf(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Do=8192;function dr(e,n,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)Jg(e,n,a),e=e.sibling}function Jg(e,n,a){switch(e.tag){case 26:dr(e,n,a),e.flags&Do&&e.memoizedState!==null&&vy(a,Ci,e.memoizedState,e.memoizedProps);break;case 5:dr(e,n,a);break;case 3:case 4:var o=Ci;Ci=gc(e.stateNode.containerInfo),dr(e,n,a),Ci=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,dr(e,n,a),Do=o):dr(e,n,a));break;default:dr(e,n,a)}}function Qg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,t0(o,e)}Qg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$g(e),e=e.sibling}function $g(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ic(e)):Uo(e);break;default:Uo(e)}}function ic(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,t0(o,e)}Qg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),ic(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ic(n));break;default:ic(n)}e=e.sibling}}function t0(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,h=o.return;if(Xg(o),o===a){yn=null;break t}if(u!==null){u.return=h,yn=u;break t}yn=h}}}var NS={getCacheForType:function(e){var n=bn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(un).controller.signal}},OS=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ye=null,ye=null,Ee=0,Ie=0,ii=null,Va=!1,pr=!1,qf=!1,pa=0,nn=0,ka=0,Cs=0,Yf=0,ai=0,mr=0,Lo=null,Wn=null,jf=!1,ac=0,e0=0,sc=1/0,rc=null,Xa=null,_n=0,Wa=null,gr=null,ma=0,Zf=0,Kf=null,n0=null,No=0,Jf=null;function si(){return(Ne&2)!==0&&Ee!==0?Ee&-Ee:R.T!==null?ih():Oi()}function i0(){if(ai===0)if((Ee&536870912)===0||Te){var e=St;St<<=1,(St&3932160)===0&&(St=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function qn(e,n,a){(e===Ye&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(_r(e,0),qa(e,Ee,ai,!1)),Pn(e,a),((Ne&2)===0||e!==Ye)&&(e===Ye&&((Ne&2)===0&&(Cs|=a),nn===4&&qa(e,Ee,ai,!1)),Fi(e))}function a0(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||zt(e,n),u=o?IS(e,n):$f(e,n,!0),h=o;do{if(u===0){pr&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!PS(a)){u=$f(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=Lo;var F=A.current.memoizedState.isDehydrated;if(F&&(_r(A,x).flags|=256),x=$f(A,x,!1),x!==2){if(qf&&!F){A.errorRecoveryDisabledLanes|=h,Cs|=h,u=4;break t}h=Wn,Wn=u,h!==null&&(Wn===null?Wn=h:Wn.push.apply(Wn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){_r(e,0),qa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ai,!Va);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ac+300-b(),10<u)){if(qa(o,n,ai,!Va),ut(o,0,!0)!==0)break t;ma=n,o.timeoutHandle=P0(s0.bind(null,o,a,Wn,rc,jf,n,ai,Cs,mr,Va,h,"Throttled",-0,0),u);break t}s0(o,a,Wn,rc,jf,n,ai,Cs,mr,Va,h,null,-0,0)}}break}while(!0);Fi(e)}function s0(e,n,a,o,u,h,x,A,F,nt,pt,yt,st,ft){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},Jg(n,h,yt);var qt=(h&62914560)===h?ac-b():(h&4194048)===h?e0-b():0;if(qt=xy(yt,qt),qt!==null){ma=h,e.cancelPendingCommit=qt(d0.bind(null,e,n,h,a,o,u,x,A,F,pt,yt,null,st,ft)),qa(e,h,x,!nt);return}}d0(e,n,h,a,o,u,x,A,F)}function PS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!$n(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~Yf,n&=~Cs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Lt(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&to(e,a,n)}function oc(){return(Ne&6)===0?(Oo(0),!1):!0}function Qf(){if(ye!==null){if(Ie===0)var e=ye.return;else e=ye,aa=xs=null,pf(e),or=null,go=0,e=ye;for(;e!==null;)zg(e.alternate,e),e=e.return;ye=null}}function _r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ey(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ma=0,Qf(),Ye=e,ye=a=na(e.current,null),Ee=n,Ie=0,ii=null,Va=!1,pr=zt(e,n),qf=!1,mr=ai=Yf=Cs=ka=nn=0,Wn=Lo=null,jf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Lt(o),h=1<<u;n|=e[u],o&=~h}return pa=n,Cl(),a}function r0(e,n){de=null,R.H=bo,n===rr||n===zl?(n=Mm(),Ie=3):n===ef?(n=Mm(),Ie=4):Ie=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,ye===null&&(nn=1,Kl(e,fi(n,e.current)))}function o0(){var e=ei.current;return e===null?!0:(Ee&4194048)===Ee?mi===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===mi:!1}function l0(){var e=R.H;return R.H=bo,e===null?bo:e}function c0(){var e=R.A;return R.A=NS,e}function lc(){nn=4,Va||(Ee&4194048)!==Ee&&ei.current!==null||(pr=!0),(ka&134217727)===0&&(Cs&134217727)===0||Ye===null||qa(Ye,Ee,ai,!1)}function $f(e,n,a){var o=Ne;Ne|=2;var u=l0(),h=c0();(Ye!==e||Ee!==n)&&(rc=null,_r(e,n)),n=!1;var x=nn;t:do try{if(Ie!==0&&ye!==null){var A=ye,F=ii;switch(Ie){case 8:Qf(),x=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var nt=Ie;if(Ie=0,ii=null,vr(e,A,F,nt),a&&pr){x=0;break t}break;default:nt=Ie,Ie=0,ii=null,vr(e,A,F,nt)}}zS(),x=nn;break}catch(pt){r0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,aa=xs=null,Ne=o,R.H=u,R.A=h,ye===null&&(Ye=null,Ee=0,Cl()),x}function zS(){for(;ye!==null;)u0(ye)}function IS(e,n){var a=Ne;Ne|=2;var o=l0(),u=c0();Ye!==e||Ee!==n?(rc=null,sc=b()+500,_r(e,n)):pr=zt(e,n);t:do try{if(Ie!==0&&ye!==null){n=ye;var h=ii;e:switch(Ie){case 1:Ie=0,ii=null,vr(e,n,h,1);break;case 2:case 9:if(Sm(h)){Ie=0,ii=null,f0(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==e||(Ie=7),Fi(e)},h.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Sm(h)?(Ie=0,ii=null,f0(n)):(Ie=0,ii=null,vr(e,n,h,7));break;case 5:var x=null;switch(ye.tag){case 26:x=ye.memoizedState;case 5:case 27:var A=ye;if(x?K0(x):A.stateNode.complete){Ie=0,ii=null;var F=A.sibling;if(F!==null)ye=F;else{var nt=A.return;nt!==null?(ye=nt,cc(nt)):ye=null}break e}}Ie=0,ii=null,vr(e,n,h,5);break;case 6:Ie=0,ii=null,vr(e,n,h,6);break;case 8:Qf(),nn=6;break t;default:throw Error(s(462))}}FS();break}catch(pt){r0(e,pt)}while(!0);return aa=xs=null,R.H=o,R.A=u,Ne=a,ye!==null?0:(Ye=null,Ee=0,Cl(),nn)}function FS(){for(;ye!==null&&!Ot();)u0(ye)}function u0(e){var n=Og(e.alternate,e,pa);e.memoizedProps=e.pendingProps,n===null?cc(e):ye=n}function f0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Cg(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Cg(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:pf(n);default:zg(a,n),n=ye=cm(n,pa),n=Og(a,n,pa)}e.memoizedProps=e.pendingProps,n===null?cc(e):ye=n}function vr(e,n,a,o){aa=xs=null,pf(n),or=null,go=0;var u=n.return;try{if(AS(e,u,n,a,Ee)){nn=1,Kl(e,fi(a,e.current)),ye=null;return}}catch(h){if(u!==null)throw ye=u,h;nn=1,Kl(e,fi(a,e.current)),ye=null;return}n.flags&32768?(Te||o===1?e=!0:pr||(Ee&536870912)!==0?e=!1:(Va=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),h0(n,e)):cc(n)}function cc(e){var n=e;do{if((n.flags&32768)!==0){h0(n,Va);return}e=n.return;var a=wS(n.alternate,n,pa);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);nn===0&&(nn=5)}function h0(e,n){do{var a=DS(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);nn=6,ye=null}function d0(e,n,a,o,u,h,x,A,F){e.cancelPendingCommit=null;do uc();while(_n!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Hu,Ei(e,a,h,x,A,F),e===Ye&&(ye=Ye=null,Ee=0),gr=n,Wa=e,ma=a,Zf=h,Kf=u,n0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,VS(ct,function(){return v0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=R.T,R.T=null,u=z.p,z.p=2,x=Ne,Ne|=4;try{US(e,n,a)}finally{Ne=x,z.p=u,R.T=o}}_n=1,p0(),m0(),g0()}}function p0(){if(_n===1){_n=0;var e=Wa,n=gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var o=z.p;z.p=2;var u=Ne;Ne|=4;try{jg(n,e);var h=fh,x=tm(e.containerInfo),A=h.focusedElem,F=h.selectionRange;if(x!==A&&A&&A.ownerDocument&&$p(A.ownerDocument.documentElement,A)){if(F!==null&&Pu(A)){var nt=F.start,pt=F.end;if(pt===void 0&&(pt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(pt,A.value.length);else{var yt=A.ownerDocument||document,st=yt&&yt.defaultView||window;if(st.getSelection){var ft=st.getSelection(),qt=A.textContent.length,ne=Math.min(F.start,qt),Xe=F.end===void 0?ne:Math.min(F.end,qt);!ft.extend&&ne>Xe&&(x=Xe,Xe=ne,ne=x);var Z=Qp(A,ne),k=Qp(A,Xe);if(Z&&k&&(ft.rangeCount!==1||ft.anchorNode!==Z.node||ft.anchorOffset!==Z.offset||ft.focusNode!==k.node||ft.focusOffset!==k.offset)){var et=yt.createRange();et.setStart(Z.node,Z.offset),ft.removeAllRanges(),ne>Xe?(ft.addRange(et),ft.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),ft.addRange(et))}}}}for(yt=[],ft=A;ft=ft.parentNode;)ft.nodeType===1&&yt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<yt.length;A++){var xt=yt[A];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Mc=!!uh,fh=uh=null}finally{Ne=u,z.p=o,R.T=a}}e.current=n,_n=2}}function m0(){if(_n===2){_n=0;var e=Wa,n=gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var o=z.p;z.p=2;var u=Ne;Ne|=4;try{kg(e,n.alternate,n)}finally{Ne=u,z.p=o,R.T=a}}_n=3}}function g0(){if(_n===4||_n===3){_n=0,P();var e=Wa,n=gr,a=ma,o=n0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,gr=Wa=null,_0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Xa=null),Xs(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(gt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=R.T,u=z.p,z.p=2,R.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];h(A.value,{componentStack:A.stack})}}finally{R.T=n,z.p=u}}(ma&3)!==0&&uc(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Jf?No++:(No=0,Jf=e):No=0,Oo(0)}}function _0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function uc(){return p0(),m0(),g0(),v0()}function v0(){if(_n!==5)return!1;var e=Wa,n=Zf;Zf=0;var a=Xs(ma),o=R.T,u=z.p;try{z.p=32>a?32:a,R.T=null,a=Kf,Kf=null;var h=Wa,x=ma;if(_n=0,gr=Wa=null,ma=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,$g(h.current),Kg(h,h.current,x,a),Ne=A,Oo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(gt,h)}catch{}return!0}finally{z.p=u,R.T=o,_0(e,n)}}function x0(e,n,a){n=fi(a,n),n=wf(e.stateNode,n,2),e=Fa(e,n,2),e!==null&&(Pn(e,2),Fi(e))}function Fe(e,n,a){if(e.tag===3)x0(e,e,a);else for(;n!==null;){if(n.tag===3){x0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){e=fi(a,e),a=Sg(2),o=Fa(n,a,2),o!==null&&(yg(a,o,n,e),Pn(o,2),Fi(o));break}}n=n.return}}function th(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new OS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(qf=!0,u.add(a),e=BS.bind(null,e,n,a),n.then(e,e))}function BS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Ee&a)===a&&(nn===4||nn===3&&(Ee&62914560)===Ee&&300>b()-ac?(Ne&2)===0&&_r(e,0):Yf|=a,mr===Ee&&(mr=0)),Fi(e)}function S0(e,n){n===0&&(n=ze()),e=gs(e,n),e!==null&&(Pn(e,n),Fi(e))}function HS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),S0(e,a)}function GS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),S0(e,a)}function VS(e,n){return Se(e,n)}var fc=null,xr=null,eh=!1,hc=!1,nh=!1,Ya=0;function Fi(e){e!==xr&&e.next===null&&(xr===null?fc=xr=e:xr=xr.next=e),hc=!0,eh||(eh=!0,XS())}function Oo(e,n){if(!nh&&hc){nh=!0;do for(var a=!1,o=fc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Lt(42|e)+1)-1,h&=u&~(x&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,b0(o,h))}else h=Ee,h=ut(o,o===Ye?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||zt(o,h)||(a=!0,b0(o,h));o=o.next}while(a);nh=!1}}function kS(){y0()}function y0(){hc=eh=!1;var e=0;Ya!==0&&ty()&&(e=Ya);for(var n=b(),a=null,o=fc;o!==null;){var u=o.next,h=M0(o,n);h===0?(o.next=null,a===null?fc=u:a.next=u,u===null&&(xr=a)):(a=o,(e!==0||(h&3)!==0)&&(hc=!0)),o=u}_n!==0&&_n!==5||Oo(e),Ya!==0&&(Ya=0)}function M0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Lt(h),A=1<<x,F=u[x];F===-1?((A&a)===0||(A&o)!==0)&&(u[x]=se(A,n)):F<=n&&(e.expiredLanes|=A),h&=~A}if(n=Ye,a=Ee,a=ut(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ht(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ht(o),Xs(a)){case 2:case 8:a=Mt;break;case 32:a=ct;break;case 268435456:a=Ct;break;default:a=ct}return o=E0.bind(null,e),a=Se(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ht(o),e.callbackPriority=2,e.callbackNode=null,2}function E0(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(uc()&&e.callbackNode!==a)return null;var o=Ee;return o=ut(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(a0(e,o,n),M0(e,b()),e.callbackNode!=null&&e.callbackNode===a?E0.bind(null,e):null)}function b0(e,n){if(uc())return null;a0(e,n,!0)}function XS(){ny(function(){(Ne&6)!==0?Se(dt,kS):y0()})}function ih(){if(Ya===0){var e=ar;e===0&&(e=At,At<<=1,(At&261888)===0&&(At=256)),Ya=e}return Ya}function T0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Sl(""+e)}function A0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function WS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=T0((u[mn]||null).action),x=o.submitter;x&&(n=(n=x[mn]||null)?T0(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var A=new bl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var F=x?A0(u,x):new FormData(u);Ef(a,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(A.preventDefault(),F=x?A0(u,x):new FormData(u),Ef(a,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var ah=0;ah<Bu.length;ah++){var sh=Bu[ah],qS=sh.toLowerCase(),YS=sh[0].toUpperCase()+sh.slice(1);Ri(qS,"on"+YS)}Ri(im,"onAnimationEnd"),Ri(am,"onAnimationIteration"),Ri(sm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(cS,"onTransitionRun"),Ri(uS,"onTransitionStart"),Ri(fS,"onTransitionCancel"),Ri(rm,"onTransitionEnd"),Ut("onMouseEnter",["mouseout","mouseover"]),Ut("onMouseLeave",["mouseout","mouseover"]),Ut("onPointerEnter",["pointerout","pointerover"]),Ut("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function R0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],F=A.instance,nt=A.currentTarget;if(A=A.listener,F!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=nt;try{h(u)}catch(pt){Rl(pt)}u.currentTarget=null,h=F}else for(x=0;x<o.length;x++){if(A=o[x],F=A.instance,nt=A.currentTarget,A=A.listener,F!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=nt;try{h(u)}catch(pt){Rl(pt)}u.currentTarget=null,h=F}}}}function Me(e,n){var a=n[Ca];a===void 0&&(a=n[Ca]=new Set);var o=e+"__bubble";a.has(o)||(C0(n,e,2,!1),a.add(o))}function rh(e,n,a){var o=0;n&&(o|=4),C0(a,e,o,n)}var dc="_reactListening"+Math.random().toString(36).slice(2);function oh(e){if(!e[dc]){e[dc]=!0,lt.forEach(function(a){a!=="selectionchange"&&(jS.has(a)||rh(a,!1,e),rh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[dc]||(n[dc]=!0,rh("selectionchange",!1,n))}}function C0(e,n,a,o){switch(i_(n)){case 2:var u=My;break;case 8:u=Ey;break;default:u=Mh}a=u.bind(null,n,a,e),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function lh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=wa(A),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){o=h=x;continue t}A=A.parentNode}}o=o.return}Np(function(){var nt=h,pt=bu(a),yt=[];t:{var st=om.get(e);if(st!==void 0){var ft=bl,qt=e;switch(e){case"keypress":if(Ml(a)===0)break t;case"keydown":case"keyup":ft=Gx;break;case"focusin":qt="focus",ft=Du;break;case"focusout":qt="blur",ft=Du;break;case"beforeblur":case"afterblur":ft=Du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Xx;break;case im:case am:case sm:ft=Lx;break;case rm:ft=qx;break;case"scroll":case"scrollend":ft=Rx;break;case"wheel":ft=jx;break;case"copy":case"cut":case"paste":ft=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Fp;break;case"toggle":case"beforetoggle":ft=Kx}var ne=(n&4)!==0,Xe=!ne&&(e==="scroll"||e==="scrollend"),Z=ne?st!==null?st+"Capture":null:st;ne=[];for(var k=nt,et;k!==null;){var xt=k;if(et=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||et===null||Z===null||(xt=no(k,Z),xt!=null&&ne.push(zo(k,xt,et))),Xe)break;k=k.return}0<ne.length&&(st=new ft(st,qt,null,a,pt),yt.push({event:st,listeners:ne}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",st&&a!==Eu&&(qt=a.relatedTarget||a.fromElement)&&(wa(qt)||qt[Qi]))break t;if((ft||st)&&(st=pt.window===pt?pt:(st=pt.ownerDocument)?st.defaultView||st.parentWindow:window,ft?(qt=a.relatedTarget||a.toElement,ft=nt,qt=qt?wa(qt):null,qt!==null&&(Xe=c(qt),ne=qt.tag,qt!==Xe||ne!==5&&ne!==27&&ne!==6)&&(qt=null)):(ft=null,qt=nt),ft!==qt)){if(ne=zp,xt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Fp,xt="onPointerLeave",Z="onPointerEnter",k="pointer"),Xe=ft==null?st:hs(ft),et=qt==null?st:hs(qt),st=new ne(xt,k+"leave",ft,a,pt),st.target=Xe,st.relatedTarget=et,xt=null,wa(pt)===nt&&(ne=new ne(Z,k+"enter",qt,a,pt),ne.target=et,ne.relatedTarget=Xe,xt=ne),Xe=xt,ft&&qt)e:{for(ne=ZS,Z=ft,k=qt,et=0,xt=Z;xt;xt=ne(xt))et++;xt=0;for(var te=k;te;te=ne(te))xt++;for(;0<et-xt;)Z=ne(Z),et--;for(;0<xt-et;)k=ne(k),xt--;for(;et--;){if(Z===k||k!==null&&Z===k.alternate){ne=Z;break e}Z=ne(Z),k=ne(k)}ne=null}else ne=null;ft!==null&&w0(yt,st,ft,ne,!1),qt!==null&&Xe!==null&&w0(yt,Xe,qt,ne,!0)}}t:{if(st=nt?hs(nt):window,ft=st.nodeName&&st.nodeName.toLowerCase(),ft==="select"||ft==="input"&&st.type==="file")var De=qp;else if(Xp(st))if(Yp)De=rS;else{De=aS;var Jt=iS}else ft=st.nodeName,!ft||ft.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&qs(nt.elementType)&&(De=qp):De=sS;if(De&&(De=De(e,nt))){Wp(yt,De,a,pt);break t}Jt&&Jt(e,st,nt),e==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&Ti(st,"number",st.value)}switch(Jt=nt?hs(nt):window,e){case"focusin":(Xp(Jt)||Jt.contentEditable==="true")&&(Ks=Jt,zu=nt,uo=null);break;case"focusout":uo=zu=Ks=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,em(yt,a,pt);break;case"selectionchange":if(lS)break;case"keydown":case"keyup":em(yt,a,pt)}var me;if(Lu)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else Zs?Vp(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(Bp&&a.locale!=="ko"&&(Zs||be!=="onCompositionStart"?be==="onCompositionEnd"&&Zs&&(me=Op()):(Ua=pt,Ru="value"in Ua?Ua.value:Ua.textContent,Zs=!0)),Jt=pc(nt,be),0<Jt.length&&(be=new Ip(be,e,null,a,pt),yt.push({event:be,listeners:Jt}),me?be.data=me:(me=kp(a),me!==null&&(be.data=me)))),(me=Qx?$x(e,a):tS(e,a))&&(be=pc(nt,"onBeforeInput"),0<be.length&&(Jt=new Ip("onBeforeInput","beforeinput",null,a,pt),yt.push({event:Jt,listeners:be}),Jt.data=me)),WS(yt,e,nt,a,pt)}R0(yt,n)})}function zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function pc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=no(e,a),u!=null&&o.unshift(zo(e,u,h)),u=no(e,n),u!=null&&o.push(zo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ZS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function w0(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var A=a,F=A.alternate,nt=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||nt===null||(F=nt,u?(nt=no(a,h),nt!=null&&x.unshift(zo(a,nt,F))):u||(nt=no(a,h),nt!=null&&x.push(zo(a,nt,F)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var KS=/\r\n?/g,JS=/\u0000|\uFFFD/g;function D0(e){return(typeof e=="string"?e:""+e).replace(KS,`
`).replace(JS,"")}function U0(e,n){return n=D0(n),D0(e)===n}function ke(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Fn(e,""+o);break;case"className":ce(e,"class",o);break;case"tabIndex":ce(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ce(e,a,o);break;case"style":$i(e,o,h);break;case"data":if(n!=="object"){ce(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&ke(e,n,"name",u.name,u,null),ke(e,n,"formEncType",u.formEncType,u,null),ke(e,n,"formMethod",u.formMethod,u,null),ke(e,n,"formTarget",u.formTarget,u,null)):(ke(e,n,"encType",u.encType,u,null),ke(e,n,"method",u.method,u,null),ke(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ta);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),ae(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ae(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tx.get(a)||a,ae(e,a,o))}}function ch(e,n,a,o,u,h){switch(a){case"style":$i(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&Fn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[mn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ae(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ke(e,n,h,x,a,null)}}u&&ke(e,n,"srcSet",a.srcSet,a,null),o&&ke(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=h=x=u=null,F=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":x=pt;break;case"checked":F=pt;break;case"defaultChecked":nt=pt;break;case"value":h=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:ke(e,n,o,pt,a,null)}}Jn(e,h,A,F,nt,x,u,!1);return;case"select":Me("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:ke(e,n,u,A,a,null)}n=h,a=x,e.multiple=!!o,n!=null?Qn(e,!!o,n,!1):a!=null&&Qn(e,!!o,a,!0);return;case"textarea":Me("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ke(e,n,x,A,a,null)}ln(e,o,u,h);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ke(e,n,F,o,a,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Po.length;o++)Me(Po[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ke(e,n,nt,o,a,null)}return;default:if(qs(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&ch(e,n,pt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&ke(e,n,A,o,a,null))}function QS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,A=null,F=null,nt=null,pt=null;for(ft in a){var yt=a[ft];if(a.hasOwnProperty(ft)&&yt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":F=yt;default:o.hasOwnProperty(ft)||ke(e,n,ft,null,o,yt)}}for(var st in o){var ft=o[st];if(yt=a[st],o.hasOwnProperty(st)&&(ft!=null||yt!=null))switch(st){case"type":h=ft;break;case"name":u=ft;break;case"checked":nt=ft;break;case"defaultChecked":pt=ft;break;case"value":x=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==yt&&ke(e,n,st,ft,o,yt)}}In(e,x,A,F,nt,pt,h,u);return;case"select":ft=x=A=st=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ft=F;default:o.hasOwnProperty(h)||ke(e,n,h,null,o,F)}for(u in o)if(h=o[u],F=a[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":st=h;break;case"defaultValue":A=h;break;case"multiple":x=h;default:h!==F&&ke(e,n,u,h,o,F)}n=A,a=x,o=ft,st!=null?Qn(e,!!a,st,!1):!!o!=!!a&&(n!=null?Qn(e,!!a,n,!0):Qn(e,!!a,a?[]:"",!1));return;case"textarea":ft=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ke(e,n,A,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":st=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&ke(e,n,x,u,o,h)}Pe(e,st,ft);return;case"option":for(var qt in a)st=a[qt],a.hasOwnProperty(qt)&&st!=null&&!o.hasOwnProperty(qt)&&(qt==="selected"?e.selected=!1:ke(e,n,qt,null,o,st));for(F in o)st=o[F],ft=a[F],o.hasOwnProperty(F)&&st!==ft&&(st!=null||ft!=null)&&(F==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":ke(e,n,F,st,o,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)st=a[ne],a.hasOwnProperty(ne)&&st!=null&&!o.hasOwnProperty(ne)&&ke(e,n,ne,null,o,st);for(nt in o)if(st=o[nt],ft=a[nt],o.hasOwnProperty(nt)&&st!==ft&&(st!=null||ft!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:ke(e,n,nt,st,o,ft)}return;default:if(qs(n)){for(var Xe in a)st=a[Xe],a.hasOwnProperty(Xe)&&st!==void 0&&!o.hasOwnProperty(Xe)&&ch(e,n,Xe,void 0,o,st);for(pt in o)st=o[pt],ft=a[pt],!o.hasOwnProperty(pt)||st===ft||st===void 0&&ft===void 0||ch(e,n,pt,st,o,ft);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!o.hasOwnProperty(Z)&&ke(e,n,Z,null,o,st);for(yt in o)st=o[yt],ft=a[yt],!o.hasOwnProperty(yt)||st===ft||st==null&&ft==null||ke(e,n,yt,st,o,ft)}function L0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $S(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,A=u.duration;if(h&&A&&L0(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],nt=F.startTime;if(nt>A)break;var pt=F.transferSize,yt=F.initiatorType;pt&&L0(yt)&&(F=F.responseEnd,x+=pt*(F<A?1:(A-nt)/(F-nt)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uh=null,fh=null;function mc(e){return e.nodeType===9?e:e.ownerDocument}function N0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function O0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function hh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dh=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===dh?!1:(dh=e,!0):(dh=null,!1)}var P0=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(e){return z0.resolve(null).then(e).catch(iy)}:P0;function iy(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function I0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Io(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Io(a);for(var h=a.firstChild;h;){var x=h.nextSibling,A=h.nodeName;h[fs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Io(e.ownerDocument.body);a=u}while(a);Er(n)}function F0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ph(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ph(a),eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ay(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function sy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function B0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function mh(e){return e.data==="$?"||e.data==="$~"}function gh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ry(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _h=null;function H0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function G0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function V0(e,n,a){switch(n=mc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Io(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);eo(e)}var _i=new Map,k0=new Set;function gc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=z.d;z.d={f:oy,r:ly,D:cy,C:uy,L:fy,m:hy,X:py,S:dy,M:my};function oy(){var e=ga.f(),n=oc();return e||n}function ly(e){var n=Da(e);n!==null&&n.tag===5&&n.type==="form"?rg(n):ga.r(e)}var Sr=typeof document>"u"?null:document;function X0(e,n,a){var o=Sr;if(o&&typeof n=="string"&&n){var u=le(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),k0.has(u)||(k0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),W(n),o.head.appendChild(n)))}}function cy(e){ga.D(e),X0("dns-prefetch",e,null)}function uy(e,n){ga.C(e,n),X0("preconnect",e,n)}function fy(e,n,a){ga.L(e,n,a);var o=Sr;if(o&&e&&n){var u='link[rel="preload"][as="'+le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+le(a.imageSizes)+'"]')):u+='[href="'+le(e)+'"]';var h=u;switch(n){case"style":h=yr(e);break;case"script":h=Mr(e)}_i.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(h))||n==="script"&&o.querySelector(Bo(h))||(n=o.createElement("link"),An(n,"link",e),W(n),o.head.appendChild(n)))}}function hy(e,n){ga.m(e,n);var a=Sr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+le(o)+'"][href="'+le(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Mr(e)}if(!_i.has(h)&&(e=v({rel:"modulepreload",href:e},n),_i.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(h)))return}o=a.createElement("link"),An(o,"link",e),W(o),a.head.appendChild(o)}}}function dy(e,n,a){ga.S(e,n,a);var o=Sr;if(o&&e){var u=C(o).hoistableStyles,h=yr(e);n=n||"default";var x=u.get(h);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Fo(h)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(h))&&vh(e,a);var F=x=o.createElement("link");W(F),An(F,"link",e),F._p=new Promise(function(nt,pt){F.onload=nt,F.onerror=pt}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,_c(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(h,x)}}}function py(e,n){ga.X(e,n);var a=Sr;if(a&&e){var o=C(a).hoistableScripts,u=Mr(e),h=o.get(u);h||(h=a.querySelector(Bo(u)),h||(e=v({src:e,async:!0},n),(n=_i.get(u))&&xh(e,n),h=a.createElement("script"),W(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function my(e,n){ga.M(e,n);var a=Sr;if(a&&e){var o=C(a).hoistableScripts,u=Mr(e),h=o.get(u);h||(h=a.querySelector(Bo(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&xh(e,n),h=a.createElement("script"),W(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function W0(e,n,a,o){var u=(u=tt.current)?gc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=C(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var h=C(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Fo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),h||gy(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=C(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yr(e){return'href="'+le(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function q0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function gy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),W(n),e.head.appendChild(n))}function Mr(e){return'[src="'+le(e)+'"]'}function Bo(e){return"script[async]"+e}function Y0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+le(a.href)+'"]');if(o)return n.instance=o,W(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),W(o),An(o,"style",u),_c(o,a.precedence,e),n.instance=o;case"stylesheet":u=yr(a.href);var h=e.querySelector(Fo(u));if(h)return n.state.loading|=4,n.instance=h,W(h),h;o=q0(a),(u=_i.get(u))&&vh(o,u),h=(e.ownerDocument||e).createElement("link"),W(h);var x=h;return x._p=new Promise(function(A,F){x.onload=A,x.onerror=F}),An(h,"link",o),n.state.loading|=4,_c(h,a.precedence,e),n.instance=h;case"script":return h=Mr(a.src),(u=e.querySelector(Bo(h)))?(n.instance=u,W(u),u):(o=a,(u=_i.get(h))&&(o=v({},a),xh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),W(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,_c(o,a.precedence,e));return n.instance}function _c(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function vh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vc=null;function j0(e,n,a){if(vc===null){var o=new Map,u=vc=new Map;u.set(a,o)}else u=vc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[fs]||h[on]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(h):o.set(x,[h])}}return o}function Z0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _y(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function K0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(o.href),h=n.querySelector(Fo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=xc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,W(h);return}h=n.ownerDocument||n,o=q0(o),(u=_i.get(u))&&vh(o,u),h=h.createElement("link"),W(h);var x=h;x._p=new Promise(function(A,F){x.onload=A,x.onerror=F}),An(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=xc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Sh=0;function xy(e,n){return e.stylesheets&&e.count===0&&yc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Sh===0&&(Sh=62500*$S());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Sh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Sc=null;function yc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sc=new Map,n.forEach(Sy,e),Sc=null,xc.call(e))}function Sy(e,n){if(!(n.state.loading&4)){var a=Sc.get(e);if(a)var o=a.get(null);else{a=new Map,Sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=xc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ho={$$typeof:L,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function yy(e,n,a,o,u,h,x,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function J0(e,n,a,o,u,h,x,A,F,nt,pt,yt){return e=new yy(e,n,a,x,F,nt,pt,yt,A),n=1,h===!0&&(n|=24),h=ti(3,null,null,n),e.current=h,h.stateNode=e,n=Qu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},nf(h),e}function Q0(e){return e?(e=$s,e):$s}function $0(e,n,a,o,u,h){u=Q0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Fa(e,o,n),a!==null&&(qn(a,e,n),vo(a,e,n))}function t_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function yh(e,n){t_(e,n),(e=e.alternate)&&t_(e,n)}function e_(e){if(e.tag===13||e.tag===31){var n=gs(e,67108864);n!==null&&qn(n,e,67108864),yh(e,67108864)}}function n_(e){if(e.tag===13||e.tag===31){var n=si();n=ks(n);var a=gs(e,n);a!==null&&qn(a,e,n),yh(e,n)}}var Mc=!0;function My(e,n,a,o){var u=R.T;R.T=null;var h=z.p;try{z.p=2,Mh(e,n,a,o)}finally{z.p=h,R.T=u}}function Ey(e,n,a,o){var u=R.T;R.T=null;var h=z.p;try{z.p=8,Mh(e,n,a,o)}finally{z.p=h,R.T=u}}function Mh(e,n,a,o){if(Mc){var u=Eh(o);if(u===null)lh(e,n,o,Ec,a),a_(e,o);else if(Ty(u,e,n,a,o))o.stopPropagation();else if(a_(e,o),n&4&&-1<by.indexOf(e)){for(;u!==null;){var h=Da(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Et(h.pendingLanes);if(x!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var F=1<<31-Lt(x);A.entanglements[1]|=F,x&=~F}Fi(h),(Ne&6)===0&&(sc=b()+500,Oo(0))}}break;case 31:case 13:A=gs(h,2),A!==null&&qn(A,h,2),oc(),yh(h,2)}if(h=Eh(o),h===null&&lh(e,n,o,Ec,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else lh(e,n,o,null,a)}}function Eh(e){return e=bu(e),bh(e)}var Ec=null;function bh(e){if(Ec=null,e=wa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ec=e,null}function i_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case dt:return 2;case Mt:return 8;case ct:case wt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Th=!1,Za=null,Ka=null,Ja=null,Go=new Map,Vo=new Map,Qa=[],by="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(e,n){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&e_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ty(e,n,a,o,u){switch(n){case"focusin":return Za=ko(Za,e,n,a,o,u),!0;case"dragenter":return Ka=ko(Ka,e,n,a,o,u),!0;case"mouseover":return Ja=ko(Ja,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Go.set(h,ko(Go.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Vo.set(h,ko(Vo.get(h)||null,e,n,a,o,u)),!0}return!1}function s_(e){var n=wa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ws(e.priority,function(){n_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ws(e.priority,function(){n_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Eu=o,a.target.dispatchEvent(o),Eu=null}else return n=Da(a),n!==null&&e_(n),e.blockedOn=a,!1;n.shift()}return!0}function r_(e,n,a){bc(e)&&a.delete(n)}function Ay(){Th=!1,Za!==null&&bc(Za)&&(Za=null),Ka!==null&&bc(Ka)&&(Ka=null),Ja!==null&&bc(Ja)&&(Ja=null),Go.forEach(r_),Vo.forEach(r_)}function Tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Th||(Th=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ay)))}var Ac=null;function o_(e){Ac!==e&&(Ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ac===e&&(Ac=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(bh(o||a)===null)continue;break}var h=Da(a);h!==null&&(e.splice(n,3),n-=3,Ef(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Er(e){function n(F){return Tc(F,e)}Za!==null&&Tc(Za,e),Ka!==null&&Tc(Ka,e),Ja!==null&&Tc(Ja,e),Go.forEach(n),Vo.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)s_(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[mn]||null;if(typeof h=="function")x||o_(a);else if(x){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[mn]||null)A=x.formAction;else if(bh(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),o_(a)}}}function l_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ah(e){this._internalRoot=e}Rc.prototype.render=Ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();$0(a,o,e,n,null,null)},Rc.prototype.unmount=Ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$0(e.current,2,null,e,null,null),oc(),n[Qi]=null}};function Rc(e){this._internalRoot=e}Rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Oi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&s_(e)}};var c_=t.version;if(c_!=="19.2.4")throw Error(s(527,c_,"19.2.4"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Ry={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{gt=Cc.inject(Ry),bt=Cc}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=gg,h=_g,x=vg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=J0(e,1,!1,null,null,a,o,null,u,h,x,l_),e[Qi]=n.current,oh(e),new Ah(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=gg,x=_g,A=vg,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=J0(e,1,!0,n,a??null,o,u,F,h,x,A,l_),n.context=Q0(null),a=n.current,o=si(),o=ks(o),u=Ia(o),u.callback=null,Fa(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Fi(n),e[Qi]=n.current,oh(e),new Rc(n)},Wo.version="19.2.4",Wo}var x_;function Iy(){if(x_)return wh.exports;x_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),wh.exports=zy(),wh.exports}var Fy=Iy();const By=""+new URL("brick1-CblEgGr6.jpg",import.meta.url).href,Hy=Object.freeze(Object.defineProperty({__proto__:null,default:By},Symbol.toStringTag,{value:"Module"})),Gy=""+new URL("brick2-hWfaQQqu.jpg",import.meta.url).href,Vy=Object.freeze(Object.defineProperty({__proto__:null,default:Gy},Symbol.toStringTag,{value:"Module"})),ky=""+new URL("wood1-BLL9CwBR.jpg",import.meta.url).href,Xy=Object.freeze(Object.defineProperty({__proto__:null,default:ky},Symbol.toStringTag,{value:"Module"})),Wy=""+new URL("wood2-CxJQSYbi.jpg",import.meta.url).href,qy=Object.freeze(Object.defineProperty({__proto__:null,default:Wy},Symbol.toStringTag,{value:"Module"})),Yy=""+new URL("wood3-5pdkI4Gb.jpg",import.meta.url).href,jy=Object.freeze(Object.defineProperty({__proto__:null,default:Yy},Symbol.toStringTag,{value:"Module"}));const pp="183",Ea={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zy=0,S_=1,Ky=2,ou=1,Nv=2,tl=3,cs=0,Kn=1,Vi=2,ba=0,Gr=1,y_=2,M_=3,E_=4,Jy=5,Ps=100,Qy=101,$y=102,tM=103,eM=104,nM=200,iM=201,aM=202,sM=203,xd=204,Sd=205,rM=206,oM=207,lM=208,cM=209,uM=210,fM=211,hM=212,dM=213,pM=214,yd=0,Md=1,Ed=2,kr=3,bd=4,Td=5,Ad=6,Rd=7,Ov=0,mM=1,gM=2,Wi=0,Pv=1,zv=2,Iv=3,Fv=4,Bv=5,Hv=6,Gv=7,Vv=300,Bs=301,Xr=302,Nh=303,Oh=304,xu=306,du=1e3,Ma=1001,Cd=1002,Rn=1003,_M=1004,wc=1005,Nn=1006,Ph=1007,Is=1008,li=1009,kv=1010,Xv=1011,ol=1012,mp=1013,ji=1014,ki=1015,Aa=1016,gp=1017,_p=1018,ll=1020,Wv=35902,qv=35899,Yv=1021,jv=1022,Ni=1023,Ra=1026,Fs=1027,Zv=1028,vp=1029,Wr=1030,xp=1031,Sp=1033,lu=33776,cu=33777,uu=33778,fu=33779,wd=35840,Dd=35841,Ud=35842,Ld=35843,Nd=36196,Od=37492,Pd=37496,zd=37488,Id=37489,Fd=37490,Bd=37491,Hd=37808,Gd=37809,Vd=37810,kd=37811,Xd=37812,Wd=37813,qd=37814,Yd=37815,jd=37816,Zd=37817,Kd=37818,Jd=37819,Qd=37820,$d=37821,tp=36492,ep=36494,np=36495,ip=36283,ap=36284,sp=36285,rp=36286,vM=3200,Kv=0,xM=1,os="",xi="srgb",qr="srgb-linear",pu="linear",He="srgb",br=7680,b_=519,SM=512,yM=513,MM=514,yp=515,EM=516,bM=517,Mp=518,TM=519,T_=35044,A_="300 es",Xi=2e3,cl=2001;function AM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ul(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function RM(){const r=ul("canvas");return r.style.display="block",r}const R_={};function C_(...r){const t="THREE."+r.shift();console.log(t,...r)}function Jv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ie(...r){r=Jv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Le(...r){r=Jv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function mu(...r){const t=r.join(" ");t in R_||(R_[t]=!0,ie(...r))}function CM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const wM={[yd]:Md,[Ed]:Ad,[bd]:Rd,[kr]:Td,[Md]:yd,[Ad]:Ed,[Rd]:bd,[Td]:kr};class Gs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],il=Math.PI/180,op=180/Math.PI;function Zr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function ve(r,t,i){return Math.max(t,Math.min(i,r))}function DM(r,t){return(r%t+t)%t}function zh(r,t,i){return(1-i)*r+i*t}function qo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const UM={DEG2RAD:il};class Vt{constructor(t=0,i=0){Vt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class us{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],S=c[f+1],E=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==S||_!==E){let M=m*g+p*S+_*E+v*w;M<0&&(g=-g,S=-S,E=-E,w=-w,M=-M);let y=1-d;if(M<.9995){const D=Math.acos(M),L=Math.sin(D);y=Math.sin(y*D)/L,d=Math.sin(d*D)/L,m=m*y+g*d,p=p*y+S*d,_=_*y+E*d,v=v*y+w*d}else{m=m*y+g*d,p=p*y+S*d,_=_*y+E*d,v=v*y+w*d;const D=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=D,p*=D,_*=D,v*=D}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+_*v+m*S-p*g,t[i+1]=m*E+_*g+p*v-d*S,t[i+2]=p*E+_*S+d*g-m*v,t[i+3]=_*E-d*v-m*g-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),g=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+d+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,i=0,s=0){q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(w_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(w_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ih.copy(this).projectOnVector(t),this.sub(Ih)}reflect(t){return this.sub(Ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ih=new q,w_=new us;class ge{constructor(t,i,s,l,c,f,d,m,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],S=s[5],E=s[8],w=l[0],M=l[3],y=l[6],D=l[1],L=l[4],U=l[7],V=l[2],I=l[5],H=l[8];return c[0]=f*w+d*D+m*V,c[3]=f*M+d*L+m*I,c[6]=f*y+d*U+m*H,c[1]=p*w+_*D+v*V,c[4]=p*M+_*L+v*I,c[7]=p*y+_*U+v*H,c[2]=g*w+S*D+E*V,c[5]=g*M+S*L+E*I,c[8]=g*y+S*U+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,g=d*m-_*c,S=p*c-f*m,E=i*v+s*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*f)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=S*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Fh.makeScale(t,i)),this}rotate(t){return this.premultiply(Fh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Fh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fh=new ge,D_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LM(){const r={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===He&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===He&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===os?pu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return mu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return mu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[qr]:{primaries:t,whitePoint:s,transfer:pu,toXYZ:D_,fromXYZ:U_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:s,transfer:He,toXYZ:D_,fromXYZ:U_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const Ce=LM();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class NM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Tr===void 0&&(Tr=ul("canvas")),Tr.width=t.width,Tr.height=t.height;const l=Tr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ul("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ta(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let OM=0;class Ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Bh(l[f].image)):c.push(Bh(l[f]))}else c=Bh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Bh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?NM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let PM=0;const Hh=new q;class On extends Gs{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=Ma,l=Ma,c=Nn,f=Is,d=Ni,m=li,p=On.DEFAULT_ANISOTROPY,_=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Zr(),this.name="",this.source=new Ep(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case du:t.x=t.x-Math.floor(t.x);break;case Ma:t.x=t.x<0?0:1;break;case Cd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case du:t.y=t.y-Math.floor(t.y);break;case Ma:t.y=t.y<0?0:1;break;case Cd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Vv;On.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],w=m[2],M=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(S+1)/2,V=(y+1)/2,I=(_+g)/4,H=(v+w)/4,T=(E+M)/4;return L>U&&L>V?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=I/s,c=H/s):U>V?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=I/l,c=T/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=H/c,l=T/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-E)*(M-E)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(v-w)/D,this.z=(g-_)/D,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends Gs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new On(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ep(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends zM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Qv extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IM extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $e{constructor(t,i,s,l,c,f,d,m,p,_,v,g,S,E,w,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,v,g,S,E,w,M)}set(t,i,s,l,c,f,d,m,p,_,v,g,S,E,w,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=d,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ar.setFromMatrixColumn(t,0).length(),c=1/Ar.setFromMatrixColumn(t,1).length(),f=1/Ar.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,S=f*v,E=d*_,w=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,S=m*v,E=p*_,w=p*v;i[0]=g+w*d,i[4]=E*d-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=S*d-E,i[6]=w+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,S=m*v,E=p*_,w=p*v;i[0]=g-w*d,i[4]=-f*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*_,i[9]=w-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,S=f*v,E=d*_,w=d*v;i[0]=m*_,i[4]=E*p-S,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,S=f*p,E=d*m,w=d*p;i[0]=m*_,i[4]=w-g*v,i[8]=E*v+S,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*v+E,i[10]=g-w*v}else if(t.order==="XZY"){const g=f*m,S=f*p,E=d*m,w=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+w,i[5]=f*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(FM,t,BM)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ts.crossVectors(s,ri),ts.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ts.crossVectors(s,ri)),ts.normalize(),Dc.crossVectors(ri,ts),l[0]=ts.x,l[4]=Dc.x,l[8]=ri.x,l[1]=ts.y,l[5]=Dc.y,l[9]=ri.y,l[2]=ts.z,l[6]=Dc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],S=s[13],E=s[2],w=s[6],M=s[10],y=s[14],D=s[3],L=s[7],U=s[11],V=s[15],I=l[0],H=l[4],T=l[8],O=l[12],mt=l[1],G=l[5],Q=l[9],rt=l[13],ot=l[2],at=l[6],R=l[10],z=l[14],K=l[3],$=l[7],_t=l[11],N=l[15];return c[0]=f*I+d*mt+m*ot+p*K,c[4]=f*H+d*G+m*at+p*$,c[8]=f*T+d*Q+m*R+p*_t,c[12]=f*O+d*rt+m*z+p*N,c[1]=_*I+v*mt+g*ot+S*K,c[5]=_*H+v*G+g*at+S*$,c[9]=_*T+v*Q+g*R+S*_t,c[13]=_*O+v*rt+g*z+S*N,c[2]=E*I+w*mt+M*ot+y*K,c[6]=E*H+w*G+M*at+y*$,c[10]=E*T+w*Q+M*R+y*_t,c[14]=E*O+w*rt+M*z+y*N,c[3]=D*I+L*mt+U*ot+V*K,c[7]=D*H+L*G+U*at+V*$,c[11]=D*T+L*Q+U*R+V*_t,c[15]=D*O+L*rt+U*z+V*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],S=t[14],E=t[3],w=t[7],M=t[11],y=t[15],D=m*S-p*g,L=d*S-p*v,U=d*g-m*v,V=f*S-p*_,I=f*g-m*_,H=f*v-d*_;return i*(w*D-M*L+y*U)-s*(E*D-M*V+y*I)+l*(E*L-w*V+y*H)-c*(E*U-w*I+M*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],S=t[11],E=t[12],w=t[13],M=t[14],y=t[15],D=i*d-s*f,L=i*m-l*f,U=i*p-c*f,V=s*m-l*d,I=s*p-c*d,H=l*p-c*m,T=_*w-v*E,O=_*M-g*E,mt=_*y-S*E,G=v*M-g*w,Q=v*y-S*w,rt=g*y-S*M,ot=D*rt-L*Q+U*G+V*mt-I*O+H*T;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const at=1/ot;return t[0]=(d*rt-m*Q+p*G)*at,t[1]=(l*Q-s*rt-c*G)*at,t[2]=(w*H-M*I+y*V)*at,t[3]=(g*I-v*H-S*V)*at,t[4]=(m*mt-f*rt-p*O)*at,t[5]=(i*rt-l*mt+c*O)*at,t[6]=(M*U-E*H-y*L)*at,t[7]=(_*H-g*U+S*L)*at,t[8]=(f*Q-d*mt+p*T)*at,t[9]=(s*mt-i*Q-c*T)*at,t[10]=(E*I-w*U+y*D)*at,t[11]=(v*U-_*I-S*D)*at,t[12]=(d*O-f*G-m*T)*at,t[13]=(i*G-s*O+l*T)*at,t[14]=(w*L-E*V-M*D)*at,t[15]=(_*V-v*L+g*D)*at,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,v=d+d,g=c*p,S=c*_,E=c*v,w=f*_,M=f*v,y=d*v,D=m*p,L=m*_,U=m*v,V=s.x,I=s.y,H=s.z;return l[0]=(1-(w+y))*V,l[1]=(S+U)*V,l[2]=(E-L)*V,l[3]=0,l[4]=(S-U)*I,l[5]=(1-(g+y))*I,l[6]=(M+D)*I,l[7]=0,l[8]=(E+L)*H,l[9]=(M-D)*H,l[10]=(1-(g+w))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ar.set(l[0],l[1],l[2]).length();const d=Ar.set(l[4],l[5],l[6]).length(),m=Ar.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Di.copy(this);const p=1/f,_=1/d,v=1/m;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=_,Di.elements[5]*=_,Di.elements[6]*=_,Di.elements[8]*=v,Di.elements[9]*=v,Di.elements[10]*=v,i.setFromRotationMatrix(Di),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=Xi,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),S=(s+l)/(s-l);let E,w;if(m)E=c/(f-c),w=f*c/(f-c);else if(d===Xi)E=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(d===cl)E=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Xi,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,w;if(m)E=1/(f-c),w=f/(f-c);else if(d===Xi)E=-2/(f-c),w=-(f+c)/(f-c);else if(d===cl)E=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Ar=new q,Di=new $e,FM=new q(0,0,0),BM=new q(1,1,1),ts=new q,Dc=new q,ri=new q,L_=new $e,N_=new us;class Zi{constructor(t=0,i=0,s=0,l=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return L_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(L_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return N_.setFromEuler(this),this.setFromQuaternion(N_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class $v{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let HM=0;const O_=new q,Rr=new us,_a=new $e,Uc=new q,Yo=new q,GM=new q,VM=new us,P_=new q(1,0,0),z_=new q(0,1,0),I_=new q(0,0,1),F_={type:"added"},kM={type:"removed"},Cr={type:"childadded",child:null},Gh={type:"childremoved",child:null};class Cn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new q,i=new Zi,s=new us,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new ge}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(P_,t)}rotateY(t){return this.rotateOnAxis(z_,t)}rotateZ(t){return this.rotateOnAxis(I_,t)}translateOnAxis(t,i){return O_.copy(t).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(P_,t)}translateY(t){return this.translateOnAxis(z_,t)}translateZ(t){return this.translateOnAxis(I_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Uc.copy(t):Uc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(Yo,Uc,this.up):_a.lookAt(Uc,Yo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(_a),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(F_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(kM),Gh.child=t,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(F_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,GM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,VM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new q(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hr extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),y=this._getHandJoint(p,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Hr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function kh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class xe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=DM(t,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=kh(f,c,t+1/3),this.g=kh(f,c,t),this.b=kh(f,c,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ie("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const s=tx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Ce.workingToColorSpace(Ln.copy(this),t),Math.round(ve(Ln.r*255,0,255))*65536+Math.round(ve(Ln.g*255,0,255))*256+Math.round(ve(Ln.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=xi){Ce.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(es),this.setHSL(es.h+t,es.s+i,es.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(es),t.getHSL(Lc);const s=zh(es.h,Lc.h,i),l=zh(es.s,Lc.s,i),c=zh(es.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new xe;xe.NAMES=tx;class WM extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new q,va=new q,Xh=new q,xa=new q,wr=new q,Dr=new q,B_=new q,Wh=new q,qh=new q,Yh=new q,jh=new an,Zh=new an,Kh=new an;class yi{constructor(t=new q,i=new q,s=new q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ui.subVectors(l,i),va.subVectors(s,i),Xh.subVectors(t,i);const f=Ui.dot(Ui),d=Ui.dot(va),m=Ui.dot(Xh),p=va.dot(va),_=va.dot(Xh),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-d*_)*g,E=(f*_-d*m)*g;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(f,xa.y),m.addScaledVector(d,xa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return jh.setScalar(0),Zh.setScalar(0),Kh.setScalar(0),jh.fromBufferAttribute(t,i),Zh.fromBufferAttribute(t,s),Kh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(jh,c.x),f.addScaledVector(Zh,c.y),f.addScaledVector(Kh,c.z),f}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),va.subVectors(t,i),Ui.cross(va).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ui.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;wr.subVectors(l,s),Dr.subVectors(c,s),Wh.subVectors(t,s);const m=wr.dot(Wh),p=Dr.dot(Wh);if(m<=0&&p<=0)return i.copy(s);qh.subVectors(t,l);const _=wr.dot(qh),v=Dr.dot(qh);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(wr,f);Yh.subVectors(t,c);const S=wr.dot(Yh),E=Dr.dot(Yh);if(E>=0&&S<=E)return i.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Dr,d);const M=_*E-S*v;if(M<=0&&v-_>=0&&S-E>=0)return B_.subVectors(c,l),d=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(B_,d);const y=1/(M+w+g);return f=w*y,d=g*y,i.copy(s).addScaledVector(wr,f).addScaledVector(Dr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Kr{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Li.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Li):Li.fromBufferAttribute(c,f),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nc.copy(s.boundingBox)),Nc.applyMatrix4(t.matrixWorld),this.union(Nc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Oc.subVectors(this.max,jo),Ur.subVectors(t.a,jo),Lr.subVectors(t.b,jo),Nr.subVectors(t.c,jo),ns.subVectors(Lr,Ur),is.subVectors(Nr,Lr),ws.subVectors(Ur,Nr);let i=[0,-ns.z,ns.y,0,-is.z,is.y,0,-ws.z,ws.y,ns.z,0,-ns.x,is.z,0,-is.x,ws.z,0,-ws.x,-ns.y,ns.x,0,-is.y,is.x,0,-ws.y,ws.x,0];return!Jh(i,Ur,Lr,Nr,Oc)||(i=[1,0,0,0,1,0,0,0,1],!Jh(i,Ur,Lr,Nr,Oc))?!1:(Pc.crossVectors(ns,is),i=[Pc.x,Pc.y,Pc.z],Jh(i,Ur,Lr,Nr,Oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sa=[new q,new q,new q,new q,new q,new q,new q,new q],Li=new q,Nc=new Kr,Ur=new q,Lr=new q,Nr=new q,ns=new q,is=new q,ws=new q,jo=new q,Oc=new q,Pc=new q,Ds=new q;function Jh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ds.fromArray(r,c);const d=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=t.dot(Ds),p=i.dot(Ds),_=s.dot(Ds);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const pn=new q,zc=new Vt;let qM=0;class Yi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=T_,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)zc.fromBufferAttribute(this,i),zc.applyMatrix3(t),this.setXY(i,zc.x,zc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=qo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=qo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=qo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=qo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=qo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==T_&&(t.usage=this.usage),t}}class ex extends Yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class nx extends Yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class wn extends Yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const YM=new Kr,Zo=new q,Qh=new q;class Su{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):YM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Qh)),this.expandByPoint(Zo.copy(t.center).sub(Qh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let jM=0;const vi=new $e,$h=new Cn,Or=new q,oi=new Kr,Ko=new Kr,Mn=new q;class ci extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(AM(t)?nx:ex)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ge().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,s){return vi.makeTranslation(t,i,s),this.applyMatrix4(vi),this}scale(t,i,s){return vi.makeScale(t,i,s),this.applyMatrix4(vi),this}lookAt(t){return $h.lookAt(t),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new wn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ko.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(oi.min,Ko.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,Ko.max),oi.expandByPoint(Mn)):(oi.expandByPoint(Ko.min),oi.expandByPoint(Ko.max))}oi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Mn.fromBufferAttribute(d,p),m&&(Or.fromBufferAttribute(t,p),Mn.add(Or)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new q,m[T]=new q;const p=new q,_=new q,v=new q,g=new Vt,S=new Vt,E=new Vt,w=new q,M=new q;function y(T,O,mt){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,O),v.fromBufferAttribute(s,mt),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,O),E.fromBufferAttribute(c,mt),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(G),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(G),d[T].add(w),d[O].add(w),d[mt].add(w),m[T].add(M),m[O].add(M),m[mt].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,O=D.length;T<O;++T){const mt=D[T],G=mt.start,Q=mt.count;for(let rt=G,ot=G+Q;rt<ot;rt+=3)y(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new q,U=new q,V=new q,I=new q;function H(T){V.fromBufferAttribute(l,T),I.copy(V);const O=d[T];L.copy(O),L.sub(V.multiplyScalar(V.dot(O))).normalize(),U.crossVectors(I,O);const G=U.dot(m[T])<0?-1:1;f.setXYZW(T,L.x,L.y,L.z,G)}for(let T=0,O=D.length;T<O;++T){const mt=D[T],G=mt.start,Q=mt.count;for(let rt=G,ot=G+Q;rt<ot;rt+=3)H(t.getX(rt+0)),H(t.getX(rt+1)),H(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new q,c=new q,f=new q,d=new q,m=new q,p=new q,_=new q,v=new q;if(t)for(let g=0,S=t.count;g<S;g+=3){const E=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?S=m[w]*d.data.stride+d.offset:S=m[w]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new Yi(g,_,v)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ci,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=t(g,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ZM=0;class Jr extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=Gr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=Sd,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==cs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xd&&(s.blendSrc=this.blendSrc),this.blendDst!==Sd&&(s.blendDst=this.blendDst),this.blendEquation!==Ps&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(s.stencilFail=this.stencilFail),this.stencilZFail!==br&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ya=new q,td=new q,Ic=new q,as=new q,ed=new q,Fc=new q,nd=new q;class bp{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){td.copy(t).add(i).multiplyScalar(.5),Ic.copy(i).sub(t).normalize(),as.copy(this.origin).sub(td);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Ic),d=as.dot(this.direction),m=-as.dot(Ic),p=as.lengthSq(),_=Math.abs(1-f*f);let v,g,S,E;if(_>0)if(v=f*m-d,g=f*d-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const w=1/_;v*=w,g*=w,S=v*(v+f*g+2*d)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(td).addScaledVector(Ic,g),S}intersectSphere(t,i){ya.subVectors(t.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,s,l,c){ed.subVectors(i,t),Fc.subVectors(s,t),nd.crossVectors(ed,Fc);let f=this.direction.dot(nd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;as.subVectors(this.origin,t);const m=d*this.direction.dot(Fc.crossVectors(as,Fc));if(m<0)return null;const p=d*this.direction.dot(ed.cross(as));if(p<0||m+p>f)return null;const _=-d*as.dot(nd);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ix extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const H_=new $e,Us=new bp,Bc=new Su,G_=new q,Hc=new q,Gc=new q,Vc=new q,id=new q,kc=new q,V_=new q,Xc=new q;class Mi extends Cn{constructor(t=new ci,i=new ix){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){kc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(id.fromBufferAttribute(v,t),f?kc.addScaledVector(id,_):kc.addScaledVector(id.sub(i),_))}i.add(kc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),Us.copy(t.ray).recast(t.near),!(Bc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Bc,G_)===null||Us.origin.distanceToSquared(G_)>(t.far-t.near)**2))&&(H_.copy(c).invert(),Us.copy(t.ray).applyMatrix4(H_),!(s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Us)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],y=f[M.materialIndex],D=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let U=D,V=L;U<V;U+=3){const I=d.getX(U),H=d.getX(U+1),T=d.getX(U+2);l=Wc(this,y,t,s,p,_,v,I,H,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let M=E,y=w;M<y;M+=3){const D=d.getX(M),L=d.getX(M+1),U=d.getX(M+2);l=Wc(this,f,t,s,p,_,v,D,L,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=g.length;E<w;E++){const M=g[E],y=f[M.materialIndex],D=Math.max(M.start,S.start),L=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let U=D,V=L;U<V;U+=3){const I=U,H=U+1,T=U+2;l=Wc(this,y,t,s,p,_,v,I,H,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=E,y=w;M<y;M+=3){const D=M,L=M+1,U=M+2;l=Wc(this,f,t,s,p,_,v,D,L,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function KM(r,t,i,s,l,c,f,d){let m;if(t.side===Kn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===cs,d),m===null)return null;Xc.copy(d),Xc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Xc);return p<i.near||p>i.far?null:{distance:p,point:Xc.clone(),object:r}}function Wc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Hc),r.getVertexPosition(m,Gc),r.getVertexPosition(p,Vc);const _=KM(r,t,i,s,Hc,Gc,Vc,V_);if(_){const v=new q;yi.getBarycoord(V_,Hc,Gc,Vc,v),l&&(_.uv=yi.getInterpolatedAttribute(l,d,m,p,v,new Vt)),c&&(_.uv1=yi.getInterpolatedAttribute(c,d,m,p,v,new Vt)),f&&(_.normal=yi.getInterpolatedAttribute(f,d,m,p,v,new q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new q,materialIndex:0};yi.getNormal(Hc,Gc,Vc,g.normal),_.face=g,_.barycoord=v}return _}class JM extends On{constructor(t=null,i=1,s=1,l,c,f,d,m,p=Rn,_=Rn,v,g){super(null,f,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ad=new q,QM=new q,$M=new ge;class rs{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=ad.subVectors(s,i).cross(QM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(ad),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||$M.getNormalMatrix(t),l=this.coplanarPoint(ad).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Su,tE=new Vt(.5,.5),qc=new q;class Tp{constructor(t=new rs,i=new rs,s=new rs,l=new rs,c=new rs,f=new rs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Xi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],w=c[9],M=c[10],y=c[11],D=c[12],L=c[13],U=c[14],V=c[15];if(l[0].setComponents(p-f,S-_,y-E,V-D).normalize(),l[1].setComponents(p+f,S+_,y+E,V+D).normalize(),l[2].setComponents(p+d,S+v,y+w,V+L).normalize(),l[3].setComponents(p-d,S-v,y-w,V-L).normalize(),s)l[4].setComponents(m,g,M,U).normalize(),l[5].setComponents(p-m,S-g,y-M,V-U).normalize();else if(l[4].setComponents(p-m,S-g,y-M,V-U).normalize(),i===Xi)l[5].setComponents(p+m,S+g,y+M,V+U).normalize();else if(i===cl)l[5].setComponents(m,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const i=tE.distanceTo(t.center);return Ls.radius=.7071067811865476+i,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(qc.x=l.normal.x>0?t.max.x:t.min.x,qc.y=l.normal.y>0?t.max.y:t.min.y,qc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(qc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gu extends Jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _u=new q,vu=new q,k_=new $e,Jo=new bp,Yc=new Su,sd=new q,X_=new q;class eE extends Cn{constructor(t=new ci,i=new gu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)_u.fromBufferAttribute(i,l-1),vu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=_u.distanceTo(vu);t.setAttribute("lineDistance",new wn(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),Yc.radius+=c,t.ray.intersectsSphere(Yc)===!1)return;k_.copy(l).invert(),Jo.copy(t.ray).applyMatrix4(k_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let w=S,M=E-1;w<M;w+=p){const y=_.getX(w),D=_.getX(w+1),L=jc(this,t,Jo,m,y,D,w);L&&i.push(L)}if(this.isLineLoop){const w=_.getX(E-1),M=_.getX(S),y=jc(this,t,Jo,m,w,M,E-1);y&&i.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let w=S,M=E-1;w<M;w+=p){const y=jc(this,t,Jo,m,w,w+1,w);y&&i.push(y)}if(this.isLineLoop){const w=jc(this,t,Jo,m,E-1,S,E-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function jc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(_u.fromBufferAttribute(d,l),vu.fromBufferAttribute(d,c),i.distanceSqToSegment(_u,vu,sd,X_)>s)return;sd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(sd);if(!(p<t.near||p>t.far))return{distance:p,point:X_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const W_=new q,q_=new q;class lp extends eE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)W_.fromBufferAttribute(i,l),q_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+W_.distanceTo(q_);t.setAttribute("lineDistance",new wn(s,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ax extends On{constructor(t=[],i=Bs,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fl extends On{constructor(t,i,s=ji,l,c,f,d=Rn,m=Rn,p,_=Ra,v=1){if(_!==Ra&&_!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class nE extends fl{constructor(t,i=ji,s=Bs,l,c,f=Rn,d=Rn,m,p=Ra){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sx extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qr extends ci{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new wn(p,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(v,2));function E(w,M,y,D,L,U,V,I,H,T,O){const mt=U/H,G=V/T,Q=U/2,rt=V/2,ot=I/2,at=H+1,R=T+1;let z=0,K=0;const $=new q;for(let _t=0;_t<R;_t++){const N=_t*G-rt;for(let j=0;j<at;j++){const ht=j*mt-Q;$[w]=ht*D,$[M]=N*L,$[y]=ot,p.push($.x,$.y,$.z),$[w]=0,$[M]=0,$[y]=I>0?1:-1,_.push($.x,$.y,$.z),v.push(j/H),v.push(1-_t/T),z+=1}}for(let _t=0;_t<T;_t++)for(let N=0;N<H;N++){const j=g+N+at*_t,ht=g+N+at*(_t+1),Rt=g+(N+1)+at*(_t+1),Gt=g+(N+1)+at*_t;m.push(j,ht,Gt),m.push(ht,Rt,Gt),K+=6}d.addGroup(S,K,O),S+=K,g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const Zc=new q,Kc=new q,rd=new q,Jc=new yi;class Y_ extends ci{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(il*i),f=t.getIndex(),d=t.getAttribute("position"),m=f?f.count:d.count,p=[0,0,0],_=["a","b","c"],v=new Array(3),g={},S=[];for(let E=0;E<m;E+=3){f?(p[0]=f.getX(E),p[1]=f.getX(E+1),p[2]=f.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:w,b:M,c:y}=Jc;if(w.fromBufferAttribute(d,p[0]),M.fromBufferAttribute(d,p[1]),y.fromBufferAttribute(d,p[2]),Jc.getNormal(rd),v[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,v[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,v[2]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let D=0;D<3;D++){const L=(D+1)%3,U=v[D],V=v[L],I=Jc[_[D]],H=Jc[_[L]],T=`${U}_${V}`,O=`${V}_${U}`;O in g&&g[O]?(rd.dot(g[O].normal)<=c&&(S.push(I.x,I.y,I.z),S.push(H.x,H.y,H.z)),g[O]=null):T in g||(g[T]={index0:p[D],index1:p[L],normal:rd.clone()})}}for(const E in g)if(g[E]){const{index0:w,index1:M}=g[E];Zc.fromBufferAttribute(d,w),Kc.fromBufferAttribute(d,M),S.push(Zc.x,Zc.y,Zc.z),S.push(Kc.x,Kc.y,Kc.z)}this.setAttribute("position",new wn(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ie("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,S=(f-_)/g;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new Vt:new q);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new q,l=[],c=[],f=[],d=new q,m=new $e;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new q)}c[0]=new q,f[0]=new q;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(ve(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,E))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(ve(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ap extends Ji{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Vt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=m-this.aX,S=p-this.aY;m=g*_-S*v+this.aX,p=g*v+S*_+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class iE extends Ap{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Rp(){let r=0,t=0,i=0,s=0;function l(c,f,d,m){r=c,t=d,i=-3*c+3*f-2*d-m,s=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,_,v){let g=(f-c)/p-(d-c)/(p+_)+(d-f)/_,S=(d-f)/_-(m-f)/(_+v)+(m-d)/v;g*=_,S*=_,l(f,d,g,S)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const Qc=new q,od=new Rp,ld=new Rp,cd=new Rp;class aE extends Ji{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new q){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(Qc.subVectors(l[0],l[1]).add(l[0]),p=Qc);const v=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(Qc.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=Qc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),S),w=Math.pow(v.distanceToSquared(g),S),M=Math.pow(g.distanceToSquared(_),S);w<1e-4&&(w=1),E<1e-4&&(E=w),M<1e-4&&(M=w),od.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,w,M),ld.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,w,M),cd.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,w,M)}else this.curveType==="catmullrom"&&(od.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),ld.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),cd.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(od.calc(m),ld.calc(m),cd.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function j_(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+f)*m+(-3*i+3*s-2*c-f)*d+c*r+i}function sE(r,t){const i=1-r;return i*i*t}function rE(r,t){return 2*(1-r)*r*t}function oE(r,t){return r*r*t}function al(r,t,i,s){return sE(r,t)+rE(r,i)+oE(r,s)}function lE(r,t){const i=1-r;return i*i*i*t}function cE(r,t){const i=1-r;return 3*i*i*r*t}function uE(r,t){return 3*(1-r)*r*r*t}function fE(r,t){return r*r*r*t}function sl(r,t,i,s,l){return lE(r,t)+cE(r,i)+uE(r,s)+fE(r,l)}class rx extends Ji{constructor(t=new Vt,i=new Vt,s=new Vt,l=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Vt){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(sl(t,l.x,c.x,f.x,d.x),sl(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hE extends Ji{constructor(t=new q,i=new q,s=new q,l=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new q){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(sl(t,l.x,c.x,f.x,d.x),sl(t,l.y,c.y,f.y,d.y),sl(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ox extends Ji{constructor(t=new Vt,i=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Vt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Vt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dE extends Ji{constructor(t=new q,i=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new q){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lx extends Ji{constructor(t=new Vt,i=new Vt,s=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Vt){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(al(t,l.x,c.x,f.x),al(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pE extends Ji{constructor(t=new q,i=new q,s=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new q){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(al(t,l.x,c.x,f.x),al(t,l.y,c.y,f.y),al(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cx extends Ji{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Vt){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],_=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(j_(d,m.x,p.x,_.x,v.x),j_(d,m.y,p.y,_.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Vt().fromArray(l))}return this}}var Z_=Object.freeze({__proto__:null,ArcCurve:iE,CatmullRomCurve3:aE,CubicBezierCurve:rx,CubicBezierCurve3:hE,EllipseCurve:Ap,LineCurve:ox,LineCurve3:dE,QuadraticBezierCurve:lx,QuadraticBezierCurve3:pE,SplineCurve:cx});class mE extends Ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Z_[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,d=this.curves[c],m=d.getLength(),p=m===0?0:1-f/m;return d.getPointAt(p,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(d);for(let p=0;p<m.length;p++){const _=m[p];s&&s.equals(_)||(i.push(_),s=_)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new Z_[l.type]().fromJSON(l))}return this}}class K_ extends mE{constructor(t){super(),this.type="Path",this.currentPoint=new Vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new ox(this.currentPoint.clone(),new Vt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new lx(this.currentPoint.clone(),new Vt(t,i),new Vt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,f){const d=new rx(this.currentPoint.clone(),new Vt(t,i),new Vt(s,l),new Vt(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new cx(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,f){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,i+m,s,l,c,f),this}absarc(t,i,s,l,c,f){return this.absellipse(t,i,s,s,l,c,f),this}ellipse(t,i,s,l,c,f,d,m){const p=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(t+p,i+_,s,l,c,f,d,m),this}absellipse(t,i,s,l,c,f,d,m){const p=new Ap(t,i,s,l,c,f,d,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const _=p.getPoint(1);return this.currentPoint.copy(_),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ux extends K_{constructor(t){super(t),this.uuid=Zr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new K_().fromJSON(l))}return this}}function gE(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=fx(r,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,m,p;if(s&&(c=yE(r,t,c,i)),r.length>80*i){d=r[0],m=r[1];let _=d,v=m;for(let g=i;g<l;g+=i){const S=r[g],E=r[g+1];S<d&&(d=S),E<m&&(m=E),S>_&&(_=S),E>v&&(v=E)}p=Math.max(_-d,v-m),p=p!==0?32767/p:0}return hl(c,f,i,d,m,p,0),f}function fx(r,t,i,s,l){let c;if(l===LE(r,t,i,s)>0)for(let f=t;f<i;f+=s)c=J_(f/s|0,r[f],r[f+1],c);else for(let f=i-s;f>=t;f-=s)c=J_(f/s|0,r[f],r[f+1],c);return c&&Yr(c,c.next)&&(pl(c),c=c.next),c}function Hs(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(Yr(i,i.next)||tn(i.prev,i,i.next)===0)){if(pl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function hl(r,t,i,s,l,c,f){if(!r)return;!f&&c&&AE(r,s,l,c);let d=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?vE(r,s,l,c):_E(r)){t.push(m.i,r.i,p.i),pl(r),r=p.next,d=p.next;continue}if(r=p,r===d){f?f===1?(r=xE(Hs(r),t),hl(r,t,i,s,l,c,2)):f===2&&SE(r,t,i,s,l,c):hl(Hs(r),t,i,s,l,c,1);break}}}function _E(r){const t=r.prev,i=r,s=r.next;if(tn(t,i,s)>=0)return!1;const l=t.x,c=i.x,f=s.x,d=t.y,m=i.y,p=s.y,_=Math.min(l,c,f),v=Math.min(d,m,p),g=Math.max(l,c,f),S=Math.max(d,m,p);let E=s.next;for(;E!==t;){if(E.x>=_&&E.x<=g&&E.y>=v&&E.y<=S&&el(l,d,c,m,f,p,E.x,E.y)&&tn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function vE(r,t,i,s){const l=r.prev,c=r,f=r.next;if(tn(l,c,f)>=0)return!1;const d=l.x,m=c.x,p=f.x,_=l.y,v=c.y,g=f.y,S=Math.min(d,m,p),E=Math.min(_,v,g),w=Math.max(d,m,p),M=Math.max(_,v,g),y=cp(S,E,t,i,s),D=cp(w,M,t,i,s);let L=r.prevZ,U=r.nextZ;for(;L&&L.z>=y&&U&&U.z<=D;){if(L.x>=S&&L.x<=w&&L.y>=E&&L.y<=M&&L!==l&&L!==f&&el(d,_,m,v,p,g,L.x,L.y)&&tn(L.prev,L,L.next)>=0||(L=L.prevZ,U.x>=S&&U.x<=w&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&el(d,_,m,v,p,g,U.x,U.y)&&tn(U.prev,U,U.next)>=0))return!1;U=U.nextZ}for(;L&&L.z>=y;){if(L.x>=S&&L.x<=w&&L.y>=E&&L.y<=M&&L!==l&&L!==f&&el(d,_,m,v,p,g,L.x,L.y)&&tn(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;U&&U.z<=D;){if(U.x>=S&&U.x<=w&&U.y>=E&&U.y<=M&&U!==l&&U!==f&&el(d,_,m,v,p,g,U.x,U.y)&&tn(U.prev,U,U.next)>=0)return!1;U=U.nextZ}return!0}function xE(r,t){let i=r;do{const s=i.prev,l=i.next.next;!Yr(s,l)&&dx(s,i,i.next,l)&&dl(s,l)&&dl(l,s)&&(t.push(s.i,i.i,l.i),pl(i),pl(i.next),i=r=l),i=i.next}while(i!==r);return Hs(i)}function SE(r,t,i,s,l,c){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&wE(f,d)){let m=px(f,d);f=Hs(f,f.next),m=Hs(m,m.next),hl(f,t,i,s,l,c,0),hl(m,t,i,s,l,c,0);return}d=d.next}f=f.next}while(f!==r)}function yE(r,t,i,s){const l=[];for(let c=0,f=t.length;c<f;c++){const d=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=fx(r,d,m,s,!1);p===p.next&&(p.steiner=!0),l.push(CE(p))}l.sort(ME);for(let c=0;c<l.length;c++)i=EE(l[c],i);return i}function ME(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function EE(r,t){const i=bE(r,t);if(!i)return t;const s=px(i,r);return Hs(s,s.next),Hs(i,i.next)}function bE(r,t){let i=t;const s=r.x,l=r.y;let c=-1/0,f;if(Yr(r,i))return i;do{if(Yr(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const v=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(v<=s&&v>c&&(c=v,f=i.x<i.next.x?i:i.next,v===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,m=f.x,p=f.y;let _=1/0;i=f;do{if(s>=i.x&&i.x>=m&&s!==i.x&&hx(l<p?s:c,l,m,p,l<p?c:s,l,i.x,i.y)){const v=Math.abs(l-i.y)/(s-i.x);dl(i,r)&&(v<_||v===_&&(i.x>f.x||i.x===f.x&&TE(f,i)))&&(f=i,_=v)}i=i.next}while(i!==d);return f}function TE(r,t){return tn(r.prev,r,t.prev)<0&&tn(t.next,r,r.next)<0}function AE(r,t,i,s){let l=r;do l.z===0&&(l.z=cp(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,RE(l)}function RE(r){let t,i=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,d=0;for(let p=0;p<i&&(d++,f=f.nextZ,!!f);p++);let m=i;for(;d>0||m>0&&f;)d!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,i*=2}while(t>1);return r}function cp(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function CE(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function hx(r,t,i,s,l,c,f,d){return(l-f)*(t-d)>=(r-f)*(c-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(s-d)}function el(r,t,i,s,l,c,f,d){return!(r===f&&t===d)&&hx(r,t,i,s,l,c,f,d)}function wE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!DE(r,t)&&(dl(r,t)&&dl(t,r)&&UE(r,t)&&(tn(r.prev,r,t.prev)||tn(r,t.prev,t))||Yr(r,t)&&tn(r.prev,r,r.next)>0&&tn(t.prev,t,t.next)>0)}function tn(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function Yr(r,t){return r.x===t.x&&r.y===t.y}function dx(r,t,i,s){const l=tu(tn(r,t,i)),c=tu(tn(r,t,s)),f=tu(tn(i,s,r)),d=tu(tn(i,s,t));return!!(l!==c&&f!==d||l===0&&$c(r,i,t)||c===0&&$c(r,s,t)||f===0&&$c(i,r,s)||d===0&&$c(i,t,s))}function $c(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function tu(r){return r>0?1:r<0?-1:0}function DE(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&dx(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function dl(r,t){return tn(r.prev,r,r.next)<0?tn(r,t,r.next)>=0&&tn(r,r.prev,t)>=0:tn(r,t,r.prev)<0||tn(r,r.next,t)<0}function UE(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function px(r,t){const i=up(r.i,r.x,r.y),s=up(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function J_(r,t,i,s){const l=up(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function pl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function up(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function LE(r,t,i,s){let l=0;for(let c=t,f=i-s;c<i;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class NE{static triangulate(t,i,s=2){return gE(t,i,s)}}class rl{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return rl.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];Q_(t),$_(s,t);let f=t.length;i.forEach(Q_);for(let m=0;m<i.length;m++)l.push(f),f+=i[m].length,$_(s,i[m]);const d=NE.triangulate(s,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function Q_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function $_(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class ml extends ci{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=i/m,S=[],E=[],w=[],M=[];for(let y=0;y<_;y++){const D=y*g-f;for(let L=0;L<p;L++){const U=L*v-c;E.push(U,-D,0),w.push(0,0,1),M.push(L/d),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<d;D++){const L=D+p*y,U=D+p*(y+1),V=D+1+p*(y+1),I=D+1+p*y;S.push(L,U,I),S.push(U,V,I)}this.setIndex(S),this.setAttribute("position",new wn(E,3)),this.setAttribute("normal",new wn(w,3)),this.setAttribute("uv",new wn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cp extends ci{constructor(t=new ux([new Vt(0,.5),new Vt(-.5,-.5),new Vt(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const s=[],l=[],c=[],f=[];let d=0,m=0;if(Array.isArray(t)===!1)p(t);else for(let _=0;_<t.length;_++)p(t[_]),this.addGroup(d,m,_),d+=m,m=0;this.setIndex(s),this.setAttribute("position",new wn(l,3)),this.setAttribute("normal",new wn(c,3)),this.setAttribute("uv",new wn(f,2));function p(_){const v=l.length/3,g=_.extractPoints(i);let S=g.shape;const E=g.holes;rl.isClockWise(S)===!1&&(S=S.reverse());for(let M=0,y=E.length;M<y;M++){const D=E[M];rl.isClockWise(D)===!0&&(E[M]=D.reverse())}const w=rl.triangulateShape(S,E);for(let M=0,y=E.length;M<y;M++){const D=E[M];S=S.concat(D)}for(let M=0,y=S.length;M<y;M++){const D=S[M];l.push(D.x,D.y,0),c.push(0,0,1),f.push(D.x,D.y)}for(let M=0,y=w.length;M<y;M++){const D=w[M],L=D[0]+v,U=D[1]+v,V=D[2]+v;s.push(L,U,V),m+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return OE(i,t)}static fromJSON(t,i){const s=[];for(let l=0,c=t.shapes.length;l<c;l++){const f=i[t.shapes[l]];s.push(f)}return new Cp(s,t.curveSegments)}}function OE(r,t){if(t.shapes=[],Array.isArray(r))for(let i=0,s=r.length;i<s;i++){const l=r[i];t.shapes.push(l.uuid)}else t.shapes.push(r.uuid);return t}function jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=jr(r[i]);for(const l in s)t[l]=s[l]}return t}function PE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function mx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const zE={clone:jr,merge:Hn};var IE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IE,this.fragmentShader=FE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=PE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class BE extends Ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HE extends Jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kv,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class GE extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VE extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ud={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(tv(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!tv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function tv(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class kE{constructor(t,i,s){const l=this;let c=!1,f=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,d),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,d),f===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=p.length;v<g;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const XE=new kE;class wp{constructor(t){this.manager=t!==void 0?t:XE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}wp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pr=new WeakMap;class WE extends wp{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=ud.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let v=Pr.get(f);v===void 0&&(v=[],Pr.set(f,v)),v.push({onLoad:i,onError:l})}return f}const d=ul("img");function m(){_(),i&&i(this);const v=Pr.get(this)||[];for(let g=0;g<v.length;g++){const S=v[g];S.onLoad&&S.onLoad(this)}Pr.delete(this),c.manager.itemEnd(t)}function p(v){_(),l&&l(v),ud.remove(`image:${t}`);const g=Pr.get(this)||[];for(let S=0;S<g.length;S++){const E=g[S];E.onError&&E.onError(v)}Pr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),ud.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class qE extends wp{constructor(t){super(t)}load(t,i,s,l){const c=new On,f=new WE(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class gx extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const fd=new $e,ev=new q,nv=new q;class YE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tp,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;ev.setFromMatrixPosition(t.matrixWorld),i.position.copy(ev),nv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(nv),i.updateMatrixWorld(),fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===cl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const eu=new q,nu=new us,Bi=new q;class _x extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(eu,nu,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eu,nu,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(eu,nu,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eu,nu,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ss=new q,iv=new Vt,av=new Vt;class Si extends _x{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return op*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,i){return this.getViewBounds(t,iv,av),i.subVectors(av,iv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(il*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Dp extends _x{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jE extends YE{constructor(){super(new Dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sv extends gx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new jE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class ZE extends gx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const zr=-90,Ir=1;class KE extends Cn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(zr,Ir,t,i);l.layers=this.layers,this.add(l);const c=new Si(zr,Ir,t,i);c.layers=this.layers,this.add(c);const f=new Si(zr,Ir,t,i);f.layers=this.layers,this.add(f);const d=new Si(zr,Ir,t,i);d.layers=this.layers,this.add(d);const m=new Si(zr,Ir,t,i);m.layers=this.layers,this.add(m);const p=new Si(zr,Ir,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===cl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class JE extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class rv{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class QE extends lp{constructor(t=10,i=10,s=4473924,l=8947848){s=new xe(s),l=new xe(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let g=0,S=0,E=-d;g<=i;g++,E+=f){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const w=g===c?s:l;w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3}const _=new ci;_.setAttribute("position",new wn(m,3)),_.setAttribute("color",new wn(p,3));const v=new gu({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class $E extends Gs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ov(r,t,i,s){const l=tb(s);switch(i){case Yv:return r*t;case Zv:return r*t/l.components*l.byteLength;case vp:return r*t/l.components*l.byteLength;case Wr:return r*t*2/l.components*l.byteLength;case xp:return r*t*2/l.components*l.byteLength;case jv:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case Sp:return r*t*4/l.components*l.byteLength;case lu:case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case uu:case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dd:case Ld:return Math.max(r,16)*Math.max(t,8)/4;case wd:case Ud:return Math.max(r,8)*Math.max(t,8)/2;case Nd:case Od:case zd:case Id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pd:case Fd:case Bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case kd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case qd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case $d:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case tp:case ep:case np:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ip:case ap:return Math.ceil(r/4)*Math.ceil(t/4)*8;case sp:case rp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tb(r){switch(r){case li:case kv:return{byteLength:1,components:1};case ol:case Xv:case Aa:return{byteLength:2,components:1};case gp:case _p:return{byteLength:2,components:4};case ji:case mp:case ki:return{byteLength:4,components:1};case Wv:case qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);function vx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function eb(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],w=v[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const w=v[S];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var nb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ib=`#ifdef USE_ALPHAHASH
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
#endif`,ab=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lb=`#ifdef USE_AOMAP
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
#endif`,cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ub=`#ifdef USE_BATCHING
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
#endif`,fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mb=`#ifdef USE_IRIDESCENCE
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
#endif`,gb=`#ifdef USE_BUMPMAP
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
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tb=`#define PI 3.141592653589793
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
} // validated`,Ab=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rb=`vec3 transformedNormal = objectNormal;
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
#endif`,Cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ob=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kb=`#ifdef USE_GRADIENTMAP
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
}`,Xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yb=`uniform bool receiveShadow;
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
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$b=`PhysicalMaterial material;
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
#endif`,tT=`uniform sampler2D dfgLUT;
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
}`,eT=`
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
#endif`,nT=`#if defined( RE_IndirectDiffuse )
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
#endif`,iT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fT=`#if defined( USE_POINTS_UV )
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
#endif`,hT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_T=`#ifdef USE_MORPHTARGETS
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
#endif`,vT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ST=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ET=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bT=`#ifdef USE_NORMALMAP
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
#endif`,TT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HT=`float getShadowMask() {
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
}`,GT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VT=`#ifdef USE_SKINNING
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
#endif`,kT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XT=`#ifdef USE_SKINNING
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
#endif`,WT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,KT=`#ifdef USE_TRANSMISSION
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n1=`uniform sampler2D t2D;
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`#include <common>
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
}`,l1=`#if DEPTH_PACKING == 3200
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
}`,c1=`#define DISTANCE
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
}`,u1=`#define DISTANCE
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`uniform float scale;
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#include <common>
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
}`,g1=`uniform vec3 diffuse;
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
}`,_1=`#define LAMBERT
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
}`,v1=`#define LAMBERT
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
}`,x1=`#define MATCAP
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
}`,S1=`#define MATCAP
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
}`,y1=`#define NORMAL
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
}`,M1=`#define NORMAL
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
}`,E1=`#define PHONG
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
}`,b1=`#define PHONG
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
}`,T1=`#define STANDARD
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
}`,A1=`#define STANDARD
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
}`,R1=`#define TOON
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
}`,C1=`#define TOON
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
}`,w1=`uniform float size;
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
}`,D1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,L1=`uniform vec3 color;
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
}`,N1=`uniform float rotation;
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
}`,O1=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:nb,alphahash_pars_fragment:ib,alphamap_fragment:ab,alphamap_pars_fragment:sb,alphatest_fragment:rb,alphatest_pars_fragment:ob,aomap_fragment:lb,aomap_pars_fragment:cb,batching_pars_vertex:ub,batching_vertex:fb,begin_vertex:hb,beginnormal_vertex:db,bsdfs:pb,iridescence_fragment:mb,bumpmap_pars_fragment:gb,clipping_planes_fragment:_b,clipping_planes_pars_fragment:vb,clipping_planes_pars_vertex:xb,clipping_planes_vertex:Sb,color_fragment:yb,color_pars_fragment:Mb,color_pars_vertex:Eb,color_vertex:bb,common:Tb,cube_uv_reflection_fragment:Ab,defaultnormal_vertex:Rb,displacementmap_pars_vertex:Cb,displacementmap_vertex:wb,emissivemap_fragment:Db,emissivemap_pars_fragment:Ub,colorspace_fragment:Lb,colorspace_pars_fragment:Nb,envmap_fragment:Ob,envmap_common_pars_fragment:Pb,envmap_pars_fragment:zb,envmap_pars_vertex:Ib,envmap_physical_pars_fragment:jb,envmap_vertex:Fb,fog_vertex:Bb,fog_pars_vertex:Hb,fog_fragment:Gb,fog_pars_fragment:Vb,gradientmap_pars_fragment:kb,lightmap_pars_fragment:Xb,lights_lambert_fragment:Wb,lights_lambert_pars_fragment:qb,lights_pars_begin:Yb,lights_toon_fragment:Zb,lights_toon_pars_fragment:Kb,lights_phong_fragment:Jb,lights_phong_pars_fragment:Qb,lights_physical_fragment:$b,lights_physical_pars_fragment:tT,lights_fragment_begin:eT,lights_fragment_maps:nT,lights_fragment_end:iT,logdepthbuf_fragment:aT,logdepthbuf_pars_fragment:sT,logdepthbuf_pars_vertex:rT,logdepthbuf_vertex:oT,map_fragment:lT,map_pars_fragment:cT,map_particle_fragment:uT,map_particle_pars_fragment:fT,metalnessmap_fragment:hT,metalnessmap_pars_fragment:dT,morphinstance_vertex:pT,morphcolor_vertex:mT,morphnormal_vertex:gT,morphtarget_pars_vertex:_T,morphtarget_vertex:vT,normal_fragment_begin:xT,normal_fragment_maps:ST,normal_pars_fragment:yT,normal_pars_vertex:MT,normal_vertex:ET,normalmap_pars_fragment:bT,clearcoat_normal_fragment_begin:TT,clearcoat_normal_fragment_maps:AT,clearcoat_pars_fragment:RT,iridescence_pars_fragment:CT,opaque_fragment:wT,packing:DT,premultiplied_alpha_fragment:UT,project_vertex:LT,dithering_fragment:NT,dithering_pars_fragment:OT,roughnessmap_fragment:PT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:IT,shadowmap_pars_vertex:FT,shadowmap_vertex:BT,shadowmask_pars_fragment:HT,skinbase_vertex:GT,skinning_pars_vertex:VT,skinning_vertex:kT,skinnormal_vertex:XT,specularmap_fragment:WT,specularmap_pars_fragment:qT,tonemapping_fragment:YT,tonemapping_pars_fragment:jT,transmission_fragment:ZT,transmission_pars_fragment:KT,uv_pars_fragment:JT,uv_pars_vertex:QT,uv_vertex:$T,worldpos_vertex:t1,background_vert:e1,background_frag:n1,backgroundCube_vert:i1,backgroundCube_frag:a1,cube_vert:s1,cube_frag:r1,depth_vert:o1,depth_frag:l1,distance_vert:c1,distance_frag:u1,equirect_vert:f1,equirect_frag:h1,linedashed_vert:d1,linedashed_frag:p1,meshbasic_vert:m1,meshbasic_frag:g1,meshlambert_vert:_1,meshlambert_frag:v1,meshmatcap_vert:x1,meshmatcap_frag:S1,meshnormal_vert:y1,meshnormal_frag:M1,meshphong_vert:E1,meshphong_frag:b1,meshphysical_vert:T1,meshphysical_frag:A1,meshtoon_vert:R1,meshtoon_frag:C1,points_vert:w1,points_frag:D1,shadow_vert:U1,shadow_frag:L1,sprite_vert:N1,sprite_frag:O1},Bt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Gi={basic:{uniforms:Hn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Hn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Hn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Hn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Hn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Hn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Hn([Bt.points,Bt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Hn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Hn([Bt.common,Bt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Hn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Hn([Bt.sprite,Bt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Hn([Bt.common,Bt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Hn([Bt.lights,Bt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Gi.physical={uniforms:Hn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const iu={r:0,b:0,g:0},Ns=new Zi,P1=new $e;function z1(r,t,i,s,l,c){const f=new xe(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function S(D){let L=D.isScene===!0?D.background:null;if(L&&L.isTexture){const U=D.backgroundBlurriness>0;L=t.get(L,U)}return L}function E(D){let L=!1;const U=S(D);U===null?M(f,d):U&&U.isColor&&(M(U,1),L=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(D,L){const U=S(L);U&&(U.isCubeTexture||U.mapping===xu)?(p===void 0&&(p=new Mi(new Qr(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:jr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ns.copy(L.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(Ns)),p.material.toneMapped=Ce.getTransfer(U.colorSpace)!==He,(_!==U||v!==U.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=U,v=U.version,g=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Mi(new ml(2,2),new Ki({name:"BackgroundMaterial",uniforms:jr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(U.colorSpace)!==He,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||v!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,v=U.version,g=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,L){D.getRGB(iu,mx(r)),i.buffers.color.setClear(iu.r,iu.g,iu.b,L,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,L=1){f.set(D),d=L,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,M(f,d)},render:E,addToRenderList:w,dispose:y}}function I1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(G,Q,rt,ot,at){let R=!1;const z=v(G,ot,rt,Q);c!==z&&(c=z,p(c.object)),R=S(G,ot,rt,at),R&&E(G,ot,rt,at),at!==null&&t.update(at,r.ELEMENT_ARRAY_BUFFER),(R||f)&&(f=!1,U(G,Q,rt,ot),at!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,Q,rt,ot){const at=ot.wireframe===!0;let R=s[Q.id];R===void 0&&(R={},s[Q.id]=R);const z=G.isInstancedMesh===!0?G.id:0;let K=R[z];K===void 0&&(K={},R[z]=K);let $=K[rt.id];$===void 0&&($={},K[rt.id]=$);let _t=$[at];return _t===void 0&&(_t=g(m()),$[at]=_t),_t}function g(G){const Q=[],rt=[],ot=[];for(let at=0;at<i;at++)Q[at]=0,rt[at]=0,ot[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:rt,attributeDivisors:ot,object:G,attributes:{},index:null}}function S(G,Q,rt,ot){const at=c.attributes,R=Q.attributes;let z=0;const K=rt.getAttributes();for(const $ in K)if(K[$].location>=0){const N=at[$];let j=R[$];if(j===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),N===void 0||N.attribute!==j||j&&N.data!==j.data)return!0;z++}return c.attributesNum!==z||c.index!==ot}function E(G,Q,rt,ot){const at={},R=Q.attributes;let z=0;const K=rt.getAttributes();for(const $ in K)if(K[$].location>=0){let N=R[$];N===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(N=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(N=G.instanceColor));const j={};j.attribute=N,N&&N.data&&(j.data=N.data),at[$]=j,z++}c.attributes=at,c.attributesNum=z,c.index=ot}function w(){const G=c.newAttributes;for(let Q=0,rt=G.length;Q<rt;Q++)G[Q]=0}function M(G){y(G,0)}function y(G,Q){const rt=c.newAttributes,ot=c.enabledAttributes,at=c.attributeDivisors;rt[G]=1,ot[G]===0&&(r.enableVertexAttribArray(G),ot[G]=1),at[G]!==Q&&(r.vertexAttribDivisor(G,Q),at[G]=Q)}function D(){const G=c.newAttributes,Q=c.enabledAttributes;for(let rt=0,ot=Q.length;rt<ot;rt++)Q[rt]!==G[rt]&&(r.disableVertexAttribArray(rt),Q[rt]=0)}function L(G,Q,rt,ot,at,R,z){z===!0?r.vertexAttribIPointer(G,Q,rt,at,R):r.vertexAttribPointer(G,Q,rt,ot,at,R)}function U(G,Q,rt,ot){w();const at=ot.attributes,R=rt.getAttributes(),z=Q.defaultAttributeValues;for(const K in R){const $=R[K];if($.location>=0){let _t=at[K];if(_t===void 0&&(K==="instanceMatrix"&&G.instanceMatrix&&(_t=G.instanceMatrix),K==="instanceColor"&&G.instanceColor&&(_t=G.instanceColor)),_t!==void 0){const N=_t.normalized,j=_t.itemSize,ht=t.get(_t);if(ht===void 0)continue;const Rt=ht.buffer,Gt=ht.type,tt=ht.bytesPerElement,vt=Gt===r.INT||Gt===r.UNSIGNED_INT||_t.gpuType===mp;if(_t.isInterleavedBufferAttribute){const Tt=_t.data,kt=Tt.stride,Zt=_t.offset;if(Tt.isInstancedInterleavedBuffer){for(let ee=0;ee<$.locationSize;ee++)y($.location+ee,Tt.meshPerAttribute);G.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let ee=0;ee<$.locationSize;ee++)M($.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let ee=0;ee<$.locationSize;ee++)L($.location+ee,j/$.locationSize,Gt,N,kt*tt,(Zt+j/$.locationSize*ee)*tt,vt)}else{if(_t.isInstancedBufferAttribute){for(let Tt=0;Tt<$.locationSize;Tt++)y($.location+Tt,_t.meshPerAttribute);G.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Tt=0;Tt<$.locationSize;Tt++)M($.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<$.locationSize;Tt++)L($.location+Tt,j/$.locationSize,Gt,N,j*tt,j/$.locationSize*Tt*tt,vt)}}else if(z!==void 0){const N=z[K];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv($.location,N);break;case 3:r.vertexAttrib3fv($.location,N);break;case 4:r.vertexAttrib4fv($.location,N);break;default:r.vertexAttrib1fv($.location,N)}}}}D()}function V(){O();for(const G in s){const Q=s[G];for(const rt in Q){const ot=Q[rt];for(const at in ot){const R=ot[at];for(const z in R)_(R[z].object),delete R[z];delete ot[at]}}delete s[G]}}function I(G){if(s[G.id]===void 0)return;const Q=s[G.id];for(const rt in Q){const ot=Q[rt];for(const at in ot){const R=ot[at];for(const z in R)_(R[z].object),delete R[z];delete ot[at]}}delete s[G.id]}function H(G){for(const Q in s){const rt=s[Q];for(const ot in rt){const at=rt[ot];if(at[G.id]===void 0)continue;const R=at[G.id];for(const z in R)_(R[z].object),delete R[z];delete at[G.id]}}}function T(G){for(const Q in s){const rt=s[Q],ot=G.isInstancedMesh===!0?G.id:0,at=rt[ot];if(at!==void 0){for(const R in at){const z=at[R];for(const K in z)_(z[K].object),delete z[K];delete at[R]}delete rt[ot],Object.keys(rt).length===0&&delete s[Q]}}}function O(){mt(),f=!0,c!==l&&(c=l,p(c.object))}function mt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:mt,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:M,disableUnusedAttributes:D}}function F1(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,v){v!==0&&(r.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let S=0;for(let E=0;E<v;E++)S+=_[E];i.update(S,s,1)}function m(p,_,v,g){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],_[E],g[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,g,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w]*g[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function B1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==Ni&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const T=H===Aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==li&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ki&&!T)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ie("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:U,maxSamples:V,samples:I}}function H1(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new rs,d=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||s!==0||l;return l=g,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const D=c?0:s,L=D*4;let U=y.clippingState||null;m.value=U,U=_(E,g,L,S);for(let V=0;V!==L;++V)U[V]=i[V];y.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,S,E){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const y=S+w*4,D=g.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,U=S;L!==w;++L,U+=4)f.copy(v[L]).applyMatrix4(D,d),f.normal.toArray(M,U),M[U+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const ls=4,lv=[.125,.215,.35,.446,.526,.582],zs=20,G1=256,Qo=new Dp,cv=new xe;let hd=null,dd=0,pd=0,md=!1;const V1=new q;class uv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=V1}=c;hd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hd,dd,pd),this._renderer.xr.enabled=md,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Bs||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Aa,format:Ni,colorSpace:qr,depthBuffer:!1},l=fv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=k1(c)),this._blurMaterial=W1(c,t,i),this._ggxMaterial=X1(c,t,i)}return l}_compileMaterial(t){const i=new Mi(new ci,t);this._renderer.compile(i,Qo)}_sceneToCubeUV(t,i,s,l,c){const m=new Si(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(cv),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new Qr,new ix({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let y=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,y=!0):(M.color.copy(cv),y=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const V=this._cubeSize;Fr(l,U*V,L>2?V:0,V,V),v.setRenderTarget(l),y&&v.render(w,m),v.render(t,m)}v.toneMapping=S,v.autoClear=g,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Bs||t.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Fr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Qo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,w=this._sizeLods[s],M=3*w*(s>E-ls?s-E+ls:0),y=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Fr(c,M,y,3*w,2*w),l.setRenderTarget(c),l.render(d,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Fr(t,M,y,3*w,2*w),l.setRenderTarget(t),l.render(d,Qo)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*zs-1),w=c/E,M=isFinite(c)?1+Math.floor(_*w):zs;M>zs&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${zs}`);const y=[];let D=0;for(let H=0;H<zs;++H){const T=H/w,O=Math.exp(-T*T/2);y.push(O),H===0?D+=O:H<M&&(D+=2*O)}for(let H=0;H<y.length;H++)y[H]=y[H]/D;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-s;const U=this._sizeLods[l],V=3*U*(l>L-ls?l-L+ls:0),I=4*(this._cubeSize-U);Fr(i,V,I,3*U,2*U),m.setRenderTarget(i),m.render(v,Qo)}}function k1(r){const t=[],i=[],s=[];let l=r;const c=r-ls+1+lv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-ls?m=lv[f-r+ls-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,w=3,M=2,y=1,D=new Float32Array(w*E*S),L=new Float32Array(M*E*S),U=new Float32Array(y*E*S);for(let I=0;I<S;I++){const H=I%3*2/3-1,T=I>2?0:-1,O=[H,T,0,H+2/3,T,0,H+2/3,T+1,0,H,T,0,H+2/3,T+1,0,H,T+1,0];D.set(O,w*E*I),L.set(g,M*E*I);const mt=[I,I,I,I,I,I];U.set(mt,y*E*I)}const V=new ci;V.setAttribute("position",new Yi(D,w)),V.setAttribute("uv",new Yi(L,M)),V.setAttribute("faceIndex",new Yi(U,y)),s.push(new Mi(V,null)),l>ls&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function fv(r,t,i){const s=new qi(r,t,i);return s.texture.mapping=xu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function X1(r,t,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function W1(r,t,i){const s=new Float32Array(zs),l=new q(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function hv(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function dv(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}class xx extends qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new ax(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Qr(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:ba});c.uniforms.tEquirect.value=i;const f=new Mi(l,c),d=i.minFilter;return i.minFilter===Is&&(i.minFilter=Nn),new KE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function q1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Nh||S===Oh)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new xx(E.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,E=S===Nh||S===Oh,w=S===Bs||S===Xr;if(E||w){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new uv(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const D=g.image;return E&&D&&D.height>0||w&&D&&m(D)?(s===null&&(s=new uv(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,S){return S===Nh?g.mapping=Bs:S===Oh&&(g.mapping=Xr),g}function m(g){let S=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function Y1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&mu("WebGLRenderer: "+s+" extension not supported."),l}}}function j1(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(t.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)t.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let w=0;if(E===void 0)return;if(S!==null){const D=S.array;w=S.version;for(let L=0,U=D.length;L<U;L+=3){const V=D[L+0],I=D[L+1],H=D[L+2];g.push(V,I,I,H,H,V)}}else{const D=E.array;w=E.version;for(let L=0,U=D.length/3-1;L<U;L+=3){const V=L+0,I=L+1,H=L+2;g.push(V,I,I,H,H,V)}}const M=new(E.count>=65535?nx:ex)(g,1);M.version=w;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function Z1(r,t,i){let s;function l(g){s=g}let c,f;function d(g){c=g.type,f=g.bytesPerElement}function m(g,S){r.drawElements(s,S,c,g*f),i.update(S,s,1)}function p(g,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,g*f,E),i.update(S,s,E))}function _(g,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,g,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,s,1)}function v(g,S,E,w){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<g.length;y++)p(g[y]/f,S[y],w[y]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,g,0,w,0,E);let y=0;for(let D=0;D<E;D++)y+=S[D]*w[D];i.update(y,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function K1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Le("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function J1(r,t,i){const s=new WeakMap,l=new an;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let O=function(){H.dispose(),s.delete(d),d.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let L=0;S===!0&&(L=1),E===!0&&(L=2),w===!0&&(L=3);let U=d.attributes.position.count*L,V=1;U>t.maxTextureSize&&(V=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const I=new Float32Array(U*V*4*v),H=new Qv(I,U,V,v);H.type=ki,H.needsUpdate=!0;const T=L*4;for(let mt=0;mt<v;mt++){const G=M[mt],Q=y[mt],rt=D[mt],ot=U*V*4*mt;for(let at=0;at<G.count;at++){const R=at*T;S===!0&&(l.fromBufferAttribute(G,at),I[ot+R+0]=l.x,I[ot+R+1]=l.y,I[ot+R+2]=l.z,I[ot+R+3]=0),E===!0&&(l.fromBufferAttribute(Q,at),I[ot+R+4]=l.x,I[ot+R+5]=l.y,I[ot+R+6]=l.z,I[ot+R+7]=0),w===!0&&(l.fromBufferAttribute(rt,at),I[ot+R+8]=l.x,I[ot+R+9]=l.y,I[ot+R+10]=l.z,I[ot+R+11]=rt.itemSize===4?l.w:1)}}g={count:v,texture:H,size:new Vt(U,V)},s.set(d,g),d.addEventListener("dispose",O)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const E=d.morphTargetsRelative?1:1-S;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function Q1(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const $1={[Pv]:"LINEAR_TONE_MAPPING",[zv]:"REINHARD_TONE_MAPPING",[Iv]:"CINEON_TONE_MAPPING",[Fv]:"ACES_FILMIC_TONE_MAPPING",[Hv]:"AGX_TONE_MAPPING",[Gv]:"NEUTRAL_TONE_MAPPING",[Bv]:"CUSTOM_TONE_MAPPING"};function tA(r,t,i,s,l){const c=new qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new qi(t,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),d=new ci;d.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new wn([0,2,0,0,2,0],2));const m=new BE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Mi(d,m),_=new Dp(-1,1,1,-1,0,1);let v=null,g=null,S=!1,E,w=null,M=[],y=!1;this.setSize=function(D,L){c.setSize(D,L),f.setSize(D,L);for(let U=0;U<M.length;U++){const V=M[U];V.setSize&&V.setSize(D,L)}},this.setEffects=function(D){M=D,y=M.length>0&&M[0].isRenderPass===!0;const L=c.width,U=c.height;for(let V=0;V<M.length;V++){const I=M[V];I.setSize&&I.setSize(L,U)}},this.begin=function(D,L){if(S||D.toneMapping===Wi&&M.length===0)return!1;if(w=L,L!==null){const U=L.width,V=L.height;(c.width!==U||c.height!==V)&&this.setSize(U,V)}return y===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=Wi,!0},this.hasRenderPass=function(){return y},this.end=function(D,L){D.toneMapping=E,S=!0;let U=c,V=f;for(let I=0;I<M.length;I++){const H=M[I];if(H.enabled!==!1&&(H.render(D,V,U,L),H.needsSwap!==!1)){const T=U;U=V,V=T}}if(v!==D.outputColorSpace||g!==D.toneMapping){v=D.outputColorSpace,g=D.toneMapping,m.defines={},Ce.getTransfer(v)===He&&(m.defines.SRGB_TRANSFER="");const I=$1[g];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(w),D.render(p,_),w=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const Sx=new On,fp=new fl(1,1),yx=new Qv,Mx=new IM,Ex=new ax,pv=[],mv=[],gv=new Float32Array(16),_v=new Float32Array(9),vv=new Float32Array(4);function $r(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=pv[l];if(c===void 0&&(c=new Float32Array(l),pv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Sn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Mu(r,t){let i=mv[t];i===void 0&&(i=new Int32Array(t),mv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function eA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function nA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2fv(this.addr,t),Sn(i,t)}}function iA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;r.uniform3fv(this.addr,t),Sn(i,t)}}function aA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4fv(this.addr,t),Sn(i,t)}}function sA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;vv.set(s),r.uniformMatrix2fv(this.addr,!1,vv),Sn(i,s)}}function rA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;_v.set(s),r.uniformMatrix3fv(this.addr,!1,_v),Sn(i,s)}}function oA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;gv.set(s),r.uniformMatrix4fv(this.addr,!1,gv),Sn(i,s)}}function lA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function cA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2iv(this.addr,t),Sn(i,t)}}function uA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3iv(this.addr,t),Sn(i,t)}}function fA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4iv(this.addr,t),Sn(i,t)}}function hA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function dA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2uiv(this.addr,t),Sn(i,t)}}function pA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3uiv(this.addr,t),Sn(i,t)}}function mA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4uiv(this.addr,t),Sn(i,t)}}function gA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(fp.compareFunction=i.isReversedDepthBuffer()?Mp:yp,c=fp):c=Sx,i.setTexture2D(t||c,l)}function _A(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Mx,l)}function vA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ex,l)}function xA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||yx,l)}function SA(r){switch(r){case 5126:return eA;case 35664:return nA;case 35665:return iA;case 35666:return aA;case 35674:return sA;case 35675:return rA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return xA}}function yA(r,t){r.uniform1fv(this.addr,t)}function MA(r,t){const i=$r(t,this.size,2);r.uniform2fv(this.addr,i)}function EA(r,t){const i=$r(t,this.size,3);r.uniform3fv(this.addr,i)}function bA(r,t){const i=$r(t,this.size,4);r.uniform4fv(this.addr,i)}function TA(r,t){const i=$r(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function AA(r,t){const i=$r(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function RA(r,t){const i=$r(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function CA(r,t){r.uniform1iv(this.addr,t)}function wA(r,t){r.uniform2iv(this.addr,t)}function DA(r,t){r.uniform3iv(this.addr,t)}function UA(r,t){r.uniform4iv(this.addr,t)}function LA(r,t){r.uniform1uiv(this.addr,t)}function NA(r,t){r.uniform2uiv(this.addr,t)}function OA(r,t){r.uniform3uiv(this.addr,t)}function PA(r,t){r.uniform4uiv(this.addr,t)}function zA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=fp:f=Sx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function IA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Mx,c[f])}function FA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Ex,c[f])}function BA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||yx,c[f])}function HA(r){switch(r){case 5126:return yA;case 35664:return MA;case 35665:return EA;case 35666:return bA;case 35674:return TA;case 35675:return AA;case 35676:return RA;case 5124:case 35670:return CA;case 35667:case 35671:return wA;case 35668:case 35672:return DA;case 35669:case 35673:return UA;case 5125:return LA;case 36294:return NA;case 36295:return OA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return BA}}class GA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=SA(i.type)}}class VA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=HA(i.type)}}class kA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function xv(r,t){r.seq.push(t),r.map[t.id]=t}function XA(r,t,i){const s=r.name,l=s.length;for(gd.lastIndex=0;;){const c=gd.exec(s),f=gd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){xv(i,p===void 0?new GA(d,r,t):new VA(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new kA(d),xv(i,v)),i=v}}}class hu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);XA(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Sv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const WA=37297;let qA=0;function YA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const yv=new ge;function jA(r){Ce._getMatrix(yv,Ce.workingColorSpace,r);const t=`mat3( ${yv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case pu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Mv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+YA(r.getShaderSource(t),d)}else return c}function ZA(r,t){const i=jA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const KA={[Pv]:"Linear",[zv]:"Reinhard",[Iv]:"Cineon",[Fv]:"ACESFilmic",[Hv]:"AgX",[Gv]:"Neutral",[Bv]:"Custom"};function JA(r,t){const i=KA[t];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const au=new q;function QA(){Ce.getLuminanceCoefficients(au);const r=au.x.toFixed(4),t=au.y.toFixed(4),i=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $A(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function tR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function eR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function nl(r){return r!==""}function Ev(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nR=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(r){return r.replace(nR,aR)}const iR=new Map;function aR(r,t){let i=_e[t];if(i===void 0){const s=iR.get(t);if(s!==void 0)i=_e[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return hp(i)}const sR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tv(r){return r.replace(sR,rR)}function rR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Av(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const oR={[ou]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function lR(r){return oR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cR={[Bs]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function uR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":cR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const fR={[Xr]:"ENVMAP_MODE_REFRACTION"};function hR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":fR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dR={[Ov]:"ENVMAP_BLENDING_MULTIPLY",[mM]:"ENVMAP_BLENDING_MIX",[gM]:"ENVMAP_BLENDING_ADD"};function pR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":dR[r.combine]||"ENVMAP_BLENDING_NONE"}function mR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function gR(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=lR(i),p=uR(i),_=hR(i),v=pR(i),g=mR(i),S=$A(i),E=tR(c),w=l.createProgram();let M,y,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(nl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(nl).join(`
`),y.length>0&&(y+=`
`)):(M=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),y=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?_e.tonemapping_pars_fragment:"",i.toneMapping!==Wi?JA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,ZA("linearToOutputTexel",i.outputColorSpace),QA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),f=hp(f),f=Ev(f,i),f=bv(f,i),d=hp(d),d=Ev(d,i),d=bv(d,i),f=Tv(f),d=Tv(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=D+M+f,U=D+y+d,V=Sv(l,l.VERTEX_SHADER,L),I=Sv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,V),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function H(G){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(w)||"",rt=l.getShaderInfoLog(V)||"",ot=l.getShaderInfoLog(I)||"",at=Q.trim(),R=rt.trim(),z=ot.trim();let K=!0,$=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,V,I);else{const _t=Mv(l,V,"vertex"),N=Mv(l,I,"fragment");Le("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+at+`
`+_t+`
`+N)}else at!==""?ie("WebGLProgram: Program Info Log:",at):(R===""||z==="")&&($=!1);$&&(G.diagnostics={runnable:K,programLog:at,vertexShader:{log:R,prefix:M},fragmentShader:{log:z,prefix:y}})}l.deleteShader(V),l.deleteShader(I),T=new hu(l,w),O=eR(l,w)}let T;this.getUniforms=function(){return T===void 0&&H(this),T};let O;this.getAttributes=function(){return O===void 0&&H(this),O};let mt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return mt===!1&&(mt=l.getProgramParameter(w,WA)),mt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=qA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=V,this.fragmentShader=I,this}let _R=0;class vR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new xR(t),i.set(t,s)),s}}class xR{constructor(t){this.id=_R++,this.code=t,this.usedTimes=0}}function SR(r,t,i,s,l,c){const f=new $v,d=new vR,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,O,mt,G,Q){const rt=G.fog,ot=Q.geometry,at=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,R=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=t.get(T.envMap||at,R),K=z&&z.mapping===xu?z.image.height:null,$=S[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ie("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const _t=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,N=_t!==void 0?_t.length:0;let j=0;ot.morphAttributes.position!==void 0&&(j=1),ot.morphAttributes.normal!==void 0&&(j=2),ot.morphAttributes.color!==void 0&&(j=3);let ht,Rt,Gt,tt;if($){const Re=Gi[$];ht=Re.vertexShader,Rt=Re.fragmentShader}else ht=T.vertexShader,Rt=T.fragmentShader,d.update(T),Gt=d.getVertexShaderID(T),tt=d.getFragmentShaderID(T);const vt=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),kt=Q.isInstancedMesh===!0,Zt=Q.isBatchedMesh===!0,ee=!!T.map,Ge=!!T.matcap,re=!!z,he=!!T.aoMap,Ae=!!T.lightMap,oe=!!T.bumpMap,Oe=!!T.normalMap,B=!!T.displacementMap,qe=!!T.emissiveMap,Se=!!T.metalnessMap,Ht=!!T.roughnessMap,Ot=T.anisotropy>0,P=T.clearcoat>0,b=T.dispersion>0,Y=T.iridescence>0,dt=T.sheen>0,Mt=T.transmission>0,ct=Ot&&!!T.anisotropyMap,wt=P&&!!T.clearcoatMap,Ct=P&&!!T.clearcoatNormalMap,Kt=P&&!!T.clearcoatRoughnessMap,$t=Y&&!!T.iridescenceMap,gt=Y&&!!T.iridescenceThicknessMap,bt=dt&&!!T.sheenColorMap,Ft=dt&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Pt=!!T.specularColorMap,fe=!!T.specularIntensityMap,X=Mt&&!!T.transmissionMap,At=Mt&&!!T.thicknessMap,St=!!T.gradientMap,Nt=!!T.alphaMap,Et=T.alphaTest>0,ut=!!T.alphaHash,zt=!!T.extensions;let se=Wi;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(se=r.toneMapping);const ze={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:ht,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Gt,customFragmentShaderID:tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&Q._colorsTexture!==null,instancing:kt,instancingColor:kt&&Q.instanceColor!==null,instancingMorph:kt&&Q.morphTexture!==null,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:qr,alphaToCoverage:!!T.alphaToCoverage,map:ee,matcap:Ge,envMap:re,envMapMode:re&&z.mapping,envMapCubeUVHeight:K,aoMap:he,lightMap:Ae,bumpMap:oe,normalMap:Oe,displacementMap:B,emissiveMap:qe,normalMapObjectSpace:Oe&&T.normalMapType===xM,normalMapTangentSpace:Oe&&T.normalMapType===Kv,metalnessMap:Se,roughnessMap:Ht,anisotropy:Ot,anisotropyMap:ct,clearcoat:P,clearcoatMap:wt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:Y,iridescenceMap:$t,iridescenceThicknessMap:gt,sheen:dt,sheenColorMap:bt,sheenRoughnessMap:Ft,specularMap:Lt,specularColorMap:Pt,specularIntensityMap:fe,transmission:Mt,transmissionMap:X,thicknessMap:At,gradientMap:St,opaque:T.transparent===!1&&T.blending===Gr&&T.alphaToCoverage===!1,alphaMap:Nt,alphaTest:Et,alphaHash:ut,combine:T.combine,mapUv:ee&&E(T.map.channel),aoMapUv:he&&E(T.aoMap.channel),lightMapUv:Ae&&E(T.lightMap.channel),bumpMapUv:oe&&E(T.bumpMap.channel),normalMapUv:Oe&&E(T.normalMap.channel),displacementMapUv:B&&E(T.displacementMap.channel),emissiveMapUv:qe&&E(T.emissiveMap.channel),metalnessMapUv:Se&&E(T.metalnessMap.channel),roughnessMapUv:Ht&&E(T.roughnessMap.channel),anisotropyMapUv:ct&&E(T.anisotropyMap.channel),clearcoatMapUv:wt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(T.sheenRoughnessMap.channel),specularMapUv:Lt&&E(T.specularMap.channel),specularColorMapUv:Pt&&E(T.specularColorMap.channel),specularIntensityMapUv:fe&&E(T.specularIntensityMap.channel),transmissionMapUv:X&&E(T.transmissionMap.channel),thicknessMapUv:At&&E(T.thicknessMap.channel),alphaMapUv:Nt&&E(T.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(Oe||Ot),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ot.attributes.uv&&(ee||Nt),fog:!!rt,useFog:T.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ot.attributes.normal===void 0&&Oe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:Q.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:j,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&mt.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:ee&&T.map.isVideoTexture===!0&&Ce.getTransfer(T.map.colorSpace)===He,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(T.emissiveMap.colorSpace)===He,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vi,flipSided:T.side===Kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=m.has(1),ze.vertexUv2s=m.has(2),ze.vertexUv3s=m.has(3),m.clear(),ze}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const mt in T.defines)O.push(mt),O.push(T.defines[mt]);return T.isRawShaderMaterial===!1&&(y(O,T),D(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function y(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function D(T,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),T.push(f.mask)}function L(T){const O=S[T.type];let mt;if(O){const G=Gi[O];mt=zE.clone(G.uniforms)}else mt=T.uniforms;return mt}function U(T,O){let mt=_.get(O);return mt!==void 0?++mt.usedTimes:(mt=new gR(r,O,T,l),p.push(mt),_.set(O,mt)),mt}function V(T){if(--T.usedTimes===0){const O=p.indexOf(T);p[O]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function I(T){d.remove(T)}function H(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:L,acquireProgram:U,releaseProgram:V,releaseShaderCache:I,programs:p,dispose:H}}function yR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function MR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Rv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Cv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,E,w,M,y){let D=r[t];return D===void 0?(D={id:g.id,object:g,geometry:S,material:E,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:y},r[t]=D):(D.id=g.id,D.object=g,D.geometry=S,D.material=E,D.materialVariant=f(g),D.groupOrder=w,D.renderOrder=g.renderOrder,D.z=M,D.group=y),t++,D}function m(g,S,E,w,M,y){const D=d(g,S,E,w,M,y);E.transmission>0?s.push(D):E.transparent===!0?l.push(D):i.push(D)}function p(g,S,E,w,M,y){const D=d(g,S,E,w,M,y);E.transmission>0?s.unshift(D):E.transparent===!0?l.unshift(D):i.unshift(D)}function _(g,S){i.length>1&&i.sort(g||MR),s.length>1&&s.sort(S||Rv),l.length>1&&l.sort(S||Rv)}function v(){for(let g=t,S=r.length;g<S;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function ER(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Cv,r.set(s,[f])):l>=c.length?(f=new Cv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function bR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new q,color:new xe};break;case"SpotLight":i={position:new q,direction:new q,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=i,i}}}function TR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let AR=0;function RR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function CR(r){const t=new bR,i=TR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const l=new q,c=new $e,f=new $e;function d(p){let _=0,v=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let S=0,E=0,w=0,M=0,y=0,D=0,L=0,U=0,V=0,I=0,H=0;p.sort(RR);for(let O=0,mt=p.length;O<mt;O++){const G=p[O],Q=G.color,rt=G.intensity,ot=G.distance;let at=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Wr?at=G.shadow.map.texture:at=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=Q.r*rt,v+=Q.g*rt,g+=Q.b*rt;else if(G.isLightProbe){for(let R=0;R<9;R++)s.probe[R].addScaledVector(G.sh.coefficients[R],rt);H++}else if(G.isDirectionalLight){const R=t.get(G);if(R.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,K=i.get(G);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,s.directionalShadow[S]=K,s.directionalShadowMap[S]=at,s.directionalShadowMatrix[S]=G.shadow.matrix,D++}s.directional[S]=R,S++}else if(G.isSpotLight){const R=t.get(G);R.position.setFromMatrixPosition(G.matrixWorld),R.color.copy(Q).multiplyScalar(rt),R.distance=ot,R.coneCos=Math.cos(G.angle),R.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),R.decay=G.decay,s.spot[w]=R;const z=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,z.updateMatrices(G),G.castShadow&&I++),s.spotLightMatrix[w]=z.matrix,G.castShadow){const K=i.get(G);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,s.spotShadow[w]=K,s.spotShadowMap[w]=at,U++}w++}else if(G.isRectAreaLight){const R=t.get(G);R.color.copy(Q).multiplyScalar(rt),R.halfWidth.set(G.width*.5,0,0),R.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=R,M++}else if(G.isPointLight){const R=t.get(G);if(R.color.copy(G.color).multiplyScalar(G.intensity),R.distance=G.distance,R.decay=G.decay,G.castShadow){const z=G.shadow,K=i.get(G);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,s.pointShadow[E]=K,s.pointShadowMap[E]=at,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=R,E++}else if(G.isHemisphereLight){const R=t.get(G);R.skyColor.copy(G.color).multiplyScalar(rt),R.groundColor.copy(G.groundColor).multiplyScalar(rt),s.hemi[y]=R,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==D||T.numPointShadows!==L||T.numSpotShadows!==U||T.numSpotMaps!==V||T.numLightProbes!==H)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=M,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=U+V-I,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=H,T.directionalLength=S,T.pointLength=E,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=D,T.numPointShadows=L,T.numSpotShadows=U,T.numSpotMaps=V,T.numLightProbes=H,s.version=AR++)}function m(p,_){let v=0,g=0,S=0,E=0,w=0;const M=_.matrixWorldInverse;for(let y=0,D=p.length;y<D;y++){const L=p[y];if(L.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(L.isSpotLight){const U=s.spot[S];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function wv(r){const t=new CR(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function wR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new wv(r),t.set(l,[d])):c>=f.length?(d=new wv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const DR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UR=`uniform sampler2D shadow_pass;
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
}`,LR=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],NR=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Dv=new $e,$o=new q,_d=new q;function OR(r,t,i){let s=new Tp;const l=new Vt,c=new Vt,f=new an,d=new GE,m=new VE,p={},_=i.maxTextureSize,v={[cs]:Kn,[Kn]:cs,[Vi]:Vi},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:DR,fragmentShader:UR}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new ci;E.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Mi(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let y=this.type;this.render=function(I,H,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;this.type===Nv&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ou);const O=r.getRenderTarget(),mt=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(ba),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const rt=y!==this.type;rt&&H.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(at=>at.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,at=I.length;ot<at;ot++){const R=I[ot],z=R.shadow;if(z===void 0){ie("WebGLShadowMap:",R,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const K=z.getFrameExtents();l.multiply(K),c.copy(z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/K.x),l.x=c.x*K.x,z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/K.y),l.y=c.y*K.y,z.mapSize.y=c.y));const $=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=$,z.map===null||rt===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===tl){if(R.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new qi(l.x,l.y,{format:Wr,type:Aa,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),z.map.texture.name=R.name+".shadowMap",z.map.depthTexture=new fl(l.x,l.y,ki),z.map.depthTexture.name=R.name+".shadowMapDepth",z.map.depthTexture.format=Ra,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Rn,z.map.depthTexture.magFilter=Rn}else R.isPointLight?(z.map=new xx(l.x),z.map.depthTexture=new nE(l.x,ji)):(z.map=new qi(l.x,l.y),z.map.depthTexture=new fl(l.x,l.y,ji)),z.map.depthTexture.name=R.name+".shadowMap",z.map.depthTexture.format=Ra,this.type===ou?(z.map.depthTexture.compareFunction=$?Mp:yp,z.map.depthTexture.minFilter=Nn,z.map.depthTexture.magFilter=Nn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Rn,z.map.depthTexture.magFilter=Rn);z.camera.updateProjectionMatrix()}const _t=z.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<_t;N++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,N),r.clear();else{N===0&&(r.setRenderTarget(z.map),r.clear());const j=z.getViewport(N);f.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),Q.viewport(f)}if(R.isPointLight){const j=z.camera,ht=z.matrix,Rt=R.distance||j.far;Rt!==j.far&&(j.far=Rt,j.updateProjectionMatrix()),$o.setFromMatrixPosition(R.matrixWorld),j.position.copy($o),_d.copy(j.position),_d.add(LR[N]),j.up.copy(NR[N]),j.lookAt(_d),j.updateMatrixWorld(),ht.makeTranslation(-$o.x,-$o.y,-$o.z),Dv.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Dv,j.coordinateSystem,j.reversedDepth)}else z.updateMatrices(R);s=z.getFrustum(),U(H,T,z.camera,R,this.type)}z.isPointLightShadow!==!0&&this.type===tl&&D(z,T),z.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(O,mt,G)};function D(I,H){const T=t.update(w);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new qi(l.x,l.y,{format:Wr,type:Aa})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(H,null,T,g,w,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(H,null,T,S,w,null)}function L(I,H,T,O){let mt=null;const G=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)mt=G;else if(mt=T.isPointLight===!0?m:d,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const Q=mt.uuid,rt=H.uuid;let ot=p[Q];ot===void 0&&(ot={},p[Q]=ot);let at=ot[rt];at===void 0&&(at=mt.clone(),ot[rt]=at,H.addEventListener("dispose",V)),mt=at}if(mt.visible=H.visible,mt.wireframe=H.wireframe,O===tl?mt.side=H.shadowSide!==null?H.shadowSide:H.side:mt.side=H.shadowSide!==null?H.shadowSide:v[H.side],mt.alphaMap=H.alphaMap,mt.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,mt.map=H.map,mt.clipShadows=H.clipShadows,mt.clippingPlanes=H.clippingPlanes,mt.clipIntersection=H.clipIntersection,mt.displacementMap=H.displacementMap,mt.displacementScale=H.displacementScale,mt.displacementBias=H.displacementBias,mt.wireframeLinewidth=H.wireframeLinewidth,mt.linewidth=H.linewidth,T.isPointLight===!0&&mt.isMeshDistanceMaterial===!0){const Q=r.properties.get(mt);Q.light=T}return mt}function U(I,H,T,O,mt){if(I.visible===!1)return;if(I.layers.test(H.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&mt===tl)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const rt=t.update(I),ot=I.material;if(Array.isArray(ot)){const at=rt.groups;for(let R=0,z=at.length;R<z;R++){const K=at[R],$=ot[K.materialIndex];if($&&$.visible){const _t=L(I,$,O,mt);I.onBeforeShadow(r,I,H,T,rt,_t,K),r.renderBufferDirect(T,null,rt,_t,I,K),I.onAfterShadow(r,I,H,T,rt,_t,K)}}}else if(ot.visible){const at=L(I,ot,O,mt);I.onBeforeShadow(r,I,H,T,rt,at,null),r.renderBufferDirect(T,null,rt,at,I,null),I.onAfterShadow(r,I,H,T,rt,at,null)}}const Q=I.children;for(let rt=0,ot=Q.length;rt<ot;rt++)U(Q[rt],H,T,O,mt)}function V(I){I.target.removeEventListener("dispose",V);for(const T in p){const O=p[T],mt=I.target.uuid;mt in O&&(O[mt].dispose(),delete O[mt])}}}function PR(r,t){function i(){let X=!1;const At=new an;let St=null;const Nt=new an(0,0,0,0);return{setMask:function(Et){St!==Et&&!X&&(r.colorMask(Et,Et,Et,Et),St=Et)},setLocked:function(Et){X=Et},setClear:function(Et,ut,zt,se,ze){ze===!0&&(Et*=se,ut*=se,zt*=se),At.set(Et,ut,zt,se),Nt.equals(At)===!1&&(r.clearColor(Et,ut,zt,se),Nt.copy(At))},reset:function(){X=!1,St=null,Nt.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,St=null,Nt=null,Et=null;return{setReversed:function(ut){if(At!==ut){const zt=t.get("EXT_clip_control");ut?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),At=ut;const se=Et;Et=null,this.setClear(se)}},getReversed:function(){return At},setTest:function(ut){ut?vt(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(ut){St!==ut&&!X&&(r.depthMask(ut),St=ut)},setFunc:function(ut){if(At&&(ut=wM[ut]),Nt!==ut){switch(ut){case yd:r.depthFunc(r.NEVER);break;case Md:r.depthFunc(r.ALWAYS);break;case Ed:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case bd:r.depthFunc(r.EQUAL);break;case Td:r.depthFunc(r.GEQUAL);break;case Ad:r.depthFunc(r.GREATER);break;case Rd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Nt=ut}},setLocked:function(ut){X=ut},setClear:function(ut){Et!==ut&&(Et=ut,At&&(ut=1-ut),r.clearDepth(ut))},reset:function(){X=!1,St=null,Nt=null,Et=null,At=!1}}}function l(){let X=!1,At=null,St=null,Nt=null,Et=null,ut=null,zt=null,se=null,ze=null;return{setTest:function(Re){X||(Re?vt(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(Re){At!==Re&&!X&&(r.stencilMask(Re),At=Re)},setFunc:function(Re,Pn,Ei){(St!==Re||Nt!==Pn||Et!==Ei)&&(r.stencilFunc(Re,Pn,Ei),St=Re,Nt=Pn,Et=Ei)},setOp:function(Re,Pn,Ei){(ut!==Re||zt!==Pn||se!==Ei)&&(r.stencilOp(Re,Pn,Ei),ut=Re,zt=Pn,se=Ei)},setLocked:function(Re){X=Re},setClear:function(Re){ze!==Re&&(r.clearStencil(Re),ze=Re)},reset:function(){X=!1,At=null,St=null,Nt=null,Et=null,ut=null,zt=null,se=null,ze=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g=new WeakMap,S=[],E=null,w=!1,M=null,y=null,D=null,L=null,U=null,V=null,I=null,H=new xe(0,0,0),T=0,O=!1,mt=null,G=null,Q=null,rt=null,ot=null;const at=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,z=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),R=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),R=z>=2);let $=null,_t={};const N=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),ht=new an().fromArray(N),Rt=new an().fromArray(j);function Gt(X,At,St,Nt){const Et=new Uint8Array(4),ut=r.createTexture();r.bindTexture(X,ut),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<St;zt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,Nt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(At+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return ut}const tt={};tt[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),vt(r.DEPTH_TEST),f.setFunc(kr),oe(!1),Oe(S_),vt(r.CULL_FACE),he(ba);function vt(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Tt(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function kt(X,At){return v[X]!==At?(r.bindFramebuffer(X,At),v[X]=At,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=At),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=At),!0):!1}function Zt(X,At){let St=S,Nt=!1;if(X){St=g.get(At),St===void 0&&(St=[],g.set(At,St));const Et=X.textures;if(St.length!==Et.length||St[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,zt=Et.length;ut<zt;ut++)St[ut]=r.COLOR_ATTACHMENT0+ut;St.length=Et.length,Nt=!0}}else St[0]!==r.BACK&&(St[0]=r.BACK,Nt=!0);Nt&&r.drawBuffers(St)}function ee(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Ge={[Ps]:r.FUNC_ADD,[Qy]:r.FUNC_SUBTRACT,[$y]:r.FUNC_REVERSE_SUBTRACT};Ge[tM]=r.MIN,Ge[eM]=r.MAX;const re={[nM]:r.ZERO,[iM]:r.ONE,[aM]:r.SRC_COLOR,[xd]:r.SRC_ALPHA,[uM]:r.SRC_ALPHA_SATURATE,[lM]:r.DST_COLOR,[rM]:r.DST_ALPHA,[sM]:r.ONE_MINUS_SRC_COLOR,[Sd]:r.ONE_MINUS_SRC_ALPHA,[cM]:r.ONE_MINUS_DST_COLOR,[oM]:r.ONE_MINUS_DST_ALPHA,[fM]:r.CONSTANT_COLOR,[hM]:r.ONE_MINUS_CONSTANT_COLOR,[dM]:r.CONSTANT_ALPHA,[pM]:r.ONE_MINUS_CONSTANT_ALPHA};function he(X,At,St,Nt,Et,ut,zt,se,ze,Re){if(X===ba){w===!0&&(Tt(r.BLEND),w=!1);return}if(w===!1&&(vt(r.BLEND),w=!0),X!==Jy){if(X!==M||Re!==O){if((y!==Ps||U!==Ps)&&(r.blendEquation(r.FUNC_ADD),y=Ps,U=Ps),Re)switch(X){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case y_:r.blendFunc(r.ONE,r.ONE);break;case M_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case E_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Le("WebGLState: Invalid blending: ",X);break}else switch(X){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case y_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case M_:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E_:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",X);break}D=null,L=null,V=null,I=null,H.set(0,0,0),T=0,M=X,O=Re}return}Et=Et||At,ut=ut||St,zt=zt||Nt,(At!==y||Et!==U)&&(r.blendEquationSeparate(Ge[At],Ge[Et]),y=At,U=Et),(St!==D||Nt!==L||ut!==V||zt!==I)&&(r.blendFuncSeparate(re[St],re[Nt],re[ut],re[zt]),D=St,L=Nt,V=ut,I=zt),(se.equals(H)===!1||ze!==T)&&(r.blendColor(se.r,se.g,se.b,ze),H.copy(se),T=ze),M=X,O=!1}function Ae(X,At){X.side===Vi?Tt(r.CULL_FACE):vt(r.CULL_FACE);let St=X.side===Kn;At&&(St=!St),oe(St),X.blending===Gr&&X.transparent===!1?he(ba):he(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Nt=X.stencilWrite;d.setTest(Nt),Nt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),qe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(X){mt!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),mt=X)}function Oe(X){X!==Zy?(vt(r.CULL_FACE),X!==G&&(X===S_?r.cullFace(r.BACK):X===Ky?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),G=X}function B(X){X!==Q&&(R&&r.lineWidth(X),Q=X)}function qe(X,At,St){X?(vt(r.POLYGON_OFFSET_FILL),(rt!==At||ot!==St)&&(rt=At,ot=St,f.getReversed()&&(At=-At),r.polygonOffset(At,St))):Tt(r.POLYGON_OFFSET_FILL)}function Se(X){X?vt(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function Ht(X){X===void 0&&(X=r.TEXTURE0+at-1),$!==X&&(r.activeTexture(X),$=X)}function Ot(X,At,St){St===void 0&&($===null?St=r.TEXTURE0+at-1:St=$);let Nt=_t[St];Nt===void 0&&(Nt={type:void 0,texture:void 0},_t[St]=Nt),(Nt.type!==X||Nt.texture!==At)&&($!==St&&(r.activeTexture(St),$=St),r.bindTexture(X,At||tt[X]),Nt.type=X,Nt.texture=At)}function P(){const X=_t[$];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(X){Le("WebGLState:",X)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(X){Le("WebGLState:",X)}}function dt(){try{r.texSubImage2D(...arguments)}catch(X){Le("WebGLState:",X)}}function Mt(){try{r.texSubImage3D(...arguments)}catch(X){Le("WebGLState:",X)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Le("WebGLState:",X)}}function wt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Le("WebGLState:",X)}}function Ct(){try{r.texStorage2D(...arguments)}catch(X){Le("WebGLState:",X)}}function Kt(){try{r.texStorage3D(...arguments)}catch(X){Le("WebGLState:",X)}}function $t(){try{r.texImage2D(...arguments)}catch(X){Le("WebGLState:",X)}}function gt(){try{r.texImage3D(...arguments)}catch(X){Le("WebGLState:",X)}}function bt(X){ht.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),ht.copy(X))}function Ft(X){Rt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Rt.copy(X))}function Lt(X,At){let St=p.get(At);St===void 0&&(St=new WeakMap,p.set(At,St));let Nt=St.get(X);Nt===void 0&&(Nt=r.getUniformBlockIndex(At,X.name),St.set(X,Nt))}function Pt(X,At){const Nt=p.get(At).get(X);m.get(At)!==Nt&&(r.uniformBlockBinding(At,Nt,X.__bindingPointIndex),m.set(At,Nt))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},$=null,_t={},v={},g=new WeakMap,S=[],E=null,w=!1,M=null,y=null,D=null,L=null,U=null,V=null,I=null,H=new xe(0,0,0),T=0,O=!1,mt=null,G=null,Q=null,rt=null,ot=null,ht.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:vt,disable:Tt,bindFramebuffer:kt,drawBuffers:Zt,useProgram:ee,setBlending:he,setMaterial:Ae,setFlipSided:oe,setCullFace:Oe,setLineWidth:B,setPolygonOffset:qe,setScissorTest:Se,activeTexture:Ht,bindTexture:Ot,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:Y,texImage2D:$t,texImage3D:gt,updateUBOMapping:Lt,uniformBlockBinding:Pt,texStorage2D:Ct,texStorage3D:Kt,texSubImage2D:dt,texSubImage3D:Mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:wt,scissor:bt,viewport:Ft,reset:fe}}function zR(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Vt,_=new WeakMap;let v;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return S?new OffscreenCanvas(P,b):ul("canvas")}function w(P,b,Y){let dt=1;const Mt=Ot(P);if((Mt.width>Y||Mt.height>Y)&&(dt=Y/Math.max(Mt.width,Mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ct=Math.floor(dt*Mt.width),wt=Math.floor(dt*Mt.height);v===void 0&&(v=E(ct,wt));const Ct=b?E(ct,wt):v;return Ct.width=ct,Ct.height=wt,Ct.getContext("2d").drawImage(P,0,0,ct,wt),ie("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ct+"x"+wt+")."),Ct}else return"data"in P&&ie("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function M(P){return P.generateMipmaps}function y(P){r.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,b,Y,dt,Mt=!1){if(P!==null){if(r[P]!==void 0)return r[P];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct=b;if(b===r.RED&&(Y===r.FLOAT&&(ct=r.R32F),Y===r.HALF_FLOAT&&(ct=r.R16F),Y===r.UNSIGNED_BYTE&&(ct=r.R8)),b===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.R8UI),Y===r.UNSIGNED_SHORT&&(ct=r.R16UI),Y===r.UNSIGNED_INT&&(ct=r.R32UI),Y===r.BYTE&&(ct=r.R8I),Y===r.SHORT&&(ct=r.R16I),Y===r.INT&&(ct=r.R32I)),b===r.RG&&(Y===r.FLOAT&&(ct=r.RG32F),Y===r.HALF_FLOAT&&(ct=r.RG16F),Y===r.UNSIGNED_BYTE&&(ct=r.RG8)),b===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RG16UI),Y===r.UNSIGNED_INT&&(ct=r.RG32UI),Y===r.BYTE&&(ct=r.RG8I),Y===r.SHORT&&(ct=r.RG16I),Y===r.INT&&(ct=r.RG32I)),b===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),Y===r.UNSIGNED_INT&&(ct=r.RGB32UI),Y===r.BYTE&&(ct=r.RGB8I),Y===r.SHORT&&(ct=r.RGB16I),Y===r.INT&&(ct=r.RGB32I)),b===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ct=r.RGBA32UI),Y===r.BYTE&&(ct=r.RGBA8I),Y===r.SHORT&&(ct=r.RGBA16I),Y===r.INT&&(ct=r.RGBA32I)),b===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),b===r.RGBA){const wt=Mt?pu:Ce.getTransfer(dt);Y===r.FLOAT&&(ct=r.RGBA32F),Y===r.HALF_FLOAT&&(ct=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ct=wt===He?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function U(P,b){let Y;return P?b===null||b===ji||b===ll?Y=r.DEPTH24_STENCIL8:b===ki?Y=r.DEPTH32F_STENCIL8:b===ol&&(Y=r.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===ll?Y=r.DEPTH_COMPONENT24:b===ki?Y=r.DEPTH_COMPONENT32F:b===ol&&(Y=r.DEPTH_COMPONENT16),Y}function V(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rn&&P.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function I(P){const b=P.target;b.removeEventListener("dispose",I),T(b),b.isVideoTexture&&_.delete(b)}function H(P){const b=P.target;b.removeEventListener("dispose",H),mt(b)}function T(P){const b=s.get(P);if(b.__webglInit===void 0)return;const Y=P.source,dt=g.get(Y);if(dt){const Mt=dt[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&O(P),Object.keys(dt).length===0&&g.delete(Y)}s.remove(P)}function O(P){const b=s.get(P);r.deleteTexture(b.__webglTexture);const Y=P.source,dt=g.get(Y);delete dt[b.__cacheKey],f.memory.textures--}function mt(P){const b=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let Mt=0;Mt<b.__webglFramebuffer[dt].length;Mt++)r.deleteFramebuffer(b.__webglFramebuffer[dt][Mt]);else r.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)r.deleteFramebuffer(b.__webglFramebuffer[dt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=P.textures;for(let dt=0,Mt=Y.length;dt<Mt;dt++){const ct=s.get(Y[dt]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),f.memory.textures--),s.remove(Y[dt])}s.remove(P)}let G=0;function Q(){G=0}function rt(){const P=G;return P>=l.maxTextures&&ie("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),G+=1,P}function ot(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function at(P,b){const Y=s.get(P);if(P.isVideoTexture&&Se(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){const dt=P.image;if(dt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Y,P,b);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+b)}function R(P,b){const Y=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){tt(Y,P,b);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+b)}function z(P,b){const Y=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){tt(Y,P,b);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+b)}function K(P,b){const Y=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Y.__version!==P.version){vt(Y,P,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+b)}const $={[du]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[Cd]:r.MIRRORED_REPEAT},_t={[Rn]:r.NEAREST,[_M]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[Ph]:r.LINEAR_MIPMAP_NEAREST,[Is]:r.LINEAR_MIPMAP_LINEAR},N={[SM]:r.NEVER,[TM]:r.ALWAYS,[yM]:r.LESS,[yp]:r.LEQUAL,[MM]:r.EQUAL,[Mp]:r.GEQUAL,[EM]:r.GREATER,[bM]:r.NOTEQUAL};function j(P,b){if(b.type===ki&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===Ph||b.magFilter===wc||b.magFilter===Is||b.minFilter===Nn||b.minFilter===Ph||b.minFilter===wc||b.minFilter===Is)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,$[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,$[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,$[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,_t[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Rn||b.minFilter!==wc&&b.minFilter!==Is||b.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ht(P,b){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",I));const dt=b.source;let Mt=g.get(dt);Mt===void 0&&(Mt={},g.set(dt,Mt));const ct=ot(b);if(ct!==P.__cacheKey){Mt[ct]===void 0&&(Mt[ct]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),Mt[ct].usedTimes++;const wt=Mt[P.__cacheKey];wt!==void 0&&(Mt[P.__cacheKey].usedTimes--,wt.usedTimes===0&&O(b)),P.__cacheKey=ct,P.__webglTexture=Mt[ct].texture}return Y}function Rt(P,b,Y){return Math.floor(Math.floor(P/Y)/b)}function Gt(P,b,Y,dt){const ct=P.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Y,dt,b.data);else{ct.sort((gt,bt)=>gt.start-bt.start);let wt=0;for(let gt=1;gt<ct.length;gt++){const bt=ct[wt],Ft=ct[gt],Lt=bt.start+bt.count,Pt=Rt(Ft.start,b.width,4),fe=Rt(bt.start,b.width,4);Ft.start<=Lt+1&&Pt===fe&&Rt(Ft.start+Ft.count-1,b.width,4)===Pt?bt.count=Math.max(bt.count,Ft.start+Ft.count-bt.start):(++wt,ct[wt]=Ft)}ct.length=wt+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),Kt=r.getParameter(r.UNPACK_SKIP_PIXELS),$t=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let gt=0,bt=ct.length;gt<bt;gt++){const Ft=ct[gt],Lt=Math.floor(Ft.start/4),Pt=Math.ceil(Ft.count/4),fe=Lt%b.width,X=Math.floor(Lt/b.width),At=Pt,St=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,fe,X,At,St,Y,dt,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,$t)}}function tt(P,b,Y){let dt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=r.TEXTURE_3D);const Mt=ht(P,b),ct=b.source;i.bindTexture(dt,P.__webglTexture,r.TEXTURE0+Y);const wt=s.get(ct);if(ct.version!==wt.__version||Mt===!0){i.activeTexture(r.TEXTURE0+Y);const Ct=Ce.getPrimaries(Ce.workingColorSpace),Kt=b.colorSpace===os?null:Ce.getPrimaries(b.colorSpace),$t=b.colorSpace===os||Ct===Kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let gt=w(b.image,!1,l.maxTextureSize);gt=Ht(b,gt);const bt=c.convert(b.format,b.colorSpace),Ft=c.convert(b.type);let Lt=L(b.internalFormat,bt,Ft,b.colorSpace,b.isVideoTexture);j(dt,b);let Pt;const fe=b.mipmaps,X=b.isVideoTexture!==!0,At=wt.__version===void 0||Mt===!0,St=ct.dataReady,Nt=V(b,gt);if(b.isDepthTexture)Lt=U(b.format===Fs,b.type),At&&(X?i.texStorage2D(r.TEXTURE_2D,1,Lt,gt.width,gt.height):i.texImage2D(r.TEXTURE_2D,0,Lt,gt.width,gt.height,0,bt,Ft,null));else if(b.isDataTexture)if(fe.length>0){X&&At&&i.texStorage2D(r.TEXTURE_2D,Nt,Lt,fe[0].width,fe[0].height);for(let Et=0,ut=fe.length;Et<ut;Et++)Pt=fe[Et],X?St&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Pt.width,Pt.height,bt,Ft,Pt.data):i.texImage2D(r.TEXTURE_2D,Et,Lt,Pt.width,Pt.height,0,bt,Ft,Pt.data);b.generateMipmaps=!1}else X?(At&&i.texStorage2D(r.TEXTURE_2D,Nt,Lt,gt.width,gt.height),St&&Gt(b,gt,bt,Ft)):i.texImage2D(r.TEXTURE_2D,0,Lt,gt.width,gt.height,0,bt,Ft,gt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&At&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Lt,fe[0].width,fe[0].height,gt.depth);for(let Et=0,ut=fe.length;Et<ut;Et++)if(Pt=fe[Et],b.format!==Ni)if(bt!==null)if(X){if(St)if(b.layerUpdates.size>0){const zt=ov(Pt.width,Pt.height,b.format,b.type);for(const se of b.layerUpdates){const ze=Pt.data.subarray(se*zt/Pt.data.BYTES_PER_ELEMENT,(se+1)*zt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,se,Pt.width,Pt.height,1,bt,ze)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Pt.width,Pt.height,gt.depth,bt,Pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,Lt,Pt.width,Pt.height,gt.depth,0,Pt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?St&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Pt.width,Pt.height,gt.depth,bt,Ft,Pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Et,Lt,Pt.width,Pt.height,gt.depth,0,bt,Ft,Pt.data)}else{X&&At&&i.texStorage2D(r.TEXTURE_2D,Nt,Lt,fe[0].width,fe[0].height);for(let Et=0,ut=fe.length;Et<ut;Et++)Pt=fe[Et],b.format!==Ni?bt!==null?X?St&&i.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Pt.width,Pt.height,bt,Pt.data):i.compressedTexImage2D(r.TEXTURE_2D,Et,Lt,Pt.width,Pt.height,0,Pt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?St&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Pt.width,Pt.height,bt,Ft,Pt.data):i.texImage2D(r.TEXTURE_2D,Et,Lt,Pt.width,Pt.height,0,bt,Ft,Pt.data)}else if(b.isDataArrayTexture)if(X){if(At&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Lt,gt.width,gt.height,gt.depth),St)if(b.layerUpdates.size>0){const Et=ov(gt.width,gt.height,b.format,b.type);for(const ut of b.layerUpdates){const zt=gt.data.subarray(ut*Et/gt.data.BYTES_PER_ELEMENT,(ut+1)*Et/gt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,gt.width,gt.height,1,bt,Ft,zt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,bt,Ft,gt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,gt.width,gt.height,gt.depth,0,bt,Ft,gt.data);else if(b.isData3DTexture)X?(At&&i.texStorage3D(r.TEXTURE_3D,Nt,Lt,gt.width,gt.height,gt.depth),St&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,bt,Ft,gt.data)):i.texImage3D(r.TEXTURE_3D,0,Lt,gt.width,gt.height,gt.depth,0,bt,Ft,gt.data);else if(b.isFramebufferTexture){if(At)if(X)i.texStorage2D(r.TEXTURE_2D,Nt,Lt,gt.width,gt.height);else{let Et=gt.width,ut=gt.height;for(let zt=0;zt<Nt;zt++)i.texImage2D(r.TEXTURE_2D,zt,Lt,Et,ut,0,bt,Ft,null),Et>>=1,ut>>=1}}else if(fe.length>0){if(X&&At){const Et=Ot(fe[0]);i.texStorage2D(r.TEXTURE_2D,Nt,Lt,Et.width,Et.height)}for(let Et=0,ut=fe.length;Et<ut;Et++)Pt=fe[Et],X?St&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,bt,Ft,Pt):i.texImage2D(r.TEXTURE_2D,Et,Lt,bt,Ft,Pt);b.generateMipmaps=!1}else if(X){if(At){const Et=Ot(gt);i.texStorage2D(r.TEXTURE_2D,Nt,Lt,Et.width,Et.height)}St&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Ft,gt)}else i.texImage2D(r.TEXTURE_2D,0,Lt,bt,Ft,gt);M(b)&&y(dt),wt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function vt(P,b,Y){if(b.image.length!==6)return;const dt=ht(P,b),Mt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const ct=s.get(Mt);if(Mt.version!==ct.__version||dt===!0){i.activeTexture(r.TEXTURE0+Y);const wt=Ce.getPrimaries(Ce.workingColorSpace),Ct=b.colorSpace===os?null:Ce.getPrimaries(b.colorSpace),Kt=b.colorSpace===os||wt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const $t=b.isCompressedTexture||b.image[0].isCompressedTexture,gt=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let ut=0;ut<6;ut++)!$t&&!gt?bt[ut]=w(b.image[ut],!0,l.maxCubemapSize):bt[ut]=gt?b.image[ut].image:b.image[ut],bt[ut]=Ht(b,bt[ut]);const Ft=bt[0],Lt=c.convert(b.format,b.colorSpace),Pt=c.convert(b.type),fe=L(b.internalFormat,Lt,Pt,b.colorSpace),X=b.isVideoTexture!==!0,At=ct.__version===void 0||dt===!0,St=Mt.dataReady;let Nt=V(b,Ft);j(r.TEXTURE_CUBE_MAP,b);let Et;if($t){X&&At&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,fe,Ft.width,Ft.height);for(let ut=0;ut<6;ut++){Et=bt[ut].mipmaps;for(let zt=0;zt<Et.length;zt++){const se=Et[zt];b.format!==Ni?Lt!==null?X?St&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,zt,0,0,se.width,se.height,Lt,se.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,zt,fe,se.width,se.height,0,se.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?St&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,zt,0,0,se.width,se.height,Lt,Pt,se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,zt,fe,se.width,se.height,0,Lt,Pt,se.data)}}}else{if(Et=b.mipmaps,X&&At){Et.length>0&&Nt++;const ut=Ot(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,fe,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(gt){X?St&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,bt[ut].width,bt[ut].height,Lt,Pt,bt[ut].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,fe,bt[ut].width,bt[ut].height,0,Lt,Pt,bt[ut].data);for(let zt=0;zt<Et.length;zt++){const ze=Et[zt].image[ut].image;X?St&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,zt+1,0,0,ze.width,ze.height,Lt,Pt,ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,zt+1,fe,ze.width,ze.height,0,Lt,Pt,ze.data)}}else{X?St&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Lt,Pt,bt[ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,fe,Lt,Pt,bt[ut]);for(let zt=0;zt<Et.length;zt++){const se=Et[zt];X?St&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,zt+1,0,0,Lt,Pt,se.image[ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,zt+1,fe,Lt,Pt,se.image[ut])}}}M(b)&&y(r.TEXTURE_CUBE_MAP),ct.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Tt(P,b,Y,dt,Mt,ct){const wt=c.convert(Y.format,Y.colorSpace),Ct=c.convert(Y.type),Kt=L(Y.internalFormat,wt,Ct,Y.colorSpace),$t=s.get(b),gt=s.get(Y);if(gt.__renderTarget=b,!$t.__hasExternalTextures){const bt=Math.max(1,b.width>>ct),Ft=Math.max(1,b.height>>ct);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ct,Kt,bt,Ft,b.depth,0,wt,Ct,null):i.texImage2D(Mt,ct,Kt,bt,Ft,0,wt,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),qe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,Mt,gt.__webglTexture,0,B(b)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,Mt,gt.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(P,b,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const dt=b.depthTexture,Mt=dt&&dt.isDepthTexture?dt.type:null,ct=U(b.stencilBuffer,Mt),wt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(b),ct,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(b),ct,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ct,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,P)}else{const dt=b.textures;for(let Mt=0;Mt<dt.length;Mt++){const ct=dt[Mt],wt=c.convert(ct.format,ct.colorSpace),Ct=c.convert(ct.type),Kt=L(ct.internalFormat,wt,Ct,ct.colorSpace);qe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(b),Kt,b.width,b.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(b),Kt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Kt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Zt(P,b,Y){const dt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=s.get(b.depthTexture);if(Mt.__renderTarget=b,(!Mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),Mt.__webglTexture===void 0){Mt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Mt.__webglTexture),j(r.TEXTURE_CUBE_MAP,b.depthTexture);const $t=c.convert(b.depthTexture.format),gt=c.convert(b.depthTexture.type);let bt;b.depthTexture.format===Ra?bt=r.DEPTH_COMPONENT24:b.depthTexture.format===Fs&&(bt=r.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,bt,b.width,b.height,0,$t,gt,null)}}else at(b.depthTexture,0);const ct=Mt.__webglTexture,wt=B(b),Ct=dt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,Kt=b.depthTexture.format===Fs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ra)qe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Kt,Ct,ct,0,wt):r.framebufferTexture2D(r.FRAMEBUFFER,Kt,Ct,ct,0);else if(b.depthTexture.format===Fs)qe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Kt,Ct,ct,0,wt):r.framebufferTexture2D(r.FRAMEBUFFER,Kt,Ct,ct,0);else throw new Error("Unknown depthTexture format")}function ee(P){const b=s.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const dt=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",Mt)};dt.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=dt}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let dt=0;dt<6;dt++)Zt(b.__webglFramebuffer[dt],P,dt);else{const dt=P.texture.mipmaps;dt&&dt.length>0?Zt(b.__webglFramebuffer[0],P,0):Zt(b.__webglFramebuffer,P,0)}else if(Y){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=r.createRenderbuffer(),kt(b.__webglDepthbuffer[dt],P,!1);else{const Mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ct)}}else{const dt=P.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),kt(b.__webglDepthbuffer,P,!1);else{const Mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(P,b,Y){const dt=s.get(P);b!==void 0&&Tt(dt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&ee(P)}function re(P){const b=P.texture,Y=s.get(P),dt=s.get(b);P.addEventListener("dispose",H);const Mt=P.textures,ct=P.isWebGLCubeRenderTarget===!0,wt=Mt.length>1;if(wt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=b.version,f.memory.textures++),ct){Y.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[Ct]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)Y.__webglFramebuffer[Ct][Kt]=r.createFramebuffer()}else Y.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)Y.__webglFramebuffer[Ct]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(wt)for(let Ct=0,Kt=Mt.length;Ct<Kt;Ct++){const $t=s.get(Mt[Ct]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&qe(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Mt.length;Ct++){const Kt=Mt[Ct];Y.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct]);const $t=c.convert(Kt.format,Kt.colorSpace),gt=c.convert(Kt.type),bt=L(Kt.internalFormat,$t,gt,Kt.colorSpace,P.isXRRenderTarget===!0),Ft=B(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,bt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(Y.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),j(r.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Tt(Y.__webglFramebuffer[Ct][Kt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt);else Tt(Y.__webglFramebuffer[Ct],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(b)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(wt){for(let Ct=0,Kt=Mt.length;Ct<Kt;Ct++){const $t=Mt[Ct],gt=s.get($t);let bt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,gt.__webglTexture),j(bt,$t),Tt(Y.__webglFramebuffer,P,$t,r.COLOR_ATTACHMENT0+Ct,bt,0),M($t)&&y(bt)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ct=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),j(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Tt(Y.__webglFramebuffer[Kt],P,b,r.COLOR_ATTACHMENT0,Ct,Kt);else Tt(Y.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,Ct,0);M(b)&&y(Ct),i.unbindTexture()}P.depthBuffer&&ee(P)}function he(P){const b=P.textures;for(let Y=0,dt=b.length;Y<dt;Y++){const Mt=b[Y];if(M(Mt)){const ct=D(P),wt=s.get(Mt).__webglTexture;i.bindTexture(ct,wt),y(ct),i.unbindTexture()}}}const Ae=[],oe=[];function Oe(P){if(P.samples>0){if(qe(P)===!1){const b=P.textures,Y=P.width,dt=P.height;let Mt=r.COLOR_BUFFER_BIT;const ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=s.get(P),Ct=b.length>1;if(Ct)for(let $t=0;$t<b.length;$t++)i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Kt=P.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let $t=0;$t<b.length;$t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[$t]);const gt=s.get(b[$t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,gt,0)}r.blitFramebuffer(0,0,Y,dt,0,0,Y,dt,Mt,r.NEAREST),m===!0&&(Ae.length=0,oe.length=0,Ae.push(r.COLOR_ATTACHMENT0+$t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ae.push(ct),oe.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ae))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let $t=0;$t<b.length;$t++){i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,wt.__webglColorRenderbuffer[$t]);const gt=s.get(b[$t]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,gt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function B(P){return Math.min(l.maxSamples,P.samples)}function qe(P){const b=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Se(P){const b=f.render.frame;_.get(P)!==b&&(_.set(P,b),P.update())}function Ht(P,b){const Y=P.colorSpace,dt=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==qr&&Y!==os&&(Ce.getTransfer(Y)===He?(dt!==Ni||Mt!==li)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",Y)),b}function Ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=Q,this.setTexture2D=at,this.setTexture2DArray=R,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Ge,this.setupRenderTarget=re,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function IR(r,t){function i(s,l=os){let c;const f=Ce.getTransfer(l);if(s===li)return r.UNSIGNED_BYTE;if(s===gp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_p)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Wv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===qv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===kv)return r.BYTE;if(s===Xv)return r.SHORT;if(s===ol)return r.UNSIGNED_SHORT;if(s===mp)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===Yv)return r.ALPHA;if(s===jv)return r.RGB;if(s===Ni)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===Fs)return r.DEPTH_STENCIL;if(s===Zv)return r.RED;if(s===vp)return r.RED_INTEGER;if(s===Wr)return r.RG;if(s===xp)return r.RG_INTEGER;if(s===Sp)return r.RGBA_INTEGER;if(s===lu||s===cu||s===uu||s===fu)if(f===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===lu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===lu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wd||s===Dd||s===Ud||s===Ld)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ld)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Nd||s===Od)return f===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Pd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===zd)return c.COMPRESSED_R11_EAC;if(s===Id)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Fd)return c.COMPRESSED_RG11_EAC;if(s===Bd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===Yd||s===jd||s===Zd||s===Kd||s===Jd||s===Qd||s===$d)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Hd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===kd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$d)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tp||s===ep||s===np)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===tp)return f===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ip||s===ap||s===sp||s===rp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ip)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const FR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BR=`
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

}`;class HR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new sx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ki({vertexShader:FR,fragmentShader:BR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mi(new ml(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GR extends Gs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",M=new HR,y={},D=i.getContextAttributes();let L=null,U=null;const V=[],I=[],H=new Vt;let T=null;const O=new Si;O.viewport=new an;const mt=new Si;mt.viewport=new an;const G=[O,mt],Q=new JE;let rt=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let vt=V[tt];return vt===void 0&&(vt=new Vh,V[tt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(tt){let vt=V[tt];return vt===void 0&&(vt=new Vh,V[tt]=vt),vt.getGripSpace()},this.getHand=function(tt){let vt=V[tt];return vt===void 0&&(vt=new Vh,V[tt]=vt),vt.getHandSpace()};function at(tt){const vt=I.indexOf(tt.inputSource);if(vt===-1)return;const Tt=V[vt];Tt!==void 0&&(Tt.update(tt.inputSource,tt.frame,p||f),Tt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function R(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",R),l.removeEventListener("inputsourceschange",z);for(let tt=0;tt<V.length;tt++){const vt=I[tt];vt!==null&&(I[tt]=null,V[tt].disconnect(vt))}rt=null,ot=null,M.reset();for(const tt in y)delete y[tt];t.setRenderTarget(L),S=null,g=null,v=null,l=null,U=null,Gt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",R),l.addEventListener("inputsourceschange",z),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(H),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,kt=null,Zt=null;D.depth&&(Zt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=D.stencil?Fs:Ra,kt=D.stencil?ll:ji);const ee={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(ee),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new qi(g.textureWidth,g.textureHeight,{format:Ni,type:li,depthTexture:new fl(g.textureWidth,g.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new qi(S.framebufferWidth,S.framebufferHeight,{format:Ni,type:li,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Gt.setContext(l),Gt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(tt){for(let vt=0;vt<tt.removed.length;vt++){const Tt=tt.removed[vt],kt=I.indexOf(Tt);kt>=0&&(I[kt]=null,V[kt].disconnect(Tt))}for(let vt=0;vt<tt.added.length;vt++){const Tt=tt.added[vt];let kt=I.indexOf(Tt);if(kt===-1){for(let ee=0;ee<V.length;ee++)if(ee>=I.length){I.push(Tt),kt=ee;break}else if(I[ee]===null){I[ee]=Tt,kt=ee;break}if(kt===-1)break}const Zt=V[kt];Zt&&Zt.connect(Tt)}}const K=new q,$=new q;function _t(tt,vt,Tt){K.setFromMatrixPosition(vt.matrixWorld),$.setFromMatrixPosition(Tt.matrixWorld);const kt=K.distanceTo($),Zt=vt.projectionMatrix.elements,ee=Tt.projectionMatrix.elements,Ge=Zt[14]/(Zt[10]-1),re=Zt[14]/(Zt[10]+1),he=(Zt[9]+1)/Zt[5],Ae=(Zt[9]-1)/Zt[5],oe=(Zt[8]-1)/Zt[0],Oe=(ee[8]+1)/ee[0],B=Ge*oe,qe=Ge*Oe,Se=kt/(-oe+Oe),Ht=Se*-oe;if(vt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ht),tt.translateZ(Se),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Zt[10]===-1)tt.projectionMatrix.copy(vt.projectionMatrix),tt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Ot=Ge+Se,P=re+Se,b=B-Ht,Y=qe+(kt-Ht),dt=he*re/P*Ot,Mt=Ae*re/P*Ot;tt.projectionMatrix.makePerspective(b,Y,dt,Mt,Ot,P),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function N(tt,vt){vt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(vt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let vt=tt.near,Tt=tt.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),Q.near=mt.near=O.near=vt,Q.far=mt.far=O.far=Tt,(rt!==Q.near||ot!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),rt=Q.near,ot=Q.far),Q.layers.mask=tt.layers.mask|6,O.layers.mask=Q.layers.mask&-5,mt.layers.mask=Q.layers.mask&-3;const kt=tt.parent,Zt=Q.cameras;N(Q,kt);for(let ee=0;ee<Zt.length;ee++)N(Zt[ee],kt);Zt.length===2?_t(Q,O,mt):Q.projectionMatrix.copy(O.projectionMatrix),j(tt,Q,kt)};function j(tt,vt,Tt){Tt===null?tt.matrix.copy(vt.matrixWorld):(tt.matrix.copy(Tt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(vt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(vt.projectionMatrix),tt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=op*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(tt){m=tt,g!==null&&(g.fixedFoveation=tt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(tt){return y[tt]};let ht=null;function Rt(tt,vt){if(_=vt.getViewerPose(p||f),E=vt,_!==null){const Tt=_.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let kt=!1;Tt.length!==Q.cameras.length&&(Q.cameras.length=0,kt=!0);for(let re=0;re<Tt.length;re++){const he=Tt[re];let Ae=null;if(S!==null)Ae=S.getViewport(he);else{const Oe=v.getViewSubImage(g,he);Ae=Oe.viewport,re===0&&(t.setRenderTargetTextures(U,Oe.colorTexture,Oe.depthStencilTexture),t.setRenderTarget(U))}let oe=G[re];oe===void 0&&(oe=new Si,oe.layers.enable(re),oe.viewport=new an,G[re]=oe),oe.matrix.fromArray(he.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(he.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),re===0&&(Q.matrix.copy(oe.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),kt===!0&&Q.cameras.push(oe)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const re=v.getDepthInformation(Tt[0]);re&&re.isValid&&re.texture&&M.init(re,l.renderState)}if(Zt&&Zt.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let re=0;re<Tt.length;re++){const he=Tt[re].camera;if(he){let Ae=y[he];Ae||(Ae=new sx,y[he]=Ae);const oe=v.getCameraImage(he);Ae.sourceTexture=oe}}}}for(let Tt=0;Tt<V.length;Tt++){const kt=I[Tt],Zt=V[Tt];kt!==null&&Zt!==void 0&&Zt.update(kt,vt,p||f)}ht&&ht(tt,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),E=null}const Gt=new vx;Gt.setAnimationLoop(Rt),this.setAnimationLoop=function(tt){ht=tt},this.dispose=function(){}}}const Os=new Zi,VR=new $e;function kR(r,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,mx(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,D,L,U){y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),_(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,U)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),w(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?m(M,y,D,L):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Kn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Kn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=t.get(y),L=D.envMap,U=D.envMapRotation;L&&(M.envMap.value=L,Os.copy(U),Os.x*=-1,Os.y*=-1,Os.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),M.envMapRotation.value.setFromMatrix4(VR.makeRotationFromEuler(Os)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,D,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const D=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function XR(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,L){const U=L.program;s.uniformBlockBinding(D,U)}function p(D,L){let U=l[D.id];U===void 0&&(E(D),U=_(D),l[D.id]=U,D.addEventListener("dispose",M));const V=L.program;s.updateUBOMapping(D,V);const I=t.render.frame;c[D.id]!==I&&(g(D),c[D.id]=I)}function _(D){const L=v();D.__bindingPointIndex=L;const U=r.createBuffer(),V=D.__size,I=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,V,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function v(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const L=l[D.id],U=D.uniforms,V=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let I=0,H=U.length;I<H;I++){const T=Array.isArray(U[I])?U[I]:[U[I]];for(let O=0,mt=T.length;O<mt;O++){const G=T[O];if(S(G,I,O,V)===!0){const Q=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let ot=0;for(let at=0;at<rt.length;at++){const R=rt[at],z=w(R);typeof R=="number"||typeof R=="boolean"?(G.__data[0]=R,r.bufferSubData(r.UNIFORM_BUFFER,Q+ot,G.__data)):R.isMatrix3?(G.__data[0]=R.elements[0],G.__data[1]=R.elements[1],G.__data[2]=R.elements[2],G.__data[3]=0,G.__data[4]=R.elements[3],G.__data[5]=R.elements[4],G.__data[6]=R.elements[5],G.__data[7]=0,G.__data[8]=R.elements[6],G.__data[9]=R.elements[7],G.__data[10]=R.elements[8],G.__data[11]=0):(R.toArray(G.__data,ot),ot+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,L,U,V){const I=D.value,H=L+"_"+U;if(V[H]===void 0)return typeof I=="number"||typeof I=="boolean"?V[H]=I:V[H]=I.clone(),!0;{const T=V[H];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return V[H]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function E(D){const L=D.uniforms;let U=0;const V=16;for(let H=0,T=L.length;H<T;H++){const O=Array.isArray(L[H])?L[H]:[L[H]];for(let mt=0,G=O.length;mt<G;mt++){const Q=O[mt],rt=Array.isArray(Q.value)?Q.value:[Q.value];for(let ot=0,at=rt.length;ot<at;ot++){const R=rt[ot],z=w(R),K=U%V,$=K%z.boundary,_t=K+$;U+=$,_t!==0&&V-_t<z.storage&&(U+=V-_t),Q.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=U,U+=z.storage}}}const I=U%V;return I>0&&(U+=V-I),D.__size=U,D.__cache={},this}function w(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",D),L}function M(D){const L=D.target;L.removeEventListener("dispose",M);const U=f.indexOf(L.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}const WR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function qR(){return Hi===null&&(Hi=new JM(WR,16,16,Wr,Aa),Hi.name="DFG_LUT",Hi.minFilter=Nn,Hi.magFilter=Nn,Hi.wrapS=Ma,Hi.wrapT=Ma,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class YR{constructor(t={}){const{canvas:i=RM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=li}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const w=S,M=new Set([Sp,xp,vp]),y=new Set([li,ji,ol,ll,gp,_p]),D=new Uint32Array(4),L=new Int32Array(4);let U=null,V=null;const I=[],H=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let mt=!1;this._outputColorSpace=xi;let G=0,Q=0,rt=null,ot=-1,at=null;const R=new an,z=new an;let K=null;const $=new xe(0);let _t=0,N=i.width,j=i.height,ht=1,Rt=null,Gt=null;const tt=new an(0,0,N,j),vt=new an(0,0,N,j);let Tt=!1;const kt=new Tp;let Zt=!1,ee=!1;const Ge=new $e,re=new q,he=new an,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Oe(){return rt===null?ht:1}let B=s;function qe(C,W){return i.getContext(C,W)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pp}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",se,!1),i.addEventListener("webglcontextcreationerror",ze,!1),B===null){const W="webgl2";if(B=qe(W,C),B===null)throw qe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Le("WebGLRenderer: "+C.message),C}let Se,Ht,Ot,P,b,Y,dt,Mt,ct,wt,Ct,Kt,$t,gt,bt,Ft,Lt,Pt,fe,X,At,St,Nt;function Et(){Se=new Y1(B),Se.init(),At=new IR(B,Se),Ht=new B1(B,Se,t,At),Ot=new PR(B,Se),Ht.reversedDepthBuffer&&g&&Ot.buffers.depth.setReversed(!0),P=new K1(B),b=new yR,Y=new zR(B,Se,Ot,b,Ht,At,P),dt=new q1(O),Mt=new eb(B),St=new I1(B,Mt),ct=new j1(B,Mt,P,St),wt=new Q1(B,ct,Mt,St,P),Pt=new J1(B,Ht,Y),bt=new H1(b),Ct=new SR(O,dt,Se,Ht,St,bt),Kt=new kR(O,b),$t=new ER,gt=new wR(Se),Lt=new z1(O,dt,Ot,wt,E,m),Ft=new OR(O,wt,Ht),Nt=new XR(B,P,Ht,Ot),fe=new F1(B,Se,P),X=new Z1(B,Se,P),P.programs=Ct.programs,O.capabilities=Ht,O.extensions=Se,O.properties=b,O.renderLists=$t,O.shadowMap=Ft,O.state=Ot,O.info=P}Et(),w!==li&&(T=new tA(w,i.width,i.height,l,c));const ut=new GR(O,B);this.xr=ut,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(C){C!==void 0&&(ht=C,this.setSize(N,j,!1))},this.getSize=function(C){return C.set(N,j)},this.setSize=function(C,W,lt=!0){if(ut.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,j=W,i.width=Math.floor(C*ht),i.height=Math.floor(W*ht),lt===!0&&(i.style.width=C+"px",i.style.height=W+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(N*ht,j*ht).floor()},this.setDrawingBufferSize=function(C,W,lt){N=C,j=W,ht=lt,i.width=Math.floor(C*lt),i.height=Math.floor(W*lt),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(w===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,W,lt,it){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,W,lt,it),Ot.viewport(R.copy(tt).multiplyScalar(ht).round())},this.getScissor=function(C){return C.copy(vt)},this.setScissor=function(C,W,lt,it){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,W,lt,it),Ot.scissor(z.copy(vt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(C){Ot.setScissorTest(Tt=C)},this.setOpaqueSort=function(C){Rt=C},this.setTransparentSort=function(C){Gt=C},this.getClearColor=function(C){return C.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,lt=!0){let it=0;if(C){let J=!1;if(rt!==null){const Ut=rt.texture.format;J=M.has(Ut)}if(J){const Ut=rt.texture.type,Xt=y.has(Ut),It=Lt.getClearColor(),jt=Lt.getClearAlpha(),Qt=It.r,ae=It.g,ce=It.b;Xt?(D[0]=Qt,D[1]=ae,D[2]=ce,D[3]=jt,B.clearBufferuiv(B.COLOR,0,D)):(L[0]=Qt,L[1]=ae,L[2]=ce,L[3]=jt,B.clearBufferiv(B.COLOR,0,L))}else it|=B.COLOR_BUFFER_BIT}W&&(it|=B.DEPTH_BUFFER_BIT),lt&&(it|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&B.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",se,!1),i.removeEventListener("webglcontextcreationerror",ze,!1),Lt.dispose(),$t.dispose(),gt.dispose(),b.dispose(),dt.dispose(),wt.dispose(),St.dispose(),Nt.dispose(),Ct.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ks),ut.removeEventListener("sessionend",Xs),Oi.stop()};function zt(C){C.preventDefault(),C_("WebGLRenderer: Context Lost."),mt=!0}function se(){C_("WebGLRenderer: Context Restored."),mt=!1;const C=P.autoReset,W=Ft.enabled,lt=Ft.autoUpdate,it=Ft.needsUpdate,J=Ft.type;Et(),P.autoReset=C,Ft.enabled=W,Ft.autoUpdate=lt,Ft.needsUpdate=it,Ft.type=J}function ze(C){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Re(C){const W=C.target;W.removeEventListener("dispose",Re),Pn(W)}function Pn(C){Ei(C),b.remove(C)}function Ei(C){const W=b.get(C).programs;W!==void 0&&(W.forEach(function(lt){Ct.releaseProgram(lt)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,lt,it,J,Ut){W===null&&(W=Ae);const Xt=J.isMesh&&J.matrixWorld.determinant()<0,It=xl(C,W,lt,it,J);Ot.setMaterial(it,Xt);let jt=lt.index,Qt=1;if(it.wireframe===!0){if(jt=ct.getWireframeAttribute(lt),jt===void 0)return;Qt=2}const ae=lt.drawRange,ce=lt.attributes.position;let Wt=ae.start*Qt,pe=(ae.start+ae.count)*Qt;Ut!==null&&(Wt=Math.max(Wt,Ut.start*Qt),pe=Math.min(pe,(Ut.start+Ut.count)*Qt)),jt!==null?(Wt=Math.max(Wt,0),pe=Math.min(pe,jt.count)):ce!=null&&(Wt=Math.max(Wt,0),pe=Math.min(pe,ce.count));const Ke=pe-Wt;if(Ke<0||Ke===1/0)return;St.setup(J,it,It,lt,jt);let Je,we=fe;if(jt!==null&&(Je=Mt.get(jt),we=X,we.setIndex(Je)),J.isMesh)it.wireframe===!0?(Ot.setLineWidth(it.wireframeLinewidth*Oe()),we.setMode(B.LINES)):we.setMode(B.TRIANGLES);else if(J.isLine){let gn=it.linewidth;gn===void 0&&(gn=1),Ot.setLineWidth(gn*Oe()),J.isLineSegments?we.setMode(B.LINES):J.isLineLoop?we.setMode(B.LINE_LOOP):we.setMode(B.LINE_STRIP)}else J.isPoints?we.setMode(B.POINTS):J.isSprite&&we.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)mu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))we.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const gn=J._multiDrawStarts,Yt=J._multiDrawCounts,zn=J._multiDrawCount,le=jt?Mt.get(jt).bytesPerElement:1,In=b.get(it).currentProgram.getUniforms();for(let Jn=0;Jn<zn;Jn++)In.setValue(B,"_gl_DrawID",Jn),we.render(gn[Jn]/le,Yt[Jn])}else if(J.isInstancedMesh)we.renderInstances(Wt,Ke,J.count);else if(lt.isInstancedBufferGeometry){const gn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Yt=Math.min(lt.instanceCount,gn);we.renderInstances(Wt,Ke,Yt)}else we.render(Wt,Ke)};function to(C,W,lt){C.transparent===!0&&C.side===Vi&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,Ca(C,W,lt),C.side=cs,C.needsUpdate=!0,Ca(C,W,lt),C.side=Vi):Ca(C,W,lt)}this.compile=function(C,W,lt=null){lt===null&&(lt=C),V=gt.get(lt),V.init(W),H.push(V),lt.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(V.pushLight(J),J.castShadow&&V.pushShadow(J))}),C!==lt&&C.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(V.pushLight(J),J.castShadow&&V.pushShadow(J))}),V.setupLights();const it=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ut=J.material;if(Ut)if(Array.isArray(Ut))for(let Xt=0;Xt<Ut.length;Xt++){const It=Ut[Xt];to(It,lt,J),it.add(It)}else to(Ut,lt,J),it.add(Ut)}),V=H.pop(),it},this.compileAsync=function(C,W,lt=null){const it=this.compile(C,W,lt);return new Promise(J=>{function Ut(){if(it.forEach(function(Xt){b.get(Xt).currentProgram.isReady()&&it.delete(Xt)}),it.size===0){J(C);return}setTimeout(Ut,10)}Se.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Vs=null;function gl(C){Vs&&Vs(C)}function ks(){Oi.stop()}function Xs(){Oi.start()}const Oi=new vx;Oi.setAnimationLoop(gl),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){Vs=C,ut.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},ut.addEventListener("sessionstart",ks),ut.addEventListener("sessionend",Xs),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(mt===!0)return;const lt=ut.enabled===!0&&ut.isPresenting===!0,it=T!==null&&(rt===null||lt)&&T.begin(O,rt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(W),W=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(O,C,W,rt),V=gt.get(C,H.length),V.init(W),H.push(V),Ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),kt.setFromProjectionMatrix(Ge,Xi,W.reversedDepth),ee=this.localClippingEnabled,Zt=bt.init(this.clippingPlanes,ee),U=$t.get(C,I.length),U.init(),I.push(U),ut.enabled===!0&&ut.isPresenting===!0){const Xt=O.xr.getDepthSensingMesh();Xt!==null&&Ws(Xt,W,-1/0,O.sortObjects)}Ws(C,W,0,O.sortObjects),U.finish(),O.sortObjects===!0&&U.sort(Rt,Gt),oe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,oe&&Lt.addToRenderList(U,C),this.info.render.frame++,Zt===!0&&bt.beginShadows();const J=V.state.shadowsArray;if(Ft.render(J,C,W),Zt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&T.hasRenderPass())===!1){const Xt=U.opaque,It=U.transmissive;if(V.setupLights(),W.isArrayCamera){const jt=W.cameras;if(It.length>0)for(let Qt=0,ae=jt.length;Qt<ae;Qt++){const ce=jt[Qt];on(Xt,It,C,ce)}oe&&Lt.render(C);for(let Qt=0,ae=jt.length;Qt<ae;Qt++){const ce=jt[Qt];bi(U,C,ce,ce.viewport)}}else It.length>0&&on(Xt,It,C,W),oe&&Lt.render(C),bi(U,C,W)}rt!==null&&Q===0&&(Y.updateMultisampleRenderTarget(rt),Y.updateRenderTargetMipmap(rt)),it&&T.end(O),C.isScene===!0&&C.onAfterRender(O,C,W),St.resetDefaultState(),ot=-1,at=null,H.pop(),H.length>0?(V=H[H.length-1],Zt===!0&&bt.setGlobalState(O.clippingPlanes,V.state.camera)):V=null,I.pop(),I.length>0?U=I[I.length-1]:U=null};function Ws(C,W,lt,it){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)V.pushLight(C),C.castShadow&&V.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||kt.intersectsSprite(C)){it&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ge);const Xt=wt.update(C),It=C.material;It.visible&&U.push(C,Xt,It,lt,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||kt.intersectsObject(C))){const Xt=wt.update(C),It=C.material;if(it&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),he.copy(Xt.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(Ge)),Array.isArray(It)){const jt=Xt.groups;for(let Qt=0,ae=jt.length;Qt<ae;Qt++){const ce=jt[Qt],Wt=It[ce.materialIndex];Wt&&Wt.visible&&U.push(C,Xt,Wt,lt,he.z,ce)}}else It.visible&&U.push(C,Xt,It,lt,he.z,null)}}const Ut=C.children;for(let Xt=0,It=Ut.length;Xt<It;Xt++)Ws(Ut[Xt],W,lt,it)}function bi(C,W,lt,it){const{opaque:J,transmissive:Ut,transparent:Xt}=C;V.setupLightsView(lt),Zt===!0&&bt.setGlobalState(O.clippingPlanes,lt),it&&Ot.viewport(R.copy(it)),J.length>0&&mn(J,W,lt),Ut.length>0&&mn(Ut,W,lt),Xt.length>0&&mn(Xt,W,lt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function on(C,W,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[it.id]===void 0){const Wt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[it.id]=new qi(1,1,{generateMipmaps:!0,type:Wt?Aa:li,minFilter:Is,samples:Math.max(4,Ht.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Ut=V.state.transmissionRenderTarget[it.id],Xt=it.viewport||R;Ut.setSize(Xt.z*O.transmissionResolutionScale,Xt.w*O.transmissionResolutionScale);const It=O.getRenderTarget(),jt=O.getActiveCubeFace(),Qt=O.getActiveMipmapLevel();O.setRenderTarget(Ut),O.getClearColor($),_t=O.getClearAlpha(),_t<1&&O.setClearColor(16777215,.5),O.clear(),oe&&Lt.render(lt);const ae=O.toneMapping;O.toneMapping=Wi;const ce=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),V.setupLightsView(it),Zt===!0&&bt.setGlobalState(O.clippingPlanes,it),mn(C,lt,it),Y.updateMultisampleRenderTarget(Ut),Y.updateRenderTargetMipmap(Ut),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let pe=0,Ke=W.length;pe<Ke;pe++){const Je=W[pe],{object:we,geometry:gn,material:Yt,group:zn}=Je;if(Yt.side===Vi&&we.layers.test(it.layers)){const le=Yt.side;Yt.side=Kn,Yt.needsUpdate=!0,Qi(we,lt,it,gn,Yt,zn),Yt.side=le,Yt.needsUpdate=!0,Wt=!0}}Wt===!0&&(Y.updateMultisampleRenderTarget(Ut),Y.updateRenderTargetMipmap(Ut))}O.setRenderTarget(It,jt,Qt),O.setClearColor($,_t),ce!==void 0&&(it.viewport=ce),O.toneMapping=ae}function mn(C,W,lt){const it=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Ut=C.length;J<Ut;J++){const Xt=C[J],{object:It,geometry:jt,group:Qt}=Xt;let ae=Xt.material;ae.allowOverride===!0&&it!==null&&(ae=it),It.layers.test(lt.layers)&&Qi(It,W,lt,jt,ae,Qt)}}function Qi(C,W,lt,it,J,Ut){C.onBeforeRender(O,W,lt,it,J,Ut),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(O,W,lt,it,C,Ut),J.transparent===!0&&J.side===Vi&&J.forceSinglePass===!1?(J.side=Kn,J.needsUpdate=!0,O.renderBufferDirect(lt,W,it,J,C,Ut),J.side=cs,J.needsUpdate=!0,O.renderBufferDirect(lt,W,it,J,C,Ut),J.side=Vi):O.renderBufferDirect(lt,W,it,J,C,Ut),C.onAfterRender(O,W,lt,it,J,Ut)}function Ca(C,W,lt){W.isScene!==!0&&(W=Ae);const it=b.get(C),J=V.state.lights,Ut=V.state.shadowsArray,Xt=J.state.version,It=Ct.getParameters(C,J.state,Ut,W,lt),jt=Ct.getProgramCacheKey(It);let Qt=it.programs;it.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,it.fog=W.fog;const ae=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;it.envMap=dt.get(C.envMap||it.environment,ae),it.envMapRotation=it.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Qt===void 0&&(C.addEventListener("dispose",Re),Qt=new Map,it.programs=Qt);let ce=Qt.get(jt);if(ce!==void 0){if(it.currentProgram===ce&&it.lightsStateVersion===Xt)return vl(C,It),ce}else It.uniforms=Ct.getUniforms(C),C.onBeforeCompile(It,O),ce=Ct.acquireProgram(It,jt),Qt.set(jt,ce),it.uniforms=It.uniforms;const Wt=it.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=bt.uniform),vl(C,It),it.needsLights=eo(C),it.lightsStateVersion=Xt,it.needsLights&&(Wt.ambientLightColor.value=J.state.ambient,Wt.lightProbe.value=J.state.probe,Wt.directionalLights.value=J.state.directional,Wt.directionalLightShadows.value=J.state.directionalShadow,Wt.spotLights.value=J.state.spot,Wt.spotLightShadows.value=J.state.spotShadow,Wt.rectAreaLights.value=J.state.rectArea,Wt.ltc_1.value=J.state.rectAreaLTC1,Wt.ltc_2.value=J.state.rectAreaLTC2,Wt.pointLights.value=J.state.point,Wt.pointLightShadows.value=J.state.pointShadow,Wt.hemisphereLights.value=J.state.hemi,Wt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Wt.spotLightMatrix.value=J.state.spotLightMatrix,Wt.spotLightMap.value=J.state.spotLightMap,Wt.pointShadowMatrix.value=J.state.pointShadowMatrix),it.currentProgram=ce,it.uniformsList=null,ce}function _l(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=hu.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function vl(C,W){const lt=b.get(C);lt.outputColorSpace=W.outputColorSpace,lt.batching=W.batching,lt.batchingColor=W.batchingColor,lt.instancing=W.instancing,lt.instancingColor=W.instancingColor,lt.instancingMorph=W.instancingMorph,lt.skinning=W.skinning,lt.morphTargets=W.morphTargets,lt.morphNormals=W.morphNormals,lt.morphColors=W.morphColors,lt.morphTargetsCount=W.morphTargetsCount,lt.numClippingPlanes=W.numClippingPlanes,lt.numIntersection=W.numClipIntersection,lt.vertexAlphas=W.vertexAlphas,lt.vertexTangents=W.vertexTangents,lt.toneMapping=W.toneMapping}function xl(C,W,lt,it,J){W.isScene!==!0&&(W=Ae),Y.resetTextureUnits();const Ut=W.fog,Xt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?W.environment:null,It=rt===null?O.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:qr,jt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Qt=dt.get(it.envMap||Xt,jt),ae=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ce=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Wt=!!lt.morphAttributes.position,pe=!!lt.morphAttributes.normal,Ke=!!lt.morphAttributes.color;let Je=Wi;it.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Je=O.toneMapping);const we=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,gn=we!==void 0?we.length:0,Yt=b.get(it),zn=V.state.lights;if(Zt===!0&&(ee===!0||C!==at)){const cn=C===at&&it.id===ot;bt.setState(it,C,cn)}let le=!1;it.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==zn.state.version||Yt.outputColorSpace!==It||J.isBatchedMesh&&Yt.batching===!1||!J.isBatchedMesh&&Yt.batching===!0||J.isBatchedMesh&&Yt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Yt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Yt.instancing===!1||!J.isInstancedMesh&&Yt.instancing===!0||J.isSkinnedMesh&&Yt.skinning===!1||!J.isSkinnedMesh&&Yt.skinning===!0||J.isInstancedMesh&&Yt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Yt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Yt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Yt.instancingMorph===!1&&J.morphTexture!==null||Yt.envMap!==Qt||it.fog===!0&&Yt.fog!==Ut||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==bt.numPlanes||Yt.numIntersection!==bt.numIntersection)||Yt.vertexAlphas!==ae||Yt.vertexTangents!==ce||Yt.morphTargets!==Wt||Yt.morphNormals!==pe||Yt.morphColors!==Ke||Yt.toneMapping!==Je||Yt.morphTargetsCount!==gn)&&(le=!0):(le=!0,Yt.__version=it.version);let In=Yt.currentProgram;le===!0&&(In=Ca(it,W,J));let Jn=!1,Ti=!1,Qn=!1;const Pe=In.getUniforms(),ln=Yt.uniforms;if(Ot.useProgram(In.program)&&(Jn=!0,Ti=!0,Qn=!0),it.id!==ot&&(ot=it.id,Ti=!0),Jn||at!==C){Ot.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Pe.setValue(B,"projectionMatrix",C.projectionMatrix),Pe.setValue(B,"viewMatrix",C.matrixWorldInverse);const Ai=Pe.map.cameraPosition;Ai!==void 0&&Ai.setValue(B,re.setFromMatrixPosition(C.matrixWorld)),Ht.logarithmicDepthBuffer&&Pe.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Pe.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),at!==C&&(at=C,Ti=!0,Qn=!0)}if(Yt.needsLights&&(zn.state.directionalShadowMap.length>0&&Pe.setValue(B,"directionalShadowMap",zn.state.directionalShadowMap,Y),zn.state.spotShadowMap.length>0&&Pe.setValue(B,"spotShadowMap",zn.state.spotShadowMap,Y),zn.state.pointShadowMap.length>0&&Pe.setValue(B,"pointShadowMap",zn.state.pointShadowMap,Y)),J.isSkinnedMesh){Pe.setOptional(B,J,"bindMatrix"),Pe.setOptional(B,J,"bindMatrixInverse");const cn=J.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Pe.setValue(B,"boneTexture",cn.boneTexture,Y))}J.isBatchedMesh&&(Pe.setOptional(B,J,"batchingTexture"),Pe.setValue(B,"batchingTexture",J._matricesTexture,Y),Pe.setOptional(B,J,"batchingIdTexture"),Pe.setValue(B,"batchingIdTexture",J._indirectTexture,Y),Pe.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&Pe.setValue(B,"batchingColorTexture",J._colorsTexture,Y));const Fn=lt.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Pt.update(J,lt,In),(Ti||Yt.receiveShadow!==J.receiveShadow)&&(Yt.receiveShadow=J.receiveShadow,Pe.setValue(B,"receiveShadow",J.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&W.environment!==null&&(ln.envMapIntensity.value=W.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=qR()),Ti&&(Pe.setValue(B,"toneMappingExposure",O.toneMappingExposure),Yt.needsLights&&fs(ln,Qn),Ut&&it.fog===!0&&Kt.refreshFogUniforms(ln,Ut),Kt.refreshMaterialUniforms(ln,it,ht,j,V.state.transmissionRenderTarget[C.id]),hu.upload(B,_l(Yt),ln,Y)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(hu.upload(B,_l(Yt),ln,Y),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Pe.setValue(B,"center",J.center),Pe.setValue(B,"modelViewMatrix",J.modelViewMatrix),Pe.setValue(B,"normalMatrix",J.normalMatrix),Pe.setValue(B,"modelMatrix",J.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const cn=it.uniformsGroups;for(let Ai=0,$i=cn.length;Ai<$i;Ai++){const qs=cn[Ai];Nt.update(qs,In),Nt.bind(qs,In)}}return In}function fs(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function eo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(C,W,lt){const it=b.get(C);it.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=W,b.get(C.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const lt=b.get(C);lt.__webglFramebuffer=W,lt.__useDefaultFramebuffer=W===void 0};const wa=B.createFramebuffer();this.setRenderTarget=function(C,W=0,lt=0){rt=C,G=W,Q=lt;let it=null,J=!1,Ut=!1;if(C){const It=b.get(C);if(It.__useDefaultFramebuffer!==void 0){Ot.bindFramebuffer(B.FRAMEBUFFER,It.__webglFramebuffer),R.copy(C.viewport),z.copy(C.scissor),K=C.scissorTest,Ot.viewport(R),Ot.scissor(z),Ot.setScissorTest(K),ot=-1;return}else if(It.__webglFramebuffer===void 0)Y.setupRenderTarget(C);else if(It.__hasExternalTextures)Y.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ae=C.depthTexture;if(It.__boundDepthTexture!==ae){if(ae!==null&&b.has(ae)&&(C.width!==ae.image.width||C.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(C)}}const jt=C.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ut=!0);const Qt=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qt[W])?it=Qt[W][lt]:it=Qt[W],J=!0):C.samples>0&&Y.useMultisampledRTT(C)===!1?it=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Qt)?it=Qt[lt]:it=Qt,R.copy(C.viewport),z.copy(C.scissor),K=C.scissorTest}else R.copy(tt).multiplyScalar(ht).floor(),z.copy(vt).multiplyScalar(ht).floor(),K=Tt;if(lt!==0&&(it=wa),Ot.bindFramebuffer(B.FRAMEBUFFER,it)&&Ot.drawBuffers(C,it),Ot.viewport(R),Ot.scissor(z),Ot.setScissorTest(K),J){const It=b.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,It.__webglTexture,lt)}else if(Ut){const It=W;for(let jt=0;jt<C.textures.length;jt++){const Qt=b.get(C.textures[jt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+jt,Qt.__webglTexture,lt,It)}}else if(C!==null&&lt!==0){const It=b.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,lt)}ot=-1},this.readRenderTargetPixels=function(C,W,lt,it,J,Ut,Xt,It=0){if(!(C&&C.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xt!==void 0&&(jt=jt[Xt]),jt){Ot.bindFramebuffer(B.FRAMEBUFFER,jt);try{const Qt=C.textures[It],ae=Qt.format,ce=Qt.type;if(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+It),!Ht.textureFormatReadable(ae)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(ce)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-it&&lt>=0&&lt<=C.height-J&&B.readPixels(W,lt,it,J,At.convert(ae),At.convert(ce),Ut)}finally{const Qt=rt!==null?b.get(rt).__webglFramebuffer:null;Ot.bindFramebuffer(B.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(C,W,lt,it,J,Ut,Xt,It=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xt!==void 0&&(jt=jt[Xt]),jt)if(W>=0&&W<=C.width-it&&lt>=0&&lt<=C.height-J){Ot.bindFramebuffer(B.FRAMEBUFFER,jt);const Qt=C.textures[It],ae=Qt.format,ce=Qt.type;if(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+It),!Ht.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Wt),B.bufferData(B.PIXEL_PACK_BUFFER,Ut.byteLength,B.STREAM_READ),B.readPixels(W,lt,it,J,At.convert(ae),At.convert(ce),0);const pe=rt!==null?b.get(rt).__webglFramebuffer:null;Ot.bindFramebuffer(B.FRAMEBUFFER,pe);const Ke=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await CM(B,Ke,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Wt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ut),B.deleteBuffer(Wt),B.deleteSync(Ke),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,lt=0){const it=Math.pow(2,-lt),J=Math.floor(C.image.width*it),Ut=Math.floor(C.image.height*it),Xt=W!==null?W.x:0,It=W!==null?W.y:0;Y.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,lt,0,0,Xt,It,J,Ut),Ot.unbindTexture()};const Da=B.createFramebuffer(),hs=B.createFramebuffer();this.copyTextureToTexture=function(C,W,lt=null,it=null,J=0,Ut=0){let Xt,It,jt,Qt,ae,ce,Wt,pe,Ke;const Je=C.isCompressedTexture?C.mipmaps[Ut]:C.image;if(lt!==null)Xt=lt.max.x-lt.min.x,It=lt.max.y-lt.min.y,jt=lt.isBox3?lt.max.z-lt.min.z:1,Qt=lt.min.x,ae=lt.min.y,ce=lt.isBox3?lt.min.z:0;else{const ln=Math.pow(2,-J);Xt=Math.floor(Je.width*ln),It=Math.floor(Je.height*ln),C.isDataArrayTexture?jt=Je.depth:C.isData3DTexture?jt=Math.floor(Je.depth*ln):jt=1,Qt=0,ae=0,ce=0}it!==null?(Wt=it.x,pe=it.y,Ke=it.z):(Wt=0,pe=0,Ke=0);const we=At.convert(W.format),gn=At.convert(W.type);let Yt;W.isData3DTexture?(Y.setTexture3D(W,0),Yt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Y.setTexture2DArray(W,0),Yt=B.TEXTURE_2D_ARRAY):(Y.setTexture2D(W,0),Yt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const zn=B.getParameter(B.UNPACK_ROW_LENGTH),le=B.getParameter(B.UNPACK_IMAGE_HEIGHT),In=B.getParameter(B.UNPACK_SKIP_PIXELS),Jn=B.getParameter(B.UNPACK_SKIP_ROWS),Ti=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Je.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Je.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ae),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ce);const Qn=C.isDataArrayTexture||C.isData3DTexture,Pe=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const ln=b.get(C),Fn=b.get(W),cn=b.get(ln.__renderTarget),Ai=b.get(Fn.__renderTarget);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let $i=0;$i<jt;$i++)Qn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(C).__webglTexture,J,ce+$i),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(W).__webglTexture,Ut,Ke+$i)),B.blitFramebuffer(Qt,ae,Xt,It,Wt,pe,Xt,It,B.DEPTH_BUFFER_BIT,B.NEAREST);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||b.has(C)){const ln=b.get(C),Fn=b.get(W);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,Da),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,hs);for(let cn=0;cn<jt;cn++)Qn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,J,ce+cn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,J),Pe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fn.__webglTexture,Ut,Ke+cn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Fn.__webglTexture,Ut),J!==0?B.blitFramebuffer(Qt,ae,Xt,It,Wt,pe,Xt,It,B.COLOR_BUFFER_BIT,B.NEAREST):Pe?B.copyTexSubImage3D(Yt,Ut,Wt,pe,Ke+cn,Qt,ae,Xt,It):B.copyTexSubImage2D(Yt,Ut,Wt,pe,Qt,ae,Xt,It);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pe?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Yt,Ut,Wt,pe,Ke,Xt,It,jt,we,gn,Je.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Yt,Ut,Wt,pe,Ke,Xt,It,jt,we,Je.data):B.texSubImage3D(Yt,Ut,Wt,pe,Ke,Xt,It,jt,we,gn,Je):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ut,Wt,pe,Xt,It,we,gn,Je.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ut,Wt,pe,Je.width,Je.height,we,Je.data):B.texSubImage2D(B.TEXTURE_2D,Ut,Wt,pe,Xt,It,we,gn,Je);B.pixelStorei(B.UNPACK_ROW_LENGTH,zn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,le),B.pixelStorei(B.UNPACK_SKIP_PIXELS,In),B.pixelStorei(B.UNPACK_SKIP_ROWS,Jn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ti),Ut===0&&W.generateMipmaps&&B.generateMipmap(Yt),Ot.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&Y.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Y.setTextureCube(C,0):C.isData3DTexture?Y.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Y.setTexture2DArray(C,0):Y.setTexture2D(C,0),Ot.unbindTexture()},this.resetState=function(){G=0,Q=0,rt=null,Ot.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const Uv={type:"change"},Up={type:"start"},bx={type:"end"},su=new bp,Lv=new rs,jR=Math.cos(70*UM.DEG2RAD),vn=new q,jn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vd=1e-6;class ZR extends $E{constructor(t,i=null){super(t,i),this.state=We.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ea.ROTATE,MIDDLE:Ea.DOLLY,RIGHT:Ea.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new us,this._lastTargetPosition=new q,this._quat=new us().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rv,this._sphericalDelta=new rv,this._scale=1,this._panOffset=new q,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new q,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JR.bind(this),this._onPointerDown=KR.bind(this),this._onPointerUp=QR.bind(this),this._onContextMenu=sC.bind(this),this._onMouseWheel=eC.bind(this),this._onKeyDown=nC.bind(this),this._onTouchStart=iC.bind(this),this._onTouchMove=aC.bind(this),this._onMouseDown=$R.bind(this),this._onMouseMove=tC.bind(this),this._interceptControlDown=rC.bind(this),this._interceptControlUp=oC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uv),this.update(),this.state=We.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),l<-Math.PI?l+=jn:l>Math.PI&&(l-=jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=vn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(su.origin.copy(this.object.position),su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(su.direction))<jR?this.object.lookAt(this.target):(Lv.setFromNormalAndCoplanarPoint(this.object.up,this.target),su.intersectPlane(Lv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>vd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vd||this._lastTargetPosition.distanceToSquared(this.target)>vd?(this.dispatchEvent(Uv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let c=vn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Vt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function KR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function JR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function QR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bx),this.state=We.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function $R(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ea.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=We.DOLLY;break;case Ea.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}break;case Ea.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Up)}function tC(r){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function eC(r){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(r.preventDefault(),this.dispatchEvent(Up),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(bx))}function nC(r){this.enabled!==!1&&this._handleKeyDown(r)}function iC(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=We.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=We.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Up)}function aC(r){switch(this._trackPointer(r),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=We.NONE}}function sC(r){this.enabled!==!1&&r.preventDefault()}function rC(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oC(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const lC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M3%209l9-7%209%207v11a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2z'%3e%3c/path%3e%3cpolyline%20points='9%2022%209%2012%2015%2012%2015%2022'%3e%3c/polyline%3e%3c/svg%3e",Zn=50,ru={"INNER WALL":[1,.84,0,1],"OUTER WALL":[.18,.8,.44,1],GLAZING:[0,.85,.95,.25],TILING1:[.55,.75,.85,1],TILING2:[.85,.78,.65,1],"VINYL PLANK":[.65,.45,.28,1],"VINYL SHEET":[.72,.55,.38,1],LAMINATE:[.6,.42,.25,1],HYBRID:[.58,.48,.35,1],TIMBER:[.5,.33,.18,1],CARPET:[.65,.72,.6,1],NONE:[.78,.78,.78,1],GROUND:[.07,.07,.12,1]},cC=({data:r,onReset:t})=>{const i=Be.useRef(null),s=Be.useRef(null),l=Be.useRef(null),c=Be.useRef(null),f=Be.useRef(null),d=Be.useRef(null),m=Be.useRef({}),p=Be.useRef(null),_=Be.useRef(null),v=Be.useRef(null),g=Be.useRef(null),[S,E]=Be.useState(!1),[w,M]=Be.useState(()=>localStorage.getItem("pomi_theme")||"dark");Be.useEffect(()=>{document.documentElement.setAttribute("data-theme",w),localStorage.setItem("pomi_theme",w)},[w]);const[y,D]=Be.useState(()=>{const R=localStorage.getItem("pomi_settings");if(R)try{return JSON.parse(R)}catch(z){console.error("Failed to parse settings cache:",z)}return{shadows:!0,wireframe:!1,lightV:2e3,lightH:-2e3,materials:{}}});Be.useEffect(()=>{localStorage.setItem("pomi_settings",JSON.stringify(y))},[y]);const[L,U]=Be.useState([]),[V,I]=Be.useState(null),[H,T]=Be.useState(()=>{const R=localStorage.getItem("custom_textures");return R?JSON.parse(R):[]}),[O,mt]=Be.useState([]),[G,Q]=Be.useState(null);Be.useEffect(()=>{const z=Object.entries(Object.assign({"./textures/brick1.jpg":Hy,"./textures/brick2.jpg":Vy,"./textures/wood1.jpg":Xy,"./textures/wood2.jpg":qy,"./textures/wood3.jpg":jy})).map(([K,$])=>({name:K.split("/").pop()||K,url:$.default||$}));mt(z)},[]);const rt=(Array.isArray(O)?O:[]).concat(Array.isArray(H)?H:[]);Be.useEffect(()=>{L.length!==0&&D(R=>{const z={...R.materials};let K=!1;return L.forEach($=>{if(!z[$]){const _t=ru[$]||[.8,.8,.8,1];z[$]={color:"#"+new xe(_t[0],_t[1],_t[2]).getHexString(),opacity:_t[3],texture:""},K=!0}}),K?{...R,materials:z}:R})},[L]),Be.useEffect(()=>{if(l.current){const R=w==="light"?15790837:723736;l.current.background=new xe(R)}if(g.current){const R=w==="light"?0:16777215,z=w==="light"?.1:.2;g.current.material.color.setHex(R),g.current.material.opacity=z,g.current.material.transparent=!0}},[w]),Be.useEffect(()=>{if(!i.current||!s.current||!c.current)return;const R=i.current,z=new ResizeObserver(()=>{const K=R.clientWidth,$=R.clientHeight;c.current&&(c.current.aspect=K/$,c.current.updateProjectionMatrix()),s.current&&s.current.setSize(K,$)});return z.observe(R),()=>z.disconnect()},[S]),Be.useEffect(()=>{if(!i.current)return;const R=new WM,z=w==="light"?15790837:723736;R.background=new xe(z),l.current=R;const K=i.current,$=new Si(45,K.clientWidth/K.clientHeight,1,5e4);c.current=$;const _t=new YR({antialias:!0,logarithmicDepthBuffer:!0});_t.setSize(K.clientWidth,K.clientHeight),_t.setPixelRatio(Math.min(window.devicePixelRatio,2)),_t.shadowMap.enabled=!0,_t.shadowMap.type=Nv,K.appendChild(_t.domElement),s.current=_t;const N=new ZR($,_t.domElement);N.enableDamping=!0,N.dampingFactor=.08,N.mouseButtons={LEFT:Ea.ROTATE,MIDDLE:Ea.DOLLY,RIGHT:Ea.PAN},f.current=N,N.addEventListener("change",()=>{const Ht={position:{x:$.position.x,y:$.position.y,z:$.position.z},target:{x:N.target.x,y:N.target.y,z:N.target.z}};localStorage.setItem("pomi_camera_state",JSON.stringify(Ht))}),R.add($);const j=new ZE(16777215,1.5);R.add(j);const ht=new sv(16777215,1.5);ht.castShadow=!0;const Rt=5e3;ht.shadow.mapSize.width=4096,ht.shadow.mapSize.height=4096,ht.shadow.camera.near=1,ht.shadow.camera.far=15e3,ht.shadow.camera.left=-Rt,ht.shadow.camera.right=Rt,ht.shadow.camera.top=Rt,ht.shadow.camera.bottom=-Rt,ht.shadow.normalBias=3,ht.shadow.radius=5,ht.position.set(-2e3,2e3,0),$.add(ht),$.add(ht.target),ht.target.position.set(0,0,-2e3),d.current=ht;const Gt=new sv(5221630,.4);Gt.position.set(-1500,1e3,-800),R.add(Gt);const tt=new Hr,vt=new Hr;vt.visible=!1,R.add(tt),R.add(vt),p.current=tt,_.current=vt;const Tt=new Kr,kt=m.current,Zt=new Set,ee=(Ht,Ot)=>{if(!kt[Ht]){const P=Ot[3]<1,b=new HE({color:new xe(Ot[0],Ot[1],Ot[2]),transparent:P,opacity:Ot[3],roughness:.7,metalness:.1,side:Vi});b.userData.baseColor="#"+b.color.getHexString(),kt[Ht]=b}return kt[Ht]};r.walls.forEach(Ht=>{Zt.add(Ht.type);const[Ot,P,b,Y,dt,Mt]=Ht.box,ct=Math.abs(P-Ot),wt=Math.abs(Mt-dt),Ct=Math.abs(Y-b);if(ct<1||wt<1||Ct<1)return;const Kt=new Qr(ct,wt,Ct),$t=new q((Ot+P)/2,(dt+Mt)/2,(b+Y)/2),gt=Kt.attributes.uv.array,bt=$t.x,Ft=$t.y,Lt=$t.z;for(let At=0;At<2;At++){const St=At*8,Nt=(Lt-Ct/2)/Zn,Et=(Lt+Ct/2)/Zn,ut=(Ft-wt/2)/Zn,zt=(Ft+wt/2)/Zn;gt[St+0]=Nt,gt[St+1]=zt,gt[St+2]=Et,gt[St+3]=zt,gt[St+4]=Nt,gt[St+5]=ut,gt[St+6]=Et,gt[St+7]=ut}for(let At=2;At<4;At++){const St=At*8,Nt=(bt-ct/2)/Zn,Et=(bt+ct/2)/Zn,ut=(Lt-Ct/2)/Zn,zt=(Lt+Ct/2)/Zn;gt[St+0]=Nt,gt[St+1]=ut,gt[St+2]=Et,gt[St+3]=ut,gt[St+4]=Nt,gt[St+5]=zt,gt[St+6]=Et,gt[St+7]=zt}for(let At=4;At<6;At++){const St=At*8,Nt=(bt-ct/2)/Zn,Et=(bt+ct/2)/Zn,ut=(Ft-wt/2)/Zn,zt=(Ft+wt/2)/Zn;gt[St+0]=Nt,gt[St+1]=zt,gt[St+2]=Et,gt[St+3]=zt,gt[St+4]=Nt,gt[St+5]=ut,gt[St+6]=Et,gt[St+7]=ut}Kt.attributes.uv.needsUpdate=!0;const Pt=new Mi(Kt,ee(Ht.type,Ht.color||ru[Ht.type]||[.7,.7,.7,1]));Pt.position.copy($t),Pt.castShadow=!0,Pt.receiveShadow=!0,tt.add(Pt),Tt.expandByObject(Pt);const fe=new Y_(Kt),X=new lp(fe,new gu({color:5221630,transparent:!0,opacity:.8}));X.position.copy(Pt.position),vt.add(X),X.userData.materialType=Ht.type}),r.floors.forEach(Ht=>{if(Zt.add(Ht.type),!Ht.polygon||Ht.polygon.length<3)return;const Ot=new ux;Ht.polygon.forEach((wt,Ct)=>{Ct===0?Ot.moveTo(wt[0],-wt[1]):Ot.lineTo(wt[0],-wt[1])});const P=new Cp(Ot),b=P.attributes.position.array,Y=P.attributes.uv.array;for(let wt=0;wt<b.length/3;wt++)Y[wt*2+0]=b[wt*3+0]/Zn,Y[wt*2+1]=b[wt*3+1]/Zn;P.attributes.uv.needsUpdate=!0;const dt=new Mi(P,ee(Ht.type,Ht.color||ru[Ht.type]||[.7,.7,.7,1]));dt.rotation.x=-Math.PI/2,dt.position.y=Ht.z,dt.receiveShadow=!0,tt.add(dt),Tt.expandByObject(dt);const Mt=new Y_(P),ct=new lp(Mt,new gu({color:5221630,transparent:!0,opacity:.8}));ct.rotation.x=-Math.PI/2,ct.position.y=Ht.z,vt.add(ct),ct.userData.materialType=Ht.type});const Ge=Tt.getSize(new q),re=Tt.getCenter(new q),he=Math.max(Ge.x,Ge.z)+100,Ae=new ml(he,he),oe=ee("GROUND",ru.GROUND),Oe=new Mi(Ae,oe);Oe.rotation.x=-Math.PI/2,Oe.position.set(re.x,-.1,re.z),Oe.receiveShadow=!0,R.add(Oe),v.current=Oe,Zt.add("GROUND");const B=new QE(he,he/10,16777215,16777215);B.material.transparent=!0,B.material.opacity=.5,B.material.color.setHex(3355460),B.position.set(re.x,0,re.z),R.add(B),g.current=B,B.userData={targetOpacity:.5},kt.GRID={color:B.material.color,set opacity(Ht){B.userData.targetOpacity=Ht,vt.visible||(B.material.opacity=Ht)},get opacity(){return B.userData.targetOpacity},set transparent(Ht){B.material.transparent=Ht},get transparent(){return B.material.transparent},userData:{baseColor:"#"+B.material.color.getHexString()}},Zt.add("GRID"),tt.position.sub(re),vt.position.sub(re),Oe.position.sub(re),B.position.sub(re);const qe=localStorage.getItem("pomi_camera_state");if(qe)try{const{position:Ht,target:Ot}=JSON.parse(qe);$.position.set(Ht.x,Ht.y,Ht.z),N.target.set(Ot.x,Ot.y,Ot.z),$.updateProjectionMatrix(),N.update()}catch(Ht){console.error("Failed to load camera cache:",Ht)}else{const Ht=Math.max(Ge.x,Ge.y,Ge.z)||1e3;$.position.set(Ht*1.5,Ht*1.2,Ht*1.5),$.lookAt(0,0,0),N.update()}U(Array.from(Zt));const Se=()=>{requestAnimationFrame(Se),N.update(),_t.render(R,$);const Ht=document.getElementById("stats");Ht&&(Ht.innerText=`CAM: ${$.position.x.toFixed(1)}, ${$.position.y.toFixed(1)}, ${$.position.z.toFixed(1)}`)};return Se(),()=>{_t.dispose(),K.innerHTML=""}},[r,w]),Be.useEffect(()=>{!s.current||!p.current||!_.current||(s.current.shadowMap.enabled=y.shadows,y.wireframe&&(s.current.shadowMap.enabled=!1),p.current.visible=!y.wireframe,_.current.visible=y.wireframe,v.current&&(v.current.visible=!y.wireframe),g.current&&(g.current.material.opacity=y.wireframe?.2:g.current.userData.targetOpacity),d.current&&d.current.position.set(y.lightH,y.lightV,0),Object.keys(y.materials).forEach(R=>{const z=m.current[R],K=y.materials[R];if(z)if(z.userData&&(z.userData.baseColor=K.color),z.opacity!==void 0&&(z.opacity=K.opacity),_.current?.children.forEach($=>{const _t=$;if(_t.userData.materialType===R){const N=_t.material;N.color.set(K.color),N.opacity=K.opacity}}),K.texture&&R!=="GRID"&&R!=="GROUND"){const $=new qE,_t=K.texture;$.load(_t,N=>{N.wrapS=N.wrapT=du,z.map=N,z.userData.textureUrl=K.texture,z.color.set(16777215),z.needsUpdate=!0})}else z.map&&(z.map=null,z.needsUpdate=!0),z.color&&z.color.set&&z.color.set(K.color)}))},[y]);const ot=(R,z,K)=>{D($=>{const _t=$.materials[R]||{color:m.current[R]?.userData.baseColor||"#ffffff",opacity:m.current[R]?.opacity||1,texture:""};return{...$,materials:{...$.materials,[R]:{..._t,[z]:K}}}})},at=R=>{const z=R.target.files?.[0];if(!z)return;const K=new Image;K.onload=()=>{if(K.width>1024||K.height>1024){alert("Texture size must be max 1024x1024");return}const $=new FileReader;$.onload=_t=>{const N=_t.target?.result,j={name:z.name,url:N};T(ht=>{const Rt=[...ht,j];return localStorage.setItem("custom_textures",JSON.stringify(Rt)),Rt}),V&&ot(V,"texture",N)},$.readAsDataURL(z)},K.src=URL.createObjectURL(z)};return Dt.jsxs(Dt.Fragment,{children:[Dt.jsxs("nav",{className:"navbar",children:[Dt.jsx("div",{id:"hamburger",className:S?"open":"",onClick:()=>E(!S),children:Dt.jsx("span",{})}),Dt.jsxs("div",{className:"nav-brand",children:[Dt.jsx("img",{src:lC,alt:"POMI.AI Logo",style:{width:24,height:24,marginRight:8}}),"POMI.AI"]}),Dt.jsx("div",{className:"nav-spacer"}),Dt.jsxs("div",{className:"nav-actions",children:[Dt.jsx("button",{className:"nav-btn reset-btn",onClick:t,children:"Start Over"}),Dt.jsx("div",{className:"theme-toggle",onClick:()=>M(w==="dark"?"light":"dark"),children:w==="dark"?Dt.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Dt.jsx("circle",{cx:"12",cy:"12",r:"5"}),Dt.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),Dt.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),Dt.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),Dt.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),Dt.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),Dt.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),Dt.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),Dt.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}):Dt.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Dt.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})]})]}),Dt.jsxs("div",{id:"drawer",className:S?"open":"",children:[Dt.jsx("div",{className:"section-title",children:"Global Settings"}),Dt.jsxs("div",{className:"control-group",children:[Dt.jsxs("div",{className:"toggle-item",children:[Dt.jsx("span",{children:"Dynamic Shadows"}),Dt.jsxs("label",{className:"switch",children:[Dt.jsx("input",{type:"checkbox",checked:y.shadows,onChange:R=>D(z=>({...z,shadows:R.target.checked})),disabled:y.wireframe}),Dt.jsx("span",{className:"slider"})]})]}),Dt.jsxs("div",{className:"toggle-item",children:[Dt.jsx("span",{children:"Wireframe Mode"}),Dt.jsxs("label",{className:"switch",children:[Dt.jsx("input",{type:"checkbox",checked:y.wireframe,onChange:R=>D(z=>({...z,wireframe:R.target.checked}))}),Dt.jsx("span",{className:"slider"})]})]}),Dt.jsxs("div",{style:{marginTop:20},children:[Dt.jsx("span",{style:{fontSize:14,color:"#e0e0f0"},children:"Light Position"}),Dt.jsx("div",{className:"light-controls",children:[{l:"↖",v:2e3,h:-2e3},{l:"↑",v:2e3,h:0},{l:"↗",v:2e3,h:2e3},{l:"←",v:0,h:-2e3},{l:"•",v:0,h:0},{l:"→",v:0,h:2e3}].map(R=>Dt.jsx("button",{className:`light-btn ${y.lightV===R.v&&y.lightH===R.h?"active":""}`,onClick:()=>D(z=>({...z,lightV:R.v,lightH:R.h})),children:R.l},R.l))})]})]}),Dt.jsx("div",{className:"section-title",children:"Materials Overlay"}),Dt.jsx("div",{id:"legend",children:L.map(R=>{const z=y.materials[R]||{color:m.current[R]?.userData?.baseColor||"#ffffff",opacity:m.current[R]?.opacity??1,texture:""};return Dt.jsxs("div",{className:"legend-item",children:[Dt.jsxs("div",{className:"legend-header",onClick:()=>I(V===R?null:R),children:[Dt.jsx("span",{className:"swatch",style:{background:z.color}})," ",R]}),Dt.jsxs("div",{className:`material-panel ${V===R?"active":""}`,children:[Dt.jsxs("div",{className:"mat-control",children:[Dt.jsx("label",{children:"Hex Color"}),Dt.jsx("input",{type:"color",value:z.color,onChange:K=>ot(R,"color",K.target.value)})]}),Dt.jsxs("div",{className:"mat-control",children:[Dt.jsx("label",{children:"Opacity"}),Dt.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:z.opacity,onChange:K=>ot(R,"opacity",parseFloat(K.target.value))})]}),R!=="GROUND"&&R!=="GRID"&&Dt.jsxs("div",{className:"mat-control",children:[Dt.jsx("label",{children:"Texture"}),Dt.jsx("div",{className:"texture-select-btn",onClick:K=>{K.stopPropagation(),Q({open:!0,materialType:R})},children:z.texture?Dt.jsx("img",{src:z.texture,alt:"Selected Texture"}):Dt.jsx("span",{children:"None"})})]})]})]},R)})}),Dt.jsxs("div",{style:{marginTop:0,fontSize:10,lineHeight:1.6},children:["POMI.AI ARCHITECTURAL CORE v2.5",Dt.jsx("br",{}),"Ctrl + Drag to Pan View."]})]}),G&&Dt.jsx("div",{className:"modal-overlay",onClick:()=>Q(null),children:Dt.jsxs("div",{className:"modal-content",onClick:R=>R.stopPropagation(),children:[Dt.jsxs("div",{className:"modal-header",children:[Dt.jsx("h2",{children:"Select Texture"}),Dt.jsx("div",{className:"modal-close",onClick:()=>Q(null),children:"✕"})]}),Dt.jsxs("div",{className:"texture-grid",children:[Dt.jsx("div",{className:`texture-item none ${y.materials[G.materialType]?.texture?"":"selected"}`,onClick:()=>{ot(G.materialType,"texture",""),Q(null)},children:"None"}),rt.map(R=>Dt.jsx("div",{className:`texture-item ${y.materials[G.materialType]?.texture===R.url?"selected":""}`,onClick:()=>{ot(G.materialType,"texture",R.url),Q(null)},children:Dt.jsx("img",{src:R.url,alt:R.name,title:R.name})},R.url))]}),Dt.jsxs("div",{className:"texture-upload-area",onClick:()=>document.getElementById("texture-upload-input")?.click(),children:[Dt.jsx("span",{children:"Click to upload (max 1024x1024)"}),Dt.jsx("input",{id:"texture-upload-input",type:"file",accept:"image/*",style:{display:"none"},onChange:at})]})]})}),Dt.jsx("div",{id:"canvas-container",className:S?"drawer-open":"",ref:i}),Dt.jsx("div",{id:"stats",children:"CAM: 0.0, 0.0, 0.0"})]})};function uC(){const[r,t]=Be.useState(()=>{const l=localStorage.getItem("cached_model");if(l)try{const c=JSON.parse(l);if(c.walls||c.floors)return c}catch{localStorage.removeItem("cached_model")}return null}),i=l=>{const c=l.target.files?.[0];if(!c)return;const f=new FileReader;f.onload=d=>{try{const m=d.target?.result,p=JSON.parse(m);if(!p.walls&&!p.floors){alert("Invalid model data: missing walls/floors");return}localStorage.setItem("cached_model",m),t(p)}catch(m){alert("Invalid JSON file"),console.error(m)}},f.readAsText(c)},s=()=>{window.confirm("Are you sure you want to start over? This will clear the current model and cache.")&&(localStorage.removeItem("cached_model"),localStorage.removeItem("pomi_settings"),localStorage.removeItem("pomi_camera_state"),t(null))};return r?Dt.jsx(cC,{data:r,onReset:s}):Dt.jsx("div",{className:"file-upload-container",children:Dt.jsxs("div",{className:"file-upload-box",children:[Dt.jsx("div",{className:"drop-text",children:"Drop your JSON model here"}),Dt.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:14},children:"or click to browse"}),Dt.jsxs("label",{className:"upload-btn",children:["Choose File",Dt.jsx("input",{type:"file",className:"file-input",accept:".json",onChange:i})]})]})})}Fy.createRoot(document.getElementById("root")).render(Dt.jsx(Be.StrictMode,{children:Dt.jsx(uC,{})}));
