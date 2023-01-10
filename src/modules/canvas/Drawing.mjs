'use strict';

import { Size } from './Size.mjs';
//import { Point } from './Point.mjs'
//import { Rect } from './Rect.mjs'

class Drawing {
  //Miembros estaticos
  static #_HTML_CANVAS;
  static #_CANVAS;

  static get CANVAS() { return this.#_CANVAS; }
  static get HTML_CANVAS() { return this.#_HTML_CANVAS; }
  static set HTML_CANVAS(value) {
    this.#_HTML_CANVAS = value;
    this.#_CANVAS = value.getContext('2d');
  }

  static LoadCanvas(id) {
    this.HTML_CANVAS = document.getElementById(id);
  }

  //Miembros de instancia
  #_region;
  #_pigment;

  constructor(region, pigment) {
    this.#_region = region;
    this.#_pigment = pigment;
  }

  get pigment() { return this.#_pigment; }
  set pigment(value) { this.#_pigment = value; }
  get region() { return this.#_region; }
  set region(value) {this.#_region = value;}

}

export { Drawing };