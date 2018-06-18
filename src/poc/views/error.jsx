const React = require('react')

class Content extends React.Component {
  render () {
    return (
      <div id='content'>
        <h1>{this.props.message}</h1>
        <h2>{this.props.error.status}</h2>
        <pre>{this.props.error.stack}</pre>
      </div>
    )
  }
}

module.exports = Content
