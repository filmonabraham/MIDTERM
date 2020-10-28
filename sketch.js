let building1;
let building2;
let building3;
let building4;
let building5;

let zoomOutX = 0;
let zoomOutY = 0;
let zoomOutW = 150;
let zoomOutH = 300;

let moveCloudsX = 0;
let moveCloudsY = 0;
let cloudSize = 0;

let starSize = 0;

let earthSize = 0;
let earthX = 0;
let earthY = 0;
let angle = 0;
let sunAngle = 0;

let sunSize = 0;



function setup() {
  createCanvas(1200, 600, WEBGL);

}


function draw() {


  translate(-200, -200);

  building1 = new Building(40 - zoomOutX, 110 - zoomOutY, 150, 300);
  building2 = new Building(200 - zoomOutX, 100 - zoomOutY, 150, 300);
  building3 = new Building(100 - zoomOutX, 140 - zoomOutY, 150, 300);
  building4 = new Building(10 - zoomOutX, 200 - zoomOutY, 150, 300);
  building5 = new Building(270 - zoomOutX, 250 - zoomOutY, 150, 250);
  building6 = new Building(145 - zoomOutX, 290 - zoomOutY, 150, 210);


  timeOfDay();

}




function timeOfDay() {


  if (mouseY > 200) {

    // NIGHT TIME

    background(30);

    //stars ();

    stars()
    building1.buildings(fill(200));
    building1.windows(253, 185, 19);
    building2.buildings(fill(30));
    building2.windows(253, 185, 19);
    building3.buildings(fill(130));
    building3.windows(253, 185, 19);
    building4.buildings(fill(100));
    building4.windows(253, 185, 19);
    building5.buildings(fill(150));
    building5.windows(253, 185, 19);
    building6.buildings(fill(60));
    building6.windows(253, 185, 19);

    clouds();



  } else {

    // DAY TIME

    background(253, 185, 100);


    building1.buildings(fill(200));
    building1.windows(10, 10, 10);
    building2.buildings(fill(30));
    building2.windows(10, 10, 10);
    building3.buildings(fill(130));
    building3.windows(10, 10, 10);
    building4.buildings(fill(100));
    building4.windows(10, 10, 10);
    building5.buildings(fill(150));
    building5.windows(10, 10, 10);
    building6.buildings(fill(60));
    building6.windows(10, 10, 10);

    clouds();

    //directionalLight(249,215,2, -200, -100, -1)


  }

  zoomOut();
  earth();

}


function stars() {

  push();
  translate(-400, 0);
  noStroke();
  fill(250);
  ellipse(random(windowWidth), random(windowHeight), 5 + starSize);
  pop();

}

function sun(){
  push();
  sunAngle += 0.001;
  translate(200,200);
  rotateZ(sunAngle);
  strokeWeight(1);
  stroke(200, 170, 0);
  fill(227,38,54);
  // sphere(radiusx, radiusy, radius z);
  directionalLight(255,200, 0, -1, -1, -1);
  sphere(0 + sunSize);
  pop();


}


function earth() {

  push();
  //ambientLight(0,100,100, 40);
  angle += 0.004;
  translate(400 - earthX, 500 - earthY)
  rotateX(angle);
  rotateZ(angle);
  strokeWeight(5);
  stroke(0, 255, 170);
  noFill();
  // sphere(radiusx, radiusy, radius z);
  sphere(1400 - earthSize);

  pop();

  if (earthX >= 34){

  sun();
}

}


function clouds() {

  // making clouds move
  moveCloudsX = moveCloudsX + 0.1

  noStroke();
  fill(255);
  circle(0 + moveCloudsX, 65 + moveCloudsY, 90 + cloudSize);
  circle(60 + moveCloudsX, 72 + moveCloudsY, 80 + cloudSize);
  circle(-20 + moveCloudsX, 80 + moveCloudsY, 60 + cloudSize);
  circle(100 + moveCloudsX, 83 + moveCloudsY, 60 + cloudSize);

  circle(220 + moveCloudsX, 95 + moveCloudsY, 90 + cloudSize);
  circle(250 + moveCloudsX, 102 + moveCloudsY, 80 + cloudSize);
  circle(170 + moveCloudsX, 110 + moveCloudsY, 60 + cloudSize);
  circle(290 + moveCloudsX, 113 + moveCloudsY, 60 + cloudSize);
}

function zoomOut() {
  if (mouseIsPressed) {

    if (mouseButton === LEFT) {

      zoomOutX -= 1;
      zoomOutY -= 3;
      moveCloudsX += 1;
      moveCloudsY += 3;
      cloudSize += 3;
      starSize += 0.01;
      earthSize -= 10;
      earthX += 0.1;
      earthY += 0.5;
      sunSize += 0.3;

    }

    if (mouseButton === RIGHT) {

      zoomOutX += 1;
      zoomOutY += 3;
      moveCloudsX -= 1;
      moveCloudsY -= 3;
      cloudSize -= 3;
      starSize -= 0.0003;
      earthSize += 10;
      earthX -= 0.1;
      earthY -= 0.5;
      sunSize -= 0.6;


    }
  }
}
