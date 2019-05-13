const express = require('express');
const entryRouter = express.Router();

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


module.exports = { entryRouter };