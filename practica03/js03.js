//Jonathan Cano Picazo - jcanopi

'use strict'

function isPassword(pass, minLength, minMinus, minMayus, minNum, minChar, espChars) {
  let result;
  let counter;
  let valid;

  valid = true;
  if (pass.length < minLength){ //Al menos x tamaño
    valid = false;
  }

  //Usare la funcion match, me parece mas sencillo de implementar que con
  //funciones propias de Strings.
  result = pass.match(/[a-z]/g); //Al menos x minusculas
  if (result === null || result.length < minMinus){
    valid = false;
  }

  result = pass.match(/[A-Z]/); //Al menos x mayus
  if (result === null || result.length < minMayus){
    valid = false;
  }

  result = pass.match(/[0-9]/); //Al menos x numeros
  if (result === null || result.length < minNum){
    valid = false;
  }

  //Caracteres especiales
  counter = 0;
  for (let c of espChars){
    for (let i of pass){
      if (i === c){ //Character found
        counter++;
      }
    }
  }
  if (counter < minChar){
    valid = false;
  }

  return valid;
}

let pass = "5tarWar5:";
let pass2 = "CamiónPequeño10:";
let espChars = ",.-{}[]!·$%&/()=?¿¡':" + '"';

console.log("Password: " + isPassword(pass2, 5, 1, 1, 1, 1, espChars));
