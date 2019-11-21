import { showSnackBar } from './../../../global/snackBar';
import { 
    db, 
    configureLocalDatabase,
    addItemToObjectStore,
    removeItemFromObjectStore,
    getAllItemsInObjectStore
} from "./indexDB";

const API_URL = 'https://ecommerce-pwa.herokuapp.com';
const numberOfCartItemsEl = document.getElementById('number-of-cart-items');
const cartItemsContainer = document.getElementById('cart-items-container');

const addToCart = async (event, forceDb) => {
    const item = JSON.parse(event.target.getAttribute('data-item'));
    const { name, price, image } = item;

    // * add to IndexDB when offline or forced 
    if (!navigator.onLine || forceDb) {
        if (!db) {
            await configureLocalDatabase();
        }

        addItemToObjectStore('toAdd', item).then(() => {
            if (!navigator.onLine) {
                showSnackBar(`You are offline, but ${name} has been saved for later checkout! 🎊🛒`);
            } else if (forceDb) {
                showSnackBar(`There was an error while syncing with the database. ${name} has been saved for later checkout! 🎊🛒`);
            }
            // * Update the number of cart items
            addItemDescriptionToShoppingCart(item);
            updateNumberOfCartItems();
        }).catch(error => {
            if (error.target && error.target.error.message === 'Key already exists in the object store.') {
                // ! IndexDB does not take duplicates
                // TODO increment item quantity in shopping cart
                showSnackBar(`${name} is already in your cart!`);
            }
        });

    } else {
        try {
            const response = await fetch(`${API_URL}/cart`, { 
                method: 'POST', 
                body: JSON.stringify({items: [item]}),
                headers: {'Content-Type': 'application/json'}
            });
            const totalCartItems = await response.json();
            console.log("TCL: addToCart -> totalCartItems", totalCartItems)
            
            if (response.status === 200) {
                addItemDescriptionToShoppingCart(item);        
                updateNumberOfCartItems(totalCartItems);
                showSnackBar(`${name} has been added to your cart! 🎊🛒`);
            } else {
                throw new Error(`Request [POST] to [/cart] returned status [${response.status}]`);
            }
        } catch (error) {
            console.warn("addToCart -> error", error);
            // showSnackBar(`There was an error while adding ${name} to your cart 😕`);
            addToCart(event, true); // ! forceDb - force adding it to the offline database
        }
    }
}

const deleteItemFromCart = async (item, forceDb) => {
    const { name, image, price } = item;

    if (!navigator.onLine || forceDb) {
        if (!db) {
            await configureLocalDatabase();
        }
        addItemToObjectStore('toRemove', item).catch(error => {
            console.log("TCL: window.deleteItemFromCart -> error", error)
        });

        removeItemDescriptionFromShoppingCart(item.name);
        updateNumberOfCartItems();
        showSnackBar(`${item.name} has been removed from your cart! 🗑🛒`);
        // also remove item from the toAdd collection in IndexDB
        removeItemFromObjectStore('toAdd', item);
        
    } else {
        try {

            const response = await fetch(
                `${API_URL}/cart`,
                { 
                    method: 'DELETE',
                    body: JSON.stringify({items: [item]}),
                    headers: {'Content-Type': 'application/json'}
                }
            );
            const totalCartItems = await response.json();
            
            if (response.status !== 200) {
                throw new Error(`Request [DELETE] to [/cart] returned status [${response.status}]`);
            }

            removeItemDescriptionFromShoppingCart(name);
            updateNumberOfCartItems(totalCartItems);
            showSnackBar(`${name} has been removed from your cart! 🗑🛒`);
            

        } catch (error) {
            console.warn("deleteItemFromCart -> error", error);
            // showSnackBar(`There was an error while removing ${name} from your cart 😕`);
            deleteItemFromCart(item, true);

        }
    }
}
window.deleteItemFromCart = deleteItemFromCart;

const addItemDescriptionToShoppingCart = item => {
    const html = ` <paper-icon-item id="shopping-cart-item-${item.name.split(' ').join('_')}">
        <div class="avatar" style="background-image: url(./img/products/${item.image})" slot="item-icon"></div>
        <paper-item-body two-line>
            <div>${item.name}</div>
            <div secondary>${item.price}</div>
        </paper-item-body>
        <paper-icon-button onclick='deleteItemFromCart(${JSON.stringify(item).toString()})' icon="delete" alt="remove item from shopping cart"></paper-icon-button>
    </paper-icon-item>`;

    document.getElementById('cart-items').innerHTML += html;
}

const removeItemDescriptionFromShoppingCart = itemName => {
    document.querySelector(`[id$=${itemName.split(' ').join('_')}]`).remove();
}

const removeAllItemsDescriptionsFromShoppingCart = () => {
    document.getElementById('cart-items').innerHTML = '';
    updateNumberOfCartItems(0);
}

const clearShoppingCart = async () => {
    const response = await fetch(`${API_URL}/cart/all`, { method: 'DELETE' });
    const items = await response.json();
    
    if (response.status === 200) {
        removeAllItemsDescriptionsFromShoppingCart();
        showSnackBar(`All items have been removed from your shopping cart 🗑🛒`);

    } else {
        showSnackBar(`There was an error while clearing your cart 😕`);

    }
}

const initialiseNumberOfCartItems = async forceDb => {
    if (!navigator.onLine || forceDb) {
        if (!db) {
            await configureLocalDatabase();
        }
        const cartItems = await getAllItemsInObjectStore('toAdd');
        updateNumberOfCartItems(cartItems.length);
        cartItems.map(cartItem => {
            addItemDescriptionToShoppingCart(cartItem);
        });

    } else {
        try {
            const response = await fetch(
                `${API_URL}/cart`, 
                { 
                    method: 'GET'
                }
            );
            const cartItems = await response.json();
            updateNumberOfCartItems(cartItems.length);
            cartItems.map(cartItem => {
                addItemDescriptionToShoppingCart(cartItem);
            });

        } catch (error) {
            console.log("TCL: error", error)
            console.warn(`initialiseNumberOfCartItems -> Reuqest [GET] to /cart failed - error [${error}] - Initialising IndexDB...`);
            initialiseNumberOfCartItems(true); // ! forceDb

        }
    }
}

const updateNumberOfCartItems = numberOfCartItems => {
    // if no number of items passed to the function
    // measure the number of elements of id starting with 'shopping-cart-item-'
    numberOfCartItems = numberOfCartItems !== undefined ? 
        numberOfCartItems : 
        document.querySelectorAll('[id^=shopping-cart-item-]').length;
    
    if (numberOfCartItems === 0) {
        numberOfCartItemsEl.style.visibility = 'hidden';
    } else {
        numberOfCartItemsEl.style.visibility = 'visible';
        numberOfCartItemsEl.innerText = numberOfCartItems;
    }
}

const toggleShoppingCart = force => {
    if (typeof force === 'boolean') {
        if (force) {
            cartItemsContainer.classList.add('show');
        } else {
            cartItemsContainer.classList.remove('show');
        }
    } else {
        cartItemsContainer.classList.toggle('show');
    }
}

export {
    addToCart,
    deleteItemFromCart,
    addItemDescriptionToShoppingCart,
    removeItemDescriptionFromShoppingCart,
    removeAllItemsDescriptionsFromShoppingCart,
    clearShoppingCart,
    initialiseNumberOfCartItems,
    updateNumberOfCartItems,
    toggleShoppingCart
}