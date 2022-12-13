import {introduce, newLine} from '../../../modules/introduce.mjs';

let secret = 10;
let input = document.querySelector("input");
let button = document.querySelector("button");

function verify() {
  if(parseInt(input.value) == secret) {
    introduce("Usted acertó");
  } else {
    introduce("Usted erró");
  }
}

button.addEventListener("click", verify);