class Ground {
    constructor(){
        this.y = 550;
    }

    show(){
        stroke(255);
        line(0, this.y, 800, this.y);
    }
}