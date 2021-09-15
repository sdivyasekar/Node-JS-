const data='{"Name":"Divya","age":22,"Gender":"Female","hobbies":"Playing chess"}'
try{
    const user=JSON.parse(data);
    console.log(user);
    console.log(typeof(user));
}
catch(err)
{
  console.error(err);
}
