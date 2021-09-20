const { model } = require('mongoose');
const LocationModel = model('Location', require('./Location/Location.Model'));
const UserModel = model('User', require('./User/User.Model'));
const RefreshTokenModel = model(
	'RefreshToken',
	require('./User/RefreshToken.Model'),
);
const LocationGroupModel = model(
	'LocationGroup',
	require('./Location/LocationGroup.Model'),
);
const GoogleModel = model('Google', require('./Google/Google.Model'));
module.exports = {
	LocationModel,
	UserModel,
	LocationGroupModel,
	RefreshTokenModel,
	GoogleModel,
};
