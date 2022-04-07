var unit_w ;
var color1;
var color2;

function setup() {
  frameRate(2);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
recolor();
unit_w = windowWidth/20;
  background(color1);
  
  for (let i = 0; i <= width; i += unit_w) {
    for (let j = 0; j <= height; j += unit_w) {
      push();
      translate(i,j);
      unit();
      pop();
    }
  }
  // noLoop();
}

function recolor(){
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
}

function unit() {
  push();
  noStroke();
  rotate(random([0, 90, 180, 270]));
  fill(color2);
  beginShape();
  vertex(-unit_w/2, unit_w/2);
  vertex(unit_w/2, unit_w/2);
  vertex(unit_w/2, -unit_w/2);
  vertex(-unit_w/2, unit_w/2);
  endShape();
  pop();
}