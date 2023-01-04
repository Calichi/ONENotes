"use strict";

import { fillRectangle, paintCircle } from '../modules/canvatools/canvatools.mjs';

const htmlCanvas = document.getElementById('canvas');
const canvas = htmlCanvas.getContext('2d');

const h = htmlCanvas.clientHeight;
const w = htmlCanvas.clientWidth;
const mbg = '#024';

fillRectangle(0, 0, w, h, mbg, canvas);

// Presenta una bolita sobre la pantalla
let pelletRad = 20;
let limits = {
  x: {begin: pelletRad, end: w - pelletRad},
  y: {begin: pelletRad, end: h - pelletRad}
}
let axis = 'x';
let direction = true;
let offset = {x: pelletRad, y: pelletRad};

function limitPelletOffset(value) {
  if(direction) return value > limits[axis].end ? limits[axis].end : value;
  else return value < limits[axis].begin ? limits[axis].begin : value;
}

function introducePellet() {
  let before = offset[axis];
  offset[axis] = limitPelletOffset(before);
  
  if(before != offset[axis]) {
    axis = axis == 'x' ? 'y' : 'x';
    direction = offset[axis] == limits[axis].begin;
  }

  offset[axis] += applyDirection(2);

  paintCircle(offset.x, offset.y, pelletRad, '#0f8', canvas);
}

function applyDirection(value) {
  return direction ? value : value * (-1);
}

function clearFrame(pigment) {
  fillRectangle(0, 0, w, h, pigment, canvas);
}

function updateFrame() {
  clearFrame(mbg);
  introducePellet();
}

setInterval(updateFrame, 1);