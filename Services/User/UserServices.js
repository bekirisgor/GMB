const { UserModel, RefreshTokenModel } = require('../../Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { isValidObjectId } = require('mongoose');
const _ = require('lodash');
const getByEmail = async (email) => {
	UserModel.findOne({ email }).exec((error, data) => {
		if (data) {
			return data;
		}

		if (error) {
			throw error;
		}
	});
};

const register = async (data) => {
	if (data.password !== data.passwordConfirmation)
		throw { message: 'Passwords doesnt match', statusCode: 422 };
	else {
		const hashedPassword = await bcrypt.hash(data.password, 12);
		data.password = hashedPassword;
		delete data.passwordConfirmation;

		return await UserModel(data)
			.save()
			.then((user) => {
				return _.pick(user, [
					'firstName',
					'lastName',
					'role',
					'isVerified',
					'email',
				]);
			})
			.catch((error) => {
				throw error;
			});
	}
};

const authenticate = async ({ email, password, ipAddress, userAgent }) => {
	const user = await UserModel.findOne({ email });

	if (!user) {
		throw 'User has not found.';
	} else if (!(await bcrypt.compare(password, user.password))) {
		throw 'Passwort is incorrect.';
	}

	const oldRefreshToken = await getRefreshToken(user.id, ipAddress, userAgent);

	if (oldRefreshToken && oldRefreshToken?.isActive) {
		var refreshToken = oldRefreshToken;
	} else {
		refreshToken = await generateRefreshToken(user, ipAddress, userAgent);
	}

	var accessToken = generateAccessToken(user);

	const token = {
		access_token: accessToken,
		expiresIn: 60 * 60,
	};
	return {
		user: { ...getUserBasicData(user), token },

		refresh_token: refreshToken.token,
	};
};

const getRefreshTokenById = async (userId) => {
	return await RefreshTokenModel.findOne({
		user: userId,
	})
		.then((refreshToken) => {
			return refreshToken;
		})
		.catch((error) => {
			throw error;
		});
};
const getRefreshToken = async (userId, ipAddress, userAgent) => {
	const { browser, os, platform } = userAgent;
	return await RefreshTokenModel.findOne({
		user: userId,
		browser,
		os,
		platform,
	})
		.then((refreshToken) => {
			return refreshToken;
		})
		.catch((error) => {
			throw error;
		});
};
const refreshTheAccessToken = async ({ user, refreshToken }) => {
	const refresh_token = await RefreshTokenModel.find({
		token: refreshToken,
	}).catch((error) => {
		throw error;
	});
	if (refresh_token && refresh_token.isActive) {
		return { accessToken: generateAccessToken(user) };
	}
};
const refreshTheRefreshToken = async ({ token, ipAddress, userAgent }) => {
	const refreshToken = await RefreshTokenModel.findOne(
		token,
		ipAddress,
		...userAgent,
	);
	const { user } = refreshToken;

	// replace old refresh token with a new one and save
	const newRefreshToken = generateRefreshToken(user, ipAddress, userAgent);
	refreshToken.revoked = Date.now();
	refreshToken.revokedByIp = ipAddress;
	refreshToken.replacedByToken = newRefreshToken.token;
	await refreshToken.save();

	// generate new jwt
	const jwtToken = generateAccessToken(user);

	// return basic details and tokens
	return {
		user: getUserBasicData(user),
		access_token: jwtToken,
		refresh_token: newRefreshToken.token,
	};
};

const revokeToken = async ({
	refreshToken,
	ipAddress,
	userID,
	accessToken,
}) => {
	await RefreshTokenModel.findOneAndUpdate(
		{ token: refreshToken, user: userID, revoked: null },
		{
			revoked: Date.now(),
			expires: Date.now(),
			revokedByIp: ipAddress,
			revokedAccessToken: accessToken,
		},
	)
		.then((refreshToken) => {
			if (!refreshToken) throw new Error('Token cannot found');
			return refreshToken;
		})
		.catch((error) => {
			throw error;
		});
};

const getUserbyId = async (id) => {
	if (!isValidObjectId(id)) throw 'User has not found';
	const user = await UserModel.findById(id, '-password -__v')
		.exec()
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw error;
		});

	return user;
};

const randomTokenString = () => {
	return crypto.randomBytes(40).toString('hex');
};

const generateAccessToken = (user) => {
	return jwt.sign({ sub: user.email, id: user._id }, process.env.JWT_SECRET, {
		expiresIn: '10d',
	});
};

const generateRefreshToken = (user, ipAddress, userAgent) => {
	return RefreshTokenModel({
		user: user.id,
		browser: userAgent.browser,
		os: userAgent.os,
		platform: userAgent.platform,
		token: randomTokenString(),
		expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
		createdByIp: ipAddress,
	})
		.save()
		.then((token) => {
			return token;
		});

	// return new RefreshTokenModel({
	// 	user: user.id,
	// 	token: randomTokenString(),
	// 	expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
	// 	createdByIp: ipAddress,
	// });
};

const getUserBasicData = (user) => {
	const { id, firstName, lastName, username, role } = user;
	return { id, firstName, lastName, username, role };
};

module.exports = {
	getByEmail,
	register,
	refreshTheRefreshToken,
	refreshTheAccessToken,
	getRefreshToken,
	getRefreshTokenById,
	revokeToken,
	authenticate,
	getUserbyId,
	getUserBasicData,
};
