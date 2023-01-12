"use strict";

import { Screen, Pallete, Frame } from '../modules/canvas/Canvas.mjs';

let screen = Screen.LoadCanvas('canvas');
let pallete = new Pallete();
let frame = new Frame();
pallete.limit = screen.width * 0.8;
pallete.loadPigments();

frame.y = pallete.height;
frame.width = screen.width;
frame.height = screen.height - pallete.height;
frame.pallete = pallete;

screen.addItem(pallete);
screen.addItem(frame);

screen.show();