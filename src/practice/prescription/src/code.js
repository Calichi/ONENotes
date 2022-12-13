import {introduce, newLine} from '../../../modules/introduce.mjs';
/*
  - Tomar la cantidad de ingredientes que se agregará a ala lista
*/


let dButton = document.querySelector('#dynamic_button');
let gInput = document.querySelector('#general_input');
let list = [];
let quantity = 0;
let iCount = 0;

dButton.addEventListener('click', getIngredientsQuantity);

function addIngredient() {
  let isNotCompletedList = iCount < quantity;
  
  if(!isNotCompletedList) {
    introduce(`La lista ya está completa`); //Otro proceso
    return;
  }

  let ingredient = gInput.value;
  let notExistsIngredient = !list.includes(ingredient);

  if(notExistsIngredient) {
    list.push(ingredient);
    introduce(ingredient);
    iCount++;
  } else {
    introduce(`El ingrediente ya existe`)
  }
}

function changeToIngredientUI() {
  dButton.addEventListener('click', addIngredient);
  gInput.value = "";
  gInput.placeholder = "Ingrediente";
  gInput.focus();
  dButton.innerHTML = "Agregar";
}

function getIngredientsQuantity() {
  dButton.removeEventListener('click', getIngredientsQuantity);
  quantity = parseInt(gInput.value);
  introduce(quantity);
  changeToIngredientUI();
}
