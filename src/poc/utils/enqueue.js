// Add event(s) to our queue
const enqueue = function (data) {
  if (typeof data === 'object') {
    for (let item in data) {
      global.eventQueue.push(data[item])
    }
  } else global.eventQueue.push(data)
}

module.exports = enqueue
