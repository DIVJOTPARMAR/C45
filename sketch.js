
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bgImg,bg,trampo,trampoline

function preload()
{
	bgImg=loadImage("garden.jpg")
	trampo=loadImage("Trampoline.png")

	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	 engine = Engine.create();
	world = engine.world;
	
     bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
     bg.addImage(bgImg)
     bg.scale=0.3

	 trampoline=createSprite(500,810,20,20)
	 trampoline.addImage(trampo)
	 trampoline.scale=0.26

	



Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  gameplay()
  
  drawSprites();
 
}
function gameplay(){

	if(keyDown("LEFT_ARROW")){
		trampoline.x=trampoline.x-40
	}
	if(keyDown("RIGHT_ARROW")){
		trampoline.x=trampoline.x+40

		if(trampoline.x<60){
			trampoline.x=60
		}
	}

	

}



