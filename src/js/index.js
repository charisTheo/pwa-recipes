if (!global._babelPolyfill) {
	require('babel-polyfill');
}

import '@polymer/paper-card/paper-card';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-toolbar/paper-toolbar';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-item/paper-item-body';
import '@polymer/paper-item/paper-icon-item';
import '@polymer/paper-toggle-button/paper-toggle-button';

const VAPID_PUBLIC_KEY = 'BCvnBFnsPt6MPzwX_LOgKqVFG5ToFJ5Yl0qDfwrT-_lqG0PqgwhFijMq_E-vgkkLli7RWHZCYxANy_l0oxz0Nzs';
const API_URL = 'https://ecommerce-pwa.herokuapp.com';
const NOTIFICATIONS_ACTIVE_URL = '/img/notifications-active.svg';
const NOTIFICATIONS_NONE_URL = '/img/notifications-none.svg';
const snackBar = document.getElementById('snackbar');
const notificationsRequestButton = document.getElementById('notifications-request-button');
const shoppingCartButton = document.getElementById('shopping-cart-button');
const numberOfCartItemsEl = document.getElementById('number-of-cart-items');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCloseButton = document.getElementById('cart-close-button');
const checkoutButton = document.getElementById('checkout-button');
const pageVisibilityPushToggleButton = document.getElementById('page-visibility-push-toggle-button');

var db, pageVisibilityPushIsEnabled = true;

window.addEventListener('load', async () => {
    // TODO register service worker
    await registerServiceWorker();

    // * handle URL queries from push notification action clicks 
    const searchQuery = document.location.search;
    if (!!searchQuery) {
        checkPushNotificationActions(searchQuery);
    } else {
        initialiseNumberOfCartItems()
    }

    document.addEventListener('visibilitychange', function() {
        console.info("visibilitychange: document.hidden", document.hidden);
        setAbandonNotificationTimeout();
    });
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => button.addEventListener('click', addToCart));
    shoppingCartButton.addEventListener('click', toggleShoppingCart);
    cartCloseButton.addEventListener('click', toggleShoppingCart);
    checkoutButton.addEventListener('click', checkout);
    pageVisibilityPushToggleButton.addEventListener('click', togglePageVisibilityPush);
    pageVisibilityPushToggleButton.checked = pageVisibilityPushIsEnabled;

    // * initialise notificationsRequestBtn notification icon src after checking the pushManager's permission
    const pushPermission = await getNotificationPermission();
    const notificationButtonIconSrc = pushPermission === "granted" ? NOTIFICATIONS_ACTIVE_URL : NOTIFICATIONS_NONE_URL;
    notificationsRequestButton.setAttribute('src', notificationButtonIconSrc);

    notificationsRequestButton.addEventListener('click', requestNotificationPermission);
});

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

const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js');
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

const clearShoppingCart = async () => {
    const response = await fetch(`${API_URL}/cart/all`, { method: 'DELETE' });
    const items = await response.json();
    
    if (response.status === 200) {
        removeAllItemsDescriptionsFromShoppingCart();
        showSnackBar(`All items have been removed from your shopping cart 🗑🛒`);

    } else {
        showSnackBar(`There was an error while clearing your cart 😕`);

    }
}

const configureLocalDatabase = () => {
    let DBOpenRequest = window.indexedDB.open("shoppingCart", 1);

    DBOpenRequest.onerror = function(event) {
        showSnackBar('Error loading database.');
    };

    DBOpenRequest.onsuccess = function(event) {
        // showSnackBar('Database initialised.');

        db = DBOpenRequest.result;
    };

    DBOpenRequest.onupgradeneeded = function(event) {
        let db = event.target.result;
        db.onerror = function(event) {
            console.warn("DBOpenRequest.onupgradeneeded: db.onerror -> event", event);
            showSnackBar('Error loading database.');          
        };
    
        let toAddObjectStore = db.createObjectStore("toAdd", { keyPath: "name" });
        toAddObjectStore.createIndex("name", "name", { unique: false });
        toAddObjectStore.createIndex("price", "price", { unique: false });
        toAddObjectStore.createIndex("image", "image", { unique: false });
        
        let toRemoveObjectStore = db.createObjectStore("toRemove", { keyPath: "name" });
        toRemoveObjectStore.createIndex("name", "name", { unique: false });
        toRemoveObjectStore.createIndex("price", "price", { unique: false });
        toRemoveObjectStore.createIndex("image", "image", { unique: false });
    };
}

const addToCart = async event => {
    const item = JSON.parse(event.target.getAttribute('data-item'));
    const { name, price, image } = item;

    // * add to IndexDB when offline 
    if (!navigator.connection.downlink && db) {
        const transaction = db.transaction(["toAdd"], "readwrite");
        const objectStore = transaction.objectStore('toAdd');
        const objectStoreRequest = objectStore.add(item);
        
        objectStoreRequest.onsuccess = function() {
            // * Update the number of cart items
            updateNumberOfCartItems();
            addItemDescriptionToShoppingCart(item);
            showSnackBar(`You are offline, but ${name} has been saved for later checkout! 🎊🛒`);
        }
        objectStoreRequest.onerror = function(error) {
            const itemExistsInCart = error.target.error.message === 'Key already exists in the object store.';
            // ! IndexDB does not take duplicates
            // TODO increment item in shopping cart else show the error in snack bar
            showSnackBar(`There was an error while adding ${name} to your cart 😕`);
        }

    } else {
        const response = await fetch(`${API_URL}/cart`, { 
            method: 'POST', 
            body: JSON.stringify({item}),
            headers: {'Content-Type': 'application/json'}
        });
        const totalCartItems = await response.json();
        
        if (response.status === 200) {
            addItemDescriptionToShoppingCart(item);        
            updateNumberOfCartItems(totalCartItems);
            showSnackBar(`${name} has been added to your cart! 🎊🛒`);
        } else {
            showSnackBar(`There was an error while adding ${name} to your cart 😕`);
        }

    }
}

window.deleteItemFromCart = async item => {
    const { name, image, price } = item;

    if (!navigator.connection.downlink && db) {
        const transaction = db.transaction(["toRemove"], "readwrite");
        const objectStore = transaction.objectStore('toRemove');
        const objectStoreRequest = objectStore.add(item);
        objectStoreRequest.onsuccess = () => {
            removeItemDescriptionFromShoppingCart(name);
            updateNumberOfCartItems();
            showSnackBar(`${name} has been removed from your cart! 🗑🛒`);
        }
    } else {
        const response = await fetch(`${API_URL}/cart/${name}`, { method: 'DELETE' });
        const totalCartItems = await response.json();
        
        if (response.status === 200) {
            removeItemDescriptionFromShoppingCart(name);
            updateNumberOfCartItems(totalCartItems);
            showSnackBar(`${name} has been removed from your cart! 🗑🛒`);
        } else {
            showSnackBar(`There was an error while removing ${name} from your cart 😕`);
        }
    }
}

const initialiseNumberOfCartItems = async () => {
    if (!navigator.connection.downlink && db) {
        // if only offline
        const transaction = db.transaction(["toAdd"], "readwrite");
        const objectStore = transaction.objectStore('toAdd');
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

    } else {
        const response = await fetch(`${API_URL}/cart`, { method: 'GET'})
        const cartItems = await response.json();
        updateNumberOfCartItems(cartItems.length);
        cartItems.map(cartItem => {
            addItemDescriptionToShoppingCart(cartItem);
        });

    }
}

const updateNumberOfCartItems = (numberOfCartItems) => {
    // if no number of items passed to the function
    // measure the number of elements of id starting with 'shopping-cart-item-'
    numberOfCartItems = numberOfCartItems !== undefined ? 
        numberOfCartItems : 
        document.querySelectorAll('[id^=shopping-cart-item-]').length;
    
    if (numberOfCartItems === 0) {
        numberOfCartItemsEl.style.visibility = 'hidden';
    } else {
        numberOfCartItemsEl.style.visibility = 'visible';
        numberOfCartItemsEl.innerText = numberOfCartItems;
    }
}

// * Possible values: 'prompt', 'denied', or 'granted'
const getNotificationPermission = async () => {
    const [ registration ] = await navigator.serviceWorker.getRegistrations();
    const permission = await registration.pushManager.permissionState({userVisibleOnly: true});
    return permission;
}

// ! ask for permission only when the user clicks
const requestNotificationPermission = () => {
    navigator.serviceWorker.getRegistrations().then(([ registration ]) => {
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
    navigator.serviceWorker.getRegistrations().then(async ([ registration ]) => {
        if (!registration) {
            showSnackBar("Push subscription has been deleted or expired.");
            registration = await navigator.serviceWorker.register('/service-worker.js');
            await subscribeToPushManager(registration);
        }
        const permission = await registration.pushManager.permissionState({userVisibleOnly: true});
        if (permission !== "granted") {
            // * ask for permission
            await subscribeToPushManager(registration);
        }

        try {
            const response = await fetch(`${API_URL}/user/push/${notificationType}`, { method: 'GET' });
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
    const html = ` <paper-icon-item id="shopping-cart-item-${item.name.split(' ').join('_')}">
        <div class="avatar" style="background-image: url(./img/products/${item.image})" slot="item-icon"></div>
        <paper-item-body two-line>
            <div>${item.name}</div>
            <div secondary>${item.price}</div>
        </paper-item-body>
        <paper-icon-button onclick='deleteItemFromCart(${JSON.stringify(item).toString()})' icon="delete" alt="remove item from shopping cart"></paper-icon-button>
    </paper-icon-item>`;

    document.getElementById('cart-items').innerHTML += html;
}

const removeItemDescriptionFromShoppingCart = itemName => {
    document.querySelector(`[id$=${itemName.split(' ').join('_')}]`).remove();
}

const removeAllItemsDescriptionsFromShoppingCart = () => {
    document.getElementById('cart-items').innerHTML = '';
    updateNumberOfCartItems(0);
}

const toggleShoppingCart = force => {
    if (typeof force === 'boolean') {
        if (force) {
            cartItemsContainer.classList.add('show');
        } else {
            cartItemsContainer.classList.remove('show');
        }
    } else {
        cartItemsContainer.classList.toggle('show');
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

window.addEventListener('offline', function() {
    showSnackBar('You are offline 📴');
    configureLocalDatabase();
});

window.addEventListener('online', function() {
    showSnackBar('You are back online! 🎉');

    // TODO use background sync to add or remove items from IndexDB to the API
});
