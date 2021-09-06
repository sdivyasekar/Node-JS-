var fs=require('fs');
fs.writeFile('test.txt','Write File in File  System',function (err){
  if (err)
  console.log(err);
                else
  console.log("Succesfully completed");                 
});