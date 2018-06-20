// Updates our power status indicator whenever the
// state changes.
const powerUpdater = (store) => {
  const power = document.getElementById('power')
  power.innerHTML = (store.getState().power) ? 'On' : 'Standby'
}

export default powerUpdater
