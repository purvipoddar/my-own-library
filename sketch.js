var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(450, 0, 50, 50);
  fixedrect.shapeColor = "red"
  fixedrect.velocityY = 5;
  movingrect = createSprite(450,400,60,80);
  movingrect.shapeColor = "blue"
  movingrect.velocityY = -5;

}

function draw() {
  background(220)
  bounceOff(movingrect,fixedrect);
  drawSprites();
}
