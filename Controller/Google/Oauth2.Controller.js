const { default: axios } = require('axios');
const querystring = require('querystring');
const keys = require('../../Credentials/googleKeys.json');

const getToken = async (code) => {
	const opts = {
		code,
		client_id: keys.web.client_id,
		client_secret: keys.web.client_secret,
		// eslint-disable-next-line no-undef
		redirect_uri: process.env.CLIENT_URI,
		grant_type: 'authorization_code',
		code_verifier: '',
	};

	return axios
		.request({
			method: 'POST',
			url: 'https://oauth2.googleapis.com/token',
			data: querystring.stringify(opts),
			responseType: 'json',
		})
		.then((res) => {
			const token = res.data;
			console.log(token);

			if (res.data && res.data.expires_in) {
				token.expiry_date = new Date().getTime() + res.data.expires_in * 1000;
				delete token.expires_in;
				return token;
			}
		})
		.catch((error) => {
			// Check error types from google docs. then handle that errors
			console.log(error);
			throw error;
		});
};
