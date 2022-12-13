//Importación de módulos que contienen funciones frecuentemente utilizadas durante el curso
import {introduce, newLine} from '../../../modules/introduce.mjs';
import {getRandomNumber} from '../../../modules/randomNumber.mjs';

//Definición de funciones

//Función >getRandomNumbers< : Devuelve una matriz(array) de números aleatorios no duplicados
function getRandomNumbers(quantity) {
  let numbers = [];
  for(let i = 0, n = 0; i < quantity; i++) {
    do n = getRandomNumber(1, 10); while(numbers.includes(n));
    numbers.push(n);
  }
  return numbers;
}

//Función >verify< : Atiende al evento 'click' de un boton
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

//Definición de variables globales

let secret = getRandomNumbers(5);
let sIndex = 0;
let input = document.querySelector("input");
let button = document.querySelector("button");

console.log(secret);

input.placeholder = "Ingrese un número";
input.focus();
button.addEventListener("click", verify);