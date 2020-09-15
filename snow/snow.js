function getRandomSize() {
    let r = pow(random(0,1), 2 );
    return constrain(r * 50, 5, 50)
}

class SnowFlake {

    constructor(img){
        this.img  = img
        let x = random(width);
        let y =  random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.r = getRandomSize();
        this.angle = sin(random(TWO_PI));
        this.theta = 0;
        this.dir = (random(0.0, 1.0) > 0.5 ?  -1 : 1);
        this.xOff = 0;
    }

    
    show() {
        push();
        translate(this.pos.x, this.pos.y);
        if (this.r >= 10){
        rotate(this.theta);
        imageMode(CENTER);
        image(this.img,  this.xOff ,0, this.r,this.r);
       }
        else  {
            strokeWeight(this.r/2);
            stroke(220);
            point(0,0);
        }
        pop();
    }
    offScreen(){
        return (this.pos.y >= this.r + height + 101)   
    }
    update(){
        this.xOff = this.angle * 50
        this.angle += 0.01
        this.theta +=  0.01 * this.dir
        this.acc.normalize();
        this.acc.add(this.r)
        this.vel.add(gravity);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
}