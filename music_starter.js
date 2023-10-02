
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let angle =0;
let x=50;
let y=50;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  console.log(song.currentTime())
  angleMode(DEGREES);
  colorMode(HSB,100);
  background("black");
  strokeWeight(9);
  stroke (drum,850,80)


  colorMode(RGB, 255)

let yellowColor = color(237, 170, 0)
let blueColor = color(9, 20, 135)

let colorChange = map(vocal, 0,100, 0,1)
let blendedColor = lerpColor(yellowColor,blueColor, colorChange)

fill(blendedColor)
ellipse(200,200,200,200)

  let drumMap = map(drum,0,100,40,100);
  let lengthOfLine= 100;
  let lineStart = 0;
  let lineEnd = lineStart+lengthOfLine;
  
  
  
  
  strokeWeight(1);
  let bassmap =map(bass,0,100,40,100);
  let ballsize = 10 ;
  let ballx = 150;
  let bally =0;
  
  
  for(let i= 1; i<= bassmap; i++){
    let ballStep =i*11;
    ellipse (ballx,ballStep,ballsize)
  }
   








translate(x,y);
rotate(angle);
rect(0,0,100,50);
rectMode(CENTER);

if(song.currentTime()>1){
x=x+2;}



if(song.currentTime() > 3 && song.currentTime() < 10){
angle=angle +5;
}

if(song.currentTime())
if(x>1060){
x=-40
}
 if (song.currentTime() > 10){
  angle=0
 }


 







} 

