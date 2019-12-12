import '@polymer/paper-card/paper-card';
import '@polymer/paper-button/paper-button';

import { 
    isIos,
    isInStandaloneMode
} from "../global/util";
import { 
    installPwa,
    dismissInstallPwaButtons,
    markOfflineAvailableContent
} from "./index";

const iosInstallBannerDismissButton = document.querySelector('#ios-install-banner-dismiss-button');

export const init = () => {
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
}