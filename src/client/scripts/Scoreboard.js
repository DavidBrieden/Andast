var App = require('./App.js');
var Field = require('./Field.js');

var Scoreboard = {};

Scoreboard.init = function(){
    this.offsetx = 20;
    this.offsety = 0;
    this.width = 150;
    this.height = 50;
};

Scoreboard.render = function(){
	App.ctx.beginPath();
    App.ctx.lineWidth="1";
    App.ctx.strokeStyle = "black";
    App.ctx.fillStyle = "black";

    App.ctx.rect(
        Field.offsetx + (Field.width * Field.blocksize) + this.offsetx,
        Field.offsety + this.offsety,
        this.width,
        this.height
    );

    App.ctx.font = "30px Arial";
    App.ctx.fillText(
        "Hello World",
        Field.offsetx + (Field.width * Field.blocksize) + this.offsetx,
        Field.offsety + this.offsety
    );

    App.ctx.stroke();
};

module.exports = Scoreboard;