'use strict'

import { Drawing, DrawingGroup, Rect, Size, Point } from './Canvas.mjs'

class Screen extends DrawingGroup {
  static #_SIZE;
  static #_DEFAULT;

  static get SIZE() { return this.#_SIZE};
  static get DEFAULT() { return this.#_DEFAULT; }

  static LoadCanvas(id) {
    super.LoadCanvas(id);
    const htmlCanvas = Drawing.HTML_CANVAS;
    this.#_SIZE = new Size(htmlCanvas.clientWidth, htmlCanvas.clientHeight);
    this.#_DEFAULT = new Screen();
  }

  constructor() {
    super();
    this.region = new Rect(Point.empty, Screen.SIZE);
    this.pigment = '#024';
  }

  paint() {
    const canvas = Drawing.CANVAS;
    const pos = this.region.point;
    const sz = this.region.size;
    canvas.fillStyle = this.pigment;
    canvas.fillRect(pos.x, pos.y, sz.width, sz.height);
    super.paint();
  }
}

export { Screen };