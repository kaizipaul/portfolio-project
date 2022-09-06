/* eslint-disable linebreak-style */
const headerBar = document.querySelectorAll('.header');
const menu = document.querySelector('.mobile-menu');
const menuList = document.querySelectorAll('.menu-container');

function disableScroll() {
  const horizontalPos = window.scrollX;
  const verticalPos = window.scrollY;
  window.onscroll = () => {
    window.scroll(horizontalPos, verticalPos);
  };
}

function enableScroll() {
  window.onscroll = '';
}

function mobileMenu() {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    headerBar.style.display = 'block';
    enableScroll();
  } else {
    menu.style.display = 'block';
    headerBar.style.display = 'none';
    disableScroll();
  }
}
document.querySelector('.hamburger').addEventListener('click', mobileMenu);
document.querySelector('.close-button').addEventListener('click', mobileMenu);

for (let i = 0; i < menuList.length; i += 1) {
  menuList[i].addEventListener('click', mobileMenu);
}
