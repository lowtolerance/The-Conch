import React from 'react'
const Button = (props) =>
  <button
    type='button'
    key={props.action.id}
    className='btn btn-outline-primary'
    name={props.action.command}
    onClick={(e) => { props.handler(props.action.command, e) }}>
    {props.action.name}
  </button>

const Buttons = (props) => {
  return (
    props.actions.map(action =>
      <Button
        key={action.id}
        action={action.name}
        handler={props.handler} />
    )
  )
}

export default Buttons
