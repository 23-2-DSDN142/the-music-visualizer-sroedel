
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(225,50);

  var ballsize = map(bass,0,100,40,150);
  var drumheight = map(drum,0,100,0+ballsize/2,height);

  fill("black");
  ellipse(width/2, drumheight,ballsize); 

  var squaresize = map(vocal,0,100,30,300)
  var squarey=map(vocal,0,100,0,200)
  var squarex=map (vocal,0,100,0,500)
 fill("white");
  square(squarex,squarey, squaresize);



}