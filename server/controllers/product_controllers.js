const Product = require('./../models/products');

module.exports = {

	fetch(req, res, next) {
		Product.find({})
			.then(users => res.json({
				status: "success",
				message: "Fetched users successfully!",
				data: users
			}))
			.catch(next);
	}

}