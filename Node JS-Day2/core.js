var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Welcome to this Page');
    res.end();
}).listen(3000);
console.log("Successfull");