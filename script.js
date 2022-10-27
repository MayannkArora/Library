// Defining DOM elements
let addBook=document.querySelector("#add")
let form = document.querySelector('#form')
let submit = document.querySelector('#submit')

// Defining empty array for books
let myLibrary=[];
let newBook;

// count for array index 
let count = -1;

// Book constructor
function Book(name,author,pages,read){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
// defining functions
// Add new book to library
function addBookToLibrary(value){
    myLibrary.push(value);
    count++;
}


//Defining event listeners
addBook.addEventListener('click',()=>{
form.style.display='flex';
})

submit.addEventListener('click',()=>{
    let name = document.querySelector('#book_name').value
    let author = document.querySelector('#author_name').value
    let pages = document.querySelector('#page_number').value
    let yes = document.querySelector('#read_yes')
    let no = document.querySelector('#read_no')
    let status;
    if(yes.checked){
        status='read';
    } else if (no.checked){
        status='unread';
    }

    newBook= new Book(name,author,pages,status);
    addBookToLibrary(newBook);

})



