/* eslint-disable no-undef */
const express = require('express');
const errorHandler = require('./Middlewares/ErrorHandle.js');
const path = require('path');
const { default: axios } = require('axios');
const { GoogleModel } = require('./Model/index.js');
const app = express();

require('dotenv').config();

// Configure initialize

require('./Config/expressConfig.js')(app);
require('./Config/mongooseConfig')();
require('./Config/config');
require('./Routes')(app);
//Routes
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Error handler
app.use(errorHandler);

// require('./Tests/mongoTest')();
