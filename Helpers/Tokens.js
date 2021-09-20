const jwt = require('jsonwebtoken');

const jwtDecode = (token) => {
	const decodedToken = jwt.decode(token, { json: true });

	return decodedToken;
};

const accessTokenParser = (req) => {
	if ('authorization' in req.headers) {
		return req.headers.authorization;
	} else return null;
};

module.exports = { jwtDecode, accessTokenParser };
