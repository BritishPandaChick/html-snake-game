$(document).ready(function(){
    //Canvas stuff
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var w = $("#canvas").width();
    var h = $("#canvas").height();

    //Lets paint the canvas now 
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
    ctx.strokestyle = "black";
    ctx.strokeRect(0, 0, w, h);
});