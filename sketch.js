var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver;
var restart;
var gameOverImg;
var restartImg;
var score;
var ball;
var obstaclesGroup,obstacle, obstacle1, obstacle2, obstacle3, obstacle4;
var apple,banana,watermellon,mango,peer;
var monsterSound, fruitSound;

function preload(){
   appleImg=loadImage("apple.png");
   bananaImg=loadImage("banana.png");
   peerImg=loadImage("peer.png");
   obstacle1 = loadImage("monster2.png");
   obstacle2= loadImage("monster4.png");
   obstacle3 = loadImage("monster5.png");
   obstacle4 = loadImage("monster6.png");
   gameOverImg=loadImage("GameOver.png");
   restartImg=loadImage("reset.png");
   strawberryImg=loadImage("strawberry-png.png");
   mangoImg=loadImage("mango_PNG.png");
   watermellonImg=loadImage("watermelon.png")
 
   monsterSound=loadSound("monster.mp3");
   fruitSound=loadSound("apple.mp3");
  
 
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-30 );
  ball = createSprite(displayWidth/2-400,80,20,50);
    
    ball.shapeColor="red";
    ball.scale=0.2;
    
    score=0;
    gameOver=createSprite(displayWidth/2,displayHeight-450,30,20);
    restart=createSprite(displayWidth/2,displayHeight-280,30,20);
    gameOver.addImage("gameOver",gameOverImg);
    restart.addImage("restart",restartImg);
    gameOver.scale=0.3;
    restart.scale=0.3;
    gameOver.visible=false;
    restart.visible=false;
    
    obstaclesGroup = new Group();
    //fruitsGroup= new Group();
    bananaGroup = new Group();
    mangoGroup = new Group();
    peerGroup = new Group();
    watermellonGroup = new Group();
    appleGroup = new Group();
}

function draw()
{
 background("black");
 textSize(40);
fill("white");
textFont("ALGERIAN");
 text("score:"+ score,displayWidth/2-600,35);
 if(gameState === PLAY){
  if(obstaclesGroup.isTouching(ball)){
      
     
      monsterSound.play();
      gameState = END;
  }
 if(appleGroup.isTouching(ball)){
   score ++
   fruitSound.play();
 }
 if(bananaGroup.isTouching(ball)){
  
  monsterSound.play();
  gameState = END;
}

if(mangoGroup.isTouching(ball)){
  
  monsterSound.play();
  gameState = END;
}
if(watermellonGroup.isTouching(ball)){
  
  monsterSound.play();
  gameState = END;
}
if(peerGroup.isTouching(ball)){
  
  monsterSound.play();
  gameState = END;
 
}


   
if(keyDown(UP_ARROW)){
  changePosition(0,-20);
}
else if(keyDown(DOWN_ARROW)){
  changePosition(0,20)
}

spawnObstacles();
spawnFruits();
ball.addImage(appleImg);

}

else if(gameState === END) {
  gameOver.visible = true;
  restart.visible = true;
  spawnFruits.visible=false;
spawnObstacles.visible=false;
score.visible=true;
ball.visible=false;
  //set velcity of each game object to 0
  
  ball.velocityY = 0;
  ball.velocityX=0;
  obstaclesGroup.setVelocityXEach(0);
  bananaGroup.setVelocityXEach(0);
  appleGroup.setVelocityXEach(0);
  peerGroup.setVelocityXEach(0);
  watermellonGroup.setVelocityXEach(0);
  mangoGroup.setVelocityXEach(0);
  bananaGroup.setLifetimeEach(0);
  appleGroup.setLifetimeEach(0);
  peerGroup.setLifetimeEach(0);
  mangoGroup.setLifetimeEach(0); 
  watermellonGroup.setLifetimeEach(0); 
  obstaclesGroup.setLifetimeEach(0);
  if(mousePressedOver(restart)) {
  reset();
}
  
}

drawSprites();
}
function changePosition(x,y){
  ball.x=ball.x+x;
  ball.y=ball.y+y;
}

function spawnFruits() {
  if(frameCount % 500 === 0) {
    var fruitRow = createSprite(displayWidth=1200,displayHeight=100,10,40);
   // fruitRow.velocityX = -4;
    fruitRow.scale = 0.05;
    fruitRow.lifetime = 300;
    for(var i=0;i<5;i++)
   
    { if(i=1) {
        banana=createSprite(displayWidth=1200,displayHeight=50,10,10)
        banana.addImage(bananaImg)
     banana.scale=0.02 
    banana.velocityX=-2;
    banana.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
   bananaGroup.add(banana);
  }

       if(i=2) {
           apple=createSprite(displayWidth=1200,displayHeight=170,10,10) 
          apple.addImage(appleImg) 
          apple.scale=0.2;
          apple.velocityX=-2;
          apple.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
          appleGroup.add(apple);
         } 
         if(i=3) { 
           watermellon=createSprite(displayWidth=1210,displayHeight=290,10,10)
        watermellon.addImage(watermellonImg) 
           watermellon.scale=0.2;
          watermellon.velocityX=-2;
          watermellon.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
          watermellonGroup.add(watermellon);
          } 
           if(i=4) { 
             mango=createSprite(displayWidth=1210,displayHeight=410,10,10)
            mango.addImage(mangoImg) 
            mango.scale=0.3;
            mango.velocityX=-2;
            mango.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
            mangoGroup.add(mango);
            } 
           if(i=5) { 
             peer=createSprite(displayWidth=1200,displayHeight=530,10,10)
            peer.addImage(peerImg) 
               peer.scale=0.2;
               peer.velocityX=-2;
               peer.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
               peerGroup.add(peer);
          } 
    
          if(i=6) { 
            peer=createSprite(displayWidth=950,displayHeight=50,10,10)
           peer.addImage(peerImg) 
              peer.scale=0.2;
             peer.velocityX=-2;
             peer.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
              peerGroup.add(peer);
         } 
         if(i=4) { 
          mango=createSprite(displayWidth=950,displayHeight=170,10,10)
         mango.addImage(mangoImg) 
         mango.scale=0.3;
         mango.velocityX=-2;
         mango.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
         mangoGroup.add(mango);
         } 
        if(i=7) {
          apple=createSprite(displayWidth=950,displayHeight=290,10,10) 
         apple.addImage(appleImg) 
         apple.scale=0.2;
         apple.velocityX=-2;
         apple.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
         appleGroup.add(apple);} 
  
         if(i=8) { 
          watermellon=createSprite(displayWidth=960,displayHeight=410,10,10)
       watermellon.addImage(watermellonImg) 
          watermellon.scale=0.2;
          watermellon.velocityX=-2;
          watermellon.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
          watermellonGroup.add(watermellon);
         } 
  
          if(i=9) {
          banana=createSprite(displayWidth=950,displayHeight=520,10,10)
          banana.addImage(bananaImg)
       banana.scale=0.02 
      banana.velocityX=-2;
      banana.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
      bananaGroup.add(banana);
    }
    if(i=10) { 
      watermellon=createSprite(displayWidth=700,displayHeight=50,10,10)
   watermellon.addImage(watermellonImg) 
      watermellon.scale=0.2;
      watermellon.velocityX=-2;
      watermellon.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
      watermellonGroup.add(watermellon);
     }      
     if(i=11) { 
      peer=createSprite(displayWidth=700,displayHeight=160,10,10)
     peer.addImage(peerImg) 
        peer.scale=0.2;
       peer.velocityX=-2;
       peer.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
        peerGroup.add(peer);
   } 
   if(i=12) {
    banana=createSprite(displayWidth=700,displayHeight=290,10,10)
    banana.addImage(bananaImg)
 banana.scale=0.02 
banana.velocityX=-2;
banana.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
bananaGroup.add(banana);
}   
if(i=13) { 
  mango=createSprite(displayWidth=720,displayHeight=410,10,10)
 mango.addImage(mangoImg) 
 mango.scale=0.3;
 mango.velocityX=-2;
 mango.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
 mangoGroup.add(mango);
 } 
        
 if(i=14) {
  apple=createSprite(displayWidth=710,displayHeight=540,10,10) 
 apple.addImage(appleImg) 
 apple.scale=0.2;
 apple.velocityX=-2;
 apple.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
 appleGroup.add(apple);} 
        
 if(i=15) {
  apple=createSprite(displayWidth=450,displayHeight=50,10,10) 
 apple.addImage(appleImg) 
 apple.scale=0.2;
 apple.velocityX=-2;
 apple.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
 appleGroup.add(apple);} 
        
 if(i=16) {
  banana=createSprite(displayWidth=450,displayHeight=170,10,10)
  banana.addImage(bananaImg)
banana.scale=0.02 
banana.velocityX=-2;
banana.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
bananaGroup.add(banana);
}         
if(i=17) { 
  peer=createSprite(displayWidth=450,displayHeight=290,10,10)
 peer.addImage(peerImg) 
    peer.scale=0.2;
   peer.velocityX=-2;
   peer.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
    peerGroup.add(peer);i
}        
if(i=18) { 
  watermellon=createSprite(displayWidth=460,displayHeight=410,10,10)
watermellon.addImage(watermellonImg) 
  watermellon.scale=0.2;
 watermellon.velocityX=-2;
 watermellon.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
  watermellonGroup.add(watermellon);
 }            
        
 if(i=13) { 
  mango=createSprite(displayWidth=460,displayHeight=530,10,10)
 mango.addImage(mangoImg) 
 mango.scale=0.3;
 mango.velocityX=-2;
 mango.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
 mangoGroup.add(mango);
 }      
        
 
fruitRow.lifetime = 300;
        
        
        
        
        
        
        
        
        
        
        
        
        }
}
}
function spawnObstacles() {
  if(frameCount % 250 === 0) {
    obstacle = createSprite((1200),random(100,500),10,40);
    obstacle.velocityX = -4;
    obstacle.scale = 0.05;
    obstacle.lifetime = 300;
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      
      default: break;
    }
  
  
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
   
  }
}

function reset(){
  gameState=PLAY ;
 gameOver.visible=false;
 restart.visible=false;
 appleGroup.destroyEach();
 obstaclesGroup.destroyEach();
 bananaGroup.destroyEach();
 peerGroup.destroyEach();
 mangoGroup.destroyEach();
 watermellonGroup.destroyEach();
 ball.visible=true;
 ball.x=300;
 ball.y=300;
score=0;
 }
 