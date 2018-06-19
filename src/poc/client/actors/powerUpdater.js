const powerUpdater = (store) => {
  const power = document.getElementById('power')
  power.innerHTML = (store.getState().power) ? 'On' : 'Standby'
}

export default powerUpdater
