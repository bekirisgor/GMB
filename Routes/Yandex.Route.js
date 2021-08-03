const { createXml } = require('../Controller/Yandex/createXML');

const router = require('express').Router();

router.get('/createXML', async (req, res) => {
	await createXml('60cf6dbf97d03327a4125cc3');
	res.send('true');
});

module.exports = router;
