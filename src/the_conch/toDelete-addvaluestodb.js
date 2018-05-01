import fire from './firebaseInitializer'

const actions = [
  {
    command: 'A90',
    name: 'Toggle Power'
  },
  {
    command: '890',
    name: 'Volume Up'
  },
  {
    command: 'B90',
    name: 'Volume Down'
  }
]

fire.database().ref('actions').push([actions])
