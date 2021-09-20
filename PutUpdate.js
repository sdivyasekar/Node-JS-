var express = require('express');
var app = express();
var fs=require('fs');

var Employee={
	"Employee3":{
		"Name":"Malani",
		"ID":48,
		"Designation":"Production"

	},
}

app.put('/employee',function(req,res)
{
  fs.readFile(__dirname+"/"+"Employee.json",function(err,data)
  {
    data=JSON.parse(data);
	data["Employee3"]=Employee["Employee3"];
	console.log(data);
	res.end(JSON.stringify(data));

  })
});
app.listen(8080);
console.log("The put method is processing");