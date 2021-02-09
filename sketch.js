const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine, world, ground, ball;
var box1;
var box2;


function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;
  
  box1=new Box(170,300,50,50);
  box2=new Box(200,350,50,50);
  ground=new Ground(200,390,400,10);
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
}