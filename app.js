const wrapper = document.querySelector(".wrapper");
const button = document.querySelector("button");

function createRows(size) {
    const squareSize = 400 / size;

    wrapper.style.width = '400px';
    wrapper.style.height = '400px';
    
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.className = "square";
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        wrapper.appendChild(div);
    }

    const boxes = document.querySelectorAll(".square");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", (event) => {
            event.target.style.background = "black";
        });
    });
}

createRows(16);

button.addEventListener("click", () => {
    const size = prompt("How big would you like x to be, where the grid is made up of x by x squares?");
    size = parseInt(size, 10);

    if (isNaN(size) || size <= 0 || size > 100) {
        alert("Please enter a number between 1 and 100.");
        return; // Exit the function if the input is invalid
    }

    wrapper.innerHTML = '';
    createRows(size);
});