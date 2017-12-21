const ProductControllers = require('./../controllers/product_controllers');

module.exports = (app) => {

	app.get('/api/products', ProductControllers.fetch);
}
