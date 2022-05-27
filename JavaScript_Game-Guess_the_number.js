"use strict";
let Random = (min, max) => Math.round(Math.random() * (max - min) + min);
let winner = Random(1, 20);
let Point = 20;
let TheBest = 0;
function MessageDispley(message) {
  document.querySelector(".guess-message").textContent = message;
}

function Game() {
  let TRY = Number(document.querySelector(".number-input").value);

  if (!TRY) {
    MessageDispley("Right number");
    // No number
  } else if (TRY !== winner) {
    if (Point > 1) {
      document.querySelector(".guess-message").textContent =
        TRY > winner ? "Too Hight" : "Too smole";
      Point = Point - 1;
    } else {
      document.querySelector(".guess-message").textContent = "Game Over";
      Point = 0;
    }
    // Too small
  } else if (TRY === winner) {
    document.querySelector(".guess-message").textContent = "Right!";
    document.querySelector(".question").textContent = TRY;
    document.querySelector("body").style.background = "green";
    document.querySelector(".question").style.fontSize = "10rem";
    if (Point > TheBest) {
      TheBest = Point;
      document.querySelector(".highscore").textContent = TheBest;
    }
    // Win
  }
  document.querySelector(".score").textContent = Point;
}

function Again() {
  document.querySelector("body").style.background = "black";
  document.querySelector(".question").textContent = "???";
  document.querySelector(".question").style.fontSize = "4rem";
  document.querySelector(".guess-message").textContent = "Начни Угадывать!";
  Point = 20;
  document.querySelector(".score").textContent = Point;
  winner = Random(1, 20);
  console.log(winner);
  document.querySelector(".number-input").value = "";
}

function DelClass() {
  document.querySelector(".Bg-for-button").classList.remove("Hide");
  document.querySelector(".Ruls-Text").classList.remove("Hide");
}

function AddClass() {
  document.querySelector(".Bg-for-button").classList.add("Hide");
  document.querySelector(".Ruls-Text").classList.add("Hide");
}

document.querySelector(".check").addEventListener("click", Game);
document.querySelector(".again").addEventListener("click", Again);
document.querySelector(".ruls").addEventListener("click", DelClass);
document.querySelector(".Btn-Close").addEventListener("click", AddClass);
