const { default: axios } = require('axios');

const getDetailsFromPlaceid = async (place_id) => {
	return axios
		.request({
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/place/details/json',
			params: {
				place_id,
				key: process.env.MAPKEY,
				field: 'geometry',
			},
		})
		.then((res) => {
			return res.data.result.geometry.location;
		})
		.catch((error) => {
			throw error;
		});
};

module.exports = { getDetailsFromPlaceid };
