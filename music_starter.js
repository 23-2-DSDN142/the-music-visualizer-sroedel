
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun= true
let lineImg;
let testImg;
let planetImg;
let recordplayerImg;
let recordImg;
let playheadImg;
let angle =0;
let x=50;
let y=50;
let spinx=500;
let spiny = 500;
let size=1
let patternsize=70;
let test =1;

//record player
let scalepace=.023
let colorchange=62
let moveplayer=2
let scalestart= 77
let movetime=74
let recordend=85


function rotateAbout(spinx, spiny, angle) {
  translate(spinx, spiny);
  rotate(angle);
  translate(-spinx, -spiny);
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background("black");
  console.log(song.currentTime())
  angleMode(DEGREES);
  colorMode(HSB, 100)

if(firstRun){
  rectMode(CENTER);
  planetImg= loadImage('planet.png');
  testImg = loadImage ('test.png')
  lineImg=loadImage('planetpattern.png');
  recordplayerImg=loadImage('recordplayer.png');
  recordImg=loadImage('record.png')
  playheadImg=loadImage('playhead.png')
  firstRun = false
}


//map parameter
let lineLength= 100;
  let lineStart = 0;
  let lineEnd = lineStart + lineLength;

 
  


//drums
    strokeWeight(8);
    stroke("#0077FF");
    if(song.currentTime()>colorchange){
      fill(vocal,850,80);
      stroke (vocal,850,80)
      }


      let drumMap =map(drum,0,100,0,15);
      for(let i=1; i<=drumMap; i++){
        let lineStep = i*10;
        line(lineStart,lineStep,lineEnd,lineStep);
      }

      push();
      translate(0,1000)
      for(let i=1; i<=drumMap; i++){
        let lineStep = i*-10;
        line(lineStart,lineStep,lineEnd,lineStep);
      }
      pop();

      push();
      translate(900,0)
      for(let i=1; i<=drumMap; i++){
        let lineStep = i*10;
        line(lineStart,lineStep,lineEnd,lineStep);
      }
      pop();

      push();
      translate(900,1000)
      for(let i=1; i<=drumMap; i++){
        let lineStep = i*-10;
        line(lineStart,lineStep,lineEnd,lineStep);
      }
      pop();


//bass
    strokeWeight(8);
    stroke ("#A200FF");
    if(song.currentTime()>colorchange){
      stroke (drum,850,80)
      }
    let bassMap =map(bass,0,100,0,15);
    //top left
    push();
    translate(150,0)
    for(let i=1; i<=bassMap; i++){
      let lineStep = i*10;
      line(lineStart,lineStep,lineEnd,lineStep);
    }
    pop();

    //top right
    push();
    translate(750,0)
    for(let i=1; i<=bassMap; i++){
      let lineStep = i*10;
      line(lineStart,lineStep,lineEnd,lineStep);
    }
    pop();

    //bottom left
    push();
    translate(150,1000)
    for(let i=1; i<=bassMap; i++){
      let lineStep = i*-10;
      line(lineStart,lineStep,lineEnd,lineStep);
    }

    pop();
    //bottom right
    push();
    translate(750,1000)
    for(let i=1; i<=bassMap; i++){
      let lineStep = i*-10;
      line(lineStart,lineStep,lineEnd,lineStep);
    }
    pop();

//vocal
strokeWeight(8);
    stroke ("#00FBFF");
    if(song.currentTime()>colorchange){
      stroke (vocal,850,80)
      }
    let vocalMap =map(vocal,0,100,0,15);

    //Top left
    push();
    translate(300,0)
    for(let i=1; i<=vocalMap; i++){
      let lineStep = i*10;
      line(lineStart,lineStep,lineEnd,lineStep);
    }
    pop();

  //Top right
    push();
    translate(600,0)
    for(let i=1; i<=vocalMap; i++){
      let lineStep = i*10;
      line(lineStart,lineStep,lineEnd,lineStep);
    }
    pop();

    //Bottom left
    push();
    translate(300,1000)
    for(let i=1; i<=vocalMap; i++){
      let lineStep = i*-10;
      line(lineStart,lineStep,lineEnd,lineStep);
    }
    pop();

    //bottom right
    push();
    translate(600,1000)
    for(let i=1; i<=vocalMap; i++){
      let lineStep = i*-10;
      line(lineStart,lineStep,lineEnd,lineStep);
    }
    pop();

//other
strokeWeight(8);
    stroke ("#E100FF");
    if(song.currentTime()>colorchange){
      stroke (other,850,80)
      }
    let otherMap =map(other,0,100,0,15);

    //Top 
    push();
    translate(450,0)
    for(let i=1; i<=otherMap; i++){
      let lineStep = i*10;
      line(lineStart,lineStep,lineEnd,lineStep);
    }
    pop();
    
    push();
    translate(450,1000)
    for(let i=1; i<=otherMap; i++){
      let lineStep = i*-10;
      line(lineStart,lineStep,lineEnd,lineStep);
    }
    pop();
    
// planet
//   fill ("#A200FF");
//   stroke ("#A200FF");
//   if(song.currentTime()>colorchange){
//   stroke (bass,850,80)
//   }
//   translate(0,0);
//   if(song.currentTime()>colorchange){
//     ellipse(500,500,500,500)
//   }
    




//record body code
push();
stroke ("black");
fill("#00FBFF");
if(song.currentTime()>colorchange){
  fill (vocal,850,80)}
  if (song.currentTime() >movetime){
    translate(x,0);
    x=x+moveplayer}

rect(500,500,828,733);
pop();

//body image 
push();
if (song.currentTime() >movetime){
  translate(x,0);
  x=x+moveplayer}
image(recordplayerImg,0,0);
pop();


//disk

push();
if (song.currentTime() > 0 && song.currentTime() < 90){
rotateAbout(spinx, spiny,angle);
angle=angle+2;
}//rotation

if (song.currentTime() > scalestart && song.currentTime() < 80){
translate(500,500)
scale(size)
size=size+scalepace;
translate(-500,-500)}//scale

if (song.currentTime() > -1 && song.currentTime() < 80){
image(recordImg,0,0);//draw image
}
pop();

//playhead
push();
if (song.currentTime() >movetime){
translate(x,0);
x=x+moveplayer}
image(playheadImg,0,0);
pop();

//new background
noStroke()
fill("black")
if (song.currentTime() >80){
rect(500,500,1000,1000)}



// center disk
push()
noStroke()
fill("#A200FF")
rotateAbout(spinx, spiny,angle);
angle=angle+2;// rotation

if (song.currentTime() > scalestart && song.currentTime() < 80){ 
translate(500,500)
scale(size)
size=size+scalepace;
translate(-500,-500)}//scale up

if(song.currentTime() > 80 && song.currentTime() <recordend)
{
  translate(500,500)
  scale(size)
  size=size-scalepace;
  translate(-500,-500)}//scale down

  if(song.currentTime() > -1 && song.currentTime() <recordend)
  {
ellipse(500,500,120,120)}//draw image
pop();

//planet
push();
noStroke()
fill("#A200FF")
if(song.currentTime() > 83)
{
ellipse(500,500,400,400)}
pop();



//Planet Texture
push();

translate(x,y);

    if(song.currentTime()>83.5){
      x=x+2;
      image(lineImg,-18700,150)}
  
pop();

strokeWeight(2)
stroke("black")
fill("white")


// right knob base location = 190
// right knob offset = map(drum, 0, 100, -100, 100)
// let knowFancyLocation = RKBL + RKO 
let LKnobY = map(bass, 0, 100, 680,780)


// high680/// low780
rect(780,LKnobY,20,30)









// right knob base location = 770

// let knowFancyLocation = RKBL + RKO 






// push();
// rotateAbout(spinx, spiny,angle);
// angle=angle+1;
// image(planetImg,0,0);
// pop();

// push();
// rectMode(CENTER);
// rotate(angle);
// image(testImg,200,200)
// angle=angle+1;
// pop();



// let yellowColor = color(75, 66, 245);


// let blueColor = color(226, 56, 245);

// let colorChange = map(vocal, 0,100, 0,1)
// let blendedColor = lerpColor(yellowColor,blueColor, colorChange)


//circle








  // //Dots
  // colorMode(RGB, 255)
  // fill(blendedColor)
  // strokeWeight(1);





  // let bassmap =map(bass,0,100,40,100);
  // let ballsize = 10;
  // let ballx = 150;
  // let bally =200;

  
  // for(let i= 1; i<= bassmap; i++){
  //   let ballStep =i*11;
  //   ellipse (ballx,ballStep,ballsize)
  // }







// //rectangle
// translate(x,y);
// rotate(angle);
// rect(0,0,100,50);
// rectMode(CENTER);
// angle=angle+1;

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

// right knob base location = 190
// right knob offset = map(drum, 0, 100, -100, 100)
// let knowFancyLocation = RKBL + RKO 