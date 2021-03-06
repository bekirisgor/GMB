const setRefreshTokenCookie = (res, token, expiresIn) => {
	return res.cookie('refresh_token', token, {
		httpOnly: true,

		expires: expiresIn || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
	});
};

const getRefreshTokenCookie = (req) => {
	if ('refresh_token' in req.cookies) return req.cookies.refresh_token;
	else throw Error('Unauthorized');
};

const clearRefreshTokenCookie = (res) => {
	if ('refresh_token' in res.cookies) return res.clearCookie('refresh_token');
};

module.exports = {
	setRefreshTokenCookie,
	getRefreshTokenCookie,
	clearRefreshTokenCookie,
};
