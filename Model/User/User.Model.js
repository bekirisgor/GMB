const { Schema } = require('mongoose');
const { default: validator } = require('validator');

const UserSchema = new Schema(
	{
		firstName: {
			type: String,
			lowercase: true,
			required: [true, 'First name is required'],
		},
		lastName: {
			type: String,
			lowercase: true,
			required: [true, 'Last name is required'],
		},
		email: {
			type: String,
			lowercase: true,
			unique: [true, 'Email address has already valid '],
			required: [true, 'E-mail address is required'],
			validate: [validator.isEmail, 'Enter an email address'],
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		phoneNumber: {
			type: String,
			required: true,
			validate: [validator.isMobilePhone, 'Must be a phone number'],
		},
		role: {
			type: String,
			enum: ['Admin', 'Owner', 'Manager', 'User'],
			default: 'User',
		},
		locationGroupIds: [
			{
				type: Schema.Types.ObjectId,
				ref: 'LocationGroup',
				unique: true,
			},
		],
	},
	{ timestamps: true },
);

module.exports = UserSchema;
