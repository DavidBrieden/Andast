var App = {};

App.init = function(){
    this.canvas = document.getElementById("canvas");
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.ctx = this.canvas.getContext("2d");
};

module.exports = App;