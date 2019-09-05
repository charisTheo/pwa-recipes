const userController = require('./../controllers/userController');

module.exports = (app) => {

  app.route('/user/:username')
    .get(userController.getUser)
    .post(userController.setUser);

  app.route('/user/push-subscription/:username')
    .get(userController.getUserPushSubscription)
    .post(userController.setUserSubscription);
  
};
