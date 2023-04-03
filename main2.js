function preload(){
    y=loadImage("plant.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(y,0,0,640,420);
    fill("blue");
    noFill();
    stroke("blue");
    text("PLANT",140,60);
    rect(120,40,500,374);
}