'use strict';

import { Margin, Rect } from './Canvas.mjs';

class Drawing {

  //Miembros estaticos

  static #_HTML_CANVAS;
  static #_CANVAS;

  static get CANVAS() { return this.#_CANVAS; }
  static get HTML_CANVAS() { return this.#_HTML_CANVAS; }

  static LoadCanvas(id) {
    Drawing.#_HTML_CANVAS = document.getElementById(id);
    Drawing.#_CANVAS = Drawing.HTML_CANVAS.getContext('2d');
  }

  static IsCanvasCreated() {
    return this.CANVAS != undefined && this.CANVAS != null;
  }

  static PaintCircle(region, pigment) {
    const r = region.size.height / 2;
    const x = region.point.x + r;
    const y = region.point.y + r;
    Drawing.CANVAS.fillStyle = pigment;
    Drawing.CANVAS.beginPath();
    Drawing.CANVAS.arc(x, y, r, 0, 2 * Math.PI);
    Drawing.CANVAS.fill();
  }

  static PaintRect(region, pigment) {
    const p = region.point;
    const s = region.size;
    Drawing.CANVAS.fillStyle = pigment;
    Drawing.CANVAS.fillRect(p.x, p.y, s.width, s.height);
  }


  //Miembros de instancia
  #_region = Rect.empty;
  #_pigment = '#fff';
  #_hidden = false;
  #loaded = false;

  constructor() {
  }

  #container = null;
  #margin = Margin.Empty;

  get margin() { return this.#margin; }
  set margin(value) { this.#margin = value; }

  get container() { return this.#container; }
  set container(value) { this.#container = value; }

  get pigment() { return this.#_pigment; }
  set pigment(value) { this.#_pigment = value; }
  get region() { return this.#_region; }
  set region(value) {this.#_region = value;}
  get hidden() { return this.#_hidden; }
  set hidden(value) { this.#_hidden = value; }

  get x() { return this.region.point.x; }
  set x(value) {
    this.region.point.x = value + this.margin.left;
    this.region.size.width = this.width - this.margin.horizontal;
  }

  get y() { return this.region.point.y; }
  set y(value) { this.region.point.y = value + this.margin.top; }

  get width() { return this.region.size.width; }
  set width(value) {
    this.region.size.width = value - this.margin.horizontal;
    this.region.point.x = this.x + this.margin.left;
  }

  get height() { return this.region.size.height; }
  set height(value) { this.region.size.height = value - this.margin.vertical; }

  isVisible() {
    return this.#loaded && !this.hidden && Drawing.IsCanvasCreated();
  }

  #c = 0;
  paint() {
    this.#c++; console.log(this.#c);
  }

  loading() {
    this.#loaded = true;
  }

  resolveClick(point) {
    if(this.region.isInside(point)) {
      return this.click(point);
    }
    return false;
  }

  resolveMouseMove(point) {
    if(this.region.isInside(point)) {
      return this.mouseMove(point);
    }
    return false;
  }

  click(point) {
    return false;
  }

  mouseMove(point) {
    return false;
  }
}

export { Drawing };