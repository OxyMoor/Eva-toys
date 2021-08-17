var burgerMenu = document.querySelector ('#burgerMenu');
var navigation = document.querySelector ('.nav-links');

burgerMenu.addEventListener ('click', function (event) {
    navigation.classList.toggle ('nav-links-not-visible');
    navigation.classList.toggle ('nav-links-vertical');
    burgerMenu.classList.toggle ('active'); 
})