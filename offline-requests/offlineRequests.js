!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=181)}([function(t,e,n){var r=n(6),i=n(34),o=n(25),a=n(26),s=n(35),c=function(t,e,n){var l,u,h,p,d=t&c.F,f=t&c.G,m=t&c.S,v=t&c.P,g=t&c.B,y=f?r:m?r[e]||(r[e]={}):(r[e]||{}).prototype,b=f?i:i[e]||(i[e]={}),_=b.prototype||(b.prototype={});for(l in f&&(n=e),n)h=((u=!d&&y&&void 0!==y[l])?y:n)[l],p=g&&u?s(h,r):v&&"function"==typeof h?s(Function.call,h):h,y&&a(y,l,h,t&c.U),b[l]!=h&&o(b,l,p),v&&_[l]!=h&&(_[l]=h)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return h})),n.d(e,"h",(function(){return p}));n(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t){return t.indexOf(".")>=0}function i(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function o(t,e){return 0===t.indexOf(e+".")}function a(t,e){return 0===e.indexOf(t+".")}function s(t,e,n){return e+n.slice(t.length)}function c(t,e){return t===e||o(t,e)||a(t,e)}function l(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let r=t[n].toString().split(".");for(let t=0;t<r.length;t++)e.push(r[t])}return e.join(".")}return t}function u(t){return Array.isArray(t)?l(t).split("."):t.toString().split(".")}function h(t,e,n){let r=t,i=u(e);for(let t=0;t<i.length;t++){if(!r)return;r=r[i[t]]}return n&&(n.path=i.join(".")),r}function p(t,e,n){let r=t,i=u(e),o=i[i.length-1];if(i.length>1){for(let t=0;t<i.length-1;t++){if(!(r=r[i[t]]))return}r[o]=n}else r[e]=n;return i.join(".")}},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=n(182)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(t){this.value=t.toString()}toString(){return this.value}}function i(t){if(t instanceof r)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const o=function(t,...e){const n=document.createElement("template");return n.innerHTML=e.reduce((e,n,o)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof r)return i(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(n)+t[o+1],t[0]),n}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";n(12);var r=n(1),i=(n(10),n(103)),o=n(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function a(t){return"slot"===t.localName}let s=class{static getFlattenedNodes(t){const e=Object(r.a)(t);return a(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>a(t)?(t=t,Object(r.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){a(this._target)?this._listenSlots([this._target]):Object(r.a)(this._target).children&&(this._listenSlots(Object(r.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){a(this._target)?this._unlistenSlots([this._target]):Object(r.a)(this._target).children&&(this._unlistenSlots(Object(r.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,o.a.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=Object(i.a)(e,this._effectiveNodes);for(let e,r=0;r<n.length&&(e=n[r]);r++)for(let n,r=0;r<e.removed.length&&(n=e.removed[r]);r++)t.removedNodes.push(n);for(let r,i=0;i<n.length&&(r=n[i]);i++)for(let n=r.index;n<r.index+r.addedCount;n++)t.addedNodes.push(e[n]);this._effectiveNodes=e;let r=!1;return(t.addedNodes.length||t.removedNodes.length)&&(r=!0,this.callback.call(this._target,t)),r}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];a(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];a(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};var c=n(47);n(28);n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return c.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l=Element.prototype,u=l.matches||l.matchesSelector||l.mozMatchesSelector||l.msMatchesSelector||l.oMatchesSelector||l.webkitMatchesSelector,h=function(t,e){return u.call(t,e)};class p{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new s(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(r.a)(this.node).contains(t))return!0;let e=t,n=t.ownerDocument;for(;e&&e!==n&&e!==this.node;)e=Object(r.a)(e).parentNode||Object(r.a)(e).host;return e===this.node}getOwnerRoot(){return Object(r.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(r.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(r.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(r.a)(e).assignedSlot;return t}importNode(t,e){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(r.a)(n).importNode(t,e)}getEffectiveChildNodes(){return s.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),n=[];for(let r,i=0,o=e.length;i<o&&(r=e[i]);i++)r.nodeType===Node.ELEMENT_NODE&&h(r,t)&&n.push(r);return n}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function d(t,e){for(let n=0;n<e.length;n++){let r=e[n];Object.defineProperty(t,r,{get:function(){return this.node[r]},configurable:!0})}}class f{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}p.prototype.cloneNode,p.prototype.appendChild,p.prototype.insertBefore,p.prototype.removeChild,p.prototype.replaceChild,p.prototype.setAttribute,p.prototype.removeAttribute,p.prototype.querySelector,p.prototype.querySelectorAll,p.prototype.parentNode,p.prototype.firstChild,p.prototype.lastChild,p.prototype.nextSibling,p.prototype.previousSibling,p.prototype.firstElementChild,p.prototype.lastElementChild,p.prototype.nextElementSibling,p.prototype.previousElementSibling,p.prototype.childNodes,p.prototype.children,p.prototype.classList,p.prototype.textContent,p.prototype.innerHTML;let m=p;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(p.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=p.prototype[e])}),d(t.prototype,["classList"]),m=t,Object.defineProperties(f.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&v(t).getOwnerRoot(),n=this.path;for(let t=0;t<n.length;t++){const r=n[t];if(v(r).getOwnerRoot()===e)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let n=0;n<e.length;n++){let r=e[n];t[r]=function(){return this.node[r].apply(this.node,arguments)}}}(p.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),d(p.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let n=0;n<e.length;n++){let r=e[n];Object.defineProperty(t,r,{get:function(){return this.node[r]},set:function(t){this.node[r]=t},configurable:!0})}}(p.prototype,["textContent","innerHTML","className"]);const v=function(t){if((t=t||document)instanceof m)return t;if(t instanceof f)return t;let e=t.__domApi;return e||(e=t instanceof Event?new f(t):new m(t),t.__domApi=e),e}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){"use strict";n.d(e,"i",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"h",(function(){return h})),n.d(e,"b",(function(){return p}));n(12);var r=n(23);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let o=Object(r.a)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let s=!1;let c=!1;let l=!1;let u=!1;let h=!1;let p=!0},function(t,e,n){"use strict";var r=n(72),i=(n(13),n(12),n(67)),o=n(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function a(t,e,n,r,i){let o;i&&(o="object"==typeof n&&null!==n)&&(r=t.__dataTemp[e]);let a=r!==n&&(r==r||n==n);return o&&a&&(t.__dataTemp[e]=n),a}const s=Object(o.a)(t=>{return class extends t{_shouldPropertyChange(t,e,n){return a(this,t,e,n,!0)}}}),c=Object(o.a)(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return a(this,t,e,n,this.mutableData)}}});s._mutablePropertyChange=a;var l=n(10),u=n(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let h=null;function p(){return h}p.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:p,writable:!0}});const d=Object(i.a)(p),f=s(d);const m=Object(i.a)(class{});class v extends m{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(t,e,n)}}_showHideChildren(t){let e=this.children;for(let n=0;n<e.length;n++){let r=e[n];if(Boolean(t)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)t?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(t)r.__polymerReplaced__=document.createComment("hidden-slot"),Object(u.a)(Object(u.a)(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const t=r.__polymerReplaced__;t&&Object(u.a)(Object(u.a)(t).parentNode).replaceChild(r,t)}else r.style&&(t?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=t,r._showHideChildren&&r._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}v.prototype.__dataHost,v.prototype.__templatizeOptions,v.prototype._methodHost,v.prototype.__templatizeOwner,v.prototype.__hostProps;const g=s(v);function y(t){let e=t.__dataHost;return e&&e._methodHost||e}function b(t,e,n){let r=n.mutableData?g:v;z.mixin&&(r=z.mixin(r));let i=class extends r{};return i.prototype.__templatizeOptions=n,i.prototype._bindTemplate(t),function(t,e,n,r){let i=n.hostProps||{};for(let e in r.instanceProps){delete i[e];let n=r.notifyInstanceProp;n&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:x(e,n)})}if(r.forwardHostProp&&e.__dataHost)for(let e in i)n.hasHostProps||(n.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(i,t,e,n),i}function _(t,e,n){let r=n.forwardHostProp;if(r&&e.hasHostProps){let i=e.templatizeTemplateClass;if(!i){let t=n.mutableData?f:d;i=e.templatizeTemplateClass=class extends t{};let o=e.hostProps;for(let t in o)i.prototype._addPropertyEffect("_host_"+t,i.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:w(t,r)}),i.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){h=t,Object.setPrototypeOf(t,e.prototype),new e,h=null}(t,i),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function w(t,e){return function(t,n,r){e.call(t.__templatizeOwner,n.substring("_host_".length),r[n])}}function x(t,e){return function(t,n,r){e.call(t.__templatizeOwner,t,n,r[n])}}function z(t,e,n){if(l.g&&!y(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let r=(e?e.constructor:v)._parseTemplate(t),i=r.templatizeInstanceClass;i||(i=b(t,r,n),r.templatizeInstanceClass=i),_(t,r,n);let o=class extends i{};return o.prototype._methodHost=y(t),o.prototype.__dataHost=t,o.prototype.__templatizeOwner=e,o.prototype.__hostProps=r.hostProps,o=o}function S(t,e){let n;for(;e;)if(n=e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=Object(u.a)(e).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var M=n(102);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let C=!1;function O(){if(l.c&&!l.i){if(!C){C=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const k=Object(M.a)(c(Object(i.a)(HTMLElement)));customElements.define("dom-bind",class extends k{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),l.g)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,n,r){this.mutableData=!0}connectedCallback(){O()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(u.a)(Object(u.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(!(t=t||this.querySelector("template"))){let e=new MutationObserver(()=>{if(!(t=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var E=n(66),P=n(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const H=Object(E.a)(HTMLElement);var L=n(28),A=n(47),V=n(2),T=n(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const j=c(H);class I extends j{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),O()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(u.a)(Object(u.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=z(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let n=this.__instances;for(let r,i=0;i<n.length&&(r=n[i]);i++)r.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if(Object(V.e)(this.as,e)){let r=t[this.itemsIndexAs];e==this.as&&(this.items[r]=n);let i=Object(V.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,e);this.notifyPath(i,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=L.a.debounce(this.__renderDebouncer,e>0?T.b.after(e):T.a,t.bind(this)),Object(A.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(A.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;this.__filterFn&&(e=e.filter((e,n,r)=>this.__filterFn(t[e],n,r))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n]));const n=this.__itemsIdxToInstIdx={};let r=0;const i=Math.min(e.length,this.__limit);for(;r<i;r++){let i=this.__instances[r],o=e[r],a=t[o];n[o]=r,i?(i._setPendingProperty(this.as,a),i._setPendingProperty(this.indexAs,r),i._setPendingProperty(this.itemsIndexAs,o),i._flushProperties()):this.__insertInstance(a,r,o)}for(let t=this.__instances.length-1;t>=r;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const n=Object(u.a)(e.root);for(let t=0;t<e.children.length;t++){let r=e.children[t];n.appendChild(r)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,n){let r={};return r[this.as]=t,r[this.indexAs]=e,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(t,e,n){let r=this.__pool.pop();r?(r._setPendingProperty(this.as,t),r._setPendingProperty(this.indexAs,e),r._setPendingProperty(this.itemsIndexAs,n),r._flushProperties()):r=this.__stampInstance(t,e,n);let i=this.__instances[e+1],o=i?i.children[0]:this;return Object(u.a)(Object(u.a)(this).parentNode).insertBefore(r.root,o),this.__instances[e]=r,r}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),r=n.indexOf("."),i=r<0?n:n.substring(0,r);if(i==parseInt(i,10)){let t=r<0?"":n.substring(r+1);this.__handleObservedPaths(t);let o=this.__itemsIdxToInstIdx[i],a=this.__instances[o];if(a){let n=this.as+(t?"."+t:"");a._setPendingPropertyOrPath(n,e,!1,!0),a._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return S(this.template,t)}}customElements.define(I.is,I);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class N extends H{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=L.a.debounce(this.__renderDebouncer,T.a,()=>this.__render()),Object(A.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(u.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(u.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),O()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){Object(A.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Object(u.a)(this).parentNode;if(t){if(!this.__ctor){let t=Object(u.a)(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Object(u.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=z(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(V.g)(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Object(u.a)(this).previousSibling!==e[e.length-1])for(let n,r=0;r<e.length&&(n=e[r]);r++)Object(u.a)(t).insertBefore(n,this)}}else this.__instance=new this.__ctor,Object(u.a)(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(u.a)(t[0]).parentNode;if(e){e=Object(u.a)(e);for(let n,r=0;r<t.length&&(n=t[r]);r++)e.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(N.is,N);var R=n(103);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let D=Object(o.a)(t=>{let e=Object(E.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let n=e.path;if(n==JSCompiler_renameProperty("items",this)){let n=e.base||[],r=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),r){let t=Object(R.a)(n,r);this.__applySplices(t)}this.__lastItems=n,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let n=0;n<t.length;n++){let r=t[n];e.forEach((t,n)=>{t<r.index||(t>=r.index+r.removed.length?e.set(n,t+r.addedCount-r.removed.length):e.set(n,-1))});for(let t=0;t<r.addedCount;t++){let n=r.index+t;e.has(this.items[n])&&e.set(this.items[n],n)}}this.__updateLinks();let n=0;e.forEach((t,r)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,e.delete(r)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((n,r)=>{e==t++&&this.deselect(r)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let n;this.__selectedMap.delete(t),this.multi&&(n=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(H);class F extends D{static get is(){return"array-selector"}static get template(){return null}}customElements.define(F.is,F);var Y=n(136),B=n(48),U=n(22);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const q=new Y.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){q.processStyles(),Object(B.c)(t,e)},styleElement(t){q.processStyles()},styleDocument(t){q.processStyles(),Object(B.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(B.b)(t,e),flushCustomStyles(){},nativeCss:U.c,nativeShadow:U.d,cssBuild:U.a,disableRuntime:U.b}),window.ShadyCSS.CustomStyleInterface=q;var $=n(80);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const K="include",W=window.ShadyCSS.CustomStyleInterface;class J extends HTMLElement{constructor(){super(),this._style=null,W.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(K);return e&&(t.removeAttribute(K),t.textContent=Object($.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let G;window.customElements.define("custom-style",J),G=s._mutablePropertyChange;Boolean;n.d(e,"a",(function(){return X})),n.d(e,"b",(function(){return P.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const X=Object(r.a)(HTMLElement).prototype},function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},function(t,e,n){"use strict";var r=n(72),i=n(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},a={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},s=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},a);function c(t,e,n,r){!function(t,e,n){const r=t._noAccessors,i=Object.getOwnPropertyNames(t);for(let o=0;o<i.length;o++){let a=i[o];if(!(a in n))if(r)e[a]=t[a];else{let n=Object.getOwnPropertyDescriptor(t,a);n&&(n.configurable=!0,Object.defineProperty(e,a,n))}}}(e,t,r);for(let t in o)e[t]&&(n[t]=n[t]||[],n[t].push(e[t]))}function l(t,e){for(const n in e){const r=t[n],i=e[n];t[n]=!("value"in i)&&r&&"value"in r?Object.assign({value:r.value},i):i}}function u(t,e,n){let r;const o={};class u extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(let t,e=0;e<r.length;e++)(t=r[e]).properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(r)for(let t=0;t<r.length;t++)l(e,r[t].properties);return l(e,t.properties),e}static get observers(){let e=[];if(r)for(let t,n=0;n<r.length;n++)(t=r[n]).observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=o.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=u.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),i.c&&h(t);const e=Object.getPrototypeOf(this);let n=o.beforeRegister;if(n)for(let t=0;t<n.length;t++)n[t].call(e);if(n=o.registered)for(let t=0;t<n.length;t++)n[t].call(e)}}_applyListeners(){super._applyListeners();const t=o.listeners;if(t)for(let e=0;e<t.length;e++){const n=t[e];if(n)for(let t in n)this._addMethodEventListenerToNode(this,t,n[t])}}_ensureAttributes(){const t=o.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const n=t[e];for(let t in n)this._ensureAttribute(t,n[t])}super._ensureAttributes()}ready(){super.ready();let t=o.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=o.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=o.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,n){super.attributeChanged();let r=o.attributeChanged;if(r)for(let i=0;i<r.length;i++)r[i].call(this,t,e,n)}}if(n){Array.isArray(n)||(n=[n]);let t=e.prototype.behaviors;r=function t(e,n,r){n=n||[];for(let i=e.length-1;i>=0;i--){let o=e[i];o?Array.isArray(o)?t(o,n):n.indexOf(o)<0&&(!r||r.indexOf(o)<0)&&n.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,t),u.prototype.behaviors=t?t.concat(n):r}const h=e=>{r&&function(t,e,n){for(let r=0;r<e.length;r++)c(t,e[r],n,s)}(e,r,o),c(e,t,o,a)};return i.c||h(u.prototype),u.generatedFrom=t,u}n(12);n.d(e,"a",(function(){return h}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const h=function(t){let e;return e="function"==typeof t?t:h.Class(t),customElements.define(e.is,e),e};h.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let n=e?e(Object(r.a)(HTMLElement)):Object(r.a)(HTMLElement);return(n=u(t,n,t.behaviors)).is=n.prototype.is=t.is,n}},function(t,e,n){var r=n(74)("wks"),i=n(55),o=n(6).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r,i=document.getElementById("snackbar"),o=function(t){r&&clearTimeout(r),""!==i.innerHTML?i.innerHTML+="\n"+t:i.innerHTML=t,i.classList.add("show"),r=setTimeout((function(){i.classList.remove("show"),i.innerHTML=""}),5e3)}},function(t,e,n){var r=n(37),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;const o=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=r++;return function(r){let i=r.__mixinSet;if(i&&i[n])return r;let o=e,a=o.get(r);a||(a=t(r),o.set(r,a));let s=Object.create(a.__mixinSet||i||null);return s[n]=!0,a.__mixinSet=s,a}}},function(t,e,n){t.exports=!n(7)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(3),i=n(139),o=n(40),a=Object.defineProperty;e.f=n(18)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(41);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));n(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r=0,i=0,o=[],a=0,s=document.createTextNode("");new window.MutationObserver((function(){const t=o.length;for(let e=0;e<t;e++){let t=o[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}o.splice(0,t),i+=t})).observe(s,{characterData:!0});const c={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},l={run:t=>(s.textContent=a++,o.push(t),r++),cancel(t){const e=t-i;if(e>=0){if(!o[e])throw new Error("invalid async handle: "+t);o[e]=null}}}},function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return c}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=!(window.ShadyDOM&&window.ShadyDOM.inUse);let i,o;function a(t){i=(!t||!t.shimcssproperties)&&(r||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(o=window.ShadyCSS.cssBuild);const s=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?i=window.ShadyCSS.nativeCss:window.ShadyCSS?(a(window.ShadyCSS),window.ShadyCSS=void 0):a(window.WebComponents&&window.WebComponents.flags);const c=i},function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));n(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r,i,o=/(url\()([^)]*)(\))/g,a=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function s(t,e){if(t&&a.test(t))return t;if("//"===t)return t;if(void 0===r){r=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",r="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),r)try{return new URL(t,e).href}catch(e){return t}return i||((i=document.implementation.createHTMLDocument("temp")).base=i.createElement("base"),i.head.appendChild(i.base),i.anchor=i.createElement("a"),i.body.appendChild(i.anchor)),i.base.href=e,i.anchor.href=t,i.anchor.href||t}function c(t,e){return t.replace(o,(function(t,n,r,i){return n+"'"+s(r.replace(/["']/g,""),e)+"'"+i}))}function l(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(19),i=n(54);t.exports=n(18)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(6),i=n(25),o=n(30),a=n(55)("src"),s=n(186),c=(""+s).split("toString");n(34).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var l="function"==typeof n;l&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(l&&(o(n,a)||i(n,a,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},function(t,e,n){var r=n(0),i=n(7),o=n(41),a=/"/g,s=function(t,e,n,r){var i=String(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a}));n(12),n(17),n(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,i.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),i.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof r?t._cancelAsync():t=new r,t.setConfig(e,n),t}}let i=new Set;const o=function(t){i.add(t)},a=function(){const t=Boolean(i.size);return i.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},function(t,e,n){"use strict";var r;n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return s}));var i=function(t,e){var n=r.transaction([t],"readwrite").objectStore(t).add(e);return new Promise((function(t,r){n.onsuccess=function(){t(e)},n.onerror=function(t){r(t)}}))},o=function(t,e){var n=r.transaction([t],"readwrite").objectStore(t).delete(e.name);return new Promise((function(t,r){n.onsuccess=function(){t(e)},n.onerror=function(t){r(t)}}))},a=function(t){var e=r.transaction([t],"readwrite").objectStore(t).getAll();return new Promise((function(t,n){e.onsuccess=function(){var n=e.result;t(n)}}))},s=function(){var t=window.indexedDB.open("shoppingCart",1);return t.onerror=function(t){showSnackBar("Error loading database.")},t.onupgradeneeded=function(t){var e=t.target.result;e.onerror=function(t){console.warn("DBOpenRequest.onupgradeneeded: db.onerror -> event",t),showSnackBar("Error loading database.")};var n=e.createObjectStore("toAdd",{keyPath:"name"});n.createIndex("name","name",{unique:!1}),n.createIndex("price","price",{unique:!1}),n.createIndex("image","image",{unique:!1});var r=e.createObjectStore("toRemove",{keyPath:"name"});r.createIndex("name","name",{unique:!1}),r.createIndex("price","price",{unique:!1}),r.createIndex("image","image",{unique:!1})},new Promise((function(e,n){t.onsuccess=function(n){return r=t.result,e(r)}}))}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(75),i=n(41);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(76),i=n(54),o=n(31),a=n(40),s=n(30),c=n(139),l=Object.getOwnPropertyDescriptor;e.f=n(18)?l:function(t,e){if(t=o(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(30),i=n(20),o=n(108)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(24);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(7);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,i=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=/@media\s(.*)/},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(0),i=n(34),o=n(7);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",a)}},function(t,e,n){var r=n(35),i=n(75),o=n(20),a=n(16),s=n(124);t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,u=4==t,h=6==t,p=5==t||h,d=e||s;return function(e,s,f){for(var m,v,g=o(e),y=i(g),b=r(s,f,3),_=a(y.length),w=0,x=n?d(e,_):c?d(e,0):void 0;_>w;w++)if((p||w in y)&&(v=b(m=y[w],w,g),t))if(n)x[w]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:x.push(m)}else if(u)return!1;return h?-1:l||u?u:x}}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));n(11),n(65);var r=n(104),i=n(8);
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
const o={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,n=Object(i.a)(e).localTarget;this.isLightDescendant(n)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,n=Object(i.a)(e).localTarget;this.isLightDescendant(n)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},a=[r.a,o]},function(t,e,n){"use strict";if(n(18)){var r=n(49),i=n(6),o=n(7),a=n(0),s=n(95),c=n(132),l=n(35),u=n(61),h=n(54),p=n(25),d=n(63),f=n(37),m=n(16),v=n(167),g=n(57),y=n(40),b=n(30),_=n(69),w=n(9),x=n(20),z=n(121),S=n(58),M=n(33),C=n(59).f,O=n(123),k=n(55),E=n(14),P=n(43),H=n(85),L=n(78),A=n(126),V=n(71),T=n(90),j=n(60),I=n(125),N=n(156),R=n(19),D=n(32),F=R.f,Y=D.f,B=i.RangeError,U=i.TypeError,q=i.Uint8Array,$=Array.prototype,K=c.ArrayBuffer,W=c.DataView,J=P(0),G=P(2),X=P(3),Z=P(4),Q=P(5),tt=P(6),et=H(!0),nt=H(!1),rt=A.values,it=A.keys,ot=A.entries,at=$.lastIndexOf,st=$.reduce,ct=$.reduceRight,lt=$.join,ut=$.sort,ht=$.slice,pt=$.toString,dt=$.toLocaleString,ft=E("iterator"),mt=E("toStringTag"),vt=k("typed_constructor"),gt=k("def_constructor"),yt=s.CONSTR,bt=s.TYPED,_t=s.VIEW,wt=P(1,(function(t,e){return Ct(L(t,t[gt]),e)})),xt=o((function(){return 1===new q(new Uint16Array([1]).buffer)[0]})),zt=!!q&&!!q.prototype.set&&o((function(){new q(1).set({})})),St=function(t,e){var n=f(t);if(n<0||n%e)throw B("Wrong offset!");return n},Mt=function(t){if(w(t)&&bt in t)return t;throw U(t+" is not a typed array!")},Ct=function(t,e){if(!(w(t)&&vt in t))throw U("It is not a typed array constructor!");return new t(e)},Ot=function(t,e){return kt(L(t,t[gt]),e)},kt=function(t,e){for(var n=0,r=e.length,i=Ct(t,r);r>n;)i[n]=e[n++];return i},Et=function(t,e,n){F(t,e,{get:function(){return this._d[n]}})},Pt=function(t){var e,n,r,i,o,a,s=x(t),c=arguments.length,u=c>1?arguments[1]:void 0,h=void 0!==u,p=O(s);if(null!=p&&!z(p)){for(a=p.call(s),r=[],e=0;!(o=a.next()).done;e++)r.push(o.value);s=r}for(h&&c>2&&(u=l(u,arguments[2],2)),e=0,n=m(s.length),i=Ct(this,n);n>e;e++)i[e]=h?u(s[e],e):s[e];return i},Ht=function(){for(var t=0,e=arguments.length,n=Ct(this,e);e>t;)n[t]=arguments[t++];return n},Lt=!!q&&o((function(){dt.call(new q(1))})),At=function(){return dt.apply(Lt?ht.call(Mt(this)):Mt(this),arguments)},Vt={copyWithin:function(t,e){return N.call(Mt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return Z(Mt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return I.apply(Mt(this),arguments)},filter:function(t){return Ot(this,G(Mt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Mt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Mt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){J(Mt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return nt(Mt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(Mt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return lt.apply(Mt(this),arguments)},lastIndexOf:function(t){return at.apply(Mt(this),arguments)},map:function(t){return wt(Mt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return st.apply(Mt(this),arguments)},reduceRight:function(t){return ct.apply(Mt(this),arguments)},reverse:function(){for(var t,e=Mt(this).length,n=Math.floor(e/2),r=0;r<n;)t=this[r],this[r++]=this[--e],this[e]=t;return this},some:function(t){return X(Mt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ut.call(Mt(this),t)},subarray:function(t,e){var n=Mt(this),r=n.length,i=g(t,r);return new(L(n,n[gt]))(n.buffer,n.byteOffset+i*n.BYTES_PER_ELEMENT,m((void 0===e?r:g(e,r))-i))}},Tt=function(t,e){return Ot(this,ht.call(Mt(this),t,e))},jt=function(t){Mt(this);var e=St(arguments[1],1),n=this.length,r=x(t),i=m(r.length),o=0;if(i+e>n)throw B("Wrong length!");for(;o<i;)this[e+o]=r[o++]},It={entries:function(){return ot.call(Mt(this))},keys:function(){return it.call(Mt(this))},values:function(){return rt.call(Mt(this))}},Nt=function(t,e){return w(t)&&t[bt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Rt=function(t,e){return Nt(t,e=y(e,!0))?h(2,t[e]):Y(t,e)},Dt=function(t,e,n){return!(Nt(t,e=y(e,!0))&&w(n)&&b(n,"value"))||b(n,"get")||b(n,"set")||n.configurable||b(n,"writable")&&!n.writable||b(n,"enumerable")&&!n.enumerable?F(t,e,n):(t[e]=n.value,t)};yt||(D.f=Rt,R.f=Dt),a(a.S+a.F*!yt,"Object",{getOwnPropertyDescriptor:Rt,defineProperty:Dt}),o((function(){pt.call({})}))&&(pt=dt=function(){return lt.call(this)});var Ft=d({},Vt);d(Ft,It),p(Ft,ft,It.values),d(Ft,{slice:Tt,set:jt,constructor:function(){},toString:pt,toLocaleString:At}),Et(Ft,"buffer","b"),Et(Ft,"byteOffset","o"),Et(Ft,"byteLength","l"),Et(Ft,"length","e"),F(Ft,mt,{get:function(){return this[bt]}}),t.exports=function(t,e,n,c){var l=t+((c=!!c)?"Clamped":"")+"Array",h="get"+t,d="set"+t,f=i[l],g=f||{},y=f&&M(f),b=!f||!s.ABV,x={},z=f&&f.prototype,O=function(t,n){F(t,n,{get:function(){return function(t,n){var r=t._d;return r.v[h](n*e+r.o,xt)}(this,n)},set:function(t){return function(t,n,r){var i=t._d;c&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[d](n*e+i.o,r,xt)}(this,n,t)},enumerable:!0})};b?(f=n((function(t,n,r,i){u(t,f,l,"_d");var o,a,s,c,h=0,d=0;if(w(n)){if(!(n instanceof K||"ArrayBuffer"==(c=_(n))||"SharedArrayBuffer"==c))return bt in n?kt(f,n):Pt.call(f,n);o=n,d=St(r,e);var g=n.byteLength;if(void 0===i){if(g%e)throw B("Wrong length!");if((a=g-d)<0)throw B("Wrong length!")}else if((a=m(i)*e)+d>g)throw B("Wrong length!");s=a/e}else s=v(n),o=new K(a=s*e);for(p(t,"_d",{b:o,o:d,l:a,e:s,v:new W(o)});h<s;)O(t,h++)})),z=f.prototype=S(Ft),p(z,"constructor",f)):o((function(){f(1)}))&&o((function(){new f(-1)}))&&T((function(t){new f,new f(null),new f(1.5),new f(t)}),!0)||(f=n((function(t,n,r,i){var o;return u(t,f,l),w(n)?n instanceof K||"ArrayBuffer"==(o=_(n))||"SharedArrayBuffer"==o?void 0!==i?new g(n,St(r,e),i):void 0!==r?new g(n,St(r,e)):new g(n):bt in n?kt(f,n):Pt.call(f,n):new g(v(n))})),J(y!==Function.prototype?C(g).concat(C(y)):C(g),(function(t){t in f||p(f,t,g[t])})),f.prototype=z,r||(z.constructor=f));var k=z[ft],E=!!k&&("values"==k.name||null==k.name),P=It.values;p(f,vt,!0),p(z,bt,l),p(z,_t,!0),p(z,gt,f),(c?new f(1)[mt]==l:mt in z)||F(z,mt,{get:function(){return l}}),x[l]=f,a(a.G+a.W+a.F*(f!=g),x),a(a.S,l,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*o((function(){g.of.call(f,1)})),l,{from:Pt,of:Ht}),"BYTES_PER_ELEMENT"in z||p(z,"BYTES_PER_ELEMENT",e),a(a.P,l,Vt),j(l),a(a.P+a.F*zt,l,{set:jt}),a(a.P+a.F*!E,l,It),r||z.toString==pt||(z.toString=pt),a(a.P+a.F*o((function(){new f(1).slice()})),l,{slice:Tt}),a(a.P+a.F*(o((function(){return[1,2].toLocaleString()!=new f([1,2]).toLocaleString()}))||!o((function(){z.toLocaleString.call([1,2])}))),l,{toLocaleString:At}),V[l]=E?k:P,r||E||p(z,ft,P)}}else t.exports=function(){}},function(t,e,n){var r=n(162),i=n(0),o=n(74)("metadata"),a=o.store||(o.store=new(n(165))),s=function(t,e,n){var i=a.get(t);if(!i){if(!n)return;a.set(t,i=new r)}var o=i.get(e);if(!o){if(!n)return;i.set(e,o=new r)}return o};t.exports={store:a,map:s,has:function(t,e,n){var r=s(e,n,!1);return void 0!==r&&r.has(t)},get:function(t,e,n){var r=s(e,n,!1);return void 0===r?void 0:r.get(t)},set:function(t,e,n,r){s(n,r,!0).set(t,e)},keys:function(t,e){var n=s(t,e,!1),r=[];return n&&n.forEach((function(t,e){r.push(e)})),r},key:function(t){return void 0===t||"symbol"==typeof t?t:String(t)},exp:function(t){i(i.S,"Reflect",t)}}},function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));n(12);var r=n(28);n.d(e,"a",(function(){return r.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(r.c)()}while(t||e)}},function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var r=n(39);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function o(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}function a(t){const e=r.b.test(t)||r.c.test(t);return r.b.lastIndex=0,r.c.lastIndex=0,e}},function(t,e){t.exports=!1},function(t,e,n){var r=n(55)("meta"),i=n(9),o=n(30),a=n(19).f,s=0,c=Object.isExtensible||function(){return!0},l=!n(7)((function(){return c(Object.preventExtensions({}))})),u=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},h=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[r].w},onFreeze:function(t){return l&&h.NEED&&c(t)&&!o(t,r)&&u(t),t}}},function(t,e,n){var r=n(14)("unscopables"),i=Array.prototype;null==i[r]&&n(25)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,e,n){"use strict";n(11);
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
const r=n(5).a`
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
</custom-style>`;r.setAttribute("style","display: none;"),document.head.appendChild(r.content);var i=document.createElement("style");i.textContent="[hidden] { display: none !important; }",document.head.appendChild(i)},function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));n(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const r={},i=/-[a-z]/g,o=/([A-Z])/g;function a(t){return r[t]||(r[t]=t.indexOf("-")<0?t:t.replace(i,t=>t[1].toUpperCase()))}function s(t){return r[t]||(r[t]=t.replace(o,"-$1").toLowerCase())}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(141),i=n(109);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(37),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(3),i=n(142),o=n(109),a=n(108)("IE_PROTO"),s=function(){},c=function(){var t,e=n(106)("iframe"),r=o.length;for(e.style.display="none",n(110).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(141),i=n(109).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){"use strict";var r=n(6),i=n(19),o=n(18),a=n(14)("species");t.exports=function(t){var e=r[t];o&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(35),i=n(154),o=n(121),a=n(3),s=n(16),c=n(123),l={},u={};(e=t.exports=function(t,e,n,h,p){var d,f,m,v,g=p?function(){return t}:c(t),y=r(n,h,e?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(d=s(t.length);d>b;b++)if((v=e?y(a(f=t[b])[0],f[1]):y(t[b]))===l||v===u)return v}else for(m=g.call(t);!(f=m.next()).done;)if((v=i(m,y,f.value,e))===l||v===u)return v}).BREAK=l,e.RETURN=u},function(t,e,n){var r=n(26);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(11),n(8);
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
const r={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused("focus"===t.type)},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}}},function(t,e,n){"use strict";n(12);var r=n(10),i=n(17),o=n(80),a=n(23),s=n(81),c=n(67);const l=[];var u=n(101);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const h=Object(i.a)(t=>{const e=Object(u.a)(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof i?e:null}function r(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const n=t.properties;n&&(e=function(t){const e={};for(let n in t){const r=t[n];e[n]="function"==typeof r?{type:r}:r}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class i extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,l.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=r(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,r(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});var p=n(1);n.d(e,"a",(function(){return m}));
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
const d="3.3.0",f=window.ShadyCSS&&window.ShadyCSS.cssBuild,m=Object(i.a)(t=>{const e=h(Object(c.a)(t));return class extends e{static get polymerElementVersion(){return d}static _finalizeClass(){e._finalizeClass.call(this);const t=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):r.c||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let o in t)e=this.prototype,n=o,r=t[o],i=t,r.computed&&(r.readOnly=!0),r.computed&&(e._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):e._createComputedProperty(n,r.computed,i)),r.readOnly&&!e._hasReadOnlyEffect(n)?e._createReadOnlyProperty(n,!r.computed):!1===r.readOnly&&e._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),r.reflectToAttribute&&!e._hasReflectEffect(n)?e._createReflectedProperty(n):!1===r.reflectToAttribute&&e._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),r.notify&&!e._hasNotifyEffect(n)?e._createNotifyingProperty(n):!1===r.notify&&e._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),r.observer&&e._createPropertyObserver(n,r.observer,i[r.observer]),e._addPropertyToAttributeMap(n);var e,n,r,i}static createObservers(t,e){const n=this.prototype;for(let r=0;r<t.length;r++)n._createMethodObserver(t[r],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!r.g||r.a)&&(e=s.a.import(t,"template"),r.g&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(a.a)(t.url);else{const t=s.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=r.e,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let r=e[n];"value"in r&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=r)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return Object(a.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;!function(t,e,n,r){if(!f){const i=e.content.querySelectorAll("style"),a=Object(o.c)(e),s=Object(o.b)(n),c=e.content.firstElementChild;for(let n=0;n<s.length;n++){let i=s[n];i.textContent=t._processStyleText(i.textContent,r),e.content.insertBefore(i,c)}let l=0;for(let e=0;e<a.length;e++){let n=a[e],o=i[l];o!==n?(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)):l++,n.textContent=t._processStyleText(n.textContent,r)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n)}(this,e,t,n?Object(a.c)(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(p.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t)),r.h&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(a.c)(this.importPath)),Object(a.c)(t,e)}static _parseTemplateContent(t,n,r){return n.dynamicFns=n.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,n,r)}static _addTemplatePropertyEffect(t,n,i){return!r.c||n in this._properties||console.warn(`Property '${n}' used in template but not declared in 'properties'; `+"attribute will not be observed."),e._addTemplatePropertyEffect.call(this,t,n,i)}}})},function(t,e,n){"use strict";n(12);var r=n(1),i=n(17),o=n(2),a=n(53),s=n(100);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const c={"dom-if":!0,"dom-repeat":!0};function l(t){let e=t.getAttribute("is");if(e&&c[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function u(t,e){let n=e.parentInfo&&u(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,r=0;t;t=t.nextSibling)if(e.parentIndex===r++)return t}function h(t,e,n,r){r.id&&(e[r.id]=n)}function p(t,e,n){if(n.events&&n.events.length)for(let r,i=0,o=n.events;i<o.length&&(r=o[i]);i++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function d(t,e,n){n.templateInfo&&(e._templateInfo=n.templateInfo)}const f=Object(i.a)(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let r=!1,i=t;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(e.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(i,e,n)||r,i.firstChild&&this._parseTemplateChildNodes(i,e,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,e,n)||r),r}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let r,i=t.firstChild,o=0;i;i=r){if("template"==i.localName&&(i=l(i)),r=i.nextSibling,i.nodeType===Node.TEXT_NODE){let n=r;for(;n&&n.nodeType===Node.TEXT_NODE;)i.textContent+=n.textContent,r=n.nextSibling,t.removeChild(n),n=r;if(e.stripWhiteSpace&&!i.textContent.trim()){t.removeChild(i);continue}}let a={parentIndex:o,parentInfo:n};this._parseTemplateNode(i,e,a)&&(a.infoIndex=e.nodeInfoList.push(a)-1),i.parentNode&&o++}}static _parseTemplateNestedTemplate(t,e,n){let r=t,i=this._parseTemplate(r,e);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(t,e,n){let r=!1,i=Array.from(t.attributes);for(let o,a=i.length-1;o=i[a];a--)r=this._parseTemplateNodeAttribute(t,e,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(t,e,n,r,i){return"on-"===r.slice(0,3)?(t.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):"id"===r&&(n.id=i,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),n=e.nodeInfoList,r=e.content||t.content,i=document.importNode(r,!0);i.__noInsertionPoint=!e.hasInsertionPoint;let o=i.nodeList=new Array(n.length);i.$={};for(let t,e=0,r=n.length;e<r&&(t=n[e]);e++){let n=o[e]=u(i,t);h(0,i.$,n,t),d(0,n,t),p(this,n,t)}return i=i}_addMethodEventListenerToNode(t,e,n,r){let i=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(r=r||t,0,n);return this._addEventListenerToNode(t,e,i),i}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}}});var m=n(10);n.d(e,"a",(function(){return U}));
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
let v=0;const g={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},y=/[A-Z]/;function b(t,e){let n=t[e];if(n){if(!t.hasOwnProperty(e)){n=t[e]=Object.create(t[e]);for(let t in n){let e=n[t],r=n[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}}else n=t[e]={};return n}function _(t,e,n,r,i,o){if(e){let a=!1,s=v++;for(let c in n)w(t,e,s,c,n,r,i,o)&&(a=!0);return a}return!1}function w(t,e,n,r,i,a,s,c){let l=!1,u=e[s?Object(o.g)(r):r];if(u)for(let e,o=0,h=u.length;o<h&&(e=u[o]);o++)e.info&&e.info.lastRun===n||s&&!x(r,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,r,i,a,e.info,s,c),l=!0);return l}function x(t,e){if(e){let n=e.name;return n==t||!(!e.structured||!Object(o.b)(n,t))||!(!e.wildcard||!Object(o.c)(n,t))}return!0}function z(t,e,n,r,i){let o="string"==typeof i.method?t[i.method]:i.method,a=i.property;o?o.call(t,t.__data[a],r[a]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function S(t,e,n){let r=Object(o.g)(e);if(r!==e){return M(t,Object(a.a)(r)+"-changed",n[e],e),!0}return!1}function M(t,e,n,i){let o={value:n,queueProperty:!0};i&&(o.path=i),Object(r.a)(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function C(t,e,n,r,i,a){let s=(a?Object(o.g)(e):e)!=e?e:null,c=s?Object(o.a)(t,s):t.__data[e];s&&void 0===c&&(c=n[e]),M(t,i.eventName,c,s)}function O(t,e,n,r,i){let o=t.__data[e];m.f&&(o=Object(m.f)(o,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,o)}function k(t,e,n,r,i){let o=T(t,e,n,r,i),a=i.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,o,!0):t[a]=o}function E(t,e,n,r,i,o,s){n.bindings=n.bindings||[];let c={kind:r,target:i,parts:o,literal:s,isCompound:1!==o.length};if(n.bindings.push(c),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(c)){let{event:t,negate:e}=c.parts[0];c.listenerEvent=t||Object(a.a)(i)+"-changed",c.listenerNegate=e}let l=e.nodeInfoList.length;for(let n=0;n<c.parts.length;n++){let r=c.parts[n];r.compoundIndex=n,P(t,e,c,r,l)}}function P(t,e,n,r,i){if(!r.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,a={index:i,binding:n,part:r,evaluator:t};for(let n=0;n<o.length;n++){let r=o[n];"string"==typeof r&&((r=D(r)).wildcard=!0),t._addTemplatePropertyEffect(e,r.rootProperty,{fn:H,info:a,trigger:r})}}}function H(t,e,n,r,i,a,s){let c=s[i.index],l=i.binding,u=i.part;if(a&&u.source&&e.length>u.source.length&&"property"==l.kind&&!l.isCompound&&c.__isPropertyEffectsClient&&c.__dataHasAccessor&&c.__dataHasAccessor[l.target]){let r=n[e];e=Object(o.i)(u.source,l.target,e),c._setPendingPropertyOrPath(e,r,!1,!0)&&t._enqueueClient(c)}else{!function(t,e,n,r,i){i=function(t,e,n,r){if(n.isCompound){let i=t.__dataCompoundStorage[n.target];i[r.compoundIndex]=e,e=i.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,i,n,r),m.f&&(i=Object(m.f)(i,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,i,n.target);else{let r=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?e[g.READ_ONLY]&&e[g.READ_ONLY][r]||e._setPendingProperty(r,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,i)}}(t,c,l,u,i.evaluator._evaluateBinding(t,u,e,n,r,a))}}function L(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),i=e.parts,o=new Array(i.length);for(let t=0;t<i.length;t++)o[t]=i[t].literal;let a=e.target;n[a]=o,e.literal&&"property"==e.kind&&("className"===a&&(t=Object(r.a)(t)),t[a]=e.literal)}}function A(t,e,n){if(n.listenerEvent){let r=n.parts[0];t.addEventListener(n.listenerEvent,(function(t){!function(t,e,n,r,i){let a,s=t.detail,c=s&&s.path;c?(r=Object(o.i)(n,r,c),a=s&&s.value):a=t.currentTarget[n],a=i?!a:a,e[g.READ_ONLY]&&e[g.READ_ONLY][r]||!e._setPendingPropertyOrPath(r,a,!0,Boolean(c))||s&&s.queueProperty||e._invalidateProperties()}(t,e,n.target,r.source,r.negate)}))}}function V(t,e,n,r,i,o){o=e.static||o&&("object"!=typeof o||o[e.methodName]);let a={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:o};for(let i,o=0;o<e.args.length&&(i=e.args[o]);o++)i.literal||t._addPropertyEffect(i.rootProperty,n,{fn:r,info:a,trigger:i});o&&t._addPropertyEffect(e.methodName,n,{fn:r,info:a})}function T(t,e,n,r,i){let o=t._methodHost||t,a=o[i.methodName];if(a){let r=t._marshalArgs(i.args,e,n);return a.apply(o,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const j=[],I=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function N(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function R(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:j};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let n=D(t);return n.literal||(e.static=!1),n}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function D(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},r=e[0];switch("-"===r&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=Object(o.g)(e),n.structured=Object(o.d)(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function F(t,e,n){let r=Object(o.a)(t,n);return void 0===r&&(r=e[n]),r}function Y(t,e,n,r){t.notifyPath(n+".splices",{indexSplices:r}),t.notifyPath(n+".length",e.length)}function B(t,e,n,r,i,o){Y(t,e,n,[{index:r,addedCount:i,removed:o,object:e,type:"splice"}])}const U=Object(i.a)(t=>{const e=f(Object(s.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return g}_initializeProperties(){super._initializeProperties(),q.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[g.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==g.READ_ONLY);let r=b(this,e)[t];r||(r=this[e][t]=[]),r.push(n)}_removePropertyEffect(t,e,n){let r=b(this,e)[t],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,g.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,g.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,g.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,g.COMPUTE)}_setPendingPropertyOrPath(t,e,n,r){if(r||Object(o.g)(Array.isArray(t)?t[0]:t)!==t){if(!r){let n=Object(o.a)(this,t);if(!(t=Object(o.h)(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let r=t.__dataLinkedPaths;if(r){let i;for(let a in r){let s=r[a];Object(o.c)(a,e)?(i=Object(o.i)(a,s,e),t._setPendingPropertyOrPath(i,n,!0,!0)):Object(o.c)(s,e)&&(i=Object(o.i)(s,a,e),t._setPendingPropertyOrPath(i,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||("className"===e&&(t=Object(r.a)(t)),t[e]=n)}_setPendingProperty(t,e,n){let r=this.__dataHasPaths&&Object(o.d)(t),i=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,i[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),r?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(r||this[g.NOTIFY]&&this[g.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[g.READ_ONLY]&&this[g.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,n,r){let i=t[g.COMPUTE];if(i){let o=e;for(;_(t,i,o,n,r);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),o=t.__dataPending,t.__dataPending=null}}(this,e,n,r);let i=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,n,r),this._flushClients(),_(this,this[g.REFLECT],e,n,r),_(this,this[g.OBSERVE],e,n,r),i&&function(t,e,n,r,i){let o,a,s=t[g.NOTIFY],c=v++;for(let a in e)e[a]&&(s&&w(t,s,c,a,n,r,i)?o=!0:i&&S(t,a,n)&&(o=!0));o&&(a=t.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,i,e,n,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[g.PROPAGATE]&&_(this,this[g.PROPAGATE],t,e,n);let r=this.__templateInfo;for(;r;)_(this,r.propertyEffects,t,e,n,r.nodeList),r=r.nextTemplateInfo}linkPaths(t,e){t=Object(o.f)(t),e=Object(o.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(o.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};Y(this,Object(o.a)(this,t,n),n.path,e)}get(t,e){return Object(o.a)(e||this,t)}set(t,e,n){n?Object(o.h)(n,t,e):this[g.READ_ONLY]&&this[g.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},r=Object(o.a)(this,t,n),i=r.length,a=r.push(...e);return e.length&&B(this,r,n.path,i,e.length,[]),a}pop(t){let e={path:""},n=Object(o.a)(this,t,e),r=Boolean(n.length),i=n.pop();return r&&B(this,n,e.path,n.length,0,[i]),i}splice(t,e,n,...r){let i,a={path:""},s=Object(o.a)(this,t,a);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),i=2===arguments.length?s.splice(e):s.splice(e,n,...r),(r.length||i.length)&&B(this,s,a.path,e,r.length,i),i}shift(t){let e={path:""},n=Object(o.a)(this,t,e),r=Boolean(n.length),i=n.shift();return r&&B(this,n,e.path,0,0,[i]),i}unshift(t,...e){let n={path:""},r=Object(o.a)(this,t,n),i=r.unshift(...e);return e.length&&B(this,r,n.path,0,e.length,[]),i}notifyPath(t,e){let n;if(1==arguments.length){let r={path:""};e=Object(o.a)(this,t,r),n=r.path}else n=Array.isArray(t)?Object(o.f)(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,g.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let r={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,g.OBSERVE,{fn:z,info:r,trigger:{name:t}}),n&&this._addPropertyEffect(e,g.OBSERVE,{fn:z,info:r,trigger:{name:e}})}_createMethodObserver(t,e){let n=R(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");V(this,n,g.OBSERVE,T,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,g.NOTIFY,{fn:C,info:{eventName:Object(a.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,g.REFLECT,{fn:O,info:{attrName:e}})}_createComputedProperty(t,e,n){let r=R(e);if(!r)throw new Error("Malformed computed expression '"+e+"'");V(this,r,g.COMPUTE,k,t,n)}_marshalArgs(t,e,n){const r=this.__data,i=[];for(let a=0,s=t.length;a<s;a++){let{name:s,structured:c,wildcard:l,value:u,literal:h}=t[a];if(!h)if(l){const t=Object(o.c)(s,e),i=F(r,n,t?e:s);u={path:t?e:s,value:i,base:t?Object(o.a)(r,s):i}}else u=c?F(r,n,s):r[s];i[a]=u}return i}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),r=this.__templateInfo==n;if(!r)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e&&((n=Object.create(n)).wasPreBound=r,!r&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=n,n.previousTemplateInfo=t,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let r=t.propertyEffects=t.propertyEffects||{};(r[e]=r[e]||[]).push(n)}_stampTemplate(t){q.beginHosting(this);let e=super._stampTemplate(t);q.endHosting(this);let n=this._bindTemplate(t,!0);if(n.nodeList=e.nodeList,!n.wasPreBound){let t=n.childNodes=[];for(let n=e.firstChild;n;n=n.nextSibling)t.push(n)}return e.templateInfo=n,function(t,e){let{nodeList:n,nodeInfoList:r}=e;if(r.length)for(let e=0;e<r.length;e++){let i=r[e],o=n[e],a=i.bindings;if(a)for(let e=0;e<a.length;e++){let n=a[e];L(o,n),A(o,t,n)}o.__dataHost=t}}(this,n),this.__dataReady&&_(this,n.propertyEffects,this.__data,null,!1,n.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let n=e.childNodes;for(let t=0;t<n.length;t++){let e=n[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,n,r){let i=e._parseTemplateNode.call(this,t,n,r);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,n);e&&(t.textContent=N(e)||" ",E(this,n,r,"text","textContent",e),i=!0)}return i}static _parseTemplateNodeAttribute(t,n,r,i,o){let s=this._parseBindings(o,n);if(s){let e=i,o="property";y.test(i)?o="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),o="attribute");let c=N(s);return c&&"attribute"==o&&("class"==i&&t.hasAttribute("class")&&(c+=" "+t.getAttribute(i)),t.setAttribute(i,c)),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===o&&(i=Object(a.b)(i)),E(this,n,r,o,i,s,c),!0}return e._parseTemplateNodeAttribute.call(this,t,n,r,i,o)}static _parseTemplateNestedTemplate(t,n,r){let i=e._parseTemplateNestedTemplate.call(this,t,n,r),o=r.templateInfo.hostProps;for(let t in o){E(this,n,r,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return i}static _parseBindings(t,e){let n,r=[],i=0;for(;null!==(n=I.exec(t));){n.index>i&&r.push({literal:t.slice(i,n.index)});let o=n[1][0],a=Boolean(n[2]),s=n[3].trim(),c=!1,l="",u=-1;"{"==o&&(u=s.indexOf("::"))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let h=R(s),p=[];if(h){let{args:t,methodName:n}=h;for(let e=0;e<t.length;e++){let n=t[e];n.literal||p.push(n)}let r=e.dynamicFns;(r&&r[n]||h.static)&&(p.push(n),h.dynamicFn=!0)}else p.push(s);r.push({source:s,mode:o,negate:a,customEvent:c,signature:h,dependencies:p,event:l}),i=I.lastIndex}if(i&&i<t.length){let e=t.substring(i);e&&r.push({literal:e})}return r.length?r:null}static _evaluateBinding(t,e,n,r,i,a){let s;return s=e.signature?T(t,n,r,0,e.signature):n!=e.source?Object(o.a)(t,e.source):a&&Object(o.d)(n)?Object(o.a)(t,n):t.__data[n],e.negate&&(s=!s),s}}});const q=new class{constructor(){this.stack=[]}registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},function(t,e,n){var r=n(19).f,i=n(30),o=n(14)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(36),i=n(14)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(0),i=n(41),o=n(7),a=n(112),s="["+a+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),u=function(t,e,n){var i={},s=o((function(){return!!a[t]()||"​"!="​"[t]()})),c=i[t]=s?e(h):a[t];n&&(i[n]=c),r(r.P+r.F*s,"String",i)},h=u.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(22);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class i{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function o(t){return function t(e,n){let r=n.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=r.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;r=(r=(r=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(r=n.substring(t,e.start-1))).replace(u.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);let i=e.parsedSelector=e.selector=r.trim();e.atRule=0===i.indexOf(d),e.atRule?0===i.indexOf(p)?e.type=s.MEDIA_RULE:i.match(u.keyframesRule)&&(e.type=s.KEYFRAMES_RULE,e.keyframesName=e.selector.split(u.multipleSpaces).pop()):0===i.indexOf(h)?e.type=s.MIXIN_RULE:e.type=s.STYLE_RULE}let i=e.rules;if(i)for(let e,r=0,o=i.length;r<o&&(e=i[r]);r++)t(e,n);return e}(function(t){let e=new i;e.start=0,e.end=t.length;let n=e;for(let r=0,o=t.length;r<o;r++)if(t[r]===c){n.rules||(n.rules=[]);let t=n,e=t.rules[t.rules.length-1]||null;(n=new i).start=r+1,n.parent=t,n.previous=e,t.rules.push(n)}else t[r]===l&&(n.end=r+1,n=n.parent||e);return e}(t=t.replace(u.comments,"").replace(u.port,"")),t)}function a(t,e,n=""){let r="";if(t.cssText||t.rules){let n=t.rules;if(n&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(h)}(n))for(let t,i=0,o=n.length;i<o&&(t=n[i]);i++)r=a(t,e,r);else(r=(r=e?t.cssText:function(t){return function(t){return t.replace(u.mixinApply,"").replace(u.varApply,"")}(t=function(t){return t.replace(u.customProp,"").replace(u.mixinProp,"")}(t))}(t.cssText)).trim())&&(r="  "+r+"\n")}return r&&(t.selector&&(n+=t.selector+" "+c+"\n"),n+=r,t.selector&&(n+=l+"\n\n")),n}const s={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},c="{",l="}",u={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",p="@media",d="@";var f=n(39);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const m=new Set,v="shady-unscoped";function g(t){const e=t.textContent;if(!m.has(e)){m.add(e);const n=t.cloneNode(!0);document.head.appendChild(n)}}function y(t){return t.hasAttribute(v)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function b(t,e){return t?("string"==typeof t&&(t=o(t)),e&&w(t,e),a(t,r.c)):""}function _(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=o(t.textContent)),t.__cssRules||null}function w(t,e,n,r){if(!t)return;let i=!1,o=t.type;if(r&&o===s.MEDIA_RULE){let e=t.selector.match(f.a);e&&(window.matchMedia(e[1]).matches||(i=!0))}o===s.STYLE_RULE?e(t):n&&o===s.KEYFRAMES_RULE?n(t):o===s.MIXIN_RULE&&(i=!0);let a=t.rules;if(a&&!i)for(let t,i=0,o=a.length;i<o&&(t=a[i]);i++)w(t,e,n,r)}function x(t,e){let n=0;for(let r=e,i=t.length;r<i;r++)if("("===t[r])n++;else if(")"===t[r]&&0==--n)return r;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;const z="css-build";function S(t){if(void 0!==r.a)return r.a;if(void 0===t.__cssBuild){const e=t.getAttribute(z);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===z)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function M(t){return""!==S(t)}var C=n(48);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const O=/;\s*/m,k=/^\s*(initial)|(inherit)\s*$/,E=/\s*!important/,P="_-_";class H{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let L=null;class A{constructor(){this._currentElement=null,this._measureElement=null,this._map=new H}detectMixin(t){return Object(C.a)(t)}gatherStyles(t){const e=function(t){const e=[],n=t.querySelectorAll("style");for(let t=0;t<n.length;t++){const i=n[t];y(i)?r.d||(g(i),i.parentNode.removeChild(i)):(e.push(i.textContent),i.parentNode.removeChild(i))}return e.join("").trim()}(t.content);if(e){const n=document.createElement("style");return n.textContent=e,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,e):null}transformStyle(t,e=""){let n=_(t);return this.transformRules(n,e),t.textContent=b(n),n}transformCustomStyle(t){let e=_(t);return w(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=b(e),e}transformRules(t,e){this._currentElement=e,w(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(f.c,(t,n,r,i)=>this._produceCssProperties(t,n,r,i,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const n={};let r=!1;return w(e,e=>{(r=r||e===t)||e.selector===t.selector&&Object.assign(n,this._cssTextToMap(e.parsedCssText))}),n}_consumeCssProperties(t,e){let n=null;for(;n=f.b.exec(t);){let r=n[0],i=n[1],o=n.index,a=o+r.indexOf("@apply"),s=o+r.length,c=t.slice(0,a),l=t.slice(s),u=e?this._fallbacksFromPreviousRules(e):{};Object.assign(u,this._cssTextToMap(c));let h=this._atApplyToCssProperties(i,u);t=`${c}${h}${l}`,f.b.lastIndex=o+h.length}return t}_atApplyToCssProperties(t,e){t=t.replace(O,"");let n=[],r=this._map.get(t);if(r||(this._map.set(t,{}),r=this._map.get(t)),r){let i,o,a;this._currentElement&&(r.dependants[this._currentElement]=!0);const s=r.properties;for(i in s)a=e&&e[i],o=[i,": var(",t,P,i],a&&o.push(",",a.replace(E,"")),o.push(")"),E.test(s[i])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,e){let n=k.exec(e);return n&&(e=n[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let n,r,i=t.split(";"),o={};for(let t,a,s=0;s<i.length;s++)(t=i[s])&&(a=t.split(":")).length>1&&(n=a[0].trim(),r=a.slice(1).join(":"),e&&(r=this._replaceInitialOrInherit(n,r)),o[n]=r);return o}_invalidateMixinEntry(t){if(L)for(let e in t.dependants)e!==this._currentElement&&L(e)}_produceCssProperties(t,e,n,r,i){if(n&&function t(e,n){let r=e.indexOf("var(");if(-1===r)return n(e,"","","");let i=x(e,r+3),o=e.substring(r+4,i),a=e.substring(0,r),s=t(e.substring(i+1),n),c=o.indexOf(",");return-1===c?n(a,o.trim(),"",s):n(a,o.substring(0,c).trim(),o.substring(c+1).trim(),s)}(n,(t,e)=>{e&&this._map.get(e)&&(r=`@apply ${e};`)}),!r)return t;let o=this._consumeCssProperties(""+r,i),a=t.slice(0,t.indexOf("--")),s=this._cssTextToMap(o,!0),c=s,l=this._map.get(e),u=l&&l.properties;u?c=Object.assign(Object.create(u),s):this._map.set(e,c);let h,p,d=[],f=!1;for(h in c)void 0===(p=s[h])&&(p="initial"),!u||h in u||(f=!0),d.push(`${e}${P}${h}: ${p}`);return f&&this._invalidateMixinEntry(l),l&&(l.properties=c),n&&(a=`${t};${a}`),`${a}${d.join("; ")};`}}A.prototype.detectMixin=A.prototype.detectMixin,A.prototype.transformStyle=A.prototype.transformStyle,A.prototype.transformCustomStyle=A.prototype.transformCustomStyle,A.prototype.transformRules=A.prototype.transformRules,A.prototype.transformRule=A.prototype.transformRule,A.prototype.transformTemplate=A.prototype.transformTemplate,A.prototype._separator=P,Object.defineProperty(A.prototype,"invalidCallback",{get:()=>L,set(t){L=t}});var V=A;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var T={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const j="_applyShimCurrentVersion",I="_applyShimNextVersion",N="_applyShimValidatingVersion",R=Promise.resolve();function D(t){let e=T[t];e&&function(t){t[j]=t[j]||0,t[N]=t[N]||0,t[I]=(t[I]||0)+1}(e)}function F(t){return t[j]===t[I]}function Y(t){return!F(t)&&t[N]===t[I]}function B(t){t[N]=t[I],t._validating||(t._validating=!0,R.then((function(){t[j]=t[I],t._validating=!1})))}n(136);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const U=new V;class q{constructor(){this.customStyleInterface=null,U.invalidCallback=D}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{U.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),M(t))return;T[e]=t;let n=U.transformTemplate(t,e);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let n=t[e],r=this.customStyleInterface.getStyleForCustomStyle(n);r&&U.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(C.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,n="",r="";return e?e.indexOf("-")>-1?n=e:(r=e,n=t.getAttribute&&t.getAttribute("is")||""):(n=t.is,r=t.extends),{is:n,typeExtension:r}}(t),n=T[e];if((!n||!M(n))&&n&&!F(n)){Y(n)||(this.prepareTemplate(n,e),B(n));let r=t.shadowRoot;if(r){let t=r.querySelector("style");t&&(t.__cssRules=n._styleAst,t.textContent=b(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new q;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,n,r){t.flushCustomStyles(),t.prepareTemplate(e,n)},prepareTemplateStyles(t,e,n){window.ShadyCSS.prepareTemplate(t,e,n)},prepareTemplateDom(t,e){},styleSubtree(e,n){t.flushCustomStyles(),t.styleSubtree(e,n)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(C.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:r.c,nativeShadow:r.d,cssBuild:r.a,disableRuntime:r.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=U;var $=n(66),K=n(102),W=n(100),J=n(17);
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
const G=/:host\(:dir\((ltr|rtl)\)\)/g,X=':host([dir="$1"])',Z=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Q=':host([dir="$2"]) $1',tt=/:dir\((?:ltr|rtl)\)/,et=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),nt=[];let rt=null,it="";function ot(){it=document.documentElement.getAttribute("dir")}function at(t){if(!t.__autoDirOptOut){t.setAttribute("dir",it)}}function st(){ot(),it=document.documentElement.getAttribute("dir");for(let t=0;t<nt.length;t++)at(nt[t])}const ct=Object(J.a)(t=>{et||rt||(ot(),(rt=new MutationObserver(st)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(W.a)(t);class n extends e{static _processStyleText(t,n){return t=e._processStyleText.call(this,t,n),!et&&tt.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=(e=e.replace(G,X)).replace(Z,Q)}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(rt&&rt.takeRecords().length&&st(),nt.push(this),at(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=nt.indexOf(this);t>-1&&nt.splice(t,1)}}}return n.__activateDir=!1,n});n(12);
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
function lt(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?lt():window.addEventListener("DOMContentLoaded",lt);var ut=n(8),ht=n(82),pt=n(28),dt=n(21),ft=n(2),mt=n(1);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const vt=window.ShadyDOM,gt=window.ShadyCSS;function yt(t,e){return Object(mt.a)(t).getRootNode()===e}n.d(e,"a",(function(){return _t}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let bt=window.ShadyCSS;const _t=Object(J.a)(t=>{const e=ct(Object(K.a)(Object($.a)(t))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,n,r){e!==n&&(super.attributeChangedCallback(t,e,n,r),this.attributeChanged(t,e,n))}attributeChanged(t,e,n){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,n){this._propertyToAttribute(t,e,n)}serializeValueToAttribute(t,e,n){this._valueToNodeAttribute(n||this,t,e)}extend(t,e){if(!t||!e)return t||e;let n=Object.getOwnPropertyNames(e);for(let r,i=0;i<n.length&&(r=n[i]);i++){let n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n)}return t}mixin(t,e){for(let n in e)t[n]=e[n];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,n){n=n||{},e=null==e?{}:e;let r=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});r.detail=e;let i=n.node||this;return Object(mt.a)(i).dispatchEvent(r),r}listen(t,e,n){t=t||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),i=r.get(t);i||(i={},r.set(t,i));let o=e+n;i[o]||(i[o]=this._addMethodEventListenerToNode(t,e,n,this))}unlisten(t,e,n){t=t||this;let r=this.__boundListeners&&this.__boundListeners.get(t),i=e+n,o=r&&r[i];o&&(this._removeEventListenerFromNode(t,e,o),r[i]=null)}setScrollDirection(t,e){Object(ht.c)(e||this,n[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(mt.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(ut.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(ut.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(ut.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let n,r=0;n=t[r];r++)n.nodeType!==Node.COMMENT_NODE&&e.push(n.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(ut.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(mt.a)(this).contains(t)&&Object(mt.a)(this).getRootNode()===Object(mt.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(mt.a)(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!vt||!gt)return null;if(!vt.handlesDynamicScoping)return null;const n=gt.ScopingShim;if(!n)return null;const r=n.scopeForNode(t),i=Object(mt.a)(t).getRootNode(),o=t=>{if(!yt(t,i))return;const e=Array.from(vt.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const o=e[t];if(!yt(o,i))continue;const a=n.currentScopeForNode(o);a!==r&&(""!==a&&n.unscopeNode(o,a),n.scopeNode(o,r))}};if(o(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const n=t[e];for(let t=0;t<n.addedNodes.length;t++){const e=n.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&o(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return bt.getComputedStyleValue(this,t)}debounce(t,e,n){return this._debouncers=this._debouncers||{},this._debouncers[t]=pt.a.debounce(this._debouncers[t],n>0?dt.b.after(n):dt.a,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?dt.b.run(t.bind(this),e):~dt.a.run(t.bind(this))}cancelAsync(t){t<0?dt.a.cancel(~t):dt.b.cancel(t)}create(t,e){let n=document.createElement(t);if(e)if(n.setProperties)n.setProperties(e);else for(let t in e)n[t]=e[t];return n}elementMatches(t,e){return Object(ut.c)(e||this,t)}toggleAttribute(t,e){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(e=!n.hasAttribute(t)),e?(Object(mt.a)(n).setAttribute(t,""),!0):(Object(mt.a)(n).removeAttribute(t),!1)}toggleClass(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?n.classList.add(t):n.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,n,r){r=r||this,this.transform("translate3d("+t+","+e+","+n+")",r)}arrayDelete(t,e){let n;if(Array.isArray(t)){if((n=t.indexOf(e))>=0)return t.splice(n,1)}else{if((n=Object(ft.a)(this,t).indexOf(e))>=0)return this.splice(t,n,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return r.prototype.is="",r})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return v}));var r=n(4),i=n.n(r),o=n(15),a=n(29),s="https://ecommerce-pwa.herokuapp.com",c=document.getElementById("number-of-cart-items"),l=document.getElementById("cart-items-container"),u=function t(e,n){var r,c,l,u;return i.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(r=JSON.parse(e.target.getAttribute("data-item")),c=r.name,r.price,r.image,navigator.onLine&&!n){p.next=9;break}if(a.c){p.next=6;break}return p.next=6,i.a.awrap(Object(a.b)());case 6:Object(a.a)("toAdd",r).then((function(){navigator.onLine?n&&Object(o.a)("There was an error while syncing with the database. ".concat(c," has been saved for later checkout! 🎊🛒")):Object(o.a)("You are offline, but ".concat(c," has been saved for later checkout! 🎊🛒")),h(r),m()})).catch((function(t){t.target&&"Key already exists in the object store."===t.target.error.message&&Object(o.a)("".concat(c," is already in your cart!"))})),p.next=30;break;case 9:return p.prev=9,p.next=12,i.a.awrap(fetch("".concat(s,"/cart"),{method:"POST",body:JSON.stringify({items:[r]}),headers:{"Content-Type":"application/json"}}));case 12:return l=p.sent,p.next=15,i.a.awrap(l.json());case 15:if(u=p.sent,console.log("TCL: addToCart -> totalCartItems",u),200!==l.status){p.next=23;break}h(r),m(u),Object(o.a)("".concat(c," has been added to your cart! 🎊🛒")),p.next=24;break;case 23:throw new Error("Request [POST] to [/cart] returned status [".concat(l.status,"]"));case 24:p.next=30;break;case 26:p.prev=26,p.t0=p.catch(9),console.warn("addToCart -> error",p.t0),t(e,!0);case 30:case"end":return p.stop()}}),null,null,[[9,26]])};window.deleteItemFromCart=function t(e,n){var r,c,l;return i.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(r=e.name,e.image,e.price,navigator.onLine&&!n){u.next=12;break}if(a.c){u.next=5;break}return u.next=5,i.a.awrap(Object(a.b)());case 5:Object(a.a)("toRemove",e).catch((function(t){console.log("TCL: window.deleteItemFromCart -> error",t)})),p(e.name),m(),Object(o.a)("".concat(e.name," has been removed from your cart! 🗑🛒")),Object(a.e)("toAdd",e),u.next=30;break;case 12:return u.prev=12,u.next=15,i.a.awrap(fetch("".concat(s,"/cart"),{method:"DELETE",body:JSON.stringify({items:[e]}),headers:{"Content-Type":"application/json"}}));case 15:return c=u.sent,u.next=18,i.a.awrap(c.json());case 18:if(l=u.sent,200===c.status){u.next=21;break}throw new Error("Request [DELETE] to [/cart] returned status [".concat(c.status,"]"));case 21:p(r),m(l),Object(o.a)("".concat(r," has been removed from your cart! 🗑🛒")),u.next=30;break;case 26:u.prev=26,u.t0=u.catch(12),console.warn("deleteItemFromCart -> error",u.t0),t(e,!0);case 30:case"end":return u.stop()}}),null,null,[[12,26]])};var h=function(t){var e=' <paper-icon-item id="shopping-cart-item-'.concat(t.name.split(" ").join("_"),'">\n        <div class="avatar" style="background-image: url(./img/products/').concat(t.image,')" slot="item-icon"></div>\n        <paper-item-body two-line>\n            <div>').concat(t.name,"</div>\n            <div secondary>").concat(t.price,"</div>\n        </paper-item-body>\n        <paper-icon-button onclick='deleteItemFromCart(").concat(JSON.stringify(t).toString(),')\' icon="delete" alt="remove item from shopping cart"></paper-icon-button>\n    </paper-icon-item>');document.getElementById("cart-items").innerHTML+=e},p=function(t){document.querySelector("[id$=".concat(t.split(" ").join("_"),"]")).remove()},d=function(){document.getElementById("cart-items").innerHTML="",m(0)},f=function t(e){var n,r,o;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(navigator.onLine&&!e){c.next=11;break}if(a.c){c.next=4;break}return c.next=4,i.a.awrap(Object(a.b)());case 4:return c.next=6,i.a.awrap(Object(a.d)("toAdd"));case 6:n=c.sent,m(n.length),n.map((function(t){h(t)})),c.next=27;break;case 11:return c.prev=11,c.next=14,i.a.awrap(fetch("".concat(s,"/cart"),{method:"GET"}));case 14:return r=c.sent,c.next=17,i.a.awrap(r.json());case 17:o=c.sent,m(o.length),o.map((function(t){h(t)})),c.next=27;break;case 22:c.prev=22,c.t0=c.catch(11),console.log("TCL: error",c.t0),console.warn("initialiseNumberOfCartItems -> Reuqest [GET] to /cart failed - error [".concat(c.t0,"] - Initialising IndexDB...")),t(!0);case 27:case"end":return c.stop()}}),null,null,[[11,22]])},m=function(t){0===(t=void 0!==t?t:document.querySelectorAll("[id^=shopping-cart-item-]").length)?c.hidden=!0:(c.innerText=t,c.hidden=!1)},v=function(t){"boolean"==typeof t?t?l.classList.add("show"):l.classList.remove("show"):l.classList.toggle("show")}},function(t,e,n){var r=n(34),i=n(6),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(49)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(36);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";var r=n(3);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(3),i=n(24),o=n(14)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[o])?e:i(n)}},function(t,e,n){"use strict";n(11),n(175);
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
const r=n(5).a`
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
</custom-style>`;r.setAttribute("style","display: none;"),document.head.appendChild(r.content)},function(t,e,n){"use strict";n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return m}));var r=n(81),i=n(23);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o="link[rel=import][type~=css]",a="include",s="shady-unscoped";function c(t){return r.a.import(t)}function l(t){let e=t.body?t.body:t;const n=Object(i.b)(e.textContent,t.baseURI),r=document.createElement("style");return r.textContent=n,r}function u(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...h(e[t]));return n}function h(t){const e=c(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...f(e));const n=e.querySelector("template");n&&t.push(...p(n,e.assetpath)),e._styles=t}return e._styles}function p(t,e){if(!t._styles){const n=[],r=t.content.querySelectorAll("style");for(let t=0;t<r.length;t++){let o=r[t],s=o.getAttribute(a);s&&n.push(...u(s).filter((function(t,e,n){return n.indexOf(t)===e}))),e&&(o.textContent=Object(i.b)(o.textContent,e)),n.push(o)}t._styles=n}return t._styles}function d(t){let e=c(t);return e?f(e):[]}function f(t){const e=[],n=t.querySelectorAll(o);for(let t=0;t<n.length;t++){let r=n[t];if(r.import){const t=r.import,n=r.hasAttribute(s);if(n&&!t._unscopedStyle){const e=l(t);e.setAttribute(s,""),t._unscopedStyle=e}else t._style||(t._style=l(t));e.push(n?t._unscopedStyle:t._style)}}return e}function m(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=v(e[t]);return n}function v(t){let e=c(t);if(e&&void 0===e._cssText){let t=g(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const r=p(t,e);for(let t=0;t<r.length;t++){let e=r[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function g(t){let e="",n=f(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(12);var r=n(23),i=n(10);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o={},a={};function s(t,e){o[t]=a[t.toLowerCase()]=e}function c(t){return o[t]||a[t.toLowerCase()]}class l extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=c(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,r){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(r.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(r.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(i.g&&void 0!==c(t))throw s(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,s(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}l.prototype.modules=o,customElements.define("dom-module",l)},function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return I})),n.d(e,"c",(function(){return R}));n(12);var r=n(21),i=n(28),o=n(10),a=n(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let s="string"==typeof document.head.style.touchAction,c="__polymerGestures",l="__polymerGesturesHandled",u="__polymerGesturesTouchAction",h=25,p=5,d=2500,f=["mousedown","mousemove","mouseup","click"],m=[0,1,4,2],v=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function g(t){return f.indexOf(t)>-1}let y=!1;function b(t){if(!g(t)&&"touchend"!==t)return s&&y&&o.d?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){y=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let _=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const w=[],x={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},z={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function S(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let r=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<r.length;t++)e.push(r[t])}}return e}let M=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[l]={skip:!0},"click"===t.type)){let e=!1,r=H(t);for(let t=0;t<r.length;t++){if(r[t].nodeType===Node.ELEMENT_NODE)if("label"===r[t].localName)w.push(r[t]);else if(n=r[t],x[n.localName]){let n=S(r[t]);for(let t=0;t<n.length;t++)e=e||w.indexOf(n[t])>-1}if(r[t]===k.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function C(t){let e=_?["click"]:f;for(let n,r=0;r<e.length;r++)n=e[r],t?(w.length=0,document.addEventListener(n,M,!0)):document.removeEventListener(n,M,!0)}function O(t){let e=t.type;if(!g(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!v&&(e=m[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let k={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function E(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function P(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}o.b&&document.addEventListener("touchend",(function(t){if(!o.b)return;k.mouse.mouseIgnoreJob||C(!0),k.mouse.target=H(t)[0],k.mouse.mouseIgnoreJob=i.a.debounce(k.mouse.mouseIgnoreJob,r.b.after(d),(function(){C(),k.mouse.target=null,k.mouse.mouseIgnoreJob=null}))}),!!y&&{passive:!0});const H=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],L={},A=[];function V(t){const e=H(t);return e.length>0?e[0]:t.target}function T(t){let e,n=t.type,r=t.currentTarget[c];if(!r)return;let i=r[n];if(i){if(!t[l]&&(t[l]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(k.touch.id=e.identifier),k.touch.id!==e.identifier)return;s||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)k.touch.x=e.clientX,k.touch.y=e.clientY,k.touch.scrollDecided=!1;else if("touchmove"===n){if(k.touch.scrollDecided)return;k.touch.scrollDecided=!0;let n=function(t){let e="auto",n=H(t);for(let t,r=0;r<n.length;r++)if((t=n[r])[u]){e=t[u];break}return e}(t),r=!1,i=Math.abs(k.touch.x-e.clientX),o=Math.abs(k.touch.y-e.clientY);t.cancelable&&("none"===n?r=!0:"pan-x"===n?r=o>i:"pan-y"===n&&(r=i>o)),r?t.preventDefault():F("track")}}(t)}if(!(e=t[l]).skip){for(let n,r=0;r<A.length;r++)i[(n=A[r]).name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let r,o=0;o<A.length;o++)i[(r=A[o]).name]&&!e[r.name]&&(e[r.name]=!0,r[n](t))}}}function j(t,e,n){return!!L[e]&&(function(t,e,n){let r=L[e],i=r.deps,o=r.name,a=t[c];a||(t[c]=a={});for(let e,n,r=0;r<i.length;r++)e=i[r],_&&g(e)&&"click"!==e||((n=a[e])||(a[e]=n={_count:0}),0===n._count&&t.addEventListener(e,T,b(e)),n[o]=(n[o]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),r.touchAction&&R(t,r.touchAction)}(t,e,n),!0)}function I(t,e,n){return!!L[e]&&(function(t,e,n){let r=L[e],i=r.deps,o=r.name,a=t[c];if(a)for(let e,n,r=0;r<i.length;r++)e=i[r],(n=a[e])&&n[o]&&(n[o]=(n[o]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,T,b(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function N(t){A.push(t);for(let e=0;e<t.emits.length;e++)L[t.emits[e]]=t}function R(t,e){s&&t instanceof HTMLElement&&r.a.run(()=>{t.style.touchAction=e}),t[u]=e}function D(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=n,Object(a.a)(t).dispatchEvent(r),r.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function F(t){let e=function(t){for(let e,n=0;n<A.length;n++){e=A[n];for(let n,r=0;r<e.emits.length;r++)if((n=e.emits[r])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Y(t,e,n,r){e&&D(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:r,prevent:function(t){return F(t)}})}function B(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let r=Math.abs(t.x-e),i=Math.abs(t.y-n);return r>=p||i>=p}function U(t,e,n){if(!e)return;let r,i=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],a=o.x-t.x,s=o.y-t.y,c=0;i&&(r=o.x-i.x,c=o.y-i.y),D(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:a,dy:s,ddx:r,ddy:c,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),r=n;for(;r&&r.shadowRoot&&!window.ShadyDOM;){if(r===(r=r.shadowRoot.elementFromPoint(t,e)))break;r&&(n=r)}return n}(n.clientX,n.clientY)}})}function q(t,e,n){let r=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),o=V(n||e);!o||z[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(i)||r<=h&&i<=h||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=V(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),r=t.pageX,i=t.pageY;return!(r>=n.left&&r<=n.right&&i>=n.top&&i<=n.bottom)}return!1}(e))&&(t.prevent||D(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}N({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){P(this.info)},mousedown:function(t){if(!O(t))return;let e=V(t),n=this;E(this.info,(function(t){O(t)||(Y("up",e,t),P(n.info))}),(function(t){O(t)&&Y("up",e,t),P(n.info)})),Y("down",e,t)},touchstart:function(t){Y("down",V(t),t.changedTouches[0],t)},touchend:function(t){Y("up",V(t),t.changedTouches[0],t)}}),N({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,P(this.info)},mousedown:function(t){if(!O(t))return;let e=V(t),n=this,r=function(t){let r=t.clientX,i=t.clientY;B(n.info,r,i)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&F("tap"),n.info.addMove({x:r,y:i}),O(t)||(n.info.state="end",P(n.info)),e&&U(n.info,e,t),n.info.started=!0)};E(this.info,r,(function(t){n.info.started&&r(t),P(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=V(t),n=t.changedTouches[0],r=n.clientX,i=n.clientY;B(this.info,r,i)&&("start"===this.info.state&&F("tap"),this.info.addMove({x:r,y:i}),U(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=V(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),U(this.info,e,n))}}),N({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){O(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){O(t)&&q(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){q(this.info,t.changedTouches[0],t)}})},function(t,e,n){"use strict";n(11);var r=n(104),i=n(13),o=n(8),a=n(5),s={distance:function(t,e,n,r){var i=t-n,o=e-r;return Math.sqrt(i*i+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function c(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function l(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),Object(o.a)(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}c.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var n=s.distance(t,e,0,0),r=s.distance(t,e,this.width,0),i=s.distance(t,e,0,this.height),o=s.distance(t,e,this.width,this.height);return Math.max(n,r,i,o)}},l.MAX_RADIUS=300,l.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=s.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?s.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,n=1.1*Math.min(Math.sqrt(t+e),l.MAX_RADIUS)+5,r=1.1-n/l.MAX_RADIUS*.2,i=this.mouseInteractionSeconds/r,o=n*(1-Math.pow(80,-i));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=.3*this.mouseUpElapsedSeconds,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,l.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,l.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new c(this.element)},draw:function(){var t,e,n;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,n=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+n+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+n+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,n=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=s.now(),this.center?(this.xStart=e,this.yStart=n,this.slideDistance=s.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=n,this.slideDistance=s.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=s.now())},remove:function(){Object(o.a)(this.waveContainer.parentNode).removeChild(this.waveContainer)}},Object(i.a)({_template:a.a`
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
`,is:"paper-ripple",behaviors:[r.a],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=Object(o.a)(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(t),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach((function(e){e.upAction(t)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var t=new l(this);return Object(o.a)(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)(e=this.ripples[t]).draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){void 0!==e&&(t?this.downAction():this.upAction())}});var u=n(44);n.d(e,"a",(function(){return h}));
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
const h={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){u.b._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var e=this._rippleContainer||this.root;if(e&&Object(o.a)(e).appendChild(this._ripple),t){var n=Object(o.a)(this._rippleContainer||this),r=Object(o.a)(t).rootTarget;n.deepContains(r)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(31),i=n(16),o=n(57);t.exports=function(t){return function(e,n,a){var s,c=r(e),l=i(c.length),u=o(a,l);if(t&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(36);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(37),i=n(41);t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536}}},function(t,e,n){var r=n(9),i=n(36),o=n(14)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){var r=n(14)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(69),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e,n){"use strict";n(158);var r=n(26),i=n(25),o=n(7),a=n(41),s=n(14),c=n(127),l=s("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=s(t),d=!o((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),f=d?!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!e})):void 0;if(!d||!f||"replace"===t&&!u||"split"===t&&!h){var m=/./[p],v=n(a,p,""[t],(function(t,e,n,r,i){return e.exec===c?d&&!i?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=v[0],y=v[1];r(String.prototype,t,g),i(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},function(t,e,n){var r=n(6).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){"use strict";var r=n(6),i=n(0),o=n(26),a=n(63),s=n(50),c=n(62),l=n(61),u=n(9),h=n(7),p=n(90),d=n(68),f=n(113);t.exports=function(t,e,n,m,v,g){var y=r[t],b=y,_=v?"set":"add",w=b&&b.prototype,x={},z=function(t){var e=w[t];o(w,t,"delete"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof b&&(g||w.forEach&&!h((function(){(new b).entries().next()})))){var S=new b,M=S[_](g?{}:-0,1)!=S,C=h((function(){S.has(1)})),O=p((function(t){new b(t)})),k=!g&&h((function(){for(var t=new b,e=5;e--;)t[_](e,e);return!t.has(-0)}));O||((b=e((function(e,n){l(e,b,t);var r=f(new y,e,b);return null!=n&&c(n,v,r[_],r),r}))).prototype=w,w.constructor=b),(C||k)&&(z("delete"),z("has"),v&&z("get")),(k||M)&&z(_),g&&w.clear&&delete w.clear}else b=m.getConstructor(e,t,v,_),a(b.prototype,n),s.NEED=!0;return d(b,t),x[t]=b,i(i.G+i.W+i.F*(b!=y),x),g||m.setStrong(b,t,v),b}},function(t,e,n){for(var r,i=n(6),o=n(25),a=n(55),s=a("typed_array"),c=a("view"),l=!(!i.ArrayBuffer||!i.DataView),u=l,h=0,p="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");h<9;)(r=i[p[h++]])?(o(r.prototype,s,!0),o(r.prototype,c,!0)):u=!1;t.exports={ABV:l,CONSTR:u,TYPED:s,VIEW:c}},function(t,e,n){"use strict";t.exports=n(49)||!n(7)((function(){var t=Math.random();__defineSetter__.call(null,t,(function(){})),delete n(6)[t]}))},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},function(t,e,n){"use strict";var r=n(0),i=n(24),o=n(35),a=n(62);t.exports=function(t){r(r.S,t,{from:function(t){var e,n,r,s,c=arguments[1];return i(this),(e=void 0!==c)&&i(c),null==t?new this:(n=[],e?(r=0,s=o(c,arguments[2],2),a(t,!1,(function(t){n.push(s(t,r++))}))):a(t,!1,n.push,n),new this(n))}})}},function(t,e,n){"use strict";n(11);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/if(!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}
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
const r=n(5).a`<custom-style>
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
</custom-style>`;r.setAttribute("style","display: none;"),document.head.appendChild(r.content)},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(12);var r=n(17),i=n(53),o=n(101);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const a={};let s=HTMLElement.prototype;for(;s;){let t=Object.getOwnPropertyNames(s);for(let e=0;e<t.length;e++)a[t[e]]=!0;s=Object.getPrototypeOf(s)}const c=Object(r.a)(t=>{const e=Object(o.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(i.b)(t[e]))}static attributeNameForProperty(t){return Object(i.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!a[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(12);var r=n(17),i=n(21),o=n(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const a=i.a,s=Object(r.a)(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let r=this.__data[t],i=this._shouldPropertyChange(t,e,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=r),this.__data[t]=e,this.__dataPending[t]=e),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,a.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n))}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,r){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,r)}_attributeToProperty(t,e,n){if(!this.__serializing){const r=this.__dataAttributes,i=r&&r[t]||t;this[i]=this._deserializeValue(e,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const r=this._serializeValue(e);"class"!==n&&"name"!==n&&"slot"!==n||(t=Object(o.a)(t)),void 0===r?t.removeAttribute(n):t.setAttribute(n,r)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(12);var r=n(17),i=n(82);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=Object(r.a)(t=>{return class extends t{_addEventListenerToNode(t,e,n){Object(i.a)(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Object(i.b)(t,e,n)||super._removeEventListenerFromNode(t,e,n)}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(12);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e,n){return{index:t,removed:e,addedCount:n}}const i=0,o=1,a=2,s=3;function c(t,e,n,c,l,h){let p,d=0,f=0,m=Math.min(n-e,h-l);if(0==e&&0==l&&(d=function(t,e,n){for(let r=0;r<n;r++)if(!u(t[r],e[r]))return r;return n}(t,c,m)),n==t.length&&h==c.length&&(f=function(t,e,n){let r=t.length,i=e.length,o=0;for(;o<n&&u(t[--r],e[--i]);)o++;return o}(t,c,m-d)),l+=d,h-=f,(n-=f)-(e+=d)==0&&h-l==0)return[];if(e==n){for(p=r(e,[],0);l<h;)p.removed.push(c[l++]);return[p]}if(l==h)return[r(e,[],n-e)];let v=function(t){let e=t.length-1,n=t[0].length-1,r=t[e][n],c=[];for(;e>0||n>0;){if(0==e){c.push(a),n--;continue}if(0==n){c.push(s),e--;continue}let l,u=t[e-1][n-1],h=t[e-1][n],p=t[e][n-1];(l=h<p?h<u?h:u:p<u?p:u)==u?(u==r?c.push(i):(c.push(o),r=u),e--,n--):l==h?(c.push(s),e--,r=h):(c.push(a),n--,r=p)}return c.reverse(),c}(function(t,e,n,r,i,o){let a=o-i+1,s=n-e+1,c=new Array(a);for(let t=0;t<a;t++)c[t]=new Array(s),c[t][0]=t;for(let t=0;t<s;t++)c[0][t]=t;for(let n=1;n<a;n++)for(let o=1;o<s;o++)if(u(t[e+o-1],r[i+n-1]))c[n][o]=c[n-1][o-1];else{let t=c[n-1][o]+1,e=c[n][o-1]+1;c[n][o]=t<e?t:e}return c}(t,e,n,c,l,h));p=void 0;let g=[],y=e,b=l;for(let t=0;t<v.length;t++)switch(v[t]){case i:p&&(g.push(p),p=void 0),y++,b++;break;case o:p||(p=r(y,[],0)),p.addedCount++,y++,p.removed.push(c[b]),b++;break;case a:p||(p=r(y,[],0)),p.addedCount++,y++;break;case s:p||(p=r(y,[],0)),p.removed.push(c[b]),b++}return p&&g.push(p),g}function l(t,e){return c(t,0,t.length,e,0,e.length)}function u(t,e){return t===e}},function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));n(11);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var r={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},i={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},o={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},a=/[a-z0-9*]/,s=/U\+/,c=/^arrow/,l=/^space(bar)?/,u=/^escape$/;function h(t,e){var n="";if(t){var r=t.toLowerCase();" "===r||l.test(r)?n="space":u.test(r)?n="esc":1==r.length?e&&!a.test(r)||(n=r):n=c.test(r)?r.replace("arrow",""):"multiply"==r?"*":r}return n}function p(t,e){return t.key?h(t.key,e):t.detail&&t.detail.key?h(t.detail.key,e):(n=t.keyIdentifier,o="",n&&(n in r?o=r[n]:s.test(n)?(n=parseInt(n.replace("U+","0x"),16),o=String.fromCharCode(n).toLowerCase()):o=n.toLowerCase()),o||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):i[t]),e}(t.keyCode)||"");var n,o}function d(t,e){return p(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function f(t){return t.trim().split(" ").map((function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce((function(t,e){var n=e.split(":"),r=n[0],i=n[1];return r in o?(t[o[r]]=!0,t.hasModifiers=!0):(t.key=r,t.event=i||"keydown"),t}),{combo:t.split(":").shift()})}(t)}))}const m={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var n=f(e),r=0;r<n.length;++r)if(d(n[r],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map((function(t){return t.keyBindings}));return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach((function(t){for(var e in t)this._addKeyBinding(e,t[e])}),this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort((function(t,e){var n=t[0].hasModifiers;return n===e[0].hasModifiers?0:n?-1:1}))},_addKeyBinding:function(t,e){f(t).forEach((function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(t){var e=this._keyBindings[t],n=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,n]),this.keyEventTarget.addEventListener(t,n)}),this)},_unlistenKeyEventListeners:function(){for(var t,e,n,r;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],n=t[1],r=t[2],e.removeEventListener(n,r)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var n=0;n<t.length;n++){var r=t[n][0],i=t[n][1];if(d(r,e)&&(this._triggerKeyHandler(r,i,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,n){var r=Object.create(t);r.keyboardEvent=n;var i=new CustomEvent(t.event,{detail:r,cancelable:!0});this[e].call(this,i),i.defaultPrevented&&n.preventDefault()}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(11);var r=n(44),i=n(65);
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
const o=[r.a,i.a,{hostAttributes:{role:"option",tabindex:"0"}}]},function(t,e,n){var r=n(9),i=n(6).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(6),i=n(34),o=n(49),a=n(140),s=n(19).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){var r=n(74)("keys"),i=n(55);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(6).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(9),i=n(3),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(35)(Function.call,n(32).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var r=n(9),i=n(111).set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){"use strict";var r=n(37),i=n(41);t.exports=function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},function(t,e,n){"use strict";var r=n(49),i=n(0),o=n(26),a=n(25),s=n(71),c=n(118),l=n(68),u=n(33),h=n(14)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,f,m,v,g){c(n,e,f);var y,b,_,w=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",z="values"==m,S=!1,M=t.prototype,C=M[h]||M["@@iterator"]||m&&M[m],O=C||w(m),k=m?z?w("entries"):O:void 0,E="Array"==e&&M.entries||C;if(E&&(_=u(E.call(new t)))!==Object.prototype&&_.next&&(l(_,x,!0),r||"function"==typeof _[h]||a(_,h,d)),z&&C&&"values"!==C.name&&(S=!0,O=function(){return C.call(this)}),r&&!g||!p&&!S&&M[h]||a(M,h,O),s[e]=O,s[x]=d,m)if(y={values:z?O:w("values"),keys:v?O:w("keys"),entries:k},g)for(b in y)b in M||o(M,b,y[b]);else i(i.P+i.F*(p||S),e,y);return y}},function(t,e,n){"use strict";var r=n(58),i=n(54),o=n(68),a={};n(25)(a,n(14)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(89),i=n(41);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},function(t,e,n){var r=n(14)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){var r=n(71),i=n(14)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(19),i=n(54);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(69),i=n(14)("iterator"),o=n(71);t.exports=n(34).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(275);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){"use strict";var r=n(20),i=n(57),o=n(16);t.exports=function(t){for(var e=r(this),n=o(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,l=void 0===c?n:i(c,n);l>s;)e[s++]=t;return e}},function(t,e,n){"use strict";var r=n(51),i=n(157),o=n(71),a=n(31);t.exports=n(117)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e,n){"use strict";var r,i,o=n(77),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,l=(r=/a/,i=/b*/g,a.call(r,"a"),a.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(c=function(t){var e,n,r,i,c=this;return u&&(n=new RegExp("^"+c.source+"$(?!\\s)",o.call(c))),l&&(e=c.lastIndex),r=a.call(c,t),l&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),u&&r&&r.length>1&&s.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=c},function(t,e,n){"use strict";var r=n(88)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r,i,o,a=n(35),s=n(147),c=n(110),l=n(106),u=n(6),h=u.process,p=u.setImmediate,d=u.clearImmediate,f=u.MessageChannel,m=u.Dispatch,v=0,g={},y=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},b=function(t){y.call(t.data)};p&&d||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++v]=function(){s("function"==typeof t?t:Function(t),e)},r(v),v},d=function(t){delete g[t]},"process"==n(36)(h)?r=function(t){h.nextTick(a(y,t,1))}:m&&m.now?r=function(t){m.now(a(y,t,1))}:f?(o=(i=new f).port2,i.port1.onmessage=b,r=a(o.postMessage,o,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(r=function(t){u.postMessage(t+"","*")},u.addEventListener("message",b,!1)):r="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),y.call(t)}}:function(t){setTimeout(a(y,t,1),0)}),t.exports={set:p,clear:d}},function(t,e,n){var r=n(6),i=n(129).set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,c="process"==n(36)(a);t.exports=function(){var t,e,n,l=function(){var r,i;for(c&&(r=a.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){a.nextTick(l)};else if(!o||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);n=function(){u.then(l)}}else n=function(){i.call(r,l)};else{var h=!0,p=document.createTextNode("");new o(l).observe(p,{characterData:!0}),n=function(){p.data=h=!h}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},function(t,e,n){"use strict";var r=n(24);function i(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new i(t)}},function(t,e,n){"use strict";var r=n(6),i=n(18),o=n(49),a=n(95),s=n(25),c=n(63),l=n(7),u=n(61),h=n(37),p=n(16),d=n(167),f=n(59).f,m=n(19).f,v=n(125),g=n(68),y="prototype",b="Wrong index!",_=r.ArrayBuffer,w=r.DataView,x=r.Math,z=r.RangeError,S=r.Infinity,M=_,C=x.abs,O=x.pow,k=x.floor,E=x.log,P=x.LN2,H=i?"_b":"buffer",L=i?"_l":"byteLength",A=i?"_o":"byteOffset";function V(t,e,n){var r,i,o,a=new Array(n),s=8*n-e-1,c=(1<<s)-1,l=c>>1,u=23===e?O(2,-24)-O(2,-77):0,h=0,p=t<0||0===t&&1/t<0?1:0;for((t=C(t))!=t||t===S?(i=t!=t?1:0,r=c):(r=k(E(t)/P),t*(o=O(2,-r))<1&&(r--,o*=2),(t+=r+l>=1?u/o:u*O(2,1-l))*o>=2&&(r++,o/=2),r+l>=c?(i=0,r=c):r+l>=1?(i=(t*o-1)*O(2,e),r+=l):(i=t*O(2,l-1)*O(2,e),r=0));e>=8;a[h++]=255&i,i/=256,e-=8);for(r=r<<e|i,s+=e;s>0;a[h++]=255&r,r/=256,s-=8);return a[--h]|=128*p,a}function T(t,e,n){var r,i=8*n-e-1,o=(1<<i)-1,a=o>>1,s=i-7,c=n-1,l=t[c--],u=127&l;for(l>>=7;s>0;u=256*u+t[c],c--,s-=8);for(r=u&(1<<-s)-1,u>>=-s,s+=e;s>0;r=256*r+t[c],c--,s-=8);if(0===u)u=1-a;else{if(u===o)return r?NaN:l?-S:S;r+=O(2,e),u-=a}return(l?-1:1)*r*O(2,u-e)}function j(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function I(t){return[255&t]}function N(t){return[255&t,t>>8&255]}function R(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function D(t){return V(t,52,8)}function F(t){return V(t,23,4)}function Y(t,e,n){m(t[y],e,{get:function(){return this[n]}})}function B(t,e,n,r){var i=d(+n);if(i+e>t[L])throw z(b);var o=t[H]._b,a=i+t[A],s=o.slice(a,a+e);return r?s:s.reverse()}function U(t,e,n,r,i,o){var a=d(+n);if(a+e>t[L])throw z(b);for(var s=t[H]._b,c=a+t[A],l=r(+i),u=0;u<e;u++)s[c+u]=l[o?u:e-u-1]}if(a.ABV){if(!l((function(){_(1)}))||!l((function(){new _(-1)}))||l((function(){return new _,new _(1.5),new _(NaN),"ArrayBuffer"!=_.name}))){for(var q,$=(_=function(t){return u(this,_),new M(d(t))})[y]=M[y],K=f(M),W=0;K.length>W;)(q=K[W++])in _||s(_,q,M[q]);o||($.constructor=_)}var J=new w(new _(2)),G=w[y].setInt8;J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||c(w[y],{setInt8:function(t,e){G.call(this,t,e<<24>>24)},setUint8:function(t,e){G.call(this,t,e<<24>>24)}},!0)}else _=function(t){u(this,_,"ArrayBuffer");var e=d(t);this._b=v.call(new Array(e),0),this[L]=e},w=function(t,e,n){u(this,w,"DataView"),u(t,_,"DataView");var r=t[L],i=h(e);if(i<0||i>r)throw z("Wrong offset!");if(i+(n=void 0===n?r-i:p(n))>r)throw z("Wrong length!");this[H]=t,this[A]=i,this[L]=n},i&&(Y(_,"byteLength","_l"),Y(w,"buffer","_b"),Y(w,"byteLength","_l"),Y(w,"byteOffset","_o")),c(w[y],{getInt8:function(t){return B(this,1,t)[0]<<24>>24},getUint8:function(t){return B(this,1,t)[0]},getInt16:function(t){var e=B(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=B(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return j(B(this,4,t,arguments[1]))},getUint32:function(t){return j(B(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return T(B(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return T(B(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){U(this,1,t,I,e)},setUint8:function(t,e){U(this,1,t,I,e)},setInt16:function(t,e){U(this,2,t,N,e,arguments[2])},setUint16:function(t,e){U(this,2,t,N,e,arguments[2])},setInt32:function(t,e){U(this,4,t,R,e,arguments[2])},setUint32:function(t,e){U(this,4,t,R,e,arguments[2])},setFloat32:function(t,e){U(this,4,t,F,e,arguments[2])},setFloat64:function(t,e){U(this,8,t,D,e,arguments[2])}});g(_,"ArrayBuffer"),g(w,"DataView"),s(w[y],a.VIEW,!0),e.ArrayBuffer=_,e.DataView=w},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function c(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(v(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function l(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,h=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function p(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function d(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,m=0;function v(t,e){var n,r,i;if(e.singleton){var o=m++;n=f||(f=l(e)),r=p.bind(null,n,o,!1),i=p.bind(null,n,o,!0)}else n=l(e),r=d.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t,e);return c(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o],l=i[a.id];l&&(l.refs--,r.push(l))}t&&c(s(t,e),e);for(var u=0;u<r.length;u++){var h=r[u];if(0===h.refs){for(var p=0;p<h.parts.length;p++)h.parts[p]();delete i[h.id]}}}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(11);var r=n(13);
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
class i{constructor(t){i[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return i.types[t]&&i.types[t][e]}set value(t){var e=this.type,n=this.key;e&&n&&(e=i.types[e]=i.types[e]||{},null==t?delete e[n]:e[n]=t)}get list(){if(this.type){var t=i.types[this.type];return t?Object.keys(t).map((function(t){return o[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}i[" "]=function(){},i.types={};var o=i.types;Object(r.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,n){var r=new i({type:t,key:e});return void 0!==n&&n!==r.value?r.value=n:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new i({type:this.type,key:t}).value}})},function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r,i=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function a(t){requestAnimationFrame((function(){o?o(t):(i||(i=new Promise(t=>{r=t}),"complete"===document.readyState?r():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&r()})),i.then((function(){t&&t()})))}))}n.d(e,"a",(function(){return h}));const s="__seenByShadyCSS",c="__shadyCSSCachedStyle";let l=null,u=null;class h{constructor(){this.customStyles=[],this.enqueued=!1,a(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&u&&(this.enqueued=!0,a(u))}addCustomStyle(t){t[s]||(t[s]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[c])return t[c];let e;return e=t.getStyle?t.getStyle():t}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[c])continue;const r=this.getStyleForCustomStyle(n);if(r){const t=r.__appliedElement||r;l&&l(t),n[c]=t}}return t}}h.prototype.addCustomStyle=h.prototype.addCustomStyle,h.prototype.getStyleForCustomStyle=h.prototype.getStyleForCustomStyle,h.prototype.processStyles=h.prototype.processStyles,Object.defineProperties(h.prototype,{transformCallback:{get:()=>l,set(t){l=t}},validateCallback:{get:()=>u,set(t){let e=!1;u||(e=!0),u=t,e&&this.enqueueDocumentValidation()}}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return u}));var r=n(4),i=n.n(r),o=n(15),a="https://ecommerce-pwa.herokuapp.com",s=window.location.href.match("localhost")?"/":"/offline-requests/",c=document.getElementById("notifications-request-button"),l=function(){var t,e;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(navigator.serviceWorker.getRegistration(s));case 2:return t=n.sent,n.next=5,i.a.awrap(t.pushManager.permissionState({userVisibleOnly:!0}));case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}))},u=function(){navigator.serviceWorker.getRegistration(s).then((function(t){t.pushManager.permissionState({userVisibleOnly:!0}).then((function(e){"prompt"===e||"granted"===e?h(t).then((function(){c.src="./img/notifications-active.svg"})).catch((function(){c.src="./img/notifications-none.svg"})):Object(o.a)("🚫 You have blocked notifications for this site!")}))}))},h=function(t){var e;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return Object(o.a)("Subscribing to the Push Manager..."),n.next=3,i.a.awrap(t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:p("BCvnBFnsPt6MPzwX_LOgKqVFG5ToFJ5Yl0qDfwrT-_lqG0PqgwhFijMq_E-vgkkLli7RWHZCYxANy_l0oxz0Nzs")}));case 3:if(e=n.sent){n.next=7;break}return Object(o.a)("Couldn't subscribe to the Push Manager!"),n.abrupt("return",Promise.reject());case 7:return console.log("Sending subscription to the API..."),n.prev=8,n.next=11,i.a.awrap(fetch("".concat(a,"/user/push-subscription/"),{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}));case 11:Object(o.a)("Subscription saved in database by the API"),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(8),Object(o.a)("Oops! There was an error while hitting the API. Check the console for errors."),console.error(n.t0);case 18:case"end":return n.stop()}}),null,null,[[8,14]])},p=function(t){for(var e=(t+"=".repeat((4-t.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(e),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}},function(t,e,n){(function(e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=_;var h="suspendedStart",p="suspendedYield",d="executing",f="completed",m={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(H([])));y&&y!==r&&i.call(y,a)&&(v=y);var b=S.prototype=x.prototype=Object.create(v);z.prototype=b.constructor=S,S.constructor=z,S[c]=z.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===z||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},M(C.prototype),C.prototype[s]=function(){return this},u.AsyncIterator=C,u.async=function(t,e,n,r){var i=new C(_(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},M(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=H,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:H(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function _(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new P(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return L()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=w(t,e,n);if("normal"===c.type){if(r=n.done?f:p,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function z(){}function S(){}function M(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){function n(e,r,o,a){var s=w(t[e],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):Promise.resolve(l).then((function(t){c.value=t,o(c)}),a)}a(s.arg)}var r;"object"==typeof e.process&&e.process.domain&&(n=e.process.domain.bind(n)),this._invoke=function(t,e){function i(){return new Promise((function(r,i){n(t,e,r,i)}))}return r=r?r.then(i,i):i()}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=w(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function H(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:n,done:!0}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,n(84))},function(t,e,n){t.exports=!n(18)&&!n(7)((function(){return 7!=Object.defineProperty(n(106)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){e.f=n(14)},function(t,e,n){var r=n(30),i=n(31),o=n(85)(!1),a=n(108)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var r=n(19),i=n(3),o=n(56);t.exports=n(18)?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),s=a.length,c=0;s>c;)r.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var r=n(31),i=n(59).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(r(t))}},function(t,e,n){"use strict";var r=n(18),i=n(56),o=n(86),a=n(76),s=n(20),c=n(75),l=Object.assign;t.exports=!l||n(7)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=r}))?function(t,e){for(var n=s(t),l=arguments.length,u=1,h=o.f,p=a.f;l>u;)for(var d,f=c(arguments[u++]),m=h?i(f).concat(h(f)):i(f),v=m.length,g=0;v>g;)d=m[g++],r&&!p.call(f,d)||(n[d]=f[d]);return n}:l},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){"use strict";var r=n(24),i=n(9),o=n(147),a=[].slice,s={},c=function(t,e,n){if(!(e in s)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";s[e]=Function("F,a","return new F("+r.join(",")+")")}return s[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=a.call(arguments,1),s=function(){var r=n.concat(a.call(arguments));return this instanceof s?c(e,r.length,r):o(e,r,t)};return i(e.prototype)&&(s.prototype=e.prototype),s}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(6).parseInt,i=n(70).trim,o=n(112),a=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(a.test(n)?16:10))}:r},function(t,e,n){var r=n(6).parseFloat,i=n(70).trim;t.exports=1/r(n(112)+"-0")!=-1/0?function(t){var e=i(String(t),3),n=r(e);return 0===n&&"-"==e.charAt(0)?-0:n}:r},function(t,e,n){var r=n(36);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(e);return+t}},function(t,e,n){var r=n(9),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,e,n){var r=n(115),i=Math.pow,o=i(2,-52),a=i(2,-23),s=i(2,127)*(2-a),c=i(2,-126);t.exports=Math.fround||function(t){var e,n,i=Math.abs(t),l=r(t);return i<c?l*(i/c/a+1/o-1/o)*c*a:(n=(e=(1+a/o)*i)-(e-i))>s||n!=n?l*(1/0):l*n}},function(t,e,n){var r=n(3);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(24),i=n(20),o=n(75),a=n(16);t.exports=function(t,e,n,s,c){r(e);var l=i(t),u=o(l),h=a(l.length),p=c?h-1:0,d=c?-1:1;if(n<2)for(;;){if(p in u){s=u[p],p+=d;break}if(p+=d,c?p<0:h<=p)throw TypeError("Reduce of empty array with no initial value")}for(;c?p>=0:h>p;p+=d)p in u&&(s=e(s,u[p],p,l));return s}},function(t,e,n){"use strict";var r=n(20),i=n(57),o=n(16);t.exports=[].copyWithin||function(t,e){var n=r(this),a=o(n.length),s=i(t,a),c=i(e,a),l=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===l?a:i(l,a))-c,a-s),h=1;for(c<s&&s<c+u&&(h=-1,c+=u-1,s+=u-1);u-- >0;)c in n?n[s]=n[c]:delete n[s],s+=h,c+=h;return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r=n(127);n(0)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){n(18)&&"g"!=/./g.flags&&n(19).f(RegExp.prototype,"flags",{configurable:!0,get:n(77)})},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(3),i=n(9),o=n(131);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var r=n(163),i=n(64);t.exports=n(94)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(i(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(i(this,"Map"),0===t?0:t,e)}},r,!0)},function(t,e,n){"use strict";var r=n(19).f,i=n(58),o=n(63),a=n(35),s=n(61),c=n(62),l=n(117),u=n(157),h=n(60),p=n(18),d=n(50).fastKey,f=n(64),m=p?"_s":"size",v=function(t,e){var n,r=d(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,r){s(t,u,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[m]=0,null!=r&&c(r,n,t[l],t)}));return o(u.prototype,{clear:function(){for(var t=f(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var n=f(this,e),r=v(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[m]--}return!!r},forEach:function(t){f(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!v(f(this,e),t)}}),p&&r(u.prototype,"size",{get:function(){return f(this,e)[m]}}),u},def:function(t,e,n){var r,i,o=v(t,e);return o?o.v=n:(t._l=o={i:i=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[m]++,"F"!==i&&(t._i[i]=o)),t},getEntry:v,setStrong:function(t,e,n){l(t,e,(function(t,n){this._t=f(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),h(e)}}},function(t,e,n){"use strict";var r=n(163),i=n(64);t.exports=n(94)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},function(t,e,n){"use strict";var r,i=n(6),o=n(43)(0),a=n(26),s=n(50),c=n(144),l=n(166),u=n(9),h=n(64),p=n(64),d=!i.ActiveXObject&&"ActiveXObject"in i,f=s.getWeak,m=Object.isExtensible,v=l.ufstore,g=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(t){if(u(t)){var e=f(t);return!0===e?v(h(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return l.def(h(this,"WeakMap"),t,e)}},b=t.exports=n(94)("WeakMap",g,y,l,!0,!0);p&&d&&(c((r=l.getConstructor(g,"WeakMap")).prototype,y),s.NEED=!0,o(["delete","has","get","set"],(function(t){var e=b.prototype,n=e[t];a(e,t,(function(e,i){if(u(e)&&!m(e)){this._f||(this._f=new r);var o=this._f[t](e,i);return"set"==t?this:o}return n.call(this,e,i)}))})))},function(t,e,n){"use strict";var r=n(63),i=n(50).getWeak,o=n(3),a=n(9),s=n(61),c=n(62),l=n(43),u=n(30),h=n(64),p=l(5),d=l(6),f=0,m=function(t){return t._l||(t._l=new v)},v=function(){this.a=[]},g=function(t,e){return p(t.a,(function(t){return t[0]===e}))};v.prototype={get:function(t){var e=g(this,t);if(e)return e[1]},has:function(t){return!!g(this,t)},set:function(t,e){var n=g(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=d(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,o){var l=t((function(t,r){s(t,l,e,"_i"),t._t=e,t._i=f++,t._l=void 0,null!=r&&c(r,n,t[o],t)}));return r(l.prototype,{delete:function(t){if(!a(t))return!1;var n=i(t);return!0===n?m(h(this,e)).delete(t):n&&u(n,this._i)&&delete n[this._i]},has:function(t){if(!a(t))return!1;var n=i(t);return!0===n?m(h(this,e)).has(t):n&&u(n,this._i)}}),l},def:function(t,e,n){var r=i(o(e),!0);return!0===r?m(t).set(e,n):r[t._i]=n,t},ufstore:m}},function(t,e,n){var r=n(37),i=n(16);t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw RangeError("Wrong length!");return n}},function(t,e,n){var r=n(59),i=n(86),o=n(3),a=n(6).Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){"use strict";var r=n(87),i=n(9),o=n(16),a=n(35),s=n(14)("isConcatSpreadable");t.exports=function t(e,n,c,l,u,h,p,d){for(var f,m,v=u,g=0,y=!!p&&a(p,d,3);g<l;){if(g in c){if(f=y?y(c[g],g,n):c[g],m=!1,i(f)&&(m=void 0!==(m=f[s])?!!m:r(f)),m&&h>0)v=t(e,n,f,o(f.length),v,h-1)-1;else{if(v>=9007199254740991)throw TypeError();e[v]=f}v++}g++}return v}},function(t,e,n){var r=n(16),i=n(114),o=n(41);t.exports=function(t,e,n,a){var s=String(o(t)),c=s.length,l=void 0===n?" ":String(n),u=r(e);if(u<=c||""==l)return s;var h=u-c,p=i.call(l,Math.ceil(h/l.length));return p.length>h&&(p=p.slice(0,h)),a?p+s:s+p}},function(t,e,n){var r=n(18),i=n(56),o=n(31),a=n(76).f;t.exports=function(t){return function(e){for(var n,s=o(e),c=i(s),l=c.length,u=0,h=[];l>u;)n=c[u++],r&&!a.call(s,n)||h.push(t?[n,s[n]]:s[n]);return h}}},function(t,e,n){var r=n(69),i=n(173);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,e,n){var r=n(62);t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},function(t,e){t.exports=Math.scale||function(t,e,n,r,i){return 0===arguments.length||t!=t||e!=e||n!=n||r!=r||i!=i?NaN:t===1/0||t===-1/0?t:(t-e)*(i-r)/(n-e)+r}},function(t,e,n){"use strict";n(11);
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
const r=n(5).a`
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
`;r.setAttribute("style","display: none;"),document.head.appendChild(r.content)},function(t,e,n){"use strict";n(52),n(135);var r=n(13),i=n(8),o=n(5),a=n(11);
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
Object(r.a)({_template:o.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:a.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(i.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(i.a)(this.root).appendChild(this._img))}})},function(t,e,n){"use strict";n(52),n(175),n(79),n(99);
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
const r=document.createElement("template");r.setAttribute("style","display: none;"),r.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(r.content)},function(t,e,n){"use strict";n(11);var r=n(5);
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
</dom-module>`;o.setAttribute("style","display: none;"),document.head.appendChild(o.content)},function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));try{self["workbox:window:4.3.1"]&&_()}catch(r){}var r=function(t,e){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(t){return n(t.data)},t.postMessage(e,[r.port2])}))};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}try{self["workbox:core:4.3.1"]&&_()}catch(r){}var a=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))},s=function(t,e){return new URL(t,location).href===new URL(e,location).href},c=function(t,e){Object.assign(this,e,{type:t})};function l(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}function u(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function h(){}var p=function(t){var e,n;function p(e,n){var r;return void 0===n&&(n={}),(r=t.call(this)||this).t=e,r.i=n,r.o=0,r.u=new a,r.s=new a,r.h=new a,r.v=r.v.bind(o(o(r))),r.l=r.l.bind(o(o(r))),r.g=r.g.bind(o(o(r))),r.m=r.m.bind(o(o(r))),r}n=t,(e=p).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var d,f,m=p.prototype;return m.register=l((function(t){var e,n,r=this,i=(void 0===t?{}:t).immediate,o=void 0!==i&&i;return e=function(){return r.p=Boolean(navigator.serviceWorker.controller),r.P=r.R(),u(r.k(),(function(t){r.B=t,r.P&&(r.O=r.P,r.s.resolve(r.P),r.h.resolve(r.P),r.j(r.P),r.P.addEventListener("statechange",r.l,{once:!0}));var e=r.B.waiting;return e&&s(e.scriptURL,r.t)&&(r.O=e,Promise.resolve().then((function(){r.dispatchEvent(new c("waiting",{sw:e,wasWaitingBeforeRegister:!0}))}))),r.O&&r.u.resolve(r.O),r.B.addEventListener("updatefound",r.g),navigator.serviceWorker.addEventListener("controllerchange",r.m,{once:!0}),"BroadcastChannel"in self&&(r.C=new BroadcastChannel("workbox"),r.C.addEventListener("message",r.v)),navigator.serviceWorker.addEventListener("message",r.v),r.B}))},(n=function(){if(!o&&"complete"!==document.readyState)return function(t,e){return t&&t.then?t.then(h):Promise.resolve()}(new Promise((function(t){return addEventListener("load",t)})))}())&&n.then?n.then(e):e()})),m.getSW=l((function(){return this.O||this.u.promise})),m.messageSW=l((function(t){return u(this.getSW(),(function(e){return r(e,t)}))})),m.R=function(){var t=navigator.serviceWorker.controller;if(t&&s(t.scriptURL,this.t))return t},m.k=l((function(){var t=this;return function(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}((function(){return u(navigator.serviceWorker.register(t.t,t.i),(function(e){return t.L=performance.now(),e}))}),(function(t){throw t}))})),m.j=function(t){r(t,{type:"WINDOW_READY",meta:"workbox-window"})},m.g=function(){var t=this.B.installing;this.o>0||!s(t.scriptURL,this.t)||performance.now()>this.L+6e4?(this.W=t,this.B.removeEventListener("updatefound",this.g)):(this.O=t,this.u.resolve(t)),++this.o,t.addEventListener("statechange",this.l)},m.l=function(t){var e=this,n=t.target,r=n.state,i=n===this.W,o=i?"external":"",a={sw:n,originalEvent:t};!i&&this.p&&(a.isUpdate=!0),this.dispatchEvent(new c(o+r,a)),"installed"===r?this._=setTimeout((function(){"installed"===r&&e.B.waiting===n&&e.dispatchEvent(new c(o+"waiting",a))}),200):"activating"===r&&(clearTimeout(this._),i||this.s.resolve(n))},m.m=function(t){var e=this.O;e===navigator.serviceWorker.controller&&(this.dispatchEvent(new c("controlling",{sw:e,originalEvent:t})),this.h.resolve(e))},m.v=function(t){var e=t.data;this.dispatchEvent(new c("message",{data:e,originalEvent:t}))},d=p,(f=[{key:"active",get:function(){return this.s.promise}},{key:"controlling",get:function(){return this.h.promise}}])&&i(d.prototype,f),p}(function(){function t(){this.D={}}var e=t.prototype;return e.addEventListener=function(t,e){this.T(t).add(e)},e.removeEventListener=function(t,e){this.T(t).delete(e)},e.dispatchEvent=function(t){t.target=this,this.T(t.type).forEach((function(e){return e(t)}))},e.T=function(t){return this.D[t]=this.D[t]||new Set},t}())},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),r=n.n(e),i=n(179),o=(n(384),n(386),n(388),n(395),n(398),n(390),n(396),n(397),n(391),n(392),n(393),n(394),n(15)),a=n(137),s=n(29),c=n(73);t._babelPolyfill||n(183);var l=document.getElementById("notifications-request-button"),u=document.getElementById("shopping-cart-button"),h=document.getElementById("cart-close-button"),p=document.getElementById("checkout-button"),d=document.querySelectorAll(".add-to-cart-button");window.addEventListener("load",(function(){var t,e;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return v(),m(),Object(c.b)(),n.next=5,r.a.awrap(Object(a.a)());case 5:t=n.sent,e="granted"===t?"./img/notifications-active.svg":"./img/notifications-none.svg",l.setAttribute("src",e);case 8:case"end":return n.stop()}}))}));var f,m=function(){d.forEach((function(t){return t.addEventListener("click",c.a)})),u.addEventListener("click",c.d),h.addEventListener("click",c.d),p.addEventListener("click",g),l.addEventListener("click",a.b)},v=function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:"serviceWorker"in navigator&&((f=new i.a("./service-worker.js",{scope:"/offline-requests/"})).addEventListener("controlling",(function(){window.location.reload()})),f.addEventListener("waiting",(function(){window.updateServiceWorker=function(t){f.messageSW({type:"NEW_VERSION"})},setTimeout((function(){return Object(o.a)('A new version is available <span style="font-size:17px;margin-left:5px">👉</span><a href="#" onclick="updateServiceWorker();" class="snackbar-refresh-button">&#x21BB;</a>')}),0)})),f.register());case 1:case"end":return t.stop()}}))},g=function(t){var e,n;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(fetch("".concat("https://ecommerce-pwa.herokuapp.com","/checkout"),{method:"GET"}));case 2:return e=t.sent,t.next=5,r.a.awrap(e.json());case 5:n=t.sent,console.log("checkout: items",n),200===e.status?(Object(c.c)(),Object(o.a)("🤟 Yeayy!! Checkout 🛒! 🤟")):Object(o.a)("There was an error during the checkout of your cart 😕");case 8:case"end":return t.stop()}}))};window.addEventListener("offline",(function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(o.a)("You are offline 📴"),Object(s.b)(),t.next=4,r.a.awrap(navigator.serviceWorker.getRegistration("/offline-requests/"));case 4:t.sent.sync.register("sync-cart-items");case 6:case"end":return t.stop()}}))})),window.addEventListener("online",(function(){Object(o.a)("You are back online! 🎉")})),window.Offline&&(window.Offline.options={checkOnLoad:!0,requests:!0})}.call(this,n(84))},function(t,e,n){(function(e){var r="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(138),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}).call(this,n(84))},function(t,e,n){"use strict";(function(t){if(n(184),n(138),n(381),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var e="defineProperty";function r(t,n,r){t[n]||Object[e](t,n,{writable:!0,configurable:!0,value:r})}r(String.prototype,"padLeft","".padStart),r(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach((function(t){[][t]&&r(Array,t,Function.call.bind([][t]))}))}).call(this,n(84))},function(t,e,n){n(185),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(265),n(266),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(126),n(289),n(158),n(290),n(159),n(291),n(292),n(293),n(294),n(295),n(162),n(164),n(165),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),t.exports=n(34)},function(t,e,n){"use strict";var r=n(6),i=n(30),o=n(18),a=n(0),s=n(26),c=n(50).KEY,l=n(7),u=n(74),h=n(68),p=n(55),d=n(14),f=n(140),m=n(107),v=n(187),g=n(87),y=n(3),b=n(9),_=n(20),w=n(31),x=n(40),z=n(54),S=n(58),M=n(143),C=n(32),O=n(86),k=n(19),E=n(56),P=C.f,H=k.f,L=M.f,A=r.Symbol,V=r.JSON,T=V&&V.stringify,j=d("_hidden"),I=d("toPrimitive"),N={}.propertyIsEnumerable,R=u("symbol-registry"),D=u("symbols"),F=u("op-symbols"),Y=Object.prototype,B="function"==typeof A&&!!O.f,U=r.QObject,q=!U||!U.prototype||!U.prototype.findChild,$=o&&l((function(){return 7!=S(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=P(Y,e);r&&delete Y[e],H(t,e,n),r&&t!==Y&&H(Y,e,r)}:H,K=function(t){var e=D[t]=S(A.prototype);return e._k=t,e},W=B&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},J=function(t,e,n){return t===Y&&J(F,e,n),y(t),e=x(e,!0),y(n),i(D,e)?(n.enumerable?(i(t,j)&&t[j][e]&&(t[j][e]=!1),n=S(n,{enumerable:z(0,!1)})):(i(t,j)||H(t,j,z(1,{})),t[j][e]=!0),$(t,e,n)):H(t,e,n)},G=function(t,e){y(t);for(var n,r=v(e=w(e)),i=0,o=r.length;o>i;)J(t,n=r[i++],e[n]);return t},X=function(t){var e=N.call(this,t=x(t,!0));return!(this===Y&&i(D,t)&&!i(F,t))&&(!(e||!i(this,t)||!i(D,t)||i(this,j)&&this[j][t])||e)},Z=function(t,e){if(t=w(t),e=x(e,!0),t!==Y||!i(D,e)||i(F,e)){var n=P(t,e);return!n||!i(D,e)||i(t,j)&&t[j][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=L(w(t)),r=[],o=0;n.length>o;)i(D,e=n[o++])||e==j||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===Y,r=L(n?F:w(t)),o=[],a=0;r.length>a;)!i(D,e=r[a++])||n&&!i(Y,e)||o.push(D[e]);return o};B||(s((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===Y&&e.call(F,n),i(this,j)&&i(this[j],t)&&(this[j][t]=!1),$(this,t,z(1,n))};return o&&q&&$(Y,t,{configurable:!0,set:e}),K(t)}).prototype,"toString",(function(){return this._k})),C.f=Z,k.f=J,n(59).f=M.f=Q,n(76).f=X,O.f=tt,o&&!n(49)&&s(Y,"propertyIsEnumerable",X,!0),f.f=function(t){return K(d(t))}),a(a.G+a.W+a.F*!B,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var rt=E(d.store),it=0;rt.length>it;)m(rt[it++]);a(a.S+a.F*!B,"Symbol",{for:function(t){return i(R,t+="")?R[t]:R[t]=A(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){q=!0},useSimple:function(){q=!1}}),a(a.S+a.F*!B,"Object",{create:function(t,e){return void 0===e?S(t):G(S(t),e)},defineProperty:J,defineProperties:G,getOwnPropertyDescriptor:Z,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var ot=l((function(){O.f(1)}));a(a.S+a.F*ot,"Object",{getOwnPropertySymbols:function(t){return O.f(_(t))}}),V&&a(a.S+a.F*(!B||l((function(){var t=A();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(b(e)||void 0!==t)&&!W(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,T.apply(V,r)}}),A.prototype[I]||n(25)(A.prototype,I,A.prototype.valueOf),h(A,"Symbol"),h(Math,"Math",!0),h(r.JSON,"JSON",!0)},function(t,e,n){t.exports=n(74)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(56),i=n(86),o=n(76);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var a,s=n(t),c=o.f,l=0;s.length>l;)c.call(t,a=s[l++])&&e.push(a);return e}},function(t,e,n){var r=n(0);r(r.S,"Object",{create:n(58)})},function(t,e,n){var r=n(0);r(r.S+r.F*!n(18),"Object",{defineProperty:n(19).f})},function(t,e,n){var r=n(0);r(r.S+r.F*!n(18),"Object",{defineProperties:n(142)})},function(t,e,n){var r=n(31),i=n(32).f;n(42)("getOwnPropertyDescriptor",(function(){return function(t,e){return i(r(t),e)}}))},function(t,e,n){var r=n(20),i=n(33);n(42)("getPrototypeOf",(function(){return function(t){return i(r(t))}}))},function(t,e,n){var r=n(20),i=n(56);n(42)("keys",(function(){return function(t){return i(r(t))}}))},function(t,e,n){n(42)("getOwnPropertyNames",(function(){return n(143).f}))},function(t,e,n){var r=n(9),i=n(50).onFreeze;n(42)("freeze",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},function(t,e,n){var r=n(9),i=n(50).onFreeze;n(42)("seal",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},function(t,e,n){var r=n(9),i=n(50).onFreeze;n(42)("preventExtensions",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},function(t,e,n){var r=n(9);n(42)("isFrozen",(function(t){return function(e){return!r(e)||!!t&&t(e)}}))},function(t,e,n){var r=n(9);n(42)("isSealed",(function(t){return function(e){return!r(e)||!!t&&t(e)}}))},function(t,e,n){var r=n(9);n(42)("isExtensible",(function(t){return function(e){return!!r(e)&&(!t||t(e))}}))},function(t,e,n){var r=n(0);r(r.S+r.F,"Object",{assign:n(144)})},function(t,e,n){var r=n(0);r(r.S,"Object",{is:n(145)})},function(t,e,n){var r=n(0);r(r.S,"Object",{setPrototypeOf:n(111).set})},function(t,e,n){"use strict";var r=n(69),i={};i[n(14)("toStringTag")]="z",i+""!="[object z]"&&n(26)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,e,n){var r=n(0);r(r.P,"Function",{bind:n(146)})},function(t,e,n){var r=n(19).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(18)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var r=n(9),i=n(33),o=n(14)("hasInstance"),a=Function.prototype;o in a||n(19).f(a,o,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,e,n){var r=n(0),i=n(148);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,e,n){var r=n(0),i=n(149);r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},function(t,e,n){"use strict";var r=n(6),i=n(30),o=n(36),a=n(113),s=n(40),c=n(7),l=n(59).f,u=n(32).f,h=n(19).f,p=n(70).trim,d=r.Number,f=d,m=d.prototype,v="Number"==o(n(58)(m)),g="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=g?e.trim():p(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,c=e.slice(2),l=0,u=c.length;l<u;l++)if((a=c.charCodeAt(l))<48||a>i)return NaN;return parseInt(c,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(v?c((function(){m.valueOf.call(n)})):"Number"!=o(n))?a(new f(y(e)),n,d):y(e)};for(var b,_=n(18)?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;_.length>w;w++)i(f,b=_[w])&&!i(d,b)&&h(d,b,u(f,b));d.prototype=m,m.constructor=d,n(26)(r,"Number",d)}},function(t,e,n){"use strict";var r=n(0),i=n(37),o=n(150),a=n(114),s=1..toFixed,c=Math.floor,l=[0,0,0,0,0,0],u="Number.toFixed: incorrect invocation!",h=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*l[n],l[n]=r%1e7,r=c(r/1e7)},p=function(t){for(var e=6,n=0;--e>=0;)n+=l[e],l[e]=c(n/t),n=n%t*1e7},d=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==l[t]){var n=String(l[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e},f=function(t,e,n){return 0===e?n:e%2==1?f(t,e-1,n*t):f(t*t,e/2,n)};r(r.P+r.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(7)((function(){s.call({})}))),"Number",{toFixed:function(t){var e,n,r,s,c=o(this,u),l=i(t),m="",v="0";if(l<0||l>20)throw RangeError(u);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*f(2,69,1))-69)<0?c*f(2,-e,1):c/f(2,e,1),n*=4503599627370496,(e=52-e)>0){for(h(0,n),r=l;r>=7;)h(1e7,0),r-=7;for(h(f(10,r,1),0),r=e-1;r>=23;)p(1<<23),r-=23;p(1<<r),h(1,1),p(2),v=d()}else h(0,n),h(1<<-e,0),v=d()+a.call("0",l);return v=l>0?m+((s=v.length)<=l?"0."+a.call("0",l-s)+v:v.slice(0,s-l)+"."+v.slice(s-l)):m+v}})},function(t,e,n){"use strict";var r=n(0),i=n(7),o=n(150),a=1..toPrecision;r(r.P+r.F*(i((function(){return"1"!==a.call(1,void 0)}))||!i((function(){a.call({})}))),"Number",{toPrecision:function(t){var e=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},function(t,e,n){var r=n(0);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,n){var r=n(0),i=n(6).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,e,n){var r=n(0);r(r.S,"Number",{isInteger:n(151)})},function(t,e,n){var r=n(0);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var r=n(0),i=n(151),o=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,e,n){var r=n(0);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){var r=n(0);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var r=n(0),i=n(149);r(r.S+r.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,e,n){var r=n(0),i=n(148);r(r.S+r.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,e,n){var r=n(0),i=n(152),o=Math.sqrt,a=Math.acosh;r(r.S+r.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,e,n){var r=n(0),i=Math.asinh;r(r.S+r.F*!(i&&1/i(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e}})},function(t,e,n){var r=n(0),i=Math.atanh;r(r.S+r.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,e,n){var r=n(0),i=n(115);r(r.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,e,n){var r=n(0),i=Math.exp;r(r.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,e,n){var r=n(0),i=n(116);r(r.S+r.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,e,n){var r=n(0);r(r.S,"Math",{fround:n(153)})},function(t,e,n){var r=n(0),i=Math.abs;r(r.S,"Math",{hypot:function(t,e){for(var n,r,o=0,a=0,s=arguments.length,c=0;a<s;)c<(n=i(arguments[a++]))?(o=o*(r=c/n)*r+1,c=n):o+=n>0?(r=n/c)*r:n;return c===1/0?1/0:c*Math.sqrt(o)}})},function(t,e,n){var r=n(0),i=Math.imul;r(r.S+r.F*n(7)((function(){return-5!=i(4294967295,5)||2!=i.length})),"Math",{imul:function(t,e){var n=+t,r=+e,i=65535&n,o=65535&r;return 0|i*o+((65535&n>>>16)*o+i*(65535&r>>>16)<<16>>>0)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,e,n){var r=n(0);r(r.S,"Math",{log1p:n(152)})},function(t,e,n){var r=n(0);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,e,n){var r=n(0);r(r.S,"Math",{sign:n(115)})},function(t,e,n){var r=n(0),i=n(116),o=Math.exp;r(r.S+r.F*n(7)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,e,n){var r=n(0),i=n(116),o=Math.exp;r(r.S,"Math",{tanh:function(t){var e=i(t=+t),n=i(-t);return e==1/0?1:n==1/0?-1:(e-n)/(o(t)+o(-t))}})},function(t,e,n){var r=n(0);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e,n){var r=n(0),i=n(57),o=String.fromCharCode,a=String.fromCodePoint;r(r.S+r.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,n=[],r=arguments.length,a=0;r>a;){if(e=+arguments[a++],i(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?o(e):o(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},function(t,e,n){var r=n(0),i=n(31),o=n(16);r(r.S,"String",{raw:function(t){for(var e=i(t.raw),n=o(e.length),r=arguments.length,a=[],s=0;n>s;)a.push(String(e[s++])),s<r&&a.push(String(arguments[s]));return a.join("")}})},function(t,e,n){"use strict";n(70)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,n){"use strict";var r=n(88)(!0);n(117)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var r=n(0),i=n(88)(!1);r(r.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,e,n){"use strict";var r=n(0),i=n(16),o=n(119),a="".endsWith;r(r.P+r.F*n(120)("endsWith"),"String",{endsWith:function(t){var e=o(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=i(e.length),s=void 0===n?r:Math.min(i(n),r),c=String(t);return a?a.call(e,c,s):e.slice(s-c.length,s)===c}})},function(t,e,n){"use strict";var r=n(0),i=n(119);r(r.P+r.F*n(120)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(0);r(r.P,"String",{repeat:n(114)})},function(t,e,n){"use strict";var r=n(0),i=n(16),o=n(119),a="".startsWith;r(r.P+r.F*n(120)("startsWith"),"String",{startsWith:function(t){var e=o(this,t,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},function(t,e,n){"use strict";n(27)("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},function(t,e,n){"use strict";n(27)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,e,n){"use strict";n(27)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,e,n){"use strict";n(27)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,e,n){"use strict";n(27)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,e,n){"use strict";n(27)("fontcolor",(function(t){return function(e){return t(this,"font","color",e)}}))},function(t,e,n){"use strict";n(27)("fontsize",(function(t){return function(e){return t(this,"font","size",e)}}))},function(t,e,n){"use strict";n(27)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,e,n){"use strict";n(27)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){"use strict";n(27)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,e,n){"use strict";n(27)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,e,n){"use strict";n(27)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,e,n){"use strict";n(27)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,e,n){var r=n(0);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";var r=n(0),i=n(20),o=n(40);r(r.P+r.F*n(7)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=i(this),n=o(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},function(t,e,n){var r=n(0),i=n(264);r(r.P+r.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,e,n){"use strict";var r=n(7),i=Date.prototype.getTime,o=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+("00000"+Math.abs(e)).slice(r?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:o},function(t,e,n){var r=Date.prototype,i=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n(26)(r,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,e,n){var r=n(14)("toPrimitive"),i=Date.prototype;r in i||n(25)(i,r,n(267))},function(t,e,n){"use strict";var r=n(3),i=n(40);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(r(this),"number"!=t)}},function(t,e,n){var r=n(0);r(r.S,"Array",{isArray:n(87)})},function(t,e,n){"use strict";var r=n(35),i=n(0),o=n(20),a=n(154),s=n(121),c=n(16),l=n(122),u=n(123);i(i.S+i.F*!n(90)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,h,p=o(t),d="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,v=void 0!==m,g=0,y=u(p);if(v&&(m=r(m,f>2?arguments[2]:void 0,2)),null==y||d==Array&&s(y))for(n=new d(e=c(p.length));e>g;g++)l(n,g,v?m(p[g],g):p[g]);else for(h=y.call(p),n=new d;!(i=h.next()).done;g++)l(n,g,v?a(h,m,[i.value,g],!0):i.value);return n.length=g,n}})},function(t,e,n){"use strict";var r=n(0),i=n(122);r(r.S+r.F*n(7)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)i(n,t,arguments[t++]);return n.length=e,n}})},function(t,e,n){"use strict";var r=n(0),i=n(31),o=[].join;r(r.P+r.F*(n(75)!=Object||!n(38)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var r=n(0),i=n(110),o=n(36),a=n(57),s=n(16),c=[].slice;r(r.P+r.F*n(7)((function(){i&&c.call(i)})),"Array",{slice:function(t,e){var n=s(this.length),r=o(this);if(e=void 0===e?n:e,"Array"==r)return c.call(this,t,e);for(var i=a(t,n),l=a(e,n),u=s(l-i),h=new Array(u),p=0;p<u;p++)h[p]="String"==r?this.charAt(i+p):this[i+p];return h}})},function(t,e,n){"use strict";var r=n(0),i=n(24),o=n(20),a=n(7),s=[].sort,c=[1,2,3];r(r.P+r.F*(a((function(){c.sort(void 0)}))||!a((function(){c.sort(null)}))||!n(38)(s)),"Array",{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),i(t))}})},function(t,e,n){"use strict";var r=n(0),i=n(43)(0),o=n(38)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,e,n){var r=n(9),i=n(87),o=n(14)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){"use strict";var r=n(0),i=n(43)(1);r(r.P+r.F*!n(38)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(43)(2);r(r.P+r.F*!n(38)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(43)(3);r(r.P+r.F*!n(38)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(43)(4);r(r.P+r.F*!n(38)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(155);r(r.P+r.F*!n(38)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){"use strict";var r=n(0),i=n(155);r(r.P+r.F*!n(38)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,e,n){"use strict";var r=n(0),i=n(85)(!1),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!n(38)(o)),"Array",{indexOf:function(t){return a?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(31),o=n(37),a=n(16),s=[].lastIndexOf,c=!!s&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!n(38)(s)),"Array",{lastIndexOf:function(t){if(c)return s.apply(this,arguments)||0;var e=i(this),n=a(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,o(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},function(t,e,n){var r=n(0);r(r.P,"Array",{copyWithin:n(156)}),n(51)("copyWithin")},function(t,e,n){var r=n(0);r(r.P,"Array",{fill:n(125)}),n(51)("fill")},function(t,e,n){"use strict";var r=n(0),i=n(43)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(51)("find")},function(t,e,n){"use strict";var r=n(0),i=n(43)(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(51)(o)},function(t,e,n){n(60)("Array")},function(t,e,n){var r=n(6),i=n(113),o=n(19).f,a=n(59).f,s=n(89),c=n(77),l=r.RegExp,u=l,h=l.prototype,p=/a/g,d=/a/g,f=new l(p)!==p;if(n(18)&&(!f||n(7)((function(){return d[n(14)("match")]=!1,l(p)!=p||l(d)==d||"/a/i"!=l(p,"i")})))){l=function(t,e){var n=this instanceof l,r=s(t),o=void 0===e;return!n&&r&&t.constructor===l&&o?t:i(f?new u(r&&!o?t.source:t,e):u((r=t instanceof l)?t.source:t,r&&o?c.call(t):e),n?this:h,l)};for(var m=function(t){t in l||o(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},v=a(u),g=0;v.length>g;)m(v[g++]);h.constructor=l,l.prototype=h,n(26)(r,"RegExp",l)}n(60)("RegExp")},function(t,e,n){"use strict";n(159);var r=n(3),i=n(77),o=n(18),a=/./.toString,s=function(t){n(26)(RegExp.prototype,"toString",t,!0)};n(7)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?s((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=a.name&&s((function(){return a.call(this)}))},function(t,e,n){"use strict";var r=n(3),i=n(16),o=n(128),a=n(91);n(92)("match",1,(function(t,e,n,s){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=s(n,t,this);if(e.done)return e.value;var c=r(t),l=String(this);if(!c.global)return a(c,l);var u=c.unicode;c.lastIndex=0;for(var h,p=[],d=0;null!==(h=a(c,l));){var f=String(h[0]);p[d]=f,""===f&&(c.lastIndex=o(l,i(c.lastIndex),u)),d++}return 0===d?null:p}]}))},function(t,e,n){"use strict";var r=n(3),i=n(20),o=n(16),a=n(37),s=n(128),c=n(91),l=Math.max,u=Math.min,h=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;n(92)("replace",2,(function(t,e,n,f){return[function(r,i){var o=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=f(n,t,this,e);if(i.done)return i.value;var h=r(t),p=String(this),d="function"==typeof e;d||(e=String(e));var v=h.global;if(v){var g=h.unicode;h.lastIndex=0}for(var y=[];;){var b=c(h,p);if(null===b)break;if(y.push(b),!v)break;""===String(b[0])&&(h.lastIndex=s(p,o(h.lastIndex),g))}for(var _,w="",x=0,z=0;z<y.length;z++){b=y[z];for(var S=String(b[0]),M=l(u(a(b.index),p.length),0),C=[],O=1;O<b.length;O++)C.push(void 0===(_=b[O])?_:String(_));var k=b.groups;if(d){var E=[S].concat(C,M,p);void 0!==k&&E.push(k);var P=String(e.apply(void 0,E))}else P=m(S,p,M,C,k,e);M>=x&&(w+=p.slice(x,M)+P,x=M+S.length)}return w+p.slice(x)}];function m(t,e,r,o,a,s){var c=r+t.length,l=o.length,u=d;return void 0!==a&&(a=i(a),u=p),n.call(s,u,(function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":s=a[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var p=h(u/10);return 0===p?n:p<=l?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):n}s=o[u-1]}return void 0===s?"":s}))}}))},function(t,e,n){"use strict";var r=n(3),i=n(145),o=n(91);n(92)("search",1,(function(t,e,n,a){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=r(t),c=String(this),l=s.lastIndex;i(l,0)||(s.lastIndex=0);var u=o(s,c);return i(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},function(t,e,n){"use strict";var r=n(89),i=n(3),o=n(78),a=n(128),s=n(16),c=n(91),l=n(127),u=n(7),h=Math.min,p=[].push,d=!u((function(){RegExp(4294967295,"y")}));n(92)("split",2,(function(t,e,n,u){var f;return f="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);for(var o,a,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?4294967295:e>>>0,f=new RegExp(t.source,u+"g");(o=l.call(f,i))&&!((a=f.lastIndex)>h&&(c.push(i.slice(h,o.index)),o.length>1&&o.index<i.length&&p.apply(c,o.slice(1)),s=o[0].length,h=a,c.length>=d));)f.lastIndex===o.index&&f.lastIndex++;return h===i.length?!s&&f.test("")||c.push(""):c.push(i.slice(h)),c.length>d?c.slice(0,d):c}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):f.call(String(i),n,r)},function(t,e){var r=u(f,t,this,e,f!==n);if(r.done)return r.value;var l=i(t),p=String(this),m=o(l,RegExp),v=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(d?"y":"g"),y=new m(d?l:"^(?:"+l.source+")",g),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===p.length)return null===c(y,p)?[p]:[];for(var _=0,w=0,x=[];w<p.length;){y.lastIndex=d?w:0;var z,S=c(y,d?p:p.slice(w));if(null===S||(z=h(s(y.lastIndex+(d?0:w)),p.length))===_)w=a(p,w,v);else{if(x.push(p.slice(_,w)),x.length===b)return x;for(var M=1;M<=S.length-1;M++)if(x.push(S[M]),x.length===b)return x;w=_=z}}return x.push(p.slice(_)),x}]}))},function(t,e,n){"use strict";var r,i,o,a,s=n(49),c=n(6),l=n(35),u=n(69),h=n(0),p=n(9),d=n(24),f=n(61),m=n(62),v=n(78),g=n(129).set,y=n(130)(),b=n(131),_=n(160),w=n(93),x=n(161),z=c.TypeError,S=c.process,M=S&&S.versions,C=M&&M.v8||"",O=c.Promise,k="process"==u(S),E=function(){},P=i=b.f,H=!!function(){try{var t=O.resolve(1),e=(t.constructor={})[n(14)("species")]=function(t){t(E,E)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof e&&0!==C.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),L=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var n=t._c;y((function(){for(var r=t._v,i=1==t._s,o=0,a=function(e){var n,o,a,s=i?e.ok:e.fail,c=e.resolve,l=e.reject,u=e.domain;try{s?(i||(2==t._h&&j(t),t._h=1),!0===s?n=r:(u&&u.enter(),n=s(r),u&&(u.exit(),a=!0)),n===e.promise?l(z("Promise-chain cycle")):(o=L(n))?o.call(n,c,l):c(n)):l(r)}catch(t){u&&!a&&u.exit(),l(t)}};n.length>o;)a(n[o++]);t._c=[],t._n=!1,e&&!t._h&&V(t)}))}},V=function(t){g.call(c,(function(){var e,n,r,i=t._v,o=T(t);if(o&&(e=_((function(){k?S.emit("unhandledRejection",i,t):(n=c.onunhandledrejection)?n({promise:t,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)})),t._h=k||T(t)?2:1),t._a=void 0,o&&e.e)throw e.v}))},T=function(t){return 1!==t._h&&0===(t._a||t._c).length},j=function(t){g.call(c,(function(){var e;k?S.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},I=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},N=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw z("Promise can't be resolved itself");(e=L(t))?y((function(){var r={_w:n,_d:!1};try{e.call(t,l(N,r,1),l(I,r,1))}catch(t){I.call(r,t)}})):(n._v=t,n._s=1,A(n,!1))}catch(t){I.call({_w:n,_d:!1},t)}}};H||(O=function(t){f(this,O,"Promise","_h"),d(t),r.call(this);try{t(l(N,this,1),l(I,this,1))}catch(t){I.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(63)(O.prototype,{then:function(t,e){var n=P(v(this,O));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=k?S.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=l(N,t,1),this.reject=l(I,t,1)},b.f=P=function(t){return t===O||t===a?new o(t):i(t)}),h(h.G+h.W+h.F*!H,{Promise:O}),n(68)(O,"Promise"),n(60)("Promise"),a=n(34).Promise,h(h.S+h.F*!H,"Promise",{reject:function(t){var e=P(this);return(0,e.reject)(t),e.promise}}),h(h.S+h.F*(s||!H),"Promise",{resolve:function(t){return x(s&&this===a?O:this,t)}}),h(h.S+h.F*!(H&&n(90)((function(t){O.all(t).catch(E)}))),"Promise",{all:function(t){var e=this,n=P(e),r=n.resolve,i=n.reject,o=_((function(){var n=[],o=0,a=1;m(t,!1,(function(t){var s=o++,c=!1;n.push(void 0),a++,e.resolve(t).then((function(t){c||(c=!0,n[s]=t,--a||r(n))}),i)})),--a||r(n)}));return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=P(e),r=n.reject,i=_((function(){m(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return i.e&&r(i.v),n.promise}})},function(t,e,n){"use strict";var r=n(166),i=n(64);n(94)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"WeakSet"),t,!0)}},r,!1,!0)},function(t,e,n){"use strict";var r=n(0),i=n(95),o=n(132),a=n(3),s=n(57),c=n(16),l=n(9),u=n(6).ArrayBuffer,h=n(78),p=o.ArrayBuffer,d=o.DataView,f=i.ABV&&u.isView,m=p.prototype.slice,v=i.VIEW;r(r.G+r.W+r.F*(u!==p),{ArrayBuffer:p}),r(r.S+r.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return f&&f(t)||l(t)&&v in t}}),r(r.P+r.U+r.F*n(7)((function(){return!new p(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,e){if(void 0!==m&&void 0===e)return m.call(a(this),t);for(var n=a(this).byteLength,r=s(t,n),i=s(void 0===e?n:e,n),o=new(h(this,p))(c(i-r)),l=new d(this),u=new d(o),f=0;r<i;)u.setUint8(f++,l.getUint8(r++));return o}}),n(60)("ArrayBuffer")},function(t,e,n){var r=n(0);r(r.G+r.W+r.F*!n(95).ABV,{DataView:n(132).DataView})},function(t,e,n){n(45)("Int8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(45)("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(45)("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}),!0)},function(t,e,n){n(45)("Int16",2,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(45)("Uint16",2,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(45)("Int32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(45)("Uint32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(45)("Float32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(45)("Float64",8,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){var r=n(0),i=n(24),o=n(3),a=(n(6).Reflect||{}).apply,s=Function.apply;r(r.S+r.F*!n(7)((function(){a((function(){}))})),"Reflect",{apply:function(t,e,n){var r=i(t),c=o(n);return a?a(r,e,c):s.call(r,e,c)}})},function(t,e,n){var r=n(0),i=n(58),o=n(24),a=n(3),s=n(9),c=n(7),l=n(146),u=(n(6).Reflect||{}).construct,h=c((function(){function t(){}return!(u((function(){}),[],t)instanceof t)})),p=!c((function(){u((function(){}))}));r(r.S+r.F*(h||p),"Reflect",{construct:function(t,e){o(t),a(e);var n=arguments.length<3?t:o(arguments[2]);if(p&&!h)return u(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(l.apply(t,r))}var c=n.prototype,d=i(s(c)?c:Object.prototype),f=Function.apply.call(t,d,e);return s(f)?f:d}})},function(t,e,n){var r=n(19),i=n(0),o=n(3),a=n(40);i(i.S+i.F*n(7)((function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,e,n){o(t),e=a(e,!0),o(n);try{return r.f(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var r=n(0),i=n(32).f,o=n(3);r(r.S,"Reflect",{deleteProperty:function(t,e){var n=i(o(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var r=n(0),i=n(3),o=function(t){this._t=i(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(118)(o,"Object",(function(){var t,e=this._k;do{if(this._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[this._i++])in this._t));return{value:t,done:!1}})),r(r.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,e,n){var r=n(32),i=n(33),o=n(30),a=n(0),s=n(9),c=n(3);a(a.S,"Reflect",{get:function t(e,n){var a,l,u=arguments.length<3?e:arguments[2];return c(e)===u?e[n]:(a=r.f(e,n))?o(a,"value")?a.value:void 0!==a.get?a.get.call(u):void 0:s(l=i(e))?t(l,n,u):void 0}})},function(t,e,n){var r=n(32),i=n(0),o=n(3);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return r.f(o(t),e)}})},function(t,e,n){var r=n(0),i=n(33),o=n(3);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,e,n){var r=n(0);r(r.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var r=n(0),i=n(3),o=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,e,n){var r=n(0);r(r.S,"Reflect",{ownKeys:n(168)})},function(t,e,n){var r=n(0),i=n(3),o=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,e,n){var r=n(19),i=n(32),o=n(33),a=n(30),s=n(0),c=n(54),l=n(3),u=n(9);s(s.S,"Reflect",{set:function t(e,n,s){var h,p,d=arguments.length<4?e:arguments[3],f=i.f(l(e),n);if(!f){if(u(p=o(e)))return t(p,n,s,d);f=c(0)}if(a(f,"value")){if(!1===f.writable||!u(d))return!1;if(h=i.f(d,n)){if(h.get||h.set||!1===h.writable)return!1;h.value=s,r.f(d,n,h)}else r.f(d,n,c(0,s));return!0}return void 0!==f.set&&(f.set.call(d,s),!0)}})},function(t,e,n){var r=n(0),i=n(111);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,e){i.check(t,e);try{return i.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){"use strict";var r=n(0),i=n(85)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(51)("includes")},function(t,e,n){"use strict";var r=n(0),i=n(169),o=n(20),a=n(16),s=n(24),c=n(124);r(r.P,"Array",{flatMap:function(t){var e,n,r=o(this);return s(t),e=a(r.length),n=c(r,0),i(n,r,r,e,0,1,t,arguments[1]),n}}),n(51)("flatMap")},function(t,e,n){"use strict";var r=n(0),i=n(169),o=n(20),a=n(16),s=n(37),c=n(124);r(r.P,"Array",{flatten:function(){var t=arguments[0],e=o(this),n=a(e.length),r=c(e,0);return i(r,e,e,n,0,void 0===t?1:s(t)),r}}),n(51)("flatten")},function(t,e,n){"use strict";var r=n(0),i=n(88)(!0);r(r.P,"String",{at:function(t){return i(this,t)}})},function(t,e,n){"use strict";var r=n(0),i=n(170),o=n(93),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*a,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,n){"use strict";var r=n(0),i=n(170),o=n(93),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*a,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,e,n){"use strict";n(70)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,e,n){"use strict";n(70)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,e,n){"use strict";var r=n(0),i=n(41),o=n(16),a=n(89),s=n(77),c=RegExp.prototype,l=function(t,e){this._r=t,this._s=e};n(118)(l,"RegExp String",(function(){var t=this._r.exec(this._s);return{value:t,done:null===t}})),r(r.P,"String",{matchAll:function(t){if(i(this),!a(t))throw TypeError(t+" is not a regexp!");var e=String(this),n="flags"in c?String(t.flags):s.call(t),r=new RegExp(t.source,~n.indexOf("g")?n:"g"+n);return r.lastIndex=o(t.lastIndex),new l(r,e)}})},function(t,e,n){n(107)("asyncIterator")},function(t,e,n){n(107)("observable")},function(t,e,n){var r=n(0),i=n(168),o=n(31),a=n(32),s=n(122);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=o(t),c=a.f,l=i(r),u={},h=0;l.length>h;)void 0!==(n=c(r,e=l[h++]))&&s(u,e,n);return u}})},function(t,e,n){var r=n(0),i=n(171)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},function(t,e,n){var r=n(0),i=n(171)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},function(t,e,n){"use strict";var r=n(0),i=n(20),o=n(24),a=n(19);n(18)&&r(r.P+n(96),"Object",{__defineGetter__:function(t,e){a.f(i(this),t,{get:o(e),enumerable:!0,configurable:!0})}})},function(t,e,n){"use strict";var r=n(0),i=n(20),o=n(24),a=n(19);n(18)&&r(r.P+n(96),"Object",{__defineSetter__:function(t,e){a.f(i(this),t,{set:o(e),enumerable:!0,configurable:!0})}})},function(t,e,n){"use strict";var r=n(0),i=n(20),o=n(40),a=n(33),s=n(32).f;n(18)&&r(r.P+n(96),"Object",{__lookupGetter__:function(t){var e,n=i(this),r=o(t,!0);do{if(e=s(n,r))return e.get}while(n=a(n))}})},function(t,e,n){"use strict";var r=n(0),i=n(20),o=n(40),a=n(33),s=n(32).f;n(18)&&r(r.P+n(96),"Object",{__lookupSetter__:function(t){var e,n=i(this),r=o(t,!0);do{if(e=s(n,r))return e.set}while(n=a(n))}})},function(t,e,n){var r=n(0);r(r.P+r.R,"Map",{toJSON:n(172)("Map")})},function(t,e,n){var r=n(0);r(r.P+r.R,"Set",{toJSON:n(172)("Set")})},function(t,e,n){n(97)("Map")},function(t,e,n){n(97)("Set")},function(t,e,n){n(97)("WeakMap")},function(t,e,n){n(97)("WeakSet")},function(t,e,n){n(98)("Map")},function(t,e,n){n(98)("Set")},function(t,e,n){n(98)("WeakMap")},function(t,e,n){n(98)("WeakSet")},function(t,e,n){var r=n(0);r(r.G,{global:n(6)})},function(t,e,n){var r=n(0);r(r.S,"System",{global:n(6)})},function(t,e,n){var r=n(0),i=n(36);r(r.S,"Error",{isError:function(t){return"Error"===i(t)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{clamp:function(t,e,n){return Math.min(n,Math.max(e,t))}})},function(t,e,n){var r=n(0);r(r.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,e,n){var r=n(0),i=180/Math.PI;r(r.S,"Math",{degrees:function(t){return t*i}})},function(t,e,n){var r=n(0),i=n(174),o=n(153);r(r.S,"Math",{fscale:function(t,e,n,r,a){return o(i(t,e,n,r,a))}})},function(t,e,n){var r=n(0);r(r.S,"Math",{iaddh:function(t,e,n,r){var i=t>>>0,o=n>>>0;return(e>>>0)+(r>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,e,n){var r=n(0);r(r.S,"Math",{isubh:function(t,e,n,r){var i=t>>>0,o=n>>>0;return(e>>>0)-(r>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,e,n){var r=n(0);r(r.S,"Math",{imulh:function(t,e){var n=+t,r=+e,i=65535&n,o=65535&r,a=n>>16,s=r>>16,c=(a*o>>>0)+(i*o>>>16);return a*s+(c>>16)+((i*s>>>0)+(65535&c)>>16)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,e,n){var r=n(0),i=Math.PI/180;r(r.S,"Math",{radians:function(t){return t*i}})},function(t,e,n){var r=n(0);r(r.S,"Math",{scale:n(174)})},function(t,e,n){var r=n(0);r(r.S,"Math",{umulh:function(t,e){var n=+t,r=+e,i=65535&n,o=65535&r,a=n>>>16,s=r>>>16,c=(a*o>>>0)+(i*o>>>16);return a*s+(c>>>16)+((i*s>>>0)+(65535&c)>>>16)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{signbit:function(t){return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},function(t,e,n){"use strict";var r=n(0),i=n(34),o=n(6),a=n(78),s=n(161);r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then((function(){return n}))}:t,n?function(n){return s(e,t()).then((function(){throw n}))}:t)}})},function(t,e,n){"use strict";var r=n(0),i=n(131),o=n(160);r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){var r=n(46),i=n(3),o=r.key,a=r.set;r.exp({defineMetadata:function(t,e,n,r){a(t,e,i(n),o(r))}})},function(t,e,n){var r=n(46),i=n(3),o=r.key,a=r.map,s=r.store;r.exp({deleteMetadata:function(t,e){var n=arguments.length<3?void 0:o(arguments[2]),r=a(i(e),n,!1);if(void 0===r||!r.delete(t))return!1;if(r.size)return!0;var c=s.get(e);return c.delete(n),!!c.size||s.delete(e)}})},function(t,e,n){var r=n(46),i=n(3),o=n(33),a=r.has,s=r.get,c=r.key,l=function(t,e,n){if(a(t,e,n))return s(t,e,n);var r=o(e);return null!==r?l(t,r,n):void 0};r.exp({getMetadata:function(t,e){return l(t,i(e),arguments.length<3?void 0:c(arguments[2]))}})},function(t,e,n){var r=n(164),i=n(173),o=n(46),a=n(3),s=n(33),c=o.keys,l=o.key,u=function(t,e){var n=c(t,e),o=s(t);if(null===o)return n;var a=u(o,e);return a.length?n.length?i(new r(n.concat(a))):a:n};o.exp({getMetadataKeys:function(t){return u(a(t),arguments.length<2?void 0:l(arguments[1]))}})},function(t,e,n){var r=n(46),i=n(3),o=r.get,a=r.key;r.exp({getOwnMetadata:function(t,e){return o(t,i(e),arguments.length<3?void 0:a(arguments[2]))}})},function(t,e,n){var r=n(46),i=n(3),o=r.keys,a=r.key;r.exp({getOwnMetadataKeys:function(t){return o(i(t),arguments.length<2?void 0:a(arguments[1]))}})},function(t,e,n){var r=n(46),i=n(3),o=n(33),a=r.has,s=r.key,c=function(t,e,n){if(a(t,e,n))return!0;var r=o(e);return null!==r&&c(t,r,n)};r.exp({hasMetadata:function(t,e){return c(t,i(e),arguments.length<3?void 0:s(arguments[2]))}})},function(t,e,n){var r=n(46),i=n(3),o=r.has,a=r.key;r.exp({hasOwnMetadata:function(t,e){return o(t,i(e),arguments.length<3?void 0:a(arguments[2]))}})},function(t,e,n){var r=n(46),i=n(3),o=n(24),a=r.key,s=r.set;r.exp({metadata:function(t,e){return function(n,r){s(t,e,(void 0!==r?i:o)(n),a(r))}}})},function(t,e,n){var r=n(0),i=n(130)(),o=n(6).process,a="process"==n(36)(o);r(r.G,{asap:function(t){var e=a&&o.domain;i(e?e.bind(t):t)}})},function(t,e,n){"use strict";var r=n(0),i=n(6),o=n(34),a=n(130)(),s=n(14)("observable"),c=n(24),l=n(3),u=n(61),h=n(63),p=n(25),d=n(62),f=d.RETURN,m=function(t){return null==t?void 0:c(t)},v=function(t){var e=t._c;e&&(t._c=void 0,e())},g=function(t){return void 0===t._o},y=function(t){g(t)||(t._o=void 0,v(t))},b=function(t,e){l(t),this._c=void 0,this._o=t,t=new _(this);try{var n=e(t),r=n;null!=n&&("function"==typeof n.unsubscribe?n=function(){r.unsubscribe()}:c(n),this._c=n)}catch(e){return void t.error(e)}g(this)&&v(this)};b.prototype=h({},{unsubscribe:function(){y(this)}});var _=function(t){this._s=t};_.prototype=h({},{next:function(t){var e=this._s;if(!g(e)){var n=e._o;try{var r=m(n.next);if(r)return r.call(n,t)}catch(t){try{y(e)}finally{throw t}}}},error:function(t){var e=this._s;if(g(e))throw t;var n=e._o;e._o=void 0;try{var r=m(n.error);if(!r)throw t;t=r.call(n,t)}catch(t){try{v(e)}finally{throw t}}return v(e),t},complete:function(t){var e=this._s;if(!g(e)){var n=e._o;e._o=void 0;try{var r=m(n.complete);t=r?r.call(n,t):void 0}catch(t){try{v(e)}finally{throw t}}return v(e),t}}});var w=function(t){u(this,w,"Observable","_f")._f=c(t)};h(w.prototype,{subscribe:function(t){return new b(t,this._f)},forEach:function(t){var e=this;return new(o.Promise||i.Promise)((function(n,r){c(t);var i=e.subscribe({next:function(e){try{return t(e)}catch(t){r(t),i.unsubscribe()}},error:r,complete:n})}))}}),h(w,{from:function(t){var e="function"==typeof this?this:w,n=m(l(t)[s]);if(n){var r=l(n.call(t));return r.constructor===e?r:new e((function(t){return r.subscribe(t)}))}return new e((function(e){var n=!1;return a((function(){if(!n){try{if(d(t,!1,(function(t){if(e.next(t),n)return f}))===f)return}catch(t){if(n)throw t;return void e.error(t)}e.complete()}})),function(){n=!0}}))},of:function(){for(var t=0,e=arguments.length,n=new Array(e);t<e;)n[t]=arguments[t++];return new("function"==typeof this?this:w)((function(t){var e=!1;return a((function(){if(!e){for(var r=0;r<n.length;++r)if(t.next(n[r]),e)return;t.complete()}})),function(){e=!0}}))}}),p(w.prototype,s,(function(){return this})),r(r.G,{Observable:w}),n(60)("Observable")},function(t,e,n){var r=n(6),i=n(0),o=n(93),a=[].slice,s=/MSIE .\./.test(o),c=function(t){return function(e,n){var r=arguments.length>2,i=!!r&&a.call(arguments,2);return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};i(i.G+i.B+i.F*s,{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},function(t,e,n){var r=n(0),i=n(129);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,e,n){for(var r=n(126),i=n(56),o=n(26),a=n(6),s=n(25),c=n(71),l=n(14),u=l("iterator"),h=l("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(d),m=0;m<f.length;m++){var v,g=f[m],y=d[g],b=a[g],_=b&&b.prototype;if(_&&(_[u]||s(_,u,p),_[h]||s(_,h,g),c[g]=p,y))for(v in r)_[v]||o(_,v,r[v],!0)}},function(t,e,n){n(382),t.exports=n(34).RegExp.escape},function(t,e,n){var r=n(0),i=n(383)(/[\\^$*+?.()|[\]{}]/g,"\\$&");r(r.S,"RegExp",{escape:function(t){return i(t)}})},function(t,e){t.exports=function(t,e){var n=e===Object(e)?function(t){return e[t]}:e;return function(e){return String(e).replace(t,n)}}},function(t,e,n){var r=n(385);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:("head","head"),injectType:"singletonStyleTag",singleton:!0};n(134)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(133)(!1)).push([t.i,"/* Material Color tool: https://material-ui.com/customization/color/#color-tool */\n:root {\n    /* Polymer theme styles */\n    /* --google-green-500 = #0f9d58 */\n    --primary-color: var(--google-green-500);\n    --accent-color: var(--google-yellow-500);\n}\nbody {\n    color: black;\n    background-color: #e7f0fc;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%0f9d58' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\");\n}\n\n#fork-me-banner > svg > path:not(:first-child) {\n    fill: var(--primary-color);\n}\n\n/* * Paper Style Overrides */\n/* paper-toolbar paper-icon-button {\n    --iron-icon-fill-color: var(--accent-color);\n} */\npaper-button {\n    background-color: var(--primary-color);\n    color: white;\n}\nmain paper-card .header {\n    border-bottom: 1px solid #e8e8e8;\n}\n/* main paper-card {\n    --paper-card-header-color: var(--accent-color);\n} */\n\nfooter a {\n    color: var(--primary-color);\n}\n\n.shopping-cart-button-container {\n    margin-right: 40px;\n    position: relative;\n}\n#number-of-cart-items {\n    color: var(--accent-color);\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 16px;\n    height: 16px;\n    text-align: center;\n    font-size: 12px;\n    background-color: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0px 2px 10px rgba(0,0,0,0.35);\n}\n\n#cart-items-container {\n    box-shadow: 0px -2px 10px rgba(0,0,0,0.25);\n    background-color: #ffffff;\n    border: 1px solid #e5e5e5;\n    box-sizing: border-box;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    left: 0;\n    margin: 0;\n    padding: 0;\n    z-index: 4;\n    transform: translateY(100%);\n    transition: 0.35s transform;\n}\n#cart-items-container.show {\n    transform: translateY(0);\n}\npaper-icon-item {\n    background-color: #ffffff;\n}\npaper-icon-item .avatar {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-image: var(--paper-amber-500);\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat no-repeat;\n}\npaper-icon-item paper-item-body {\n    text-align: left;\n}\npaper-icon-item paper-icon-button {\n    color: var(--paper-red-600);\n}\n#cart-items-container #checkout-button {\n    margin: 20px auto;\n}\n\n.cart-close-button-container {\n    text-align: right;\n}\n\n@media (min-width: 767px) {\n    .shopping-cart-button-container {\n        margin-right: 60px;\n    }\n}\n",""])},function(t,e,n){var r=n(387);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:("head","head"),injectType:"singletonStyleTag",singleton:!0};n(134)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(133)(!1)).push([t.i,'body, html {\n    min-height: 100vh;\n}\nbody {\n    position: relative;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n}\n.container {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#fork-me-banner {\n    min-width: 48px;\n    min-height: 48px;\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n#fork-me-banner,\n#fork-me-banner > svg {\n    height: var(--paper-toolbar-height, 64px);\n    width: var(--paper-toolbar-height, 64px);\n}\n#fork-me-banner:hover .octo-arm,\n#fork-me-banner:focus .octo-arm {\n    -webkit-animation: octocat-wave 560ms ease-in-out;\n    animation: octocat-wave 560ms ease-in-out;\n}\n@-webkit-keyframes octocat-wave {\n    0%,100% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n    }\n    20%,60% { \n        -webkit-transform: rotate(-25deg);\n        transform: rotate(-25deg);\n    } \n    40%,80% {\n        -webkit-transform: rotate(10deg);\n        transform: rotate(10deg);\n    }\n}\n@keyframes octocat-wave {\n    0%,100% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n    }\n    20%,60% {\n        -webkit-transform: rotate(-25deg);\n        transform: rotate(-25deg);\n    }\n    40%,80% {\n        -webkit-transform: rotate(10deg);\n        transform:rotate(10deg);\n    }\n}\n\npaper-toolbar {\n    --paper-toolbar-background: var(--primary-color);\n    box-shadow: var(--shadow-elevation-16dp_-_box-shadow);\n}\npaper-toolbar > .title {\n    margin: 0;\n}\nmain {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-gap: 15px;\n    grid-auto-flow: row;\n    margin: 0 auto;\n    padding: 15px;\n    width: 100%;\n    max-width: 1000px;\n    box-sizing: border-box;\n}\nmain .page-title {\n    grid-column: 1 / -1;\n}\nmain paper-card {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n    transition: box-shadow 0.35s ease-out;\n}\nmain .page-card-link:focus {\n    outline: none;\n}\nmain paper-card:hover,\nmain .page-card-link:focus paper-card {\n    outline: none;\n    box-shadow: var(--paper-material-elevation-5_-_box-shadow);\n}\nmain paper-card .card-actions {\n    border-top: none;\n}\n\nfooter {\n    text-align: left;\n    background-color: #333333;\n    color: var(--google-grey-500);\n    padding: 25px;\n    display: grid;\n    grid-gap: 30px;\n    grid-template-rows: repeat(auto-fit, minmax(30px, 1fr));\n}\nfooter a {\n    display: inline-block;\n    padding: 10px 0;\n}\n\npaper-toolbar paper-button {\n    display: inline-block;\n    position: relative;\n    padding: 8px;\n    outline: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    z-index: 0;\n    line-height: 1;\n    max-width: 40px;\n    max-height: 40px;\n    width: 40px;\n    height: 40px;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-tap-highlight-color: transparent;\n    box-sizing: border-box;\n}\n\n#notifications-active,\n#notifications-none {\n    fill: white;\n    position: absolute;\n    left: 0;\n    transition: transform 0.35s;\n    transform: scale(0);\n}\n\n#notifications-active.show,\n#notifications-none.show {\n    transform: scale(1);\n}\n\n#snackbar {\n    position: fixed;\n    z-index: 15;\n    transition: bottom 0.5s ease-out;\n    min-height: 23px;\n    bottom: -150px;\n    left: calc(50% - 170px);\n    width: 320px;\n    background-color: #444444;\n    color: #ffffff;\n    border-radius: 5px;\n    box-shadow: 0px 2px 10px rgba(0,0,0,0.3);\n    padding: 10px;\n    margin: 0;\n    font-weight: 300;\n    font-size: 14px;\n    text-align: center;\n}\n#snackbar.show {\n    bottom: 30px;\n}\n#snackbar .snackbar-refresh-button {\n    color: var(--google-blue-300); \n    font-size: 17px;\n    margin: 0;\n    padding: 5px 9px;\n    text-decoration: none;\n    transition: all 0.35s ease-out;\n}\n#snackbar .snackbar-refresh-button:focus {\n    outline: none;\n    font-size: 20px;\n    color: var(--accent-color);\n    text-shadow: 0px 3px 2px rgba(0,0,0,0.7);\n}\n\n.focus-outline:focus,\n.focus-outline.yellow-outline:focus {\n    outline: 3px solid var(--yellow);\n}\n.focus-outline.accent-outline:focus {\n    outline: 3px solid var(--accent-color);\n}\n\n@media (max-width: 320px) {\n    #snackbar {\n        left: calc(50% - 150px);\n        width: 280px;\n    }\n}\n@media (min-width: 410px) {\n    #snackbar {\n        left: calc(50% - 190px);\n        width: 360px;\n    }\n}\n@media (max-width: 600px) {\n    #fork-me-banner,\n    #fork-me-banner > svg {\n        height: var(--calculated-paper-toolbar-sm-height, 75px);\n        width: var(--calculated-paper-toolbar-sm-height, 75px);\n    }\n}\n@media (min-width: 767px) {\n    #snackbar {\n        width: 400px;\n        left: calc(50% - 195px);\n    }\n    #snackbar.show {\n        bottom: 120px;\n    }\n}\n\n@media all and (display-mode: browser) {\n    body {\n        font-family: \'Open Sans\', sans-serif;\n    }\n}\n/* * If launched in standalone mode use system fonts */\n@media all and (display-mode: standalone) {\n    body {\n        font-family: "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    }\n}',""])},function(t,e,n){var r=n(389);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:("head","head"),injectType:"singletonStyleTag",singleton:!0};n(134)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(133)(!1)).push([t.i,'.offline-ui.offline-ui-up .offline-ui-content:before {\n  content: "Online";\n}\n.offline-ui.offline-ui-down .offline-ui-content:before {\n  content: "Offline";\n}\n\n.offline-ui .offline-ui-retry:before {\n  content: "Reconnect";\n}\n.offline-ui.offline-ui-up .offline-ui-content:before {\n  content: "Your computer is connected to the internet.";\n}\n@media (max-width: 1024px) {\n  .offline-ui.offline-ui-up .offline-ui-content:before {\n    content: "Your device is connected to the internet.";\n  }\n}\n@media (max-width: 568px) {\n  .offline-ui.offline-ui-up .offline-ui-content:before {\n    content: "Your device is connected.";\n  }\n}\n.offline-ui.offline-ui-down .offline-ui-content:before {\n  content: "Your computer lost its internet connection.";\n}\n@media (max-width: 1024px) {\n  .offline-ui.offline-ui-down .offline-ui-content:before {\n    content: "Your device lost its internet connection.";\n  }\n}\n@media (max-width: 568px) {\n  .offline-ui.offline-ui-down .offline-ui-content:before {\n    content: "Your device isn\'t connected.";\n  }\n}\n.offline-ui.offline-ui-down.offline-ui-connecting .offline-ui-content:before, .offline-ui.offline-ui-down.offline-ui-connecting-2s .offline-ui-content:before {\n  content: "Attempting to reconnect...";\n}\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="second"]:before {\n  content: "Connection lost. Reconnecting in " attr(data-retry-in-value) " seconds...";\n}\n@media (max-width: 568px) {\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="second"]:before {\n    content: "Reconnecting in " attr(data-retry-in-value) "s...";\n  }\n}\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="second"][data-retry-in-value="1"]:before {\n  content: "Connection lost. Reconnecting in " attr(data-retry-in-value) " second...";\n}\n@media (max-width: 568px) {\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="second"][data-retry-in-value="1"]:before {\n    content: "Reconnecting in " attr(data-retry-in-value) "s...";\n  }\n}\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="minute"]:before {\n  content: "Connection lost. Reconnecting in " attr(data-retry-in-value) " minutes...";\n}\n@media (max-width: 568px) {\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="minute"]:before {\n    content: "Reconnecting in " attr(data-retry-in-value) "m...";\n  }\n}\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="minute"][data-retry-in-value="1"]:before {\n  content: "Connection lost. Reconnecting in " attr(data-retry-in-value) " minute...";\n}\n@media (max-width: 568px) {\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="minute"][data-retry-in-value="1"]:before {\n    content: "Reconnecting in " attr(data-retry-in-value) "m...";\n  }\n}\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="hour"]:before {\n  content: "Connection lost. Reconnecting in " attr(data-retry-in-value) " hours...";\n}\n@media (max-width: 568px) {\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="hour"]:before {\n    content: "Reconnecting in " attr(data-retry-in-value) "h...";\n  }\n}\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="hour"][data-retry-in-value="1"]:before {\n  content: "Connection lost. Reconnecting in " attr(data-retry-in-value) " hour...";\n}\n@media (max-width: 568px) {\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit="hour"][data-retry-in-value="1"]:before {\n    content: "Reconnecting in " attr(data-retry-in-value) "h...";\n  }\n}\n.offline-ui.offline-ui-down.offline-ui-reconnect-failed-2s.offline-ui-waiting .offline-ui-retry {\n  display: none;\n}\n.offline-ui.offline-ui-down.offline-ui-reconnect-failed-2s .offline-ui-content:before {\n  content: "Connection attempt failed.";\n}\n\n/* * DARK THEME */\n.offline-ui, .offline-ui *, .offline-ui:before, .offline-ui:after, .offline-ui *:before, .offline-ui *:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.offline-ui {\n  display: none;\n  position: fixed;\n  background: white;\n  z-index: 2000;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.offline-ui .offline-ui-content:before {\n  display: inline;\n}\n.offline-ui .offline-ui-retry {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  display: none;\n}\n.offline-ui .offline-ui-retry:before {\n  display: inline;\n}\n.offline-ui.offline-ui-up.offline-ui-up-5s {\n  display: block;\n}\n.offline-ui.offline-ui-down {\n  display: block;\n}\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-retry {\n  display: block;\n}\n.offline-ui.offline-ui-down.offline-ui-reconnect-failed-2s.offline-ui-waiting .offline-ui-retry {\n  display: none;\n}\n\n@-webkit-keyframes offline-dropin {\n  0% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    opacity: 0;\n  }\n\n  1% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n    opacity: 0;\n  }\n\n  2% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@-moz-keyframes offline-dropin {\n  0% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    opacity: 0;\n  }\n\n  1% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n    opacity: 0;\n  }\n\n  2% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@-ms-keyframes offline-dropin {\n  0% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    opacity: 0;\n  }\n\n  1% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n    opacity: 0;\n  }\n\n  2% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@-o-keyframes offline-dropin {\n  0% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    opacity: 0;\n  }\n\n  1% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n    opacity: 0;\n  }\n\n  2% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes offline-dropin {\n  0% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    opacity: 0;\n  }\n\n  1% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n    opacity: 0;\n  }\n\n  2% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes offline-dropout {\n  0% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n  }\n\n  100% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n  }\n}\n\n@-moz-keyframes offline-dropout {\n  0% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n  }\n\n  100% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n  }\n}\n\n@-ms-keyframes offline-dropout {\n  0% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n  }\n\n  100% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n  }\n}\n\n@-o-keyframes offline-dropout {\n  0% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n  }\n\n  100% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n  }\n}\n\n@keyframes offline-dropout {\n  0% {\n    transform: translateY(0);\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n  }\n\n  100% {\n    transform: translateY(-800px);\n    -webkit-transform: translateY(-800px);\n    -moz-transform: translateY(-800px);\n    -ms-transform: translateY(-800px);\n    -o-transform: translateY(-800px);\n  }\n}\n\n@-webkit-keyframes offline-rotation {\n  0% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    -moz-transform: rotate(359deg);\n    -ms-transform: rotate(359deg);\n    -o-transform: rotate(359deg);\n  }\n}\n\n@-moz-keyframes offline-rotation {\n  0% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    -moz-transform: rotate(359deg);\n    -ms-transform: rotate(359deg);\n    -o-transform: rotate(359deg);\n  }\n}\n\n@-ms-keyframes offline-rotation {\n  0% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    -moz-transform: rotate(359deg);\n    -ms-transform: rotate(359deg);\n    -o-transform: rotate(359deg);\n  }\n}\n\n@-o-keyframes offline-rotation {\n  0% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    -moz-transform: rotate(359deg);\n    -ms-transform: rotate(359deg);\n    -o-transform: rotate(359deg);\n  }\n}\n\n@keyframes offline-rotation {\n  0% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    -moz-transform: rotate(359deg);\n    -ms-transform: rotate(359deg);\n    -o-transform: rotate(359deg);\n  }\n}\n\n.offline-ui {\n  -webkit-border-radius: 0 0 4px 4px;\n  -moz-border-radius: 0 0 4px 4px;\n  -ms-border-radius: 0 0 4px 4px;\n  -o-border-radius: 0 0 4px 4px;\n  border-radius: 0 0 4px 4px;\n  font-family: "Helvetica Neue", sans-serif;\n  font-weight: 300;\n  padding: 1em;\n  width: 38em;\n  max-width: 100%;\n  background: black;\n  color: #cccccc;\n  overflow: hidden;\n}\n@media (max-width: 38em) {\n  .offline-ui {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    -ms-border-radius: 0;\n    -o-border-radius: 0;\n    border-radius: 0;\n  }\n}\n.offline-ui .offline-ui-content {\n  padding-left: 2em;\n}\n.offline-ui .offline-ui-content:before {\n  line-height: 1.25em;\n}\n.offline-ui .offline-ui-content:after {\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  border-radius: 50%;\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 1em;\n  margin: auto;\n  height: 1em;\n  width: 1em;\n}\n.offline-ui .offline-ui-retry {\n  position: absolute;\n  right: 3em;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.2);\n  text-decoration: none;\n  color: inherit;\n  line-height: 3.5em;\n  height: 3.5em;\n  margin: auto;\n  padding: 0 1em;\n}\n.offline-ui.offline-ui-up {\n  -webkit-animation: offline-dropout forwards 0.5s 2s;\n  -moz-animation: offline-dropout forwards 0.5s 2s;\n  -ms-animation: offline-dropout forwards 0.5s 2s;\n  -o-animation: offline-dropout forwards 0.5s 2s;\n  animation: offline-dropout forwards 0.5s 2s;\n  -webkit-backface-visibility: hidden;\n}\n.offline-ui.offline-ui-up .offline-ui-content:after {\n  background: #80d580;\n}\n.offline-ui.offline-ui-down {\n  -webkit-animation: offline-dropin 0.5s;\n  -moz-animation: offline-dropin 0.5s;\n  -ms-animation: offline-dropin 0.5s;\n  -o-animation: offline-dropin 0.5s;\n  animation: offline-dropin 0.5s;\n  -webkit-backface-visibility: hidden;\n}\n.offline-ui.offline-ui-down .offline-ui-content:after {\n  background: #e24949;\n}\n.offline-ui.offline-ui-down.offline-ui-connecting, .offline-ui.offline-ui-down.offline-ui-waiting {\n  padding-right: 3em;\n}\n.offline-ui.offline-ui-down.offline-ui-connecting .offline-ui-content:after, .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content:after {\n  background: #e24949;\n}\n.offline-ui.offline-ui-down.offline-ui-connecting:after, .offline-ui.offline-ui-down.offline-ui-waiting:after {\n  -webkit-animation: offline-rotation 0.7s linear infinite;\n  -moz-animation: offline-rotation 0.7s linear infinite;\n  -ms-animation: offline-rotation 0.7s linear infinite;\n  -o-animation: offline-rotation 0.7s linear infinite;\n  animation: offline-rotation 0.7s linear infinite;\n  -webkit-backface-visibility: hidden;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  border-radius: 50%;\n  content: " ";\n  display: block;\n  position: absolute;\n  right: 1em;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 1em;\n  width: 1em;\n  border: 2px solid transparent;\n  border-top-color: rgba(255, 255, 255, 0.5);\n  border-left-color: rgba(255, 255, 255, 0.5);\n  opacity: 0.7;\n}\n.offline-ui.offline-ui-down.offline-ui-waiting {\n  padding-right: 11em;\n}\n.offline-ui.offline-ui-down.offline-ui-waiting.offline-ui-reconnect-failed-2s {\n  padding-right: 0;\n}\n',""])},function(t,e,n){"use strict";n(11),n(79),n(99),n(52);var r=n(13),i=n(8),o=n(5);
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
Object(r.a)({_template:o.a`
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
`,is:"paper-toolbar",hostAttributes:{role:"toolbar"},properties:{bottomJustify:{type:String,value:""},justify:{type:String,value:""},middleJustify:{type:String,value:""}},ready:function(){console.warn(this.is,"is deprecated. Please use app-layout instead!")},attached:function(){this._observer=this._observe(this),this._updateAriaLabelledBy()},detached:function(){this._observer&&this._observer.disconnect()},_observe:function(t){var e=new MutationObserver(function(){this._updateAriaLabelledBy()}.bind(this));return e.observe(t,{childList:!0,subtree:!0}),e},_updateAriaLabelledBy:function(){Object(i.b)();for(var t,e=[],n=Array.prototype.slice.call(Object(i.a)(this.root).querySelectorAll("slot")).concat(Array.prototype.slice.call(Object(i.a)(this.root).querySelectorAll("content"))),r=0;t=n[r];r++)for(var o,a=Object(i.a)(t).getDistributedNodes(),s=0;o=a[s];s++)if(o.classList&&o.classList.contains("title"))if(o.id)e.push(o.id);else{var c="paper-toolbar-label-"+Math.floor(1e4*Math.random());o.id=c,e.push(c)}e.length>0&&this.setAttribute("aria-labelledby",e.join(" "))},_computeBarExtraClasses:function(t){return t?t+("justified"===t?"":"-justified"):""}})},function(t,e,n){"use strict";n(11),n(52),n(177);var r=n(13),i=n(5),o=n(105);
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
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[o.a]})},function(t,e,n){"use strict";n(11),n(52),n(79),n(99);var r=n(13),i=n(5);
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
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},function(t,e,n){"use strict";n(11),n(52),n(99),n(177);var r=n(13),i=n(5),o=n(105);
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
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[o.a]})},function(t,e,n){"use strict";var r=n(180),i=n.n(r);
/*! offline-js 0.7.13 */
(function(){var t,e,n,r,o,a;r=function(t,e){var n,r,i;for(n in r=[],e.prototype)try{i=e.prototype[n],null==t[n]&&"function"!=typeof i?r.push(t[n]=i):r.push(void 0)}catch(t){t}return r},null==(t={}).options&&(t.options={}),n={checks:{xhr:{url:function(){return"/favicon.ico?_="+Math.floor(1e9*Math.random())},timeout:5e3},image:{url:function(){return"/favicon.ico?_="+Math.floor(1e9*Math.random())}},active:"xhr"},checkOnLoad:!1,interceptRequests:!0,reconnect:!0},o=function(t,e){var n,r,o,a,s;for(n=t,r=o=0,a=(s=e.split(".")).length;a>o&&(n=n[s[r]],"object"==i()(n));r=++o);return r===s.length-1?n:void 0},t.getOption=function(e){var r,i;return"function"==typeof(i=null!=(r=o(t.options,e))?r:o(n,e))?i():i},"function"==typeof window.addEventListener&&window.addEventListener("online",(function(){return setTimeout(t.confirmUp,100)}),!1),"function"==typeof window.addEventListener&&window.addEventListener("offline",(function(){return t.confirmDown()}),!1),t.state="up",t.markUp=function(){return t.trigger("confirmed-up"),"up"!==t.state?(t.state="up",t.trigger("up")):void 0},t.markDown=function(){return t.trigger("confirmed-down"),"down"!==t.state?(t.state="down",t.trigger("down")):void 0},a={},t.on=function(e,n,r){var i,o,s,c,l;if((o=e.split(" ")).length>1){for(l=[],s=0,c=o.length;c>s;s++)i=o[s],l.push(t.on(i,n,r));return l}return null==a[e]&&(a[e]=[]),a[e].push([r,n])},t.off=function(t,e){var n,r,i;if(null!=a[t]){if(e){for(n=0,i=[];n<a[t].length;)(r=a[t][n])[0],r[1]===e?i.push(a[t].splice(n,1)):i.push(n++);return i}return a[t]=[]}},t.trigger=function(t){var e,n,r,i,o,s,c;if(null!=a[t]){for(c=[],r=0,i=(o=a[t]).length;i>r;r++)e=(s=o[r])[0],n=s[1],c.push(n.call(e));return c}},e=function(t,e,n){var r,i,o,a,s;return s=function(){return t.status&&t.status<12e3?e():n()},null===t.onprogress?(r=t.onerror,t.onerror=function(){return n(),"function"==typeof r?r.apply(null,arguments):void 0},a=t.ontimeout,t.ontimeout=function(){return n(),"function"==typeof a?a.apply(null,arguments):void 0},i=t.onload,t.onload=function(){return s(),"function"==typeof i?i.apply(null,arguments):void 0}):(o=t.onreadystatechange,t.onreadystatechange=function(){return 4===t.readyState?s():0===t.readyState&&n(),"function"==typeof o?o.apply(null,arguments):void 0})},t.checks={},t.checks.xhr=function(){var n;(n=new XMLHttpRequest).offline=!1,n.open("HEAD",t.getOption("checks.xhr.url"),!0),null!=n.timeout&&(n.timeout=t.getOption("checks.xhr.timeout")),e(n,t.markUp,t.markDown);try{n.send()}catch(e){e,t.markDown()}return n},t.checks.image=function(){var e;return(e=document.createElement("img")).onerror=t.markDown,e.onload=t.markUp,void(e.src=t.getOption("checks.image.url"))},t.checks.down=t.markDown,t.checks.up=t.markUp,t.check=function(){return t.trigger("checking"),t.checks[t.getOption("checks.active")]()},t.confirmUp=t.confirmDown=t.check,t.onXHR=function(t){var e,n,i;return i=function(e,n){var r;return r=e.open,e.open=function(i,o,a,s,c){return t({type:i,url:o,async:a,flags:n,user:s,password:c,xhr:e}),r.apply(e,arguments)}},n=window.XMLHttpRequest,window.XMLHttpRequest=function(t){var e,r,o;return o=new n(t),i(o,t),r=o.setRequestHeader,o.headers={},o.setRequestHeader=function(t,e){return o.headers[t]=e,r.call(o,t,e)},e=o.overrideMimeType,o.overrideMimeType=function(t){return o.mimeType=t,e.call(o,t)},o},r(window.XMLHttpRequest,n),null!=window.XDomainRequest?(e=window.XDomainRequest,window.XDomainRequest=function(){var t;return t=new e,i(t),t},r(window.XDomainRequest,e)):void 0},setTimeout((function(){return t.getOption("interceptRequests")&&t.onXHR((function(n){var r;return!1!==(r=n.xhr).offline?e(r,t.markUp,t.confirmDown):void 0})),t.getOption("checkOnLoad")?t.check():void 0}),0),window.Offline=t}).call(void 0),function(){var t,e,n,r,i,o,a,s,c;if(!window.Offline)throw new Error("Offline Reconnect brought in without offline.js");r=Offline.reconnect={},o=null,i=function(){var t;return null!=r.state&&"inactive"!==r.state&&Offline.trigger("reconnect:stopped"),r.state="inactive",r.remaining=r.delay=null!=(t=Offline.getOption("reconnect.initialDelay"))?t:3},e=function(){var t,e;return t=null!=(e=Offline.getOption("reconnect.delay"))?e:Math.min(Math.ceil(1.5*r.delay),3600),r.remaining=r.delay=t},a=function(){return"connecting"!==r.state?(r.remaining-=1,Offline.trigger("reconnect:tick"),0===r.remaining?s():void 0):void 0},s=function(){return"waiting"===r.state?(Offline.trigger("reconnect:connecting"),r.state="connecting",Offline.check()):void 0},t=function(){return Offline.getOption("reconnect")?(i(),r.state="waiting",Offline.trigger("reconnect:started"),o=setInterval(a,1e3)):void 0},c=function(){return null!=o&&clearInterval(o),i()},n=function(){return Offline.getOption("reconnect")&&"connecting"===r.state?(Offline.trigger("reconnect:failure"),r.state="waiting",e()):void 0},r.tryNow=s,i(),Offline.on("down",t),Offline.on("confirmed-down",n),Offline.on("up",c)}.call(void 0),function(){var t,e,n,r,i,o;if(!window.Offline)throw new Error("Requests module brought in without offline.js");n=[],o=!1,r=function(t){return Offline.trigger("requests:capture"),"down"!==Offline.state&&(o=!0),n.push(t)},i=function(t){var e,n,r,i,o,a,s,c,l;for(n in l=t.xhr,a=t.url,o=t.type,s=t.user,r=t.password,e=t.body,l.abort(),l.open(o,a,!0,s,r),i=l.headers,i)c=i[n],l.setRequestHeader(n,c);return l.mimeType&&l.overrideMimeType(l.mimeType),l.send(e)},t=function(){return n=[]},e=function(){var e,r,o,a,s,c;for(Offline.trigger("requests:flush"),s={},e=0,o=n.length;o>e;e++)c=(a=n[e]).url.replace(/(\?|&)_=[0-9]+/,(function(t,e){return"?"===e?e:""})),s[a.type.toUpperCase()+" - "+c]=a;for(r in s)a=s[r],i(a);return t()},setTimeout((function(){return!1!==Offline.getOption("requests")?(Offline.on("confirmed-up",(function(){return o?(o=!1,t()):void 0})),Offline.on("up",e),Offline.on("down",(function(){return o=!1})),Offline.onXHR((function(t){var e,n,i,o,a;return a=t.xhr,i=t.async,!1!==a.offline&&(o=function(){return r(t)},n=a.send,a.send=function(e){return t.body=e,n.apply(a,arguments)},i)?null===a.onprogress?(a.addEventListener("error",o,!1),a.addEventListener("timeout",o,!1)):(e=a.onreadystatechange,a.onreadystatechange=function(){return 0===a.readyState?o():4===a.readyState&&(0===a.status||a.status>=12e3)&&o(),"function"==typeof e?e.apply(null,arguments):void 0}):void 0})),Offline.requests={flush:e,clear:t}):void 0}),0)}.call(void 0),function(){var t,e,n,r,i;if(!Offline)throw new Error("Offline simulate brought in without offline.js");for(e=0,n=(r=["up","down"]).length;n>e;e++)i=r[e],(document.querySelector("script[data-simulate='"+i+"']")||localStorage.OFFLINE_SIMULATE===i)&&(null==Offline.options&&(Offline.options={}),null==(t=Offline.options).checks&&(t.checks={}),Offline.options.checks.active=i)}.call(void 0),function(){var t,e,n,r,i,o,a,s,c,l,u;if(!window.Offline)throw new Error("Offline UI brought in without offline.js");r=function(t){var e;return(e=document.createElement("div")).innerHTML=t,e.children[0]},i=n=null,e=function(t){return c(t),i.className+=" "+t},c=function(t){return i.className=i.className.replace(new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi")," ")},a={},o=function(t,n){return e(t),null!=a[t]&&clearTimeout(a[t]),a[t]=setTimeout((function(){return c(t),delete a[t]}),1e3*n)},u=function(t){var e,n,r;for(n in r={day:86400,hour:3600,minute:60,second:1})if(t>=(e=r[n]))return[Math.floor(t/e),n];return["now",""]},l=function(){var t,o;return i=r('<div class="offline-ui"><div class="offline-ui-content"></div></div>'),document.body.appendChild(i),null!=Offline.reconnect&&Offline.getOption("reconnect")&&(i.appendChild(r('<a href class="offline-ui-retry"></a>')),o=function(t){return t.preventDefault(),Offline.reconnect.tryNow()},null!=(t=i.querySelector(".offline-ui-retry")).addEventListener?t.addEventListener("click",o,!1):t.attachEvent("click",o)),e("offline-ui-"+Offline.state),n=i.querySelector(".offline-ui-content")},s=function(){return l(),Offline.on("up",(function(){return c("offline-ui-down"),e("offline-ui-up"),o("offline-ui-up-2s",2),o("offline-ui-up-5s",5)})),Offline.on("down",(function(){return c("offline-ui-up"),e("offline-ui-down"),o("offline-ui-down-2s",2),o("offline-ui-down-5s",5)})),Offline.on("reconnect:connecting",(function(){return e("offline-ui-connecting"),c("offline-ui-waiting")})),Offline.on("reconnect:tick",(function(){var t,r,i;return e("offline-ui-waiting"),c("offline-ui-connecting"),r=(t=u(Offline.reconnect.remaining))[0],i=t[1],n.setAttribute("data-retry-in-value",r),n.setAttribute("data-retry-in-unit",i)})),Offline.on("reconnect:stopped",(function(){return c("offline-ui-connecting offline-ui-waiting"),n.setAttribute("data-retry-in-value",null),n.setAttribute("data-retry-in-unit",null)})),Offline.on("reconnect:failure",(function(){return o("offline-ui-reconnect-failed-2s",2),o("offline-ui-reconnect-failed-5s",5)})),Offline.on("reconnect:success",(function(){return o("offline-ui-reconnect-succeeded-2s",2),o("offline-ui-reconnect-succeeded-5s",5)}))},"complete"===document.readyState?s():null!=document.addEventListener?document.addEventListener("DOMContentLoaded",s,!1):(t=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&s(),"function"==typeof t?t.apply(null,arguments):void 0})}.call(void 0)},function(t,e,n){"use strict";n(11),n(52);var r=n(13),i=n(5),o=n(23);
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
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var n=this._resolveSrc(t);n!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=n,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=Object(o.c)(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&(e=(location.origin||location.protocol+"//"+location.host)+e),e}});n(178),n(79);
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
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(t){return t?"false":"true"},_headingChanged:function(t){var e=this.getAttribute("heading"),n=this.getAttribute("aria-label");"string"==typeof n&&n!==e||this.setAttribute("aria-label",t)},_computeHeadingClass:function(t){return t?" over-image":""},_computeAnimated:function(t){return t}})},function(t,e,n){"use strict";n(11),n(176),n(79);var r=n(44),i=n(65),o=n(83);
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
const a={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=t)},_createRipple:function(){var t=o.a._createRipple();return t.id="ink",t.setAttribute("center",""),t.classList.add("circle"),t}},s=[r.a,i.a,o.a,a];var c=n(13),l=n(5);
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
Object(c.a)({is:"paper-icon-button",_template:l.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[s],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(t,e){var n=this.getAttribute("aria-label");n&&e!=n||this.setAttribute("aria-label",t)}})},function(t,e,n){"use strict";n(176),n(11);var r=n(135),i=n(13),o=n(8);
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
Object(i.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new r.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var n=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(n){var r=Object(o.a)(t.root||t);return r.insertBefore(n,r.childNodes[0]),t._svgIcon=n}return null},removeIcon:function(t){t._svgIcon&&(Object(o.a)(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return Object(o.a)(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,n){if(t){var r=t.cloneNode(!0),i=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=r.getAttribute("viewBox")||"0 0 "+e+" "+e,a="pointer-events: none; display: block; width: 100%; height: 100%;";return n&&r.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),i.setAttribute("viewBox",o),i.setAttribute("preserveAspectRatio","xMidYMid meet"),i.setAttribute("focusable","false"),i.style.cssText=a,i.appendChild(r).removeAttribute("id"),i}return null}});
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const a=n(5).a`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(a.content)},function(t,e,n){"use strict";n(52),n(178);var r=n(11),i=n(44),o=n(65),a=n(83);
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
const s={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var t=1;this.disabled?t=0:this.active||this.pressed?t=4:this.receivedFocusFromKeyboard&&(t=3),this._setElevation(t)},_computeKeyboardClass:function(t){this.toggleClass("keyboard-focus",t)},_spaceKeyDownHandler:function(t){i.b._spaceKeyDownHandler.call(this,t),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(t){i.b._spaceKeyUpHandler.call(this,t),this.hasRipple()&&this._ripple.uiUpAction()}},c=[i.a,o.a,a.a,s];var l=n(13);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const u=r.b`
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

  <slot></slot>`;u.setAttribute("strip-whitespace",""),Object(l.a)({_template:u,is:"paper-button",behaviors:[c],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?s._calculateElevation.apply(this):this._setElevation(0)}})}]);