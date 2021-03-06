const jwtExpress = require('express-jwt');
const { jwtDecode } = require('../Helpers/Tokens');
const { RefreshTokenModel } = require('../Model');
const { UserService } = require('../Services');
const {
	getRefreshTokenById,
	getRefreshToken,
} = require('../Services/User/UserServices');

// Parse Access token form Headers as Authorization
const accessTokenParser = (req) => {
	if ('authorization' in req.headers) {
		return req.headers.authorization;
	} else return null;
};
const authorize = () => {
	return [
		jwtExpress({
			secret: process.env.JWT_SECRET,
			algorithms: ['HS256'],
			getToken: accessTokenParser,
		}),
		async (req, res, next) => {
			// Check if User valid

			const access_token = accessTokenParser(req);

			req.access_token = access_token;
			const decodedToken = jwtDecode(access_token);

			const userID = decodedToken.id;

			const refreshTokenObj = await getRefreshToken(
				userID,
				req.ip,
				req.useragent,
			);

			// const refreshTokenObj = await getRefreshTokenById(userID);

			const user = await UserService.getUserbyId(userID).catch(next);

			if (user && refreshTokenObj?.isActive) {
				req.user = user;
			} else {
				return res.status(401).json({ message: 'Unauthorized' });
			}

			// const userId = decodedToken.id;
			// const user = await UserService.getUserbyId(userId);

			// if (!user) return res.status(401).json({ message: 'Unauthorized' });
			// console.log(user);
			// const refreshToken = await UserService.getRefreshToken({});
			// req.user.ownsToken = (token) =>
			// 	!!refreshToken.find((x) => x.token === token);
			next();
		},
	];
};

module.exports = { authorize };
