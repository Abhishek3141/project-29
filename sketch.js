
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(360, 215, 150, 20);
    platform2 = new Ground(570, 355, 150, 20);

    block1 = new Box(300,235, 30,40)
    block2 = new Box(330,235, 30,40)
    block3 = new Box(360,235, 30,40)
    block4 = new Box(390,235, 30,40)
    block5 = new Box(420,235, 30,40)
    block6 = new Box(330,195, 30,40)
    block7 = new Box(360,195, 30,40)
    block8 = new Box(390,195, 30,40)
    block9 = new Box(360,155, 30,40)

    
    block10 = new Box(510,375, 30,40)
    block11 = new Box(540,375, 30,40)
    block12= new Box(570,375, 30,40)
    block13= new Box(600,375, 30,40)
    block14= new Box(630,375, 30,40)
    block15= new Box(540,335, 30,40)
    block16= new Box(570,335, 30,40)
    block17= new Box(600,335, 30,40)
    block18= new Box(570,295, 30,40)
    
    polygon1 = new polygon(150, 200, 30)
    slingshot1 = new SlingShot(polygon1.body,{x: 150, y:200} )


}

function draw(){
    background("brown");
    Engine.update(engine);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    ground.display();
    platform1.display();
    platform2.display();

    slingshot1.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon1.body);
    }
}