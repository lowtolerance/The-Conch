import React, { Component } from 'react'
import client from 'socket.io-client'
import fire from '../../the_conch/firebaseInitializer'
import History from './History'
import Buttons from './Buttons'

const Message = (props) =>
  <small>
    {props.message}
  </small>

const Header = (props) =>
  <div className='jumbotron'>
    <div className='container'>
      <span className='row'>
        <h1 className='display-4'>The Conch <Message message={props.message}>awakes</Message></h1>
      </span>
    </div>
  </div>



class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      message: ' awakes',
      history: [],
      actions: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.socket = client('http://192.168.1.185:3010')
    this.socket.on('IR_', data => this.setState({ history: [...this.state.history, data] }))
    this.socket.on('tcMessage', data => this.setState({ message: data }))
  }

  componentWillMount () {
    this.setState({ message: ' awaits' })
    let actionsRef = fire.database().ref('actions')
    actionsRef.on('child_added', snapshot => {
      let action = { name: snapshot.val(), command: snapshot.val(), id: snapshot.key }
      this.setState({ actions: [action].concat(this.state.actions) })
    })
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
