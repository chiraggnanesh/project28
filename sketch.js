const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImg;

function preload(){
	boyImg = loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 690, 800, 30);

	tree = new Tree(200, 400);

	Engine.run(engine);
  
}


function draw() {
	background("skyBlue");

	
	ground.display();

	tree.display();
	
	drawSprites();
}



