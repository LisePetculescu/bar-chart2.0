"use strict";

window.addEventListener("load", start);

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2,
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function start() {
  console.log("js is running...");

  displayAllBars();
}

function displayAllBars() {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < 40; i++) {
    const aBar = bars[i];
    let height = (data[i] / 32) * 100;
    aBar.style.height = `${height}px`;
  }
}
