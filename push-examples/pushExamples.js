!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=3)}([function(n,e,t){n.exports=t(4)},function(n,e){function t(n,e,t,r,o,a,i){try{var s=n[a](i),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,o)}n.exports=function(n){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=n.apply(e,r);function s(n){t(i,o,a,s,c,"next",n)}function c(n){t(i,o,a,s,c,"throw",n)}s(void 0)}))}}},function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"==typeof window&&(t=window)}n.exports=t},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(1),i=t.n(a),s=(t(6),"https://ecommerce-pwa.herokuapp.com"),c=document.getElementById("snackbar");window.addEventListener("load",(function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js",{scope:"/push-examples/"}),navigator.onLine||f();var n=document.location.search;if(n){var e=g(n);document.body.classList.remove("cool","not-cool"),document.body.offsetWidth,document.body.classList.add(e?"cool":"not-cool"),setTimeout((function(){document.body.classList.remove("cool","not-cool"),window.history.replaceState({},document.title,"/")}),2500)}})),window.wipeData=i()(o.a.mark((function n(){var e;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/user/remove"),{method:"GET"});case 2:if(400!==n.sent.status){n.next=6;break}return h("There was an error while deleting your data 😕. Please Try again."),n.abrupt("return");case 6:return caches.keys().then((function(n){n.map((function(n){return caches.delete(n)}))})),n.next=9,navigator.serviceWorker.getRegistration("/push-examples/");case 9:return e=n.sent,n.next=12,e.unregister();case 12:h("All your data has been deleted!");case 13:case"end":return n.stop()}}),n)}))),window.requestNotificationPermission=function(){navigator.serviceWorker.getRegistration("/push-examples/").then((function(n){n.pushManager.permissionState({userVisibleOnly:!0}).then((function(e){"prompt"!==e&&"granted"!==e||l(n)}))}))},window.requestNotification=function(n){navigator.serviceWorker.getRegistration("/push-examples/").then(function(){var e=i()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=7;break}return h("Push subscription has been deleted or expired."),e.next=4,navigator.serviceWorker.register("./service-worker.js",{scope:"/push-examples/"});case 4:return t=e.sent,e.next=7,l(t);case 7:return e.next=9,t.pushManager.permissionState({userVisibleOnly:!0});case 9:if("granted"===e.sent){e.next=13;break}return e.next=13,l(t);case 13:return e.prev=13,e.next=16,fetch("".concat(s,"/user/push/").concat(n),{method:"GET"});case 16:if(400!==(r=e.sent).status){e.next=21;break}h("Push subscription has been deleted or expired. Try requesting permission again."),e.next=29;break;case 21:if(404!==r.status){e.next=28;break}return h("Push subscription has been deleted or expired."),e.next=25,l(t);case 25:window.requestNotification(n),e.next=29;break;case 28:console.log("Push notification sent!");case 29:e.next=35;break;case 31:e.prev=31,e.t0=e.catch(13),h("Oops! There was an error while hitting the API. Check the console for errors."),console.error(e.t0);case 35:case"end":return e.stop()}}),e,null,[[13,31]])})));return function(n){return e.apply(this,arguments)}}())};var u,l=function(){var n=i()(o.a.mark((function n(e){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h("Subscribing to the Push Manager..."),n.next=3,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:m("BCvnBFnsPt6MPzwX_LOgKqVFG5ToFJ5Yl0qDfwrT-_lqG0PqgwhFijMq_E-vgkkLli7RWHZCYxANy_l0oxz0Nzs")});case 3:if(t=n.sent){n.next=7;break}return h("Couldn't subscribe to the Push Manager!"),n.abrupt("return");case 7:return console.log("Sending subscription to the API..."),n.prev=8,n.next=11,fetch("".concat(s,"/user/push-subscription/"),{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}});case 11:h("Subscription saved in database by the API"),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(8),h("Oops! There was an error while hitting the API. Check the console for errors."),console.error(n.t0);case 18:case"end":return n.stop()}}),n,null,[[8,14]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){p(),h("You are offline 📴")},p=function(){Array.prototype.slice.call(document.querySelectorAll("main button")).map((function(n){n.classList.add("unavailable-offline")}))},d=function(){Array.prototype.slice.call(document.querySelectorAll("main button")).map((function(n){n.classList.remove("unavailable-offline")}))};window.addEventListener("offline",(function(){f()})),window.addEventListener("online",(function(){d(),h("You are back online! 🎉")}));var h=function(n){u&&clearTimeout(u),""!==c.innerHTML?c.innerHTML+="\n"+n:c.innerHTML=n,c.classList.add("show"),u=setTimeout((function(){c.classList.remove("show"),c.innerHTML=""}),5e3)},g=function(n){var e=n.split("");e.splice(0,1);var t=e.join("").split("=");return"true"===decodeURIComponent(t[1])},m=function(n){for(var e=(n+"=".repeat((4-n.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),t=window.atob(e),r=new Uint8Array(t.length),o=0;o<t.length;++o)r[o]=t.charCodeAt(o);return r}},function(n,e,t){(function(e){var r="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,n.exports=t(5),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(n){r.regeneratorRuntime=void 0}}).call(this,t(2))},function(n,e,t){(function(e){!function(e){"use strict";var t,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"==typeof n,l=e.regeneratorRuntime;if(l)u&&(n.exports=l);else{(l=e.regeneratorRuntime=u?n.exports:{}).wrap=w;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",g={},m={};m[i]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(P([])));y&&y!==r&&o.call(y,i)&&(m=y);var b=E.prototype=k.prototype=Object.create(m);L.prototype=b.constructor=E,E.constructor=L,E[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,E):(n.__proto__=E,c in n||(n[c]="GeneratorFunction")),n.prototype=Object.create(b),n},l.awrap=function(n){return{__await:n}},j(C.prototype),C.prototype[s]=function(){return this},l.AsyncIterator=C,l.async=function(n,e,t,r){var o=new C(w(n,e,t,r));return l.isGeneratorFunction(e)?o:o.next().then((function(n){return n.done?n.value:o.next()}))},j(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(n){var e=[];for(var t in n)e.push(t);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},l.values=P,M.prototype={constructor:M,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!n)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function r(r,o){return s.type="throw",s.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===n||"continue"===n)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=n,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),g},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),T(t),g}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var r=t.completion;if("throw"===r.type){var o=r.arg;T(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:P(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}}}function w(n,e,t,r){var o=e&&e.prototype instanceof k?e:k,a=Object.create(o.prototype),i=new M(r||[]);return a._invoke=function(n,e,t){var r=f;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return H()}for(t.method=o,t.arg=a;;){var i=t.delegate;if(i){var s=S(i,t);if(s){if(s===g)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(r===f)throw r=h,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r=d;var c=x(n,e,t);if("normal"===c.type){if(r=t.done?h:p,c.arg===g)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(r=h,t.method="throw",t.arg=c.arg)}}}(n,t,i),a}function x(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}function k(){}function L(){}function E(){}function j(n){["next","throw","return"].forEach((function(e){n[e]=function(n){return this._invoke(e,n)}}))}function C(n){function t(e,r,a,i){var s=x(n[e],n,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(n){t("next",n,a,i)}),(function(n){t("throw",n,a,i)})):Promise.resolve(u).then((function(n){c.value=n,a(c)}),i)}i(s.arg)}var r;"object"==typeof e.process&&e.process.domain&&(t=e.process.domain.bind(t)),this._invoke=function(n,e){function o(){return new Promise((function(r,o){t(n,e,r,o)}))}return r=r?r.then(o,o):o()}}function S(n,e){var r=n.iterator[e.method];if(r===t){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=t,S(n,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(r,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var a=o.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function T(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function M(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(O,this),this.reset(!0)}function P(n){if(n){var e=n[i];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,a=function e(){for(;++r<n.length;)if(o.call(n,r))return e.value=n[r],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}return{next:H}}function H(){return{value:t,done:!0}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,t(2))},function(n,e,t){var r=t(7);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:("head","head"),injectType:"singletonStyleTag",singleton:!0};t(9)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(8)(!1)).push([n.i,"/* Material Color tool: https://material-ui.com/customization/color/#color-tool */\n:root {\n    --orange80: rgba(255, 99, 51, 0.8);\n    --orange: #ff6333;\n    --yellow: #FFEB3B;\n    --dark-orange: #ff3d00;\n    --purple: #673ab7;\n    --dark-purple: #4a1a9e;\n}\nbody, html {\n    min-height: 100vh;\n}\nbody {\n    position: relative;\n    margin: 0;\n    padding: 0;\n    color: white;\n    text-align: center;\n    /* TODO */\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%ff6333' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\");\n    background-color: #ffeae9;\n}\n.container {\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-areas: \n      \"header\"\n      \"wipe-data-btn\"\n      \"main\"\n      \"footer\";\n    align-content: space-between;\n}\n\nbody.cool .container,\nbody.not-cool .container {\n    filter: blur(5px);\n}\n\nbody.cool .cool-dialog,\nbody.not-cool .not-cool-dialog {\n    transform: scale(1);\n}\n\n#fork-me-banner {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 9;\n}\n#fork-me-banner,\n#fork-me-banner > svg {\n    width: 75px;\n    height: 75px;\n    box-sizing: border-box;\n}\n#fork-me-banner > svg > path:not(:first-child) {\n    fill: var(--purple);\n}\n#fork-me-banner:hover .octo-arm,\n#fork-me-banner:focus .octo-arm {\n    -webkit-animation: octocat-wave 560ms ease-in-out;\n    animation: octocat-wave 560ms ease-in-out;\n}\n@-webkit-keyframes octocat-wave {\n    0%,100% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n    }\n    20%,60% { \n        -webkit-transform: rotate(-25deg);\n        transform: rotate(-25deg);\n    } \n    40%,80% {\n        -webkit-transform: rotate(10deg);\n        transform: rotate(10deg);\n    }\n}\n@keyframes octocat-wave {\n    0%,100% {\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n    }\n    20%,60% {\n        -webkit-transform: rotate(-25deg);\n        transform: rotate(-25deg);\n    }\n    40%,80% {\n        -webkit-transform: rotate(10deg);\n        transform:rotate(10deg);\n    }\n}\n\nheader {\n    grid-area: header;\n    min-height: 40px;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    align-content: space-between;\n    box-shadow: 0 5px 15px rgba(0,0,0,0.5);\n    padding: 10px 20px;\n    background-color: var(--purple);\n    margin: 0;\n}\n\nheader h3 {\n    text-shadow: 0px 2px 0px rgba(0,0,0,0.5);\n    text-align: left;\n    margin: 20px 0 10px;\n}\n\n#wipe-data-btn {\n    background-color: #f44336;\n    padding: 10px 15px;\n    justify-self: start;\n    margin-left: 15px;\n    margin-top: 15px;\n    grid-area: wipe-data-btn;\n}\n\nmain {\n    grid-area: main;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-flow: row;\n    grid-auto-rows: 100px;\n    grid-gap: 20px;\n    min-height: 700px;\n    max-width: 900px;\n    margin: 0 auto;\n    padding: 20px 5px;\n}\n\nmain h2 {\n    grid-column: 2 / 3;\n    border: 2px solid var(--orange);\n    border-radius: 8px;\n    padding: 10px 15px;\n    color: black;\n    justify-self: center;\n    align-self: center;\n}\n\nmain section {\n    display: grid;\n    grid-column: 1 / -1;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-auto-rows: 100px;\n    grid-auto-flow: row;\n}\n\nbutton {\n    background-color: var(--purple);\n    color: white;\n    padding: 4px 8px;\n    margin: 5px 10px;\n    border-radius: 4px;\n    border: none;\n    outline: none;\n    font-size: 1.2rem;\n    box-shadow: 0 0 11px rgba(0,0,0,0.5);\n    text-shadow: 0px 2px 0px rgba(0,0,0,0.5);\n    transition: all 0.35s;\n    text-transform: capitalize;\n}\na {\n    border-radius: 4px;\n    transition: all 0.35s;\n    border: none;\n    outline: none;\n}\n\na:focus,\nbutton:focus {\n    border: 3px solid var(--yellow);\n}\n\na:focus,\na:hover,\nbutton:focus,\nbutton:hover {\n    outline: none;\n    box-shadow: 0 0 15px var(--purple);\n}\na:active,\nbutton:active {\n    outline: none;\n    box-shadow: none;\n    background-color: var(--dark-purple);\n}\n\n.unavailable-offline {\n    opacity: 0.7;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.request-button, \n.arrow-down {\n    grid-column: 1 / -1;\n}\n\n\n\nfooter {\n    grid-area: footer;\n    background-color: #333333;\n    padding: 25px;\n    display: grid;\n    grid-gap: 30px;\n    grid-template-rows: repeat(auto-fit, minmax(30px, 1fr));\n}\nfooter span {\n    text-align: left;\n    font-size: 14px;\n}\nfooter a {\n    color: var(--orange);\n    display: inline-block;\n    padding: 10px 0;\n}\n\n\n.arrow-right {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='%23ff3d00' d='M11,16H3V8H11V2L21,12L11,22V16M13,7V10H5V14H13V17L18,12L13,7Z' /%3E%3C/svg%3E\");\n}\n.arrow-left {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='%23ff3d00' d='M13,22L3,12L13,2V8H21V16H13V22M6,12L11,17V14H19V10H11V7L6,12Z' /%3E%3C/svg%3E\");\n}\n.arrow-down {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='%23ff3d00' d='M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z' /%3E%3C/svg%3E\");\n}\n.arrow-up {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='%23ff3d00' d='M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z' /%3E%3C/svg%3E\");\n}\nspan[class^=\"arrow\"] {\n    background-repeat: no-repeat no-repeat;\n    background-position: center center;\n}\n\n@media all and (display-mode: browser) {\n    body {\n        font-family: 'Open Sans', sans-serif;\n    }\n}\n    /* * If launched in standalone mode use system fonts */\n@media all and (display-mode: standalone) {\n    body {\n        font-family: \"system-ui\", \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    }\n}",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var i,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<n.length;i++){var s=n[i];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function s(n,e){for(var t=[],r={},o=0;o<n.length;o++){var a=n[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):t.push(r[i]={id:i,parts:[s]})}return t}function c(n,e){for(var t=0;t<n.length;t++){var r=n[t],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(m(r.parts[i],e))}else{for(var s=[];i<r.parts.length;i++)s.push(m(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function d(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o&&n.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,g=0;function m(n,e){var t,r,o;if(e.singleton){var a=g++;t=h||(h=u(e)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=u(e),r=d.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=s(n,e);return c(t,e),function(n){for(var r=[],a=0;a<t.length;a++){var i=t[a],u=o[i.id];u&&(u.refs--,r.push(u))}n&&c(s(n,e),e);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete o[f.id]}}}}}]);