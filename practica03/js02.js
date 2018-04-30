'use strict'

function converter(speed, unit) {
  let speed2;
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
    default:
      speed2 = 'Error: parametro unit incorrecto';

  }
  return speed2;
}

let speed;
let speed2;
let unit;
speed = 10; // Velocidad en m/seg (int)
speed2 = "10"; // Velocidad en m/seg (string)
unit = "mph";

console.log(speed2 + " m/s = " + converter(speed2, unit) + " " + unit);
