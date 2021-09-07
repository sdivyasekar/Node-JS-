var fs=require('fs');
fs.readFile('read.txt',function(err,data)
{
    if(err)
    console.log(err);
    else
    console.log(date.toString());
});