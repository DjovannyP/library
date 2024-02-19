const newBook = document.querySelector('button')
const container = document.querySelector('.container')

const myLibrary = ["je saurais", "I am a good programmer", "Que du tort"];


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

newBook.addEventListener('click', () => {
    container
})
//take input to user
function addBookToLibrary() {

    let input = prompt("Enter a book");

    myLibrary.push(input);
}

myLibrary.forEach((book) => console.log(book))