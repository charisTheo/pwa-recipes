(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{360:function(t,e,n){"use strict";var s=n(401),r=(n(363),n(362),n(390)),i=n(364);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function o(t,e,n,s,r){let i;r&&(i="object"==typeof n&&null!==n,i&&(s=t.__dataTemp[e]));let o=s!==n&&(s==s||n==n);return i&&o&&(t.__dataTemp[e]=n),o}const a=Object(i.a)(t=>class extends t{_shouldPropertyChange(t,e,n){return o(this,t,e,n,!0)}}),l=Object(i.a)(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return o(this,t,e,n,this.mutableData)}});a._mutablePropertyChange=o;var c=n(368),d=n(365);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let h=null;function u(){return h}u.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:u,writable:!0}});const p=Object(r.a)(u),_=a(p);const f=Object(r.a)(class{});class m extends f{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(t,e,n)}}_showHideChildren(t){let e=this.children;for(let n=0;n<e.length;n++){let s=e[n];if(Boolean(t)!=Boolean(s.__hideTemplateChildren__))if(s.nodeType===Node.TEXT_NODE)t?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if("slot"===s.localName)if(t)s.__polymerReplaced__=document.createComment("hidden-slot"),Object(d.a)(Object(d.a)(s).parentNode).replaceChild(s.__polymerReplaced__,s);else{const t=s.__polymerReplaced__;t&&Object(d.a)(Object(d.a)(t).parentNode).replaceChild(s,t)}else s.style&&(t?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=t,s._showHideChildren&&s._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}m.prototype.__dataHost,m.prototype.__templatizeOptions,m.prototype._methodHost,m.prototype.__templatizeOwner,m.prototype.__hostProps;const y=a(m);function b(t){let e=t.__dataHost;return e&&e._methodHost||e}function g(t,e,n){let s=n.mutableData?y:m;C.mixin&&(s=C.mixin(s));let r=class extends s{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(t),function(t,e,n,s){let r=n.hostProps||{};for(let e in s.instanceProps){delete r[e];let n=s.notifyInstanceProp;n&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:P(e,n)})}if(s.forwardHostProp&&e.__dataHost)for(let e in r)n.hasHostProps||(n.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(r,t,e,n),r}function w(t,e,n){let s=n.forwardHostProp;if(s&&e.hasHostProps){let r=e.templatizeTemplateClass;if(!r){let t=n.mutableData?_:p;r=e.templatizeTemplateClass=class extends t{};let i=e.hostProps;for(let t in i)r.prototype._addPropertyEffect("_host_"+t,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:v(t,s)}),r.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){h=t,Object.setPrototypeOf(t,e.prototype),new e,h=null}(t,r),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function v(t,e){return function(t,n,s){e.call(t.__templatizeOwner,n.substring("_host_".length),s[n])}}function P(t,e){return function(t,n,s){e.call(t.__templatizeOwner,t,n,s[n])}}function C(t,e,n){if(c.g&&!b(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let s=(e?e.constructor:m)._parseTemplate(t),r=s.templatizeInstanceClass;r||(r=g(t,s,n),s.templatizeInstanceClass=r),w(t,s,n);let i=class extends r{};return i.prototype._methodHost=b(t),i.prototype.__dataHost=t,i.prototype.__templatizeOwner=e,i.prototype.__hostProps=s.hostProps,i=i,i}function O(t,e){let n;for(;e;)if(n=e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=Object(d.a)(e).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var S=n(396);
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
*/const T=Object(S.a)(l(Object(r.a)(HTMLElement)));customElements.define("dom-bind",class extends T{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),c.g)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,n,s){this.mutableData=!0}connectedCallback(){E()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(d.a)(Object(d.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var N=n(381),A=n(361);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const j=Object(N.a)(HTMLElement);var I=n(371),k=n(377),M=n(379),R=n(372);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const D=l(j);class L extends D{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),E()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(d.a)(Object(d.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=C(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let n=this.__instances;for(let s,r=0;r<n.length&&(s=n[r]);r++)s.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if(Object(M.e)(this.as,e)){let s=t[this.itemsIndexAs];e==this.as&&(this.items[s]=n);let r=Object(M.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,e);this.notifyPath(r,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=I.a.debounce(this.__renderDebouncer,e>0?R.b.after(e):R.a,t.bind(this)),Object(k.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(k.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;this.__filterFn&&(e=e.filter((e,n,s)=>this.__filterFn(t[e],n,s))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n]));const n=this.__itemsIdxToInstIdx={};let s=0;const r=Math.min(e.length,this.__limit);for(;s<r;s++){let r=this.__instances[s],i=e[s],o=t[i];n[i]=s,r?(r._setPendingProperty(this.as,o),r._setPendingProperty(this.indexAs,s),r._setPendingProperty(this.itemsIndexAs,i),r._flushProperties()):this.__insertInstance(o,s,i)}for(let t=this.__instances.length-1;t>=s;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const n=Object(d.a)(e.root);for(let t=0;t<e.children.length;t++){let s=e.children[t];n.appendChild(s)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,n){let s={};return s[this.as]=t,s[this.indexAs]=e,s[this.itemsIndexAs]=n,new this.__ctor(s)}__insertInstance(t,e,n){let s=this.__pool.pop();s?(s._setPendingProperty(this.as,t),s._setPendingProperty(this.indexAs,e),s._setPendingProperty(this.itemsIndexAs,n),s._flushProperties()):s=this.__stampInstance(t,e,n);let r=this.__instances[e+1],i=r?r.children[0]:this;return Object(d.a)(Object(d.a)(this).parentNode).insertBefore(s.root,i),this.__instances[e]=s,s}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),s=n.indexOf("."),r=s<0?n:n.substring(0,s);if(r==parseInt(r,10)){let t=s<0?"":n.substring(s+1);this.__handleObservedPaths(t);let i=this.__itemsIdxToInstIdx[r],o=this.__instances[i];if(o){let n=this.as+(t?"."+t:"");o._setPendingPropertyOrPath(n,e,!1,!0),o._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return O(this.template,t)}}customElements.define(L.is,L);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class F extends j{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=I.a.debounce(this.__renderDebouncer,R.a,()=>this.__render()),Object(k.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(d.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(d.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),E()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){Object(k.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Object(d.a)(this).parentNode;if(t){if(!this.__ctor){let t=Object(d.a)(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Object(d.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=C(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(M.g)(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Object(d.a)(this).previousSibling!==e[e.length-1])for(let n,s=0;s<e.length&&(n=e[s]);s++)Object(d.a)(t).insertBefore(n,this)}}else this.__instance=new this.__ctor,Object(d.a)(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(d.a)(t[0]).parentNode;if(e){e=Object(d.a)(e);for(let n,s=0;s<t.length&&(n=t[s]);s++)e.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(F.is,F);var H=n(398);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let z=Object(i.a)(t=>{let e=Object(N.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let n=e.path;if(n==JSCompiler_renameProperty("items",this)){let n=e.base||[],s=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),s){let t=Object(H.a)(n,s);this.__applySplices(t)}this.__lastItems=n,this.__lastMulti=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(e.value.indexSplices);else{let t=n.slice((JSCompiler_renameProperty("items",this)+".").length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let n=0;n<t.length;n++){let s=t[n];e.forEach((t,n)=>{t<s.index||(t>=s.index+s.removed.length?e.set(n,t+s.addedCount-s.removed.length):e.set(n,-1))});for(let t=0;t<s.addedCount;t++){let n=s.index+t;e.has(this.items[n])&&e.set(this.items[n],n)}}this.__updateLinks();let n=0;e.forEach((t,s)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,e.delete(s)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((n,s)=>{e==t++&&this.deselect(s)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let n;this.__selectedMap.delete(t),this.multi&&(n=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(j);class B extends z{static get is(){return"array-selector"}static get template(){return null}}customElements.define(B.is,B);var $=n(402),q=n(385),Y=n(383);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const V=new $.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){V.processStyles(),Object(q.c)(t,e)},styleElement(t){V.processStyles()},styleDocument(t){V.processStyles(),Object(q.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(q.b)(t,e),flushCustomStyles(){},nativeCss:Y.c,nativeShadow:Y.d,cssBuild:Y.a,disableRuntime:Y.b}),window.ShadyCSS.CustomStyleInterface=V;var J=n(391);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const U=window.ShadyCSS.CustomStyleInterface;class X extends HTMLElement{constructor(){super(),this._style=null,U.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=Object(J.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let W;window.customElements.define("custom-style",X),W=a._mutablePropertyChange;Boolean;n.d(e,"a",(function(){return G})),n.d(e,"b",(function(){return A.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const G=Object(s.a)(HTMLElement).prototype},361:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(362);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class s{constructor(t){this.value=t.toString()}toString(){return this.value}}function r(t){if(t instanceof s)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}const i=function(t,...e){const n=document.createElement("template");return n.innerHTML=e.reduce((e,n,i)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof s)return r(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(n)+t[i+1],t[0]),n}},362:function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},363:function(t,e,n){"use strict";var s=n(401),r=n(368);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},o);function l(t,e,n,s){!function(t,e,n){const s=t._noAccessors,r=Object.getOwnPropertyNames(t);for(let i=0;i<r.length;i++){let o=r[i];if(!(o in n))if(s)e[o]=t[o];else{let n=Object.getOwnPropertyDescriptor(t,o);n&&(n.configurable=!0,Object.defineProperty(e,o,n))}}}(e,t,s);for(let t in i)e[t]&&(n[t]=n[t]||[],n[t].push(e[t]))}function c(t,e){for(const n in e){const s=t[n],r=e[n];t[n]=!("value"in r)&&s&&"value"in s?Object.assign({value:s.value},r):r}}function d(t,e,n){let s;const i={};class d extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(s)for(let t,e=0;e<s.length;e++)t=s[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(s)for(let t=0;t<s.length;t++)c(e,s[t].properties);return c(e,t.properties),e}static get observers(){let e=[];if(s)for(let t,n=0;n<s.length;n++)t=s[n],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=i.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=d.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),r.c&&h(t);const e=Object.getPrototypeOf(this);let n=i.beforeRegister;if(n)for(let t=0;t<n.length;t++)n[t].call(e);if(n=i.registered,n)for(let t=0;t<n.length;t++)n[t].call(e)}}_applyListeners(){super._applyListeners();const t=i.listeners;if(t)for(let e=0;e<t.length;e++){const n=t[e];if(n)for(let t in n)this._addMethodEventListenerToNode(this,t,n[t])}}_ensureAttributes(){const t=i.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const n=t[e];for(let t in n)this._ensureAttribute(t,n[t])}super._ensureAttributes()}ready(){super.ready();let t=i.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=i.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=i.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,n){super.attributeChanged();let s=i.attributeChanged;if(s)for(let r=0;r<s.length;r++)s[r].call(this,t,e,n)}}if(n){Array.isArray(n)||(n=[n]);let t=e.prototype.behaviors;s=function t(e,n,s){n=n||[];for(let r=e.length-1;r>=0;r--){let i=e[r];i?Array.isArray(i)?t(i,n):n.indexOf(i)<0&&(!s||s.indexOf(i)<0)&&n.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,t),d.prototype.behaviors=t?t.concat(n):s}const h=e=>{s&&function(t,e,n){for(let s=0;s<e.length;s++)l(t,e[s],n,a)}(e,s,i),l(e,t,i,o)};return r.c||h(d.prototype),d.generatedFrom=t,d}n(362);n.d(e,"a",(function(){return h}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const h=function(t){let e;return e="function"==typeof t?t:h.Class(t),customElements.define(e.is,e),e};h.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let n=e?e(Object(s.a)(HTMLElement)):Object(s.a)(HTMLElement);return n=d(t,n,t.behaviors),n.is=n.prototype.is=t.is,n}},364:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(362);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let s=0;function r(){}r.prototype.__mixinApplications,r.prototype.__mixinSet;const i=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=s++;return function(s){let r=s.__mixinSet;if(r&&r[n])return s;let i=e,o=i.get(s);o||(o=t(s),i.set(s,o));let a=Object.create(o.__mixinSet||r||null);return a[n]=!0,o.__mixinSet=a,o}}},365:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},367:function(t,e,n){"use strict";n(362);var s=n(365),r=(n(368),n(398)),i=n(372);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function o(t){return"slot"===t.localName}let a=class{static getFlattenedNodes(t){const e=Object(s.a)(t);return o(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>o(t)?(t=t,Object(s.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){o(this._target)?this._listenSlots([this._target]):Object(s.a)(this._target).children&&(this._listenSlots(Object(s.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){o(this._target)?this._unlistenSlots([this._target]):Object(s.a)(this._target).children&&(this._unlistenSlots(Object(s.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,i.a.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=Object(r.a)(e,this._effectiveNodes);for(let e,s=0;s<n.length&&(e=n[s]);s++)for(let n,s=0;s<e.removed.length&&(n=e.removed[s]);s++)t.removedNodes.push(n);for(let s,r=0;r<n.length&&(s=n[r]);r++)for(let n=s.index;n<s.index+s.addedCount;n++)t.addedNodes.push(e[n]);this._effectiveNodes=e;let s=!1;return(t.addedNodes.length||t.removedNodes.length)&&(s=!0,this.callback.call(this._target,t)),s}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];o(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];o(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};n(377),n(371);n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l=Element.prototype,c=l.matches||l.matchesSelector||l.mozMatchesSelector||l.msMatchesSelector||l.oMatchesSelector||l.webkitMatchesSelector,d=function(t,e){return c.call(t,e)};class h{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(s.a)(this.node).contains(t))return!0;let e=t,n=t.ownerDocument;for(;e&&e!==n&&e!==this.node;)e=Object(s.a)(e).parentNode||Object(s.a)(e).host;return e===this.node}getOwnerRoot(){return Object(s.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(s.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(s.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(s.a)(e).assignedSlot;return t}importNode(t,e){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(s.a)(n).importNode(t,e)}getEffectiveChildNodes(){return a.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),n=[];for(let s,r=0,i=e.length;r<i&&(s=e[r]);r++)s.nodeType===Node.ELEMENT_NODE&&d(s,t)&&n.push(s);return n}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function u(t,e){for(let n=0;n<e.length;n++){let s=e[n];Object.defineProperty(t,s,{get:function(){return this.node[s]},configurable:!0})}}class p{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}h.prototype.cloneNode,h.prototype.appendChild,h.prototype.insertBefore,h.prototype.removeChild,h.prototype.replaceChild,h.prototype.setAttribute,h.prototype.removeAttribute,h.prototype.querySelector,h.prototype.querySelectorAll,h.prototype.parentNode,h.prototype.firstChild,h.prototype.lastChild,h.prototype.nextSibling,h.prototype.previousSibling,h.prototype.firstElementChild,h.prototype.lastElementChild,h.prototype.nextElementSibling,h.prototype.previousElementSibling,h.prototype.childNodes,h.prototype.children,h.prototype.classList,h.prototype.textContent,h.prototype.innerHTML;let _=h;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(h.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=h.prototype[e])}),u(t.prototype,["classList"]),_=t,Object.defineProperties(p.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&f(t).getOwnerRoot(),n=this.path;for(let t=0;t<n.length;t++){const s=n[t];if(f(s).getOwnerRoot()===e)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let n=0;n<e.length;n++){let s=e[n];t[s]=function(){return this.node[s].apply(this.node,arguments)}}}(h.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),u(h.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let n=0;n<e.length;n++){let s=e[n];Object.defineProperty(t,s,{get:function(){return this.node[s]},set:function(t){this.node[s]=t},configurable:!0})}}(h.prototype,["textContent","innerHTML","className"]);const f=function(t){if((t=t||document)instanceof _)return t;if(t instanceof p)return t;let e=t.__domApi;return e||(e=t instanceof Event?new p(t):new _(t),t.__domApi=e),e}},368:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"g",(function(){return l})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"h",(function(){return h})),n.d(e,"b",(function(){return u}));n(362);var s=n(376);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let i=Object(s.a)(document.baseURI||window.location.href);let o=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let a=!1;let l=!1;let c=!1;let d=!1;let h=!1;let u=!0},369:function(t,e,n){"use strict";n(360);
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
const s=n(361).a`
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
</custom-style>`;s.setAttribute("style","display: none;"),document.head.appendChild(s.content);var r=document.createElement("style");r.textContent="[hidden] { display: none !important; }",document.head.appendChild(r)},371:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o}));n(362),n(364),n(372);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class s{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,r.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),r.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof s?t._cancelAsync():t=new s,t.setConfig(e,n),t}}let r=new Set;const i=function(t){r.add(t)},o=function(){const t=Boolean(r.size);return r.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},372:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(362);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let s=0,r=0,i=[],o=0,a=document.createTextNode("");new window.MutationObserver((function(){const t=i.length;for(let e=0;e<t;e++){let t=i[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}i.splice(0,t),r+=t})).observe(a,{characterData:!0});const l={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},c={run:t=>(a.textContent=o++,i.push(t),s++),cancel(t){const e=t-r;if(e>=0){if(!i[e])throw new Error("invalid async handle: "+t);i[e]=null}}}},376:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(362);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let s,r,i=/(url\()([^)]*)(\))/g,o=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&o.test(t))return t;if("//"===t)return t;if(void 0===s){s=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",s="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),s)try{return new URL(t,e).href}catch(e){return t}return r||(r=document.implementation.createHTMLDocument("temp"),r.base=r.createElement("base"),r.head.appendChild(r.base),r.anchor=r.createElement("a"),r.body.appendChild(r.anchor)),r.base.href=e,r.anchor.href=t,r.anchor.href||t}function l(t,e){return t.replace(i,(function(t,n,s,r){return n+"'"+a(s.replace(/["']/g,""),e)+"'"+r}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},377:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));n(362);var s=n(371);n.d(e,"a",(function(){return s.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(s.c)()}while(t||e)}},379:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return h})),n.d(e,"h",(function(){return u}));n(362);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function s(t){return t.indexOf(".")>=0}function r(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function i(t,e){return 0===t.indexOf(e+".")}function o(t,e){return 0===e.indexOf(t+".")}function a(t,e,n){return e+n.slice(t.length)}function l(t,e){return t===e||i(t,e)||o(t,e)}function c(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let s=t[n].toString().split(".");for(let t=0;t<s.length;t++)e.push(s[t])}return e.join(".")}return t}function d(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function h(t,e,n){let s=t,r=d(e);for(let t=0;t<r.length;t++){if(!s)return;s=s[r[t]]}return n&&(n.path=r.join(".")),s}function u(t,e,n){let s=t,r=d(e),i=r[r.length-1];if(r.length>1){for(let t=0;t<r.length-1;t++){if(s=s[r[t]],!s)return}s[i]=n}else s[e]=n;return r.join(".")}},381:function(t,e,n){"use strict";n(362);var s=n(368),r=n(364),i=n(391),o=n(376),a=n(392),l=n(390);const c=[];var d=n(395);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const h=Object(r.a)(t=>{const e=Object(d.a)(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function s(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const n=t.properties;n&&(e=function(t){const e={};for(let n in t){const s=t[n];e[n]="function"==typeof s?{type:s}:s}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,c.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=s(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,s(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});var u=n(365);n.d(e,"a",(function(){return _}));
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
const p=window.ShadyCSS&&window.ShadyCSS.cssBuild,_=Object(r.a)(t=>{const e=h(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return"3.3.0"}static _finalizeClass(){e._finalizeClass.call(this);const t=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):s.c||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let i in t)e=this.prototype,n=i,s=t[i],r=t,s.computed&&(s.readOnly=!0),s.computed&&(e._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):e._createComputedProperty(n,s.computed,r)),s.readOnly&&!e._hasReadOnlyEffect(n)?e._createReadOnlyProperty(n,!s.computed):!1===s.readOnly&&e._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),s.reflectToAttribute&&!e._hasReflectEffect(n)?e._createReflectedProperty(n):!1===s.reflectToAttribute&&e._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),s.notify&&!e._hasNotifyEffect(n)?e._createNotifyingProperty(n):!1===s.notify&&e._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),s.observer&&e._createPropertyObserver(n,s.observer,r[s.observer]),e._addPropertyToAttributeMap(n);var e,n,s,r}static createObservers(t,e){const n=this.prototype;for(let s=0;s<t.length;s++)n._createMethodObserver(t[s],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!s.g||s.a)&&(e=a.a.import(t,"template"),s.g&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(o.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=s.e,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let s=e[n];"value"in s&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=s)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return Object(o.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;!function(t,e,n,s){if(!p){const r=e.content.querySelectorAll("style"),o=Object(i.c)(e),a=Object(i.b)(n),l=e.content.firstElementChild;for(let n=0;n<a.length;n++){let r=a[n];r.textContent=t._processStyleText(r.textContent,s),e.content.insertBefore(r,l)}let c=0;for(let e=0;e<o.length;e++){let n=o[e],i=r[c];i!==n?(n=n.cloneNode(!0),i.parentNode.insertBefore(n,i)):c++,n.textContent=t._processStyleText(n.textContent,s)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n)}(this,e,t,n?Object(o.c)(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(u.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t)),s.h&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(o.c)(this.importPath)),Object(o.c)(t,e)}static _parseTemplateContent(t,n,s){return n.dynamicFns=n.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,n,s)}static _addTemplatePropertyEffect(t,n,r){return s.c&&!(n in this._properties)&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,n,r)}}})},383:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=!(window.ShadyDOM&&window.ShadyDOM.inUse);let r,i;function o(t){r=(!t||!t.shimcssproperties)&&(s||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(o(window.ShadyCSS),window.ShadyCSS=void 0):o(window.WebComponents&&window.WebComponents.flags);const l=r},384:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,r=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,i=/@media\s(.*)/},385:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var s=n(384);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function i(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}function o(t){const e=s.b.test(t)||s.c.test(t);return s.b.lastIndex=0,s.c.lastIndex=0,e}},386:function(t,e,n){"use strict";n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return k})),n.d(e,"c",(function(){return R}));n(362);var s=n(372),r=n(371),i=n(368),o=n(365);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",c="__polymerGesturesTouchAction",d=["mousedown","mousemove","mouseup","click"],h=[0,1,4,2],u=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function p(t){return d.indexOf(t)>-1}let _=!1;function f(t){if(!p(t)&&"touchend"!==t)return a&&_&&i.d?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){_=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let m=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const y=[],b={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},g={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function w(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let s=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<s.length;t++)e.push(s[t])}}return e}let v=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[l]={skip:!0},"click"===t.type)){let e=!1,s=E(t);for(let t=0;t<s.length;t++){if(s[t].nodeType===Node.ELEMENT_NODE)if("label"===s[t].localName)y.push(s[t]);else if(n=s[t],b[n.localName]){let n=w(s[t]);for(let t=0;t<n.length;t++)e=e||y.indexOf(n[t])>-1}if(s[t]===O.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function P(t){let e=m?["click"]:d;for(let n,s=0;s<e.length;s++)n=e[s],t?(y.length=0,document.addEventListener(n,v,!0)):document.removeEventListener(n,v,!0)}function C(t){let e=t.type;if(!p(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!u&&(e=h[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let O={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function S(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function x(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}i.b&&document.addEventListener("touchend",(function(t){if(!i.b)return;O.mouse.mouseIgnoreJob||P(!0),O.mouse.target=E(t)[0],O.mouse.mouseIgnoreJob=r.a.debounce(O.mouse.mouseIgnoreJob,s.b.after(2500),(function(){P(),O.mouse.target=null,O.mouse.mouseIgnoreJob=null}))}),!!_&&{passive:!0});const E=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],T={},N=[];function A(t){const e=E(t);return e.length>0?e[0]:t.target}function j(t){let e,n=t.type,s=t.currentTarget.__polymerGestures;if(!s)return;let r=s[n];if(r){if(!t[l]&&(t[l]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(O.touch.id=e.identifier),O.touch.id!==e.identifier)return;a||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)O.touch.x=e.clientX,O.touch.y=e.clientY,O.touch.scrollDecided=!1;else if("touchmove"===n){if(O.touch.scrollDecided)return;O.touch.scrollDecided=!0;let n=function(t){let e="auto",n=E(t);for(let t,s=0;s<n.length;s++)if(t=n[s],t[c]){e=t[c];break}return e}(t),s=!1,r=Math.abs(O.touch.x-e.clientX),i=Math.abs(O.touch.y-e.clientY);t.cancelable&&("none"===n?s=!0:"pan-x"===n?s=i>r:"pan-y"===n&&(s=r>i)),s?t.preventDefault():L("track")}}(t)}if(e=t[l],!e.skip){for(let n,s=0;s<N.length;s++)n=N[s],r[n.name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let s,i=0;i<N.length;i++)s=N[i],r[s.name]&&!e[s.name]&&(e[s.name]=!0,s[n](t))}}}function I(t,e,n){return!!T[e]&&(function(t,e,n){let s=T[e],r=s.deps,i=s.name,o=t.__polymerGestures;o||(t.__polymerGestures=o={});for(let e,n,s=0;s<r.length;s++)e=r[s],m&&p(e)&&"click"!==e||(n=o[e],n||(o[e]=n={_count:0}),0===n._count&&t.addEventListener(e,j,f(e)),n[i]=(n[i]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),s.touchAction&&R(t,s.touchAction)}(t,e,n),!0)}function k(t,e,n){return!!T[e]&&(function(t,e,n){let s=T[e],r=s.deps,i=s.name,o=t.__polymerGestures;if(o)for(let e,n,s=0;s<r.length;s++)e=r[s],n=o[e],n&&n[i]&&(n[i]=(n[i]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,j,f(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function M(t){N.push(t);for(let e=0;e<t.emits.length;e++)T[t.emits[e]]=t}function R(t,e){a&&t instanceof HTMLElement&&s.a.run(()=>{t.style.touchAction=e}),t[c]=e}function D(t,e,n){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=n,Object(o.a)(t).dispatchEvent(s),s.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function L(t){let e=function(t){for(let e,n=0;n<N.length;n++){e=N[n];for(let n,s=0;s<e.emits.length;s++)if(n=e.emits[s],n===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function F(t,e,n,s){e&&D(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:s,prevent:function(t){return L(t)}})}function H(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let s=Math.abs(t.x-e),r=Math.abs(t.y-n);return s>=5||r>=5}function z(t,e,n){if(!e)return;let s,r=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],o=i.x-t.x,a=i.y-t.y,l=0;r&&(s=i.x-r.x,l=i.y-r.y),D(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:o,dy:a,ddx:s,ddy:l,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),s=n;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(t,e),r===s)break;s&&(n=s)}return n}(n.clientX,n.clientY)}})}function B(t,e,n){let s=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),i=A(n||e);!i||g[i.localName]&&i.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=25&&r<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=A(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),s=t.pageX,r=t.pageY;return!(s>=n.left&&s<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(e))&&(t.prevent||D(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}M({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){x(this.info)},mousedown:function(t){if(!C(t))return;let e=A(t),n=this;S(this.info,(function(t){C(t)||(F("up",e,t),x(n.info))}),(function(t){C(t)&&F("up",e,t),x(n.info)})),F("down",e,t)},touchstart:function(t){F("down",A(t),t.changedTouches[0],t)},touchend:function(t){F("up",A(t),t.changedTouches[0],t)}}),M({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,x(this.info)},mousedown:function(t){if(!C(t))return;let e=A(t),n=this,s=function(t){let s=t.clientX,r=t.clientY;H(n.info,s,r)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&L("tap"),n.info.addMove({x:s,y:r}),C(t)||(n.info.state="end",x(n.info)),e&&z(n.info,e,t),n.info.started=!0)};S(this.info,s,(function(t){n.info.started&&s(t),x(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=A(t),n=t.changedTouches[0],s=n.clientX,r=n.clientY;H(this.info,s,r)&&("start"===this.info.state&&L("tap"),this.info.addMove({x:s,y:r}),z(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=A(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),z(this.info,e,n))}}),M({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){C(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){C(t)&&B(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){B(this.info,t.changedTouches[0],t)}})},390:function(t,e,n){"use strict";n(362);var s=n(365),r=n(364),i=n(379),o=n(393),a=n(394);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l={"dom-if":!0,"dom-repeat":!0};function c(t){let e=t.getAttribute("is");if(e&&l[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function d(t,e){let n=e.parentInfo&&d(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,s=0;t;t=t.nextSibling)if(e.parentIndex===s++)return t}function h(t,e,n,s){s.id&&(e[s.id]=n)}function u(t,e,n){if(n.events&&n.events.length)for(let s,r=0,i=n.events;r<i.length&&(s=i[r]);r++)t._addMethodEventListenerToNode(e,s.name,s.value,t)}function p(t,e,n){n.templateInfo&&(e._templateInfo=n.templateInfo)}const _=Object(r.a)(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let s=!1,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(r,e,n)||s,r.firstChild&&this._parseTemplateChildNodes(r,e,n),r.hasAttributes&&r.hasAttributes()&&(s=this._parseTemplateNodeAttributes(r,e,n)||s),s}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let s,r=t.firstChild,i=0;r;r=s){if("template"==r.localName&&(r=c(r)),s=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=s;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,s=n.nextSibling,t.removeChild(n),n=s;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,n){let s=t,r=this._parseTemplate(s,e);return(r.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(t,e,n){let s=!1,r=Array.from(t.attributes);for(let i,o=r.length-1;i=r[o];o--)s=this._parseTemplateNodeAttribute(t,e,n,i.name,i.value)||s;return s}static _parseTemplateNodeAttribute(t,e,n,s,r){return"on-"===s.slice(0,3)?(t.removeAttribute(s),n.events=n.events||[],n.events.push({name:s.slice(3),value:r}),!0):"id"===s&&(n.id=r,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),n=e.nodeInfoList,s=e.content||t.content,r=document.importNode(s,!0);r.__noInsertionPoint=!e.hasInsertionPoint;let i=r.nodeList=new Array(n.length);r.$={};for(let t,e=0,s=n.length;e<s&&(t=n[e]);e++){let n=i[e]=d(r,t);h(0,r.$,n,t),p(0,n,t),u(this,n,t)}return r=r,r}_addMethodEventListenerToNode(t,e,n,s){let r=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(s=s||t,0,n);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}});var f=n(368);n.d(e,"a",(function(){return Y}));
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
let m=0;const y={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},b=/[A-Z]/;function g(t,e){let n=t[e];if(n){if(!t.hasOwnProperty(e)){n=t[e]=Object.create(t[e]);for(let t in n){let e=n[t],s=n[t]=Array(e.length);for(let t=0;t<e.length;t++)s[t]=e[t]}}}else n=t[e]={};return n}function w(t,e,n,s,r,i){if(e){let o=!1,a=m++;for(let l in n)v(t,e,a,l,n,s,r,i)&&(o=!0);return o}return!1}function v(t,e,n,s,r,o,a,l){let c=!1,d=e[a?Object(i.g)(s):s];if(d)for(let e,i=0,h=d.length;i<h&&(e=d[i]);i++)e.info&&e.info.lastRun===n||a&&!P(s,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,s,r,o,e.info,a,l),c=!0);return c}function P(t,e){if(e){let n=e.name;return n==t||!(!e.structured||!Object(i.b)(n,t))||!(!e.wildcard||!Object(i.c)(n,t))}return!0}function C(t,e,n,s,r){let i="string"==typeof r.method?t[r.method]:r.method,o=r.property;i?i.call(t,t.__data[o],s[o]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function O(t,e,n){let s=Object(i.g)(e);if(s!==e){return S(t,Object(o.a)(s)+"-changed",n[e],e),!0}return!1}function S(t,e,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),Object(s.a)(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function x(t,e,n,s,r,o){let a=(o?Object(i.g)(e):e)!=e?e:null,l=a?Object(i.a)(t,a):t.__data[e];a&&void 0===l&&(l=n[e]),S(t,r.eventName,l,a)}function E(t,e,n,s,r){let i=t.__data[e];f.f&&(i=Object(f.f)(i,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,i)}function T(t,e,n,s,r){let i=R(t,e,n,s,r),o=r.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,i,!0):t[o]=i}function N(t,e,n,s,r,i,a){n.bindings=n.bindings||[];let l={kind:s,target:r,parts:i,literal:a,isCompound:1!==i.length};if(n.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(o.a)(r)+"-changed",l.listenerNegate=e}let c=e.nodeInfoList.length;for(let n=0;n<l.parts.length;n++){let s=l.parts[n];s.compoundIndex=n,A(t,e,l,s,c)}}function A(t,e,n,s,r){if(!s.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let i=s.dependencies,o={index:r,binding:n,part:s,evaluator:t};for(let n=0;n<i.length;n++){let s=i[n];"string"==typeof s&&(s=z(s),s.wildcard=!0),t._addTemplatePropertyEffect(e,s.rootProperty,{fn:j,info:o,trigger:s})}}}function j(t,e,n,s,r,o,a){let l=a[r.index],c=r.binding,d=r.part;if(o&&d.source&&e.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let s=n[e];e=Object(i.i)(d.source,c.target,e),l._setPendingPropertyOrPath(e,s,!1,!0)&&t._enqueueClient(l)}else{!function(t,e,n,s,r){r=function(t,e,n,s){if(n.isCompound){let r=t.__dataCompoundStorage[n.target];r[s.compoundIndex]=e,e=r.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,r,n,s),f.f&&(r=Object(f.f)(r,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,r,n.target);else{let s=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[s]?e[y.READ_ONLY]&&e[y.READ_ONLY][s]||e._setPendingProperty(s,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,s,r)}}(t,l,c,d,r.evaluator._evaluateBinding(t,d,e,n,s,o))}}function I(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),r=e.parts,i=new Array(r.length);for(let t=0;t<r.length;t++)i[t]=r[t].literal;let o=e.target;n[o]=i,e.literal&&"property"==e.kind&&("className"===o&&(t=Object(s.a)(t)),t[o]=e.literal)}}function k(t,e,n){if(n.listenerEvent){let s=n.parts[0];t.addEventListener(n.listenerEvent,(function(t){!function(t,e,n,s,r){let o,a=t.detail,l=a&&a.path;l?(s=Object(i.i)(n,s,l),o=a&&a.value):o=t.currentTarget[n],o=r?!o:o,e[y.READ_ONLY]&&e[y.READ_ONLY][s]||!e._setPendingPropertyOrPath(s,o,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,n.target,s.source,s.negate)}))}}function M(t,e,n,s,r,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:i};for(let r,i=0;i<e.args.length&&(r=e.args[i]);i++)r.literal||t._addPropertyEffect(r.rootProperty,n,{fn:s,info:o,trigger:r});i&&t._addPropertyEffect(e.methodName,n,{fn:s,info:o})}function R(t,e,n,s,r){let i=t._methodHost||t,o=i[r.methodName];if(o){let s=t._marshalArgs(r.args,e,n);return o.apply(i,s)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const D=[],L=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function F(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function H(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:D};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let n=z(t);return n.literal||(e.static=!1),n}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function z(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},s=e[0];switch("-"===s&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=Object(i.g)(e),n.structured=Object(i.d)(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function B(t,e,n){let s=Object(i.a)(t,n);return void 0===s&&(s=e[n]),s}function $(t,e,n,s){t.notifyPath(n+".splices",{indexSplices:s}),t.notifyPath(n+".length",e.length)}function q(t,e,n,s,r,i){$(t,e,n,[{index:s,addedCount:r,removed:i,object:e,type:"splice"}])}const Y=Object(r.a)(t=>{const e=_(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return y}_initializeProperties(){super._initializeProperties(),V.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[y.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==y.READ_ONLY);let s=g(this,e)[t];s||(s=this[e][t]=[]),s.push(n)}_removePropertyEffect(t,e,n){let s=g(this,e)[t],r=s.indexOf(n);r>=0&&s.splice(r,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,y.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,y.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,y.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,y.COMPUTE)}_setPendingPropertyOrPath(t,e,n,s){if(s||Object(i.g)(Array.isArray(t)?t[0]:t)!==t){if(!s){let n=Object(i.a)(this,t);if(!(t=Object(i.h)(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let s=t.__dataLinkedPaths;if(s){let r;for(let o in s){let a=s[o];Object(i.c)(o,e)?(r=Object(i.i)(o,a,e),t._setPendingPropertyOrPath(r,n,!0,!0)):Object(i.c)(a,e)&&(r=Object(i.i)(a,o,e),t._setPendingPropertyOrPath(r,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||("className"===e&&(t=Object(s.a)(t)),t[e]=n)}_setPendingProperty(t,e,n){let s=this.__dataHasPaths&&Object(i.d)(t),r=s?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),s?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(s||this[y.NOTIFY]&&this[y.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[y.READ_ONLY]&&this[y.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let s=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,n,s){let r=t[y.COMPUTE];if(r){let i=e;for(;w(t,r,i,n,s);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}(this,e,n,s);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,n,s),this._flushClients(),w(this,this[y.REFLECT],e,n,s),w(this,this[y.OBSERVE],e,n,s),r&&function(t,e,n,s,r){let i,o,a=t[y.NOTIFY],l=m++;for(let o in e)e[o]&&(a&&v(t,a,l,o,n,s,r)||r&&O(t,o,n))&&(i=!0);i&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,r,e,n,s),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[y.PROPAGATE]&&w(this,this[y.PROPAGATE],t,e,n);let s=this.__templateInfo;for(;s;)w(this,s.propertyEffects,t,e,n,s.nodeList),s=s.nextTemplateInfo}linkPaths(t,e){t=Object(i.f)(t),e=Object(i.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(i.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};$(this,Object(i.a)(this,t,n),n.path,e)}get(t,e){return Object(i.a)(e||this,t)}set(t,e,n){n?Object(i.h)(n,t,e):this[y.READ_ONLY]&&this[y.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},s=Object(i.a)(this,t,n),r=s.length,o=s.push(...e);return e.length&&q(this,s,n.path,r,e.length,[]),o}pop(t){let e={path:""},n=Object(i.a)(this,t,e),s=Boolean(n.length),r=n.pop();return s&&q(this,n,e.path,n.length,0,[r]),r}splice(t,e,n,...s){let r,o={path:""},a=Object(i.a)(this,t,o);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?a.splice(e):a.splice(e,n,...s),(s.length||r.length)&&q(this,a,o.path,e,s.length,r),r}shift(t){let e={path:""},n=Object(i.a)(this,t,e),s=Boolean(n.length),r=n.shift();return s&&q(this,n,e.path,0,0,[r]),r}unshift(t,...e){let n={path:""},s=Object(i.a)(this,t,n),r=s.unshift(...e);return e.length&&q(this,s,n.path,0,e.length,[]),r}notifyPath(t,e){let n;if(1==arguments.length){let s={path:""};e=Object(i.a)(this,t,s),n=s.path}else n=Array.isArray(t)?Object(i.f)(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,y.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let s={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,y.OBSERVE,{fn:C,info:s,trigger:{name:t}}),n&&this._addPropertyEffect(e,y.OBSERVE,{fn:C,info:s,trigger:{name:e}})}_createMethodObserver(t,e){let n=H(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");M(this,n,y.OBSERVE,R,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,y.NOTIFY,{fn:x,info:{eventName:Object(o.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,y.REFLECT,{fn:E,info:{attrName:e}})}_createComputedProperty(t,e,n){let s=H(e);if(!s)throw new Error("Malformed computed expression '"+e+"'");M(this,s,y.COMPUTE,T,t,n)}_marshalArgs(t,e,n){const s=this.__data,r=[];for(let o=0,a=t.length;o<a;o++){let{name:a,structured:l,wildcard:c,value:d,literal:h}=t[o];if(!h)if(c){const t=Object(i.c)(a,e),r=B(s,n,t?e:a);d={path:t?e:a,value:r,base:t?Object(i.a)(s,a):r}}else d=l?B(s,n,a):s[a];r[o]=d}return r}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),s=this.__templateInfo==n;if(!s)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e&&(n=Object.create(n),n.wasPreBound=s,!s&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=n,n.previousTemplateInfo=t,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let s=t.propertyEffects=t.propertyEffects||{};(s[e]=s[e]||[]).push(n)}_stampTemplate(t){V.beginHosting(this);let e=super._stampTemplate(t);V.endHosting(this);let n=this._bindTemplate(t,!0);if(n.nodeList=e.nodeList,!n.wasPreBound){let t=n.childNodes=[];for(let n=e.firstChild;n;n=n.nextSibling)t.push(n)}return e.templateInfo=n,function(t,e){let{nodeList:n,nodeInfoList:s}=e;if(s.length)for(let e=0;e<s.length;e++){let r=s[e],i=n[e],o=r.bindings;if(o)for(let e=0;e<o.length;e++){let n=o[e];I(i,n),k(i,t,n)}i.__dataHost=t}}(this,n),this.__dataReady&&w(this,n.propertyEffects,this.__data,null,!1,n.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let n=e.childNodes;for(let t=0;t<n.length;t++){let e=n[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,n,s){let r=e._parseTemplateNode.call(this,t,n,s);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,n);e&&(t.textContent=F(e)||" ",N(this,n,s,"text","textContent",e),r=!0)}return r}static _parseTemplateNodeAttribute(t,n,s,r,i){let a=this._parseBindings(i,n);if(a){let e=r,i="property";b.test(r)?i="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),i="attribute");let l=F(a);return l&&"attribute"==i&&("class"==r&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(r)),t.setAttribute(r,l)),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(r=Object(o.b)(r)),N(this,n,s,i,r,a,l),!0}return e._parseTemplateNodeAttribute.call(this,t,n,s,r,i)}static _parseTemplateNestedTemplate(t,n,s){let r=e._parseTemplateNestedTemplate.call(this,t,n,s),i=s.templateInfo.hostProps;for(let t in i){N(this,n,s,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return r}static _parseBindings(t,e){let n,s=[],r=0;for(;null!==(n=L.exec(t));){n.index>r&&s.push({literal:t.slice(r,n.index)});let i=n[1][0],o=Boolean(n[2]),a=n[3].trim(),l=!1,c="",d=-1;"{"==i&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let h=H(a),u=[];if(h){let{args:t,methodName:n}=h;for(let e=0;e<t.length;e++){let n=t[e];n.literal||u.push(n)}let s=e.dynamicFns;(s&&s[n]||h.static)&&(u.push(n),h.dynamicFn=!0)}else u.push(a);s.push({source:a,mode:i,negate:o,customEvent:l,signature:h,dependencies:u,event:c}),r=L.lastIndex}if(r&&r<t.length){let e=t.substring(r);e&&s.push({literal:e})}return s.length?s:null}static _evaluateBinding(t,e,n,s,r,o){let a;return a=e.signature?R(t,n,s,0,e.signature):n!=e.source?Object(i.a)(t,e.source):o&&Object(i.d)(n)?Object(i.a)(t,n):t.__data[n],e.negate&&(a=!a),a}}});const V=new class{constructor(){this.stack=[]}registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},391:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return u}));var s=n(392),r=n(376);function i(t){return s.a.import(t)}function o(t){let e=t.body?t.body:t;const n=Object(r.b)(e.textContent,t.baseURI),s=document.createElement("style");return s.textContent=n,s}function a(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...l(e[t]));return n}function l(t){const e=i(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...h(e));const n=e.querySelector("template");n&&t.push(...c(n,e.assetpath)),e._styles=t}return e._styles}function c(t,e){if(!t._styles){const n=[],s=t.content.querySelectorAll("style");for(let t=0;t<s.length;t++){let i=s[t],o=i.getAttribute("include");o&&n.push(...a(o).filter((function(t,e,n){return n.indexOf(t)===e}))),e&&(i.textContent=Object(r.b)(i.textContent,e)),n.push(i)}t._styles=n}return t._styles}function d(t){let e=i(t);return e?h(e):[]}function h(t){const e=[],n=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<n.length;t++){let s=n[t];if(s.import){const t=s.import,n=s.hasAttribute("shady-unscoped");if(n&&!t._unscopedStyle){const e=o(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=o(t));e.push(n?t._unscopedStyle:t._style)}}return e}function u(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=p(e[t]);return n}function p(t){let e=i(t);if(e&&void 0===e._cssText){let t=_(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const s=c(t,e);for(let t=0;t<s.length;t++){let e=s[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function _(t){let e="",n=h(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}},392:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(362);var s=n(376),r=n(368);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let i={},o={};function a(t,e){i[t]=o[t.toLowerCase()]=e}function l(t){return i[t]||o[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=l(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,s){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(s.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(s.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(r.g&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=i,customElements.define("dom-module",c)},393:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));n(362);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const s={},r=/-[a-z]/g,i=/([A-Z])/g;function o(t){return s[t]||(s[t]=t.indexOf("-")<0?t:t.replace(r,t=>t[1].toUpperCase()))}function a(t){return s[t]||(s[t]=t.replace(i,"-$1").toLowerCase())}},394:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(362);var s=n(364),r=n(393),i=n(395);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)o[t[e]]=!0;a=Object.getPrototypeOf(a)}const l=Object(s.a)(t=>{const e=Object(i.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(r.b)(t[e]))}static attributeNameForProperty(t){return Object(r.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!o[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},395:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(362);var s=n(364),r=n(372),i=n(365);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=r.a,a=Object(s.a)(t=>class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let s=this.__data[t],r=this._shouldPropertyChange(t,e,s);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=s),this.__data[t]=e,this.__dataPending[t]=e),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,o.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n))}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,s){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,s)}_attributeToProperty(t,e,n){if(!this.__serializing){const s=this.__dataAttributes,r=s&&s[t]||t;this[r]=this._deserializeValue(e,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const s=this._serializeValue(e);"class"!==n&&"name"!==n&&"slot"!==n||(t=Object(i.a)(t)),void 0===s?t.removeAttribute(n):t.setAttribute(n,s)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})},396:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(362);var s=n(364),r=n(386);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=Object(s.a)(t=>class extends t{_addEventListenerToNode(t,e,n){Object(r.a)(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Object(r.b)(t,e,n)||super._removeEventListenerFromNode(t,e,n)}})},397:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(362);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let s=!1,r=[],i=[];function o(){s=!0,requestAnimationFrame((function(){s=!1,a(r),setTimeout((function(){!function(t){for(let e=0,n=t.length;e<n;e++)l(t.shift())}(i)}))}))}function a(t){for(;t.length;)l(t.shift())}function l(t){const e=t[0],n=t[1],s=t[2];try{n.apply(e,s)}catch(t){setTimeout(()=>{throw t})}}function c(t,e,n){s||o(),i.push([t,e,n])}},398:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(362);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function s(t,e,n){return{index:t,removed:e,addedCount:n}}function r(t,e,n,r,i,a){let l,c=0,d=0,h=Math.min(n-e,a-i);if(0==e&&0==i&&(c=function(t,e,n){for(let s=0;s<n;s++)if(!o(t[s],e[s]))return s;return n}(t,r,h)),n==t.length&&a==r.length&&(d=function(t,e,n){let s=t.length,r=e.length,i=0;for(;i<n&&o(t[--s],e[--r]);)i++;return i}(t,r,h-c)),i+=c,a-=d,(n-=d)-(e+=c)==0&&a-i==0)return[];if(e==n){for(l=s(e,[],0);i<a;)l.removed.push(r[i++]);return[l]}if(i==a)return[s(e,[],n-e)];let u=function(t){let e=t.length-1,n=t[0].length-1,s=t[e][n],r=[];for(;e>0||n>0;){if(0==e){r.push(2),n--;continue}if(0==n){r.push(3),e--;continue}let i,o=t[e-1][n-1],a=t[e-1][n],l=t[e][n-1];i=a<l?a<o?a:o:l<o?l:o,i==o?(o==s?r.push(0):(r.push(1),s=o),e--,n--):i==a?(r.push(3),e--,s=a):(r.push(2),n--,s=l)}return r.reverse(),r}(function(t,e,n,s,r,i){let a=i-r+1,l=n-e+1,c=new Array(a);for(let t=0;t<a;t++)c[t]=new Array(l),c[t][0]=t;for(let t=0;t<l;t++)c[0][t]=t;for(let n=1;n<a;n++)for(let i=1;i<l;i++)if(o(t[e+i-1],s[r+n-1]))c[n][i]=c[n-1][i-1];else{let t=c[n-1][i]+1,e=c[n][i-1]+1;c[n][i]=t<e?t:e}return c}(t,e,n,r,i,a));l=void 0;let p=[],_=e,f=i;for(let t=0;t<u.length;t++)switch(u[t]){case 0:l&&(p.push(l),l=void 0),_++,f++;break;case 1:l||(l=s(_,[],0)),l.addedCount++,_++,l.removed.push(r[f]),f++;break;case 2:l||(l=s(_,[],0)),l.addedCount++,_++;break;case 3:l||(l=s(_,[],0)),l.removed.push(r[f]),f++}return l&&p.push(l),p}function i(t,e){return r(t,0,t.length,e,0,e.length)}function o(t,e){return t===e}},401:function(t,e,n){"use strict";var s=n(383);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function i(t){return function t(e,n){let s=n.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=s.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;s=n.substring(t,e.start-1),s=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(s),s=s.replace(d.multipleSpaces," "),s=s.substring(s.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=s.trim();e.atRule=0===r.indexOf(p),e.atRule?0===r.indexOf(u)?e.type=a.MEDIA_RULE:r.match(d.keyframesRule)&&(e.type=a.KEYFRAMES_RULE,e.keyframesName=e.selector.split(d.multipleSpaces).pop()):0===r.indexOf(h)?e.type=a.MIXIN_RULE:e.type=a.STYLE_RULE}let r=e.rules;if(r)for(let e,s=0,i=r.length;s<i&&(e=r[s]);s++)t(e,n);return e}(function(t){let e=new r;e.start=0,e.end=t.length;let n=e;for(let s=0,i=t.length;s<i;s++)if(t[s]===l){n.rules||(n.rules=[]);let t=n,e=t.rules[t.rules.length-1]||null;n=new r,n.start=s+1,n.parent=t,n.previous=e,t.rules.push(n)}else t[s]===c&&(n.end=s+1,n=n.parent||e);return e}(t=t.replace(d.comments,"").replace(d.port,"")),t)}function o(t,e,n=""){let s="";if(t.cssText||t.rules){let n=t.rules;if(n&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(h)}(n))for(let t,r=0,i=n.length;r<i&&(t=n[r]);r++)s=o(t,e,s);else s=e?t.cssText:function(t){return function(t){return t.replace(d.mixinApply,"").replace(d.varApply,"")}(t=function(t){return t.replace(d.customProp,"").replace(d.mixinProp,"")}(t))}(t.cssText),s=s.trim(),s&&(s="  "+s+"\n")}return s&&(t.selector&&(n+=t.selector+" "+l+"\n"),n+=s,t.selector&&(n+=c+"\n\n")),n}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",u="@media",p="@";var _=n(384);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const f=new Set;function m(t){const e=t.textContent;if(!f.has(e)){f.add(e);const n=t.cloneNode(!0);document.head.appendChild(n)}}function y(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function b(t,e){return t?("string"==typeof t&&(t=i(t)),e&&w(t,e),o(t,s.c)):""}function g(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=i(t.textContent)),t.__cssRules||null}function w(t,e,n,s){if(!t)return;let r=!1,i=t.type;if(s&&i===a.MEDIA_RULE){let e=t.selector.match(_.a);e&&(window.matchMedia(e[1]).matches||(r=!0))}i===a.STYLE_RULE?e(t):n&&i===a.KEYFRAMES_RULE?n(t):i===a.MIXIN_RULE&&(r=!0);let o=t.rules;if(o&&!r)for(let t,r=0,i=o.length;r<i&&(t=o[r]);r++)w(t,e,n,s)}function v(t,e){let n=0;for(let s=e,r=t.length;s<r;s++)if("("===t[s])n++;else if(")"===t[s]&&0==--n)return s;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;function P(t){if(void 0!==s.a)return s.a;if(void 0===t.__cssBuild){const e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if("css-build"===t[0])return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function C(t){return""!==P(t)}var O=n(385);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const S=/;\s*/m,x=/^\s*(initial)|(inherit)\s*$/,E=/\s*!important/;class T{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let N=null;class A{constructor(){this._currentElement=null,this._measureElement=null,this._map=new T}detectMixin(t){return Object(O.a)(t)}gatherStyles(t){const e=function(t){const e=[],n=t.querySelectorAll("style");for(let t=0;t<n.length;t++){const r=n[t];y(r)?s.d||(m(r),r.parentNode.removeChild(r)):(e.push(r.textContent),r.parentNode.removeChild(r))}return e.join("").trim()}(t.content);if(e){const n=document.createElement("style");return n.textContent=e,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,e):null}transformStyle(t,e=""){let n=g(t);return this.transformRules(n,e),t.textContent=b(n),n}transformCustomStyle(t){let e=g(t);return w(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=b(e),e}transformRules(t,e){this._currentElement=e,w(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(_.c,(t,n,s,r)=>this._produceCssProperties(t,n,s,r,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const n={};let s=!1;return w(e,e=>{s=s||e===t,s||e.selector===t.selector&&Object.assign(n,this._cssTextToMap(e.parsedCssText))}),n}_consumeCssProperties(t,e){let n=null;for(;n=_.b.exec(t);){let s=n[0],r=n[1],i=n.index,o=i+s.indexOf("@apply"),a=i+s.length,l=t.slice(0,o),c=t.slice(a),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let h=this._atApplyToCssProperties(r,d);t=`${l}${h}${c}`,_.b.lastIndex=i+h.length}return t}_atApplyToCssProperties(t,e){t=t.replace(S,"");let n=[],s=this._map.get(t);if(s||(this._map.set(t,{}),s=this._map.get(t)),s){let r,i,o;this._currentElement&&(s.dependants[this._currentElement]=!0);const a=s.properties;for(r in a)o=e&&e[r],i=[r,": var(",t,"_-_",r],o&&i.push(",",o.replace(E,"")),i.push(")"),E.test(a[r])&&i.push(" !important"),n.push(i.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,e){let n=x.exec(e);return n&&(e=n[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let n,s,r=t.split(";"),i={};for(let t,o,a=0;a<r.length;a++)t=r[a],t&&(o=t.split(":"),o.length>1&&(n=o[0].trim(),s=o.slice(1).join(":"),e&&(s=this._replaceInitialOrInherit(n,s)),i[n]=s));return i}_invalidateMixinEntry(t){if(N)for(let e in t.dependants)e!==this._currentElement&&N(e)}_produceCssProperties(t,e,n,s,r){if(n&&function t(e,n){let s=e.indexOf("var(");if(-1===s)return n(e,"","","");let r=v(e,s+3),i=e.substring(s+4,r),o=e.substring(0,s),a=t(e.substring(r+1),n),l=i.indexOf(",");return-1===l?n(o,i.trim(),"",a):n(o,i.substring(0,l).trim(),i.substring(l+1).trim(),a)}(n,(t,e)=>{e&&this._map.get(e)&&(s=`@apply ${e};`)}),!s)return t;let i=this._consumeCssProperties(""+s,r),o=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(i,!0),l=a,c=this._map.get(e),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(e,l);let h,u,p=[],_=!1;for(h in l)u=a[h],void 0===u&&(u="initial"),d&&!(h in d)&&(_=!0),p.push(`${e}_-_${h}: ${u}`);return _&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(o=`${t};${o}`),`${o}${p.join("; ")};`}}A.prototype.detectMixin=A.prototype.detectMixin,A.prototype.transformStyle=A.prototype.transformStyle,A.prototype.transformCustomStyle=A.prototype.transformCustomStyle,A.prototype.transformRules=A.prototype.transformRules,A.prototype.transformRule=A.prototype.transformRule,A.prototype.transformTemplate=A.prototype.transformTemplate,A.prototype._separator="_-_",Object.defineProperty(A.prototype,"invalidCallback",{get:()=>N,set(t){N=t}});var j=A;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var I={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const k="_applyShimCurrentVersion",M="_applyShimNextVersion",R=Promise.resolve();function D(t){let e=I[t];e&&function(t){t[k]=t[k]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[M]=(t[M]||0)+1}(e)}function L(t){return t[k]===t[M]}function F(t){return!L(t)&&t._applyShimValidatingVersion===t[M]}function H(t){t._applyShimValidatingVersion=t[M],t._validating||(t._validating=!0,R.then((function(){t[k]=t[M],t._validating=!1})))}n(402);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const z=new j;class B{constructor(){this.customStyleInterface=null,z.invalidCallback=D}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{z.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),C(t))return;I[e]=t;let n=z.transformTemplate(t,e);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let n=t[e],s=this.customStyleInterface.getStyleForCustomStyle(n);s&&z.transformCustomStyle(s)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(O.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,n="",s="";return e?e.indexOf("-")>-1?n=e:(s=e,n=t.getAttribute&&t.getAttribute("is")||""):(n=t.is,s=t.extends),{is:n,typeExtension:s}}(t),n=I[e];if((!n||!C(n))&&n&&!L(n)){F(n)||(this.prepareTemplate(n,e),H(n));let s=t.shadowRoot;if(s){let t=s.querySelector("style");t&&(t.__cssRules=n._styleAst,t.textContent=b(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new B;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,n,s){t.flushCustomStyles(),t.prepareTemplate(e,n)},prepareTemplateStyles(t,e,n){window.ShadyCSS.prepareTemplate(t,e,n)},prepareTemplateDom(t,e){},styleSubtree(e,n){t.flushCustomStyles(),t.styleSubtree(e,n)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(O.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:s.c,nativeShadow:s.d,cssBuild:s.a,disableRuntime:s.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=z;var $=n(381),q=n(396),Y=n(394),V=n(364);
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
const J=/:host\(:dir\((ltr|rtl)\)\)/g,U=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,X=/:dir\((?:ltr|rtl)\)/,W=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),G=[];let Z=null,K="";function Q(){K=document.documentElement.getAttribute("dir")}function tt(t){if(!t.__autoDirOptOut){t.setAttribute("dir",K)}}function et(){Q(),K=document.documentElement.getAttribute("dir");for(let t=0;t<G.length;t++)tt(G[t])}const nt=Object(V.a)(t=>{W||Z||(Q(),Z=new MutationObserver(et),Z.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(Y.a)(t);class n extends e{static _processStyleText(t,n){return t=e._processStyleText.call(this,t,n),!W&&X.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(J,':host([dir="$1"])'),e=e.replace(U,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Z&&Z.takeRecords().length&&et(),G.push(this),tt(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=G.indexOf(this);t>-1&&G.splice(t,1)}}}return n.__activateDir=!1,n});n(397);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function st(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?st():window.addEventListener("DOMContentLoaded",st);var rt=n(367),it=n(386),ot=n(371),at=n(372),lt=n(379),ct=n(365);n(362);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const dt=window.ShadyDOM,ht=window.ShadyCSS;function ut(t,e){return Object(ct.a)(t).getRootNode()===e}n.d(e,"a",(function(){return _t}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let pt=window.ShadyCSS;const _t=Object(V.a)(t=>{const e=nt(Object(q.a)(Object($.a)(t))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,n,s){e!==n&&(super.attributeChangedCallback(t,e,n,s),this.attributeChanged(t,e,n))}attributeChanged(t,e,n){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,n){this._propertyToAttribute(t,e,n)}serializeValueToAttribute(t,e,n){this._valueToNodeAttribute(n||this,t,e)}extend(t,e){if(!t||!e)return t||e;let n=Object.getOwnPropertyNames(e);for(let s,r=0;r<n.length&&(s=n[r]);r++){let n=Object.getOwnPropertyDescriptor(e,s);n&&Object.defineProperty(t,s,n)}return t}mixin(t,e){for(let n in e)t[n]=e[n];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,n){n=n||{},e=null==e?{}:e;let s=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});s.detail=e;let r=n.node||this;return Object(ct.a)(r).dispatchEvent(s),s}listen(t,e,n){t=t||this;let s=this.__boundListeners||(this.__boundListeners=new WeakMap),r=s.get(t);r||(r={},s.set(t,r));let i=e+n;r[i]||(r[i]=this._addMethodEventListenerToNode(t,e,n,this))}unlisten(t,e,n){t=t||this;let s=this.__boundListeners&&this.__boundListeners.get(t),r=e+n,i=s&&s[r];i&&(this._removeEventListenerFromNode(t,e,i),s[r]=null)}setScrollDirection(t,e){Object(it.c)(e||this,n[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(ct.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(rt.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(rt.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(rt.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let n,s=0;n=t[s];s++)n.nodeType!==Node.COMMENT_NODE&&e.push(n.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(rt.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(ct.a)(this).contains(t)&&Object(ct.a)(this).getRootNode()===Object(ct.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(ct.a)(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!dt||!ht)return null;if(!dt.handlesDynamicScoping)return null;const n=ht.ScopingShim;if(!n)return null;const s=n.scopeForNode(t),r=Object(ct.a)(t).getRootNode(),i=t=>{if(!ut(t,r))return;const e=Array.from(dt.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const i=e[t];if(!ut(i,r))continue;const o=n.currentScopeForNode(i);o!==s&&(""!==o&&n.unscopeNode(i,o),n.scopeNode(i,s))}};if(i(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const n=t[e];for(let t=0;t<n.addedNodes.length;t++){const e=n.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&i(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return pt.getComputedStyleValue(this,t)}debounce(t,e,n){return this._debouncers=this._debouncers||{},this._debouncers[t]=ot.a.debounce(this._debouncers[t],n>0?at.b.after(n):at.a,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?at.b.run(t.bind(this),e):~at.a.run(t.bind(this))}cancelAsync(t){t<0?at.a.cancel(~t):at.b.cancel(t)}create(t,e){let n=document.createElement(t);if(e)if(n.setProperties)n.setProperties(e);else for(let t in e)n[t]=e[t];return n}elementMatches(t,e){return Object(rt.b)(e||this,t)}toggleAttribute(t,e){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(e=!n.hasAttribute(t)),e?(Object(ct.a)(n).setAttribute(t,""),!0):(Object(ct.a)(n).removeAttribute(t),!1)}toggleClass(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?n.classList.add(t):n.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,n,s){s=s||this,this.transform("translate3d("+t+","+e+","+n+")",s)}arrayDelete(t,e){let n;if(Array.isArray(t)){if(n=t.indexOf(e),n>=0)return t.splice(n,1)}else{if(n=Object(lt.a)(this,t).indexOf(e),n>=0)return this.splice(t,n,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return s.prototype.is="",s})},402:function(t,e,n){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let s,r=null,i=window.HTMLImports&&window.HTMLImports.whenReady||null;function o(t){requestAnimationFrame((function(){i?i(t):(r||(r=new Promise(t=>{s=t}),"complete"===document.readyState?s():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&s()})),r.then((function(){t&&t()})))}))}n.d(e,"a",(function(){return d}));const a="__shadyCSSCachedStyle";let l=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,o(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,o(c))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[a])return t[a];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[a])continue;const s=this.getStyleForCustomStyle(n);if(s){const t=s.__appliedElement||s;l&&l(t),n[a]=t}}return t}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>l,set(t){l=t}},validateCallback:{get:()=>c,set(t){let e=!1;c||(e=!0),c=t,e&&this.enqueueDocumentValidation()}}})}}]);