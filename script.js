// Selecting DOM elements
const newBook = document.querySelector('#add_new_book');
const container = document.querySelector('.container');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const submitButton = document.querySelector('button[type="submit"]');
const myLibrary = [];

// Defining the Book class to represent books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read || false;
    this.info = function info() {
        if (this.read) {
            return `The ${this.title} by ${this.author}, ${this.pages} pages, read.`;
        } else {
            return `The ${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
        }
    };
}

// Add or remove the 'hidden' class from the container when clicking the 'newBook' button
newBook.addEventListener('click', () => {
    container.classList.toggle('hidden');
});

function addBookToLibrary() {
    // Create an instance of Book with values from the form
    const book = new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
    myLibrary.push(book);
}

function displayLibrary() {
    const bookGrid = document.querySelector('.right');
console.log(bookGrid);
    bookGrid.innerHTML = '';

    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookInfo = document.createElement('p');
        bookInfo.textContent = book.info();
        bookCard.appendChild(bookInfo);

        bookGrid.appendChild(bookCard);
    });
}


// Event listener for the form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToLibrary(); 
    container.classList.toggle('hidden');
    bookDisplay();
});
