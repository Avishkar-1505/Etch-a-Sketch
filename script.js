const grid = document.createElement("div");
const container = document.querySelector(".container");

container.appendChild(grid);

grid.classList = "grid"

let defaultSize = 16;
const gridDim = 680;

function drawGrid(size) {
    const curDim = gridDim/size;

    for(let i=0;i<(size*size);i++){
        const square = document.createElement("div");
        square.classList = "square"
        square.style.cssText = `width: ${curDim}px; height: ${curDim}px;`;
        grid.appendChild(square);
    }

}

drawGrid(defaultSize);

const colors = ["#DAF7A6", "#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845"]


const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseover", ()=>{
        const color = colors[(Math.floor(Math.random()*10))%6];
        square.style.background = `${color}`;
    })
})



