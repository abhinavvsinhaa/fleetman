const express = require("express");
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors({ origin: '*' }));
app.options('*', cors());

app.use('/v1', routes);

module.exports = app

