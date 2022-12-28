document.querySelectorAll('[style]')
    .forEach(el => el.removeAttribute('style'));

document.querySelectorAll('link[rel="stylesheet"]')
    .forEach(el => el.parentNode.removeChild(el));

document.querySelectorAll('style')
    .forEach(el => el.parentNode.removeChild(el));
