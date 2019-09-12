const { 
    webPush, 
    simplePushOptions,
    imagePushOptions, 
    actionPushOptions,
    dataPushOptions 
} = require('./../util/webPush');
const { User } = require('../models/user');

// * GET /user/push/:type
exports.sendPush = async (req, res) => {
    const { type } = req.params;
    const { user } = req;

    let options = {};

    switch (type) {
        case 'simple':
            options = simplePushOptions;
        break;
        case 'image':
            options = imagePushOptions;
        break;
        case 'data':
            options = dataPushOptions;
        break;
        case 'action':
            options = actionPushOptions;
            break;
    }
        
    try {
        await webPush.sendNotification(user.pushSubscription, JSON.stringify(options));
        res.status(200).end();

    } catch (error) {
        if (error.statusCode === 410 && error.name === 'WebPushError') {
            console.log("userController.sendPush -> WebPushError", error);
            res.status(404).send(error.body + 'Please subscribe again.');
            
        } else {
            console.log("userController.sendPush: -> error", error);
            res.status(400).send('There was an error while trying to send the notification');
            
        }
    }
};

// * GET /user/push-subscription/
exports.getUserPushSubscription = async (req, res) => {
    const { user } = req;
    
    if (!user) {
        return res.status(404).send(`No user was found 🤷`);
    }
    
    res.status(200).send(user.pushSubscription);
};

// * POST /user/push-subscription/
exports.setUserSubscription = async (req, res) => {
    const subscription = req.body;
    const { user } = req;

    try {
        user.pushSubscription = subscription;
        await user.save();
        res.status(200).send();

    } catch(error) {
        console.log("userController.setUserSubscription -> error", error);
        res.status(400).send();

    }
};

exports.removeUserData = async (req, res) => {
    const { user } = req;

    try {
        await User.findOneAndRemove({_id: user._id});

        res
        .cookie('_id', '', { maxAge: 0, path: '/' })
        .status(200)
        .send();

    } catch (error) {
        console.log("userController.removeUserData -> error", error);
        res.status(400).send();

    }
};