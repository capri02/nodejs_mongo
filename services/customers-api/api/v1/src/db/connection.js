const config = require('config');
const mongoose = require('mongoose');

const HOST = process.env.MONGO_HOST || config.get('MongoDB.Host');
const connectionUrl = `${config.get('MongoDB.Driver')}${HOST}/${config.get('MongoDB.Db')}`;

// Load schema
require('../models/customers-model');

mongoose.Promise = global.Promise;

mongoose.connect(connectionUrl, config.get('MongoDB.Options')).then(
    () => {
        console.log('connected');
    },
    err => {
        console.log(err);
    }
);