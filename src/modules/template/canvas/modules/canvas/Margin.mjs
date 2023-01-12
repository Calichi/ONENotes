'use strict';

class Margin {
//Miembros estaticos

  static #Empty = Margin.Create(0);

  static get Empty() { return this.#Empty; }

  static Create(base) {
    return new Margin(base, base, base, base);
  }

//Miembros de instancia

  constructor(l, r, t, b) {
    this.#l = l;
    this.#r = r;
    this.#t = t;
    this.#b = b;
  }

  #l;
  #r;
  #t;
  #b;

  get left() { return this.#l; }
  get right() { return this.#r; }
  get top() { return this.#t; }
  get bottom() { return this.#b; }
  get horizontal() { return this.left + this.right; }
  get vertical() { return this.top + this.bottom; }

}

export { Margin };