'use strict';

const config = {
  maxVolume: 15
};

const integerPercentage = (val, max) => Math.round(val * (100 / max));
const volumePercentage = (vol, max) => ('volume-' + integerPercentage(vol, max));
const getVolumeStatus = () => 0;
const getPowerStatus = () => false;
const getConfig = () => config;

const getInitialState = () => (
  {
    volume: getVolumeStatus(),
    power: getPowerStatus(),
    config: getConfig(),
    ready: false
  }
);

const reducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'READY':
      return {...state, ready: true}
    case 'POWER_TOGGLE':
      return {...state, power: !state.power}
    case 'VOLUME_UP':
      if (state.volume < state.config.maxVolume) {
        return {...state, volume: state.volume + 1}
      } else return state
    case 'VOLUME_DOWN':
      if (state.volume > 0) {
        return {...state, volume: state.volume - 1}
      } else return state
    default:
      return state
  }
};

const logger = (store) => {
  console.log(store.getState());
};

const percentageUpdater = (store) => {
  const percentage = document.getElementById('percentage');
  percentage.className = '';
  percentage.classList.add('c100');
  percentage.classList.add('center');
  percentage.classList.add(volumePercentage(store.getState().volume, store.getState().config.maxVolume));
};

const powerUpdater = (store) => {
  const power = document.getElementById('power');
  power.innerHTML = (store.getState().power) ? 'On' : 'Standby';
};

const readyMonitor = (store) => {
  const ready = document.getElementById('percentage');
  if (store.getState().ready) ready.classList.remove('invisible');
  if (!store.getState().ready) ready.classList.add('invisible');
};

const volumeUpdater = (store) => {
  const volume = document.getElementById('volume');
  volume.innerHTML = store.getState().volume;
};



var actors = /*#__PURE__*/Object.freeze({
  logger: logger,
  percentageUpdater: percentageUpdater,
  powerUpdater: powerUpdater,
  readyMonitor: readyMonitor,
  volumeUpdater: volumeUpdater
});

const handlers = [];
for (let actor in actors) { handlers.push(actors[actor]); }

const createStore = (reducer) => {
  const store = {};
  store.state = getInitialState();
  store.handlers = handlers || [];
  store.getState = () => store.state;
  store.subscribe = (actor) => store.handlers.push(actor);
  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    store.handlers.forEach(listener => listener(store));
  };
  store.dispatch({});
  return store
};

/* eslint-env browser */

const store = createStore(reducer);

document.addEventListener('click', function (event) {
  switch (event.target.id) {
    case ('power_toggle'):
      store.dispatch({type: 'POWER_TOGGLE'});
      break
    case ('volume_up'):
      store.dispatch({type: 'VOLUME_UP'});
      break
    case ('volume_down'):
      store.dispatch({type: 'VOLUME_DOWN'});
      break
  }
});

const socket = io()

socket.on('connect', function () {
  console.log('connected')
})

socket.on('disconnect', function() {
  console.log('disconnected')
})

socket.on('IR', function (data) {
  console.log(event);
  store.dispatch({type: data});
});