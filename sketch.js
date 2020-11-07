var monkey, monkeyImage,Stone,StoneImage,Bg,bgImage, invisibleground,foodGroup,banana,bananaImage,stoneGroup,gamestate
var score;
  score=0;
//var gameOver,restart

function preload(){
  monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png")
  
  StoneImage=loadImage("stone.png");
  bgImage=loadImage("jungle.jpg");
  bananaImage=loadImage("banana.png");
  
}

function setup(){
  createCanvas(600, 400)
  background(0);
  Bg=createSprite(300,200);
  Bg.addImage("background",bgImage);
  Bg.velocityX=-2
  monkey=createSprite(50,360,20,50);
  monkey.addAnimation("running",monkeyImage);
  monkey.scale=0.05;
  foodGroup=createGroup();
  stoneGroup=createGroup();
  
 invisibleground=createSprite(400,398,9000,10);
 invisibleground.visible=false;
}

function draw(){
  gameState=0
 
    
  monkey.setCollider("rectangle",0,0,250,559);
  
  if(frameCount%375==0){
    banana=createSprite(600,(random(100,300)))
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-2;
    foodGroup.add(banana);
     }
  if(frameCount%120==0){
   Stone=createSprite(500,355);
    Stone.setCollider("circle",0,0,170);
    Stone.addImage("stone",StoneImage);
    Stone.scale=0.15;
     Stone.velocityX=-2;
    stoneGroup.add(Stone);
     }
  
if(monkey.isTouching(foodGroup))
{
  foodGroup.destroyEach();
  
  score=score+5;
  }
  
  if(stoneGroup.isTouching(monkey)){
    Bg.velocityX=0;
    Stone.velocity=0;  
  }
  
  if(Bg.x<50){
   Bg.x=Bg.width/2;
  }
  
  if(keyDown("space")&&monkey.y>=300){
     monkey.velocityY=-10;
    //jumpSound.play();
     }
   //for gravity effect to trex
  monkey.velocityY= monkey.velocityY+0.2;
  monkey.collide(invisibleground);
  
switch(score){
  case 5: monkey.scale=0.075;
    break;
  case 10: monkey.scale=0.1;
    break;
  case 15: monkey.scale=0.15;
    break;
    case 20: monkey.scale=0.2;
    break;
    default: break;
}
    
  drawSprites();
 
  text(score,400,100)
}