const flock = [];
let alignSlider;
let cohereSlider;
let separateSlider;

function setup() {
  createCanvas(700, 700);

  alignSlider = createSlider(1, 7, 2, 0.1);
  cohereSlider = createSlider(1, 7, 2, 0.1);
  separateSlider = createSlider(1, 7, 2, 0.1);

  for (let i = 0; i < 80; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(0);
  for (let boid of flock) {
    boid.flock(flock);
    boid.edges();
    boid.show();
    boid.update();
  }
}
