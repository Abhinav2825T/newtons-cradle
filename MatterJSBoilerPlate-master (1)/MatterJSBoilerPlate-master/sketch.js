
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
  rope2=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
  rope3=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
  rope4=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
  rope5=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)	
  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
  drawSprites();
 
}



