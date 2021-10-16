	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	let engine;
	let world;

	var ground;
	var right;
	var left;
	var ball;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Wall(width/2,670,width,20);
	right= new Wall(390,200,20,400);
	left= new Wall(1100,600,20,120);

	var ball_options={
	isStatic:false,
	restitution:0.95,
	friction:0,
	density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() 
{
	background(51);

	ground.display();
	right.display();
	left.display();

	ellipse(ball.position.x,ball.position.y);
	rect(wall.position.x,wall.position.y);

	Engine.update(engine);

	if(keyCode === UP_ARROW){
		keyPressed()
	} 

	Engine.run(engine);

	}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}
}
