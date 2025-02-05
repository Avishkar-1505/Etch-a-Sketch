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


