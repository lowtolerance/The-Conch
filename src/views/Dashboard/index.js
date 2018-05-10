import React, { Component } from 'react'
import History from './History'
import Buttons from './Buttons'
import Header from './Header'
const client = require('socket.io-client')

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      message: ' awakes',
      history: [],
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
    this.messages = client.connect('http://localhost:3010')
    this.messages.on('IR', data => this.setState({ history: [...this.state.history, data] }))
    this.messages.on('tc', data => this.setState({ message: data }))
  }

  componentWillMount () {
    this.setState({ message: ' awaits' })
  }

  handleClick (data, e) {
    e.preventDefault()
    this.setState({history: [...this.state.history, data]})
    this.messages.emit('IR', data)
    this.messages.on('tc', data => console.log(data))
  }

  render () {
    return (
      <div>
        <Header message={this.state.message} />
        <div className='container'>
          <div className='row'>
            <div className='col-5'>
              <Buttons
                actions={this.state.actions}
                handler={this.handleClick} />
            </div>
            <div className='col-7'>
              <History history={this.state.history} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
