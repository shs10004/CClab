/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new SabrinaDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class SabrinaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.pupilX = 0;
    this.pupilSpeedX = 0.3;
    this.h = 0;
    // add properties for your dancer here:

  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.pupilX = this.pupilX + this.pupilSpeedX;
    if (this.pupilX > 5) {
      this.pupilSpeedX = this.pupilSpeedX * -1;
    }
    if (this.pupilX < -5) {
      this.pupilSpeedX = this.pupilSpeedX * -1;
    }

    this.h = 200 + sin(frameCount / 10) * 5;
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    translate(this.x, this.y);
    push();
    translate(0, 0);

    let angle = map(sin(frameCount / 30), -1, 1, 0 - 20, 0 + 20);
    rotate(radians(angle));

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //back of body 
    fill(255, 135, 45);
    stroke(253, 117, 13);
    ellipse(25, -5, 60, 100);
    ellipse(-25, -5, 60, 100);
    ellipse(0, -10, 60, 100);

    //legs/feet 
    fill(10, 95, 21);
    stroke(10, 95, 21);
    rect(-25, this.h - 160, 5, 30);
    rect(20, this.h - 160, 5, 30);
    ellipse(-30, this.h - 130, 30, 10)
    ellipse(30, this.h - 130, 30, 10)

    //stem
    fill(10, 95, 21);
    stroke(10, 95, 21);
    rect(-10, this.h - 270, 20, 60);

    //body
    fill(255, 135, 45);
    stroke(253, 117, 13);
    ellipse(45, 0, 60, 100);
    ellipse(-45, 0, 60, 100);
    ellipse(30, 0, 60, 100);
    ellipse(-30, 0, 60, 100);
    ellipse(0, 0, 60, 100);

    //eyes
    fill(0);
    stroke(0);
    triangle(10, 0, 25, -20, 40, 0);
    triangle(-10, 0, -25, -20, -40, 0);
    ellipse(0, 20, 10, 20);
    fill(255, 240, 97);
    ellipse(25 + this.pupilX, -5, 10, 10);
    ellipse(-25 + this.pupilX, -5, 10, 10);


    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()
    pop();
    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/