const { default: axios } = require('axios');

const listGoogleLocations = async (locationGroupId, token, mask) => {
	const locations = [];

	let pageToken = '';

	do {
		// eslint-disable-next-line no-await-in-loop
		await axios
			.request({
				method: 'GET',
				url: `https://mybusinessbusinessinformation.googleapis.com/v1/${locationGroupId}/locations`,
				headers: { Authorization: `Bearer ${token}` },
				params: {
					pageSize: 100,
					pageToken,
					readMask:
						mask || 'name,title,phoneNumbers,storefrontAddress,latlng,metadata',
				},
			})
			.then((res) => {
				locations.push(...res.data.locations);
				pageToken = res.data.nextPageToken;
			})
			.catch((error) => {
				throw error;
			});
	} while (pageToken);

	return locations;
};

module.exports = { listGoogleLocations };
