let hasGeneratedCircles = false;
let intervalID;

const colors = [
  "red",
  "blue",
  "green",
  "violet",
  "purple",
  "orange",
  "pink",
  "cyan",
];

function generateCircle() {
  const board = document.getElementById("game-board");
  board.innerHTML = "";

  for (let i = 0; i < 25; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");

    // Add click event to change color
    circle.addEventListener("click", () => {
      let newColor = colors[Math.floor(Math.random() * colors.length)];
      circle.style.backgroundColor = newColor;
    });

    board.appendChild(circle);
  }
  hasGeneratedCircles = true;
}

function flashBoard() {
  if (!hasGeneratedCircles) generateCircle();
  if (intervalID) clearInterval(intervalID);
  const board = document.getElementById("game-board");
  intervalID = setInterval(() => {
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    board.style.backgroundColor = newColor;
  }, 200);

  setTimeout(() => {
    clearInterval(intervalID);
    board.style.backgroundColor = "rgba(255, 242, 230, 0.5)";
    intervalID = null;
  }, 5000);
}

function resetBoard() {
  const board = document.getElementById("game-board");
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
  }
  board.innerHTML = "";
  board.style.backgroundColor = "rgba(255, 242, 230, 0.5)";
  hasGeneratedCircles = false;
}
