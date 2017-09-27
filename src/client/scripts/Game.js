var Game = {};

Game.test = function(){
    console.log("Game Test");
};

Game.init = function(){
    Game.canvas = document.getElementById("canvas");
    Game.canvas.width = 800;
    Game.canvas.height = 600;
    Game.ctx = Game.canvas.getContext("2d");
};

module.exports = Game;
