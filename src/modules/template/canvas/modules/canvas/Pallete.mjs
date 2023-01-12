"use strict";

import { Circle, Point, StackPanel, Drawing, Size, Pigment } from './canvas.mjs';

class Pallete extends StackPanel {
  primary = '#000';
  #selected = null;
  #pigments = ['#000', '#fff', '#777', '#f00', '#0f0',
               '#00f', '#f0f', '#ff0', '#0ff', '#ff7700',
               '#7700ff', '#ff0077', '#77ff00', '#832',
              '#045'];

  constructor() {
    super();
    this.separation = 10;
    this.pigment = '#bbb';
    //this.loadPigments();
  }

  loadPigments() {
    for(const pigment of this.#pigments) {
      this.addPigment(pigment);
    }
  }

  addPigment(pigment) {
    let control = new Pigment();
    control.pigment = pigment;
    control.clickAction = this.changePrimaryPigment.bind(this);
    this.addItem(control);
  }

  changePrimaryPigment(control) {
    if(this.#selected != null) this.#selected.changeVisualState();
    this.#selected = control;
    control.changeVisualState();
    this.primary = control.pigment;
  }

  paint() {
    if(!this.isVisible()) return;

    const cut = 0.5 * this.height
    const pA = this.region.point;
    const pB = new Point(this.x, this.region.bottom);
    const pC = new Point(this.region.right - cut, this.region.bottom);
    const pD = new Point(this.region.right, this.region.bottom);
    const pE = new Point(this.region.right, this.region.bottom - cut);
    const pF = new Point(this.region.right, this.y);

    const canvas = Drawing.CANVAS;

    canvas.fillStyle = this.pigment;
    canvas.beginPath();
    canvas.moveTo(pA.x, pA.y);
    canvas.lineTo(pB.x, pB.y);
    canvas.lineTo(pC.x, pC.y);
    canvas.quadraticCurveTo(pD.x, pD.y, pE.x, pE.y);
    canvas.lineTo(pF.x, pF.y);
    canvas.fill();

    super.paint();
  }

  click() {
    console.log(this.primary);
    return true;
  }
}

export { Pallete };