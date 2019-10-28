var mongoose = require('mongoose');

const { User } = require('../models/user');

const authenticate = async (req, res, next) => {
    const { _id } = req.cookies || res.signedCookies;
    console.log("TCL: authenticate -> req.cookies", req.cookies);
    console.log("authenticate -> res.signedCookies", res.signedCookies);
    const user = await User.findOne({ _id });

    if (!user) {
        // ? create a new one and send an http-only cookie
        console.log('authenticate: create a new one and send an http-only cookie');
        const newUserId = mongoose.Types.ObjectId();
        console.log("authenticate: newUserId", newUserId);

        const newUser = new User({_id: newUserId});
        await newUser.save();
        
        res.cookie('_id', newUserId.toHexString(), { expires: new Date(Date.now() + 900000), httpOnly: true, domain: 'charistheo.io' });
        req.user = newUser;
        // res.setHeader('Set-Cookie', [`_id=${newUserId.toHexString()}; HttpOnly`]);
        next();

    } else {
        req.user = user;
        next();

    }
}

module.exports = { authenticate };