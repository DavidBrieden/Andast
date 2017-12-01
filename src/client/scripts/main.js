var Game = require('./Game.js');
var App = require('./App.js');
var Field = require('./Field.js');
var Scoreboard = require('./Scoreboard.js');
var BlockDisplay = require('./BlockDisplay.js');

App.init();
Field.init();
Scoreboard.init();
BlockDisplay.init();

Game.spawn();

Game.start();