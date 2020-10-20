// https://developers.google.com/web/tools/workbox/guides/configure-workbox
// precaching these images in the __precacheManifest file
const PLACEHOLDER_IMAGE_URL = '/img/placeholder-image.png';
const PAGE_ICON_URL = '/cart-abandon-notification/favicon/android-chrome-192x192.png';

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline'
  }
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || [PLACEHOLDER_IMAGE_URL, PAGE_ICON_URL]);

addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

addEventListener('message', event => {
  if (event.data && event.data.type === 'NEW_VERSION') {
    skipWaiting();
  }
});

workbox.routing.registerRoute(
  /(service-worker\.js)$/,
  new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
  /(https:\/\/fonts\.(googleapis|gstatic)\.com)/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /(index\.html|\/)/g,
  new workbox.strategies.StaleWhileRevalidate(),
  'GET'
);

workbox.routing.registerRoute(
  /\.(?:css|js)$/,  
  new workbox.strategies.CacheFirst(),
  'GET'
);

workbox.routing.registerRoute(
  /\.(?:webp|png|jpg|jpeg|svg)$/,
  async ({url, event, params}) => {
    const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();
    
    try {
      const response = await caches.match(event.request) || await fetch(url, { method: 'GET' });
      if (response && response.status === 404 && url.href.match('\/products\/')) {
        throw new Error(response.status);
      } else {
        return await staleWhileRevalidate.handle({event});
      }

    } catch (error) {
      console.warn(`\nServiceWorker: Image [${url.href}] was not found either in the network or the cache. Responding with placeholder image instead.\n`);
      // * get placeholder image from cache || get placeholder image from network
      return await caches.match(PLACEHOLDER_IMAGE_URL) || await fetch(PLACEHOLDER_IMAGE_URL, { method: 'GET' });

    }
  }
);

// ! DEBUG ONLY
// addEventListener('fetch', event => {
//   console.log(event.request.url);
//   if (event.request.url.match(/css/g)) {
//     console.log("TCL: event.request", event.request);
//     // console.log("TCL: event.request.url", event.request.url)
//   }
// });
// ! DEBUG ONLY
// self.addEventListener('install', (event) => {
//   const urls = ['bundle.js'];
//   const cacheName = workbox.core.cacheNames.runtime;
//   event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(urls)));
// });

self.addEventListener('push', function(event) {
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
      self.registration.showNotification(data.title, options);
  }
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  // * data received from server (dataPushOptions)
  const data = event.notification.data;

  if (!event.action) {
    // ? Was a normal notification click

    if (event.notification.tag === 'cart-abandoned') {
      const { items } = data;

      // TODO: handle window location in dev mode
      event.waitUntil(
        clients.openWindow(`/cart-abandon-notification/?checkout=${true}&items=${encodeURIComponent(JSON.stringify(items))}`)
      );
    }

    return;
  }

  switch (event.action) {
    case 'checkout':
      const { items } = data;
      event.waitUntil(clients.openWindow(`/cart-abandon-notification/?checkout=${true}&items=${encodeURIComponent(JSON.stringify(items))}`));
    break;
    
    case 'clear':
      event.waitUntil(clients.openWindow(`/cart-abandon-notification/?clear-shopping-cart=${true}`));
    break;

    default:
        console.warn(`service-worker notificationclick event -> Unknown action clicked: ${event.action}`);
    break;
  }
});
