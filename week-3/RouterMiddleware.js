var express=require('express');
var app=express();
var alert=require('alert');
var router=express.Router();
router.use(function(req,res,next)
{
    alert("welcome");
    console.log(req.method,'and',req.url);
    next();
});
app.get('/',function(req,res,next)
{
    console.log("First Page");
    res.send("Lets go to the home Page");
    next();
});
app.get('/clarity',function(req,res,next)
{
    console.log("First Page");
    res.send("Hello Everyone");
    next();
});
router.get('/contact',function(req,res,next)
{
    console.log("second Page");
    res.send("Hello World");
    next();
});
router.get('/exit',function(req,res,next)
{
    console.log("Second Page");
    res.send("This is an Exit Page");
    next();
});
app.use('/clarity',router);
app.listen(8080);