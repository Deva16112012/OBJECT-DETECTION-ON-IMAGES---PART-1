function preload(){
    x=loadImage("hall.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(x,0,0,640,420);
    fill("blue");
    noFill();
    stroke("blue");
    text("Clock",24,16);
    rect(20,1,96,68);

    fill("blue");
    noFill();
    stroke("blue");
    text("PICTURE",34,100);
    rect(30,80,72,116);

    fill("blue");
    noFill();
    stroke("skyblue");
    text("SOFA",50,320);
    rect(30,300,500,176);
    
    fill("blue");
    noFill();
    stroke("blue");
    text("CURTAINS",244,110);
    rect(240,92,300,200);
}