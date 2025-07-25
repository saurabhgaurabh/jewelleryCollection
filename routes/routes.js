const express = require('express');
const routes = express.Router();
const userController = require('../controller/postController');

routes.post('/registration', userController.registration);