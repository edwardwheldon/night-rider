const leds = document.getElementsByClassName("on");

console.log(document.getElementsByClassName("on").length)


let l = 0;
let forward = true;
function updateLed() {
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
    leds[l].classList.remove('animate');
    leds[l].classList.add('animate');
  setTimeout(updateLed, 150)
}
updateLed();








