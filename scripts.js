function drawGrid(gridSize) {
    grid.style.setProperty("--grid-rows", gridSize);
    grid.style.setProperty("--grid-cols", gridSize);
    for (let c = 0; c < (gridSize * gridSize); c++) {
        let square = document.createElement("div");
        grid.appendChild(square).className = "grid-square";
    }
}

function changeValue(e) {
    let value = e.target.value;
    gridSizeValue.innerHTML = `${value} x ${value}`;
}

function setGridSize(value) {
    currentSize = value;
}

function redraw() {
    grid.innerHTML = ""; //clears grid
    drawGrid(currentSize);
}

function changeGridSize(e) {
    let value = e.target.value;
    setGridSize(value);
    // changeValue(e);
    redraw();
}



const DEFAULT_GRID_SIZE = 16;
let grid = document.querySelector(".grid");
drawGrid(DEFAULT_GRID_SIZE);
let gridSizeValue = document.querySelector(".slider-value");
let gridSizeSlider = document.querySelector(".slider");
gridSizeSlider.addEventListener("mousemove", changeValue);
gridSizeSlider.addEventListener("change", changeGridSize);
let currentSize = DEFAULT_GRID_SIZE;