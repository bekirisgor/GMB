const { LocationConroller } = require('../Controller');

const router = require('express').Router();

router.get('/get/:locationID', LocationConroller.get);
router.get('/list/:locationGroupID', LocationConroller.list);
router.patch('/:locationID', LocationConroller.patch);
router.post('/create/:locationGroupID', LocationConroller.create);
// router.post('/create', (req, res) => {
// 	console.log(req.params);
// });
router.post('/batchCreate/:locationGroupID', LocationConroller.batchCreate);
router.post('/transfer/:locationID/:from/:to', LocationConroller.transfer);
router.post('/bathGet/:locationGroupID', LocationConroller.batchGet);
router.post('/findAround/:locationID', LocationConroller.findAroundCoordinate);
router.delete('/delete/:locationGroupID/:locationID', LocationConroller.remove);

module.exports = router;
