const { default: axios } = require('axios');
const qs = require('qs');
const JWT = require('jsonwebtoken');
const keys = require('../../Credentials/googleKeys.json');
const { GoogleModel, UserModel } = require('../../Model');
const Google = require('../../Services/Google/Auth');
const User = require('../../Services/User/UserServices');
const { getTokenbyTokenId } = require('../../Services/Google/GoogleService');

// const { getRefreshToken } = require('../User/User.Controller');

const getToken = async (req, res, next) => {
	const { user } = req;
	const { code } = req.body;
	const googleToken = await Google.changeCodetoToken(code)
		.then((token) => {
			return token;
		})
		.catch((error) => res.status(400).json(error));
	const { refresh_token, access_token, expiry_date } = googleToken;

	const { email } = JWT.decode(googleToken.id_token);
	GoogleModel.updateOne(
		{ user: user._id },
		{ user: user.id, refresh_token, access_token, expiry_date, email },
		{ upsert: true },
		(err, doc) => {
			if (err) res.status(401).json(err);
			else return doc;
		},
	);

	delete googleToken.refresh_token;

	return res.status(201).json(googleToken);
};

const refreshToken = async (req, res, next) => {
	const user = req.user;

	const google = await GoogleModel.findOne({ user: user._id })
		.then((doc) => {
			if (!doc)
				return res.status(401).json({ message: 'User has no refresh token' });

			return doc;
		})
		.catch((error) => {
			res.status(401).json({ message: 'User has no refresh token' });
		});
	if (google.access_token && new Date().getTime() < google.expiry_date) {
		return res.status(200).json(google);
	}
	const token = await Google.refreshToken(google.refresh_token, user._id);

	return res.status(201).json(token);
};

const tokenforInsight = async (req, res, next) => {
	const tokenId = req.body.tokenId;
	const refreshToken = (await getTokenbyTokenId(tokenId)).refresh_token;
	console.log({ tokenId });
	if (refreshToken) {
		axios
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
					res.json(token);
				}
			})
			.catch((error) => {
				throw error;
			});
	}
};

module.exports = { getToken, refreshToken, tokenforInsight };
