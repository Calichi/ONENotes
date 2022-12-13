import {introduce, newLine} from '../../../modules/introduce.mjs';
import {lottery} from '../../../modules/lottery.mjs';

let secret = lottery(1, 10);
let input = document.querySelector("input");
let button = document.querySelector("button");

input.placeholder = "Ingrese un número";
input.focus();


function verify() {
  if(parseInt(input.value) == secret) {
    introduce("Usted acertó");
  } else {
    introduce("Usted erró");
  }

  input.value = "";
  input.focus();
}

button.addEventListener("click", verify);