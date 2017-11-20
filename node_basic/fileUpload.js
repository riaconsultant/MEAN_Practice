var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(rq,rs){
    var path="static/form.html";
    if(rq.url =='/fileUpload'){
        var form = new formidable.IncomingForm();
        form.parse(rq,function(err,fields,files){
            var oldPath =  files.filetoupload.path;
            var newPath = 'static/uploaded/'+files.filetoupload.name;
            fs.rename(oldPath,newPath,function(err){
                if(err) throw err;
                rs.write('File Uploaded and moved to location'+ newPath);
                rs.end();
            })
            rs.write('File Uploaded');
            rs.end();
        });
    }else{
        fs.readFile(path,function(err,data){
            if(err){
                rs.writeHead(404,{'Content-type':'text/html'});
                rs.write('404 not found !');
                rs.end();
            }
            rs.writeHead(200,{'Content-type':'text/html'});
            rs.write(data);
            rs.end();
        });
    }
    
}).listen(8086);
