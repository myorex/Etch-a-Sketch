const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {
  container.innerHTML = ""; // Clear old grid

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.dataset.darkness = 0;

    square.addEventListener("mouseenter", () => {
      let darkness = parseInt(square.dataset.darkness);

      if (darkness === 0) {
        // First interaction → random color
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }

      if (darkness < 10) {
        darkness++;
        square.dataset.darkness = darkness;
        square.style.filter = `brightness(${100 - darkness * 10}%)`;
      }
    });

    container.appendChild(square);
  }
}

resizeBtn.addEventListener("click", () => {
  let newSize = prompt("Enter number of squares per side (max 100):");

  if (newSize === null) return;

  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});

// Default grid
createGrid(16);
