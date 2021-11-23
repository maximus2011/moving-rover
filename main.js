canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

mars_image=["mars.jpg","mars 1.jpg","mars 2.jpg","mars 3.jpg"];
randomNumber=Math.floor(Math.random()*4);

rover_width=100;
rover_height=90;
roverX=10;
roverY=10;
rover_image="rover.png";
background_image=mars_image[randomNumber];
console.log(randomNumber);

function add(){
    background_img=new Image();
    background_img.onload=upload_background;
    background_img.src=background_image;

    rover_img=new Image();
    rover_img.onload=upload_rover;
    rover_img.src=rover_image;

}

function upload_background(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}

function upload_rover(){
    ctx.drawImage(rover_img,roverX,roverY,rover_width,rover_height);

}

window.addEventListener("keydown",key_down);
function key_down(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38'){
    up();
    console.log("up");

}
if(keyPressed=='40'){
    down();
    console.log("down");
    
}
if(keyPressed=='37'){
    left();
    console.log("left");
    
}
if(keyPressed=='39'){
    right();
    console.log("right");
    
}
}
function up(){
    if(roverY>=0){
        roverY=roverY-10;
        console.log("when up arrow is pressed x= "+roverX+" y= "+roverY);
        upload_rover();
        upload_background();

    }
}
function down(){
    if(roverY<=500){
        roverY=roverY+10;
        console.log("when down arrow is pressed x= "+roverX+"y= "+roverY);
        upload_rover();
        upload_background();
    }
}

function left(){
    if(roverX>=0){
        roverX=roverX-10;
        console.log("when left arrow is pressed x= "+roverX+" y= "+roverY);
        upload_rover();
        upload_background();

    }
}
function right(){
    if(roverX<=700){
        roverX=roverX+10;
        console.log("when right arrow is pressed x= "+roverX+"y= "+roverY);
        upload_rover();
        upload_background();
    }
}

