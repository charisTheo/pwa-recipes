// https://developers.google.com/web/tools/workbox/guides/configure-workbox
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

addEventListener('activate', event => {
  event.waitUntil(clients.claim());
  skipWaiting();
});

workbox.routing.registerRoute(
  /(service-worker\.js)$/,
  new workbox.strategies.NetworkOnly()
);

workbox.precaching.precacheAndRoute(['index.html', 'js/index.js', 'manifest.json', 'css/main.css', 'favicon/favicon.ico'], 'GET');

workbox.routing.registerRoute(
  /(https:\/\/fonts.googleapis.com)/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /(https:\/\/fonts.gstatic.com)/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /\.(?:js|css|png|gif|jpg|svg|jpeg|webp)$/,
  new workbox.strategies.CacheFirst()
);

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
      return;
  }

  switch (event.action) {
    case 'cool':
      event.waitUntil(clients.openWindow(`/push-examples/?push-notifications-are-cool=${true}`));

    break;
    
    case 'not-cool':
      event.waitUntil(clients.openWindow(`/push-examples/?push-notifications-are-cool=${false}`));

    break;

    default:
        console.warn(`Unknown action clicked: '${event.action}'`);
    break;
  }
});
