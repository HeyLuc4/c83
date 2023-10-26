
var last_position_of_x, last_position_of_y;
canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
width = screen.width;
newWidth = screen.width - 70;
height = screen.height
newHeight = screen.height - 300;

/*canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e)
 {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mouseDown") {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width_of_line;

  console.log("Last position of x and y coordinates = ");
  console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
  ctx.moveTo(last_position_of_x, last_position_of_y);

  console.log("Current position of x and y coordinates = ");
  console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
  ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
  ctx.stroke();
  }
  last_position_of_x = current_position_of_mouse_x; 
  last_position_of_y = current_position_of_mouse_y;
}

/*canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e){
    mouseEvent = "mouseLeave";

}

 canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e){
    mouseEvent = "mouseUp";   
} */

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
};

canvas.addEventListener("touchstart", toquinho);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    
    mouseEvent = "mouseDown";
}

if(width<992){
    document.getElementById("mycanvas").width = newWidth;
    document.getElementById("mycanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", toquinho);
function toquinho(e){
    console.log("toquinho");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("wol").value;
}

canvas.addEventListener("touchmove", touchMove);
function touchMove(e){
    console.log("movimento na tela");
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
    
    // codigo já feito antes
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    
    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
    //fim do codigo
};