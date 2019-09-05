const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    pushSubscription: {
        type: Object,
        required: true,
        unique: true
    }
});

// TODO
UserSchema.statics.findByPushSubscription = function(subscription) {
    var User = this;

    return User.findOne({subscription}).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        
        return Promise.resolve(user);
    });
}

const User = mongoose.model('User', UserSchema);

module.exports = {  User };
