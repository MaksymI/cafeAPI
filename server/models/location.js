const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    id: String,
    lat: String,
    lng: String,
});

module.exports = mongoose.model('location', locationSchema, 'locations');
