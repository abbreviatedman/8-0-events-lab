// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

document
  .querySelectorAll(".color")
  .forEach((color) =>
    color.addEventListener(
      "click",
      ({ target }) =>
        (document.querySelector("#current-color").style.background =
          target.style.background)
    )
  );

document
  .querySelectorAll(".cell")
  .forEach((cell) =>
    cell.addEventListener(
      "click",
      ({ target }) =>
        (target.style.background =
          document.querySelector("#current-color").style.background)
    )
  );

document
  .querySelector("#erase")
  .addEventListener("click", () =>
    document
      .querySelectorAll(".cell")
      .forEach((cell) => (cell.style.background = "white"))
  );
