const express = require('express')
const power = require('../utils/power')
const router = express.Router()

const volume = {
  getStatus () { return 0 },
  up () { console.log('Up (routed)') },
  down () { console.log('Down (routed)') }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    volume: volume.getStatus(),
    power: power.getStatus()
  })
})

router.get('/power_toggle', function (req, res, next) {
  power.toggle()
})

router.get('/volume_up', function (req, res, next) {
  volume.up()
})

router.get('/volume_down', function (req, res, next) {
  volume.down()
})
module.exports = router
