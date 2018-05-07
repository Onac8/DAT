/*
Jonathan Cano Picazo
login: jcanopi
*/

'use strict'

let jObject = {
  "cadena" : "cadena",
  "numero" : 1,
  "noNumero" : "1",
  "array" : [1, 2],
  "noArray" : "[1, 2]",
  "booleano" : true,
  "noBooleano" : false,
  "nulo" : null
}

let cadena = JSON.stringify(jObject);
let objeto = JSON.parse(cadena);
console.log(typeof(cadena), cadena, '\n');
console.log(typeof(objeto), objeto);
