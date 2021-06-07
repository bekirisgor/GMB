const { UserController } = require('../Controller');
const { authorize } = require('../Middlewares/Authorize');

const router = require('express').Router();

router.post(
	'/register',
	UserController.registerSchema,
	UserController.register,
);
router.post(
	'/login',
	UserController.authenticateSchema,
	UserController.authenticate,
);

router.post(
	'/refresh-token',
	authorize(),
	UserController.refreshTheAccessToken,
);
router.get('/test', (req, res) => {
	res.cookie('aaa', 'bbb', { expires: 1000000 });
});
router.post('/revoke-token', authorize(), UserController.revokeToken);
router.get('/me', authorize(), UserController.getUserbyId);

router.get('/:id/refresh-token', authorize(), UserController.getRefreshToken);

module.exports = router;
