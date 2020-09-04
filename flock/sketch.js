const flock = []
let alignSlider
let cohereSlider
let separateSlider

function setup() {
	createCanvas(850,650);

  alignSlider = createSlider(0,5, 1, 0.1);
  cohereSlider = createSlider(0,5, 1, 0.1);
  separateSlider = createSlider(0,5, 1, 0.1);

  for(let i = 0;i < 10; i++){
  flock.push(new Boid());
}




  }

function draw() {
  background(20);
  for (let boid of flock){
    boid.flock(flock);
    boid.edges();
    boid.show();
    boid.update();
  }
}

