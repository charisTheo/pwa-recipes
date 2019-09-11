// https://developers.google.com/web/tools/workbox/guides/configure-workbox
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute(['index.html']);

workbox.routing.registerRoute(
  /\.(?:html|js|css|webp|png|svg|ico)$/,
  new workbox.strategies.StaleWhileRevalidate()
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
      event.waitUntil(clients.openWindow(`/?push-notifications-are-cool=${true}`));

    break;
    
    case 'not-cool':
      event.waitUntil(clients.openWindow(`/?push-notifications-are-cool=${false}`));

    break;

    default:
        console.warn(`Unknown action clicked: '${event.action}'`);
    break;
  }
});
