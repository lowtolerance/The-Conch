const React = require('react')

class Layout extends React.Component {
  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href='stylesheets/style.css' />
          <link rel='stylesheet' href='stylesheets/circle.css' />
        </head>
        <body>{this.props.children}</body>
        <script type='text/javascript' src='/socket.io/socket.io.js'/>
        <script src='javascripts/app.js' />
      </html>
    )
  }
}

module.exports = Layout
