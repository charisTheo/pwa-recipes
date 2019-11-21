if (!global._babelPolyfill) {
	require('babel-polyfill');
}

import { Workbox } from 'workbox-window';

import './../css/main.css';
import './../../../global/styles.css';

import '@polymer/paper-card/paper-card';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-toolbar/paper-toolbar';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-item/paper-item-body';
import '@polymer/paper-item/paper-icon-item';
import '@polymer/paper-toggle-button/paper-toggle-button';

import { showSnackBar } from "./../../../global/snackBar";
import {
    getNotificationPermission,
    requestNotificationPermission,
    requestNotification,
    checkPushNotificationActions
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
const SERVICE_WORKER_SCOPE = '/cart-abandon-notification/';
// const SERVICE_WORKER_SCOPE = process.env.NODE_ENV === 'development' ? '/' : '/cart-abandon-notification/';
const notificationsRequestButton = document.getElementById('notifications-request-button');
const shoppingCartButton = document.getElementById('shopping-cart-button');
const cartCloseButton = document.getElementById('cart-close-button');
const checkoutButton = document.getElementById('checkout-button');
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const pageVisibilityPushToggleButton = document.getElementById('page-visibility-push-toggle-button');

var pageVisibilityPushIsEnabled = true;

window.addEventListener('load', async () => {
    // * register service worker
    registerServiceWorker();

    // * handle URL queries from push notification action clicks 
    const searchQuery = document.location.search;
    if (!!searchQuery) {
        checkPushNotificationActions(searchQuery);
    } else {
        initialiseNumberOfCartItems()
    }

    attachClickEventListeners();

    document.addEventListener('visibilitychange', function() {
        console.info("visibilitychange: document.hidden", document.hidden);
        setAbandonNotificationTimeout();
    });
    
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
    pageVisibilityPushToggleButton.addEventListener('click', togglePageVisibilityPush);
    pageVisibilityPushToggleButton.checked = pageVisibilityPushIsEnabled;
}

var tabAbandonNotificationTimeout;
const MIN_TIME_FOR_ABANDON_NOTIFICATION = 5000;
const setAbandonNotificationTimeout = () => {
    if (pageVisibilityPushIsEnabled && document.hidden) {
        tabAbandonNotificationTimeout = setTimeout(() =>{
            // * send push notification
            requestNotification('browser-tab-abandoned');
        }, MIN_TIME_FOR_ABANDON_NOTIFICATION);

    } else {
        clearTimeout(tabAbandonNotificationTimeout);

    }
}

const togglePageVisibilityPush = () => pageVisibilityPushIsEnabled = !pageVisibilityPushIsEnabled;

var workBox;
const registerServiceWorker = () => {
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
        credentials: 'include'
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

window.addEventListener('offline', function() {
    showSnackBar('You are offline 📴');
    configureLocalDatabase();
});

window.addEventListener('online', function() {
    showSnackBar('You are back online! 🎉');

});
