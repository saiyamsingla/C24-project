
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	slide1=createSprite(boxPosition, boxY, 20,100);  //left wali vertical dandi
 	slide1.shapeColor=color(255,0,0);
	  
	 //yaha pe upar wali simple sprite ki perfect physics engine wali body bnegi
	 slide1Body = Bodies.rectangle(boxPosition+20, boxY, 20, 100 , {isStatic:true} );
	 World.add(world, slide1Body);

	 slide2=createSprite(boxPosition+100, boxY+40, 200,20);  //left wali vertical dandi
	 slide2.shapeColor=color(255,0,0);
	 
	 slide2Body = Bodies.rectangle(boxPosition+100, boxY+45-20, 200, 20 , {isStatic:true} );
	 World.add(world, slide2Body);

	 slide3=createSprite(boxPosition+200, boxY, 20,100);  //left wali vertical dandi
	 slide3.shapeColor=color(255,0,0);
	 
	 slide3Body = Bodies.rectangle(boxPosition+200, boxY, 20, 100 , {isStatic:true} );
	 World.add(world, slide3Body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  drawSprites();
 
}



