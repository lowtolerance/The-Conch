// Remove an event from our queue and
// return it
function dequeue () {
  return this.eventQueue.shift()
}

module.exports = dequeue
