import { showSnackBar } from "./../../../global/snackBar";
import {
    addItemDescriptionToShoppingCart,
    clearShoppingCart,
    toggleShoppingCart    
} from "../../../global/shopping-cart";

const API_URL = 'https://ecommerce-pwa.herokuapp.com';
const NOTIFICATIONS_ACTIVE_URL = './img/notifications-active.svg';
const NOTIFICATIONS_NONE_URL = './img/notifications-none.svg';
const SERVICE_WORKER_SCOPE = '/cart-abandon-notification/';
// const SERVICE_WORKER_SCOPE = window.location.href.match('localhost') ? '/' : '/cart-abandon-notification/';
const VAPID_PUBLIC_KEY = 'BCvnBFnsPt6MPzwX_LOgKqVFG5ToFJ5Yl0qDfwrT-_lqG0PqgwhFijMq_E-vgkkLli7RWHZCYxANy_l0oxz0Nzs';

const notificationsRequestButton = document.getElementById('notifications-request-button');
let unread = 0;

navigator.serviceWorker.addEventListener('push', increamentAppBadge);
navigator.serviceWorker.addEventListener('notificationclose', decreamentAppBadge);

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
            registration = await navigator.serviceWorker.register('./service-worker.js', { scope: SERVICE_WORKER_SCOPE });
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
                    credentials: 'include'
                }
            );
            switch (response.status) {
                case 400: 
                    showSnackBar("Push subscription has been deleted or expired. Try requesting permission again.");
                    break;

                case 404: 
                    showSnackBar("Push subscription has been deleted or expired.");
                    await subscribeToPushManager(registration);
                    requestNotification(notificationType);
                    break;

                case 200: 
                    console.log("Push notification sent!");
                    break;
                default:
                    console.log("Unknown response status: ", response.status);
                    break;
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
            credentials: 'include',
            body: JSON.stringify({ subscription }),
            headers: {
                'content-type': 'application/json',
            }
        });
        showSnackBar("Subscription saved in database by the API");

    } catch (error) {
        showSnackBar("Oops! There was an error while hitting the API. Check the console for errors.");
        console.error(error);

    }
}

const checkPushNotificationActions = (searchQuery) => {
    // * get query params from the URL bar
    // ? 'checkout' || 'clear-shopping-cart'
    const params = new URLSearchParams(searchQuery);
    const checkout = params.get("checkout");
    const shouldClearShoppingCart = params.get('clear-shopping-cart');
    
    if (checkout === 'true') {
        const itemsString = params.get('items');
        const items = JSON.parse(itemsString);
        items.map(item => {
            addItemDescriptionToShoppingCart(item);
            toggleShoppingCart(true);
        });
        showSnackBar(`Checkout time! 🕺💵`);
        
    } else if (shouldClearShoppingCart === 'true') {
        clearShoppingCart();

    }

    // ? remove URL query parameters because on page refresh will go through the process again
    setTimeout(() => {
        window.history.replaceState({}, document.title, '/');
    }, 0);
}

const increamentAppBadge = async (number = 1) => {
    unread = unread + number;
    await navigator.setExperimentalAppBadge(unread);
    console.log("increamentAppBadge -> unread", unread)
    return unread; 
}

const decreamentAppBadge = async (number = 1) => {
    unread = unread - number;
    
    if (unread <= 0) {
        await navigator.clearExperimentalAppBadge();
    } else {
        await navigator.setExperimentalAppBadge(unread);
    }
    console.log("increamentAppBadge -> unread", unread)

    return unread;
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
    subscribeToPushManager,
    checkPushNotificationActions
}