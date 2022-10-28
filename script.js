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

    //defiinng text contents
    name.textContent= 'Book name: ';
    author.textContent='Author name: '
    pages.textContent="Pages: "
    read_button.textContent='Read'
    unread_button.textContent='Unread'
    remove.textContent='Remove'

    // adding book details
        name.textContent+=myLibrary[i].name;
        author.textContent+=myLibrary[i].author;
        pages.textContent+=myLibrary[i].pages;

        // adding button functionalities
        if(myLibrary[i].read=='read'){
            read_button.classList.add('read_illuminated')
        } else if (myLibrary[i].read=='unread'){
            unread_button.classList.add('unread_illuminated');
        }

        //adding event listeners to read and unread button to change class
        read_button.addEventListener('click',()=>{
            if(read_button.classList=='read_illuminated'){
                read_button.classList.remove('read_illuminated');
                read_button.classList.add('read_normal');
                unread_button.className='unread_normal';
            } else {
               
                read_button.classList='read_illuminated';
                unread_button.className='unread_normal';
            }
        })

        unread_button.addEventListener('click',()=>{
            if(unread_button.classList=='unread_illuminated'){
                unread_button.classList.remove('unread_illuminated');
                unread_button.classList.add('unread_normal');
                read_button.className='unread_normal';
            } else {
                unread_button.classList.remove('unread_normal');
                unread_button.classList.add('unread_illuminated');
                read_button.className='unread_normal';
            }
        })

        remove.addEventListener('click',()=>{
            let count = myLibrary[i];
            myLibrary.splice(myLibrary[i].index,1);
            // correcting the indexes for other elements
            for(let i=count; i<=myLibrary.length-1; i++){
                myLibrary[i].index-=1;
            }
            addToCard();
            count--;
        })

        //setting classes
        entry.classList.add('entry');


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


