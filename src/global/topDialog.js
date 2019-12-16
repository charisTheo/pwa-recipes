import './topDialog.css';

const topDialogContainer = document.querySelector('.top-dialog-container');

/**
 * Creates and appends a new top dialog element to the page
 * @param {String} message 
 * @param {Object} options
 * @property {Array} options.classList
 * @property {Number} options.timeout
 * @property {Function} options.eventListener
 * @property {String} options.eventListenerLabel
 */
var showTopDialog = (message, options) => {
    options = options || {};
    const dialog = document.createElement('div');
    const dialogTextContent = document.createElement('div');
    let dialogDismissButton;
    
    dialog.classList.add('top-dialog');

    dialogTextContent.classList.add('top-dialog-text-content');
    dialogTextContent.innerHTML = message;
    
    if (options.timeout) {
        setTimeout(() => {
            if (dialog) {
                dismissDialog(dialog);
            }
        }, options.timeout);
    }

    if (options.classList) {
        dialog.classList.add(options.classList);
    }

    dialogDismissButton = document.createElement('button');
    dialogDismissButton.setAttribute('aria-label', 'Dialog dismiss button');
    dialogDismissButton.classList.add('top-dialog-dismiss-button', 'focus-outline');
    dialogDismissButton.innerHTML = '<iron-icon tabindex="-1" icon="icons:close"></iron-icon>';
    dialogDismissButton.addEventListener('click', () => dismissDialog(dialog));

    if (options.eventListener) {
        dialogTextContent.addEventListener('click', options.eventListener);
        dialogTextContent.setAttribute('aria-label', options.eventListenerLabel);
        dialogTextContent.style.cursor = 'pointer';
        dialogTextContent.setAttribute('role', 'button');
    }

    dialog.appendChild(dialogTextContent);
    dialog.appendChild(dialogDismissButton);
    topDialogContainer.appendChild(dialog);
}

const dismissDialog = dialog => {
    dialog.classList.add('hidding');
    dialog.addEventListener('transitionend', dialog.remove);
}

window.showTopDialog = showTopDialog;

export { showTopDialog }