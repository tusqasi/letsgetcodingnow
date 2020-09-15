class Slider {
	constructor(x, y){
	this.h = 150;
	this.w = 15;
	this.x = x;
	this.y = y;
	}

	show(){
		stroke(255);
		fill(255)
		push();
		translate(this.x , this.y);
		//rectMode(CENTER);
		rect(0, 0, this.w, this.h, 10);
		pop();
	}

	update(y){
		this.y =  y
	}
}


