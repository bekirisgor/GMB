const {
	getDetailsFromPlaceid,
} = require('../../../Services/Google/Maps/places');
const { calcDistance } = require('../../../Helpers/LocationsHelpers');
const {
	GoogleLocationsService,
	LocationService,
} = require('../../../Services');

const matchLocations = async (req, res, next) => {
	if (
		!req.query.locationGroupId ||
		!req.query.googleLocationGroupId ||
		!req.token.access_token
	)
		res.status(400).json({ message: 'Missing query' });

	const { locationGroupId, googleLocationGroupId } = req.query;

	const dbLocations = await LocationService.list(locationGroupId).catch(next);

	const googleLocations = await GoogleLocationsService.listGoogleLocations(
		googleLocationGroupId,
		req.token.access_token,
	);
	// .then(async (res) => {
	// 	console.log({ res });
	// 	return await Promise.all(
	// 		res.slice(0, 10).map(async (gEl) => {
	// 			if (!gEl.latlng) {
	// 				const details = await getDetailsFromPlaceid(gEl.metadata.placeId);
	// 				console.log({ details });
	// 				return {
	// 					...gEl,
	// 					geometry: details.result.geometry.location,
	// 				};
	// 			}
	// 			return gEl;
	// 		}),
	// 	);
	// })
	// .catch(next);

	const google = await Promise.all(
		googleLocations.map(async (el) => {
			if (!el.latlng) {
				const details = await getDetailsFromPlaceid(el.metadata.placeId);
				console.log({ ...el, geometry: { ...details } });
				return { ...el, geometry: details };
			}
			return el;
		}),
	);

	dbLocations.map((dEl) => {
		let distance = 1;
		const matched = [];
		const lat1 = dEl.coord.coordinates[1];
		const long1 = dEl.coord.coordinates[0];

		google.map((gEl) => {
			// console.log({ gEl });
			let lat2, long2;
			if (gEl.latlng) {
				lat2 = gEl.latlng.latitude;
				long2 = gEl.latlng.longitude;
			} else if (gEl.geometry) {
				lat2 = gEl.geometry.lat;
				long2 = gEl.geometry.lng;
			} else {
				lat2 = 0;
				long2 = 0;
			}
			if (lat2 && long2) {
				const dist = calcDistance(lat1, long1, lat2, long2);

				if (dist < distance) {
					matched.push({ name: gEl.name, distance: dist });
				}
			}
		});

		matched.sort((a, b) => a.distance - b.distance);
		dEl.matched = matched;
		return dEl;
	});
	res.json({ locations: dbLocations, googleLocations: googleLocations });
	// return { locations: dbLocations, googleLocations: googleLocations };
};

module.exports = { matchLocations };
