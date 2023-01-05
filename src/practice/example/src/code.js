"use strict";

import { paintRectangle } from '../modules/canvatools/canvatools.mjs';
import { Size, Point, Rect, Drawing } from '../modules/canvas/Canvas.mjs';

//const htmlCanvas = document.getElementById('canvas');
//const canvas = htmlCanvas.getContext('2d');

//const h = htmlCanvas.clientHeight;
//const w = htmlCanvas.clientWidth;
const mbg = '#024';

//paintRectangle(0, 0, w, h, mbg, canvas);

// Código del programa

class Screen extends Drawing {
  constructor() {
    Drawing.LoadCanvas('canvas');
    super(new Rect(Point.empty, Drawing.SCREEN_SIZE), mbg);
  }

  paint() {
    let pos = this.region.point;
    let sz = this.region.size;
    Drawing.CANVAS.fillStyle = this.pigment;
    Drawing.CANVAS.fillRect(pos.x, pos.y, sz.width, sz.height);
  }
}
Drawing.LoadCanvas('canvas');
Drawing.SCREEN.paint();

let s = new Screen();
s.paint()