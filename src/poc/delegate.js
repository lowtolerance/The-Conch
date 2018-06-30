const enqueue = require('./utils/enqueue')

// Takes the result from our lookup and
// and takes the appropriate action.
// Results will be either a string, an
// array (or other iterable Object) of strings,
// a function or undefined
// String-based results get placed into our event queue,
// continuing the chain of lookups.
// Function-based results get executed, terminating
// the chain of lookup. undefined results also terminate
// the chain, outputting an error.

function delegate (result) {
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

module.exports = delegate
