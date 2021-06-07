const { Schema } = require('mongoose');

const LocationGroupSchema = new Schema(
	{
		// _id: Number,
		name: {
			type: String,
			unique: true,
		},
		phoneNumber: String,
		email: {
			type: String,
		},
		webSite: String,

		workingHours: {
			MONDAY: {
				open: String,
				close: String,
			},
			TUESDAY: {
				open: String,
				close: String,
			},
			WEDNESDAY: {
				open: String,
				close: String,
			},
			THURSDAY: {
				open: String,
				close: String,
			},
			FRIDAY: {
				open: String,
				close: String,
			},
			SATURDAY: {
				open: String,
				close: String,
			},
			SUNDAY: {
				open: String,
				close: String,
			},
		},

		locations: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
	},
	{ timestamps: true },
);

module.exports = LocationGroupSchema;
