import { 
    isIos,
    isInStandaloneMode
} from "./util";
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
    }
    // window.history.pushState({}, document.title, navigateTo);
}