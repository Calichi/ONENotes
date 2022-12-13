import {introduce, newLine} from '../../../modules/introduce.mjs';


function buildString(str, quantity) {
  let result = "";
  for(let count = 0; count < quantity; count++) {
    result += str;
  }
  return result;
}


for(let line = 0, str = buildString("*", 10); line < 3; line++) {
  introduce(str); newLine();
}

introduce("Fin");