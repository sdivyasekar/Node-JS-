var fs=require("fs");
var file="Input.txt";
fs.exists(file,function(exists)
{
    if(exists)
    {
        fs.stat(file,function(err,stat)
        {
            if(err)throw err;
            if(stat.isFile()){
                fs.readFile(file,"Utf8",function(err,data)
                {
                    if(err)throw err;
                    console.log(data);
                })
            }
        })
    }
    });