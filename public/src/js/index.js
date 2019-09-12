const VAPID_PUBLIC_KEY = 'BCvnBFnsPt6MPzwX_LOgKqVFG5ToFJ5Yl0qDfwrT-_lqG0PqgwhFijMq_E-vgkkLli7RWHZCYxANy_l0oxz0Nzs';
const snackBar = document.getElementById('snackbar');

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js');
    }
    const queryString = document.location.search;

    if (!!queryString) {
        // ? get push-notifications-are-cool parameter from the URL bar
        const pushNotificationsAreCool = getValueFromUrlQueryString(queryString);

        document.body.classList.remove('cool', 'not-cool');
        void document.body.offsetWidth; // * trigger reflow event
        document.body.classList.add(pushNotificationsAreCool ? 'cool' : 'not-cool');
        
        // remove class after animation has ended (1.5s)
        setTimeout(() => {
            document.body.classList.remove('cool', 'not-cool');
            window.history.replaceState({}, document.title, '/');
        }, 2500);
    }
});

window.wipeData = async () => {
    // * Removes user data from the database
    //  * Also removes the httpOnly cookie 
    const response = await fetch(`/user/remove`, { method: 'GET' });
    if (response.status === 400) {
        showSnackBar("There was an error while deleting your data 😕. Please Try again.");
        return;
    } 
    
    // * wipe cache
    caches.keys()
    .then(cacheNames => {
        cacheNames.map(cache => caches.delete(cache));
    });

    // * unregister all service workers
    const registrations = await navigator.serviceWorker.getRegistrations();
    const registrationsPromises = registrations.map(registration => {
        registration.unregister();
    });

    await Promise.all(registrationsPromises);

    // ! Cannot revoke browser notification permissions yet. 
    // ! https://stackoverflow.com/questions/28478185/remove-html5-notification-permissions/

    showSnackBar("All your data has been deleted!");
}

// ! ask for permission only when the user clicks
window.requestNotificationPermission = () => {
    navigator.serviceWorker.getRegistration('/').then(registration => {
        registration.pushManager.permissionState({userVisibleOnly: true}).then(permission => {
            // Possible values are 'prompt', 'denied', or 'granted'
            if (permission === "prompt" || permission === "granted") {
                subscribeToPushManager(registration);
            }
        });
    });
}

window.requestNotification = notificationType => {
    navigator.serviceWorker.getRegistration('/').then(async registration => {
        if (!registration) {
            showSnackBar("Push subscription has been deleted or expired.");
            registration = await navigator.serviceWorker.register('./service-worker.js');
            await subscribeToPushManager(registration);
        }
        const permission = await registration.pushManager.permissionState({userVisibleOnly: true});
        if (permission !== "granted") {
            // * ask for permission
            await subscribeToPushManager(registration);
        }

        try {
            const response = await fetch(`/user/push/${notificationType}`, { method: 'GET' });
            if (response.status === 400) {
                showSnackBar("Push subscription has been deleted or expired. Try requesting permission again.");

            } else if (response.status === 404) {
                showSnackBar("Push subscription has been deleted or expired.");
                await subscribeToPushManager(registration);
                window.requestNotification(notificationType);

            } else {
                console.log("Push notification sent!");

            }

        } catch (error) {
            showSnackBar("Oops! There was an error while hitting the API. Check the console for errors.");
            console.error(error);

        }

    });
}

const subscribeToPushManager = async registration => {
    showSnackBar('Subscribing to the Push Manager...');

    const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    });

    if (!subscription) {
        showSnackBar("Couldn't subscribe to the Push Manager!");
        return;
    }
    console.log('Sending subscription to the API...');

    try {
        await fetch('/user/push-subscription/', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'content-type': 'application/json'
            }
        });
        showSnackBar("Subscription saved in database by the API");

    } catch (error) {
        showSnackBar("Oops! There was an error while hitting the API. Check the console for errors.");
        console.error(error);

    }
}

var hideSnackBarTimeout;
const showSnackBar = message => {
    if (hideSnackBarTimeout) {
        clearTimeout(hideSnackBarTimeout);
    } 
    if (snackBar.innerText !== '') {
        snackBar.innerText += '\n' + message;
    } else {
        snackBar.innerText = message;
    }

    snackBar.classList.add('show');
    hideSnackBarTimeout = setTimeout(() => {
        snackBar.classList.remove('show');
        snackBar.innerText = '';
    }, 5000);
}

const getValueFromUrlQueryString = queryString => {
    const queryStringCharactersArr = queryString.split('');
    // ? remove the ? character
    queryStringCharactersArr.splice(0, 1); 
    const sanitisedQueryString = queryStringCharactersArr.join('');
    const pair = sanitisedQueryString.split('=');
    return decodeURIComponent(pair[1]) === 'true' ? true : false;
}

const urlBase64ToUint8Array = base64String => {
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