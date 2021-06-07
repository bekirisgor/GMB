const User = require('./User.Route');
const LocationGroup = require('./LocationGroup.route');
const Location = require('./Location.Route');
const { authorize } = require('../Middlewares/Authorize');

module.exports = (app) => {
	app.use('/api/user', User);
	app.use('/api/locationGroup', authorize(), LocationGroup);
	app.use('/api/location', authorize(), Location);
};
