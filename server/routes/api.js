const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config');
const Cafe = require('../models/cafe');

mongoose.Promise = global.Promise;
mongoose.connect(config.database, err => {
    if (!err) {
        console.log("We are connected to mongo");
    } else {
        console.log("Error! " + err);
    }
});

router.get('/cafes', (req, res) => {
    console.log('Get request for all cafes');
    Cafe.find({})
    .exec((err, cafes) => {
        if(err) {
            console.log('Error retrieving cafes');
        } else {
            res.json(cafes);
        }
    })
});

router.get('/cafes/:id', (req, res) => {
    console.log('Get request for a single cafe');
    Cafe.findById(req.params.id)
    .exec((err, cafe) => {
        if(err) {
            console.log('Error retrieving cafes');
        } else {
            res.json(cafe);
        }
    })
});

router.post('/cafe', (req, res) => {
    console.log('Post a new cafe');
    let newCafe = new Cafe();
    newCafe.name = req.body.name;
    newCafe.address = req.body.address;
    newCafe.url = req.body.url;
    newCafe.rating = req.body.rating;
    newCafe.categories = req.body.categories.split(',');
    newCafe.cuisines = req.body.cuisines.split(',');
    newCafe.features = req.body.features.split(',');
    newCafe.location = {
        lat: req.body.lat,
        lng: req.body.lng
    };
    newCafe.save((err, insertedCafe) => {
        if(err) {
            console.log('Error adding new cafe');
        } else {
            res.json(insertedCafe);
        }
    });
});

router.put('/cafe/:id', (req, res) => {
    console.log('Update a cafe data');
    Cafe.findByIdAndUpdate(req.params.id,
    {
        $set: {
            name: req.body.name,
            address: req.body.address,
            url: req.body.url,
            rating: req.body.rating,
            categories: req.body.categories.split(','),
            cuisines: req.body.cuisines.split(','),
            features: req.body.features.split(','),
            location: {
                lat: req.body.lat,
                lng: req.body.lng
            }
        }
    },
    {
        new: true
    },
    (err, updatedCafe) => {
        if(err) {
            res.send('Error upadating cafe data');
        } else {
            res.json(updatedCafe);
        }
    }
    );

});

router.delete('/cafe/:id', (req, res) => {
    console.log('Deleting a single cafe');
    Cafe.findByIdAndRemove(req.params.id, (err, detetedCafe) => {
        if(err) {
            console.log('Error deleting cafe');
        } else {
            res.json(detetedCafe);
        }
    });
});

module.exports = router;
