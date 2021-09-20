const { Schema } = require('mongoose');

const refreshTokenSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },

		browser: String,
		os: String,
		platform: String,
		token: String,
		expires: Date,
		revokeToken: String,
		created: {
			type: Date,
			default: Date.now,
			// expires: 30,
		},
		createdIpAddress: {
			type: String,
		},
		revoked: { type: Date },
		revokedAccessToken: { type: String, expires: 3600 },
		revokedByIp: String,
		replacedByToken: String,
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
);

refreshTokenSchema.virtual('isExpired').get(function () {
	return Date.now() >= this.expires;
});

refreshTokenSchema.virtual('isActive').get(function () {
	return !this.revoked && !this.isExpired;
});

refreshTokenSchema.set('toJSON', {
	versionKey: false,
	transform: function (doc, ret) {
		// remove these props when object is serialized
		delete ret._id;
		delete ret.id;
		delete ret.user;
	},
});

module.exports = refreshTokenSchema;

/* const { Schema } = require('mongoose');

const refreshTokenSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		
		token: String,
		expires: Date,
		created: {
			type: Date,
			default: Date.now,
			// expires: 30,
		},
		createdIpAddress: {
			type: String,
		},
		
		revokedByIp: String,
		replacedByToken: String,
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	},
);

refreshTokenSchema.virtual('isExpired').get(() => {
	return Date.now() >= this.expires;
});

refreshTokenSchema.virtual('isActive').get(() => {
	return !this.revoked && !this.isExpired;
});

refreshTokenSchema.set('toJSON', {
	versionKey: false,
	transform: function (doc, ret) {
		// remove these props when object is serialized
		delete ret._id;
		delete ret.id;
		delete ret.user;
	},
});

module.exports = refreshTokenSchema;
 */
