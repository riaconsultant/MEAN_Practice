const http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,"test/plan");
    res.end("Hello World");
    console.log(req);
}).listen(3000);