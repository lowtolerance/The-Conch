import validProperties from '../the_ocean/validProperties'
function ioPropertiesAreValid (rule) {
  let result = {
    valid: true,
    errors: []
  }

  for (let pathway in validProperties) {
    if (rule[pathway] === undefined) {
      result.valid = false
      result.errors.push(`Rule does not contain an ${pathway} definition`)
    }
    for (let property in rule[pathway]) {
      if (!validProperties[pathway].hasOwnProperty(property)) {
        result.valid = false
        result.errors.push(`${pathway.charAt(0).toUpperCase() + pathway.slice(1)} property '${property}' is not valid`)
      }
    }
  }
  return result
}

export default function ruleValidates (rule) {
  let result = ioPropertiesAreValid(rule)
  if (!result.valid) {
    result.errors.map(error => console.log(`ERROR: ${error}`))
    return false
  }
  return true
}
