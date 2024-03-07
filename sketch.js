let walkers = [];

class Walker{
  constructor(posisiX, posisiY){
    this.x = posisiX;
    this.y = posisiY;
  }
  
  visual(){
    stroke("black");
    fill("pink");
    ellipse(this.x, this.y, 20, 20);
  }

  jalan(){
    var stepX = int(random(3));
    var stepY = int(random(3));
    
    this.x = this.x + stepX;
    this.y = this.y + stepY;
  }
}

function setup() {
  createCanvas(400, 400);
  
  for (let i=0; i<5;i++){
    walkers[i] = new Walker(random(400), random(400))
  }
}

function draw() {
  background(220);
  for (let i=0; i<5;i++){
    walkers[i].visual();
    walkers[i].jalan();
  }
}