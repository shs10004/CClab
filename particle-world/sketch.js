// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 8; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 500; // Decide the maximum number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    for (let i = 0; i < 3; i++) {
      particles.push(new Particle(mouseX, mouseY))
    }
  }

  //extra 
  stroke(252, 240, 180);
  fill(252, 240, 180);
  circle(width / 2 + 30 - 115, height / 2 + 30, 50);
  circle(width / 2 + 30 - 80, height / 2 + 30, 50);
  circle(width / 2 + 30, height / 2 + 30, 50);
  circle(width / 2 + 30, height / 2 - 60, 50);
  circle(width / 2, height / 2 - 50, 50);
  circle(width / 2 - 30, height / 2 - 60, 50);

  //first 
  stroke(252, 240, 180);
  fill(252, 240, 180);
  circle(width / 2 + 30, height / 2 - 10, 50);
  stroke(239, 210, 93);
  fill(239, 210, 93);
  circle(width / 2 + 5, height / 2 - 30, 50);
  stroke(250, 238, 160);
  fill(250, 238, 160);
  circle(width / 2, height / 2 + 10, 50);

  //second 
  stroke(252, 240, 180);
  fill(252, 240, 180);
  circle(width / 2 + 60, height / 2 + 10, 50);
  stroke(250, 238, 160);
  fill(250, 238, 160);
  circle(width / 2 + 5 + 60, height / 2 - 30, 50);
  stroke(239, 210, 93);
  fill(239, 210, 93);
  circle(width / 2 + 30 + 60, height / 2 - 10, 50);

  //third 
  stroke(252, 240, 180);
  fill(252, 240, 180);
  circle(width / 2 - 60, height / 2 - 10, 50);
  stroke(239, 210, 93);
  fill(239, 210, 93);
  circle(width / 2 - 35, height / 2 - 30, 50);
  stroke(250, 238, 160);
  fill(250, 238, 160);
  circle(width / 2 - 30, height / 2 + 10, 50);

  //fourth 
  stroke(252, 240, 180);
  fill(252, 240, 180);
  circle(width / 2 - 60, height / 2 - 40, 50);
  stroke(250, 238, 160);
  fill(250, 238, 160);
  circle(width / 2 - 5 + 60, height / 2, 50);
  stroke(239, 210, 93);
  fill(239, 210, 93);
  circle(width / 2 - 30 + 60, height / 2 - 40, 50);

  //fifth 
  stroke(252, 240, 180);
  fill(252, 240, 180);
  circle(width / 2 - 120, height / 2 + 10, 50);
  stroke(250, 238, 160);
  fill(250, 238, 160);
  circle(width / 2 + 5 - 120, height / 2 - 30, 50);
  stroke(239, 210, 93);
  fill(239, 210, 93);
  circle(width / 2 + 30 - 110, height / 2 - 10, 50);

  //sixth 
  stroke(252, 240, 180);
  fill(252, 240, 180);
  circle(width / 2 + 30 + 100, height / 2, 50);
  stroke(250, 238, 160);
  fill(250, 238, 160);
  circle(width / 2 + 5 + 100, height / 2 - 20, 50);
  stroke(239, 210, 93);
  fill(239, 210, 93);
  circle(width / 2 + 100, height / 2 + 30, 50);



  fill(255, 0, 0)
  stroke(255, 0, 0)
  rect(width / 2 - 30, height / 2 + 50, 60, 300);
  rect(width / 2 - 30 + 120, height / 2 + 50, 60, 300);
  rect(width / 2 - 30 - 120, height / 2 + 50, 60, 300);
  triangle(width / 2 - 90, height / 2 + 50, width / 2 - 150, height / 2 + 50, width / 2 - 120, height / 2 - 30 + 50);
  triangle(width / 2 + 90, height / 2 + 50, width / 2 + 150, height / 2 + 50, width / 2 + 120, height / 2 - 30 + 50);
  triangle(width / 2 + 30, height / 2 + 50, width / 2 - 30, height / 2 + 50, width / 2, height / 2 - 30 + 50);

  fill(255);
  stroke(255);
  rect(width / 2 - 30 - 60, height / 2 + 50, 60, 300);
  rect(width / 2 - 30 + 60, height / 2 + 50, 60, 300);
  triangle(width / 2 - 30, height / 2 + 50, width / 2 - 90, height / 2 + 50, width / 2 - 60, height / 2 - 30 + 50);
  triangle(width / 2 + 30, height / 2 + 50, width / 2 + 90, height / 2 + 50, width / 2 + 60, height / 2 - 30 + 50);


  // consider generating particles in draw(), using Dynamic Array

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }

  // limit the number of particles
  if (particles.length > MAX_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first (oldest) particle
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 50;
    this.hue = random(30, 60);

    this.speedX = random(-10, 10);
    this.speedY = random(-5, -10);
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x += this.speedX;
    this.y += this.speedY;

    this.speedY += 0.2;
    this.speedX *= 0.99;
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    colorMode(HSB);
    fill(this.hue, 60, 250);
    circle(0, 0, this.dia);
    fill(this.hue, 65, 250);
    circle(0 + 5, 0 - 40, this.dia);
    fill(this.hue, 55, 250);
    circle(0 + 30, 0 - 20, this.dia);

    pop();
  }
}
function mousePressed() {
  for (let i = 0; i < num; i++) {
    particles.push(new Particle(mouseX, mouseY))
  }
}




