const express = require('express');
const geoController = require('../controllers/getlocation.controller')

const router = express.Router();

router
  .route('/')
  .post(geoController.addGeolocation)


router
  .route('/:fleetId')
  .get(geoController.getGeolocation)
  .patch(geoController.updateGeolocation)

  module.exports = router;