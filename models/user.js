const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    pushSubscription: {
        type: Object
    },
});

// ? method override for JSON output
UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return {
        pushSubscription: userObject.pushSubscription
    };
};

const User = mongoose.model('User', UserSchema);

module.exports = {  User };
