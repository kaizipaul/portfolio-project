/* eslint-disable linebreak-style */
const projectData = [
  {
    id: 1,
    title: 'To-do List',
    image: './assets/images/to-do-list-screenshot.png',
    description:
        "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ['CSS', 'Javascript', 'HTML', 'Webpack'],
    live_link: 'https://kaizipaul.github.io/to-do-list/dist/',
    source_link: 'link_to_source_version.com',
  },
  {
    id: 2,
    title: 'Awesome Books',
    image: './assets/images/awesome-books.png',
    description:
    "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ['CSS', 'Javascript', 'HTML'],
    live_link: 'link_to_live_version.com',
    source_link: 'link_to_source_version.com',
  },
  {
    id: 3,
    title: 'Rick and Morty DB',
    image: './assets/images/rickandmorty.png',
    description:
        'In this Project I built a React App that returns a list of 25 random Rick & Morty characters and their details. A user can search for characters in the search box and can hit refresh to reload the characters. The user can also click on the character card to view character details',
    tags: ['CSS', 'Javascript', 'Boostrap'],
    live_link: 'link_to_live_version.com',
    source_link: 'link_to_source_version.com',
  },
  {
    id: 4,
    title: 'High Scores',
    image: './assets/images/card-image.png',
    description:
        "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ['CSS', 'HTML', 'Webpack'],
    live_link: 'link_to_live_version.com',
    source_link: 'link_to_source_version.com',
  },
  {
    id: 5,
    title: 'The Budget App',
    image: './assets/images/card-image.png',
    description:
        "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ['HTML', 'Javascript', 'Ruby'],
    live_link: 'link_to_live_version.com',
    source_link: 'link_to_source_version.com',
  },
  {
    id: 6,
    title: 'Rent-a-Car',
    image: './assets/images/works-section.png',
    description:
        "6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ['Bootstrap', 'React', 'Ruby on Rails'],
    live_link: 'link_to_live_version.com',
    source_link: 'link_to_source_version.com',
  },
];

// Navigation

// const headerBar = document.querySelectorAll('.header');
// const menu = document.querySelector('.mobile-menu');
// const cardsPopup = document.querySelector('#cards-popup');
// const cardsClose = document.querySelector('#cards-popup .close');
// let popupWindow = {};

// function disableScroll() {
//   const horizontalPos = window.scrollX;
//   const verticalPos = window.scrollY;
//   window.onscroll = () => {
//     window.scroll(horizontalPos, verticalPos);
//   };
// }

// function enableScroll() {
//   window.onscroll = '';
// }

// function mobileMenu() {
//   if (menu.style.display === 'block') {
//     menu.style.display = 'none';
//     headerBar.style.display = 'block';
//     enableScroll();
//   } else {
//     menu.style.display = 'block';
//     headerBar.style.display = 'none';
//     disableScroll();
//   }
// }
// document.querySelector('.hamburger').addEventListener('click', mobileMenu);
// document.querySelector('.close-button').addEventListener('click', mobileMenu);

const renderProjectCards = (projectData) => {
  const workGrid = document.querySelector('.works-grid');
  const modalContainer = document.querySelector('.modal-container');
  const overlay = document.querySelector('.overlay');
  const sampleProject = document.querySelector('.sample');

  // Render modal for each project
  const projectModal = (project) => {
    // Create a div element for the modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create h2 element for the project name in the modal
    const modalProjectHeader = document.createElement('div');
    modalProjectHeader.classList.add('modal-header', 'flex');
    const modalProjectName = document.createElement('h2');
    modalProjectName.textContent = project.title;
    const modalCloseBtn = document.createElement('p');
    modalCloseBtn.classList.add('close-button');
    modalCloseBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    // Add event listener to close the modal
    modalCloseBtn.addEventListener('click', () => {
      modalContainer.classList.remove('active');
      overlay.classList.remove('active');
    });
    modalProjectHeader.appendChild(modalProjectName);
    modalProjectHeader.appendChild(modalCloseBtn);

    // Create p element for the project description in the modal
    const modalProjectDescription = document.createElement('div');
    modalProjectDescription.classList.add('modal-description', 'flex');
    const descriptionFlex = document.createElement('div');
    descriptionFlex.classList.add('description-flex', 'flex');
    const description = document.createElement('p');
    const modalProjectLinks = document.createElement('div');
    modalProjectLinks.classList.add('modal-links', 'flex');
    const liveLink = document.createElement('a');
    liveLink.classList.add('live-link');
    liveLink.href = project.live_link;
    liveLink.innerHTML = 'See Live  <i class="fa-solid fa-arrow-up-right-from-square"></i>';
    liveLink.target = '_blank';
    liveLink.rel = 'noopener noreferrer';
    const sourceLink = document.createElement('a');
    sourceLink.classList.add('source-link');
    sourceLink.href = project.source_link;
    sourceLink.innerHTML = 'See Source  <i class="fa-brands fa-github"></i>';
    sourceLink.target = '_blank';
    sourceLink.rel = 'noopener noreferrer';
    description.textContent = project.description;
    descriptionFlex.appendChild(description);
    modalProjectLinks.appendChild(liveLink);
    modalProjectLinks.appendChild(sourceLink);
    descriptionFlex.appendChild(modalProjectLinks);
    // create img element for the project image in the modal
    const modalProjectImage = document.createElement('img');
    modalProjectImage.src = project.image;
    modalProjectDescription.appendChild(modalProjectImage);
    modalProjectDescription.appendChild(descriptionFlex);
    // Create div element for the project tags in the modal
    const modalTagContainer = document.createElement('ul');
    modalTagContainer.classList.add('tag-container', 'flex');
    project.tags.forEach((tag) => {
      const tagElement = document.createElement('li');
      tagElement.classList.add('tag');
      tagElement.textContent = tag;
      modalTagContainer.appendChild(tagElement);
    });

    // Add the project name, description, and tags to the modal content
    modalContent.appendChild(modalProjectHeader);
    modalContent.appendChild(modalTagContainer);
    modalContent.appendChild(modalProjectDescription);

    // Add the modal content to the modal container and display it
    modalContainer.innerHTML = '';
    modalContainer.appendChild(modalContent);
    modalContainer.classList.add('active');
    overlay.classList.add('active');
  };

  let currentIndex = Math.floor(Math.random() * projectData.length);

  const renderSampleProject = () => {
    const project = projectData[currentIndex];
    sampleProject.innerHTML = '';

    const projectImg = document.createElement('img');
    projectImg.src = project.image;
    projectImg.alt = project.title;
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('sample-para', 'flex');
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    const projectTags = document.createElement('ul');
    projectTags.classList.add('tags', 'flex');
    project.tags.forEach((tag) => {
      const tagElement = document.createElement('li');
      tagElement.classList.add('tag-item');
      tagElement.textContent = tag;
      projectTags.appendChild(tagElement);
    });

    const projectBtn = document.createElement('button');
    projectBtn.classList.add('sample-btn');
    projectBtn.textContent = 'See Project';
    projectBtn.addEventListener('click', () => {
      projectModal(project);
    });

    detailsContainer.appendChild(projectTitle);
    detailsContainer.appendChild(projectDescription);
    detailsContainer.appendChild(projectTags);
    detailsContainer.appendChild(projectBtn);

    sampleProject.appendChild(projectImg);
    sampleProject.appendChild(detailsContainer);

    currentIndex = currentIndex === projectData.length - 1 ? 0 : currentIndex + 1;
  };

  renderSampleProject();

  setInterval(() => {
    renderSampleProject();
  }, 6 * 60 * 60 * 1000);

  // Loop through the projects array
  projectData.forEach((project) => {
    // Create a div element for the card
    const card = document.createElement('div');
    card.classList.add('work-item', 'flex');
    // Set the project image as the background for the card
    card.style.backgroundImage = `linear-gradient(
      180.45deg,
      rgba(38, 38, 38, 0) 0.75%,
      rgba(38, 38, 38, 0.9) 61.94%
    ), url(${project.image})`;
    card.style.backgroundSize = 'cover';

    // Create a div element for the card content
    const cardContent = document.createElement('div');
    cardContent.classList.add('work-item-content', 'flex');

    // Create h3 element for the project name
    const projectName = document.createElement('h3');
    projectName.textContent = project.title;

    // Create p element for the project description
    const projectDescription = document.createElement('p');
    projectDescription.textContent = `${project.description.trim().substring(0, 150)}...`;

    // Create ul element for the project tags
    const tagContainer = document.createElement('ul');
    tagContainer.classList.add('tags', 'flex');
    project.tags.forEach((tag) => {
      const tagElement = document.createElement('li');
      tagElement.classList.add('tag-item');
      tagElement.textContent = tag;
      tagContainer.appendChild(tagElement);
    });

    const projectBtn = document.createElement('button');
    projectBtn.classList.add('see-project');
    projectBtn.textContent = 'See Project';
    projectBtn.addEventListener('click', () => {
      projectModal(project);
    });

    // Add the project name, description, and tags to the card content
    cardContent.appendChild(projectName);
    cardContent.appendChild(projectDescription);
    cardContent.appendChild(tagContainer);

    // Add the card content to the card
    card.appendChild(cardContent);
    card.appendChild(projectBtn);

    // Add the card to the card container
    workGrid.appendChild(card);
  });
};

renderProjectCards(projectData);

// Form Validation

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
