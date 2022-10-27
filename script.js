// Defining DOM elements
let addBook=document.querySelector("#add");
let form = document.querySelector('#form')

// Defining empty array for books
let myLibrary=[];

// Book constructor
function Book(name,author,pages,read){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

// Add new book to library
function addBookToLibrary(value){
    myLibrary.push(value);
}

//Defining event listeners
addBook.addEventListener('click',()=>{
form.style.display='block';
})