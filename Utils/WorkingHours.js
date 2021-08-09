const yandexWorkingHoursFormatter = (workingHours) => {
	let WH = '';
	if ('MONDAY' in workingHours) {
		WH = `${WH} Mo ${workingHours.MONDAY.open}-${workingHours.MONDAY.close}`;
	}
	if ('TUESDAY' in workingHours) {
		WH = `${WH} Tue ${workingHours.TUESDAY.open}-${workingHours.TUESDAY.close}`;
	}
	if ('WEDNESDAY' in workingHours) {
		WH = `${WH} Wed ${workingHours.WEDNESDAY.open}-${workingHours.WEDNESDAY.close}`;
	}
	if ('THURSDAY' in workingHours) {
		WH = `${WH} Thu ${workingHours.THURSDAY.open}-${workingHours.THURSDAY.close}`;
	}
	if ('FRIDAY' in workingHours) {
		WH = `${WH} Fri ${workingHours.FRIDAY.open}-${workingHours.FRIDAY.close}`;
	}
	if ('SATURDAY' in workingHours) {
		WH = `${WH} Sa ${workingHours.SATURDAY.open}-${workingHours.SATURDAY.close}`;
	}
	if ('SUNDAY' in workingHours) {
		WH = `${WH} Su ${workingHours.SUNDAY.open}-${workingHours.SUNDAY.close}`;
	}
	return WH;
};
module.exports = { yandexWorkingHoursFormatter };
