var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.sendFile(__dirname+"/"+"Index.html")
});
app.get('/home',function(req,res)
{
    res.send('<h1>Welcome'+req.query['Username']+'<h1><br><h2> Mail ID:'+req.query['mailid']+'</h1>')
})
app.listen(8080);