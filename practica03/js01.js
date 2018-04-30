'use strict'

function kmh(x) {
  return ((x / 1000) * 3600);
}

function mph(x) {
  return ((x / 1609.344) * 3600);
}

let speed;
speed = 10; // Velocidad en m/seg

console.log("Km/h: " + kmh(speed));
console.log("Mph : " + mph(speed));
