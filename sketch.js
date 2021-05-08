const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,320,70,70);   
    box2=new Box(920,320,70,70);
    box3=new Box(700,285,70,70);   
    box4=new Box(920,285,70,70);
    box5=new Box(810,250,70,70)

    ground=new Ground(600,height,1200,30); 
    
    pig1 = new Pig(810, 320)
    pig2 = new Pig(810, 300)

    log1 = new Log(810,260,PI/2,300)
    log2 = new Log(810,300,PI/2,300)
    log3 = new Log(760,120,PI/7,150)
    log4 = new Log(870,120,PI/-7,150)

    bird1 = new Bird(100,100)

    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display()
    ground.display();

    pig1.display()
    pig2.display()

    log1.display()
    log2.display()
    log3.display()
    log4.display()

    bird1.display()
}

