var mongoose = require('mongoose');

const { User } = require('../models/user');

const authenticate = async (req, res, next) => {
    const { _id } = req.cookies;
    console.log("TCL: authenticate -> req.cookies._id", _id);
    const user = await User.findOne({ _id });

    if (!user) {
        // ? create a new one and send an http-only cookie
        console.log('authenticate: create a new one and send an http-only cookie');
        const newUserId = mongoose.Types.ObjectId();
        console.log("authenticate: newUserId", newUserId);

        const newUser = new User({_id: newUserId});
        await newUser.save();
        
        res.cookie('_id', newUserId.toHexString(), {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            secure: true,
            httpOnly: true,
            path: '/',
            sameSite: 'None'
        });
        req.user = newUser;
        
        next();

    } else {
        req.user = user;
        next();

    }
}

module.exports = { authenticate };