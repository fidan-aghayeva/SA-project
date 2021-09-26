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

const desktopDropdownContainer = document.querySelector(
    '.desktop-dropdown-container'
);
const mobileDropdownContainer = document.querySelector(
    '.mobile-dropdown-container'
);
const mobileArrowIcon = document.querySelector('.mobile-dropdown-container i');
const desktopArrowIcon = document.querySelector(
    '.desktop-dropdown-container i'
);
const desktopDropdown = document.querySelector('.desktop-dropdown');
const mobileDropdown = document.querySelector('.mobile-dropdown');

langMenu.addEventListener('click', function(e) {
    e.stopPropagation();
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

// about me menu

function dropdownMenu(item, e, arrowIcon) {
    e.stopPropagation();
    if (item.classList.contains('active')) {
        item.classList.remove('active');
        arrowIcon.className = 'fa fa-angle-down';
    } else {
        item.classList.add('active');
        arrowIcon.className = 'fa fa-angle-up';
    }
}
desktopDropdownContainer.addEventListener('click', e =>
    dropdownMenu(desktopDropdown, e, desktopArrowIcon)
);

mobileDropdownContainer.addEventListener('click', e =>
    dropdownMenu(mobileDropdown, e, mobileArrowIcon)
);

document.body.addEventListener('click', function() {
    if (langMenuList.classList.contains('show-lang-menu')) {
        langMenuList.classList.remove('show-lang-menu');
    }
    if (desktopDropdown.classList.contains('active')) {
        desktopDropdown.classList.remove('active');
    }
});