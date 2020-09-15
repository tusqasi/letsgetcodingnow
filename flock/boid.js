class Boid {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(2, 4));
    this.acc = createVector();
    this.maxForce = 0.3;
    this.maxSpeed = 1.0;
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.y > width) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }

  align(boids) {
    let perceptionRadius = 50;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (other != this && d < perceptionRadius) {
        steering.add(other.vel);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  cohere(boids) {
    let perceptionRadius = 50;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (other != this && d < perceptionRadius) {
        steering.add(other.pos);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.pos);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  separate(boids) {
    let perceptionRadius = 50;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (other != this && d < perceptionRadius) {
        let diff = p5.Vector.sub(this.pos, other.pos);
        diff.div(d);
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  flock(boids) {
    this.acc.set = 0;
    let alignment = this.align(boids);

    let cohesion = this.cohere(boids);

    let separation = this.separate(boids);

    // separation =  separation * separateSlider.value();
    // alignment =  alignment * alignSlider.value();
    // cohesion =  cohesion * cohereSlider.value();

    this.acc.add(alignment, -1 * cohesion, separation  );
    // this.acc.add(cohesion);
    // this.acc.add(separation);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
  }
  show() {
    let theta;

    strokeWeight(1);
    stroke(255);
    push();
    translate(this.pos.x, this.pos.y);

    strokeWeight(6);
    theta = this.vel.heading();
    let x = this.pos.x;
    let y = this.pos.y;
    let h = 6;
    let b = 2;
    triangle(
      x + h * cos(theta),
      y + h * sin(theta),
      x + b * cos(theta - 90),
      y + b * sin(theta - 90),
      x + b * cos(90 + theta),
      y + b * sin(90 + theta)
    );
    pop();
  }
}
