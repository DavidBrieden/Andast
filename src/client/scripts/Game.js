var Field = require('./Field.js');
var App = require('./App.js');
var Boxes = require('./Boxes.js');
var Scoreboard = require('./Scoreboard.js');
var Game = {};

Game.speed = 1000;
Game.nextSpawn = Math.floor(Math.random() * (Boxes.length));

Game.player = {};

Game.start = function(){
    setInterval(this.tick, 50);
    Game.interval = setInterval(function(){Game.movePlayer(0,-1);}, Game.speed);
    setInterval(function(){Game.setSpeed(Game.speed*0.9);},10000);

    document.addEventListener("keydown", function(e){
        if (e.keyCode == '40') {
            // down arrow
            Game.movePlayer(0,-1);
        }
        else if (e.keyCode == '37') {
            // left arrow
            Game.movePlayer(-1,0);      
        }
        else if (e.keyCode == '39') {
            // right arrow
            Game.movePlayer(1,0);
        }
        else if (e.keyCode == '38') {
            // up arrow
            Game.spawn();
        }else if (e.keyCode == '32') {
            // press space to flip boxes
            
            // prevent scrolling
            e.preventDefault();
            var flip = Array.from(Game.player.figure);
            for (var i=0;i<4;i++){
                // Koordinate im Spielfeld setzen
                Field.field[Game.player.position.x - Game.player.figure[i].x][Game.player.position.y - Game.player.figure[i].y] = {
                    show: false,
                    color: "green"
                };
                Game.player.figure[i]={
                    x:0-flip[i].y,
                    y:flip[i].x
                };
                /*if (Field.field[Game.player.position.x-x][Game.player.position.y - y].show==true){
                    Game.player.figure = flip;
                }*/
            }  
            // damit das Spielfeld direkt geupdatet wird
            Game.movePlayer(0,0);
        }
    });

};

Game.setSpeed = function(speed){
    window.clearInterval(Game.interval);
    Game.speed = speed;
    Game.interval = setInterval(function(){Game.movePlayer(0,-1);}, Game.speed);
}

Game.tick = function(){
    Game.update();
    Game.render();
};

Game.render = function(){
    App.ctx.clearRect(0, 0, App.canvas.width, App.canvas.height);
    Field.render();
    Scoreboard.render();
};

Game.update = function(){

};

Game.spawn = function(){
    var spawnpoint = {x: Math.floor(Field.width/2)-1,y:Field.height-3}
    Game.player.position = spawnpoint;
    // eine zufällige Figur auswählen
    var index = Game.nextSpawn;
    Game.nextSpawn = Math.floor(Math.random() * (Boxes.length));
    var figure = Array.from(Boxes[index]);
    Game.player.figure = figure;

    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    Game.player.color = 'rgb('+r+','+g+','+b+')';

    // Jede Koordinate der gewählten Figur iterieren
    for (var i=0;i<4;i++){
        // Koordinate im Spielfeld setzen
        Field.field[spawnpoint.x - figure[i].x][spawnpoint.y - figure[i].y] = {
            show: true,
            color: Game.player.color
        };
    }  
};

Game.testRow = function(y){
    for (var i = 0; i < Field.width; i++){
        if (Field.field[i][y].show == false)
            return false;

    }
    return true;

};

Game.deleteRow = function(y){
    //delete full row
    for (var i = 0; i < Field.width;i++){
        Field.field[i][y].show = false;
    }

    //move upper rows
    for (var i = y+1; i< Field.height;i++){
        for(var j=0; j< Field.width;j++){
            Field.field[j][i-1]=Field.field[j][i];
        }
    }
};

Game.detectCollision = function(x,y){
    for (var i=0;i<4;i++){
        if (Game.player.position.x - Game.player.figure[i].x + x < 0 || Game.player.position.x - Game.player.figure[i].x + x >= Field.width){
            //collision occurs during x axis movement
            return true;
        } else if (Game.player.position.y - Game.player.figure[i].y + y < 0){
            //collision occurs during down movement
            return true;
        } else if ( Field.field[Game.player.position.x - Game.player.figure[i].x+x][Game.player.position.y - Game.player.figure[i].y+y].show == true){
            //collision with other block
            return true;
        } 
        
    }
    return false;
};

Game.movePlayer = function(x,y){

    var spawn = false;

    
    // Jede Koordinate der gewählten Figur iterieren
    for (var i=0;i<4;i++){
        // Koordinate im Spielfeld setzen
        Field.field[Game.player.position.x - Game.player.figure[i].x][Game.player.position.y - Game.player.figure[i].y] = {
            show: false,
            color: "green"
        };
    }  

    if (Game.detectCollision(x,y) == true){
        if (x!=0){
            x=0;
        } else if (y!=0){
            y=0;
            spawn = true;
        }
    }

    Game.player.position.y+=y;
    Game.player.position.x+=x;
    // Jede Koordinate der gewählten Figur iterieren
    for (var i=0;i<4;i++){
        // Koordinate im Spielfeld setzen
        Field.field[Game.player.position.x - Game.player.figure[i].x][Game.player.position.y - Game.player.figure[i].y] = {
            show: true,
            color: Game.player.color
        };
    }  

    if (spawn == true){
        //test if Row is full
        for (var i=0;i<4;i++){
            if (Game.testRow(Game.player.position.y - Game.player.figure[i].y)==true){
                Game.deleteRow(Game.player.position.y - Game.player.figure[i].y);
                Scoreboard.score += 100;
            }
        }
        spawn = false;
        Game.spawn();
    }
};

module.exports = Game;
