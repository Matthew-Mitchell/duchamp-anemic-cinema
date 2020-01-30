// Initial Prototype Drafted
function setup() {
  createCanvas(1000,1000);
  smooth();
  strokeWeight(1); // Default
  line(20, 20, 80, 20);
  strokeWeight(4); // Thicker
  let min=100;
  let max=600;
  let step=20;
  let rng=max-min;
    for ( let r=max; r>=min; r+= -step) {
      let x = random(min+(rng/2),min+(rng/2)+(rng/50));
      let y = random(min+(rng/2),min+(rng/2)+(rng/50));
      if ((r%(2*step))==0){
        fill(255);
      }
        else {fill(0);}
      ellipse(x, y, r,r);
      
    }
}


// With Motion; Trial I
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
var speed = 0.075;
function draw(){
  let count = 0;
  for ( let r=max; r>=min; r+= -step) {
    if ((r%(2*step))==0){
        fill(255);
      }
        else {fill(0);}
    angle += speed;
    let sinval = sin(angle);
    let cosval = cos(angle);
    let x = centers[count][0] + sinval*r;
    let y = centers[count][1] + cosval*r;
    ellipse(x,y,r,r);
    count += 1;
  }
}