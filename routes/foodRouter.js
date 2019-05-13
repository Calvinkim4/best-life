const express = require('express');
const { Food } = require('../models')
const foodRouter = express.Router();

// all foods with entry id
foodRouter.get('/:id', async (request, response) =>
{
  try {
    const id = request.params.id;
    const food = await Food.findAll({
      where: {
        entry_id: id,
      }
    });
    response.json({food})
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

// create food entry
foodRouter.post('/', async (request, response) => {
  try {
    const createFood = await Food.create(request.body)
    response.json({
      createFood
    })
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})
//update food entry
foodRouter.put('/:id', async (request, response) => {
  try {
    const id = request.params.id;
    const updateFood = await Food.findByPk(id);

    if (updateFood) await updateFood.update(request.body);
    response.json({
      updateFood
    });
  } catch(e) {
    response.status(304).json({
      message: e.message
    });
  }
})
