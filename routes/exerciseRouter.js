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

<<<<<<< HEAD
=======
exerciseRouter.get('/:id', async (request, response) => {
    try {
      let entryId = request.entryId; 
      const exercise = await Exercise.findOne({
          where: {
              entry_id: entryId,
              id: request.params.id
          }
      });
      response.send(exercise);
    } catch (e) {
      console.log(e.message);
    }
  });

>>>>>>> f448a13d87f2fba39edf9bea61864d2fe65cc201
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

<<<<<<< HEAD
  
=======

  exerciseRouter.put('/:id', async (request, response) => {
    try {
      const exercise = await Exercise.findByPk(request.params.id);
      if (exercise) await exercise.update(request.body);
      response.send({exercise});
    } catch(e) {
      console.log(e.message);
    }
  })

  exerciseRouter.delete('/:id', async (request, response) => {
    try {
      const exercise = await Exercise.findByPk(request.params.id);
      await exercise.destroy();
      response.send(exercise);
    } catch(e) {
      console.log(e.message);
    }
  })
>>>>>>> f448a13d87f2fba39edf9bea61864d2fe65cc201


module.exports = { exerciseRouter };
