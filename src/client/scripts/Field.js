var App = require("./App.js");


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
    

};


Field.render = function(){
    for(var x=0;x<Field.width;x++){
        for(var y=0;y<Field.height;y++){
            if (Field.field[x][y].show == true) {
                App.ctx.beginPath();
                App.ctx.lineWidth="3";
                App.ctx.strokeStyle = Field.field[x][y].color;

                App.ctx.rect(
                    x*Field.blocksize+Field.offsetx,
                    ((Field.height-1)*Field.blocksize)+Field.offsety-(y*Field.blocksize),
                    Field.blocksize,
                    Field.blocksize
                );
                App.ctx.stroke();
            }
        }
    }

    App.ctx.beginPath();
    App.ctx.lineWidth="1";
    App.ctx.strokeStyle = "black";
    App.ctx.rect(
        Field.offsetx,
        Field.offsety,
        Field.width*Field.blocksize,
        Field.height * Field.blocksize
    );
    App.ctx.stroke();
};



module.exports = Field;