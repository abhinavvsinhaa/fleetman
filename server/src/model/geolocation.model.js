const mongoose = require('mongoose');

const GeolocationSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "fleetman"
  },
  lat: {
    type: Number,
  },
  long: {
    type: Number,
  },
});

module.exports = mongoose.model('Geo', GeolocationSchema);