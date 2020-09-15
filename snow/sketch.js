/// <reference path="./p5.global-mode.d.ts" />
/// <reference path="./p5.d.ts" />


let gravity;

let snow = [] ;
let spritesheet;
let textures = [];

function preload() {
    spritesheet = loadImage("snow_sprites.png")
    let spx = spritesheet.width
}
function setup() {

    createCanvas(800, 600);
    gravity = createVector(0, 0.03);

    for (let x = 0; x < spritesheet.width ; x += 32){
        for (let y = 0; y < spritesheet.height; y += 32  ){
            let img = spritesheet.get(x, y, 32, 32);
            image(img, x * 1.5 , y * 1.5);
            textures.push(img);

        }
    }
    
}

function draw() {
    background(22);
    let design = random(textures);

    snow.push(new SnowFlake(design));
    for (flake of snow) {

        flake.show();
        flake.update();
    }
    for( let i = snow.length - 1; i >=0; i--){
        if (snow[i].offScreen()){
            snow.splice(i, 1);
        }
    }
}