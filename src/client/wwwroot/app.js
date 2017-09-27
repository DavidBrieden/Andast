(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Game = require('./Game.js');

var Field = {};

Field.init = function () {

    Field.offsetx = 20;
    Field.offsety = 20;
    Field.blocksize = 10;
    Field.width = 20;
    Field.height = 40;

    Field.field = [];
    for (var x = 0; x < Field.width; x++) {
        var column = [];
        for (var y = 0; y < Field.height; y++) {
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

Field.render = function () {
    for (var x = 0; x < Field.width; x++) {
        for (var y = 0; y < Field.height; y++) {
            if (Field.field[x][y].show == true) {
                Game.ctx.beginPath();
                Game.ctx.lineWidth = "3";
                Game.ctx.strokeStyle = Field.field[x][y].color;
                Game.ctx.rect(x * Field.blocksize + Field.offsetx, y * Field.blocksize + Field.offsety, Field.blocksize, Field.blocksize);
                Game.ctx.stroke();
            }
        }
    }

    Game.ctx.beginPath();
    Game.ctx.lineWidth = "1";
    Game.ctx.strokeStyle = "black";
    Game.ctx.rect(Field.offsetx, Field.offsety, Field.width * Field.blocksize, Field.height * Field.blocksize);
    Game.ctx.stroke();
};

module.exports = Field;

},{"./Game.js":2}],2:[function(require,module,exports){
"use strict";

var Game = {};

Game.test = function () {
    console.log("Game Test");
};

Game.init = function () {
    Game.canvas = document.getElementById("canvas");
    Game.canvas.width = 800;
    Game.canvas.height = 600;
    Game.ctx = Game.canvas.getContext("2d");
};

module.exports = Game;

},{}],3:[function(require,module,exports){
'use strict';

var Game = require('./Game.js');
var Field = require('./Field.js');

Game.init();

Field.init();
Field.render();

},{"./Field.js":1,"./Game.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGNsaWVudFxcc2NyaXB0c1xcRmllbGQuanMiLCJzcmNcXGNsaWVudFxcc2NyaXB0c1xcR2FtZS5qcyIsInNyY1xcY2xpZW50XFxzY3JpcHRzXFxtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLE9BQU8sUUFBUSxXQUFSLENBQVg7O0FBRUEsSUFBSSxRQUFRLEVBQVo7O0FBRUEsTUFBTSxJQUFOLEdBQWEsWUFBVTs7QUFFbkIsVUFBTSxPQUFOLEdBQWdCLEVBQWhCO0FBQ0EsVUFBTSxPQUFOLEdBQWdCLEVBQWhCO0FBQ0EsVUFBTSxTQUFOLEdBQWtCLEVBQWxCO0FBQ0EsVUFBTSxLQUFOLEdBQWMsRUFBZDtBQUNBLFVBQU0sTUFBTixHQUFlLEVBQWY7O0FBRUEsVUFBTSxLQUFOLEdBQWMsRUFBZDtBQUNBLFNBQUksSUFBSSxJQUFFLENBQVYsRUFBWSxJQUFFLE1BQU0sS0FBcEIsRUFBMEIsR0FBMUIsRUFBOEI7QUFDMUIsWUFBSSxTQUFTLEVBQWI7QUFDQSxhQUFJLElBQUksSUFBRSxDQUFWLEVBQVksSUFBRSxNQUFNLE1BQXBCLEVBQTJCLEdBQTNCLEVBQStCO0FBQzNCLG1CQUFPLElBQVAsQ0FBWTtBQUNSLHNCQUFNLEtBREU7QUFFUix1QkFBTztBQUZDLGFBQVo7QUFJSDtBQUNELGNBQU0sS0FBTixDQUFZLElBQVosQ0FBaUIsTUFBakI7QUFDSDs7QUFFRCxVQUFNLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBZixJQUFvQjtBQUNoQixjQUFNLElBRFU7QUFFaEIsZUFBTztBQUZTLEtBQXBCO0FBS0gsQ0F6QkQ7O0FBNEJBLE1BQU0sTUFBTixHQUFlLFlBQVU7QUFDckIsU0FBSSxJQUFJLElBQUUsQ0FBVixFQUFZLElBQUUsTUFBTSxLQUFwQixFQUEwQixHQUExQixFQUE4QjtBQUMxQixhQUFJLElBQUksSUFBRSxDQUFWLEVBQVksSUFBRSxNQUFNLE1BQXBCLEVBQTJCLEdBQTNCLEVBQStCO0FBQzNCLGdCQUFJLE1BQU0sS0FBTixDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLElBQWxCLElBQTBCLElBQTlCLEVBQW9DO0FBQ2hDLHFCQUFLLEdBQUwsQ0FBUyxTQUFUO0FBQ0EscUJBQUssR0FBTCxDQUFTLFNBQVQsR0FBbUIsR0FBbkI7QUFDQSxxQkFBSyxHQUFMLENBQVMsV0FBVCxHQUF1QixNQUFNLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixLQUF6QztBQUNBLHFCQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsSUFBRSxNQUFNLFNBQVIsR0FBa0IsTUFBTSxPQUF0QyxFQUErQyxJQUFFLE1BQU0sU0FBUixHQUFrQixNQUFNLE9BQXZFLEVBQWdGLE1BQU0sU0FBdEYsRUFBaUcsTUFBTSxTQUF2RztBQUNBLHFCQUFLLEdBQUwsQ0FBUyxNQUFUO0FBQ0g7QUFDSjtBQUNKOztBQUVELFNBQUssR0FBTCxDQUFTLFNBQVQ7QUFDQSxTQUFLLEdBQUwsQ0FBUyxTQUFULEdBQW1CLEdBQW5CO0FBQ0EsU0FBSyxHQUFMLENBQVMsV0FBVCxHQUF1QixPQUF2QjtBQUNBLFNBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxNQUFNLE9BQXBCLEVBQTRCLE1BQU0sT0FBbEMsRUFBMEMsTUFBTSxLQUFOLEdBQVksTUFBTSxTQUE1RCxFQUFzRSxNQUFNLE1BQU4sR0FBZSxNQUFNLFNBQTNGO0FBQ0EsU0FBSyxHQUFMLENBQVMsTUFBVDtBQUNILENBbEJEOztBQXNCQSxPQUFPLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDdERBLElBQUksT0FBTyxFQUFYOztBQUVBLEtBQUssSUFBTCxHQUFZLFlBQVU7QUFDbEIsWUFBUSxHQUFSLENBQVksV0FBWjtBQUNILENBRkQ7O0FBSUEsS0FBSyxJQUFMLEdBQVksWUFBVTtBQUNsQixTQUFLLE1BQUwsR0FBYyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZDtBQUNBLFNBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsR0FBcEI7QUFDQSxTQUFLLE1BQUwsQ0FBWSxNQUFaLEdBQXFCLEdBQXJCO0FBQ0EsU0FBSyxHQUFMLEdBQVcsS0FBSyxNQUFMLENBQVksVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0gsQ0FMRDs7QUFPQSxPQUFPLE9BQVAsR0FBaUIsSUFBakI7Ozs7O0FDYkEsSUFBSSxPQUFPLFFBQVEsV0FBUixDQUFYO0FBQ0EsSUFBSSxRQUFRLFFBQVEsWUFBUixDQUFaOztBQUVBLEtBQUssSUFBTDs7QUFHQSxNQUFNLElBQU47QUFDQSxNQUFNLE1BQU4iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEdhbWUgPSByZXF1aXJlKCcuL0dhbWUuanMnKTtcclxuXHJcbnZhciBGaWVsZCA9IHt9O1xyXG5cclxuRmllbGQuaW5pdCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgRmllbGQub2Zmc2V0eCA9IDIwO1xyXG4gICAgRmllbGQub2Zmc2V0eSA9IDIwO1xyXG4gICAgRmllbGQuYmxvY2tzaXplID0gMTA7XHJcbiAgICBGaWVsZC53aWR0aCA9IDIwO1xyXG4gICAgRmllbGQuaGVpZ2h0ID0gNDA7XHJcblxyXG4gICAgRmllbGQuZmllbGQgPSBbXTtcclxuICAgIGZvcih2YXIgeD0wO3g8RmllbGQud2lkdGg7eCsrKXtcclxuICAgICAgICB2YXIgY29sdW1uID0gW107XHJcbiAgICAgICAgZm9yKHZhciB5PTA7eTxGaWVsZC5oZWlnaHQ7eSsrKXtcclxuICAgICAgICAgICAgY29sdW1uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRmllbGQuZmllbGQucHVzaChjb2x1bW4pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBGaWVsZC5maWVsZFswXVswXSA9IHtcclxuICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgIGNvbG9yOiBcImJsdWVcIlxyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5cclxuRmllbGQucmVuZGVyID0gZnVuY3Rpb24oKXtcclxuICAgIGZvcih2YXIgeD0wO3g8RmllbGQud2lkdGg7eCsrKXtcclxuICAgICAgICBmb3IodmFyIHk9MDt5PEZpZWxkLmhlaWdodDt5Kyspe1xyXG4gICAgICAgICAgICBpZiAoRmllbGQuZmllbGRbeF1beV0uc2hvdyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIEdhbWUuY3R4LmxpbmVXaWR0aD1cIjNcIjtcclxuICAgICAgICAgICAgICAgIEdhbWUuY3R4LnN0cm9rZVN0eWxlID0gRmllbGQuZmllbGRbeF1beV0uY29sb3I7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmN0eC5yZWN0KHgqRmllbGQuYmxvY2tzaXplK0ZpZWxkLm9mZnNldHgsIHkqRmllbGQuYmxvY2tzaXplK0ZpZWxkLm9mZnNldHksIEZpZWxkLmJsb2Nrc2l6ZSwgRmllbGQuYmxvY2tzaXplKTtcclxuICAgICAgICAgICAgICAgIEdhbWUuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEdhbWUuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgR2FtZS5jdHgubGluZVdpZHRoPVwiMVwiO1xyXG4gICAgR2FtZS5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBHYW1lLmN0eC5yZWN0KEZpZWxkLm9mZnNldHgsRmllbGQub2Zmc2V0eSxGaWVsZC53aWR0aCpGaWVsZC5ibG9ja3NpemUsRmllbGQuaGVpZ2h0ICogRmllbGQuYmxvY2tzaXplKTtcclxuICAgIEdhbWUuY3R4LnN0cm9rZSgpO1xyXG59O1xyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZpZWxkOyIsInZhciBHYW1lID0ge307XHJcblxyXG5HYW1lLnRlc3QgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coXCJHYW1lIFRlc3RcIik7XHJcbn07XHJcblxyXG5HYW1lLmluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgR2FtZS5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuICAgIEdhbWUuY2FudmFzLndpZHRoID0gODAwO1xyXG4gICAgR2FtZS5jYW52YXMuaGVpZ2h0ID0gNjAwO1xyXG4gICAgR2FtZS5jdHggPSBHYW1lLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XHJcbiIsInZhciBHYW1lID0gcmVxdWlyZSgnLi9HYW1lLmpzJyk7XHJcbnZhciBGaWVsZCA9IHJlcXVpcmUoJy4vRmllbGQuanMnKTtcclxuXHJcbkdhbWUuaW5pdCgpO1xyXG5cclxuXHJcbkZpZWxkLmluaXQoKTtcclxuRmllbGQucmVuZGVyKCk7Il19
