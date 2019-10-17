// https://developers.google.com/web/tools/workbox/guides/configure-workbox
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute(['/'], 'GET');

workbox.routing.registerRoute(
  /\.(?:html|js|css|webp|png|jpg|svg|ico)$/,
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
        console.warn(`service-worker 'notificationclick' event -> Unknown action clicked: '${event.action}'`);
    break;
  }
});
