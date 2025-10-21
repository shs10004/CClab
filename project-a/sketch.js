let x;
let y;
let x1;
let y1;
let n=25
let c;

function setup() {
  let canvas = createCanvas(800, 500);
canvas.parent("p5-canvas-container");

  x=width/2
  y=height/2
  x1=width/2
  y1=height/2
}

function draw() {
  background(0);
  fill(250, 185, 208);
  noStroke();
    circle(x1,y1,10)
  fill(240, 110, 184)
  noStroke();
    circle(x1+50,y1-80,10)
  fill(250, 185, 208);
  noStroke();
    circle(x1-200,y1+100,10)
  fill(240, 110, 184)
  noStroke();
    circle(x1+160,y1+150,10)
    fill(250, 185, 208);
  noStroke();
    circle(x1+200,y1-30,10)
  fill(240, 110, 184)
  noStroke();
    circle(x1-280,y1+80,10)
    fill(250, 185, 208);
  noStroke();
    circle(x1-350,y1-100,10)
  fill(240, 110, 184)
  noStroke();
    circle(x1+360,y1-150,10)
   fill(250, 185, 208);
////////reset
  noStroke();
    circle(x1+100,y1+100,10)
  fill(240, 110, 184)
  noStroke();
    circle(x1-50,y1+80,10)
  fill(250, 185, 208);
  noStroke();
    circle(x1+200,y1-100,10)
  fill(240, 110, 184)
  noStroke();
    circle(x1-160,y1-150,10)
    fill(250, 185, 208);
  noStroke();
    circle(x1-200,y1+30,10)
  fill(240, 110, 184)
  noStroke();
    circle(x1+280,y1-80,10)
    fill(250, 185, 208);
  noStroke();
    circle(x1+350,y1+100,10)
  fill(240, 110, 184)
  noStroke();
    circle(x1-360,y1+150,10)
  
  move(x, y,0.5);
  move(x-250,y +180,2)
  move2(x,y,0.5)
  bubble(x-20, y-30,2);
  bubble(x-280,y-150,2)
  opbubble(x-300,y+50,2)
  opbubble(x+250,y+120,2)
  if (mouseIsPressed == true) {
    x = lerp(x, mouseX, 0.1);
    y = lerp(y, mouseY, 0.1);
  }

}

/////////////////////////////////////////original bubble 
function bubble(cx, cy, size) {
  push();
  strokeWeight(0.8);
  stroke(201, 31, 127)
  translate(cx,cy)
  scale(size)
  rotate(-radians(frameCount*2))
  
  let c = dist(mouseX,mouseY,cx,cy)
  if (c < (100/2)*size){
    fill(250, 185, 208);
    
  }else{
    fill(240, 110, 184)
  }
  circle(0,10,80);
  
  pop();
  
  push();
  strokeWeight(0.8);
  stroke(201, 31, 127)
  translate(cx,cy)
  scale(size)
  rotate(radians(frameCount*3))

  let b = dist(mouseX,mouseY,cx,cy)
  if (b < (100/2)*size){
    fill(252, 210, 225);
    
  }else{
    fill(230, 41, 148)
  }
  circle(5,5,30);
  
  pop();
}
 
///////////////////////////////////////opposite direction 
function opbubble(cx, cy, size) {
  push();
  strokeWeight(0.8);
  stroke(252, 210, 225)
  translate(cx,cy)
  scale(size)
  rotate(radians(frameCount*2))
  
  let c = dist(mouseX,mouseY,cx,cy)
  if (c < (100/2)*size){
    fill(240, 110, 184);
    
  }else{
    fill(250, 185, 208)
  }
  circle(10,20,70);
  
  pop();
  
  push();
  strokeWeight(0.8);
  stroke(252, 210, 225)
  translate(cx,cy)
  scale(size)
  rotate(-radians(frameCount*8))

  let b = dist(mouseX,mouseY,cx,cy)
  if (b < (100/2)*size){
    fill(230, 41, 148);
    
  }else{
    fill(252, 210, 225)
  }
  circle(5,2,30);
  
  pop();
  }
///////////////////////////////////////////moving bubble 
function move(cx, cy, size) {
  push();
  beginShape();
  for(let i=0;i<n;i++){
    let angle = map(i,0,n,0,2*PI);
    let offset = map(i,0,n,0,5*PI);
    let r = 120 + 10*sin(frameCount*0.1 + offset);
    let x = width/2 + 250 + r*cos(angle);
    let y = height/2 -150 + r*sin(angle);
    curveVertex(x,y);
    
    let c = dist(mouseX,mouseY,cx,cy)
  if (c < (200)*size){
    fill(240, 110, 184);
    
  }else{
     fill(60,108,162);
  }
  }
  endShape(CLOSE);
  pop();
  push();
  beginShape();
  for(let i=0;i<n;i++){
    let angle = map(i,0,n,0,2*PI);
    let offset = map(i,0,n,0,5*PI);
    let r = 70 + 10*sin(-frameCount*0.08 + offset);
    let x = width/2 +250 + r*cos(angle);
    let y = height/2 - 150 + r*sin(angle);
    curveVertex(x,y);
    
  let b = dist(mouseX,mouseY,cx,cy)
  if (b < (200)*size){
    fill(230, 41, 148);
    
  }else{
    fill(179,208,242);
  }
    
  }
  endShape(CLOSE);
  pop();
}
//////////////////////////////////////////move 2
function move2(cx, cy, size) {
  push();
  beginShape();
  fill(60,108,162)
  for(let i=0;i<n;i++){
    let angle = map(i,0,n,0,2*PI);
    let offset = map(i,0,n,0,5*PI);
    let r = 150 + 10*sin(-frameCount*0.1 + offset);
    let x = width/2 - 100 + r*cos(angle);
    let y = height/2 +250 + r*sin(angle);
    curveVertex(x,y);
    let c = dist(mouseX,mouseY,cx,cy)
  if (c < (200)*size){
    fill(240, 110, 184);
    
  }else{
     fill(60,108,162);
  }
  }
  endShape(CLOSE);
  pop();
  push();
  beginShape();
  fill(179,208,242)
  for(let i=0;i<n;i++){
    let angle = map(i,0,n,0,2*PI);
    let offset = map(i,0,n,0,5*PI);
    let r = 90 + 10*sin(frameCount*0.1 + offset);
    let x = width/2 - 100 + r*cos(angle);
    let y = height/2 + 250 + r*sin(angle);
    curveVertex(x,y);
    
    let b = dist(mouseX,mouseY,cx,cy)
  if (b < (200)*size){
    fill(230, 41, 148);
    
  }else{
    fill(179,208,242);
  }
    
  }
  endShape(CLOSE);
  pop();
}