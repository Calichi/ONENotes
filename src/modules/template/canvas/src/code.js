"use strict";

import { Screen, Circle, StackPanel } from '../modules/canvas/Canvas.mjs';

Screen.LoadCanvas('canvas');
const screen = Screen.DEFAULT;
const pallete = new StackPanel();
const one = new Circle();
const two = new Circle();
const three = new Circle();
const four = new Circle();
const five = new Circle();
const six = new Circle();
const seven = new Circle();
const eight = new Circle();

two.pigment = '#00f';
three.pigment = '#0f0';

pallete.limit = Screen.SIZE.width * 0.5;
pallete.addItem(one);
pallete.addItem(two);
pallete.addItem(three);
pallete.addItem(four);
pallete.addItem(five);
pallete.addItem(six);
pallete.addItem(seven);
pallete.addItem(eight);

screen.addItem(pallete);

function updateFrame() {
  screen.paint();
}
screen.paint();