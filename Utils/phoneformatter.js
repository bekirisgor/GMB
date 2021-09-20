const { getIsoTo } = require('../Constants/conversions');

const yandexPhoneFormatter = (phoneNumberString = '', countryCode = 'tr') => {
	const { prefix } = getIsoTo(countryCode);
	var cleaned = ('' + phoneNumberString).replace(/^0+|\D/g, '');

	if (cleaned.length <= 10) {
		var match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
		if (match) {
			return [
				'+',
				prefix,
				' ',
				'(',
				match[1],
				') ',
				match[2],
				'-',
				match[3],
				'-',
				match[4],
			].join('');
		}
	} else if (cleaned.length > 10) {
		match = cleaned.match(/^(\d+)(\d{3})(\d{3})(\d{2})(\d{2})$/);
		if (match) {
			return [
				'+',
				match[1],
				' ',
				'(',
				match[2],
				') ',
				match[3],
				'-',
				match[4],
				'-',
				match[5],
			].join('');
		}
	} else {
		return null;
	}
};

module.exports = { yandexPhoneFormatter };
