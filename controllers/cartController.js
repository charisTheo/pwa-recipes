const { 
    webPush, 
    simplePushOptions,
    imagePushOptions, 
    actionPushOptions,
    dataPushOptions,
    handleCartAbandoned
} = require('../util/webPush');

// * GET /user/push/:type
exports.sendPush = async (req, res) => {
    const { type } = req.params;
    const { user } = req;

    let options = {};

    switch (type) {
        case 'simple':
            options = simplePushOptions;
        break;
        case 'image':
            options = imagePushOptions;
        break;
        case 'data':
            options = dataPushOptions;
        break;
        case 'action':
            options = actionPushOptions;
            break;
    }
        
    try {
        await webPush.sendNotification(user.pushSubscription, JSON.stringify(options));
        res.status(200).end();

    } catch (error) {
        if (error.statusCode === 410 && error.name === 'WebPushError') {
            console.log("cartController.sendPush -> WebPushError", error);
            res.status(404).send(error.body + 'Please subscribe again.');
            
        } else {
            console.log("cartController.sendPush: -> error", error);
            res.status(400).send('There was an error while trying to send the notification');
            
        }
    }
};

// * GET /cart
exports.getCartItems = async (req, res) => {
    const { user } = req;

    try {
        console.log("TCL: exports.getCartItems -> user.cart_items", user.cart_items);
        res.status(200).send(JSON.stringify(user.cart_items || []));

    } catch (error) {
        console.log("cartController.getCartItems -> error", error);
        res.status(400).send();

    }
};

// * POST /cart { body: { items: [] }}
exports.addItemToCart = async (req, res) => {
    const { items } = req.body;
    const { user } = req;

    try {
        if (typeof user.cart_items !== 'object') {
            user.cart_items = items.splice(0, items.length);
        } else if (items) {
            user.cart_items = [...user.cart_items, ...items];
        } else {
            throw new Error(`No items where sent for adding to the cart`, items);
        }
        
        await user.save();
        setTimeout(() => {
            const _user = user;
            handleCartAbandoned(_user);
        }, 8000);

        res.status(200).send(user.cart_items.length.toString());

    } catch (error) {
        console.log("cartController.addItemToCart -> error", error);
        res.status(400).send();

    }
};

// * DELETE /cart { body: { items: [] }}
exports.deleteItemFromCart = async (req, res) => {
    const { items } = req.body;
    const { user } = req;

    try {
        // ! removes all occurances of the item's name
        const cart_items = user.cart_items.filter(item => !items.find(_item => _item.name === item.name));
        user.cart_items = [...cart_items];

        await user.save();
        res.status(200).send(user.cart_items.length.toString());

    } catch (error) {
        console.log("cartController.deleteItemFromCart -> error", error);
        res.status(400).send();

    }
};

// * DELETE /cart/all
exports.clearCart = async (req, res) => {
    const { user } = req;

    try {
        // * remove all items from the user's cart_items array
        const items = user.cart_items.splice(0, user.cart_items.length);
        await user.save();

        res.status(200).send(items);

    } catch (error) {
        console.log("clearCart.deleteItemFromCart -> error", error);
        res.status(400).send();

    }
};

// * GET /checkout
exports.checkout = async (req, res) => {
    const { user } = req;
    
    try {
        // ? handle user checkout headers

        // * remove all items from the user's cart_items array
        const items = user.cart_items.splice(0, user.cart_items.length);
        await user.save();

        res.status(200).send(items);

    } catch (error) {
        console.log("cartController.checkout -> error", error);
        res.status(400).send();

    }
}