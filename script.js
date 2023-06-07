let myBooks = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status
}


function addBookToLibrary(book) {
    myBooks.push(book);
 
}

addBookToLibrary("LotR");


//console.table(myBooks);


for (let book in myBooks) {
    console.table(book);
}