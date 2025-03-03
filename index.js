// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,b,"$1e"),n=f.call(n,w,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):s.call(n)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function E(e){return e!=e}function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,a,o,c,s,l,f,p,g,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))c+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+v(h):v(h)+p)),c+=n.arg||"",s+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){var r,t;if("string"!=typeof e)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[O(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var I=Object.prototype,A=I.toString,F=I.__defineGetter__,N=I.__defineSetter__,P=I.__lookupGetter__,$=I.__lookupSetter__,R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&F&&F.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};function C(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e,r,t){R(e,r,{configurable:!1,enumerable:!1,get:t})}function M(e){return"number"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return Z&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString,L=Object.prototype.hasOwnProperty,W="function"==typeof Symbol?Symbol:void 0,X="function"==typeof W?W.toStringTag:"",z=B()?function(e){var r,t,n,i,a;if(null==e)return J.call(e);t=e[X],a=X,r=null!=(i=e)&&L.call(i,a);try{e[X]=void 0}catch(r){return J.call(e)}return n=J.call(e),r?e[X]=t:delete e[X],n}:function(e){return J.call(e)},U=Number,Y=U.prototype.toString,q=B();function D(e){return"object"==typeof e&&(e instanceof U||(q?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function H(e){return M(e)||D(e)}C(H,"isPrimitive",M),C(H,"isObject",D);var K=Number.POSITIVE_INFINITY,Q=U.NEGATIVE_INFINITY,ee=Math.floor;function re(e){return e<K&&e>Q&&ee(r=e)===r;var r}function te(e){return M(e)&&re(e)}function ne(e){return D(e)&&re(e.valueOf())}function ie(e){return te(e)||ne(e)}function ae(e){return null===e}function oe(e){return void 0===e}function ue(e){return te(e)||ae(e)||oe(e)}function ce(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof ce))return new ce(r,t,n);if(!ue(r))throw new TypeError(V("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!ue(t))throw new TypeError(V("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!ue(n))throw new TypeError(V("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(V("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}function se(){return/^\s*function\s*([^(]*)/i}C(ie,"isPrimitive",te),C(ie,"isObject",ne),C(ce,"name","Slice"),G(ce.prototype,"start",(function(){return this._start})),G(ce.prototype,"stop",(function(){return this._stop})),G(ce.prototype,"step",(function(){return this._step})),C(ce.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),C(ce.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var le=/^\s*function\s*([^(]*)/i;C(se,"REGEXP",le);var fe=Array.isArray?Array.isArray:function(e){return"[object Array]"===z(e)};function pe(e){return null!==e&&"object"==typeof e}function ge(e){var r,t,n,i;if(("Object"===(t=z(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=le.exec(n.toString()))return r[1]}return pe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}function de(e){return te(e)||ae(e)||oe(e)||function(e){return e instanceof ce||"Slice"===ge(e)}(e)}function he(){var e,r,t,n,i;if(e=arguments.length,!(this instanceof he)){if(1===e)return new he(arguments[0]);if(2===e)return new he(arguments[0],arguments[1]);if(3===e)return new he(arguments[0],arguments[1],arguments[2]);if(4===e)return new he(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new he(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],i=0;i<e;i++)t.push(arguments[i]);return r=Object.create(he.prototype),he.apply(r,t)}for(this._data=[],i=0;i<e;i++){if(!de(n=arguments[i]))throw new TypeError(V("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,String(n)));this._data.push(void 0===n?null:n)}return this}return C(pe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!fe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(pe)),C(he,"name","MultiSlice"),G(he.prototype,"ndims",(function(){return this._data.length})),G(he.prototype,"data",(function(){return this._data.slice()})),C(he.prototype,"toString",(function(){var e,r,t;for(e=this._data,r=[],t=0;t<e.length;t++)r.push(String(e[t]));return"MultiSlice("+r.join(",")+")"})),C(he.prototype,"toJSON",(function(){var e,r,t,n;for(e=this._data,r={type:"MultiSlice",data:[]},n=0;n<e.length;n++)t=e[n],r.data.push(t&&"function"==typeof t.toJSON?t.toJSON():t);return r})),function(e){switch(e.length){case 0:return new he;case 1:return new he(e[0]);case 2:return new he(e[0],e[1]);case 3:return new he(e[0],e[1],e[2]);case 4:return new he(e[0],e[1],e[2],e[3]);case 5:return new he(e[0],e[1],e[2],e[3],e[4]);case 6:return new he(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new he(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);case 8:return new he(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);case 9:return new he(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);case 10:return new he(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);default:return he.apply(null,e)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).args2multislice=r();
//# sourceMappingURL=index.js.map
