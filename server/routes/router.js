const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const postsController = require('../controller/postsController');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

// Posts


// API
route.get('/api/posts', postsController.find);
route.post('/api/posts', postsController.create);
route.put('/api/posts/:id', postsController.update);
route.delete('/api/posts/:id', postsController.delete);

module.exports = route