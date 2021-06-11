/* eslint-disable no-undef */
const express = require('express');
const errorHandler = require('./Middlewares/ErrorHandle.js');
const path = require('path');

const app = express();

require('dotenv').config();

// Configure initialize

require('./Config/expressConfig.js')(app);
require('./Config/mongooseConfig')();

//Routes
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
require('./Routes')(app);

//Error handler
app.use(errorHandler);

// require('./Tests/mongoTest')();
