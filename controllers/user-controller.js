const { User } = require('../models/User');

const userController = {

    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then(userData => req.json(userData))
            .catch(err => {
                console.log(err);
                res.status(400);
            });
    },

    // get one user
    

    // add user
    createUser(req, res) {
        console.log(req.body.user_fn);
        User.create({
            user_fn: req.body.user_fn,
            user_ln: req.body.user_ln,
            user_site: req.body.user_site,
            user_email: req.body.user_email
        })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }

    // edit user



    // delete user


};

module.exports = userController;