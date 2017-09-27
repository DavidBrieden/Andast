var Game = require('./Game.js');

var Field = {};

Field.init = function(){

    Field.offsetx = 20;
    Field.offsety = 20;
    Field.blocksize = 10;
    Field.width = 20;
    Field.height = 40;

    Field.field = [];
    for(var x=0;x<Field.width;x++){
        var column = [];
        for(var y=0;y<Field.height;y++){
            column.push({
                show: false,
                color: 0
            });
        }
        Field.field.push(column);
    }
    
    Field.field[0][0] = {
        show: true,
        color: "blue"
    };

};


Field.render = function(){
    for(var x=0;x<Field.width;x++){
        for(var y=0;y<Field.height;y++){
            if (Field.field[x][y].show == true) {
                Game.ctx.beginPath();
                Game.ctx.lineWidth="3";
                Game.ctx.strokeStyle = Field.field[x][y].color;

                Game.ctx.rect(
                    x*Field.blocksize+Field.offsetx,
                    ((Field.height-1)*Field.blocksize)+Field.offsety-(y*Field.blocksize),
                    Field.blocksize,
                    Field.blocksize
                );
                Game.ctx.stroke();
            }
        }
    }

    Game.ctx.beginPath();
    Game.ctx.lineWidth="1";
    Game.ctx.strokeStyle = "black";
    Game.ctx.rect(
        Field.offsetx,
        Field.offsety,
        Field.width*Field.blocksize,
        Field.height * Field.blocksize
    );
    Game.ctx.stroke();
};



module.exports = Field;