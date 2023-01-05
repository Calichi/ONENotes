"use strict";

import { paintRectangle, paintCircle,
         measureText, paintText } from '../modules/canvatools/canvatools.mjs';
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
let targetPosition = {x: targetRadMax, y: targetRadMax};
let targetOffsetUnit = {x: 0, y: 0};
let targetNewPosition = targetPosition;

function drawTarget() {
  for(let i = targetRings; i > 0; i--) {
    paintCircle(targetPosition.x, targetPosition.y, targetRadMin * i, targetPigments[i % 2], canvas);
  }
}

// Diseño del mensaje de acierto

const successHitMsg = "¡Buen tiro!";
const successHitMsgFontSz = 64;
const successHitMsgFont = `${successHitMsgFontSz}px Arial`;
const successHitMsgMetrics = measureText(successHitMsg, successHitMsgFont, canvas);
const successHitMsgW = successHitMsgMetrics.width;
const successHitMsgH = successHitMsgMetrics.fontBoundingBoxAscent;
const successHitMsgX = (w - successHitMsgW) / 2;
const successHitMsgY = (h ) / 2;
let successHitMsgTimerId = 0;

function displaySuccessHit() {
    paintText(successHitMsgX, successHitMsgY, successHitMsg, successHitMsgFont, '#6e6', canvas);
}

// Propiedades del area

const areaLimits = {
  x: {begin: targetRadMax, end: w - targetRadMax},
  y: {begin: targetRadMax, end: h - targetRadMax}
};

// Operación del programa

let pause = false;

function getRandomPosition() {
  let x = getRandomNumber(areaLimits.x.begin, areaLimits.x.end);
  let y = getRandomNumber(areaLimits.y.begin, areaLimits.y.end);
  return {x: x, y: y};
}

function setTargetOffsetProperties() {
  targetNewPosition = getRandomPosition();
  const disX = targetNewPosition.x - targetPosition.x;
  const disY = targetNewPosition.y - targetPosition.y;

  if(disX > disY) {
    const disAbs = Math.abs(disX);
    targetOffsetUnit.x = disX / disAbs;
    targetOffsetUnit.y = disY / disAbs;
  } else {
    const disAbs = Math.abs(disY);
    targetOffsetUnit.x = disX / disAbs;
    targetOffsetUnit.y = disY / disAbs;
  }
}

function determineTargetOffsetEnding() {
  let x = Math.round(targetPosition.x);
  let y = Math.round(targetPosition.y);
  if(x == targetNewPosition.x &&
     y == targetNewPosition.y) {
      setTargetOffsetProperties();
  }
}

function offsetTarget() {
  targetPosition.x += targetOffsetUnit.x;
  targetPosition.y += targetOffsetUnit.y;
  determineTargetOffsetEnding();
}

function determineTargetHint(event) {
  let x = event.pageX - htmlCanvas.offsetLeft;
  let y = event.pageY - htmlCanvas.offsetTop;
  let tL = targetPosition.x - targetRadMin;
  let tR = targetPosition.x + targetRadMin;
  let tT = targetPosition.y - targetRadMin;
  let tB = targetPosition.y + targetRadMin;

  if(x > tL && x < tR && y > tT && y < tB && !pause) {
    pause = true;
    displaySuccessHit();
    successHitMsgTimerId = setInterval(clearSuccessHitMsg, 3000);
  }
}

function clearSuccessHitMsg() {
  pause = false;
  clearInterval(successHitMsgTimerId);
}

function clearFrame() {
  paintRectangle(0, 0, w, h, mbg, canvas);
}

function updateFrame() {
  if(pause) return;

  clearFrame();
  offsetTarget();
  drawTarget();
}

htmlCanvas.onclick = determineTargetHint;
setInterval(updateFrame, 5);