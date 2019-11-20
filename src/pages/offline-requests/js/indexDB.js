var db;

const addItemToObjectStore = (objectStoreName, item) => {
    const transaction = db.transaction([objectStoreName], "readwrite");
    const objectStore = transaction.objectStore(objectStoreName);
    const objectStoreRequest = objectStore.add(item);

    return new Promise((resolve, reject) => {
        objectStoreRequest.onsuccess = () => {
            resolve(item);
        }
        objectStoreRequest.onerror = error => {
            reject(error);
        }
    });
}

const removeItemFromObjectStore = (objectStoreName, item) => {
    const transaction = db.transaction([objectStoreName], "readwrite");
    const objectStore = transaction.objectStore(objectStoreName);
    const objectStoreRequest = objectStore.delete(item.name);

    return new Promise((resolve, reject) => {
        objectStoreRequest.onsuccess = () => {
            resolve(item);
        }
        objectStoreRequest.onerror = error => {
            reject(error);
        }
    });
}

const getAllItemsInObjectStore = objectStoreName => {
    const transaction = db.transaction([objectStoreName], "readwrite");
    const objectStore = transaction.objectStore(objectStoreName);
    const getAllItemsRequest = objectStore.getAll();

    return new Promise((resolve, reject) => {
        getAllItemsRequest.onsuccess = () => {
            const items = getAllItemsRequest.result;
            resolve(items);
        };
    });
}

const configureLocalDatabase = () => {
    let DBOpenRequest = window.indexedDB.open("shoppingCart", 1);

    DBOpenRequest.onerror = function(event) {
        showSnackBar('Error loading database.');
    };

    DBOpenRequest.onupgradeneeded = function(event) {
        let db = event.target.result;
        db.onerror = function(event) {
            console.warn("DBOpenRequest.onupgradeneeded: db.onerror -> event", event);
            showSnackBar('Error loading database.');          
        };
    
        let toAddObjectStore = db.createObjectStore("toAdd", { keyPath: "name" });
        toAddObjectStore.createIndex("name", "name", { unique: false });
        toAddObjectStore.createIndex("price", "price", { unique: false });
        toAddObjectStore.createIndex("image", "image", { unique: false });
        
        let toRemoveObjectStore = db.createObjectStore("toRemove", { keyPath: "name" });
        toRemoveObjectStore.createIndex("name", "name", { unique: false });
        toRemoveObjectStore.createIndex("price", "price", { unique: false });
        toRemoveObjectStore.createIndex("image", "image", { unique: false });
    };

    return new Promise((resolve, reject) => {
        DBOpenRequest.onsuccess = function(event) {
            db = DBOpenRequest.result;
            return resolve(db);
        };
    }) 
}

export {
    db,
    addItemToObjectStore,
    removeItemFromObjectStore,
    getAllItemsInObjectStore,
    configureLocalDatabase
}