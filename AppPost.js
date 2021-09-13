var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:true})
app.get('/',function(req,res)
{
res.sendFile(__dirname+"/"+"Indexpost.html")
});
app.post('/home',urlencodedParser,function(req,res)
{
    res.send('<h1>Welcome'+req.body.Username+'</h1><br><h2>Mail ID:'+req.body.mailid+'</h2>')
 
});
app.listen(8080);