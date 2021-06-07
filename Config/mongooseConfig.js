const mongoose = require('mongoose');

const mongooseInitialize = () => {
	mongoose
		.connect(process.env.MONGO_URI, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		})
		.then(() => {
			console.log(`Mongodb Connected on ${process.env.MONGO_URI}`);
		})
		.catch((error) => console.log(error));
};

module.exports = mongooseInitialize;
