const express = require('express');
const app = express();
const mongoose = require('mongoose');

const config = require('./config/database');
const Product = require('./models/products');
const routes = require('./routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useMongoClient: true })
	.then(() => console.log('connected'))
	.catch(error => console.log(error));

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
	next();
});

routes(app);

app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message })
})

module.exports = app;