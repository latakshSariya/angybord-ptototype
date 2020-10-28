const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine , world , box1;
var box2 , ground , pig1;
var log1 , log2 , log3;
var box3 , box4 , pig2;
var box5 , log4;
var angrybird;

function setup(){
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
 
  box1 = new Box(900,400,70,70);
  box2 = new Box(700,400,70,70);
  pig1 = new Pig(800,400);
  log1 = new LOG(800,350,270,PI);
  ground = new Ground();
  
  box3 = new Box(900,340, 70,70);
  box4 = new Box(700,340,70,70);
  pig2 = new Pig(800 , 340);
  log2 = new LOG(800 , 300 , 270 , PI);

  box5 = new Box(800,280,70,70);
  log3 = new LOG(750 , 250 , 150 , -PI / 4);
  log4 = new LOG(850 , 250 , 150 , PI / 4 )

  angrybird = new Bird(100,100);
}

function draw(){
  background("black");
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  angrybird.display();
  pig1.display();
  log1.display();
  log3.display();
  box3.display();
  log4.display();
  box5.display();
  box4.display();
  pig2.display();
  log2.display();
}