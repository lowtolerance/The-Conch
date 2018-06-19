const readyMonitor = (store) => {
  const ready = document.getElementById('percentage')
  if (store.getState().ready) ready.classList.remove('invisible')
  if (!store.getState().ready) ready.classList.add('invisible')
}

export default readyMonitor
