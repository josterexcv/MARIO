var PLAY = 1
var END = 0
var gameState = PLAY;

var mario , vegeis , meat;
var block,background,ground

var score = 0;

var gameOver; restart;

function preload(){
 mario = loadAnimation("mario-corriendo.gif");

 vegies = loadImage("images.png");
 meat = loadImage("meat.jpg");

 block = loadImage("unnamed.png");

 backgroundimg = loadImage("imD41l.jpg");
}
function setup() {
  createCanvas(800,400);
  mario = createSprite(50,180,140,20);
 

  ground = createSprite (200,180,400,20)

}

function draw() {
  background(backgroundimg)
  drawSprites();
}