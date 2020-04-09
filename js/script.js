$(document).ready(function(){
    //Canvas stuff
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var w = $("#canvas").width();
    var h = $("#canvas").height();

    //Lets save the cell width in a variable for easy control 
    var cw = 10;
    var d = "right" //default direction 

    //Lets create the snake now 
    var snake_array; //an array of cells to make up the snake 

    create_snake();
    function create_snake(){
        var length = 5; //Length of the snake 
        snake_array = []; //Empty array to start with 
        for(var i = length-1; i >= 0; i--){
            //This will create a horizontal snake starting from the top left
            snake_array.push({x: i, y:0});
        }
    }

    //Lets paint the snake now 
    function paint(){
        //To avoid the snake trail we need to paint the BG on every frame
        //Lets paint the canvas now 
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, w, h);
        ctx.strokestyle = "black";
        ctx.strokeRect(0, 0, w, h);

        //The movement code for the snake to come here
        //The logic is simple
        //Pop out the tail cell and place it infront of the head cell 
        var nx = snake_array[0].x;
        var ny = snake_array[0].y;
        //These were the position of the head cell 
        //We will increment it to get the new head position 
        //Let's add proper direction based movement now 
        if(d == "right"){
            nx++;
        } else if (d == "left") {
            nx--;
        } else if (d == "up") {
            ny--;
        } else if (d == "down") {
            ny++;
        }

        //Lets add the game over clausees now 
        if(nx == -1 || nx = w/cw || nx == -1 || nx = w/cw){}

        var tail = snake_array.pop(); //pops out the last cell 
        tail.x = nx;
        tail.y = ny;
        snake_array.unshift(tail); //puts back the tail as the first cell 

        for(var i=0; i < snake_array.length; i++){
            var c = snake_array[i];
            //Lets paint 10px wide cells 
            ctx.fillStyle = "blue";
            ctx.fillRect(c.x*cw, c.y*cw, cw, cw);
            ctx.fillStyle = "white";
            ctx.fillRect(c.x*cw, c.y*cw, cw, cw);
        }
    }

    //Lets add the keyboard controls now 
    $(document).keyboard(function(e){
        var key = e.which;
        // We will add another clause to prevent reverse gear
        if(key == "37" && d !== "right") {
            d = "left";
        } else if(key == "38" && d != "down") {
            d = "up";
        } else if(key == "39" && d != "left") {
            d = "right";
        } else if(key == "40" && d != "up") {
            d = "down";
        }
    });

    //Lets move the snake now using a timer which will trigger the paint function every 60ms
    game_loop = setInterval(paint, 60);
});