// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colors = document.querySelectorAll(".color");
const cells = document.querySelectorAll(".cell");
const eraser = document.querySelector("#eraser");
const currentColor = document.querySelector("#current-color");

colors.forEach((color) =>
  color.addEventListener(
    "click",
    ({ target }) => (currentColor.style.background = target.style.background)
  )
);

cells.forEach((cell) =>
  cell.addEventListener(
    "click",
    ({ target }) => (target.style.background = currentColor.style.background)
  )
);

eraser.addEventListener("click", () =>
  cells.forEach((cell) => (cell.style.background = "white"))
);
