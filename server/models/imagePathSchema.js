const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagePathSchema = new Schema({
	mobile: String,
	desktop: String
});

module.exports = ImagePathSchema;