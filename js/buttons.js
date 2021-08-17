var aboutMoreButton = document.querySelector ('#aboutMoreButton');
var aboutAdd1 = document.querySelector ('.about-not-visible1');
var aboutAdd2 = document.querySelector ('.about-not-visible2');
var aboutAdd3 = document.querySelector ('.about-not-visible3');
var aboutCloseButton = document.querySelector ('#aboutCloseButton');

var servicesMoreButton = document.querySelector ('#servicesMoreButton');
var servicesAdd1 = document.querySelector ('.services-not-visible1');
var servicesAdd2 = document.querySelector ('.services-not-visible2');
var servicesAdd3 = document.querySelector ('.services-not-visible3');
var servicesCloseButton = document.querySelector ('#servicesCloseButton');

var productsMoreButton = document.querySelector ('#productsMoreButton');
var productsAdd1 = document.querySelector ('.products-not-visible1');
var productsAdd2 = document.querySelector ('.products-not-visible2');
var productsAdd3 = document.querySelector ('.products-not-visible3');
var productsCloseButton = document.querySelector ('#productsCloseButton');

var contForm = document.forms.contactsForm;

aboutMoreButton.addEventListener ('click', function (event) {
    aboutAdd1.classList.add ('visible');
    aboutAdd2.classList.add ('visible');
    aboutAdd3.classList.add ('visible');
    aboutMoreButton.classList.add ('not-visible');
})
aboutCloseButton.addEventListener ('click', function (event) {
    aboutAdd1.classList.remove ('visible');
    aboutAdd2.classList.remove ('visible');
    aboutAdd3.classList.remove('visible');
    aboutMoreButton.classList.remove ('not-visible');
})

servicesMoreButton.addEventListener ('click', function (event) {
    servicesAdd1.classList.add ('visible');
    servicesAdd2.classList.add ('visible');
    servicesAdd3.classList.add ('visible');
    servicesMoreButton.classList.add ('not-visible');
})
servicesCloseButton.addEventListener ('click', function (event) {
    servicesAdd1.classList.remove ('visible');
    servicesAdd2.classList.remove ('visible');
    servicesAdd3.classList.remove('visible');
    servicesMoreButton.classList.remove ('not-visible');
})

productsMoreButton.addEventListener ('click', function (event) {
    productsAdd1.classList.add ('visible');
    productsAdd2.classList.add ('visible');
    productsAdd3.classList.add ('visible');
    productsMoreButton.classList.add ('not-visible');
})
productsCloseButton.addEventListener ('click', function (event) {
    productsAdd1.classList.remove ('visible');
    productsAdd2.classList.remove ('visible');
    productsAdd3.classList.remove('visible');
    productsMoreButton.classList.remove ('not-visible');
})
contForm.addEventListener ('submit', function (event) {
    event.preventDefault();
    alert('Упс! Форма пока не работает...');
})