'use strict'

function sleep(time){
    setTimeout(goToSleep, time);
}

function goToSleep(){
  console.log('Three second later');
}

let time = 3000;
sleep(time);
