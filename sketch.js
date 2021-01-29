  var object1,text2,text2Image,text3;
  var background1Image,background2Image,object1Image,text3Image;
function preload() {
 background1Image=loadImage("images/MOM (3).png");
 background2Image=loadImage("images/final background.png");
 object1Image=loadImage("images/mom (2).png");
 text2Image=loadImage("images/text2.png");
 text3Image=loadImage("images/text3.png")
 
}

function setup(){
  createCanvas(1000,1000);
  background = createSprite(200,200,1000,1000);
    background.addImage(background1Image);
    background.scale=0.5;

 text2=createSprite(225,220,20,20);
 text2.addImage(text2Image);
 text2.scale=1;
 
}

function draw() {
    if(keyCode===LEFT_ARROW){
      next();
    
    }
  
  
  
    
    drawSprites();
}


  function next(){
  
    background.invisible=true;
    background2=createSprite(200,225,1000,1000);
    background2.addImage(background2Image);
    background2.scale=2.5;
    object1=createSprite(200,170,20,20);
    object1.addImage(object1Image);
    object1.scale=0.29;
    text3=createSprite(430,300,20,20);
 text3.addImage(text3Image);
 text3.scale=0.5;
    drawSprites();
  }

