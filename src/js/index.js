if (!global._babelPolyfill) {
	require('babel-polyfill');
}

import './../css/main.css';

import '@polymer/paper-card/paper-card';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-toolbar/paper-toolbar';
// import '@polymer/paper-icon-button/paper-icon-button';
// import '@polymer/iron-icons/iron-icons';
// import '@polymer/paper-item/paper-item';
// import '@polymer/paper-item/paper-item-body';
// import '@polymer/paper-item/paper-icon-item';

const snackBar = document.getElementById('snackbar');

window.addEventListener('load', async () => {
    // TODO register service worker
    await registerServiceWorker();
});

const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js');
    }
}

var hideSnackBarTimeout;
const showSnackBar = message => {
    if (hideSnackBarTimeout) {
        clearTimeout(hideSnackBarTimeout);
    } 
    if (snackBar.innerText !== '') {
        snackBar.innerText += '\n' + message;
    } else {
        snackBar.innerText = message;
    }

    snackBar.classList.add('show');
    hideSnackBarTimeout = setTimeout(() => {
        snackBar.classList.remove('show');
        snackBar.innerText = '';
    }, 5000);
}

window.addEventListener('offline', function() {
    showSnackBar('You are offline 📴');
});

window.addEventListener('online', function() {
    showSnackBar('You are back online! 🎉');
});
