// Defining DOM elements
let addBook=document.querySelector("#add")
let form = document.querySelector('#form')
let submit = document.querySelector('#submit')
let card = document.querySelector('#card')

// Defining empty array for books
let myLibrary=[];
let newBook;

// count for array index 
let count = -1;

// Book constructor
function Book(index,name,author,pages,read){
    this.index=index;
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
// defining functions
// Add new book to library
function addBookToLibrary(value){
    myLibrary.push(value);
    
}

//function to add book details to card
function addToCard(){

   card.textContent='';

    for(let i = 0; i < myLibrary.length; i++){

         //defining book detail card elements
    let entry = document.createElement('div');
    let name = document.createElement('div');
    let author = document.createElement('div');
    let pages = document.createElement('div');
    let read_button = document.createElement('button');
    let unread_button = document.createElement('button');
    let remove = document.createElement('button');
    let buttonHolder = document.createElement('div')    
    //
    name.textContent= 'Book name: ';
    author.textContent='Author name: '
    pages.textContent="Pages: "
    read_button.textContent='Read'
    unread_button.textContent='Unread'
    remove.textContent='Remove'

        name.textContent+=myLibrary[i].name;
        author.textContent+=myLibrary[i].author;
        pages.textContent+=myLibrary[i].pages;


        //appending divs
        buttonHolder.appendChild(read_button);
        buttonHolder.appendChild(unread_button);
        buttonHolder.appendChild(remove);
        entry.appendChild(name);
        entry.appendChild(author);
        entry.appendChild(pages);
        entry.appendChild(buttonHolder);

        card.appendChild(entry);
        
    }

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
    count++;
    newBook= new Book(count,name,author,pages,status);
    addBookToLibrary(newBook);

    addToCard();
    name='';
    author='';
    pages='';
    yes='';
    no='';
    form.style.display='none';
    
})



