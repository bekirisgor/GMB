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
		if()
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
