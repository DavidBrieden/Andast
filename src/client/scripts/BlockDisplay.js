var App = require('./App.js');
var Field = require('./Field.js');
var Scoreboard = require('./Scoreboard.js');
var Boxes = require('./Boxes.js');

var BlockDisplay = {};

BlockDisplay.nextBlock = 3;

BlockDisplay.init = function(){
    this.offsety = 20;
    this.blocksize = 20;
    this.width = Scoreboard.width;
};

BlockDisplay.render = function(){
	//render display outline
    App.ctx.beginPath();
    App.ctx.lineWidth="1";
    App.ctx.strokeStyle = "black";
    App.ctx.fillStyle = "black";
    
    var boardX = Field.offsetx + (Field.width * Field.blocksize) + Scoreboard.offsetx;
    var boardY = Field.offsety + Scoreboard.offsety + Scoreboard.height + this. offsety;

    App.ctx.rect(
        boardX,
        boardY,
        this.width,
        this.width
    );

    App.ctx.stroke();
    
    //render next block
    var box = Boxes[BlockDisplay.nextBlock];
    for (var i=0; i<4;i++){
        App.ctx.beginPath();
        App.ctx.rect(
            boardX + this.width / 2 + box[i].x*this.blocksize,
            boardY + this.width / 2 + box[i].y*this.blocksize,
            BlockDisplay.blocksize,
            BlockDisplay.blocksize
        );
        App.ctx.stroke();
    }

    


};

module.exports = BlockDisplay;