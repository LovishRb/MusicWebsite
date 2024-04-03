const express = require('express');
const user = express.Router();
const registerController = require('../controllers/register');

user.route('/register').post(registerController);

module.exports = user;
