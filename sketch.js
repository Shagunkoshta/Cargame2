var wall,bullet;
var thickness,speed,weight;

function setup() {
  createCanvas(1200,400);
 
   thickness=random(22,83);
   speed=random(223,321);
   weight=random(30,52);


  bullet = createSprite(50, 200, 70,10);
  bullet.shapeColor="red";

  wall = createSprite(1100,200, thickness, height/2);
  wall.shapeColor="pink";
}
var thickness;
function draw() {
  background("black"); 
  
if (hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed *speed/(thickness * thickness * thickness)
}  
if (damage>10)
{
wall.shapeColor="green";
text("Good going",200,200)
}
if (damage<10)
{
wall.shapeColor="red";
text("damage",200,200)
}
else
{
  text("",200,200);
}  

drawSprites();
}

function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>wallLeftEdge)
{
return true
}
return false;
}