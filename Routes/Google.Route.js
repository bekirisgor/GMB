const { GoogleController } = require('../Controller');

const router = require('express').Router();

router.post('/codetotoken', GoogleController.getToken);
// router.post('/refreshToken', GoogleController.refreshToken);

router.get('/refreshtoken', GoogleController.refreshToken);
module.exports = router;
