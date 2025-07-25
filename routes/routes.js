const express = require('express');
const routes = express.Router();
const postController = require('../controller/postController');

routes.post('/registration', postController.registration);


module.exports = routes;