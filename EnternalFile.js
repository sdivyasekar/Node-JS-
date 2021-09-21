const request = require('request');
var express=require('express');
var app=express();
app.get('/result',function(req,res){
var url = 'http://localhost:8080/employee';
  
request(url, (error, response, body)=>{
    
    if(error) console.log(error)
    console.log(response.statusCode);
    console.log(body);
    res.send(body);
})
});
app.listen(3000);
console.log("Successfull");