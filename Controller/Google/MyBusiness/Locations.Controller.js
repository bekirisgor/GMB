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
	) {
		return res.status(400).json({ message: 'Missing query' });
	}

	const { locationGroupId, googleLocationGroupId } = req.query;

	const dbLocations = await LocationService.list(locationGroupId).catch(next);

	const googleLocations = await GoogleLocationsService.listGoogleLocations(
		googleLocationGroupId,
		req.token.access_token,
	);

	const google = await Promise.all(
		googleLocations.map(async (el) => {
			if (!el.latlng) {
				const details = await getDetailsFromPlaceid(el.metadata.placeId);
				await GoogleLocationsService.patchGoogleLocation(el.name, 'latlng', {
					latlng: {
						latitude: details.geometry.lat,
						longitude: details.geometry.lng,
					},
				});

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

const matchLocation = async (req, res, next) => {
	// if (!req.query.locationId || !req.query.googleLocationGroupId) {
	// 	res.status(400).json({ message: 'Missing query' });
	// }

	if (!req.token?.access_token) {
		return res.status(401).json({ message: 'Access token missing' });
	}
	const { locationId, googleLocationGroupId } = req.query;
	const { access_token } = req.token;
	const refLocation = await LocationService.get(locationId);
	console.time('a');
	const googleLocations = await GoogleLocationsService.listGoogleLocations(
		googleLocationGroupId,
		access_token,
	);
	console.timeEnd('a');
	// const googleLocations = await Promise.all(
	// 	googleLocationsRaw.map(async (el) => {
	// 		if (!el.latlng) {
	// 			const details = await getDetailsFromPlaceid(el.metadata.placeId).catch(
	// 				next,
	// 			);

	// 			// await GoogleLocationsService.patchGoogleLocation(
	// 			// 	el.name,
	// 			// 	'latlng.latitude,latlng.longitude,storefrontAddress',

	// 			// 	{
	// 			// 		latlng: {
	// 			// 			latitude: details.lat,
	// 			// 			longitude: details.lng,
	// 			// 		},
	// 			// 		storefrontAddress: el.storefrontAddress,
	// 			// 	},
	// 			// 	access_token,
	// 			// )
	// 			// 	.then((res) => {
	// 			// 		console.log('data', res.data);
	// 			// 	})
	// 			// 	.catch((error) => {
	// 			// 		console.log({ error });
	// 			// 	});
	// 			return {
	// 				...el,
	// 				latlng: {
	// 					latitude: details.lat,
	// 					longitude: details.lng,
	// 				},
	// 			};
	// 		}
	// 		return el;
	// 	}),
	// );

	const maxDistance = 1;
	const matched = [];

	googleLocations.map((gEl) => {
		if (gEl.latlng) {
			const distance = calcDistance(
				refLocation.coord.coordinates[1],
				refLocation.coord.coordinates[0],
				gEl.latlng.latitude,
				gEl.latlng.longitude,
			);
			if (distance < maxDistance) {
				matched.push({ name: gEl.name, distance, data: gEl });
			}
		}
		matched.sort((a, b) => a.distance - b.distance);
	});
	console.timeEnd('asd');

	return res.status(200).json(matched);
};

module.exports = { matchLocations, matchLocation };
