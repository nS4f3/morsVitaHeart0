var font;

var count ;

var r = 255;
var b = 127;
var vehicles = [];

var pointsH;
var pointsS;
var pointsO;


function preload(){
  font = loadFont("love.ttf");
  

}

function setup() {
  createCanvas(900,400);
  background(51);
  textFont(font);
  
  count = 0;

  
  
  pointsH = font.textToPoints("H",250,250,300);
  pointsS = font.textToPoints("S",250,300,400);
  pointsO = font.textToPoints("O",250,250,300);
  
  pointsS.length = pointsH.length;
  pointsO.length = pointsH.length;
  
  console.log(pointsH.length);
  console.log(pointsS.length);
  
  
  
  for(var i = 0 ; i < pointsH.length ; i++){
    var ptS = pointsS[i];
    var ptH = pointsH[i];
    var ptO = pointsO[i];
    var vehicleS = new Vehicle(ptH.x,ptH.y);
    vehicles.push(vehicleS);
    
  }
  
  

}

function mousePressed(){
  vehicles = shuffle(vehicles);
  r = random(255);
  b = random(255);
  count ++;
}


function draw() {
  background(51);
  frameRate(60);
  
  
  
  if(count % 3 == 0){
  WriteH();
  }
  else if(count % 3 == 2){
  WriteS();
  }
  
  else {
    WriteO();
  }
  
  
  
  
   
  

  
   
}


function WriteH(){
  

  
  for(var i= 0; i < vehicles.length ; i++){
    var ptH = pointsH[i];
    vehicles[i].r = r;
    vehicles[i].b = b;
    vehicles[i].target = createVector(ptH.x,ptH.y);
    vehicles[i].update();
    vehicles[i].behaviours();
    vehicles[i].show();
    
    
  }
  

}

function WriteS(){
  
  
  
  for(var i= 0; i < vehicles.length ; i++){
    var ptS = pointsS[i];
    vehicles[i].r = r;
    vehicles[i].b =b;
    vehicles[i].target = createVector(ptS.x,ptS.y);
    vehicles[i].update();
    vehicles[i].behaviours();
    vehicles[i].show();
    
  }
  
  

}


function WriteO(){
  

  
  for(var i= 0; i < vehicles.length ; i++){
    var ptO = pointsO[i];
    vehicles[i].r = r;
    vehicles[i].b = b;
    vehicles[i].target = createVector(ptO.x,ptO.y);
    vehicles[i].update();
    vehicles[i].behaviours();
    vehicles[i].show();
    
    
  }
  

}
