let async=require('async');
async.race([
    function(callback){
        setTimeout(function(){
            callback(null,"One")
        },300)
    },
    function(callback){
        setTimeout(function(){
            callback(null,"Five")
        },100)
    },
],
    function(err,result){
        console.log(result);
    }

);