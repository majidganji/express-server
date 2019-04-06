require('dotenv').config()

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_dialect,
		define: {
			underscored: true
		},
		// operatorsAliases: false,
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_dialect,
		define: {
			underscored: true
		},
		// operatorsAliases: false,
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_dialect,
		define: {
			underscored: true
		},
		// operatorsAliases: false,
	},
}
