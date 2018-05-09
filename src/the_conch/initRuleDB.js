import fire from './firebaseInitializer'

let command = {
  name: 'TV_VOLUME_UP',
  pathway: 'output',
  value: '890',
  protocol: 'infrared'
}

let db = fire.database().ref('commands')
db.push(command)
