const enqueue = require('./utils/enqueue')
function dispatch (result) {
  switch (typeof result) {
    case 'string':
      console.log(`Adding event '${result}' to queue`)
      enqueue(result)
      break
    case 'object':
      console.log('')
      enqueue(result)
      break
    case 'function':
      console.log(`Performing action '${result}'`)
      result()
      break
    default:
      console.log('Doing nothing with ' + typeof result)
      break
  }
}

module.exports = dispatch
