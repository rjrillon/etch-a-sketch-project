console.log("JS loaded..");

const gridContainer = document.querySelector(".grid-container");

// Dynamically creating grid
for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  gridContainer.appendChild(square);
}

// Event delegation:
// Add a SINGLE event listener to the grid container
gridContainer.addEventListener("mouseover", event => {
  //Check if the hovered element is a square, then change color.
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = "red";
  }
});
