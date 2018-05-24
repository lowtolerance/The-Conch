import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Devices from './Devices'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      devices: {
        visible: false
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({devices: {visible: !this.state.devices.visible}})
  }

  render () {
    return (
      <div className='App'>
        <Dashboard />
        <button className='btn btn-info' onClick={this.handleClick}>Devices</button>
        {(this.state.devices.visible) &&
        <Devices />}
      </div>
    )
  }
}

export default App
