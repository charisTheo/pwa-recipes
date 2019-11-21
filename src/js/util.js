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

export const findUrlInCache = async item => {
    // Get a list of all of the caches for this origin
    console.log('Get a list of all of the caches for this origin');
    const cacheNames = await caches.keys();
    const result = [];

    // TODO check cache name instead
    
    for (const name of cacheNames) {
        // Open the cache
        const cache = await caches.open(name);

        for (const request of await cache.keys()) {
            if (request.url.match(`(${item}.+\.html$)|${item}\/$`)) {
                result.push(await cache.match(request));
            }
        }
    }

    return result;
}