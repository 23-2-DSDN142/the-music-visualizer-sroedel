
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB,100);
  background(225);
  strokeWeight(9);
  stroke (drum,850,80)
  
  
  // var ballsize = map(bass,0,100,40,150);
  // var drumheight = map(drum,0,100,0+ballsize/2,height);

  // fill("black");
  // ellipse(width/2, drumheight,ballsize);  

//   var squaresize = map(vocal,30,100,0,300)
//   var squarey=map(vocal,100,100,0,200)
//   var squarex=map (vocal,100,100,0,500)
//  fill("white");
//   square(squarex,squarey, squaresize);


let drumMap = map(drum,0,100,40,100);
let lengthOfLine= 100;
let lineStart = 0;
let lineEnd = lineStart+lengthOfLine;


for(let i= 1; i<= drumMap; i++){
  let lineStep = i*10;
  line(lineStart,lineStep,lineEnd,lineStep);
  
}

strokeWeight(1);
let bassmap =map(bass,0,100,40,100);
let ballsize = 10 ;
let ballx = 150;
let bally =0;


for(let i= 1; i<= bassmap; i++){
  let ballStep =i*11;
  ellipse (ballx,ballStep,ballsize)
}
 
} 

