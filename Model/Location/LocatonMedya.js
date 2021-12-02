const { Schema } = require('mongoose');

const locationMedyaSchema = new Schema(
	{
		src: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		medyaType: {
			type: String,
			enum: ['PHOTO', 'VIDEO'],
			required: true,
		},
	},
	{ timestamps: true },
);

module.exports = locationMedyaSchema;
