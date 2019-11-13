importScripts("precache-manifest.305bd5c3d697ffcfaf9d98c239f1ac3d.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// https://developers.google.com/web/tools/workbox/guides/configure-workbox

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

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// workbox.routing.registerRoute(
//   /\.(?:html|js|css|webp|png|jpg|svg|ico)$/,
//   new workbox.strategies.StaleWhileRevalidate()
// );
workbox.routing.registerRoute(
  /\.(?:webp|png|jpg|jpeg|svg)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /(service-worker\.js)$/,
  new workbox.strategies.NetworkOnly()
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

addEventListener('notificationclick', function(event) {
  event.notification.close();
  // * data received from server (dataPushOptions)
  const data = event.notification.data;

  if (!event.action) {
    // ? Was a normal notification click

    if (event.notification.tag === 'cart-abandoned') {
      const { items } = data;

      event.waitUntil(
        clients.openWindow(`/?checkout=${true}&items=${encodeURIComponent(JSON.stringify(items))}`)
      );
    }

    return;
  }

  switch (event.action) {
    case 'checkout':
      const { items } = data;
      event.waitUntil(clients.openWindow(`/?checkout=${true}&items=${encodeURIComponent(JSON.stringify(items))}`));
    break;
    
    case 'clear':
      event.waitUntil(clients.openWindow(`/?clear-shopping-cart=${true}`));
    break;

    default:
        console.warn(`service-worker notificationclick event -> Unknown action clicked: ${event.action}`);
    break;
  }
});

