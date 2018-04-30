import React, { Component } from 'react'
import client from 'socket.io-client'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { msg: 'The Conch awaits', newMessage: 'The Conch awaits', command: '' }
  }

  componentDidMount () {
    function handlePowerClick () {
      socket.emit('IR_', 'A90')
    }

    function handleVolumeUpClick () {
      socket.emit('IR_', '890')
    }

    function handleVolumeDownClick () {
      socket.emit('IR_', 'B90')
    }

    function clearMessage () {
      this.setState({msg: 'The Conch awaits'})
      clearInterval(this.state.newMessage)
    }

    function updateMessage (data) {
      this.setState.newMessage = setInterval(this.clearMessage, 5000)
      this.setState({msg: data})
    }

    const socket = client('http://localhost:3010')
    socket.on('connect', function () {
      socket.on('IR_', function (data) {
        this.setState({command: data})
      })
      socket.on('tcMessage', function (data) {
        this.setState({newMessage: data})
      })
    })
  }
  render () {
    return (
      <div className='App'>
        <p id='msg'>The Conch awaits</p>
        <button name='TV_POWER_TOGGLE' onClick={this.handlePowerClick}>Power</button>
        <button name='TV_VOLUME_UP' onClick={this.handleVolumeUpClick}>Volume Up</button>
        <button name='TV_VOLUME_DOWN' onClick={this.handleVolumeDownClick}>Volume Down</button>
        <ul id='output' />
      </div>
    )
  }
}

export default App
