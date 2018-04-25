function validateIOProperties (rule) {
  let result = {
    valid: true,
    errors: []
  }

  const validProperties = {
    input: {
      command: 'command',
      protocol: 'protocol'
    },
    output: {
      command: 'command',
      protocol: 'protocol'
    }
  }

  for (let pathway in validProperties) {
    if (rule[pathway] === undefined) {
      result.valid = false
      result.errors.push(`Rule does not contain an ${pathway} definition`)
    }
    for (let property in rule[pathway]) {
      if (!validProperties.input.hasOwnProperty(property)) {
        result.valid = false
        result.errors.push(`Input property '${property}' is not valid`)
      }
    }
  }
  return result
}

export default function validateRule (rule) {
  let result = validateIOProperties(rule)
  if (!result.valid) {
    result.errors.map(error => console.log(`ERROR: ${error}`))
    return false
  } else {
    console.log('Rule passes validation!')
  }
  return true
}
