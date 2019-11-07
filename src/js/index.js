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
import { 
    isIos,
    isInStandaloneMode,
    getCookie,
    setCookie,
    removeElements,
    findUrlInCache
} from "./util";

const headerInstallPwaContainer = document.querySelector('.header-install-pwa-container');
const pageCardLinks = document.querySelectorAll('.page-card-link');
const installPwaCard = document.querySelector('.install-pwa-card');
const installPwaButtons = document.querySelectorAll('.install-pwa-button');
const installPwaDismissButton = document.querySelector('.install-pwa-dismiss-button');
const pageShareButton = document.querySelector('.page-share-button');
const iosInstallBanner = document.querySelector('#ios-install-banner');
const iosInstallBannerDismissButton = document.querySelector('#ios-install-banner-dismiss-button');

let deferredPromptEvent, workBox;

window.addEventListener('load', async () => {
    registerServiceWorker();
    attachClickEventListeners();
});

window.addEventListener('offline', function() {
    showSnackBar('You are offline 📴');
    showOfflineAvailableIcons();
});

window.addEventListener('online', function() {
    showSnackBar('You are back online! 🎉');
    hideOfflineAvailableIcons();
});

const hideOfflineAvailableIcons = () => {
    const icons = document.querySelectorAll('.available-offline-icon');
    icons.forEach(icon => icon.hidden = true);
    const pageLinks = document.querySelectorAll('.unavailable-offline');
    pageLinks.forEach(pageLink => pageLink.classList.remove('unavailable-offline'));
}

const showOfflineAvailableIcons = () => {
    const pagesArr = Array.from(pageCardLinks);
    pagesArr.map(async page => {
        const url = page.getAttribute('href');
        console.log("showOfflineAvailablePages -> url", url);
        const cachedItems = await findUrlInCache(url);
        console.log("showOfflineAvailablePages -> cachedItems", cachedItems);
        if (cachedItems.length) {
            // * show available offline icon
            page.querySelector('.available-offline-icon').hidden = false;
        } else {
            // * else grey out page link and make it non-clickable
            page.classList.add('unavailable-offline');
        }
    });
};

const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        workBox = new Workbox('./service-worker.js', { scope: '/ecommerce-example-pwa/' });

        workBox.addEventListener('controlling', () => {
            window.location.reload();
        });

        workBox.addEventListener('waiting' , () => {
            const updateServiceWorker = event => {
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
        removeElements(iosInstallBanner);
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7); // * expire in 7 days
        setCookie('IOS_INSTALL_BANNER_DISMISSED', `true;expires=${expiryDate.toGMTString()}`);

    } else {
        removeElements([installPwaCard, headerInstallPwaContainer])

    }
}
