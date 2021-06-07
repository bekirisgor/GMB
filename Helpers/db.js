const mongoose = require('mongoose');
const isObjectIdValid = (id) => {
	return mongoose.Types.ObjectId.isValid(id);
};

module.exports = { isObjectIdValid };
