const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class User extends Model {};

User.init(
    {
        // Model Fields
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;