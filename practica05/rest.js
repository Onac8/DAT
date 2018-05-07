/*
Jonathan Cano Picazo
login: jcanopi
*/

'use strict'

function prediccion(lat, long){
  let request = require('request');
  let url="http://api.weatherunlocked.com/";
  let urn = "api/current/"
  let uri = url + urn + lat + "," + long;
  let app_id = "97d18b3a";
  let app_key= "6609bc12d898c5d75cd5158275b9ded5";
  let param1 = "app_id=" + app_id + "&" + "app_key=" + app_key;
  let param2 = "lang=es";
  uri = uri + "?" + param1 + "&" + param2;
  // console.log(uri + "\n");
  let cadena;

  request.get(uri, function(error, response, body){
    cadena = parser(body);
    console.log(cadena);
  });
}


function parser(body){
  let y=JSON.parse(body);
  let cadena = "Condición meteorológica: \n" + 
    "Latitud (m): " + y.lat + "\n" +
    "Longitud (m): " + y.lon + "\n" +
    "Altura (m): " + y.alt_m + "\n" +
    "Temperatura (°C): " + y.temp_c + "\n" +
    "Estado: " + y.wx_desc + "\n" +
    "Humedad (%)" + y.humid_pct + "\n" +
    "Viento (km/h): " + y.windspd_kmh + "\n";
  return cadena;
}


function testWeather(){
  (prediccion(40.29785, -3.79433) + "\n\n"); //Fuenlabrada
  (prediccion(35.07, 117.59) + "\n\n"); //California
  (prediccion(-18.9136, 47.536) + "\n\n"); //Madagascar
}

testWeather();
