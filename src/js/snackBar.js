const snackBar = document.getElementById('snackbar');

var hideSnackBarTimeout;
const showSnackBar = message => {
    if (hideSnackBarTimeout) {
        clearTimeout(hideSnackBarTimeout);
    } 
    if (snackBar.innerText !== '') {
        snackBar.innerText += '\n' + message;
    } else {
        snackBar.innerText = message;
    }

    snackBar.classList.add('show');
    hideSnackBarTimeout = setTimeout(() => {
        snackBar.classList.remove('show');
        snackBar.innerText = '';
    }, 5000);
}

export { showSnackBar }