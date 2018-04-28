import React, { Component } from 'react'
import io from 'socket.io-client'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { msg: 'The Conch awaits', newMessage: 'The Conch awaits', command: '' }
    this.handlePowerClick = this.handlePowerClick.bind(this)
    this.handleVolumeDownClick = this.handleVolumeDownClick.bind(this)
    this.handleVolumeUpClick = this.handleVolumeUpClick.bind(this)
    this.clearMessage = this.clearMessage.bind(this)
    this.updateMessage = this.updateMessage.bind(this)
  }
  handlePowerClick () {
    io.emit('IR_', 'A90')
  }

  handleVolumeUpClick () {
    io.emit('IR_', '890')
  }

  handleVolumeDownClick () {
    io.emit('IR_', 'B90')
  }

  clearMessage () {
    this.setState({msg: 'The Conch awaits'})
    clearInterval(this.state.newMessage)
  }

  updateMessage (data) {
    this.setState.newMessage = setInterval(this.clearMessage, 5000)
    this.setState({msg: data})
  }

  componentDidMount () {
    io.connect('http://localist:3010')
    io.on('connect', function () {
      io.on('IR_', function (data) {
        this.setState({command: data})
      })
      io.on('tcMessage', function (data) {
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
