let async=require('async');
let q=async.priorityQueue(function(task,callback)
{
    console.log("Hello"+task.name);
    callback();
});
q.push({name:"Janani"},2,function(err) {
console.log("Gonna display 2");
});
q.push({name:"Priya"},3,function(err) {
    console.log("Gonna display 3");
});
q.push({name:"Mona"},1,function(err) {
    console.log("Gonna display 1");
});