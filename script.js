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
    this.read = read;
}
//read
Book.prototype.toggleRead = function () {;
    this.read = !this.read;
};

function toggleRead(index) {;
    myLibrary[index].toggleRead();
    render();
};
// Add or remove the 'hidden' class from the container when clicking the 'newBook' button
newBook.addEventListener('click', () => {
    container.classList.toggle('hidden');
    newBook.textContent = newBook.textContent === 'NEW BOOK' ? 'CLOSE' : 'NEW BOOK';
});

function addBookToLibrary() {
    // Create an instance of Book with values from the form
    const book = new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].checked);
    myLibrary.push(book);
    render();
    
}

//display book in myLibrary
function render() {
    let bookGrid = document.querySelector('.right');
    bookGrid.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];//each book in the array
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `<p>- Title: ${book.title}</p><hr>
                     <p>- Written by: ${book.author}</p><hr>
                     <p>- Number of pages: ${book.pages}</p><hr>
                     <p>- Status: ${book.read ? "Read" : "Not Read Yet"}.</p><hr>
                     <div class="icon">
                        <i class="ri-delete-bin-7-line" onclick="deleteBook(${i})"> Remove</i>
                        <i class="ri-toggle-line" onclick="toggleRead(${i})"> Reading Status</i>
                     </div>`;
         bookGrid.appendChild(bookCard);
        
    }
   
}

// Event listener for the form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    addBookToLibrary(); 
    container.classList.toggle('hidden');
    form.reset()
    newBook.textContent = 'NEW BOOK';
});

//Delete book from array
const deleteBook = (index) => {
    myLibrary.splice(index, 1);
    render()


}
console.log(myLibrary);