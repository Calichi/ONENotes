"use strict";

import { fillRectangle } from '../modules/canvatools/canvatools.mjs';

const htmlCanvas = document.getElementById('canvas');
const canvas = htmlCanvas.getContext('2d');

const h = htmlCanvas.clientHeight;
const w = htmlCanvas.clientWidth;

fillRectangle(0, 0, w, h, '#122', canvas);

function showClickInfo(event) {
  console.log(event);
  alert('Ha hecho un click sobre el área canvas');
}

htmlCanvas.onclick = showClickInfo;