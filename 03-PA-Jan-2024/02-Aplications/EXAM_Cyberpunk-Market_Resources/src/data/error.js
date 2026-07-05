

export function showError (str) {
    const errorBox = document.querySelector('#errorBox');
    const errSpan = errorBox.querySelector('.msg');

    errSpan.textContent = str;
    errorBox.style.display = 'block';
    setTimeout (() => {
        errorBox.style.display = 'none';
    }, 3000);
}
