const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	title: String,
	description: String,
	price: String,
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;