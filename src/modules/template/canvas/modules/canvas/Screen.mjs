'use strict'

import { Drawing, DrawingGroup, Rect, Size, Point, StackPanel } from './Canvas.mjs'

class Screen extends DrawingGroup {

  static #DEFAULT;
  static get DEFAULT() { return this.#DEFAULT; }

  static LoadCanvas(id) {
    super.LoadCanvas(id);
    this.#DEFAULT = new Screen();
    Drawing.HTML_CANVAS.onclick = this.CLICK_HANDLER;
    Drawing.HTML_CANVAS.onmousemove = this.MOUSE_MOVE_HANDLER;

    return this.DEFAULT;
  }

  static CLICK_HANDLER(event) {
    const htmlCanvas = Drawing.HTML_CANVAS;
    const x = event.pageX - htmlCanvas.offsetLeft;
    const y = event.pageY - htmlCanvas.offsetTop;
    const p = new Point(x, y);
    Screen.DEFAULT.resolveClick(p);
  }

  static MOUSE_MOVE_HANDLER(event) {
    const htmlCanvas = Drawing.HTML_CANVAS;
    const x = event.pageX - htmlCanvas.offsetLeft;
    const y = event.pageY - htmlCanvas.offsetTop;
    const p = new Point(x, y);
    Screen.DEFAULT.resolveMouseMove(p);
  }

  constructor() {
    super();
    const w = Drawing.HTML_CANVAS.clientWidth;
    const h = Drawing.HTML_CANVAS.clientHeight;
    this.limit = w;
    this.region = Rect.create(0, 0, w, h);
    this.pigment = '#024';
  }

  paint() {
    super.paint();
    const canvas = Drawing.CANVAS;
    const pos = this.region.point;
    const sz = this.region.size;
    canvas.strokeStyle = this.pigment;
    canvas.strokeRect(pos.x, pos.y, sz.width, sz.height);
  }

  show() {
    this.loading();
    this.paint();
  }

  mouseMove(point) {
    
  }
}

export { Screen };