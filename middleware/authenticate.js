var mongoose = require('mongoose');

const { User } = require('../models/user');

const authenticate = async (req, res, next) => {
    const { _id } = req.cookies;
    const user = await User.findOne({ _id });

    if (!user) {
        // ? create a new one and send an http-only cookie
        const newUserId = mongoose.Types.ObjectId();
        const newUser = new User({_id: newUserId});
        await newUser.save();
        
        req.user = newUser;
        res.cookie('_id', newUserId.toHexString(), {httpOnly: true});
        next();

    } else {
        req.user = user;
        next();

    }
}

module.exports = { authenticate };