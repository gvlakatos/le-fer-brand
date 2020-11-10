const express = require('express');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);

module.exports = routes;