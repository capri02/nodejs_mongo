const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Customers database schema
const CustomersSchema = new Schema({
    name: {
        type: String
    },
    address: {
        street: {
            type: String
        },
        postalCode: {
            type: String
        },

        city: {
            type: String
        },
    },
    isActive: {
        type: Boolean,
        default: true
    },
    vehicles: [{
        vehicleId: String,
        registration: String
    }]

});

module.exports = mongoose.model('CustomersModel', CustomersSchema);