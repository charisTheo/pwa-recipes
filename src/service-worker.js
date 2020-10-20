// https://developers.google.com/web/tools/workbox/guides/configure-workbox
// workbox.precaching.precacheAndRoute((self.__precacheManifest || []).concat([PLACEHOLDER_IMAGE_URL, PAGE_ICON_URL, OFFLINE_PAGE_URL]));
const OFFLINE_PAGE_URL = '/offline.html';
// const PLACEHOLDER_IMAGE_URL = '/img/placeholder-image.png';
// const PAGE_ICON_URL = '/favicon/android-chrome-192x192.png';

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

addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

addEventListener('message', event => {
  if (event.data && event.data.type === 'NEW_VERSION') {
    skipWaiting();
  }
});

addEventListener('fetch', async event => {
    if (event.request.mode === 'navigate') {
      event.respondWith((async () => {
        const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();
        const url = event.request.url;
        
        try {
          // check if the event.request.url exists in the cache or in the network
          const response = await caches.match(event.request) || await fetch(event.request);
          if (!response || response.status === 404) {
            throw new Error(response.status);
          } else {
            return await staleWhileRevalidate.handle({event});
          }
    
        } catch (error) {
          // if not found in any of the two, respond with the offline.html file
          console.warn(`ServiceWorker: ${url} was not found either in the network or the cache. Responding with offline page instead.\n`);
          return await caches.match(OFFLINE_PAGE_URL) || await fetch(OFFLINE_PAGE_URL, { method: 'GET' });
    
        }
      })());
    }
});

workbox.precaching.precacheAndRoute((self.__precacheManifest || []));

workbox.routing.registerRoute(
  /(https:\/\/fonts\.(googleapis|gstatic)\.com)/,
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

    try {
      const response = await caches.match(event.request) || await fetch(url, { method: 'GET' });
      if (!response || response.status === 404) {
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

workbox.routing.registerRoute(
  /(index\.html|\/)$/,
  new workbox.strategies.StaleWhileRevalidate(),
  'GET'
);