var Field = require('./Field.js');
var App = require('./App.js');
var Boxes = require('./Boxes.js');
var Game = {};

Game.player = {};

Game.start = function(){
    setInterval(this.tick, 50);
    setInterval(function(){Game.movePlayer(0,-1)}, 1000);
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
            // Game.movePlayer(0,1);
            Game.spawn();
        }else if (e.keyCode == '32') {
            // press space to flip boxes
            e.preventDefault();
            for (var i=0;i<4;i++){
                // Koordinate im Spielfeld setzen
                Field.field[Game.player.position.x - Game.player.figure[i].x][Game.player.position.y - Game.player.figure[i].y] = {
                show: false,
                color: "green"
            };
    }  
            // var flip = Array.from(Game.player.figure);
            var flip1 = Game.player.figure[0];
            var flip2 = Game.player.figure[1];
            var flip3 = Game.player.figure[2];
            var flip4 = Game.player.figure[3];
            
            Game.player.figure[0]={x:0-flip1.y,y:flip1.x};
            Game.player.figure[1]={x:0-flip2.y,y:flip2.x};
            Game.player.figure[2]={x:0-flip3.y,y:flip3.x};
            Game.player.figure[3]={x:0-flip4.y,y:flip4.x};

            /*for (var i = 0; i<4;i++){
                flip[i].x = 1 - Game.player.figure[i].y;
                flip[i].y = Game.player.figure[i].x;
            }*/
            //Game.player.figure = flip;
            Game.movePlayer(0,0);
        }
    });

};

Game.tick = function(){
    Game.update();
    Game.render();
};

Game.render = function(){
    App.ctx.clearRect(0, 0, App.canvas.width, App.canvas.height);
    Field.render();
};

Game.update = function(){

};

Game.spawn = function(){
    var spawnpoint = {x: Math.floor(Field.width/2)-1,y:Field.height-1}
    Game.player.position = spawnpoint;
    // eine zufällige Figur auswählen
    var index = Math.floor(Math.random() * (Boxes.length));
    var figure = Boxes[index];
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



Game.movePlayer = function(x,y){
    // Jede Koordinate der gewählten Figur iterieren
    for (var i=0;i<4;i++){
        // Koordinate im Spielfeld setzen
        Field.field[Game.player.position.x - Game.player.figure[i].x][Game.player.position.y - Game.player.figure[i].y] = {
            show: false,
            color: "green"
        };
    }  
    Game.player.position.y+=y;
    Game.player.position.x+=x;
    // Jede Koordinate der gewählten Figur iterieren
    // Koordinate im Spielfeld setzen
    for (var i=0;i<4;i++){
        Field.field[Game.player.position.x - Game.player.figure[i].x][Game.player.position.y - Game.player.figure[i].y] = {
            show: true,
            color: Game.player.color
        };
    }  
};

module.exports = Game;
