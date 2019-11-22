import { 
    isIos,
    isInStandaloneMode,
    findUrlInCache
} from "../global/util";
import { 
    installPwa,
    dismissInstallPwaButtons
} from "./index";

const pageMainElement = document.querySelector('main');

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
    const html = await import(`!!raw-loader!./../partials/${navigateTo}.html`);
    pageMainElement.innerHTML = html.default;
    if (navigateTo === 'apps') {
        // TODO
        if (!isIos && !isInStandaloneMode) {
            // * navigated to apps tab AND is not launched as a PWA AND is not an iOS
            document.querySelector('.install-pwa-card').hidden = false;
        }

        // TODO
        // ? apps tab specific event listeners
        document.querySelectorAll('.install-pwa-button').forEach(
            button => button.addEventListener('click', installPwa)
        );
        document.querySelector('.install-pwa-dismiss-button').addEventListener(
            'click', dismissInstallPwaButtons
        );
    } else if (navigateTo === 'offline-content') {
        const pagesUrlArr = ['/cart-abandon-notification', '/offline-requests', '/push-examples'];
        const promises = pagesUrlArr.map(async url => {
            // console.log("showOfflineAvailablePages -> url", url);
            const cachedDocuments = await findUrlInCache(url);
            if (cachedDocuments.length) {
                // console.log("showOfflineAvailablePages -> cachedItems", cachedDocuments);
                const offlineUrl = cachedDocuments[0].url;
                // * show available offline icon
                const html = ` <paper-icon-item class="offline-available-page">
                    <paper-icon-button class="offline-available-pages-icon" tabIndex="-1" icon="offline-pin"></paper-icon-button>
                    <div class="avatar" style="background-image: url(${url}/favicon/android-chrome-192x192.png)" slot="item-icon"></div>
                    <paper-item-body two-line>
                        <div>${url}</div>
                        <div secondary>${offlineUrl}</div>
                    </paper-item-body>
                </paper-icon-item>`;

                document.querySelector('.offline-content').innerHTML += html;
            }
        });
        Promise.all(promises).then(() => {
            if (!document.querySelectorAll('.offline-available-page').length) {
                document.querySelector('.offline-content-title').innerHTML = 'No offline pages available 🤷‍♂';
            } else {
                document.querySelector('.offline-content-title').innerHTML = 'Offline available pages';
            }
        })
    }
}