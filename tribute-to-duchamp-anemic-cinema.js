new p5();

let min=60;
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
  strokeWeight(2); // Default
  }
var angle = 0;
var speed = 0.005;
function draw(){
  let count = 0;
  // angle += speed;
  for ( let r=max; r>=min; r+= -step) {
    angle += (speed )
    let sinval = sin(angle);
    let cosval = cos(angle);
    if ((r%(2*step))==0){
        fill(0);
        var x = centers[count][0] + sinval*4;
        var y = centers[count][1] + cosval*4;
      }
        else {fill(255);
             var x = centers[count][0] + sinval*3;
            var y = centers[count][1] + cosval*3;}   
    ellipse(x,y,r,r);
    count += 1;
  }
}