import TV from './tv'
import AppleTV from './apple-tv'
import XBox from './xbox'
import Pi from './raspberry-pi'

const devices = [TV, AppleTV, XBox, Pi]
for (var device in devices) {
  devices[device].id = device
}
export default devices
