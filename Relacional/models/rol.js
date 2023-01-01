const { DataTypes } = require("sequelize");
const db = require("./index");

const rolModel = db.define('Rol', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
});

module.exports = rolModel;