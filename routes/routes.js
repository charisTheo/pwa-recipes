const userController = require('./../controllers/userController');
const cartController = require('./../controllers/cartController');
const { authenticate } = require('./../middleware/authenticate');

module.exports = (app) => {

  app.route('/')
    .get((req, res) => {res.redirect('https://www.charistheo.io/ecommerce-example-pwa/')});

  app.route('/cart')
    .get(authenticate, cartController.getCartItems)
    .post(authenticate, cartController.addItemToCart)
    .delete(authenticate, cartController.deleteItemFromCart);
  
  app.route('/cart/all')
    .delete(authenticate, cartController.clearCart);

  app.route('/checkout')
    .get(authenticate, cartController.checkout);

  app.route('/user')
    .delete(authenticate, userController.removeUserData);

  app.route('/user/push/:type')
    .get(authenticate, userController.sendPush);

  app.route('/user/push-subscription/')
    .get(authenticate, userController.getUserPushSubscription)
    .post(authenticate, userController.setUserSubscription);
};
