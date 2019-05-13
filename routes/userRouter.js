const express = require('express');
const userRouter = express.Router();

const { User } = require('../models');

userRouter.get('/:id', async (request, response) => {
  try {
    const user = await User.findByPk(request.params.id);
    response.send(user);
  } catch (e) {
    console.log(e.message);
  }
});

userRouter.post('/', async (request, response) => {
    try {
        const user = await User.create(request.body);
        response.send(user);
    }
    catch (e) {
        console.log(e.message);
      }
})

module.exports = { userRouter };