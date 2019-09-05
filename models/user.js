const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    pushSubscription: {
        type: Object
    },
});

// ? method override for JSON output
UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return {
        username: userObject.username,
        pushSubscription: userObject.pushSubscription
    };
};

// TODO
// UserSchema.statics.findByPushSubscription = function(subscription) {
//     var User = this;

//     return User.findOne({subscription}).then((user) => {
//         if (!user) {
//             return Promise.reject();
//         }
        
//         return Promise.resolve(user);
//     });
// }

const User = mongoose.model('User', UserSchema);

module.exports = {  User };
