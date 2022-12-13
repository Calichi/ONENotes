import {introduce, newLine} from '../../../modules/introduce.mjs';

const registeredUser = "Carlos";
const registeredPassword = "ElCarlitos15"
let msg = "";

for(let limit = 0, attempt = 3; attempt > limit; attempt--) {

  //Solicitud de datos
  let gettedUser = prompt("Ingrese su usuario");
  let gettedPassword = prompt("Ingrese su contraseña");

  //Definición de condicionales
  let isRegisteredUser = registeredUser.toLowerCase() == gettedUser.toLowerCase();
  let isRegisteredPassword = registeredPassword == gettedPassword;

  //Toma de deciciones
  if (isRegisteredUser && isRegisteredPassword) {
    msg = `¡Bienvenido al sistema ${registeredUser}!`;
    alert(msg); break;
  } else if(attempt > 1){
    msg = `Inicio de sesión invalido. Le quedan ${attempt - 1} intentos. Profavor intente de nuevo.`;
    alert(msg);
  } else {
    msg = "Inicio de sesión invalido.<br>Desperdicio todos los intentos que tenía para hackear" +
           ` la cuenta.<br>¡Suerte para la próxima!`;
  }

}

introduce(msg);