import React, { Component } from 'react'
import client from 'socket.io-client'

const Message = (props) => <h1>{props.text}</h1>

const Button = (props) =>
  <button name={props.action.command} onClick={(e) => { props.handler(props.action.command, e) }} >{props.action.name}</button>

const Buttons = (props) => (
  <div className='button-group'>
    {props.actions.map(action =>
      <Button action={action} handler={props.handler} />
    )}
  </div>
)

const CommandHistory = (props) => (
  <ul className='history'>
    {props.history.map(command => <li>{command}</li>)}
  </ul>
)

class App extends Component {
  constructor () {
    super()
    this.state = {
      message: 'The Conch awaits',
      history: ['Initialization'],
      actions: [
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
    }
    this.handleClick = this.handleClick.bind(this)
    this.socket = client('http://localhost:3010')
    this.socket.on('IR_', data => this.setState({history: [...this.state.history, data]}))
    this.socket.on('tcMessage', data => this.setState({message: data}))
  }

  handleClick (data, e) {
    e.preventDefault()
    const socket = client('http://localhost:3010')
    socket.emit('IR_', data)
  }

  render () {
    return (
      <div className='App'>
        <Message text={this.state.message} />
        <Buttons actions={this.state.actions} handler={this.handleClick} />
        <CommandHistory history={this.state.history} />
      </div>
    )
  }
}

export default App
