/* eslint-disable linebreak-style */
const cardsData = [
  {
    id: 1,
    title: 'Card 1',
    image: './assets/images/card-image.png',
    description:
        "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['CSS', 'Javascript', 'Ruby'],
    link: 'link_to_live_version.com',
  },
  {
    id: 2,
    title: 'Card 2',
    image: './assets/images/card-image.png',
    description:
        "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['CSS', 'Javascript', 'Ruby'],
    link: 'link_to_live_version.com',
  },
  {
    id: 3,
    title: 'Card 3',
    image: './assets/images/card-image.png',
    description:
        "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['CSS', 'Javascript', 'Boostrap'],
    link: 'link_to_live_version.com',
  },
  {
    id: 4,
    title: 'Card 4',
    image: './assets/images/card-image.png',
    description:
        "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['CSS', 'HTML', 'Ruby'],
    link: 'link_to_live_version.com',
  },
  {
    id: 5,
    title: 'Card 5',
    image: './assets/images/card-image.png',
    description:
        "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['HTML', 'Javascript', 'Ruby'],
    link: 'link_to_live_version.com',
  },
  {
    id: 6,
    title: 'Card 6',
    image: './assets/images/works-section.png',
    description:
        "6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['CSS', 'Javascript', 'Ruby'],
    link: 'link_to_live_version.com',
  },
];

const headerBar = document.querySelectorAll('.header');
const menu = document.querySelector('.mobile-menu');
const menuList = document.querySelectorAll('.menu-container');
const cardsPopup = document.querySelector('#cards-popup');
const cardsClose = document.querySelector('#cards-popup .close');
const workGrid = document.querySelector('.works .works-grid');
let popupWindow = {};

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

cardsData.forEach((card) => {
  workGrid.innerHTML += `
    <div class='work-item'>
    <div class='work-item-content'>
      <h3>${card.title}</h3>
      <p>
        ${card.description.trim().substring(0, 150)}...
      </p>
      <ul class='tags'>
        <li class='tag-item'>css</li>
        <li class='tag-item'>html</li>
        <li class='tag-item'>bootstrap</li>
        <li class='tag-item'>Ruby</li>
      </ul>
    </div>
    <button class='see-project' type='button'>See Project</button>
  </div>
  `;
});

const projectBtn = document.querySelectorAll('.see-project');
const sampleProjectBtn = document.querySelectorAll('.sample-section-btn');
const windowTitle = document.querySelector('#cards-popup h3');
const windowDesc = document.querySelector('#cards-popup p');
const overlay = document.querySelector('.overlay');

projectBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupWindow = cardsData.find(
      (work) => work.title === btn.previousElementSibling.children[0].innerHTML,
    );
    windowTitle.innerHTML = popupWindow.title;
    windowDesc.innerHTML = popupWindow.description;
    cardsPopup.classList.add('active');
    overlay.classList.add('active');
    disableScroll();
  });
});

cardsClose.addEventListener('click', () => {
  cardsPopup.classList.remove('active');
  overlay.classList.remove('active');
  enableScroll();
});

sampleProjectBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    windowTitle.innerHTML = 'Multi Post Stories';
    windowDesc.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it
    1960s with the releax map lapora verita.`;
    cardsPopup.classList.add('active');
    overlay.classList.add('active');
    disableScroll();
  });
});

function showMessage(input, message, type) {
  const msg = document.querySelector('.error-msg');
  msg.innerText = message;
  input.className = type ? '' : 'input-error';
  setTimeout(() => {
    msg.innerText = '';
  }, 3500);
  return type;
}

function errorMsg(input, message) {
  return showMessage(input, message, false);
}

function successMsg(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return errorMsg(input, message);
  }
  return successMsg(input);
}

function checkEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const emailStr = /^[a-z][a-z0-9_@.]*$/;

  const email = input.value.trim();
  if (!emailStr.test(email)) {
    return errorMsg(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#form-validation');
const EMAIL_REQUIRED = 'Please enter your email';
const NAME_REQUIRED = 'Please enter your name';
const INVALID_EMAIL = 'Please enter your email in a correct format';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const validName = hasValue(form.elements.name, NAME_REQUIRED);
  const validEmail = checkEmail(form.elements.email, EMAIL_REQUIRED, INVALID_EMAIL);

  if (validName && validEmail) {
    form.submit();
    form.elements.name.value = '';
    form.elements.email.value = '';
  }
});
