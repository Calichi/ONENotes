'use strict';

import { Rect } from './Canvas.mjs';

class Drawing {
  //Miembros estaticos
  static #_HTML_CANVAS;
  static #_CANVAS;

  static get CANVAS() { return this.#_CANVAS; }
  static get HTML_CANVAS() { return this.#_HTML_CANVAS; }
  static set HTML_CANVAS(value) {
    this.#_HTML_CANVAS = value;
    this.#_CANVAS = value.getContext('2d');
  }

  static LoadCanvas(id) {
    Drawing.HTML_CANVAS = document.getElementById(id);
  }

  static IsCanvasCreated() {
    return this.CANVAS != undefined && this.CANVAS != null;
  }
  //Miembros de instancia
  #_region = Rect.empty;
  #_pigment = '#fff';
  #_hidden = false;

  constructor() {
  }

  get pigment() { return this.#_pigment; }
  set pigment(value) { this.#_pigment = value; }
  get region() { return this.#_region; }
  set region(value) {this.#_region = value;}
  get hidden() { return this.#_hidden; }
  set hidden(value) { this.#_hidden = value; }

  get x() { return this.region.point.x; }
  set x(value) { this.region.point.x = value;}

  get y() { return this.region.point.y; }
  set y(value) { this.region.point.y = value; }

  get width() { return this.region.size.width; }
  set width(value) { this.region.size.width = value;}

  get height() { return this.region.size.height; }
  set height(value) { this.region.size.height = value; }

  isVisible() {
    return !this.hidden && Drawing.IsCanvasCreated();
  }

  paint() {}

}

export { Drawing };