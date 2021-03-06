class Pig {
    //create the construtor  
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      //create the object with bodies
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      //add the object to the world
      World.add(world, this.body);
    }
    display(){
      //display the object
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  