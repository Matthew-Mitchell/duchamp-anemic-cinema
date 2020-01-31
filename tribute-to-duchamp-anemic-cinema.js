new p5();

let min=32;
let max=600;
let step=28;
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
var speed = 0.003;
function draw(){
  let count = 0;
  // angle += speed;
  for ( let r=max; r>=min; r+= -step) {
    angle += (speed )
    let sinval = sin(angle);
    let cosval = cos(angle);
    if (count%2==0){
        fill(255);
        var x = centers[count][0] + sinval*13;
        var y = centers[count][1] + cosval*13;
      }
        else {fill(0);
             var x = centers[count][0] + sinval*6;
            var y = centers[count][1] + cosval*6;}   
    ellipse(x,y,r,r);
    count += 1;
  }
}