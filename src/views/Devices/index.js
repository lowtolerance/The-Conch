import React, { Component } from 'react'
import devices from '../../models/devices'

class Devices extends Component {
  constructor (props) {
    super(props)

    this.state = {devices: devices}
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (e) {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({devices: this.state.devices.filter(device => device.key !== e.target.value)})
  }

  render () {
    return (
      <div>
        <h1>Devices</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Type</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Inputs</th>
              <th>Outputs</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.devices.map(device => {
              return (
                <tr key={device.key}>
                  <td>{device.id}</td>
                  <td>{device.class}</td>
                  <td>{device.type}</td>
                  <td>{device.brand}</td>
                  <td>{device.model}</td>
                  <td>
                    <ul>{device.interfaces.inputs.map(input => {
                      return (<li key={input}>{input}</li>)
                    })}
                    </ul>
                  </td>
                  <td>
                    <ul>{device.interfaces.outputs.map(output => {
                      return (<li key={output}>{output}</li>)
                    })}
                    </ul>
                  </td>
                  <td>
                    <button value={device.key} onClick={this.handleDelete} className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Devices
