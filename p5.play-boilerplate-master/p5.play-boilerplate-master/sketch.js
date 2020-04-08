var fixreat,movingreat;

function setup() {
  createCanvas(800,400);
  fixreat=createSprite(400, 200, 50, 80);
  fixreat.shapeColor="green"
  movingreat=createSprite(200,200,80,30);
  movingreat.shapeColor="green"

}

function draw() {
  background(0);
  movingreat.x=mouseX;
movingreat.y=mouseY;

  isTouching();
  drawSprites();
}

function isTouching() {
  if(movingreat.x - fixreat.x < fixreat.width/2 + movingreat.width/2
    && fixreat.x - movingreat.x < fixreat.width/2 + movingreat.width/2
    && movingreat.y - fixreat.y < fixreat.width/2 + movingreat.width/2
    && fixreat.y - movingreat.y < fixreat.width/2 + movingreat.width/2){
      movingreat.shapeColor="red"
      fixreat.shapeColor="red"
      background(155,100,10);
    }
    else {
      movingreat.shapeColor="green"
      fixreat.shapeColor="green" 
      background(0) 
    }
}