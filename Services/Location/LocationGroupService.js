const { LocationGroupModel, UserModel } = require('../../Model');

const create = async (locationGroupData, userID) => {
	console.log({ locationGroupData });
	return LocationGroupModel.create(locationGroupData)

		.then((locationGroup) => {
			console.log({ locationGroup });
			UserModel.findByIdAndUpdate(
				userID,
				{
					$push: { locationGroupIds: [locationGroup._id] },
				},
				{ timestamps: false },
			).exec();
			return locationGroup;
		})

		.catch((error) => {
			throw error;
		});
};

const patch = async (updateData) => {
	return LocationGroupModel.findByIdAndUpdate(updateData._id, updateData, {
		new: true,
		$set: updateData,
	})
		.then((doc) => {
			return doc;
		})
		.catch((error) => {
			throw error;
		});
};
const remove = async (groupId, userId) => {
	console.log(groupId);
	return await Promise.all([
		await LocationGroupModel.findByIdAndDelete(groupId),
		await UserModel.findByIdAndUpdate(
			userId,
			{ $pull: { locationGroupIds: { $in: [groupId] } } },
			{ timestamps: false },
		),
	])
		.then((result) => {
			return result;
		})
		.catch((error) => {
			throw error;
		});
};
const listAll = async (userID) => {
	return await UserModel.findById(userID)
		.populate('locationGroupIds')
		.select('locationGroupIDs')

		.then((result) => {
			return result;
		})
		.catch((error) => {
			throw error;
		});
};
const get = async (groupID) => {
	return await LocationGroupModel.findById(groupID).catch((error) => {
		throw error;
	});
};

module.exports = { create, patch, remove, listAll, get };
