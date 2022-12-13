import {introduce, newLine} from '../../../modules/introduce.mjs';
import {lottery} from '../../../modules/lottery.mjs';

let secret = [8, 6, 4, 1];
let input = document.querySelector("input");
let button = document.querySelector("button");

input.placeholder = "Ingrese un número";
input.focus();


function verify() {

  if(secret.includes(parseInt(input.value))) {
    introduce("Usted acertó");
  } else {
    introduce("Usted erró");
  }

  input.value = "";
  input.focus();

}

button.addEventListener("click", verify);