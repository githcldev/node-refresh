var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<h1>Node Core Home Page</h1>');
    res.end();
})

server.listen(3000);
console.log('node core server on');