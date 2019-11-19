importScripts("precache-manifest.836fdbd4e108b325dcdbd993fe040b9a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// https://developers.google.com/web/tools/workbox/guides/configure-workbox
const placeholderURL = '/img/placeholder-image.png'; // precaching this in __precacheManifest file

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

addEventListener('message', event => {
  if (event.data && event.data.type === 'NEW_VERSION') {
    skipWaiting();
  }
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || [placeholderURL]);

workbox.routing.registerRoute(
  /(https:\/\/fonts.googleapis.com)/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /(https:\/\/fonts.gstatic.com)/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /(service-worker\.js)$/,
  new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /\.(?:webp|png|jpg|jpeg|svg)$/,
  async ({url, event, params}) => {
    const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();
    const response = await fetch(url, { method: 'GET' }) || await caches.match(event.request);
    
    if (response && response.status === 404) {
      console.warn(`\nServiceWorker: Image [${url.href}] was not found either in network or in cache! Responding with placeholder image instead...`);
      // * respond with placeholder image
      return await fetch(placeholderURL, { method: 'GET' });

    } else {
      return await staleWhileRevalidate.handle({event});
      
    }
  }
);

workbox.routing.registerRoute(
  new RegExp('/.*'), 
  new workbox.strategies.CacheFirst(), 
  'GET'
);

addEventListener('push', function(event) {
  let options = {};
  if (!!event.data) {
      const data = event.data.json();
      options = {
          ...data,
          icon: './img/chrome-web-icon-96.png',
          chrome_web_icon: './img/chrome-web-icon-96.png',
          badge: './img/speech-notification-badge-inverted-48.png',
          chrome_web_badge: './img/speech-notification-badge-inverted-48.png',
      }
      registration.showNotification(data.title, options);
  }
});

// addEventListener('notificationclick', function(event) {
//   event.notification.close();
//   // * data received from server (dataPushOptions)
//   const data = event.notification.data;

//   if (!event.action) {
//     // ? Was a normal notification click
//     return;
//   }

//   switch (event.action) {
//     // ? Handle push notification actions here

//     default:
//         console.warn(`service-worker notificationclick event -> Unknown action clicked: ${event.action}`);
//     break;
//   }
// });

