var express     = require('express');
var app         = express();
var http        = require('http').Server(app);

var start = function() {
    
    app.use(express.static('src/client/wwwroot'));

    http.listen(process.env.PORT || 3000, function(){
        console.log('listening on *:3000');
    });

};

module.exports = {
    start: start
}