const { default: axios } = require('axios');
const keys = require('../../Credentials/googleKeys.json');

const refreshToken = async (refreshToken) => {
	return await axios
		.request({
			method: 'POST',
			url: 'https://oauth2.googleapis.com/token',
			data: {
				refresh_token: refreshToken,
				client_id: keys.web.client_id,
				client_secret: keys.web.client_secret,
				grant_type: 'refresh_token',
			},
		})
		.then((response) => {
			const { data } = response;
			const token = data;
			if (data && data.expires_in) {
				token.expiry_date = new Date().getTime() + data.expires_in * 1000;
				delete token.expires_in;
				console.log({ token });
				return token;
			}
		})
		.catch((error) => {
			throw error;
		});
};
const changeCodetoToken = async (code) => {
	return await axios
		.request({
			method: 'POST',
			data: {
				client_id: keys.web.client_id,
				code,
				client_secret: keys.web.client_secret,
				redirect_uri: process.env.CLIENT_URI,
				grant_type: 'authorization_code',
				code_verifier: '',
			},
			url: 'https://oauth2.googleapis.com/token',
		})
		.then((res) => {
			const token = res.data;
			console.log({ token });
			if (res.data && res.data.expires_in) {
				token.expiry_date = new Date().getTime() + res.data.expires_in * 1000;
				delete token.expires_in;
			}

			return token;
		})
		.catch((error) => {
			throw error;
		});
};

module.exports = { refreshToken, changeCodetoToken };
