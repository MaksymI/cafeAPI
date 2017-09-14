const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tableSchema = new Schema({
    id: String,
    tableType: Number,
    free: Boolean
});

module.exports = mongoose.model('table', tableSchema, 'tables');


// module.exports = mongoose.model('Message',{
//     msg: String,
//     user: {type: mongoose.Schema.ObjectId, ref: 'User'}
// });

const data1 = {
    "_id": {
        "$oid": "59b86852f36d284a7e7c2fb6"
    },
    "location": {
        "lat": 49.841797,
        "lng": 24.031115
    },
    "name": "Кафе «Ратуша»",
    "rating": 4.8,
    "address": "Ратуша, площа Ринок, 1, Львів",
    "tables": [ {"tableType": 2, "free": true}, {"tableType": 2, "free": false}, {"tableType": 4, "free": false} ]
};

const data2 = {
    "_id": {
        "$oid": "59b86852f36d284a7e7c2fb6"
    },
        "location": {
            "lat": 49.843106,
            "lng": 24.031629
        },
        "name": "Гасова лямпа",
        "rating": 4.6,
        "address": "вулиця Вірменська, 20, Львів",
        "tables": [ {"tableType": 2, "free": true}, {"tableType": 2, "free": false}, {"tableType": 4, "free": false}, {"tableType": 4, "free": true} ]
};

const data3 = {
    "_id": {
        "$oid": "59b86852f36d284a7e7c2fb6"
    },
    "location": {
        "lat": 49.840978,
        "lng": 24.033188
    },
    "name": "Мазох-cafe",
    "rating": 4.4,
    "address": "вулиця Сербська, 7, Львів",
    "tables": [ {"tableType": 2, "free": true}, {"tableType": 2, "free": true}, {"tableType": 2, "free": false}, {"tableType": 4, "free": false}, {"tableType": 4, "free": true} ]
};