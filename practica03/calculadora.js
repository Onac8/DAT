/*
Jonathan Cano Picazo
login: jcanopi
*/

'use strict'

function isOperator(key) {
  let op = ["+", "-", "*", "/"];

  for (let i of op) {
    if (i == key) {
      return true
    }
  }
  return false
}


function solve(calc) {
  switch (calc.op) {
    case "+":
      calc.sol = calc.arg1 + calc.arg2;
      console.log(calc.sol);
      break;
    case "*":
      calc.sol = calc.arg1 * calc.arg2;
      console.log(calc.sol);
      break;
    case "-":
      calc.sol = calc.arg1 - calc.arg2;
      console.log(calc.sol);
      break;
    case "/":
      calc.sol = calc.arg1 / calc.arg2;
      console.log(calc.sol);
      break;
  }
}


function getKey(key, calc) {
  if (Number.isInteger(key)) { //ARGS
    if (!calc.flag) { //first argument
      calc.arg1 = key;
      console.log(calc.arg1);
    } else { //second argument
      calc.arg2 = key;
      console.log(calc.arg2);
    }

  } else if (isOperator(key)) {
    if (!calc.flag) { // Case 1 *
      calc.op = key;
      calc.flag = true;
      console.log(calc.op);
    } else { //Case 2 + 4 *
      solve(calc);
      calc.arg1 = calc.sol;
      calc.op = key;
      console.log(calc.op);
    }

  } else if (key == "=") {
    solve(calc);

  } else if (key == "c") {
    calc.arg1 = 0;
    calc.op = NaN;
    calc.arg2 = 0;
    calc.result = 0;
    calc.flag = false;
    console.log(0);

  } else {
    return -1; //Invalid number or operation
  }
}


function testCalc() {
  let calc = {
    arg1: 0,
    op: NaN,
    arg2: 0,
    result: 0,
    flag: false,
  }

  getKey(3, calc);
  getKey("-", calc);
  getKey(2, calc);
  getKey("*", calc);
  getKey(5, calc);
  getKey("=", calc);
  getKey("c", calc);
  getKey(4, calc);
  getKey(9, calc);
  getKey("*", calc);
  getKey(2, calc);
  getKey("=", calc);
}

testCalc();
