// Detects if device is an iOS (including iOS 13) 
export const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

// Detects if device is in standalone mode
export const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

export const getCookie = cookieName => {
    const cookies = document.cookie.split(/=|;/);
    const cookieValueIndex = cookies.indexOf(cookieName) + 1;
    return cookies[cookieValueIndex] || '';
};

export const setCookie = (cookieName, cookieValue) => document.cookie = `${cookieName}=${cookieValue.toString()}`;

export const removeElements = elements => {
    const elementsArr = Array.isArray(elements) ? elements : [elements];
    elementsArr.map(el => {
        el.classList.add('hidden');
        setTimeout(() => {
            el.remove();
        }, 500);
    });
};

// check by cache name
export const findUrlInCache = page => {
    return new Promise(async (resolve, reject) => {
        if (page === '/offline.html') {
            const offlinePageRequest = await caches.match(page, { ignoreSearch: true });
            if (!!offlinePageRequest) {
                resolve(offlinePageRequest);
                return;
            }
        }

        // Get a list of all of the caches for this origin
        const pageCaches = await getPageCaches(page);

        const results = await Promise.all(pageCaches.map(async pageCache => {
            console.log(`findUrlInCache: Checking cache for ${page}: pageCache`, pageCache);
            const cachedResources = await pageCache.keys();
            
            // * Check for any html files inside each cache under item's name
            for (const request of cachedResources) {
                if (request.url.match(`(${page}.+\.html)|${page}$`)) {
                    // * return the cached page and exit
                    // resolve(request);
                    return request;
                }
            }

            return false;
        }));
        const cachedRequest = results.find(request => !!request);
        resolve(cachedRequest);
    });
};

export const removeCachedPage = async url => {
    const pageCaches = await getPageCaches(url);
    const promises = pageCaches.map(async pageCache => {
        const cachedResources = await pageCache.keys();
    
        const promises = cachedResources.map(async resource => await pageCache.delete(resource));
        await Promise.all(promises);
    });

    return Promise.all(promises).then(() => {
        console.log(url + 'has(ve) been successfully deleted and the page is not available offline anymore.');
        return true; 
    }).catch(error => {
        console.warn("removeCachedPage: error", error);
        return false;
    });
};

export const getPageCaches = page => {
    return new Promise(async (resolve, reject) => {
        // Get a list of all of the caches for this origin
        const pageCacheNames = await caches.keys().then(keys => keys.filter(key => key.match(page)));

        const promises = pageCacheNames.map(async cacheName => await caches.open(cacheName));

        const results = await Promise.all(promises); 
        resolve(results);
    });
};

export const requestToElementId = request => request.url.split(/:|\/|\./).join('-');

export const removeSearchParamsFromUrl = url => url.split('?')[0];
