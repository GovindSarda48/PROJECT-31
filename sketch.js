const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions = [];
var particles1 = [];
var plinkos = [];

var divisionHeight = 300;


function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(500,800);


 
  
  



  ground1 = new Ground(240,790,800,20);

  for(var k=10;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=15;j<=width;j=j+40){
    plinkos.push(new Plinko(j,40,20));
  }

  for(var j=20;j<=width;j=j+50){
    plinkos.push(new Plinko(j,80,20));
  }


  for(var j=15;j<=width;j=j+40){
    plinkos.push(new Plinko(j,120,20));
  }

  for(var j=20;j<=width;j=j+50){
    plinkos.push(new Plinko(j,160,20));
  }

  for(var j=15;j<=width;j=j+40){
    plinkos.push(new Plinko(j,200,20));
  }
  
  

  Engine.run(engine);
}

function draw() {
  background(0); 
  Engine.update(engine); 


  
 
  
  for(var k = 0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j = 0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  
  
  
  var particle;
  if(frameCount % 50===0){
    particle = new Particle(random(120,380),20,20);
    particles1.push(particle);
  }
  
  

for(var m= 0;  m<particles1.length ;m++){
    particles1[m].display();
    console.log(particles1[m]);
  }
  
  ground1.display();
  drawSprites();

   
 


}