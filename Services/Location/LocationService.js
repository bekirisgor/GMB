const { LocationModel, LocationGroupModel } = require('../../Model');

const create = async (locationData, locationGroupID) => {
	return await LocationModel.create({
		...locationData,
		parentId: locationGroupID,
	})
		.then((doc) => {
			LocationGroupModel.findByIdAndUpdate(
				locationGroupID,
				{
					$push: { locations: doc._id },
				},
				{ timestamps: false },
			)
				.lean()
				.exec((error) => {
					if (error) throw error;
				});
			return doc;
		})
		.catch((error) => {
			throw error;
		});
};
const batchCreate = async (locationGroupID, locationData = []) => {
	const batchData = locationData.map((obj) => ({
		...obj,
		parentId: locationGroupID,
	}));
	return await LocationModel.insertMany(batchData)
		.lean()
		.then((doc) => {
			return doc;
		})
		.catch((error) => {
			throw error;
		});
};

const remove = async (locationGroupID, locationID) => {
	return LocationModel.findByIdAndDelete(locationID)
		.lean()
		.exec(async (err) => {
			if (err) {
				throw err;
			}
			await LocationGroupModel.findByIdAndUpdate(
				locationGroupID,
				{ $pull: { locations: { $in: [locationID] } } },
				{ timestamps: false },
			).catch((error) => {
				throw error;
			});

			return 'ok';
		});

	// return await Promise.all([
	// 	await LocationModel.findByIdAndDelete(locationID),
	// 	await LocationGroupModel.findByIdAndUpdate(
	// 		locationGroupID,
	// 		{
	// 			$pull: { id: locationID },
	// 		},
	// 		{ timestamps: false },
	// 	),
	// ]).then((doc) => {
	// 	return doc;
	// });
};

const batchRemove = async (locationGroupID, locationID = []) => {
	return LocationModel.deleteMany(locationID)
		.lean()
		.exec((err, doc) => {
			if (err) {
				throw err;
			}
			LocationGroupModel.findByIdAndUpdate(locationGroupID, {
				$pull: { id: { $in: locationID } },
			})
				.lean()

				.in(locationGroupID)
				.exec((err) => {
					if (err) {
						throw err;
					}
					return doc;
				});
		});
};

const patch = (locationID, patchData) => {
	return LocationModel.findByIdAndUpdate(
		locationID,
		{ $set: { ...patchData } },
		{
			new: true,
		},
	)
		.lean()
		.then((doc) => {
			if (!doc) throw new Error('Null');
			return doc;
		})
		.catch((error) => {
			throw error;
		});
};

const list = async (locationGroupID) => {
	return LocationGroupModel.findById(locationGroupID)
		.populate('locations')
		.select('locations')
		.lean()
		.exec()
		.then((doc) => {
			return doc.locations;
		})
		.catch((error) => {
			throw error;
		});
};

const transfer = async (locationID, fromGroupID, toGroupID) => {
	await LocationGroupModel.findByIdAndUpdate(
		fromGroupID,
		{
			$pull: { locations: { id: locationID } },
		},
		{ timestamps: false },
	)
		.lean()
		.then(
			await LocationGroupModel.findByIdAndUpdate(
				toGroupID,
				{
					$push: { locations: { id: locationID } },
				},
				{ timestamps: false },
			),
		)
		.lean()
		.then((doc) => {
			return doc;
		})
		.catch((error) => {
			throw error;
		});
};

const get = async (locationID) => {
	return await LocationModel.findById(locationID)
		.lean()
		.exec()
		.then((doc) => {
			return doc;
		})
		.catch((error) => {
			throw error;
		});
};

const batchGet = async (locationGroupID, locationIDs = []) => {
	return await LocationModel.find()
		.where('_id')
		.in(locationIDs)
		.lean()
		.exec()
		.then((doc) => {
			return doc;
		})
		.catch((error) => {
			throw error;
		});
};

const findAround = async (locationID) => {};
module.exports = {
	create,
	batchCreate,
	remove,
	batchRemove,
	patch,
	list,
	transfer,
	get,
	batchGet,
};
