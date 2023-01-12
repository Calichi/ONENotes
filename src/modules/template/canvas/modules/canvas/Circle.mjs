'use strict'

import { Drawing, Rect } from './Canvas.mjs';

class Circle extends Drawing {
  constructor() {
    super();
    this.region = Rect.create(0, 0, 20, 20);
    this.pigment = '#f00';
  }
  
  paint() {
    if(!this.isVisible()) return;

    const canvas = Drawing.CANVAS;
    const pos = this.region.point;
    const sz = this.region.size;

    const rad = sz.width / 2;
    canvas.fillStyle = this.pigment;
    canvas.beginPath();
    canvas.arc(pos.x + rad, pos.y + rad, rad, 0, 2 * Math.PI);
    canvas.fill();
  }

  loading() {
    super.loading();
  }
}

export { Circle };