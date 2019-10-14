if (!global._babelPolyfill) {
	require('babel-polyfill');
}

import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toolbar/paper-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/paper-item/paper-icon-item.js';

const VAPID_PUBLIC_KEY = 'BCvnBFnsPt6MPzwX_LOgKqVFG5ToFJ5Yl0qDfwrT-_lqG0PqgwhFijMq_E-vgkkLli7RWHZCYxANy_l0oxz0Nzs';
const NOTIFICATIONS_ACTIVE_URL = 'img/notifications-active.svg';
const NOTIFICATIONS_NONE_URL = 'img/notifications-none.svg';
const snackBar = document.getElementById('snackbar');
const notificationsRequestButton = document.getElementById('notifications-request-button');
const shoppingCartButton = document.getElementById('shopping-cart-button');
const numberOfCartItemsEl = document.getElementById('number-of-cart-items');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCloseButton = document.getElementById('cart-close-button');

var db;

window.addEventListener('load', async () => {
    // TODO register service worker
    await registerServiceWorker();

    // TODO handle answers from the push notification action clicks 
    // checkPushNotificationActions();

    configureLocalDatabase();

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => button.addEventListener('click', addToCart));

    shoppingCartButton.addEventListener('click', toggleShoppingCart);
    
    cartCloseButton.addEventListener('click', toggleShoppingCart);

    // initialise notificationsRequestBtn notification icon src after checking the pushManager's permission
    const pushPermission = await getNotificationPermission();
    const notificationButtonIconSrc = pushPermission === "granted" ? NOTIFICATIONS_ACTIVE_URL : NOTIFICATIONS_NONE_URL;
    notificationsRequestButton.setAttribute('src', notificationButtonIconSrc);

    notificationsRequestButton.addEventListener('click', requestNotificationPermission);
});

const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js');
    }
}

const checkPushNotificationActions = () => {
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
}

const configureLocalDatabase = () => {
    let DBOpenRequest = window.indexedDB.open("shoppingCart", 1);

    DBOpenRequest.onerror = function(event) {
        showSnackBar('Error loading database.');
    };

    DBOpenRequest.onsuccess = function(event) {
        showSnackBar('Database initialised.');

        db = DBOpenRequest.result;
        initialiseNumberOfCartItems();
    };

    DBOpenRequest.onupgradeneeded = function(event) {
        let db = event.target.result;
        db.onerror = function(event) {
            console.warn("DBOpenRequest.onupgradeneeded: db.onerror -> event", event);
            showSnackBar('Error loading database.');          
        };
    
        let objectStore = db.createObjectStore("shoppingCart", { keyPath: "name" });
        objectStore.createIndex("name", "name", { unique: false });
        objectStore.createIndex("price", "price", { unique: false });
        objectStore.createIndex("image", "image", { unique: false });
    };
}

const addToCart = (e) => {
    const item = JSON.parse(e.target.getAttribute('data-item'));
    const { name, price, image } = item;

    const transaction = db.transaction(["shoppingCart"], "readwrite");
    // transaction.onerror = function(error) {
    //     showSnackBar(`There was an error with the database while adding ${name} to your cart 😕`);
    // };
    
    const objectStore = transaction.objectStore('shoppingCart');
    const objectStoreRequest = objectStore.add(item);
    objectStoreRequest.onsuccess = function() {
        const countRequest = objectStore.count();
        countRequest.onsuccess = () => {
            // * Update the number of cart items
            updateNumberOfCartItems(countRequest.result);
        }
        addItemDescriptionToShoppingCart(item);
        showSnackBar(`${name} has been added to your cart! 🎊🛒`);
    }
    objectStoreRequest.onerror = function(error) {
        const itemExistsInCart = error.target.error.message === 'Key already exists in the object store.';
        // TODO increment item in shopping cart else show the error in snack bar
        showSnackBar(`There was an error while adding ${name} to your cart 😕`);
    }
}

const initialiseNumberOfCartItems = async () => {
    const transaction = db.transaction(["shoppingCart"], "readwrite");
    const objectStore = transaction.objectStore('shoppingCart');
    const getAllItemsRequest = objectStore.getAll();
    const countRequest = objectStore.count();
    countRequest.onsuccess = () => {
        // * Update the number of cart items
        updateNumberOfCartItems(countRequest.result);
    };
    getAllItemsRequest.onsuccess = () => {
        const cartItems = getAllItemsRequest.result;
        cartItems.map(cartItem => {
            addItemDescriptionToShoppingCart(cartItem);
        });
    };
}

const updateNumberOfCartItems = (numberOfCartItems) => {
    if (numberOfCartItems === 0) {
        numberOfCartItemsEl.style.visibility = 'hidden';
    } else {
        numberOfCartItemsEl.style.visibility = 'visible';
        numberOfCartItemsEl.innerText = numberOfCartItems;
    }
}

// Possible values: 'prompt', 'denied', or 'granted'
const getNotificationPermission = async () => {
    const registration = await navigator.serviceWorker.getRegistration('/');
    const permission = await registration.pushManager.permissionState({userVisibleOnly: true});
    return permission;
}

// ! ask for permission only when the user clicks
const requestNotificationPermission = () => {
    navigator.serviceWorker.getRegistration('/').then(registration => {
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
        return Promise.reject();
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

const addItemDescriptionToShoppingCart = item => {
    const html = ` <paper-icon-item id="shopping-cart-item-${item.name}">
        <div class="avatar" style="background-image: url(./img/products/${item.image})" slot="item-icon"></div>
        <paper-item-body two-line>
            <div>${item.name}</div>
            <div secondary>${item.price}</div>
        </paper-item-body>
        <paper-icon-button icon="delete" alt="remove item from shopping cart"></paper-icon-button>
    </paper-icon-item>`;

    document.getElementById('cart-items').innerHTML += html;
}

const toggleShoppingCart = (event) => {
    cartItemsContainer.classList.toggle('show');
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