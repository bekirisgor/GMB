const { Schema } = require('mongoose');

const googleModelSchema = new Schema({
	user: {
		unique: true,
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	refresh_token: String,
	access_token: String,
	expiry_date: String,
	email: String,
});

googleModelSchema.set('toJSON', {
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret._id;
		delete ret.user;
	},
});

module.exports = googleModelSchema;
