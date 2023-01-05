'use strict'

import { Drawing } from './Canvas.mjs';

class DrawingGroup extends Drawing {
  #_items = [];

  constructor() {
    super();
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