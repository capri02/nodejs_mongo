const mongoose = require('mongoose');

// Init MongoDb connection and schema
require('../db/connection');

// Load model
const CustomersModel = mongoose.model('CustomersModel');

exports.list = (req, res) => {

    CustomersModel.find({}, (err, customers) => {

        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(customers);
    });
};