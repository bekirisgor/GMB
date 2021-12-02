const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const errorHandler = require('../Middlewares/ErrorHandle');
const cookieParser = require('cookie-parser');
const useragent = require('express-useragent');

const expressInitialize = (app) => {
	app.use(cookieParser());
	app.use(cors({ origin: 'http://35.194.11.120:3000', credentials: true }));
	// app.use(
	// 	cors({
	// 		origin: (origin, callback) => callback(null, true),
	// 		credentials: true,
	// 	}),
	// );

	app.use(useragent.express());
	app.use(express.json({ limit: '50mb' }));
	app.use(express.urlencoded({ extended: true }));
	app.use(logger('dev'));

	app.use(function (req, res, next) {
		res.setTimeout(50000, function () {
			console.log('Request has timed out.');
			res.sendStatus(408);
		});

		next();
	});

	app.listen(process.env.PORT || 5000, () =>
		console.log(`Server Running on Port : ${process.env.PORT}`),
	);
};

module.exports = expressInitialize;
