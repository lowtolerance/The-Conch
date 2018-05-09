import React from 'react'
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

export default Header
