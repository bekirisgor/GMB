const User = require('./User.Route');
const LocationGroup = require('./LocationGroup.route');
const Location = require('./Location.Route');
const Yandex = require('./Yandex.Route');
const Google = require('./Google.Route');
const GMB = require('./GMB.Route');
const { authorize } = require('../Middlewares/Authorize');
const { googleTokenMiddleware } = require('../Middlewares/GoogleToken');

module.exports = (app) => {
	app.use('/api/user', User);
	app.use('/api/google', Google);
	app.use('/api/locationGroup', authorize(), LocationGroup);
	app.use('/api/location', authorize(), Location);
	app.use('/api/yandex', Yandex);
	app.use('/api/gmb', authorize(), googleTokenMiddleware, GMB);
};
