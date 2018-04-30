'use strict'

function converter(speed, unit) {
  let speed2;
  let exception;
  switch (unit) {
    case ('m/s'):
      speed2 = speed;
      break;
    case ('km/h'):
      speed2 = ((speed / 1000) * 3600);
      break;
    case ('mph'):
      speed2 = ((speed / 1609.344) * 3600);
      break;
    case (undefined):
      throw new Error ('ArgumentError');
    default:
      throw new Error ('UseError');
  }
  return speed2;
}

let speed;
let speed2;
let unit;
let unit2;
speed = 10; // Velocidad en m/seg (int)
speed2 = "10"; // Velocidad en m/seg (string)
unit = "mph";
unit2 = "millasph";

try {
  console.log(speed2 + " m/s = " + converter(speed2, unit) + " " + unit);
  //console.log(speed2 + " m/s = " + converter() + " " + unit); //Prueba exception 2
  console.log(speed2 + " m/s = " + converter(speed2, unit2) + " " + unit);
} catch (e) {
  switch (e.message) {
    case 'ArgumentError':
      console.log("Error: " + e.name + ": falta de argumentos -> Uso: ( converter(speed, unit) ).");
      break;
    case 'UseError':
      console.log("Error: " + e.name + ": segundo argumento (unit) incorrecto. Esperado 'm/s', 'km/h' o 'mph'.");
      break;
    default:
      ;
  }
}
