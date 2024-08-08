const library = [];

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const button = document.querySelector("#pressed");

button.addEventListener("click", (e)=>{
    const el = document.createElement("div");
    let name = document.querySelector("#bookname");
    let title=name.textContent;
    let author = document.querySelector("#authorname");
    let number = document.querySelector("#pages");
    let read = document.querySelector("#read");

});