const grid = document.createElement("div");
const container = document.querySelector(".container");

container.appendChild(grid);

grid.classList = "grid"

const defaultSize = 16;
const gridDim = 680;

const colors = ["#DAF7A6", "#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845"]

let customeSize = 0;

function drawGrid(size) {
    const curDim = gridDim/size;

    for(let i=0;i<(size*size);i++){
        const square = document.createElement("div");
        square.classList = "square"
        square.style.cssText = `width: ${curDim}px; height: ${curDim}px;`;
        grid.appendChild(square);
        square.addEventListener("mouseover", ()=>{
            const color = colors[(Math.floor(Math.random()*10))%6];
            square.style.background = `${color}`;
        })
    }

}

drawGrid(defaultSize);




// const squares = document.querySelectorAll(".square");

// squares.forEach((square) => {
//     square.addEventListener("mouseover", ()=>{
//         const color = colors[(Math.floor(Math.random()*10))%6];
//         square.style.background = `${color}`;
//     })
// })


function resetGrid(size) {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.remove();
    })
    drawGrid(size);
}


const resetBtn = document.querySelector("#reset");
const custSz = document.querySelector("#customSz");

resetBtn.addEventListener("click", ()=>{
    if(customeSize!=0){
        resetGrid(customeSize);
    }
    else{
        resetGrid(defaultSize);
    }
})

custSz.addEventListener("click", ()=>{
    customeSize = Number(prompt("Enter Grid Size (Less than 100 units)"));
    console.log(customeSize);
    if(customeSize===0){
        customeSize = defaultSize;
    }

    if(customeSize > 100){
        customeSize = 100;
    }

    resetGrid(customeSize);
})