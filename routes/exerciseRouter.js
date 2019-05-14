const express = require('express');
const exerciseRouter = express.Router();

const { Exercise, Entry } = require('../models');

exerciseRouter.get('/', async (request, response) => {
  try {
    let entryId = request.entryId;
    const exercise = await Exercise.findAll({
        where: {
            entry_id: entryId
        }
    });
    response.send(exercise);
  } catch (e) {
    console.log(e.message);
  }
});

exerciseRouter.post('/', async (request, response) => {
    try {
      const exercise = await Exercise.create(request.body);
      let entryId = request.entryId;
      const entry = await Entry.findByPk(entryId);
      await exercise.setEntry(entry);
      response.send(exercise);
    } catch (e) {
      console.log(e.message);
    }
  });

  


module.exports = { exerciseRouter };
