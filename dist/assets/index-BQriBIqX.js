function sy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ay(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ng={exports:{}},qc={},Pg={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),oy=Symbol.for("react.portal"),ly=Symbol.for("react.fragment"),cy=Symbol.for("react.strict_mode"),uy=Symbol.for("react.profiler"),dy=Symbol.for("react.provider"),fy=Symbol.for("react.context"),hy=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),my=Symbol.for("react.memo"),gy=Symbol.for("react.lazy"),nm=Symbol.iterator;function xy(t){return t===null||typeof t!="object"?null:(t=nm&&t[nm]||t["@@iterator"],typeof t=="function"?t:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dg=Object.assign,Ig={};function ha(t,e,n){this.props=t,this.context=e,this.refs=Ig,this.updater=n||Lg}ha.prototype.isReactComponent={};ha.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ha.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ug(){}Ug.prototype=ha.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=Ig,this.updater=n||Lg}var Ah=Th.prototype=new Ug;Ah.constructor=Th;Dg(Ah,ha.prototype);Ah.isPureReactComponent=!0;var im=Array.isArray,Fg=Object.prototype.hasOwnProperty,Ch={current:null},kg={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Fg.call(e,i)&&!kg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Fo,type:t,key:s,ref:a,props:r,_owner:Ch.current}}function vy(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function _y(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rm=/\/+/g;function vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_y(""+t.key):e.toString(36)}function $l(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Fo:case oy:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+vu(a,0):i,im(r)?(n="",t!=null&&(n=t.replace(rm,"$&/")+"/"),$l(r,e,n,"",function(c){return c})):r!=null&&(Rh(r)&&(r=vy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(rm,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",im(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+vu(s,o);a+=$l(s,e,n,l,r)}else if(l=xy(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+vu(s,o++),a+=$l(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function $o(t,e,n){if(t==null)return t;var i=[],r=0;return $l(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},ql={transition:null},Sy={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:ql,ReactCurrentOwner:Ch};function Bg(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:$o,forEach:function(t,e,n){$o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!Rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=ha;ot.Fragment=ly;ot.Profiler=uy;ot.PureComponent=Th;ot.StrictMode=cy;ot.Suspense=py;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;ot.act=Bg;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ch.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Fg.call(e,l)&&!kg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Fo,type:t.type,key:r,ref:s,props:i,_owner:a}};ot.createContext=function(t){return t={$$typeof:fy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dy,_context:t},t.Consumer=t};ot.createElement=Og;ot.createFactory=function(t){var e=Og.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:hy,render:t}};ot.isValidElement=Rh;ot.lazy=function(t){return{$$typeof:gy,_payload:{_status:-1,_result:t},_init:yy}};ot.memo=function(t,e){return{$$typeof:my,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};ot.unstable_act=Bg;ot.useCallback=function(t,e){return mn.current.useCallback(t,e)};ot.useContext=function(t){return mn.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};ot.useEffect=function(t,e){return mn.current.useEffect(t,e)};ot.useId=function(){return mn.current.useId()};ot.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return mn.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};ot.useRef=function(t){return mn.current.useRef(t)};ot.useState=function(t){return mn.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return mn.current.useTransition()};ot.version="18.3.1";Pg.exports=ot;var z=Pg.exports;const fc=ay(z),My=sy({__proto__:null,default:fc},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=z,by=Symbol.for("react.element"),Ey=Symbol.for("react.fragment"),Ty=Object.prototype.hasOwnProperty,Ay=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cy={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Ty.call(e,i)&&!Cy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:by,type:t,key:s,ref:a,props:r,_owner:Ay.current}}qc.Fragment=Ey;qc.jsx=zg;qc.jsxs=zg;Ng.exports=qc;var u=Ng.exports,Pd={},Hg={exports:{}},Un={},Vg={exports:{}},Gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,L){var B=V.length;V.push(L);e:for(;0<B;){var Y=B-1>>>1,se=V[Y];if(0<r(se,L))V[Y]=L,V[B]=se,B=Y;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var L=V[0],B=V.pop();if(B!==L){V[0]=B;e:for(var Y=0,se=V.length,fe=se>>>1;Y<fe;){var ze=2*(Y+1)-1,Ve=V[ze],$e=ze+1,Z=V[$e];if(0>r(Ve,B))$e<se&&0>r(Z,Ve)?(V[Y]=Z,V[$e]=B,Y=$e):(V[Y]=Ve,V[ze]=B,Y=ze);else if($e<se&&0>r(Z,B))V[Y]=Z,V[$e]=B,Y=$e;else break e}}return L}function r(V,L){var B=V.sortIndex-L.sortIndex;return B!==0?B:V.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,p=null,d=3,g=!1,x=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(V){for(var L=n(c);L!==null;){if(L.callback===null)i(c);else if(L.startTime<=V)i(c),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(c)}}function v(V){if(S=!1,y(V),!x)if(n(l)!==null)x=!0,J(b);else{var L=n(c);L!==null&&W(v,L.startTime-V)}}function b(V,L){x=!1,S&&(S=!1,h(M),M=-1),g=!0;var B=d;try{for(y(L),p=n(l);p!==null&&(!(p.expirationTime>L)||V&&!N());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,d=p.priorityLevel;var se=Y(p.expirationTime<=L);L=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&i(l),y(L)}else i(l);p=n(l)}if(p!==null)var fe=!0;else{var ze=n(c);ze!==null&&W(v,ze.startTime-L),fe=!1}return fe}finally{p=null,d=B,g=!1}}var E=!1,A=null,M=-1,C=5,R=-1;function N(){return!(t.unstable_now()-R<C)}function F(){if(A!==null){var V=t.unstable_now();R=V;var L=!0;try{L=A(!0,V)}finally{L?j():(E=!1,A=null)}}else E=!1}var j;if(typeof _=="function")j=function(){_(F)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,H=I.port2;I.port1.onmessage=F,j=function(){H.postMessage(null)}}else j=function(){m(F,0)};function J(V){A=V,E||(E=!0,j())}function W(V,L){M=m(function(){V(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,J(b))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var B=d;d=L;try{return V()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,L){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var B=d;d=V;try{return L()}finally{d=B}},t.unstable_scheduleCallback=function(V,L,B){var Y=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Y+B:Y):B=Y,V){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=B+se,V={id:f++,callback:L,priorityLevel:V,startTime:B,expirationTime:se,sortIndex:-1},B>Y?(V.sortIndex=B,e(c,V),n(l)===null&&V===n(c)&&(S?(h(M),M=-1):S=!0,W(v,B-Y))):(V.sortIndex=se,e(l,V),x||g||(x=!0,J(b))),V},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(V){var L=d;return function(){var B=d;d=L;try{return V.apply(this,arguments)}finally{d=B}}}})(Gg);Vg.exports=Gg;var Ry=Vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=z,In=Ry;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jg=new Set,oo={};function ls(t,e){na(t,e),na(t+"Capture",e)}function na(t,e){for(oo[t]=e,t=0;t<e.length;t++)jg.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ld=Object.prototype.hasOwnProperty,Py=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sm={},am={};function Ly(t){return Ld.call(am,t)?!0:Ld.call(sm,t)?!1:Py.test(t)?am[t]=!0:(sm[t]=!0,!1)}function Dy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Iy(t,e,n,i){if(e===null||typeof e>"u"||Dy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nh,Ph);Zt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nh,Ph);Zt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nh,Ph);Zt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Iy(e,n,r,i)&&(n=null),i||r===null?Ly(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $i=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Is=Symbol.for("react.portal"),Us=Symbol.for("react.fragment"),Dh=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Wg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),Ud=Symbol.for("react.suspense_list"),Uh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),$g=Symbol.for("react.offscreen"),om=Symbol.iterator;function Sa(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,_u;function ka(t){if(_u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_u=e&&e[1]||""}return`
`+_u+t}var yu=!1;function Su(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ka(t):""}function Uy(t){switch(t.tag){case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return t=Su(t.type,!1),t;case 11:return t=Su(t.type.render,!1),t;case 1:return t=Su(t.type,!0),t;default:return""}}function Fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Us:return"Fragment";case Is:return"Portal";case Dd:return"Profiler";case Dh:return"StrictMode";case Id:return"Suspense";case Ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xg:return(t.displayName||"Context")+".Consumer";case Wg:return(t._context.displayName||"Context")+".Provider";case Ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uh:return e=t.displayName||null,e!==null?e:Fd(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Fd(t(e))}catch{}}return null}function Fy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fd(e);case 8:return e===Dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ky(t){var e=qg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yo(t){t._valueTracker||(t._valueTracker=ky(t))}function Yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kd(t,e){var n=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kg(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function Od(t,e){Kg(t,e);var n=Rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bd(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bd(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oa=Array.isArray;function qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function zd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function um(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Oa(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function Zg(t,e){var n=Rr(e.value),i=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function dm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ko,Qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oy=["Webkit","ms","Moz","O"];Object.keys(Wa).forEach(function(t){Oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wa[e]=Wa[t]})});function ex(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wa.hasOwnProperty(t)&&Wa[t]?(""+e).trim():e+"px"}function tx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ex(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var By=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vd(t,e){if(e){if(By[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jd=null;function Fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wd=null,Ys=null,Ks=null;function fm(t){if(t=Bo(t)){if(typeof Wd!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Qc(e),Wd(t.stateNode,t.type,e))}}function nx(t){Ys?Ks?Ks.push(t):Ks=[t]:Ys=t}function ix(){if(Ys){var t=Ys,e=Ks;if(Ks=Ys=null,fm(t),e)for(t=0;t<e.length;t++)fm(e[t])}}function rx(t,e){return t(e)}function sx(){}var Mu=!1;function ax(t,e,n){if(Mu)return t(e,n);Mu=!0;try{return rx(t,e,n)}finally{Mu=!1,(Ys!==null||Ks!==null)&&(sx(),ix())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var i=Qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Xd=!1;if(Vi)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){Xd=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{Xd=!1}function zy(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Xa=!1,pc=null,mc=!1,$d=null,Hy={onError:function(t){Xa=!0,pc=t}};function Vy(t,e,n,i,r,s,a,o,l){Xa=!1,pc=null,zy.apply(Hy,arguments)}function Gy(t,e,n,i,r,s,a,o,l){if(Vy.apply(this,arguments),Xa){if(Xa){var c=pc;Xa=!1,pc=null}else throw Error(ce(198));mc||(mc=!0,$d=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ox(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hm(t){if(cs(t)!==t)throw Error(ce(188))}function jy(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return hm(r),t;if(s===i)return hm(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function lx(t){return t=jy(t),t!==null?cx(t):null}function cx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cx(t);if(e!==null)return e;t=t.sibling}return null}var ux=In.unstable_scheduleCallback,pm=In.unstable_cancelCallback,Wy=In.unstable_shouldYield,Xy=In.unstable_requestPaint,Ut=In.unstable_now,$y=In.unstable_getCurrentPriorityLevel,kh=In.unstable_ImmediatePriority,dx=In.unstable_UserBlockingPriority,gc=In.unstable_NormalPriority,qy=In.unstable_LowPriority,fx=In.unstable_IdlePriority,Yc=null,_i=null;function Yy(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(Yc,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:Jy,Ky=Math.log,Zy=Math.LN2;function Jy(t){return t>>>=0,t===0?32:31-(Ky(t)/Zy|0)|0}var Zo=64,Jo=4194304;function Ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ba(o):(s&=a,s!==0&&(i=Ba(s)))}else a=n&~r,a!==0?i=Ba(a):s!==0&&(i=Ba(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function Qy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ri(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Qy(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function qd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hx(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function wu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function tS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var gt=0;function px(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mx,Bh,gx,xx,vx,Yd=!1,Qo=[],yr=null,Sr=null,Mr=null,uo=new Map,fo=new Map,pr=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mm(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function wa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Bo(e),e!==null&&Bh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function iS(t,e,n,i,r){switch(e){case"focusin":return yr=wa(yr,t,e,n,i,r),!0;case"dragenter":return Sr=wa(Sr,t,e,n,i,r),!0;case"mouseover":return Mr=wa(Mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return uo.set(s,wa(uo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fo.set(s,wa(fo.get(s)||null,t,e,n,i,r)),!0}return!1}function _x(t){var e=Xr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=ox(n),e!==null){t.blockedOn=e,vx(t.priority,function(){gx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);jd=i,n.target.dispatchEvent(i),jd=null}else return e=Bo(n),e!==null&&Bh(e),t.blockedOn=n,!1;e.shift()}return!0}function gm(t,e,n){Yl(t)&&n.delete(e)}function rS(){Yd=!1,yr!==null&&Yl(yr)&&(yr=null),Sr!==null&&Yl(Sr)&&(Sr=null),Mr!==null&&Yl(Mr)&&(Mr=null),uo.forEach(gm),fo.forEach(gm)}function ba(t,e){t.blockedOn===e&&(t.blockedOn=null,Yd||(Yd=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,rS)))}function ho(t){function e(r){return ba(r,t)}if(0<Qo.length){ba(Qo[0],t);for(var n=1;n<Qo.length;n++){var i=Qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yr!==null&&ba(yr,t),Sr!==null&&ba(Sr,t),Mr!==null&&ba(Mr,t),uo.forEach(e),fo.forEach(e),n=0;n<pr.length;n++)i=pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)_x(n),n.blockedOn===null&&pr.shift()}var Zs=$i.ReactCurrentBatchConfig,vc=!0;function sS(t,e,n,i){var r=gt,s=Zs.transition;Zs.transition=null;try{gt=1,zh(t,e,n,i)}finally{gt=r,Zs.transition=s}}function aS(t,e,n,i){var r=gt,s=Zs.transition;Zs.transition=null;try{gt=4,zh(t,e,n,i)}finally{gt=r,Zs.transition=s}}function zh(t,e,n,i){if(vc){var r=Kd(t,e,n,i);if(r===null)Du(t,e,i,_c,n),mm(t,i);else if(iS(r,t,e,n,i))i.stopPropagation();else if(mm(t,i),e&4&&-1<nS.indexOf(t)){for(;r!==null;){var s=Bo(r);if(s!==null&&mx(s),s=Kd(t,e,n,i),s===null&&Du(t,e,i,_c,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Du(t,e,i,null,n)}}var _c=null;function Kd(t,e,n,i){if(_c=null,t=Fh(i),t=Xr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ox(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _c=t,null}function yx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($y()){case kh:return 1;case dx:return 4;case gc:case qy:return 16;case fx:return 536870912;default:return 16}default:return 16}}var xr=null,Hh=null,Kl=null;function Sx(){if(Kl)return Kl;var t,e=Hh,n=e.length,i,r="value"in xr?xr.value:xr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Kl=r.slice(t,1<i?1-i:void 0)}function Zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function xm(){return!1}function Fn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:xm,this.isPropagationStopped=xm,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=Fn(pa),Oo=Lt({},pa,{view:0,detail:0}),oS=Fn(Oo),bu,Eu,Ea,Kc=Lt({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ea&&(Ea&&t.type==="mousemove"?(bu=t.screenX-Ea.screenX,Eu=t.screenY-Ea.screenY):Eu=bu=0,Ea=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),vm=Fn(Kc),lS=Lt({},Kc,{dataTransfer:0}),cS=Fn(lS),uS=Lt({},Oo,{relatedTarget:0}),Tu=Fn(uS),dS=Lt({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),fS=Fn(dS),hS=Lt({},pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pS=Fn(hS),mS=Lt({},pa,{data:0}),_m=Fn(mS),gS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vS[t])?!!e[t]:!1}function Gh(){return _S}var yS=Lt({},Oo,{key:function(t){if(t.key){var e=gS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),SS=Fn(yS),MS=Lt({},Kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Fn(MS),wS=Lt({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),bS=Fn(wS),ES=Lt({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=Fn(ES),AS=Lt({},Kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Fn(AS),RS=[9,13,27,32],jh=Vi&&"CompositionEvent"in window,$a=null;Vi&&"documentMode"in document&&($a=document.documentMode);var NS=Vi&&"TextEvent"in window&&!$a,Mx=Vi&&(!jh||$a&&8<$a&&11>=$a),Sm=" ",Mm=!1;function wx(t,e){switch(t){case"keyup":return RS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function PS(t,e){switch(t){case"compositionend":return bx(e);case"keypress":return e.which!==32?null:(Mm=!0,Sm);case"textInput":return t=e.data,t===Sm&&Mm?null:t;default:return null}}function LS(t,e){if(Fs)return t==="compositionend"||!jh&&wx(t,e)?(t=Sx(),Kl=Hh=xr=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mx&&e.locale!=="ko"?null:e.data;default:return null}}var DS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DS[t.type]:e==="textarea"}function Ex(t,e,n,i){nx(i),e=yc(e,"onChange"),0<e.length&&(n=new Vh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qa=null,po=null;function IS(t){Fx(t,0)}function Zc(t){var e=Bs(t);if(Yg(e))return t}function US(t,e){if(t==="change")return e}var Tx=!1;if(Vi){var Au;if(Vi){var Cu="oninput"in document;if(!Cu){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),Cu=typeof bm.oninput=="function"}Au=Cu}else Au=!1;Tx=Au&&(!document.documentMode||9<document.documentMode)}function Em(){qa&&(qa.detachEvent("onpropertychange",Ax),po=qa=null)}function Ax(t){if(t.propertyName==="value"&&Zc(po)){var e=[];Ex(e,po,t,Fh(t)),ax(IS,e)}}function FS(t,e,n){t==="focusin"?(Em(),qa=e,po=n,qa.attachEvent("onpropertychange",Ax)):t==="focusout"&&Em()}function kS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zc(po)}function OS(t,e){if(t==="click")return Zc(e)}function BS(t,e){if(t==="input"||t==="change")return Zc(e)}function zS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:zS;function mo(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ld.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function Tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Am(t,e){var n=Tm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tm(n)}}function Cx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rx(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HS(t){var e=Rx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cx(n.ownerDocument.documentElement,n)){if(i!==null&&Wh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Am(n,s);var a=Am(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VS=Vi&&"documentMode"in document&&11>=document.documentMode,ks=null,Zd=null,Ya=null,Jd=!1;function Cm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jd||ks==null||ks!==hc(i)||(i=ks,"selectionStart"in i&&Wh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ya&&mo(Ya,i)||(Ya=i,i=yc(Zd,"onSelect"),0<i.length&&(e=new Vh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ks)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Ru={},Nx={};Vi&&(Nx=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Jc(t){if(Ru[t])return Ru[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nx)return Ru[t]=e[n];return t}var Px=Jc("animationend"),Lx=Jc("animationiteration"),Dx=Jc("animationstart"),Ix=Jc("transitionend"),Ux=new Map,Rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){Ux.set(t,e),ls(e,[t])}for(var Nu=0;Nu<Rm.length;Nu++){var Pu=Rm[Nu],GS=Pu.toLowerCase(),jS=Pu[0].toUpperCase()+Pu.slice(1);Dr(GS,"on"+jS)}Dr(Px,"onAnimationEnd");Dr(Lx,"onAnimationIteration");Dr(Dx,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(Ix,"onTransitionEnd");na("onMouseEnter",["mouseout","mouseover"]);na("onMouseLeave",["mouseout","mouseover"]);na("onPointerEnter",["pointerout","pointerover"]);na("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function Nm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Gy(i,e,void 0,t),t.currentTarget=null}function Fx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Nm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Nm(r,o,c),s=l}}}if(mc)throw t=$d,mc=!1,$d=null,t}function Mt(t,e){var n=e[rf];n===void 0&&(n=e[rf]=new Set);var i=t+"__bubble";n.has(i)||(kx(e,t,2,!1),n.add(i))}function Lu(t,e,n){var i=0;e&&(i|=4),kx(n,t,i,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[nl]){t[nl]=!0,jg.forEach(function(n){n!=="selectionchange"&&(WS.has(n)||Lu(n,!1,t),Lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,Lu("selectionchange",!1,e))}}function kx(t,e,n,i){switch(yx(e)){case 1:var r=sS;break;case 4:r=aS;break;default:r=zh}n=r.bind(null,e,n,t),r=void 0,!Xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Du(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Xr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ax(function(){var c=s,f=Fh(n),p=[];e:{var d=Ux.get(t);if(d!==void 0){var g=Vh,x=t;switch(t){case"keypress":if(Zl(n)===0)break e;case"keydown":case"keyup":g=SS;break;case"focusin":x="focus",g=Tu;break;case"focusout":x="blur",g=Tu;break;case"beforeblur":case"afterblur":g=Tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bS;break;case Px:case Lx:case Dx:g=fS;break;case Ix:g=TS;break;case"scroll":g=oS;break;case"wheel":g=CS;break;case"copy":case"cut":case"paste":g=pS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ym}var S=(e&4)!==0,m=!S&&t==="scroll",h=S?d!==null?d+"Capture":null:d;S=[];for(var _=c,y;_!==null;){y=_;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,h!==null&&(v=co(_,h),v!=null&&S.push(xo(_,v,y)))),m)break;_=_.return}0<S.length&&(d=new g(d,x,null,n,f),p.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==jd&&(x=n.relatedTarget||n.fromElement)&&(Xr(x)||x[Gi]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Xr(x):null,x!==null&&(m=cs(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(S=vm,v="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=ym,v="onPointerLeave",h="onPointerEnter",_="pointer"),m=g==null?d:Bs(g),y=x==null?d:Bs(x),d=new S(v,_+"leave",g,n,f),d.target=m,d.relatedTarget=y,v=null,Xr(f)===c&&(S=new S(h,_+"enter",x,n,f),S.target=y,S.relatedTarget=m,v=S),m=v,g&&x)t:{for(S=g,h=x,_=0,y=S;y;y=_s(y))_++;for(y=0,v=h;v;v=_s(v))y++;for(;0<_-y;)S=_s(S),_--;for(;0<y-_;)h=_s(h),y--;for(;_--;){if(S===h||h!==null&&S===h.alternate)break t;S=_s(S),h=_s(h)}S=null}else S=null;g!==null&&Pm(p,d,g,S,!1),x!==null&&m!==null&&Pm(p,m,x,S,!0)}}e:{if(d=c?Bs(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var b=US;else if(wm(d))if(Tx)b=BS;else{b=kS;var E=FS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=OS);if(b&&(b=b(t,c))){Ex(p,b,n,f);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Bd(d,"number",d.value)}switch(E=c?Bs(c):window,t){case"focusin":(wm(E)||E.contentEditable==="true")&&(ks=E,Zd=c,Ya=null);break;case"focusout":Ya=Zd=ks=null;break;case"mousedown":Jd=!0;break;case"contextmenu":case"mouseup":case"dragend":Jd=!1,Cm(p,n,f);break;case"selectionchange":if(VS)break;case"keydown":case"keyup":Cm(p,n,f)}var A;if(jh)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Fs?wx(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Mx&&n.locale!=="ko"&&(Fs||M!=="onCompositionStart"?M==="onCompositionEnd"&&Fs&&(A=Sx()):(xr=f,Hh="value"in xr?xr.value:xr.textContent,Fs=!0)),E=yc(c,M),0<E.length&&(M=new _m(M,t,null,n,f),p.push({event:M,listeners:E}),A?M.data=A:(A=bx(n),A!==null&&(M.data=A)))),(A=NS?PS(t,n):LS(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(f=new _m("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=A))}Fx(p,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=co(t,n),s!=null&&i.unshift(xo(t,s,r)),s=co(t,e),s!=null&&i.push(xo(t,s,r))),t=t.return}return i}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=co(n,s),l!=null&&a.unshift(xo(n,l,o))):r||(l=co(n,s),l!=null&&a.push(xo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var XS=/\r\n?/g,$S=/\u0000|\uFFFD/g;function Lm(t){return(typeof t=="string"?t:""+t).replace(XS,`
`).replace($S,"")}function il(t,e,n){if(e=Lm(e),Lm(t)!==e&&n)throw Error(ce(425))}function Sc(){}var Qd=null,ef=null;function tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nf=typeof setTimeout=="function"?setTimeout:void 0,qS=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,YS=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(t){return Dm.resolve(null).then(t).catch(KS)}:nf;function KS(t){setTimeout(function(){throw t})}function Iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ho(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ma=Math.random().toString(36).slice(2),mi="__reactFiber$"+ma,vo="__reactProps$"+ma,Gi="__reactContainer$"+ma,rf="__reactEvents$"+ma,ZS="__reactListeners$"+ma,JS="__reactHandles$"+ma;function Xr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Im(t);t!==null;){if(n=t[mi])return n;t=Im(t)}return e}t=n,n=t.parentNode}return null}function Bo(t){return t=t[mi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Qc(t){return t[vo]||null}var sf=[],zs=-1;function Ir(t){return{current:t}}function wt(t){0>zs||(t.current=sf[zs],sf[zs]=null,zs--)}function yt(t,e){zs++,sf[zs]=t.current,t.current=e}var Nr={},un=Ir(Nr),Sn=Ir(!1),Qr=Nr;function ia(t,e){var n=t.type.contextTypes;if(!n)return Nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function Mc(){wt(Sn),wt(un)}function Um(t,e,n){if(un.current!==Nr)throw Error(ce(168));yt(un,e),yt(Sn,n)}function Ox(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Fy(t)||"Unknown",r));return Lt({},n,i)}function wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,Qr=un.current,yt(un,t),yt(Sn,Sn.current),!0}function Fm(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Ox(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,wt(Sn),wt(un),yt(un,t)):wt(Sn),yt(Sn,n)}var Ui=null,eu=!1,Uu=!1;function Bx(t){Ui===null?Ui=[t]:Ui.push(t)}function QS(t){eu=!0,Bx(t)}function Ur(){if(!Uu&&Ui!==null){Uu=!0;var t=0,e=gt;try{var n=Ui;for(gt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,eu=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),ux(kh,Ur),r}finally{gt=e,Uu=!1}}return null}var Hs=[],Vs=0,bc=null,Ec=0,Hn=[],Vn=0,es=null,Fi=1,ki="";function Gr(t,e){Hs[Vs++]=Ec,Hs[Vs++]=bc,bc=t,Ec=e}function zx(t,e,n){Hn[Vn++]=Fi,Hn[Vn++]=ki,Hn[Vn++]=es,es=t;var i=Fi;t=ki;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Fi=1<<32-ri(e)+r|n<<r|i,ki=s+t}else Fi=1<<s|n<<r|i,ki=t}function Xh(t){t.return!==null&&(Gr(t,1),zx(t,1,0))}function $h(t){for(;t===bc;)bc=Hs[--Vs],Hs[Vs]=null,Ec=Hs[--Vs],Hs[Vs]=null;for(;t===es;)es=Hn[--Vn],Hn[Vn]=null,ki=Hn[--Vn],Hn[Vn]=null,Fi=Hn[--Vn],Hn[Vn]=null}var Dn=null,Pn=null,Et=!1,ti=null;function Hx(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Pn=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Fi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Pn=null,!0):!1;default:return!1}}function af(t){return(t.mode&1)!==0&&(t.flags&128)===0}function of(t){if(Et){var e=Pn;if(e){var n=e;if(!km(t,e)){if(af(t))throw Error(ce(418));e=wr(n.nextSibling);var i=Dn;e&&km(t,e)?Hx(i,n):(t.flags=t.flags&-4097|2,Et=!1,Dn=t)}}else{if(af(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Et=!1,Dn=t}}}function Om(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function rl(t){if(t!==Dn)return!1;if(!Et)return Om(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tf(t.type,t.memoizedProps)),e&&(e=Pn)){if(af(t))throw Vx(),Error(ce(418));for(;e;)Hx(t,e),e=wr(e.nextSibling)}if(Om(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=Dn?wr(t.stateNode.nextSibling):null;return!0}function Vx(){for(var t=Pn;t;)t=wr(t.nextSibling)}function ra(){Pn=Dn=null,Et=!1}function qh(t){ti===null?ti=[t]:ti.push(t)}var eM=$i.ReactCurrentBatchConfig;function Ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bm(t){var e=t._init;return e(t._payload)}function Gx(t){function e(h,_){if(t){var y=h.deletions;y===null?(h.deletions=[_],h.flags|=16):y.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Ar(h,_),h.index=0,h.sibling=null,h}function s(h,_,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<_?(h.flags|=2,_):y):(h.flags|=2,_)):(h.flags|=1048576,_)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,_,y,v){return _===null||_.tag!==6?(_=Vu(y,h.mode,v),_.return=h,_):(_=r(_,y),_.return=h,_)}function l(h,_,y,v){var b=y.type;return b===Us?f(h,_,y.props.children,v,y.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===lr&&Bm(b)===_.type)?(v=r(_,y.props),v.ref=Ta(h,_,y),v.return=h,v):(v=rc(y.type,y.key,y.props,null,h.mode,v),v.ref=Ta(h,_,y),v.return=h,v)}function c(h,_,y,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Gu(y,h.mode,v),_.return=h,_):(_=r(_,y.children||[]),_.return=h,_)}function f(h,_,y,v,b){return _===null||_.tag!==7?(_=Jr(y,h.mode,v,b),_.return=h,_):(_=r(_,y),_.return=h,_)}function p(h,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Vu(""+_,h.mode,y),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case qo:return y=rc(_.type,_.key,_.props,null,h.mode,y),y.ref=Ta(h,null,_),y.return=h,y;case Is:return _=Gu(_,h.mode,y),_.return=h,_;case lr:var v=_._init;return p(h,v(_._payload),y)}if(Oa(_)||Sa(_))return _=Jr(_,h.mode,y,null),_.return=h,_;sl(h,_)}return null}function d(h,_,y,v){var b=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:o(h,_,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qo:return y.key===b?l(h,_,y,v):null;case Is:return y.key===b?c(h,_,y,v):null;case lr:return b=y._init,d(h,_,b(y._payload),v)}if(Oa(y)||Sa(y))return b!==null?null:f(h,_,y,v,null);sl(h,y)}return null}function g(h,_,y,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(y)||null,o(_,h,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return h=h.get(v.key===null?y:v.key)||null,l(_,h,v,b);case Is:return h=h.get(v.key===null?y:v.key)||null,c(_,h,v,b);case lr:var E=v._init;return g(h,_,y,E(v._payload),b)}if(Oa(v)||Sa(v))return h=h.get(y)||null,f(_,h,v,b,null);sl(_,v)}return null}function x(h,_,y,v){for(var b=null,E=null,A=_,M=_=0,C=null;A!==null&&M<y.length;M++){A.index>M?(C=A,A=null):C=A.sibling;var R=d(h,A,y[M],v);if(R===null){A===null&&(A=C);break}t&&A&&R.alternate===null&&e(h,A),_=s(R,_,M),E===null?b=R:E.sibling=R,E=R,A=C}if(M===y.length)return n(h,A),Et&&Gr(h,M),b;if(A===null){for(;M<y.length;M++)A=p(h,y[M],v),A!==null&&(_=s(A,_,M),E===null?b=A:E.sibling=A,E=A);return Et&&Gr(h,M),b}for(A=i(h,A);M<y.length;M++)C=g(A,h,M,y[M],v),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?M:C.key),_=s(C,_,M),E===null?b=C:E.sibling=C,E=C);return t&&A.forEach(function(N){return e(h,N)}),Et&&Gr(h,M),b}function S(h,_,y,v){var b=Sa(y);if(typeof b!="function")throw Error(ce(150));if(y=b.call(y),y==null)throw Error(ce(151));for(var E=b=null,A=_,M=_=0,C=null,R=y.next();A!==null&&!R.done;M++,R=y.next()){A.index>M?(C=A,A=null):C=A.sibling;var N=d(h,A,R.value,v);if(N===null){A===null&&(A=C);break}t&&A&&N.alternate===null&&e(h,A),_=s(N,_,M),E===null?b=N:E.sibling=N,E=N,A=C}if(R.done)return n(h,A),Et&&Gr(h,M),b;if(A===null){for(;!R.done;M++,R=y.next())R=p(h,R.value,v),R!==null&&(_=s(R,_,M),E===null?b=R:E.sibling=R,E=R);return Et&&Gr(h,M),b}for(A=i(h,A);!R.done;M++,R=y.next())R=g(A,h,M,R.value,v),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?M:R.key),_=s(R,_,M),E===null?b=R:E.sibling=R,E=R);return t&&A.forEach(function(F){return e(h,F)}),Et&&Gr(h,M),b}function m(h,_,y,v){if(typeof y=="object"&&y!==null&&y.type===Us&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case qo:e:{for(var b=y.key,E=_;E!==null;){if(E.key===b){if(b=y.type,b===Us){if(E.tag===7){n(h,E.sibling),_=r(E,y.props.children),_.return=h,h=_;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===lr&&Bm(b)===E.type){n(h,E.sibling),_=r(E,y.props),_.ref=Ta(h,E,y),_.return=h,h=_;break e}n(h,E);break}else e(h,E);E=E.sibling}y.type===Us?(_=Jr(y.props.children,h.mode,v,y.key),_.return=h,h=_):(v=rc(y.type,y.key,y.props,null,h.mode,v),v.ref=Ta(h,_,y),v.return=h,h=v)}return a(h);case Is:e:{for(E=y.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(h,_.sibling),_=r(_,y.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Gu(y,h.mode,v),_.return=h,h=_}return a(h);case lr:return E=y._init,m(h,_,E(y._payload),v)}if(Oa(y))return x(h,_,y,v);if(Sa(y))return S(h,_,y,v);sl(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,y),_.return=h,h=_):(n(h,_),_=Vu(y,h.mode,v),_.return=h,h=_),a(h)):n(h,_)}return m}var sa=Gx(!0),jx=Gx(!1),Tc=Ir(null),Ac=null,Gs=null,Yh=null;function Kh(){Yh=Gs=Ac=null}function Zh(t){var e=Tc.current;wt(Tc),t._currentValue=e}function lf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Ac=t,Yh=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Yh!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(Ac===null)throw Error(ce(308));Gs=t,Ac.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var $r=null;function Jh(t){$r===null?$r=[t]:$r.push(t)}function Wx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Jh(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function Qh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Oh(t,n)}}function zm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cc(t,e,n,i){var r=t.updateQueue;cr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,g=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,S=o;switch(d=e,g=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){p=x.call(g,p,d);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,d=typeof x=="function"?x.call(g,p,d):x,d==null)break e;p=Lt({},p,d);break e;case 2:cr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=g,l=p):f=f.next=g,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=a,t.lanes=a,t.memoizedState=p}}function Hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var zo={},yi=Ir(zo),_o=Ir(zo),yo=Ir(zo);function qr(t){if(t===zo)throw Error(ce(174));return t}function ep(t,e){switch(yt(yo,e),yt(_o,t),yt(yi,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hd(e,t)}wt(yi),yt(yi,e)}function aa(){wt(yi),wt(_o),wt(yo)}function $x(t){qr(yo.current);var e=qr(yi.current),n=Hd(e,t.type);e!==n&&(yt(_o,t),yt(yi,n))}function tp(t){_o.current===t&&(wt(yi),wt(_o))}var Tt=Ir(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function np(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var Ql=$i.ReactCurrentDispatcher,ku=$i.ReactCurrentBatchConfig,ts=0,Rt=null,Bt=null,jt=null,Nc=!1,Ka=!1,So=0,tM=0;function tn(){throw Error(ce(321))}function ip(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function rp(t,e,n,i,r,s){if(ts=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?sM:aM,t=n(i,r),Ka){s=0;do{if(Ka=!1,So=0,25<=s)throw Error(ce(301));s+=1,jt=Bt=null,e.updateQueue=null,Ql.current=oM,t=n(i,r)}while(Ka)}if(Ql.current=Pc,e=Bt!==null&&Bt.next!==null,ts=0,jt=Bt=Rt=null,Nc=!1,e)throw Error(ce(300));return t}function sp(){var t=So!==0;return So=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Rt.memoizedState=jt=t:jt=jt.next=t,jt}function $n(){if(Bt===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=jt===null?Rt.memoizedState:jt.next;if(e!==null)jt=e,Bt=t;else{if(t===null)throw Error(ce(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},jt===null?Rt.memoizedState=jt=t:jt=jt.next=t}return jt}function Mo(t,e){return typeof e=="function"?e(t):e}function Ou(t){var e=$n(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((ts&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,Rt.lanes|=f,ns|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,oi(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Rt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bu(t){var e=$n(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);oi(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function qx(){}function Yx(t,e){var n=Rt,i=$n(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,ap(Jx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,wo(9,Zx.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(ce(349));ts&30||Kx(n,e,r)}return r}function Kx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zx(t,e,n,i){e.value=n,e.getSnapshot=i,Qx(e)&&ev(t)}function Jx(t,e,n){return n(function(){Qx(e)&&ev(t)})}function Qx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function ev(t){var e=ji(t,1);e!==null&&si(e,t,1,-1)}function Vm(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=rM.bind(null,Rt,t),[e.memoizedState,t]}function wo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function tv(){return $n().memoizedState}function ec(t,e,n,i){var r=hi();Rt.flags|=t,r.memoizedState=wo(1|e,n,void 0,i===void 0?null:i)}function tu(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&ip(i,a.deps)){r.memoizedState=wo(e,n,s,i);return}}Rt.flags|=t,r.memoizedState=wo(1|e,n,s,i)}function Gm(t,e){return ec(8390656,8,t,e)}function ap(t,e){return tu(2048,8,t,e)}function nv(t,e){return tu(4,2,t,e)}function iv(t,e){return tu(4,4,t,e)}function rv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sv(t,e,n){return n=n!=null?n.concat([t]):null,tu(4,4,rv.bind(null,e,t),n)}function op(){}function av(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ip(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ov(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ip(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function lv(t,e,n){return ts&21?(oi(n,e)||(n=hx(),Rt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function nM(t,e){var n=gt;gt=n!==0&&4>n?n:4,t(!0);var i=ku.transition;ku.transition={};try{t(!1),e()}finally{gt=n,ku.transition=i}}function cv(){return $n().memoizedState}function iM(t,e,n){var i=Tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},uv(t))dv(e,n);else if(n=Wx(t,e,n,i),n!==null){var r=pn();si(n,t,i,r),fv(n,e,i)}}function rM(t,e,n){var i=Tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(uv(t))dv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,oi(o,a)){var l=e.interleaved;l===null?(r.next=r,Jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Wx(t,e,r,i),n!==null&&(r=pn(),si(n,t,i,r),fv(n,e,i))}}function uv(t){var e=t.alternate;return t===Rt||e!==null&&e===Rt}function dv(t,e){Ka=Nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Oh(t,n)}}var Pc={readContext:Xn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},sM={readContext:Xn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:Gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,rv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=iM.bind(null,Rt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:Vm,useDebugValue:op,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Vm(!1),e=t[0];return t=nM.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Rt,r=hi();if(Et){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Xt===null)throw Error(ce(349));ts&30||Kx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Gm(Jx.bind(null,i,s,t),[t]),i.flags|=2048,wo(9,Zx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Xt.identifierPrefix;if(Et){var n=ki,i=Fi;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aM={readContext:Xn,useCallback:av,useContext:Xn,useEffect:ap,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:ov,useReducer:Ou,useRef:tv,useState:function(){return Ou(Mo)},useDebugValue:op,useDeferredValue:function(t){var e=$n();return lv(e,Bt.memoizedState,t)},useTransition:function(){var t=Ou(Mo)[0],e=$n().memoizedState;return[t,e]},useMutableSource:qx,useSyncExternalStore:Yx,useId:cv,unstable_isNewReconciler:!1},oM={readContext:Xn,useCallback:av,useContext:Xn,useEffect:ap,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:ov,useReducer:Bu,useRef:tv,useState:function(){return Bu(Mo)},useDebugValue:op,useDeferredValue:function(t){var e=$n();return Bt===null?e.memoizedState=t:lv(e,Bt.memoizedState,t)},useTransition:function(){var t=Bu(Mo)[0],e=$n().memoizedState;return[t,e]},useMutableSource:qx,useSyncExternalStore:Yx,useId:cv,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nu={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Tr(t),s=Bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(si(e,t,r,i),Jl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Tr(t),s=Bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(si(e,t,r,i),Jl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=Tr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(si(e,t,i,n),Jl(e,t,i))}};function jm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!mo(n,i)||!mo(r,s):!0}function hv(t,e,n){var i=!1,r=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=Mn(e)?Qr:un.current,i=e.contextTypes,s=(i=i!=null)?ia(t,r):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&nu.enqueueReplaceState(e,e.state,null)}function uf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Qh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=Mn(e)?Qr:un.current,r.context=ia(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nu.enqueueReplaceState(r,r.state,null),Cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oa(t,e){try{var n="",i=e;do n+=Uy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lM=typeof WeakMap=="function"?WeakMap:Map;function pv(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dc||(Dc=!0,Sf=i),df(t,e)},n}function mv(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){df(t,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Xm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new lM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=MM.bind(null,t,e,n),e.then(t,t))}function $m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var cM=$i.ReactCurrentOwner,yn=!1;function hn(t,e,n,i){e.child=t===null?jx(e,null,n,i):sa(e,t.child,n,i)}function Ym(t,e,n,i,r){n=n.render;var s=e.ref;return Js(e,r),i=rp(t,e,n,i,s,r),n=sp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(Et&&n&&Xh(e),e.flags|=1,hn(t,e,i,r),e.child)}function Km(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!mp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gv(t,e,s,i,r)):(t=rc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(a,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=Ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function gv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(mo(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return ff(t,e,n,i,r)}function xv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(Ws,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(Ws,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(Ws,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(Ws,Cn),Cn|=i;return hn(t,e,r,n),e.child}function vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ff(t,e,n,i,r){var s=Mn(n)?Qr:un.current;return s=ia(e,s),Js(e,r),n=rp(t,e,n,i,s,r),i=sp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(Et&&i&&Xh(e),e.flags|=1,hn(t,e,n,r),e.child)}function Zm(t,e,n,i,r){if(Mn(n)){var s=!0;wc(e)}else s=!1;if(Js(e,r),e.stateNode===null)tc(t,e),hv(e,n,i),uf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=Mn(n)?Qr:un.current,c=ia(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Wm(e,a,i,c),cr=!1;var d=e.memoizedState;a.state=d,Cc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||Sn.current||cr?(typeof f=="function"&&(cf(e,n,f,i),l=e.memoizedState),(o=cr||jm(e,n,o,i,d,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Xx(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Qn(e.type,o),a.props=c,p=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=Mn(n)?Qr:un.current,l=ia(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==l)&&Wm(e,a,i,l),cr=!1,d=e.memoizedState,a.state=d,Cc(e,i,a,r);var x=e.memoizedState;o!==p||d!==x||Sn.current||cr?(typeof g=="function"&&(cf(e,n,g,i),x=e.memoizedState),(c=cr||jm(e,n,c,i,d,x,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return hf(t,e,n,i,s,r)}function hf(t,e,n,i,r,s){vv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Fm(e,n,!1),Wi(t,e,s);i=e.stateNode,cM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=sa(e,t.child,null,s),e.child=sa(e,null,o,s)):hn(t,e,o,s),e.memoizedState=i.state,r&&Fm(e,n,!0),e.child}function _v(t){var e=t.stateNode;e.pendingContext?Um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Um(t,e.context,!1),ep(t,e.containerInfo)}function Jm(t,e,n,i,r){return ra(),qh(r),e.flags|=256,hn(t,e,n,i),e.child}var pf={dehydrated:null,treeContext:null,retryLane:0};function mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function yv(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(Tt,r&1),t===null)return of(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=su(a,i,0,null),t=Jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mf(n),e.memoizedState=pf,t):lp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return uM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Ar(o,s):(s=Jr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?mf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=pf,i}return s=t.child,t=s.sibling,i=Ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function lp(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,i){return i!==null&&qh(i),sa(e,t.child,null,n),t=lp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=zu(Error(ce(422))),al(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=su({mode:"visible",children:i.children},r,0,null),s=Jr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&sa(e,t.child,null,a),e.child.memoizedState=mf(a),e.memoizedState=pf,s);if(!(e.mode&1))return al(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=zu(s,i,void 0),al(t,e,a,i)}if(o=(a&t.childLanes)!==0,yn||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),si(i,t,r,-1))}return pp(),i=zu(Error(ce(421))),al(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=wM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=wr(r.nextSibling),Dn=e,Et=!0,ti=null,t!==null&&(Hn[Vn++]=Fi,Hn[Vn++]=ki,Hn[Vn++]=es,Fi=t.id,ki=t.overflow,es=e),e=lp(e,i.children),e.flags|=4096,e)}function Qm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),lf(t.return,e,n)}function Hu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Sv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qm(t,n,e);else if(t.tag===19)Qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hu(e,!0,n,null,s);break;case"together":Hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dM(t,e,n){switch(e.tag){case 3:_v(e),ra();break;case 5:$x(e);break;case 1:Mn(e.type)&&wc(e);break;case 4:ep(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(Tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?yv(t,e,n):(yt(Tt,Tt.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);yt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,xv(t,e,n)}return Wi(t,e,n)}var Mv,gf,wv,bv;Mv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gf=function(){};wv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(yi.current);var s=null;switch(n){case"input":r=kd(t,r),i=kd(t,i),s=[];break;case"select":r=Lt({},r,{value:void 0}),i=Lt({},i,{value:void 0}),s=[];break;case"textarea":r=zd(t,r),i=zd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sc)}Vd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};bv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Aa(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function fM(t,e,n){var i=e.pendingProps;switch($h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return Mn(e.type)&&Mc(),nn(e),null;case 3:return i=e.stateNode,aa(),wt(Sn),wt(un),np(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(bf(ti),ti=null))),gf(t,e),nn(e),null;case 5:tp(e);var r=qr(yo.current);if(n=e.type,t!==null&&e.stateNode!=null)wv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return nn(e),null}if(t=qr(yi.current),rl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[vo]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<za.length;r++)Mt(za[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":lm(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":um(i,s),Mt("invalid",i)}Vd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&il(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&il(i.textContent,o,t),r=["children",""+o]):oo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Mt("scroll",i)}switch(n){case"input":Yo(i),cm(i,s,!0);break;case"textarea":Yo(i),dm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[mi]=e,t[vo]=i,Mv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Gd(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<za.length;r++)Mt(za[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":lm(t,i),r=kd(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Lt({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":um(t,i),r=zd(t,i),Mt("invalid",t);break;default:r=i}Vd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?tx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lo(t,l):typeof l=="number"&&lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",t):l!=null&&Lh(t,s,l,a))}switch(n){case"input":Yo(t),cm(t,i,!1);break;case"textarea":Yo(t),dm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)bv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=qr(yo.current),qr(yi.current),rl(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:il(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return nn(e),null;case 13:if(wt(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Pn!==null&&e.mode&1&&!(e.flags&128))Vx(),ra(),e.flags|=98560,s=!1;else if(s=rl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[mi]=e}else ra(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else ti!==null&&(bf(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?zt===0&&(zt=3):pp())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return aa(),gf(t,e),t===null&&go(e.stateNode.containerInfo),nn(e),null;case 10:return Zh(e.type._context),nn(e),null;case 17:return Mn(e.type)&&Mc(),nn(e),null;case 19:if(wt(Tt),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Aa(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Rc(t),a!==null){for(e.flags|=128,Aa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ut()>la&&(e.flags|=128,i=!0,Aa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return nn(e),null}else 2*Ut()-s.renderingStartTime>la&&n!==1073741824&&(e.flags|=128,i=!0,Aa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,n=Tt.current,yt(Tt,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return hp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function hM(t,e){switch($h(e),e.tag){case 1:return Mn(e.type)&&Mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return aa(),wt(Sn),wt(un),np(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tp(e),null;case 13:if(wt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(Tt),null;case 4:return aa(),null;case 10:return Zh(e.type._context),null;case 22:case 23:return hp(),null;case 24:return null;default:return null}}var ol=!1,an=!1,pM=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function xf(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var e0=!1;function mM(t,e){if(Qd=vc,t=Rx(),Wh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,p=t,d=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)d=p,p=g;for(;;){if(p===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(g=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ef={focusedElem:t,selectionRange:n},vc=!1,Ne=e;Ne!==null;)if(e=Ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ne=t;else for(;Ne!==null;){e=Ne;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,m=x.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?S:Qn(e.type,S),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(v){Dt(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,Ne=t;break}Ne=e.return}return x=e0,e0=!1,x}function Za(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xf(e,n,s)}r=r.next}while(r!==i)}}function iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ev(t){var e=t.alternate;e!==null&&(t.alternate=null,Ev(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[vo],delete e[rf],delete e[ZS],delete e[JS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tv(t){return t.tag===5||t.tag===3||t.tag===4}function t0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sc));else if(i!==4&&(t=t.child,t!==null))for(_f(t,e,n),t=t.sibling;t!==null;)_f(t,e,n),t=t.sibling}function yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}var qt=null,ei=!1;function nr(t,e,n){for(n=n.child;n!==null;)Av(t,e,n),n=n.sibling}function Av(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(Yc,n)}catch{}switch(n.tag){case 5:an||js(n,e);case 6:var i=qt,r=ei;qt=null,nr(t,e,n),qt=i,ei=r,qt!==null&&(ei?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ei?(t=qt,n=n.stateNode,t.nodeType===8?Iu(t.parentNode,n):t.nodeType===1&&Iu(t,n),ho(t)):Iu(qt,n.stateNode));break;case 4:i=qt,r=ei,qt=n.stateNode.containerInfo,ei=!0,nr(t,e,n),qt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!an&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&xf(n,e,a),r=r.next}while(r!==i)}nr(t,e,n);break;case 1:if(!an&&(js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Dt(n,e,o)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(an=(i=an)||n.memoizedState!==null,nr(t,e,n),an=i):nr(t,e,n);break;default:nr(t,e,n)}}function n0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pM),e.forEach(function(i){var r=bM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:qt=o.stateNode,ei=!1;break e;case 3:qt=o.stateNode.containerInfo,ei=!0;break e;case 4:qt=o.stateNode.containerInfo,ei=!0;break e}o=o.return}if(qt===null)throw Error(ce(160));Av(s,a,r),qt=null,ei=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cv(e,t),e=e.sibling}function Cv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),ui(t),i&4){try{Za(3,t,t.return),iu(3,t)}catch(S){Dt(t,t.return,S)}try{Za(5,t,t.return)}catch(S){Dt(t,t.return,S)}}break;case 1:Yn(e,t),ui(t),i&512&&n!==null&&js(n,n.return);break;case 5:if(Yn(e,t),ui(t),i&512&&n!==null&&js(n,n.return),t.flags&32){var r=t.stateNode;try{lo(r,"")}catch(S){Dt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Kg(r,s),Gd(o,a);var c=Gd(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?tx(r,p):f==="dangerouslySetInnerHTML"?Qg(r,p):f==="children"?lo(r,p):Lh(r,f,p,c)}switch(o){case"input":Od(r,s);break;case"textarea":Zg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qs(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?qs(r,!!s.multiple,s.defaultValue,!0):qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[vo]=s}catch(S){Dt(t,t.return,S)}}break;case 6:if(Yn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Dt(t,t.return,S)}}break;case 3:if(Yn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(S){Dt(t,t.return,S)}break;case 4:Yn(e,t),ui(t);break;case 13:Yn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(dp=Ut())),i&4&&n0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(an=(c=an)||f,Yn(e,t),an=c):Yn(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ne=t,f=t.child;f!==null;){for(p=Ne=f;Ne!==null;){switch(d=Ne,g=d.child,d.tag){case 0:case 11:case 14:case 15:Za(4,d,d.return);break;case 1:js(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){Dt(i,n,S)}}break;case 5:js(d,d.return);break;case 22:if(d.memoizedState!==null){r0(p);continue}}g!==null?(g.return=d,Ne=g):r0(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=ex("display",a))}catch(S){Dt(t,t.return,S)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){Dt(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Yn(e,t),ui(t),i&4&&n0(t);break;case 21:break;default:Yn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(lo(r,""),i.flags&=-33);var s=t0(t);yf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=t0(t);_f(t,o,a);break;default:throw Error(ce(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gM(t,e,n){Ne=t,Rv(t)}function Rv(t,e,n){for(var i=(t.mode&1)!==0;Ne!==null;){var r=Ne,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ol;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||an;o=ol;var c=an;if(ol=a,(an=l)&&!c)for(Ne=r;Ne!==null;)a=Ne,l=a.child,a.tag===22&&a.memoizedState!==null?s0(r):l!==null?(l.return=a,Ne=l):s0(r);for(;s!==null;)Ne=s,Rv(s),s=s.sibling;Ne=r,ol=o,an=c}i0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ne=s):i0(t)}}function i0(t){for(;Ne!==null;){var e=Ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||iu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!an)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ho(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}an||e.flags&512&&vf(e)}catch(d){Dt(e,e.return,d)}}if(e===t){Ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function r0(t){for(;Ne!==null;){var e=Ne;if(e===t){Ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function s0(t){for(;Ne!==null;){var e=Ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{iu(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{vf(e)}catch(l){Dt(e,s,l)}break;case 5:var a=e.return;try{vf(e)}catch(l){Dt(e,a,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){Ne=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ne=o;break}Ne=e.return}}var xM=Math.ceil,Lc=$i.ReactCurrentDispatcher,cp=$i.ReactCurrentOwner,Wn=$i.ReactCurrentBatchConfig,ft=0,Xt=null,Ot=null,Kt=0,Cn=0,Ws=Ir(0),zt=0,bo=null,ns=0,ru=0,up=0,Ja=null,_n=null,dp=0,la=1/0,Ii=null,Dc=!1,Sf=null,Er=null,ll=!1,vr=null,Ic=0,Qa=0,Mf=null,nc=-1,ic=0;function pn(){return ft&6?Ut():nc!==-1?nc:nc=Ut()}function Tr(t){return t.mode&1?ft&2&&Kt!==0?Kt&-Kt:eM.transition!==null?(ic===0&&(ic=hx()),ic):(t=gt,t!==0||(t=window.event,t=t===void 0?16:yx(t.type)),t):1}function si(t,e,n,i){if(50<Qa)throw Qa=0,Mf=null,Error(ce(185));ko(t,n,i),(!(ft&2)||t!==Xt)&&(t===Xt&&(!(ft&2)&&(ru|=n),zt===4&&mr(t,Kt)),wn(t,i),n===1&&ft===0&&!(e.mode&1)&&(la=Ut()+500,eu&&Ur()))}function wn(t,e){var n=t.callbackNode;eS(t,e);var i=xc(t,t===Xt?Kt:0);if(i===0)n!==null&&pm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&pm(n),e===1)t.tag===0?QS(a0.bind(null,t)):Bx(a0.bind(null,t)),YS(function(){!(ft&6)&&Ur()}),n=null;else{switch(px(i)){case 1:n=kh;break;case 4:n=dx;break;case 16:n=gc;break;case 536870912:n=fx;break;default:n=gc}n=kv(n,Nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nv(t,e){if(nc=-1,ic=0,ft&6)throw Error(ce(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=xc(t,t===Xt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Uc(t,i);else{e=i;var r=ft;ft|=2;var s=Lv();(Xt!==t||Kt!==e)&&(Ii=null,la=Ut()+500,Zr(t,e));do try{yM();break}catch(o){Pv(t,o)}while(!0);Kh(),Lc.current=s,ft=r,Ot!==null?e=0:(Xt=null,Kt=0,e=zt)}if(e!==0){if(e===2&&(r=qd(t),r!==0&&(i=r,e=wf(t,r))),e===1)throw n=bo,Zr(t,0),mr(t,i),wn(t,Ut()),n;if(e===6)mr(t,i);else{if(r=t.current.alternate,!(i&30)&&!vM(r)&&(e=Uc(t,i),e===2&&(s=qd(t),s!==0&&(i=s,e=wf(t,s))),e===1))throw n=bo,Zr(t,0),mr(t,i),wn(t,Ut()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:jr(t,_n,Ii);break;case 3:if(mr(t,i),(i&130023424)===i&&(e=dp+500-Ut(),10<e)){if(xc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nf(jr.bind(null,t,_n,Ii),e);break}jr(t,_n,Ii);break;case 4:if(mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ri(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xM(i/1960))-i,10<i){t.timeoutHandle=nf(jr.bind(null,t,_n,Ii),i);break}jr(t,_n,Ii);break;case 5:jr(t,_n,Ii);break;default:throw Error(ce(329))}}}return wn(t,Ut()),t.callbackNode===n?Nv.bind(null,t):null}function wf(t,e){var n=Ja;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=Uc(t,e),t!==2&&(e=_n,_n=n,e!==null&&bf(e)),t}function bf(t){_n===null?_n=t:_n.push.apply(_n,t)}function vM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~up,e&=~ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function a0(t){if(ft&6)throw Error(ce(327));Qs();var e=xc(t,0);if(!(e&1))return wn(t,Ut()),null;var n=Uc(t,e);if(t.tag!==0&&n===2){var i=qd(t);i!==0&&(e=i,n=wf(t,i))}if(n===1)throw n=bo,Zr(t,0),mr(t,e),wn(t,Ut()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,_n,Ii),wn(t,Ut()),null}function fp(t,e){var n=ft;ft|=1;try{return t(e)}finally{ft=n,ft===0&&(la=Ut()+500,eu&&Ur())}}function is(t){vr!==null&&vr.tag===0&&!(ft&6)&&Qs();var e=ft;ft|=1;var n=Wn.transition,i=gt;try{if(Wn.transition=null,gt=1,t)return t()}finally{gt=i,Wn.transition=n,ft=e,!(ft&6)&&Ur()}}function hp(){Cn=Ws.current,wt(Ws)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qS(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch($h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mc();break;case 3:aa(),wt(Sn),wt(un),np();break;case 5:tp(i);break;case 4:aa();break;case 13:wt(Tt);break;case 19:wt(Tt);break;case 10:Zh(i.type._context);break;case 22:case 23:hp()}n=n.return}if(Xt=t,Ot=t=Ar(t.current,null),Kt=Cn=e,zt=0,bo=null,up=ru=ns=0,_n=Ja=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}$r=null}return t}function Pv(t,e){do{var n=Ot;try{if(Kh(),Ql.current=Pc,Nc){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nc=!1}if(ts=0,jt=Bt=Rt=null,Ka=!1,So=0,cp.current=null,n===null||n.return===null){zt=1,bo=e,Ot=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=$m(a);if(g!==null){g.flags&=-257,qm(g,a,o,s,e),g.mode&1&&Xm(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){Xm(s,c,e),pp();break e}l=Error(ce(426))}}else if(Et&&o.mode&1){var m=$m(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),qm(m,a,o,s,e),qh(oa(l,o));break e}}s=l=oa(l,o),zt!==4&&(zt=2),Ja===null?Ja=[s]:Ja.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=pv(s,l,e);zm(s,h);break e;case 1:o=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Er===null||!Er.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=mv(s,o,e);zm(s,v);break e}}s=s.return}while(s!==null)}Iv(n)}catch(b){e=b,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function Lv(){var t=Lc.current;return Lc.current=Pc,t===null?Pc:t}function pp(){(zt===0||zt===3||zt===2)&&(zt=4),Xt===null||!(ns&268435455)&&!(ru&268435455)||mr(Xt,Kt)}function Uc(t,e){var n=ft;ft|=2;var i=Lv();(Xt!==t||Kt!==e)&&(Ii=null,Zr(t,e));do try{_M();break}catch(r){Pv(t,r)}while(!0);if(Kh(),ft=n,Lc.current=i,Ot!==null)throw Error(ce(261));return Xt=null,Kt=0,zt}function _M(){for(;Ot!==null;)Dv(Ot)}function yM(){for(;Ot!==null&&!Wy();)Dv(Ot)}function Dv(t){var e=Fv(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?Iv(t):Ot=e,cp.current=null}function Iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hM(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Ot=null;return}}else if(n=fM(n,e,Cn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);zt===0&&(zt=5)}function jr(t,e,n){var i=gt,r=Wn.transition;try{Wn.transition=null,gt=1,SM(t,e,n,i)}finally{Wn.transition=r,gt=i}return null}function SM(t,e,n,i){do Qs();while(vr!==null);if(ft&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tS(t,s),t===Xt&&(Ot=Xt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,kv(gc,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var a=gt;gt=1;var o=ft;ft|=4,cp.current=null,mM(t,n),Cv(n,t),HS(ef),vc=!!Qd,ef=Qd=null,t.current=n,gM(n),Xy(),ft=o,gt=a,Wn.transition=s}else t.current=n;if(ll&&(ll=!1,vr=t,Ic=r),s=t.pendingLanes,s===0&&(Er=null),Yy(n.stateNode),wn(t,Ut()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dc)throw Dc=!1,t=Sf,Sf=null,t;return Ic&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===Mf?Qa++:(Qa=0,Mf=t):Qa=0,Ur(),null}function Qs(){if(vr!==null){var t=px(Ic),e=Wn.transition,n=gt;try{if(Wn.transition=null,gt=16>t?16:t,vr===null)var i=!1;else{if(t=vr,vr=null,Ic=0,ft&6)throw Error(ce(331));var r=ft;for(ft|=4,Ne=t.current;Ne!==null;){var s=Ne,a=s.child;if(Ne.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ne=c;Ne!==null;){var f=Ne;switch(f.tag){case 0:case 11:case 15:Za(8,f,s)}var p=f.child;if(p!==null)p.return=f,Ne=p;else for(;Ne!==null;){f=Ne;var d=f.sibling,g=f.return;if(Ev(f),f===c){Ne=null;break}if(d!==null){d.return=g,Ne=d;break}Ne=g}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}Ne=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ne=a;else e:for(;Ne!==null;){if(s=Ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Za(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ne=h;break e}Ne=s.return}}var _=t.current;for(Ne=_;Ne!==null;){a=Ne;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ne=y;else e:for(a=_;Ne!==null;){if(o=Ne,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:iu(9,o)}}catch(b){Dt(o,o.return,b)}if(o===a){Ne=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,Ne=v;break e}Ne=o.return}}if(ft=r,Ur(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(Yc,t)}catch{}i=!0}return i}finally{gt=n,Wn.transition=e}}return!1}function o0(t,e,n){e=oa(n,e),e=pv(t,e,1),t=br(t,e,1),e=pn(),t!==null&&(ko(t,1,e),wn(t,e))}function Dt(t,e,n){if(t.tag===3)o0(t,t,n);else for(;e!==null;){if(e.tag===3){o0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){t=oa(n,t),t=mv(e,t,1),e=br(e,t,1),t=pn(),e!==null&&(ko(e,1,t),wn(e,t));break}}e=e.return}}function MM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Kt&n)===n&&(zt===4||zt===3&&(Kt&130023424)===Kt&&500>Ut()-dp?Zr(t,0):up|=n),wn(t,e)}function Uv(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=pn();t=ji(t,e),t!==null&&(ko(t,e,n),wn(t,n))}function wM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uv(t,n)}function bM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Uv(t,n)}var Fv;Fv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,dM(t,e,n);yn=!!(t.flags&131072)}else yn=!1,Et&&e.flags&1048576&&zx(e,Ec,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tc(t,e),t=e.pendingProps;var r=ia(e,un.current);Js(e,n),r=rp(null,e,i,t,r,n);var s=sp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,wc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qh(e),r.updater=nu,e.stateNode=r,r._reactInternals=e,uf(e,i,t,n),e=hf(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&Xh(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=TM(i),t=Qn(i,t),r){case 0:e=ff(null,e,i,t,n);break e;case 1:e=Zm(null,e,i,t,n);break e;case 11:e=Ym(null,e,i,t,n);break e;case 14:e=Km(null,e,i,Qn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),ff(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Zm(t,e,i,r,n);case 3:e:{if(_v(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Xx(t,e),Cc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oa(Error(ce(423)),e),e=Jm(t,e,i,n,r);break e}else if(i!==r){r=oa(Error(ce(424)),e),e=Jm(t,e,i,n,r);break e}else for(Pn=wr(e.stateNode.containerInfo.firstChild),Dn=e,Et=!0,ti=null,n=jx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),i===r){e=Wi(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return $x(e),t===null&&of(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,tf(i,r)?a=null:s!==null&&tf(i,s)&&(e.flags|=32),vv(t,e),hn(t,e,a,n),e.child;case 6:return t===null&&of(e),null;case 13:return yv(t,e,n);case 4:return ep(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=sa(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Ym(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,yt(Tc,i._currentValue),i._currentValue=a,s!==null)if(oi(s.value,a)){if(s.children===r.children&&!Sn.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),lf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Js(e,n),r=Xn(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),Km(t,e,i,r,n);case 15:return gv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),tc(t,e),e.tag=1,Mn(i)?(t=!0,wc(e)):t=!1,Js(e,n),hv(e,i,r),uf(e,i,r,n),hf(null,e,i,!0,t,n);case 19:return Sv(t,e,n);case 22:return xv(t,e,n)}throw Error(ce(156,e.tag))};function kv(t,e){return ux(t,e)}function EM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new EM(t,e,n,i)}function mp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TM(t){if(typeof t=="function")return mp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ih)return 11;if(t===Uh)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")mp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Us:return Jr(n.children,r,s,e);case Dh:a=8,r|=8;break;case Dd:return t=jn(12,n,e,r|2),t.elementType=Dd,t.lanes=s,t;case Id:return t=jn(13,n,e,r),t.elementType=Id,t.lanes=s,t;case Ud:return t=jn(19,n,e,r),t.elementType=Ud,t.lanes=s,t;case $g:return su(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wg:a=10;break e;case Xg:a=9;break e;case Ih:a=11;break e;case Uh:a=14;break e;case lr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=jn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Jr(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function su(t,e,n,i){return t=jn(22,t,i,e),t.elementType=$g,t.lanes=n,t.stateNode={isHidden:!1},t}function Vu(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function Gu(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wu(0),this.expirationTimes=wu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gp(t,e,n,i,r,s,a,o,l){return t=new AM(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qh(s),t}function CM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ov(t){if(!t)return Nr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Mn(n))return Ox(t,n,e)}return e}function Bv(t,e,n,i,r,s,a,o,l){return t=gp(n,i,!0,t,r,s,a,o,l),t.context=Ov(null),n=t.current,i=pn(),r=Tr(n),s=Bi(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,ko(t,r,i),wn(t,i),t}function au(t,e,n,i){var r=e.current,s=pn(),a=Tr(r);return n=Ov(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,a),t!==null&&(si(t,r,a,s),Jl(t,r,a)),a}function Fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function l0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xp(t,e){l0(t,e),(t=t.alternate)&&l0(t,e)}function RM(){return null}var zv=typeof reportError=="function"?reportError:function(t){console.error(t)};function vp(t){this._internalRoot=t}ou.prototype.render=vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));au(t,e,null,null)};ou.prototype.unmount=vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){au(null,t,null,null)}),e[Gi]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=xx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&_x(t)}};function _p(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function c0(){}function NM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Fc(a);s.call(c)}}var a=Bv(e,i,t,0,null,!1,!1,"",c0);return t._reactRootContainer=a,t[Gi]=a.current,go(t.nodeType===8?t.parentNode:t),is(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Fc(l);o.call(c)}}var l=gp(t,0,!1,null,null,!1,!1,"",c0);return t._reactRootContainer=l,t[Gi]=l.current,go(t.nodeType===8?t.parentNode:t),is(function(){au(e,l,n,i)}),l}function cu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Fc(a);o.call(l)}}au(e,a,t,r)}else a=NM(n,e,t,r,i);return Fc(a)}mx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ba(e.pendingLanes);n!==0&&(Oh(e,n|1),wn(e,Ut()),!(ft&6)&&(la=Ut()+500,Ur()))}break;case 13:is(function(){var i=ji(t,1);if(i!==null){var r=pn();si(i,t,1,r)}}),xp(t,1)}};Bh=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=pn();si(e,t,134217728,n)}xp(t,134217728)}};gx=function(t){if(t.tag===13){var e=Tr(t),n=ji(t,e);if(n!==null){var i=pn();si(n,t,e,i)}xp(t,e)}};xx=function(){return gt};vx=function(t,e){var n=gt;try{return gt=t,e()}finally{gt=n}};Wd=function(t,e,n){switch(e){case"input":if(Od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Qc(i);if(!r)throw Error(ce(90));Yg(i),Od(i,r)}}}break;case"textarea":Zg(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};rx=fp;sx=is;var PM={usingClientEntryPoint:!1,Events:[Bo,Bs,Qc,nx,ix,fp]},Ca={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LM={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lx(t),t===null?null:t.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||RM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Yc=cl.inject(LM),_i=cl}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PM;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_p(e))throw Error(ce(200));return CM(t,e,null,n)};Un.createRoot=function(t,e){if(!_p(t))throw Error(ce(299));var n=!1,i="",r=zv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gp(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,go(t.nodeType===8?t.parentNode:t),new vp(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=lx(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return is(t)};Un.hydrate=function(t,e,n){if(!lu(e))throw Error(ce(200));return cu(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!_p(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=zv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Bv(e,null,t,1,n??null,r,!1,s,a),t[Gi]=e.current,go(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ou(e)};Un.render=function(t,e,n){if(!lu(e))throw Error(ce(200));return cu(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!lu(t))throw Error(ce(40));return t._reactRootContainer?(is(function(){cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};Un.unstable_batchedUpdates=fp;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!lu(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return cu(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(t){console.error(t)}}Hv(),Hg.exports=Un;var DM=Hg.exports,u0=DM;Pd.createRoot=u0.createRoot,Pd.hydrateRoot=u0.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Eo.apply(null,arguments)}var _r;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(_r||(_r={}));const d0="popstate";function IM(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Ef("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:kc(r)}return FM(e,n,null,t)}function Nt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UM(){return Math.random().toString(36).substr(2,8)}function f0(t,e){return{usr:t.state,key:t.key,idx:e}}function Ef(t,e,n,i){return n===void 0&&(n=null),Eo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ga(e):e,{state:n,key:e&&e.key||i||UM()})}function kc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ga(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function FM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=_r.Pop,l=null,c=f();c==null&&(c=0,a.replaceState(Eo({},a.state,{idx:c}),""));function f(){return(a.state||{idx:null}).idx}function p(){o=_r.Pop;let m=f(),h=m==null?null:m-c;c=m,l&&l({action:o,location:S.location,delta:h})}function d(m,h){o=_r.Push;let _=Ef(S.location,m,h);c=f()+1;let y=f0(_,c),v=S.createHref(_);try{a.pushState(y,"",v)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(v)}s&&l&&l({action:o,location:S.location,delta:1})}function g(m,h){o=_r.Replace;let _=Ef(S.location,m,h);c=f();let y=f0(_,c),v=S.createHref(_);a.replaceState(y,"",v),s&&l&&l({action:o,location:S.location,delta:0})}function x(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:kc(m);return _=_.replace(/ $/,"%20"),Nt(h,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,h)}let S={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(d0,p),l=m,()=>{r.removeEventListener(d0,p),l=null}},createHref(m){return e(r,m)},createURL:x,encodeLocation(m){let h=x(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:g,go(m){return a.go(m)}};return S}var h0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(h0||(h0={}));function kM(t,e,n){return n===void 0&&(n="/"),OM(t,e,n)}function OM(t,e,n,i){let r=typeof e=="string"?ga(e):e,s=ca(r.pathname||"/",n);if(s==null)return null;let a=Gv(t);BM(a);let o=null,l=KM(s);for(let c=0;o==null&&c<a.length;++c)o=qM(a[c],l);return o}function Gv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Nt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Cr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Nt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Gv(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:XM(c,s.index),routesMeta:f})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of jv(s.path))r(s,a,l)}),e}function jv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=jv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function BM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$M(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const zM=/^:[\w-]+$/,HM=3,VM=2,GM=1,jM=10,WM=-2,p0=t=>t==="*";function XM(t,e){let n=t.split("/"),i=n.length;return n.some(p0)&&(i+=WM),e&&(i+=VM),n.filter(r=>!p0(r)).reduce((r,s)=>r+(zM.test(s)?HM:s===""?GM:jM),i)}function $M(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function qM(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Tf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),d=l.route;if(!p)return null;Object.assign(r,p.params),a.push({params:r,pathname:Cr([s,p.pathname]),pathnameBase:QM(Cr([s,p.pathnameBase])),route:d}),p.pathnameBase!=="/"&&(s=Cr([s,p.pathnameBase]))}return a}function Tf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=YM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,f,p)=>{let{paramName:d,isOptional:g}=f;if(d==="*"){let S=o[p]||"";a=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const x=o[p];return g&&!x?c[d]=void 0:c[d]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function YM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function KM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ca(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function ZM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ga(t):t,s;return n?(n=Wv(n),n.startsWith("/")?s=m0(n.substring(1),"/"):s=m0(n,e)):s=e,{pathname:s,search:ew(i),hash:tw(r)}}function m0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ju(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function JM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function yp(t,e){let n=JM(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Sp(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ga(t):(r=Eo({},t),Nt(!r.pathname||!r.pathname.includes("?"),ju("?","pathname","search",r)),Nt(!r.pathname||!r.pathname.includes("#"),ju("#","pathname","hash",r)),Nt(!r.search||!r.search.includes("#"),ju("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let p=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),p-=1;r.pathname=d.join("/")}o=p>=0?e[p]:"/"}let l=ZM(r,o),c=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const Wv=t=>t.replace(/\/\/+/g,"/"),Cr=t=>Wv(t.join("/")),QM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ew=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,tw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function nw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Xv=["post","put","patch","delete"];new Set(Xv);const iw=["get",...Xv];new Set(iw);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},To.apply(null,arguments)}const uu=z.createContext(null),$v=z.createContext(null),qi=z.createContext(null),du=z.createContext(null),Yi=z.createContext({outlet:null,matches:[],isDataRoute:!1}),qv=z.createContext(null);function rw(t,e){let{relative:n}=e===void 0?{}:e;xa()||Nt(!1);let{basename:i,navigator:r}=z.useContext(qi),{hash:s,pathname:a,search:o}=fu(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Cr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function xa(){return z.useContext(du)!=null}function Fr(){return xa()||Nt(!1),z.useContext(du).location}function Yv(t){z.useContext(qi).static||z.useLayoutEffect(t)}function us(){let{isDataRoute:t}=z.useContext(Yi);return t?vw():sw()}function sw(){xa()||Nt(!1);let t=z.useContext(uu),{basename:e,future:n,navigator:i}=z.useContext(qi),{matches:r}=z.useContext(Yi),{pathname:s}=Fr(),a=JSON.stringify(yp(r,n.v7_relativeSplatPath)),o=z.useRef(!1);return Yv(()=>{o.current=!0}),z.useCallback(function(c,f){if(f===void 0&&(f={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let p=Sp(c,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Cr([e,p.pathname])),(f.replace?i.replace:i.push)(p,f.state,f)},[e,i,a,s,t])}function aw(){let{matches:t}=z.useContext(Yi),e=t[t.length-1];return e?e.params:{}}function fu(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=z.useContext(qi),{matches:r}=z.useContext(Yi),{pathname:s}=Fr(),a=JSON.stringify(yp(r,i.v7_relativeSplatPath));return z.useMemo(()=>Sp(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function ow(t,e){return lw(t,e)}function lw(t,e,n,i){xa()||Nt(!1);let{navigator:r}=z.useContext(qi),{matches:s}=z.useContext(Yi),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Fr(),f;if(e){var p;let m=typeof e=="string"?ga(e):e;l==="/"||(p=m.pathname)!=null&&p.startsWith(l)||Nt(!1),f=m}else f=c;let d=f.pathname||"/",g=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=kM(t,{pathname:g}),S=hw(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Cr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Cr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&S?z.createElement(du.Provider,{value:{location:To({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:_r.Pop}},S):S}function cw(){let t=xw(),e=nw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:r},n):null,null)}const uw=z.createElement(cw,null);class dw extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(Yi.Provider,{value:this.props.routeContext},z.createElement(qv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fw(t){let{routeContext:e,match:n,children:i}=t,r=z.useContext(uu);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Yi.Provider,{value:e},i)}function hw(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let f=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);f>=0||Nt(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let p=a[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:d,errors:g}=n,x=p.route.loader&&d[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||x){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((f,p,d)=>{let g,x=!1,S=null,m=null;n&&(g=o&&p.route.id?o[p.route.id]:void 0,S=p.route.errorElement||uw,l&&(c<0&&d===0?(_w("route-fallback"),x=!0,m=null):c===d&&(x=!0,m=p.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,d+1)),_=()=>{let y;return g?y=S:x?y=m:p.route.Component?y=z.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=f,z.createElement(fw,{match:p,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||d===0)?z.createElement(dw,{location:n.location,revalidation:n.revalidation,component:S,error:g,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var Kv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Kv||{}),Zv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zv||{});function pw(t){let e=z.useContext(uu);return e||Nt(!1),e}function mw(t){let e=z.useContext($v);return e||Nt(!1),e}function gw(t){let e=z.useContext(Yi);return e||Nt(!1),e}function Jv(t){let e=gw(),n=e.matches[e.matches.length-1];return n.route.id||Nt(!1),n.route.id}function xw(){var t;let e=z.useContext(qv),n=mw(),i=Jv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function vw(){let{router:t}=pw(Kv.UseNavigateStable),e=Jv(Zv.UseNavigateStable),n=z.useRef(!1);return Yv(()=>{n.current=!0}),z.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,To({fromRouteId:e},s)))},[t,e])}const g0={};function _w(t,e,n){g0[t]||(g0[t]=!0)}function yw(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Af(t){let{to:e,replace:n,state:i,relative:r}=t;xa()||Nt(!1);let{future:s,static:a}=z.useContext(qi),{matches:o}=z.useContext(Yi),{pathname:l}=Fr(),c=us(),f=Sp(e,yp(o,s.v7_relativeSplatPath),l,r==="path"),p=JSON.stringify(f);return z.useEffect(()=>c(JSON.parse(p),{replace:n,state:i,relative:r}),[c,p,r,n,i]),null}function Di(t){Nt(!1)}function Sw(t){let{basename:e="/",children:n=null,location:i,navigationType:r=_r.Pop,navigator:s,static:a=!1,future:o}=t;xa()&&Nt(!1);let l=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:l,navigator:s,static:a,future:To({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=ga(i));let{pathname:f="/",search:p="",hash:d="",state:g=null,key:x="default"}=i,S=z.useMemo(()=>{let m=ca(f,l);return m==null?null:{location:{pathname:m,search:p,hash:d,state:g,key:x},navigationType:r}},[l,f,p,d,g,x,r]);return S==null?null:z.createElement(qi.Provider,{value:c},z.createElement(du.Provider,{children:n,value:S}))}function Mw(t){let{children:e,location:n}=t;return ow(Cf(e),n)}new Promise(()=>{});function Cf(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(i,r)=>{if(!z.isValidElement(i))return;let s=[...e,r];if(i.type===z.Fragment){n.push.apply(n,Cf(i.props.children,s));return}i.type!==Di&&Nt(!1),!i.props.index||!i.props.children||Nt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Cf(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oc(){return Oc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Oc.apply(null,arguments)}function Qv(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function ww(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bw(t,e){return t.button===0&&(!e||e==="_self")&&!ww(t)}const Ew=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Tw=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Aw="6";try{window.__reactRouterVersion=Aw}catch{}const Cw=z.createContext({isTransitioning:!1}),Rw="startTransition",x0=My[Rw];function Nw(t){let{basename:e,children:n,future:i,window:r}=t,s=z.useRef();s.current==null&&(s.current=IM({window:r,v5Compat:!0}));let a=s.current,[o,l]=z.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},f=z.useCallback(p=>{c&&x0?x0(()=>l(p)):l(p)},[l,c]);return z.useLayoutEffect(()=>a.listen(f),[a,f]),z.useEffect(()=>yw(i),[i]),z.createElement(Sw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const Pw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Si=z.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:f,viewTransition:p}=e,d=Qv(e,Ew),{basename:g}=z.useContext(qi),x,S=!1;if(typeof c=="string"&&Lw.test(c)&&(x=c,Pw))try{let y=new URL(window.location.href),v=c.startsWith("//")?new URL(y.protocol+c):new URL(c),b=ca(v.pathname,g);v.origin===y.origin&&b!=null?c=b+v.search+v.hash:S=!0}catch{}let m=rw(c,{relative:r}),h=Iw(c,{replace:a,state:o,target:l,preventScrollReset:f,relative:r,viewTransition:p});function _(y){i&&i(y),y.defaultPrevented||h(y)}return z.createElement("a",Oc({},d,{href:x||m,onClick:S||s?i:_,ref:n,target:l}))}),eo=z.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:c,children:f}=e,p=Qv(e,Tw),d=fu(l,{relative:p.relative}),g=Fr(),x=z.useContext($v),{navigator:S,basename:m}=z.useContext(qi),h=x!=null&&Uw(d)&&c===!0,_=S.encodeLocation?S.encodeLocation(d).pathname:d.pathname,y=g.pathname,v=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;r||(y=y.toLowerCase(),v=v?v.toLowerCase():null,_=_.toLowerCase()),v&&m&&(v=ca(v,m)||v);const b=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let E=y===_||!a&&y.startsWith(_)&&y.charAt(b)==="/",A=v!=null&&(v===_||!a&&v.startsWith(_)&&v.charAt(_.length)==="/"),M={isActive:E,isPending:A,isTransitioning:h},C=E?i:void 0,R;typeof s=="function"?R=s(M):R=[s,E?"active":null,A?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let N=typeof o=="function"?o(M):o;return z.createElement(Si,Oc({},p,{"aria-current":C,className:R,ref:n,style:N,to:l,viewTransition:c}),typeof f=="function"?f(M):f)});var Rf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Rf||(Rf={}));var v0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(v0||(v0={}));function Dw(t){let e=z.useContext(uu);return e||Nt(!1),e}function Iw(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=us(),c=Fr(),f=fu(t,{relative:a});return z.useCallback(p=>{if(bw(p,n)){p.preventDefault();let d=i!==void 0?i:kc(c)===kc(f);l(t,{replace:d,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,f,i,r,n,t,s,a,o])}function Uw(t,e){e===void 0&&(e={});let n=z.useContext(Cw);n==null&&Nt(!1);let{basename:i}=Dw(Rf.useViewTransitionState),r=fu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=ca(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=ca(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Tf(r.pathname,a)!=null||Tf(r.pathname,s)!=null}const Fw="http://localhost:5000/api",Nf="taskflow_token",kw=()=>localStorage.getItem(Nf),Wu=t=>{t?localStorage.setItem(Nf,t):localStorage.removeItem(Nf)};async function Wt(t,e={}){const n=`${Fw}${t}`,i=kw(),r={"Content-Type":"application/json",...e.headers||{}};i&&(r.Authorization=`Bearer ${i}`);const s={...e,headers:r};try{const a=await fetch(n,s);let o;try{o=await a.json()}catch{o=null}if(!a.ok){const l=new Error((o==null?void 0:o.message)||`HTTP error! status: ${a.status}`);throw l.status=a.status,l.data=o,l.errors=(o==null?void 0:o.errors)||[],a.status===401&&window.dispatchEvent(new CustomEvent("taskflow:unauthorized")),l}return o}catch(a){if(a.name==="TypeError"&&a.message.includes("fetch")){const o=new Error("Cannot connect to TaskFlow server. Please ensure the backend is running.");throw o.status=0,o}throw a}}const _0={login:t=>Wt("/auth/login",{method:"POST",body:JSON.stringify(t)}),register:t=>Wt("/auth/register",{method:"POST",body:JSON.stringify(t)})},Ln={getAll:(t={})=>{const e=new URLSearchParams;t.search&&t.search.trim()&&e.append("search",t.search.trim()),t.status&&t.status!=="all"&&e.append("status",t.status);const n=e.toString();return Wt(`/projects${n?`?${n}`:""}`)},getById:t=>Wt(`/projects/${t}`),create:t=>Wt("/projects",{method:"POST",body:JSON.stringify(t)}),update:(t,e)=>Wt(`/projects/${t}`,{method:"PUT",body:JSON.stringify(e)}),delete:t=>Wt(`/projects/${t}`,{method:"DELETE"})},on={getAll:(t={})=>{const e=new URLSearchParams;t.projectId&&t.projectId.trim()&&t.projectId!=="all"&&e.append("projectId",t.projectId.trim()),t.status&&t.status!=="all"&&e.append("status",t.status),t.priority&&t.priority!=="all"&&e.append("priority",t.priority),t.search&&t.search.trim()&&e.append("search",t.search.trim());const n=e.toString();return Wt(`/tasks${n?`?${n}`:""}`)},getById:t=>Wt(`/tasks/${t}`),create:t=>Wt("/tasks",{method:"POST",body:JSON.stringify(t)}),update:(t,e)=>Wt(`/tasks/${t}`,{method:"PUT",body:JSON.stringify(e)}),delete:t=>Wt(`/tasks/${t}`,{method:"DELETE"})},e_={getAll:()=>Wt("/users"),getById:t=>Wt(`/users/${t}`)},y0={getStats:()=>Wt("/stats")},Mp={generatePlan:(t,e={})=>Wt("/ai/plan",{method:"POST",body:JSON.stringify({goal:t,context:e})}),getDailyFocus:()=>Wt("/ai/daily-focus"),copilot:(t,e=[])=>Wt("/ai/copilot",{method:"POST",body:JSON.stringify({message:t,history:e})})},t_=z.createContext(null),ul="taskflow_user",Ow=({children:t})=>{const[e,n]=z.useState(()=>{try{const p=localStorage.getItem(ul);return p?JSON.parse(p):null}catch{return null}}),[i,r]=z.useState(()=>localStorage.getItem("taskflow_token")||null),[s,a]=z.useState(!1),o=z.useCallback(()=>{Wu(null),localStorage.removeItem(ul),n(null),r(null)},[]);z.useEffect(()=>{const p=()=>{o()};return window.addEventListener("taskflow:unauthorized",p),()=>{window.removeEventListener("taskflow:unauthorized",p)}},[o]);const f={user:e,token:i,isAuthenticated:!!(i&&e),isLoading:s,login:async(p,d)=>{a(!0);try{const g=await _0.login({email:p,password:d}),{token:x,user:S}=g.data||{};if(!x)throw new Error("No authentication token received from server.");return Wu(x),localStorage.setItem(ul,JSON.stringify(S)),r(x),n(S),{success:!0,user:S}}catch(g){throw g}finally{a(!1)}},register:async({name:p,email:d,password:g,role:x})=>{a(!0);try{const S=await _0.register({name:p,email:d,password:g,role:x}),{token:m,user:h}=S.data||{};return m&&h&&(Wu(m),localStorage.setItem(ul,JSON.stringify(h)),r(m),n(h)),{success:!0,user:h,hasToken:!!m}}catch(S){throw S}finally{a(!1)}},logout:o};return u.jsx(t_.Provider,{value:f,children:t})},ds=()=>{const t=z.useContext(t_);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},Bw=({size:t="md",text:e="Loading..."})=>{const n={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-10 h-10"};return u.jsxs("div",{className:"flex flex-col items-center justify-center py-12 gap-3 text-slate-500",children:[u.jsxs("svg",{className:`animate-spin ${n[t]||n.md} text-blue-600`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),e&&u.jsx("span",{className:"text-xs font-medium text-slate-500",children:e})]})},dl=({children:t})=>{const{isAuthenticated:e,isLoading:n}=ds(),i=Fr();return n?u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-50",children:u.jsx(Bw,{size:"lg",text:"Verifying session..."})}):e?t:u.jsx(Af,{to:"/login",state:{from:i},replace:!0})},n_="/assets/copilot-symbol-white-BrtKt_uU.png",zw="/assets/copilot-symbol-mxxcxXRx.png",i_=({className:t="w-5 h-5"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),Ho=({className:t="w-5 h-5"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),Pr=({className:t="w-5 h-5"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}),r_=({className:t="w-5 h-5"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),fs=({className:t="w-5 h-5"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}),wp=({className:t="w-4 h-4"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),Hw=({className:t="w-4 h-4"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),Vw=({className:t="w-6 h-6"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})}),qn=({className:t="w-4 h-4"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),Gw=({className:t="w-4 h-4 text-emerald-600"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M12 4v16m8-8H4"})}),hu=({className:t="w-4 h-4 text-blue-600"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"})}),jw=({className:t="w-4 h-4 text-emerald-600"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M5 13l4 4L19 7"})}),pu=({className:t="w-4 h-4 text-rose-600"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),Ww=({className:t="w-5 h-5"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),Xw=({className:t="w-5 h-5"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),$w=({className:t="w-5 h-5"})=>u.jsxs("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),qw=({className:t="w-5 h-5"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"})}),Yw=({className:t="w-4 h-4"})=>u.jsx("svg",{className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),to=({size:t="md",className:e="",variant:n="gradient"})=>{const i={xs:"w-4 h-4 rounded p-0.5",sm:"w-5 h-5 rounded-md p-0.5",base:"w-6 h-6 rounded-md p-1",md:"w-8 h-8 rounded-lg p-1.5",lg:"w-10 h-10 rounded-xl p-1.5",xl:"w-12 h-12 rounded-2xl p-2"},r=i[t]||i.md;return n==="light"||n==="white"?u.jsx("div",{className:`inline-flex items-center justify-center bg-white shadow-md border border-slate-200/80 select-none flex-shrink-0 overflow-hidden ${r} ${e}`,"aria-label":"TaskFlow Copilot",children:u.jsx("img",{src:zw,alt:"TaskFlow Copilot",className:"w-full h-full object-contain"})}):u.jsx("div",{className:`inline-flex items-center justify-center bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 shadow-sm shadow-purple-500/25 border border-white/20 select-none flex-shrink-0 overflow-hidden ${r} ${e}`,"aria-label":"TaskFlow Copilot",children:u.jsx("img",{src:n_,alt:"TaskFlow Copilot",className:"w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"})})},Kw=()=>{const[t,e]=z.useState(!1),{user:n,logout:i}=ds(),r=us(),s=[{name:"Dashboard",path:"/dashboard",icon:i_},{name:"Projects",path:"/projects",icon:Ho},{name:"Tasks",path:"/tasks",icon:Pr}],a=()=>{i(),r("/login")},o=(n==null?void 0:n.name)||"User",l=(n==null?void 0:n.role)||"Member",c=o.charAt(0).toUpperCase();return u.jsxs("header",{className:"sticky top-0 z-30 bg-white border-b border-slate-200",children:[u.jsx("div",{className:"px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex items-center justify-between h-16",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{type:"button",onClick:()=>e(!t),className:"xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20","aria-label":"Toggle navigation menu",children:t?u.jsx(fs,{className:"w-6 h-6"}):u.jsx(Vw,{className:"w-6 h-6"})}),u.jsxs(eo,{to:"/dashboard",className:"flex items-center gap-2.5 group",children:[u.jsx("div",{className:"w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-blue-500/30",children:"TF"}),u.jsxs("span",{className:"text-xl font-bold text-slate-900 tracking-tight",children:["Task",u.jsx("span",{className:"text-blue-600",children:"Flow"})]})]})]}),u.jsx("nav",{className:"hidden md:flex xl:hidden items-center gap-1",children:s.map(f=>{const p=f.icon;return u.jsxs(eo,{to:f.path,className:({isActive:d})=>`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${d?"bg-blue-50 text-blue-600 font-semibold":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,children:[u.jsx(p,{className:"w-4 h-4"}),u.jsx("span",{children:f.name})]},f.path)})}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("div",{className:"hidden sm:flex flex-col text-right",children:[u.jsx("span",{className:"text-sm font-semibold text-slate-900 leading-tight",children:o}),u.jsx("span",{className:"text-xs text-slate-500 capitalize",children:l})]}),u.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-sm border-2 border-slate-100 shadow-sm",title:`${o} (${l})`,children:c}),u.jsx("button",{type:"button",onClick:a,className:"hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-colors ml-1",title:"Sign out of TaskFlow",children:"Sign out"})]})]})}),t&&u.jsxs("div",{className:"xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg",children:[s.map(f=>{const p=f.icon;return u.jsxs(eo,{to:f.path,onClick:()=>e(!1),className:({isActive:d})=>`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${d?"bg-blue-50 text-blue-600 font-semibold":"text-slate-700 hover:bg-slate-100"}`,children:[u.jsx(p,{className:"w-5 h-5"}),u.jsx("span",{children:f.name})]},f.path)}),u.jsxs("div",{className:"pt-3 mt-2 border-t border-slate-100 flex items-center justify-between px-3",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold",children:c}),u.jsxs("div",{className:"text-xs",children:[u.jsx("p",{className:"font-semibold text-slate-800",children:o}),u.jsx("p",{className:"text-slate-500",children:n==null?void 0:n.email})]})]}),u.jsx("button",{type:"button",onClick:a,className:"px-2.5 py-1 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-lg transition-colors",children:"Sign out"})]})]})]})},Zw=()=>{const{user:t,logout:e}=ds(),n=us(),i=[{name:"Dashboard",path:"/dashboard",icon:i_},{name:"Projects",path:"/projects",icon:Ho},{name:"Tasks",path:"/tasks",icon:Pr}],r=()=>{e(),n("/login")},s=(t==null?void 0:t.name)||"User",a=(t==null?void 0:t.role)||"Member",o=s.charAt(0).toUpperCase();return u.jsxs("aside",{className:"hidden xl:flex flex-col w-64 fixed inset-y-0 left-0 z-40 text-slate-300",style:{backgroundColor:"#0f172a"},children:[u.jsx("div",{className:"h-16 flex items-center px-6 border-b border-slate-800/80",children:u.jsxs(eo,{to:"/dashboard",className:"flex items-center gap-3 group",children:[u.jsx("div",{className:"w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform",children:"TF"}),u.jsxs("div",{className:"flex flex-col",children:[u.jsxs("span",{className:"text-lg font-bold text-white tracking-tight",children:["Task",u.jsx("span",{className:"text-blue-500",children:"Flow"})]}),u.jsx("span",{className:"text-[10px] text-slate-400 -mt-1 font-medium tracking-wider uppercase",children:"Developer Hub"})]})]})}),u.jsxs("div",{className:"flex-1 py-6 px-4 space-y-1.5 overflow-y-auto",children:[u.jsx("div",{className:"px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400",children:"Navigation"}),i.map(l=>{const c=l.icon;return u.jsxs(eo,{to:l.path,className:({isActive:f})=>`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${f?"bg-blue-600 text-white shadow-sm font-semibold":"text-slate-300 hover:bg-slate-800/80 hover:text-white"}`,children:[u.jsx(c,{className:"w-5 h-5"}),u.jsx("span",{children:l.name})]},l.path)})]}),u.jsx("div",{className:"p-4 border-t border-slate-800/80 bg-slate-900/60",children:u.jsxs("div",{className:"flex items-center justify-between p-2 rounded-lg bg-slate-800/50",children:[u.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[u.jsx("div",{className:"w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0",children:o}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("p",{className:"text-xs font-semibold text-white truncate max-w-[100px]",children:s}),u.jsx("p",{className:"text-[10px] text-slate-400 truncate capitalize",children:a})]})]}),u.jsx("button",{type:"button",onClick:r,className:"p-1.5 text-xs text-slate-400 hover:text-rose-400 hover:bg-slate-700/50 rounded transition-colors",title:"Sign out",children:u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bp="186",Jw=0,S0=1,Qw=2,sc=1,e1=2,Ha=3,rs=0,bn=1,gi=2,zi=0,no=1,Pf=2,M0=3,w0=4,t1=5,Ds=100,n1=101,i1=102,r1=103,s1=104,a1=200,o1=201,l1=202,c1=203,s_=204,a_=205,u1=206,d1=207,f1=208,h1=209,p1=210,m1=211,g1=212,x1=213,v1=214,Lf=0,Df=1,If=2,Ao=3,Uf=4,Ff=5,kf=6,Of=7,o_=0,_1=1,y1=2,Mi=0,l_=1,c_=2,u_=3,Ep=4,d_=5,f_=6,h_=7,p_=300,ss=301,ua=302,Xu=303,$u=304,mu=306,Bf=1e3,Oi=1001,zf=1002,Yt=1003,S1=1004,fl=1005,ln=1006,qu=1007,Yr=1008,Nn=1009,m_=1010,g_=1011,Co=1012,Tp=1013,bi=1014,xi=1015,Ei=1016,Ap=1017,Cp=1018,Ro=1020,x_=35902,v_=35899,__=1021,y_=1022,ii=1023,Xi=1026,Kr=1027,S_=1028,Rp=1029,as=1030,Np=1031,Pp=1033,ac=33776,oc=33777,lc=33778,cc=33779,Hf=35840,Vf=35841,Gf=35842,jf=35843,Wf=36196,Xf=37492,$f=37496,qf=37488,Yf=37489,Bc=37490,Kf=37491,Zf=37808,Jf=37809,Qf=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,ah=37817,oh=37818,lh=37819,ch=37820,uh=37821,dh=36492,fh=36494,hh=36495,ph=36283,mh=36284,zc=36285,gh=36286,M1=3200,xh=0,w1=1,gr="",zn="srgb",Hc="srgb-linear",Vc="linear",mt="srgb",Yu=7680,b1=519,E1=512,T1=513,A1=514,Lp=515,C1=516,R1=517,Dp=518,N1=519,P1=35044,b0="300 es",vi=2e3,No=2001;function L1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Gc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function D1(){const t=Gc("canvas");return t.style.display="block",t}const E0={};function T0(...t){const e="THREE."+t.shift();console.log(e,...t)}function M_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Xe(...t){t=M_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function dt(...t){t=M_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ea(...t){const e=t.join(" ");e in E0||(E0[e]=!0,Xe(...t))}function I1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const U1={[Lf]:Df,[If]:kf,[Uf]:Of,[Ao]:Ff,[Df]:Lf,[kf]:If,[Of]:Uf,[Ff]:Ao};class hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=Math.PI/180,vh=180/Math.PI;function va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function F1(t,e){return(t%e+e)%e}function Ku(t,e,n){return(1-n)*t+n*e}function Ra(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wp=class Wp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wp.prototype.isVector2=!0;let Se=Wp;class _a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3],d=s[a+0],g=s[a+1],x=s[a+2],S=s[a+3];if(p!==S||l!==d||c!==g||f!==x){let m=l*d+c*g+f*x+p*S;m<0&&(d=-d,g=-g,x=-x,S=-S,m=-m);let h=1-o;if(m<.9995){const _=Math.acos(m),y=Math.sin(_);h=Math.sin(h*_)/y,o=Math.sin(o*_)/y,l=l*h+d*o,c=c*h+g*o,f=f*h+x*o,p=p*h+S*o}else{l=l*h+d*o,c=c*h+g*o,f=f*h+x*o,p=p*h+S*o;const _=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=_,c*=_,f*=_,p*=_}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[a],d=s[a+1],g=s[a+2],x=s[a+3];return e[n]=o*x+f*p+l*g-c*d,e[n+1]=l*x+f*d+c*p-o*g,e[n+2]=c*x+f*g+o*d-l*p,e[n+3]=f*x-o*p-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),p=o(s/2),d=l(i/2),g=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*f*p+c*g*x,this._y=c*g*p-d*f*x,this._z=c*f*x+d*g*p,this._w=c*f*p-d*g*x;break;case"YXZ":this._x=d*f*p+c*g*x,this._y=c*g*p-d*f*x,this._z=c*f*x-d*g*p,this._w=c*f*p+d*g*x;break;case"ZXY":this._x=d*f*p-c*g*x,this._y=c*g*p+d*f*x,this._z=c*f*x+d*g*p,this._w=c*f*p-d*g*x;break;case"ZYX":this._x=d*f*p-c*g*x,this._y=c*g*p+d*f*x,this._z=c*f*x-d*g*p,this._w=c*f*p+d*g*x;break;case"YZX":this._x=d*f*p+c*g*x,this._y=c*g*p+d*f*x,this._z=c*f*x-d*g*p,this._w=c*f*p-d*g*x;break;case"XZY":this._x=d*f*p-c*g*x,this._y=c*g*p-d*f*x,this._z=c*f*x+d*g*p,this._w=c*f*p+d*g*x;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],d=i+o+p;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>p){const g=2*Math.sqrt(1+i-o-p);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>p){const g=2*Math.sqrt(1+o-i-p);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+p-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xp=class Xp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(A0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(A0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*f,this.y=i+l*f+o*c-s*p,this.z=r+l*p+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xp.prototype.isVector3=!0;let O=Xp;const Zu=new O,A0=new _a,$p=class $p{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],d=i[2],g=i[5],x=i[8],S=r[0],m=r[3],h=r[6],_=r[1],y=r[4],v=r[7],b=r[2],E=r[5],A=r[8];return s[0]=a*S+o*_+l*b,s[3]=a*m+o*y+l*E,s[6]=a*h+o*v+l*A,s[1]=c*S+f*_+p*b,s[4]=c*m+f*y+p*E,s[7]=c*h+f*v+p*A,s[2]=d*S+g*_+x*b,s[5]=d*m+g*y+x*E,s[8]=d*h+g*v+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*a-o*c,d=o*l-f*s,g=c*s-a*l,x=n*p+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=p*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=g*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return ea("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ju.makeScale(e,n)),this}rotate(e){return ea("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ju.makeRotation(-e)),this}translate(e,n){return ea("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ju.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$p.prototype.isMatrix3=!0;let Ke=$p;const Ju=new Ke,C0=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R0=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k1(){const t={enabled:!0,workingColorSpace:Hc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=ta(r.r),r.g=ta(r.g),r.b=ta(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gr?Vc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hc]:{primaries:e,whitePoint:i,transfer:Vc,toXYZ:C0,fromXYZ:R0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:C0,fromXYZ:R0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),t}const lt=k1();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ta(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ys;class O1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ys===void 0&&(ys=Gc("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ys}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B1=0;class Ip{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qu(r[a].image)):s.push(Qu(r[a]))}else s=Qu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Qu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?O1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let z1=0;const ed=new O;class cn extends hs{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Oi,r=Oi,s=ln,a=Yr,o=ii,l=Nn,c=cn.DEFAULT_ANISOTROPY,f=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=va(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Xe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bf:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bf:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=p_;cn.DEFAULT_ANISOTROPY=1;const qp=class qp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],d=l[1],g=l[5],x=l[9],S=l[2],m=l[6],h=l[10];if(Math.abs(f-d)<.01&&Math.abs(p-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(p+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,v=(g+1)/2,b=(h+1)/2,E=(f+d)/4,A=(p+S)/4,M=(x+m)/4;return y>v&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=A/i):v>b?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=E/r,s=M/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=M/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-x)*(m-x)+(p-S)*(p-S)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(p-S)/_,this.z=(d-f)/_,this.w=Math.acos((c+g+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qp.prototype.isVector4=!0;let At=qp;class H1 extends hs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new cn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ip(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends H1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class w_ extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V1 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $c=class $c{constructor(e,n,i,r,s,a,o,l,c,f,p,d,g,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,p,d,g,x,S,m)}set(e,n,i,r,s,a,o,l,c,f,p,d,g,x,S,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=d,h[3]=g,h[7]=x,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $c().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*f,g=a*p,x=o*f,S=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=g+x*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=x+g*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,g=l*p,x=c*f,S=c*p;n[0]=d+S*o,n[4]=x*o-g,n[8]=a*c,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=g*o-x,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,g=l*p,x=c*f,S=c*p;n[0]=d-S*o,n[4]=-a*p,n[8]=x+g*o,n[1]=g+x*o,n[5]=a*f,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,g=a*p,x=o*f,S=o*p;n[0]=l*f,n[4]=x*c-g,n[8]=d*c+S,n[1]=l*p,n[5]=S*c+d,n[9]=g*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*c,x=o*l,S=o*c;n[0]=l*f,n[4]=S-d*p,n[8]=x*p+g,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=g*p+x,n[10]=d-S*p}else if(e.order==="XZY"){const d=a*l,g=a*c,x=o*l,S=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=d*p+S,n[5]=a*f,n[9]=g*p-x,n[2]=x*p-g,n[6]=o*f,n[10]=S*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G1,e,j1)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ir.crossVectors(i,Tn),ir.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ir.crossVectors(i,Tn)),ir.normalize(),hl.crossVectors(Tn,ir),r[0]=ir.x,r[4]=hl.x,r[8]=Tn.x,r[1]=ir.y,r[5]=hl.y,r[9]=Tn.y,r[2]=ir.z,r[6]=hl.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],d=i[9],g=i[13],x=i[2],S=i[6],m=i[10],h=i[14],_=i[3],y=i[7],v=i[11],b=i[15],E=r[0],A=r[4],M=r[8],C=r[12],R=r[1],N=r[5],F=r[9],j=r[13],I=r[2],H=r[6],J=r[10],W=r[14],V=r[3],L=r[7],B=r[11],Y=r[15];return s[0]=a*E+o*R+l*I+c*V,s[4]=a*A+o*N+l*H+c*L,s[8]=a*M+o*F+l*J+c*B,s[12]=a*C+o*j+l*W+c*Y,s[1]=f*E+p*R+d*I+g*V,s[5]=f*A+p*N+d*H+g*L,s[9]=f*M+p*F+d*J+g*B,s[13]=f*C+p*j+d*W+g*Y,s[2]=x*E+S*R+m*I+h*V,s[6]=x*A+S*N+m*H+h*L,s[10]=x*M+S*F+m*J+h*B,s[14]=x*C+S*j+m*W+h*Y,s[3]=_*E+y*R+v*I+b*V,s[7]=_*A+y*N+v*H+b*L,s[11]=_*M+y*F+v*J+b*B,s[15]=_*C+y*j+v*W+b*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],d=e[10],g=e[14],x=e[3],S=e[7],m=e[11],h=e[15],_=l*g-c*d,y=o*g-c*p,v=o*d-l*p,b=a*g-c*f,E=a*d-l*f,A=a*p-o*f;return n*(S*_-m*y+h*v)-i*(x*_-m*b+h*E)+r*(x*y-S*b+h*A)-s*(x*v-S*E+m*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return n*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],d=e[10],g=e[11],x=e[12],S=e[13],m=e[14],h=e[15],_=n*o-i*a,y=n*l-r*a,v=n*c-s*a,b=i*l-r*o,E=i*c-s*o,A=r*c-s*l,M=f*S-p*x,C=f*m-d*x,R=f*h-g*x,N=p*m-d*S,F=p*h-g*S,j=d*h-g*m,I=_*j-y*F+v*N+b*R-E*C+A*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return e[0]=(o*j-l*F+c*N)*H,e[1]=(r*F-i*j-s*N)*H,e[2]=(S*A-m*E+h*b)*H,e[3]=(d*E-p*A-g*b)*H,e[4]=(l*R-a*j-c*C)*H,e[5]=(n*j-r*R+s*C)*H,e[6]=(m*v-x*A-h*y)*H,e[7]=(f*A-d*v+g*y)*H,e[8]=(a*F-o*R+c*M)*H,e[9]=(i*R-n*F-s*M)*H,e[10]=(x*E-S*v+h*_)*H,e[11]=(p*v-f*E-g*_)*H,e[12]=(o*C-a*N-l*M)*H,e[13]=(n*N-i*C+r*M)*H,e[14]=(S*y-x*b-m*_)*H,e[15]=(f*b-p*y+d*_)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,p=o+o,d=s*c,g=s*f,x=s*p,S=a*f,m=a*p,h=o*p,_=l*c,y=l*f,v=l*p,b=i.x,E=i.y,A=i.z;return r[0]=(1-(S+h))*b,r[1]=(g+v)*b,r[2]=(x-y)*b,r[3]=0,r[4]=(g-v)*E,r[5]=(1-(d+h))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(x+y)*A,r[9]=(m-_)*A,r[10]=(1-(d+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Ss.set(r[0],r[1],r[2]).length();const o=Ss.set(r[4],r[5],r[6]).length(),l=Ss.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);const c=1/a,f=1/o,p=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=f,Kn.elements[5]*=f,Kn.elements[6]*=f,Kn.elements[8]*=p,Kn.elements[9]*=p,Kn.elements[10]*=p,n.setFromRotationMatrix(Kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=vi,l=!1){const c=this.elements,f=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),g=(i+r)/(i-r);let x,S;if(l)x=s/(a-s),S=a*s/(a-s);else if(o===vi)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===No)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=vi,l=!1){const c=this.elements,f=2/(n-e),p=2/(i-r),d=-(n+e)/(n-e),g=-(i+r)/(i-r);let x,S;if(l)x=1/(a-s),S=a/(a-s);else if(o===vi)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===No)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};$c.prototype.isMatrix4=!0;let bt=$c;const Ss=new O,Kn=new bt,G1=new O(0,0,0),j1=new O(1,1,1),ir=new O,hl=new O,Tn=new O,N0=new bt,P0=new _a;class Lr{constructor(e=0,n=0,i=0,r=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],p=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return N0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class b_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W1=0;const L0=new O,Ms=new _a,Ci=new bt,pl=new O,Na=new O,X1=new O,$1=new _a,D0=new O(1,0,0),I0=new O(0,1,0),U0=new O(0,0,1),F0={type:"added"},q1={type:"removed"},ws={type:"childadded",child:null},td={type:"childremoved",child:null};class $t extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new O,n=new Lr,i=new _a,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ke}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(D0,e)}rotateY(e){return this.rotateOnAxis(I0,e)}rotateZ(e){return this.rotateOnAxis(U0,e)}translateOnAxis(e,n){return L0.copy(e).applyQuaternion(this.quaternion),this.position.add(L0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(D0,e)}translateY(e){return this.translateOnAxis(I0,e)}translateZ(e){return this.translateOnAxis(U0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?pl.copy(e):pl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Na,pl,this.up):Ci.lookAt(pl,Na,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F0),ws.child=e,this.dispatchEvent(ws),ws.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(q1),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F0),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,X1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,$1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),d=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$t.DEFAULT_UP=new O(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vn extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y1={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),h=this._getHandJoint(c,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=f.position.distanceTo(p.position),g=.02,x=.005;c.inputState.pinching&&d>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function id(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=F1(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=id(a,s,e+1/3),this.g=id(a,s,e),this.b=id(a,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=E_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return lt.workingToColorSpace(sn.copy(this),e),Math.round(it(sn.r*255,0,255))*65536+Math.round(it(sn.g*255,0,255))*256+Math.round(it(sn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(sn.copy(this),n);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=zn){lt.workingToColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(ml);const i=Ku(rr.h,ml.h,n),r=Ku(rr.s,ml.s,n),s=Ku(rr.l,ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new et;et.NAMES=E_;class Up{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=n}clone(){return new Up(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class K1 extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zn=new O,Ri=new O,rd=new O,Ni=new O,bs=new O,Es=new O,k0=new O,sd=new O,ad=new O,od=new O,ld=new At,cd=new At,ud=new At;class Gn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Ri.subVectors(i,n),rd.subVectors(e,n);const a=Zn.dot(Zn),o=Zn.dot(Ri),l=Zn.dot(rd),c=Ri.dot(Ri),f=Ri.dot(rd),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,g=(c*l-o*f)*d,x=(a*f-o*l)*d;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,n),cd.fromBufferAttribute(e,i),ud.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ld,s.x),a.addScaledVector(cd,s.y),a.addScaledVector(ud,s.z),a}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Ri.subVectors(e,n),Zn.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Zn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;bs.subVectors(r,i),Es.subVectors(s,i),sd.subVectors(e,i);const l=bs.dot(sd),c=Es.dot(sd);if(l<=0&&c<=0)return n.copy(i);ad.subVectors(e,r);const f=bs.dot(ad),p=Es.dot(ad);if(f>=0&&p<=f)return n.copy(r);const d=l*p-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(bs,a);od.subVectors(e,s);const g=bs.dot(od),x=Es.dot(od);if(x>=0&&g<=x)return n.copy(s);const S=g*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Es,o);const m=f*x-g*p;if(m<=0&&p-f>=0&&g-x>=0)return k0.subVectors(s,r),o=(p-f)/(p-f+(g-x)),n.copy(r).addScaledVector(k0,o);const h=1/(m+S+d);return a=S*h,o=d*h,n.copy(i).addScaledVector(bs,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Vo{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),xl.subVectors(this.max,Pa),Ts.subVectors(e.a,Pa),As.subVectors(e.b,Pa),Cs.subVectors(e.c,Pa),sr.subVectors(As,Ts),ar.subVectors(Cs,As),Or.subVectors(Ts,Cs);let n=[0,-sr.z,sr.y,0,-ar.z,ar.y,0,-Or.z,Or.y,sr.z,0,-sr.x,ar.z,0,-ar.x,Or.z,0,-Or.x,-sr.y,sr.x,0,-ar.y,ar.x,0,-Or.y,Or.x,0];return!dd(n,Ts,As,Cs,xl)||(n=[1,0,0,0,1,0,0,0,1],!dd(n,Ts,As,Cs,xl))?!1:(vl.crossVectors(sr,ar),n=[vl.x,vl.y,vl.z],dd(n,Ts,As,Cs,xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new O,new O,new O,new O,new O,new O,new O,new O],Jn=new O,gl=new Vo,Ts=new O,As=new O,Cs=new O,sr=new O,ar=new O,Or=new O,Pa=new O,xl=new O,vl=new O,Br=new O;function dd(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Br.fromArray(t,s);const o=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),c=n.dot(Br),f=i.dot(Br);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const kt=new O,_l=new Se;let Z1=0;class wi extends hs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=P1,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ra(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ra(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ra(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ra(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ra(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class T_ extends wi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class A_ extends wi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pt extends wi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const J1=new Vo,La=new O,fd=new O;class Go{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);const n=La.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(La,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(fd)),this.expandByPoint(La.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Q1=0;const Bn=new bt,hd=new $t,Rs=new O,An=new Vo,Da=new Vo,Gt=new O;class Jt extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L1(e)?A_:T_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Da.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(An.min,Da.min),An.expandByPoint(Gt),Gt.addVectors(An.max,Da.max),An.expandByPoint(Gt)):(An.expandByPoint(Da.min),An.expandByPoint(Da.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Gt.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(e,c),Gt.add(Rs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new wi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let M=0;M<i.count;M++)o[M]=new O,l[M]=new O;const c=new O,f=new O,p=new O,d=new Se,g=new Se,x=new Se,S=new O,m=new O;function h(M,C,R){c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,C),p.fromBufferAttribute(i,R),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,C),x.fromBufferAttribute(s,R),f.sub(c),p.sub(c),g.sub(d),x.sub(d);const N=1/(g.x*x.y-x.x*g.y);isFinite(N)&&(S.copy(f).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(N),m.copy(p).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(N),o[M].add(S),o[C].add(S),o[R].add(S),l[M].add(m),l[C].add(m),l[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let M=0,C=_.length;M<C;++M){const R=_[M],N=R.start,F=R.count;for(let j=N,I=N+F;j<I;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const y=new O,v=new O,b=new O,E=new O;function A(M){b.fromBufferAttribute(r,M),E.copy(b);const C=o[M];y.copy(C),y.sub(b.multiplyScalar(b.dot(C))).normalize(),v.crossVectors(E,C);const N=v.dot(l[M])<0?-1:1;a.setXYZW(M,y.x,y.y,y.z,N)}for(let M=0,C=_.length;M<C;++M){const R=_[M],N=R.start,F=R.count;for(let j=N,I=N+F;j<I;j+=3)A(e.getX(j+0)),A(e.getX(j+1)),A(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,f=new O,p=new O;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,m),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,d=new c.constructor(l.length*f);let g=0,x=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?g=l[S]*o.data.stride+o.offset:g=l[S]*f;for(let h=0;h<f;h++)d[x++]=c[g++]}return new wi(d,f,p)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){const d=c[f],g=e(d,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,d=c.length;p<d;p++){const g=c[p];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let d=0,g=p.length;d<g;d++)f.push(p[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pd=new O,eb=new O,tb=new Ke;class ur{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pd.subVectors(i,n).cross(eb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(pd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tb.getNormalMatrix(e),r=this.coplanarPoint(pd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let nb=0;class ps extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=va(),this.name="",this.type="Material",this.blending=no,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=s_,this.blendDst=a_,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yu,this.stencilZFail=Yu,this.stencilZPass=Yu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Xe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ur().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Se().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Li=new O,md=new O,yl=new O,Sl=new O;class Fp{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){md.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),Sl.copy(this.origin).sub(md);const s=e.distanceTo(n)*.5,a=-this.direction.dot(yl),o=Sl.dot(this.direction),l=-Sl.dot(yl),c=Sl.lengthSq(),f=Math.abs(1-a*a);let p,d,g,x;if(f>0)if(p=a*l-o,d=a*o-l,x=s*f,p>=0)if(d>=-x)if(d<=x){const S=1/f;p*=S,d*=S,g=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*l)+c;else d<=-x?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+d*(d+2*l)+c):d<=x?(p=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(md).addScaledVector(yl,d),g}intersectSphere(e,n){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=e.x-a.x,d=e.y-a.y,g=e.z-a.z,x=n.x-a.x,S=n.y-a.y,m=n.z-a.z,h=i.x-a.x,_=i.y-a.y,y=i.z-a.z,v=Math.abs(l),b=Math.abs(c),E=Math.abs(f);let A,M,C,R,N,F,j,I,H,J,W,V;if(v>=b&&v>=E?(C=l,F=p,H=x,V=h,l>=0?(A=c,M=f,R=d,N=g,j=S,I=m,J=_,W=y):(A=f,M=c,R=g,N=d,j=m,I=S,J=y,W=_)):b>=E?(C=c,F=d,H=S,V=_,c>=0?(A=f,M=l,R=g,N=p,j=m,I=x,J=y,W=h):(A=l,M=f,R=p,N=g,j=x,I=m,J=h,W=y)):(C=f,F=g,H=m,V=y,f>=0?(A=l,M=c,R=p,N=d,j=x,I=S,J=h,W=_):(A=c,M=l,R=d,N=p,j=S,I=x,J=_,W=h)),C===0)return null;const L=A/C,B=M/C,Y=1/C,se=R-L*F,fe=N-B*F,ze=j-L*H,Ve=I-B*H,$e=J-L*V,Z=W-B*V,te=$e*Ve-Z*ze,ye=se*Z-fe*$e,Ge=ze*fe-Ve*se;if(r){if(te<0||ye<0||Ge<0)return null}else if((te<0||ye<0||Ge<0)&&(te>0||ye>0||Ge>0))return null;const Ae=te+ye+Ge;if(Ae===0)return null;const We=Y*(te*F+ye*H+Ge*V);return(Ae>0?We<0:We>0)?null:this.at(We/Ae,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class io extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=o_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const O0=new bt,zr=new Fp,Ml=new Go,B0=new O,wl=new O,bl=new O,El=new O,gd=new O,Tl=new O,z0=new O,Al=new O;class nt extends $t{constructor(e=new Jt,n=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],p=s[l];f!==0&&(gd.fromBufferAttribute(p,e),a?Tl.addScaledVector(gd,f):Tl.addScaledVector(gd.sub(n),f))}n.add(Tl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(Ml.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Ml,B0)===null||zr.origin.distanceToSquared(B0)>(e.far-e.near)**2))&&(O0.copy(s).invert(),zr.copy(e.ray).applyMatrix4(O0),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const m=d[x],h=a[m.materialIndex],_=Math.max(m.start,g.start),y=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let v=_,b=y;v<b;v+=3){const E=o.getX(v),A=o.getX(v+1),M=o.getX(v+2);r=Cl(this,h,e,i,c,f,p,E,A,M),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let m=x,h=S;m<h;m+=3){const _=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);r=Cl(this,a,e,i,c,f,p,_,y,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const m=d[x],h=a[m.materialIndex],_=Math.max(m.start,g.start),y=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let v=_,b=y;v<b;v+=3){const E=v,A=v+1,M=v+2;r=Cl(this,h,e,i,c,f,p,E,A,M),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=x,h=S;m<h;m+=3){const _=m,y=m+1,v=m+2;r=Cl(this,a,e,i,c,f,p,_,y,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ib(t,e,n,i,r,s,a,o){let l;if(e.side===bn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===rs,o),l===null)return null;Al.copy(o),Al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:t}}function Cl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,wl),t.getVertexPosition(l,bl),t.getVertexPosition(c,El);const f=ib(t,e,n,i,wl,bl,El,z0);if(f){const p=new O;Gn.getBarycoord(z0,wl,bl,El,p),r&&(f.uv=Gn.getInterpolatedAttribute(r,o,l,c,p,new Se)),s&&(f.uv1=Gn.getInterpolatedAttribute(s,o,l,c,p,new Se)),a&&(f.normal=Gn.getInterpolatedAttribute(a,o,l,c,p,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};Gn.getNormal(wl,bl,El,d.normal),f.face=d,f.barycoord=p}return f}class rb extends cn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Yt,f=Yt,p,d){super(null,a,o,l,c,f,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hr=new Go,sb=new Se(.5,.5),Rl=new O;class kp{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],p=s[5],d=s[6],g=s[7],x=s[8],S=s[9],m=s[10],h=s[11],_=s[12],y=s[13],v=s[14],b=s[15];if(r[0].setComponents(c-a,g-f,h-x,b-_).normalize(),r[1].setComponents(c+a,g+f,h+x,b+_).normalize(),r[2].setComponents(c+o,g+p,h+S,b+y).normalize(),r[3].setComponents(c-o,g-p,h-S,b-y).normalize(),i)r[4].setComponents(l,d,m,v).normalize(),r[5].setComponents(c-l,g-d,h-m,b-v).normalize();else if(r[4].setComponents(c-l,g-d,h-m,b-v).normalize(),n===vi)r[5].setComponents(c+l,g+d,h+m,b+v).normalize();else if(n===No)r[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const n=sb.distanceTo(e.center);return Hr.radius=.7071067811865476+n,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Va extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new O,Wc=new O,H0=new bt,Ia=new Fp,Nl=new Go,xd=new O,V0=new O;class ab extends $t{constructor(e=new Jt,n=new Va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jc.fromBufferAttribute(n,r-1),Wc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jc.distanceTo(Wc);e.setAttribute("lineDistance",new Pt(i,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;H0.copy(r).invert(),Ia.copy(e.ray).applyMatrix4(H0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const g=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let S=g,m=x-1;S<m;S+=c){const h=f.getX(S),_=f.getX(S+1),y=Pl(this,e,Ia,l,h,_,S);y&&n.push(y)}if(this.isLineLoop){const S=f.getX(x-1),m=f.getX(g),h=Pl(this,e,Ia,l,S,m,x-1);h&&n.push(h)}}else{const g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let S=g,m=x-1;S<m;S+=c){const h=Pl(this,e,Ia,l,S,S+1,S);h&&n.push(h)}if(this.isLineLoop){const S=Pl(this,e,Ia,l,x-1,g,x-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Pl(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(jc.fromBufferAttribute(o,r),Wc.fromBufferAttribute(o,s),n.distanceSqToSegment(jc,Wc,xd,V0)>i)return;xd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(xd);if(!(c<e.near||c>e.far))return{distance:c,point:V0.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const G0=new O,j0=new O;class Ll extends ab{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)G0.fromBufferAttribute(n,r),j0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+G0.distanceTo(j0);e.setAttribute("lineDistance",new Pt(i,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C_ extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const W0=new bt,_h=new Fp,Dl=new Go,Il=new O;class ob extends $t{constructor(e=new Jt,n=new C_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;W0.copy(r).invert(),_h.copy(e.ray).applyMatrix4(W0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=d,S=g;x<S;x++){const m=c.getX(x);Il.fromBufferAttribute(p,m),X0(Il,m,l,r,e,n,this)}}else{const d=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=d,S=g;x<S;x++)Il.fromBufferAttribute(p,x),X0(Il,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function X0(t,e,n,i,r,s,a){const o=_h.distanceSqToPoint(t);if(o<n){const l=new O;_h.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class R_ extends cn{constructor(e=[],n=ss,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lb extends cn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Po extends cn{constructor(e,n,i=bi,r,s,a,o=Yt,l=Yt,c,f=Xi,p=1){if(f!==Xi&&f!==Kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:p};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class cb extends Po{constructor(e,n=bi,i=ss,r,s,a=Yt,o=Yt,l,c=Xi){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class N_ extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ni extends Jt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],p=[];let d=0,g=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(p,2));function x(S,m,h,_,y,v,b,E,A,M,C){const R=v/A,N=b/M,F=v/2,j=b/2,I=E/2,H=A+1,J=M+1;let W=0,V=0;const L=new O;for(let B=0;B<J;B++){const Y=B*N-j;for(let se=0;se<H;se++){const fe=se*R-F;L[S]=fe*_,L[m]=Y*y,L[h]=I,c.push(L.x,L.y,L.z),L[S]=0,L[m]=0,L[h]=E>0?1:-1,f.push(L.x,L.y,L.z),p.push(se/A),p.push(1-B/M),W+=1}}for(let B=0;B<M;B++)for(let Y=0;Y<A;Y++){const se=d+Y+H*B,fe=d+Y+H*(B+1),ze=d+(Y+1)+H*(B+1),Ve=d+(Y+1)+H*B;l.push(se,fe,Ve),l.push(fe,ze,Ve),V+=6}o.addGroup(g,V,C),g+=V,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dr extends Jt{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],d=[],g=[];let x=0;const S=[],m=i/2;let h=0;_(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(g,2));function _(){const v=new O,b=new O;let E=0;const A=(n-e)/i;for(let M=0;M<=s;M++){const C=[],R=M/s,N=R*(n-e)+e;for(let F=0;F<=r;F++){const j=F/r,I=j*l+o,H=Math.sin(I),J=Math.cos(I);b.x=N*H,b.y=-R*i+m,b.z=N*J,p.push(b.x,b.y,b.z),v.set(H,A,J).normalize(),d.push(v.x,v.y,v.z),g.push(j,1-R),C.push(x++)}S.push(C)}for(let M=0;M<r;M++)for(let C=0;C<s;C++){const R=S[C][M],N=S[C+1][M],F=S[C+1][M+1],j=S[C][M+1];(e>0||C!==0)&&(f.push(R,N,j),E+=3),(n>0||C!==s-1)&&(f.push(N,F,j),E+=3)}c.addGroup(h,E,0),h+=E}function y(v){const b=x,E=new Se,A=new O;let M=0;const C=v===!0?e:n,R=v===!0?1:-1;for(let F=1;F<=r;F++)p.push(0,m*R,0),d.push(0,R,0),g.push(.5,.5),x++;const N=x;for(let F=0;F<=r;F++){const I=F/r*l+o,H=Math.cos(I),J=Math.sin(I);A.x=C*J,A.y=m*R,A.z=C*H,p.push(A.x,A.y,A.z),d.push(0,R,0),E.x=H*.5+.5,E.y=J*.5*R+.5,g.push(E.x,E.y),x++}for(let F=0;F<r;F++){const j=b+F,I=N+F;v===!0?f.push(I,I+1,j):f.push(I+1,I,j),M+=3}c.addGroup(h,M,v===!0?1:2),h+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ul=new O,Fl=new O,vd=new O,kl=new Gn;class Ol extends Jt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(uc*n),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],f=["a","b","c"],p=new Array(3),d={},g=[];for(let x=0;x<l;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:S,b:m,c:h}=kl;if(S.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),kl.getNormal(vd),p[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let _=0;_<3;_++){const y=(_+1)%3,v=p[_],b=p[y],E=kl[f[_]],A=kl[f[y]],M=`${v}_${b}`,C=`${b}_${v}`;C in d&&d[C]?(vd.dot(d[C].normal)<=s&&(g.push(E.x,E.y,E.z),g.push(A.x,A.y,A.z)),d[C]=null):M in d||(d[M]={index0:c[_],index1:c[y],normal:vd.clone()})}}for(const x in d)if(d[x]){const{index0:S,index1:m}=d[x];Ul.fromBufferAttribute(o,S),Fl.fromBufferAttribute(o,m),g.push(Ul.x,Ul.y,Ul.z),g.push(Fl.x,Fl.y,Fl.z)}this.setAttribute("position",new Pt(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const f=i[r],d=i[r+1]-f,g=(a-f)/d;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new Se:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new O,r=[],s=[],a=[],o=new O,l=new bt;for(let g=0;g<=e;g++){const x=g/e;r[g]=this.getTangentAt(x,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(r[g-1],r[g]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(it(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(o,x))}a[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(it(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(g=-g);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],g*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Op extends Ai{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new Se){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,g=c-this.aY;l=d*f-g*p+this.aX,c=d*p+g*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ub extends Op{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bp(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,f,p){let d=(a-s)/c-(o-s)/(c+f)+(o-a)/f,g=(o-a)/f-(l-a)/(f+p)+(l-o)/p;d*=f,g*=f,r(a,o,d,g)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const $0=new O,q0=new O,_d=new Bp,yd=new Bp,Sd=new Bp;class db extends Ai{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,f;this.closed||o>0?c=r[(o-1)%s]:(q0.subVectors(r[0],r[1]).add(r[0]),c=q0);const p=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:($0.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=$0),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(p),g),S=Math.pow(p.distanceToSquared(d),g),m=Math.pow(d.distanceToSquared(f),g);S<1e-4&&(S=1),x<1e-4&&(x=S),m<1e-4&&(m=S),_d.initNonuniformCatmullRom(c.x,p.x,d.x,f.x,x,S,m),yd.initNonuniformCatmullRom(c.y,p.y,d.y,f.y,x,S,m),Sd.initNonuniformCatmullRom(c.z,p.z,d.z,f.z,x,S,m)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(c.x,p.x,d.x,f.x,this.tension),yd.initCatmullRom(c.y,p.y,d.y,f.y,this.tension),Sd.initCatmullRom(c.z,p.z,d.z,f.z,this.tension));return i.set(_d.calc(l),yd.calc(l),Sd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Y0(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function fb(t,e){const n=1-t;return n*n*e}function hb(t,e){return 2*(1-t)*t*e}function pb(t,e){return t*t*e}function ro(t,e,n,i){return fb(t,e)+hb(t,n)+pb(t,i)}function mb(t,e){const n=1-t;return n*n*n*e}function gb(t,e){const n=1-t;return 3*n*n*t*e}function xb(t,e){return 3*(1-t)*t*t*e}function vb(t,e){return t*t*t*e}function so(t,e,n,i,r){return mb(t,e)+gb(t,n)+xb(t,i)+vb(t,r)}class P_ extends Ai{constructor(e=new Se,n=new Se,i=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(so(e,r.x,s.x,a.x,o.x),so(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _b extends Ai{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(so(e,r.x,s.x,a.x,o.x),so(e,r.y,s.y,a.y,o.y),so(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L_ extends Ai{constructor(e=new Se,n=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Se){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Se){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yb extends Ai{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D_ extends Ai{constructor(e=new Se,n=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(ro(e,r.x,s.x,a.x),ro(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sb extends Ai{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(ro(e,r.x,s.x,a.x),ro(e,r.y,s.y,a.y),ro(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I_ extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Se){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],f=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return i.set(Y0(o,l.x,c.x,f.x,p.x),Y0(o,l.y,c.y,f.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Se().fromArray(r))}return this}}var yh=Object.freeze({__proto__:null,ArcCurve:ub,CatmullRomCurve3:db,CubicBezierCurve:P_,CubicBezierCurve3:_b,EllipseCurve:Op,LineCurve:L_,LineCurve3:yb,QuadraticBezierCurve:D_,QuadraticBezierCurve3:Sb,SplineCurve:I_});class Mb extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const f=l[c];i&&i.equals(f)||(n.push(f),i=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new yh[r.type]().fromJSON(r))}return this}}class K0 extends Mb{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new L_(this.currentPoint.clone(),new Se(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new D_(this.currentPoint.clone(),new Se(e,n),new Se(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,a){const o=new P_(this.currentPoint.clone(),new Se(e,n),new Se(i,r),new Se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new I_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,n+l,i,r,s,a),this}absarc(e,n,i,r,s,a){return this.absellipse(e,n,i,i,r,s,a),this}ellipse(e,n,i,r,s,a,o,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,n+f,i,r,s,a,o,l),this}absellipse(e,n,i,r,s,a,o,l){const c=new Op(e,n,i,r,s,a,o,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wr extends K0{constructor(e){super(e),this.uuid=va(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new K0().fromJSON(r))}return this}}function wb(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=U_(t,0,r,n,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Cb(t,e,s,n)),t.length>80*n){o=t[0],l=t[1];let f=o,p=l;for(let d=n;d<r;d+=n){const g=t[d],x=t[d+1];g<o&&(o=g),x<l&&(l=x),g>f&&(f=g),x>p&&(p=x)}c=Math.max(f-o,p-l),c=c!==0?32767/c:0}return Lo(s,a,n,o,l,c,0),a}function U_(t,e,n,i,r){let s;if(r===Bb(t,e,n,i)>0)for(let a=e;a<n;a+=i)s=Z0(a/i|0,t[a],t[a+1],s);else for(let a=n-i;a>=e;a-=i)s=Z0(a/i|0,t[a],t[a+1],s);return s&&da(s,s.next)&&(Io(s),s=s.next),s}function os(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(da(n,n.next)||Ct(n.prev,n,n.next)===0)){if(Io(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Lo(t,e,n,i,r,s,a){if(!t)return;!a&&s&&Db(t,i,r,s);let o=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?Eb(t,i,r,s):bb(t)){e.push(l.i,t.i,c.i),Io(t),t=c.next,o=c.next;continue}if(t=c,t===o){a?a===1?(t=Tb(os(t),e),Lo(t,e,n,i,r,s,2)):a===2&&Ab(t,e,n,i,r,s):Lo(os(t),e,n,i,r,s,1);break}}}function bb(t){const e=t.prev,n=t,i=t.next;if(Ct(e,n,i)>=0)return!1;const r=e.x,s=n.x,a=i.x,o=e.y,l=n.y,c=i.y,f=Math.min(r,s,a),p=Math.min(o,l,c),d=Math.max(r,s,a),g=Math.max(o,l,c);let x=i.next;for(;x!==e;){if(x.x>=f&&x.x<=d&&x.y>=p&&x.y<=g&&Ga(r,o,s,l,a,c,x.x,x.y)&&Ct(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Eb(t,e,n,i){const r=t.prev,s=t,a=t.next;if(Ct(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,f=r.y,p=s.y,d=a.y,g=Math.min(o,l,c),x=Math.min(f,p,d),S=Math.max(o,l,c),m=Math.max(f,p,d),h=Sh(g,x,e,n,i),_=Sh(S,m,e,n,i);let y=t.prevZ,v=t.nextZ;for(;y&&y.z>=h&&v&&v.z<=_;){if(y.x>=g&&y.x<=S&&y.y>=x&&y.y<=m&&y!==r&&y!==a&&Ga(o,f,l,p,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=g&&v.x<=S&&v.y>=x&&v.y<=m&&v!==r&&v!==a&&Ga(o,f,l,p,c,d,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=h;){if(y.x>=g&&y.x<=S&&y.y>=x&&y.y<=m&&y!==r&&y!==a&&Ga(o,f,l,p,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=g&&v.x<=S&&v.y>=x&&v.y<=m&&v!==r&&v!==a&&Ga(o,f,l,p,c,d,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Tb(t,e){let n=t;do{const i=n.prev,r=n.next.next;!da(i,r)&&k_(i,n,n.next,r)&&Do(i,r)&&Do(r,i)&&(e.push(i.i,n.i,r.i),Io(n),Io(n.next),n=t=r),n=n.next}while(n!==t);return os(n)}function Ab(t,e,n,i,r,s){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fb(a,o)){let l=O_(a,o);a=os(a,a.next),l=os(l,l.next),Lo(a,e,n,i,r,s,0),Lo(l,e,n,i,r,s,0);return}o=o.next}a=a.next}while(a!==t)}function Cb(t,e,n,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:t.length,c=U_(t,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Ub(c))}r.sort(Rb);for(let s=0;s<r.length;s++)n=Nb(r[s],n);return n}function Rb(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function Nb(t,e){const n=Pb(t,e);if(!n)return e;const i=O_(n,t);return os(i,i.next),os(n,n.next)}function Pb(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,a;if(da(t,n))return n;do{if(da(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const p=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=i&&p>s&&(s=p,a=n.x<n.next.x?n:n.next,p===i))return a}n=n.next}while(n!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let f=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&F_(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const p=Math.abs(r-n.y)/(i-n.x);Do(n,t)&&(p<f||p===f&&(n.x>a.x||n.x===a.x&&Lb(a,n)))&&(a=n,f=p)}n=n.next}while(n!==o);return a}function Lb(t,e){return Ct(t.prev,t,e.prev)<0&&Ct(e.next,t,t.next)<0}function Db(t,e,n,i){let r=t;do r.z===0&&(r.z=Sh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Ib(r)}function Ib(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<n&&(o++,a=a.nextZ,!!a);c++);let l=n;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=a}s.nextZ=null,n*=2}while(e>1);return t}function Sh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Ub(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function F_(t,e,n,i,r,s,a,o){return(r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(s-o)>=(r-a)*(i-o)}function Ga(t,e,n,i,r,s,a,o){return!(t===a&&e===o)&&F_(t,e,n,i,r,s,a,o)}function Fb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!kb(t,e)&&(Do(t,e)&&Do(e,t)&&Ob(t,e)&&(Ct(t.prev,t,e.prev)||Ct(t,e.prev,e))||da(t,e)&&Ct(t.prev,t,t.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function da(t,e){return t.x===e.x&&t.y===e.y}function k_(t,e,n,i){const r=zl(Ct(t,e,n)),s=zl(Ct(t,e,i)),a=zl(Ct(n,i,t)),o=zl(Ct(n,i,e));return!!(r!==s&&a!==o||r===0&&Bl(t,n,e)||s===0&&Bl(t,i,e)||a===0&&Bl(n,t,i)||o===0&&Bl(n,e,i))}function Bl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function zl(t){return t>0?1:t<0?-1:0}function kb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&k_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Do(t,e){return Ct(t.prev,t,t.next)<0?Ct(t,e,t.next)>=0&&Ct(t,t.prev,e)>=0:Ct(t,e,t.prev)<0||Ct(t,t.next,e)<0}function Ob(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function O_(t,e){const n=Mh(t.i,t.x,t.y),i=Mh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Z0(t,e,n,i){const r=Mh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Io(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Mh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bb(t,e,n,i){let r=0;for(let s=e,a=n-i;s<n;s+=i)r+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return r}class zb{static triangulate(e,n,i=2){return wb(e,n,i)}}class Xs{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Xs.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];J0(e),Q0(i,e);let a=e.length;n.forEach(J0);for(let l=0;l<n.length;l++)r.push(a),a+=n[l].length,Q0(i,n[l]);const o=zb.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function J0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Q0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class fr extends Jt{constructor(e=new Wr([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Pt(r,3)),this.setAttribute("uv",new Pt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,g=n.bevelThickness!==void 0?n.bevelThickness:.2,x=n.bevelSize!==void 0?n.bevelSize:g-.1,S=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const h=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:Hb;let y,v=!1,b,E,A,M;if(h){y=h.getSpacedPoints(f),v=!0,d=!1;const re=h.isCatmullRomCurve3?h.closed:!1;b=h.computeFrenetFrames(f,re),E=new O,A=new O,M=new O}d||(m=0,g=0,x=0,S=0);const C=o.extractPoints(c);let R=C.shape;const N=C.holes;if(!Xs.isClockWise(R)){R=R.reverse();for(let re=0,le=N.length;re<le;re++){const oe=N[re];Xs.isClockWise(oe)&&(N[re]=oe.reverse())}}function j(re){const oe=10000000000000001e-36;let ue=re[0];for(let pe=1;pe<=re.length;pe++){const ke=pe%re.length,Pe=re[ke],je=Pe.x-ue.x,qe=Pe.y-ue.y,D=je*je+qe*qe,Ze=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(ue.x),Math.abs(ue.y)),tt=oe*Ze*Ze;if(D<=tt){re.splice(ke,1),pe--;continue}ue=Pe}}j(R),N.forEach(j);const I=N.length,H=R;for(let re=0;re<I;re++){const le=N[re];R=R.concat(le)}function J(re,le,oe){return le||dt("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(le,oe)}const W=R.length;function V(re,le,oe){let ue,pe,ke;const Pe=re.x-le.x,je=re.y-le.y,qe=oe.x-re.x,D=oe.y-re.y,Ze=Pe*Pe+je*je,tt=Pe*D-je*qe;if(Math.abs(tt)>Number.EPSILON){const P=Math.sqrt(Ze),w=Math.sqrt(qe*qe+D*D),G=le.x-je/P,q=le.y+Pe/P,Q=oe.x-D/w,de=oe.y+qe/w,he=((Q-G)*D-(de-q)*qe)/(Pe*D-je*qe);ue=G+Pe*he-re.x,pe=q+je*he-re.y;const ee=ue*ue+pe*pe;if(ee<=2)return new Se(ue,pe);ke=Math.sqrt(ee/2)}else{let P=!1;Pe>Number.EPSILON?qe>Number.EPSILON&&(P=!0):Pe<-Number.EPSILON?qe<-Number.EPSILON&&(P=!0):Math.sign(je)===Math.sign(D)&&(P=!0),P?(ue=-je,pe=Pe,ke=Math.sqrt(Ze)):(ue=Pe,pe=je,ke=Math.sqrt(Ze/2))}return new Se(ue/ke,pe/ke)}const L=[];for(let re=0,le=H.length,oe=le-1,ue=re+1;re<le;re++,oe++,ue++)oe===le&&(oe=0),ue===le&&(ue=0),L[re]=V(H[re],H[oe],H[ue]);const B=[];let Y,se=L.concat();for(let re=0,le=I;re<le;re++){const oe=N[re];Y=[];for(let ue=0,pe=oe.length,ke=pe-1,Pe=ue+1;ue<pe;ue++,ke++,Pe++)ke===pe&&(ke=0),Pe===pe&&(Pe=0),Y[ue]=V(oe[ue],oe[ke],oe[Pe]);B.push(Y),se=se.concat(Y)}let fe;if(m===0)fe=Xs.triangulateShape(H,N);else{const re=[],le=[];for(let oe=0;oe<m;oe++){const ue=oe/m,pe=g*Math.cos(ue*Math.PI/2),ke=x*Math.sin(ue*Math.PI/2)+S;for(let Pe=0,je=H.length;Pe<je;Pe++){const qe=J(H[Pe],L[Pe],ke);ye(qe.x,qe.y,-pe),ue===0&&re.push(qe)}for(let Pe=0,je=I;Pe<je;Pe++){const qe=N[Pe];Y=B[Pe];const D=[];for(let Ze=0,tt=qe.length;Ze<tt;Ze++){const P=J(qe[Ze],Y[Ze],ke);ye(P.x,P.y,-pe),ue===0&&D.push(P)}ue===0&&le.push(D)}}fe=Xs.triangulateShape(re,le)}const ze=fe.length,Ve=x+S;for(let re=0;re<W;re++){const le=d?J(R[re],se[re],Ve):R[re];v?(A.copy(b.normals[0]).multiplyScalar(le.x),E.copy(b.binormals[0]).multiplyScalar(le.y),M.copy(y[0]).add(A).add(E),ye(M.x,M.y,M.z)):ye(le.x,le.y,0)}for(let re=1;re<=f;re++)for(let le=0;le<W;le++){const oe=d?J(R[le],se[le],Ve):R[le];v?(A.copy(b.normals[re]).multiplyScalar(oe.x),E.copy(b.binormals[re]).multiplyScalar(oe.y),M.copy(y[re]).add(A).add(E),ye(M.x,M.y,M.z)):ye(oe.x,oe.y,p/f*re)}for(let re=m-1;re>=0;re--){const le=re/m,oe=g*Math.cos(le*Math.PI/2),ue=x*Math.sin(le*Math.PI/2)+S;for(let pe=0,ke=H.length;pe<ke;pe++){const Pe=J(H[pe],L[pe],ue);ye(Pe.x,Pe.y,p+oe)}for(let pe=0,ke=N.length;pe<ke;pe++){const Pe=N[pe];Y=B[pe];for(let je=0,qe=Pe.length;je<qe;je++){const D=J(Pe[je],Y[je],ue);v?ye(D.x,D.y+y[f-1].y,y[f-1].x+oe):ye(D.x,D.y,p+oe)}}}$e(),Z();function $e(){const re=r.length/3;if(d){let le=0,oe=W*le;for(let ue=0;ue<ze;ue++){const pe=fe[ue];Ge(pe[2]+oe,pe[1]+oe,pe[0]+oe)}le=f+m*2,oe=W*le;for(let ue=0;ue<ze;ue++){const pe=fe[ue];Ge(pe[0]+oe,pe[1]+oe,pe[2]+oe)}}else{for(let le=0;le<ze;le++){const oe=fe[le];Ge(oe[2],oe[1],oe[0])}for(let le=0;le<ze;le++){const oe=fe[le];Ge(oe[0]+W*f,oe[1]+W*f,oe[2]+W*f)}}i.addGroup(re,r.length/3-re,0)}function Z(){const re=r.length/3;let le=0;te(H,le),le+=H.length;for(let oe=0,ue=N.length;oe<ue;oe++){const pe=N[oe];te(pe,le),le+=pe.length}i.addGroup(re,r.length/3-re,1)}function te(re,le){let oe=re.length;for(;--oe>=0;){const ue=oe;let pe=oe-1;pe<0&&(pe=re.length-1);for(let ke=0,Pe=f+m*2;ke<Pe;ke++){const je=W*ke,qe=W*(ke+1),D=le+ue+je,Ze=le+pe+je,tt=le+pe+qe,P=le+ue+qe;Ae(D,Ze,tt,P)}}}function ye(re,le,oe){l.push(re),l.push(le),l.push(oe)}function Ge(re,le,oe){We(re),We(le),We(oe);const ue=r.length/3,pe=_.generateTopUV(i,r,ue-3,ue-2,ue-1);rt(pe[0]),rt(pe[1]),rt(pe[2])}function Ae(re,le,oe,ue){We(re),We(le),We(ue),We(le),We(oe),We(ue);const pe=r.length/3,ke=_.generateSideWallUV(i,r,pe-6,pe-3,pe-2,pe-1);rt(ke[0]),rt(ke[1]),rt(ke[3]),rt(ke[1]),rt(ke[2]),rt(ke[3])}function We(re){r.push(l[re*3+0]),r.push(l[re*3+1]),r.push(l[re*3+2])}function rt(re){s.push(re.x),s.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Vb(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=n[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new yh[r.type]().fromJSON(r)),new fr(i,e.options)}}const Hb={generateTopUV:function(t,e,n,i,r){const s=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],f=e[r*3+1];return[new Se(s,a),new Se(o,l),new Se(c,f)]},generateSideWallUV:function(t,e,n,i,r,s){const a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],f=e[i*3+1],p=e[i*3+2],d=e[r*3],g=e[r*3+1],x=e[r*3+2],S=e[s*3],m=e[s*3+1],h=e[s*3+2];return Math.abs(o-f)<Math.abs(a-c)?[new Se(a,1-l),new Se(c,1-p),new Se(d,1-x),new Se(S,1-h)]:[new Se(o,1-l),new Se(f,1-p),new Se(g,1-x),new Se(m,1-h)]}};function Vb(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class jo extends Jt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,p=e/o,d=n/l,g=[],x=[],S=[],m=[];for(let h=0;h<f;h++){const _=h*d-a;for(let y=0;y<c;y++){const v=y*p-s;x.push(v,-_,0),S.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){const y=_+c*h,v=_+c*(h+1),b=_+1+c*(h+1),E=_+1+c*h;g.push(y,v,E),g.push(v,b,E)}this.setIndex(g),this.setAttribute("position",new Pt(x,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class zp extends Jt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],p=new O,d=new O,g=[],x=[],S=[],m=[];for(let h=0;h<=i;h++){const _=[],y=h/i,v=a+y*o,b=e*Math.cos(v),E=Math.sqrt(e*e-b*b);let A=0;h===0&&a===0?A=.5/n:h===i&&l===Math.PI&&(A=-.5/n);for(let M=0;M<=n;M++){const C=M/n,R=r+C*s;p.x=-E*Math.cos(R),p.y=b,p.z=E*Math.sin(R),x.push(p.x,p.y,p.z),d.copy(p).normalize(),S.push(d.x,d.y,d.z),m.push(C+A,1-y),_.push(c++)}f.push(_)}for(let h=0;h<i;h++)for(let _=0;_<n;_++){const y=f[h][_+1],v=f[h][_],b=f[h+1][_],E=f[h+1][_+1];(h!==0||a>0)&&g.push(y,v,E),(h!==i-1||l<Math.PI)&&g.push(v,b,E)}this.setIndex(g),this.setAttribute("position",new Pt(x,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hr extends Jt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],p=[],d=new O,g=new O,x=new O;for(let S=0;S<=i;S++){const m=a+S/i*o;for(let h=0;h<=r;h++){const _=h/r*s;g.x=(e+n*Math.cos(m))*Math.cos(_),g.y=(e+n*Math.cos(m))*Math.sin(_),g.z=n*Math.sin(m),c.push(g.x,g.y,g.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),x.subVectors(g,d).normalize(),f.push(x.x,x.y,x.z),p.push(h/r),p.push(S/i)}}for(let S=1;S<=i;S++)for(let m=1;m<=r;m++){const h=(r+1)*S+m-1,_=(r+1)*(S-1)+m-1,y=(r+1)*(S-1)+m,v=(r+1)*S+m;l.push(h,_,v),l.push(_,y,v)}this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function fa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(eg(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(eg(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=fa(t[n]);for(const r in i)e[r]=i[r]}return e}function eg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Gb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function B_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const jb={clone:fa,merge:fn};var Wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wb,this.fragmentShader=Xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=Gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new Se().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $b extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wh extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tg extends wh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qb extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yb extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hp extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Md=new bt,ng=new O,ig=new O;class z_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;ng.setFromMatrixPosition(e.matrixWorld),n.position.copy(ng),ig.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ig),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Md.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Md,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===No||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hl=new O,Vl=new _a,di=new O;class H_ extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Vl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,di.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Hl,Vl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const or=new O,rg=new Se,sg=new Se;class Rn extends H_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vh*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,rg,sg),n.subVectors(sg,rg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Kb extends z_{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}}class wd extends Hp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Kb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Vp extends H_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Zb extends z_{constructor(){super(new Vp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jb extends Hp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Zb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Qb extends Hp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ns=-90,Ps=1;class eE extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Ns,Ps,e,n);r.layers=this.layers,this.add(r);const s=new Rn(Ns,Ps,e,n);s.layers=this.layers,this.add(s);const a=new Rn(Ns,Ps,e,n);a.layers=this.layers,this.add(a);const o=new Rn(Ns,Ps,e,n);o.layers=this.layers,this.add(o);const l=new Rn(Ns,Ps,e,n);l.layers=this.layers,this.add(l);const c=new Rn(Ns,Ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,d,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class tE extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class nE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Yp=class Yp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Yp.prototype.isMatrix2=!0;let ag=Yp;function og(t,e,n,i){const r=iE(i);switch(n){case __:return t*e;case S_:return t*e/r.components*r.byteLength;case Rp:return t*e/r.components*r.byteLength;case as:return t*e*2/r.components*r.byteLength;case Np:return t*e*2/r.components*r.byteLength;case y_:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case Pp:return t*e*4/r.components*r.byteLength;case ac:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:case jf:return Math.max(t,16)*Math.max(e,8)/4;case Hf:case Gf:return Math.max(t,8)*Math.max(e,8)/2;case Wf:case Xf:case qf:case Yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $f:case Bc:case Kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ch:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dh:case fh:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ph:case mh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zc:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iE(t){switch(t){case Nn:case m_:return{byteLength:1,components:1};case Co:case g_:case Ei:return{byteLength:2,components:1};case Ap:case Cp:return{byteLength:2,components:4};case bi:case Tp:case xi:return{byteLength:4,components:1};case x_:case v_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bp}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V_(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rE(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,p=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const f=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,f);else{p.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<p.length;g++){const x=p[d],S=p[g];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,p[d]=S)}p.length=d+1;for(let g=0,x=p.length;g<x;g++){const S=p[g];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var sE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
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
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dE=`#ifdef USE_AOMAP
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
#endif`,fE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hE=`#ifdef USE_BATCHING
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
#endif`,pE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vE=`#ifdef USE_IRIDESCENCE
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
#endif`,_E=`#ifdef USE_BUMPMAP
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
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,EE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,CE=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NE=`vec3 transformedNormal = objectNormal;
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
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XE=`#ifdef USE_GRADIENTMAP
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
}`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KE=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,ZE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,JE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nT=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,iT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,rT=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sT=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mT=`#if defined( USE_POINTS_UV )
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
#endif`,gT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`#ifdef USE_MORPHTARGETS
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
#endif`,MT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
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
#endif`,RT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NT=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,LT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,FT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,GT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,WT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
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
#endif`,$T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QT=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e2=`#ifdef USE_TRANSMISSION
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
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a2=`uniform sampler2D t2D;
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
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`#include <common>
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
}`,f2=`#if DEPTH_PACKING == 3200
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
}`,h2=`#define DISTANCE
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
}`,p2=`#define DISTANCE
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
void main() {
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
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x2=`uniform float scale;
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
}`,v2=`uniform vec3 diffuse;
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
}`,_2=`#include <common>
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
}`,y2=`uniform vec3 diffuse;
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
}`,S2=`#define LAMBERT
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
}`,M2=`#define LAMBERT
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
}`,w2=`#define MATCAP
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
}`,b2=`#define MATCAP
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
}`,E2=`#define NORMAL
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
}`,T2=`#define NORMAL
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
}`,A2=`#define PHONG
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
}`,C2=`#define PHONG
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
}`,R2=`#define STANDARD
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
}`,N2=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,P2=`#define TOON
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
}`,L2=`#define TOON
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
}`,D2=`uniform float size;
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
}`,I2=`uniform vec3 diffuse;
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
}`,U2=`#include <common>
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
}`,F2=`uniform vec3 color;
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
}`,k2=`uniform float rotation;
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
}`,O2=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:sE,alphahash_pars_fragment:aE,alphamap_fragment:oE,alphamap_pars_fragment:lE,alphatest_fragment:cE,alphatest_pars_fragment:uE,aomap_fragment:dE,aomap_pars_fragment:fE,batching_pars_vertex:hE,batching_vertex:pE,begin_vertex:mE,beginnormal_vertex:gE,bsdfs:xE,iridescence_fragment:vE,bumpmap_pars_fragment:_E,clipping_planes_fragment:yE,clipping_planes_pars_fragment:SE,clipping_planes_pars_vertex:ME,clipping_planes_vertex:wE,color_fragment:bE,color_pars_fragment:EE,color_pars_vertex:TE,color_vertex:AE,common:CE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:NE,displacementmap_pars_vertex:PE,displacementmap_vertex:LE,emissivemap_fragment:DE,emissivemap_pars_fragment:IE,colorspace_fragment:UE,colorspace_pars_fragment:FE,envmap_fragment:kE,envmap_common_pars_fragment:OE,envmap_pars_fragment:BE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:ZE,envmap_vertex:HE,fog_vertex:VE,fog_pars_vertex:GE,fog_fragment:jE,fog_pars_fragment:WE,gradientmap_pars_fragment:XE,lightmap_pars_fragment:$E,lights_lambert_fragment:qE,lights_lambert_pars_fragment:YE,lights_pars_begin:KE,lights_toon_fragment:JE,lights_toon_pars_fragment:QE,lights_phong_fragment:eT,lights_phong_pars_fragment:tT,lights_physical_fragment:nT,lights_physical_pars_fragment:iT,lights_fragment_begin:rT,lights_fragment_maps:sT,lights_fragment_end:aT,lightprobes_pars_fragment:oT,logdepthbuf_fragment:lT,logdepthbuf_pars_fragment:cT,logdepthbuf_pars_vertex:uT,logdepthbuf_vertex:dT,map_fragment:fT,map_pars_fragment:hT,map_particle_fragment:pT,map_particle_pars_fragment:mT,metalnessmap_fragment:gT,metalnessmap_pars_fragment:xT,morphinstance_vertex:vT,morphcolor_vertex:_T,morphnormal_vertex:yT,morphtarget_pars_vertex:ST,morphtarget_vertex:MT,normal_fragment_begin:wT,normal_fragment_maps:bT,normal_pars_fragment:ET,normal_pars_vertex:TT,normal_vertex:AT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:NT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:LT,opaque_fragment:DT,packing:IT,premultiplied_alpha_fragment:UT,project_vertex:FT,dithering_fragment:kT,dithering_pars_fragment:OT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:HT,shadowmap_pars_vertex:VT,shadowmap_vertex:GT,shadowmask_pars_fragment:jT,skinbase_vertex:WT,skinning_pars_vertex:XT,skinning_vertex:$T,skinnormal_vertex:qT,specularmap_fragment:YT,specularmap_pars_fragment:KT,tonemapping_fragment:ZT,tonemapping_pars_fragment:JT,transmission_fragment:QT,transmission_pars_fragment:e2,uv_pars_fragment:t2,uv_pars_vertex:n2,uv_vertex:i2,worldpos_vertex:r2,background_vert:s2,background_frag:a2,backgroundCube_vert:o2,backgroundCube_frag:l2,cube_vert:c2,cube_frag:u2,depth_vert:d2,depth_frag:f2,distance_vert:h2,distance_frag:p2,equirect_vert:m2,equirect_frag:g2,linedashed_vert:x2,linedashed_frag:v2,meshbasic_vert:_2,meshbasic_frag:y2,meshlambert_vert:S2,meshlambert_frag:M2,meshmatcap_vert:w2,meshmatcap_frag:b2,meshnormal_vert:E2,meshnormal_frag:T2,meshphong_vert:A2,meshphong_frag:C2,meshphysical_vert:R2,meshphysical_frag:N2,meshtoon_vert:P2,meshtoon_frag:L2,points_vert:D2,points_frag:I2,shadow_vert:U2,shadow_frag:F2,sprite_vert:k2,sprite_frag:O2},Me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},pi={basic:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:fn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:fn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:fn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:fn([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:fn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:fn([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:fn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:fn([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:fn([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:fn([Me.lights,Me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};pi.physical={uniforms:fn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Gl={r:0,b:0,g:0},B2=new bt,G_=new Ke;G_.set(-1,0,0,0,1,0,0,0,1);function z2(t,e,n,i,r,s){const a=new et(0);let o=r===!0?0:1,l,c,f=null,p=0,d=null;function g(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){const v=_.backgroundBlurriness>0;y=e.get(y,v)}return y}function x(_){let y=!1;const v=g(_);v===null?m(a,o):v&&v.isColor&&(m(v,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(_,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===mu)?(c===void 0&&(c=new nt(new ni(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:fa(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B2.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(G_),c.material.toneMapped=lt.getTransfer(v.colorSpace)!==mt,(f!==v||p!==v.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,p=v.version,d=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new nt(new jo(2,2),new Ti({name:"BackgroundMaterial",uniforms:fa(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=lt.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=v,p=v.version,d=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(Gl,B_(t)),n.buffers.color.setClear(Gl.r,Gl.g,Gl.b,y,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:x,addToRenderList:S,dispose:h}}function H2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(N,F,j,I,H){let J=!1;const W=p(N,I,j,F);s!==W&&(s=W,c(s.object)),J=g(N,I,j,H),J&&x(N,I,j,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(N,F,j,I),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function f(N){return t.deleteVertexArray(N)}function p(N,F,j,I){const H=I.wireframe===!0;let J=i[F.id];J===void 0&&(J={},i[F.id]=J);const W=N.isInstancedMesh===!0?N.id:0;let V=J[W];V===void 0&&(V={},J[W]=V);let L=V[j.id];L===void 0&&(L={},V[j.id]=L);let B=L[H];return B===void 0&&(B=d(l()),L[H]=B),B}function d(N){const F=[],j=[],I=[];for(let H=0;H<n;H++)F[H]=0,j[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:I,object:N,attributes:{},index:null}}function g(N,F,j,I){const H=s.attributes,J=F.attributes;let W=0;const V=j.getAttributes();for(const L in V)if(V[L].location>=0){const Y=H[L];let se=J[L];if(se===void 0&&(L==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),L==="instanceColor"&&N.instanceColor&&(se=N.instanceColor)),Y===void 0||Y.attribute!==se||se&&Y.data!==se.data)return!0;W++}return s.attributesNum!==W||s.index!==I}function x(N,F,j,I){const H={},J=F.attributes;let W=0;const V=j.getAttributes();for(const L in V)if(V[L].location>=0){let Y=J[L];Y===void 0&&(L==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),L==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor));const se={};se.attribute=Y,Y&&Y.data&&(se.data=Y.data),H[L]=se,W++}s.attributes=H,s.attributesNum=W,s.index=I}function S(){const N=s.newAttributes;for(let F=0,j=N.length;F<j;F++)N[F]=0}function m(N){h(N,0)}function h(N,F){const j=s.newAttributes,I=s.enabledAttributes,H=s.attributeDivisors;j[N]=1,I[N]===0&&(t.enableVertexAttribArray(N),I[N]=1),H[N]!==F&&(t.vertexAttribDivisor(N,F),H[N]=F)}function _(){const N=s.newAttributes,F=s.enabledAttributes;for(let j=0,I=F.length;j<I;j++)F[j]!==N[j]&&(t.disableVertexAttribArray(j),F[j]=0)}function y(N,F,j,I,H,J,W){W===!0?t.vertexAttribIPointer(N,F,j,H,J):t.vertexAttribPointer(N,F,j,I,H,J)}function v(N,F,j,I){S();const H=I.attributes,J=j.getAttributes(),W=F.defaultAttributeValues;for(const V in J){const L=J[V];if(L.location>=0){let B=H[V];if(B===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(B=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(B=N.instanceColor)),B!==void 0){const Y=B.normalized,se=B.itemSize,fe=e.get(B);if(fe===void 0)continue;const ze=fe.buffer,Ve=fe.type,$e=fe.bytesPerElement,Z=Ve===t.INT||Ve===t.UNSIGNED_INT||B.gpuType===Tp;if(B.isInterleavedBufferAttribute){const te=B.data,ye=te.stride,Ge=B.offset;if(te.isInstancedInterleavedBuffer){for(let Ae=0;Ae<L.locationSize;Ae++)h(L.location+Ae,te.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<L.locationSize;Ae++)m(L.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ae=0;Ae<L.locationSize;Ae++)y(L.location+Ae,se/L.locationSize,Ve,Y,ye*$e,(Ge+se/L.locationSize*Ae)*$e,Z)}else{if(B.isInstancedBufferAttribute){for(let te=0;te<L.locationSize;te++)h(L.location+te,B.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let te=0;te<L.locationSize;te++)m(L.location+te);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let te=0;te<L.locationSize;te++)y(L.location+te,se/L.locationSize,Ve,Y,se*$e,se/L.locationSize*te*$e,Z)}}else if(W!==void 0){const Y=W[V];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(L.location,Y);break;case 3:t.vertexAttrib3fv(L.location,Y);break;case 4:t.vertexAttrib4fv(L.location,Y);break;default:t.vertexAttrib1fv(L.location,Y)}}}}_()}function b(){C();for(const N in i){const F=i[N];for(const j in F){const I=F[j];for(const H in I){const J=I[H];for(const W in J)f(J[W].object),delete J[W];delete I[H]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;const F=i[N.id];for(const j in F){const I=F[j];for(const H in I){const J=I[H];for(const W in J)f(J[W].object),delete J[W];delete I[H]}}delete i[N.id]}function A(N){for(const F in i){const j=i[F];for(const I in j){const H=j[I];if(H[N.id]===void 0)continue;const J=H[N.id];for(const W in J)f(J[W].object),delete J[W];delete H[N.id]}}}function M(N){for(const F in i){const j=i[F],I=N.isInstancedMesh===!0?N.id:0,H=j[I];if(H!==void 0){for(const J in H){const W=H[J];for(const V in W)f(W[V].object),delete W[V];delete H[J]}delete j[I],Object.keys(j).length===0&&delete i[F]}}}function C(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:_}}function V2(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function G2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==ii&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const M=A===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Nn&&A!==xi&&!M&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Xe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:b,samples:E}}function j2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ur,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const g=p.length!==0||d||i!==0||r;return r=d,i=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=f(p,d,0)},this.setState=function(p,d,g){const x=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,h=t.get(p);if(!r||x===null||x.length===0||s&&!m)s?f(null):c();else{const _=s?0:i,y=_*4;let v=h.clippingState||null;l.value=v,v=f(x,d,y,g);for(let b=0;b!==y;++b)v[b]=n[b];h.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,d,g,x){const S=p!==null?p.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const h=g+S*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,v=g;y!==S;++y,v+=4)a.copy(p[y]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const $s=4,W2=6,X2=20,$2=256,Ua=new Vp,lg=new et;let bd=null,Ed=0,Td=0,Ad=!1;const q2=new O,Vr=new O;class cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=q2}=s;bd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Ed,Td),this._renderer.xr.enabled=Ad,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ei,format:ii,colorSpace:Hc,depthBuffer:!1},r=ug(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ug(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Y2(s)),this._blurMaterial=Z2(s,e,n),this._ggxMaterial=K2(s,e,n)}return r}_compileMaterial(e){const n=new nt(new Jt,e);this._renderer.compile(n,Ua)}_sceneToCubeUV(e,n,i,r,s){const l=new Rn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,g=p.toneMapping;p.getClearColor(lg),p.toneMapping=Mi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new ni,new io({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let h=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,h=!0):(m.color.copy(lg),h=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const b=this._cubeSize;Ls(r,v*b,y>2?b:0,b,b),p.setRenderTarget(r),h&&p.render(S,l),p.render(e,l)}p.toneMapping=g,p.autoClear=d,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ss||e.mapping===ua;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ls(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ua)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),d=c*1.25,g=p*d,{_lodMax:x}=this,S=this._sizeLods[i],m=3*S*(i>x-$s?i-x+$s:0),h=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=x-n,Ls(s,m,h,3*S,2*S),r.setRenderTarget(s),r.render(o,Ua),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Ls(e,m,h,3*S,2*S),r.setRenderTarget(e),r.render(o,Ua)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],p=3*f*(r>this._lodMax-$s?r-this._lodMax+$s:0),d=4*(this._cubeSize-f);Ls(n,p,d,3*f,2*f),a.setRenderTarget(n),a.render(l,Ua)}}function Y2(t){const e=[],n=[];let i=t;const r=t-$s+1+W2;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,d=6,g=3,x=new Float32Array(g*d*p),S=new Float32Array(g*d*p);for(let h=0;h<p;h++){const _=h%3*2/3-1,y=h>2?0:-1,v=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];x.set(v,g*d*h);for(let b=0;b<d;b++){const E=f[b*2]*2-1,A=f[b*2+1]*2-1;h===0?Vr.set(1,A,E):h===1?Vr.set(-E,1,-A):h===2?Vr.set(-E,A,1):h===3?Vr.set(-1,A,-E):h===4?Vr.set(-E,-1,A):Vr.set(E,A,-1),Vr.toArray(S,(h*d+b)*g)}}const m=new Jt;m.setAttribute("position",new wi(x,g)),m.setAttribute("outputDirection",new wi(S,g)),n.push(new nt(m,null)),i>$s&&i--}return{lodMeshes:n,sizeLods:e}}function ug(t,e,n){const i=new ai(t,e,n);return i.texture.mapping=mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function K2(t,e,n){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Z2(t,e,n){return new Ti({name:"SphericalGaussianBlur",defines:{SAMPLES:X2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function dg(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function fg(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function gu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class j_ extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new R_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ni(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:zi});s.uniforms.tEquirect.value=n;const a=new nt(r,s),o=n.minFilter;return n.minFilter===Yr&&(n.minFilter=ln),new eE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function J2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,g=!1){return d==null?null:g?a(d):s(d)}function s(d){if(d&&d.isTexture){const g=d.mapping;if(g===Xu||g===$u)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const S=new j_(x.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const g=d.mapping,x=g===Xu||g===$u,S=g===ss||g===ua;if(x||S){let m=n.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new cg(t)),m=x?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return x&&_&&_.height>0||S&&_&&l(_)?(i===null&&(i=new cg(t)),m=x?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function o(d,g){return g===Xu?d.mapping=ss:g===$u&&(d.mapping=ua),d}function l(d){let g=0;const x=6;for(let S=0;S<x;S++)d[S]!==void 0&&g++;return g===x}function c(d){const g=d.target;g.removeEventListener("dispose",c);const x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function f(d){const g=d.target;g.removeEventListener("dispose",f);const x=n.get(g);x!==void 0&&(n.delete(g),x.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Q2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ea("WebGLRenderer: "+i+" extension not supported."),r}}}function eA(t,e,n,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER)}function c(p){const d=[],g=p.index,x=p.attributes.position;let S=0;if(x===void 0)return;if(g!==null){const _=g.array;S=g.version;for(let y=0,v=_.length;y<v;y+=3){const b=_[y+0],E=_[y+1],A=_[y+2];d.push(b,E,E,A,A,b)}}else{const _=x.array;S=x.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const b=y+0,E=y+1,A=y+2;d.push(b,E,E,A,A,b)}}const m=new(x.count>=65535?A_:T_)(d,1);m.version=S;const h=s.get(p);h&&e.remove(h),s.set(p,m)}function f(p){const d=s.get(p);if(d){const g=p.index;g!==null&&d.version<g.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function tA(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,d){t.drawElements(i,d,s,p*a),n.update(d,i,1)}function c(p,d,g){g!==0&&(t.drawElementsInstanced(i,d,s,p*a,g),n.update(d,i,g))}function f(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,g);let S=0;for(let m=0;m<g;m++)S+=d[m];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function nA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function iA(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let R=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var g=R;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),S===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*E*4*p),M=new w_(A,b,E,p);M.type=xi,M.needsUpdate=!0;const C=v*4;for(let N=0;N<p;N++){const F=h[N],j=_[N],I=y[N],H=b*E*4*N;for(let J=0;J<F.count;J++){const W=J*C;x===!0&&(r.fromBufferAttribute(F,J),A[H+W+0]=r.x,A[H+W+1]=r.y,A[H+W+2]=r.z,A[H+W+3]=0),S===!0&&(r.fromBufferAttribute(j,J),A[H+W+4]=r.x,A[H+W+5]=r.y,A[H+W+6]=r.z,A[H+W+7]=0),m===!0&&(r.fromBufferAttribute(I,J),A[H+W+8]=r.x,A[H+W+9]=r.y,A[H+W+10]=r.z,A[H+W+11]=I.itemSize===4?r.w:1)}}d={count:p,texture:M,size:new Se(b,E)},i.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function rA(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,p=c.geometry,d=e.get(c,p);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const sA={[l_]:"LINEAR_TONE_MAPPING",[c_]:"REINHARD_TONE_MAPPING",[u_]:"CINEON_TONE_MAPPING",[Ep]:"ACES_FILMIC_TONE_MAPPING",[f_]:"AGX_TONE_MAPPING",[h_]:"NEUTRAL_TONE_MAPPING",[d_]:"CUSTOM_TONE_MAPPING"};function aA(t,e,n,i,r,s){const a=new ai(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Jt;c.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const f=new $b({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new nt(c,f),d=new Vp(-1,1,1,-1,0,1);let g=null,x=null,S=!1,m,h=null,_=[],y=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let E=0;E<_.length;E++){const A=_[E];A.setSize&&A.setSize(v,b)}},this.setEffects=function(v){_=v,y=_.length>0&&_[0].isRenderPass===!0;const b=a.width,E=a.height;_.length>0&&o===null&&(o=new ai(b,E,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new ai(b,E,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){const M=_[A];M.setSize&&M.setSize(b,E)}},this.begin=function(v,b){if(S||v.toneMapping===Mi&&_.length===0)return!1;if(h=b,b!==null){const E=b.width,A=b.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return y===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Mi,!0},this.hasRenderPass=function(){return y},this.end=function(v,b){v.toneMapping=m,S=!0;let E=a,A=o;for(let M=0;M<_.length;M++){const C=_[M];C.enabled!==!1&&(C.render(v,A,E,b),C.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(g!==v.outputColorSpace||x!==v.toneMapping){g=v.outputColorSpace,x=v.toneMapping,f.defines={},lt.getTransfer(g)===mt&&(f.defines.SRGB_TRANSFER="");const M=sA[x];M&&(f.defines[M]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(h),v.render(p,d),h=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const W_=new cn,bh=new Po(1,1),X_=new w_,$_=new V1,q_=new R_,hg=[],pg=[],mg=new Float32Array(16),gg=new Float32Array(9),xg=new Float32Array(4);function ya(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hg[r];if(s===void 0&&(s=new Float32Array(r),hg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xu(t,e){let n=pg[e];n===void 0&&(n=new Int32Array(e),pg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function oA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function cA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function dA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;xg.set(i),t.uniformMatrix2fv(this.addr,!1,xg),Vt(n,i)}}function fA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;gg.set(i),t.uniformMatrix3fv(this.addr,!1,gg),Vt(n,i)}}function hA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;mg.set(i),t.uniformMatrix4fv(this.addr,!1,mg),Vt(n,i)}}function pA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function gA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function vA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function yA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function SA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function MA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(bh.compareFunction=n.isReversedDepthBuffer()?Dp:Lp,s=bh):s=W_,n.setTexture2D(e||s,r)}function wA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$_,r)}function bA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||q_,r)}function EA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||X_,r)}function TA(t){switch(t){case 5126:return oA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return dA;case 35675:return fA;case 35676:return hA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return xA;case 5125:return vA;case 36294:return _A;case 36295:return yA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return EA}}function AA(t,e){t.uniform1fv(this.addr,e)}function CA(t,e){const n=ya(e,this.size,2);t.uniform2fv(this.addr,n)}function RA(t,e){const n=ya(e,this.size,3);t.uniform3fv(this.addr,n)}function NA(t,e){const n=ya(e,this.size,4);t.uniform4fv(this.addr,n)}function PA(t,e){const n=ya(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LA(t,e){const n=ya(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function DA(t,e){const n=ya(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IA(t,e){t.uniform1iv(this.addr,e)}function UA(t,e){t.uniform2iv(this.addr,e)}function FA(t,e){t.uniform3iv(this.addr,e)}function kA(t,e){t.uniform4iv(this.addr,e)}function OA(t,e){t.uniform1uiv(this.addr,e)}function BA(t,e){t.uniform2uiv(this.addr,e)}function zA(t,e){t.uniform3uiv(this.addr,e)}function HA(t,e){t.uniform4uiv(this.addr,e)}function VA(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=bh:a=W_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function GA(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||$_,s[a])}function jA(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||q_,s[a])}function WA(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||X_,s[a])}function XA(t){switch(t){case 5126:return AA;case 35664:return CA;case 35665:return RA;case 35666:return NA;case 35674:return PA;case 35675:return LA;case 35676:return DA;case 5124:case 35670:return IA;case 35667:case 35671:return UA;case 35668:case 35672:return FA;case 35669:case 35673:return kA;case 5125:return OA;case 36294:return BA;case 36295:return zA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return WA}}class $A{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TA(n.type)}}class qA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XA(n.type)}}class YA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function vg(t,e){t.seq.push(e),t.map[e.id]=e}function KA(t,e,n){const i=t.name,r=i.length;for(Cd.lastIndex=0;;){const s=Cd.exec(i),a=Cd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vg(n,c===void 0?new $A(o,t,e):new qA(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new YA(o),vg(n,p)),n=p}}}class dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);KA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function _g(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZA=37297;let JA=0;function QA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const yg=new Ke;function eC(t){lt._getMatrix(yg,lt.workingColorSpace,t);const e=`mat3( ${yg.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case Vc:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Sg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+QA(t.getShaderSource(e),o)}else return s}function tC(t,e){const n=eC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const nC={[l_]:"Linear",[c_]:"Reinhard",[u_]:"Cineon",[Ep]:"ACESFilmic",[f_]:"AgX",[h_]:"Neutral",[d_]:"Custom"};function iC(t,e){const n=nC[e];return n===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jl=new O;function rC(){lt.getLuminanceCoefficients(jl);const t=jl.x.toFixed(4),e=jl.y.toFixed(4),n=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function aC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ja(t){return t!==""}function Mg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(t){return t.replace(lC,uC)}const cC=new Map;function uC(t,e){let n=Qe[e];if(n===void 0){const i=cC.get(e);if(i!==void 0)n=Qe[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Eh(n)}const dC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bg(t){return t.replace(dC,fC)}function fC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Eg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hC={[sc]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function pC(t){return hC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mC={[ss]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE",[mu]:"ENVMAP_TYPE_CUBE_UV"};function gC(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":mC[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const xC={[ua]:"ENVMAP_MODE_REFRACTION"};function vC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":xC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _C={[o_]:"ENVMAP_BLENDING_MULTIPLY",[_1]:"ENVMAP_BLENDING_MIX",[y1]:"ENVMAP_BLENDING_ADD"};function yC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":_C[t.combine]||"ENVMAP_BLENDING_NONE"}function SC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function MC(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=pC(n),c=gC(n),f=vC(n),p=yC(n),d=SC(n),g=sC(n),x=aC(s),S=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ja).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ja).join(`
`),h.length>0&&(h+=`
`)):(m=[Eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),h=[Eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?Qe.tonemapping_pars_fragment:"",n.toneMapping!==Mi?iC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,tC("linearToOutputTexel",n.outputColorSpace),rC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ja).join(`
`)),a=Eh(a),a=Mg(a,n),a=wg(a,n),o=Eh(o),o=Mg(o,n),o=wg(o,n),a=bg(a),o=bg(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===b0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===b0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=_+m+a,v=_+h+o,b=_g(r,r.VERTEX_SHADER,y),E=_g(r,r.FRAGMENT_SHADER,v);r.attachShader(S,b),r.attachShader(S,E),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(N){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(S)||"",j=r.getShaderInfoLog(b)||"",I=r.getShaderInfoLog(E)||"",H=F.trim(),J=j.trim(),W=I.trim();let V=!0,L=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,b,E);else{const B=Sg(r,b,"vertex"),Y=Sg(r,E,"fragment");dt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+B+`
`+Y)}else H!==""?Xe("WebGLProgram: Program Info Log:",H):(J===""||W==="")&&(L=!1);L&&(N.diagnostics={runnable:V,programLog:H,vertexShader:{log:J,prefix:m},fragmentShader:{log:W,prefix:h}})}r.deleteShader(b),r.deleteShader(E),M=new dc(r,S),C=oC(r,S)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(S,ZA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JA++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=E,this}let wC=0;class bC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new EC(e),n.set(e,i)),i}}class EC{constructor(e){this.id=wC++,this.code=e,this.usedTimes=0}}function TC(t){return t===as||t===Bc||t===zc}function AC(t,e,n,i,r,s){const a=new b_,o=new bC,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function S(M,C,R,N,F,j){const I=N.fog,H=F.geometry,J=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,V=e.get(M.envMap||J,W),L=V&&V.mapping===mu?V.image.height:null,B=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&Xe("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Y=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Y!==void 0?Y.length:0;let fe=0;H.morphAttributes.position!==void 0&&(fe=1),H.morphAttributes.normal!==void 0&&(fe=2),H.morphAttributes.color!==void 0&&(fe=3);let ze,Ve,$e,Z;if(B){const pt=pi[B];ze=pt.vertexShader,Ve=pt.fragmentShader}else{ze=M.vertexShader,Ve=M.fragmentShader;const pt=o.getVertexShaderStage(M),Te=o.getFragmentShaderStage(M);o.update(M,pt,Te),$e=pt.id,Z=Te.id}const te=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),Ge=F.isInstancedMesh===!0,Ae=F.isBatchedMesh===!0,We=!!M.map,rt=!!M.matcap,re=!!V,le=!!M.aoMap,oe=!!M.lightMap,ue=!!M.bumpMap&&M.wireframe===!1,pe=!!M.normalMap,ke=!!M.displacementMap,Pe=!!M.emissiveMap,je=!!M.metalnessMap,qe=!!M.roughnessMap,D=M.anisotropy>0,Ze=M.clearcoat>0,tt=M.dispersion>0,P=M.retroreflectivity>0,w=M.iridescence>0,G=M.sheen>0,q=M.transmission>0,Q=D&&!!M.anisotropyMap,de=Ze&&!!M.clearcoatMap,he=Ze&&!!M.clearcoatNormalMap,ee=Ze&&!!M.clearcoatRoughnessMap,ie=w&&!!M.iridescenceMap,ge=w&&!!M.iridescenceThicknessMap,Fe=G&&!!M.sheenColorMap,_e=G&&!!M.sheenRoughnessMap,me=!!M.specularMap,De=!!M.specularColorMap,He=!!M.specularIntensityMap,Ye=q&&!!M.transmissionMap,k=q&&!!M.thicknessMap,xe=!!M.gradientMap,ne=!!M.alphaMap,ve=M.alphaTest>0,we=!!M.alphaHash,ae=!!M.extensions;let Be=Mi;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Be=t.toneMapping);const Le={shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:ze,fragmentShader:Ve,defines:M.defines,customVertexShaderID:$e,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&F._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&F.instanceColor!==null,instancingMorph:Ge&&F.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:rt,envMap:re,envMapMode:re&&V.mapping,envMapCubeUVHeight:L,aoMap:le,lightMap:oe,bumpMap:ue,normalMap:pe,displacementMap:ke,emissiveMap:Pe,normalMapObjectSpace:pe&&M.normalMapType===w1,normalMapTangentSpace:pe&&M.normalMapType===xh,packedNormalMap:pe&&M.normalMapType===xh&&TC(M.normalMap.format),metalnessMap:je,roughnessMap:qe,anisotropy:D,anisotropyMap:Q,clearcoat:Ze,clearcoatMap:de,clearcoatNormalMap:he,clearcoatRoughnessMap:ee,dispersion:tt,retroreflection:P,iridescence:w,iridescenceMap:ie,iridescenceThicknessMap:ge,sheen:G,sheenColorMap:Fe,sheenRoughnessMap:_e,specularMap:me,specularColorMap:De,specularIntensityMap:He,transmission:q,transmissionMap:Ye,thicknessMap:k,gradientMap:xe,opaque:M.transparent===!1&&M.blending===no&&M.alphaToCoverage===!1,alphaMap:ne,alphaTest:ve,alphaHash:we,combine:M.combine,mapUv:We&&x(M.map.channel),aoMapUv:le&&x(M.aoMap.channel),lightMapUv:oe&&x(M.lightMap.channel),bumpMapUv:ue&&x(M.bumpMap.channel),normalMapUv:pe&&x(M.normalMap.channel),displacementMapUv:ke&&x(M.displacementMap.channel),emissiveMapUv:Pe&&x(M.emissiveMap.channel),metalnessMapUv:je&&x(M.metalnessMap.channel),roughnessMapUv:qe&&x(M.roughnessMap.channel),anisotropyMapUv:Q&&x(M.anisotropyMap.channel),clearcoatMapUv:de&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(M.sheenRoughnessMap.channel),specularMapUv:me&&x(M.specularMap.channel),specularColorMapUv:De&&x(M.specularColorMap.channel),specularIntensityMapUv:He&&x(M.specularIntensityMap.channel),transmissionMapUv:Ye&&x(M.transmissionMap.channel),thicknessMapUv:k&&x(M.thicknessMap.channel),alphaMapUv:ne&&x(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(pe||D),vertexNormals:!!H.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(We||ne),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||H.attributes.normal===void 0&&pe===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:fe,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Be,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:Pe&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gi,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ae&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&M.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function m(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)C.push(R),C.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(h(C,M),_(C,M),C.push(t.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function h(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function _(M,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function y(M){const C=g[M.type];let R;if(C){const N=pi[C];R=jb.clone(N.uniforms)}else R=M.uniforms;return R}function v(M,C){let R=f.get(C);return R!==void 0?++R.usedTimes:(R=new MC(t,C,M,r),c.push(R),f.set(C,R)),R}function b(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),f.delete(M.cacheKey),M.destroy()}}function E(M){o.remove(M)}function A(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:A}}function CC(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function RC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Tg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ag(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,x,S,m,h){let _=t[e];return _===void 0?(_={id:d.id,object:d,geometry:g,material:x,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:h},t[e]=_):(_.id=d.id,_.object=d,_.geometry=g,_.material=x,_.materialVariant=a(d),_.groupOrder=S,_.renderOrder=d.renderOrder,_.z=m,_.group=h),e++,_}function l(d,g,x,S,m,h,_){_.reversedDepth===!0&&(m=-m);const y=o(d,g,x,S,m,h);x.transmission>0?i.push(y):x.transparent===!0?r.push(y):n.push(y)}function c(d,g,x,S,m,h){const _=o(d,g,x,S,m,h);x.transmission>0?i.unshift(_):x.transparent===!0?r.unshift(_):n.unshift(_)}function f(d,g){n.length>1&&n.sort(d||RC),i.length>1&&i.sort(g||Tg),r.length>1&&r.sort(g||Tg)}function p(){for(let d=e,g=t.length;d<g;d++){const x=t[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:f}}function NC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ag,t.set(i,[a])):r>=s.length?(a=new Ag,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function PC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new O,color:new et};break;case"SpotLight":n={position:new O,direction:new O,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function LC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DC=0;function IC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UC(t){const e=new PC,n=LC(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new bt,a=new bt;function o(c){let f=0,p=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,x=0,S=0,m=0,h=0,_=0,y=0,v=0,b=0,E=0,A=0,M=0,C=0,R=0;c.sort(IC);for(let F=0,j=c.length;F<j;F++){const I=c[F],H=I.color,J=I.intensity,W=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===as?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=H.r*J,p+=H.g*J,d+=H.b*J;else if(I.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(I.sh.coefficients[L],J);R++}else if(I.isSunLight){const L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,Y=n.get(I);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),i.sunShadow[x]=Y,i.sunShadowMap[x]=V;const se=B.getViewportCount();for(let fe=0;fe<se;fe++)i.sunShadowMatrix[S+fe]=B.getMatrix(fe),i.sunShadowCascade[S+fe]=B._cascadeData[fe];S+=se,x++}i.sun[g]=L,g++}else if(I.isDirectionalLight){const L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,Y=n.get(I);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=I.shadow.matrix,b++}i.directional[m]=L,m++}else if(I.isSpotLight){const L=e.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(H).multiplyScalar(J),L.distance=W,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,i.spot[_]=L;const B=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,B.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[_]=B.matrix,I.castShadow){const Y=n.get(I);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=V,A++}_++}else if(I.isRectAreaLight){const L=e.get(I);L.color.copy(H).multiplyScalar(J),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=L,y++}else if(I.isPointLight){const L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){const B=I.shadow,Y=n.get(I);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,i.pointShadow[h]=Y,i.pointShadowMap[h]=V,i.pointShadowMatrix[h]=I.shadow.matrix,E++}i.point[h]=L,h++}else if(I.isHemisphereLight){const L=e.get(I);L.skyColor.copy(I.color).multiplyScalar(J),L.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[v]=L,v++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=d;const N=i.hash;(N.sunLength!==g||N.directionalLength!==m||N.pointLength!==h||N.spotLength!==_||N.rectAreaLength!==y||N.hemiLength!==v||N.numSunShadows!==x||N.numDirectionalShadows!==b||N.numPointShadows!==E||N.numSpotShadows!==A||N.numSpotMaps!==M||N.numLightProbes!==R)&&(i.sun.length=g,i.directional.length=m,i.spot.length=_,i.rectArea.length=y,i.point.length=h,i.hemi.length=v,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+M-C,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,N.sunLength=g,N.directionalLength=m,N.pointLength=h,N.spotLength=_,N.rectAreaLength=y,N.hemiLength=v,N.numSunShadows=x,N.numDirectionalShadows=b,N.numPointShadows=E,N.numSpotShadows=A,N.numSpotMaps=M,N.numLightProbes=R,i.version=DC++)}function l(c,f){let p=0,d=0,g=0,x=0,S=0,m=0;const h=f.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){const v=c[_];if(v.isSunLight){const b=i.sun[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(h),p++}else if(v.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),d++}else if(v.isSpotLight){const b=i.spot[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),x++}else if(v.isRectAreaLight){const b=i.rectArea[S];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(h),a.identity(),s.copy(v.matrixWorld),s.premultiply(h),a.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){const b=i.point[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(h),g++}else if(v.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:i}}function Cg(t){const e=new UC(t),n=[],i=[],r=[];function s(d){p.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function FC(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Cg(t),e.set(r,[o])):s>=a.length?(o=new Cg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const kC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OC=`uniform sampler2D shadow_pass;
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
}`,BC=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],zC=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Rg=new bt,Fa=new O,Rd=new O;function HC(t,e,n){let i=new kp;const r=new Se,s=new Se,a=new At,o=new qb,l=new Yb,c={},f=n.maxTextureSize,p={[rs]:bn,[bn]:rs,[gi]:gi},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:kC,fragmentShader:OC}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Jt;x.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new nt(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let h=this.type;this.render=function(E,A,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===e1&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sc);const C=t.getRenderTarget(),R=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),F=t.state;F.setBlending(zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const j=h!==this.type;j&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=E.length;I<H;I++){const J=E[I],W=J.shadow;if(W===void 0){Xe("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const V=W.getFrameExtents();r.multiply(V),s.copy(W.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,W.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,W.mapSize.y=s.y));const L=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=L,W.map===null||j===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ha){if(J.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ai(r.x,r.y,{format:as,type:Ei,minFilter:ln,magFilter:ln,generateMipmaps:!1}),W.map.texture.name=J.name+".shadowMap",W.map.depthTexture=new Po(r.x,r.y,xi),W.map.depthTexture.name=J.name+".shadowMapDepth",W.map.depthTexture.format=Xi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt}else J.isPointLight?(W.map=new j_(r.x),W.map.depthTexture=new cb(r.x,bi)):(W.map=new ai(r.x,r.y),W.map.depthTexture=new Po(r.x,r.y,bi)),W.map.depthTexture.name=J.name+".shadowMap",W.map.depthTexture.format=Xi,this.type===sc?(W.map.depthTexture.compareFunction=L?Dp:Lp,W.map.depthTexture.minFilter=ln,W.map.depthTexture.magFilter=ln):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);const B=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();J.isPointLight!==!0&&W.updateMatrices(J,M);for(let Y=0;Y<B;Y++){const se=W.getCamera(Y);if(J.isPointLight){const fe=W.camera,ze=W.matrix,Ve=J.distance||fe.far;Ve!==fe.far&&(fe.far=Ve,fe.updateProjectionMatrix()),Fa.setFromMatrixPosition(J.matrixWorld),fe.position.copy(Fa),Rd.copy(fe.position),Rd.add(BC[Y]),fe.up.copy(zC[Y]),fe.lookAt(Rd),fe.updateMatrixWorld(),ze.makeTranslation(-Fa.x,-Fa.y,-Fa.z),Rg.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Rg,fe.coordinateSystem,fe.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,Y),t.clear();else{Y===0&&(t.setRenderTarget(W.map),t.clear());const fe=W.getViewport(Y);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),F.viewport(a)}i=W.getFrustum(Y),v(A,M,se,J,this.type)}W.isPointLightShadow!==!0&&this.type===Ha&&_(W,M),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(C,R,N)};function _(E,A){const M=e.update(S);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null?E.mapPass=new ai(r.x,r.y,{format:as,type:Ei}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(A,null,M,d,S,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value.set(E.map.width,E.map.height),g.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(A,null,M,g,S,null)}function y(E,A,M,C){let R=null;const N=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)R=N;else if(R=M.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=R.uuid,j=A.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let H=I[j];H===void 0&&(H=R.clone(),I[j]=H,A.addEventListener("dispose",b)),R=H}if(R.visible=A.visible,R.wireframe=A.wireframe,C===Ha?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:p[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=t.properties.get(R);F.light=M}return R}function v(E,A,M,C,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Ha)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const j=e.update(E),I=E.material;if(Array.isArray(I)){const H=j.groups;for(let J=0,W=H.length;J<W;J++){const V=H[J],L=I[V.materialIndex];if(L&&L.visible){const B=y(E,L,C,R);E.onBeforeShadow(t,E,A,M,j,B,V),t.renderBufferDirect(M,null,j,B,E,V),E.onAfterShadow(t,E,A,M,j,B,V)}}}else if(I.visible){const H=y(E,I,C,R);E.onBeforeShadow(t,E,A,M,j,H,null),t.renderBufferDirect(M,null,j,H,E,null),E.onAfterShadow(t,E,A,M,j,H,null)}}const F=E.children;for(let j=0,I=F.length;j<I;j++)v(F[j],A,M,C,R)}function b(E){E.target.removeEventListener("dispose",b);for(const M in c){const C=c[M],R=E.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function VC(t,e){function n(){let k=!1;const xe=new At;let ne=null;const ve=new At(0,0,0,0);return{setMask:function(we){ne!==we&&!k&&(t.colorMask(we,we,we,we),ne=we)},setLocked:function(we){k=we},setClear:function(we,ae,Be,Le,pt){pt===!0&&(we*=Le,ae*=Le,Be*=Le),xe.set(we,ae,Be,Le),ve.equals(xe)===!1&&(t.clearColor(we,ae,Be,Le),ve.copy(xe))},reset:function(){k=!1,ne=null,ve.set(-1,0,0,0)}}}function i(){let k=!1,xe=!1,ne=null,ve=null,we=null;return{setReversed:function(ae){if(xe!==ae){const Be=e.get("EXT_clip_control");ae?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),xe=ae;const Le=we;we=null,this.setClear(Le)}},getReversed:function(){return xe},setTest:function(ae){ae?te(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!k&&(t.depthMask(ae),ne=ae)},setFunc:function(ae){if(xe&&(ae=U1[ae]),ve!==ae){switch(ae){case Lf:t.depthFunc(t.NEVER);break;case Df:t.depthFunc(t.ALWAYS);break;case If:t.depthFunc(t.LESS);break;case Ao:t.depthFunc(t.LEQUAL);break;case Uf:t.depthFunc(t.EQUAL);break;case Ff:t.depthFunc(t.GEQUAL);break;case kf:t.depthFunc(t.GREATER);break;case Of:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=ae}},setLocked:function(ae){k=ae},setClear:function(ae){we!==ae&&(we=ae,xe&&(ae=1-ae),t.clearDepth(ae))},reset:function(){k=!1,ne=null,ve=null,we=null,xe=!1}}}function r(){let k=!1,xe=null,ne=null,ve=null,we=null,ae=null,Be=null,Le=null,pt=null;return{setTest:function(Te){k||(Te?te(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(Te){xe!==Te&&!k&&(t.stencilMask(Te),xe=Te)},setFunc:function(Te,st,ct){(ne!==Te||ve!==st||we!==ct)&&(t.stencilFunc(Te,st,ct),ne=Te,ve=st,we=ct)},setOp:function(Te,st,ct){(ae!==Te||Be!==st||Le!==ct)&&(t.stencilOp(Te,st,ct),ae=Te,Be=st,Le=ct)},setLocked:function(Te){k=Te},setClear:function(Te){pt!==Te&&(t.clearStencil(Te),pt=Te)},reset:function(){k=!1,xe=null,ne=null,ve=null,we=null,ae=null,Be=null,Le=null,pt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},p={},d={},g=new WeakMap,x=[],S=null,m=!1,h=null,_=null,y=null,v=null,b=null,E=null,A=null,M=new et(0,0,0),C=0,R=!1,N=null,F=null,j=null,I=null,H=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,V=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(L)[1]),W=V>=1):L.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),W=V>=2);let B=null,Y={};const se=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),ze=new At().fromArray(se),Ve=new At().fromArray(fe);function $e(k,xe,ne,ve){const we=new Uint8Array(4),ae=t.createTexture();t.bindTexture(k,ae),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<ne;Be++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(xe+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return ae}const Z={};Z[t.TEXTURE_2D]=$e(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=$e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=$e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=$e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(t.DEPTH_TEST),a.setFunc(Ao),ue(!1),pe(S0),te(t.CULL_FACE),le(zi);function te(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function ye(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function Ge(k,xe){return d[k]!==xe?(t.bindFramebuffer(k,xe),d[k]=xe,k===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=xe),k===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ae(k,xe){let ne=x,ve=!1;if(k){ne=g.get(xe),ne===void 0&&(ne=[],g.set(xe,ne));const we=k.textures;if(ne.length!==we.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Be=we.length;ae<Be;ae++)ne[ae]=t.COLOR_ATTACHMENT0+ae;ne.length=we.length,ve=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ne)}function We(k){return S!==k?(t.useProgram(k),S=k,!0):!1}const rt={[Ds]:t.FUNC_ADD,[n1]:t.FUNC_SUBTRACT,[i1]:t.FUNC_REVERSE_SUBTRACT};rt[r1]=t.MIN,rt[s1]=t.MAX;const re={[a1]:t.ZERO,[o1]:t.ONE,[l1]:t.SRC_COLOR,[s_]:t.SRC_ALPHA,[p1]:t.SRC_ALPHA_SATURATE,[f1]:t.DST_COLOR,[u1]:t.DST_ALPHA,[c1]:t.ONE_MINUS_SRC_COLOR,[a_]:t.ONE_MINUS_SRC_ALPHA,[h1]:t.ONE_MINUS_DST_COLOR,[d1]:t.ONE_MINUS_DST_ALPHA,[m1]:t.CONSTANT_COLOR,[g1]:t.ONE_MINUS_CONSTANT_COLOR,[x1]:t.CONSTANT_ALPHA,[v1]:t.ONE_MINUS_CONSTANT_ALPHA};function le(k,xe,ne,ve,we,ae,Be,Le,pt,Te){if(k===zi){m===!0&&(ye(t.BLEND),m=!1);return}if(m===!1&&(te(t.BLEND),m=!0),k!==t1){if(k!==h||Te!==R){if((_!==Ds||b!==Ds)&&(t.blendEquation(t.FUNC_ADD),_=Ds,b=Ds),Te)switch(k){case no:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pf:t.blendFunc(t.ONE,t.ONE);break;case M0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case w0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:dt("WebGLState: Invalid blending: ",k);break}else switch(k){case no:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case M0:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w0:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",k);break}y=null,v=null,E=null,A=null,M.set(0,0,0),C=0,h=k,R=Te}return}we=we||xe,ae=ae||ne,Be=Be||ve,(xe!==_||we!==b)&&(t.blendEquationSeparate(rt[xe],rt[we]),_=xe,b=we),(ne!==y||ve!==v||ae!==E||Be!==A)&&(t.blendFuncSeparate(re[ne],re[ve],re[ae],re[Be]),y=ne,v=ve,E=ae,A=Be),(Le.equals(M)===!1||pt!==C)&&(t.blendColor(Le.r,Le.g,Le.b,pt),M.copy(Le),C=pt),h=k,R=!1}function oe(k,xe){k.side===gi?ye(t.CULL_FACE):te(t.CULL_FACE);let ne=k.side===bn;xe&&(ne=!ne),ue(ne),k.blending===no&&k.transparent===!1?le(zi):le(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const ve=k.stencilWrite;o.setTest(ve),ve&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function ue(k){N!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),N=k)}function pe(k){k!==Jw?(te(t.CULL_FACE),k!==F&&(k===S0?t.cullFace(t.BACK):k===Qw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),F=k}function ke(k){k!==j&&(W&&t.lineWidth(k),j=k)}function Pe(k,xe,ne){k?(te(t.POLYGON_OFFSET_FILL),(I!==xe||H!==ne)&&(I=xe,H=ne,a.getReversed()&&(xe=-xe),t.polygonOffset(xe,ne))):ye(t.POLYGON_OFFSET_FILL)}function je(k){k?te(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function qe(k){k===void 0&&(k=t.TEXTURE0+J-1),B!==k&&(t.activeTexture(k),B=k)}function D(k,xe,ne){ne===void 0&&(B===null?ne=t.TEXTURE0+J-1:ne=B);let ve=Y[ne];ve===void 0&&(ve={type:void 0,texture:void 0},Y[ne]=ve),(ve.type!==k||ve.texture!==xe)&&(B!==ne&&(t.activeTexture(ne),B=ne),t.bindTexture(k,xe||Z[k]),ve.type=k,ve.texture=xe)}function Ze(){const k=Y[B];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(k){dt("WebGLState:",k)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(k){dt("WebGLState:",k)}}function w(){try{t.texSubImage2D(...arguments)}catch(k){dt("WebGLState:",k)}}function G(){try{t.texSubImage3D(...arguments)}catch(k){dt("WebGLState:",k)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(k){dt("WebGLState:",k)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(k){dt("WebGLState:",k)}}function de(){try{t.texStorage2D(...arguments)}catch(k){dt("WebGLState:",k)}}function he(){try{t.texStorage3D(...arguments)}catch(k){dt("WebGLState:",k)}}function ee(){try{t.texImage2D(...arguments)}catch(k){dt("WebGLState:",k)}}function ie(){try{t.texImage3D(...arguments)}catch(k){dt("WebGLState:",k)}}function ge(k){return p[k]!==void 0?p[k]:t.getParameter(k)}function Fe(k,xe){p[k]!==xe&&(t.pixelStorei(k,xe),p[k]=xe)}function _e(k){ze.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ze.copy(k))}function me(k){Ve.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Ve.copy(k))}function De(k,xe){let ne=c.get(xe);ne===void 0&&(ne=new WeakMap,c.set(xe,ne));let ve=ne.get(k);ve===void 0&&(ve=t.getUniformBlockIndex(xe,k.name),ne.set(k,ve))}function He(k,xe){const ve=c.get(xe).get(k);l.get(xe)!==ve&&(t.uniformBlockBinding(xe,ve,k.__bindingPointIndex),l.set(xe,ve))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},B=null,Y={},d={},g=new WeakMap,x=[],S=null,m=!1,h=null,_=null,y=null,v=null,b=null,E=null,A=null,M=new et(0,0,0),C=0,R=!1,N=null,F=null,j=null,I=null,H=null,ze.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:Ge,drawBuffers:Ae,useProgram:We,setBlending:le,setMaterial:oe,setFlipSided:ue,setCullFace:pe,setLineWidth:ke,setPolygonOffset:Pe,setScissorTest:je,activeTexture:qe,bindTexture:D,unbindTexture:Ze,compressedTexImage2D:tt,compressedTexImage3D:P,texImage2D:ee,texImage3D:ie,pixelStorei:Fe,getParameter:ge,updateUBOMapping:De,uniformBlockBinding:He,texStorage2D:de,texStorage3D:he,texSubImage2D:w,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:_e,viewport:me,reset:Ye}}function GC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,f=new WeakMap,p=new Set;let d;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,w){return x?new OffscreenCanvas(P,w):Gc("canvas")}function m(P,w,G){let q=1;const Q=tt(P);if((Q.width>G||Q.height>G)&&(q=G/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(q*Q.width),he=Math.floor(q*Q.height);d===void 0&&(d=S(de,he));const ee=w?S(de,he):d;return ee.width=de,ee.height=he,ee.getContext("2d").drawImage(P,0,0,de,he),Xe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+de+"x"+he+")."),ee}else return"data"in P&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function h(P){return P.generateMipmaps}function _(P){t.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(P,w,G,q,Q,de=!1){if(P!==null){if(t[P]!==void 0)return t[P];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he;q&&(he=e.get("EXT_texture_norm16"),he||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=w;if(w===t.RED&&(G===t.FLOAT&&(ee=t.R32F),G===t.HALF_FLOAT&&(ee=t.R16F),G===t.UNSIGNED_BYTE&&(ee=t.R8),G===t.UNSIGNED_SHORT&&he&&(ee=he.R16_EXT),G===t.SHORT&&he&&(ee=he.R16_SNORM_EXT)),w===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.R8UI),G===t.UNSIGNED_SHORT&&(ee=t.R16UI),G===t.UNSIGNED_INT&&(ee=t.R32UI),G===t.BYTE&&(ee=t.R8I),G===t.SHORT&&(ee=t.R16I),G===t.INT&&(ee=t.R32I)),w===t.RG&&(G===t.FLOAT&&(ee=t.RG32F),G===t.HALF_FLOAT&&(ee=t.RG16F),G===t.UNSIGNED_BYTE&&(ee=t.RG8),G===t.UNSIGNED_SHORT&&he&&(ee=he.RG16_EXT),G===t.SHORT&&he&&(ee=he.RG16_SNORM_EXT)),w===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RG8UI),G===t.UNSIGNED_SHORT&&(ee=t.RG16UI),G===t.UNSIGNED_INT&&(ee=t.RG32UI),G===t.BYTE&&(ee=t.RG8I),G===t.SHORT&&(ee=t.RG16I),G===t.INT&&(ee=t.RG32I)),w===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),G===t.UNSIGNED_INT&&(ee=t.RGB32UI),G===t.BYTE&&(ee=t.RGB8I),G===t.SHORT&&(ee=t.RGB16I),G===t.INT&&(ee=t.RGB32I)),w===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),G===t.UNSIGNED_INT&&(ee=t.RGBA32UI),G===t.BYTE&&(ee=t.RGBA8I),G===t.SHORT&&(ee=t.RGBA16I),G===t.INT&&(ee=t.RGBA32I)),w===t.RGB&&(G===t.UNSIGNED_SHORT&&he&&(ee=he.RGB16_EXT),G===t.SHORT&&he&&(ee=he.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),w===t.RGBA){const ie=de?Vc:lt.getTransfer(Q);G===t.FLOAT&&(ee=t.RGBA32F),G===t.HALF_FLOAT&&(ee=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ee=ie===mt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&he&&(ee=he.RGBA16_EXT),G===t.SHORT&&he&&(ee=he.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(P,w){let G;return P?w===null||w===bi||w===Ro?G=t.DEPTH24_STENCIL8:w===xi?G=t.DEPTH32F_STENCIL8:w===Co&&(G=t.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===bi||w===Ro?G=t.DEPTH_COMPONENT24:w===xi?G=t.DEPTH_COMPONENT32F:w===Co&&(G=t.DEPTH_COMPONENT16),G}function E(P,w){return h(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yt&&P.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function A(P){const w=P.target;w.removeEventListener("dispose",A),C(w),w.isVideoTexture&&f.delete(w),w.isHTMLTexture&&p.delete(w)}function M(P){const w=P.target;w.removeEventListener("dispose",M),N(w)}function C(P){const w=i.get(P);if(w.__webglInit===void 0)return;const G=P.source,q=g.get(G);if(q){const Q=q[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(P),Object.keys(q).length===0&&g.delete(G)}i.remove(P)}function R(P){const w=i.get(P);t.deleteTexture(w.__webglTexture);const G=P.source,q=g.get(G);delete q[w.__cacheKey],a.memory.textures--}function N(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(w.__webglFramebuffer[q]))for(let Q=0;Q<w.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(w.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(w.__webglFramebuffer[q]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[q])}else{if(Array.isArray(w.__webglFramebuffer))for(let q=0;q<w.__webglFramebuffer.length;q++)t.deleteFramebuffer(w.__webglFramebuffer[q]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let q=0;q<w.__webglColorRenderbuffer.length;q++)w.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[q]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=P.textures;for(let q=0,Q=G.length;q<Q;q++){const de=i.get(G[q]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(G[q])}i.remove(P)}let F=0;function j(){F=0}function I(){return F}function H(P){F=P}function J(){const P=F;return P>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,P}function W(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function V(P,w){const G=i.get(P);if(P.isVideoTexture&&D(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const q=P.image;if(q===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(G,P,w);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+w)}function L(P,w){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){ye(G,P,w);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+w)}function B(P,w){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){ye(G,P,w);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+w)}function Y(P,w){const G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Ge(G,P,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+w)}const se={[Bf]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[zf]:t.MIRRORED_REPEAT},fe={[Yt]:t.NEAREST,[S1]:t.NEAREST_MIPMAP_NEAREST,[fl]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[qu]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},ze={[E1]:t.NEVER,[N1]:t.ALWAYS,[T1]:t.LESS,[Lp]:t.LEQUAL,[A1]:t.EQUAL,[Dp]:t.GEQUAL,[C1]:t.GREATER,[R1]:t.NOTEQUAL};function Ve(P,w){if(w.type===xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ln||w.magFilter===qu||w.magFilter===fl||w.magFilter===Yr||w.minFilter===ln||w.minFilter===qu||w.minFilter===fl||w.minFilter===Yr)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,se[w.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,se[w.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,se[w.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,fe[w.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,fe[w.minFilter]),w.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ze[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yt||w.minFilter!==fl&&w.minFilter!==Yr||w.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function $e(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",A));const q=w.source;let Q=g.get(q);Q===void 0&&(Q={},g.set(q,Q));const de=W(w);if(de!==P.__cacheKey){Q[de]===void 0&&(Q[de]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[de].usedTimes++;const he=Q[P.__cacheKey];he!==void 0&&(Q[P.__cacheKey].usedTimes--,he.usedTimes===0&&R(w)),P.__cacheKey=de,P.__webglTexture=Q[de].texture}return G}function Z(P,w,G){return Math.floor(Math.floor(P/G)/w)}function te(P,w,G,q){const de=P.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,G,q,w.data);else{de.sort((Fe,_e)=>Fe.start-_e.start);let he=0;for(let Fe=1;Fe<de.length;Fe++){const _e=de[he],me=de[Fe],De=_e.start+_e.count,He=Z(me.start,w.width,4),Ye=Z(_e.start,w.width,4);me.start<=De+1&&He===Ye&&Z(me.start+me.count-1,w.width,4)===He?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++he,de[he]=me)}de.length=he+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let Fe=0,_e=de.length;Fe<_e;Fe++){const me=de[Fe],De=Math.floor(me.start/4),He=Math.ceil(me.count/4),Ye=De%w.width,k=Math.floor(De/w.width),xe=He,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,Ye,k,xe,ne,G,q,w.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function ye(P,w,G){let q=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(q=t.TEXTURE_3D);const Q=$e(P,w),de=w.source;n.bindTexture(q,P.__webglTexture,t.TEXTURE0+G);const he=i.get(de);if(de.version!==he.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ne=lt.getPrimaries(lt.workingColorSpace),ve=w.colorSpace===gr?null:lt.getPrimaries(w.colorSpace),we=w.colorSpace===gr||ne===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment);let ie=m(w.image,!1,r.maxTextureSize);ie=Ze(w,ie);const ge=s.convert(w.format,w.colorSpace),Fe=s.convert(w.type);let _e=v(w.internalFormat,ge,Fe,w.normalized,w.colorSpace,w.isVideoTexture);Ve(q,w);let me;const De=w.mipmaps,He=w.isVideoTexture!==!0,Ye=he.__version===void 0||Q===!0,k=de.dataReady,xe=E(w,ie);if(w.isDepthTexture)_e=b(w.format===Kr,w.type),Ye&&(He?n.texStorage2D(t.TEXTURE_2D,1,_e,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,_e,ie.width,ie.height,0,ge,Fe,null));else if(w.isDataTexture)if(De.length>0){He&&Ye&&n.texStorage2D(t.TEXTURE_2D,xe,_e,De[0].width,De[0].height);for(let ne=0,ve=De.length;ne<ve;ne++)me=De[ne],He?k&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,ge,Fe,me.data):n.texImage2D(t.TEXTURE_2D,ne,_e,me.width,me.height,0,ge,Fe,me.data);w.generateMipmaps=!1}else He?(Ye&&n.texStorage2D(t.TEXTURE_2D,xe,_e,ie.width,ie.height),k&&te(w,ie,ge,Fe)):n.texImage2D(t.TEXTURE_2D,0,_e,ie.width,ie.height,0,ge,Fe,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,_e,De[0].width,De[0].height,ie.depth);for(let ne=0,ve=De.length;ne<ve;ne++)if(me=De[ne],w.format!==ii)if(ge!==null)if(He){if(k)if(w.layerUpdates.size>0){const we=og(me.width,me.height,w.format,w.type);for(const ae of w.layerUpdates){const Be=me.data.subarray(ae*we/me.data.BYTES_PER_ELEMENT,(ae+1)*we/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,ae,me.width,me.height,1,ge,Be)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,ie.depth,ge,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,_e,me.width,me.height,ie.depth,0,me.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,ie.depth,ge,Fe,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,_e,me.width,me.height,ie.depth,0,ge,Fe,me.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{He&&Ye&&n.texStorage2D(t.TEXTURE_2D,xe,_e,De[0].width,De[0].height);for(let ne=0,ve=De.length;ne<ve;ne++)me=De[ne],w.format!==ii?ge!==null?He?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,ge,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,_e,me.width,me.height,0,me.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?k&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,ge,Fe,me.data):n.texImage2D(t.TEXTURE_2D,ne,_e,me.width,me.height,0,ge,Fe,me.data)}else if(w.isDataArrayTexture)if(He){if(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,_e,ie.width,ie.height,ie.depth),k)if(w.layerUpdates.size>0){const ne=og(ie.width,ie.height,w.format,w.type);for(const ve of w.layerUpdates){const we=ie.data.subarray(ve*ne/ie.data.BYTES_PER_ELEMENT,(ve+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,ie.width,ie.height,1,ge,Fe,we)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Fe,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,ie.width,ie.height,ie.depth,0,ge,Fe,ie.data);else if(w.isData3DTexture)He?(Ye&&n.texStorage3D(t.TEXTURE_3D,xe,_e,ie.width,ie.height,ie.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Fe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,_e,ie.width,ie.height,ie.depth,0,ge,Fe,ie.data);else if(w.isFramebufferTexture){if(Ye)if(He)n.texStorage2D(t.TEXTURE_2D,xe,_e,ie.width,ie.height);else{let ne=ie.width,ve=ie.height;for(let we=0;we<xe;we++)n.texImage2D(t.TEXTURE_2D,we,_e,ne,ve,0,ge,Fe,null),ne>>=1,ve>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),p.add(w),ne.onpaint=ve=>{const we=ve.changedElements;for(const ae of p)we.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const we=t.RGBA,ae=t.RGBA,Be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,we,ae,Be,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(He&&Ye){const ne=tt(De[0]);n.texStorage2D(t.TEXTURE_2D,xe,_e,ne.width,ne.height)}for(let ne=0,ve=De.length;ne<ve;ne++)me=De[ne],He?k&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ge,Fe,me):n.texImage2D(t.TEXTURE_2D,ne,_e,ge,Fe,me);w.generateMipmaps=!1}else if(He){if(Ye){const ne=tt(ie);n.texStorage2D(t.TEXTURE_2D,xe,_e,ne.width,ne.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Fe,ie)}else n.texImage2D(t.TEXTURE_2D,0,_e,ge,Fe,ie);h(w)&&_(q),he.__version=de.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ge(P,w,G){if(w.image.length!==6)return;const q=$e(P,w),Q=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+G);const de=i.get(Q);if(Q.version!==de.__version||q===!0){n.activeTexture(t.TEXTURE0+G);const he=lt.getPrimaries(lt.workingColorSpace),ee=w.colorSpace===gr?null:lt.getPrimaries(w.colorSpace),ie=w.colorSpace===gr||he===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ge=w.isCompressedTexture||w.image[0].isCompressedTexture,Fe=w.image[0]&&w.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!ge&&!Fe?_e[ae]=m(w.image[ae],!0,r.maxCubemapSize):_e[ae]=Fe?w.image[ae].image:w.image[ae],_e[ae]=Ze(w,_e[ae]);const me=_e[0],De=s.convert(w.format,w.colorSpace),He=s.convert(w.type),Ye=v(w.internalFormat,De,He,w.normalized,w.colorSpace),k=w.isVideoTexture!==!0,xe=de.__version===void 0||q===!0,ne=Q.dataReady;let ve=E(w,me);Ve(t.TEXTURE_CUBE_MAP,w);let we;if(ge){k&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ye,me.width,me.height);for(let ae=0;ae<6;ae++){we=_e[ae].mipmaps;for(let Be=0;Be<we.length;Be++){const Le=we[Be];w.format!==ii?De!==null?k?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,0,0,Le.width,Le.height,De,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,Ye,Le.width,Le.height,0,Le.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,0,0,Le.width,Le.height,De,He,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be,Ye,Le.width,Le.height,0,De,He,Le.data)}}}else{if(we=w.mipmaps,k&&xe){we.length>0&&ve++;const ae=tt(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ye,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Fe){k?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,De,He,_e[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ye,_e[ae].width,_e[ae].height,0,De,He,_e[ae].data);for(let Be=0;Be<we.length;Be++){const pt=we[Be].image[ae].image;k?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,0,0,pt.width,pt.height,De,He,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,Ye,pt.width,pt.height,0,De,He,pt.data)}}else{k?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,He,_e[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ye,De,He,_e[ae]);for(let Be=0;Be<we.length;Be++){const Le=we[Be];k?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,0,0,De,He,Le.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Be+1,Ye,De,He,Le.image[ae])}}}h(w)&&_(t.TEXTURE_CUBE_MAP),de.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ae(P,w,G,q,Q,de){const he=s.convert(G.format,G.colorSpace),ee=s.convert(G.type),ie=v(G.internalFormat,he,ee,G.normalized,G.colorSpace),ge=i.get(w),Fe=i.get(G);if(Fe.__renderTarget=w,!ge.__hasExternalTextures){const _e=Math.max(1,w.width>>de),me=Math.max(1,w.height>>de);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,de,ie,_e,me,w.depth,0,he,ee,null):n.texImage2D(Q,de,ie,_e,me,0,he,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),qe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,Fe.__webglTexture,0,je(w)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,Fe.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(P,w,G){if(t.bindRenderbuffer(t.RENDERBUFFER,P),w.depthBuffer){const q=w.depthTexture,Q=q&&q.isDepthTexture?q.type:null,de=b(w.stencilBuffer,Q),he=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;qe(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je(w),de,w.width,w.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,je(w),de,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,de,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,P)}else{const q=w.textures;for(let Q=0;Q<q.length;Q++){const de=q[Q],he=s.convert(de.format,de.colorSpace),ee=s.convert(de.type),ie=v(de.internalFormat,he,ee,de.normalized,de.colorSpace);qe(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je(w),ie,w.width,w.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,je(w),ie,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ie,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function rt(P,w,G){const q=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(w.depthTexture);if(Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,w.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,w.depthTexture);const ge=s.convert(w.depthTexture.format),Fe=s.convert(w.depthTexture.type);let _e;w.depthTexture.format===Xi?_e=t.DEPTH_COMPONENT24:w.depthTexture.format===Kr&&(_e=t.DEPTH24_STENCIL8);for(let me=0;me<6;me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,w.width,w.height,0,ge,Fe,null)}}else V(w.depthTexture,0);const de=Q.__webglTexture,he=je(w),ee=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,ie=w.depthTexture.format===Kr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===Xi)qe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,de,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,de,0);else if(w.depthTexture.format===Kr)qe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,de,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(P){const w=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),q){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=q}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)rt(w.__webglFramebuffer[q],P,q);else{const q=P.texture.mipmaps;q&&q.length>0?rt(w.__webglFramebuffer[0],P,0):rt(w.__webglFramebuffer,P,0)}else if(G){w.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[q]),w.__webglDepthbuffer[q]===void 0)w.__webglDepthbuffer[q]=t.createRenderbuffer(),We(w.__webglDepthbuffer[q],P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,de)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),We(w.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(P,w,G){const q=i.get(P);w!==void 0&&Ae(q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&re(P)}function oe(P){const w=P.texture,G=i.get(P),q=i.get(w);P.addEventListener("dispose",M);const Q=P.textures,de=P.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=w.version,a.memory.textures++),de){G.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ee]=[];for(let ie=0;ie<w.mipmaps.length;ie++)G.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else G.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ee=0;ee<w.mipmaps.length;ee++)G.__webglFramebuffer[ee]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(he)for(let ee=0,ie=Q.length;ee<ie;ee++){const ge=i.get(Q[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&qe(P)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const ie=Q[ee];G.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ee]);const ge=s.convert(ie.format,ie.colorSpace),Fe=s.convert(ie.type),_e=v(ie.internalFormat,ge,Fe,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),me=je(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,_e,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,G.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),We(G.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,w);for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)Ae(G.__webglFramebuffer[ee][ie],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else Ae(G.__webglFramebuffer[ee],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);h(w)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let ee=0,ie=Q.length;ee<ie;ee++){const ge=Q[ee],Fe=i.get(ge);let _e=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,Fe.__webglTexture),Ve(_e,ge),Ae(G.__webglFramebuffer,P,ge,t.COLOR_ATTACHMENT0+ee,_e,0),h(ge)&&_(_e)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,q.__webglTexture),Ve(ee,w),w.mipmaps&&w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)Ae(G.__webglFramebuffer[ie],P,w,t.COLOR_ATTACHMENT0,ee,ie);else Ae(G.__webglFramebuffer,P,w,t.COLOR_ATTACHMENT0,ee,0);h(w)&&_(ee),n.unbindTexture()}P.depthBuffer&&re(P)}function ue(P){const w=P.textures;for(let G=0,q=w.length;G<q;G++){const Q=w[G];if(h(Q)){const de=y(P),he=i.get(Q).__webglTexture;n.bindTexture(de,he),_(de),n.unbindTexture()}}}const pe=[],ke=[];function Pe(P){if(P.samples>0){if(qe(P)===!1){const w=P.textures,G=P.width,q=P.height;let Q=t.COLOR_BUFFER_BIT;const de=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(P),ee=w.length>1;if(ee)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const ie=P.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const Fe=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,G,q,0,0,G,q,Q,t.NEAREST),l===!0&&(pe.length=0,ke.length=0,pe.push(t.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(pe.push(de),ke.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);const Fe=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const w=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function je(P){return Math.min(r.maxSamples,P.samples)}function qe(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function D(P){const w=a.render.frame;f.get(P)!==w&&(f.set(P,w),P.update())}function Ze(P,w){const G=P.colorSpace,q=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Hc&&G!==gr&&(lt.getTransfer(G)===mt?(q!==ii||Q!==Nn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",G)),w}function tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=j,this.getTextureUnits=I,this.setTextureUnits=H,this.setTexture2D=V,this.setTexture2DArray=L,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=le,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jC(t,e){function n(i,r=gr){let s;const a=lt.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===Ap)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===x_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===v_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===m_)return t.BYTE;if(i===g_)return t.SHORT;if(i===Co)return t.UNSIGNED_SHORT;if(i===Tp)return t.INT;if(i===bi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===Ei)return t.HALF_FLOAT;if(i===__)return t.ALPHA;if(i===y_)return t.RGB;if(i===ii)return t.RGBA;if(i===Xi)return t.DEPTH_COMPONENT;if(i===Kr)return t.DEPTH_STENCIL;if(i===S_)return t.RED;if(i===Rp)return t.RED_INTEGER;if(i===as)return t.RG;if(i===Np)return t.RG_INTEGER;if(i===Pp)return t.RGBA_INTEGER;if(i===ac||i===oc||i===lc||i===cc)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hf||i===Vf||i===Gf||i===jf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wf||i===Xf||i===$f||i===qf||i===Yf||i===Bc||i===Kf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wf||i===Xf)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$f)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===qf)return s.COMPRESSED_R11_EAC;if(i===Yf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bc)return s.COMPRESSED_RG11_EAC;if(i===Kf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zf||i===Jf||i===Qf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh||i===ch||i===uh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===eh)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===th)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nh)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ih)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rh)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sh)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ah)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oh)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lh)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ch)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uh)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dh||i===fh||i===hh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dh)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ph||i===mh||i===zc||i===gh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ph)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const WC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XC=`
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

}`;class $C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new N_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ti({vertexShader:WC,fragmentShader:XC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new nt(new jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qC extends hs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,d=null,g=null,x=null;const S=typeof XRWebGLBinding<"u",m=new $C,h={},_=n.getContextAttributes();let y=null,v=null;const b=[],E=[],A=new Se;let M=null,C=null;const R=new Rn;R.viewport=new At;const N=new Rn;N.viewport=new At;const F=[R,N],j=new tE;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=b[Z];return te===void 0&&(te=new nd,b[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=b[Z];return te===void 0&&(te=new nd,b[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=b[Z];return te===void 0&&(te=new nd,b[Z]=te),te.getHandSpace()};function J(Z){const te=E.indexOf(Z.inputSource);if(te===-1)return;const ye=b[te];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||a),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",V);for(let Z=0;Z<b.length;Z++){const te=E[Z];te!==null&&(E[Z]=null,b[Z].disconnect(te))}I=null,H=null,m.reset();for(const Z in h)delete h[Z];if(e.setRenderTarget(y),g=null,d=null,p=null,r=null,v=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),C!==null){const Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",W),r.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ge=null,Ae=null;_.depth&&(Ae=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=_.stencil?Kr:Xi,Ge=_.stencil?Ro:bi);const We={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(We),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ai(d.textureWidth,d.textureHeight,{format:ii,type:Nn,depthTexture:new Po(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new ai(g.framebufferWidth,g.framebufferHeight,{format:ii,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(Z){for(let te=0;te<Z.removed.length;te++){const ye=Z.removed[te],Ge=E.indexOf(ye);Ge>=0&&(E[Ge]=null,b[Ge].disconnect(ye))}for(let te=0;te<Z.added.length;te++){const ye=Z.added[te];let Ge=E.indexOf(ye);if(Ge===-1){for(let We=0;We<b.length;We++)if(We>=E.length){E.push(ye),Ge=We;break}else if(E[We]===null){E[We]=ye,Ge=We;break}if(Ge===-1)break}const Ae=b[Ge];Ae&&Ae.connect(ye)}}const L=new O,B=new O;function Y(Z,te,ye){L.setFromMatrixPosition(te.matrixWorld),B.setFromMatrixPosition(ye.matrixWorld);const Ge=L.distanceTo(B),Ae=te.projectionMatrix.elements,We=ye.projectionMatrix.elements,rt=Ae[14]/(Ae[10]-1),re=Ae[14]/(Ae[10]+1),le=(Ae[9]+1)/Ae[5],oe=(Ae[9]-1)/Ae[5],ue=(Ae[8]-1)/Ae[0],pe=(We[8]+1)/We[0],ke=rt*ue,Pe=rt*pe,je=Ge/(-ue+pe),qe=je*-ue;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(qe),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const D=rt+je,Ze=re+je,tt=ke-qe,P=Pe+(Ge-qe),w=le*re/Ze*D,G=oe*re/Ze*D;Z.projectionMatrix.makePerspective(tt,P,w,G,D,Ze),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let te=Z.near,ye=Z.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),j.near=N.near=R.near=te,j.far=N.far=R.far=ye,(I!==j.near||H!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),I=j.near,H=j.far),j.layers.mask=Z.layers.mask|6,R.layers.mask=j.layers.mask&-5,N.layers.mask=j.layers.mask&-3;const Ge=Z.parent,Ae=j.cameras;se(j,Ge);for(let We=0;We<Ae.length;We++)se(Ae[We],Ge);Ae.length===2?Y(j,R,N):j.projectionMatrix.copy(R.projectionMatrix),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),fe(Z,j,Ge)};function fe(Z,te,ye){ye===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(j)},this.getCameraTexture=function(Z){return h[Z]};let ze=null;function Ve(Z,te){if(f=te.getViewerPose(c||a),x=te,f!==null){const ye=f.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let Ge=!1;ye.length!==j.cameras.length&&(j.cameras.length=0,Ge=!0);for(let re=0;re<ye.length;re++){const le=ye[re];let oe=null;if(g!==null)oe=g.getViewport(le);else{const pe=p.getViewSubImage(d,le);oe=pe.viewport,re===0&&(e.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(v))}let ue=F[re];ue===void 0&&(ue=new Rn,ue.layers.enable(re),ue.viewport=new At,F[re]=ue),ue.matrix.fromArray(le.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(le.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(oe.x,oe.y,oe.width,oe.height),re===0&&(j.matrix.copy(ue.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ge===!0&&j.cameras.push(ue)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=i.getBinding();const re=p.getDepthInformation(ye[0]);re&&re.isValid&&re.texture&&m.init(re,r.renderState)}if(Ae&&Ae.includes("camera-access")&&S){e.state.unbindTexture(),p=i.getBinding();for(let re=0;re<ye.length;re++){const le=ye[re].camera;if(le){let oe=h[le];oe||(oe=new N_,h[le]=oe);const ue=p.getCameraImage(le);oe.sourceTexture=ue}}}}for(let ye=0;ye<b.length;ye++){const Ge=E[ye],Ae=b[ye];Ge!==null&&Ae!==void 0&&Ae.update(Ge,te,c||a)}ze&&ze(Z,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),x=null}const $e=new V_;$e.setAnimationLoop(Ve),this.setAnimationLoop=function(Z){ze=Z},this.dispose=function(){}}}const YC=new bt,Y_=new Ke;Y_.set(-1,0,0,0,1,0,0,0,1);function KC(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,B_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,y,v){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),p(m,h)):h.isMeshPhongMaterial?(s(m,h),f(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&g(m,h,v)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),S(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,_,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===bn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===bn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(YC.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Y_),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const E=b.program;i.uniformBlockBinding(v,E)}function c(v,b){let E=r[v.id];E===void 0&&(m(v),E=f(v),r[v.id]=E,v.addEventListener("dispose",_));const A=b.program;i.updateUBOMapping(v,A);const M=e.render.frame;s[v.id]!==M&&(d(v),s[v.id]=M)}function f(v){const b=p();v.__bindingPointIndex=b;const E=t.createBuffer(),A=v.__size,M=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,A,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,E),E}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const b=r[v.id],E=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let M=0,C=E.length;M<C;M++){const R=E[M];if(Array.isArray(R))for(let N=0,F=R.length;N<F;N++)g(R[N],M,N,A);else g(R,M,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,b,E,A){if(S(v,b,E,A)===!0){const M=v.__offset,C=v.value;if(Array.isArray(C)){let R=0;for(let N=0;N<C.length;N++){const F=C[N],j=h(F);x(F,v.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,M,v.__data)}}function x(v,b,E){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,E)}function S(v,b,E,A){const M=v.value,C=b+"_"+E;if(A[C]===void 0)return typeof M=="number"||typeof M=="boolean"?A[C]=M:ArrayBuffer.isView(M)?A[C]=M.slice():A[C]=M.clone(),!0;{const R=A[C];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return A[C]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function m(v){const b=v.uniforms;let E=0;const A=16;for(let C=0,R=b.length;C<R;C++){const N=Array.isArray(b[C])?b[C]:[b[C]];for(let F=0,j=N.length;F<j;F++){const I=N[F],H=Array.isArray(I.value)?I.value:[I.value];for(let J=0,W=H.length;J<W;J++){const V=H[J],L=h(V),B=E%A,Y=B%L.boundary,se=B+Y;E+=Y,se!==0&&A-se<L.storage&&(E+=A-se),I.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=L.storage}}}const M=E%A;return M>0&&(E+=A-M),v.__size=E,v.__cache={},this}function h(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",v),b}function _(v){const b=v.target;b.removeEventListener("dispose",_);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function y(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:y}}const JC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function QC(){return fi===null&&(fi=new rb(JC,16,16,as,Ei),fi.name="DFG_LUT",fi.minFilter=ln,fi.magFilter=ln,fi.wrapS=Oi,fi.wrapT=Oi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class eR{constructor(e={}){const{canvas:n=D1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Nn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const S=g,m=new Set([Pp,Np,Rp]),h=new Set([Nn,bi,Co,Ro,Ap,Cp]),_=new Uint32Array(4),y=new Int32Array(4),v=new O;let b=null,E=null;const A=[],M=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,F=null,j=null,I=null,H=null;this._outputColorSpace=zn;let J=0,W=0,V=null,L=-1,B=null;const Y=new At,se=new At;let fe=null;const ze=new et(0);let Ve=0,$e=n.width,Z=n.height,te=1,ye=null,Ge=null;const Ae=new At(0,0,$e,Z),We=new At(0,0,$e,Z);let rt=!1;const re=new kp;let le=!1,oe=!1;const ue=new bt,pe=new O,ke=new At,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function qe(){return V===null?te:1}let D=i;function Ze(T,U){return n.getContext(T,U)}let tt,P,w,G,q,Q,de,he,ee,ie,ge,Fe,_e,me,De,He,Ye,k,xe,ne,ve,we,ae;try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bp}`),n.addEventListener("webglcontextlost",pt,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",st,!1),D===null){const U="webgl2";if(D=Ze(U,T),D===null)throw Ze(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(T){throw n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",st,!1),dt("WebGLRenderer: "+T.message),T}function Be(){tt=new Q2(D),tt.init(),ve=new jC(D,tt),P=new G2(D,tt,e,ve),w=new VC(D,tt),P.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),j=D.createFramebuffer(),I=D.createFramebuffer(),H=D.createFramebuffer(),G=new nA(D),q=new CC,Q=new GC(D,tt,w,q,P,ve,G),de=new J2(R),he=new rE(D),we=new H2(D,he),ee=new eA(D,he,G,we),ie=new rA(D,ee,he,we,G),k=new iA(D,P,Q),De=new j2(q),ge=new AC(R,de,tt,P,we,De),Fe=new KC(R,q),_e=new NC,me=new FC(tt),Ye=new z2(R,de,w,ie,x,l),He=new HC(R,ie,P),ae=new ZC(D,G,P,w),xe=new V2(D,tt,G),ne=new tA(D,tt,G),G.programs=ge.programs,R.capabilities=P,R.extensions=tt,R.properties=q,R.renderLists=_e,R.shadowMap=He,R.state=w,R.info=G}S!==Nn&&(C=new aA(S,n.width,n.height,o,r,s));const Le=new qC(R,D);this.xr=Le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize($e,Z,!1))},this.getSize=function(T){return T.set($e,Z)},this.setSize=function(T,U,K=!0){if(Le.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=T,Z=U,n.width=Math.floor(T*te),n.height=Math.floor(U*te),K===!0&&(n.style.width=T+"px",n.style.height=U+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set($e*te,Z*te).floor()},this.setDrawingBufferSize=function(T,U,K){$e=T,Z=U,te=K,n.width=Math.floor(T*K),n.height=Math.floor(U*K),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(S===Nn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Y)},this.getViewport=function(T){return T.copy(Ae)},this.setViewport=function(T,U,K,X){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,U,K,X),w.viewport(Y.copy(Ae).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(We)},this.setScissor=function(T,U,K,X){T.isVector4?We.set(T.x,T.y,T.z,T.w):We.set(T,U,K,X),w.scissor(se.copy(We).multiplyScalar(te).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){w.setScissorTest(rt=T)},this.setOpaqueSort=function(T){ye=T},this.setTransparentSort=function(T){Ge=T},this.getClearColor=function(T){return T.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,K=!0){let X=0;if(T){let $=!1;if(V!==null){const Ee=V.texture.format;$=m.has(Ee)}if($){const Ee=V.texture.type,Re=h.has(Ee),be=Ye.getClearColor(),Ie=Ye.getClearAlpha(),Oe=be.r,Je=be.g,at=be.b;Re?(_[0]=Oe,_[1]=Je,_[2]=at,_[3]=Ie,D.clearBufferuiv(D.COLOR,0,_)):(y[0]=Oe,y[1]=Je,y[2]=at,y[3]=Ie,D.clearBufferiv(D.COLOR,0,y))}else X|=D.COLOR_BUFFER_BIT}U&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",st,!1),Ye.dispose(),_e.dispose(),me.dispose(),q.dispose(),de.dispose(),ie.dispose(),we.dispose(),ae.dispose(),ge.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Zi),Le.removeEventListener("sessionend",kr),En.stop()};function pt(T){T.preventDefault(),T0("WebGLRenderer: Context Lost."),N=!0}function Te(){T0("WebGLRenderer: Context Restored."),N=!1;const T=G.autoReset,U=He.enabled,K=He.autoUpdate,X=He.needsUpdate,$=He.type;Be(),G.autoReset=T,He.enabled=U,He.autoUpdate=K,He.needsUpdate=X,He.type=$}function st(T){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ct(T){const U=T.target;U.removeEventListener("dispose",ct),li(U)}function li(T){Qt(T),q.remove(T)}function Qt(T){const U=q.get(T).programs;U!==void 0&&(U.forEach(function(K){ge.releaseProgram(K)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,K,X,$,Ee){U===null&&(U=Pe);const Re=$.isMesh&&$.matrixWorld.determinantAffine()<0,be=ny(T,U,K,X,$);w.setMaterial(X,Re);let Ie=K.index,Oe=1;if(X.wireframe===!0){if(Ie=ee.getWireframeAttribute(K),Ie===void 0)return;Oe=2}const Je=K.drawRange,at=K.attributes.position;let Ue=Je.start*Oe,ht=(Je.start+Je.count)*Oe;Ee!==null&&(Ue=Math.max(Ue,Ee.start*Oe),ht=Math.min(ht,(Ee.start+Ee.count)*Oe)),Ie!==null?(Ue=Math.max(Ue,0),ht=Math.min(ht,Ie.count)):at!=null&&(Ue=Math.max(Ue,0),ht=Math.min(ht,at.count));const Ft=ht-Ue;if(Ft<0||Ft===1/0)return;we.setup($,X,be,K,Ie);let St,vt=xe;if(Ie!==null&&(St=he.get(Ie),vt=ne,vt.setIndex(St)),$.isMesh)X.wireframe===!0?(w.setLineWidth(X.wireframeLinewidth*qe()),vt.setMode(D.LINES)):vt.setMode(D.TRIANGLES);else if($.isLine){let en=X.linewidth;en===void 0&&(en=1),w.setLineWidth(en*qe()),$.isLineSegments?vt.setMode(D.LINES):$.isLineLoop?vt.setMode(D.LINE_LOOP):vt.setMode(D.LINE_STRIP)}else $.isPoints?vt.setMode(D.POINTS):$.isSprite&&vt.setMode(D.TRIANGLES);if($.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))vt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const en=$._multiDrawStarts,Ce=$._multiDrawCounts,dn=$._multiDrawCount,ut=Ie?he.get(Ie).bytesPerElement:1,On=q.get(X).currentProgram.getUniforms();for(let ci=0;ci<dn;ci++)On.setValue(D,"_gl_DrawID",ci),vt.render(en[ci]/ut,Ce[ci])}else if($.isInstancedMesh)vt.renderInstances(Ue,Ft,$.count);else if(K.isInstancedBufferGeometry){const en=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ce=Math.min(K.instanceCount,en);vt.renderInstances(Ue,Ft,Ce)}else vt.render(Ue,Ft)};function ms(T,U,K,X){F!==null&&T.isNodeMaterial&&F.setObject(X,T),le===!0&&De.setState(T,K,!1),T.transparent===!0&&T.side===gi&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,Xo(T,U,X),T.side=rs,T.needsUpdate=!0,Xo(T,U,X),T.side=gi):Xo(T,U,X)}this.compile=function(T,U,K=null){K===null&&(K=T),F!==null&&F.renderStart(T,U,K),E=me.get(K),E.init(U),M.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(U.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),T!==K&&T.traverseVisible(function($){$.isLight&&$.layers.test(U.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),oe=this.localClippingEnabled,le=De.init(this.clippingPlanes,oe),le===!0&&De.setGlobalState(this.clippingPlanes,U),F!==null&&He.render(E.state.shadowsArray,K,U);const X=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const be=Ee[Re];ms(be,K,U,$),X.add(be)}else ms(Ee,K,U,$),X.add(Ee)}),E=M.pop(),F!==null&&F.renderEnd(),X},this.compileAsync=function(T,U,K=null){const X=this.compile(T,U,K);return new Promise($=>{function Ee(){if(X.forEach(function(Re){const Ie=q.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&X.delete(Re)}),X.size===0){$(T);return}setTimeout(Ee,10)}tt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ki=null;function kn(T){Ki&&Ki(T)}function Zi(){En.stop()}function kr(){En.start()}const En=new V_;En.setAnimationLoop(kn),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(T){Ki=T,Le.setAnimationLoop(T),T===null?En.stop():En.start()},Le.addEventListener("sessionstart",Zi),Le.addEventListener("sessionend",kr),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(T,U);const K=Le.enabled===!0&&Le.isPresenting===!0,X=C!==null&&(V===null||K)&&C.begin(R,V);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(U),U=Le.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,V),E=me.get(T,M.length),E.init(U),E.state.textureUnits=Q.getTextureUnits(),M.push(E),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),re.setFromProjectionMatrix(ue,vi,U.reversedDepth),oe=this.localClippingEnabled,le=De.init(this.clippingPlanes,oe),b=_e.get(T,A.length),b.init(),A.push(b),Le.enabled===!0&&Le.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&Ji(Re,U,-1/0,R.sortObjects)}Ji(T,U,0,R.sortObjects),b.finish(),F!==null&&F.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(ye,Ge),je=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,je&&Ye.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&De.beginShadows();const $=E.state.shadowsArray;if(He.render($,T,U),le===!0&&De.endShadows(),(X&&C.hasRenderPass())===!1){const Re=b.opaque,be=b.transmissive;if(E.setupLights(),U.isArrayCamera){const Ie=U.cameras;if(be.length>0)for(let Oe=0,Je=Ie.length;Oe<Je;Oe++){const at=Ie[Oe];Kp(Re,be,T,at)}je&&Ye.render(T);for(let Oe=0,Je=Ie.length;Oe<Je;Oe++){const at=Ie[Oe];gs(b,T,at,at.viewport)}}else be.length>0&&Kp(Re,be,T,U),je&&Ye.render(T),gs(b,T,U)}V!==null&&W===0&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V)),X&&C.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),we.resetDefaultState(),L=-1,B=null,M.pop(),M.length>0?(E=M[M.length-1],Q.setTextureUnits(E.state.textureUnits),le===!0&&De.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,F!==null&&F.renderEnd()};function Ji(T,U,K,X){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(re)){X&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const Re=ie.update(T),be=T.material;be.visible&&b.push(T,Re,be,K,ke.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(re))){const Re=ie.update(T),be=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ke.copy(Re.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(be)){const Ie=Re.groups;for(let Oe=0,Je=Ie.length;Oe<Je;Oe++){const at=Ie[Oe],Ue=be[at.materialIndex];Ue&&Ue.visible&&b.push(T,Re,Ue,K,ke.z,at,U)}}else be.visible&&b.push(T,Re,be,K,ke.z,null,U)}}const Ee=T.children;for(let Re=0,be=Ee.length;Re<be;Re++)Ji(Ee[Re],U,K,X)}function gs(T,U,K,X){const{opaque:$,transmissive:Ee,transparent:Re}=T;E.setupLightsView(K),le===!0&&De.setGlobalState(R.clippingPlanes,K),X&&w.viewport(Y.copy(X)),$.length>0&&Wo($,U,K),Ee.length>0&&Wo(Ee,U,K),Re.length>0&&Wo(Re,U,K),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Kp(T,U,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){const Ue=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new ai(1,1,{generateMipmaps:!0,type:Ue?Ei:Nn,minFilter:Yr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Ee=E.state.transmissionRenderTarget[X.id],Re=X.viewport||Y;Ee.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);const be=R.getRenderTarget(),Ie=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(ze),Ve=R.getClearAlpha(),Ve<1&&R.setClearColor(16777215,.5),R.clear(),je&&Ye.render(K);const Je=R.toneMapping;R.toneMapping=Mi;const at=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),le===!0&&De.setGlobalState(R.clippingPlanes,X),Wo(T,K,X),Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ht=0,Ft=U.length;ht<Ft;ht++){const St=U[ht],{object:vt,geometry:en,material:Ce,group:dn}=St;if(Ce.side===gi&&vt.layers.test(X.layers)){const ut=Ce.side;Ce.side=bn,Ce.needsUpdate=!0,Zp(vt,K,X,en,Ce,dn),Ce.side=ut,Ce.needsUpdate=!0,Ue=!0}}Ue===!0&&(Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee))}R.setRenderTarget(be,Ie,Oe),R.setClearColor(ze,Ve),at!==void 0&&(X.viewport=at),R.toneMapping=Je}function Wo(T,U,K){const X=U.isScene===!0?U.overrideMaterial:null;for(let $=0,Ee=T.length;$<Ee;$++){const Re=T[$],{object:be,geometry:Ie,group:Oe}=Re;let Je=Re.material;Je.allowOverride===!0&&X!==null&&(Je=X),be.layers.test(K.layers)&&Zp(be,U,K,Ie,Je,Oe)}}function Zp(T,U,K,X,$,Ee){F!==null&&$.isNodeMaterial&&F.setObject(T,$),T.onBeforeRender(R,U,K,X,$,Ee),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(R,U,K,X,T,Ee),$.transparent===!0&&$.side===gi&&$.forceSinglePass===!1?($.side=bn,$.needsUpdate=!0,R.renderBufferDirect(K,U,X,$,T,Ee),$.side=rs,$.needsUpdate=!0,R.renderBufferDirect(K,U,X,$,T,Ee),$.side=gi):R.renderBufferDirect(K,U,X,$,T,Ee),T.onAfterRender(R,U,K,X,$,Ee)}function Xo(T,U,K){U.isScene!==!0&&(U=Pe);const X=q.get(T),$=E.state.lights,Ee=E.state.shadowsArray,Re=$.state.version,be=ge.getParameters(T,$.state,Ee,U,K,E.state.lightProbeGridArray),Ie=ge.getProgramCacheKey(be);let Oe=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;const Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=de.get(T.envMap||X.environment,Je),X.envMapRotation=X.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",ct),Oe=new Map,X.programs=Oe);let at=Oe.get(Ie);if(at!==void 0){if(X.currentProgram===at&&X.lightsStateVersion===Re)return Qp(T,be),at}else be.uniforms=ge.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,K,be),T.onBeforeCompile(be,R),at=ge.acquireProgram(be,Ie),Oe.set(Ie,at),X.uniforms=be.uniforms;const Ue=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=De.uniform),Qp(T,be),X.needsLights=ry(T),X.lightsStateVersion=Re,X.needsLights&&(Ue.ambientLightColor.value=$.state.ambient,Ue.lightProbe.value=$.state.probe,Ue.sunLights.value=$.state.sun,Ue.sunLightShadows.value=$.state.sunShadow,Ue.directionalLights.value=$.state.directional,Ue.directionalLightShadows.value=$.state.directionalShadow,Ue.spotLights.value=$.state.spot,Ue.spotLightShadows.value=$.state.spotShadow,Ue.rectAreaLights.value=$.state.rectArea,Ue.ltc_1.value=$.state.rectAreaLTC1,Ue.ltc_2.value=$.state.rectAreaLTC2,Ue.pointLights.value=$.state.point,Ue.pointLightShadows.value=$.state.pointShadow,Ue.hemisphereLights.value=$.state.hemi,Ue.sunShadowMatrix.value=$.state.sunShadowMatrix,Ue.sunShadowCascade.value=$.state.sunShadowCascade,Ue.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ue.spotLightMatrix.value=$.state.spotLightMatrix,Ue.spotLightMap.value=$.state.spotLightMap,Ue.pointShadowMatrix.value=$.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=at,X.uniformsList=null,at}function Jp(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=dc.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Qp(T,U){const K=q.get(T);K.outputColorSpace=U.outputColorSpace,K.batching=U.batching,K.batchingColor=U.batchingColor,K.instancing=U.instancing,K.instancingColor=U.instancingColor,K.instancingMorph=U.instancingMorph,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function ty(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let K=0,X=T.length;K<X;K++){const $=T[K];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function ny(T,U,K,X,$){U.isScene!==!0&&(U=Pe),Q.resetTextureUnits();const Ee=U.fog,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,be=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:lt.workingColorSpace,Ie=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Oe=de.get(X.envMap||Re,Ie),Je=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,at=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!K.morphAttributes.position,ht=!!K.morphAttributes.normal,Ft=!!K.morphAttributes.color;let St=Mi;X.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(St=R.toneMapping);const vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,en=vt!==void 0?vt.length:0,Ce=q.get(X),dn=E.state.lights;if(le===!0&&(oe===!0||T!==B)){const _t=T===B&&X.id===L;De.setState(X,T,_t)}let ut=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==dn.state.version||Ce.outputColorSpace!==be||$.isBatchedMesh&&Ce.batching===!1||!$.isBatchedMesh&&Ce.batching===!0||$.isBatchedMesh&&Ce.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ce.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ce.instancing===!1||!$.isInstancedMesh&&Ce.instancing===!0||$.isSkinnedMesh&&Ce.skinning===!1||!$.isSkinnedMesh&&Ce.skinning===!0||$.isInstancedMesh&&Ce.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ce.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ce.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ce.instancingMorph===!1&&$.morphTexture!==null||Ce.envMap!==Oe||X.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==De.numPlanes||Ce.numIntersection!==De.numIntersection)||Ce.vertexAlphas!==Je||Ce.vertexTangents!==at||Ce.morphTargets!==Ue||Ce.morphNormals!==ht||Ce.morphColors!==Ft||Ce.toneMapping!==St||Ce.morphTargetsCount!==en||!!Ce.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Ce.__version=X.version);let On=Ce.currentProgram;ut===!0&&(On=Xo(X,U,$),F&&X.isNodeMaterial&&F.onUpdateProgram(X,On,Ce));let ci=!1,Qi=!1,xs=!1;const xt=On.getUniforms(),It=Ce.uniforms;if(w.useProgram(On.program)&&(ci=!0,Qi=!0,xs=!0),X.id!==L&&(L=X.id,Qi=!0),Ce.needsLights){const _t=ty(E.state.lightProbeGridArray,$);Ce.lightProbeGrid!==_t&&(Ce.lightProbeGrid=_t,Qi=!0)}if(ci||B!==T){w.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",T.projectionMatrix),xt.setValue(D,"viewMatrix",T.matrixWorldInverse);const tr=xt.map.cameraPosition;tr!==void 0&&tr.setValue(D,pe.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,Qi=!0,xs=!0)}if(Ce.needsLights&&(dn.state.sunShadowMap.length>0&&xt.setValue(D,"sunShadowMap",dn.state.sunShadowMap,Q),dn.state.directionalShadowMap.length>0&&xt.setValue(D,"directionalShadowMap",dn.state.directionalShadowMap,Q),dn.state.spotShadowMap.length>0&&xt.setValue(D,"spotShadowMap",dn.state.spotShadowMap,Q),dn.state.pointShadowMap.length>0&&xt.setValue(D,"pointShadowMap",dn.state.pointShadowMap,Q)),$.isSkinnedMesh){xt.setOptional(D,$,"bindMatrix"),xt.setOptional(D,$,"bindMatrixInverse");const _t=$.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),xt.setValue(D,"boneTexture",_t.boneTexture,Q))}$.isBatchedMesh&&(xt.setOptional(D,$,"batchingTexture"),xt.setValue(D,"batchingTexture",$._matricesTexture,Q),xt.setOptional(D,$,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",$._indirectTexture,Q),xt.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",$._colorsTexture,Q));const er=K.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&k.update($,K,On),(Qi||Ce.receiveShadow!==$.receiveShadow)&&(Ce.receiveShadow=$.receiveShadow,xt.setValue(D,"receiveShadow",$.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(It.envMapIntensity.value=U.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=QC()),Qi){if(xt.setValue(D,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&iy(It,xs),Ee&&X.fog===!0&&Fe.refreshFogUniforms(It,Ee),Fe.refreshMaterialUniforms(It,X,te,Z,E.state.transmissionRenderTarget[T.id]),Ce.needsLights&&Ce.lightProbeGrid){const _t=Ce.lightProbeGrid;It.probesSH.value=_t.texture,It.probesMin.value.copy(_t.boundingBox.min),It.probesMax.value.copy(_t.boundingBox.max),It.probesResolution.value.copy(_t.resolution)}dc.upload(D,Jp(Ce),It,Q)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(dc.upload(D,Jp(Ce),It,Q),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xt.setValue(D,"center",$.center),xt.setValue(D,"modelViewMatrix",$.modelViewMatrix),xt.setValue(D,"normalMatrix",$.normalMatrix),xt.setValue(D,"modelMatrix",$.matrixWorld),X.uniformsGroups!==void 0){const _t=X.uniformsGroups;for(let tr=0,vs=_t.length;tr<vs;tr++){const tm=_t[tr];ae.update(tm,On),ae.bind(tm,On)}}return On}function iy(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function ry(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,U,K){const X=q.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=U,q.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const K=q.get(T);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,K=0){V=T,J=U,W=K;let X=null,$=!1,Ee=!1;if(T){const be=q.get(T);if(be.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(D.FRAMEBUFFER,be.__webglFramebuffer),Y.copy(T.viewport),se.copy(T.scissor),fe=T.scissorTest,w.viewport(Y),w.scissor(se),w.setScissorTest(fe),L=-1;return}else if(be.__webglFramebuffer===void 0)Q.setupRenderTarget(T);else if(be.__hasExternalTextures)Q.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Je=T.depthTexture;if(be.__boundDepthTexture!==Je){if(Je!==null&&q.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(T)}}const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);const Oe=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?X=Oe[U][K]:X=Oe[U],$=!0):T.samples>0&&Q.useMultisampledRTT(T)===!1?X=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[K]:X=Oe,Y.copy(T.viewport),se.copy(T.scissor),fe=T.scissorTest}else Y.copy(Ae).multiplyScalar(te).floor(),se.copy(We).multiplyScalar(te).floor(),fe=rt;if(K!==0&&(X=j),w.bindFramebuffer(D.FRAMEBUFFER,X)&&w.drawBuffers(T,X),w.viewport(Y),w.scissor(se),w.setScissorTest(fe),$){const be=q.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,K)}else if(Ee){const be=U;for(let Ie=0;Ie<T.textures.length;Ie++){const Oe=q.get(T.textures[Ie]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,K,be)}}else if(T!==null&&K!==0){const be=q.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,be.__webglTexture,K)}L=-1};function em(T){const U=q.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=P.textureFormatReadable(T.format),U.__typeReadable=P.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,K,X,$,Ee,Re,be=0){if(!(T&&T.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){w.bindFramebuffer(D.FRAMEBUFFER,Ie);try{const Oe=T.textures[be],Je=Oe.format,at=Oe.type;T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be);const Ue=em(Oe);if(Ue.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-X&&K>=0&&K<=T.height-$&&D.readPixels(U,K,X,$,ve.convert(Je),ve.convert(at),Ee)}finally{const Oe=V!==null?q.get(V).__webglFramebuffer:null;w.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,U,K,X,$,Ee,Re,be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(U>=0&&U<=T.width-X&&K>=0&&K<=T.height-$){w.bindFramebuffer(D.FRAMEBUFFER,Ie);const Oe=T.textures[be],Je=Oe.format,at=Oe.type;T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be);const Ue=em(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ht),D.bufferData(D.PIXEL_PACK_BUFFER,Ee.byteLength,D.STREAM_READ),D.readPixels(U,K,X,$,ve.convert(Je),ve.convert(at),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ft=V!==null?q.get(V).__webglFramebuffer:null;w.bindFramebuffer(D.FRAMEBUFFER,Ft);const St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await I1(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ht),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ee),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ht),D.deleteSync(St),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,K=0){const X=Math.pow(2,-K),$=Math.floor(T.image.width*X),Ee=Math.floor(T.image.height*X),Re=U!==null?U.x:0,be=U!==null?U.y:0;Q.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Re,be,$,Ee),w.unbindTexture()},this.copyTextureToTexture=function(T,U,K=null,X=null,$=0,Ee=0){let Re,be,Ie,Oe,Je,at,Ue,ht,Ft;const St=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(K!==null)Re=K.max.x-K.min.x,be=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,Je=K.min.y,at=K.isBox3?K.min.z:0;else{const It=Math.pow(2,-$);Re=Math.floor(St.width*It),be=Math.floor(St.height*It),T.isDataArrayTexture?Ie=St.depth:T.isData3DTexture?Ie=Math.floor(St.depth*It):Ie=1,Oe=0,Je=0,at=0}X!==null?(Ue=X.x,ht=X.y,Ft=X.z):(Ue=0,ht=0,Ft=0);const vt=ve.convert(U.format),en=ve.convert(U.type);let Ce;U.isData3DTexture?(Q.setTexture3D(U,0),Ce=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),Ce=D.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),Ce=D.TEXTURE_2D),w.activeTexture(D.TEXTURE0),w.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const dn=w.getParameter(D.UNPACK_ROW_LENGTH),ut=w.getParameter(D.UNPACK_IMAGE_HEIGHT),On=w.getParameter(D.UNPACK_SKIP_PIXELS),ci=w.getParameter(D.UNPACK_SKIP_ROWS),Qi=w.getParameter(D.UNPACK_SKIP_IMAGES);w.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),w.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),w.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),w.pixelStorei(D.UNPACK_SKIP_ROWS,Je),w.pixelStorei(D.UNPACK_SKIP_IMAGES,at);const xs=T.isDataArrayTexture||T.isData3DTexture,xt=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const It=q.get(T),er=q.get(U),_t=q.get(It.__renderTarget),tr=q.get(er.__renderTarget);w.bindFramebuffer(D.READ_FRAMEBUFFER,_t.__webglFramebuffer),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let vs=0;vs<Ie;vs++)xs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(T).__webglTexture,$,at+vs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(U).__webglTexture,Ee,Ft+vs)),D.blitFramebuffer(Oe,Je,Re,be,Ue,ht,Re,be,D.DEPTH_BUFFER_BIT,D.NEAREST);w.bindFramebuffer(D.READ_FRAMEBUFFER,null),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||q.has(T)){const It=q.get(T),er=q.get(U);w.bindFramebuffer(D.READ_FRAMEBUFFER,I),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let _t=0;_t<Ie;_t++)xs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,$,at+_t):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,It.__webglTexture,$),xt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,er.__webglTexture,Ee,Ft+_t):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,er.__webglTexture,Ee),$!==0?D.blitFramebuffer(Oe,Je,Re,be,Ue,ht,Re,be,D.COLOR_BUFFER_BIT,D.NEAREST):xt?D.copyTexSubImage3D(Ce,Ee,Ue,ht,Ft+_t,Oe,Je,Re,be):D.copyTexSubImage2D(Ce,Ee,Ue,ht,Oe,Je,Re,be);w.bindFramebuffer(D.READ_FRAMEBUFFER,null),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xt?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ce,Ee,Ue,ht,Ft,Re,be,Ie,vt,en,St.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,Ee,Ue,ht,Ft,Re,be,Ie,vt,St.data):D.texSubImage3D(Ce,Ee,Ue,ht,Ft,Re,be,Ie,vt,en,St):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ee,Ue,ht,Re,be,vt,en,St.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ee,Ue,ht,St.width,St.height,vt,St.data):D.texSubImage2D(D.TEXTURE_2D,Ee,Ue,ht,Re,be,vt,en,St);w.pixelStorei(D.UNPACK_ROW_LENGTH,dn),w.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),w.pixelStorei(D.UNPACK_SKIP_PIXELS,On),w.pixelStorei(D.UNPACK_SKIP_ROWS,ci),w.pixelStorei(D.UNPACK_SKIP_IMAGES,Qi),Ee===0&&U.generateMipmaps&&D.generateMipmap(Ce),w.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&Q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Q.setTextureCube(T,0):T.isData3DTexture?Q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Q.setTexture2DArray(T,0):Q.setTexture2D(T,0),w.unbindTexture()},this.resetState=function(){J=0,W=0,V=null,w.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}const tR=()=>{const t=z.useRef(null);return z.useEffect(()=>{const e=t.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=new K1;i.background=new et(264212),i.fog=new Up(264212,.035);const r=e.clientWidth||window.innerWidth,s=e.clientHeight||window.innerHeight,a=new Rn(48,r/s,.1,100);a.position.set(0,4.4,11.5),a.lookAt(0,.2,0);const o=new eR({antialias:!0,powerPreference:"high-performance",alpha:!1});o.setSize(r,s),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.toneMapping=Ep,o.toneMappingExposure=1.15,e.appendChild(o.domElement);const l=new Qb(924467,2);i.add(l);const c=new Jb(4233471,1.6);c.position.set(0,12,6),i.add(c);const f=new wd(55551,2.2,14,1.2);f.position.set(0,.8,0),i.add(f);const p=new wd(35071,2.4,12,1.2);p.position.set(-5.6,.5,-1),i.add(p);const d=new wd(54015,2.4,12,1.2);d.position.set(5.6,.5,-1),i.add(d);const g=new wh({color:593693,roughness:.35,metalness:.85}),x=new wh({color:396054,roughness:.45,metalness:.75}),S=new io({color:61695}),m=new io({color:33023}),h=new tg({color:30719,metalness:.1,roughness:.12,transmission:.6,transparent:!0,opacity:.65,ior:1.45}),_=new tg({color:268344,metalness:.2,roughness:.15,transmission:.5,transparent:!0,opacity:.75,ior:1.5}),y=new vn;i.add(y);const v=new dr(24,24,.4,64),b=new nt(v,x);b.position.y=-1.8,y.add(b);const E=new dr(4.6,4.8,.3,64),A=new nt(E,g);A.position.y=-1.65,y.add(A);const M=new hr(4.7,.08,16,100),C=new nt(M,S);C.rotation.x=Math.PI/2,C.position.y=-1.5,y.add(C);const R=new hr(7.2,.09,16,120),N=new nt(R,m);N.rotation.x=Math.PI/2,N.position.y=-1.68,y.add(N);const F=new hr(10.8,.1,16,140),j=new nt(F,S);j.rotation.x=Math.PI/2,j.position.y=-1.72,y.add(j);const I=new vn,H=new vn;y.add(I),y.add(H);const J=new ni(.12,.06,.6);for(let Te=0;Te<36;Te++){const st=Te/36*Math.PI*2,ct=new nt(J,g);ct.position.set(Math.cos(st)*5.9,-1.66,Math.sin(st)*5.9),ct.rotation.y=-st,I.add(ct)}const W=new ni(.18,.06,.8);for(let Te=0;Te<48;Te++){const st=Te/48*Math.PI*2,ct=new nt(W,g);ct.position.set(Math.cos(st)*9,-1.7,Math.sin(st)*9),ct.rotation.y=-st,H.add(ct)}const V=(Te,st,ct=1.3,li=1.2)=>{const Qt=new vn;Qt.position.set(Te,-1.7+li/2,st);const ms=new dr(ct*.92,ct,li,36),Ki=new nt(ms,g);Qt.add(Ki);const kn=new hr(ct*.95,.07,16,36),Zi=new nt(kn,S);Zi.rotation.x=Math.PI/2,Zi.position.y=li*.25,Qt.add(Zi);const kr=new dr(ct*.88,ct*.92,.15,36),En=new nt(kr,g);En.position.y=li/2+.05,Qt.add(En);const Ji=new hr(ct*.82,.03,16,36),gs=new nt(Ji,m);return gs.rotation.x=Math.PI/2,gs.position.y=li/2+.12,Qt.add(gs),i.add(Qt),Qt};V(-5.6,-3.2,1.2,1.4),V(-6.2,1.2,1.2,1.1),V(5.6,-3.2,1.2,1.4),V(6.2,1.2,1.2,1.1),V(5,3.2,.9,.8);const L=new vn;L.position.set(-5.6,.4,-3.2);const B=new ni(1.4,1.4,1.4),Y=new nt(B,h);L.add(Y);const se=new Ll(new Ol(B),new Va({color:61695,linewidth:2}));L.add(se);const fe=document.createElement("canvas");fe.width=256,fe.height=256;const ze=fe.getContext("2d");ze.fillStyle="rgba(0,0,0,0)",ze.fillRect(0,0,256,256),ze.font='bold 128px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',ze.textAlign="center",ze.textBaseline="middle",ze.shadowColor="#00f0ff",ze.shadowBlur=24,ze.fillStyle="#ffffff",ze.fillText("TS",128,128);const Ve=new lb(fe),$e=new io({map:Ve,transparent:!0,opacity:.95,side:gi}),Z=new nt(new jo(1.1,1.1),$e);Z.position.z=.01,L.add(Z),i.add(L);const te=new vn;te.position.set(-6.2,-.4,1.2),te.rotation.y=.35;const ye=new ni(1.3,1.8,.22),Ge=new nt(ye,_);te.add(Ge);const Ae=new Ll(new Ol(ye),new Va({color:55551}));te.add(Ae);const We=()=>{const Te=new vn,st=new Wr;st.moveTo(.08,.4),st.lineTo(-.25,0),st.lineTo(.08,-.4),st.lineTo(.2,-.32),st.lineTo(-.1,0),st.lineTo(.2,.32),st.closePath();const ct=new fr(st,{depth:.06,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),li=new nt(ct,S);li.position.set(-.28,.12,.12),Te.add(li);const Qt=new Wr;Qt.moveTo(-.06,-.42),Qt.lineTo(.04,.42),Qt.lineTo(.12,.42),Qt.lineTo(.02,-.42),Qt.closePath();const ms=new fr(Qt,{depth:.06,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),Ki=new nt(ms,S);Ki.position.set(-.02,.12,.12),Te.add(Ki);const kn=new Wr;kn.moveTo(-.08,.4),kn.lineTo(.25,0),kn.lineTo(-.08,-.4),kn.lineTo(-.2,-.32),kn.lineTo(.1,0),kn.lineTo(-.2,.32),kn.closePath();const Zi=new fr(kn,{depth:.06,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),kr=new nt(Zi,S);kr.position.set(.28,.12,.12),Te.add(kr);const En=new nt(new ni(.8,.04,.02),m);En.position.set(0,-.45,.13),Te.add(En);const Ji=new nt(new ni(.5,.04,.02),S);return Ji.position.set(-.15,-.58,.13),Te.add(Ji),Te};te.add(We()),i.add(te);const rt=new vn;rt.position.set(5.6,.4,-3.2);const re=new nt(B,h);rt.add(re);const le=new Ll(new Ol(B),new Va({color:61695,linewidth:2}));rt.add(le);const oe=new Wr;oe.moveTo(-.55,-.15),oe.quadraticCurveTo(-.65,.08,-.4,.22),oe.quadraticCurveTo(-.25,.48,0,.4),oe.quadraticCurveTo(.32,.48,.48,.25),oe.quadraticCurveTo(.72,.08,.55,-.15),oe.quadraticCurveTo(.32,-.32,0,-.24),oe.quadraticCurveTo(-.32,-.32,-.55,-.15),oe.closePath();const ue=new fr(oe,{depth:.18,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.04,bevelThickness:.04}),pe=new nt(ue,S);pe.position.set(0,0,-.09),rt.add(pe),i.add(rt);const ke=new vn;ke.position.set(6.2,-.4,1.2),ke.rotation.y=-.35;const Pe=new Wr;Pe.moveTo(0,1.1),Pe.lineTo(.75,1.1),Pe.quadraticCurveTo(.95,.5,.7,-.05),Pe.quadraticCurveTo(.45,-.65,0,-1.15),Pe.quadraticCurveTo(-.45,-.65,-.7,-.05),Pe.quadraticCurveTo(-.95,.5,-.75,1.1),Pe.closePath();const je=new fr(Pe,{depth:.22,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.07,bevelThickness:.07}),qe=new nt(je,h);qe.position.z=-.11,ke.add(qe);const D=new Ll(new Ol(je),new Va({color:61695}));D.position.z=-.11,ke.add(D);const Ze=new Wr;Ze.moveTo(.04,.65),Ze.lineTo(.32,.65),Ze.lineTo(-.04,.05),Ze.lineTo(.24,.05),Ze.lineTo(-.24,-.75),Ze.lineTo(-.05,-.12),Ze.lineTo(-.28,-.12),Ze.closePath();const tt=new fr(Ze,{depth:.12,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.03,bevelThickness:.03}),P=new nt(tt,S);P.position.set(0,0,.14),ke.add(P),i.add(ke);const w=new vn;w.position.set(5,-1,3.2),w.rotation.y=-.5;const G=new dr(.65,.65,.12,32),q=new nt(G,g);w.add(q);const Q=new nt(new hr(.66,.03,16,32),S);Q.rotation.x=Math.PI/2,w.add(Q);const de=new zp(.18,16,16),he=new nt(de,S);he.position.set(0,.45,0),w.add(he);const ee=new dr(.1,.3,.35,16),ie=new nt(ee,m);ie.position.set(0,.2,0),w.add(ie);const ge=new nt(de,m);ge.position.set(-.28,.38,-.1),ge.scale.set(.8,.8,.8),w.add(ge);const Fe=new nt(de,m);Fe.position.set(.28,.38,-.1),Fe.scale.set(.8,.8,.8),w.add(Fe),i.add(w);const _e=120,me=new Jt,De=new Float32Array(_e*3);for(let Te=0;Te<_e;Te++)De[Te*3]=(Math.random()-.5)*20,De[Te*3+1]=Math.random()*8-1,De[Te*3+2]=(Math.random()-.5)*14;me.setAttribute("position",new wi(De,3));const He=new C_({color:55551,size:.06,transparent:!0,opacity:.55,blending:Pf}),Ye=new ob(me,He);i.add(Ye);let k=0,xe=0,ne=0,ve=0;const we=Te=>{k=(Te.clientX/window.innerWidth-.5)*2,xe=(Te.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",we,{passive:!0});let ae,Be=new nE;const Le=()=>{ae=requestAnimationFrame(Le);const Te=Be.getElapsedTime();if(!n){I.rotation.y+=.0012,H.rotation.y-=8e-4,L.position.y=.4+Math.sin(Te*1.4)*.12,L.rotation.y=Math.sin(Te*.7)*.12,te.position.y=-.4+Math.sin(Te*1.2+1)*.12,te.rotation.y=.35+Math.sin(Te*.8)*.08,rt.position.y=.4+Math.sin(Te*1.3+2)*.12,rt.rotation.y=Math.sin(Te*.6+1)*.1,ke.position.y=-.4+Math.sin(Te*1.5+3)*.12,ke.rotation.y=-.35+Math.sin(Te*.9+2)*.08,w.position.y=-1+Math.sin(Te*1.1+4)*.08,f.intensity=2.2+Math.sin(Te*2)*.4,p.intensity=2.4+Math.sin(Te*1.7)*.3,d.intensity=2.4+Math.cos(Te*1.9)*.3;const st=me.attributes.position.array;for(let ct=1;ct<_e*3;ct+=3)st[ct]+=.004,st[ct]>7&&(st[ct]=-1.5);me.attributes.position.needsUpdate=!0}ne=k*.9,ve=4.4-xe*.5,a.position.x+=(ne-a.position.x)*.04,a.position.y+=(ve-a.position.y)*.04,a.lookAt(0,.2,0),o.render(i,a)};Le();const pt=()=>{if(!e)return;const Te=e.clientWidth||window.innerWidth,st=e.clientHeight||window.innerHeight;a.aspect=Te/st,a.updateProjectionMatrix(),o.setSize(Te,st),o.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",pt),()=>{window.removeEventListener("mousemove",we),window.removeEventListener("resize",pt),cancelAnimationFrame(ae),o.dispose(),i.clear(),e.contains(o.domElement)&&e.removeChild(o.domElement)}},[]),u.jsx("div",{ref:t,className:"absolute inset-0 z-0 overflow-hidden pointer-events-none",style:{background:"radial-gradient(ellipse at center, #07132b 0%, #030814 80%, #01040a 100%)"},"aria-hidden":"true"})},nR=()=>{var _,y;const[t,e]=z.useState(""),[n,i]=z.useState(""),[r,s]=z.useState(!1),[a,o]=z.useState(""),[l,c]=z.useState(!1),[f,p]=z.useState({x:0,y:0}),{login:d}=ds(),g=us(),S=((y=(_=Fr().state)==null?void 0:_.from)==null?void 0:y.pathname)||"/dashboard";z.useEffect(()=>{const v=b=>{const E=(b.clientX/window.innerWidth-.5)*8,A=(b.clientY/window.innerHeight-.5)*6;p({x:E,y:A})};return window.addEventListener("mousemove",v,{passive:!0}),()=>window.removeEventListener("mousemove",v)},[]);const m=async v=>{if(v.preventDefault(),!t.trim()||!n){o("Please enter both email and password.");return}o(""),c(!0);try{await d(t.trim(),n),g(S,{replace:!0})}catch(b){o(b.message||"Failed to login. Please check your credentials.")}finally{c(!1)}},h=()=>{e("alex@taskflow.dev"),i("password123"),o("")};return u.jsxs("div",{className:"relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#040814]",children:[u.jsx(tR,{}),u.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",style:{background:"radial-gradient(ellipse at 50% 45%, rgba(0, 160, 255, 0.08) 0%, rgba(4, 8, 20, 0.6) 60%, rgba(2, 5, 14, 0.92) 100%)"}}),u.jsxs("div",{className:"relative z-10 w-full max-w-[430px] sm:max-w-[460px] flex flex-col items-center",style:{transform:`translate3d(${f.x}px, ${f.y}px, 0)`,transition:"transform 0.15s ease-out"},children:[u.jsxs("div",{className:"w-full rounded-2xl sm:rounded-3xl p-6 sm:p-9 text-slate-100 relative overflow-hidden transition-all",style:{background:"linear-gradient(155deg, rgba(10, 25, 55, 0.82) 0%, rgba(5, 14, 34, 0.90) 100%)",backdropFilter:"blur(28px) saturate(180%)",WebkitBackdropFilter:"blur(28px) saturate(180%)",border:"1.5px solid rgba(0, 210, 255, 0.65)",boxShadow:`
              inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.45),
              inset 0 0 25px 0 rgba(0, 160, 255, 0.18),
              0 0 35px 0 rgba(0, 140, 255, 0.45),
              0 0 80px 0 rgba(0, 100, 255, 0.22),
              0 30px 60px -15px rgba(0, 0, 0, 0.85)
            `,animation:"floatVertical 5s ease-in-out infinite"},children:[u.jsx("div",{className:"absolute top-0 left-0 right-0 h-32 pointer-events-none opacity-40",style:{background:"linear-gradient(180deg, rgba(0, 210, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 100%)"}}),u.jsxs("div",{className:"flex flex-col items-center text-center relative z-10",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("div",{className:"w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-lg text-white shadow-lg relative overflow-hidden",style:{background:"linear-gradient(135deg, #0077ff 0%, #00d2ff 100%)",border:"1px solid rgba(255, 255, 255, 0.4)",boxShadow:"0 0 20px rgba(0, 210, 255, 0.6)"},children:[u.jsx("span",{className:"relative z-10 tracking-tight",children:"TS"}),u.jsx("div",{className:"absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"})]}),u.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,195,255,0.45)]",children:"TaskFlow"})]}),u.jsx("h2",{className:"mt-5 text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Sign in to your account"}),u.jsxs("p",{className:"mt-1.5 text-xs sm:text-sm text-slate-300",children:["Or"," ",u.jsx(Si,{to:"/register",className:"font-medium text-cyan-400 hover:text-cyan-300 hover:underline transition-colors decoration-cyan-400/40",children:"create a new developer account"})]})]}),a&&u.jsxs("div",{className:"mt-5 p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/50 flex items-start gap-3 backdrop-blur-md animate-fadeIn",children:[u.jsx(qn,{className:"w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5"}),u.jsx("div",{className:"text-xs sm:text-sm text-rose-200 font-medium leading-snug",children:a})]}),u.jsxs("form",{className:"mt-6 space-y-4 sm:space-y-5 relative z-10",onSubmit:m,children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email",className:"block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5",children:"Email Address"}),u.jsxs("div",{className:"relative flex items-center rounded-xl bg-[#060e20]/80 border border-cyan-500/30 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/30 transition-all duration-200 shadow-inner",children:[u.jsx(Ww,{className:"w-5 h-5 text-cyan-400/75 ml-3.5 flex-shrink-0 pointer-events-none"}),u.jsx("input",{id:"email",type:"email",required:!0,autoComplete:"email",value:t,onChange:v=>e(v.target.value),placeholder:"alex@taskflow.dev",disabled:l,className:"w-full bg-transparent pl-3 pr-3.5 py-2.5 sm:py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"})]})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5",children:"Password"}),u.jsxs("div",{className:"relative flex items-center rounded-xl bg-[#060e20]/80 border border-cyan-500/30 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/30 transition-all duration-200 shadow-inner",children:[u.jsx(Xw,{className:"w-5 h-5 text-cyan-400/75 ml-3.5 flex-shrink-0 pointer-events-none"}),u.jsx("input",{id:"password",type:r?"text":"password",required:!0,autoComplete:"current-password",value:n,onChange:v=>i(v.target.value),placeholder:"••••••••",disabled:l,className:"w-full bg-transparent pl-3 pr-11 py-2.5 sm:py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none font-mono"}),u.jsx("button",{type:"button",onClick:()=>s(!r),className:"absolute right-3 text-cyan-400/60 hover:text-cyan-300 transition-colors p-1 rounded-md",title:r?"Hide password":"Show password",children:r?u.jsx(qw,{className:"w-4 h-4"}):u.jsx($w,{className:"w-4 h-4"})})]})]}),u.jsx("div",{className:"pt-2",children:u.jsx("button",{type:"submit",disabled:l,className:"w-full flex justify-center items-center py-3 sm:py-3.5 px-6 rounded-xl text-sm font-bold text-white tracking-wide transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer",style:{background:"linear-gradient(90deg, #0066ff 0%, #00b4d8 50%, #0077b6 100%)",boxShadow:"0 0 25px rgba(0, 140, 255, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.35)",border:"1px solid rgba(0, 210, 255, 0.4)"},children:l?u.jsxs("span",{className:"flex items-center gap-2",children:[u.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),u.jsx("span",{children:"Authenticating..."})]}):u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx("span",{children:"Sign in"}),u.jsx("span",{className:"text-base font-normal",children:"→"})]})})})]}),u.jsxs("div",{className:"mt-6 pt-5 border-t border-cyan-500/20 text-center relative z-10",children:[u.jsx("p",{className:"text-[11px] text-slate-400 mb-2.5 font-medium tracking-wide",children:"Evaluation Demo Account:"}),u.jsxs("button",{type:"button",onClick:h,className:"w-full py-2.5 px-4 rounded-xl bg-[#061226]/80 hover:bg-[#0b1e3d] border border-cyan-500/25 hover:border-cyan-400/50 text-xs font-medium text-cyan-300 hover:text-cyan-200 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer group",children:[u.jsx(Yw,{className:"w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform"}),u.jsx("span",{children:"Fill Demo Login (alex@taskflow.dev)"})]})]})]}),u.jsx("div",{className:"w-[320px] sm:w-[380px] h-6 rounded-[50%] blur-xl transition-all duration-700 pointer-events-none mt-4 opacity-75",style:{background:"radial-gradient(ellipse at center, rgba(0, 195, 255, 0.3) 0%, rgba(0, 80, 200, 0.15) 50%, transparent 80%)",boxShadow:"0 0 45px 15px rgba(0, 120, 255, 0.25)"}})]}),u.jsx("style",{children:`
        @keyframes floatVertical {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `})]})},iR=()=>{const[t,e]=z.useState(""),[n,i]=z.useState(""),[r,s]=z.useState(""),[a,o]=z.useState("developer"),[l,c]=z.useState(""),[f,p]=z.useState(!1),{register:d}=ds(),g=us(),x=async S=>{if(S.preventDefault(),!t.trim()||t.trim().length<2){c("Name must be at least 2 characters.");return}if(!n.trim()){c("Email address is required.");return}if(!r||r.length<6){c("Password must be at least 6 characters.");return}c(""),p(!0);try{(await d({name:t.trim(),email:n.trim(),password:r,role:a})).hasToken?g("/dashboard",{replace:!0}):g("/login",{replace:!0})}catch(m){c(m.message||"Registration failed. Please check your information.")}finally{p(!1)}};return u.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[u.jsx("div",{className:"flex justify-center",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/30",children:"TF"}),u.jsxs("span",{className:"text-2xl font-bold text-slate-900 tracking-tight",children:["Task",u.jsx("span",{className:"text-blue-600",children:"Flow"})]})]})}),u.jsx("h2",{className:"mt-6 text-center text-2xl sm:text-3xl font-extrabold text-slate-900",children:"Create your developer account"}),u.jsxs("p",{className:"mt-2 text-center text-sm text-slate-600",children:["Already have an account?"," ",u.jsx(Si,{to:"/login",className:"font-medium text-blue-600 hover:text-blue-500 hover:underline",children:"Sign in here"})]})]}),u.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0",children:u.jsxs("div",{className:"bg-white py-8 px-6 shadow-sm border border-slate-200/90 rounded-2xl sm:px-10",children:[l&&u.jsxs("div",{className:"mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3",children:[u.jsx(qn,{className:"w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5"}),u.jsx("div",{className:"text-sm text-rose-700 font-medium",children:l})]}),u.jsxs("form",{className:"space-y-4",onSubmit:x,children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"name",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5",children:"Full Name"}),u.jsx("input",{id:"name",type:"text",required:!0,value:t,onChange:S=>e(S.target.value),placeholder:"Jane Doe",disabled:f,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5",children:"Email address"}),u.jsx("input",{id:"email",type:"email",required:!0,autoComplete:"email",value:n,onChange:S=>i(S.target.value),placeholder:"jane@taskflow.dev",disabled:f,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5",children:"Password (min 6 characters)"}),u.jsx("input",{id:"password",type:"password",required:!0,autoComplete:"new-password",value:r,onChange:S=>s(S.target.value),placeholder:"••••••••",disabled:f,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"role",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5",children:"Role"}),u.jsxs("select",{id:"role",value:a,onChange:S=>o(S.target.value),disabled:f,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100 bg-white",children:[u.jsx("option",{value:"developer",children:"Developer"}),u.jsx("option",{value:"designer",children:"Designer"}),u.jsx("option",{value:"manager",children:"Manager"}),u.jsx("option",{value:"qa",children:"QA Engineer"})]})]}),u.jsx("div",{className:"pt-2",children:u.jsx("button",{type:"submit",disabled:f,className:"w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed",children:f?u.jsxs("span",{className:"flex items-center gap-2",children:[u.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Creating account..."]}):"Create Account"})})]})]})})]})},Wl=({title:t,value:e,icon:n,color:i="blue",helperText:r=""})=>{const s={blue:{bg:"bg-blue-50",text:"text-blue-600",border:"border-blue-100"},emerald:{bg:"bg-emerald-50",text:"text-emerald-600",border:"border-emerald-100"},green:{bg:"bg-emerald-50",text:"text-emerald-600",border:"border-emerald-100"},amber:{bg:"bg-amber-50",text:"text-amber-600",border:"border-amber-100"},yellow:{bg:"bg-amber-50",text:"text-amber-600",border:"border-amber-100"},purple:{bg:"bg-purple-50",text:"text-purple-600",border:"border-purple-100"},slate:{bg:"bg-slate-100",text:"text-slate-600",border:"border-slate-200"}},a=s[i]||s.blue;return u.jsx("div",{className:"bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow transition-shadow",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1",children:t}),u.jsx("h3",{className:"text-2xl font-bold text-slate-900 tracking-tight",children:e}),r&&u.jsx("p",{className:"text-xs text-slate-400 mt-1 font-normal",children:r})]}),u.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center border ${a.bg} ${a.text} ${a.border}`,children:n})]})})},ao=({type:t="status",value:e,label:n,className:i=""})=>{const r=(e||"").toLowerCase().trim();let s="bg-slate-100 text-slate-700 border-slate-200",a=n||e;if(t==="status")switch(r){case"todo":s="bg-slate-100 text-slate-700 border-slate-300",a=n||"Todo";break;case"in-progress":s="bg-blue-50 text-blue-700 border-blue-200",a=n||"In Progress";break;case"done":case"completed":s="bg-emerald-50 text-emerald-700 border-emerald-200",a=n||(r==="completed"?"Completed":"Done");break;case"active":s="bg-blue-50 text-blue-700 border-blue-200",a=n||"Active";break;case"on-hold":s="bg-amber-50 text-amber-700 border-amber-200",a=n||"On Hold";break;default:s="bg-slate-100 text-slate-700 border-slate-200"}else if(t==="priority")switch(r){case"low":s="bg-emerald-50 text-emerald-700 border-emerald-200",a=n||"Low";break;case"medium":s="bg-amber-50 text-amber-700 border-amber-200",a=n||"Medium";break;case"high":s="bg-rose-50 text-rose-700 border-rose-200",a=n||"High";break;default:s="bg-slate-100 text-slate-700 border-slate-200"}else t==="overdue"&&(s="bg-rose-100 text-rose-700 border-rose-300 font-semibold",a=n||"Overdue");return u.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${s} ${i}`,children:a})},K_=({progress:t=0,showLabel:e=!0,height:n="h-2",color:i="#3b82f6",className:r=""})=>{const s=Math.min(100,Math.max(0,Math.round(t)));return u.jsxs("div",{className:`w-full ${r}`,children:[e&&u.jsxs("div",{className:"flex justify-between items-center text-xs font-medium text-slate-600 mb-1.5",children:[u.jsx("span",{children:"Progress"}),u.jsxs("span",{className:"font-semibold text-slate-800",children:[s,"%"]})]}),u.jsx("div",{className:`w-full bg-slate-100 rounded-full overflow-hidden ${n}`,children:u.jsx("div",{className:"h-full rounded-full transition-all duration-500 ease-out",style:{width:`${s}%`,backgroundColor:i||"#3b82f6"},role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100})})]})},Z_=({project:t,onEdit:e,onDelete:n,canManage:i=!0})=>{const{id:r,_id:s,name:a,description:o,status:l,completedTasks:c=0,taskCount:f=0,dueDate:p,color:d="#3b82f6"}=t,g=r||s,x=f>0?Math.round(c/f*100):0,S=p?new Date(p).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"No due date";return u.jsxs("div",{className:"bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-start justify-between gap-3 mb-2",children:[u.jsxs(Si,{to:`/projects/${g}`,className:"flex items-center gap-2 group-hover:text-blue-600 transition-colors flex-1 min-w-0",children:[u.jsx("span",{className:"w-3 h-3 rounded-full flex-shrink-0",style:{backgroundColor:d}}),u.jsx("h3",{className:"text-base font-bold text-slate-900 group-hover:text-blue-600 truncate",children:a})]}),u.jsxs("div",{className:"flex items-center gap-1.5 flex-shrink-0",children:[u.jsx(ao,{type:"status",value:l}),i&&(e||n)&&u.jsxs("div",{className:"flex items-center gap-1 pl-1 border-l border-slate-200",children:[e&&u.jsx("button",{type:"button",onClick:m=>{m.preventDefault(),m.stopPropagation(),e(t)},title:"Edit project",className:"p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors",children:u.jsx(hu,{className:"w-3.5 h-3.5"})}),n&&u.jsx("button",{type:"button",onClick:m=>{m.preventDefault(),m.stopPropagation(),n(t)},title:"Delete project",className:"p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition-colors",children:u.jsx(pu,{className:"w-3.5 h-3.5"})})]})]})]}),u.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed",children:o})]}),u.jsxs("div",{className:"space-y-4 pt-2 border-t border-slate-100",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-500 mb-1.5 font-medium",children:[u.jsx("span",{children:"Tasks"}),u.jsxs("span",{className:"text-slate-700 font-semibold",children:[c,"/",f," done"]})]}),u.jsx(K_,{progress:x,showLabel:!1,color:d})]}),u.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500 pt-1",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx(wp,{className:"w-3.5 h-3.5 text-slate-400"}),u.jsxs("span",{children:["Due ",S]})]}),u.jsx(Si,{to:`/projects/${g}`,className:"font-semibold text-blue-600 hover:underline text-xs",children:"Details →"})]})]})]})},Gp=({task:t,onStatusChange:e,onEdit:n,onDelete:i,canManage:r=!0})=>{const{id:s,_id:a,title:o,description:l,status:c="todo",priority:f="medium",dueDate:p,projectName:d,project:g}=t,x=s||a,S=d||(g&&typeof g=="object"?g.name:""),m=p&&new Date(p)<new Date&&c!=="done",h=p?new Date(p).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"No date",_={todo:"in-progress","in-progress":"done",done:"todo"},y=v=>{v.stopPropagation(),e&&e(x,_[c]||"todo")};return u.jsx("div",{className:`bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:shadow transition-all group ${m?"border-l-4 border-l-red-500 border-red-200":""}`,children:u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1 flex-wrap",children:[e&&u.jsx("button",{type:"button",onClick:y,title:`Click to mark ${_[c]||"next"}`,className:`w-5 h-5 rounded flex items-center justify-center transition-colors border ${c==="done"?"bg-emerald-600 border-emerald-600 text-white":"border-slate-300 hover:border-blue-500 text-transparent hover:text-slate-300"}`,children:u.jsx(Pr,{className:"w-3.5 h-3.5"})}),u.jsx("h4",{className:`text-sm font-semibold truncate ${c==="done"?"line-through text-slate-400":"text-slate-900"}`,children:o}),S&&u.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium",children:S})]}),l&&u.jsx("p",{className:"text-xs text-slate-500 line-clamp-1 mb-2 sm:mb-0",children:l})]}),u.jsxs("div",{className:"flex items-center gap-2.5 flex-wrap flex-shrink-0",children:[u.jsx("button",{type:"button",onClick:e?y:void 0,className:e?"cursor-pointer hover:opacity-85":"cursor-default",title:e?`Status: ${c} (Click to change)`:`Status: ${c}`,children:u.jsx(ao,{type:"status",value:c})}),u.jsx(ao,{type:"priority",value:f}),u.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-slate-500 pl-1 border-l border-slate-200",children:[u.jsx(wp,{className:"w-3.5 h-3.5 text-slate-400"}),u.jsx("span",{className:m?"text-red-600 font-semibold":"",children:h}),m&&u.jsx(ao,{type:"overdue"})]}),r&&(n||i)&&u.jsxs("div",{className:"flex items-center gap-1 pl-1 border-l border-slate-200",children:[n&&u.jsx("button",{type:"button",onClick:()=>n(t),title:"Edit task",className:"p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors",children:u.jsx(hu,{className:"w-3.5 h-3.5"})}),i&&u.jsx("button",{type:"button",onClick:()=>i(t),title:"Delete task",className:"p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition-colors",children:u.jsx(pu,{className:"w-3.5 h-3.5"})})]})]})]})})},Uo=({title:t="No results found",message:e="We couldn't find anything matching your search and filter criteria.",actionText:n="Clear Filters",onAction:i})=>u.jsxs("div",{className:"bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center max-w-md mx-auto my-8",children:[u.jsx("div",{className:"w-14 h-14 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-4",children:u.jsx(r_,{className:"w-6 h-6"})}),u.jsx("h3",{className:"text-base font-bold text-slate-800 mb-1",children:t}),u.jsx("p",{className:"text-sm text-slate-500 mb-6 max-w-sm mx-auto leading-relaxed",children:e}),i&&u.jsx("button",{type:"button",onClick:i,className:"inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20",children:n})]}),rR=({onTaskCompleted:t})=>{const[e,n]=z.useState(null),[i,r]=z.useState(!0),[s,a]=z.useState(!1),[o,l]=z.useState(""),c=z.useCallback(async(x=!1)=>{x?a(!0):r(!0),l("");try{const S=await Mp.getDailyFocus();n(S.data||null)}catch(S){l(S.message||"AI focus briefing is currently unavailable.")}finally{r(!1),a(!1)}},[]);z.useEffect(()=>{c()},[c]);const f=async x=>{try{n(S=>S&&{...S,focusTasks:S.focusTasks.filter(m=>m.task.id!==x)}),await on.update(x,{status:"done"}),t&&t()}catch{c(!0)}};if(i)return u.jsxs("div",{className:"bg-white rounded-2xl border border-blue-100 p-6 shadow-sm space-y-4 animate-pulse",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("div",{className:"h-6 bg-slate-200 rounded w-48"}),u.jsx("div",{className:"h-8 bg-slate-100 rounded-lg w-28"})]}),u.jsx("div",{className:"h-16 bg-slate-100 rounded-xl"}),u.jsxs("div",{className:"space-y-3 pt-2",children:[u.jsx("div",{className:"h-20 bg-slate-50 rounded-xl border border-slate-100"}),u.jsx("div",{className:"h-20 bg-slate-50 rounded-xl border border-slate-100"})]})]});if(o)return u.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-3 text-slate-600",children:[u.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0",children:u.jsx(qn,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-semibold text-slate-800",children:"AI Daily Focus"}),u.jsx("p",{className:"text-xs text-slate-500",children:o})]})]}),u.jsx("button",{type:"button",onClick:()=>c(!0),className:"px-3.5 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors",children:"Retry Analysis"})]});const p=(e==null?void 0:e.focusTasks)||[],d=(e==null?void 0:e.summary)||"Your AI focus briefing is ready.",g=(e==null?void 0:e.warnings)||[];return u.jsxs("div",{className:"bg-gradient-to-b from-blue-50/50 via-white to-white rounded-2xl border border-blue-100/90 p-6 shadow-sm space-y-5",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("div",{className:"w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center p-1.5 shadow-sm shadow-blue-500/20 flex-shrink-0",children:u.jsx("img",{src:n_,alt:"AI Engine",className:"w-full h-full object-contain"})}),u.jsxs("div",{children:[u.jsxs("h2",{className:"text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2",children:["Today's Focus",u.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-700",children:"AI Engine"})]}),u.jsx("p",{className:"text-xs text-slate-500",children:"Personalized priority briefing analyzed from your live MongoDB tasks"})]})]}),u.jsxs("button",{type:"button",onClick:()=>c(!0),disabled:s,className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-sm transition-all disabled:opacity-50 self-start sm:self-auto",title:"Re-analyze active tasks with Gemini",children:[u.jsx("svg",{className:`w-3.5 h-3.5 text-slate-500 ${s?"animate-spin text-blue-600":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),u.jsx("span",{children:s?"Analyzing...":"Refresh Focus"})]})]}),u.jsxs("div",{className:"p-3.5 rounded-xl bg-blue-500/5 border border-blue-100 text-xs text-slate-700 leading-relaxed",children:[u.jsx("span",{className:"font-semibold text-blue-900 mr-1.5",children:"Executive Briefing:"}),d]}),p.length===0?u.jsxs("div",{className:"p-6 text-center rounded-xl bg-slate-50 border border-slate-200/60",children:[u.jsx("p",{className:"text-sm font-semibold text-slate-800",children:"You're all clear!"}),u.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"No high-urgency tasks currently need your attention. Enjoy your focus time!"})]}):u.jsx("div",{className:"space-y-3",children:p.map(x=>{const S=x.urgency==="urgent"?"bg-rose-50 text-rose-700 border-rose-200":x.urgency==="high"?"bg-amber-50 text-amber-700 border-amber-200":"bg-blue-50 text-blue-700 border-blue-200",m=x.urgency==="urgent"?"🔥":x.urgency==="high"?"⚡":"📌";return u.jsxs("div",{className:"bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:shadow transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group",children:[u.jsxs("div",{className:"flex items-start gap-3 flex-1 min-w-0",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5",children:x.rank}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-2 flex-wrap mb-1",children:[u.jsx("h4",{className:"text-sm font-bold text-slate-900 truncate",children:x.task.title}),x.task.projectName&&u.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium",children:x.task.projectName}),u.jsxs("span",{className:`text-[11px] px-2 py-0.5 rounded-full border font-semibold flex items-center gap-1 ${S}`,children:[u.jsx("span",{children:m}),u.jsx("span",{className:"capitalize",children:x.urgency})]})]}),u.jsxs("p",{className:"text-xs text-slate-600 leading-relaxed",children:[u.jsx("strong",{className:"text-slate-800",children:"Why now:"})," ",x.reason]}),x.suggestedAction&&u.jsxs("p",{className:"text-[11px] text-blue-600 font-medium mt-1",children:["→ Next step: ",x.suggestedAction]})]})]}),u.jsx("div",{className:"flex items-center gap-2 flex-shrink-0 self-end sm:self-center",children:u.jsxs("button",{type:"button",onClick:()=>f(x.task.id),className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors",title:"Mark this task done in MongoDB",children:[u.jsx(Pr,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Done"})]})})]},x.task.id)})}),g.length>0&&u.jsxs("div",{className:"p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1",children:[u.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-amber-900",children:[u.jsx("span",{children:"⚠️"}),u.jsx("span",{children:"Attention Items:"})]}),u.jsx("ul",{className:"text-xs text-amber-800 space-y-0.5 list-disc list-inside",children:g.map((x,S)=>u.jsx("li",{children:x},S))})]})]})},sR=()=>{var b,E,A,M,C;const{user:t}=ds(),[e,n]=z.useState(null),[i,r]=z.useState([]),[s,a]=z.useState([]),[o,l]=z.useState(!0),[c,f]=z.useState(""),p=z.useCallback(async()=>{var R,N;l(!0),f("");try{const[F,j,I]=await Promise.all([y0.getStats(),Ln.getAll(),on.getAll()]);n(F.data||null),r(((R=j.data)==null?void 0:R.projects)||[]),a(((N=I.data)==null?void 0:N.tasks)||[])}catch(F){f(F.message||"Failed to load dashboard data.")}finally{l(!1)}},[]);z.useEffect(()=>{p();const R=()=>p();return window.addEventListener("taskflow:refresh-data",R),()=>{window.removeEventListener("taskflow:refresh-data",R)}},[p]);const d=async(R,N)=>{var F;try{a(H=>H.map(J=>(J.id||J._id)===R?{...J,status:N}:J)),await on.update(R,{status:N});const[j,I]=await Promise.all([y0.getStats(),Ln.getAll()]);n(j.data||null),r(((F=I.data)==null?void 0:F.projects)||[])}catch{await p()}},g=new Intl.DateTimeFormat("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}).format(new Date),x=((b=e==null?void 0:e.projects)==null?void 0:b.total)??i.length,S=((E=e==null?void 0:e.tasks)==null?void 0:E.total)??s.length,m=((A=e==null?void 0:e.tasks)==null?void 0:A.completed)??s.filter(R=>R.status==="done").length,h=((M=e==null?void 0:e.tasks)==null?void 0:M.inProgress)??s.filter(R=>R.status==="in-progress").length,_=((C=e==null?void 0:e.tasks)==null?void 0:C.completionRate)??(S>0?Math.round(m/S*100):0),y=[...s.slice(0,3).map(R=>({id:`task-${R.id||R._id}`,action:R.status==="done"?"Completed task":"Active task item",target:R.title,time:R.updatedAt?new Date(R.updatedAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"Recently",type:R.status==="done"?"complete":"update"})),...i.slice(0,2).map(R=>({id:`proj-${R.id||R._id}`,action:"Active project workspace",target:R.name,time:R.createdAt?new Date(R.createdAt).toLocaleDateString([],{month:"short",day:"numeric"}):"Ongoing",type:"create"}))],v=R=>{switch(R){case"create":return u.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0",children:u.jsx(Gw,{className:"w-4 h-4 text-emerald-600"})});case"complete":return u.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0",children:u.jsx(jw,{className:"w-4 h-4 text-emerald-600"})});case"delete":return u.jsx("div",{className:"w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0",children:u.jsx(pu,{className:"w-4 h-4 text-rose-600"})});default:return u.jsx("div",{className:"w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0",children:u.jsx(hu,{className:"w-4 h-4 text-blue-600"})})}};return u.jsxs("div",{className:"space-y-8 pb-12",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80",children:[u.jsxs("div",{children:[u.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight",children:["Good day, ",(t==null?void 0:t.name)||"Developer"]}),u.jsxs("p",{className:"text-sm text-slate-500 mt-1 font-medium",children:["Here is what is happening with your MongoDB Atlas database today · ",g]})]}),u.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("taskflow:open-copilot")),className:"inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl shadow-sm transition-all gap-2.5 self-start sm:self-auto cursor-pointer group",children:[u.jsx(to,{size:"sm",className:"group-hover:scale-105 transition-transform"}),u.jsx("span",{children:"TaskFlow Copilot"})]})]}),c&&u.jsxs("div",{className:"p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3",children:[u.jsx(qn,{className:"w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5"}),u.jsx("div",{className:"text-sm text-rose-700 font-medium",children:c})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[u.jsx(Wl,{title:"Total Projects",value:o?"...":x,icon:u.jsx(Ho,{className:"w-6 h-6"}),color:"blue",helperText:"Active database workspaces"}),u.jsx(Wl,{title:"Total Tasks",value:o?"...":S,icon:u.jsx(Pr,{className:"w-6 h-6"}),color:"purple",helperText:"Assigned work items"}),u.jsx(Wl,{title:"Completed Tasks",value:o?"...":m,icon:u.jsx(Pr,{className:"w-6 h-6"}),color:"emerald",helperText:`${_}% overall completion`}),u.jsx(Wl,{title:"In Progress",value:o?"...":h,icon:u.jsx(Hw,{className:"w-6 h-6"}),color:"amber",helperText:"Currently active work"})]}),u.jsx(rR,{onTaskCompleted:p}),u.jsxs("section",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-bold text-slate-900",children:"Projects Overview"}),u.jsx("p",{className:"text-xs text-slate-500",children:"Track milestones and progress"})]}),u.jsx(Si,{to:"/projects",className:"text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline",children:"View all projects →"})]}),o?u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[u.jsx("div",{className:"h-44 bg-white rounded-xl border border-slate-200 animate-pulse p-5"}),u.jsx("div",{className:"h-44 bg-white rounded-xl border border-slate-200 animate-pulse p-5"}),u.jsx("div",{className:"h-44 bg-white rounded-xl border border-slate-200 animate-pulse p-5"})]}):i.length===0?u.jsx(Uo,{title:"No projects in database",message:"Create a project to start tracking milestones and task progress.",actionText:"+ Go to Projects",onAction:()=>{}}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 desktop:grid-cols-3 gap-6",children:i.slice(0,3).map(R=>u.jsx(Z_,{project:R},R.id||R._id))})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[u.jsxs("section",{className:"lg:col-span-2 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-bold text-slate-900",children:"Recent Tasks"}),u.jsx("p",{className:"text-xs text-slate-500",children:"Live priority and status updates"})]}),u.jsx(Si,{to:"/tasks",className:"text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline",children:"View all tasks →"})]}),o?u.jsxs("div",{className:"space-y-3",children:[u.jsx("div",{className:"h-16 bg-white rounded-xl border border-slate-200 animate-pulse"}),u.jsx("div",{className:"h-16 bg-white rounded-xl border border-slate-200 animate-pulse"}),u.jsx("div",{className:"h-16 bg-white rounded-xl border border-slate-200 animate-pulse"})]}):s.length===0?u.jsx(Uo,{title:"No tasks found",message:"No tasks currently scheduled in your MongoDB database.",actionText:"+ Go to Tasks",onAction:()=>{}}):u.jsx("div",{className:"space-y-3",children:s.slice(0,5).map(R=>u.jsx(Gp,{task:R,onStatusChange:d},R.id||R._id))})]}),u.jsxs("section",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-bold text-slate-900",children:"Recent Activity"}),u.jsx("p",{className:"text-xs text-slate-500",children:"Audit trail of database events"})]}),u.jsx("div",{className:"bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm space-y-4",children:y.length===0?u.jsx("p",{className:"text-xs text-slate-400 text-center py-6",children:"No recent events recorded."}):y.map(R=>u.jsxs("div",{className:"flex items-start gap-3 text-sm",children:[v(R.type),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsxs("p",{className:"text-xs text-slate-900",children:[u.jsxs("span",{className:"font-semibold",children:[R.action,":"]})," ",u.jsx("span",{className:"text-slate-600 truncate",children:R.target})]}),u.jsx("p",{className:"text-[11px] text-slate-400 mt-0.5",children:R.time})]})]},R.id))})]})]})]})},J_=({value:t="",onChange:e,placeholder:n="Search...",className:i="",id:r="search-input"})=>u.jsxs("div",{className:`relative flex items-center ${i}`,children:[u.jsx("div",{className:"absolute left-3.5 text-slate-400 pointer-events-none flex items-center",children:u.jsx(r_,{className:"w-4 h-4"})}),u.jsx("input",{id:r,type:"text",value:t,onChange:s=>e(s.target.value),placeholder:n,className:"w-full pl-10 pr-9 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"}),t&&u.jsx("button",{type:"button",onClick:()=>e(""),className:"absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none p-0.5 rounded-full hover:bg-slate-100 transition-colors",title:"Clear search","aria-label":"Clear search",children:u.jsx(fs,{className:"w-3.5 h-3.5"})})]}),aR=["#3b82f6","#8b5cf6","#10b981","#f59e0b","#ef4444","#06b6d4"],Q_=({isOpen:t,onClose:e,onSave:n,project:i=null})=>{const[r,s]=z.useState(""),[a,o]=z.useState(""),[l,c]=z.useState("active"),[f,p]=z.useState(""),[d,g]=z.useState("#3b82f6"),[x,S]=z.useState(""),[m,h]=z.useState(!1),_=!!i;if(z.useEffect(()=>{i?(s(i.name||""),o(i.description||""),c(i.status||"active"),p(i.dueDate?i.dueDate.split("T")[0]:""),g(i.color||"#3b82f6")):(s(""),o(""),c("active"),p(""),g("#3b82f6")),S("")},[i,t]),!t)return null;const y=async v=>{if(v.preventDefault(),!r.trim()||r.trim().length<2){S("Project name must be at least 2 characters.");return}if(!a.trim()||a.trim().length<5){S("Description must be at least 5 characters.");return}S(""),h(!0);try{await n({name:r.trim(),description:a.trim(),status:l,dueDate:f||null,color:d}),e()}catch(b){S(b.message||"Failed to save project.")}finally{h(!1)}};return u.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:u.jsxs("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:[u.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity",onClick:m?void 0:e}),u.jsxs("div",{className:"relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-6 border border-slate-200",children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-100",children:[u.jsx("h3",{className:"text-lg font-bold text-slate-900",children:_?"Edit Project":"Create New Project"}),u.jsx("button",{type:"button",onClick:e,disabled:m,className:"text-slate-400 hover:text-slate-500 rounded-lg p-1 hover:bg-slate-100 transition-colors disabled:opacity-50",children:u.jsx(fs,{className:"w-5 h-5"})})]}),x&&u.jsxs("div",{className:"mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5",children:[u.jsx(qn,{className:"w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5"}),u.jsx("div",{className:"text-xs text-rose-700 font-medium",children:x})]}),u.jsxs("form",{onSubmit:y,className:"mt-4 space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"proj-name",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Project Name *"}),u.jsx("input",{id:"proj-name",type:"text",required:!0,value:r,onChange:v=>s(v.target.value),placeholder:"e.g., API Gateway Migration",disabled:m,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"proj-desc",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Description *"}),u.jsx("textarea",{id:"proj-desc",rows:3,required:!0,value:a,onChange:v=>o(v.target.value),placeholder:"Detailed objectives and scope...",disabled:m,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"proj-status",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Status"}),u.jsxs("select",{id:"proj-status",value:l,onChange:v=>c(v.target.value),disabled:m,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100",children:[u.jsx("option",{value:"active",children:"Active"}),u.jsx("option",{value:"completed",children:"Completed"}),u.jsx("option",{value:"on-hold",children:"On Hold"})]})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"proj-due",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Target Due Date"}),u.jsx("input",{id:"proj-due",type:"date",value:f,onChange:v=>p(v.target.value),disabled:m,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2",children:"Project Theme Color"}),u.jsx("div",{className:"flex items-center gap-2.5",children:aR.map(v=>u.jsx("button",{type:"button",onClick:()=>g(v),className:`w-7 h-7 rounded-full border-2 transition-transform ${d===v?"scale-110 border-slate-900 shadow-sm":"border-transparent hover:scale-105"}`,style:{backgroundColor:v}},v))})]}),u.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-100",children:[u.jsx("button",{type:"button",onClick:e,disabled:m,className:"px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50",children:"Cancel"}),u.jsxs("button",{type:"submit",disabled:m,className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed",children:[m&&u.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),_?"Save Changes":"Create Project"]})]})]})]})]})})},Xc=({isOpen:t,title:e="Confirm Action",message:n="Are you sure you want to proceed?",confirmText:i="Delete",cancelText:r="Cancel",isDestructive:s=!0,isLoading:a=!1,onConfirm:o,onClose:l})=>t?u.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:u.jsxs("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:[u.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity",onClick:a?void 0:l}),u.jsxs("div",{className:"relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-6 border border-slate-200",children:[u.jsxs("div",{className:"flex items-start justify-between pb-3",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${s?"bg-rose-50 text-rose-600 border border-rose-100":"bg-blue-50 text-blue-600 border border-blue-100"}`,children:u.jsx(qn,{className:"w-6 h-6"})}),u.jsx("h3",{className:"text-lg font-bold text-slate-900",children:e})]}),u.jsx("button",{type:"button",onClick:l,disabled:a,className:"text-slate-400 hover:text-slate-500 rounded-lg p-1 hover:bg-slate-100 transition-colors disabled:opacity-50",children:u.jsx(fs,{className:"w-5 h-5"})})]}),u.jsx("p",{className:"text-sm text-slate-600 mt-2 mb-6 leading-relaxed",children:n}),u.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-100",children:[u.jsx("button",{type:"button",onClick:l,disabled:a,className:"px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50",children:r}),u.jsxs("button",{type:"button",onClick:o,disabled:a,className:`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors flex items-center gap-2 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed ${s?"bg-rose-600 hover:bg-rose-700 focus:ring-rose-500":"bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"}`,children:[a&&u.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),i]})]})]})]})}):null,oR=["Launch college event website in 10 days with registration and schedule","Build an AI resume analyzer with authentication, resume upload, Gemini integration and deployment","Mobile app dark mode overhaul with design tokens and accessibility","Set up API rate limiting and Redis caching for microservices"],lR=({isOpen:t,onClose:e,onPlanCreated:n})=>{const[i,r]=z.useState(""),[s,a]=z.useState(!1),[o,l]=z.useState(!1),[c,f]=z.useState(""),[p,d]=z.useState(null);if(!t)return null;const g=async m=>{var _;const h=m||i;if(!h||h.trim().length<3){f("Please enter a goal of at least 3 characters.");return}f(""),a(!0);try{const y=await Mp.generatePlan(h.trim());d(((_=y.data)==null?void 0:_.plan)||null)}catch(y){f(y.message||"Failed to generate plan. Please try again.")}finally{a(!1)}},x=(m,h,_)=>{if(!p)return;const y=[...p.tasks];y[m]={...y[m],[h]:_},d({...p,tasks:y})},S=async()=>{var m;if(p){l(!0),f("");try{const _=(m=(await Ln.create({name:p.projectTitle,description:p.projectDescription||"Created via AI Task Planner",color:p.suggestedColor||"#3b82f6",status:"active"})).data)==null?void 0:m.project,y=(_==null?void 0:_.id)||(_==null?void 0:_._id);if(!y)throw new Error("Failed to create project from plan.");for(const v of p.tasks)await on.create({title:v.title,description:v.description||"",priority:v.priority||"medium",dueDate:v.suggestedDueDate||null,projectId:y,status:"todo"});n&&n(_),d(null),r(""),e()}catch(h){f(h.message||"Failed to save generated tasks to MongoDB.")}finally{l(!1)}}};return u.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:u.jsxs("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:[u.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity",onClick:!s&&!o?e:void 0}),u.jsxs("div",{className:"relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl p-6 border border-slate-200",children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-100",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("div",{className:"w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shadow-blue-500/20",children:u.jsx(Ho,{className:"w-4 h-4 text-white"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-bold text-slate-900",children:"AI Goal → Task Planner"}),u.jsx("p",{className:"text-xs text-slate-500",children:"Convert goals into a structured milestone roadmap with Gemini"})]})]}),u.jsx("button",{type:"button",onClick:e,disabled:s||o,className:"text-slate-400 hover:text-slate-500 rounded-lg p-1 hover:bg-slate-100 transition-colors disabled:opacity-50",children:u.jsx(fs,{className:"w-5 h-5"})})]}),c&&u.jsxs("div",{className:"mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700 font-medium",children:[u.jsx(qn,{className:"w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5"}),u.jsx("span",{children:c})]}),!p&&!s&&u.jsxs("div",{className:"mt-5 space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"ai-goal-prompt",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5",children:"What do you want to build or accomplish?"}),u.jsx("textarea",{id:"ai-goal-prompt",rows:3,value:i,onChange:m=>r(m.target.value),placeholder:"e.g. Build an AI resume analyzer with authentication, resume upload, Gemini integration and deployment in 2 weeks...",className:"w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-xs font-medium text-slate-500 mb-2",children:"Or try an example goal:"}),u.jsx("div",{className:"flex flex-wrap gap-2",children:oR.map((m,h)=>u.jsx("button",{type:"button",onClick:()=>{r(m),g(m)},className:"text-left text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 transition-colors border border-transparent hover:border-blue-200",children:m},h))})]}),u.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-100",children:[u.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors",children:"Cancel"}),u.jsxs("button",{type:"button",onClick:()=>g(),disabled:!i.trim(),className:"px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",children:[u.jsx("span",{children:"Generate Plan"}),u.jsx("span",{children:"→"})]})]})]}),s&&u.jsxs("div",{className:"py-12 flex flex-col items-center justify-center space-y-4 text-center",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600",children:u.jsxs("svg",{className:"w-6 h-6 animate-spin text-blue-600",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-bold text-slate-800",children:"Generating Task Roadmap..."}),u.jsx("p",{className:"text-xs text-slate-500 mt-1 max-w-sm",children:"Gemini is analyzing requirements, estimating effort, and breaking down deliverables."})]})]}),p&&!s&&u.jsxs("div",{className:"mt-4 space-y-5",children:[u.jsxs("div",{className:"p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-blue-600",children:"Generated Project"}),u.jsx("span",{className:"w-3.5 h-3.5 rounded-full",style:{backgroundColor:p.suggestedColor||"#3b82f6"}})]}),u.jsx("input",{type:"text",value:p.projectTitle,onChange:m=>d({...p,projectTitle:m.target.value}),className:"w-full text-base font-bold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-blue-500 focus:bg-white px-1 py-0.5 rounded transition-all focus:outline-none"}),u.jsx("textarea",{rows:2,value:p.projectDescription,onChange:m=>d({...p,projectDescription:m.target.value}),className:"w-full text-xs text-slate-600 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-blue-500 focus:bg-white px-1 py-0.5 rounded transition-all focus:outline-none"})]}),u.jsxs("div",{className:"space-y-2.5 max-h-80 overflow-y-auto pr-1",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider px-1",children:[u.jsxs("span",{children:["Milestone Tasks (",p.tasks.length,")"]}),u.jsx("span",{children:"Review & Edit"})]}),p.tasks.map((m,h)=>u.jsxs("div",{className:"p-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors space-y-2",children:[u.jsxs("div",{className:"flex items-start justify-between gap-2",children:[u.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[u.jsx("span",{className:"text-[11px] font-bold text-slate-400",children:String(h+1).padStart(2,"0")}),u.jsx("input",{type:"text",value:m.title,onChange:_=>x(h,"title",_.target.value),className:"w-full text-xs font-bold text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1"})]}),u.jsxs("div",{className:"flex items-center gap-1.5 flex-shrink-0",children:[u.jsxs("select",{value:m.priority,onChange:_=>x(h,"priority",_.target.value),className:"text-[11px] font-semibold px-2 py-0.5 rounded border border-slate-200 bg-slate-50 focus:outline-none",children:[u.jsx("option",{value:"high",children:"High"}),u.jsx("option",{value:"medium",children:"Medium"}),u.jsx("option",{value:"low",children:"Low"})]}),m.estimatedHours&&u.jsxs("span",{className:"text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded",children:[m.estimatedHours,"h"]})]})]}),u.jsx("input",{type:"text",value:m.description,onChange:_=>x(h,"description",_.target.value),placeholder:"Technical description...",className:"w-full text-[11px] text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1"}),m.reasoning&&u.jsxs("p",{className:"text-[10px] text-slate-400 italic px-1",children:["💡 ",m.reasoning]})]},h))]}),u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-100",children:[u.jsx("button",{type:"button",onClick:()=>g(),disabled:o,className:"text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline",children:"↻ Regenerate Plan"}),u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("button",{type:"button",onClick:()=>d(null),disabled:o,className:"px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",children:"Edit Prompt"}),u.jsxs("button",{type:"button",onClick:S,disabled:o,className:"px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all flex items-center gap-2 disabled:opacity-60",children:[o&&u.jsxs("svg",{className:"animate-spin w-3.5 h-3.5 text-white",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),u.jsx("span",{children:o?"Creating in MongoDB...":"Add All Tasks to Workspace"})]})]})]})]})]})]})})},cR=()=>u.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-5 shadow-sm animate-pulse space-y-4",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("div",{className:"h-5 bg-slate-200 rounded w-2/3"}),u.jsx("div",{className:"h-5 bg-slate-200 rounded-full w-16"})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("div",{className:"h-3.5 bg-slate-200 rounded w-full"}),u.jsx("div",{className:"h-3.5 bg-slate-200 rounded w-4/5"})]}),u.jsxs("div",{className:"pt-2 space-y-2 border-t border-slate-100",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("div",{className:"h-3 bg-slate-200 rounded w-12"}),u.jsx("div",{className:"h-3 bg-slate-200 rounded w-16"})]}),u.jsx("div",{className:"h-2 bg-slate-200 rounded-full w-full"}),u.jsxs("div",{className:"flex justify-between pt-1",children:[u.jsx("div",{className:"h-3 bg-slate-200 rounded w-20"}),u.jsx("div",{className:"h-3 bg-slate-200 rounded w-8"})]})]})]}),uR=()=>u.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm animate-pulse flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsxs("div",{className:"flex-1 space-y-2",children:[u.jsx("div",{className:"h-4 bg-slate-200 rounded w-1/2"}),u.jsx("div",{className:"h-3 bg-slate-200 rounded w-3/4"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"h-6 bg-slate-200 rounded-full w-16"}),u.jsx("div",{className:"h-6 bg-slate-200 rounded-full w-14"}),u.jsx("div",{className:"h-4 bg-slate-200 rounded w-20"})]})]}),jp=({count:t=4,type:e="project"})=>u.jsx("div",{className:e==="project"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"space-y-3",children:Array.from({length:t}).map((n,i)=>e==="project"?u.jsx(cR,{},i):u.jsx(uR,{},i))}),dR=()=>{const[t,e]=z.useState([]),[n,i]=z.useState(""),[r,s]=z.useState("all"),[a,o]=z.useState(!0),[l,c]=z.useState(""),[f,p]=z.useState(!1),[d,g]=z.useState(!1),[x,S]=z.useState(null),[m,h]=z.useState(null),[_,y]=z.useState(!1),v=z.useCallback(async()=>{var R;o(!0),c("");try{const N=await Ln.getAll({search:n,status:r});e(((R=N.data)==null?void 0:R.projects)||[])}catch(N){c(N.message||"Failed to fetch projects.")}finally{o(!1)}},[n,r]);z.useEffect(()=>{const R=setTimeout(()=>{v()},250),N=()=>{v()};return window.addEventListener("taskflow:refresh-data",N),()=>{clearTimeout(R),window.removeEventListener("taskflow:refresh-data",N)}},[v]);const b={all:t.length,active:t.filter(R=>R.status==="active").length,completed:t.filter(R=>R.status==="completed").length,"on-hold":t.filter(R=>R.status==="on-hold").length},E=[{key:"all",label:"All",count:b.all},{key:"active",label:"Active",count:b.active},{key:"completed",label:"Completed",count:b.completed},{key:"on-hold",label:"On Hold",count:b["on-hold"]}],A=async R=>{if(x){const N=x.id||x._id;await Ln.update(N,R)}else await Ln.create(R);S(null),await v()},M=async()=>{if(m){y(!0);try{const R=m.id||m._id;await Ln.delete(R),h(null),await v()}catch(R){c(R.message||"Failed to delete project."),h(null)}finally{y(!1)}}},C=()=>{i(""),s("all")};return u.jsxs("div",{className:"space-y-6 pb-12",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight",children:"Projects"}),u.jsx("p",{className:"text-sm text-slate-500 mt-1",children:"Manage, track progress, and monitor deliverables across teams"})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{type:"button",onClick:()=>g(!0),className:"inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg shadow-sm transition-colors",children:u.jsx("span",{children:"AI Task Planner"})}),u.jsx("button",{type:"button",onClick:()=>{S(null),p(!0)},className:"inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors",children:"+ Create Project"})]})]}),l&&u.jsxs("div",{className:"p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3",children:[u.jsx(qn,{className:"w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5"}),u.jsx("div",{className:"text-sm text-rose-700 font-medium",children:l})]}),u.jsxs("div",{className:"bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4",children:[u.jsx("div",{className:"w-full md:w-80",children:u.jsx(J_,{id:"projects-search",value:n,onChange:i,placeholder:"Filter projects by name..."})}),u.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:E.map(R=>{const N=r===R.key;return u.jsxs("button",{type:"button",onClick:()=>s(R.key),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${N?"bg-blue-600 text-white shadow-sm":"bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"}`,children:[u.jsx("span",{children:R.label}),u.jsx("span",{className:`px-1.5 py-0.2 rounded-full text-[11px] font-semibold ${N?"bg-blue-700/80 text-white":"bg-slate-200 text-slate-700"}`,children:R.count})]},R.key)})})]}),a?u.jsx(jp,{count:4,type:"project"}):t.length===0?u.jsx(Uo,{title:"No projects found",message:n||r!=="all"?`No projects matching "${n}" in ${r} status.`:"Create your first project to start organizing team tasks and deliverables.",actionText:n||r!=="all"?"Reset Filters":"+ Create Project",onAction:n||r!=="all"?C:()=>{S(null),p(!0)}}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 desktop:grid-cols-3 gap-6",children:t.map(R=>u.jsx(Z_,{project:R,onEdit:N=>{S(N),p(!0)},onDelete:N=>h(N)},R.id||R._id))}),u.jsx(Q_,{isOpen:f,onClose:()=>{p(!1),S(null)},onSave:A,project:x}),u.jsx(lR,{isOpen:d,onClose:()=>g(!1),onPlanCreated:()=>v()}),u.jsx(Xc,{isOpen:!!m,title:"Delete Project?",message:`Are you sure you want to permanently delete "${m==null?void 0:m.name}"? All associated tasks will also be deleted.`,confirmText:"Delete Project",isLoading:_,onConfirm:M,onClose:()=>h(null)})]})},ey=({isOpen:t,onClose:e,onSave:n,task:i=null,projects:r=[],users:s=[],defaultProjectId:a=""})=>{const[o,l]=z.useState(""),[c,f]=z.useState(""),[p,d]=z.useState(""),[g,x]=z.useState("todo"),[S,m]=z.useState("medium"),[h,_]=z.useState(""),[y,v]=z.useState(""),[b,E]=z.useState(""),[A,M]=z.useState(!1),C=!!i;if(z.useEffect(()=>{var N,F;i?(l(i.title||""),f(i.description||""),d(i.projectId||((N=i.project)==null?void 0:N._id)||i.project||a||""),x(i.status||"todo"),m(i.priority||"medium"),_(i.dueDate?i.dueDate.split("T")[0]:""),v(i.assigneeId||((F=i.assignee)==null?void 0:F._id)||i.assignee||"")):(l(""),f(""),d(a||(r.length>0?r[0].id||r[0]._id:"")),x("todo"),m("medium"),_(""),v("")),E("")},[i,t,a,r]),!t)return null;const R=async N=>{if(N.preventDefault(),!o.trim()||o.trim().length<2){E("Title must be at least 2 characters.");return}if(!p){E("Please select a project for this task.");return}E(""),M(!0);try{await n({title:o.trim(),description:c.trim(),projectId:p,status:g,priority:S,dueDate:h||null,assigneeId:y||void 0}),e()}catch(F){E(F.message||"Failed to save task.")}finally{M(!1)}};return u.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:u.jsxs("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:[u.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity",onClick:A?void 0:e}),u.jsxs("div",{className:"relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-6 border border-slate-200",children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-100",children:[u.jsx("h3",{className:"text-lg font-bold text-slate-900",children:C?"Edit Task":"Create New Task"}),u.jsx("button",{type:"button",onClick:e,disabled:A,className:"text-slate-400 hover:text-slate-500 rounded-lg p-1 hover:bg-slate-100 transition-colors disabled:opacity-50",children:u.jsx(fs,{className:"w-5 h-5"})})]}),b&&u.jsxs("div",{className:"mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5",children:[u.jsx(qn,{className:"w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5"}),u.jsx("div",{className:"text-xs text-rose-700 font-medium",children:b})]}),u.jsxs("form",{onSubmit:R,className:"mt-4 space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"task-title",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Task Title *"}),u.jsx("input",{id:"task-title",type:"text",required:!0,value:o,onChange:N=>l(N.target.value),placeholder:"e.g., Implement rate limiting middleware",disabled:A,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"task-desc",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Description"}),u.jsx("textarea",{id:"task-desc",rows:2,value:c,onChange:N=>f(N.target.value),placeholder:"Technical notes or acceptance criteria...",disabled:A,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"task-proj",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Project *"}),u.jsxs("select",{id:"task-proj",required:!0,value:p,onChange:N=>d(N.target.value),disabled:A||C&&a,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100",children:[u.jsx("option",{value:"",disabled:!0,children:"Select project..."}),r.map(N=>u.jsx("option",{value:N.id||N._id,children:N.name},N.id||N._id))]})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"task-assignee",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Assignee"}),u.jsxs("select",{id:"task-assignee",value:y,onChange:N=>v(N.target.value),disabled:A,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100",children:[u.jsx("option",{value:"",children:"Current User (Auto)"}),s.map(N=>u.jsxs("option",{value:N.id||N._id,children:[N.name," (",N.role||"Member",")"]},N.id||N._id))]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"task-status",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Status"}),u.jsxs("select",{id:"task-status",value:g,onChange:N=>x(N.target.value),disabled:A,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100",children:[u.jsx("option",{value:"todo",children:"Todo"}),u.jsx("option",{value:"in-progress",children:"In Progress"}),u.jsx("option",{value:"done",children:"Done"})]})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"task-priority",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Priority"}),u.jsxs("select",{id:"task-priority",value:S,onChange:N=>m(N.target.value),disabled:A,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100",children:[u.jsx("option",{value:"low",children:"Low"}),u.jsx("option",{value:"medium",children:"Medium"}),u.jsx("option",{value:"high",children:"High"})]})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"task-due",className:"block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1",children:"Due Date"}),u.jsx("input",{id:"task-due",type:"date",value:h,onChange:N=>_(N.target.value),disabled:A,className:"w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors disabled:bg-slate-100"})]})]}),u.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-slate-100",children:[u.jsx("button",{type:"button",onClick:e,disabled:A,className:"px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50",children:"Cancel"}),u.jsxs("button",{type:"submit",disabled:A,className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed",children:[A&&u.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),C?"Save Changes":"Create Task"]})]})]})]})]})})},fR=()=>{const{id:t}=aw(),e=us(),{user:n}=ds(),[i,r]=z.useState(null),[s,a]=z.useState([]),[o,l]=z.useState([]),[c,f]=z.useState(!0),[p,d]=z.useState(""),[g,x]=z.useState(!1),[S,m]=z.useState(!1),[h,_]=z.useState(!1),[y,v]=z.useState(!1),[b,E]=z.useState(null),[A,M]=z.useState(null),[C,R]=z.useState(!1),N=z.useCallback(async()=>{var se,fe,ze;f(!0),d("");try{const[Ve,$e]=await Promise.all([Ln.getById(t),on.getAll({projectId:t})]);r(((se=Ve.data)==null?void 0:se.project)||null),a(((fe=$e.data)==null?void 0:fe.tasks)||[]);try{const Z=await e_.getAll();l(((ze=Z.data)==null?void 0:ze.users)||[])}catch{}}catch(Ve){d(Ve.message||"Failed to load project details.")}finally{f(!1)}},[t]);z.useEffect(()=>{N()},[N]);const F=async se=>{await Ln.update(t,se),await N()},j=async()=>{_(!0);try{await Ln.delete(t),m(!1),e("/projects",{replace:!0})}catch(se){d(se.message||"Failed to delete project."),m(!1)}finally{_(!1)}},I=async se=>{if(b){const fe=b.id||b._id;await on.update(fe,se)}else await on.create({...se,projectId:t});E(null),await N()},H=async(se,fe)=>{var ze;try{a($e=>$e.map(Z=>(Z.id||Z._id)===se?{...Z,status:fe}:Z)),await on.update(se,{status:fe});const Ve=await Ln.getById(t);r(((ze=Ve.data)==null?void 0:ze.project)||null)}catch(Ve){d(Ve.message||"Failed to update task status."),await N()}},J=async()=>{if(A){R(!0);try{const se=A.id||A._id;await on.delete(se),M(null),await N()}catch(se){d(se.message||"Failed to delete task."),M(null)}finally{R(!1)}}};if(c)return u.jsxs("div",{className:"space-y-6 pb-12",children:[u.jsx("div",{className:"h-6 w-32 bg-slate-200 rounded animate-pulse"}),u.jsx("div",{className:"h-44 bg-white rounded-xl border border-slate-200 animate-pulse p-6"}),u.jsx(jp,{count:3,type:"task"})]});if(p||!i)return u.jsxs("div",{className:"space-y-6 pb-12",children:[u.jsx(Si,{to:"/projects",className:"text-xs font-semibold text-blue-600 hover:underline",children:"← Back to Projects"}),u.jsxs("div",{className:"p-8 rounded-2xl bg-white border border-slate-200 text-center max-w-md mx-auto my-12",children:[u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mx-auto mb-4",children:u.jsx(qn,{className:"w-6 h-6"})}),u.jsx("h2",{className:"text-lg font-bold text-slate-900 mb-2",children:"Project Not Found"}),u.jsx("p",{className:"text-sm text-slate-500 mb-6",children:p||"The requested project could not be found."}),u.jsx(Si,{to:"/projects",className:"px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm",children:"Return to Projects"})]})]});const W=s.filter(se=>se.status==="done").length,V=s.length,L=V>0?Math.round(W/V*100):0,B=i.dueDate?new Date(i.dueDate).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"No due date",Y=n&&(i.owner===n.id||i.ownerId===n.id||n.role==="admin");return u.jsxs("div",{className:"space-y-8 pb-12",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[u.jsx(Si,{to:"/projects",className:"inline-flex items-center text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors",children:"← Back to Projects"}),Y&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("button",{type:"button",onClick:()=>x(!0),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 shadow-sm transition-colors",children:[u.jsx(hu,{className:"w-3.5 h-3.5"}),"Edit Project"]}),u.jsxs("button",{type:"button",onClick:()=>m(!0),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors",children:[u.jsx(pu,{className:"w-3.5 h-3.5"}),"Delete Project"]})]})]}),u.jsxs("div",{className:"bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-6",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-start justify-between gap-4",children:[u.jsxs("div",{className:"flex items-start gap-3.5 flex-1",children:[u.jsx("span",{className:"w-4 h-4 rounded-full flex-shrink-0 mt-1.5",style:{backgroundColor:i.color||"#3b82f6"}}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight",children:i.name}),u.jsx("p",{className:"text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl",children:i.description})]})]}),u.jsx("div",{className:"flex items-center gap-2 flex-shrink-0",children:u.jsx(ao,{type:"status",value:i.status})})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(wp,{className:"w-4 h-4 text-slate-400"}),u.jsxs("span",{children:["Target Due: ",u.jsx("strong",{className:"text-slate-800",children:B})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Pr,{className:"w-4 h-4 text-slate-400"}),u.jsxs("span",{children:["Deliverables: ",u.jsxs("strong",{className:"text-slate-800",children:[W," of ",V," Completed"]})]})]}),u.jsx("div",{children:u.jsx(K_,{progress:L,color:i.color||"#3b82f6"})})]})]}),u.jsxs("section",{className:"space-y-4",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-bold text-slate-900",children:"Project Tasks"}),u.jsxs("p",{className:"text-xs text-slate-500",children:["Work items scoped specifically to this project (",s.length," total)"]})]}),u.jsx("button",{type:"button",onClick:()=>{E(null),v(!0)},className:"inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors",children:"+ Add Task"})]}),s.length===0?u.jsx(Uo,{title:"No tasks in this project",message:"Get started by creating the first task or deliverable for this project.",actionText:"Create Project Task",onAction:()=>{E(null),v(!0)}}):u.jsx("div",{className:"space-y-3",children:s.map(se=>u.jsx(Gp,{task:se,onStatusChange:H,onEdit:fe=>{E(fe),v(!0)},onDelete:fe=>M(fe),canManage:!0},se.id||se._id))})]}),u.jsx(Q_,{isOpen:g,onClose:()=>x(!1),onSave:F,project:i}),u.jsx(Xc,{isOpen:S,title:"Delete Project?",message:`Are you sure you want to delete "${i.name}"? This action is permanent and will cascade delete all ${s.length} associated tasks.`,confirmText:"Delete Project",isLoading:h,onConfirm:j,onClose:()=>m(!1)}),u.jsx(ey,{isOpen:y,onClose:()=>{v(!1),E(null)},onSave:I,task:b,projects:[i],users:o,defaultProjectId:t}),u.jsx(Xc,{isOpen:!!A,title:"Delete Task?",message:`Are you sure you want to permanently delete "${A==null?void 0:A.title}"?`,confirmText:"Delete Task",isLoading:C,onConfirm:J,onClose:()=>M(null)})]})},hR=()=>{const[t,e]=z.useState([]),[n,i]=z.useState([]),[r,s]=z.useState([]),[a,o]=z.useState(""),[l,c]=z.useState("all"),[f,p]=z.useState("all"),[d,g]=z.useState("all"),[x,S]=z.useState(!0),[m,h]=z.useState(""),[_,y]=z.useState(!1),[v,b]=z.useState(null),[E,A]=z.useState(null),[M,C]=z.useState(!1);z.useEffect(()=>{(async()=>{var B,Y;try{const[se,fe]=await Promise.all([Ln.getAll(),e_.getAll().catch(()=>({data:{users:[]}}))]);i(((B=se.data)==null?void 0:B.projects)||[]),s(((Y=fe.data)==null?void 0:Y.users)||[])}catch{}})()},[]);const R=z.useCallback(async()=>{var L;S(!0),h("");try{const B=await on.getAll({search:a,status:l,priority:f,projectId:d!=="all"?d:void 0});e(((L=B.data)==null?void 0:L.tasks)||[])}catch(B){h(B.message||"Failed to load tasks.")}finally{S(!1)}},[a,l,f,d]);z.useEffect(()=>{const L=setTimeout(()=>{R()},250),B=()=>R();return window.addEventListener("taskflow:refresh-data",B),()=>{clearTimeout(L),window.removeEventListener("taskflow:refresh-data",B)}},[R]);const N={all:t.length,todo:t.filter(L=>L.status==="todo").length,"in-progress":t.filter(L=>L.status==="in-progress").length,done:t.filter(L=>L.status==="done").length},F={all:t.length,low:t.filter(L=>L.priority==="low").length,medium:t.filter(L=>L.priority==="medium").length,high:t.filter(L=>L.priority==="high").length},j=[{key:"all",label:"All",count:N.all},{key:"todo",label:"Todo",count:N.todo},{key:"in-progress",label:"In Progress",count:N["in-progress"]},{key:"done",label:"Done",count:N.done}],I=[{key:"all",label:"All",count:F.all},{key:"low",label:"Low",count:F.low},{key:"medium",label:"Medium",count:F.medium},{key:"high",label:"High",count:F.high}],H=async L=>{if(v){const B=v.id||v._id;await on.update(B,L)}else await on.create(L);b(null),await R()},J=async(L,B)=>{try{e(Y=>Y.map(se=>(se.id||se._id)===L?{...se,status:B}:se)),await on.update(L,{status:B})}catch(Y){h(Y.message||"Failed to update task status."),await R()}},W=async()=>{if(E){C(!0);try{const L=E.id||E._id;await on.delete(L),A(null),await R()}catch(L){h(L.message||"Failed to delete task."),A(null)}finally{C(!1)}}},V=()=>{o(""),c("all"),p("all"),g("all")};return u.jsxs("div",{className:"space-y-6 pb-12",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight",children:"Tasks"}),u.jsx("p",{className:"text-sm text-slate-500 mt-1",children:"Track issues, feature work, and prioritize engineering milestones"})]}),u.jsx("button",{type:"button",onClick:()=>{b(null),y(!0)},disabled:n.length===0,className:"inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed",title:n.length===0?"Create a project first":"Create new task",children:"+ Create Task"})]}),m&&u.jsxs("div",{className:"p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3",children:[u.jsx(qn,{className:"w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5"}),u.jsx("div",{className:"text-sm text-rose-700 font-medium",children:m})]}),u.jsxs("div",{className:"bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm space-y-4",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[u.jsx("div",{className:"flex-1",children:u.jsx(J_,{id:"tasks-search",value:a,onChange:o,placeholder:"Filter tasks by title..."})}),u.jsx("div",{className:"sm:w-64",children:u.jsxs("select",{value:d,onChange:L=>g(L.target.value),className:"w-full h-10 px-3 py-2 rounded-lg border border-slate-300 text-xs font-medium bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors",children:[u.jsx("option",{value:"all",children:"All Projects"}),n.map(L=>u.jsx("option",{value:L.id||L._id,children:L.name},L.id||L._id))]})})]}),u.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2 border-t border-slate-100",children:[u.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[u.jsx("span",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1",children:"Status:"}),j.map(L=>{const B=l===L.key;return u.jsxs("button",{type:"button",onClick:()=>c(L.key),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${B?"bg-blue-600 text-white shadow-sm":"bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"}`,children:[u.jsx("span",{children:L.label}),u.jsx("span",{className:`px-1.5 py-0.2 rounded-full text-[11px] font-semibold ${B?"bg-blue-700/80 text-white":"bg-slate-200 text-slate-700"}`,children:L.count})]},L.key)})]}),u.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[u.jsx("span",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1",children:"Priority:"}),I.map(L=>{const B=f===L.key;return u.jsxs("button",{type:"button",onClick:()=>p(L.key),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${B?"bg-slate-800 text-white shadow-sm":"bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"}`,children:[u.jsx("span",{children:L.label}),u.jsx("span",{className:`px-1.5 py-0.2 rounded-full text-[11px] font-semibold ${B?"bg-slate-950 text-white":"bg-slate-200 text-slate-700"}`,children:L.count})]},L.key)})]})]})]}),x?u.jsx(jp,{count:5,type:"task"}):t.length===0?u.jsx(Uo,{title:"No tasks found",message:a||l!=="all"||f!=="all"||d!=="all"?"No tasks matching your active filters and search terms.":"No tasks currently scheduled. Create your first task to start tracking work.",actionText:a||l!=="all"||f!=="all"||d!=="all"?"Reset Filters":"+ Create Task",onAction:a||l!=="all"||f!=="all"||d!=="all"?V:()=>{b(null),y(!0)}}):u.jsx("div",{className:"space-y-3",children:t.map(L=>u.jsx(Gp,{task:L,onStatusChange:J,onEdit:B=>{b(B),y(!0)},onDelete:B=>A(B)},L.id||L._id))}),u.jsx(ey,{isOpen:_,onClose:()=>{y(!1),b(null)},onSave:H,task:v,projects:n,users:r,defaultProjectId:d!=="all"?d:""}),u.jsx(Xc,{isOpen:!!E,title:"Delete Task?",message:`Are you sure you want to permanently delete "${E==null?void 0:E.title}"?`,confirmText:"Delete Task",isLoading:M,onConfirm:W,onClose:()=>A(null)})]})},pR=["🎯 What should I focus on today?","📁 Create project: Cloud Infrastructure & Redis","⚡ Explain JWT authentication in TaskFlow","💡 Break down tasks for MongoDB database indexing","🚀 How do I optimize React rendering performance?"],mR=({content:t})=>{if(!t)return null;const e=t.split(`
`);return u.jsx("div",{className:"space-y-2 text-sm leading-relaxed text-slate-800",children:e.map((n,i)=>{if(n.startsWith("### "))return u.jsx("h4",{className:"font-bold text-slate-900 text-sm mt-3 mb-1",children:n.replace("### ","")},i);if(n.startsWith("## "))return u.jsx("h3",{className:"font-bold text-slate-900 text-base mt-3 mb-1",children:n.replace("## ","")},i);if(n.startsWith("# "))return u.jsx("h2",{className:"font-bold text-slate-900 text-lg mt-3 mb-1",children:n.replace("# ","")},i);if(n.trim().startsWith("- ")||n.trim().startsWith("* ")){const s=n.trim().replace(/^[-*]\s+/,"");return u.jsxs("div",{className:"flex items-start gap-2 ml-2 my-1",children:[u.jsx("span",{className:"text-blue-500 font-bold",children:"•"}),u.jsx("span",{className:"flex-1",children:Nd(s)})]},i)}const r=n.trim().match(/^(\d+)\.\s+(.*)/);return r?u.jsxs("div",{className:"flex items-start gap-2 ml-2 my-1",children:[u.jsxs("span",{className:"font-semibold text-blue-600 text-xs mt-0.5",children:[r[1],"."]}),u.jsx("span",{className:"flex-1",children:Nd(r[2])})]},i):n.trim()?u.jsx("p",{children:Nd(n)},i):u.jsx("div",{className:"h-1"},i)})})};function Nd(t){const e=[];let n=t,i=0;for(;n.length>0;){const r=n.match(/\*\*(.+?)\*\*/),s=n.match(/`(.+?)`/);let a=null,o=null;if(r&&(!s||r.index<s.index)?(a=r,o="bold"):s&&(a=s,o="code"),!a){e.push(n);break}a.index>0&&e.push(n.substring(0,a.index)),o==="bold"?e.push(u.jsx("strong",{className:"font-semibold text-slate-900",children:a[1]},i++)):o==="code"&&e.push(u.jsx("code",{className:"px-1.5 py-0.5 rounded bg-slate-100 text-blue-600 font-mono text-xs border border-slate-200",children:a[1]},i++)),n=n.substring(a.index+a[0].length)}return e}const gR=({isOpen:t,onClose:e,onWorkspaceMutated:n})=>{const[i,r]=z.useState([{id:"welcome-msg",role:"assistant",content:`Hello! I am your **TaskFlow AI Copilot**, specializing in developer productivity, full-stack architecture (React, Node.js, Express, MongoDB), debugging, and project execution.

Ask me technical questions, have me break down tasks, or ask me to prepare new projects or tasks directly in your workspace!`,action:null,timestamp:new Date}]),[s,a]=z.useState(""),[o,l]=z.useState(!1),[c,f]=z.useState({}),[p,d]=z.useState(""),g=z.useRef(null),x=z.useRef(null);if(z.useEffect(()=>{var y;t&&((y=g.current)==null||y.scrollIntoView({behavior:"smooth"}))},[i,t]),z.useEffect(()=>{t&&setTimeout(()=>{var y;return(y=x.current)==null?void 0:y.focus()},150)},[t]),!t)return null;const S=async y=>{const v=y||s;if(!v||!v.trim())return;const b=v.trim();a(""),d("");const E={id:`user-${Date.now()}`,role:"user",content:b,timestamp:new Date};r(A=>[...A,E]),l(!0);try{const A=i.filter(N=>N.id!=="welcome-msg"&&N.content&&N.content.trim()).slice(-8).map(N=>({role:N.role,content:N.content.trim()})),C=(await Mp.copilot(b,A)).data,R={id:`assistant-${Date.now()}`,role:"assistant",content:(C==null?void 0:C.reply)||"I am ready to assist with your development tasks.",intent:C==null?void 0:C.intent,action:(C==null?void 0:C.action)||null,timestamp:new Date};r(N=>[...N,R])}catch(A){d(A.message||"Failed to communicate with Copilot. Please try again.")}finally{l(!1)}},m=async(y,v)=>{var b,E;if(!(!v||!v.actionType)){f(A=>({...A,[y]:!0})),d("");try{let A="";if(v.actionType==="create_project"){const C=(b=(await Ln.create(v.payload)).data)==null?void 0:b.project;A=`✅ Successfully created project **"${(C==null?void 0:C.name)||v.payload.name}"** in your database.`}else if(v.actionType==="create_task"){const C=(E=(await on.create(v.payload)).data)==null?void 0:E.task;A=`✅ Successfully added task **"${(C==null?void 0:C.title)||v.payload.title}"** to your workspace.`}else v.actionType==="update_task_status"&&(await on.update(v.payload.taskId,{status:v.payload.status}),A=`✅ Updated task status to **${v.payload.status}**.`);r(M=>M.map(C=>C.id===y?{...C,action:{...C.action,executed:!0}}:C)),r(M=>[...M,{id:`sys-${Date.now()}`,role:"assistant",content:A,timestamp:new Date}]),n&&n()}catch(A){d(A.message||"Failed to execute proposed action. Please try manually.")}finally{f(A=>({...A,[y]:!1}))}}},h=y=>{r(v=>v.map(b=>b.id===y?{...b,action:{...b.action,dismissed:!0}}:b))},_=y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),S())};return u.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:u.jsxs("div",{className:"flex min-h-full items-center justify-center p-3 sm:p-4 text-center",children:[u.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity",onClick:e}),u.jsxs("div",{className:"relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-3xl flex flex-col h-[85vh] border border-slate-200",children:[u.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex-shrink-0",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(to,{size:"lg",className:"shadow-lg shadow-purple-500/30"}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"TaskFlow AI Copilot"}),u.jsx("p",{className:"text-xs text-slate-300",children:"Personal AI Productivity Assistant · Code, Architecture & Workspace Execution"})]})]}),u.jsx("button",{type:"button",onClick:e,className:"text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10",title:"Close Copilot",children:u.jsx(fs,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50",children:[i.map(y=>{var b,E;const v=y.role==="assistant";return u.jsxs("div",{className:`flex gap-3 ${v?"items-start":"items-start flex-row-reverse"}`,children:[v?u.jsx(to,{size:"md"}):u.jsx("div",{className:"w-8 h-8 rounded-lg bg-blue-600 text-white shadow-sm flex items-center justify-center text-xs font-bold flex-shrink-0",children:"YOU"}),u.jsxs("div",{className:`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 shadow-sm ${v?"bg-white border border-slate-200/90 text-slate-800":"bg-blue-600 text-white"}`,children:[v?u.jsx(mR,{content:y.content}):u.jsx("p",{className:"text-sm whitespace-pre-wrap leading-relaxed",children:y.content}),y.action&&y.action.requiresConfirmation&&u.jsx("div",{className:"mt-4 pt-3 border-t border-slate-100",children:u.jsxs("div",{className:`rounded-xl p-3.5 border text-xs ${y.action.executed?"bg-emerald-50 border-emerald-200 text-emerald-800":y.action.dismissed?"bg-slate-100 border-slate-200 text-slate-500":"bg-purple-50/80 border-purple-200 text-slate-800"}`,children:[u.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[u.jsxs("span",{className:"font-bold flex items-center gap-1.5 text-purple-900",children:[y.action.actionType==="create_project"&&u.jsx(Ho,{className:"w-4 h-4 text-purple-600"}),y.action.actionType==="create_task"&&u.jsx(Pr,{className:"w-4 h-4 text-purple-600"}),u.jsxs("span",{children:[y.action.actionType==="create_project"&&"Proposed Project Creation",y.action.actionType==="create_task"&&"Proposed Task Creation",y.action.actionType==="update_task_status"&&"Proposed Task Status Update"]})]}),y.action.executed?u.jsx("span",{className:"px-2 py-0.5 bg-emerald-600 text-white rounded font-semibold text-[10px]",children:"Executed"}):y.action.dismissed?u.jsx("span",{className:"px-2 py-0.5 bg-slate-300 text-slate-700 rounded font-semibold text-[10px]",children:"Dismissed"}):u.jsx("span",{className:"px-2 py-0.5 bg-purple-200 text-purple-800 rounded font-semibold text-[10px]",children:"Requires Confirmation"})]}),u.jsx("p",{className:"font-semibold text-slate-900 mb-1",children:((b=y.action.preview)==null?void 0:b.title)||"Proposed Action"}),u.jsx("p",{className:"text-slate-600 mb-3 leading-normal",children:((E=y.action.preview)==null?void 0:E.details)||"Review proposed modifications before saving."}),y.action.payload&&!y.action.executed&&!y.action.dismissed&&u.jsxs("div",{className:"p-2.5 bg-white rounded-lg border border-purple-100 space-y-1 mb-3 text-[11px]",children:[y.action.payload.name&&u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400",children:"Project:"})," ",u.jsx("span",{className:"font-medium text-slate-700",children:y.action.payload.name})]}),y.action.payload.title&&u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400",children:"Task Title:"})," ",u.jsx("span",{className:"font-medium text-slate-700",children:y.action.payload.title})]}),y.action.payload.priority&&u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400",children:"Priority:"})," ",u.jsx("span",{className:"font-medium capitalize text-slate-700",children:y.action.payload.priority})]})]}),!y.action.executed&&!y.action.dismissed&&u.jsxs("div",{className:"flex items-center gap-2 pt-1",children:[u.jsx("button",{type:"button",disabled:c[y.id],onClick:()=>m(y.id,y.action),className:"px-3 py-1.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg shadow-sm transition-colors text-xs flex items-center gap-1.5",children:c[y.id]?u.jsx("span",{children:"Creating..."}):u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"✓"}),u.jsx("span",{children:"Confirm & Create"})]})}),u.jsx("button",{type:"button",disabled:c[y.id],onClick:()=>h(y.id),className:"px-3 py-1.5 bg-slate-200 hover:bg-slate-300 disabled:opacity-50 text-slate-700 font-medium rounded-lg transition-colors text-xs",children:"Dismiss"})]})]})}),u.jsx("div",{className:"mt-2 text-[10px] text-slate-400 text-right",children:new Date(y.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]},y.id)}),o&&u.jsxs("div",{className:"flex gap-3 items-start",children:[u.jsx(to,{size:"md"}),u.jsxs("div",{className:"bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-2",children:[u.jsx("div",{className:"w-2 h-2 rounded-full bg-purple-500 animate-bounce",style:{animationDelay:"0ms"}}),u.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-500 animate-bounce",style:{animationDelay:"150ms"}}),u.jsx("div",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-bounce",style:{animationDelay:"300ms"}}),u.jsx("span",{className:"text-xs text-slate-500 font-medium ml-1",children:"Copilot is thinking..."})]})]}),u.jsx("div",{ref:g})]}),u.jsxs("div",{className:"px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar flex-shrink-0",children:[u.jsx("span",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap pl-1",children:"Suggestions:"}),pR.map((y,v)=>u.jsx("button",{type:"button",disabled:o,onClick:()=>S(y),className:"text-xs bg-slate-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 border border-slate-200 text-slate-600 px-3 py-1 rounded-full whitespace-nowrap transition-colors flex-shrink-0",children:y},v))]}),p&&u.jsxs("div",{className:"px-4 py-2 bg-rose-50 border-t border-rose-100 flex items-center gap-2 text-xs text-rose-700 flex-shrink-0",children:[u.jsx(qn,{className:"w-4 h-4 text-rose-600 flex-shrink-0"}),u.jsx("span",{className:"truncate",children:p})]}),u.jsx("div",{className:"p-4 bg-white border-t border-slate-200 flex-shrink-0",children:u.jsxs("form",{onSubmit:y=>{y.preventDefault(),S()},className:"flex items-center gap-2",children:[u.jsx("input",{ref:x,type:"text",value:s,onChange:y=>a(y.target.value),onKeyDown:_,placeholder:"Ask about your tasks, architecture, or ask to create a project...",disabled:o,className:"flex-1 px-4 py-3 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all placeholder:text-slate-400"}),u.jsxs("button",{type:"submit",disabled:!s.trim()||o,className:"px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-40 text-white text-sm font-semibold rounded-xl shadow-sm transition-all flex items-center gap-1.5 flex-shrink-0",children:[u.jsx("span",{children:"Send"}),u.jsx("span",{children:"→"})]})]})})]})]})})},Xl=({children:t})=>{const[e,n]=fc.useState(!1);return fc.useEffect(()=>{const i=()=>n(!0);return window.addEventListener("taskflow:open-copilot",i),()=>window.removeEventListener("taskflow:open-copilot",i)},[]),u.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-900 flex relative",children:[u.jsx(Zw,{}),u.jsxs("div",{className:"flex-1 flex flex-col min-w-0 xl:pl-64",children:[u.jsx(Kw,{}),u.jsx("main",{className:"flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto",children:t})]}),u.jsxs("button",{type:"button",onClick:()=>n(!0),className:"fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all font-semibold text-sm transform hover:-translate-y-0.5 cursor-pointer group border border-white/20",title:"Open TaskFlow AI Copilot",children:[u.jsx(to,{size:"base",className:"group-hover:scale-110 transition-transform shadow-none"}),u.jsx("span",{className:"font-medium",children:"Ask AI Copilot"})]}),u.jsx(gR,{isOpen:e,onClose:()=>n(!1),onWorkspaceMutated:()=>window.dispatchEvent(new CustomEvent("taskflow:refresh-data"))})]})},xR=()=>u.jsx(Ow,{children:u.jsxs(Mw,{children:[u.jsx(Di,{path:"/login",element:u.jsx(nR,{})}),u.jsx(Di,{path:"/register",element:u.jsx(iR,{})}),u.jsx(Di,{path:"/dashboard",element:u.jsx(dl,{children:u.jsx(Xl,{children:u.jsx(sR,{})})})}),u.jsx(Di,{path:"/projects",element:u.jsx(dl,{children:u.jsx(Xl,{children:u.jsx(dR,{})})})}),u.jsx(Di,{path:"/projects/:id",element:u.jsx(dl,{children:u.jsx(Xl,{children:u.jsx(fR,{})})})}),u.jsx(Di,{path:"/tasks",element:u.jsx(dl,{children:u.jsx(Xl,{children:u.jsx(hR,{})})})}),u.jsx(Di,{path:"/",element:u.jsx(Af,{to:"/dashboard",replace:!0})}),u.jsx(Di,{path:"*",element:u.jsx(Af,{to:"/dashboard",replace:!0})})]})});Pd.createRoot(document.getElementById("root")).render(u.jsx(fc.StrictMode,{children:u.jsx(Nw,{children:u.jsx(xR,{})})}));
