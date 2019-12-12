(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{362:function(t,e,n){"use strict";var r=n(402),s=(n(365),n(364),n(392)),i=n(368);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function o(t,e,n,r,s){let i;s&&(i="object"==typeof n&&null!==n)&&(r=t.__dataTemp[e]);let o=r!==n&&(r==r||n==n);return i&&o&&(t.__dataTemp[e]=n),o}const a=Object(i.a)(t=>{return class extends t{_shouldPropertyChange(t,e,n){return o(this,t,e,n,!0)}}}),l=Object(i.a)(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return o(this,t,e,n,this.mutableData)}}});a._mutablePropertyChange=o;var c=n(371),d=n(369);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let h=null;function u(){return h}u.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:u,writable:!0}});const p=Object(s.a)(u),_=a(p);const f=Object(s.a)(class{});class m extends f{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(t,e,n)}}_showHideChildren(t){let e=this.children;for(let n=0;n<e.length;n++){let r=e[n];if(Boolean(t)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)t?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(t)r.__polymerReplaced__=document.createComment("hidden-slot"),Object(d.a)(Object(d.a)(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const t=r.__polymerReplaced__;t&&Object(d.a)(Object(d.a)(t).parentNode).replaceChild(r,t)}else r.style&&(t?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=t,r._showHideChildren&&r._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}m.prototype.__dataHost,m.prototype.__templatizeOptions,m.prototype._methodHost,m.prototype.__templatizeOwner,m.prototype.__hostProps;const y=a(m);function b(t){let e=t.__dataHost;return e&&e._methodHost||e}function g(t,e,n){let r=n.mutableData?y:m;C.mixin&&(r=C.mixin(r));let s=class extends r{};return s.prototype.__templatizeOptions=n,s.prototype._bindTemplate(t),function(t,e,n,r){let s=n.hostProps||{};for(let e in r.instanceProps){delete s[e];let n=r.notifyInstanceProp;n&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:P(e,n)})}if(r.forwardHostProp&&e.__dataHost)for(let e in s)n.hasHostProps||(n.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(s,t,e,n),s}function w(t,e,n){let r=n.forwardHostProp;if(r&&e.hasHostProps){let s=e.templatizeTemplateClass;if(!s){let t=n.mutableData?_:p;s=e.templatizeTemplateClass=class extends t{};let i=e.hostProps;for(let t in i)s.prototype._addPropertyEffect("_host_"+t,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:v(t,r)}),s.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){h=t,Object.setPrototypeOf(t,e.prototype),new e,h=null}(t,s),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function v(t,e){return function(t,n,r){e.call(t.__templatizeOwner,n.substring("_host_".length),r[n])}}function P(t,e){return function(t,n,r){e.call(t.__templatizeOwner,t,n,r[n])}}function C(t,e,n){if(c.g&&!b(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let r=(e?e.constructor:m)._parseTemplate(t),s=r.templatizeInstanceClass;s||(s=g(t,r,n),r.templatizeInstanceClass=s),w(t,r,n);let i=class extends s{};return i.prototype._methodHost=b(t),i.prototype.__dataHost=t,i.prototype.__templatizeOwner=e,i.prototype.__hostProps=r.hostProps,i=i}function O(t,e){let n;for(;e;)if(n=e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=Object(d.a)(e).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var S=n(397);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let x=!1;function E(){if(c.c&&!c.i){if(!x){x=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const T=Object(S.a)(l(Object(s.a)(HTMLElement)));customElements.define("dom-bind",class extends T{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),c.g)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,n,r){this.mutableData=!0}connectedCallback(){E()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(d.a)(Object(d.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(!(t=t||this.querySelector("template"))){let e=new MutationObserver(()=>{if(!(t=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var N=n(384),A=n(363);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const j=Object(N.a)(HTMLElement);var I=n(375),k=n(379),M=n(383),R=n(377);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const D=l(j);class L extends D{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),E()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(d.a)(Object(d.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=C(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let n=this.__instances;for(let r,s=0;s<n.length&&(r=n[s]);s++)r.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if(Object(M.e)(this.as,e)){let r=t[this.itemsIndexAs];e==this.as&&(this.items[r]=n);let s=Object(M.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,e);this.notifyPath(s,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=I.a.debounce(this.__renderDebouncer,e>0?R.b.after(e):R.a,t.bind(this)),Object(k.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(k.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;this.__filterFn&&(e=e.filter((e,n,r)=>this.__filterFn(t[e],n,r))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n]));const n=this.__itemsIdxToInstIdx={};let r=0;const s=Math.min(e.length,this.__limit);for(;r<s;r++){let s=this.__instances[r],i=e[r],o=t[i];n[i]=r,s?(s._setPendingProperty(this.as,o),s._setPendingProperty(this.indexAs,r),s._setPendingProperty(this.itemsIndexAs,i),s._flushProperties()):this.__insertInstance(o,r,i)}for(let t=this.__instances.length-1;t>=r;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const n=Object(d.a)(e.root);for(let t=0;t<e.children.length;t++){let r=e.children[t];n.appendChild(r)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,n){let r={};return r[this.as]=t,r[this.indexAs]=e,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(t,e,n){let r=this.__pool.pop();r?(r._setPendingProperty(this.as,t),r._setPendingProperty(this.indexAs,e),r._setPendingProperty(this.itemsIndexAs,n),r._flushProperties()):r=this.__stampInstance(t,e,n);let s=this.__instances[e+1],i=s?s.children[0]:this;return Object(d.a)(Object(d.a)(this).parentNode).insertBefore(r.root,i),this.__instances[e]=r,r}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),r=n.indexOf("."),s=r<0?n:n.substring(0,r);if(s==parseInt(s,10)){let t=r<0?"":n.substring(r+1);this.__handleObservedPaths(t);let i=this.__itemsIdxToInstIdx[s],o=this.__instances[i];if(o){let n=this.as+(t?"."+t:"");o._setPendingPropertyOrPath(n,e,!1,!0),o._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return O(this.template,t)}}customElements.define(L.is,L);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class F extends j{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=I.a.debounce(this.__renderDebouncer,R.a,()=>this.__render()),Object(k.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(d.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(d.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),E()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){Object(k.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Object(d.a)(this).parentNode;if(t){if(!this.__ctor){let t=Object(d.a)(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Object(d.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=C(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(M.g)(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Object(d.a)(this).previousSibling!==e[e.length-1])for(let n,r=0;r<e.length&&(n=e[r]);r++)Object(d.a)(t).insertBefore(n,this)}}else this.__instance=new this.__ctor,Object(d.a)(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(d.a)(t[0]).parentNode;if(e){e=Object(d.a)(e);for(let n,r=0;r<t.length&&(n=t[r]);r++)e.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(F.is,F);var H=n(399);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let z=Object(i.a)(t=>{let e=Object(N.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let n=e.path;if(n==JSCompiler_renameProperty("items",this)){let n=e.base||[],r=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),r){let t=Object(H.a)(n,r);this.__applySplices(t)}this.__lastItems=n,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let n=0;n<t.length;n++){let r=t[n];e.forEach((t,n)=>{t<r.index||(t>=r.index+r.removed.length?e.set(n,t+r.addedCount-r.removed.length):e.set(n,-1))});for(let t=0;t<r.addedCount;t++){let n=r.index+t;e.has(this.items[n])&&e.set(this.items[n],n)}}this.__updateLinks();let n=0;e.forEach((t,r)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,e.delete(r)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((n,r)=>{e==t++&&this.deselect(r)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let n;this.__selectedMap.delete(t),this.multi&&(n=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(j);class $ extends z{static get is(){return"array-selector"}static get template(){return null}}customElements.define($.is,$);var B=n(403),q=n(388),Y=n(386);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const J=new B.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){J.processStyles(),Object(q.c)(t,e)},styleElement(t){J.processStyles()},styleDocument(t){J.processStyles(),Object(q.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(q.b)(t,e),flushCustomStyles(){},nativeCss:Y.c,nativeShadow:Y.d,cssBuild:Y.a,disableRuntime:Y.b}),window.ShadyCSS.CustomStyleInterface=J;var U=n(393);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const V="include",X=window.ShadyCSS.CustomStyleInterface;class W extends HTMLElement{constructor(){super(),this._style=null,X.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(V);return e&&(t.removeAttribute(V),t.textContent=Object(U.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let G;window.customElements.define("custom-style",W),G=a._mutablePropertyChange;Boolean;n.d(e,"a",(function(){return Z})),n.d(e,"b",(function(){return A.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Z=Object(r.a)(HTMLElement).prototype},363:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(364);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(t){this.value=t.toString()}toString(){return this.value}}function s(t){if(t instanceof r)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const i=function(t,...e){const n=document.createElement("template");return n.innerHTML=e.reduce((e,n,i)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof r)return s(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(n)+t[i+1],t[0]),n}},364:function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},365:function(t,e,n){"use strict";var r=n(402),s=n(371);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},o);function l(t,e,n,r){!function(t,e,n){const r=t._noAccessors,s=Object.getOwnPropertyNames(t);for(let i=0;i<s.length;i++){let o=s[i];if(!(o in n))if(r)e[o]=t[o];else{let n=Object.getOwnPropertyDescriptor(t,o);n&&(n.configurable=!0,Object.defineProperty(e,o,n))}}}(e,t,r);for(let t in i)e[t]&&(n[t]=n[t]||[],n[t].push(e[t]))}function c(t,e){for(const n in e){const r=t[n],s=e[n];t[n]=!("value"in s)&&r&&"value"in r?Object.assign({value:r.value},s):s}}function d(t,e,n){let r;const i={};class d extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(let t,e=0;e<r.length;e++)(t=r[e]).properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(r)for(let t=0;t<r.length;t++)c(e,r[t].properties);return c(e,t.properties),e}static get observers(){let e=[];if(r)for(let t,n=0;n<r.length;n++)(t=r[n]).observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=i.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=d.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),s.c&&h(t);const e=Object.getPrototypeOf(this);let n=i.beforeRegister;if(n)for(let t=0;t<n.length;t++)n[t].call(e);if(n=i.registered)for(let t=0;t<n.length;t++)n[t].call(e)}}_applyListeners(){super._applyListeners();const t=i.listeners;if(t)for(let e=0;e<t.length;e++){const n=t[e];if(n)for(let t in n)this._addMethodEventListenerToNode(this,t,n[t])}}_ensureAttributes(){const t=i.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const n=t[e];for(let t in n)this._ensureAttribute(t,n[t])}super._ensureAttributes()}ready(){super.ready();let t=i.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=i.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=i.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,n){super.attributeChanged();let r=i.attributeChanged;if(r)for(let s=0;s<r.length;s++)r[s].call(this,t,e,n)}}if(n){Array.isArray(n)||(n=[n]);let t=e.prototype.behaviors;r=function t(e,n,r){n=n||[];for(let s=e.length-1;s>=0;s--){let i=e[s];i?Array.isArray(i)?t(i,n):n.indexOf(i)<0&&(!r||r.indexOf(i)<0)&&n.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,t),d.prototype.behaviors=t?t.concat(n):r}const h=e=>{r&&function(t,e,n){for(let r=0;r<e.length;r++)l(t,e[r],n,a)}(e,r,i),l(e,t,i,o)};return s.c||h(d.prototype),d.generatedFrom=t,d}n(364);n.d(e,"a",(function(){return h}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const h=function(t){let e;return e="function"==typeof t?t:h.Class(t),customElements.define(e.is,e),e};h.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let n=e?e(Object(r.a)(HTMLElement)):Object(r.a)(HTMLElement);return(n=d(t,n,t.behaviors)).is=n.prototype.is=t.is,n}},366:function(t,e,n){"use strict";n(364);var r=n(369),s=(n(371),n(399)),i=n(377);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function o(t){return"slot"===t.localName}let a=class{static getFlattenedNodes(t){const e=Object(r.a)(t);return o(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>o(t)?(t=t,Object(r.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){o(this._target)?this._listenSlots([this._target]):Object(r.a)(this._target).children&&(this._listenSlots(Object(r.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){o(this._target)?this._unlistenSlots([this._target]):Object(r.a)(this._target).children&&(this._unlistenSlots(Object(r.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,i.a.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=Object(s.a)(e,this._effectiveNodes);for(let e,r=0;r<n.length&&(e=n[r]);r++)for(let n,r=0;r<e.removed.length&&(n=e.removed[r]);r++)t.removedNodes.push(n);for(let r,s=0;s<n.length&&(r=n[s]);s++)for(let n=r.index;n<r.index+r.addedCount;n++)t.addedNodes.push(e[n]);this._effectiveNodes=e;let r=!1;return(t.addedNodes.length||t.removedNodes.length)&&(r=!0,this.callback.call(this._target,t)),r}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];o(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];o(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};var l=n(379);n(375);n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return l.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const c=Element.prototype,d=c.matches||c.matchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector||c.webkitMatchesSelector,h=function(t,e){return d.call(t,e)};class u{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(r.a)(this.node).contains(t))return!0;let e=t,n=t.ownerDocument;for(;e&&e!==n&&e!==this.node;)e=Object(r.a)(e).parentNode||Object(r.a)(e).host;return e===this.node}getOwnerRoot(){return Object(r.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(r.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(r.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(r.a)(e).assignedSlot;return t}importNode(t,e){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(r.a)(n).importNode(t,e)}getEffectiveChildNodes(){return a.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),n=[];for(let r,s=0,i=e.length;s<i&&(r=e[s]);s++)r.nodeType===Node.ELEMENT_NODE&&h(r,t)&&n.push(r);return n}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function p(t,e){for(let n=0;n<e.length;n++){let r=e[n];Object.defineProperty(t,r,{get:function(){return this.node[r]},configurable:!0})}}class _{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}u.prototype.cloneNode,u.prototype.appendChild,u.prototype.insertBefore,u.prototype.removeChild,u.prototype.replaceChild,u.prototype.setAttribute,u.prototype.removeAttribute,u.prototype.querySelector,u.prototype.querySelectorAll,u.prototype.parentNode,u.prototype.firstChild,u.prototype.lastChild,u.prototype.nextSibling,u.prototype.previousSibling,u.prototype.firstElementChild,u.prototype.lastElementChild,u.prototype.nextElementSibling,u.prototype.previousElementSibling,u.prototype.childNodes,u.prototype.children,u.prototype.classList,u.prototype.textContent,u.prototype.innerHTML;let f=u;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(u.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=u.prototype[e])}),p(t.prototype,["classList"]),f=t,Object.defineProperties(_.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&m(t).getOwnerRoot(),n=this.path;for(let t=0;t<n.length;t++){const r=n[t];if(m(r).getOwnerRoot()===e)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let n=0;n<e.length;n++){let r=e[n];t[r]=function(){return this.node[r].apply(this.node,arguments)}}}(u.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),p(u.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let n=0;n<e.length;n++){let r=e[n];Object.defineProperty(t,r,{get:function(){return this.node[r]},set:function(t){this.node[r]=t},configurable:!0})}}(u.prototype,["textContent","innerHTML","className"]);const m=function(t){if((t=t||document)instanceof f)return t;if(t instanceof _)return t;let e=t.__domApi;return e||(e=t instanceof Event?new _(t):new f(t),t.__domApi=e),e}},367:function(t,e,n){"use strict";n(362);
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
const r=n(363).a`
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
</custom-style>`;r.setAttribute("style","display: none;"),document.head.appendChild(r.content);var s=document.createElement("style");s.textContent="[hidden] { display: none !important; }",document.head.appendChild(s)},368:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(364);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r=0;function s(){}s.prototype.__mixinApplications,s.prototype.__mixinSet;const i=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=r++;return function(r){let s=r.__mixinSet;if(s&&s[n])return r;let i=e,o=i.get(r);o||(o=t(r),i.set(r,o));let a=Object.create(o.__mixinSet||s||null);return a[n]=!0,o.__mixinSet=a,o}}},369:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},371:function(t,e,n){"use strict";n.d(e,"i",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"g",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"h",(function(){return h})),n.d(e,"b",(function(){return u}));n(364);var r=n(378);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let i=Object(r.a)(document.baseURI||window.location.href);let o=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let a=!1;let l=!1;let c=!1;let d=!1;let h=!1;let u=!0},375:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o}));n(364),n(368),n(377);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,s.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),s.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof r?t._cancelAsync():t=new r,t.setConfig(e,n),t}}let s=new Set;const i=function(t){s.add(t)},o=function(){const t=Boolean(s.size);return s.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},377:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(364);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r=0,s=0,i=[],o=0,a=document.createTextNode("");new window.MutationObserver((function(){const t=i.length;for(let e=0;e<t;e++){let t=i[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}i.splice(0,t),s+=t})).observe(a,{characterData:!0});const l={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},c={run:t=>(a.textContent=o++,i.push(t),r++),cancel(t){const e=t-s;if(e>=0){if(!i[e])throw new Error("invalid async handle: "+t);i[e]=null}}}},378:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(364);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r,s,i=/(url\()([^)]*)(\))/g,o=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&o.test(t))return t;if("//"===t)return t;if(void 0===r){r=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",r="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),r)try{return new URL(t,e).href}catch(e){return t}return s||((s=document.implementation.createHTMLDocument("temp")).base=s.createElement("base"),s.head.appendChild(s.base),s.anchor=s.createElement("a"),s.body.appendChild(s.anchor)),s.base.href=e,s.anchor.href=t,s.anchor.href||t}function l(t,e){return t.replace(i,(function(t,n,r,s){return n+"'"+a(r.replace(/["']/g,""),e)+"'"+s}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},379:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));n(364);var r=n(375);n.d(e,"a",(function(){return r.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(r.c)()}while(t||e)}},383:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"g",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return h})),n.d(e,"h",(function(){return u}));n(364);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t){return t.indexOf(".")>=0}function s(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function i(t,e){return 0===t.indexOf(e+".")}function o(t,e){return 0===e.indexOf(t+".")}function a(t,e,n){return e+n.slice(t.length)}function l(t,e){return t===e||i(t,e)||o(t,e)}function c(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let r=t[n].toString().split(".");for(let t=0;t<r.length;t++)e.push(r[t])}return e.join(".")}return t}function d(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function h(t,e,n){let r=t,s=d(e);for(let t=0;t<s.length;t++){if(!r)return;r=r[s[t]]}return n&&(n.path=s.join(".")),r}function u(t,e,n){let r=t,s=d(e),i=s[s.length-1];if(s.length>1){for(let t=0;t<s.length-1;t++){if(!(r=r[s[t]]))return}r[i]=n}else r[e]=n;return s.join(".")}},384:function(t,e,n){"use strict";n(364);var r=n(371),s=n(368),i=n(393),o=n(378),a=n(394),l=n(392);const c=[];var d=n(396);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const h=Object(s.a)(t=>{const e=Object(d.a)(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof s?e:null}function r(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const n=t.properties;n&&(e=function(t){const e={};for(let n in t){const r=t[n];e[n]="function"==typeof r?{type:r}:r}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class s extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,c.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=r(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,r(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});var u=n(369);n.d(e,"a",(function(){return f}));
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
const p="3.3.0",_=window.ShadyCSS&&window.ShadyCSS.cssBuild,f=Object(s.a)(t=>{const e=h(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return p}static _finalizeClass(){e._finalizeClass.call(this);const t=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):r.c||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let i in t)e=this.prototype,n=i,r=t[i],s=t,r.computed&&(r.readOnly=!0),r.computed&&(e._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):e._createComputedProperty(n,r.computed,s)),r.readOnly&&!e._hasReadOnlyEffect(n)?e._createReadOnlyProperty(n,!r.computed):!1===r.readOnly&&e._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),r.reflectToAttribute&&!e._hasReflectEffect(n)?e._createReflectedProperty(n):!1===r.reflectToAttribute&&e._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),r.notify&&!e._hasNotifyEffect(n)?e._createNotifyingProperty(n):!1===r.notify&&e._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),r.observer&&e._createPropertyObserver(n,r.observer,s[r.observer]),e._addPropertyToAttributeMap(n);var e,n,r,s}static createObservers(t,e){const n=this.prototype;for(let r=0;r<t.length;r++)n._createMethodObserver(t[r],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!r.g||r.a)&&(e=a.a.import(t,"template"),r.g&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(o.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=r.e,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let r=e[n];"value"in r&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=r)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return Object(o.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;!function(t,e,n,r){if(!_){const s=e.content.querySelectorAll("style"),o=Object(i.c)(e),a=Object(i.b)(n),l=e.content.firstElementChild;for(let n=0;n<a.length;n++){let s=a[n];s.textContent=t._processStyleText(s.textContent,r),e.content.insertBefore(s,l)}let c=0;for(let e=0;e<o.length;e++){let n=o[e],i=s[c];i!==n?(n=n.cloneNode(!0),i.parentNode.insertBefore(n,i)):c++,n.textContent=t._processStyleText(n.textContent,r)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n)}(this,e,t,n?Object(o.c)(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(u.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t)),r.h&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(o.c)(this.importPath)),Object(o.c)(t,e)}static _parseTemplateContent(t,n,r){return n.dynamicFns=n.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,n,r)}static _addTemplatePropertyEffect(t,n,s){return!r.c||n in this._properties||console.warn(`Property '${n}' used in template but not declared in 'properties'; `+"attribute will not be observed."),e._addTemplatePropertyEffect.call(this,t,n,s)}}})},386:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=!(window.ShadyDOM&&window.ShadyDOM.inUse);let s,i;function o(t){s=(!t||!t.shimcssproperties)&&(r||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?s=window.ShadyCSS.nativeCss:window.ShadyCSS?(o(window.ShadyCSS),window.ShadyCSS=void 0):o(window.WebComponents&&window.WebComponents.flags);const l=s},387:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return i}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,s=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,i=/@media\s(.*)/},388:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var r=n(387);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function s(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function i(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}function o(t){const e=r.b.test(t)||r.c.test(t);return r.b.lastIndex=0,r.c.lastIndex=0,e}},389:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));n(364);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const r={},s=/-[a-z]/g,i=/([A-Z])/g;function o(t){return r[t]||(r[t]=t.indexOf("-")<0?t:t.replace(s,t=>t[1].toUpperCase()))}function a(t){return r[t]||(r[t]=t.replace(i,"-$1").toLowerCase())}},392:function(t,e,n){"use strict";n(364);var r=n(369),s=n(368),i=n(383),o=n(389),a=n(395);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l={"dom-if":!0,"dom-repeat":!0};function c(t){let e=t.getAttribute("is");if(e&&l[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function d(t,e){let n=e.parentInfo&&d(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,r=0;t;t=t.nextSibling)if(e.parentIndex===r++)return t}function h(t,e,n,r){r.id&&(e[r.id]=n)}function u(t,e,n){if(n.events&&n.events.length)for(let r,s=0,i=n.events;s<i.length&&(r=i[s]);s++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function p(t,e,n){n.templateInfo&&(e._templateInfo=n.templateInfo)}const _=Object(s.a)(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let r=!1,s=t;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(e.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(s,e,n)||r,s.firstChild&&this._parseTemplateChildNodes(s,e,n),s.hasAttributes&&s.hasAttributes()&&(r=this._parseTemplateNodeAttributes(s,e,n)||r),r}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let r,s=t.firstChild,i=0;s;s=r){if("template"==s.localName&&(s=c(s)),r=s.nextSibling,s.nodeType===Node.TEXT_NODE){let n=r;for(;n&&n.nodeType===Node.TEXT_NODE;)s.textContent+=n.textContent,r=n.nextSibling,t.removeChild(n),n=r;if(e.stripWhiteSpace&&!s.textContent.trim()){t.removeChild(s);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(s,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),s.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,n){let r=t,s=this._parseTemplate(r,e);return(s.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=s,!0}static _parseTemplateNodeAttributes(t,e,n){let r=!1,s=Array.from(t.attributes);for(let i,o=s.length-1;i=s[o];o--)r=this._parseTemplateNodeAttribute(t,e,n,i.name,i.value)||r;return r}static _parseTemplateNodeAttribute(t,e,n,r,s){return"on-"===r.slice(0,3)?(t.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:s}),!0):"id"===r&&(n.id=s,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),n=e.nodeInfoList,r=e.content||t.content,s=document.importNode(r,!0);s.__noInsertionPoint=!e.hasInsertionPoint;let i=s.nodeList=new Array(n.length);s.$={};for(let t,e=0,r=n.length;e<r&&(t=n[e]);e++){let n=i[e]=d(s,t);h(0,s.$,n,t),p(0,n,t),u(this,n,t)}return s=s}_addMethodEventListenerToNode(t,e,n,r){let s=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(r=r||t,0,n);return this._addEventListenerToNode(t,e,s),s}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}}});var f=n(371);n.d(e,"a",(function(){return Y}));
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
let m=0;const y={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},b=/[A-Z]/;function g(t,e){let n=t[e];if(n){if(!t.hasOwnProperty(e)){n=t[e]=Object.create(t[e]);for(let t in n){let e=n[t],r=n[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}}else n=t[e]={};return n}function w(t,e,n,r,s,i){if(e){let o=!1,a=m++;for(let l in n)v(t,e,a,l,n,r,s,i)&&(o=!0);return o}return!1}function v(t,e,n,r,s,o,a,l){let c=!1,d=e[a?Object(i.g)(r):r];if(d)for(let e,i=0,h=d.length;i<h&&(e=d[i]);i++)e.info&&e.info.lastRun===n||a&&!P(r,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,r,s,o,e.info,a,l),c=!0);return c}function P(t,e){if(e){let n=e.name;return n==t||!(!e.structured||!Object(i.b)(n,t))||!(!e.wildcard||!Object(i.c)(n,t))}return!0}function C(t,e,n,r,s){let i="string"==typeof s.method?t[s.method]:s.method,o=s.property;i?i.call(t,t.__data[o],r[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function O(t,e,n){let r=Object(i.g)(e);if(r!==e){return S(t,Object(o.a)(r)+"-changed",n[e],e),!0}return!1}function S(t,e,n,s){let i={value:n,queueProperty:!0};s&&(i.path=s),Object(r.a)(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function x(t,e,n,r,s,o){let a=(o?Object(i.g)(e):e)!=e?e:null,l=a?Object(i.a)(t,a):t.__data[e];a&&void 0===l&&(l=n[e]),S(t,s.eventName,l,a)}function E(t,e,n,r,s){let i=t.__data[e];f.f&&(i=Object(f.f)(i,s.attrName,"attribute",t)),t._propertyToAttribute(e,s.attrName,i)}function T(t,e,n,r,s){let i=R(t,e,n,r,s),o=s.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,i,!0):t[o]=i}function N(t,e,n,r,s,i,a){n.bindings=n.bindings||[];let l={kind:r,target:s,parts:i,literal:a,isCompound:1!==i.length};if(n.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(o.a)(s)+"-changed",l.listenerNegate=e}let c=e.nodeInfoList.length;for(let n=0;n<l.parts.length;n++){let r=l.parts[n];r.compoundIndex=n,A(t,e,l,r,c)}}function A(t,e,n,r,s){if(!r.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let i=r.dependencies,o={index:s,binding:n,part:r,evaluator:t};for(let n=0;n<i.length;n++){let r=i[n];"string"==typeof r&&((r=z(r)).wildcard=!0),t._addTemplatePropertyEffect(e,r.rootProperty,{fn:j,info:o,trigger:r})}}}function j(t,e,n,r,s,o,a){let l=a[s.index],c=s.binding,d=s.part;if(o&&d.source&&e.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let r=n[e];e=Object(i.i)(d.source,c.target,e),l._setPendingPropertyOrPath(e,r,!1,!0)&&t._enqueueClient(l)}else{!function(t,e,n,r,s){s=function(t,e,n,r){if(n.isCompound){let s=t.__dataCompoundStorage[n.target];s[r.compoundIndex]=e,e=s.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,s,n,r),f.f&&(s=Object(f.f)(s,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,s,n.target);else{let r=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?e[y.READ_ONLY]&&e[y.READ_ONLY][r]||e._setPendingProperty(r,s)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,s)}}(t,l,c,d,s.evaluator._evaluateBinding(t,d,e,n,r,o))}}function I(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),s=e.parts,i=new Array(s.length);for(let t=0;t<s.length;t++)i[t]=s[t].literal;let o=e.target;n[o]=i,e.literal&&"property"==e.kind&&("className"===o&&(t=Object(r.a)(t)),t[o]=e.literal)}}function k(t,e,n){if(n.listenerEvent){let r=n.parts[0];t.addEventListener(n.listenerEvent,(function(t){!function(t,e,n,r,s){let o,a=t.detail,l=a&&a.path;l?(r=Object(i.i)(n,r,l),o=a&&a.value):o=t.currentTarget[n],o=s?!o:o,e[y.READ_ONLY]&&e[y.READ_ONLY][r]||!e._setPendingPropertyOrPath(r,o,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,n.target,r.source,r.negate)}))}}function M(t,e,n,r,s,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:s,dynamicFn:i};for(let s,i=0;i<e.args.length&&(s=e.args[i]);i++)s.literal||t._addPropertyEffect(s.rootProperty,n,{fn:r,info:o,trigger:s});i&&t._addPropertyEffect(e.methodName,n,{fn:r,info:o})}function R(t,e,n,r,s){let i=t._methodHost||t,o=i[s.methodName];if(o){let r=t._marshalArgs(s.args,e,n);return o.apply(i,r)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const D=[],L=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function F(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function H(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:D};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let n=z(t);return n.literal||(e.static=!1),n}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function z(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},r=e[0];switch("-"===r&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=Object(i.g)(e),n.structured=Object(i.d)(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function $(t,e,n){let r=Object(i.a)(t,n);return void 0===r&&(r=e[n]),r}function B(t,e,n,r){t.notifyPath(n+".splices",{indexSplices:r}),t.notifyPath(n+".length",e.length)}function q(t,e,n,r,s,i){B(t,e,n,[{index:r,addedCount:s,removed:i,object:e,type:"splice"}])}const Y=Object(s.a)(t=>{const e=_(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return y}_initializeProperties(){super._initializeProperties(),J.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[y.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==y.READ_ONLY);let r=g(this,e)[t];r||(r=this[e][t]=[]),r.push(n)}_removePropertyEffect(t,e,n){let r=g(this,e)[t],s=r.indexOf(n);s>=0&&r.splice(s,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,y.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,y.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,y.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,y.COMPUTE)}_setPendingPropertyOrPath(t,e,n,r){if(r||Object(i.g)(Array.isArray(t)?t[0]:t)!==t){if(!r){let n=Object(i.a)(this,t);if(!(t=Object(i.h)(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let r=t.__dataLinkedPaths;if(r){let s;for(let o in r){let a=r[o];Object(i.c)(o,e)?(s=Object(i.i)(o,a,e),t._setPendingPropertyOrPath(s,n,!0,!0)):Object(i.c)(a,e)&&(s=Object(i.i)(a,o,e),t._setPendingPropertyOrPath(s,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||("className"===e&&(t=Object(r.a)(t)),t[e]=n)}_setPendingProperty(t,e,n){let r=this.__dataHasPaths&&Object(i.d)(t),s=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,s[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),r?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(r||this[y.NOTIFY]&&this[y.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[y.READ_ONLY]&&this[y.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,n,r){let s=t[y.COMPUTE];if(s){let i=e;for(;w(t,s,i,n,r);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}(this,e,n,r);let s=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,n,r),this._flushClients(),w(this,this[y.REFLECT],e,n,r),w(this,this[y.OBSERVE],e,n,r),s&&function(t,e,n,r,s){let i,o,a=t[y.NOTIFY],l=m++;for(let o in e)e[o]&&(a&&v(t,a,l,o,n,r,s)?i=!0:s&&O(t,o,n)&&(i=!0));i&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,s,e,n,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[y.PROPAGATE]&&w(this,this[y.PROPAGATE],t,e,n);let r=this.__templateInfo;for(;r;)w(this,r.propertyEffects,t,e,n,r.nodeList),r=r.nextTemplateInfo}linkPaths(t,e){t=Object(i.f)(t),e=Object(i.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(i.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};B(this,Object(i.a)(this,t,n),n.path,e)}get(t,e){return Object(i.a)(e||this,t)}set(t,e,n){n?Object(i.h)(n,t,e):this[y.READ_ONLY]&&this[y.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},r=Object(i.a)(this,t,n),s=r.length,o=r.push(...e);return e.length&&q(this,r,n.path,s,e.length,[]),o}pop(t){let e={path:""},n=Object(i.a)(this,t,e),r=Boolean(n.length),s=n.pop();return r&&q(this,n,e.path,n.length,0,[s]),s}splice(t,e,n,...r){let s,o={path:""},a=Object(i.a)(this,t,o);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),s=2===arguments.length?a.splice(e):a.splice(e,n,...r),(r.length||s.length)&&q(this,a,o.path,e,r.length,s),s}shift(t){let e={path:""},n=Object(i.a)(this,t,e),r=Boolean(n.length),s=n.shift();return r&&q(this,n,e.path,0,0,[s]),s}unshift(t,...e){let n={path:""},r=Object(i.a)(this,t,n),s=r.unshift(...e);return e.length&&q(this,r,n.path,0,e.length,[]),s}notifyPath(t,e){let n;if(1==arguments.length){let r={path:""};e=Object(i.a)(this,t,r),n=r.path}else n=Array.isArray(t)?Object(i.f)(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,y.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let r={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,y.OBSERVE,{fn:C,info:r,trigger:{name:t}}),n&&this._addPropertyEffect(e,y.OBSERVE,{fn:C,info:r,trigger:{name:e}})}_createMethodObserver(t,e){let n=H(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");M(this,n,y.OBSERVE,R,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,y.NOTIFY,{fn:x,info:{eventName:Object(o.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,y.REFLECT,{fn:E,info:{attrName:e}})}_createComputedProperty(t,e,n){let r=H(e);if(!r)throw new Error("Malformed computed expression '"+e+"'");M(this,r,y.COMPUTE,T,t,n)}_marshalArgs(t,e,n){const r=this.__data,s=[];for(let o=0,a=t.length;o<a;o++){let{name:a,structured:l,wildcard:c,value:d,literal:h}=t[o];if(!h)if(c){const t=Object(i.c)(a,e),s=$(r,n,t?e:a);d={path:t?e:a,value:s,base:t?Object(i.a)(r,a):s}}else d=l?$(r,n,a):r[a];s[o]=d}return s}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),r=this.__templateInfo==n;if(!r)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e&&((n=Object.create(n)).wasPreBound=r,!r&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=n,n.previousTemplateInfo=t,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let r=t.propertyEffects=t.propertyEffects||{};(r[e]=r[e]||[]).push(n)}_stampTemplate(t){J.beginHosting(this);let e=super._stampTemplate(t);J.endHosting(this);let n=this._bindTemplate(t,!0);if(n.nodeList=e.nodeList,!n.wasPreBound){let t=n.childNodes=[];for(let n=e.firstChild;n;n=n.nextSibling)t.push(n)}return e.templateInfo=n,function(t,e){let{nodeList:n,nodeInfoList:r}=e;if(r.length)for(let e=0;e<r.length;e++){let s=r[e],i=n[e],o=s.bindings;if(o)for(let e=0;e<o.length;e++){let n=o[e];I(i,n),k(i,t,n)}i.__dataHost=t}}(this,n),this.__dataReady&&w(this,n.propertyEffects,this.__data,null,!1,n.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let n=e.childNodes;for(let t=0;t<n.length;t++){let e=n[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,n,r){let s=e._parseTemplateNode.call(this,t,n,r);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,n);e&&(t.textContent=F(e)||" ",N(this,n,r,"text","textContent",e),s=!0)}return s}static _parseTemplateNodeAttribute(t,n,r,s,i){let a=this._parseBindings(i,n);if(a){let e=s,i="property";b.test(s)?i="attribute":"$"==s[s.length-1]&&(s=s.slice(0,-1),i="attribute");let l=F(a);return l&&"attribute"==i&&("class"==s&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(s)),t.setAttribute(s,l)),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(s=Object(o.b)(s)),N(this,n,r,i,s,a,l),!0}return e._parseTemplateNodeAttribute.call(this,t,n,r,s,i)}static _parseTemplateNestedTemplate(t,n,r){let s=e._parseTemplateNestedTemplate.call(this,t,n,r),i=r.templateInfo.hostProps;for(let t in i){N(this,n,r,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return s}static _parseBindings(t,e){let n,r=[],s=0;for(;null!==(n=L.exec(t));){n.index>s&&r.push({literal:t.slice(s,n.index)});let i=n[1][0],o=Boolean(n[2]),a=n[3].trim(),l=!1,c="",d=-1;"{"==i&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let h=H(a),u=[];if(h){let{args:t,methodName:n}=h;for(let e=0;e<t.length;e++){let n=t[e];n.literal||u.push(n)}let r=e.dynamicFns;(r&&r[n]||h.static)&&(u.push(n),h.dynamicFn=!0)}else u.push(a);r.push({source:a,mode:i,negate:o,customEvent:l,signature:h,dependencies:u,event:c}),s=L.lastIndex}if(s&&s<t.length){let e=t.substring(s);e&&r.push({literal:e})}return r.length?r:null}static _evaluateBinding(t,e,n,r,s,o){let a;return a=e.signature?R(t,n,r,0,e.signature):n!=e.source?Object(i.a)(t,e.source):o&&Object(i.d)(n)?Object(i.a)(t,n):t.__data[n],e.negate&&(a=!a),a}}});const J=new class{constructor(){this.stack=[]}registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},393:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return f}));var r=n(394),s=n(378);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i="link[rel=import][type~=css]",o="include",a="shady-unscoped";function l(t){return r.a.import(t)}function c(t){let e=t.body?t.body:t;const n=Object(s.b)(e.textContent,t.baseURI),r=document.createElement("style");return r.textContent=n,r}function d(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...h(e[t]));return n}function h(t){const e=l(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(..._(e));const n=e.querySelector("template");n&&t.push(...u(n,e.assetpath)),e._styles=t}return e._styles}function u(t,e){if(!t._styles){const n=[],r=t.content.querySelectorAll("style");for(let t=0;t<r.length;t++){let i=r[t],a=i.getAttribute(o);a&&n.push(...d(a).filter((function(t,e,n){return n.indexOf(t)===e}))),e&&(i.textContent=Object(s.b)(i.textContent,e)),n.push(i)}t._styles=n}return t._styles}function p(t){let e=l(t);return e?_(e):[]}function _(t){const e=[],n=t.querySelectorAll(i);for(let t=0;t<n.length;t++){let r=n[t];if(r.import){const t=r.import,n=r.hasAttribute(a);if(n&&!t._unscopedStyle){const e=c(t);e.setAttribute(a,""),t._unscopedStyle=e}else t._style||(t._style=c(t));e.push(n?t._unscopedStyle:t._style)}}return e}function f(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=m(e[t]);return n}function m(t){let e=l(t);if(e&&void 0===e._cssText){let t=y(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const r=u(t,e);for(let t=0;t<r.length;t++){let e=r[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function y(t){let e="",n=_(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}},394:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(364);var r=n(378),s=n(371);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let i={},o={};function a(t,e){i[t]=o[t.toLowerCase()]=e}function l(t){return i[t]||o[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=l(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,r){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(r.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(r.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(s.g&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=i,customElements.define("dom-module",c)},395:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(364);var r=n(368),s=n(389),i=n(396);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)o[t[e]]=!0;a=Object.getPrototypeOf(a)}const l=Object(r.a)(t=>{const e=Object(i.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(s.b)(t[e]))}static attributeNameForProperty(t){return Object(s.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!o[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},396:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(364);var r=n(368),s=n(377),i=n(369);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=s.a,a=Object(r.a)(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let r=this.__data[t],s=this._shouldPropertyChange(t,e,r);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=r),this.__data[t]=e,this.__dataPending[t]=e),s}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,o.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n))}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,r){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,r)}_attributeToProperty(t,e,n){if(!this.__serializing){const r=this.__dataAttributes,s=r&&r[t]||t;this[s]=this._deserializeValue(e,n||this.constructor.typeForProperty(s))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const r=this._serializeValue(e);"class"!==n&&"name"!==n&&"slot"!==n||(t=Object(i.a)(t)),void 0===r?t.removeAttribute(n):t.setAttribute(n,r)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}})},397:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(364);var r=n(368),s=n(398);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=Object(r.a)(t=>{return class extends t{_addEventListenerToNode(t,e,n){Object(s.a)(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Object(s.b)(t,e,n)||super._removeEventListenerFromNode(t,e,n)}}})},398:function(t,e,n){"use strict";n.d(e,"a",(function(){return D})),n.d(e,"b",(function(){return L})),n.d(e,"c",(function(){return H}));n(364);var r=n(377),s=n(375),i=n(371),o=n(369);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,l="__polymerGestures",c="__polymerGesturesHandled",d="__polymerGesturesTouchAction",h=25,u=5,p=2500,_=["mousedown","mousemove","mouseup","click"],f=[0,1,4,2],m=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function y(t){return _.indexOf(t)>-1}let b=!1;function g(t){if(!y(t)&&"touchend"!==t)return a&&b&&i.d?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){b=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let w=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const v=[],P={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},C={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function O(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let r=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<r.length;t++)e.push(r[t])}}return e}let S=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[c]={skip:!0},"click"===t.type)){let e=!1,r=j(t);for(let t=0;t<r.length;t++){if(r[t].nodeType===Node.ELEMENT_NODE)if("label"===r[t].localName)v.push(r[t]);else if(n=r[t],P[n.localName]){let n=O(r[t]);for(let t=0;t<n.length;t++)e=e||v.indexOf(n[t])>-1}if(r[t]===T.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function x(t){let e=w?["click"]:_;for(let n,r=0;r<e.length;r++)n=e[r],t?(v.length=0,document.addEventListener(n,S,!0)):document.removeEventListener(n,S,!0)}function E(t){let e=t.type;if(!y(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!m&&(e=f[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let T={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function N(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function A(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}i.b&&document.addEventListener("touchend",(function(t){if(!i.b)return;T.mouse.mouseIgnoreJob||x(!0),T.mouse.target=j(t)[0],T.mouse.mouseIgnoreJob=s.a.debounce(T.mouse.mouseIgnoreJob,r.b.after(p),(function(){x(),T.mouse.target=null,T.mouse.mouseIgnoreJob=null}))}),!!b&&{passive:!0});const j=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],I={},k=[];function M(t){const e=j(t);return e.length>0?e[0]:t.target}function R(t){let e,n=t.type,r=t.currentTarget[l];if(!r)return;let s=r[n];if(s){if(!t[c]&&(t[c]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(T.touch.id=e.identifier),T.touch.id!==e.identifier)return;a||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)T.touch.x=e.clientX,T.touch.y=e.clientY,T.touch.scrollDecided=!1;else if("touchmove"===n){if(T.touch.scrollDecided)return;T.touch.scrollDecided=!0;let n=function(t){let e="auto",n=j(t);for(let t,r=0;r<n.length;r++)if((t=n[r])[d]){e=t[d];break}return e}(t),r=!1,s=Math.abs(T.touch.x-e.clientX),i=Math.abs(T.touch.y-e.clientY);t.cancelable&&("none"===n?r=!0:"pan-x"===n?r=i>s:"pan-y"===n&&(r=s>i)),r?t.preventDefault():$("track")}}(t)}if(!(e=t[c]).skip){for(let n,r=0;r<k.length;r++)s[(n=k[r]).name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let r,i=0;i<k.length;i++)s[(r=k[i]).name]&&!e[r.name]&&(e[r.name]=!0,r[n](t))}}}function D(t,e,n){return!!I[e]&&(function(t,e,n){let r=I[e],s=r.deps,i=r.name,o=t[l];o||(t[l]=o={});for(let e,n,r=0;r<s.length;r++)e=s[r],w&&y(e)&&"click"!==e||((n=o[e])||(o[e]=n={_count:0}),0===n._count&&t.addEventListener(e,R,g(e)),n[i]=(n[i]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),r.touchAction&&H(t,r.touchAction)}(t,e,n),!0)}function L(t,e,n){return!!I[e]&&(function(t,e,n){let r=I[e],s=r.deps,i=r.name,o=t[l];if(o)for(let e,n,r=0;r<s.length;r++)e=s[r],(n=o[e])&&n[i]&&(n[i]=(n[i]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,R,g(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function F(t){k.push(t);for(let e=0;e<t.emits.length;e++)I[t.emits[e]]=t}function H(t,e){a&&t instanceof HTMLElement&&r.a.run(()=>{t.style.touchAction=e}),t[d]=e}function z(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=n,Object(o.a)(t).dispatchEvent(r),r.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function $(t){let e=function(t){for(let e,n=0;n<k.length;n++){e=k[n];for(let n,r=0;r<e.emits.length;r++)if((n=e.emits[r])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function B(t,e,n,r){e&&z(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:r,prevent:function(t){return $(t)}})}function q(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let r=Math.abs(t.x-e),s=Math.abs(t.y-n);return r>=u||s>=u}function Y(t,e,n){if(!e)return;let r,s=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],o=i.x-t.x,a=i.y-t.y,l=0;s&&(r=i.x-s.x,l=i.y-s.y),z(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:o,dy:a,ddx:r,ddy:l,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),r=n;for(;r&&r.shadowRoot&&!window.ShadyDOM;){if(r===(r=r.shadowRoot.elementFromPoint(t,e)))break;r&&(n=r)}return n}(n.clientX,n.clientY)}})}function J(t,e,n){let r=Math.abs(e.clientX-t.x),s=Math.abs(e.clientY-t.y),i=M(n||e);!i||C[i.localName]&&i.hasAttribute("disabled")||(isNaN(r)||isNaN(s)||r<=h&&s<=h||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=M(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),r=t.pageX,s=t.pageY;return!(r>=n.left&&r<=n.right&&s>=n.top&&s<=n.bottom)}return!1}(e))&&(t.prevent||z(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}F({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){A(this.info)},mousedown:function(t){if(!E(t))return;let e=M(t),n=this;N(this.info,(function(t){E(t)||(B("up",e,t),A(n.info))}),(function(t){E(t)&&B("up",e,t),A(n.info)})),B("down",e,t)},touchstart:function(t){B("down",M(t),t.changedTouches[0],t)},touchend:function(t){B("up",M(t),t.changedTouches[0],t)}}),F({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,A(this.info)},mousedown:function(t){if(!E(t))return;let e=M(t),n=this,r=function(t){let r=t.clientX,s=t.clientY;q(n.info,r,s)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&$("tap"),n.info.addMove({x:r,y:s}),E(t)||(n.info.state="end",A(n.info)),e&&Y(n.info,e,t),n.info.started=!0)};N(this.info,r,(function(t){n.info.started&&r(t),A(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=M(t),n=t.changedTouches[0],r=n.clientX,s=n.clientY;q(this.info,r,s)&&("start"===this.info.state&&$("tap"),this.info.addMove({x:r,y:s}),Y(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=M(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),Y(this.info,e,n))}}),F({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){E(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){E(t)&&J(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){J(this.info,t.changedTouches[0],t)}})},399:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(364);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e,n){return{index:t,removed:e,addedCount:n}}const s=0,i=1,o=2,a=3;function l(t,e,n,l,c,h){let u,p=0,_=0,f=Math.min(n-e,h-c);if(0==e&&0==c&&(p=function(t,e,n){for(let r=0;r<n;r++)if(!d(t[r],e[r]))return r;return n}(t,l,f)),n==t.length&&h==l.length&&(_=function(t,e,n){let r=t.length,s=e.length,i=0;for(;i<n&&d(t[--r],e[--s]);)i++;return i}(t,l,f-p)),c+=p,h-=_,(n-=_)-(e+=p)==0&&h-c==0)return[];if(e==n){for(u=r(e,[],0);c<h;)u.removed.push(l[c++]);return[u]}if(c==h)return[r(e,[],n-e)];let m=function(t){let e=t.length-1,n=t[0].length-1,r=t[e][n],l=[];for(;e>0||n>0;){if(0==e){l.push(o),n--;continue}if(0==n){l.push(a),e--;continue}let c,d=t[e-1][n-1],h=t[e-1][n],u=t[e][n-1];(c=h<u?h<d?h:d:u<d?u:d)==d?(d==r?l.push(s):(l.push(i),r=d),e--,n--):c==h?(l.push(a),e--,r=h):(l.push(o),n--,r=u)}return l.reverse(),l}(function(t,e,n,r,s,i){let o=i-s+1,a=n-e+1,l=new Array(o);for(let t=0;t<o;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let n=1;n<o;n++)for(let i=1;i<a;i++)if(d(t[e+i-1],r[s+n-1]))l[n][i]=l[n-1][i-1];else{let t=l[n-1][i]+1,e=l[n][i-1]+1;l[n][i]=t<e?t:e}return l}(t,e,n,l,c,h));u=void 0;let y=[],b=e,g=c;for(let t=0;t<m.length;t++)switch(m[t]){case s:u&&(y.push(u),u=void 0),b++,g++;break;case i:u||(u=r(b,[],0)),u.addedCount++,b++,u.removed.push(l[g]),g++;break;case o:u||(u=r(b,[],0)),u.addedCount++,b++;break;case a:u||(u=r(b,[],0)),u.removed.push(l[g]),g++}return u&&y.push(u),y}function c(t,e){return l(t,0,t.length,e,0,e.length)}function d(t,e){return t===e}},402:function(t,e,n){"use strict";var r=n(386);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class s{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function i(t){return function t(e,n){let r=n.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=r.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;r=(r=(r=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(r=n.substring(t,e.start-1))).replace(d.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);let s=e.parsedSelector=e.selector=r.trim();e.atRule=0===s.indexOf(p),e.atRule?0===s.indexOf(u)?e.type=a.MEDIA_RULE:s.match(d.keyframesRule)&&(e.type=a.KEYFRAMES_RULE,e.keyframesName=e.selector.split(d.multipleSpaces).pop()):0===s.indexOf(h)?e.type=a.MIXIN_RULE:e.type=a.STYLE_RULE}let s=e.rules;if(s)for(let e,r=0,i=s.length;r<i&&(e=s[r]);r++)t(e,n);return e}(function(t){let e=new s;e.start=0,e.end=t.length;let n=e;for(let r=0,i=t.length;r<i;r++)if(t[r]===l){n.rules||(n.rules=[]);let t=n,e=t.rules[t.rules.length-1]||null;(n=new s).start=r+1,n.parent=t,n.previous=e,t.rules.push(n)}else t[r]===c&&(n.end=r+1,n=n.parent||e);return e}(t=t.replace(d.comments,"").replace(d.port,"")),t)}function o(t,e,n=""){let r="";if(t.cssText||t.rules){let n=t.rules;if(n&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(h)}(n))for(let t,s=0,i=n.length;s<i&&(t=n[s]);s++)r=o(t,e,r);else(r=(r=e?t.cssText:function(t){return function(t){return t.replace(d.mixinApply,"").replace(d.varApply,"")}(t=function(t){return t.replace(d.customProp,"").replace(d.mixinProp,"")}(t))}(t.cssText)).trim())&&(r="  "+r+"\n")}return r&&(t.selector&&(n+=t.selector+" "+l+"\n"),n+=r,t.selector&&(n+=c+"\n\n")),n}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",u="@media",p="@";var _=n(387);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const f=new Set,m="shady-unscoped";function y(t){const e=t.textContent;if(!f.has(e)){f.add(e);const n=t.cloneNode(!0);document.head.appendChild(n)}}function b(t){return t.hasAttribute(m)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function g(t,e){return t?("string"==typeof t&&(t=i(t)),e&&v(t,e),o(t,r.c)):""}function w(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=i(t.textContent)),t.__cssRules||null}function v(t,e,n,r){if(!t)return;let s=!1,i=t.type;if(r&&i===a.MEDIA_RULE){let e=t.selector.match(_.a);e&&(window.matchMedia(e[1]).matches||(s=!0))}i===a.STYLE_RULE?e(t):n&&i===a.KEYFRAMES_RULE?n(t):i===a.MIXIN_RULE&&(s=!0);let o=t.rules;if(o&&!s)for(let t,s=0,i=o.length;s<i&&(t=o[s]);s++)v(t,e,n,r)}function P(t,e){let n=0;for(let r=e,s=t.length;r<s;r++)if("("===t[r])n++;else if(")"===t[r]&&0==--n)return r;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;const C="css-build";function O(t){if(void 0!==r.a)return r.a;if(void 0===t.__cssBuild){const e=t.getAttribute(C);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===C)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function S(t){return""!==O(t)}var x=n(388);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const E=/;\s*/m,T=/^\s*(initial)|(inherit)\s*$/,N=/\s*!important/,A="_-_";class j{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let I=null;class k{constructor(){this._currentElement=null,this._measureElement=null,this._map=new j}detectMixin(t){return Object(x.a)(t)}gatherStyles(t){const e=function(t){const e=[],n=t.querySelectorAll("style");for(let t=0;t<n.length;t++){const s=n[t];b(s)?r.d||(y(s),s.parentNode.removeChild(s)):(e.push(s.textContent),s.parentNode.removeChild(s))}return e.join("").trim()}(t.content);if(e){const n=document.createElement("style");return n.textContent=e,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,e):null}transformStyle(t,e=""){let n=w(t);return this.transformRules(n,e),t.textContent=g(n),n}transformCustomStyle(t){let e=w(t);return v(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=g(e),e}transformRules(t,e){this._currentElement=e,v(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(_.c,(t,n,r,s)=>this._produceCssProperties(t,n,r,s,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const n={};let r=!1;return v(e,e=>{(r=r||e===t)||e.selector===t.selector&&Object.assign(n,this._cssTextToMap(e.parsedCssText))}),n}_consumeCssProperties(t,e){let n=null;for(;n=_.b.exec(t);){let r=n[0],s=n[1],i=n.index,o=i+r.indexOf("@apply"),a=i+r.length,l=t.slice(0,o),c=t.slice(a),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let h=this._atApplyToCssProperties(s,d);t=`${l}${h}${c}`,_.b.lastIndex=i+h.length}return t}_atApplyToCssProperties(t,e){t=t.replace(E,"");let n=[],r=this._map.get(t);if(r||(this._map.set(t,{}),r=this._map.get(t)),r){let s,i,o;this._currentElement&&(r.dependants[this._currentElement]=!0);const a=r.properties;for(s in a)o=e&&e[s],i=[s,": var(",t,A,s],o&&i.push(",",o.replace(N,"")),i.push(")"),N.test(a[s])&&i.push(" !important"),n.push(i.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,e){let n=T.exec(e);return n&&(e=n[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let n,r,s=t.split(";"),i={};for(let t,o,a=0;a<s.length;a++)(t=s[a])&&(o=t.split(":")).length>1&&(n=o[0].trim(),r=o.slice(1).join(":"),e&&(r=this._replaceInitialOrInherit(n,r)),i[n]=r);return i}_invalidateMixinEntry(t){if(I)for(let e in t.dependants)e!==this._currentElement&&I(e)}_produceCssProperties(t,e,n,r,s){if(n&&function t(e,n){let r=e.indexOf("var(");if(-1===r)return n(e,"","","");let s=P(e,r+3),i=e.substring(r+4,s),o=e.substring(0,r),a=t(e.substring(s+1),n),l=i.indexOf(",");return-1===l?n(o,i.trim(),"",a):n(o,i.substring(0,l).trim(),i.substring(l+1).trim(),a)}(n,(t,e)=>{e&&this._map.get(e)&&(r=`@apply ${e};`)}),!r)return t;let i=this._consumeCssProperties(""+r,s),o=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(i,!0),l=a,c=this._map.get(e),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(e,l);let h,u,p=[],_=!1;for(h in l)void 0===(u=a[h])&&(u="initial"),!d||h in d||(_=!0),p.push(`${e}${A}${h}: ${u}`);return _&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(o=`${t};${o}`),`${o}${p.join("; ")};`}}k.prototype.detectMixin=k.prototype.detectMixin,k.prototype.transformStyle=k.prototype.transformStyle,k.prototype.transformCustomStyle=k.prototype.transformCustomStyle,k.prototype.transformRules=k.prototype.transformRules,k.prototype.transformRule=k.prototype.transformRule,k.prototype.transformTemplate=k.prototype.transformTemplate,k.prototype._separator=A,Object.defineProperty(k.prototype,"invalidCallback",{get:()=>I,set(t){I=t}});var M=k;
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
*/const D="_applyShimCurrentVersion",L="_applyShimNextVersion",F="_applyShimValidatingVersion",H=Promise.resolve();function z(t){let e=R[t];e&&function(t){t[D]=t[D]||0,t[F]=t[F]||0,t[L]=(t[L]||0)+1}(e)}function $(t){return t[D]===t[L]}function B(t){return!$(t)&&t[F]===t[L]}function q(t){t[F]=t[L],t._validating||(t._validating=!0,H.then((function(){t[D]=t[L],t._validating=!1})))}n(403);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Y=new M;class J{constructor(){this.customStyleInterface=null,Y.invalidCallback=z}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{Y.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),S(t))return;R[e]=t;let n=Y.transformTemplate(t,e);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let n=t[e],r=this.customStyleInterface.getStyleForCustomStyle(n);r&&Y.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(x.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,n="",r="";return e?e.indexOf("-")>-1?n=e:(r=e,n=t.getAttribute&&t.getAttribute("is")||""):(n=t.is,r=t.extends),{is:n,typeExtension:r}}(t),n=R[e];if((!n||!S(n))&&n&&!$(n)){B(n)||(this.prepareTemplate(n,e),q(n));let r=t.shadowRoot;if(r){let t=r.querySelector("style");t&&(t.__cssRules=n._styleAst,t.textContent=g(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new J;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,n,r){t.flushCustomStyles(),t.prepareTemplate(e,n)},prepareTemplateStyles(t,e,n){window.ShadyCSS.prepareTemplate(t,e,n)},prepareTemplateDom(t,e){},styleSubtree(e,n){t.flushCustomStyles(),t.styleSubtree(e,n)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(x.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:r.c,nativeShadow:r.d,cssBuild:r.a,disableRuntime:r.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=Y;var U=n(384),V=n(397),X=n(395),W=n(368);
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
const G=/:host\(:dir\((ltr|rtl)\)\)/g,Z=':host([dir="$1"])',K=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Q=':host([dir="$2"]) $1',tt=/:dir\((?:ltr|rtl)\)/,et=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),nt=[];let rt=null,st="";function it(){st=document.documentElement.getAttribute("dir")}function ot(t){if(!t.__autoDirOptOut){t.setAttribute("dir",st)}}function at(){it(),st=document.documentElement.getAttribute("dir");for(let t=0;t<nt.length;t++)ot(nt[t])}const lt=Object(W.a)(t=>{et||rt||(it(),(rt=new MutationObserver(at)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(X.a)(t);class n extends e{static _processStyleText(t,n){return t=e._processStyleText.call(this,t,n),!et&&tt.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=(e=e.replace(G,Z)).replace(K,Q)}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(rt&&rt.takeRecords().length&&at(),nt.push(this),ot(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=nt.indexOf(this);t>-1&&nt.splice(t,1)}}}return n.__activateDir=!1,n});n(364);
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
function ct(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?ct():window.addEventListener("DOMContentLoaded",ct);var dt=n(366),ht=n(398),ut=n(375),pt=n(377),_t=n(383),ft=n(369);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const mt=window.ShadyDOM,yt=window.ShadyCSS;function bt(t,e){return Object(ft.a)(t).getRootNode()===e}n.d(e,"a",(function(){return wt}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let gt=window.ShadyCSS;const wt=Object(W.a)(t=>{const e=lt(Object(V.a)(Object(U.a)(t))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,n,r){e!==n&&(super.attributeChangedCallback(t,e,n,r),this.attributeChanged(t,e,n))}attributeChanged(t,e,n){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,n){this._propertyToAttribute(t,e,n)}serializeValueToAttribute(t,e,n){this._valueToNodeAttribute(n||this,t,e)}extend(t,e){if(!t||!e)return t||e;let n=Object.getOwnPropertyNames(e);for(let r,s=0;s<n.length&&(r=n[s]);s++){let n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n)}return t}mixin(t,e){for(let n in e)t[n]=e[n];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,n){n=n||{},e=null==e?{}:e;let r=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});r.detail=e;let s=n.node||this;return Object(ft.a)(s).dispatchEvent(r),r}listen(t,e,n){t=t||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),s=r.get(t);s||(s={},r.set(t,s));let i=e+n;s[i]||(s[i]=this._addMethodEventListenerToNode(t,e,n,this))}unlisten(t,e,n){t=t||this;let r=this.__boundListeners&&this.__boundListeners.get(t),s=e+n,i=r&&r[s];i&&(this._removeEventListenerFromNode(t,e,i),r[s]=null)}setScrollDirection(t,e){Object(ht.c)(e||this,n[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(ft.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(dt.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(dt.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(dt.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let n,r=0;n=t[r];r++)n.nodeType!==Node.COMMENT_NODE&&e.push(n.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(dt.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(ft.a)(this).contains(t)&&Object(ft.a)(this).getRootNode()===Object(ft.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(ft.a)(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!mt||!yt)return null;if(!mt.handlesDynamicScoping)return null;const n=yt.ScopingShim;if(!n)return null;const r=n.scopeForNode(t),s=Object(ft.a)(t).getRootNode(),i=t=>{if(!bt(t,s))return;const e=Array.from(mt.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const i=e[t];if(!bt(i,s))continue;const o=n.currentScopeForNode(i);o!==r&&(""!==o&&n.unscopeNode(i,o),n.scopeNode(i,r))}};if(i(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const n=t[e];for(let t=0;t<n.addedNodes.length;t++){const e=n.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&i(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return gt.getComputedStyleValue(this,t)}debounce(t,e,n){return this._debouncers=this._debouncers||{},this._debouncers[t]=ut.a.debounce(this._debouncers[t],n>0?pt.b.after(n):pt.a,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?pt.b.run(t.bind(this),e):~pt.a.run(t.bind(this))}cancelAsync(t){t<0?pt.a.cancel(~t):pt.b.cancel(t)}create(t,e){let n=document.createElement(t);if(e)if(n.setProperties)n.setProperties(e);else for(let t in e)n[t]=e[t];return n}elementMatches(t,e){return Object(dt.c)(e||this,t)}toggleAttribute(t,e){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(e=!n.hasAttribute(t)),e?(Object(ft.a)(n).setAttribute(t,""),!0):(Object(ft.a)(n).removeAttribute(t),!1)}toggleClass(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?n.classList.add(t):n.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,n,r){r=r||this,this.transform("translate3d("+t+","+e+","+n+")",r)}arrayDelete(t,e){let n;if(Array.isArray(t)){if((n=t.indexOf(e))>=0)return t.splice(n,1)}else{if((n=Object(_t.a)(this,t).indexOf(e))>=0)return this.splice(t,n,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return r.prototype.is="",r})},403:function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r,s=null,i=window.HTMLImports&&window.HTMLImports.whenReady||null;function o(t){requestAnimationFrame((function(){i?i(t):(s||(s=new Promise(t=>{r=t}),"complete"===document.readyState?r():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&r()})),s.then((function(){t&&t()})))}))}n.d(e,"a",(function(){return h}));const a="__seenByShadyCSS",l="__shadyCSSCachedStyle";let c=null,d=null;class h{constructor(){this.customStyles=[],this.enqueued=!1,o(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&d&&(this.enqueued=!0,o(d))}addCustomStyle(t){t[a]||(t[a]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[l])return t[l];let e;return e=t.getStyle?t.getStyle():t}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[l])continue;const r=this.getStyleForCustomStyle(n);if(r){const t=r.__appliedElement||r;c&&c(t),n[l]=t}}return t}}h.prototype.addCustomStyle=h.prototype.addCustomStyle,h.prototype.getStyleForCustomStyle=h.prototype.getStyleForCustomStyle,h.prototype.processStyles=h.prototype.processStyles,Object.defineProperties(h.prototype,{transformCallback:{get:()=>c,set(t){c=t}},validateCallback:{get:()=>d,set(t){let e=!1;d||(e=!0),d=t,e&&this.enqueueDocumentValidation()}}})}}]);