(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{184:function(e,n,t){"use strict";t.r(n),t.d(n,"navigationTabSelected",(function(){return d})),t.d(n,"animatePageEnter",(function(){return p})),t.d(n,"animatePageLeave",(function(){return b})),t.d(n,"renderHtmlForTabSelected",(function(){return m}));var a=t(14),r=t.n(a),o=t(50),i=t(183),c=t(74),s=t.e(4).then(t.bind(null,406)),l=t.e(6).then(t.bind(null,407)),u=t.e(5).then(t.bind(null,408)),f=document.querySelector("main"),d=function(e){var n;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.detail.item.getAttribute("data-navigate-to"),t.next=3,r.a.awrap(p(0));case 3:return m(n),t.next=6,r.a.awrap(b(90));case 6:case"end":return t.stop()}}))},p=function(e){return new Promise((function(n,t){!function e(t){t<=90?(f.style.transform="rotateX(".concat(t,"deg)"),t+=5,requestAnimationFrame(e.bind(void 0,t))):(f.style.transform="rotateX(90deg)",n(!0))}(e)}))},b=function(e){return new Promise((function(n,t){!function e(t){t>=0?(f.style.transform="rotateX(".concat(t,"deg)"),t-=5,requestAnimationFrame(e.bind(void 0,t))):(f.style.transform="rotateX(0deg)",n(!0))}(e)}))},m=function(e){var n,t,a,c;return r.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:d.t0=e,d.next="apps"===d.t0?3:"offline-content"===d.t0?7:"info"===d.t0?11:15;break;case 3:return d.next=5,r.a.awrap(s);case 5:return n=d.sent,d.abrupt("break",15);case 7:return d.next=9,r.a.awrap(l);case 9:return n=d.sent,d.abrupt("break",15);case 11:return d.next=13,r.a.awrap(u);case 13:return n=d.sent,d.abrupt("break",15);case 15:if(f.innerHTML=n.default,"apps"!==e){d.next=23;break}o.d||o.c||(document.querySelector(".install-pwa-card").hidden=!1),document.querySelectorAll(".install-pwa-button").forEach((function(e){return e.addEventListener("click",i.installPwa)})),document.querySelector(".install-pwa-dismiss-button").addEventListener("click",i.dismissInstallPwaButtons),navigator.onLine||Object(i.markOfflineAvailableContent)(),d.next=33;break;case 23:if("offline-content"!==e){d.next=33;break}return window.removePageFromOfflineContent=v,t=document.querySelector(".offline-content-title"),a=document.querySelector(".offline-content"),c=["/cart-abandon-notification/","/offline-requests/","/push-examples/"].map((function(e){var n,t,i,c;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.a.awrap(Object(o.a)(e));case 2:return(n=s.sent)&&(t=Object(o.h)(n),i=Object(o.g)(n.url),c='<paper-icon-item id="'.concat(t,'" class="offline-available-page">\n                        <paper-icon-button class="offline-available-pages-icon" tabIndex="-1" icon="offline-pin"></paper-icon-button>\n                        <div class="avatar" style="background-image: url(').concat(e,'favicon/android-chrome-192x192.png)" slot="item-icon"></div>\n                        <a href="').concat(e,'" aria-label="Visit this cached page" style="max-width: 72%;">\n                            <paper-item-body two-line>\n                                <div>').concat(e,"</div>\n                                <div secondary>").concat(i,'</div>\n                            </paper-item-body>\n                        </a>\n                        <paper-icon-button class="cache-delete-button" onclick=\'window.removePageFromOfflineContent("').concat(e,'", "').concat(t,'")\' icon="delete" alt="Remove page from the cache" aria-label="Remove this page from the cache"></paper-icon-button>\n                    </paper-icon-item>'),a.innerHTML+=c),s.abrupt("return",Promise.resolve(e));case 5:case"end":return s.stop()}}))})),d.next=31,r.a.awrap(Promise.all(c));case 31:d.sent,document.querySelectorAll(".offline-available-page").length?t.innerHTML="Offline available pages":(t.innerHTML="No offline pages available 🤷‍♂",a.remove());case 33:case"end":return d.stop()}}))},v=function(e,n){var t,a,i;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.a.awrap(Object(o.e)(e));case 2:return t=s.sent,s.next=5,r.a.awrap(navigator.serviceWorker.getRegistration(e));case 5:if(a=s.sent,i=!1,!a){s.next=11;break}return s.next=10,r.a.awrap(a.unregister());case 10:i=s.sent;case 11:if(i){s.next=15;break}return console.warn("There was an error while unregistering the service worker at ".concat(e," - registration: ").concat(a)),Object(c.a)("There was an error while removing this page 😕 Try again later."),s.abrupt("return");case 15:if(t){s.next=19;break}return console.warn("There was an error while removing ".concat(e," from the cache!")),Object(c.a)("There was an error while removing this page 😕 Try again later."),s.abrupt("return");case 19:Object(o.f)(document.getElementById(n)),Object(c.a)("".concat(e," is no longer available offline!"));case 21:case"end":return s.stop()}}))}}}]);