'use strict';

import { Rect } from './Canvas.mjs';
import { Size } from './Size.mjs';
//import { Point } from './Point.mjs'
//import { Rect } from './Rect.mjs'

class Drawing {
  //Miembros estaticos
  static #_HTML_CANVAS;
  static #_CANVAS;
  //static #_SCREEN_SIZE;

  static get CANVAS() { return this.#_CANVAS; }
  static get HTML_CANVAS() { return this.#_HTML_CANVAS; }
  //static get SCREEN_SIZE() { return this.#_SCREEN_SIZE; }
  static set HTML_CANVAS(value) {
    this.#_HTML_CANVAS = value;
    //this.#_SCREEN_SIZE = new Size(value.clientWidth, value.clientHeight);
    this.#_CANVAS = value.getContext('2d');
  }

  static IsCanvasCreated() {
    return this.CANVAS != undefined && this.CANVAS != null;
  }

  static LoadCanvas(id) {
    this.HTML_CANVAS = document.getElementById(id);
  }

  //Miembros de instancia

  #_region = Rect.empty;
  #_pigment = '#fff';
  #_hidden = false;

  constructor() {
  }

  get pigment() { return this.#_pigment; }
  set pigment(value) { this.#_pigment = value; }
  get region() { return this.#_region; }
  set region(value) {this.#_region = value;}
  get hidden() { return this.#_hidden; }
  set hidden(value) { this.#_hidden = value; }

  isVisible() {
    return !this.hidden && Drawing.IsCanvasCreated();
  }

  paint() {

  }
}

export { Drawing };