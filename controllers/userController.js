const { User } = require('./../models/user');

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
        
    res.status(200).send();
};