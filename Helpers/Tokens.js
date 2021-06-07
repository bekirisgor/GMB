const jwt = require('jsonwebtoken');

const jwtDecode = (token) => {
	const decodedToken = jwt.decode(token, { json: true });

	return decodedToken;
};

module.exports = { jwtDecode };
