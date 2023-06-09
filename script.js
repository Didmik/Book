

let addNewBookButton = document.querySelector(".addBook");

addNewBookButton.addEventListener("click", () => {
    
});


let myLibrary = [];


function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}


function addBookToLibrary(title, author, pages, status) {
   const book = new Book(title, author, pages, status);
    myLibrary.push(book);

    
 
}


addBookToLibrary("LotR", "Tolkien", "500", "read");
addBookToLibrary("Harry Potter", "Rowling", "400", "unread");


console.table(myLibrary);

function displayBooks() {


for (let book in myLibrary) {
    console.log(book);
}

}



