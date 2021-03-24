const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var superhero ;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  // create sprites here

  superhero = new Superhero(100 , 200 , 50)
}

function draw() {
  background(0);
  Engine.update(engine);

  superhero.display();
}

