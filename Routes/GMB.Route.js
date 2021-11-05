const { GMBLocationsController } = require('../Controller');

const router = require('express').Router();

router.get('/locations/match', GMBLocationsController.matchLocations);

module.exports = router;
