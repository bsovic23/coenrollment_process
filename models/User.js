const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class User extends Model {};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            isNull: false
        },
        user_fn: {
            type: DataTypes.STRING,
            isNull: false,
        },
        user_ln: {
            type: DataTypes.STRING,
            isNull: false
        },
        user_site: {
            type: DataTypes.STRING,
            isNull: false
        },
        user_email: {
            type: DataTypes.STRING,
            isNull: false,
            validate: {
                isEmail: true
            }
        }
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