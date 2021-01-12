
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;
var canvas;
var canvasmouse;

var centerX = 100, centerY = 100;
bobDiameter = 60; 

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);
    engine = Engine.create();
	world = engine.world;

	 canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world, mConstraint);

	bob1 = new Bob(centerX,centerY,"blue");
	bob2 = new Bob(centerX+bobDiameter,centerY,"blue");
	bob3 = new Bob(centerX+(bobDiameter*2),centerY,"blue");
	bob4 = new Bob(centerX+(bobDiameter*3),centerY,"blue");
	bob5 = new Bob(centerX+(bobDiameter*4),centerY,"blue");

    roof = new Roof(300,100,450,30);

		
	rope1 = new Rope(bob1.body,{x: centerX, y: centerY});
	rope2 = new Rope(bob2.body,{x: centerX+bobDiameter, y: centerY});
	rope3 = new Rope(bob3.body,{x: centerX+bobDiameter*2, y: centerY});
	rope4 = new Rope(bob4.body,{x: centerX+bobDiameter*3, y: centerY});
	rope5 = new Rope(bob5.body,{x: centerX+bobDiameter*4, y: centerY});
	

     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(177,156,217);
  
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 roof.display();

 



  drawSprites();
 
}

function keyPressed(){
 if(keyCode==UP_ARROW){
	 Matter.Body.applyForce(bob3.body,bob3.body.position,{x: 50, y: -40});
  }
}


