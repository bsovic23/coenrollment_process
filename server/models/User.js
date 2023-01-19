const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        user_fn: String
    },
    {
        user_ln: String
    },
    {
        user_email: String
    }
);

const User = model('User', userSchema);

module.exports = User;