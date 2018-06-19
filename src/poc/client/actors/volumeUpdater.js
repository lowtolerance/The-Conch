const volumeUpdater = (store) => {
  const volume = document.getElementById('volume')
  volume.innerHTML = store.getState().volume
}

export default volumeUpdater
