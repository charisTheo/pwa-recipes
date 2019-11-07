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

const headerInstallPwaContainer = document.querySelector('.header-install-pwa-container');
const installPwaCard = document.querySelector('.install-pwa-card');
const installPwaButtons = document.querySelectorAll('.install-pwa-button');
const installPwaDismissButton = document.querySelector('.install-pwa-dismiss-button');
const pageShareButton = document.querySelector('.page-share-button');
const iosInstallBanner = document.querySelector('#ios-install-banner');
const iosInstallBannerDismissButton = document.querySelector('#ios-install-banner-dismiss-button');

let deferredPromptEvent, workBox;

window.addEventListener('load', () => {
    registerServiceWorker();
    attachClickEventListeners();
});

const attachClickEventListeners = () => {
    installPwaButtons.forEach(button => button.addEventListener('click', installPwa))
    installPwaDismissButton.addEventListener('click', dismissInstallPwaButtons);
    iosInstallBannerDismissButton.addEventListener('click', dismissInstallPwaButtons)
    pageShareButton.addEventListener('click', sharePage);
}

const installPwa = async () => {
    // hide install prompt
    dismissInstallPwaButtons();
    deferredPromptEvent.prompt();

    deferredPromptEvent.userChoice.then(function(choiceResult) {
        console.log(choiceResult.outcome) // 'dismissed' or 'accepted'
        deferredPromptEvent = null;
    });
}

const dismissInstallPwaButtons = () => {
    if (isIos) {
        iosInstallBanner.classList.add('hidden');
        setTimeout(() => {
            iosInstallBanner.remove();
            const expiryDate = new Date();
            // * expire in 7 days
            expiryDate.setDate(expiryDate.getDate() + 7);
            setCookie('IOS_INSTALL_BANNER_DISMISSED', `true;expires=${expiryDate.toGMTString()}`);
        }, 500);

    } else {
        installPwaCard.classList.add('hidden');
        headerInstallPwaContainer.classList.add('hidden');
        setTimeout(() => {
            installPwaCard.remove();
        }, 500);

    }
}

const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        workBox = new Workbox('./service-worker.js', { scope: '/ecommerce-example-pwa/' });

        workBox.addEventListener('waiting' , () => {
            const updateServiceWorker = event => {
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

    // * Check if should display install popups
    if (!isInStandaloneMode) {
        // * app is not launched as a PWA
        // * show install prompt
        if (!isIos) {
            installPwaCard.hidden = false;
            headerInstallPwaContainer.hidden = false;
        } else {
            if (getCookie('IOS_INSTALL_BANNER_DISMISSED') !== 'true') {
                iosInstallBanner.hidden = false;
            }
        }
    }
});

const getCookie = cookieName => {
    const cookies = document.cookie.split(/=|;/);
    const cookieValueIndex = cookies.indexOf(cookieName) + 1;
    return cookies[cookieValueIndex] || '';
};
const setCookie = (cookieName, cookieValue) => document.cookie = `${cookieName}=${cookieValue.toString()}`;

window.addEventListener('offline', function() {
    showSnackBar('You are offline 📴');
});

window.addEventListener('online', function() {
    showSnackBar('You are back online! 🎉');
});
