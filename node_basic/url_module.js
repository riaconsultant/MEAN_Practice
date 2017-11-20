/* http module to start a server in a define port */
var http = require('http');
/* Read the url query parameter and hash using the url module */
var url = require('url');
/* Read the files in the define path of the server */
var fs = require('fs');
/* for Upper case add NPM module */
var uc = require('upper-case');
/* Pre build event module */
var evt=require('events');
var eventEmitter = evt.EventEmitter();

var ringBell = function ringbell(){
    console.log('ring Bell !!!');
}

http.createServer(function(rq,rs){
    /* this path is static */
    var path="static/sun.html";
    /* Use url module to make it dynamic via url parameter */
    var queryUrl = url.parse(rq.url,true);
    var fileName = "."+queryUrl.pathname;
    /* change the 'fileName' variable to the Path variable for static read file */
    fs.readFile(fileName,function(err,data){
        if(err){
            rs.writeHead(404,{'Content-type':'text/html'});
            return rs.end(uc("404 not found !"));
        }
        rs.writeHead(200,{'Content-type':'text/html'});
        rs.write(data);
        return rs.end();
    });
    /* appendFile -- Create Once and after append */
    /*fs.appendFile('static/newFile.html','Hello World !!',function(err){
        if(err) throw err;
        console.log('Saved !');
    });*/

}).listen(8060);