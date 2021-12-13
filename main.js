function preload(){}

function setup(){
canvas=createCanvas(500,500);
canvas.position(320,250);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
circle(50,50,100)
fill('red')
circle(450,50,100)
line(400,50,100,50)
strokeWeight(10), stroke(0,255,0)
line(50,400,50,100)
circle(50,440,100)
line(100,440,400,440)
circle(450,440,100)
line(440,396,440,100)
}
function get_image(){
save('yo.png')
}