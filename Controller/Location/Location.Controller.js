// const joi = require('joi');
const { validateRequest } = require('../../Middlewares/ValidateRequest');
const { LocationGroupService, LocationService } = require('../../Services');

// const locationDataSchema = (req, res, next) => {
// 	const workingHoursSchema = joi.object({
// 		open: joi.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/),
// 		close: joi.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/),
// 	});
// 	const schema = joi.object({
// 		coord: joi
// 			.object({
// 				type: joi.string().valid('Point'),
// 				coordinates: joi.array().required(),
// 			})
// 			.required(),
// 		phoneNumber: joi.array().items(joi.string()),
// 		email: joi.string().email().required(),
// 		webSite: joi.string(),
// 		address: joi.object(),
// 		workingHours: joi.object({
// 			MONDAY: workingHoursSchema,
// 			TUESDAY: workingHoursSchema,
// 			WEDNESDAY: workingHoursSchema,
// 			THURSDAY: workingHoursSchema,
// 			FRIDAY: workingHoursSchema,
// 			SATURDAY: workingHoursSchema,
// 			SUNDAY: workingHoursSchema,
// 		}),
// 	});
//
// 	validateRequest(req, next, schema);
// };
const create = (req, res, next) => {
	const { locationGroupID } = req.params;
	const locationData = req.body;

	LocationService.create(locationData, locationGroupID)
		.then((result) => {
			res.json(result);
		})
		.catch(next);
};

const remove = (req, res, next) => {
	const { locationGroupID, locationID } = req.params;

	LocationService.remove(locationGroupID, locationID)
		.then(() => {
			res.json('Deleted');
		})
		.catch(next);
};
const patch = (req, res, next) => {
	const { locationID } = req.params;
	const patchData = req.body;

	LocationService.patch(locationID, patchData)
		.then((result) => {
			res.json(result);
		})
		.catch(next);
};
const list = async (req, res, next) => {
	const { locationGroupID } = req.params;

	LocationService.list(locationGroupID)
		.then((result) => {
			res.json(result);
		})
		.catch(next);
};

const get = (req, res, next) => {
	const { locationID } = req.params;

	LocationService.get(locationID)
		.then((result) => {
			res.json(result);
		})
		.catch(next);
};
const batchCreate = (req, res, next) => {
	const { locationGroupID } = req.params;
	const locationData = req.body;

	LocationService.batchCreate(locationGroupID, locationData)
		.then((result) => {
			res.json(result);
		})
		.catch(next);
};
const batchRemove = (req, res, next) => {
	const { locationGroupID } = req.params;
	const locationID = req.body;
	LocationService.batchRemove(locationGroupID, locationID);
};
const batchGet = (req, res, next) => {
	const { locationGroupID } = req.params;
	const locationID = req.body;
	LocationService.batchGet(locationGroupID, locationID)
		.then((result) => {
			res.json(result);
		})
		.catch(next);
};
const transfer = (req, res, next) => {
	const { locationID, fromGroupID, toGroupID } = req.params;
	LocationService.transfer(locationID, fromGroupID, toGroupID)
		.then(() => {
			res.status(200).send('OK');
		})
		.catch(next);
};

const findAroundCoordinate = (req, res, next) => {};

module.exports = {
	create,
	remove,
	patch,
	list,
	findAroundCoordinate,
	get,
	batchCreate,
	batchRemove,
	batchGet,
	transfer,
};
