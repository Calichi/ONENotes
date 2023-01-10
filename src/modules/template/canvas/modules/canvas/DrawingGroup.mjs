'use strict'

import { Drawing } from './Canvas.mjs';

class DrawingGroup extends Drawing {
  #_items = [];

  constructor() {
    super();
  }

  get items() { return this.#_items; }

  noItems() {
    return this.#_items == undefined || this.#_items == null || this.#_items.length == 0;
  }

  addItem(drawing) {
    this.#_items.push(drawing);
    if(this.isVisible()) drawing.paint();
  }

  removeItem(drawing) {
    this.#_items.slice(this.#_items.indexOf(drawing), 1);
    this.paint();
  }

  paint() {
    super.paint();
    for(let item of this.#_items) {
      item.paint();
    }
  }
}

export { DrawingGroup };