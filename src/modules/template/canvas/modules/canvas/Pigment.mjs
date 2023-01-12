"use strict";

import { Circle, Drawing } from './canvas.mjs';

class Pigment extends Circle {
  clickAction = null;

  constructor() {
    super();
    this.clickAction = null;
  }

  #runClickAction() {
    if(this.clickAction == null) return;

    this.clickAction(this);
  }

  changeVisualState() {
    this.#checked = !this.#checked;
    if(this.#checked) {
      const region = this.region.expand(4);
      Drawing.PaintRect(region.expand(1), this.container.pigment);
      Drawing.PaintCircle(region, '#fffa');
      this.paint();
    } else {
      const region = this.region.expand(5);
      Drawing.PaintRect(region, this.container.pigment);
      this.paint();
    }
  }

  #checked = false;

  click(point) {
    this.#runClickAction();
    return true;
  }

}

export { Pigment };