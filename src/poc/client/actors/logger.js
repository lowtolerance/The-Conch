// Just a generic logger.
// Logs our state object to the console every time it changes

const logger = (store) => {
  console.log(store.getState())
}

export default logger
