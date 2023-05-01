const booksLink = document.querySelector('#books-link');
const bookInputsLink = document.querySelector('#bookInputs-link');
const contactLink = document.querySelector('#contact-link');
const booksSection = document.querySelector('#books');
const bookInputsSection = document.querySelector('#bookInputs');
const contactSection = document.querySelector('#contact');

const navigation = () => {
  booksLink.addEventListener('click', () => {
    booksSection.style.display = 'flex';
    bookInputsSection.style.display = 'none';
    contactSection.style.display = 'none';
  });

  bookInputsLink.addEventListener('click', () => {
    booksSection.style.display = 'none';
    bookInputsSection.style.display = 'flex';
    contactSection.style.display = 'none';
  });

  contactLink.addEventListener('click', () => {
    booksSection.style.display = 'none';
    bookInputsSection.style.display = 'none';
    contactSection.style.display = 'flex';
  });
};

export default navigation;