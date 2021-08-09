const { create } = require('xmlbuilder2');
const { nanoid } = require('nanoid');
const fs = require('fs');
const { getIsoto } = require('./Constants/conversions');
const { getYandexCategoryId } = require('./Constants/categoryIds');
const { yandexPhoneFormatter } = require('./Utils/phoneformatter');
const { yandexWorkingHoursFormatter } = require('./Utils/WorkingHours');

const companies = create({ version: '1.0', encoding: 'UTF-8' }).ele(
	'companies',
);

locations.map((data) => {
	const { address } = data;
	const langCode = address.regionCode || 'tr';
	const country = getIsoto(address.regionCode);

	if ('name' in data) {
		companies.ele('name', { lang: langCode }).txt(data.name).up();
	}
	companies.ele('company-id').txt(nanoid(8)).up();
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
			fullAddress + `${address.sublocality}, `;
		}
		if ('street' in address) {
			fullAddress + `${address.street}, `;
		}
		if ('no' in address) {
			fullAddress + `No: ${address.no}, `;
		}
		if ('postalCode' in address) {
			fullAddress + `${address.postalCode} `;
		}
		if ('locality' in address) {
			fullAddress + `${address.locality} `;
		}
		if ('regionCode' in address) {
			companies.ele('country', { lang: langCode }).txt(country);
		}
	}
	if ('webSite' in data) {
		companies.ele('url').txt(data.webSite);
	}
	if ('category' in data) {
		companies.ele('rubric-id').txt(getYandexCategoryId(data.category));
	}

	if (data.phoneNumber.length >= 1) {
		data.phoneNumber.map((phoneNumber) => {
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

	companies.doc({ prettyPrint: true });

	return (
		fs.writeFileSync(`yandex.xml`).companies.end({ prettyPrint: true }),
		{ flag: 'w+' }
	);
});

//  at the end update yandex id of platform
