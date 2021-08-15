var DR 
function setup() {
  createCanvas(400,400);
  DR = createSprite (200,200,50,50)
}

function draw() 
{

  background("yellow");
  if (keyIsDown(DOWN_ARROW)){
    background("Red")
  }

if (keyIsDown(RIGHT_ARROW)){
  background("Purple")
}

if (keyIsDown(LEFT_ARROW)){
  background("Black")
}
drawSprites ()
}




