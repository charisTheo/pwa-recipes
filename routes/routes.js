const userController = require('./../controllers/userController');

module.exports = (app) => {

    app.route('/user/push-subscription')
      .get(userController.getUserPushSubscription)
      .post(userController.setUserSubscription);
    
};
