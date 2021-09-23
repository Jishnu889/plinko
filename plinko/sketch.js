const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint
//const Render = Matter.Render
var engine, world
var ground1

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
  ground1= new Ground(0,775,1000,25);
  //Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(0);  
  ground1.display();
  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)
}