import commandTable from '../models/commandTable'

const _mapI2U = command => {
  return commandTable.input(command).value
}

const _mapU2O = command => {
  return commandTable.output(command).value
}

const map = command => _mapU2O(_mapI2U(command))

export default map
