var http=require('http');
http.createServer(function(req,res)
{    
     res.writeHead(200,{'content-type':'text/plain'});
     res.write("Hello Everyone.,This is Divya");
     res.end('Thank You');
}).listen(8080);