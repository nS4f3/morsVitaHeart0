function Vehicle(x,y){
  this.pos = createVector(random(width),random(height));
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.maxSpeed = 5;
  this.maxForce = 0.3;
  this.r = random(255);
  this.b = random(255);
  
  Vehicle.prototype.behaviours = function(){
    var arrive = this.arrive(this.target);
    this.applyForce(arrive);
  }
  
  
  Vehicle.prototype.applyForce = function(force){
    this.acc.add(force);
  
  }
  
  
  Vehicle.prototype.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    
  }
  
  Vehicle.prototype.show = function(){
    stroke(this.r,0,this.b);
    strokeWeight(8);
    point(this.pos.x,this.pos.y);
    
  }
  
  Vehicle.prototype.arrive = function(target) {
    var desired = p5.Vector.sub(target,this.pos);
    var d =  desired.mag();
    if( d < 100){
      var speed = map(d,0,100,0,this.maxSpeed);
      desired.setMag(speed);
    }
    else{
      desired.setMag(this.maxSpeed);
    }
   
    
    var steer = p5.Vector.sub(desired,this.vel);
    steer.limit(this.maxForce);
    
    return steer;
    
  }
}
