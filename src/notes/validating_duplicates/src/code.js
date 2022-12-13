import {introduce, newLine} from '../../../modules/introduce.mjs';
import {getRandomNumber} from '../../../modules/randomNumber.mjs';

function getRandomNumbers(quantity) {
  let numbers = [];

  for(let i = 0, n = 0; i < quantity; i++) {

    do {n = getRandomNumber(1, 10); console.log(n);}
    while(numbers.includes(n));

    numbers.push(n);
  }

  return numbers;
}

let secret = getRandomNumbers(5);
let sIndex = 0;
let input = document.querySelector("input");
let button = document.querySelector("button");

console.log(secret);

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