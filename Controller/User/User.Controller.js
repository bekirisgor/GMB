// const joi = require('Joi');

const { UserService } = require('../../Services');

const { validateRequest } = require('../../Middlewares/ValidateRequest');
const {
	setRefreshTokenCookie,
	getRefreshTokenCookie,
	clearRefreshTokenCookie,
} = require('../../Helpers/requests');

// Schemas
// const authenticateSchema = (req, res, next) => {
// 	const schema = joi.object({
// 		email: joi.string().required(),
// 		password: joi.string().required().min(6),
// 	});
// 	validateRequest(req, next, schema);
// };

// const revokeTokenSchema = (req, res, next) => {
// 	const schema = joi.object({
// 		token: joi.string().empty(''),
// 	});
// 	validateRequest(req, next, schema);
// };

// const registerSchema = (req, res, next) => {
// 	const schema = joi.object({
// 		firstName: joi.string().required(),
// 		lastName: joi.string().required(),
// 		email: joi.string().email().required(),
// 		password: joi.string().required().min(6).max(24),
// 		passwordConfirmation: joi.string().required().valid(joi.ref('password')),
// 		phoneNumber: joi.string().required(),
// 	});
// 	validateRequest(req, next, schema);
// };

const authenticate = async (req, res, next) => {
	const { email, password } = req.body;

	const userAgent = req.useragent;
	const ipAddress = req.ip;

	await UserService.authenticate({ email, password, ipAddress, userAgent })
		.then(({ refresh_token, ...user }) => {
			setRefreshTokenCookie(res, refresh_token);
			res.json(user);
		})
		.catch(next);
};

const refreshTheAccessToken = async (req, res, next) => {
	const refreshToken = getRefreshTokenCookie(req);
	const userAgent = req.useragent;
	const user = req.user;
	// const ipAddress = req.ip;

	UserService.refreshTheAccessToken({
		user,
		refreshToken,
		// ipAddress,
		userAgent,
	})
		.then((access_token) => res.json(access_token))
		.catch(next);
};

const logout = async (req, res, next) => {
	const { refresh_token, access_token, ip, user } = req;

	if (!refresh_token) {
		return res.status(401).json({ message: 'Unauthorized' });
	}
	await UserService.revokeToken({
		refreshToken: refresh_token,
		accessToken: access_token,
		userID: user.id,
		ipAddress: ip,
	})
		.then(() => {
			res.clearCookie('refresh_token');
			res.json({ message: 'User successfully logged out' });
		})
		.catch(next);
};

const revokeToken = async (req, res, next) => {
	const refreshToken = getRefreshTokenCookie(req);
	const accessToken = req.access_token;
	const ipAddress = req.ip;
	const userID = req.user.id;

	if (!refreshToken)
		return res.status(400).json({ message: 'Token is required' });
	//delete refresh token from cookies with time 0

	// setRefreshTokenCookie(res, refreshToken, 0);
	await UserService.revokeToken({
		refreshToken,
		ipAddress,
		userID,
		accessToken,
	})
		.then(() => res.json({ message: 'Token has revoked' }))
		.catch(next);
};

const getRefreshToken = (req, res, next) => {
	UserService.getRefreshToken(req.params.id, req.ip, req.userAgent)
		.then((tokens) => (tokens ? res.json(tokens) : res.sendStatus(404)))
		.catch(next);
};

const getUserbyId = (req, res, next) => {
	UserService.getUserbyId(req.user.id)
		.then((user) => (user ? res.json(user) : res.sendStatus(404)))
		.catch(next);
};

const register = async (req, res, next) => {
	UserService.register(req.body)

		.then((user) => {
			res.status(200).json({
				status: 'success',
				message: 'User succesfully registered',
				data: { user },
			});
		})
		.catch((error) => {
			res.status(500).json({ error });
		});
};

module.exports = {
	register,
	authenticate,
	refreshTheAccessToken,
	logout,
	revokeToken,
	getUserbyId,
	getRefreshToken,
};
