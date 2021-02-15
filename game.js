"use strict";

const boy = document.querySelector(".boy");
const rock = document.querySelector(".rock");
const score = document.querySelector(".score");

const jump = () => {
  boy.classList.add("jump-animation");
  setTimeout(() => boy.classList.remove("jump-animation"), 500);
};

jump();

document.addEventListener("keypress", (event) => {
  //if statement prevents user from starting another jump before animation is finished
  if (!boy.classList.contains("jump-animation")) {
    jump();
  }
});

//============GAME Loop============================

setInterval(() => {
  score.textContent++;
  const boyTop = parseInt(window.getComputedStyle(boy).getPropertyValue("top"));
  //can see how the top of the boy changes in pixels from the top

  const rockLeft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left")
  );
  //can see how the number of pixels that the rock moves left

  if (rockLeft < 0) {
    rock.style.display = "none";
  } else {
    rock.style.display = "";
    // this just removes the none value so you can see the rock again
  }

  if (rockLeft < 50 && rockLeft > 0 && boyTop > 150) {
    alert(
      "Game Over! You got a score of: " + score.textContent + "\n\nPlay again?"
    );
    location.reload();
  }
}, 50); // we are updating the state of the game every 50 milli seconds
