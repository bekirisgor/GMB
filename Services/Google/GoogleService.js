const { GoogleModel } = require('../../Model');

const findTokenById = (userId) => {
	return GoogleModel.findOne(
		{
			user: userId,
		},
		(err, doc) => {
			if (err) throw err;

			return doc;
		},
	);
};

const updateGoogleTokenbyId = (userId, token) => {
	return GoogleModel.findOneAndUpdate(
		{
			user: userId,
		},
		{
			$set: {
				access_token: token.access_token,
				expiry_date: token.expiry_date,
			},
		},
		(err, doc) => {
			if (err) throw err;
			if (doc) return doc;
		},
	);
};
const getTokenbyTokenId = (tokenId) => {
	return GoogleModel.findById(tokenId, (err, doc) => {
		if (err) throw err;
		return doc;
	});
};
const deleteGoogleTokenbyId = (userId) => {
	return GoogleModel.findOneAndDelete(
		{
			user: userId,
		},
		(err) => {
			if (err) {
				throw err;
			}
			return null;
		},
	);
};

module.exports = {
	findTokenById,
	updateGoogleTokenbyId,
	deleteGoogleTokenbyId,
	getTokenbyTokenId,
};
