
const User = require('../models/user')
const asyncWrapper = require('../middleware/async')

const jwt = require('jsonwebtoken')
const bcrypt=require('bcryptjs')

const Login = asyncWrapper(async (req, res) => {
    const { loginId, password } = req.body;

    const isEmail = loginId.includes('@');
    let findUser;
    if (isEmail) {
        findUser = await User.findOne({ email: loginId });
    } else {
        findUser = await User.findOne({ username: loginId });
    }

    console.log(findUser);

    if (!findUser) {
        return res.status(404).json({
            message: `No user with LoginId : ${loginId} , Please enter the correct Id`
        });
    }


    let verifyPassword = bcrypt.compareSync(password, findUser.password);
    if (!verifyPassword) {
        return res.status(404).json({
            accessToken: null,
            message: "Invalid Password",
        });
    }


    const token = jwt.sign({ id: findUser.username }, process.env.JWT_SECRET, {
        algorithm: "HS256",
        allowInsecureKeySizes: true,
        expiresIn: 86400,
    });
    res.status(200).send({
        id: findUser._id,
        username: findUser.username,
        email: findUser.email,
        accessToken: token,
    });
})



module.exports = Login


