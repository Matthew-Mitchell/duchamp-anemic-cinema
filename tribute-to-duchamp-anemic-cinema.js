new p5();

let min=100;
let max=600;
let step=20;
var centers=[];
let rng=max-min;
for ( let r=max; r>=min; r+= -step) {
  let x = random(min+(rng/2),min+(rng/2)+(rng/50));
  let y = random(min+(rng/2),min+(rng/2)+(rng/50));
  centers.push([x,y])
}

function setup() {
  createCanvas(1000,1000);
  smooth();
  strokeWeight(1); // Default
  strokeWeight(4); // Thicker
  }
var angle = 0;
var speed = 0.0025;
function draw(){
  let count = 0;
  for ( let r=max; r>=min; r+= -step) {
    angle += speed;
    let sinval = sin(angle);
    let cosval = cos(angle);
    if ((r%(2*step))==0){
        fill(255);
        var x = centers[count][0] + sinval*(r/6);
        var y = centers[count][1] + cosval*(r/6);
      }
        else {fill(0);
             var x = centers[count][0] + sinval*(r/8);
            var y = centers[count][1] + cosval*(r/8);}   
    ellipse(x,y,r,r);
    count += 1;
  }
}