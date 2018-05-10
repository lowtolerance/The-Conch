import React from 'react'

const Button = (props) => {
  return (
    <button
      type='button'
      key={props.action.command}
      name={props.action.name}
      className='btn btn-outline-primary'
      onClick={(e) => {props.handler(props.action.command, e) }}>
      {props.action.name}
    </button>
  )
}

const Buttons = (props) => {
  return (
    props.actions.map(action =>
      <Button
        action={action}
        handler={props.handler} />
    )
  )
}

export default Buttons
