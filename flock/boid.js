class Boid {
 constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(2, 4))
    this.acc = createVector();
    this.maxForce = 0.1;
    this.maxSpeed = 2;
 }


 edges(){
  if (this.pos.x > width) {
    this.pos.x = 0;
  } else if (this.pos.x < 0 ){
    this.pos.x = width
  }
  if (this.pos.y > width) {
    this.pos.y = 0;
  } else if (this.pos.y < 0 ){
    this.pos.y = height
  }

 }

 align(boids){
    let perceptionRadius = 50;
    let steering = createVector();
    let total = 0
    for (let other of boids){
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (other != this && d < perceptionRadius){
            steering.add(other.vel);
            total++ ;
        }
    }
    if(total > 0){
    steering.div(total);
    steering.setMag(this.maxSpeed  )
    steering.sub(this.vel);
    steering.limit(this.maxForce)
    }
      return steering;  }

 cohere(boids){
    let perceptionRadius = 50;
    let steering = createVector();
    let total = 0
    for (let other of boids){
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (other != this && d < perceptionRadius){
            steering.add(other.pos);
            total++ ;
        }
    }
    if(total > 0){
    steering.div(total);
    steering.sub(this.pos)
    steering.setMag(this.maxSpeed)
    steering.sub(this.vel);
    steering.limit(this.maxForce)
    }
    return steering;   }


  separate(boids){
    let perceptionRadius = 50;
    let steering = createVector();
    let total = 0
    for (let other of boids){
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (other != this && d < perceptionRadius){
            let diff = p5.Vector.sub(this.pos, other.pos);
            diff.div(d);
            steering.add(diff);
            total++;
        }
    }
    if(total > 0){
    steering.div(total);
    steering.setMag(this.maxSpeed)
    steering.sub(this.vel);
    steering.limit(this.maxForce);
    }
    return steering;
     }

  flock(boids){
    this.acc.set = 0;
    let alignment = this.align(boids);

    let cohesion = this.cohere(boids);

    let separation = this.separate(boids);

    separation * separateSlider.value();
    alignment * alignSlider.value();
    cohesion * cohereSlider.value();

    this.acc.add(alignment);
    this.acc.add(cohesion);
    this.acc.add(separation);

  }

 update(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed)
 }

 show(){

    strokeWeight(1);
    stroke(255);
    push();
    translate(this.pos.x, this.pos.y)

    strokeWeight(6);
    triangle(5 * cos(radians(this.vel.heading())), 5 * sin(radians(this.vel.heading())), 1.5 * cos(radians(this.vel.heading()) + radians(90)), 3 * sin(radians(this.vel.heading()) + radians(90)),1.5 * cos(radians(this.vel.heading()) - radians(90)), 1.5 * sin(radians(this.vel.heading()) - radians(90)))

    pop();
 }


}

