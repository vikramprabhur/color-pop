let intervalID;
const board = document.getElementById("game-board");

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "maroon",
  "lime",
  "magenta",
  "teal",
  "indigo",
  "gold",
  "coral",
  "turquoise",
  "skyblue",
  "violet",
  "chartreuse",
  "salmon",
  "hotpink",
  "aquamarine",
  "brown",
  "orchid",
  "indianred",
  "plum",
];

function generateCircle() {
  board.innerHTML = "";

  for (let i = 0; i < 25; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    board.appendChild(circle);
  }
}

// Event listener for the game board to track clicks
board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    let currentColor = event.target.style.backgroundColor;
    let newAvailableColors = colors.filter((color) => color !== currentColor);

    if (newAvailableColors.length > 0) {
      let newColor =
        newAvailableColors[
          Math.floor(Math.random() * newAvailableColors.length)
        ];
      e.target.style.backgroundColor = newColor;
      e.target.style.transition = "background-color 0.3s ease";
    }
  }
});

// Changes background color of board to give flash effect
function flashBoard() {
  if (intervalID) clearInterval(intervalID);
  const board = document.getElementById("game-board");
  intervalID = setInterval(() => {
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    board.style.backgroundColor = newColor;
    board.style.transition = "background-color 0.3s ease";
  }, 250);

  setTimeout(() => {
    clearInterval(intervalID);
    board.style.backgroundColor = "rgba(255, 242, 230, 0.5)";
    board.style.transition = "background-color 0.3s ease";
    intervalID = null;
  }, 5000);
}

// Resets the game board
function resetBoard() {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
  }
  board.innerHTML = "";
  board.style.backgroundColor = "rgba(255, 242, 230, 0.5)";
  generateCircle();
}

// Initialize circles on page load
document.addEventListener("DOMContentLoaded", generateCircle);
