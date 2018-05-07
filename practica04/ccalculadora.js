/*
Jonathan Cano Picazo
login: jcanopi
*/

'use strict'

class Calculadora {
  constructor() {
    arg1: 0;
    op: NaN;
    arg2: 0;
    result: 0;
    flag: false;
  }


  isOperator(key) {
    let op = ["+", "-", "*", "/"];

    for (let i of op) {
      if (i == key) {
        return true;
      }
    }
    return false;
  }


  clear() {
    this.arg1 = 0;
    this.op = NaN;
    this.arg2 = 0;
    this.result = 0;
    this.flag = false;
  }


  solve() {
    switch (this.op) {
      case "+":
        this.result = this.arg1 + this.arg2;
        break;
      case "*":
        this.result = this.arg1 * this.arg2;
        break;
      case "-":
        this.result = this.arg1 - this.arg2;
        break;
      case "/":
        if (this.arg2 == "0") {
          return -1;
          break;
        }
        this.result = this.arg1 / this.arg2;
        break;
    }
    return 0;
  }



  getKey(key) {
    let str;

    if (Number(key)) { //ARGS
      if (!this.flag) { //first argument
        this.arg1 = Number(key);
        str = this.arg1;
      } else { //second argument
        this.arg2 = Number(key);
        str = this.arg2;
      }

    } else if (this.isOperator(key)) {
      if (!this.flag) { // Case 1 *
        this.op = key;
        this.flag = true;
        str = this.op;
      } else { //Case 2 + 4 *
        if (this.solve() < 0) {
          str = " -> Cannot divide by 0!";
          this.clear();
        } else {
          this.arg1 = this.result;
          this.op = key;
          console.log("=" + this.result);
          str = this.op;
        }
      }

    } else if (key == "=") {
      if (this.solve() < 0) {
        str = " -> Cannot divide by 0!";
        this.clear();
      } else {
        str = "=" + this.result;
        this.clear();
      }

    } else if (key == "c" || key == "C") {
      this.clear();
      str = "AC";

    } else {
      str = "Invalid number or operation";
    }
    return str;
  }
}


//MAIN--------------------------------------------------------------------------
let calc = new Calculadora();

console.log(calc.getKey("1", calc)); //tratar errores? (-1)
console.log(calc.getKey("+", calc));
console.log(calc.getKey("1", calc));
console.log(calc.getKey("+", calc));
console.log(calc.getKey("1", calc));
console.log(calc.getKey("=", calc));
console.log(calc.getKey("2", calc));
console.log(calc.getKey("-", calc));
console.log(calc.getKey("2", calc));
console.log(calc.getKey("=", calc));
console.log(calc.getKey("1", calc));
console.log(calc.getKey("*", calc));
console.log(calc.getKey("5", calc));
console.log(calc.getKey("=", calc));
console.log(calc.getKey("c", calc));
console.log(calc.getKey("4", calc)); //arg inservible, al no poner despues un operador
console.log(calc.getKey("9", calc));
console.log(calc.getKey("*", calc));
console.log(calc.getKey("2", calc));
console.log(calc.getKey("=", calc));
