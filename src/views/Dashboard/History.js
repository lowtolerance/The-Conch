import React from 'react'
import { map } from '../../utils'

const History = (props) =>
  <table className='history table table-sm'>
    <thead>
      <tr>
        <th>Command</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.history.map(command =>
        <tr key={command}>
          <td>{command}</td>
          <td>{map(command)}</td>
        </tr>)}
    </tbody>
  </table>

export default History
