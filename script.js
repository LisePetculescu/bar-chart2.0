"use strict";

window.addEventListener("load", start);

function start() {
  console.log("js is running...");

  const bars = document.querySelectorAll(".bar");
  const firstBar = bars[0];

  let height = 40;

  firstBar.style.height = `${height}px`;
}
