var express = require('express')
var router = express.Router()

const getVolumeStatus = () => 0
const getPowerStatus = () => false

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    volume: getVolumeStatus(),
    power: getPowerStatus()
  })
})

module.exports = router
