import {volumePercentage} from '../utils/utils'

const percentageUpdater = (store) => {
  const percentage = document.getElementById('percentage')
  percentage.className = ''
  percentage.classList.add('c100')
  percentage.classList.add('center')
  percentage.classList.add(volumePercentage(store.getState().volume, store.getState().config.maxVolume))
}

export default percentageUpdater
