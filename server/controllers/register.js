const User = require('../models/user');
const asyncWrapper = require('../middleware/async');
const bcrypt = require('bcryptjs');

const register = asyncWrapper(async (req, res) => {
    const usernameCheck = await User.findOne({ username: req.body.username });
    const emailCheck = await User.findOne({ email: req.body.email });

    if (usernameCheck) {
        return res.status(409).json({ error: "Username already exists" });
    }
    if (emailCheck) {
        return res.status(409).json({ error: "Email already in use" });
    }

    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    res.status(201).json({ msg: "User created successfully" });
});

module.exports = register;
