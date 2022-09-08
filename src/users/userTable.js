const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/connection")

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
})

module.exports = User
