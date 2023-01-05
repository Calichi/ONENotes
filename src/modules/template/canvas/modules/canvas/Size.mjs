'use strict';

class Size {
  //Miembros estaticos
  static get empty() { return new Size(0, 0); }
  //Miembros de instancia
  #_height;
  #_width;

  constructor(width, height) {
    this.#_height = height;
    this.#_width = width;
  }

  get height() { return this.#_height; }
  get width() {  return this.#_width; }
  set height(value) { this.#_height = value; }
  set width(value) {  this.#_width = value; }

  equal(size) {
    return size.width == this.width && size.height == this.height;
  }

  isEmpty() {
    return this.equal(Size.empty);
  }
}

export { Size };