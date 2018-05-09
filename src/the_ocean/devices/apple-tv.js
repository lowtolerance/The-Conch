import uuid from 'uuid/v4'

export default {
  key: uuid(),
  class: 'media',
  type: 'stb',
  brand: 'Apple',
  model: 'Apple TV 4th Gen',
  interfaces: {
    inputs: ['IR', 'App', 'BT', 'NET'],
    outputs: ['BT', 'NET', 'CEC']
  }
}
