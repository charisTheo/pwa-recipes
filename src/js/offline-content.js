import '@polymer/paper-item/paper-item';
import '@polymer/paper-item/paper-item-body';
import '@polymer/paper-item/paper-icon-item';

import { 
    findUrlInCache,
    removeCachedPage,
    removeElements,
    requestToElementId,
    removeSearchParamsFromUrl
} from "../global/util";

import { showSnackBar } from "../global/snackBar";

export const init = async () => {
    // ! make function available in the window object so that can be called inline from the injected HTML
    window.removePageFromOfflineContent = removePageFromOfflineContent;
    const offlineContentTitle = document.querySelector('.offline-content-title');
    const offlineContentContainer = document.querySelector('.offline-content');
    const pagesUrlArr = ['/cart-abandon-notification/', '/offline-requests/', '/push-examples/'];
    const promises = pagesUrlArr.map(async url => {
        // console.log("renderHtmlForSelectedTab -> url", url);
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

export const removePageFromOfflineContent = async (url, elementId) => {
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
    showSnackBar(`<strong>${url}</strong> is no longer available offline! <div style="flex: 1"></div>`);
};