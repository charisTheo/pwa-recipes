import { showSnackBar } from "./../../../global/snackBar";

const API_URL = 'https://ecommerce-pwa.herokuapp.com';
const NOTIFICATIONS_ACTIVE_URL = './img/notifications-active.svg';
const NOTIFICATIONS_NONE_URL = './img/notifications-none.svg';
const SERVICE_WORKER_SCOPE = '/offline-requests/';
// const SERVICE_WORKER_SCOPE = window.location.href.match('localhost') ? '/' : '/offline-requests/';
const VAPID_PUBLIC_KEY = 'BCvnBFnsPt6MPzwX_LOgKqVFG5ToFJ5Yl0qDfwrT-_lqG0PqgwhFijMq_E-vgkkLli7RWHZCYxANy_l0oxz0Nzs';

const notificationsRequestButton = document.getElementById('notifications-request-button');

// * Possible values: 'prompt', 'denied', or 'granted'
const getNotificationPermission = async () => {
    const registration = await navigator.serviceWorker.getRegistration(SERVICE_WORKER_SCOPE);
    if (registration) {
        const permission = await registration.pushManager.permissionState({ userVisibleOnly: true });
        return permission;
    } else {
        return 'unknown';
    }
}

// ! ask for permission only when the user clicks
const requestNotificationPermission = () => {
    navigator.serviceWorker.getRegistration(SERVICE_WORKER_SCOPE).then(registration => {
        registration.pushManager.permissionState({userVisibleOnly: true}).then(permission => {
            // Possible values are 'prompt', 'denied', or 'granted'
            if (permission === "prompt" || permission === "granted") {
                subscribeToPushManager(registration).then(() => {
                    notificationsRequestButton.src = NOTIFICATIONS_ACTIVE_URL;
                }).catch(() => {
                    notificationsRequestButton.src = NOTIFICATIONS_NONE_URL;
                });
            } else {
                showSnackBar("🚫 You have blocked notifications for this site!");
            }
        });
    });
}

const requestNotification = notificationType => {
    navigator.serviceWorker.getRegistration(SERVICE_WORKER_SCOPE).then(async registration => {
        if (!registration) {
            showSnackBar("Push subscription has been deleted or expired.");
            registration = await navigator.serviceWorker.register('./service-worker.js', { scope: 'offline-requests'});
            await subscribeToPushManager(registration);
        }
        const permission = await registration.pushManager.permissionState({userVisibleOnly: true});
        if (permission !== "granted") {
            // * ask for permission
            await subscribeToPushManager(registration);
        }

        try {
            const response = await fetch(
                `${API_URL}/user/push/${notificationType}`, 
                { 
                    method: 'GET',
                }
            );
            if (response.status === 400) {
                showSnackBar("Push subscription has been deleted or expired. Try requesting permission again.");

            } else if (response.status === 404) {
                showSnackBar("Push subscription has been deleted or expired.");
                await subscribeToPushManager(registration);
                requestNotification(notificationType);

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
        return Promise.reject();
    }
    console.log('Sending subscription to the API...');

    try {
        await fetch(`${API_URL}/user/push-subscription/`, {
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

export {
    getNotificationPermission,
    requestNotificationPermission,
    requestNotification,
    subscribeToPushManager
}