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
  let user = getter(); //Obtenemos user

  if(!user){
    initUser(); //Inicializamos objeto y guardamos
    navigator.geolocation.getCurrentPosition(checkLocation, error, options);
    let input= prompt("Introduce tu nombre", "¿Wally?");
    let data = JSON.parse(localStorage.getItem('user'));
    data.name = input;
    localStorage.setItem('user',JSON.stringify(data));
  } else {
    navigator.geolocation.getCurrentPosition(checkLocation, error, options);
    success = true;
  }
  return success;
}


function checkLocation(pos) {
  let lat = pos.coords.latitude.toFixed(3);
  let lon = pos.coords.longitude.toFixed(3);
  let precision = pos.coords.accuracy;
  let user = JSON.parse(getter()); //Obtenemos objeto

  if(!user.lat){ //Caso usuario nuevo (no ubicacion todavia)
    user.lat = lat;
    user.lon = lon;
    user.precision = precision;
    let userJson = JSON.stringify(user);
    localStorage.setItem('user',userJson);
  }else{
    if(lat == user.lat && lon == user.lon){ //Caso usuario reconocido y misma posicion
      user.sameLocation = true;
      user.date = String(new Date());
      let userJson = JSON.stringify(user);
      localStorage.setItem('user',userJson);
      console.log("Misma posicion");
    }else{ //Caso usuario reconocido pero distinta posicion
      user.lat = lat;
      user.lon = lon;
      user.precision = precision;
      user.date = String(new Date());
      let userJson = JSON.stringify(user);
      localStorage.setItem('user',userJson);
      console.log("Distinta posicion");
    }
  }
}


function initUser(){
  let user = {
    "name": null,
    "lat": null,
    "lon": null,
    "precision": null,
    "date": new Date(),
    "sameLocation": true
  }
  localStorage.setItem('user',JSON.stringify(user));
}


function error(err) {
  console.warn("ERROR(" + err.code + "):" + err.message);
}


//Getters-----------------------------------------------------------------------
function getter(){
  let user = localStorage.getItem("user");
  return user;
}

function sameLocation(){
  let user = JSON.parse(getter());
  return user.sameLocation;
}
