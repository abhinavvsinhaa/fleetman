const express = require('express');
const geolocationRouter = require('./geolocation.route');

const router = express.Router();

router.use("/geolocation", geolocationRouter);

module.exports = router;