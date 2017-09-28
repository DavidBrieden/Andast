var App = require('./App.js');
var Field = require('./Field.js');

var Scoreboard = {};

Scoreboard.init = function(){
    this.offsetx = 20;
    this.offsety = 0;
    this.width = 170;
    this.height = 50;

    this.score = 0;

    this.fontsize = 30;
};

Scoreboard.render = function(){
    this.score++;
	App.ctx.beginPath();
    App.ctx.lineWidth="1";
    App.ctx.strokeStyle = "black";
    App.ctx.fillStyle = "black";

    var boardX = Field.offsetx + (Field.width * Field.blocksize) + this.offsetx;
    var boardY = Field.offsety + this.offsety;

    App.ctx.rect(
        boardX,
        boardY,
        this.width,
        this.height
    );

    App.ctx.font = this.fontsize + "px Comic Sans MS";
    App.ctx.textAlign ="center"; 
    App.ctx.textBaseline = "middle";
    App.ctx.fillText(
        this.score,
        boardX+(this.width/2),
        boardY+(this.height/2)
    );

    App.ctx.stroke();
};

module.exports = Scoreboard;