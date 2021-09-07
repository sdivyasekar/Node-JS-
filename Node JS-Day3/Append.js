var fs=require('fs');
fs.appendFile('test.txt','Hello Everyone',function(err)
{
    if(err)
    console.log(err);
    else
    console.log("Append operation is successfull");
});