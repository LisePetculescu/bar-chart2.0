"use strict";

window.addEventListener("load", start);

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2,
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function start() {
  console.log("js is running...");

  const bars = document.querySelectorAll(".bar");
  const firstBar = bars[0];

  let height = (data[0] / 32) * 100;

  firstBar.style.height = `${height}px`;
}
