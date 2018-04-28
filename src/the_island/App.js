import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { newMessage: 'Hello, world!' }
    function handlePowerClick() {
      socket.emit('IR_', 'A90')
    }

    function handleVolumeUpClick() {
      socket.emit('IR_', '890')
    }

    function handleVolumeDownClick() {
      socket.emit('IR_', 'B90')
    }
    
    function clearMessage() {
      const msg = document.getElementById('msg')
      msg.textContent = 'The Conch awaits'
      clearInterval(newMessage)
    }

    function updateMessage (data) {
      this.setState(newMessage) = setInterval(clearMessage, 5000)      
      msg.textContent = data
    }
  }
  render () {
    return (
      <div className='App'>
        <p id="msg">The Conch awaits</p>
        <button name="TV_POWER_TOGGLE" onClick={handlePowerClick()}>Power</button>
        <button name="TV_VOLUME_UP" onClick={handleVolumeUpClick()}>Volume Up</button>
        <button name="TV_VOLUME_DOWN" onClick={handleVolumeDownClick()}>Volume Down</button>
        <ul id="output"></ul>
      </div>
    )
  }
}

export default App
