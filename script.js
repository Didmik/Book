

let addNewBookButton = document.querySelector(".addBook");
let popUpForm = document.querySelector(".popUp");
let closeButton = document.querySelector(".close");
let tableBody = document.querySelector(".tableBody");
let form = document.querySelector("form")
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let statusInput = document.querySelector("#reading")


addNewBookButton.addEventListener("click", () => {
  popUpForm.style.display = "block";
});

closeButton.addEventListener("click", () => {
    popUpForm.style.display = "none";
  });


let myLibrary = [];


function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}


/*if (localStorage.getItem('books') === null) {
    myLibrary = [];
  } else {
    const booksFromStorage = JSON.parse(localStorage.getItem('books'));
    myLibrary = booksFromStorage;
  } */

  function updateLocalStorage() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    //myLibrary = JSON.parse(localStorage.getItem("library"));
  }

  //updateLocalStorage();

  const getStorage = () => {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  }



function addBookToLibrary(title, author, pages, status) {
    const book = new Book(titleInput.value, authorInput.value, pagesInput.value, statusInput.value);
    myLibrary.push(book);
    updateLocalStorage();
    displayBooks();
    clearForm();
}

//addBookToLibrary();


//addBookToLibrary("LotR", "Tolkien", "500", "read");
//addBookToLibrary("Harry Potter", "Rowling", "400", "unread");


console.table(myLibrary);


function displayBooks() {
 //return myLibrary.map(item => item.title);
  tableBody.innerHTML = "";
  /*const bookList = document.querySelector(".tableBody");
  bookList.textContent = ''; */
  for (let i = 0; i < myLibrary.length; i++) {
    const bookRow = document.createElement('tr');
    bookList.appendChild(bookRow);
    // BOOK TITLE
    const bookTitle = document.createElement('td');
    bookTitle.textContent = myLibrary[i].title;
    bookRow.appendChild(bookTitle);
    // BOOK AUTHOR
    const bookAuthor = document.createElement('td');
    bookAuthor.textContent = myLibrary[i].author;
    bookRow.appendChild(bookAuthor);
    // BOOK PAGES
    const bookPages = document.createElement('td');
    bookPages.textContent = myLibrary[i].pages;
    bookRow.appendChild(bookPages);
    // BOOK STATUS BUTTON
    const bookStatus = document.createElement('td');
    bookStatus.textContent = myLibrary[i].status;
    bookRow.appendChild(bookStatus);
    // BOOK REMOVAL BUTTON
    const bookDelete = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Remove"
    bookDelete.appendChild(deleteButton);
    bookRow.appendChild(bookDelete);

    deleteButton.addEventListener("click", () => {
        myLibrary.splice(i, 1);
        //bookList.removeChild(bookRow);
        updateLocalStorage();
        displayBooks();
      });
  }
 }



  function clearForm() {
   form.reset();
  }


  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    popUpForm.style.display = "none";
  });


  getStorage();
  displayBooks();

 

