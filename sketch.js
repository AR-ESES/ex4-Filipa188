let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {


  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
      
      X_meio = width/2;
      Y_meio = height/2;
      noFill();
      stroke(55);
      strokeWeight(4);
      circle(X_meio, Y_meio, height/2);
      circle(X_meio - height/3/4, Y_meio - height/18, height/12);
      circle(X_meio + height/3/4, Y_meio - height/18, height/12);
      line  (X_meio, 520, X_meio, 800)
      line  (570, 400, 670, 400)
      pop();
    }
  }
}