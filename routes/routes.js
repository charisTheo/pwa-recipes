const userController = require('./../controllers/userController');
const cartController = require('./../controllers/cartController');
const { authenticate } = require('./../middleware/authenticate');

module.exports = (app) => {

  // TODO: in home directory '/' show the projects/websites available: 
  // ? push examples, cart abandon and offline requests

  app.route('/cart')
    .get(authenticate, cartController.getCartItems)
    .post(authenticate, cartController.addItemToCart);
  
  app.route('/cart/all')
    .delete(authenticate, cartController.clearCart);

  app.route('/checkout')
    .get(authenticate, cartController.checkout);

  app.route('/cart/:itemName')
    .delete(authenticate, cartController.deleteItemFromCart);

  app.route('/user')
    .delete(authenticate, userController.removeUserData);

  app.route('/user/push/:type')
    .get(authenticate, userController.sendPush);

  app.route('/user/push-subscription/')
    .get(authenticate, userController.getUserPushSubscription)
    .post(authenticate, userController.setUserSubscription);
};
