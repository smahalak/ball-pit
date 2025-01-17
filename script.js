"use strict";

const text = document.querySelector(".title");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

// const onTick = () => {
//   const span = text.querySelectorAll("span")[char];
//   span.classList.add("fade");
//   char++;
//   if (char === splitText.length) {
//     complete();
//     return;
//   }
// };
// not sure where to call onTick when its an arrow

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

let complete = () => {
  clearInterval(timer);
  timer = null;
};
