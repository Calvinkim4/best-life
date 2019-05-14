const express = require('express');
const userRouter = express.Router();
const { entryRouter } = require('./entryRouter');

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

userRouter.put('/:id', async (request, response) => {
  try {
    const user = await User.findByPk(request.params.id);
    if (user) await user.update(request.body);
    response.send({user});
  } catch(e) {
    console.log(e.message);
  }
})


userRouter.delete('/:id', async (request, response) => {
  try {
    const user = await User.findByPk(request.params.id);
    await user.destroy();
    response.send(user);
  } catch(e) {
    console.log(e.message);
  }
})

userRouter.use('/:id/entry', (request, response, next) => {
  request.userId = request.params.id;
  next()
}, entryRouter);

module.exports = { userRouter };