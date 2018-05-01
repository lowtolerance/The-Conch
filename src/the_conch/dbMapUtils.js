import commandTable from '../the_ocean/commandTable'

const mapI2U = command => commandTable.input(command).value

const mapU2O = command => commandTable.output(command).value

const map = command => mapU2O(mapI2U(command))

export default map
