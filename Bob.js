class Bob {
    constructor(x, y,color) {
      var options = {
        'friction': 0.5,
        'frictionAir': 0.0,
        'restitution': 0.3,
         'slop': 1,
         'inertia': Infinity
            };
      
         this.x=x;
         this.y=y;
         this.color=color;
         this.body=Bodies.rectangle(x,y,40,40,options);
         World.add(world, this.body);

    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke();
      fill(this.color);
      ellipse(0,0,60,60);
      pop();
      
  
    };
  };
  