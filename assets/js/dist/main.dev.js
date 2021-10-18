"use strict";

/**
 * @description      : 
 * @author           : hp
 * @group            : 
 * @created          : 18/10/2021 - 22:37:51
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 18/10/2021
 * - Author          : hp
 * - Modification    : 
 **/
var langMenu = document.querySelector('.selected-lang');
var langMenuText = document.querySelector('.selected-lang span');
var langMenuList = document.querySelector('.lang-menu__list');
var langMenuListItems = document.querySelectorAll('.lang-menu__list .lang-menu__list-item');
var desktopDropdownContainer = document.querySelector('.desktop-dropdown-container');
var mobileDropdownContainer = document.querySelector('.mobile-dropdown-container');
var mobileArrowIcon = document.querySelector('.mobile-dropdown-container i');
var desktopArrowIcon = document.querySelector('.desktop-dropdown-container i');
var desktopDropdown = document.querySelector('.desktop-dropdown');
var mobileDropdown = document.querySelector('.mobile-dropdown');
langMenu.addEventListener('click', function (e) {
  e.stopPropagation();
  langMenuList.classList.add('show-lang-menu');
});
langMenuListItems.forEach(function (item) {
  item.addEventListener('click', function () {
    var selectedLang = item.textContent;
    langMenuText.textContent = selectedLang;
    langMenuList.classList.remove('show-lang-menu');
  });
}); // mobile menu

var mobileMenuIcon = document.querySelector('.mobile-menu__bar-icon');
var mobileMenuContainer = document.querySelector('.header .mobile-menu__container');
var menuCloseButton = document.querySelector('.header .mobile-menu__container .close-button');
var mobileMenuSearchIcon = document.querySelector('.mobile-menu__search-container>img');
var mobileMenuSearchBox = document.querySelector('.mobile-menu__search-container>div');
mobileMenuIcon.addEventListener('click', function () {
  mobileMenuContainer.classList.add('show-mobile-menu');
  document.querySelector('body').style.overflowY = 'hidden';
});
menuCloseButton.addEventListener('click', function () {
  mobileMenuContainer.classList.remove('show-mobile-menu');
  document.querySelector('body').style.overflowY = 'auto';
});
mobileMenuSearchIcon.addEventListener('click', function () {
  mobileMenuSearchIcon.style.display = 'none';
  document.querySelector('.header .mobile-menu__header .mobile-menu__logo').style.display = 'none';
  mobileMenuSearchBox.style.display = 'block';
}); // about me menu

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

desktopDropdownContainer.addEventListener('click', function (e) {
  return dropdownMenu(desktopDropdown, e, desktopArrowIcon);
});
mobileDropdownContainer.addEventListener('click', function (e) {
  return dropdownMenu(mobileDropdown, e, mobileArrowIcon);
});
document.body.addEventListener('click', function () {
  if (langMenuList.classList.contains('show-lang-menu')) {
    langMenuList.classList.remove('show-lang-menu');
  }

  if (desktopDropdown.classList.contains('active')) {
    desktopDropdown.classList.remove('active');
  }

  if (desktopArrowIcon.className === 'fa fa-angle-up' || mobileArrowIcon.className === 'fa fa-angle-up') {
    desktopArrowIcon.className = 'fa fa-angle-down';
    mobileArrowIcon.className = 'fa fa-angle-down';
  }
}); // go to top

var goToTop = document.querySelector('.go-to-top');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    goToTop.style.display = 'inline-flex';
  } else {
    goToTop.style.display = 'none';
  }
}

goToTop.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});