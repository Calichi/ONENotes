"use strict";

import { paintRectangle, paintCircle } from '../modules/canvatools/canvatools.mjs';
import { getRandomNumber } from '../modules/randomNumber.mjs';

const htmlCanvas = document.getElementById('canvas');
const canvas = htmlCanvas.getContext('2d');

const h = htmlCanvas.clientHeight;
const w = htmlCanvas.clientWidth;
const mbg = '#024';

paintRectangle(0, 0, w, h, mbg, canvas);

// Código del programa

// Diseño del objetivo (target)

const targetPigments = ['#fafafa', '#f66'];
const targetRadMin = h * 0.03;
const targetRings = 3;
const targetRadMax = targetRadMin * targetRings;
const targetPosition = {x: targetRadMax, y: targetRadMax};

function drawTarget(x, y) {
  for(let i = targetRings; i > 0; i--) {
    paintCircle(x, y, targetRadMin * i, targetPigments[i % 2], canvas);
  }
}

// Propiedades del area

const areaLimits = {
  x: {begin: targetRadMax, end: w - targetRadMax},
  y: {begin: targetRadMax, end: h - targetRadMax}
};

// Operación del programa

targetPosition.x = getRandomNumber(areaLimits.x.begin, areaLimits.x.end);
targetPosition.y = getRandomNumber(areaLimits.y.begin, areaLimits.y.end);

drawTarget(targetPosition.x, targetPosition.y);