import fire from './firebaseInitializer'

let commands = []
let commandsRef = fire.database().ref('commands')
commandsRef.on('child_added', snapshot => {
  let command = snapshot.val()
  commands.push(command)
  console.log(commands)
})
