let p1;

let aBall;
let bBall;

let sliderVel;

function setup() {
    createCanvas(500, 300);
    p1 = new Slider(3, height / 2 - 10);
    //p2 = new Slider(width - 23, height / 2);

    sliderVel = createSlider(2, 5, 3, 0.1)
    aBall = new Ball();
    bBall = new Ball();
}

function draw() {
    background(0);
    aBall.touch(p1);
    bBall.touch(p1);

    if ((p1.y >= 0) || (p1.y <= height - 100)) {
        p1.update(mouseY - 100);
    }
    //p2.update();
    p1.show();
    //p2.show();
    aBall.show();
    aBall.update();
    aBall.edge();
    bBall.show();
    bBall.update();
    bBall.edge();

    if (aBall.pos.x <= 0 && bBall.pos.x <= 0){
        fill(255);
        stroke(255)   
        text("You lose,\nReload the page", 10, 30);
    }

}