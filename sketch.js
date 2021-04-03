
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops=100;
var canvas;
var drops=[];
var engine, world;

var thunderCreatedFrame= frameCount;

function preload(){
    umbrellaimg= loadImage("umbrellaboy.png");
    thunderimg= loadImage("lightning-removebg-preview.png");
    thunderimg2= loadImage("thunder-removebg-preview.png");

}

function setup(){
   canvas= createCanvas(600,800);

   engine = Engine.create();
   world = engine.world;
  
   umbrella= new Umbrella(310,535);
  


    
}

function draw(){
    background(0);
    Engine.update(engine);


    if (frameCount%=70){

        for(var i=0;i<maxDrops; i++){
            drops.push(new createDrops(random(0,600) , random(0,800)));
           }
         }
    for(var i=0;i<maxDrops; i++){
       drops[i].showDrop();
       drops[i].displayRain();
       }

       umbrella.display();
       image(umbrellaimg, 150, 450, 300,400);

       rand= Math.round(random(1,2));
       if(frameCount%10===0){
           thunderCreatedFrame=frameCount;
           thunder= createSprite(random(70,600), random(70,70),10,10);
           switch(rand){
               case 1: thunder.addImage(thunderimg);
               break;
               case 2: thunder.addImage(thunderimg2);
               break;
               default: break;
           }
           thunder.scale= random(0.3,0.6)
       }
       if(thunderCreatedFrame+10===frameCount && thunder){
           thunder.destroy();
       }

       drawSprites();

    
}   


// 1st step- dont panic
//2nd step- check the console browser and try to fix error (Ctrl Shift J or Ctrl Shift I)
//- we make many minor errors, like typos or misplaced functions
//3rd step-

//1. check the functions to see if they are in order
//2. see if the variables are declared globally
//3. comment the section which is causing the error
//4. printing the values of variables; see if they are working
//5. picture of what is the expected output of the game (differentiate with what is happening and what should happen)
//6. make sure is code is properly organized 
//7. make sure functions' names are relative to what it is trying to do


