const webPush = require('web-push');

webPush.setVapidDetails(
    'mailto:dev@charistheo.io',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY,
);

module.exports = {webPush};