const library = [];
let i = 0;

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read){
    const bk = new Book(name, author, pages, read);
    library.push(bk);
    library[i++] = bk;
    return bk;
}

const container = document.querySelector(".cardcontainer");
const button = document.querySelector("#pressed");

function del(index){
    library.splice(1,index);
}

function changeread(index){
    if (library[index].read) library[index].read = false;
    else library[index].read = true;
}

button.addEventListener("click", (e)=>{
    let title = document.querySelector("#bookname").value;
    let author = document.querySelector("#authorname").value;
    let pgno = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    if (title.length == 0 || author.length == 0 || pgno == 0){
        e.preventDefault();
    }
    let variable_name = "";
    if (read) variable_name = "Read";
    else variable_name = "Not Read";
    const bk = addBookToLibrary(title,author,pgno,read);
    div.classList.add("card");
    library.forEach((book, idx) =>{
        const book = document.createElement("div");
        book.innerHTML = `
            <h3>Title: ${bk.name}</h3>
            <h4>Author: ${bk.author}</h4>
            <p>Pages: ${bk.pages}</p>
            <p>${variable_name}</p>
            <button onclick="del(${idx})">Remove</button>
            <button onclick="changeread(${idx})">Read<button>`
        container.appendChild(book);
    });
    container.appendChild(div);
});