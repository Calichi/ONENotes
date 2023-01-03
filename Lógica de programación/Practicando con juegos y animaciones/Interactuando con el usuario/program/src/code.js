"use strict";

import { fillRectangle,
         fillCircle,
         measureText,
         fillText } from '../modules/canvatools/canvatools.mjs';

const htmlCanvas = document.getElementById('canvas');
const canvas = htmlCanvas.getContext('2d');

const h = htmlCanvas.clientHeight;
const w = htmlCanvas.clientWidth;
const mbg = '#122';// Main background

fillRectangle(0, 0, w, h, mbg, canvas);

// Código del programa

// Barra superior

function getHigher(strings, font) {
  let higher = measureText("", font, canvas);
  for(const s of strings) {
    let sz = measureText(s, font, canvas);
    higher = sz.width > higher.width ? sz : higher;
  }
  return higher;
}

const msg = ['', 'Haciendo click IZQUIERDO', 'Haciendo click DERECHO'];
const pigNames = ['Azul', 'Rojo', 'Verde'];
const topBarFontSz = 16;
const topBarFont = `${topBarFontSz}px Arial`;
const topBarPadding = 6;
const topBarCellMetrics = getHigher(pigNames, topBarFont);
const topBarContentWidth = topBarCellMetrics.width;
const topBarWidth = (topBarCellMetrics.width * 3) + (topBarPadding * 4);
const topBarHeight = topBarFontSz + (topBarPadding * 2);
const topBarX = (w - topBarWidth) / 2;
const topBarY = 0;
const topBarContentOY = topBarCellMetrics.fontBoundingBoxAscent + topBarPadding;
const topBarContentOX = topBarX + (topBarPadding);

const disX1toX3 = topBarCellMetrics.width + (topBarPadding * 1.5);
const disX3toX4 = topBarCellMetrics.width + (topBarPadding);
const formY1 = topBarY;
const formY2 = formY1 + topBarHeight;
const formX1 = topBarX;
const formX2 = formX1 + disX1toX3 * 0.1;
const formX3 = formX1 + disX1toX3;
const formX4 = formX3 + disX3toX4;
const formX5 = formX4 + (disX1toX3 * 0.9);
const formX6 = formX4 + disX1toX3;

const barCntrl = [new Path2D(), new Path2D(), new Path2D()];

barCntrl[0].moveTo(formX1, formY1);
barCntrl[0].quadraticCurveTo(formX1, formY2, formX2, formY2);
barCntrl[0].lineTo(formX3, formY2);
barCntrl[0].lineTo(formX3, formY1);
barCntrl[0].closePath();

barCntrl[1].moveTo(formX3, formY1);
barCntrl[1].lineTo(formX3, formY2);
barCntrl[1].lineTo(formX4, formY2);
barCntrl[1].lineTo(formX4, formY1);
barCntrl[1].closePath();

barCntrl[2].moveTo(formX4, formY1);
barCntrl[2].lineTo(formX4, formY2);
barCntrl[2].lineTo(formX5, formY2);
barCntrl[2].quadraticCurveTo(formX6, formY2, formX6, formY1);
barCntrl[2].closePath();

//Sistema

const pigdis = '#888'
const pigments = ['#44f', '#f44', '#4f4'];
let pigsel = 0; //Pigment selector
let hitX = 0;
let hitY = 0;

function pointMouseButton(num) {
  fillText(3, topBarFontSz, msg[num], topBarFont, '#fff', canvas);
}

function drawBar() {
  fillRectangle(0, topBarY, w, topBarHeight, mbg, canvas);
  for(let i = 0, x = topBarContentOX; i < pigNames.length; i++) {
    canvas.fillStyle = i == pigsel ? pigments[i] : pigdis;
    canvas.fill(barCntrl[i]);
    fillText(x, topBarContentOY, pigNames[i], topBarFont, '#fff', canvas);
    x += topBarCellMetrics.width + (topBarPadding);
  }
}

function markClickHit(event) {
  let pressed = event.buttons > 0;
  let pigment = pressed ? pigments[pigsel] : mbg;
  let rad = pressed ? 10 : 11;
  let x = event.pageX - htmlCanvas.offsetLeft;
  let y = event.pageY - htmlCanvas.offsetTop;

  if(pressed) {
    fillCircle(x, y, rad, pigment, canvas);
    hitX = x;
    hitY = y;
  } else fillCircle(hitX, hitY, rad, pigment, canvas);

  drawBar();
  pointMouseButton(event.buttons);
}

function changeHitColor(event) {
  pigsel++;
  if(pigsel >= pigments.length) pigsel = 0;
  drawBar();
  //pointMouseButton(event.buttons);
  return false;
}

drawBar();

htmlCanvas.onmousedown = markClickHit;
htmlCanvas.onmouseup = markClickHit;
htmlCanvas.oncontextmenu = changeHitColor;