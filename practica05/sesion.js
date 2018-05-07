/*
Jonathan Cano Picazo
login: jcanopi
*/

'use strict'

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function checkUser(){
  let success = false;
  if(!getName()){
    navigator.geolocation.getCurrentPosition(checkLocation, error, options);
    let input= prompt("Introduce tu nombre", "¿Wally?");
    localStorage.setItem("name", input);
  } else {
    navigator.geolocation.getCurrentPosition(checkLocation, error, options);
    success = true;
  }
  return success;
}


function checkLocation(pos) {
  let sameLocation = false;
  let lat = pos.coords.latitude.toFixed(3);
  let lon = pos.coords.longitude.toFixed(3);
  let precision = pos.coords.accuracy;

  if(!getLat()){ //Caso usuario nuevo
    setLocation(lat, lon, precision);
  }else{
    if(lat == getLat() && lon == getLon()){ //Caso usuario reconocido y misma posicion
      localStorage.setItem("sameLocation", true);
      console.log("Misma posicion");
    }else{ //Caso usuario reconocido pero distinta posicion
      setLocation(lat, lon, precision);
      console.log("Distinta posicion");
    }
  }
}


function setLocation(lat, lon, precision){
  let date = new Date();

  localStorage.setItem("lat", lat);
  localStorage.setItem("lon", lon);
  localStorage.setItem("precision", precision);
  localStorage.setItem("date", date);
}


function error(err) {
  console.warn("ERROR(" + err.code + "):" + err.message);
}

//Getters-----------------------------------------------------------------------
function getName(){
  let name = localStorage.getItem("name");
  return name;
}

function getLat(){
  let lat = localStorage.getItem("lat");
  return lat;
}

function getLon(){
  let long = localStorage.getItem("lon");
  return long;
}

function getPrecision(){
  let precision = localStorage.getItem("precision");
  return precision;
}

function getDate(){
  let date = localStorage.getItem("date");
  return date;
}

function sameLocation(){
  let flag = localStorage.getItem("sameLocation");
  return flag;
}
