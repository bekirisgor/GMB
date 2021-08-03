const { create } = require('xmlbuilder2');
const { nanoid } = require('nanoid');
const { list } = require('../../Services/Location/LocationService');
const fs = require('fs');

const countryCode = { tr: 'Türkiye' };

const createXml = async (locationGroupID) => {
	const locations = await list(locationGroupID);
	console.log(locations);
	const companies = create({ version: '1.0', encoding: 'UTF-8' }).ele(
		'companies',
	);

	locations.map((data) => {
		const { address } = data;
		const langCode = data.address.regionCode || 'tr';
		const fullAddress = `${address.sublocality}, ${address.street}, No: ${address.no}, ${address.postalCode} ${address.locality}`;
		companies
			.ele('name', { lang: langCode })
			.txt(data.name)
			.up()
			.ele('company-id')
			.txt(nanoid(8))
			.up()
			.ele('address', { lang: langCode })
			.txt(data.address?.formattedAddress || fullAddress)
			.up()
			.ele('country', { lang: langCode })
			.txt(countryCode[langCode])
			.up()
			.ele('url')
			.txt(data?.webSite)
			.up()
			.ele('rubric-id')
			.txt('184107871')
			.up()
			.ele('coordinates')
			.ele('lon')
			.txt(data.coord.coordinates[0])
			.up()
			.ele('lat')
			.txt(data.coord.coordinates[1])
			.up()
			.up()
			.ele('phone')
			.ele('number')
			.txt('+90 (850) 255-00-92')
			.up()
			.ele('type')
			.txt('phone')
			.doc();
	});
	console.log(companies.end({ prettyPrint: true }));
	return fs.writeFileSync(
		'yandexXML.xml',
		companies.end({ prettyPrint: true }),
		{ flag: 'w' },
	);
};

const checkObjectProperty = (address) => {
	const error = [];
	const keys = Object.keys(address);
	const requiredKeys = [
		'regionCode',
		'postalCode',
		'province',
		'locality',
		'sublocality',
		'street',
	];
	requiredKeys.map((key) => {
		if (!(key in keys) || address[key].length < 1) {
			error.push(key);
		}
	});

	return error;
};

module.exports = { createXml };
