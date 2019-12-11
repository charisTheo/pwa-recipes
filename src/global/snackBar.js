import './snackBar.css';

const snackbarContainer = document.querySelector('.snackbar-container');

var showSnackBar = (message, dismissButtonElement) => {
    const snackbar = document.createElement('div');
    let hideSnackBarTimeout = setTimeout(() => dismissSnackbar(snackbar), 5000);
    let snackbarDismissButton;
    
    snackbar.classList.add('snackbar');
    snackbar.innerHTML += `<div>${message}<div>`;
    
    if (dismissButtonElement) {
        snackbarDismissButton = dismissButtonElement;
        
    } else {
        snackbarDismissButton = document.createElement('button');
        snackbarDismissButton.setAttribute('aria-label', 'Dismiss button');
        snackbarDismissButton.classList.add('snackbar-dismiss-button', 'focus-outline', 'accent-outline');
        snackbarDismissButton.innerText = 'Got it';
        snackbarDismissButton.addEventListener('click', () => dismissSnackbar(snackbar, hideSnackBarTimeout, true));

    }
    
    snackbar.appendChild(snackbarDismissButton);
    snackbar.classList.add('show'); // TODO check if this is needed
    snackbarContainer.append(snackbar);
}

const dismissSnackbar = (snackbar, timeout, animate) => {
    if (timeout) {
        clearTimeout(timeout);
    }
    if (animate) {
        snackbar.classList.add('animate-hidding');
        snackbar.addEventListener('animationend', snackbar.remove);
    } else {
        snackbar.classList.add('hidding');
        snackbar.addEventListener('transitionend', snackbar.remove);
    }
}

window.showSnackBar = showSnackBar;

export { showSnackBar }