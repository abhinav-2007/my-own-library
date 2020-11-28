var fixedRect, movingRect;
var wall,car;
function setup() {
  createCanvas(1200,800);
  object1 = createSprite(600, 400, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(400,200,80,30);
  object2.shapeColor = "green";
  object2.debug = true;
  wall=createSprite(800,200,20,70);
  wall.shapeColor="pink";
  car=createSprite(200,200,50,50);
  car.shapeColor="blue";
  car.velocityX=3;

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if(isTouching(wall,car)){
      car.shapeColor="purple";
  }
  bounceOff(car,wall);
  drawSprites();
}
