const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var object;

var star,bg;
var starB;
var starImg,starnightImg;

function preload(){

  fairy1Img=loadAnimation("images/fairy1.png","images/fairy2.png")
  starImg=loadImage("images/star.png")
  bg=loadImage("images/starnight.png") 
}

function setup() {
  createCanvas(800, 750);
  
  engine = Engine.create();
  world = engine.world;
 
  fairy=createSprite(400,375)
  fairy.addAnimation("fairyImg",fairy1Img);
  fairy.scale=0.25;

  star=createSprite(650,30)
  star.addImage(starImg);
  star.scale=0.2;
  

  var starOptions={
    isStatic:true

  }
 starB=Bodies.circle(650,30,20,starOptions);
 World.add(world,starB);


}


function draw() {
  background(bg);

  Engine.update(engine);
  
  star.x=starB.position.x;
  star.y=starB.position.y;

    if(star.y>360 && starB.position.y>360){
   
      Matter.Body.setStatic(starB,true)

    }


  drawSprites();
}







function keyPressed() {

  if(keyCode===RIGHT_ARROW){

    fairy.x=fairy.x+20
    
  }

  if(keyCode===LEFT_ARROW){

    fairy.x=fairy.x-20
  }

  if(keyCode===DOWN_ARROW){

    Matter.Body.setStatic(starB,false)
  }
}