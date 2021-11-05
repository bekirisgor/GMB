const { GoogleController } = require('../Controller');
const { authorize } = require('../Middlewares/Authorize');

const router = require('express').Router();

router.post('/codetotoken', authorize(), GoogleController.getToken);
// router.post('/refreshToken', GoogleController.refreshToken);

router.get('/refreshtoken', authorize(), GoogleController.refreshToken);
router.post('/token', GoogleController.tokenforInsight);

module.exports = router;
