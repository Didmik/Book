
let addNewBookButton = document.querySelector(".addBookButton");
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
    form.reset();
  });


let myLibrary = [];


function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}


  function updateLocalStorage() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  }


  const getStorage = () => {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  }



function addBookToLibrary() {
    const book = new Book(titleInput.value, authorInput.value, pagesInput.value, statusInput.value);
    myLibrary.push(book);
    updateLocalStorage();
    displayBooks();
    form.reset();
}

//addBookToLibrary("LotR", "Tolkien", "500", "read");
//addBookToLibrary("Harry Potter", "Rowling", "400", "unread");


//console.table(myLibrary);


function displayBooks() {
 //return myLibrary.map(item => item.title);
  const bookList = document.querySelector(".tableBody");
  bookList.textContent = ''; 
  for (let i = 0; i < myLibrary.length; i++) {
    const bookRow = document.createElement('tr');
    bookList.appendChild(bookRow);
    // Book title
    const bookTitle = document.createElement('td');
    bookTitle.textContent = myLibrary[i].title;
    bookRow.appendChild(bookTitle);
    // Book author
    const bookAuthor = document.createElement('td');
    bookAuthor.textContent = myLibrary[i].author;
    bookRow.appendChild(bookAuthor);
    // Book pages
    const bookPages = document.createElement('td');
    bookPages.textContent = myLibrary[i].pages;
    bookRow.appendChild(bookPages);
    // Book status button
    const bookStatus = document.createElement('td');
    const statusButton = document.createElement('button');
    statusButton.className = "statusButton";
    statusButton.textContent = myLibrary[i].status;
    bookStatus.appendChild(statusButton);
    bookRow.appendChild(bookStatus);

    statusButton.addEventListener("click", () => {
        if (myLibrary[i].status === "read") {
            myLibrary[i].status = "unread";
          } else {
            myLibrary[i].status = "read";
            }
        updateLocalStorage();
        displayBooks();
      });

    // Book removal button
    const bookDelete = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Remove"
    bookDelete.appendChild(deleteButton);
    bookRow.appendChild(bookDelete);

    deleteButton.addEventListener("click", () => {
        myLibrary.splice(i, 1);
        updateLocalStorage();
        displayBooks();
      });
  }
 }



  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    popUpForm.style.display = "none";
  });


  getStorage();
  displayBooks();

 

