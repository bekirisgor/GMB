const { UserController } = require('../Controller');
const {
	getRefreshTokenCookie,
	setRefreshTokenCookie,
} = require('../Helpers/requests');
const { authorize } = require('../Middlewares/Authorize');
const { userParser } = require('../Middlewares/UserParser');

const router = require('express').Router();

router.post(
	'/register',

	UserController.register,
);
router.post(
	'/login',

	UserController.authenticate,
);

router.post('/refresh-token', userParser, UserController.refreshTheAccessToken);
router.get('/setcookie', (req, res) => {
	setRefreshTokenCookie(res, 'test');
	res.cookie('token', 'ttest', {
		sameSite: 'lax',
		httpOnly: true,
	});
	res.send('done');
});
router.get('/getcookie', (req, res) => {
	console.log(req.cookies);
	// console.log(getRefreshTokenCookie(req));

	res.send('a');
});
router.post('/logout', userParser, UserController.logout);
router.post('/revoke-token', authorize(), UserController.revokeToken);
router.get('/me', authorize(), UserController.getUserbyId);

router.get('/:id/refresh-token', authorize(), UserController.getRefreshToken);

module.exports = router;
