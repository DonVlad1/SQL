require("dotenv").config
const { Sequalize } = require("sequelize")

exports.Sequalize = new Sequalize(process.env.MYSQL_URI)