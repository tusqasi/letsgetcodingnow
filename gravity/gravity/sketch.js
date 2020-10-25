
let a_ball;
let a_ground;

function setup() {
  createCanvas(800, 600);
  a_ball   = new Ball(60, 60, 20);
  a_ground = new Ground();

}

function draw() {
  background(21);

  a_ground.show();
  a_ball.collison();
  a_ball.show();
  a_ball.update();
}
