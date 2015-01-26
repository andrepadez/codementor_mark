var express = require('express');
var app = express();
var port = 8080;


app.get('/', function(req, res){

    res.send('hello world');

});

console.log('before listen');
app.listen(port, whenGet);
console.log('after listen');


function whenGet(){
    console.log('now i\'m listening on port ' + port);
}

setTimeout(function(){console.log(1)}, 1000);
setTimeout(function(){console.log(2)}, 1000);
setTimeout(function(){console.log(3)}, 1000);
