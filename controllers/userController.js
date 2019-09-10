const { User } = require('./../models/user');
const { 
    webPush, 
    simplePushOptions,
    imagePushOptions, 
    actionPushOptions,
    dataPushOptions 
} = require('./../util/webPush');

exports.getUser = async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({username});
  
    if (!user) {
        return res.status(404).send(`${username} was not found 🤷`);
    }
    
    res.status(200).send(user);
};

exports.setUser = async (req, res) => {
    const { username } = req.params;

    try {
        const user = new User({username});
        await user.save();

        res.status(200).send(`${username} has been successfully created and saved!`);

    } catch(error) {
        console.log("userController.setUser -> error", error);
        res.status(400).send();
    }

};

// * GET /user/:username/push/:type
exports.sendPush = async (req, res) => {
    const { username, type } = req.params;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).send(`${username} was not found 🤷`);
    }

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

// * GET /user/push-subscription/:username
exports.getUserPushSubscription = async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({username});
    
    if (!user) {
        return res.status(404).send(`${username} was not found 🤷`);
    }
    
    res.status(200).send(user.pushSubscription);
};

// * POST /user/push-subscription/:username
exports.setUserSubscription = async (req, res) => {
    const { username } = req.params;
    const subscription = req.body;

    try {

        await User.findOneAndUpdate(
            { username }, 
            { pushSubscription: subscription });
            
        res.status(200).send();

    } catch(error) {
        console.log("userController.setUserSubscription -> error", error);
        res.status(400).send();

    }
};