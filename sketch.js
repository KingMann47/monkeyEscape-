
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime;
  
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  foodGroup = new Group();
  obstacleGroup = new Group();

  
}
function setup() {
 createCanvas(500,390);
  
  ground=createSprite(200,385,90000,10)
  ground.velocityX = -1;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  monkey=createSprite(80,15,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  score=0;
  survivalTime=0;
}
function draw() {
background(255);
  
stroke("white");
textSize(20);
fill("white");
text("score: " + score,500,50)
  
stroke("black");
textSize(20);
fill("black");
survivalTime= Math.ceil(frameCount/frameRate())
text("survival Time:" + survivalTime,100,50)  

  
if (ground.x < 0){
      ground.x = ground.width/2;
}
  
 if(keyDown("space")) {
      monkey.velocityY = -12;
    }
  
  score = score + Math.round(getFrameRate()/60);
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityY=0;
    ground.velocityX=0;
    
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    
    foodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    
    survivalTime=0;
  }

monkey.velocityY=monkey.velocityY+0.8;   
monkey.collide(ground);     
spawnObstacles();  
spawnBananas(); 
  


  
drawSprites();

}
function spawnObstacles() {
if (frameCount % 300 === 0) {
    obstacle = createSprite(360,360,40,10);
   // obstacle.x = Math.round(random(200,300 ));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
  obstacleGroup.add(obstacle);
}
}

function spawnBananas(){
  
  if (frameCount % 100 === 0) {
    banana = createSprite(360,360,40,10);
     banana.y = Math.round(random(150,160 ));
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 200;
  foodGroup.add( banana);
}
  
}