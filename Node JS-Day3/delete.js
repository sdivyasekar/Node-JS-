var fs=require('fs');
fs.unlink('test.txt',function()
{
    console.log('Write operation complete');
});