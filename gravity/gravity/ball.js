class Ball {
    constructor(x, y, radius) {
        this.pos = createVector(x, random(0,500));
        this.velocity = createVector(0, );
        this.acc = createVector(0, 0.2);
        this.coe_drag =  0.0001;
        this.radius = radius;

    }
    update() {
        this.pos.add(this.velocity);
        this.velocity.add(this.acc);
	
	if( this.velocity.y > 0) {
	    // When going down.
	    this.acc.add(0, this.velocity.mag() * this.coe_drag *  -1);
	}
	else {
	    // When going up.
	    this.acc.add(0, this.velocity.mag() * this.coe_drag *  1);
	}

	if (this.velocity.mag() < 0.001 ) {
	    noLoop();
	}
    }

    collison(){

        if (this.pos.y >= 550 - this.radius){
	    // When colliding.
            // Reverse  and Decrease the velocity
	    this.velocity.mult(-0.8)
        }
    }
    show() {
        fill(21);
        push();
        translate(this.pos.x, this.pos.y);

        strokeWeight(1);
        stroke(255);
        circle(0, 0, this.radius * 2);
    }
}
