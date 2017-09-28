var App = require('./App.js');

var Scoreboard = {};

Scoreboard.render = function(){
	App.ctx.beginPath();
    App.ctx.lineWidth="3";
    App.ctx.strokeStyle = "black";
    App.ctx.fillStyle = "black";

    App.ctx.fillRect(
        220,
        200,
        100,
        50
    );

    App.ctx.stroke();
};

module.exports = Scoreboard;