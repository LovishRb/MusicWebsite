const express = require('express');
const login = express.Router();
const loginController = require('../controllers/login');

login.route('/login').post(loginController);

module.exports = login;
