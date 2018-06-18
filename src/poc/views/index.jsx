const React = require('react')
const Layout = require('./layout')

const Circle = (props) => (
  <div id='percentage' className='c100 volume-0 center invisible'>
    <span id='volume'>{props.volume}</span>
    <div className='slice'>
      <div className='bar' />
      <div className='fill' />
    </div>
  </div>
)

class HelloMessage extends React.Component {
  render () {
    return (
      <Layout title='theConch'>
        <Circle volume={this.props.volume} />
        <h1 id='power'>{(this.props.power) ? 'On' : 'Standby'}</h1>
        <div id='buttons'>
          <button id='power_toggle'>Power Toggle</button>
          <button id='volume_up'>Volume Up</button>
          <button id='volume_down'>Volume Down</button>
        </div>
      </Layout>
    )
  }
}

module.exports = HelloMessage
