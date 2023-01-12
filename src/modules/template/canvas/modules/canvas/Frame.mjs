'use strict';

import { Circle, Drawing, Size, Margin } from './canvas.mjs'

class Frame extends Drawing {
  pallete;
  pen;

  constructor() {
    super();
    this.pigment = '#550';
    this.margin = Margin.Create(4);
    this.pallete = null;
  }

  paint() {
    const canvas = Drawing.CANVAS;
    canvas.strokeStyle = this.pigment;
    canvas.strokeRect(this.x, this.y, this.width, this.height);
  }

  #enabledStroke = false;

  click(point) {
    this.#enabledStroke = !this.#enabledStroke;
    if(this.#enabledStroke) {
      this.#beginStroke(point);
    }else {
      this.#endStroke(point);
    }
    return true;
  }

  mouseMove(point) {
    if(this.#enabledStroke) {
      this.#stroke(point);
    }
  }

  #capturedPoint
  #shape;

  #beginStroke(point) {
    Drawing.CANVAS.fillStyle = this.pallete.primary;
    Drawing.CANVAS.strokeStyle = this.pallete.primary;
    this.#capturedPoint = point;
    this.#shape = new Path2D();
    this.#shape.moveTo(point.x, point.y);
  }

  #stroke(point) {
    Drawing.CANVAS.beginPath();
    Drawing.CANVAS.moveTo(this.#capturedPoint.x, this.#capturedPoint.y);
    Drawing.CANVAS.lineTo(point.x, point.y);
    Drawing.CANVAS.stroke();
    this.#shape.lineTo(point.x, point.y);
    this.#capturedPoint = point;
  }

  #endStroke(point) {
    this.#shape.lineTo(point.x, point.y);
    this.#shape.closePath();
    this.#capturedPoint = point;
    Drawing.CANVAS.fill(this.#shape);
  }
}

export { Frame };