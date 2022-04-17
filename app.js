// const leds = document.getElementsByClassName("led-glow");

// console.log(document.getElementsByClassName("led-glow").length)

// let l = 0;
// let forward = true;
// function updateLed() {
    
//     if (forward) {
//         leds[i].style.opacity = "1"; 
//         l++;
//         if (l > 5) {
//             l = 4;
//             forward = false;
//         }

//     } else {
//         l--;
//         if (l < 0) {
//             l = 1;
//             forward = true;
//         }
//     }
//     leds[i].style.opacity = "1"; // on
//     // leds[l].classList.remove('animate');
//     // leds[l].classList.add('animate');
//   setTimeout(updateLed, 150)
// }
// updateLed();
const speed = 150;
const leds = document.getElementsByClassName("led-glow");


let forward = false;
let l = 1;
function updateLeds() {
  clearTimeout(ledTimeout);
  for (const led of leds) {
    let opacity = parseFloat(led.style.opacity);
    opacity -= 0.3;
    if (opacity < 0) {
      opacity = 0;
    }
    led.style.opacity = opacity;
  }
  if (forward) {
    l++;
    if (l > 5) {
      l = 4;
      forward = false;
    }
  } else {
    l--;
    if (l < 0) {
      l = 1;
      forward = true;
    }
  }
  leds[l].style.opacity = 1;
  ledTimeout = setTimeout(updateLeds, speed);
}
let ledTimeout = setTimeout(updateLeds, speed);








