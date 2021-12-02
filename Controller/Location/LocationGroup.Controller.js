const { LocationGroupService } = require('../../Services');

const createLocationGroup = async (req, res, next) => {
	const locationData = req.body;
	const userID = req.user.id;
	LocationGroupService.create(locationData, userID)
		.then((data) => {
			res.json(data);
		})
		.catch(next);
};
const patchLocationGroup = async (req, res, next) => {
	const updateData = req.body;
	const { groupID } = req.query || updateData._id;

	LocationGroupService.patch(groupID, updateData)
		.then((data) => {
			res.json(data);
		})
		.catch(next);
};
const deleteLocationGroup = (req, res, next) => {
	const groupId = req.body.groupID;
	const userId = req.user.id;

	LocationGroupService.remove(groupId, userId)
		.then((data) => {
			res.json(data);
		})
		.catch(next);
};
const listLocationGroup = (req, res, next) => {
	const userID = req.user.id;
	console.log(req.user);
	LocationGroupService.listAll(userID)
		.then((data) => {
			res.json(data);
		})
		.catch(next);
};
const getLocationGroup = (req, res, next) => {
	const { groupID } = req.query;
	LocationGroupService.get(groupID)
		.then((data) => {
			res.json(data);
		})
		.catch(next);
};

module.exports = {
	createLocationGroup,
	patchLocationGroup,
	deleteLocationGroup,
	listLocationGroup,
	getLocationGroup,
};
