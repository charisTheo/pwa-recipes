if (!global._babelPolyfill) {
	require('babel-polyfill');
}

import './../css/main.css';

import { Workbox } from 'workbox-window';

import '@polymer/paper-card/paper-card';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-toolbar/paper-toolbar';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-icons/iron-icons';

import { showSnackBar } from "./snackBar";
import { sharePage } from "./webShare";

const installPwaCard = document.getElementsByClassName('install-pwa-card')[0];
const installPwaButton = document.getElementsByClassName('install-pwa-button')[0];
const installPwaDismissButton = document.getElementsByClassName('install-pwa-dismiss-button')[0];
const pageShareButton = document.getElementsByClassName('page-share-button')[0];

let deferredPromptEvent, workBox;

window.addEventListener('load', () => {
    registerServiceWorker();
    attachClickEventListeners();
});

const attachClickEventListeners = () => {
    installPwaButton.addEventListener('click', installPwa);
    installPwaDismissButton.addEventListener('click', dismissInstallPwaCard);
    pageShareButton.addEventListener('click', sharePage);
}

const installPwa = async () => {
    // hide install prompt
    dismissInstallPwaCard();
    deferredPromptEvent.prompt();

    deferredPromptEvent.userChoice.then(function(choiceResult) {
        console.log(choiceResult.outcome) // 'dismissed' or 'accepted'
        deferredPromptEvent = null;
    });
}

const dismissInstallPwaCard = () => {
    installPwaCard.classList.add('hidden');
    setTimeout(() => installPwaCard.remove(), 500);
}

const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        workBox = new Workbox('./service-worker.js', { scope: '/ecommerce-example-pwa/' });

        workBox.addEventListener('waiting' , () => {
            const updateServiceWorker = event => {
                event.preventDefault();
                workBox.addEventListener('controlling', () => {
                    window.location.reload();
                });
                workBox.messageSW({ type: 'NEW_VERSION'});
            };
        
            window.updateServiceWorker = updateServiceWorker;
        
            setTimeout(() => 
                showSnackBar('A new version is available <span style="font-size:17px;margin-left:5px">👉</span><a href="#" onclick="window.updateServiceWorker();" class="snackbar-refresh-button">&#x21BB;</a>')
                , 1500
            );
        });

        workBox.register();
    }
}

// Detects if device is an iOS (including iOS 13) 
const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

// Detects if device is in standalone mode
const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

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
