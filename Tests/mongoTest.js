const dummy = require('mongoose-dummy');
const { UserModel, LocationModel, LocationGroupModel } = require('../Model');

const randomObj = () => {
	console.log(dummy(UserModel));
	console.log('+++++++++++++++++++++++++++');
	console.log(dummy(LocationModel));
	console.log('+++++++++++++++++++++++++++');
	console.log(dummy(LocationGroupModel));
};

module.exports = randomObj;
