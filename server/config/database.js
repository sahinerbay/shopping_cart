require('dotenv').config();

module.exports = {
	database: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/solita`
}