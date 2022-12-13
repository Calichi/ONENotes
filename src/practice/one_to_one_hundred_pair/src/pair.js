"use strict";

import {introduce, newLine} from '../../../modules/introduce.mjs';

let pairNum = 2;

while(pairNum < 101) {
  introduce(`Número par: ${pairNum}`);
  pairNum += 2;
}

newLine();

introduce("FIN");