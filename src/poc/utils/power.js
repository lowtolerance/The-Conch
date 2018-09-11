const util = require('util')
const exec = util.promisify(require('child_process').exec)

const power = {
  async on () {
    const { stdout, stderr } = await exec(
      'echo on 0 | cec-client RPI -s -d 1'
    )
    if (stderr) {
      console.log(stderr)
    }
    console.log(stdout)
  },

  async off () {
    const { stdout, stderr } = await exec(
      'echo standby 0 | cec-client RPI -s -d 1'
    )
    if (stderr) {
      console.log(stderr)
    }
    console.log(stdout)
  },

  async toggle () {
    const power = await this.getStatus()
    if (power) {
      this.off()
    } else this.on()
  },

  async getStatus () {
    const { stdout, stderr } = await exec(
      'echo pow 0 | cec-client RPI -s -d 1'
    )
    if (stderr) {
      console.log(stderr)
    }
    if (stdout.includes('standby')) {
      return false
    } else if (stdout.includes('on')) {
      return true
    }
    console.log(stdout)
  }
}
module.exports = power
