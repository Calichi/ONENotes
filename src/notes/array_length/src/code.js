import {introduce, newLine} from '../../../modules/introduce.mjs';
import {lottery} from '../../../modules/lottery.mjs';

let secret = [8, 6, 4, 1];
let sIndex = 0;
let input = document.querySelector("input");
let button = document.querySelector("button");

input.placeholder = "Ingrese un número";
input.focus();


function verify() {

  if(parseInt(input.value) == secret[sIndex]) {
    introduce("Usted acertó");
  } else {
    introduce("Usted erró");
  }

  input.value = "";
  input.focus();
  sIndex = sIndex == (secret.length - 1) ? 0 : ++sIndex;

}

button.addEventListener("click", verify);