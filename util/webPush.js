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
    image: '/img/funny-cat.jpg',
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
            icon: "./img/cool.png"
        },
        {
            action: 'not-cool',
            title: 'Nope...',
            icon: "./img/not-cool.png"
        }
    ]
};

module.exports = {
    webPush,
    simplePushOptions,
    imagePushOptions,
    dataPushOptions,
    actionPushOptions
};