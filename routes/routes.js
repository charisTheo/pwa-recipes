const userController = require('./../controllers/userController');
const { authenticate } = require('./../middleware/authenticate');

module.exports = (app) => {

  app.route('/user/push/:type')
    .get(authenticate, userController.sendPush);

  app.route('/user/push-subscription/')
    .get(authenticate, userController.getUserPushSubscription)
    .post(authenticate, userController.setUserSubscription);
  
  app.route('/user/remove')
    .get(authenticate, userController.removeUserData)
};
