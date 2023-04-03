function preload(){
    x=loadImage("dainigroon.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(x,0,0,640,420);
;

    fill("blue");
    noFill();
    stroke("blue");
    text("TABLE",34,48);
    rect(30,30,520,380);
}