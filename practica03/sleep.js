'use strict'

function sleep(time){
    setTimeout(goToSleep, time);
}

function goToSleep(){
  console.log('Three second later');
}

let time = 3000;
sleep(time);


//ANOTHER VERSION

// function sleep(time) {
//   let start = new Date().getTime();
//   for (let i = 0; i < 1e5; i++) {
//     if ((new Date().getTime() - start) > time){
//       break;
//     }
//   }
// }

//let time = 3000;
//sleep(time);
