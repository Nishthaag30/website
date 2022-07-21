const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEvenListener('click', () => {
    selectElement('header').classList.toggle('active');
});