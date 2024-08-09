const library = [];

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read){
    const bk = new Book(name, author, pages, read);
    library.push(bk);
}

const container = document.querySelector(".cardcontainer");

const button = document.querySelector("#pressed");

button.addEventListener("click", (e)=>{
    let title = document.querySelector("#bookname").value;
    let author = document.querySelector("#author_name").value;
    let pgno = document.querySelector("#page_no").value;
    let read = document.querySelector("#read").value;
    addBookToLibrary(title,author,pgno,read);
    
});