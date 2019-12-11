import { 
    isIos,
    isInStandaloneMode,
    findUrlInCache,
    removeCachedPage,
    removeElements,
    requestToElementId,
    removeSearchParamsFromUrl
} from "../global/util";
import { 
    installPwa,
    dismissInstallPwaButtons,
    markOfflineAvailableContent
} from "./index";
import { showSnackBar } from "../global/snackBar";

const appsHtml = import(`!!raw-loader!./../partials/apps.html`);
const offlineContentHtml = import(`!!raw-loader!./../partials/offline-content.html`);
const infoHtml = import(`!!raw-loader!./../partials/info.html`);

const pageMainElement = document.querySelector('main');
const iosInstallBannerDismissButton = document.querySelector('#ios-install-banner-dismiss-button');

export const navigationTabSelected = async event => {
    const navigateTo = event.detail.item.getAttribute('data-navigate-to');
    
    // animate page leave
    // console.log("animation started:", window.performance.now());
    await animatePageEnter(0);
    
    renderHtmlForTabSelected(navigateTo);

    // animate page enter
    await animatePageLeave(90);
    // console.log("animation ended:", window.performance.now());
}

export const animatePageEnter = degrees => {
    return new Promise((resolve, reject) => {        
        const animate = d => {
            if (d <= 90) {
                pageMainElement.style.transform = `rotateX(${d}deg)`;
                d += 5;
                requestAnimationFrame(animate.bind(this, d));
            } else {
                pageMainElement.style.transform = `rotateX(90deg)`;
                resolve(true);
            }
        }

        animate(degrees);
    });
}

export const animatePageLeave = degrees => {
    return new Promise((resolve, reject) => {        
        const animate = d => {
            if (d >= 0) {
                pageMainElement.style.transform = `rotateX(${d}deg)`;
                d -= 5;
                requestAnimationFrame(animate.bind(this, d));
            } else {
                pageMainElement.style.transform = `rotateX(0deg)`;
                resolve(true);
            }
        }

        animate(degrees);
    });
}

/**
 * Renders the html partial file, from the name supplied (navigateTo), into the <main> element
 * @param {String} navigateTo - the name of the html file to load
 */
export const renderHtmlForTabSelected = async navigateTo => {
    var html;

    switch(navigateTo) {
        case 'apps':
            html = await appsHtml;
            break;
        case 'offline-content':
            html = await offlineContentHtml;
            break;
        case 'info':
            html = await infoHtml;
            break;
    }
    pageMainElement.innerHTML = html.default;

    if (navigateTo === 'apps') {
        // TODO
        if (!isInStandaloneMode) {
            // * navigated to apps tab AND is not launched as a PWA
            if (isIos) {
                iosInstallBannerDismissButton.addEventListener('click', dismissInstallPwaButtons);
                const iosInstallBanner = document.querySelector('#ios-install-banner');
                if (iosInstallBanner) {
                    iosInstallBanner.focus();
                }
            } else {
                document.querySelector('.install-pwa-card').hidden = false;
            }
        }

        // TODO
        // ? apps tab specific event listeners
        document.querySelectorAll('.install-pwa-button').forEach(
            button => button.addEventListener('click', installPwa)
        );
        document.querySelector('.install-pwa-dismiss-button').addEventListener(
            'click', dismissInstallPwaButtons
        );

        if (!navigator.onLine) {
            markOfflineAvailableContent();
        }

    } else if (navigateTo === 'offline-content') {
        // ! make function available in the window object so that can be called inline from the injected HTML
        window.removePageFromOfflineContent = removePageFromOfflineContent;
        const offlineContentTitle = document.querySelector('.offline-content-title');
        const offlineContentContainer = document.querySelector('.offline-content');
        const pagesUrlArr = ['/cart-abandon-notification/', '/offline-requests/', '/push-examples/'];
        const promises = pagesUrlArr.map(async url => {
            // console.log("renderHtmlForTabSelected -> url", url);
            const cachedRequest = await findUrlInCache(url);
            // console.log("TCL: cachedRequest", cachedRequest)
            
            if (cachedRequest) {
                const cachedRequestId = requestToElementId(cachedRequest);
                const cachedRequestUrl = removeSearchParamsFromUrl(cachedRequest.url);

                // * show available offline icon
                const html = `<paper-icon-item id="${cachedRequestId}" class="offline-available-page">
                        <paper-icon-button class="offline-available-pages-icon" tabIndex="-1" icon="offline-pin"></paper-icon-button>
                        <div class="avatar" style="background-image: url(${url}favicon/android-chrome-192x192.png)" slot="item-icon"></div>
                        <a href="${url}" aria-label="Visit this cached page" style="max-width: 72%;">
                            <paper-item-body two-line>
                                <div>${url}</div>
                                <div secondary>${cachedRequestUrl}</div>
                            </paper-item-body>
                        </a>
                        <paper-icon-button class="cache-delete-button" onclick='window.removePageFromOfflineContent("${url}", "${cachedRequestId}")' icon="delete" alt="Remove page from the cache" aria-label="Remove this page from the cache"></paper-icon-button>
                    </paper-icon-item>`;

                offlineContentContainer.innerHTML += html;
            }

            return Promise.resolve(url);
        });
        // console.log("TCL: promises", promises);

        const results = await Promise.all(promises);
        
        // console.log("promise.results", results);
        
        if (!document.querySelectorAll('.offline-available-page').length) {
            offlineContentTitle.innerHTML = 'No offline pages available 🤷‍♂';
            offlineContentContainer.remove();
        } else {
            offlineContentTitle.innerHTML = 'Offline available pages';
        }
    }

    // ? Accessibility focus on the current tab title
    document.querySelector('main > h2').focus();
    // ? Scroll to top as changing of tabs forces the page to scroll to bottom of the added dynamic HTML
    window.scrollTo(0,0);
}

const removePageFromOfflineContent = async (url, elementId) => {
    const pageWasRemovedFromCache = await removeCachedPage(url);
    const registration = await navigator.serviceWorker.getRegistration(url);
    let unregistered = false;
    
    if (registration) {
        // * unregister service worker in that scope
        unregistered = await registration.unregister();
    }
    
    if (!unregistered) {
        console.warn(`There was an error while unregistering the service worker at ${url} - registration: ${registration}`);
        showSnackBar(`There was an error while removing this page 😕 Try again later.`);
        return;
    }

    if (!pageWasRemovedFromCache) {
        console.warn(`There was an error while removing ${url} from the cache!`);
        showSnackBar(`There was an error while removing this page 😕 Try again later.`);
        return;
    }

    // * remove list item from the DOM
    removeElements(document.getElementById(elementId));
    showSnackBar(`${url} is no longer available offline!`);
};
