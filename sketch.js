var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
 car= createSprite(50, 200, 50, 50);
 car.velocityX=speed;
 wall= createSpirte(1500,200,60,height/2);
 wall.shapeColor(80,80,80);
 
}

function draw() {
  background(255,255,255); 
 if(car.isTouching(wall)){
  //  0.5*weight*speed*speed/22500
    wall.shapeColor("white");
  } 
  isTouching();
  drawSprites();
}
function isTouching(){
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
   && car.y - wall.y < wall.height/2 + car.height/2
  && wall.y - car.y < wall.height/2 + car.height/2) {
return true;
}
else{
    return false;
}
}