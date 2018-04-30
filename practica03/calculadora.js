/*
Jonathan Cano Picazo
login: jcanopi
*/

'use strict'

function isOperator(key) {
  let op = ["+", "-", "*", "/"];

  for (let i of op) {
    if (i == key) {
      return true;
    }
  }
  return false;
}


function clear(calc){
  calc.arg1= 0;
  calc.op= NaN;
  calc.arg2= 0;
  calc.result= 0;
  calc.flag=false;
}


function solve(calc) {
  switch (calc.op) {
    case "+":
      calc.result = calc.arg1 + calc.arg2;
      break;
    case "*":
      calc.result = calc.arg1 * calc.arg2;
      break;
    case "-":
      calc.result = calc.arg1 - calc.arg2;
      break;
    case "/":
      if(calc.arg2 == "0"){
        return -1;
        break;
      }
      calc.result = calc.arg1 / calc.arg2;
      break;
  }
  return 0;
}


function getKey(key, calc) {
  let str;

  if (Number(key)) { //ARGS
    if (!calc.flag) { //first argument
      calc.arg1 = Number(key);
      str = calc.arg1;
    } else { //second argument
      calc.arg2 = Number(key);
      str = calc.arg2;
    }

  } else if (isOperator(key)) {
    if (!calc.flag) { // Case 1 *
      calc.op = key;
      calc.flag = true;
      str = calc.op;
    } else { //Case 2 + 4 *
      if (solve(calc) < 0){
        str = " -> Cannot divide by 0!";
        clear(calc);
      }else{
        calc.arg1 = calc.result;
        calc.op = key;
        console.log("=" + calc.result);
        str = calc.op;
      }
    }

  } else if (key == "=" ) {
    if (solve(calc) < 0){
      str = " -> Cannot divide by 0!";
      clear(calc);
    }else{
      str = "=" + calc.result;
      clear(calc);
    }

  } else if (key == "c" || key == "C") {
    clear(calc);
    str = "AC";

  } else {
    str = "Invalid number or operation";
  }
  return str;
}


function testCalc() {
  let calc = { //inicializamos el objeto
    arg1: 0,
    op: NaN,
    arg2: 0,
    result: 0,
    flag: false,
  }

  console.log(getKey("1", calc)); //tratar errores? (-1)
  console.log(getKey("+", calc));
  console.log(getKey("1", calc));
  console.log(getKey("+", calc));
  console.log(getKey("1", calc));
  console.log(getKey("=", calc));
  console.log(getKey("2", calc));
  console.log(getKey("-", calc));
  console.log(getKey("2", calc));
  console.log(getKey("=", calc));
  console.log(getKey("1", calc));
  console.log(getKey("*", calc));
  console.log(getKey("5", calc));
  console.log(getKey("=", calc));
  console.log(getKey("c", calc));
  console.log(getKey("4", calc)); //arg inservible, al no poner despues un operador
  console.log(getKey("9", calc));
  console.log(getKey("*", calc));
  console.log(getKey("2", calc));
  console.log(getKey("=", calc));
}

testCalc();
