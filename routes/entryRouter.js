const express = require('express');
const entryRouter = express.Router();

const { foodRouter } = require('./foodRouter');
const { exerciseRouter } = require('./exerciseRouter');

const { User, Entry } = require('../models');

entryRouter.get('/', async (request, response) => {
  try {
    let userId = request.userId; 
    const entry = await Entry.findAll({
        where: {
            user_id: userId
        }
    });
    response.send(entry);
  } catch (e) {
    console.log(e.message);
  }
});

entryRouter.get('/:id', async (request, response) => {
  try {
    let userId = request.userId; 
    const entry = await Entry.findOne({
        where: {
            user_id: userId,
            id: request.params.id
        }
    });
    response.send(entry);
  } catch (e) {
    console.log(e.message);
  }
});

entryRouter.get('/date/:date', async (request, response) => {
  try {
    let userId = request.userId; 
    const entry = await Entry.findOne({
        where: {
            user_id: userId,
            date: request.params.date
        }
    });
    response.send(entry);
  } catch (e) {
    console.log(e.message);
  }
});

entryRouter.post('/', async (request, response) => {
    try {
      const entry = await Entry.create(request.body);
      let userId = request.userId; 
      const user = await User.findByPk(userId);
      await entry.setUser(user);
      response.send(entry);
    } catch (e) {
      console.log(e.message);
    }
  });

//   entryRouter.use('/:id/food', (request, response, next) => {
//     request.entryId = request.params.id;
//     next()
//   }, foodRouter);

  entryRouter.use('/:id/exercise', (request, response, next) => {
    request.entryId = request.params.id;
    next()
  }, exerciseRouter);

module.exports = { entryRouter };