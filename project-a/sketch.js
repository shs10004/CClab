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
  background(250, 215, 232);
  move(x, y,0.5);
  move(x-250,y +180,2)
  move2(x,y,0.5)
   if (mouseIsPressed == true) {
    x = lerp(x, mouseX, 0.1);
    y = lerp(y, mouseY, 0.1);
  }
  bubble(x, y,2);
  bubble(x-280,y-150,2)
  opbubble(x-250,y+50,2)
  opbubble(x+180,y+170,2)
  

}

/////////////////////////////////////////original bubble 
function bubble(cx, cy, size) {
  push();
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
  translate(cx,cy)
  scale(size)
  rotate(radians(frameCount*3))

  let b = dist(mouseX,mouseY,cx,cy)
  if (c < (100/2)*size){
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
  translate(cx,cy)
  scale(size)
  rotate(-radians(frameCount*8))

  let b = dist(mouseX,mouseY,cx,cy)
  if (c < (100/2)*size){
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
    let r = 100 + 10*sin(frameCount*0.1 + offset);
    let x = width/2 + 250 + r*cos(angle);
    let y = height/2 -120 + r*sin(angle);
    curveVertex(x,y);
    
    let c = dist(mouseX,mouseY,cx,cy)
  if (c < (200)*size){
    fill(250, 185, 208);
    
  }else{
    fill(240, 110, 184)
  }
  }
  endShape(CLOSE);
  pop();
  push();
  beginShape();
  for(let i=0;i<n;i++){
    let angle = map(i,0,n,0,2*PI);
    let offset = map(i,0,n,0,5*PI);
    let r = 60 + 10*sin(-frameCount*0.08 + offset);
    let x = width/2 +250 + r*cos(angle);
    let y = height/2 - 120 + r*sin(angle);
    curveVertex(x,y);
    
    let c = dist(mouseX,mouseY,cx,cy)
  if (c < (200)*size){
    fill(252, 210, 225);
    
  }else{
    fill(230, 41, 148)
  }
  }
  endShape(CLOSE);
  pop();
}
//////////////////////////////////////////move 2
function move2(cx, cy, size) {
  push();
  beginShape();
  for(let i=0;i<n;i++){
    let angle = map(i,0,n,0,2*PI);
    let offset = map(i,0,n,0,5*PI);
    let r = 100 + 10*sin(-frameCount*0.1 + offset);
    let x = width/2 - 100 + r*cos(angle);
    let y = height/2 +200 + r*sin(angle);
    curveVertex(x,y);
    
    let c = dist(mouseX,mouseY,cx,cy)
  if (c < (200)*size){
    fill(240, 110, 184);
    
  }else{
    fill(250, 185, 208)
  }
  }
  endShape(CLOSE);
  pop();
  push();
  beginShape();
  for(let i=0;i<n;i++){
    let angle = map(i,0,n,0,2*PI);
    let offset = map(i,0,n,0,5*PI);
    let r = 60 + 10*sin(frameCount*0.1 + offset);
    let x = width/2 - 100 + r*cos(angle);
    let y = height/2 + 200 + r*sin(angle);
    curveVertex(x,y);
    
    let c = dist(mouseX,mouseY,cx,cy)
  if (c < (200)*size){
    fill(230, 41, 148);
    
  }else{
    fill(252, 210, 225)
  }
  }
  endShape(CLOSE);
  pop();
}