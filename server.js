const express = require('express');
const errorHandler = require('./Middlewares/ErrorHandle.js');

const app = express();

require('dotenv').config();

// Configure initialize

require('./Config/expressConfig.js')(app);
require('./Config/mongooseConfig')();

//Routes
require('./Routes')(app);

//Error handler
app.use(errorHandler);

// require('./Tests/mongoTest')();
