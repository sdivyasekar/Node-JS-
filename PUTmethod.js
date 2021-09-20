var express = require('express');
var app = express();
var fs=require('fs');

var Employee={
	"Employee4":{
		"Name":"Kowsi",
		"ID":48,
		"Designation":"Designer"

	},
}

app.put('/employee',function(req,res)
{
  fs.readFile(__dirname+"/"+"Employee.json",function(err,data)
  {
    data=JSON.parse(data);
	data["Employee4"]=Employee["Employee4"];
	console.log(data);
	res.end(JSON.stringify(data));

  })
});
app.listen(8080);
console.log("The put method is processing");