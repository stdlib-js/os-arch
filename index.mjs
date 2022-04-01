// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function e(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var r="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function t(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}var o=t,i=n;function u(e){if(o===setTimeout)return setTimeout(e,0);if((o===t||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(r){try{return o.call(null,e,0)}catch(r){return o.call(this,e,0)}}}"function"==typeof r.setTimeout&&(o=setTimeout),"function"==typeof r.clearTimeout&&(i=clearTimeout);var c,a=[],f=!1,l=-1;function s(){f&&c&&(f=!1,c.length?a=c.concat(a):l=-1,a.length&&m())}function m(){if(!f){var e=u(s);f=!0;for(var r=a.length;r;){for(c=a,a=[];++l<r;)c&&c[l].run();l=-1,r=a.length}c=null,f=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===n||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(r){try{return i.call(null,e)}catch(r){return i.call(this,e)}}}(e)}}function h(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];a.push(new d(e,r)),1!==a.length||f||u(m)}function d(e,r){this.fun=e,this.array=r}d.prototype.run=function(){this.fun.apply(null,this.array)};var w={},v=[],p={},g={},b={};function T(){}var y=T,_=T,k=T,L=T,O=T,j=T,E=T;function D(e){throw new Error("process.binding is not supported")}function M(){return"/"}function N(e){throw new Error("process.chdir is not supported")}function x(){return 0}var A=r.performance||{},P=A.now||A.mozNow||A.msNow||A.oNow||A.webkitNow||function(){return(new Date).getTime()};function z(e){var r=.001*P.call(A),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var q=new Date;function B(){return(new Date-q)/1e3}var C={nextTick:h,title:"browser",browser:true,env:w,argv:v,version:"",versions:p,on:y,addListener:_,once:k,off:L,removeListener:O,removeAllListeners:j,emit:E,binding:D,cwd:M,chdir:N,umask:x,hrtime:z,platform:"browser",release:g,config:b,uptime:B},F=e(Object.freeze({__proto__:null,addListener:_,argv:v,binding:D,browser:true,chdir:N,config:b,cwd:M,default:C,emit:E,env:w,hrtime:z,nextTick:h,off:L,on:y,once:k,platform:"browser",release:g,removeAllListeners:j,removeListener:O,title:"browser",umask:x,uptime:B,version:"",versions:p})).arch;export{F as default};
//# sourceMappingURL=index.mjs.map
