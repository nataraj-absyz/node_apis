const User = require('../models/users');


exports.getAllUsers = async (req, res, next) => {
    try {
        const [users, _] = await User.findAll();

        res.status(200).json({count: users.length, users});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createNewUser = async (req, res, next) => {
    try {
        let { user_name, email, phone_number, status } = req.body
        let user = new User(user_name, email, phone_number, status)

        user = await user.save();

        res.status(201).json({ message: "Post created"})
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        let userId = req.params.id;
        let [user, _] = await User.findById(userId);

        res.status(200).json({user: user[0]});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

