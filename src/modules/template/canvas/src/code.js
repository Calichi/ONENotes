"use strict";

import { fillRectangle } from '../modules/canvatools/canvatools.mjs';

const htmlCanvas = document.getElementById('canvas');
const canvas = htmlCanvas.getContext('2d');

const h = htmlCanvas.clientHeight;
const w = htmlCanvas.clientWidth;

fillRectangle(0, 0, w, h, '#122', canvas);