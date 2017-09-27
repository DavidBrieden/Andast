var Game = require('./Game.js');
var App = require('./App.js');
var Field = require('./Field.js');

App.init();
Field.init();

Game.spawn();

Game.start();