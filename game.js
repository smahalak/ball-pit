"use strict";
// let test = document.querySelector(".test");

// let startBtn = document.querySelector(".start-btn");
// let ballPit = document.querySelector("ball-pit");

// startBtn.addEventListener("click", () => {
//   let newDiv = document.createElement("div");
//   newDiv.classList.add("ball");

//   test.append(newDiv);
// });

// test.addEventListener("click", (e) => {
//   if (e.target.classList.contains("ball")) {
//     e.target.remove();
//   }
// });

// const boy = document.querySelector(".boy");
// const rock = document.querySelector(".rock");
// const score = document.querySelector(".score");

// function jump() {
//   boy.classList.add("jump-animation");
//   setTimeout(() => boy.classList.remove("jump-animation"), 500);
// }

// document.addEventListener("keypress", (event) => {
//   if (!boy.classList.contains("jump-animation")) {
//     jump();
//   }
// });

// setInterval(() => {
//   const boyTop = parseInt(window.getComputedStyle(boy).getPropertyValue("top"));
//   const rockLeft = parseInt(
//     window.getComputedStyle(rock).getPropertyValue("left")
//   );
//   score.innerText++;

//   if (rockLeft < 0) {
//     rock.style.display = "none";
//   } else {
//     rock.style.display = "";
//   }

//   if (rockLeft < 50 && rockLeft > 0 && boyTop > 150) {
//     alert("You got a score of: " + score.innerText + "\n\nPlay again?");
//     location.reload();
//   }
// }, 50);
