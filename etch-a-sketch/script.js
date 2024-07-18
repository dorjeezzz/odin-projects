let arr = [];
const col = "black";
const container = document.querySelector("#container");

function construct(n){
    let maxdim = `${n*50}px`;
    container.style.maxWidth = maxdim;
    container.style.maxHeight = maxdim;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
            square.addEventListener("mouseover", () =>{
                square.style.backgroundColor = col;
            });
            arr.push(square);
        }
    }
}

function dell(){
    arr.forEach((square) => {
        container.removeChild(square);
        square.remove();
    });
    arr = [];
}

const btn = document.querySelector("#change_d");
btn.addEventListener("click", (e) => {
    let dim = prompt("Enter Grid Dimensions <= 100");
    if (dim > 100) dim = 100;
    dell();
    construct(dim);
})

construct(16);

object