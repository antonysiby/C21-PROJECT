
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
  ground = new Ground(200,390,400,20)

  rectMode(CENTER)
}


function draw() {
  background(51); 
  ground.show()
  Engine.update(engine)
}



