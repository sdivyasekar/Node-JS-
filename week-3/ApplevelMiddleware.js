var express=require('express');
var app=express();
var alert=require('alert');
app.use(function(req,res,next)
{
    alert("welcome");
    console.log(req.method,'and',req.url);
    next();
});
app.get('/',function(req,res,next)
{
    console.log("First Page");
    res.send("Hello Everyone");
    next();
});
app.get('/exit',function(req,res,next)
{
    console.log("Second Page");
    res.send("This is an Exit Page");
    next();
});
app.use(function(req,res)
{
    alert("End");
    console.log("The End(The next Middleware");
});
app.listen(8080);