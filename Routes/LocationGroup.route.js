const { LocationGroupController } = require('../Controller');

const router = require('express').Router();

router.post('/create', LocationGroupController.createLocationGroup);
router.patch('/', LocationGroupController.patchLocationGroup);
// router.patch('/', (req, res) => {
// 	console.log(req.body);
// });
router.get('/get', LocationGroupController.getLocationGroup);
router.get('/list', LocationGroupController.listLocationGroup);
router.delete('/', LocationGroupController.deleteLocationGroup);

module.exports = router;
