const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        userFn: String
    },
    {
        userLn: String
    },
    {
        userEmail: String
    },
    {
        userPassword: String
    }
);

const User = model('User', userSchema);

module.exports = User;