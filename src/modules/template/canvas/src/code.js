"use strict";

import { paintRectangle } from '../modules/canvatools/canvatools.mjs';

const htmlCanvas = document.getElementById('canvas');
const canvas = htmlCanvas.getContext('2d');

const h = htmlCanvas.clientHeight;
const w = htmlCanvas.clientWidth;
const mbg = '#024';

paintRectangle(0, 0, w, h, mbg, canvas);

// Código del programa