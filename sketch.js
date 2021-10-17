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
	var force;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Wall(400,595,800,10);
	right= new Wall(750,514,10,150);
	left= new Wall(550,514,10,150);

	var ball_options={
	isStatic:false,
	restitution:0.75,
	friction:0,
	density:2.5
	}

	ball = Bodies.circle(200,120,20,ball_options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
}

function draw() 
{
	background(51);

	ground.display();
	right.display();
	left.display();

	ellipse(ball.position.x,ball.position.y,20);

	Engine.update(engine);
	}

	function keyPressed(){
		if(keyCode === UP_ARROW){
			Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
		}
	}