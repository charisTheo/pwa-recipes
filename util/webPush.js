const webPush = require('web-push');

webPush.setVapidDetails(
    'mailto:dev@charistheo.io',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY,
);

const simplePushOptions = {
    title: "Simple Notification",
    body: "Boom! This is a notification about some important stuff!",
    tag: "simple-push"
};

const imagePushOptions = {
    title: `Image Notification`,
    body: `If on mobile expand 👌 this to view the image`,
    image: '/img/push-examples/funny-cat.jpg',
    tag: "image-push"
};

const dataPushOptions = {
    title: `Data Notification`,
    body: `This notification has a data object that was passed in from the server`,
    tag: "data-push",
    data: {
        link: `http://${process.env.SERVER_IP_ADDRESS}:${process.env.PORT}/navigate-link`,
    }
}

const actionPushOptions = {
    title: `So what do you think?`,
    body: `Are Web Push Notifications cool after all?`,
    tag: "cool-not-cool",
    actions: [
        {
            action: 'cool',
            title: 'Yeay!',
            icon: "./img/push-examples/cool.png"
        },
        {
            action: 'not-cool',
            title: 'Nope...',
            icon: "./img/push-examples/not-cool.png"
        }
    ]
};

const getCartAbandonPushOptions = items => {
    items = Array.isArray(items) ? items : [items];

    const options = {
        title: `You have ${items.length} goodie(s) in your cart 🛒`,
        body: `👉 Checkout now by tapping on this notification 👈`,
        image: `/img/products/${items[0].image}`,
        tag: "cart-abandoned",
        data: {
            items
        },
        actions: [
            {
                action: 'checkout',
                title: 'Checkout',
                icon: "./img/money-with-wings.png"
            },
            {
                action: 'clear',
                title: 'Clear cart',
                icon: "./img/bin.png"
            }
        ]
    }

    return options;
};

const handleCartAbandoned = user => {
    console.log('handleCartAbandoned: Checking if the user has not checked out yet.');
    if (user.cart_items && user.cart_items.length && user.pushSubscription) {
        console.log(`Sending push notification... \nUser cart items:\n`);
        console.table(user.cart_items);
        const options = getCartAbandonPushOptions(user.cart_items);
        webPush.sendNotification(
            user.pushSubscription, JSON.stringify(options)
        );

    } else {
        console.log(`Will not send notification. \nUser cart items:\n`);
        console.table(user.cart_items);
        console.log(`\nUser push subscription:\n`);
        console.table(user.pushSubscription);

    }
}

module.exports = {
    webPush,
    simplePushOptions,
    imagePushOptions,
    dataPushOptions,
    actionPushOptions,
    getCartAbandonPushOptions,
    handleCartAbandoned
};