var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

 canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    color= document.getElementById("Color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    var current_position_x = e.clientX-canvas.offsetLeft;
    var current_position_y = e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;
        console.log("last position of x and y");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);

        ctx.lineTo(current_position_x , current_position_y);
        ctx.stroke()
    }
    last_position_of_x = current_position_x;
    last_position_of_y = current_position_y;
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
    mouseEvent = "mouseUP"
}


var width= screen.width;

var new_width= screen.width-70;
var new_height= screen.height-300;

if (width < 992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchStart", touch_start)
function touch_start(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    console.log("touch_start")
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchMove", touch_move)
function touch_move(e)
{
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth = width_of_line;

    console.log("last position of x and y are");
    console.log("x ="+last_position_of_x +"y ="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("current position of x and y are");
    console.log("x ="+current_position_of_touch_x+"y ="+current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}

function clearArea()
{
    ctx.clearRect(0,0, canvas.width,canvas.height);
}

