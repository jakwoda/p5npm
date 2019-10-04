let w = document.documentElement.clientWidth;
let h = document.documentElement.clientHeight;
function setup() {
  createCanvas(w, 3000);
}
function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function doubleClicked() {
  background(255);
}
