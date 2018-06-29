const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function on () {
  const { stdout, stderr } = await exec(
    'echo on 0 | cec-client RPI -s -d 1'
  )
  if (stderr) {
    console.log(stderr)
  }
  console.log(stdout)
}

async function off () {
  const { stdout, stderr } = await exec(
    'echo standby 0 | cec-client RPI -s -d 1'
  )
  if (stderr) {
    console.log(stderr)
  }
  console.log(stdout)
}

export async function toggle () {
  const power = await getStatus()
  if (power) {
    off()
  } else on()
}
export async function getStatus () {
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
