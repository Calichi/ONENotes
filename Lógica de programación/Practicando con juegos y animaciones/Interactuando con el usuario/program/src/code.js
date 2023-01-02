"use strict";

import { fillRectangle,
         fillCircle } from '../modules/canvatools/canvatools.mjs';

const htmlCanvas = document.getElementById('canvas');
const canvas = htmlCanvas.getContext('2d');

const h = htmlCanvas.clientHeight;
const w = htmlCanvas.clientWidth;
const mbg = '#122';// Main background

fillRectangle(0, 0, w, h, mbg, canvas);

// Código del programa

function markClickHit(event) {
  let pressed = event.buttons > 0;
  let pigment = pressed ? '#6f6' : mbg;
  let rad = pressed ? 10 : 11;
  let x = event.pageX - htmlCanvas.offsetLeft;
  let y = event.pageY - htmlCanvas.offsetTop;

  fillCircle(x, y, rad, pigment, canvas);
  console.log(event.buttons)
}

htmlCanvas.onmousedown = markClickHit;
htmlCanvas.onmouseup = markClickHit;