const Geo = require("../model/geolocation.model")

const getGeolocation = async (req, res) => {
    const location = await Geo.findById(req.params.fleetId);
    res.status(200).send(location);

}

const addGeolocation = async (req, res) => {
    const newFleetman = await Geo.create(
        {
            name: req.body.name, 
            lat: req.body.lat, 
            long: req.body.long
        }
    );
    res.status(200).send(newFleetman);
}

const updateGeolocation = async (req, res) => {
    const updatedLocaton = await Geo.findByIdAndUpdate(
        req.params.fleetId
        ,
        {
            lat: req.body.lat, 
            long: req.body.long
        },
        {
            new: true
        }
    );
    res.status(200).send(updatedLocaton);
}

module.exports = {
    getGeolocation,
    addGeolocation,
    updateGeolocation
}