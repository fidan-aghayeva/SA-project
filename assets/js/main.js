/**
 * @description      : 
 * @author           : hp
 * @group            : 
 * @created          : 06/09/2021 - 00:17:11
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 06/09/2021
 * - Author          : hp
 * - Modification    : 
 **/
const langMenu = document.querySelector('.selected-lang');
const langMenuText = document.querySelector('.selected-lang span');
const langMenuList = document.querySelector('.lang-menu__list');
const langMenuListItems = document.querySelectorAll(
    '.lang-menu__list .lang-menu__list-item'
);

langMenu.addEventListener('click', function() {
    langMenuList.classList.add('show-lang-menu');
});

langMenuListItems.forEach(item => {
    item.addEventListener('click', function() {
        const selectedLang = item.textContent;
        langMenuText.textContent = selectedLang;
        langMenuList.classList.remove('show-lang-menu');
    });
});

// mobile menu

const mobileMenuIcon = document.querySelector('.mobile-menu__bar-icon');
const mobileMenuContainer = document.querySelector(
    '.header .mobile-menu__container'
);
const menuCloseButton = document.querySelector(
    '.header .mobile-menu__container .close-button'
);

mobileMenuIcon.addEventListener('click', function() {
    mobileMenuContainer.classList.add('show-mobile-menu');
});

menuCloseButton.addEventListener('click', function() {
    mobileMenuContainer.classList.remove('show-mobile-menu');
});

// dont work

// document.getElementsByTagName('html').addEventListener('click', function() {
//     console.log('yes');
//     if (langMenu.classList.contain('show-lang-menu')) {
//         console.log('yes');
//         langMenuList.classList.remove('show-lang-menu');
//     }
// });