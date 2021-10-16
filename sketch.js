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
	ground= new Wall(400,350,400,20);
	right= new Wall(390,200,20,400);
	left= new Wall(10,200,20,400);

	ball_options={
		restitution:0.95
	}

ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

//Engine.run(engine);

rectMode(CENTER);
ellipseMode(RADIUS);
}


function draw() 
{
	background(51)
	ground.show();
	right.show();
	left.show();

	ellipse(ball.position.x,ball.position.y);
	rect(wall.position.x,wall.position.y);

	Engine.update(engine);

	if(mosueClicked){
		hForce();
	}
 
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

