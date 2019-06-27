const CustomersController = require('../controllers/customers-controller');

// Customer Routes
CustomerRoutes = (app) => {

    app.route('/api/v1/customers')
        .get(CustomersController.list);
};

module.exports = CustomerRoutes;