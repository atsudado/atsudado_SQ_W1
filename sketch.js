let jengaImg;
 
function preload() {
  jengaImg = loadImage("assets/images/jenga.png");
}
 
function setup() {
  createCanvas(800, 450);
  background(30, 80, 200); // blue
 
  // Table rectangle
  fill(120, 70, 30);
  noStroke();
  rect(0, 340, 800, 140, 6);
 
  // Jenga image centered above the table
  image(jengaImg, width / 2 - jengaImg.width / 2, 80);

  // Text
  fill(255);
  textAlign(CENTER);
  textSize(32);
  textStyle(BOLD);
  text("Player 1 wins!", width / 2, 70);
}
 
function draw() {
  // static scene
}