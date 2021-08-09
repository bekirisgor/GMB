const { create } = require('xmlbuilder2');
const { nanoid } = require('nanoid');
const fs = require('fs');
const { getIsoTo } = require('../../Constants/conversions');
const { getYandexCategoryId } = require('../../Constants/categoryIds');

const { list, patch } = require('../../Services/Location/LocationService');
const { yandexPhoneFormatter } = require('../../Utils/phoneformatter');
const { yandexWorkingHoursFormatter } = require('../../Utils/WorkingHours');

const createXML = async (locationIds, locationGroupId) => {
	const locations = await list(locationGroupId);

	const companies = create({ version: '1.0', encoding: 'UTF-8' }).ele(
		'companies',
	);

	locations.map((data) => {
		const { address } = data;
		const langCode = address.regionCode || 'tr';
		const country = getIsoTo(address.regionCode).name;

		if ('name' in data) {
			companies.ele('name', { lang: langCode }).txt(data.name).up();
		}
		if (data?.platformId || data?.platformId?.yandex) {
			companies.ele('company-id').txt(data.platformId.yandex).up();
		} else {
			let randomId = nanoid(12);
			console.log(randomId);
			companies.ele('company-id').txt(randomId).up();
			patch(data._id, { 'platformId.yandex': randomId });
		}

		companies
			.ele('coordinates')
			.ele('lon')
			.txt(data.coord.coordinates[0])
			.up()
			.ele('lat')
			.txt(data.coord.coordinates[1]);
		if ('address' in data) {
			let fullAddress = '';
			if ('sublocality' in address) {
				fullAddress = fullAddress + `${address.sublocality}, `;
			}
			if ('street' in address) {
				fullAddress = fullAddress + `${address.street}, `;
			}
			if ('no' in address) {
				fullAddress = fullAddress + `No: ${address.no}, `;
			}
			if ('postalCode' in address) {
				fullAddress = fullAddress + `${address.postalCode} `;
			}
			if ('locality' in address) {
				fullAddress = fullAddress + `${address.locality}, `;
			}
			if ('regionCode' in address) {
				companies.ele('country', { lang: langCode }).txt(country);
				fullAddress = fullAddress + `${country}`;
			}
			companies.ele('address', { lang: langCode }).txt(fullAddress);
		}
		if ('webSite' in data) {
			companies.ele('url').txt(data.webSite);
		}
		if ('category' in data) {
			companies.ele('rubric-id').txt(getYandexCategoryId(data.category));
		}

		if (data.phoneNumber[0].length >= 1) {
			data.phoneNumber.map((phoneNumber) => {
				// console.log(phoneNumber, yandexPhoneFormatter(phoneNumber.langCode));
				companies
					.ele('phone')
					.ele('number')
					.txt(yandexPhoneFormatter(phoneNumber, langCode));
			});
		}

		if ('workingHours' in data) {
			companies
				.ele('working-time', { lang: langCode })
				.txt(yandexWorkingHoursFormatter(data.workingHours));
		}

		return fs.writeFileSync(
			`yandex.xml`,
			companies.doc().end({ prettyPrint: true }),
			{ flag: 'w' },
		);
	});
};

module.exports = { createXML };

//  at the end update yandex id of platform

// const { create } = require('xmlbuilder2');
// const { nanoid } = require('nanoid');
// const { list } = require('../../Services/Location/LocationService');
// const fs = require('fs');

// const countryCode = { tr: 'Türkiye' };

// const createXml = async (locationGroupID) => {
// 	const locations = await list(locationGroupID);
// 	console.log(locations);
// 	const companies = create({ version: '1.0', encoding: 'UTF-8' }).ele(
// 		'companies',
// 	);

// 	locations.map((data) => {
// 		const { address } = data;
// 		const langCode = data.address.regionCode || 'tr';
// 		const fullAddress = `${address.sublocality}, ${address.street}, No: ${address.no}, ${address.postalCode} ${address.locality}`;
// 		companies
// 			.ele('name', { lang: langCode })
// 			.txt(data.name)
// 			.up()
// 			.ele('company-id')
// 			.txt(nanoid(8))
// 			.up()
// 			.ele('address', { lang: langCode })
// 			.txt(data.address?.formattedAddress || fullAddress)
// 			.up()
// 			.ele('country', { lang: langCode })
// 			.txt(countryCode[langCode])
// 			.up()
// 			.ele('url')
// 			.txt(data?.webSite)
// 			.up()
// 			.ele('rubric-id')
// 			.txt('184107871')
// 			.up()
// 			.ele('coordinates')
// 			.ele('lon')
// 			.txt(data.coord.coordinates[0])
// 			.up()
// 			.ele('lat')
// 			.txt(data.coord.coordinates[1])
// 			.up()
// 			.up()
// 			.ele('phone')
// 			.ele('number')
// 			.txt('+90 (850) 255-00-92')
// 			.up()
// 			.ele('type')
// 			.txt('phone')
// 			.doc();
// 	});
// 	console.log(companies.end({ prettyPrint: true }));
// 	return fs.writeFileSync(
// 		'yandexXML.xml',
// 		companies.end({ prettyPrint: true }),
// 		{ flag: 'w' },
// 	);
// };

// const checkObjectProperty = (address) => {
// 	const error = [];
// 	const keys = Object.keys(address);
// 	const requiredKeys = [
// 		'regionCode',
// 		'postalCode',
// 		'province',
// 		'locality',
// 		'sublocality',
// 		'street',
// 	];
// 	requiredKeys.map((key) => {
// 		if (!(key in keys) || address[key].length < 1) {
// 			error.push(key);
// 		}
// 	});

// 	return error;
// };
