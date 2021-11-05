const { GoogleTokenService } = require('../Services');
const { refreshToken } = require('../Services/Google/Auth');

const googleTokenMiddleware = async (req, res, next) => {
	const userId = req.user._id;
	const token = await GoogleTokenService.findTokenById(userId);
	// console.log({ token });

	if (token && token.access_token && token.expiry_date > new Date().getTime())
		req.token = token;
	else {
		refreshToken(token.refresh_token, userId)
			.then(() => {
				req.token = token;
			})
			.catch((error) => {
				res.status(500).send(error);
			});
	}

	next();
};

module.exports = { googleTokenMiddleware };
