var bg, bgimg
var bln, blnimg
var topGround
var bottomGround
var topObstacle1, topObstacle2
var bottomObstacle1, bottomObstacle2, bottomObstacle3

function preload(){
  bgimg=loadImage("assets/bg.png");
  blnimg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

  topObstacle1 = loadImage("assets/obsTop1.png");
  topObstacle2 = loadImage("assets/obsTop2.png");

  bottomObstacle1 = loadImage("assets/obsBottom1.png");
  bottomObstacle2 = loadImage("assets/obsBottom2.png");
  bottomObstacle3 = loadImage("assets/obsBottom3.png");
}

function setup(){
bg = createSprite(165,485,1,1);
  bg.addImage(bgimg)
  bg.scale = 1.3

bln = createSprite(100,200,20,50);
  bln.addAnimation("balloonsImg",blnimg);
  bln.scale = 0.2

  topGround = createSprite(200,10,800,20);
  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;
  topGround.visible = false;
}

function draw(){
  background("black")
  if(keyDown("space")){
     bln.velocityY =-6
  }
  bln.velocityY +=1
topObstacles()
drawSprites()
}
function topObstacles(){
if(frameCount % 80 === 0){
  var topObstacle = createSprite(400,50,40,50)
  topObstacle.velocityX = -4

  var rand = Math.round(random(1,2));
  switch(rand) {
    case 1: topObstacle.addImage(topObstacle1);
          break;
    case 2: topObstacle.addImage(topObstacle2);
          break;
    default: break;
  }
  topObstacle.y = Math.round(random(10,100));

  topObstacle.scale = 0.15
  topObstacle.lifetime = 120

  bln.depth = topObstacle.depth
  bln.depth = bln.depth + 1
}
}
function bottomObstacles(){

}