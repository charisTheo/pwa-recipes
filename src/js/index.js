if (!global._babelPolyfill) {
	require('babel-polyfill');
}

import './../css/main.css';

import '@polymer/paper-card/paper-card';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-toolbar/paper-toolbar';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-icons/iron-icons';

const snackBar = document.getElementById('snackbar');
const installPwaCard = document.getElementsByClassName('install-pwa-card')[0];
const installPwaButton = document.getElementsByClassName('install-pwa-button')[0];
const installPwaDismissButton = document.getElementsByClassName('install-pwa-dismiss-button')[0];

let deferredPromptEvent;

window.addEventListener('load', async () => {
    await registerServiceWorker();

    attachClickEventListeners();
});

const attachClickEventListeners = () => {
    installPwaButton.addEventListener('click', installPwa);
    installPwaDismissButton.addEventListener('click', dismissInstallPwaCard);
}

const installPwa = async () => {
    // hide install prompt
    dismissInstallPwaCard();
    deferredPromptEvent.prompt();

    deferredPromptEvent.userChoice.then(function(choiceResult) {
        // console.log(choiceResult.outcome) // 'dismissed' or 'accepted'
        deferredPromptEvent = null;
    });
}

const dismissInstallPwaCard = () => {
    installPwaCard.classList.add('hidden');
    setTimeout(() => installPwaCard.remove(), 500);
}

const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        const isNewVersionAvailable = await navigator.serviceWorker
            .register('/service-worker.js', { scope: '/ecommerce-example-pwa/' })
            .then(checkForNewVersion);

        if (isNewVersionAvailable) {
            // TODO
        }
    }
}

const checkForNewVersion = registration => {
	return new Promise((resolve, reject) => {
        registration.onupdatefound = () => {
			const installingWorker = registration.installing;
			installingWorker.onstatechange = () => {
				switch (installingWorker.state) {
					case 'installed':
						if (navigator.serviceWorker.controller) {
							// new update available
							resolve(true);
						} else {
							// no update available
							resolve(false);
						}
						break;
				}
			};
		};
    });
}

// Detects if device is an iOS (including iOS 13) 
const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

// Detects if device is in standalone mode
const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

// TODO move snackbar function to another module
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

window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault(); 
    deferredPromptEvent = e;

    // * Check if should display install popup notification:
    if (!isIos && !isInStandaloneMode) {
        // * show install prompt
        installPwaCard.hidden = false;
    }
});

window.addEventListener('offline', function() {
    showSnackBar('You are offline 📴');
});

window.addEventListener('online', function() {
    showSnackBar('You are back online! 🎉');
});
