class createDrops {
    constructor(x,y) {
      var options = {
          isStatic: false,
          
      }

     
      this.body= Bodies.circle(x, y, 5, options);
      this.radius= 5;
      
      this.image = loadImage("bluedot.png");
      World.add(world, this.body);
    }


    
    showDrop(){
     var pos =this.body.position;
    //  push();
    //  imageMode(CENTER);
    //  image(this.image, pos.x, pos.y, 5,5);
    //  pop();
      imageMode(RADIUS);
      fill("darkblue");
      ellipse(pos.x, pos.y, this.radius, this.radius);

    
  
    }
     displayRain(){
      if (this.body.position.y> height){
      Matter.Body.setPosition(this.body, {x: random(0,600) , y: random(0,800)});
      }
     
  }
  
  
  };
   
