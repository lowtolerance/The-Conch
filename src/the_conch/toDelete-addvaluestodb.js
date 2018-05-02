import fire from './firebaseInitializer'

const actions = {
  command: 'B90',
  name: 'Volume Up'
}

fire.database().ref('actions').push(actions)
