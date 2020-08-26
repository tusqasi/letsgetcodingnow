class Ball {

    constructor(){
        this.pos = createVector(width / 2, height / 2);
        this.vel = p5.Vector.random2D()

    }

    show(){

        fill('#ff4455');
        stroke('3355ff')
        circle(this.pos.x, this.pos.y, 30)
    }

    update() {
        this.pos.add(this.vel);
        this.vel = p5.Vector.fromAngle(this.vel.heading(), sliderVel.value())

    }

    edge() {
        if(this.pos.y <= 15){
            this.vel.y = -this.vel.y
        } else if (this.pos.y >= height -15){
            this.vel.y = -this.vel.y
        }else if (this.pos.x > width - 15){
            this.vel.x = -this.vel.x
        }
    }

    touch(slider) {
        // push();
        // translate(slider.x, slider.y);

        // console.log(slider.x, slider.y);
        let ballx = this.pos.x
        let ballY = this.pos.y

        let slideY = slider.y

        if ( ballY >= slideY && ballx <= 35 ){
            this.vel.x  = -this.vel.x;
            return false;
        }
        else if (ballY < slideY && ballY > slideY + 200  ){
            return true;
        }
    }
}

