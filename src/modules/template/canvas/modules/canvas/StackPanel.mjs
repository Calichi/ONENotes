'use strict'

import { DrawingGroup, Drawing, Point } from './Canvas.mjs'

class StackPanel extends DrawingGroup {
  #sep; // Separation
  #lim; // Limit
  #iOffset; // Item offset
  #rowHeight;
  #increaseWidth;

  constructor() {
    super();
    this.separation = 5;
    this.pigment = '#ccc';

    //this.initLayout();
  }

  get limit() { return this.#lim; }
  set limit(value) { this.#lim = value; }

  get separation() { return this.#sep; }
  set separation(value) {
    this.#sep = value;
    this.reorganize();
  }

  addItem(drawing) {
    if(this.noItems()) { this.#initLayout(); }
    this.#placeItem(drawing);
    super.addItem(drawing);
  }

  #getReachedX(drawing) {
    return this.#iOffset.x + drawing.width + this.#sep;
  }

  #placeItem(drawing) {
    const exceededLimit = this.#getReachedX(drawing) > this.#lim;

    if(exceededLimit) {
      
      this.#increaseWidth = false;
      this.#iOffset.x  = this.#sep;
      this.#iOffset.y = this.height;
      this.#rowHeight = 0;
    }

    if(this.#increaseWidth) { this.width = this.#getReachedX(drawing); }
    this.#updateRowHeight(drawing);
    drawing.region.point = this.#iOffset.clone();
    this.#iOffset.x = this.#getReachedX(drawing);
  }

  #initLayout() {
    this.#iOffset = new Point(this.#sep, this.#sep);
    this.region.size = this.#iOffset.toSize();
    this.#rowHeight = 0;
    this.#increaseWidth = true;
  }
  //

  reorganize() {
    if(this.noItems()) return; // Si no hay elementos, regresar

    // Iterar elementos
    for(const item of this.items) {
      this.placeItem(item);
    }
  }

  #updateRowHeight(drawing) {
    const oldValue = this.#rowHeight;
    const newValue = drawing.height;
    const condition = newValue > oldValue;

    if(condition) {
      const diference = newValue - oldValue;
      this.height += diference;
      if(this.#rowHeight == 0) this.height += this.#sep;
      this.#rowHeight = newValue;
    }
  }

  paint() {
    if(!this.isVisible()) return;

    const canvas = Drawing.CANVAS;
    canvas.fillStyle = this.pigment;
    canvas.fillRect(this.x, this.y, this.width, this.height);

    super.paint();
  }
}

export { StackPanel };

// Altura del control con respecto a la altura del control más alto