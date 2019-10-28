!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=161)}([function(t,e,n){var r=n(4),i=n(31),o=n(22),a=n(23),s=n(32),l=function(t,e,n){var c,u,p,h,f=t&l.F,d=t&l.G,y=t&l.S,m=t&l.P,_=t&l.B,g=d?r:y?r[e]||(r[e]={}):(r[e]||{}).prototype,v=d?i:i[e]||(i[e]={}),b=v.prototype||(v.prototype={});for(c in d&&(n=e),n)p=((u=!f&&g&&void 0!==g[c])?g:n)[c],h=_&&u?s(p,r):m&&"function"==typeof p?s(Function.call,p):p,g&&a(g,c,p,t&l.U),v[c]!=p&&o(v,c,h),m&&b[c]!=p&&(b[c]=p)};r.core=i,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return p})),n.d(e,"h",(function(){return h}));n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t){return t.indexOf(".")>=0}function i(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function o(t,e){return 0===t.indexOf(e+".")}function a(t,e){return 0===e.indexOf(t+".")}function s(t,e,n){return e+n.slice(t.length)}function l(t,e){return t===e||o(t,e)||a(t,e)}function c(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let r=t[n].toString().split(".");for(let t=0;t<r.length;t++)e.push(r[t])}return e.join(".")}return t}function u(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function p(t,e,n){let r=t,i=u(e);for(let t=0;t<i.length;t++){if(!r)return;r=r[i[t]]}return n&&(n.path=i.join(".")),r}function h(t,e,n){let r=t,i=u(e),o=i[i.length-1];if(i.length>1){for(let t=0;t<i.length-1;t++){if(!(r=r[i[t]]))return}r[o]=n}else r[e]=n;return i.join(".")}},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){"use strict";n.d(e,"i",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"h",(function(){return p})),n.d(e,"b",(function(){return h}));n(8);var r=n(20);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let o=Object(r.a)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let s=!1;let l=!1;let c=!1;let u=!1;let p=!1;let h=!0},function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},function(t,e,n){var r=n(67)("wks"),i=n(50),o=n(4).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(34),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(t){this.value=t.toString()}toString(){return this.value}}function i(t){if(t instanceof r)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const o=function(t,...e){const n=document.createElement("template");return n.innerHTML=e.reduce((e,n,o)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof r)return i(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(n)+t[o+1],t[0]),n}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;const o=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=r++;return function(r){let i=r.__mixinSet;if(i&&i[n])return r;let o=e,a=o.get(r);a||(a=t(r),o.set(r,a));let s=Object.create(a.__mixinSet||i||null);return s[n]=!0,a.__mixinSet=s,a}}},function(t,e,n){"use strict";n(8);var r=n(1),i=(n(7),n(92)),o=n(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function a(t){return"slot"===t.localName}let s=class{static getFlattenedNodes(t){const e=Object(r.a)(t);return a(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>a(t)?(t=t,Object(r.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){a(this._target)?this._listenSlots([this._target]):Object(r.a)(this._target).children&&(this._listenSlots(Object(r.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){a(this._target)?this._unlistenSlots([this._target]):Object(r.a)(this._target).children&&(this._unlistenSlots(Object(r.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,o.a.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=Object(i.a)(e,this._effectiveNodes);for(let e,r=0;r<n.length&&(e=n[r]);r++)for(let n,r=0;r<e.removed.length&&(n=e.removed[r]);r++)t.removedNodes.push(n);for(let r,i=0;i<n.length&&(r=n[i]);i++)for(let n=r.index;n<r.index+r.addedCount;n++)t.addedNodes.push(e[n]);this._effectiveNodes=e;let r=!1;return(t.addedNodes.length||t.removedNodes.length)&&(r=!0,this.callback.call(this._target,t)),r}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];a(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];a(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};var l=n(43);n(25);n.d(e,"c",(function(){return p})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return l.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const c=Element.prototype,u=c.matches||c.matchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector||c.webkitMatchesSelector,p=function(t,e){return u.call(t,e)};class h{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new s(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(r.a)(this.node).contains(t))return!0;let e=t,n=t.ownerDocument;for(;e&&e!==n&&e!==this.node;)e=Object(r.a)(e).parentNode||Object(r.a)(e).host;return e===this.node}getOwnerRoot(){return Object(r.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(r.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(r.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(r.a)(e).assignedSlot;return t}importNode(t,e){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(r.a)(n).importNode(t,e)}getEffectiveChildNodes(){return s.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),n=[];for(let r,i=0,o=e.length;i<o&&(r=e[i]);i++)r.nodeType===Node.ELEMENT_NODE&&p(r,t)&&n.push(r);return n}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function f(t,e){for(let n=0;n<e.length;n++){let r=e[n];Object.defineProperty(t,r,{get:function(){return this.node[r]},configurable:!0})}}class d{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}h.prototype.cloneNode,h.prototype.appendChild,h.prototype.insertBefore,h.prototype.removeChild,h.prototype.replaceChild,h.prototype.setAttribute,h.prototype.removeAttribute,h.prototype.querySelector,h.prototype.querySelectorAll,h.prototype.parentNode,h.prototype.firstChild,h.prototype.lastChild,h.prototype.nextSibling,h.prototype.previousSibling,h.prototype.firstElementChild,h.prototype.lastElementChild,h.prototype.nextElementSibling,h.prototype.previousElementSibling,h.prototype.childNodes,h.prototype.children,h.prototype.classList,h.prototype.textContent,h.prototype.innerHTML;let y=h;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(h.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=h.prototype[e])}),f(t.prototype,["classList"]),y=t,Object.defineProperties(d.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&m(t).getOwnerRoot(),n=this.path;for(let t=0;t<n.length;t++){const r=n[t];if(m(r).getOwnerRoot()===e)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let n=0;n<e.length;n++){let r=e[n];t[r]=function(){return this.node[r].apply(this.node,arguments)}}}(h.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),f(h.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let n=0;n<e.length;n++){let r=e[n];Object.defineProperty(t,r,{get:function(){return this.node[r]},set:function(t){this.node[r]=t},configurable:!0})}}(h.prototype,["textContent","innerHTML","className"]);const m=function(t){if((t=t||document)instanceof y)return t;if(t instanceof d)return t;let e=t.__domApi;return e||(e=t instanceof Event?new d(t):new y(t),t.__domApi=e),e}},function(t,e,n){t.exports=!n(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(3),i=n(123),o=n(37),a=Object.defineProperty;e.f=n(14)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(38);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r=0,i=0,o=[],a=0,s=document.createTextNode("");new window.MutationObserver((function(){const t=o.length;for(let e=0;e<t;e++){let t=o[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}o.splice(0,t),i+=t})).observe(s,{characterData:!0});const l={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},c={run:t=>(s.textContent=a++,o.push(t),r++),cancel(t){const e=t-i;if(e>=0){if(!o[e])throw new Error("invalid async handle: "+t);o[e]=null}}}},function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=!(window.ShadyDOM&&window.ShadyDOM.inUse);let i,o;function a(t){i=(!t||!t.shimcssproperties)&&(r||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(o=window.ShadyCSS.cssBuild);const s=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?i=window.ShadyCSS.nativeCss:window.ShadyCSS?(a(window.ShadyCSS),window.ShadyCSS=void 0):a(window.WebComponents&&window.WebComponents.flags);const l=i},function(t,e,n){"use strict";var r=n(66),i=(n(30),n(8),n(61)),o=n(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function a(t,e,n,r,i){let o;i&&(o="object"==typeof n&&null!==n)&&(r=t.__dataTemp[e]);let a=r!==n&&(r==r||n==n);return o&&a&&(t.__dataTemp[e]=n),a}const s=Object(o.a)(t=>{return class extends t{_shouldPropertyChange(t,e,n){return a(this,t,e,n,!0)}}}),l=Object(o.a)(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return a(this,t,e,n,this.mutableData)}}});s._mutablePropertyChange=a;var c=n(7),u=n(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let p=null;function h(){return p}h.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:h,writable:!0}});const f=Object(i.a)(h),d=s(f);const y=Object(i.a)(class{});class m extends y{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(t,e,n)}}_showHideChildren(t){let e=this.children;for(let n=0;n<e.length;n++){let r=e[n];if(Boolean(t)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)t?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(t)r.__polymerReplaced__=document.createComment("hidden-slot"),Object(u.a)(Object(u.a)(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const t=r.__polymerReplaced__;t&&Object(u.a)(Object(u.a)(t).parentNode).replaceChild(r,t)}else r.style&&(t?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=t,r._showHideChildren&&r._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}m.prototype.__dataHost,m.prototype.__templatizeOptions,m.prototype._methodHost,m.prototype.__templatizeOwner,m.prototype.__hostProps;const _=s(m);function g(t){let e=t.__dataHost;return e&&e._methodHost||e}function v(t,e,n){let r=n.mutableData?_:m;S.mixin&&(r=S.mixin(r));let i=class extends r{};return i.prototype.__templatizeOptions=n,i.prototype._bindTemplate(t),function(t,e,n,r){let i=n.hostProps||{};for(let e in r.instanceProps){delete i[e];let n=r.notifyInstanceProp;n&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:x(e,n)})}if(r.forwardHostProp&&e.__dataHost)for(let e in i)n.hasHostProps||(n.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(i,t,e,n),i}function b(t,e,n){let r=n.forwardHostProp;if(r&&e.hasHostProps){let i=e.templatizeTemplateClass;if(!i){let t=n.mutableData?d:f;i=e.templatizeTemplateClass=class extends t{};let o=e.hostProps;for(let t in o)i.prototype._addPropertyEffect("_host_"+t,i.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:w(t,r)}),i.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){p=t,Object.setPrototypeOf(t,e.prototype),new e,p=null}(t,i),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function w(t,e){return function(t,n,r){e.call(t.__templatizeOwner,n.substring("_host_".length),r[n])}}function x(t,e){return function(t,n,r){e.call(t.__templatizeOwner,t,n,r[n])}}function S(t,e,n){if(c.g&&!g(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let r=(e?e.constructor:m)._parseTemplate(t),i=r.templatizeInstanceClass;i||(i=v(t,r,n),r.templatizeInstanceClass=i),b(t,r,n);let o=class extends i{};return o.prototype._methodHost=g(t),o.prototype.__dataHost=t,o.prototype.__templatizeOwner=e,o.prototype.__hostProps=r.hostProps,o=o}function O(t,e){let n;for(;e;)if(n=e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=Object(u.a)(e).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var P=n(91);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let C=!1;function E(){if(c.c&&!c.i){if(!C){C=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const A=Object(P.a)(l(Object(i.a)(HTMLElement)));customElements.define("dom-bind",class extends A{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),c.g)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,n,r){this.mutableData=!0}connectedCallback(){E()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(u.a)(Object(u.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(!(t=t||this.querySelector("template"))){let e=new MutationObserver(()=>{if(!(t=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var k=n(60),T=n(11);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const M=Object(k.a)(HTMLElement);var j=n(25),N=n(43),I=n(2),R=n(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const L=l(M);class F extends L{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),E()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(u.a)(Object(u.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=S(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let n=this.__instances;for(let r,i=0;i<n.length&&(r=n[i]);i++)r.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if(Object(I.e)(this.as,e)){let r=t[this.itemsIndexAs];e==this.as&&(this.items[r]=n);let i=Object(I.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,e);this.notifyPath(i,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=j.a.debounce(this.__renderDebouncer,e>0?R.b.after(e):R.a,t.bind(this)),Object(N.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(N.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;this.__filterFn&&(e=e.filter((e,n,r)=>this.__filterFn(t[e],n,r))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n]));const n=this.__itemsIdxToInstIdx={};let r=0;const i=Math.min(e.length,this.__limit);for(;r<i;r++){let i=this.__instances[r],o=e[r],a=t[o];n[o]=r,i?(i._setPendingProperty(this.as,a),i._setPendingProperty(this.indexAs,r),i._setPendingProperty(this.itemsIndexAs,o),i._flushProperties()):this.__insertInstance(a,r,o)}for(let t=this.__instances.length-1;t>=r;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const n=Object(u.a)(e.root);for(let t=0;t<e.children.length;t++){let r=e.children[t];n.appendChild(r)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,n){let r={};return r[this.as]=t,r[this.indexAs]=e,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(t,e,n){let r=this.__pool.pop();r?(r._setPendingProperty(this.as,t),r._setPendingProperty(this.indexAs,e),r._setPendingProperty(this.itemsIndexAs,n),r._flushProperties()):r=this.__stampInstance(t,e,n);let i=this.__instances[e+1],o=i?i.children[0]:this;return Object(u.a)(Object(u.a)(this).parentNode).insertBefore(r.root,o),this.__instances[e]=r,r}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),r=n.indexOf("."),i=r<0?n:n.substring(0,r);if(i==parseInt(i,10)){let t=r<0?"":n.substring(r+1);this.__handleObservedPaths(t);let o=this.__itemsIdxToInstIdx[i],a=this.__instances[o];if(a){let n=this.as+(t?"."+t:"");a._setPendingPropertyOrPath(n,e,!1,!0),a._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return O(this.template,t)}}customElements.define(F.is,F);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class D extends M{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=j.a.debounce(this.__renderDebouncer,R.a,()=>this.__render()),Object(N.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(u.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(u.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),E()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){Object(N.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Object(u.a)(this).parentNode;if(t){if(!this.__ctor){let t=Object(u.a)(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Object(u.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=S(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(I.g)(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Object(u.a)(this).previousSibling!==e[e.length-1])for(let n,r=0;r<e.length&&(n=e[r]);r++)Object(u.a)(t).insertBefore(n,this)}}else this.__instance=new this.__ctor,Object(u.a)(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(u.a)(t[0]).parentNode;if(e){e=Object(u.a)(e);for(let n,r=0;r<t.length&&(n=t[r]);r++)e.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(D.is,D);var B=n(92);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let z=Object(o.a)(t=>{let e=Object(k.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let n=e.path;if(n==JSCompiler_renameProperty("items",this)){let n=e.base||[],r=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),r){let t=Object(B.a)(n,r);this.__applySplices(t)}this.__lastItems=n,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let n=0;n<t.length;n++){let r=t[n];e.forEach((t,n)=>{t<r.index||(t>=r.index+r.removed.length?e.set(n,t+r.addedCount-r.removed.length):e.set(n,-1))});for(let t=0;t<r.addedCount;t++){let n=r.index+t;e.has(this.items[n])&&e.set(this.items[n],n)}}this.__updateLinks();let n=0;e.forEach((t,r)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,e.delete(r)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((n,r)=>{e==t++&&this.deselect(r)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let n;this.__selectedMap.delete(t),this.multi&&(n=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(M);class H extends z{static get is(){return"array-selector"}static get template(){return null}}customElements.define(H.is,H);var U=n(122),$=n(44),K=n(18);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const V=new U.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){V.processStyles(),Object($.c)(t,e)},styleElement(t){V.processStyles()},styleDocument(t){V.processStyles(),Object($.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object($.b)(t,e),flushCustomStyles(){},nativeCss:K.c,nativeShadow:K.d,cssBuild:K.a,disableRuntime:K.b}),window.ShadyCSS.CustomStyleInterface=V;var q=n(72);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Y="include",W=window.ShadyCSS.CustomStyleInterface;class J extends HTMLElement{constructor(){super(),this._style=null,W.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(Y);return e&&(t.removeAttribute(Y),t.textContent=Object(q.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let G;window.customElements.define("custom-style",J),G=s._mutablePropertyChange;Boolean;n.d(e,"a",(function(){return T.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Object(r.a)(HTMLElement).prototype},function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r,i,o=/(url\()([^)]*)(\))/g,a=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function s(t,e){if(t&&a.test(t))return t;if("//"===t)return t;if(void 0===r){r=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",r="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),r)try{return new URL(t,e).href}catch(e){return t}return i||((i=document.implementation.createHTMLDocument("temp")).base=i.createElement("base"),i.head.appendChild(i.base),i.anchor=i.createElement("a"),i.body.appendChild(i.anchor)),i.base.href=e,i.anchor.href=t,i.anchor.href||t}function l(t,e){return t.replace(o,(function(t,n,r,i){return n+"'"+s(r.replace(/["']/g,""),e)+"'"+i}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(15),i=n(49);t.exports=n(14)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(4),i=n(22),o=n(26),a=n(50)("src"),s=n(165),l=(""+s).split("toString");n(31).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(o(n,a)||i(n,a,t[e]?""+t[e]:l.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},function(t,e,n){var r=n(0),i=n(5),o=n(38),a=/"/g,s=function(t,e,n,r){var i=String(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a}));n(8),n(12),n(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,i.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),i.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof r?t._cancelAsync():t=new r,t.setConfig(e,n),t}}let i=new Set;const o=function(t){i.add(t)},a=function(){const t=Boolean(i.size);return i.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(68),i=n(38);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(69),i=n(49),o=n(27),a=n(37),s=n(26),l=n(123),c=Object.getOwnPropertyDescriptor;e.f=n(14)?c:function(t,e){if(t=o(t),e=a(e,!0),l)try{return c(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(26),i=n(16),o=n(96)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){"use strict";var r=n(66),i=n(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},a={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},s=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},a);function l(t,e,n,r){!function(t,e,n){const r=t._noAccessors,i=Object.getOwnPropertyNames(t);for(let o=0;o<i.length;o++){let a=i[o];if(!(a in n))if(r)e[a]=t[a];else{let n=Object.getOwnPropertyDescriptor(t,a);n&&(n.configurable=!0,Object.defineProperty(e,a,n))}}}(e,t,r);for(let t in o)e[t]&&(n[t]=n[t]||[],n[t].push(e[t]))}function c(t,e){for(const n in e){const r=t[n],i=e[n];t[n]=!("value"in i)&&r&&"value"in r?Object.assign({value:r.value},i):i}}function u(t,e,n){let r;const o={};class u extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(let t,e=0;e<r.length;e++)(t=r[e]).properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(r)for(let t=0;t<r.length;t++)c(e,r[t].properties);return c(e,t.properties),e}static get observers(){let e=[];if(r)for(let t,n=0;n<r.length;n++)(t=r[n]).observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=o.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=u.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),i.c&&p(t);const e=Object.getPrototypeOf(this);let n=o.beforeRegister;if(n)for(let t=0;t<n.length;t++)n[t].call(e);if(n=o.registered)for(let t=0;t<n.length;t++)n[t].call(e)}}_applyListeners(){super._applyListeners();const t=o.listeners;if(t)for(let e=0;e<t.length;e++){const n=t[e];if(n)for(let t in n)this._addMethodEventListenerToNode(this,t,n[t])}}_ensureAttributes(){const t=o.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const n=t[e];for(let t in n)this._ensureAttribute(t,n[t])}super._ensureAttributes()}ready(){super.ready();let t=o.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=o.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=o.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,n){super.attributeChanged();let r=o.attributeChanged;if(r)for(let i=0;i<r.length;i++)r[i].call(this,t,e,n)}}if(n){Array.isArray(n)||(n=[n]);let t=e.prototype.behaviors;r=function t(e,n,r){n=n||[];for(let i=e.length-1;i>=0;i--){let o=e[i];o?Array.isArray(o)?t(o,n):n.indexOf(o)<0&&(!r||r.indexOf(o)<0)&&n.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,t),u.prototype.behaviors=t?t.concat(n):r}const p=e=>{r&&function(t,e,n){for(let r=0;r<e.length;r++)l(t,e[r],n,s)}(e,r,o),l(e,t,o,a)};return i.c||p(u.prototype),u.generatedFrom=t,u}n(8);n.d(e,"a",(function(){return p}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const p=function(t){let e;return e="function"==typeof t?t:p.Class(t),customElements.define(e.is,e),e};p.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let n=e?e(Object(r.a)(HTMLElement)):Object(r.a)(HTMLElement);return(n=u(t,n,t.behaviors)).is=n.prototype.is=t.is,n}},function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(21);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(5);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,i=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=/@media\s(.*)/},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(0),i=n(31),o=n(5);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",a)}},function(t,e,n){var r=n(32),i=n(68),o=n(16),a=n(10),s=n(112);t.exports=function(t,e){var n=1==t,l=2==t,c=3==t,u=4==t,p=6==t,h=5==t||p,f=e||s;return function(e,s,d){for(var y,m,_=o(e),g=i(_),v=r(s,d,3),b=a(g.length),w=0,x=n?f(e,b):l?f(e,0):void 0;b>w;w++)if((h||w in g)&&(m=v(y=g[w],w,_),t))if(n)x[w]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return w;case 2:x.push(y)}else if(u)return!1;return p?-1:c||u?u:x}}},function(t,e,n){"use strict";if(n(14)){var r=n(45),i=n(4),o=n(5),a=n(0),s=n(85),l=n(120),c=n(32),u=n(56),p=n(49),h=n(22),f=n(58),d=n(34),y=n(10),m=n(151),_=n(52),g=n(37),v=n(26),b=n(63),w=n(6),x=n(16),S=n(109),O=n(53),P=n(29),C=n(54).f,E=n(111),A=n(50),k=n(9),T=n(40),M=n(75),j=n(71),N=n(114),I=n(65),R=n(80),L=n(55),F=n(113),D=n(140),B=n(15),z=n(28),H=B.f,U=z.f,$=i.RangeError,K=i.TypeError,V=i.Uint8Array,q=Array.prototype,Y=l.ArrayBuffer,W=l.DataView,J=T(0),G=T(2),X=T(3),Z=T(4),Q=T(5),tt=T(6),et=M(!0),nt=M(!1),rt=N.values,it=N.keys,ot=N.entries,at=q.lastIndexOf,st=q.reduce,lt=q.reduceRight,ct=q.join,ut=q.sort,pt=q.slice,ht=q.toString,ft=q.toLocaleString,dt=k("iterator"),yt=k("toStringTag"),mt=A("typed_constructor"),_t=A("def_constructor"),gt=s.CONSTR,vt=s.TYPED,bt=s.VIEW,wt=T(1,(function(t,e){return Ct(j(t,t[_t]),e)})),xt=o((function(){return 1===new V(new Uint16Array([1]).buffer)[0]})),St=!!V&&!!V.prototype.set&&o((function(){new V(1).set({})})),Ot=function(t,e){var n=d(t);if(n<0||n%e)throw $("Wrong offset!");return n},Pt=function(t){if(w(t)&&vt in t)return t;throw K(t+" is not a typed array!")},Ct=function(t,e){if(!(w(t)&&mt in t))throw K("It is not a typed array constructor!");return new t(e)},Et=function(t,e){return At(j(t,t[_t]),e)},At=function(t,e){for(var n=0,r=e.length,i=Ct(t,r);r>n;)i[n]=e[n++];return i},kt=function(t,e,n){H(t,e,{get:function(){return this._d[n]}})},Tt=function(t){var e,n,r,i,o,a,s=x(t),l=arguments.length,u=l>1?arguments[1]:void 0,p=void 0!==u,h=E(s);if(null!=h&&!S(h)){for(a=h.call(s),r=[],e=0;!(o=a.next()).done;e++)r.push(o.value);s=r}for(p&&l>2&&(u=c(u,arguments[2],2)),e=0,n=y(s.length),i=Ct(this,n);n>e;e++)i[e]=p?u(s[e],e):s[e];return i},Mt=function(){for(var t=0,e=arguments.length,n=Ct(this,e);e>t;)n[t]=arguments[t++];return n},jt=!!V&&o((function(){ft.call(new V(1))})),Nt=function(){return ft.apply(jt?pt.call(Pt(this)):Pt(this),arguments)},It={copyWithin:function(t,e){return D.call(Pt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return Z(Pt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return F.apply(Pt(this),arguments)},filter:function(t){return Et(this,G(Pt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Pt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){J(Pt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return nt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(Pt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ct.apply(Pt(this),arguments)},lastIndexOf:function(t){return at.apply(Pt(this),arguments)},map:function(t){return wt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return st.apply(Pt(this),arguments)},reduceRight:function(t){return lt.apply(Pt(this),arguments)},reverse:function(){for(var t,e=Pt(this).length,n=Math.floor(e/2),r=0;r<n;)t=this[r],this[r++]=this[--e],this[e]=t;return this},some:function(t){return X(Pt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ut.call(Pt(this),t)},subarray:function(t,e){var n=Pt(this),r=n.length,i=_(t,r);return new(j(n,n[_t]))(n.buffer,n.byteOffset+i*n.BYTES_PER_ELEMENT,y((void 0===e?r:_(e,r))-i))}},Rt=function(t,e){return Et(this,pt.call(Pt(this),t,e))},Lt=function(t){Pt(this);var e=Ot(arguments[1],1),n=this.length,r=x(t),i=y(r.length),o=0;if(i+e>n)throw $("Wrong length!");for(;o<i;)this[e+o]=r[o++]},Ft={entries:function(){return ot.call(Pt(this))},keys:function(){return it.call(Pt(this))},values:function(){return rt.call(Pt(this))}},Dt=function(t,e){return w(t)&&t[vt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Bt=function(t,e){return Dt(t,e=g(e,!0))?p(2,t[e]):U(t,e)},zt=function(t,e,n){return!(Dt(t,e=g(e,!0))&&w(n)&&v(n,"value"))||v(n,"get")||v(n,"set")||n.configurable||v(n,"writable")&&!n.writable||v(n,"enumerable")&&!n.enumerable?H(t,e,n):(t[e]=n.value,t)};gt||(z.f=Bt,B.f=zt),a(a.S+a.F*!gt,"Object",{getOwnPropertyDescriptor:Bt,defineProperty:zt}),o((function(){ht.call({})}))&&(ht=ft=function(){return ct.call(this)});var Ht=f({},It);f(Ht,Ft),h(Ht,dt,Ft.values),f(Ht,{slice:Rt,set:Lt,constructor:function(){},toString:ht,toLocaleString:Nt}),kt(Ht,"buffer","b"),kt(Ht,"byteOffset","o"),kt(Ht,"byteLength","l"),kt(Ht,"length","e"),H(Ht,yt,{get:function(){return this[vt]}}),t.exports=function(t,e,n,l){var c=t+((l=!!l)?"Clamped":"")+"Array",p="get"+t,f="set"+t,d=i[c],_=d||{},g=d&&P(d),v=!d||!s.ABV,x={},S=d&&d.prototype,E=function(t,n){H(t,n,{get:function(){return function(t,n){var r=t._d;return r.v[p](n*e+r.o,xt)}(this,n)},set:function(t){return function(t,n,r){var i=t._d;l&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[f](n*e+i.o,r,xt)}(this,n,t)},enumerable:!0})};v?(d=n((function(t,n,r,i){u(t,d,c,"_d");var o,a,s,l,p=0,f=0;if(w(n)){if(!(n instanceof Y||"ArrayBuffer"==(l=b(n))||"SharedArrayBuffer"==l))return vt in n?At(d,n):Tt.call(d,n);o=n,f=Ot(r,e);var _=n.byteLength;if(void 0===i){if(_%e)throw $("Wrong length!");if((a=_-f)<0)throw $("Wrong length!")}else if((a=y(i)*e)+f>_)throw $("Wrong length!");s=a/e}else s=m(n),o=new Y(a=s*e);for(h(t,"_d",{b:o,o:f,l:a,e:s,v:new W(o)});p<s;)E(t,p++)})),S=d.prototype=O(Ht),h(S,"constructor",d)):o((function(){d(1)}))&&o((function(){new d(-1)}))&&R((function(t){new d,new d(null),new d(1.5),new d(t)}),!0)||(d=n((function(t,n,r,i){var o;return u(t,d,c),w(n)?n instanceof Y||"ArrayBuffer"==(o=b(n))||"SharedArrayBuffer"==o?void 0!==i?new _(n,Ot(r,e),i):void 0!==r?new _(n,Ot(r,e)):new _(n):vt in n?At(d,n):Tt.call(d,n):new _(m(n))})),J(g!==Function.prototype?C(_).concat(C(g)):C(_),(function(t){t in d||h(d,t,_[t])})),d.prototype=S,r||(S.constructor=d));var A=S[dt],k=!!A&&("values"==A.name||null==A.name),T=Ft.values;h(d,mt,!0),h(S,vt,c),h(S,bt,!0),h(S,_t,d),(l?new d(1)[yt]==c:yt in S)||H(S,yt,{get:function(){return c}}),x[c]=d,a(a.G+a.W+a.F*(d!=_),x),a(a.S,c,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*o((function(){_.of.call(d,1)})),c,{from:Tt,of:Mt}),"BYTES_PER_ELEMENT"in S||h(S,"BYTES_PER_ELEMENT",e),a(a.P,c,It),L(c),a(a.P+a.F*St,c,{set:Lt}),a(a.P+a.F*!k,c,Ft),r||S.toString==ht||(S.toString=ht),a(a.P+a.F*o((function(){new d(1).slice()})),c,{slice:Rt}),a(a.P+a.F*(o((function(){return[1,2].toLocaleString()!=new d([1,2]).toLocaleString()}))||!o((function(){S.toLocaleString.call([1,2])}))),c,{toLocaleString:Nt}),I[c]=k?A:T,r||k||h(S,dt,T)}}else t.exports=function(){}},function(t,e,n){var r=n(146),i=n(0),o=n(67)("metadata"),a=o.store||(o.store=new(n(149))),s=function(t,e,n){var i=a.get(t);if(!i){if(!n)return;a.set(t,i=new r)}var o=i.get(e);if(!o){if(!n)return;i.set(e,o=new r)}return o};t.exports={store:a,map:s,has:function(t,e,n){var r=s(e,n,!1);return void 0!==r&&r.has(t)},get:function(t,e,n){var r=s(e,n,!1);return void 0===r?void 0:r.get(t)},set:function(t,e,n,r){s(n,r,!0).set(t,e)},keys:function(t,e){var n=s(t,e,!1),r=[];return n&&n.forEach((function(t,e){r.push(e)})),r},key:function(t){return void 0===t||"symbol"==typeof t?t:String(t)},exp:function(t){i(i.S,"Reflect",t)}}},function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));n(8);var r=n(25);n.d(e,"a",(function(){return r.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(r.c)()}while(t||e)}},function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var r=n(36);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function o(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}function a(t){const e=r.b.test(t)||r.c.test(t);return r.b.lastIndex=0,r.c.lastIndex=0,e}},function(t,e){t.exports=!1},function(t,e,n){var r=n(50)("meta"),i=n(6),o=n(26),a=n(15).f,s=0,l=Object.isExtensible||function(){return!0},c=!n(5)((function(){return l(Object.preventExtensions({}))})),u=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},p=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[r].w},onFreeze:function(t){return c&&p.NEED&&l(t)&&!o(t,r)&&u(t),t}}},function(t,e,n){var r=n(9)("unscopables"),i=Array.prototype;null==i[r]&&n(22)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const r={},i=/-[a-z]/g,o=/([A-Z])/g;function a(t){return r[t]||(r[t]=t.indexOf("-")<0?t:t.replace(i,t=>t[1].toUpperCase()))}function s(t){return r[t]||(r[t]=t.replace(o,"-$1").toLowerCase())}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(125),i=n(97);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(34),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(3),i=n(126),o=n(97),a=n(96)("IE_PROTO"),s=function(){},l=function(){var t,e=n(94)("iframe"),r=o.length;for(e.style.display="none",n(98).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[o[r]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=l(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(125),i=n(97).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){"use strict";var r=n(4),i=n(15),o=n(14),a=n(9)("species");t.exports=function(t){var e=r[t];o&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(32),i=n(138),o=n(109),a=n(3),s=n(10),l=n(111),c={},u={};(e=t.exports=function(t,e,n,p,h){var f,d,y,m,_=h?function(){return t}:l(t),g=r(n,p,e?2:1),v=0;if("function"!=typeof _)throw TypeError(t+" is not iterable!");if(o(_)){for(f=s(t.length);f>v;v++)if((m=e?g(a(d=t[v])[0],d[1]):g(t[v]))===c||m===u)return m}else for(y=_.call(t);!(d=y.next()).done;)if((m=i(y,g,d.value,e))===c||m===u)return m}).BREAK=c,e.RETURN=u},function(t,e,n){var r=n(23);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){"use strict";n(8);var r=n(7),i=n(12),o=n(72),a=n(20),s=n(73),l=n(61);const c=[];var u=n(90);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const p=Object(i.a)(t=>{const e=Object(u.a)(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof i?e:null}function r(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const n=t.properties;n&&(e=function(t){const e={};for(let n in t){const r=t[n];e[n]="function"==typeof r?{type:r}:r}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class i extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,c.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=r(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,r(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){0,this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});var h=n(1);n.d(e,"a",(function(){return y}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const f="3.3.0",d=window.ShadyCSS&&window.ShadyCSS.cssBuild,y=Object(i.a)(t=>{const e=p(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return f}static _finalizeClass(){e._finalizeClass.call(this);const t=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):r.c||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let o in t)e=this.prototype,n=o,r=t[o],i=t,r.computed&&(r.readOnly=!0),r.computed&&(e._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):e._createComputedProperty(n,r.computed,i)),r.readOnly&&!e._hasReadOnlyEffect(n)?e._createReadOnlyProperty(n,!r.computed):!1===r.readOnly&&e._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),r.reflectToAttribute&&!e._hasReflectEffect(n)?e._createReflectedProperty(n):!1===r.reflectToAttribute&&e._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),r.notify&&!e._hasNotifyEffect(n)?e._createNotifyingProperty(n):!1===r.notify&&e._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),r.observer&&e._createPropertyObserver(n,r.observer,i[r.observer]),e._addPropertyToAttributeMap(n);var e,n,r,i}static createObservers(t,e){const n=this.prototype;for(let r=0;r<t.length;r++)n._createMethodObserver(t[r],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!r.g||r.a)&&(e=s.a.import(t,"template"),r.g&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(a.a)(t.url);else{const t=s.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=r.e,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let r=e[n];"value"in r&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=r)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return Object(a.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;!function(t,e,n,r){if(!d){const i=e.content.querySelectorAll("style"),a=Object(o.c)(e),s=Object(o.b)(n),l=e.content.firstElementChild;for(let n=0;n<s.length;n++){let i=s[n];i.textContent=t._processStyleText(i.textContent,r),e.content.insertBefore(i,l)}let c=0;for(let e=0;e<a.length;e++){let n=a[e],o=i[c];o!==n?(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)):c++,n.textContent=t._processStyleText(n.textContent,r)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n)}(this,e,t,n?Object(a.c)(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(h.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t)),r.h&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(a.c)(this.importPath)),Object(a.c)(t,e)}static _parseTemplateContent(t,n,r){return n.dynamicFns=n.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,n,r)}static _addTemplatePropertyEffect(t,n,i){return!r.c||n in this._properties||console.warn(`Property '${n}' used in template but not declared in 'properties'; `+"attribute will not be observed."),e._addTemplatePropertyEffect.call(this,t,n,i)}}})},function(t,e,n){"use strict";n(8);var r=n(1),i=n(12),o=n(2),a=n(48),s=n(89);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l={"dom-if":!0,"dom-repeat":!0};function c(t){let e=t.getAttribute("is");if(e&&l[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function u(t,e){let n=e.parentInfo&&u(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,r=0;t;t=t.nextSibling)if(e.parentIndex===r++)return t}function p(t,e,n,r){r.id&&(e[r.id]=n)}function h(t,e,n){if(n.events&&n.events.length)for(let r,i=0,o=n.events;i<o.length&&(r=o[i]);i++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function f(t,e,n){n.templateInfo&&(e._templateInfo=n.templateInfo)}const d=Object(i.a)(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let r=!1,i=t;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(e.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(i,e,n)||r,i.firstChild&&this._parseTemplateChildNodes(i,e,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,e,n)||r),r}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let r,i=t.firstChild,o=0;i;i=r){if("template"==i.localName&&(i=c(i)),r=i.nextSibling,i.nodeType===Node.TEXT_NODE){let n=r;for(;n&&n.nodeType===Node.TEXT_NODE;)i.textContent+=n.textContent,r=n.nextSibling,t.removeChild(n),n=r;if(e.stripWhiteSpace&&!i.textContent.trim()){t.removeChild(i);continue}}let a={parentIndex:o,parentInfo:n};this._parseTemplateNode(i,e,a)&&(a.infoIndex=e.nodeInfoList.push(a)-1),i.parentNode&&o++}}static _parseTemplateNestedTemplate(t,e,n){let r=t,i=this._parseTemplate(r,e);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(t,e,n){let r=!1,i=Array.from(t.attributes);for(let o,a=i.length-1;o=i[a];a--)r=this._parseTemplateNodeAttribute(t,e,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(t,e,n,r,i){return"on-"===r.slice(0,3)?(t.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):"id"===r&&(n.id=i,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),n=e.nodeInfoList,r=e.content||t.content,i=document.importNode(r,!0);i.__noInsertionPoint=!e.hasInsertionPoint;let o=i.nodeList=new Array(n.length);i.$={};for(let t,e=0,r=n.length;e<r&&(t=n[e]);e++){let n=o[e]=u(i,t);p(0,i.$,n,t),f(0,n,t),h(this,n,t)}return i=i}_addMethodEventListenerToNode(t,e,n,r){let i=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(r=r||t,0,n);return this._addEventListenerToNode(t,e,i),i}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}}});var y=n(7);n.d(e,"a",(function(){return K}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
let m=0;const _={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},g=/[A-Z]/;function v(t,e){let n=t[e];if(n){if(!t.hasOwnProperty(e)){n=t[e]=Object.create(t[e]);for(let t in n){let e=n[t],r=n[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}}else n=t[e]={};return n}function b(t,e,n,r,i,o){if(e){let a=!1,s=m++;for(let l in n)w(t,e,s,l,n,r,i,o)&&(a=!0);return a}return!1}function w(t,e,n,r,i,a,s,l){let c=!1,u=e[s?Object(o.g)(r):r];if(u)for(let e,o=0,p=u.length;o<p&&(e=u[o]);o++)e.info&&e.info.lastRun===n||s&&!x(r,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,r,i,a,e.info,s,l),c=!0);return c}function x(t,e){if(e){let n=e.name;return n==t||!(!e.structured||!Object(o.b)(n,t))||!(!e.wildcard||!Object(o.c)(n,t))}return!0}function S(t,e,n,r,i){let o="string"==typeof i.method?t[i.method]:i.method,a=i.property;o?o.call(t,t.__data[a],r[a]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function O(t,e,n){let r=Object(o.g)(e);if(r!==e){return P(t,Object(a.a)(r)+"-changed",n[e],e),!0}return!1}function P(t,e,n,i){let o={value:n,queueProperty:!0};i&&(o.path=i),Object(r.a)(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function C(t,e,n,r,i,a){let s=(a?Object(o.g)(e):e)!=e?e:null,l=s?Object(o.a)(t,s):t.__data[e];s&&void 0===l&&(l=n[e]),P(t,i.eventName,l,s)}function E(t,e,n,r,i){let o=t.__data[e];y.f&&(o=Object(y.f)(o,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,o)}function A(t,e,n,r,i){let o=R(t,e,n,r,i),a=i.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,o,!0):t[a]=o}function k(t,e,n,r,i,o,s){n.bindings=n.bindings||[];let l={kind:r,target:i,parts:o,literal:s,isCompound:1!==o.length};if(n.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(a.a)(i)+"-changed",l.listenerNegate=e}let c=e.nodeInfoList.length;for(let n=0;n<l.parts.length;n++){let r=l.parts[n];r.compoundIndex=n,T(t,e,l,r,c)}}function T(t,e,n,r,i){if(!r.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,a={index:i,binding:n,part:r,evaluator:t};for(let n=0;n<o.length;n++){let r=o[n];"string"==typeof r&&((r=z(r)).wildcard=!0),t._addTemplatePropertyEffect(e,r.rootProperty,{fn:M,info:a,trigger:r})}}}function M(t,e,n,r,i,a,s){let l=s[i.index],c=i.binding,u=i.part;if(a&&u.source&&e.length>u.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let r=n[e];e=Object(o.i)(u.source,c.target,e),l._setPendingPropertyOrPath(e,r,!1,!0)&&t._enqueueClient(l)}else{!function(t,e,n,r,i){i=function(t,e,n,r){if(n.isCompound){let i=t.__dataCompoundStorage[n.target];i[r.compoundIndex]=e,e=i.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,i,n,r),y.f&&(i=Object(y.f)(i,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,i,n.target);else{let r=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?e[_.READ_ONLY]&&e[_.READ_ONLY][r]||e._setPendingProperty(r,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,i)}}(t,l,c,u,i.evaluator._evaluateBinding(t,u,e,n,r,a))}}function j(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),i=e.parts,o=new Array(i.length);for(let t=0;t<i.length;t++)o[t]=i[t].literal;let a=e.target;n[a]=o,e.literal&&"property"==e.kind&&("className"===a&&(t=Object(r.a)(t)),t[a]=e.literal)}}function N(t,e,n){if(n.listenerEvent){let r=n.parts[0];t.addEventListener(n.listenerEvent,(function(t){!function(t,e,n,r,i){let a,s=t.detail,l=s&&s.path;l?(r=Object(o.i)(n,r,l),a=s&&s.value):a=t.currentTarget[n],a=i?!a:a,e[_.READ_ONLY]&&e[_.READ_ONLY][r]||!e._setPendingPropertyOrPath(r,a,!0,Boolean(l))||s&&s.queueProperty||e._invalidateProperties()}(t,e,n.target,r.source,r.negate)}))}}function I(t,e,n,r,i,o){o=e.static||o&&("object"!=typeof o||o[e.methodName]);let a={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:o};for(let i,o=0;o<e.args.length&&(i=e.args[o]);o++)i.literal||t._addPropertyEffect(i.rootProperty,n,{fn:r,info:a,trigger:i});o&&t._addPropertyEffect(e.methodName,n,{fn:r,info:a})}function R(t,e,n,r,i){let o=t._methodHost||t,a=o[i.methodName];if(a){let r=t._marshalArgs(i.args,e,n);return a.apply(o,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const L=[],F=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function D(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function B(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:L};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let n=z(t);return n.literal||(e.static=!1),n}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function z(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},r=e[0];switch("-"===r&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=Object(o.g)(e),n.structured=Object(o.d)(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function H(t,e,n){let r=Object(o.a)(t,n);return void 0===r&&(r=e[n]),r}function U(t,e,n,r){t.notifyPath(n+".splices",{indexSplices:r}),t.notifyPath(n+".length",e.length)}function $(t,e,n,r,i,o){U(t,e,n,[{index:r,addedCount:i,removed:o,object:e,type:"splice"}])}const K=Object(i.a)(t=>{const e=d(Object(s.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return _}_initializeProperties(){super._initializeProperties(),V.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[_.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==_.READ_ONLY);let r=v(this,e)[t];r||(r=this[e][t]=[]),r.push(n)}_removePropertyEffect(t,e,n){let r=v(this,e)[t],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,_.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,_.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,_.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,_.COMPUTE)}_setPendingPropertyOrPath(t,e,n,r){if(r||Object(o.g)(Array.isArray(t)?t[0]:t)!==t){if(!r){let n=Object(o.a)(this,t);if(!(t=Object(o.h)(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let r=t.__dataLinkedPaths;if(r){let i;for(let a in r){let s=r[a];Object(o.c)(a,e)?(i=Object(o.i)(a,s,e),t._setPendingPropertyOrPath(i,n,!0,!0)):Object(o.c)(s,e)&&(i=Object(o.i)(s,a,e),t._setPendingPropertyOrPath(i,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||("className"===e&&(t=Object(r.a)(t)),t[e]=n)}_setPendingProperty(t,e,n){let r=this.__dataHasPaths&&Object(o.d)(t),i=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,i[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),r?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(r||this[_.NOTIFY]&&this[_.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[_.READ_ONLY]&&this[_.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,n,r){let i=t[_.COMPUTE];if(i){let o=e;for(;b(t,i,o,n,r);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),o=t.__dataPending,t.__dataPending=null}}(this,e,n,r);let i=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,n,r),this._flushClients(),b(this,this[_.REFLECT],e,n,r),b(this,this[_.OBSERVE],e,n,r),i&&function(t,e,n,r,i){let o,a,s=t[_.NOTIFY],l=m++;for(let a in e)e[a]&&(s&&w(t,s,l,a,n,r,i)?o=!0:i&&O(t,a,n)&&(o=!0));o&&(a=t.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,i,e,n,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[_.PROPAGATE]&&b(this,this[_.PROPAGATE],t,e,n);let r=this.__templateInfo;for(;r;)b(this,r.propertyEffects,t,e,n,r.nodeList),r=r.nextTemplateInfo}linkPaths(t,e){t=Object(o.f)(t),e=Object(o.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(o.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};U(this,Object(o.a)(this,t,n),n.path,e)}get(t,e){return Object(o.a)(e||this,t)}set(t,e,n){n?Object(o.h)(n,t,e):this[_.READ_ONLY]&&this[_.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},r=Object(o.a)(this,t,n),i=r.length,a=r.push(...e);return e.length&&$(this,r,n.path,i,e.length,[]),a}pop(t){let e={path:""},n=Object(o.a)(this,t,e),r=Boolean(n.length),i=n.pop();return r&&$(this,n,e.path,n.length,0,[i]),i}splice(t,e,n,...r){let i,a={path:""},s=Object(o.a)(this,t,a);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),i=2===arguments.length?s.splice(e):s.splice(e,n,...r),(r.length||i.length)&&$(this,s,a.path,e,r.length,i),i}shift(t){let e={path:""},n=Object(o.a)(this,t,e),r=Boolean(n.length),i=n.shift();return r&&$(this,n,e.path,0,0,[i]),i}unshift(t,...e){let n={path:""},r=Object(o.a)(this,t,n),i=r.unshift(...e);return e.length&&$(this,r,n.path,0,e.length,[]),i}notifyPath(t,e){let n;if(1==arguments.length){let r={path:""};e=Object(o.a)(this,t,r),n=r.path}else n=Array.isArray(t)?Object(o.f)(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,_.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let r={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,_.OBSERVE,{fn:S,info:r,trigger:{name:t}}),n&&this._addPropertyEffect(e,_.OBSERVE,{fn:S,info:r,trigger:{name:e}})}_createMethodObserver(t,e){let n=B(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");I(this,n,_.OBSERVE,R,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,_.NOTIFY,{fn:C,info:{eventName:Object(a.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,_.REFLECT,{fn:E,info:{attrName:e}})}_createComputedProperty(t,e,n){let r=B(e);if(!r)throw new Error("Malformed computed expression '"+e+"'");I(this,r,_.COMPUTE,A,t,n)}_marshalArgs(t,e,n){const r=this.__data,i=[];for(let a=0,s=t.length;a<s;a++){let{name:s,structured:l,wildcard:c,value:u,literal:p}=t[a];if(!p)if(c){const t=Object(o.c)(s,e),i=H(r,n,t?e:s);u={path:t?e:s,value:i,base:t?Object(o.a)(r,s):i}}else u=l?H(r,n,s):r[s];i[a]=u}return i}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),r=this.__templateInfo==n;if(!r)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e&&((n=Object.create(n)).wasPreBound=r,!r&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=n,n.previousTemplateInfo=t,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let r=t.propertyEffects=t.propertyEffects||{};(r[e]=r[e]||[]).push(n)}_stampTemplate(t){V.beginHosting(this);let e=super._stampTemplate(t);V.endHosting(this);let n=this._bindTemplate(t,!0);if(n.nodeList=e.nodeList,!n.wasPreBound){let t=n.childNodes=[];for(let n=e.firstChild;n;n=n.nextSibling)t.push(n)}return e.templateInfo=n,function(t,e){let{nodeList:n,nodeInfoList:r}=e;if(r.length)for(let e=0;e<r.length;e++){let i=r[e],o=n[e],a=i.bindings;if(a)for(let e=0;e<a.length;e++){let n=a[e];j(o,n),N(o,t,n)}o.__dataHost=t}}(this,n),this.__dataReady&&b(this,n.propertyEffects,this.__data,null,!1,n.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let n=e.childNodes;for(let t=0;t<n.length;t++){let e=n[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,n,r){let i=e._parseTemplateNode.call(this,t,n,r);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,n);e&&(t.textContent=D(e)||" ",k(this,n,r,"text","textContent",e),i=!0)}return i}static _parseTemplateNodeAttribute(t,n,r,i,o){let s=this._parseBindings(o,n);if(s){let e=i,o="property";g.test(i)?o="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),o="attribute");let l=D(s);return l&&"attribute"==o&&("class"==i&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(i)),t.setAttribute(i,l)),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===o&&(i=Object(a.b)(i)),k(this,n,r,o,i,s,l),!0}return e._parseTemplateNodeAttribute.call(this,t,n,r,i,o)}static _parseTemplateNestedTemplate(t,n,r){let i=e._parseTemplateNestedTemplate.call(this,t,n,r),o=r.templateInfo.hostProps;for(let t in o){k(this,n,r,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return i}static _parseBindings(t,e){let n,r=[],i=0;for(;null!==(n=F.exec(t));){n.index>i&&r.push({literal:t.slice(i,n.index)});let o=n[1][0],a=Boolean(n[2]),s=n[3].trim(),l=!1,c="",u=-1;"{"==o&&(u=s.indexOf("::"))>0&&(c=s.substring(u+2),s=s.substring(0,u),l=!0);let p=B(s),h=[];if(p){let{args:t,methodName:n}=p;for(let e=0;e<t.length;e++){let n=t[e];n.literal||h.push(n)}let r=e.dynamicFns;(r&&r[n]||p.static)&&(h.push(n),p.dynamicFn=!0)}else h.push(s);r.push({source:s,mode:o,negate:a,customEvent:l,signature:p,dependencies:h,event:c}),i=F.lastIndex}if(i&&i<t.length){let e=t.substring(i);e&&r.push({literal:e})}return r.length?r:null}static _evaluateBinding(t,e,n,r,i,a){let s;return s=e.signature?R(t,n,r,0,e.signature):n!=e.source?Object(o.a)(t,e.source):a&&Object(o.d)(n)?Object(o.a)(t,n):t.__data[n],e.negate&&(s=!s),s}}});const V=new class{constructor(){this.stack=[]}registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},function(t,e,n){var r=n(15).f,i=n(26),o=n(9)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(33),i=n(9)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(0),i=n(38),o=n(5),a=n(100),s="["+a+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t,e,n){var i={},s=o((function(){return!!a[t]()||"​"!="​"[t]()})),l=i[t]=s?e(p):a[t];n&&(i[n]=l),r(r.P+r.F*s,"String",i)},p=u.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=u},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(18);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class i{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function o(t){return function t(e,n){let r=n.substring(e.start,e.end-1);e.parsedCssText=e.cssText=r.trim();if(e.parent){let t=e.previous?e.previous.end:e.parent.start;r=(r=(r=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(r=n.substring(t,e.start-1))).replace(u.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);let i=e.parsedSelector=e.selector=r.trim();e.atRule=0===i.indexOf(f),e.atRule?0===i.indexOf(h)?e.type=s.MEDIA_RULE:i.match(u.keyframesRule)&&(e.type=s.KEYFRAMES_RULE,e.keyframesName=e.selector.split(u.multipleSpaces).pop()):0===i.indexOf(p)?e.type=s.MIXIN_RULE:e.type=s.STYLE_RULE}let i=e.rules;if(i)for(let e,r=0,o=i.length;r<o&&(e=i[r]);r++)t(e,n);return e}(function(t){let e=new i;e.start=0,e.end=t.length;let n=e;for(let r=0,o=t.length;r<o;r++)if(t[r]===l){n.rules||(n.rules=[]);let t=n,e=t.rules[t.rules.length-1]||null;(n=new i).start=r+1,n.parent=t,n.previous=e,t.rules.push(n)}else t[r]===c&&(n.end=r+1,n=n.parent||e);return e}(t=t.replace(u.comments,"").replace(u.port,"")),t)}function a(t,e,n=""){let r="";if(t.cssText||t.rules){let n=t.rules;if(n&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(p)}(n))for(let t,i=0,o=n.length;i<o&&(t=n[i]);i++)r=a(t,e,r);else(r=(r=e?t.cssText:function(t){return function(t){return t.replace(u.mixinApply,"").replace(u.varApply,"")}(t=function(t){return t.replace(u.customProp,"").replace(u.mixinProp,"")}(t))}(t.cssText)).trim())&&(r="  "+r+"\n")}return r&&(t.selector&&(n+=t.selector+" "+l+"\n"),n+=r,t.selector&&(n+=c+"\n\n")),n}const s={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",u={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},p="--",h="@media",f="@";var d=n(36);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const y=new Set,m="shady-unscoped";function _(t){const e=t.textContent;if(!y.has(e)){y.add(e);const n=t.cloneNode(!0);document.head.appendChild(n)}}function g(t){return t.hasAttribute(m)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function v(t,e){return t?("string"==typeof t&&(t=o(t)),e&&w(t,e),a(t,r.c)):""}function b(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=o(t.textContent)),t.__cssRules||null}function w(t,e,n,r){if(!t)return;let i=!1,o=t.type;if(r&&o===s.MEDIA_RULE){let e=t.selector.match(d.a);e&&(window.matchMedia(e[1]).matches||(i=!0))}o===s.STYLE_RULE?e(t):n&&o===s.KEYFRAMES_RULE?n(t):o===s.MIXIN_RULE&&(i=!0);let a=t.rules;if(a&&!i)for(let t,i=0,o=a.length;i<o&&(t=a[i]);i++)w(t,e,n,r)}function x(t,e){let n=0;for(let r=e,i=t.length;r<i;r++)if("("===t[r])n++;else if(")"===t[r]&&0==--n)return r;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;const S="css-build";function O(t){if(void 0!==r.a)return r.a;if(void 0===t.__cssBuild){const e=t.getAttribute(S);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===S)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function P(t){return""!==O(t)}var C=n(44);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const E=/;\s*/m,A=/^\s*(initial)|(inherit)\s*$/,k=/\s*!important/,T="_-_";class M{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let j=null;class N{constructor(){this._currentElement=null,this._measureElement=null,this._map=new M}detectMixin(t){return Object(C.a)(t)}gatherStyles(t){const e=function(t){const e=[],n=t.querySelectorAll("style");for(let t=0;t<n.length;t++){const i=n[t];g(i)?r.d||(_(i),i.parentNode.removeChild(i)):(e.push(i.textContent),i.parentNode.removeChild(i))}return e.join("").trim()}(t.content);if(e){const n=document.createElement("style");return n.textContent=e,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,e):null}transformStyle(t,e=""){let n=b(t);return this.transformRules(n,e),t.textContent=v(n),n}transformCustomStyle(t){let e=b(t);return w(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=v(e),e}transformRules(t,e){this._currentElement=e,w(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(d.c,(t,n,r,i)=>this._produceCssProperties(t,n,r,i,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const n={};let r=!1;return w(e,e=>{(r=r||e===t)||e.selector===t.selector&&Object.assign(n,this._cssTextToMap(e.parsedCssText))}),n}_consumeCssProperties(t,e){let n=null;for(;n=d.b.exec(t);){let r=n[0],i=n[1],o=n.index,a=o+r.indexOf("@apply"),s=o+r.length,l=t.slice(0,a),c=t.slice(s),u=e?this._fallbacksFromPreviousRules(e):{};Object.assign(u,this._cssTextToMap(l));let p=this._atApplyToCssProperties(i,u);t=`${l}${p}${c}`,d.b.lastIndex=o+p.length}return t}_atApplyToCssProperties(t,e){t=t.replace(E,"");let n=[],r=this._map.get(t);if(r||(this._map.set(t,{}),r=this._map.get(t)),r){let i,o,a;this._currentElement&&(r.dependants[this._currentElement]=!0);const s=r.properties;for(i in s)a=e&&e[i],o=[i,": var(",t,T,i],a&&o.push(",",a.replace(k,"")),o.push(")"),k.test(s[i])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,e){let n=A.exec(e);return n&&(e=n[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let n,r,i=t.split(";"),o={};for(let t,a,s=0;s<i.length;s++)(t=i[s])&&(a=t.split(":")).length>1&&(n=a[0].trim(),r=a.slice(1).join(":"),e&&(r=this._replaceInitialOrInherit(n,r)),o[n]=r);return o}_invalidateMixinEntry(t){if(j)for(let e in t.dependants)e!==this._currentElement&&j(e)}_produceCssProperties(t,e,n,r,i){if(n&&function t(e,n){let r=e.indexOf("var(");if(-1===r)return n(e,"","","");let i=x(e,r+3),o=e.substring(r+4,i),a=e.substring(0,r),s=t(e.substring(i+1),n),l=o.indexOf(",");return-1===l?n(a,o.trim(),"",s):n(a,o.substring(0,l).trim(),o.substring(l+1).trim(),s)}(n,(t,e)=>{e&&this._map.get(e)&&(r=`@apply ${e};`)}),!r)return t;let o=this._consumeCssProperties(""+r,i),a=t.slice(0,t.indexOf("--")),s=this._cssTextToMap(o,!0),l=s,c=this._map.get(e),u=c&&c.properties;u?l=Object.assign(Object.create(u),s):this._map.set(e,l);let p,h,f=[],d=!1;for(p in l)void 0===(h=s[p])&&(h="initial"),!u||p in u||(d=!0),f.push(`${e}${T}${p}: ${h}`);return d&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(a=`${t};${a}`),`${a}${f.join("; ")};`}}N.prototype.detectMixin=N.prototype.detectMixin,N.prototype.transformStyle=N.prototype.transformStyle,N.prototype.transformCustomStyle=N.prototype.transformCustomStyle,N.prototype.transformRules=N.prototype.transformRules,N.prototype.transformRule=N.prototype.transformRule,N.prototype.transformTemplate=N.prototype.transformTemplate,N.prototype._separator=T,Object.defineProperty(N.prototype,"invalidCallback",{get:()=>j,set(t){j=t}});var I=N;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var R={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const L="_applyShimCurrentVersion",F="_applyShimNextVersion",D="_applyShimValidatingVersion",B=Promise.resolve();function z(t){let e=R[t];e&&function(t){t[L]=t[L]||0,t[D]=t[D]||0,t[F]=(t[F]||0)+1}(e)}function H(t){return t[L]===t[F]}function U(t){return!H(t)&&t[D]===t[F]}function $(t){t[D]=t[F],t._validating||(t._validating=!0,B.then((function(){t[L]=t[F],t._validating=!1})))}n(122);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const K=new I;class V{constructor(){this.customStyleInterface=null,K.invalidCallback=z}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{K.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),P(t))return;R[e]=t;let n=K.transformTemplate(t,e);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let n=t[e],r=this.customStyleInterface.getStyleForCustomStyle(n);r&&K.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(C.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,n="",r="";return e?e.indexOf("-")>-1?n=e:(r=e,n=t.getAttribute&&t.getAttribute("is")||""):(n=t.is,r=t.extends),{is:n,typeExtension:r}}(t),n=R[e];if((!n||!P(n))&&n&&!H(n)){U(n)||(this.prepareTemplate(n,e),$(n));let r=t.shadowRoot;if(r){let t=r.querySelector("style");t&&(t.__cssRules=n._styleAst,t.textContent=v(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new V;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,n,r){t.flushCustomStyles(),t.prepareTemplate(e,n)},prepareTemplateStyles(t,e,n){window.ShadyCSS.prepareTemplate(t,e,n)},prepareTemplateDom(t,e){},styleSubtree(e,n){t.flushCustomStyles(),t.styleSubtree(e,n)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(C.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:r.c,nativeShadow:r.d,cssBuild:r.a,disableRuntime:r.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=K;var q=n(60),Y=n(91),W=n(89),J=n(12);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const G=/:host\(:dir\((ltr|rtl)\)\)/g,X=':host([dir="$1"])',Z=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Q=':host([dir="$2"]) $1',tt=/:dir\((?:ltr|rtl)\)/,et=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),nt=[];let rt=null,it="";function ot(){it=document.documentElement.getAttribute("dir")}function at(t){if(!t.__autoDirOptOut){t.setAttribute("dir",it)}}function st(){ot(),it=document.documentElement.getAttribute("dir");for(let t=0;t<nt.length;t++)at(nt[t])}const lt=Object(J.a)(t=>{et||rt||(ot(),(rt=new MutationObserver(st)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(W.a)(t);class n extends e{static _processStyleText(t,n){return t=e._processStyleText.call(this,t,n),!et&&tt.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=(e=e.replace(G,X)).replace(Z,Q)}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(rt&&rt.takeRecords().length&&st(),nt.push(this),at(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=nt.indexOf(this);t>-1&&nt.splice(t,1)}}}return n.__activateDir=!1,n});n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function ct(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?ct():window.addEventListener("DOMContentLoaded",ct);var ut=n(13),pt=n(74),ht=n(25),ft=n(17),dt=n(2),yt=n(1);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const mt=window.ShadyDOM,_t=window.ShadyCSS;function gt(t,e){return Object(yt.a)(t).getRootNode()===e}n.d(e,"a",(function(){return bt}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let vt=window.ShadyCSS;const bt=Object(J.a)(t=>{const e=lt(Object(Y.a)(Object(q.a)(t))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,n,r){e!==n&&(super.attributeChangedCallback(t,e,n,r),this.attributeChanged(t,e,n))}attributeChanged(t,e,n){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,n){this._propertyToAttribute(t,e,n)}serializeValueToAttribute(t,e,n){this._valueToNodeAttribute(n||this,t,e)}extend(t,e){if(!t||!e)return t||e;let n=Object.getOwnPropertyNames(e);for(let r,i=0;i<n.length&&(r=n[i]);i++){let n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n)}return t}mixin(t,e){for(let n in e)t[n]=e[n];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,n){n=n||{},e=null==e?{}:e;let r=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});r.detail=e;let i=n.node||this;return Object(yt.a)(i).dispatchEvent(r),r}listen(t,e,n){t=t||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),i=r.get(t);i||(i={},r.set(t,i));let o=e+n;i[o]||(i[o]=this._addMethodEventListenerToNode(t,e,n,this))}unlisten(t,e,n){t=t||this;let r=this.__boundListeners&&this.__boundListeners.get(t),i=e+n,o=r&&r[i];o&&(this._removeEventListenerFromNode(t,e,o),r[i]=null)}setScrollDirection(t,e){Object(pt.c)(e||this,n[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(yt.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(ut.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(ut.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(ut.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let n,r=0;n=t[r];r++)n.nodeType!==Node.COMMENT_NODE&&e.push(n.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(ut.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(yt.a)(this).contains(t)&&Object(yt.a)(this).getRootNode()===Object(yt.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(yt.a)(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!mt||!_t)return null;if(!mt.handlesDynamicScoping)return null;const n=_t.ScopingShim;if(!n)return null;const r=n.scopeForNode(t),i=Object(yt.a)(t).getRootNode(),o=t=>{if(!gt(t,i))return;const e=Array.from(mt.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const o=e[t];if(!gt(o,i))continue;const a=n.currentScopeForNode(o);a!==r&&(""!==a&&n.unscopeNode(o,a),n.scopeNode(o,r))}};if(o(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const n=t[e];for(let t=0;t<n.addedNodes.length;t++){const e=n.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&o(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return vt.getComputedStyleValue(this,t)}debounce(t,e,n){return this._debouncers=this._debouncers||{},this._debouncers[t]=ht.a.debounce(this._debouncers[t],n>0?ft.b.after(n):ft.a,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?ft.b.run(t.bind(this),e):~ft.a.run(t.bind(this))}cancelAsync(t){t<0?ft.a.cancel(~t):ft.b.cancel(t)}create(t,e){let n=document.createElement(t);if(e)if(n.setProperties)n.setProperties(e);else for(let t in e)n[t]=e[t];return n}elementMatches(t,e){return Object(ut.c)(e||this,t)}toggleAttribute(t,e){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(e=!n.hasAttribute(t)),e?(Object(yt.a)(n).setAttribute(t,""),!0):(Object(yt.a)(n).removeAttribute(t),!1)}toggleClass(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?n.classList.add(t):n.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,n,r){r=r||this,this.transform("translate3d("+t+","+e+","+n+")",r)}arrayDelete(t,e){let n;if(Array.isArray(t)){if((n=t.indexOf(e))>=0)return t.splice(n,1)}else{if((n=Object(dt.a)(this,t).indexOf(e))>=0)return this.splice(t,n,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return r.prototype.is="",r})},function(t,e,n){var r=n(31),i=n(4),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(45)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";var r=n(3);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(3),i=n(21),o=n(9)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[o])?e:i(n)}},function(t,e,n){"use strict";n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return y}));var r=n(73),i=n(20);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o="link[rel=import][type~=css]",a="include",s="shady-unscoped";function l(t){return r.a.import(t)}function c(t){let e=t.body?t.body:t;const n=Object(i.b)(e.textContent,t.baseURI),r=document.createElement("style");return r.textContent=n,r}function u(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...p(e[t]));return n}function p(t){const e=l(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...d(e));const n=e.querySelector("template");n&&t.push(...h(n,e.assetpath)),e._styles=t}return e._styles}function h(t,e){if(!t._styles){const n=[],r=t.content.querySelectorAll("style");for(let t=0;t<r.length;t++){let o=r[t],s=o.getAttribute(a);s&&n.push(...u(s).filter((function(t,e,n){return n.indexOf(t)===e}))),e&&(o.textContent=Object(i.b)(o.textContent,e)),n.push(o)}t._styles=n}return t._styles}function f(t){let e=l(t);return e?d(e):[]}function d(t){const e=[],n=t.querySelectorAll(o);for(let t=0;t<n.length;t++){let r=n[t];if(r.import){const t=r.import,n=r.hasAttribute(s);if(n&&!t._unscopedStyle){const e=c(t);e.setAttribute(s,""),t._unscopedStyle=e}else t._style||(t._style=c(t));e.push(n?t._unscopedStyle:t._style)}}return e}function y(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=m(e[t]);return n}function m(t){let e=l(t);if(e&&void 0===e._cssText){let t=_(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const r=h(t,e);for(let t=0;t<r.length;t++){let e=r[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function _(t){let e="",n=d(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(8);var r=n(20),i=n(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o={},a={};function s(t,e){o[t]=a[t.toLowerCase()]=e}function l(t){return o[t]||a[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=l(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,r){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(r.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(r.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(i.g&&void 0!==l(t))throw s(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,s(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=o,customElements.define("dom-module",c)},function(t,e,n){"use strict";n.d(e,"a",(function(){return L})),n.d(e,"b",(function(){return F})),n.d(e,"c",(function(){return B}));n(8);var r=n(17),i=n(25),o=n(7),a=n(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let s="string"==typeof document.head.style.touchAction,l="__polymerGestures",c="__polymerGesturesHandled",u="__polymerGesturesTouchAction",p=25,h=5,f=2500,d=["mousedown","mousemove","mouseup","click"],y=[0,1,4,2],m=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function _(t){return d.indexOf(t)>-1}let g=!1;function v(t){if(!_(t)&&"touchend"!==t)return s&&g&&o.d?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){g=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let b=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const w=[],x={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},S={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function O(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let r=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<r.length;t++)e.push(r[t])}}return e}let P=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[c]={skip:!0},"click"===t.type)){let e=!1,r=M(t);for(let t=0;t<r.length;t++){if(r[t].nodeType===Node.ELEMENT_NODE)if("label"===r[t].localName)w.push(r[t]);else if(n=r[t],x[n.localName]){let n=O(r[t]);for(let t=0;t<n.length;t++)e=e||w.indexOf(n[t])>-1}if(r[t]===A.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function C(t){let e=b?["click"]:d;for(let n,r=0;r<e.length;r++)n=e[r],t?(w.length=0,document.addEventListener(n,P,!0)):document.removeEventListener(n,P,!0)}function E(t){let e=t.type;if(!_(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!m&&(e=y[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let A={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function k(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function T(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}o.b&&document.addEventListener("touchend",(function(t){if(!o.b)return;A.mouse.mouseIgnoreJob||C(!0),A.mouse.target=M(t)[0],A.mouse.mouseIgnoreJob=i.a.debounce(A.mouse.mouseIgnoreJob,r.b.after(f),(function(){C(),A.mouse.target=null,A.mouse.mouseIgnoreJob=null}))}),!!g&&{passive:!0});const M=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],j={},N=[];function I(t){const e=M(t);return e.length>0?e[0]:t.target}function R(t){let e,n=t.type,r=t.currentTarget[l];if(!r)return;let i=r[n];if(i){if(!t[c]&&(t[c]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(A.touch.id=e.identifier),A.touch.id!==e.identifier)return;s||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)A.touch.x=e.clientX,A.touch.y=e.clientY,A.touch.scrollDecided=!1;else if("touchmove"===n){if(A.touch.scrollDecided)return;A.touch.scrollDecided=!0;let n=function(t){let e="auto",n=M(t);for(let t,r=0;r<n.length;r++)if((t=n[r])[u]){e=t[u];break}return e}(t),r=!1,i=Math.abs(A.touch.x-e.clientX),o=Math.abs(A.touch.y-e.clientY);t.cancelable&&("none"===n?r=!0:"pan-x"===n?r=o>i:"pan-y"===n&&(r=i>o)),r?t.preventDefault():H("track")}}(t)}if(!(e=t[c]).skip){for(let n,r=0;r<N.length;r++)i[(n=N[r]).name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let r,o=0;o<N.length;o++)i[(r=N[o]).name]&&!e[r.name]&&(e[r.name]=!0,r[n](t))}}}function L(t,e,n){return!!j[e]&&(function(t,e,n){let r=j[e],i=r.deps,o=r.name,a=t[l];a||(t[l]=a={});for(let e,n,r=0;r<i.length;r++)e=i[r],b&&_(e)&&"click"!==e||((n=a[e])||(a[e]=n={_count:0}),0===n._count&&t.addEventListener(e,R,v(e)),n[o]=(n[o]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),r.touchAction&&B(t,r.touchAction)}(t,e,n),!0)}function F(t,e,n){return!!j[e]&&(function(t,e,n){let r=j[e],i=r.deps,o=r.name,a=t[l];if(a)for(let e,n,r=0;r<i.length;r++)e=i[r],(n=a[e])&&n[o]&&(n[o]=(n[o]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,R,v(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function D(t){N.push(t);for(let e=0;e<t.emits.length;e++)j[t.emits[e]]=t}function B(t,e){s&&t instanceof HTMLElement&&r.a.run(()=>{t.style.touchAction=e}),t[u]=e}function z(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=n,Object(a.a)(t).dispatchEvent(r),r.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function H(t){let e=function(t){for(let e,n=0;n<N.length;n++){e=N[n];for(let n,r=0;r<e.emits.length;r++)if((n=e.emits[r])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function U(t,e,n,r){e&&z(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:r,prevent:function(t){return H(t)}})}function $(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let r=Math.abs(t.x-e),i=Math.abs(t.y-n);return r>=h||i>=h}function K(t,e,n){if(!e)return;let r,i=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],a=o.x-t.x,s=o.y-t.y,l=0;i&&(r=o.x-i.x,l=o.y-i.y),z(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:a,dy:s,ddx:r,ddy:l,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),r=n;for(;r&&r.shadowRoot&&!window.ShadyDOM;){if(r===(r=r.shadowRoot.elementFromPoint(t,e)))break;r&&(n=r)}return n}(n.clientX,n.clientY)}})}function V(t,e,n){let r=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),o=I(n||e);!o||S[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(i)||r<=p&&i<=p||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=I(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),r=t.pageX,i=t.pageY;return!(r>=n.left&&r<=n.right&&i>=n.top&&i<=n.bottom)}return!1}(e))&&(t.prevent||z(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}D({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){T(this.info)},mousedown:function(t){if(!E(t))return;let e=I(t),n=this;k(this.info,(function(t){E(t)||(U("up",e,t),T(n.info))}),(function(t){E(t)&&U("up",e,t),T(n.info)})),U("down",e,t)},touchstart:function(t){U("down",I(t),t.changedTouches[0],t)},touchend:function(t){U("up",I(t),t.changedTouches[0],t)}}),D({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,T(this.info)},mousedown:function(t){if(!E(t))return;let e=I(t),n=this,r=function(t){let r=t.clientX,i=t.clientY;$(n.info,r,i)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&H("tap"),n.info.addMove({x:r,y:i}),E(t)||(n.info.state="end",T(n.info)),e&&K(n.info,e,t),n.info.started=!0)};k(this.info,r,(function(t){n.info.started&&r(t),T(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=I(t),n=t.changedTouches[0],r=n.clientX,i=n.clientY;$(this.info,r,i)&&("start"===this.info.state&&H("tap"),this.info.addMove({x:r,y:i}),K(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=I(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),K(this.info,e,n))}}),D({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){E(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){E(t)&&V(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){V(this.info,t.changedTouches[0],t)}})},function(t,e,n){var r=n(27),i=n(10),o=n(52);t.exports=function(t){return function(e,n,a){var s,l=r(e),c=i(l.length),u=o(a,c);if(t&&n!=n){for(;c>u;)if((s=l[u++])!=s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(33);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(34),i=n(38);t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),l=r(n),c=s.length;return l<0||l>=c?t?"":void 0:(o=s.charCodeAt(l))<55296||o>56319||l+1===c||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):o:t?s.slice(l,l+2):a-56320+(o-55296<<10)+65536}}},function(t,e,n){var r=n(6),i=n(33),o=n(9)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){var r=n(9)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(63),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e,n){"use strict";n(142);var r=n(23),i=n(22),o=n(5),a=n(38),s=n(9),l=n(115),c=s("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=s(t),f=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),d=f?!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[h](""),!e})):void 0;if(!f||!d||"replace"===t&&!u||"split"===t&&!p){var y=/./[h],m=n(a,h,""[t],(function(t,e,n,r,i){return e.exec===l?f&&!i?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),_=m[0],g=m[1];r(String.prototype,t,_),i(RegExp.prototype,h,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},function(t,e,n){var r=n(4).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){"use strict";var r=n(4),i=n(0),o=n(23),a=n(58),s=n(46),l=n(57),c=n(56),u=n(6),p=n(5),h=n(80),f=n(62),d=n(101);t.exports=function(t,e,n,y,m,_){var g=r[t],v=g,b=m?"set":"add",w=v&&v.prototype,x={},S=function(t){var e=w[t];o(w,t,"delete"==t?function(t){return!(_&&!u(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(_&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return _&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof v&&(_||w.forEach&&!p((function(){(new v).entries().next()})))){var O=new v,P=O[b](_?{}:-0,1)!=O,C=p((function(){O.has(1)})),E=h((function(t){new v(t)})),A=!_&&p((function(){for(var t=new v,e=5;e--;)t[b](e,e);return!t.has(-0)}));E||((v=e((function(e,n){c(e,v,t);var r=d(new g,e,v);return null!=n&&l(n,m,r[b],r),r}))).prototype=w,w.constructor=v),(C||A)&&(S("delete"),S("has"),m&&S("get")),(A||P)&&S(b),_&&w.clear&&delete w.clear}else v=y.getConstructor(e,t,m,b),a(v.prototype,n),s.NEED=!0;return f(v,t),x[t]=v,i(i.G+i.W+i.F*(v!=g),x),_||y.setStrong(v,t,m),v}},function(t,e,n){for(var r,i=n(4),o=n(22),a=n(50),s=a("typed_array"),l=a("view"),c=!(!i.ArrayBuffer||!i.DataView),u=c,p=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");p<9;)(r=i[h[p++]])?(o(r.prototype,s,!0),o(r.prototype,l,!0)):u=!1;t.exports={ABV:c,CONSTR:u,TYPED:s,VIEW:l}},function(t,e,n){"use strict";t.exports=n(45)||!n(5)((function(){var t=Math.random();__defineSetter__.call(null,t,(function(){})),delete n(4)[t]}))},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},function(t,e,n){"use strict";var r=n(0),i=n(21),o=n(32),a=n(57);t.exports=function(t){r(r.S,t,{from:function(t){var e,n,r,s,l=arguments[1];return i(this),(e=void 0!==l)&&i(l),null==t?new this:(n=[],e?(r=0,s=o(l,arguments[2],2),a(t,!1,(function(t){n.push(s(t,r++))}))):a(t,!1,n.push,n),new this(n))}})}},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(8);var r=n(12),i=n(48),o=n(90);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const a={};let s=HTMLElement.prototype;for(;s;){let t=Object.getOwnPropertyNames(s);for(let e=0;e<t.length;e++)a[t[e]]=!0;s=Object.getPrototypeOf(s)}const l=Object(r.a)(t=>{const e=Object(o.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(i.b)(t[e]))}static attributeNameForProperty(t){return Object(i.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!a[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(8);var r=n(12),i=n(17),o=n(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const a=i.a,s=Object(r.a)(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let r=this.__data[t],i=this._shouldPropertyChange(t,e,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=r),this.__data[t]=e,this.__dataPending[t]=e),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,a.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n))}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,r){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,r)}_attributeToProperty(t,e,n){if(!this.__serializing){const r=this.__dataAttributes,i=r&&r[t]||t;this[i]=this._deserializeValue(e,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const r=this._serializeValue(e);"class"!==n&&"name"!==n&&"slot"!==n||(t=Object(o.a)(t)),void 0===r?t.removeAttribute(n):t.setAttribute(n,r)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(8);var r=n(12),i=n(74);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=Object(r.a)(t=>{return class extends t{_addEventListenerToNode(t,e,n){Object(i.a)(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Object(i.b)(t,e,n)||super._removeEventListenerFromNode(t,e,n)}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(8);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e,n){return{index:t,removed:e,addedCount:n}}const i=0,o=1,a=2,s=3;function l(t,e,n,l,c,p){let h,f=0,d=0,y=Math.min(n-e,p-c);if(0==e&&0==c&&(f=function(t,e,n){for(let r=0;r<n;r++)if(!u(t[r],e[r]))return r;return n}(t,l,y)),n==t.length&&p==l.length&&(d=function(t,e,n){let r=t.length,i=e.length,o=0;for(;o<n&&u(t[--r],e[--i]);)o++;return o}(t,l,y-f)),c+=f,p-=d,(n-=d)-(e+=f)==0&&p-c==0)return[];if(e==n){for(h=r(e,[],0);c<p;)h.removed.push(l[c++]);return[h]}if(c==p)return[r(e,[],n-e)];let m=function(t){let e=t.length-1,n=t[0].length-1,r=t[e][n],l=[];for(;e>0||n>0;){if(0==e){l.push(a),n--;continue}if(0==n){l.push(s),e--;continue}let c,u=t[e-1][n-1],p=t[e-1][n],h=t[e][n-1];(c=p<h?p<u?p:u:h<u?h:u)==u?(u==r?l.push(i):(l.push(o),r=u),e--,n--):c==p?(l.push(s),e--,r=p):(l.push(a),n--,r=h)}return l.reverse(),l}(function(t,e,n,r,i,o){let a=o-i+1,s=n-e+1,l=new Array(a);for(let t=0;t<a;t++)l[t]=new Array(s),l[t][0]=t;for(let t=0;t<s;t++)l[0][t]=t;for(let n=1;n<a;n++)for(let o=1;o<s;o++)if(u(t[e+o-1],r[i+n-1]))l[n][o]=l[n-1][o-1];else{let t=l[n-1][o]+1,e=l[n][o-1]+1;l[n][o]=t<e?t:e}return l}(t,e,n,l,c,p));h=void 0;let _=[],g=e,v=c;for(let t=0;t<m.length;t++)switch(m[t]){case i:h&&(_.push(h),h=void 0),g++,v++;break;case o:h||(h=r(g,[],0)),h.addedCount++,g++,h.removed.push(l[v]),v++;break;case a:h||(h=r(g,[],0)),h.addedCount++,g++;break;case s:h||(h=r(g,[],0)),h.removed.push(l[v]),v++}return h&&_.push(h),_}function c(t,e){return l(t,0,t.length,e,0,e.length)}function u(t,e){return t===e}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(6),i=n(4).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(4),i=n(31),o=n(45),a=n(124),s=n(15).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){var r=n(67)("keys"),i=n(50);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(4).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(6),i=n(3),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(32)(Function.call,n(28).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var r=n(6),i=n(99).set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){"use strict";var r=n(34),i=n(38);t.exports=function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},function(t,e,n){"use strict";var r=n(45),i=n(0),o=n(23),a=n(22),s=n(65),l=n(106),c=n(62),u=n(29),p=n(9)("iterator"),h=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,e,n,d,y,m,_){l(n,e,d);var g,v,b,w=function(t){if(!h&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",S="values"==y,O=!1,P=t.prototype,C=P[p]||P["@@iterator"]||y&&P[y],E=C||w(y),A=y?S?w("entries"):E:void 0,k="Array"==e&&P.entries||C;if(k&&(b=u(k.call(new t)))!==Object.prototype&&b.next&&(c(b,x,!0),r||"function"==typeof b[p]||a(b,p,f)),S&&C&&"values"!==C.name&&(O=!0,E=function(){return C.call(this)}),r&&!_||!h&&!O&&P[p]||a(P,p,E),s[e]=E,s[x]=f,y)if(g={values:S?E:w("values"),keys:m?E:w("keys"),entries:A},_)for(v in g)v in P||o(P,v,g[v]);else i(i.P+i.F*(h||O),e,g);return g}},function(t,e,n){"use strict";var r=n(53),i=n(49),o=n(62),a={};n(22)(a,n(9)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(79),i=n(38);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},function(t,e,n){var r=n(9)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){var r=n(65),i=n(9)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(15),i=n(49);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(63),i=n(9)("iterator"),o=n(65);t.exports=n(31).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(254);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){"use strict";var r=n(16),i=n(52),o=n(10);t.exports=function(t){for(var e=r(this),n=o(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,n),l=a>2?arguments[2]:void 0,c=void 0===l?n:i(l,n);c>s;)e[s++]=t;return e}},function(t,e,n){"use strict";var r=n(47),i=n(141),o=n(65),a=n(27);t.exports=n(105)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e,n){"use strict";var r,i,o=n(70),a=RegExp.prototype.exec,s=String.prototype.replace,l=a,c=(r=/a/,i=/b*/g,a.call(r,"a"),a.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(l=function(t){var e,n,r,i,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",o.call(l))),c&&(e=l.lastIndex),r=a.call(l,t),c&&r&&(l.lastIndex=l.global?r.index+r[0].length:e),u&&r&&r.length>1&&s.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=l},function(t,e,n){"use strict";var r=n(78)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r,i,o,a=n(32),s=n(131),l=n(98),c=n(94),u=n(4),p=u.process,h=u.setImmediate,f=u.clearImmediate,d=u.MessageChannel,y=u.Dispatch,m=0,_={},g=function(){var t=+this;if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},v=function(t){g.call(t.data)};h&&f||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return _[++m]=function(){s("function"==typeof t?t:Function(t),e)},r(m),m},f=function(t){delete _[t]},"process"==n(33)(p)?r=function(t){p.nextTick(a(g,t,1))}:y&&y.now?r=function(t){y.now(a(g,t,1))}:d?(o=(i=new d).port2,i.port1.onmessage=v,r=a(o.postMessage,o,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(r=function(t){u.postMessage(t+"","*")},u.addEventListener("message",v,!1)):r="onreadystatechange"in c("script")?function(t){l.appendChild(c("script")).onreadystatechange=function(){l.removeChild(this),g.call(t)}}:function(t){setTimeout(a(g,t,1),0)}),t.exports={set:h,clear:f}},function(t,e,n){var r=n(4),i=n(117).set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,l="process"==n(33)(a);t.exports=function(){var t,e,n,c=function(){var r,i;for(l&&(r=a.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(l)n=function(){a.nextTick(c)};else if(!o||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);n=function(){u.then(c)}}else n=function(){i.call(r,c)};else{var p=!0,h=document.createTextNode("");new o(c).observe(h,{characterData:!0}),n=function(){h.data=p=!p}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},function(t,e,n){"use strict";var r=n(21);function i(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new i(t)}},function(t,e,n){"use strict";var r=n(4),i=n(14),o=n(45),a=n(85),s=n(22),l=n(58),c=n(5),u=n(56),p=n(34),h=n(10),f=n(151),d=n(54).f,y=n(15).f,m=n(113),_=n(62),g="prototype",v="Wrong index!",b=r.ArrayBuffer,w=r.DataView,x=r.Math,S=r.RangeError,O=r.Infinity,P=b,C=x.abs,E=x.pow,A=x.floor,k=x.log,T=x.LN2,M=i?"_b":"buffer",j=i?"_l":"byteLength",N=i?"_o":"byteOffset";function I(t,e,n){var r,i,o,a=new Array(n),s=8*n-e-1,l=(1<<s)-1,c=l>>1,u=23===e?E(2,-24)-E(2,-77):0,p=0,h=t<0||0===t&&1/t<0?1:0;for((t=C(t))!=t||t===O?(i=t!=t?1:0,r=l):(r=A(k(t)/T),t*(o=E(2,-r))<1&&(r--,o*=2),(t+=r+c>=1?u/o:u*E(2,1-c))*o>=2&&(r++,o/=2),r+c>=l?(i=0,r=l):r+c>=1?(i=(t*o-1)*E(2,e),r+=c):(i=t*E(2,c-1)*E(2,e),r=0));e>=8;a[p++]=255&i,i/=256,e-=8);for(r=r<<e|i,s+=e;s>0;a[p++]=255&r,r/=256,s-=8);return a[--p]|=128*h,a}function R(t,e,n){var r,i=8*n-e-1,o=(1<<i)-1,a=o>>1,s=i-7,l=n-1,c=t[l--],u=127&c;for(c>>=7;s>0;u=256*u+t[l],l--,s-=8);for(r=u&(1<<-s)-1,u>>=-s,s+=e;s>0;r=256*r+t[l],l--,s-=8);if(0===u)u=1-a;else{if(u===o)return r?NaN:c?-O:O;r+=E(2,e),u-=a}return(c?-1:1)*r*E(2,u-e)}function L(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function F(t){return[255&t]}function D(t){return[255&t,t>>8&255]}function B(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function z(t){return I(t,52,8)}function H(t){return I(t,23,4)}function U(t,e,n){y(t[g],e,{get:function(){return this[n]}})}function $(t,e,n,r){var i=f(+n);if(i+e>t[j])throw S(v);var o=t[M]._b,a=i+t[N],s=o.slice(a,a+e);return r?s:s.reverse()}function K(t,e,n,r,i,o){var a=f(+n);if(a+e>t[j])throw S(v);for(var s=t[M]._b,l=a+t[N],c=r(+i),u=0;u<e;u++)s[l+u]=c[o?u:e-u-1]}if(a.ABV){if(!c((function(){b(1)}))||!c((function(){new b(-1)}))||c((function(){return new b,new b(1.5),new b(NaN),"ArrayBuffer"!=b.name}))){for(var V,q=(b=function(t){return u(this,b),new P(f(t))})[g]=P[g],Y=d(P),W=0;Y.length>W;)(V=Y[W++])in b||s(b,V,P[V]);o||(q.constructor=b)}var J=new w(new b(2)),G=w[g].setInt8;J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||l(w[g],{setInt8:function(t,e){G.call(this,t,e<<24>>24)},setUint8:function(t,e){G.call(this,t,e<<24>>24)}},!0)}else b=function(t){u(this,b,"ArrayBuffer");var e=f(t);this._b=m.call(new Array(e),0),this[j]=e},w=function(t,e,n){u(this,w,"DataView"),u(t,b,"DataView");var r=t[j],i=p(e);if(i<0||i>r)throw S("Wrong offset!");if(i+(n=void 0===n?r-i:h(n))>r)throw S("Wrong length!");this[M]=t,this[N]=i,this[j]=n},i&&(U(b,"byteLength","_l"),U(w,"buffer","_b"),U(w,"byteLength","_l"),U(w,"byteOffset","_o")),l(w[g],{getInt8:function(t){return $(this,1,t)[0]<<24>>24},getUint8:function(t){return $(this,1,t)[0]},getInt16:function(t){var e=$(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=$(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return L($(this,4,t,arguments[1]))},getUint32:function(t){return L($(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return R($(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return R($(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){K(this,1,t,F,e)},setUint8:function(t,e){K(this,1,t,F,e)},setInt16:function(t,e){K(this,2,t,D,e,arguments[2])},setUint16:function(t,e){K(this,2,t,D,e,arguments[2])},setInt32:function(t,e){K(this,4,t,B,e,arguments[2])},setUint32:function(t,e){K(this,4,t,B,e,arguments[2])},setFloat32:function(t,e){K(this,4,t,H,e,arguments[2])},setFloat64:function(t,e){K(this,8,t,z,e,arguments[2])}});_(b,"ArrayBuffer"),_(w,"DataView"),s(w[g],a.VIEW,!0),e.ArrayBuffer=b,e.DataView=w},function(t,e,n){"use strict";n(19);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const r=n(11).a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;r.setAttribute("style","display: none;"),document.head.appendChild(r.content);var i=document.createElement("style");i.textContent="[hidden] { display: none !important; }",document.head.appendChild(i)},function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r,i=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function a(t){requestAnimationFrame((function(){o?o(t):(i||(i=new Promise(t=>{r=t}),"complete"===document.readyState?r():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&r()})),i.then((function(){t&&t()})))}))}n.d(e,"a",(function(){return p}));const s="__seenByShadyCSS",l="__shadyCSSCachedStyle";let c=null,u=null;class p{constructor(){this.customStyles=[],this.enqueued=!1,a(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&u&&(this.enqueued=!0,a(u))}addCustomStyle(t){t[s]||(t[s]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[l])return t[l];let e;return e=t.getStyle?t.getStyle():t}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[l])continue;const r=this.getStyleForCustomStyle(n);if(r){const t=r.__appliedElement||r;c&&c(t),n[l]=t}}return t}}p.prototype.addCustomStyle=p.prototype.addCustomStyle,p.prototype.getStyleForCustomStyle=p.prototype.getStyleForCustomStyle,p.prototype.processStyles=p.prototype.processStyles,Object.defineProperties(p.prototype,{transformCallback:{get:()=>c,set(t){c=t}},validateCallback:{get:()=>u,set(t){let e=!1;u||(e=!0),u=t,e&&this.enqueueDocumentValidation()}}})},function(t,e,n){t.exports=!n(14)&&!n(5)((function(){return 7!=Object.defineProperty(n(94)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){e.f=n(9)},function(t,e,n){var r=n(26),i=n(27),o=n(75)(!1),a=n(96)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),l=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>l;)r(s,n=e[l++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(15),i=n(3),o=n(51);t.exports=n(14)?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),s=a.length,l=0;s>l;)r.f(t,n=a[l++],e[n]);return t}},function(t,e,n){var r=n(27),i=n(54).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(r(t))}},function(t,e,n){"use strict";var r=n(14),i=n(51),o=n(76),a=n(69),s=n(16),l=n(68),c=Object.assign;t.exports=!c||n(5)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r}))?function(t,e){for(var n=s(t),c=arguments.length,u=1,p=o.f,h=a.f;c>u;)for(var f,d=l(arguments[u++]),y=p?i(d).concat(p(d)):i(d),m=y.length,_=0;m>_;)f=y[_++],r&&!h.call(d,f)||(n[f]=d[f]);return n}:c},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){"use strict";var r=n(21),i=n(6),o=n(131),a=[].slice,s={},l=function(t,e,n){if(!(e in s)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";s[e]=Function("F,a","return new F("+r.join(",")+")")}return s[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=a.call(arguments,1),s=function(){var r=n.concat(a.call(arguments));return this instanceof s?l(e,r.length,r):o(e,r,t)};return i(e.prototype)&&(s.prototype=e.prototype),s}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(4).parseInt,i=n(64).trim,o=n(100),a=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(a.test(n)?16:10))}:r},function(t,e,n){var r=n(4).parseFloat,i=n(64).trim;t.exports=1/r(n(100)+"-0")!=-1/0?function(t){var e=i(String(t),3),n=r(e);return 0===n&&"-"==e.charAt(0)?-0:n}:r},function(t,e,n){var r=n(33);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(e);return+t}},function(t,e,n){var r=n(6),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,e,n){var r=n(103),i=Math.pow,o=i(2,-52),a=i(2,-23),s=i(2,127)*(2-a),l=i(2,-126);t.exports=Math.fround||function(t){var e,n,i=Math.abs(t),c=r(t);return i<l?c*(i/l/a+1/o-1/o)*l*a:(n=(e=(1+a/o)*i)-(e-i))>s||n!=n?c*(1/0):c*n}},function(t,e,n){var r=n(3);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(21),i=n(16),o=n(68),a=n(10);t.exports=function(t,e,n,s,l){r(e);var c=i(t),u=o(c),p=a(c.length),h=l?p-1:0,f=l?-1:1;if(n<2)for(;;){if(h in u){s=u[h],h+=f;break}if(h+=f,l?h<0:p<=h)throw TypeError("Reduce of empty array with no initial value")}for(;l?h>=0:p>h;h+=f)h in u&&(s=e(s,u[h],h,c));return s}},function(t,e,n){"use strict";var r=n(16),i=n(52),o=n(10);t.exports=[].copyWithin||function(t,e){var n=r(this),a=o(n.length),s=i(t,a),l=i(e,a),c=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===c?a:i(c,a))-l,a-s),p=1;for(l<s&&s<l+u&&(p=-1,l+=u-1,s+=u-1);u-- >0;)l in n?n[s]=n[l]:delete n[s],s+=p,l+=p;return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r=n(115);n(0)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){n(14)&&"g"!=/./g.flags&&n(15).f(RegExp.prototype,"flags",{configurable:!0,get:n(70)})},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(3),i=n(6),o=n(119);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var r=n(147),i=n(59);t.exports=n(84)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(i(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(i(this,"Map"),0===t?0:t,e)}},r,!0)},function(t,e,n){"use strict";var r=n(15).f,i=n(53),o=n(58),a=n(32),s=n(56),l=n(57),c=n(105),u=n(141),p=n(55),h=n(14),f=n(46).fastKey,d=n(59),y=h?"_s":"size",m=function(t,e){var n,r=f(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var u=t((function(t,r){s(t,u,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[y]=0,null!=r&&l(r,n,t[c],t)}));return o(u.prototype,{clear:function(){for(var t=d(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[y]=0},delete:function(t){var n=d(this,e),r=m(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[y]--}return!!r},forEach:function(t){d(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(d(this,e),t)}}),h&&r(u.prototype,"size",{get:function(){return d(this,e)[y]}}),u},def:function(t,e,n){var r,i,o=m(t,e);return o?o.v=n:(t._l=o={i:i=f(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[y]++,"F"!==i&&(t._i[i]=o)),t},getEntry:m,setStrong:function(t,e,n){c(t,e,(function(t,n){this._t=d(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),p(e)}}},function(t,e,n){"use strict";var r=n(147),i=n(59);t.exports=n(84)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},function(t,e,n){"use strict";var r,i=n(4),o=n(40)(0),a=n(23),s=n(46),l=n(128),c=n(150),u=n(6),p=n(59),h=n(59),f=!i.ActiveXObject&&"ActiveXObject"in i,d=s.getWeak,y=Object.isExtensible,m=c.ufstore,_=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(u(t)){var e=d(t);return!0===e?m(p(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return c.def(p(this,"WeakMap"),t,e)}},v=t.exports=n(84)("WeakMap",_,g,c,!0,!0);h&&f&&(l((r=c.getConstructor(_,"WeakMap")).prototype,g),s.NEED=!0,o(["delete","has","get","set"],(function(t){var e=v.prototype,n=e[t];a(e,t,(function(e,i){if(u(e)&&!y(e)){this._f||(this._f=new r);var o=this._f[t](e,i);return"set"==t?this:o}return n.call(this,e,i)}))})))},function(t,e,n){"use strict";var r=n(58),i=n(46).getWeak,o=n(3),a=n(6),s=n(56),l=n(57),c=n(40),u=n(26),p=n(59),h=c(5),f=c(6),d=0,y=function(t){return t._l||(t._l=new m)},m=function(){this.a=[]},_=function(t,e){return h(t.a,(function(t){return t[0]===e}))};m.prototype={get:function(t){var e=_(this,t);if(e)return e[1]},has:function(t){return!!_(this,t)},set:function(t,e){var n=_(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=f(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,o){var c=t((function(t,r){s(t,c,e,"_i"),t._t=e,t._i=d++,t._l=void 0,null!=r&&l(r,n,t[o],t)}));return r(c.prototype,{delete:function(t){if(!a(t))return!1;var n=i(t);return!0===n?y(p(this,e)).delete(t):n&&u(n,this._i)&&delete n[this._i]},has:function(t){if(!a(t))return!1;var n=i(t);return!0===n?y(p(this,e)).has(t):n&&u(n,this._i)}}),c},def:function(t,e,n){var r=i(o(e),!0);return!0===r?y(t).set(e,n):r[t._i]=n,t},ufstore:y}},function(t,e,n){var r=n(34),i=n(10);t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw RangeError("Wrong length!");return n}},function(t,e,n){var r=n(54),i=n(76),o=n(3),a=n(4).Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){"use strict";var r=n(77),i=n(6),o=n(10),a=n(32),s=n(9)("isConcatSpreadable");t.exports=function t(e,n,l,c,u,p,h,f){for(var d,y,m=u,_=0,g=!!h&&a(h,f,3);_<c;){if(_ in l){if(d=g?g(l[_],_,n):l[_],y=!1,i(d)&&(y=void 0!==(y=d[s])?!!y:r(d)),y&&p>0)m=t(e,n,d,o(d.length),m,p-1)-1;else{if(m>=9007199254740991)throw TypeError();e[m]=d}m++}_++}return m}},function(t,e,n){var r=n(10),i=n(102),o=n(38);t.exports=function(t,e,n,a){var s=String(o(t)),l=s.length,c=void 0===n?" ":String(n),u=r(e);if(u<=l||""==c)return s;var p=u-l,h=i.call(c,Math.ceil(p/c.length));return h.length>p&&(h=h.slice(0,p)),a?h+s:s+h}},function(t,e,n){var r=n(14),i=n(51),o=n(27),a=n(69).f;t.exports=function(t){return function(e){for(var n,s=o(e),l=i(s),c=l.length,u=0,p=[];c>u;)n=l[u++],r&&!a.call(s,n)||p.push(t?[n,s[n]]:s[n]);return p}}},function(t,e,n){var r=n(63),i=n(157);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,e,n){var r=n(57);t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},function(t,e){t.exports=Math.scale||function(t,e,n,r,i){return 0===arguments.length||t!=t||e!=e||n!=n||r!=r||i!=i?NaN:t===1/0||t===-1/0?t:(t-e)*(i-r)/(n-e)+r}},function(t,e,n){"use strict";n(19);var r=n(11);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const i=r.a`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const o=r.a`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;o.setAttribute("style","display: none;"),document.head.appendChild(o.content)},function(t,e,n){"use strict";n(19);var r=n(11);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const i=r.a`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const o=r.a`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;o.setAttribute("style","display: none;"),document.head.appendChild(o.content)},function(t,e,n){"use strict";n.r(e),function(t){n(364),n(372),n(370),n(371);function e(t,e,n,r,i,o,a){try{var s=t[o](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(r,i)}function r(t){return function(){var n=this,r=arguments;return new Promise((function(i,o){var a=t.apply(n,r);function s(t){e(a,i,o,s,l,"next",t)}function l(t){e(a,i,o,s,l,"throw",t)}s(void 0)}))}}t._babelPolyfill||n(162);var i=document.getElementById("snackbar");window.addEventListener("load",r(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a();case 2:case"end":return t.stop()}}),t)}))));var o,a=function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js")},s=function(t){o&&clearTimeout(o),""!==i.innerText?i.innerText+="\n"+t:i.innerText=t,i.classList.add("show"),o=setTimeout((function(){i.classList.remove("show"),i.innerText=""}),5e3)};window.addEventListener("offline",(function(){s("You are offline 📴")})),window.addEventListener("online",(function(){s("You are back online! 🎉")}))}.call(this,n(93))},function(t,e,n){"use strict";(function(t){if(n(163),n(360),n(361),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var e="defineProperty";function r(t,n,r){t[n]||Object[e](t,n,{writable:!0,configurable:!0,value:r})}r(String.prototype,"padLeft","".padStart),r(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach((function(t){[][t]&&r(Array,t,Function.call.bind([][t]))}))}).call(this,n(93))},function(t,e,n){n(164),n(167),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(176),n(177),n(178),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(244),n(245),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(114),n(268),n(142),n(269),n(143),n(270),n(271),n(272),n(273),n(274),n(146),n(148),n(149),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),t.exports=n(31)},function(t,e,n){"use strict";var r=n(4),i=n(26),o=n(14),a=n(0),s=n(23),l=n(46).KEY,c=n(5),u=n(67),p=n(62),h=n(50),f=n(9),d=n(124),y=n(95),m=n(166),_=n(77),g=n(3),v=n(6),b=n(16),w=n(27),x=n(37),S=n(49),O=n(53),P=n(127),C=n(28),E=n(76),A=n(15),k=n(51),T=C.f,M=A.f,j=P.f,N=r.Symbol,I=r.JSON,R=I&&I.stringify,L=f("_hidden"),F=f("toPrimitive"),D={}.propertyIsEnumerable,B=u("symbol-registry"),z=u("symbols"),H=u("op-symbols"),U=Object.prototype,$="function"==typeof N&&!!E.f,K=r.QObject,V=!K||!K.prototype||!K.prototype.findChild,q=o&&c((function(){return 7!=O(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=T(U,e);r&&delete U[e],M(t,e,n),r&&t!==U&&M(U,e,r)}:M,Y=function(t){var e=z[t]=O(N.prototype);return e._k=t,e},W=$&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},J=function(t,e,n){return t===U&&J(H,e,n),g(t),e=x(e,!0),g(n),i(z,e)?(n.enumerable?(i(t,L)&&t[L][e]&&(t[L][e]=!1),n=O(n,{enumerable:S(0,!1)})):(i(t,L)||M(t,L,S(1,{})),t[L][e]=!0),q(t,e,n)):M(t,e,n)},G=function(t,e){g(t);for(var n,r=m(e=w(e)),i=0,o=r.length;o>i;)J(t,n=r[i++],e[n]);return t},X=function(t){var e=D.call(this,t=x(t,!0));return!(this===U&&i(z,t)&&!i(H,t))&&(!(e||!i(this,t)||!i(z,t)||i(this,L)&&this[L][t])||e)},Z=function(t,e){if(t=w(t),e=x(e,!0),t!==U||!i(z,e)||i(H,e)){var n=T(t,e);return!n||!i(z,e)||i(t,L)&&t[L][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=j(w(t)),r=[],o=0;n.length>o;)i(z,e=n[o++])||e==L||e==l||r.push(e);return r},tt=function(t){for(var e,n=t===U,r=j(n?H:w(t)),o=[],a=0;r.length>a;)!i(z,e=r[a++])||n&&!i(U,e)||o.push(z[e]);return o};$||(s((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===U&&e.call(H,n),i(this,L)&&i(this[L],t)&&(this[L][t]=!1),q(this,t,S(1,n))};return o&&V&&q(U,t,{configurable:!0,set:e}),Y(t)}).prototype,"toString",(function(){return this._k})),C.f=Z,A.f=J,n(54).f=P.f=Q,n(69).f=X,E.f=tt,o&&!n(45)&&s(U,"propertyIsEnumerable",X,!0),d.f=function(t){return Y(f(t))}),a(a.G+a.W+a.F*!$,{Symbol:N});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)f(et[nt++]);for(var rt=k(f.store),it=0;rt.length>it;)y(rt[it++]);a(a.S+a.F*!$,"Symbol",{for:function(t){return i(B,t+="")?B[t]:B[t]=N(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!$,"Object",{create:function(t,e){return void 0===e?O(t):G(O(t),e)},defineProperty:J,defineProperties:G,getOwnPropertyDescriptor:Z,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var ot=c((function(){E.f(1)}));a(a.S+a.F*ot,"Object",{getOwnPropertySymbols:function(t){return E.f(b(t))}}),I&&a(a.S+a.F*(!$||c((function(){var t=N();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(v(e)||void 0!==t)&&!W(t))return _(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,R.apply(I,r)}}),N.prototype[F]||n(22)(N.prototype,F,N.prototype.valueOf),p(N,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},function(t,e,n){t.exports=n(67)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(51),i=n(76),o=n(69);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var a,s=n(t),l=o.f,c=0;s.length>c;)l.call(t,a=s[c++])&&e.push(a);return e}},function(t,e,n){var r=n(0);r(r.S,"Object",{create:n(53)})},function(t,e,n){var r=n(0);r(r.S+r.F*!n(14),"Object",{defineProperty:n(15).f})},function(t,e,n){var r=n(0);r(r.S+r.F*!n(14),"Object",{defineProperties:n(126)})},function(t,e,n){var r=n(27),i=n(28).f;n(39)("getOwnPropertyDescriptor",(function(){return function(t,e){return i(r(t),e)}}))},function(t,e,n){var r=n(16),i=n(29);n(39)("getPrototypeOf",(function(){return function(t){return i(r(t))}}))},function(t,e,n){var r=n(16),i=n(51);n(39)("keys",(function(){return function(t){return i(r(t))}}))},function(t,e,n){n(39)("getOwnPropertyNames",(function(){return n(127).f}))},function(t,e,n){var r=n(6),i=n(46).onFreeze;n(39)("freeze",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},function(t,e,n){var r=n(6),i=n(46).onFreeze;n(39)("seal",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},function(t,e,n){var r=n(6),i=n(46).onFreeze;n(39)("preventExtensions",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},function(t,e,n){var r=n(6);n(39)("isFrozen",(function(t){return function(e){return!r(e)||!!t&&t(e)}}))},function(t,e,n){var r=n(6);n(39)("isSealed",(function(t){return function(e){return!r(e)||!!t&&t(e)}}))},function(t,e,n){var r=n(6);n(39)("isExtensible",(function(t){return function(e){return!!r(e)&&(!t||t(e))}}))},function(t,e,n){var r=n(0);r(r.S+r.F,"Object",{assign:n(128)})},function(t,e,n){var r=n(0);r(r.S,"Object",{is:n(129)})},function(t,e,n){var r=n(0);r(r.S,"Object",{setPrototypeOf:n(99).set})},function(t,e,n){"use strict";var r=n(63),i={};i[n(9)("toStringTag")]="z",i+""!="[object z]"&&n(23)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,e,n){var r=n(0);r(r.P,"Function",{bind:n(130)})},function(t,e,n){var r=n(15).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(14)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var r=n(6),i=n(29),o=n(9)("hasInstance"),a=Function.prototype;o in a||n(15).f(a,o,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,e,n){var r=n(0),i=n(132);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,e,n){var r=n(0),i=n(133);r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},function(t,e,n){"use strict";var r=n(4),i=n(26),o=n(33),a=n(101),s=n(37),l=n(5),c=n(54).f,u=n(28).f,p=n(15).f,h=n(64).trim,f=r.Number,d=f,y=f.prototype,m="Number"==o(n(53)(y)),_="trim"in String.prototype,g=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=_?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,l=e.slice(2),c=0,u=l.length;c<u;c++)if((a=l.charCodeAt(c))<48||a>i)return NaN;return parseInt(l,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof f&&(m?l((function(){y.valueOf.call(n)})):"Number"!=o(n))?a(new d(g(e)),n,f):g(e)};for(var v,b=n(14)?c(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;b.length>w;w++)i(d,v=b[w])&&!i(f,v)&&p(f,v,u(d,v));f.prototype=y,y.constructor=f,n(23)(r,"Number",f)}},function(t,e,n){"use strict";var r=n(0),i=n(34),o=n(134),a=n(102),s=1..toFixed,l=Math.floor,c=[0,0,0,0,0,0],u="Number.toFixed: incorrect invocation!",p=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*c[n],c[n]=r%1e7,r=l(r/1e7)},h=function(t){for(var e=6,n=0;--e>=0;)n+=c[e],c[e]=l(n/t),n=n%t*1e7},f=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==c[t]){var n=String(c[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e},d=function(t,e,n){return 0===e?n:e%2==1?d(t,e-1,n*t):d(t*t,e/2,n)};r(r.P+r.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(5)((function(){s.call({})}))),"Number",{toFixed:function(t){var e,n,r,s,l=o(this,u),c=i(t),y="",m="0";if(c<0||c>20)throw RangeError(u);if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(y="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*d(2,69,1))-69)<0?l*d(2,-e,1):l/d(2,e,1),n*=4503599627370496,(e=52-e)>0){for(p(0,n),r=c;r>=7;)p(1e7,0),r-=7;for(p(d(10,r,1),0),r=e-1;r>=23;)h(1<<23),r-=23;h(1<<r),p(1,1),h(2),m=f()}else p(0,n),p(1<<-e,0),m=f()+a.call("0",c);return m=c>0?y+((s=m.length)<=c?"0."+a.call("0",c-s)+m:m.slice(0,s-c)+"."+m.slice(s-c)):y+m}})},function(t,e,n){"use strict";var r=n(0),i=n(5),o=n(134),a=1..toPrecision;r(r.P+r.F*(i((function(){return"1"!==a.call(1,void 0)}))||!i((function(){a.call({})}))),"Number",{toPrecision:function(t){var e=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},function(t,e,n){var r=n(0);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,n){var r=n(0),i=n(4).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,e,n){var r=n(0);r(r.S,"Number",{isInteger:n(135)})},function(t,e,n){var r=n(0);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var r=n(0),i=n(135),o=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,e,n){var r=n(0);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){var r=n(0);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var r=n(0),i=n(133);r(r.S+r.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,e,n){var r=n(0),i=n(132);r(r.S+r.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,e,n){var r=n(0),i=n(136),o=Math.sqrt,a=Math.acosh;r(r.S+r.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,e,n){var r=n(0),i=Math.asinh;r(r.S+r.F*!(i&&1/i(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e}})},function(t,e,n){var r=n(0),i=Math.atanh;r(r.S+r.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,e,n){var r=n(0),i=n(103);r(r.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,e,n){var r=n(0),i=Math.exp;r(r.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,e,n){var r=n(0),i=n(104);r(r.S+r.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,e,n){var r=n(0);r(r.S,"Math",{fround:n(137)})},function(t,e,n){var r=n(0),i=Math.abs;r(r.S,"Math",{hypot:function(t,e){for(var n,r,o=0,a=0,s=arguments.length,l=0;a<s;)l<(n=i(arguments[a++]))?(o=o*(r=l/n)*r+1,l=n):o+=n>0?(r=n/l)*r:n;return l===1/0?1/0:l*Math.sqrt(o)}})},function(t,e,n){var r=n(0),i=Math.imul;r(r.S+r.F*n(5)((function(){return-5!=i(4294967295,5)||2!=i.length})),"Math",{imul:function(t,e){var n=+t,r=+e,i=65535&n,o=65535&r;return 0|i*o+((65535&n>>>16)*o+i*(65535&r>>>16)<<16>>>0)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,e,n){var r=n(0);r(r.S,"Math",{log1p:n(136)})},function(t,e,n){var r=n(0);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,e,n){var r=n(0);r(r.S,"Math",{sign:n(103)})},function(t,e,n){var r=n(0),i=n(104),o=Math.exp;r(r.S+r.F*n(5)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,e,n){var r=n(0),i=n(104),o=Math.exp;r(r.S,"Math",{tanh:function(t){var e=i(t=+t),n=i(-t);return e==1/0?1:n==1/0?-1:(e-n)/(o(t)+o(-t))}})},function(t,e,n){var r=n(0);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e,n){var r=n(0),i=n(52),o=String.fromCharCode,a=String.fromCodePoint;r(r.S+r.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,n=[],r=arguments.length,a=0;r>a;){if(e=+arguments[a++],i(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?o(e):o(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},function(t,e,n){var r=n(0),i=n(27),o=n(10);r(r.S,"String",{raw:function(t){for(var e=i(t.raw),n=o(e.length),r=arguments.length,a=[],s=0;n>s;)a.push(String(e[s++])),s<r&&a.push(String(arguments[s]));return a.join("")}})},function(t,e,n){"use strict";n(64)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,n){"use strict";var r=n(78)(!0);n(105)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var r=n(0),i=n(78)(!1);r(r.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,e,n){"use strict";var r=n(0),i=n(10),o=n(107),a="".endsWith;r(r.P+r.F*n(108)("endsWith"),"String",{endsWith:function(t){var e=o(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=i(e.length),s=void 0===n?r:Math.min(i(n),r),l=String(t);return a?a.call(e,l,s):e.slice(s-l.length,s)===l}})},function(t,e,n){"use strict";var r=n(0),i=n(107);r(r.P+r.F*n(108)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(0);r(r.P,"String",{repeat:n(102)})},function(t,e,n){"use strict";var r=n(0),i=n(10),o=n(107),a="".startsWith;r(r.P+r.F*n(108)("startsWith"),"String",{startsWith:function(t){var e=o(this,t,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},function(t,e,n){"use strict";n(24)("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},function(t,e,n){"use strict";n(24)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,e,n){"use strict";n(24)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,e,n){"use strict";n(24)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,e,n){"use strict";n(24)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,e,n){"use strict";n(24)("fontcolor",(function(t){return function(e){return t(this,"font","color",e)}}))},function(t,e,n){"use strict";n(24)("fontsize",(function(t){return function(e){return t(this,"font","size",e)}}))},function(t,e,n){"use strict";n(24)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,e,n){"use strict";n(24)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){"use strict";n(24)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,e,n){"use strict";n(24)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,e,n){"use strict";n(24)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,e,n){"use strict";n(24)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,e,n){var r=n(0);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";var r=n(0),i=n(16),o=n(37);r(r.P+r.F*n(5)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=i(this),n=o(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},function(t,e,n){var r=n(0),i=n(243);r(r.P+r.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,e,n){"use strict";var r=n(5),i=Date.prototype.getTime,o=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+("00000"+Math.abs(e)).slice(r?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:o},function(t,e,n){var r=Date.prototype,i=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n(23)(r,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,e,n){var r=n(9)("toPrimitive"),i=Date.prototype;r in i||n(22)(i,r,n(246))},function(t,e,n){"use strict";var r=n(3),i=n(37);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(r(this),"number"!=t)}},function(t,e,n){var r=n(0);r(r.S,"Array",{isArray:n(77)})},function(t,e,n){"use strict";var r=n(32),i=n(0),o=n(16),a=n(138),s=n(109),l=n(10),c=n(110),u=n(111);i(i.S+i.F*!n(80)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,p,h=o(t),f="function"==typeof this?this:Array,d=arguments.length,y=d>1?arguments[1]:void 0,m=void 0!==y,_=0,g=u(h);if(m&&(y=r(y,d>2?arguments[2]:void 0,2)),null==g||f==Array&&s(g))for(n=new f(e=l(h.length));e>_;_++)c(n,_,m?y(h[_],_):h[_]);else for(p=g.call(h),n=new f;!(i=p.next()).done;_++)c(n,_,m?a(p,y,[i.value,_],!0):i.value);return n.length=_,n}})},function(t,e,n){"use strict";var r=n(0),i=n(110);r(r.S+r.F*n(5)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)i(n,t,arguments[t++]);return n.length=e,n}})},function(t,e,n){"use strict";var r=n(0),i=n(27),o=[].join;r(r.P+r.F*(n(68)!=Object||!n(35)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var r=n(0),i=n(98),o=n(33),a=n(52),s=n(10),l=[].slice;r(r.P+r.F*n(5)((function(){i&&l.call(i)})),"Array",{slice:function(t,e){var n=s(this.length),r=o(this);if(e=void 0===e?n:e,"Array"==r)return l.call(this,t,e);for(var i=a(t,n),c=a(e,n),u=s(c-i),p=new Array(u),h=0;h<u;h++)p[h]="String"==r?this.charAt(i+h):this[i+h];return p}})},function(t,e,n){"use strict";var r=n(0),i=n(21),o=n(16),a=n(5),s=[].sort,l=[1,2,3];r(r.P+r.F*(a((function(){l.sort(void 0)}))||!a((function(){l.sort(null)}))||!n(35)(s)),"Array",{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),i(t))}})},function(t,e,n){"use strict";var r=n(0),i=n(40)(0),o=n(35)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,e,n){var r=n(6),i=n(77),o=n(9)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){"use strict";var r=n(0),i=n(40)(1);r(r.P+r.F*!n(35)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(40)(2);r(r.P+r.F*!n(35)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(40)(3);r(r.P+r.F*!n(35)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(40)(4);r(r.P+r.F*!n(35)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(139);r(r.P+r.F*!n(35)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){"use strict";var r=n(0),i=n(139);r(r.P+r.F*!n(35)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,e,n){"use strict";var r=n(0),i=n(75)(!1),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!n(35)(o)),"Array",{indexOf:function(t){return a?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(27),o=n(34),a=n(10),s=[].lastIndexOf,l=!!s&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(l||!n(35)(s)),"Array",{lastIndexOf:function(t){if(l)return s.apply(this,arguments)||0;var e=i(this),n=a(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,o(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},function(t,e,n){var r=n(0);r(r.P,"Array",{copyWithin:n(140)}),n(47)("copyWithin")},function(t,e,n){var r=n(0);r(r.P,"Array",{fill:n(113)}),n(47)("fill")},function(t,e,n){"use strict";var r=n(0),i=n(40)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(47)("find")},function(t,e,n){"use strict";var r=n(0),i=n(40)(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(47)(o)},function(t,e,n){n(55)("Array")},function(t,e,n){var r=n(4),i=n(101),o=n(15).f,a=n(54).f,s=n(79),l=n(70),c=r.RegExp,u=c,p=c.prototype,h=/a/g,f=/a/g,d=new c(h)!==h;if(n(14)&&(!d||n(5)((function(){return f[n(9)("match")]=!1,c(h)!=h||c(f)==f||"/a/i"!=c(h,"i")})))){c=function(t,e){var n=this instanceof c,r=s(t),o=void 0===e;return!n&&r&&t.constructor===c&&o?t:i(d?new u(r&&!o?t.source:t,e):u((r=t instanceof c)?t.source:t,r&&o?l.call(t):e),n?this:p,c)};for(var y=function(t){t in c||o(c,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},m=a(u),_=0;m.length>_;)y(m[_++]);p.constructor=c,c.prototype=p,n(23)(r,"RegExp",c)}n(55)("RegExp")},function(t,e,n){"use strict";n(143);var r=n(3),i=n(70),o=n(14),a=/./.toString,s=function(t){n(23)(RegExp.prototype,"toString",t,!0)};n(5)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?s((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=a.name&&s((function(){return a.call(this)}))},function(t,e,n){"use strict";var r=n(3),i=n(10),o=n(116),a=n(81);n(82)("match",1,(function(t,e,n,s){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=s(n,t,this);if(e.done)return e.value;var l=r(t),c=String(this);if(!l.global)return a(l,c);var u=l.unicode;l.lastIndex=0;for(var p,h=[],f=0;null!==(p=a(l,c));){var d=String(p[0]);h[f]=d,""===d&&(l.lastIndex=o(c,i(l.lastIndex),u)),f++}return 0===f?null:h}]}))},function(t,e,n){"use strict";var r=n(3),i=n(16),o=n(10),a=n(34),s=n(116),l=n(81),c=Math.max,u=Math.min,p=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g;n(82)("replace",2,(function(t,e,n,d){return[function(r,i){var o=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var p=r(t),h=String(this),f="function"==typeof e;f||(e=String(e));var m=p.global;if(m){var _=p.unicode;p.lastIndex=0}for(var g=[];;){var v=l(p,h);if(null===v)break;if(g.push(v),!m)break;""===String(v[0])&&(p.lastIndex=s(h,o(p.lastIndex),_))}for(var b,w="",x=0,S=0;S<g.length;S++){v=g[S];for(var O=String(v[0]),P=c(u(a(v.index),h.length),0),C=[],E=1;E<v.length;E++)C.push(void 0===(b=v[E])?b:String(b));var A=v.groups;if(f){var k=[O].concat(C,P,h);void 0!==A&&k.push(A);var T=String(e.apply(void 0,k))}else T=y(O,h,P,C,A,e);P>=x&&(w+=h.slice(x,P)+T,x=P+O.length)}return w+h.slice(x)}];function y(t,e,r,o,a,s){var l=r+t.length,c=o.length,u=f;return void 0!==a&&(a=i(a),u=h),n.call(s,u,(function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(l);case"<":s=a[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>c){var h=p(u/10);return 0===h?n:h<=c?void 0===o[h-1]?i.charAt(1):o[h-1]+i.charAt(1):n}s=o[u-1]}return void 0===s?"":s}))}}))},function(t,e,n){"use strict";var r=n(3),i=n(129),o=n(81);n(82)("search",1,(function(t,e,n,a){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=r(t),l=String(this),c=s.lastIndex;i(c,0)||(s.lastIndex=0);var u=o(s,l);return i(s.lastIndex,c)||(s.lastIndex=c),null===u?-1:u.index}]}))},function(t,e,n){"use strict";var r=n(79),i=n(3),o=n(71),a=n(116),s=n(10),l=n(81),c=n(115),u=n(5),p=Math.min,h=[].push,f=!u((function(){RegExp(4294967295,"y")}));n(82)("split",2,(function(t,e,n,u){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);for(var o,a,s,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=void 0===e?4294967295:e>>>0,d=new RegExp(t.source,u+"g");(o=c.call(d,i))&&!((a=d.lastIndex)>p&&(l.push(i.slice(p,o.index)),o.length>1&&o.index<i.length&&h.apply(l,o.slice(1)),s=o[0].length,p=a,l.length>=f));)d.lastIndex===o.index&&d.lastIndex++;return p===i.length?!s&&d.test("")||l.push(""):l.push(i.slice(p)),l.length>f?l.slice(0,f):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):d.call(String(i),n,r)},function(t,e){var r=u(d,t,this,e,d!==n);if(r.done)return r.value;var c=i(t),h=String(this),y=o(c,RegExp),m=c.unicode,_=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(f?"y":"g"),g=new y(f?c:"^(?:"+c.source+")",_),v=void 0===e?4294967295:e>>>0;if(0===v)return[];if(0===h.length)return null===l(g,h)?[h]:[];for(var b=0,w=0,x=[];w<h.length;){g.lastIndex=f?w:0;var S,O=l(g,f?h:h.slice(w));if(null===O||(S=p(s(g.lastIndex+(f?0:w)),h.length))===b)w=a(h,w,m);else{if(x.push(h.slice(b,w)),x.length===v)return x;for(var P=1;P<=O.length-1;P++)if(x.push(O[P]),x.length===v)return x;w=b=S}}return x.push(h.slice(b)),x}]}))},function(t,e,n){"use strict";var r,i,o,a,s=n(45),l=n(4),c=n(32),u=n(63),p=n(0),h=n(6),f=n(21),d=n(56),y=n(57),m=n(71),_=n(117).set,g=n(118)(),v=n(119),b=n(144),w=n(83),x=n(145),S=l.TypeError,O=l.process,P=O&&O.versions,C=P&&P.v8||"",E=l.Promise,A="process"==u(O),k=function(){},T=i=v.f,M=!!function(){try{var t=E.resolve(1),e=(t.constructor={})[n(9)("species")]=function(t){t(k,k)};return(A||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof e&&0!==C.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),j=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},N=function(t,e){if(!t._n){t._n=!0;var n=t._c;g((function(){for(var r=t._v,i=1==t._s,o=0,a=function(e){var n,o,a,s=i?e.ok:e.fail,l=e.resolve,c=e.reject,u=e.domain;try{s?(i||(2==t._h&&L(t),t._h=1),!0===s?n=r:(u&&u.enter(),n=s(r),u&&(u.exit(),a=!0)),n===e.promise?c(S("Promise-chain cycle")):(o=j(n))?o.call(n,l,c):l(n)):c(r)}catch(t){u&&!a&&u.exit(),c(t)}};n.length>o;)a(n[o++]);t._c=[],t._n=!1,e&&!t._h&&I(t)}))}},I=function(t){_.call(l,(function(){var e,n,r,i=t._v,o=R(t);if(o&&(e=b((function(){A?O.emit("unhandledRejection",i,t):(n=l.onunhandledrejection)?n({promise:t,reason:i}):(r=l.console)&&r.error&&r.error("Unhandled promise rejection",i)})),t._h=A||R(t)?2:1),t._a=void 0,o&&e.e)throw e.v}))},R=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){_.call(l,(function(){var e;A?O.emit("rejectionHandled",t):(e=l.onrejectionhandled)&&e({promise:t,reason:t._v})}))},F=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),N(e,!0))},D=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=j(t))?g((function(){var r={_w:n,_d:!1};try{e.call(t,c(D,r,1),c(F,r,1))}catch(t){F.call(r,t)}})):(n._v=t,n._s=1,N(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};M||(E=function(t){d(this,E,"Promise","_h"),f(t),r.call(this);try{t(c(D,this,1),c(F,this,1))}catch(t){F.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(58)(E.prototype,{then:function(t,e){var n=T(m(this,E));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=A?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&N(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=c(D,t,1),this.reject=c(F,t,1)},v.f=T=function(t){return t===E||t===a?new o(t):i(t)}),p(p.G+p.W+p.F*!M,{Promise:E}),n(62)(E,"Promise"),n(55)("Promise"),a=n(31).Promise,p(p.S+p.F*!M,"Promise",{reject:function(t){var e=T(this);return(0,e.reject)(t),e.promise}}),p(p.S+p.F*(s||!M),"Promise",{resolve:function(t){return x(s&&this===a?E:this,t)}}),p(p.S+p.F*!(M&&n(80)((function(t){E.all(t).catch(k)}))),"Promise",{all:function(t){var e=this,n=T(e),r=n.resolve,i=n.reject,o=b((function(){var n=[],o=0,a=1;y(t,!1,(function(t){var s=o++,l=!1;n.push(void 0),a++,e.resolve(t).then((function(t){l||(l=!0,n[s]=t,--a||r(n))}),i)})),--a||r(n)}));return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=T(e),r=n.reject,i=b((function(){y(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return i.e&&r(i.v),n.promise}})},function(t,e,n){"use strict";var r=n(150),i=n(59);n(84)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"WeakSet"),t,!0)}},r,!1,!0)},function(t,e,n){"use strict";var r=n(0),i=n(85),o=n(120),a=n(3),s=n(52),l=n(10),c=n(6),u=n(4).ArrayBuffer,p=n(71),h=o.ArrayBuffer,f=o.DataView,d=i.ABV&&u.isView,y=h.prototype.slice,m=i.VIEW;r(r.G+r.W+r.F*(u!==h),{ArrayBuffer:h}),r(r.S+r.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return d&&d(t)||c(t)&&m in t}}),r(r.P+r.U+r.F*n(5)((function(){return!new h(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,e){if(void 0!==y&&void 0===e)return y.call(a(this),t);for(var n=a(this).byteLength,r=s(t,n),i=s(void 0===e?n:e,n),o=new(p(this,h))(l(i-r)),c=new f(this),u=new f(o),d=0;r<i;)u.setUint8(d++,c.getUint8(r++));return o}}),n(55)("ArrayBuffer")},function(t,e,n){var r=n(0);r(r.G+r.W+r.F*!n(85).ABV,{DataView:n(120).DataView})},function(t,e,n){n(41)("Int8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(41)("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(41)("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}),!0)},function(t,e,n){n(41)("Int16",2,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(41)("Uint16",2,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(41)("Int32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(41)("Uint32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(41)("Float32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(41)("Float64",8,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){var r=n(0),i=n(21),o=n(3),a=(n(4).Reflect||{}).apply,s=Function.apply;r(r.S+r.F*!n(5)((function(){a((function(){}))})),"Reflect",{apply:function(t,e,n){var r=i(t),l=o(n);return a?a(r,e,l):s.call(r,e,l)}})},function(t,e,n){var r=n(0),i=n(53),o=n(21),a=n(3),s=n(6),l=n(5),c=n(130),u=(n(4).Reflect||{}).construct,p=l((function(){function t(){}return!(u((function(){}),[],t)instanceof t)})),h=!l((function(){u((function(){}))}));r(r.S+r.F*(p||h),"Reflect",{construct:function(t,e){o(t),a(e);var n=arguments.length<3?t:o(arguments[2]);if(h&&!p)return u(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(c.apply(t,r))}var l=n.prototype,f=i(s(l)?l:Object.prototype),d=Function.apply.call(t,f,e);return s(d)?d:f}})},function(t,e,n){var r=n(15),i=n(0),o=n(3),a=n(37);i(i.S+i.F*n(5)((function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,e,n){o(t),e=a(e,!0),o(n);try{return r.f(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var r=n(0),i=n(28).f,o=n(3);r(r.S,"Reflect",{deleteProperty:function(t,e){var n=i(o(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var r=n(0),i=n(3),o=function(t){this._t=i(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(106)(o,"Object",(function(){var t,e=this._k;do{if(this._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[this._i++])in this._t));return{value:t,done:!1}})),r(r.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,e,n){var r=n(28),i=n(29),o=n(26),a=n(0),s=n(6),l=n(3);a(a.S,"Reflect",{get:function t(e,n){var a,c,u=arguments.length<3?e:arguments[2];return l(e)===u?e[n]:(a=r.f(e,n))?o(a,"value")?a.value:void 0!==a.get?a.get.call(u):void 0:s(c=i(e))?t(c,n,u):void 0}})},function(t,e,n){var r=n(28),i=n(0),o=n(3);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return r.f(o(t),e)}})},function(t,e,n){var r=n(0),i=n(29),o=n(3);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,e,n){var r=n(0);r(r.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var r=n(0),i=n(3),o=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,e,n){var r=n(0);r(r.S,"Reflect",{ownKeys:n(152)})},function(t,e,n){var r=n(0),i=n(3),o=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,e,n){var r=n(15),i=n(28),o=n(29),a=n(26),s=n(0),l=n(49),c=n(3),u=n(6);s(s.S,"Reflect",{set:function t(e,n,s){var p,h,f=arguments.length<4?e:arguments[3],d=i.f(c(e),n);if(!d){if(u(h=o(e)))return t(h,n,s,f);d=l(0)}if(a(d,"value")){if(!1===d.writable||!u(f))return!1;if(p=i.f(f,n)){if(p.get||p.set||!1===p.writable)return!1;p.value=s,r.f(f,n,p)}else r.f(f,n,l(0,s));return!0}return void 0!==d.set&&(d.set.call(f,s),!0)}})},function(t,e,n){var r=n(0),i=n(99);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,e){i.check(t,e);try{return i.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){"use strict";var r=n(0),i=n(75)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(47)("includes")},function(t,e,n){"use strict";var r=n(0),i=n(153),o=n(16),a=n(10),s=n(21),l=n(112);r(r.P,"Array",{flatMap:function(t){var e,n,r=o(this);return s(t),e=a(r.length),n=l(r,0),i(n,r,r,e,0,1,t,arguments[1]),n}}),n(47)("flatMap")},function(t,e,n){"use strict";var r=n(0),i=n(153),o=n(16),a=n(10),s=n(34),l=n(112);r(r.P,"Array",{flatten:function(){var t=arguments[0],e=o(this),n=a(e.length),r=l(e,0);return i(r,e,e,n,0,void 0===t?1:s(t)),r}}),n(47)("flatten")},function(t,e,n){"use strict";var r=n(0),i=n(78)(!0);r(r.P,"String",{at:function(t){return i(this,t)}})},function(t,e,n){"use strict";var r=n(0),i=n(154),o=n(83),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*a,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,n){"use strict";var r=n(0),i=n(154),o=n(83),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*a,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,e,n){"use strict";n(64)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,e,n){"use strict";n(64)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,e,n){"use strict";var r=n(0),i=n(38),o=n(10),a=n(79),s=n(70),l=RegExp.prototype,c=function(t,e){this._r=t,this._s=e};n(106)(c,"RegExp String",(function(){var t=this._r.exec(this._s);return{value:t,done:null===t}})),r(r.P,"String",{matchAll:function(t){if(i(this),!a(t))throw TypeError(t+" is not a regexp!");var e=String(this),n="flags"in l?String(t.flags):s.call(t),r=new RegExp(t.source,~n.indexOf("g")?n:"g"+n);return r.lastIndex=o(t.lastIndex),new c(r,e)}})},function(t,e,n){n(95)("asyncIterator")},function(t,e,n){n(95)("observable")},function(t,e,n){var r=n(0),i=n(152),o=n(27),a=n(28),s=n(110);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=o(t),l=a.f,c=i(r),u={},p=0;c.length>p;)void 0!==(n=l(r,e=c[p++]))&&s(u,e,n);return u}})},function(t,e,n){var r=n(0),i=n(155)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},function(t,e,n){var r=n(0),i=n(155)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},function(t,e,n){"use strict";var r=n(0),i=n(16),o=n(21),a=n(15);n(14)&&r(r.P+n(86),"Object",{__defineGetter__:function(t,e){a.f(i(this),t,{get:o(e),enumerable:!0,configurable:!0})}})},function(t,e,n){"use strict";var r=n(0),i=n(16),o=n(21),a=n(15);n(14)&&r(r.P+n(86),"Object",{__defineSetter__:function(t,e){a.f(i(this),t,{set:o(e),enumerable:!0,configurable:!0})}})},function(t,e,n){"use strict";var r=n(0),i=n(16),o=n(37),a=n(29),s=n(28).f;n(14)&&r(r.P+n(86),"Object",{__lookupGetter__:function(t){var e,n=i(this),r=o(t,!0);do{if(e=s(n,r))return e.get}while(n=a(n))}})},function(t,e,n){"use strict";var r=n(0),i=n(16),o=n(37),a=n(29),s=n(28).f;n(14)&&r(r.P+n(86),"Object",{__lookupSetter__:function(t){var e,n=i(this),r=o(t,!0);do{if(e=s(n,r))return e.set}while(n=a(n))}})},function(t,e,n){var r=n(0);r(r.P+r.R,"Map",{toJSON:n(156)("Map")})},function(t,e,n){var r=n(0);r(r.P+r.R,"Set",{toJSON:n(156)("Set")})},function(t,e,n){n(87)("Map")},function(t,e,n){n(87)("Set")},function(t,e,n){n(87)("WeakMap")},function(t,e,n){n(87)("WeakSet")},function(t,e,n){n(88)("Map")},function(t,e,n){n(88)("Set")},function(t,e,n){n(88)("WeakMap")},function(t,e,n){n(88)("WeakSet")},function(t,e,n){var r=n(0);r(r.G,{global:n(4)})},function(t,e,n){var r=n(0);r(r.S,"System",{global:n(4)})},function(t,e,n){var r=n(0),i=n(33);r(r.S,"Error",{isError:function(t){return"Error"===i(t)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{clamp:function(t,e,n){return Math.min(n,Math.max(e,t))}})},function(t,e,n){var r=n(0);r(r.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,e,n){var r=n(0),i=180/Math.PI;r(r.S,"Math",{degrees:function(t){return t*i}})},function(t,e,n){var r=n(0),i=n(158),o=n(137);r(r.S,"Math",{fscale:function(t,e,n,r,a){return o(i(t,e,n,r,a))}})},function(t,e,n){var r=n(0);r(r.S,"Math",{iaddh:function(t,e,n,r){var i=t>>>0,o=n>>>0;return(e>>>0)+(r>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,e,n){var r=n(0);r(r.S,"Math",{isubh:function(t,e,n,r){var i=t>>>0,o=n>>>0;return(e>>>0)-(r>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,e,n){var r=n(0);r(r.S,"Math",{imulh:function(t,e){var n=+t,r=+e,i=65535&n,o=65535&r,a=n>>16,s=r>>16,l=(a*o>>>0)+(i*o>>>16);return a*s+(l>>16)+((i*s>>>0)+(65535&l)>>16)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,e,n){var r=n(0),i=Math.PI/180;r(r.S,"Math",{radians:function(t){return t*i}})},function(t,e,n){var r=n(0);r(r.S,"Math",{scale:n(158)})},function(t,e,n){var r=n(0);r(r.S,"Math",{umulh:function(t,e){var n=+t,r=+e,i=65535&n,o=65535&r,a=n>>>16,s=r>>>16,l=(a*o>>>0)+(i*o>>>16);return a*s+(l>>>16)+((i*s>>>0)+(65535&l)>>>16)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{signbit:function(t){return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},function(t,e,n){"use strict";var r=n(0),i=n(31),o=n(4),a=n(71),s=n(145);r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then((function(){return n}))}:t,n?function(n){return s(e,t()).then((function(){throw n}))}:t)}})},function(t,e,n){"use strict";var r=n(0),i=n(119),o=n(144);r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){var r=n(42),i=n(3),o=r.key,a=r.set;r.exp({defineMetadata:function(t,e,n,r){a(t,e,i(n),o(r))}})},function(t,e,n){var r=n(42),i=n(3),o=r.key,a=r.map,s=r.store;r.exp({deleteMetadata:function(t,e){var n=arguments.length<3?void 0:o(arguments[2]),r=a(i(e),n,!1);if(void 0===r||!r.delete(t))return!1;if(r.size)return!0;var l=s.get(e);return l.delete(n),!!l.size||s.delete(e)}})},function(t,e,n){var r=n(42),i=n(3),o=n(29),a=r.has,s=r.get,l=r.key,c=function(t,e,n){if(a(t,e,n))return s(t,e,n);var r=o(e);return null!==r?c(t,r,n):void 0};r.exp({getMetadata:function(t,e){return c(t,i(e),arguments.length<3?void 0:l(arguments[2]))}})},function(t,e,n){var r=n(148),i=n(157),o=n(42),a=n(3),s=n(29),l=o.keys,c=o.key,u=function(t,e){var n=l(t,e),o=s(t);if(null===o)return n;var a=u(o,e);return a.length?n.length?i(new r(n.concat(a))):a:n};o.exp({getMetadataKeys:function(t){return u(a(t),arguments.length<2?void 0:c(arguments[1]))}})},function(t,e,n){var r=n(42),i=n(3),o=r.get,a=r.key;r.exp({getOwnMetadata:function(t,e){return o(t,i(e),arguments.length<3?void 0:a(arguments[2]))}})},function(t,e,n){var r=n(42),i=n(3),o=r.keys,a=r.key;r.exp({getOwnMetadataKeys:function(t){return o(i(t),arguments.length<2?void 0:a(arguments[1]))}})},function(t,e,n){var r=n(42),i=n(3),o=n(29),a=r.has,s=r.key,l=function(t,e,n){if(a(t,e,n))return!0;var r=o(e);return null!==r&&l(t,r,n)};r.exp({hasMetadata:function(t,e){return l(t,i(e),arguments.length<3?void 0:s(arguments[2]))}})},function(t,e,n){var r=n(42),i=n(3),o=r.has,a=r.key;r.exp({hasOwnMetadata:function(t,e){return o(t,i(e),arguments.length<3?void 0:a(arguments[2]))}})},function(t,e,n){var r=n(42),i=n(3),o=n(21),a=r.key,s=r.set;r.exp({metadata:function(t,e){return function(n,r){s(t,e,(void 0!==r?i:o)(n),a(r))}}})},function(t,e,n){var r=n(0),i=n(118)(),o=n(4).process,a="process"==n(33)(o);r(r.G,{asap:function(t){var e=a&&o.domain;i(e?e.bind(t):t)}})},function(t,e,n){"use strict";var r=n(0),i=n(4),o=n(31),a=n(118)(),s=n(9)("observable"),l=n(21),c=n(3),u=n(56),p=n(58),h=n(22),f=n(57),d=f.RETURN,y=function(t){return null==t?void 0:l(t)},m=function(t){var e=t._c;e&&(t._c=void 0,e())},_=function(t){return void 0===t._o},g=function(t){_(t)||(t._o=void 0,m(t))},v=function(t,e){c(t),this._c=void 0,this._o=t,t=new b(this);try{var n=e(t),r=n;null!=n&&("function"==typeof n.unsubscribe?n=function(){r.unsubscribe()}:l(n),this._c=n)}catch(e){return void t.error(e)}_(this)&&m(this)};v.prototype=p({},{unsubscribe:function(){g(this)}});var b=function(t){this._s=t};b.prototype=p({},{next:function(t){var e=this._s;if(!_(e)){var n=e._o;try{var r=y(n.next);if(r)return r.call(n,t)}catch(t){try{g(e)}finally{throw t}}}},error:function(t){var e=this._s;if(_(e))throw t;var n=e._o;e._o=void 0;try{var r=y(n.error);if(!r)throw t;t=r.call(n,t)}catch(t){try{m(e)}finally{throw t}}return m(e),t},complete:function(t){var e=this._s;if(!_(e)){var n=e._o;e._o=void 0;try{var r=y(n.complete);t=r?r.call(n,t):void 0}catch(t){try{m(e)}finally{throw t}}return m(e),t}}});var w=function(t){u(this,w,"Observable","_f")._f=l(t)};p(w.prototype,{subscribe:function(t){return new v(t,this._f)},forEach:function(t){var e=this;return new(o.Promise||i.Promise)((function(n,r){l(t);var i=e.subscribe({next:function(e){try{return t(e)}catch(t){r(t),i.unsubscribe()}},error:r,complete:n})}))}}),p(w,{from:function(t){var e="function"==typeof this?this:w,n=y(c(t)[s]);if(n){var r=c(n.call(t));return r.constructor===e?r:new e((function(t){return r.subscribe(t)}))}return new e((function(e){var n=!1;return a((function(){if(!n){try{if(f(t,!1,(function(t){if(e.next(t),n)return d}))===d)return}catch(t){if(n)throw t;return void e.error(t)}e.complete()}})),function(){n=!0}}))},of:function(){for(var t=0,e=arguments.length,n=new Array(e);t<e;)n[t]=arguments[t++];return new("function"==typeof this?this:w)((function(t){var e=!1;return a((function(){if(!e){for(var r=0;r<n.length;++r)if(t.next(n[r]),e)return;t.complete()}})),function(){e=!0}}))}}),h(w.prototype,s,(function(){return this})),r(r.G,{Observable:w}),n(55)("Observable")},function(t,e,n){var r=n(4),i=n(0),o=n(83),a=[].slice,s=/MSIE .\./.test(o),l=function(t){return function(e,n){var r=arguments.length>2,i=!!r&&a.call(arguments,2);return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};i(i.G+i.B+i.F*s,{setTimeout:l(r.setTimeout),setInterval:l(r.setInterval)})},function(t,e,n){var r=n(0),i=n(117);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,e,n){for(var r=n(114),i=n(51),o=n(23),a=n(4),s=n(22),l=n(65),c=n(9),u=c("iterator"),p=c("toStringTag"),h=l.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=i(f),y=0;y<d.length;y++){var m,_=d[y],g=f[_],v=a[_],b=v&&v.prototype;if(b&&(b[u]||s(b,u,h),b[p]||s(b,p,_),l[_]=h,g))for(m in r)b[m]||o(b,m,r[m],!0)}},function(t,e,n){(function(e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"==typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=e.regeneratorRuntime=c?t.exports:{}).wrap=b;var p="suspendedStart",h="suspendedYield",f="executing",d="completed",y={},m={};m[a]=function(){return this};var _=Object.getPrototypeOf,g=_&&_(_(M([])));g&&g!==r&&i.call(g,a)&&(m=g);var v=O.prototype=x.prototype=Object.create(m);S.prototype=v.constructor=O,O.constructor=S,O[l]=S.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(v),t},u.awrap=function(t){return{__await:t}},P(C.prototype),C.prototype[s]=function(){return this},u.AsyncIterator=C,u.async=function(t,e,n,r){var i=new C(b(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},P(v),v[l]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=M,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}}}function b(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new T(r||[]);return o._invoke=function(t,e,n){var r=p;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return j()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===y)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var l=w(t,e,n);if("normal"===l.type){if(r=n.done?d:h,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function S(){}function O(){}function P(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){function n(e,r,o,a){var s=w(t[e],t,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):Promise.resolve(c).then((function(t){l.value=t,o(l)}),a)}a(s.arg)}var r;"object"==typeof e.process&&e.process.domain&&(n=e.process.domain.bind(n)),this._invoke=function(t,e){function i(){return new Promise((function(r,i){n(t,e,r,i)}))}return r=r?r.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=w(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:n,done:!0}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,n(93))},function(t,e,n){n(362),t.exports=n(31).RegExp.escape},function(t,e,n){var r=n(0),i=n(363)(/[\\^$*+?.()|[\]{}]/g,"\\$&");r(r.S,"RegExp",{escape:function(t){return i(t)}})},function(t,e){t.exports=function(t,e){var n=e===Object(e)?function(t){return e[t]}:e;return function(e){return String(e).replace(t,n)}}},function(t,e,n){var r=n(365);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:("head","head"),injectType:"singletonStyleTag",singleton:!0};n(369)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(366)(!1);var r=n(367)(n(368));e.push([t.i,"/* Material Color tool: https://material-ui.com/customization/color/#color-tool */\n:root {\n    /* Polymer theme styles */\n    --purple: #673ab7;\n    --dark-purple: #4a1a9e;\n    --primary-color: var(--purple);\n}\nbody, html {\n    min-height: 100vh;\n}\nbody {\n    position: relative;\n    margin: 0;\n    padding: 0;\n    font-family: 'Open Sans', sans-serif;\n    color: black;\n    text-align: center;\n    background-image: url("+r+");\n    background-color: #e7f0fc;\n}\n.container {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\npaper-toolbar {\n    background-color: var(--primary-color);\n    grid-area: header;\n    box-shadow: 0 5px 15px rgba(0,0,0,0.5);\n}\npaper-toolbar > .title {\n    margin: 0;\n}\n\n#fork-me-banner > svg > path:not(:first-child) {\n    fill: var(--primary-color);\n}\n#fork-me-banner > svg {\n    height: var(--paper-toolbar-height, 64px);\n    width: var(--paper-toolbar-height, 64px);\n}\n#fork-me-banner:hover .octo-arm,\n#fork-me-banner:focus .octo-arm {\n    -webkit-animation: octocat-wave 560ms ease-in-out;\n    animation: octocat-wave 560ms ease-in-out;\n}\n@-webkit-keyframes octocat-wave {\n    0%,100% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n    }\n    20%,60% { \n        -webkit-transform: rotate(-25deg);\n        transform: rotate(-25deg);\n    } \n    40%,80% {\n        -webkit-transform: rotate(10deg);\n        transform: rotate(10deg);\n    }\n}\n@keyframes octocat-wave {\n    0%,100% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n    }\n    20%,60% {\n        -webkit-transform: rotate(-25deg);\n        transform: rotate(-25deg);\n    }\n    40%,80% {\n        -webkit-transform: rotate(10deg);\n        transform:rotate(10deg);\n    }\n}\n\nmain {\n    grid-area: main;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-gap: 15px;\n    grid-auto-flow: row;\n    /* min-height: 700px; */\n    /* max-width: 900px; */\n    margin: 0 auto;\n    padding: 20px;\n}\nmain > a {\n    color: var(--accent-color);\n}\n/* * Paper Style Overrides */\nmain paper-card {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n    transition: box-shadow 0.35s;\n}\nmain paper-card:hover,\nmain paper-card:focus {\n    box-shadow: var(--paper-material-elevation-5_-_box-shadow);\n}\nmain paper-card img {\n    width: 50%;\n    height: 50%;\n    order: -1;\n    margin: 30px auto 0;\n    object-fit: contain;\n    transform: rotate(10deg);\n}\nmain > a:nth-child(2) img {\n    transform: rotate(-10deg);\n}\nmain paper-card .card-actions {\n    border-top: none;\n}\nmain paper-card {\n    --paper-card-header-color: var(--primary-color);\n}\n\n/* --iron-image-width: 60% !important; */\n\n/* main paper-card iron-image {\n    padding: 80px;\n    box-sizing: border-box;\n} */\n\npaper-button {\n    background-color: var(--primary-color);\n    color: white;\n}\n\nfooter {\n    grid-area: footer;\n    background-color: #333333;\n    height: 70px;\n    padding: 25px;\n    display: grid;\n    align-items: center;\n}\n\nfooter a {\n    color: var(--accent-color);\n}\n\n#snackbar {\n    position: fixed;\n    z-index: 5;\n    transition: bottom 0.5s;\n    min-height: 23px;\n    bottom: -150px;\n    left: calc(50% - 170px);\n    width: 320px;\n    background-color: #444444;\n    color: #ffffff;\n    border-radius: 5px;\n    box-shadow: 0px 2px 10px rgba(0,0,0,0.3);\n    padding: 10px;\n    margin: 0;\n    font-weight: 300;\n    font-size: 14px;\n    text-align: center;\n}\n#snackbar.show {\n    bottom: 30px;\n}\n\n@media (min-width: 410px) {\n    #snackbar {\n        left: calc(50% - 190px);\n        width: 360px;\n    }\n}\n@media (max-width: 600px) {\n    #fork-me-banner > svg {\n        height: var(--calculated-paper-toolbar-sm-height);\n        width: var(--calculated-paper-toolbar-sm-height);\n    }\n}\n@media (min-width: 767px) {\n    #snackbar {\n        width: 400px;\n        left: calc(50% - 195px);\n    }\n    #snackbar.show {\n        bottom: 120px;\n    }\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof(t=t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){t.exports=n.p+"2fa446e9ef97056dae09c2b2f718b6b5.svg"},function(t,e,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function l(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(m(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,p=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function h(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=p(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function f(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,y=0;function m(t,e){var n,r,i;if(e.singleton){var o=y++;n=d||(d=c(e)),r=h.bind(null,n,o,!1),i=h.bind(null,n,o,!0)}else n=c(e),r=f.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t,e);return l(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o],c=i[a.id];c&&(c.refs--,r.push(c))}t&&l(s(t,e),e);for(var u=0;u<r.length;u++){var p=r[u];if(0===p.refs){for(var h=0;h<p.parts.length;h++)p.parts[h]();delete i[p.id]}}}}},function(t,e,n){"use strict";n(121),n(159);var r=n(19),i=n(13);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const o={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused("focus"===t.type)},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var a={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},s={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},l={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},c=/[a-z0-9*]/,u=/U\+/,p=/^arrow/,h=/^space(bar)?/,f=/^escape$/;function d(t,e){var n="";if(t){var r=t.toLowerCase();" "===r||h.test(r)?n="space":f.test(r)?n="esc":1==r.length?e&&!c.test(r)||(n=r):n=p.test(r)?r.replace("arrow",""):"multiply"==r?"*":r}return n}function y(t,e){return t.key?d(t.key,e):t.detail&&t.detail.key?d(t.detail.key,e):(n=t.keyIdentifier,r="",n&&(n in a?r=a[n]:u.test(n)?(n=parseInt(n.replace("U+","0x"),16),r=String.fromCharCode(n).toLowerCase()):r=n.toLowerCase()),r||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):s[t]),e}(t.keyCode)||"");var n,r}function m(t,e){return y(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function _(t){return t.trim().split(" ").map((function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce((function(t,e){var n=e.split(":"),r=n[0],i=n[1];return r in l?(t[l[r]]=!0,t.hasModifiers=!0):(t.key=r,t.event=i||"keydown"),t}),{combo:t.split(":").shift()})}(t)}))}const g={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var n=_(e),r=0;r<n.length;++r)if(m(n[r],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map((function(t){return t.keyBindings}));return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach((function(t){for(var e in t)this._addKeyBinding(e,t[e])}),this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort((function(t,e){var n=t[0].hasModifiers;return n===e[0].hasModifiers?0:n?-1:1}))},_addKeyBinding:function(t,e){_(t).forEach((function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(t){var e=this._keyBindings[t],n=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,n]),this.keyEventTarget.addEventListener(t,n)}),this)},_unlistenKeyEventListeners:function(){for(var t,e,n,r;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],n=t[1],r=t[2],e.removeEventListener(n,r)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var n=0;n<t.length;n++){var r=t[n][0],i=t[n][1];if(m(r,e)&&(this._triggerKeyHandler(r,i,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,n){var r=Object.create(t);r.keyboardEvent=n;var i=new CustomEvent(t.event,{detail:r,cancelable:!0});this[e].call(this,i),i.defaultPrevented&&n.preventDefault()}},v={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,n=Object(i.a)(e).localTarget;this.isLightDescendant(n)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,n=Object(i.a)(e).localTarget;this.isLightDescendant(n)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},b=[g,v];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var w=n(30),x=n(11),S={distance:function(t,e,n,r){var i=t-n,o=e-r;return Math.sqrt(i*i+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function O(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function P(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Object(i.a)(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}O.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var n=S.distance(t,e,0,0),r=S.distance(t,e,this.width,0),i=S.distance(t,e,0,this.height),o=S.distance(t,e,this.width,this.height);return Math.max(n,r,i,o)}},P.MAX_RADIUS=300,P.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=S.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?S.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,n=1.1*Math.min(Math.sqrt(t+e),P.MAX_RADIUS)+5,r=1.1-n/P.MAX_RADIUS*.2,i=this.mouseInteractionSeconds/r,o=n*(1-Math.pow(80,-i));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=.3*this.mouseUpElapsedSeconds,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,P.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,P.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new O(this.element)},draw:function(){var t,e,n;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,n=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+n+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+n+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,n=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=S.now(),this.center?(this.xStart=e,this.yStart=n,this.slideDistance=S.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=n,this.slideDistance=S.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=S.now())},remove:function(){Object(i.a)(this.waveContainer.parentNode).removeChild(this.waveContainer)}},Object(w.a)({_template:x.a`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[g],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=Object(i.a)(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(t),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach((function(e){e.upAction(t)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var t=new P(this);return Object(i.a)(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)(e=this.ripples[t]).draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){void 0!==e&&(t?this.downAction():this.upAction())}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const C={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){v._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var e=this._rippleContainer||this.root;if(e&&Object(i.a)(e).appendChild(this._ripple),t){var n=Object(i.a)(this._rippleContainer||this),r=Object(i.a)(t).rootTarget;n.deepContains(r)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}},E={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var t=1;this.disabled?t=0:this.active||this.pressed?t=4:this.receivedFocusFromKeyboard&&(t=3),this._setElevation(t)},_computeKeyboardClass:function(t){this.toggleClass("keyboard-focus",t)},_spaceKeyDownHandler:function(t){v._spaceKeyDownHandler.call(this,t),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(t){v._spaceKeyUpHandler.call(this,t),this.hasRipple()&&this._ripple.uiUpAction()}},A=[b,o,C,E],k=r.a`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/k.setAttribute("strip-whitespace",""),Object(w.a)({_template:k,is:"paper-button",behaviors:[A],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?E._calculateElevation.apply(this):this._setElevation(0)}})},function(t,e,n){"use strict";n(19),n(160);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}var r=n(11);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const i=r.a`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content);n(121);var o=n(30),a=n(13);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(o.a)({_template:r.a`
    <style>
      :host {
        --calculated-paper-toolbar-height: var(--paper-toolbar-height, 64px);
        --calculated-paper-toolbar-sm-height: var(--paper-toolbar-sm-height, 56px);
        display: block;
        position: relative;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        height: var(--calculated-paper-toolbar-height);
        background: var(--paper-toolbar-background, var(--primary-color));
        color: var(--paper-toolbar-color, var(--dark-theme-text-color));
        @apply --paper-toolbar;
      }

      :host(.animate) {
        transition: var(--paper-toolbar-transition, height 0.18s ease-in);
      }

      :host(.medium-tall) {
        height: calc(var(--calculated-paper-toolbar-height) * 2);
        @apply --paper-toolbar-medium;
      }

      :host(.tall) {
        height: calc(var(--calculated-paper-toolbar-height) * 3);
        @apply --paper-toolbar-tall;
      }

      .toolbar-tools {
        position: relative;
        height: var(--calculated-paper-toolbar-height);
        padding: 0 16px;
        pointer-events: none;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-toolbar-content;
      }

      /*
       * TODO: Where should media query breakpoints live so they can be shared between elements?
       */

      @media (max-width: 600px) {
        :host {
          height: var(--calculated-paper-toolbar-sm-height);
        }

        :host(.medium-tall) {
          height: calc(var(--calculated-paper-toolbar-sm-height) * 2);
        }

        :host(.tall) {
          height: calc(var(--calculated-paper-toolbar-sm-height) * 3);
        }

        .toolbar-tools {
          height: var(--calculated-paper-toolbar-sm-height);
        }
      }

      #topBar {
        position: relative;
      }

      /* middle bar */
      #middleBar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host(.tall) #middleBar,
      :host(.medium-tall) #middleBar {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
      }

      /* bottom bar */
      #bottomBar {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      /*
       * make elements (e.g. buttons) respond to mouse/touch events
       *
       * \`.toolbar-tools\` disables touch events so multiple toolbars can stack and not
       * absorb events. All children must have pointer events re-enabled to work as
       * expected.
       */
      .toolbar-tools > ::slotted(*:not([disabled])) {
        pointer-events: auto;
      }

      .toolbar-tools > ::slotted(.title) {
        @apply --paper-font-common-base;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 20px;
        font-weight: 400;
        line-height: 1;
        pointer-events: none;
        @apply --layout-flex;
      }

      .toolbar-tools > ::slotted(.title) {
        margin-left: 56px;
      }

      .toolbar-tools > ::slotted(paper-icon-button + .title) {
        margin-left: 0;
      }

      /**
       * The --paper-toolbar-title mixin is applied here instead of above to
       * fix the issue with margin-left being ignored due to css ordering.
       */
      .toolbar-tools > ::slotted(.title) {
        @apply --paper-toolbar-title;
      }

      .toolbar-tools > ::slotted(paper-icon-button[icon=menu]) {
        margin-right: 24px;
      }

      .toolbar-tools > ::slotted(.fit) {
        position: absolute;
        top: auto;
        right: 0;
        bottom: 0;
        left: 0;
        width: auto;
        margin: 0;
      }

      /* TODO(noms): Until we have a better solution for classes that don't use
       * /deep/ create our own.
       */
      .start-justified {
        @apply --layout-start-justified;
      }

      .center-justified {
        @apply --layout-center-justified;
      }

      .end-justified {
        @apply --layout-end-justified;
      }

      .around-justified {
        @apply --layout-around-justified;
      }

      .justified {
        @apply --layout-justified;
      }
    </style>

    <div id="topBar" class\$="toolbar-tools [[_computeBarExtraClasses(justify)]]">
      <slot name="top"></slot>
    </div>

    <div id="middleBar" class\$="toolbar-tools [[_computeBarExtraClasses(middleJustify)]]">
      <slot name="middle"></slot>
    </div>

    <div id="bottomBar" class\$="toolbar-tools [[_computeBarExtraClasses(bottomJustify)]]">
      <slot name="bottom"></slot>
    </div>
`,is:"paper-toolbar",hostAttributes:{role:"toolbar"},properties:{bottomJustify:{type:String,value:""},justify:{type:String,value:""},middleJustify:{type:String,value:""}},ready:function(){console.warn(this.is,"is deprecated. Please use app-layout instead!")},attached:function(){this._observer=this._observe(this),this._updateAriaLabelledBy()},detached:function(){this._observer&&this._observer.disconnect()},_observe:function(t){var e=new MutationObserver(function(){this._updateAriaLabelledBy()}.bind(this));return e.observe(t,{childList:!0,subtree:!0}),e},_updateAriaLabelledBy:function(){Object(a.b)();for(var t,e=[],n=Array.prototype.slice.call(Object(a.a)(this.root).querySelectorAll("slot")).concat(Array.prototype.slice.call(Object(a.a)(this.root).querySelectorAll("content"))),r=0;t=n[r];r++)for(var i,o=Object(a.a)(t).getDistributedNodes(),s=0;i=o[s];s++)if(i.classList&&i.classList.contains("title"))if(i.id)e.push(i.id);else{var l="paper-toolbar-label-"+Math.floor(1e4*Math.random());i.id=l,e.push(l)}e.length>0&&this.setAttribute("aria-labelledby",e.join(" "))},_computeBarExtraClasses:function(t){return t?t+("justified"===t?"":"-justified"):""}})},function(t,e,n){"use strict";n(19),n(121);var r=n(30),i=n(11),o=n(20);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Object(r.a)({_template:i.a`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var n=this._resolveSrc(t);n!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=n,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=Object(o.c)(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&(e=(location.origin||location.protocol+"//"+location.host)+e),e}});n(159),n(160);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(r.a)({_template:i.a`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(t){return t?"false":"true"},_headingChanged:function(t){var e=this.getAttribute("heading"),n=this.getAttribute("aria-label");"string"==typeof n&&n!==e||this.setAttribute("aria-label",t)},_computeHeadingClass:function(t){return t?" over-image":""},_computeAnimated:function(t){return t}})}]);