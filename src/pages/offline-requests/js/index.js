if (!global._babelPolyfill) {
	require('babel-polyfill');
}

import { Workbox } from 'workbox-window';

import './../css/main.css';
import './../../../global/styles.css';
import './../css/offline-theme-dark.css';

import '@polymer/paper-card/paper-card';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-toolbar/paper-toolbar';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-item/paper-item-body';
import '@polymer/paper-item/paper-icon-item';

import "./offline.min";
import { showSnackBar } from "./../../../global/snackBar";
import {
    getNotificationPermission,
    requestNotificationPermission
} from "./notifications";
import {
    configureLocalDatabase
} from './indexDB';
import {
    addToCart,
    removeAllItemsDescriptionsFromShoppingCart,
    initialiseNumberOfCartItems,
    toggleShoppingCart
} from './shopping-cart';

const API_URL = 'https://ecommerce-pwa.herokuapp.com';
const NOTIFICATIONS_ACTIVE_URL = './img/notifications-active.svg';
const NOTIFICATIONS_NONE_URL = './img/notifications-none.svg';
const SERVICE_WORKER_SCOPE = '/offline-requests/';
// const SERVICE_WORKER_SCOPE = process.env.NODE_ENV === 'development' ? '/' : '/offline-requests/';
const notificationsRequestButton = document.getElementById('notifications-request-button');
const shoppingCartButton = document.getElementById('shopping-cart-button');
const cartCloseButton = document.getElementById('cart-close-button');
const checkoutButton = document.getElementById('checkout-button');
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

window.addEventListener('load', async () => {
    // * register service worker
    registerServiceWorker();

    attachClickEventListeners();
    initialiseNumberOfCartItems();
    
    // * initialise notificationsRequestBtn notification icon src after checking the pushManager's permission
    const pushPermission = await getNotificationPermission();
    const notificationButtonIconSrc = pushPermission === "granted" ? NOTIFICATIONS_ACTIVE_URL : NOTIFICATIONS_NONE_URL;
    notificationsRequestButton.setAttribute('src', notificationButtonIconSrc);
});

const attachClickEventListeners = () => {
    addToCartButtons.forEach(button => button.addEventListener('click', addToCart));
    shoppingCartButton.addEventListener('click', toggleShoppingCart);
    cartCloseButton.addEventListener('click', toggleShoppingCart);
    checkoutButton.addEventListener('click', checkout);
    notificationsRequestButton.addEventListener('click', requestNotificationPermission);
}

var workBox;
const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
        workBox = new Workbox('./service-worker.js', { scope: SERVICE_WORKER_SCOPE });

        workBox.addEventListener('controlling', () => {
            window.location.reload();
        });

        workBox.addEventListener('waiting' , () => {
            var updateServiceWorker = event => {
                workBox.messageSW({ type: 'NEW_VERSION'});
            };
            window.updateServiceWorker = updateServiceWorker;
        
            setTimeout(() => 
                showSnackBar('A new version is available <span style="font-size:17px;margin-left:5px">👉</span><a href="#" onclick="updateServiceWorker();" class="snackbar-refresh-button">&#x21BB;</a>')
                , 0
            );
        });

        workBox.register();
    }
}

const checkout = async event => {
    const response = await fetch(`${API_URL}/checkout`, { 
        method: 'GET', 
    });
    const items = await response.json();
    console.log("checkout: items", items);
    
    if (response.status === 200) {
        removeAllItemsDescriptionsFromShoppingCart();
        showSnackBar(`🤟 Yeayy!! Checkout 🛒! 🤟`);
    } else {
        showSnackBar(`There was an error during the checkout of your cart 😕`);
    }
}

window.addEventListener('offline', async () => {
    showSnackBar('You are offline 📴');
    configureLocalDatabase();
    const registration = await navigator.serviceWorker.getRegistration(SERVICE_WORKER_SCOPE);
    // * register Background Sync event
    registration.sync.register('sync-cart-items');
});

window.addEventListener('online', function() {
    showSnackBar('You are back online! 🎉');
    // TODO use background sync to add or remove items from IndexDB to the API
});

if (window.Offline) {
    window.Offline.options = {
        checkOnLoad: true,
        requests: true
    }
}
