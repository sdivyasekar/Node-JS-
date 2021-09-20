var express=require('express');
var app=express();
var fs=require('fs');
var id=2;

app.delete('/del',function(req,res) {
 fs.readFile(__dirname+"/"+"Employee.json",function(err,data){
 
     data=JSON.parse(data);
     delete data["Employee"+2];
     console.log(data);
     res.end(JSON.stringify(data));
 })
});
app.listen(8080);
console.log("Gonna delete the second User in the employee List");