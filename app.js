class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library{
  constructor(){
    this.bookArray = JSON.parse(localStorage.getItem('bookArray')) || [];
    this.bookList = document.getElementById('book-list');
    this.authorInput = document.getElementById('author');
    this.bookInput = document.getElementById('book');
    this.addButton = document.getElementById('add');

  this.addButton.addEventListener('click', () => {
    const author = this.authorInput.value;
    const book = this.bookInput.value;
    this.addBook(author, book);
    this.authorInput.value = '';
    this.bookInput.value = '';
  });
  this.displayBooks();
};
updateLocalStorage() {
  localStorage.setItem('bookArray', JSON.stringify(this.bookArray));
}
displayBooks(){
  this.bookList.innerHTML = '';
  this.bookArray.forEach((book, index) => {
    const div = document.createElement('div');
    div.setAttribute('id', 'div');
     this.bookList.appendChild(div);
      const titleB = document.createElement('h3');
      titleB.innerHTML = `${book.author} by ${book.title}`;
      div.appendChild(titleB);
      const buttonB = document.createElement('h3');
      const removeButton = document.createElement('button');
      removeButton.innerHTML = 'Remove';
      removeButton.addEventListener('click', () => {
      buttonB.parentElement.remove();
      this.bookArray.splice(index, 1);
      this.updateLocalStorage();
      });
      buttonB.appendChild(removeButton);
      div.appendChild(buttonB);
      const hr = document.createElement('hr');
      div.appendChild(hr);
    });
  }
}
updateLocalStorage();
displayBooks();