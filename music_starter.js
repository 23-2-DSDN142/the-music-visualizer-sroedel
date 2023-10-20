
// vocal, drum, bass, and other are volumes ranging from 0 to 100
//Images
let firstRun= true
let lineImg;
let testImg;
let planetImg;
let recordplayerImg;
let recordImg;
let playheadImg;
let personImg;
let purplepersonImg;
let backgroundImg;
let satelliteImg;
let noswirlImg;
let swirlImg;







//record player
let scalepace=.023
let colorchange=62
let moveplayer=2
let scalestart= 77
let movetime=75
let recordend=87
let angle =0;
let x=50;
let y=50;
let spinx=500;
let spiny = 500;
let size=1
let patternsize=70;
let test =1;
let movex=0
let movey=0
let a=0
let b=0
let yPosition = 500;



//rotation function
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

  //images
if(firstRun){
  rectMode(CENTER);
  planetImg= loadImage('planet.png');
  testImg = loadImage ('test.png')
  lineImg=loadImage('planetpattern.png');
  recordplayerImg=loadImage('recordplayer.png');
  recordImg=loadImage('record.png')
  playheadImg=loadImage('playhead.png')
  personImg=loadImage('reachingup.png')
  purplepersonImg=loadImage('reachinguppurple.png')
  backgroundImg=loadImage('backgroundtest.png')
  noswirl=loadImage('noswirl.png')
  swirl=loadImage('swirl.png')
  satelliteImg=loadImage('satellite.png')
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

      //top left
      let drumMap =map(drum,0,100,0,15);
      for(let i=1; i<=drumMap; i++){
        let lineStep = i*10;
        line(lineStart,lineStep,lineEnd,lineStep);
      }
      //top Right
      push();
      translate(0,1000)
      for(let i=1; i<=drumMap; i++){
        let lineStep = i*-10;
        line(lineStart,lineStep,lineEnd,lineStep);
      }
      pop();
      //bttom left
      push();
      translate(900,0)
      for(let i=1; i<=drumMap; i++){
        let lineStep = i*10;
        line(lineStart,lineStep,lineEnd,lineStep);
      }
      pop();
      //bottom right
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

    //top left
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
    




//record body code
push();
stroke ("black");
fill("#00FBFF");
if(song.currentTime()>colorchange){
  fill (vocal,850,80)}//change color
  if (song.currentTime() >movetime){
    translate(x,0); 
    x=x+moveplayer} //move for transition

rect(500,500,828,733);
pop();

//record body image 
push();
if (song.currentTime() >movetime){
  translate(x,0);
  x=x+moveplayer}//move for transition
image(recordplayerImg,0,0);//make appear
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
rotate(-45)
translate(-410,500)
}
if (song.currentTime() >movetime){
translate(x,0);
x=x+moveplayer}
image(playheadImg,0,0);
pop();



//new background
noStroke()
fill("black")
if (song.currentTime() >80){
// rect(500,500,1000,1000)
image(noswirl,0,0)
image(swirl,0,0)
}



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



//knobs
push()
if (song.currentTime() >movetime){
  translate(x,0);
  x=x+moveplayer}//remove player from record
strokeWeight(2)
stroke("black")
fill("white")

//left Knob
let LKnobY = map(bass, 0, 100, 780,680) // high780/// low680
rect(781,LKnobY,20,30)

//Right Knob
let RKnobY = map(vocal, 0, 100, 780,680)// high780/// low680
rect(817,RKnobY,20,30)

pop()








//person reaching
let personmove=2.5
push()
if (song.currentTime()>83 && yPosition > 200) {
  yPosition-=personmove; 
}//bring up
if (song.currentTime()>83){ 
image(personImg,475,yPosition)//make appeare
}
pop()


//planet
colorMode(RGB, 255)
let pink =color("#A200FF")
let darkpink=color("#7002c4")
let planetColormap = map(drum, 50,100, 0,1)
let planetColor = lerpColor(pink,darkpink,planetColormap)
push();
fill("#A200FF")//intial pink
noStroke()
if(song.currentTime()>113){//intial planet color change
  fill(planetColor)
  stroke(planetColor) 
  }
  if(song.currentTime()>153){//planet color change bridge
    colorMode(HSB, 100)
    stroke(drum,850,80)
    fill (drum,850,80)
  }
if(song.currentTime() > 83)
{
ellipse(500,500,400,400)}//new planet load
pop();




//Planet Texture
let texturemove=2
push();
//planet moves start
translate(movex,0);
    if(song.currentTime()>84.9){
      translate(movex,0);
      movex=movex+texturemove;
      }
      if(song.currentTime()>85){
      image(lineImg,-19700,294)}
pop();







//background 2
push()
if (song.currentTime() >85){
  image(noswirl,0,0)//load image
  }
  pop()

  //swirl
let swirlrotation=1.5
  push()
  if (song.currentTime() >85){
  translate(500,500)
  rotate(a)
  translate(-500,-500)
  a=a-swirlrotation;}// rotation

  if (song.currentTime() >85){
  image(swirl,0,0)}//load image
pop()
  

  //person 2
push()
if(song.currentTime()>85){
  image(personImg,475, 197)}
pop()










//stars drum
colorMode(RGB, 255)
let purple = color("#2f2c33");
let white = color("#FFFFFF");
let colorChange = map(drum, 70,100, 0,1)
let blendedColor = lerpColor(purple,white,colorChange)
if(song.currentTime()>93){
colorMode(RGB, 255)
fill(blendedColor)
strokeWeight(1);
ellipse(200,200,10,10)
ellipse(50,50,5,5)
ellipse(900,70,15,15)
ellipse(870,270,7,7)
ellipse(550,100,9,9)
ellipse(330,90,13,13)
ellipse(85,400,11,11)
ellipse(200,500,7)
ellipse(140,700,15)
ellipse(30,900,10)
ellipse(450,800,6)
ellipse(300,850,11)
ellipse(700,940,9)
ellipse(800,820,15)
ellipse(800,620,8)
ellipse(950,450,10)
ellipse(900,579,5)
ellipse(900,950,5)
}

//stars 2 bass
colorMode(RGB, 255)
let colorChange2 = map(bass, 70,100, 0,1)
let blendedColor2 = lerpColor(purple,white,colorChange2)
if(song.currentTime()>93){
fill(blendedColor2)
ellipse(110,118,8)
ellipse(220,350,13)
ellipse(20,600,6)
ellipse(200,940,8)
ellipse(530,890,13)
ellipse(910,740,9)
ellipse(745,210,12)
ellipse(800,430,5)
ellipse(720,50,5)
ellipse(720,50,5)
}

//satellite
let satelliterotation=2
push()
  if (song.currentTime() >110 && song.currentTime() <218){
  translate(500,500)
  rotate(b)
  translate(-500,-500)
  b=b+satelliterotation;}// rotation
  if (song.currentTime() >110 && song.currentTime() <218){
image(satelliteImg,0,0)}//place image
pop()


}

