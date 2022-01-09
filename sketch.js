var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

 ghost= createSprite(300,300,50,30)
 ghost.addImage("ghost",ghostImg)
  ghost.scale=0.4

  doorsGroup=new Group()
  climbersGroup=new Group()
  invisibleBlockGroup=new Group()
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    

    if(keyDown("space")){
      ghost.velocityY=-5

    }
    ghost.velocityY=ghost.velocityY+0.4;

    if(keyDown("left")){
      ghost.x= ghost.x-4
    }
   if(keyDown("right")){
   ghost.x=ghost.x+4

   }
   if(climbersGroup.isTouching(ghost)){
     ghost.velocityY=0
   }
   if(invisibleBlockGroup.isTouching(ghost)){
     console.log("Working")
    text("Game Over",300,300)
  }
   Spawndoors()
   drawSprites()
  
}
function Spawndoors(){
if(frameCount%150===0){
  door=createSprite(200,-50)
  door.addImage(doorImg)
door.velocityY=2
door.x=Math.round(random(100,600))
climber=createSprite(200,10)
climber.addImage(climberImg)
climber.x=door.x
climber.velocityY=2
invisibleBlock=createSprite(200,15)
invisibleBlock.x=door.x
invisibleBlock.width=climber.width
invisibleBlock.height=2
invisibleBlock.debug=true
invisibleBlock.velocityY=2
invisibleBlockGroup.add(invisibleBlock)
climbersGroup.add(climber)
doorsGroup.add(door)

}

}