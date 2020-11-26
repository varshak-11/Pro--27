
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1,rope2,rope3,rope4,rope5,rope6,rope7;

var bobObject1, bobObject2,bobObject3, bobObject4, bobObject5, roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	//bobObject1= new bob(400,200,7)
	//bobObject2= new bob(300,200,7)
	//bobObject3= new bob(500,200,7)
	//bobObject4= new bob(100,200,7)
	//bobObject5= new bob(200,200,7)
    roofObject= new roof(600,20,70,70)

	//rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter/2,0)
	//rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter/2,0)
	//rope3=new rope(bobObject3.body,roofObject.body,-bobDiameter/2,0)
	//rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter/2,0)
	//rope5=new rope(bobObject5.body,roofObject.body,-bobDiameter/2,0)


	//rope6=new rope(bobObject2.body,bobObject3.body,-bobDiameter/2,0)
	//rope7=new rope(bobObject4.body,bobObject5.body,-bobDiameter/2,0)
	
}



function draw() {
  rectMode(CENTER);
  background(0);
  
//bobObject1.display();
 //bobObject2.display();
 //bobObject3.display();
 //bobObject4.display();
 //bobObject5.display();
 
//  rope1.display();
//  rope2.display();
//  rope3.display();
//  rope4.display();
//  rope5.display();
//  rope6.display();
//  rope7.display();

 roofObject.display();


 
 
  drawSprites();
 
}



