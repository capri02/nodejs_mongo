const express = require('express');
const bodyParser = require('body-parser');
const CustomerRoutes = require('./routes/customers-routes');

// Init app
const app = express();

// Set cross domain headers
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Set parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Set up routes
CustomerRoutes(app);

// 404 route
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
