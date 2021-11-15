const { GMBLocationsController } = require('../Controller');

const router = require('express').Router();

// router.get('/locations/match', GMBLocationsController.matchLocations);

router.get('/location/match', GMBLocationsController.matchLocation);

module.exports = router;
