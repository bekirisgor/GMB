const { create } = require('xmlbuilder2');
const { nanoid } = require('nanoid');

const companies = create({ version: '1.0', encoding: 'UTF-8' }).ele(
	'companies',
);

companies
	.ele('name', { lang: 'tr' })
	.txt('asd')
	.up()

	.ele('company-id')
	.txt(nanoid(8))
	.doc();
console.log(companies.end({ prettyPrint: true }));
