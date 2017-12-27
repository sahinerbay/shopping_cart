const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagePathSchema = require('./imagePathSchema');

const ProductSchema = new Schema({
	title: String,
	unitPrice: String,
	imagePath: ImagePathSchema
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;