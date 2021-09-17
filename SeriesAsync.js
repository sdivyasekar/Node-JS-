let async=require('async');
async.series([
    function(callback)
    {
        setTimeout(function(){
        console.log("One");
        callback(null,1);
        
    },200);
},
    function(callback)
    {
        setTimeout(function()
        {
            console.log("Two");
            callback(null,2);
        },100);
    }
],
function(err, results) {
    console.log(results);
})