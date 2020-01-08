const appsHtml = import(`!!raw-loader!./../partials/apps.html`);
const offlineContentHtml = import(`!!raw-loader!./../partials/offline-content.html`);
const infoHtml = import(`!!raw-loader!./../partials/info.html`);

const pageMainElement = document.querySelector('main');

export const navigationTabSelected = async event => {
    const navigateTo = event.detail.item.getAttribute('data-navigate-to');
    
    // animate page leave
    // console.log("animation started:", window.performance.now());
    await animatePageEnter(0);
    
    renderHtmlForSelectedTab(navigateTo);

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
export const renderHtmlForSelectedTab = async navigateTo => {
    let html;

    switch(navigateTo) {
        case 'apps':
            html = await appsHtml;
            pageMainElement.innerHTML = html.default;
            import(/* webpackChunkName: "apps" */ './apps').then(apps => apps.init());
        break;
        case 'offline-content':
            html = await offlineContentHtml;
            pageMainElement.innerHTML = html.default;
            import(/* webpackChunkName: "offline-content" */ './offline-content').then(offlineContent => offlineContent.init());
        break;
        case 'info':
            html = await infoHtml;
            pageMainElement.innerHTML = html.default;
            import(/* webpackChunkName: "info" */ './info').then(info => info.init());
        break;
        default:
            console.warn(`renderHtmlForSelectedTab: HTML for tab ${navigateTo} was not found!`);
            return;
    }

    // ? Accessibility focus on the current tab title
    document.querySelector('main > h2').focus();
    // ? Scroll to top as changing of tabs forces the page to scroll to bottom of the added dynamic HTML
    window.scrollTo(0,0);
}

