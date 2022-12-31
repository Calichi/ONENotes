"use strict";

function getCanvasById(id) {
  let htmlElement = document.getElementById(id);
  return htmlElement.getContext('2d');
}

function drawCircle(x, y, r, fill, canvas) {
  canvas.fillStyle = fill;
  canvas.beginPath();
  canvas.arc(x, y, r, 0, 2 * Math.PI);
  canvas.fill();
}

export { getCanvasById, drawCircle };