/*
Sample Concept need to learn after exercise....
 Here is how PHP or ASP handles a file request:

Sends the task to the computer's file system.
Waits while the file system opens and reads the file.
Returns the content to the client.
Ready to handle the next request.
Here is how Node.js handles a file request:

Sends the task to the computer's file system.
Ready to handle the next request.
When the file system has opened and read the file, the server returns the content to the client.
Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.
*/

var http= require('http');
// Create own module and add the reference in the application.
var dt = require('./myfirstmodule');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/html'});
    // Own build module functions
    response.write('Current time is :'+ dt.myDateTime());
    response.end('<h2>Hello</h2> Manoj!..');
    //console.log("Application up and running ....");
}).listen(8060);