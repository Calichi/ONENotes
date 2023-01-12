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
    drawing.container = this;
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

  loading() {
    super.loading();

    if(this.noItems()) return;

    for(let item of this.#_items) {
      item.loading();
    }
  }

  resolveClick(point) {
    if(this.region.isInside(point)) {
      return this.deliverClick(point);
    }
    return false;
  }

  deliverClick(point) {
    if(!this.noItems()) {
      for(const item of this.#_items) {
        if(item.resolveClick(point)) return true;
      }
    }

    return this.click(point);
  }

  resolveMouseMove(point) {
    if(this.region.isInside(point)) {
      return this.deliverMouseMove(point);
    }
    return false;
  }

  deliverMouseMove(point) {
    if(!this.noItems()) {
      for(const item of this.#_items) {
        if(item.resolveMouseMove(point)) return true;
      }
    }

    return this.mouseMove(point);
  }
}

export { DrawingGroup };