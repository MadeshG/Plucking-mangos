
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy,boyImage
function preload()
{
	boyImage=loadImage("Images/boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(300,420,10)
	boy.addImage(boyImage)
	stone = new Stone(235,420,30)
	mango1 = new Mango(1000,100,30)
	mango2 = new Mango(1170,130,30)
	mango3 = new Mango(1010,140,30)
	mango4 = new Mango(1170,70,30)
	mango5 = new Mango(1000,70,30)
	mango6 = new Mango(900,230,40)
	mango7 = new Mango(1140,150,40)
	mango8= new Mango(1100,230,40)
	mango9 = new Mango(1120,50,40)
	mango10 = new Mango(900,160,40)
	tree = new trees(1050,580)
	ground=new Ground(width/2,600,width,20)
	launcher = new Launcher(stone.body,{x:235,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  tree.display()
  
  drawSprites();
 detectollision(stone,mango1)
 detectollision(stone,mango2)
 detectollision(stone,mango3)
 detectollision(stone,mango4)
 detectollision(stone,mango5)
 detectollision(stone,mango6)
 detectollision(stone,mango7)
 detectollision(stone,mango8)
 detectollision(stone,mango9)
 detectollision(stone,mango10)
}

function keyPressed(){
   if(keyCode === 32){
		Matter.body.setPosition(stone.body, {x:235,y:420})
		lancher.attach(stone.body)
	}
}

