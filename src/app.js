const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const driverRoute = require('./routes/driverRoute');

app.use('/', index);
app.use('/drivers', driverRoute);

module.exports = app;