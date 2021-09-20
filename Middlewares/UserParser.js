const { getRefreshTokenCookie } = require('../Helpers/requests');
const { accessTokenParser, jwtDecode } = require('../Helpers/Tokens');
const { UserService } = require('../Services');
const { getRefreshToken } = require('../Services/User/UserServices');

const userParser = async (req, res, next) => {
	const access_token = accessTokenParser(req);

	req.access_token = access_token;
	req.refresh_token = getRefreshTokenCookie(req);

	const decodedToken = jwtDecode(access_token);
	const userID = decodedToken.id;
	const refreshToken = await getRefreshToken(userID, req.ip, req.useragent);
	const user = await UserService.getUserbyId(userID).catch(next);
	console.log({ user }, { refreshToken });
	if (user && refreshToken?.isActive) {
		req.user = user;
	} else {
		return res.status(401).json({ message: 'Unauthorized' });
	}

	next();
};

module.exports = { userParser };
