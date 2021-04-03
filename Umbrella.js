class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true,
      }

     
      this.body= Bodies.circle(x, y, 35, options);
      this.radius= 35;
      
      World.add(world, this.body);
    }


    
    display(){
     var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(0);
      ellipse(pos.x, pos.y, this.radius, this.radius);

    
    }
  
  };
   
