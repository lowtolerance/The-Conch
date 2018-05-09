import fire from './firebaseInitializer'

let db = fire.database().ref('commands')

const mapI2U = command => {
  var input
  db.orderByChild('name').equalTo(command).once('child_added', function (data) {
    input = data.val().value
  }).then(command => {
    return new Promise((resolve, reject) => {
      if (command) {
        resolve(command)
      }
    })
  }
  )
  return input
}

// const map = command => mapU2O(mapI2U(command))

const map = command => {
  console.log('from map function: ' + mapI2U(command))
  return mapI2U(command)
}

export default map
