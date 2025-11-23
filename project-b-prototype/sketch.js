let state = 'intro';
let cloud1;
let cloud2;
let hours = 0;

function setup() {
  createCanvas(800, 500);
  cloud1 = new Cloud(width / 2, height / 2, 100);
  cloud2 = new Cloud(width / 2 - 200, height / 2 - 100, 100);
}

function draw() {
  if (state == 'intro') {
    drawIntro();
  } else if (state == 'main1') {
    drawMain1();
  } else if (state == 'main2') {
    drawMain2();
  }
}

function mousePressed() {
  if (mouseX > 180 && mouseX < 325 && mouseY > 260 && mouseY < 340) {
    if (state == 'intro') {
      state = 'main1';
    } else if (state == 'main1') {
    }
  }
  if (mouseX > 480 && mouseX < 625 && mouseY > 260 && mouseY < 340) {
    if (state == 'intro') {
      state = 'main2';
    } else if (state == 'main2') {
    }
  }
  if (mouseX > 25 && mouseX < 75 && mouseY > 25 && mouseY < 75) {
    if (state == 'main1') {
      state = 'intro';
    } else if (state == 'intro') {
    }
  }
  if (mouseX > 25 && mouseX < 75 && mouseY > 25 && mouseY < 75) {
    if (state == 'main2') {
      state = 'intro';
    } else if (state == 'intro') {
    }
  }
}

function drawIntro() {
  background(255);
  noStroke();
  rectMode(CENTER);
  fill(49, 84, 179);
  rect(width / 2 - 150, height / 2 + 50, 150, 70);
  fill(188, 55, 55);
  rect(width / 2 + 150, height / 2 + 50, 150, 70);
  fill(0);
  textAlign(CENTER, CENTER);
  text("PICK ME!!", width / 2 - 150, height / 2 + 50);
  text("or me?", width / 2 + 150, height / 2 + 50);

}

function drawMain1() {
  let bgColor;
  if (hours > 0 && hours <= 3) {
    bgColor = lerpColor(color(1, 2, 30), color(43, 44, 92), map(hours, 0, 3, 0, 1));
  } else if (hours > 3 && hours <= 4) {
    bgColor = lerpColor(color(43, 44, 92), color(229, 117, 93), map(hours, 3, 4, 0, 1));
  } else if (hours > 4 && hours < 5) {
    bgColor = lerpColor(color(229, 117, 93), color(237, 138, 78), map(hours, 4, 5, 0, 1));
  } else if (hours > 5 && hours <= 6) {
    bgColor = lerpColor(color(237, 138, 78), color(208, 210, 185), map(hours, 5, 6, 0, 1));
  } else if (hours > 6 && hours < 9) {
    bgColor = lerpColor(color(208, 210, 185), color(163, 182, 190), map(hours, 6, 9, 0, 1));
  } else if (hours > 9 && hours <= 14) {
    bgColor = lerpColor(color(163, 182, 190), color(107, 142, 176), map(hours, 9, 14, 0, 1));
  } else if (hours > 14 && hours < 18) {
    bgColor = lerpColor(color(107, 142, 176), color(186, 84, 40), map(hours, 14, 18, 0, 1));
  } else if (hours > 18 && hours <= 20) {
    bgColor = lerpColor(color(186, 84, 40), color(178, 74, 76), map(hours, 18, 20, 0, 1));
  } else if (hours > 20 && hours < 22) {
    bgColor = lerpColor(color(178, 74, 76), color(38, 29, 49), map(hours, 20, 22, 0, 1));
  } else {
    bgColor = lerpColor(color(38, 29, 49), color(0, 0, 0), map(hours, 22, 24, 0, 1));
  }

  hours = hours + 0.01;
  if (hours > 24) {
    hours = 0;
  }

  background(bgColor);
  cloud1.display();
  cloud1.move();
  cloud2.display();
  cloud2.move();
  fill(55, 55, 55);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, 125, 500);
  rect(0, 0, 800, 40);
  rect(125, 340, 675, 500);
  rect(675, 40, 125, 340);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(1.5);
  noFill();
  rect(width / 2, height / 2 - 60, 184, 300);
  rect(width / 2 + 184, height / 2 - 60, 184, 300);
  rect(width / 2 - 184, height / 2 - 60, 184, 300);
  rect(width / 2, height / 2 - 135, 552, 150)
  strokeWeight(1);
  fill(255);
  rect(50, 50, 50, 50);
  fill(0);
  textAlign(CENTER, CENTER);
  text("return", 50, 50);

}

function drawMain2() {
  background(205, 230, 255);
  stroke(0);
  fill(255);
  rect(50, 50, 50, 50);
  fill(0);
  textAlign(CENTER, CENTER);
  text("return", 50, 50);
}

class Cloud {
  constructor(u, v, s) {
    this.u = u;
    this.v = v;
    this.s = s;
    this.windSpeed = random(-1, 1);
    //winds.....random ()
  }

  display() {
    push();
    translate(this.u, this.v);
    noStroke();
    fill(248);
    circle(-20, 20, this.s / 1.2);
    circle(50, 10, this.s / 1.2);
    circle(100, 20, this.s / 1.5);
    fill(250);
    circle(70, 30, this.s / 2);
    circle(20, -20, this.s / 1.5);
    circle(80, 50, this.s / 12);
    ellipse(this.s - 100, this.s - 60, 200, 100 / 2);
    pop();
  }

  move() {
    this.u = this.u + this.windSpeed
    if (this.u - 100 >= width) {
      this.u = this.u - width;
    }
    if (this.u < 0) {
      this.u = this.u + width;
    }
  }
}