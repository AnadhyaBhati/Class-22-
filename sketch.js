//aliasing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;

  //physical body
 var options1={
   restitution:1
 }

  object=Bodies.circle(100,200,80,options1);
  World.add(world,object)
  

 var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,580,800,20,options);
  World.add(world,ground)
 
}

function draw() {
  Engine.update(engine)
  background(0);  
  fill("yellow")
  ellipseMode(RADIUS)


  //shape to match that body
  ellipse(object.position.x,object.position.y,80,80)
   fill("green")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
}