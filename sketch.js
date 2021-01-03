
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box1,box2,box3;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(1250, 650,200,20);
	box2 = new Box(1150,610,20,100);
	box3 = new Box(1350,610,20,100)

	

	var options={
		isStatic:false,
		restitution:0.2,
		friction:1.0,
		density:1.2
	}
	paperObject=Bodies.circle(100,640,20,options);
	World.add(world,paperObject);

	ground = new Ground(750,660,1500,10)
	
  
}


function draw() {
	Engine.update(engine)
	rectMode(CENTER);
  background(0);
  


  box1.display();
  box2.display();
  box3.display();
 
  ground.display();
  ellipseMode(RADIUS);
  ellipse(paperObject.position.x,paperObject.position.y,20,20)
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject,paperObject.position,{x:100,y:-85});
	}
}

