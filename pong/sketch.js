let p1;
// let p2;
let aBall;

let sliderVel;
function setup() {
	createCanvas(800, 300);
	p1 = new Slider(3 ,height / 2 - 10);
	//p2 = new Slider(width - 23, height / 2);

    sliderVel = createSlider(0.1, 5, 1,0.1)
    aBall = new Ball();
}
function draw() {
  background(0);
    if(aBall.touch(p1)){
        menu()
    }
    if ((p1.y  >= 0 ) || (p1.y <= height - 100)){
	p1.update(mouseY - 100);
    }
	//p2.update();
	p1.show();
	//p2.show();
    aBall.show();
    aBall.update();
    aBall.edge();


    // console.log(p1.y);
}

function keyPressed() {



}

function menu() {
    noLoop();
    keyPressed();


}