'use strict';

import { Size } from './Size.mjs'

class Point {
  //Miembros estaticos
  static get empty() { return new Point(0, 0); }

  // Miembros de instancia
  #_x;
  #_y;

  constructor(x, y) {
    this.#_x = x;
    this.#_y = y;
  }

  get x() { return this.#_x; }
  get y() { return this.#_y; }
  set x(value) { this.#_x = value; }
  set y(value) { this.#_y = value; }

  distance(point) {
    let w = point.x - this.x;
    let h = point.y - this.y;
    return new Size(w, h);
  }

  equal(point) {
    return point.x == this.x && point.y == this.y;
  }

  isEmpty() {
    return this.equal(Point.empty);
  }

  clone() {
    return new Point(this.x, this.y);
  }

  toSize() { return new Size(this.x, this.y); }
}

export { Point };