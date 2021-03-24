class Superhero{
    constructor(x , y , r){
      var options = {
        'frictionAir':1.0,
        'density':1.0
    }
    this.r = r;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x, this.y, (this.r)/2 , options );
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
   strokeWeight(4);
   stroke("grey");
   fill(255);
    ellipse(0, 0, this.r);
    pop();
  }
  }
  