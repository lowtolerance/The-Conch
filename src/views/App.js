import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Devices from './Devices'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <Dashboard />
        <Devices />
      </div>
    )
  }
}

export default App
