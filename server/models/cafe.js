const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cafeSchema = new Schema({
    id: String,
    location: {
        lat: Number,
        lng: Number
    },
    url: String,
    name: String,
    rating: Number,
    address: String,
    categories: [String],
    cuisines: [String],
    features: [String],
    tables: [ {tableType: Number, free: Boolean} ]
});

module.exports = mongoose.model('cafe', cafeSchema, 'cafes');


// module.exports = mongoose.model('Message',{
//     msg: String,
//     user: {type: mongoose.Schema.ObjectId, ref: 'User'}
// });