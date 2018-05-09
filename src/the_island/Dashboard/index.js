import React, { Component } from 'react'
import client from 'socket.io-client'
import History from './History'
import Buttons from './Buttons'
import Header from './Header'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      message: ' awakes',
      history: [],
      actions: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.socket = client('http://localhost:3010')
    this.socket.on('IR_', data => this.setState({ history: [...this.state.history, data] }))
    this.socket.on('tcMessage', data => this.setState({ message: data }))
  }

  componentWillMount () {
    this.setState({ message: ' awaits' })
  }

  handleClick (data, e) {
    e.preventDefault()
    this.socket.emit('IR_', data)
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
