let bookArray = JSON.parse(localStorage.getItem('bookArray')) || [];

function addBook(author, book) {
  bookArray.push({ author, book });
  updateLocalStorage();
  displayBooks();
}
function removeElement(del){
 bookArray.splice(del, 1)
 updateLocalStorage();
 displayBooks();
 console.log(del)
}
function updateLocalStorage() {
  localStorage.setItem('bookArray', JSON.stringify(bookArray));
}

function displayBooks() {
  const bookList = document.getElementById('book-list');

  bookList.innerHTML = '';

  bookArray.forEach((book , del) => {
    const authorB = document.createElement('h3');
    authorB.innerHTML = `${book.author}`
    bookList.appendChild(authorB);
    const titleB = document.createElement('h4');
    // const text2 = document.createTextNode(`${book.book}`);
    titleB.innerHTML = `${book.book}`
    bookList.appendChild(titleB)
    const buttonB = document.createElement('h3');
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', () => {
      removeElement(del);
    });
    buttonB.appendChild(removeButton);
    bookList.appendChild(buttonB);
    const hr = document.createElement('hr')
    bookList.appendChild(hr)
  });
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
displayBooks();