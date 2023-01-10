'use strict'

import { Size } from './Size.mjs'
import { Point } from './Point.mjs';

class Rect {
  //Miembros estaticos
  static get empty() { return new Rect(Point.empty, Size.empty); }
  static create(x, y, w, h) {
    return new Rect(new Point(x, y), new Size(w, h));
  }
  //Miembros de instancia
  #_point
  #_size

  constructor(point, size) {
    this.#_point = point;
    this.#_size = size;
  }

  get point() { return this.#_point; }
  set point(value) { this.#_point = value; }
  get size() { return this.#_size; }
  set size(value) { this.#_size = value; }

  get left() { return this.#_point.x; }
  get top() { return this.#_point.y; }
  get right() { return this.#_point.x + this.#_size.width; }
  get bottom() { return this.#_point.y + this.#_size.height; }

  isInside(point) {
    return point.x > this.left && point.x < this.right &&
           point.y > this.top && point.y < this.bottom;
  }

  equal(rect) {
    return rect.point.equal(this.point) && rect.size.equal(this.size);
  }

  isEmpty() {
    return this.equal(Rect.empty);
  }
}

export { Rect };