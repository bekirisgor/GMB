const { default: axios } = require('axios');
const qs = require('qs');
const JWT = require('jsonwebtoken');
const keys = require('../../Credentials/googleKeys.json');
const { GoogleModel, UserModel } = require('../../Model');
const Google = require('../../Services/Google/Auth');
const User = require('../../Services/User/UserServices');

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
	console.log(googleToken);
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
			return doc.refresh_token;
		})
		.catch((error) => {
			res.status(401).json({ message: 'User has no refresh token' });
		});
	const token = await Google.refreshToken(google);
	GoogleModel.updateOne(
		{ user: user._id },
		{ access_token: token.access_token },
	);
	res.status(200).json(token);
};

module.exports = { getToken, refreshToken };
