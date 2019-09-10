const VAPID_PUBLIC_KEY = 'BCvnBFnsPt6MPzwX_LOgKqVFG5ToFJ5Yl0qDfwrT-_lqG0PqgwhFijMq_E-vgkkLli7RWHZCYxANy_l0oxz0Nzs';

window.addEventListener('load', function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js');
    }
});

// ! ask for permission only when the user clicks
window.requestNotificationPermission = function() {
    navigator.serviceWorker.getRegistration('/').then(registration => {
        registration.pushManager.permissionState({userVisibleOnly: true}).then(permission => {
        // Possible values are 'prompt', 'denied', or 'granted'
        if (permission === "prompt") {
            subscribeToPushManager(registration);
        }
        });
    });
}

window.requestNotification = function(notificationType) {
    navigator.serviceWorker.getRegistration('/').then(registration => {
        registration.pushManager.permissionState({userVisibleOnly: true}).then(permission => {
            if (permission === "granted") {
                fetch(`/user/John/push/${notificationType}`, { method: 'GET' })
                .then(function(response) {
                    if (response.status === 404) {
                        console.log('Push subscription has been deleted or expired.');
                        subscribeToPushManager(registration);
                    } else {
                        console.log("Push notification sent!");
                    }
                  }).catch(function() {
                    console.warn("error while sending push notification...");
                  });
            } else {
                // * ask for permission
                subscribeToPushManager(registration);
            }
        });
    });
}

function subscribeToPushManager(registration) {
    console.log('Subscribing to the Push Manager');

    registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    }).then(function(subscription) {
        if (!subscription) {
            console.warn('Push Subscription not found!');
            return;
        }
        console.log('Sending the subscription to the API');

        fetch('/user/push-subscription/John', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function() {
            console.log("user subscribed");
        }).catch(function() {
            console.log("error while subscribing");
        });
    });
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}