const express = require('express');
const { Food, Entry } = require('../models')
const foodRouter = express.Router();

foodRouter.get('/', async (request, response) =>
{
  try {
    const id = request.entryId;
    const food = await Food.findAll({
      where: {
        entry_id: id,
      }
    });
    response.send({food})
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

foodRouter.get('/:id', async (request, response) =>
{
  try {
    const id = request.entryId;
    const food = await Food.findOne({
      where: {
        entry_id: id,
        id: request.params.id
      }
    });
    response.send({food})
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

foodRouter.post('/', async (request, response) => {
  try {
    const createFood = await Food.create(request.body);
    let entryId = request.entryId;
    const entry = await Entry.findByPk(entryId);
    await createFood.setEntry(entry);
    response.send(createFood);
  } catch (e) {
    console.log(e.message);
  }
});


foodRouter.put('/:id', async (request, response) => {
  try {
    const food = await Food.findByPk(request.params.id);
    if (food) await food.update(request.body);
    response.send({food});
  } catch(e) {
    console.log(e.message);
  }
})



// delete food entry


foodRouter.delete('/:id', async (request, response) => {
  try {
    const foodId = await Food.findByPk(request.params.id);
    await foodId.destroy();
    response.send(foodId);
  } catch(e) {
    console.log(e.message);
  }
})

module.exports = {
  foodRouter
}
