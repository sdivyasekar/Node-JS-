function fastFunction () {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log('Fast function done')
        resolve()
      }, 100)
    })
  }
  function slowFunction () {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log('Slow function done')
        resolve()
      }, 300)
    })
  }
  function asyncRunner () {
      return Promise.all([slowFunction(), fastFunction()])
  }
  asyncRunner()
  .then(([ slowFunction, fastFunction]) => {
    console.log('All operations resolved successfully')
  })
  .catch((error) => {
    console.error('There has been an error:', error)
  })