const express = require('express');
const appRouter = express.Router();
const { passport } = require('../auth/auth')

appRouter.get('/protected', (request, response, next) => {
    response.json({user: request.user, message: 'Authenticated'});
});

appRouter.get('/profile', (request, response, next) => {
    response.json({ user: request.user, message: 'success'})
  })
  

module.exports = {
    appRouter
}