/* eslint-disable linebreak-style */
const headerBar = document.querySelectorAll('.header');
const menu = document.querySelector('.mobile-menu');
const menuList = document.querySelectorAll('.menu-container');

function mobileMenu() {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    headerBar.style.display = 'block';
  } else {
    menu.style.display = 'block';
    headerBar.style.display = 'none';
  }
}
document.querySelector('.hamburger').addEventListener('click', mobileMenu);
document.querySelector('.close-button').addEventListener('click', mobileMenu);

for (let i = 0; i < menuList.length; i += 1) {
  menuList[i].addEventListener('click', mobileMenu);
}
