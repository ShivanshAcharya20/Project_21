
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0
	}

	ball = Bodies.circle(260, 100, 40, ball_options)
	World.add(world, ball)

	ground = new Ground(800, 650, 1600, 50)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ellipse(ball.position.x, ball.position.y, 40, 40);
  ground.display()
  drawSprites();
 
}



