var express=require('express');
var app=express();
var fs=require('fs');
app.get('/employee',function(req,res) {
    fs.readFile(__dirname+ "/"+ "Employee.json",function(err,data){
        res.end(data);
        console.log(data.toString());
    })
});
app.listen(8080);
console.log("It is a get method");
