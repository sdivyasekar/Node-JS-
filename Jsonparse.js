const express=require('express');
var app=new express();
const fs=require('fs');
const fileContents = fs.readFileSync('./file.json')
app.get('/hello',function(req,res){
try {
   const  data = JSON.parse(fileContents)
  console.log(data);
  res.send(data);
  res.end();
   }
catch(err)
{
    console.error(err);
}
});
app.listen(8080);