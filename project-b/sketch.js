let state = 'intro';
let cloud1;
let cloud2;
let hours = 0;
let alphaValue = 255;
let fadeSpeed = 0.007;
let t = 0;
let x, y;
let shaking = true;
let baseX, baseY;
let restartTime = 0;
let fireworks = [];
let num = 30;
let angle = 0;

//messages 
let rectX = 345;
let rectY = 260;
let rectW = 106;
let rectH = 70;

let timer = 0;
let interval = 8000;
let ellipses = [];


function setup() {
  createCanvas(800, 500);
  userStartAudio();

  cloud1 = new Cloud(width / 2, height / 2, 100);
  cloud2 = new Cloud(width / 2 - 200, height / 2 - 100, 100);
  baseX = 168;
  baseY = 338;

  //for shaking 
  x = baseX;
  y = baseY;
  setRandomRestart();

  //for fireworks 
  for (let i = 0; i < num; i++) {
    fireworks.push(new Firework(width / 2, height / 2))
  }
}

function preload() {
  img1 = loadImage("alarm.png");
  img2 = loadImage("castle.png");
  img3 = loadImage("computer1.png");
  img4 = loadImage("future.jpg");
  img5 = loadImage("3025.png");
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

  if (shaking) {
    let d = dist(mouseX, mouseY, x, y);
    if (d < 40) {
      shaking = false;
      baseX = x;
      baseY = y;
      setRandomRestart();
    }
  }
  //fireworks 
  for (let i = 0; i < num; i++) {
    fireworks.push(new Firework(mouseX, mouseY))
  }
}

function drawIntro() {
  background(255);
  noStroke();
  rectMode(CENTER);
  fill(188, 55, 55);
  rect(width / 2 - 150, height / 2 + 50, 150, 70);
  fill(49, 84, 179);
  rect(width / 2 + 150, height / 2 + 50, 150, 70);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(18);
  textStyle(BOLD);
  text("Your Current", width / 2 - 150, height / 2 + 50);
  textSize(15);
  text("Go back...", width / 2 + 150, height / 2 + 50);
  fill(0);
  textFont('Courier New');
  textSize(80);
  textStyle(NORMAL);
  text("Chose a life", width / 2, height / 2 - 50);

}

function drawMain1() {

  let bgColor;
  if (hours > 0 && hours <= 3) {
    bgColor = lerpColor(color(0, 0, 0), color(43, 44, 92), map(hours, 0, 3, 0, 1));
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
  } else if (hours > 14 && hours < 19) {
    bgColor = lerpColor(color(107, 142, 176), color(178, 74, 76), map(hours, 14, 18, 0, 1));
  } else if (hours > 19 && hours < 20) {
    bgColor = lerpColor(color(178, 74, 76), color(38, 29, 49), map(hours, 19, 20, 0, 1));
  } else {
    bgColor = lerpColor(color(38, 29, 49), color(0, 0, 0), map(hours, 20, 24, 0, 1));
  }

  hours = hours + 0.05;
  if (hours > 24) {
    hours = 0;
  }


  background(bgColor);
  cloud1.display();
  cloud1.move();
  cloud2.display();
  cloud2.move();

  //streak in window 
  noStroke();
  fill(255, 255, 255, 30);
  quad(400, 0, 420, 0, 0, 420, 0, 400);
  quad(300, 0, 350, 0, 0, 350, 0, 300);
  quad(600, 0, 620, 0, 120, 500, 100, 500);
  quad(650, 0, 700, 0, 180, 500, 150, 500);
  quad(800, 0, 800, 50, 380, 500, 350, 500);

  fill(55, 55, 55);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, 125, 500);
  rect(0, 0, 800, 40);
  rect(125, 340, 675, 500);
  rect(675, 40, 125, 340);
  rectMode(CENTER);

  //window 
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(width / 2, height / 2 - 60, 184, 300);
  rect(width / 2 + 184, height / 2 - 60, 184, 300);
  rect(width / 2 - 184, height / 2 - 60, 184, 300);
  rect(width / 2, height / 2 - 135, 552, 150);

  //return button 
  strokeWeight(1);
  fill(255);
  rect(50, 50, 50, 50);
  fill(0);
  textAlign(CENTER, CENTER);
  text("return", 50, 50);

  //table
  fill(229, 229, 229);
  quad(125, 340, 675, 340, 715, 420, 85, 420);
  rectMode(CORNER);
  rect(85, 420, 630, 10);
  rect(85, 430, 30, 80);
  rect(685, 430, 30, 80);



  textSize(12);
  strokeWeight(2);
  fill(255);
  circle(62, 150, 100)
  fill(0);

  //clock
  push();
  translate(62, 150);
  rotate(angle);
  rect(0, 0, 0.5, 20);
  pop();


  push();
  translate(62, 150);
  rotate(angle * 2);
  rect(0, 0, 0.5, 30);
  pop();

  angle += 0.02;


  textAlign(CENTER, CENTER);
  text("12", 62, 115);
  text("3", 100, 150);
  text("6", 62, 185);
  text("9", 22, 150);
  strokeWeight(1);
  text("1", 81, 120);
  text("2", 95, 130);
  text("4", 95, 170);
  text("5", 81, 180);
  text("7", 43, 180);
  text("8", 29, 170);
  text("10", 29, 130);
  text("11", 43, 120);


  //other clock 
  if (!shaking && millis() > restartTime) {
    shaking = true;
    setRandomRestart();
  }

  if (shaking) {
    // shaking motion
    x = baseX + random(-5, 5);
    y = baseY + random(-5, 5);

    image(img1, x - 67, y - 60, 130, 100);
    noStroke();
    fill(255);
    ellipse(x, y, 68, 48);
    let alpha = map(sin(frameCount * 0.3), -1, 1, 0, 255);
    fill(255, 0, 0, alpha);
    ellipse(x, y, 68, 48);

  }

  ////computer 
  image(img3, 262, 200, 275, 215);
  fill(255, 255, 255, 120)
  rect(316, 242, 166, 110);

  if (millis() - timer > interval) {
    timer = millis();
    ellipses.push(randomPoint());
  }

  for (let e of ellipses) {
    noStroke();
    fill(0, 122, 255);
    ellipse(e.x, e.y, 80, 25);

    fill(0);
    textStyle(BOLD);
    text("WORK!!", e.x, e.y);
  }

  //poster 
  image(img4, 690, 50, 100, 130);
  image(img5, 690, 200, 100, 130);
}

function randomPoint() {
  return {
    x: random(rectX, rectX + rectW),
    y: random(rectY, rectY + rectH)
  };
}


function setRandomRestart() {
  let delay = random(4000, 6000);
  restartTime = millis() + delay;
}

function drawMain2() {
  let bgColor;
  if (hours > 0 && hours <= 5) {
    bgColor = lerpColor(color(0, 0, 0), color(43, 44, 92), map(hours, 0, 5, 0, 1));
  } else if (hours > 5 && hours < 7) {
    bgColor = lerpColor(color(43, 44, 92), color(163, 182, 190), map(hours, 5, 7, 0, 1));
  } else if (hours > 7 && hours <= 9) {
    bgColor = lerpColor(color(163, 182, 190), color(107, 142, 176), map(hours, 7, 9, 0, 1));
  } else if (hours > 9 && hours <= 16) {
    bgColor = lerpColor(color(107, 142, 176), color(110, 167, 223), map(hours, 9, 16, 0, 1));
  } else if (hours > 16 && hours < 18) {
    bgColor = lerpColor(color(110, 167, 223), color(49, 39, 85), map(hours, 16, 18, 0, 1));
  } else if (hours > 18 && hours < 20) {
    bgColor = lerpColor(color(49, 39, 85), color(38, 29, 49), map(hours, 18, 20, 0, 1));
  } else {
    bgColor = lerpColor(color(38, 29, 49), color(0, 0, 0), map(hours, 20, 24, 0, 1));
  }

  hours = hours + 0.005;
  if (hours > 24) {
    hours = 0;
  }


  background(bgColor);


  stroke(0);
  fill(255);
  rect(50, 50, 50, 50);
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("return", 50, 50);
  image(img2, 100, 0, 600, 500);

  for (let i = 0; i < fireworks.length; i++) {
    fireworks[i].update();
    fireworks[i].display();
  }

  if (mouseIsPressed) {
    for (let i = 0; i < 3; i++) {
      fireworks.push(new Firework(mouseX, mouseY))
    }
  }

  //splice
  for (let i = fireworks.length - 1; i >= 0; i--) {
    let b = fireworks[i]
    if (b.isVisible == false) {
      fireworks.splice(i, 1)
    }
  }
}

class Firework {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    this.hue = random(0, 360);

    this.speedX = random(-3, 3);
    this.speedY = random(-1, -3);

    //check canvas 
    this.isVisible = true;

  }

  update() {

    this.x += this.speedX;
    this.y += this.speedY;

    this.speedY += 0.06;
    this.speedX *= 0.99;

    this.hue -= 2

    this.isOnCanvas();

  }

  isOnCanvas() {
    //check horizontal 
    if (this.x > width || this.x < 0) {
      this.isVisible = false
    }
    //check vertical 
    if (this.y > height || this.y < 0) {
      this.isVisible = false
    }
  }

  display() {

    push();
    translate(this.x, this.y);

    colorMode(HSB)
    fill(this.hue, 40, 120)
    noStroke();
    circle(0, 0, this.size);

    pop();
  }
}


class Cloud {
  constructor(u, v, s) {
    this.u = u;
    this.v = v;
    this.s = s;
    this.windSpeed = random(-5 || 5);

  }

  display() {
    push();
    translate(this.u, this.v);
    noStroke();
    alphaValue = map(sin(t), -1, 1, 0, 255);
    t += fadeSpeed;
    fill(255, alphaValue);
    circle(-20, 20, this.s / 1.2);
    circle(50, 10, this.s / 1.2);
    circle(100, 20, this.s / 1.5);
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