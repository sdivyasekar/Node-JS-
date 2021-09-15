const parseJsonAsync = (jsonString) => {
    return new Promise(resolve=> {
      setTimeout(()=> {
        resolve(JSON.parse(jsonString))
      })
    })
  }
  
  const data = '{ "name": "Flavio", "age": 35 }'
 
  parseJsonAsync(data).then(jsonData => console.log(jsonData))
  
  