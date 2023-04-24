const bookArray = JSON.parse(localStorage.getItem('bookArray')) || [];

function updateLocalStorage() {
  localStorage.setItem('bookArray', JSON.stringify(bookArray));
}

function displayBooks() {
  const bookList = document.getElementById('book-list');

  bookList.innerHTML = '';
  bookArray.forEach((book, index) => {
    const div = document.createElement('div');
    div.setAttribute('id', 'div');
    bookList.appendChild(div);
    const titleB = document.createElement('h3');
    titleB.innerHTML = `${book.book}`;
    div.appendChild(titleB);
    const authorB = document.createElement('h3');
    authorB.innerHTML = `${book.author}`;
    div.appendChild(authorB);
    const buttonB = document.createElement('h3');
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', () => {
      buttonB.parentElement.remove();
      bookArray.splice(index, 1);
      updateLocalStorage();
    });
    buttonB.appendChild(removeButton);
    div.appendChild(buttonB);
    const hr = document.createElement('hr');
    div.appendChild(hr);
  });
}
function addBook(author, book) {
  bookArray.push({ author, book });
  updateLocalStorage();
  displayBooks();
}

const authorInput = document.getElementById('author');
const bookInput = document.getElementById('book');
const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
  const author = authorInput.value;
  const book = bookInput.value;
  addBook(author, book);
  authorInput.value = '';
  bookInput.value = '';
});
updateLocalStorage();
displayBooks();