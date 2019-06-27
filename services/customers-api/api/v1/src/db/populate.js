const mongoose = require('mongoose');
const CutomerModel = require('../models/customers-model');
const data = require('./data');

// connection
require('./connection');

data.forEach(function (customer, index) {

    var newCustomer = new CutomerModel(customer);

    newCustomer.save((error, customer) => {

        if (error) {
            console.log(error)
        } else {
            console.log(`Customer ${index + 1} created!`)
        }
        if (index === 2) {
            mongoose.connection.close();
        }
    });
});

console.log('Data populated!');