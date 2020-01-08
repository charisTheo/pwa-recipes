import { Workbox } from 'workbox-window';
import { showTopDialog } from './topDialog';


/**
 * Registers a Service worker and shows a dialog on top whenever there is a new version
 * @param {String} swUrl absolute path to the Service Worker file url
 * @param {String} scope Service Worker scope
 */
export const registerServiceWorker = async (swUrl, scope) => {
    if ('serviceWorker' in navigator) {
        const workBox = new Workbox(swUrl, { scope });
        
        workBox.addEventListener('waiting' , () => {
            var updateServiceWorker = () => {
                workBox.addEventListener('controlling', () => window.location.reload());
                workBox.messageSW({ type: 'NEW_VERSION'});
            };
        
            setTimeout(() => showTopDialog(
                'New version available 🆕 Tap to reload.',
                {
                    eventListener: updateServiceWorker,
                    eventListenerLabel: 'Press this dialog to reload the page'
                }
                ,
            ), 0);
        });

        workBox.register();
    }
}