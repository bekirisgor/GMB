const { createXML } = require('../Controller/Yandex/createXML');

const router = require('express').Router();

router.get('/createXML', async (req, res) => {
	await createXML('', '6109405b616db2321e637f37');
	res.send('true');
});

module.exports = router;
