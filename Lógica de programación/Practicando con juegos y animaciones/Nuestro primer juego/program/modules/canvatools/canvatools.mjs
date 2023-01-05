"use strict";

function getCanvasById(id) {
  let htmlElement = document.getElementById(id);
  return htmlElement.getContext('2d');
}

function paintCircle(x, y, r, fill, canvas) {
  canvas.fillStyle = fill;
  canvas.beginPath();
  canvas.arc(x, y, r, 0, 2 * Math.PI);
  canvas.fill();
}

function paintRectangle(x, y, w, h, fill, canvas) {
  canvas.fillStyle = fill;
  canvas.fillRect(x, y, w, h);
}

function strokeRectangle(x, y, w, h, stroke, canvas) {
  canvas.strokeStyle = stroke;
  canvas.strokeRect(x, y, w, h);
}

function paintText(x, y, text, font, fill, canvas) {
  canvas.font = font;
  canvas.fillStyle = fill;
  canvas.fillText(text, x, y);
}

function measureText(text, font, canvas) {
  canvas.font = font;
  return canvas.measureText(text);
}

function drawConnection(x1, x2, x3, y1, y2, stroke, canvas) {
  canvas.strokeStyle = stroke;
  canvas.beginPath();
  canvas.moveTo(x1, y2);
  canvas.lineTo(x2, y2);
  canvas.lineTo(x2, y1);
  canvas.lineTo(x3, y1);
  canvas.stroke();
}

export { getCanvasById, paintCircle, strokeRectangle,
         paintRectangle,
         paintText, measureText,
         drawConnection };