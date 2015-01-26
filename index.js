
var express = require('express');
var app = express();
var port = 8080;

app.get('/', function(req, res){

    res.send('hello world');

});

console.log('before listen');
app.listen(port, function(){
    console.log('now i\'m listening on port ' + port);
});
console.log('after listen');
