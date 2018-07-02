const express = require('express')
const power = require('../utils/power')
const router = express.Router()

const getVolumeStatus = () => 0

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    volume: getVolumeStatus(),
    power: power.getStatus()
  })
})

module.exports = router
