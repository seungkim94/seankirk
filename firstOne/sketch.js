function setup() {
  createCanvas(1400,800);
  background(0);
  noCursor();
}

function draw() {
  fill(mouseX * .175, mouseY * .3, 150);
  ellipse(mouseX, mouseY, 250, 250);
  strokeWeight(mouseX)

}
