var ball;


function setup(){
createCanvas(800,800);


ball=createSprite(400,400,20,20);
ball.shapeColor="red"
}

function draw(){
    background(0)
    if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }

    if(keyDown(DOWN_ARROW)){
        changePosition(0,1)
    }

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0)
    }

    
    if(keyDown(RIGHT_ARROW)){
        changePosition(1,0)
    }

    drawSprites();
}

function changePosition(x,y){
ball.x=ball.x+x;
ball.y=ball.y+y;
    
}