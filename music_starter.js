
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun= true
let testImg;
let angle =0;
let x=50;
let y=50;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
if(firstRun){
  rectMode(CENTER);
  testImg=loadImage('test.png');
  firstRun = false
}

background("blue");
  push();
  translate(x,y);
  if(song.currentTime()>1){
    x=x+2;}

    if(song.currentTime())
if(x>1060){
x=-40
}
  image(testImg,-600,150)
  pop();
 
  console.log(song.currentTime())
  angleMode(DEGREES);
  colorMode(RGB,100);
  strokeWeight(5);
  stroke (drum,850,80)


  colorMode(RGB, 255)

// let yellowColor = color(75, 66, 245);


// let blueColor = color(226, 56, 245);

// let colorChange = map(vocal, 0,100, 0,1)
// let blendedColor = lerpColor(yellowColor,blueColor, colorChange)


//circle

  //fill("black");
  noFill()
  translate(0,0);
  ellipse(500,500,400,400)

  





  // //Dots
  // colorMode(RGB, 255)
  // fill(blendedColor)
  // strokeWeight(1);
  // let bassmap =map(bass,0,100,40,100);
  // let ballsize = 10 ;
  // let ballx = 150;
  // let bally =0;
  
  // colorMode(HSB,100);
  // for(let i= 1; i<= bassmap; i++){
  //   let ballStep =i*11;
  //   ellipse (ballx,ballStep,ballsize)
  // }
   






// //rectangle
// fill(blendedColor);
// translate(x,y);
// rotate(angle);
// rect(0,0,100,50);
// rectMode(CENTER);

// if(song.currentTime()>1){
// x=x+2;}



// if(song.currentTime() > 3 && song.currentTime() < 10){
// angle=angle +5;
// }

// if(song.currentTime())
// if(x>1060){
// x=-40
// }
//  if (song.currentTime() > 10){
//   angle=0
//  }


 







} 

