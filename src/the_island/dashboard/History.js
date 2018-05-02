import React from 'react'
const History = (props) =>
  <table className='history table table-sm'>
    <thead>
      <tr>
        <th>Command</th>
      </tr>
    </thead>
    <tbody>
      {props.history.map(command =>
        <tr key={command}>
          <td>{command}</td>
        </tr>)}
    </tbody>
  </table>

export default History
