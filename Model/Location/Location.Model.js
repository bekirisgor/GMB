const { Schema } = require('mongoose');

// dont forget to add category related with google facebook yandex etc
const LocationSchema = new Schema(
	{
		name: String,
		platformId: {
			google: { type: String },
			yandex: { type: String },
			facebook: { type: String },
		},
		parentId: String,
		coord: {
			type: {
				type: String,
				enun: ['Point'],
				required: true,
				default: 'Point',
			},
			coordinates: {
				type: [Number],
				required: true,
			},
		},

		phoneNumber: Array,
		email: {
			type: String,
		},
		webSite: String,

		address: {
			regionCode: String,
			languageCode: String,
			postalCode: String,
			province: String,
			locality: String,
			sublocality: String,
			street: String,
			no: {
				exterior: String,
				inteior: String,
			},
			formattedAddress: String,
		},
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
	},
	{ timestamps: true },
);

module.exports = LocationSchema;
