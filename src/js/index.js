if (!global._babelPolyfill) {
	require('babel-polyfill');
}

import './../css/main.css';
import './../global/styles.css';
import './../global/iosInstallBanner.css';

import { showTopDialog } from "./../global/topDialog";
import { sharePage } from "./webShare";
import { 
    isIos,
    isInStandaloneMode,
    getCookie,
    setCookie,
    removeElements,
    findUrlInCache
} from "../global/util";

const SERVICE_WORKER_SCOPE = '/';
let installPwaCard = document.querySelector('.install-pwa-card');
let installPwaButtons = document.querySelectorAll('.install-pwa-button');
let installPwaDismissButton = document.querySelector('.install-pwa-dismiss-button');
const pageShareButton = document.querySelector('.page-share-button');
const iosInstallBanner = document.querySelector('#ios-install-banner');
const iosInstallBannerDismissButton = document.querySelector('#ios-install-banner-dismiss-button');
const tabbedNavigation = document.querySelector('paper-tabs');
var previouslyFocusedElement;

window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
        import(/* webpackChunkName: "sw-util" */ './../global/sw-util.js')
            .then(util => util.registerServiceWorker('/service-worker.js', SERVICE_WORKER_SCOPE));
        // ? OR
        // const util = await import(/* webpackChunkName: "sw-util" */ './../global/sw-util.js');
        // await util.registerServiceWorker();
    }
    
    await import('@polymer/paper-tabs/paper-tabs');
    await import('@polymer/paper-tabs/paper-tab');
    import('@polymer/iron-icons/iron-icons');
    import('@polymer/iron-icon/iron-icon');
    import('@polymer/paper-icon-button/paper-icon-button');

    applyMediaQueriesOnDeviceWidth();
    attachEventListeners();

    // * render default tab html
    import(/* webpackChunkName: "tabs" */ './tabs').then(tabs => tabs.renderHtmlForSelectedTab(tabbedNavigation.selectedItem.dataset.navigateTo));
    // ? Accessibility focus on navigation
    setTimeout(() => tabbedNavigation.selectedItem.focus(), 100);

    if (!navigator.onLine) {
        handleOfflineEvent();
    }
});

// * shows an offline prompt and marks the offline available content
const handleOfflineEvent = () => {
    showTopDialog('You are offline 📴', { classList: ['offline-top-dialog'] });
    markOfflineAvailableContent();
};
// * shows an online prompt and unmarks offline avaialble content
const handleOnlineEvent = () => {
    showTopDialog('You are back online! 🎉', { timeout: 2000 });
    removeOfflineTopDialogs();
    unmarkOfflineAvailableContent();
};

const removeOfflineTopDialogs = () => {
    const offlineTopDialogs = Array.from(document.querySelectorAll('.offline-top-dialog'));
    offlineTopDialogs.map(dialog => dialog.remove());
}

const unmarkOfflineAvailableContent = () => {
    const icons = document.querySelectorAll('.available-offline-icon');
    icons.forEach(icon => icon.hidden = true);
    const pageLinks = document.querySelectorAll('.unavailable-offline');
    pageLinks.forEach(pageLink => pageLink.classList.remove('unavailable-offline'));
}

export const markOfflineAvailableContent = () => {
    // ! if only in the apps tab
    // TODO make this work cross tab 
    const pageCardLinks = document.querySelectorAll('.page-card-link');
    if (!pageCardLinks.length && tabbedNavigation.selectedItem.dataset.navigateTo === 'apps') {
        // ! is in apps tab but the content has not been loaded yet
        // * schedule for 200ms later
        setTimeout(markOfflineAvailableContent, 200);
        return;
    }

    const pagesArr = Array.from(pageCardLinks);
    pagesArr.map(async page => {
        const url = page.getAttribute('href');
        const pageIsCached = await findUrlInCache(url);

        if (pageIsCached) {
            // * show available offline icon
            page.querySelector('.available-offline-icon').hidden = false;
        } else {
            // * else grey out page link and make it non-clickable
            page.classList.add('unavailable-offline');
        }
    });
};

export const installPwa = async () => {
    // hide install prompt
    dismissInstallPwaButtons();
    deferredPromptEvent.prompt();

    deferredPromptEvent.userChoice.then(function(choiceResult) {
        console.log(choiceResult.outcome) // 'dismissed' or 'accepted'
        deferredPromptEvent = null;
    });
}

export const dismissInstallPwaButtons = () => {
    if (isIos) {
        removeElements(iosInstallBanner);
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7); // * expire in 7 days
        setCookie('IOS_INSTALL_BANNER_DISMISSED', 'true;expires=' + expiryDate.toGMTString());

    } else {
        // TODO
        installPwaCard = document.querySelector('.install-pwa-card');
        removeElements(installPwaCard);

    }

    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }
}

const applyMediaQueriesOnDeviceWidth = () => {
    if (window.innerWidth > 767) {
        import('./../css/tablets-and-above.css');
        tabbedNavigation.alignBottom = false;
    }
    if (window.innerWidth > 959) {
        import('./../css/desktops.css');
    }
}

const attachEventListeners = () => {
    // ? clicks
    try {
        // ? apps tab specific event listeners
        installPwaButtons.forEach(button => button.addEventListener('click', installPwa));
        installPwaDismissButton.addEventListener('click', dismissInstallPwaButtons);
        iosInstallBannerDismissButton.addEventListener('click', dismissInstallPwaButtons);
    } catch (error) {

    }
    import('@polymer/paper-fab/paper-fab').then(() => pageShareButton.addEventListener('click', sharePage));

    // ? Window
    window.addEventListener('resize', applyMediaQueriesOnDeviceWidth);
    window.addEventListener('offline', handleOfflineEvent);
    window.addEventListener('online', handleOnlineEvent);
    window.onpopstate =  event => {
        // TODO has navigated back
    };

    // ? Navigation
    tabbedNavigation.addEventListener('iron-select', event => {
        import(/* webpackChunkName: "tabs" */ './tabs').then(tabs => tabs.navigationTabSelected(event));
    });
}

let deferredPromptEvent;
window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault(); 
    deferredPromptEvent = e;

    // * Check if should display install popups
    if (!isInStandaloneMode) {
        // * app is not launched as a PWA
        // * show install prompt
        if (!isIos) {
            // TODO
            setTimeout(() => {
                if (!installPwaCard) {
                    installPwaCard = document.querySelector('.install-pwa-card');
                }
                installPwaCard.hidden = false
            }, 1000);
        } else {
            if (getCookie('IOS_INSTALL_BANNER_DISMISSED') !== 'true') {
                previouslyFocusedElement = document.activeElement;
                iosInstallBanner.hidden = false;
                iosInstallBanner.focus();
            }
        }
    }
});
