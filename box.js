class Box {
  //create the construtor  
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    //create the object with bodies
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
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
    strokeWeight(4);
    stroke("gren")
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
