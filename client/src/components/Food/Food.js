import React from 'react';
import './Food.css'

import { createFood, getAllFood, updateFood, deleteFood } from '../../services/foodApi';

class Food extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      foods: props.foods
    }
  }

  onFoodFormChange = (event) => {
    const element = event.target
    const name = element.name
    let value = element.value

    if (name === 'calories') {
        value = parseInt(value);
    }

    const newState = {}
    newState[name] = value

    this.setState(newState)

  }

  onFoodFormSubmit = async (event) => {
      event.preventDefault();

      let newFood = {
        name: this.state.name,
        total_calories: this.state.calories
      }

      await createFood(this.props.userId, this.props.entryId, newFood);
      const allFoods = await getAllFood(this.props.userId, this.props.entryId);
      this.setState({
        foods: allFoods
      })

  }
  
  onDeleteClick = async (event) => {
    event.preventDefault();
    const id = event.target.value;
    await deleteFood(this.props.userId, this.props.entryId, id);
    const allFoods = await getAllFood(this.props.userId, this.props.entryId);
      this.setState({
        foods: allFoods
      })
  }

  render(){
    const allFoods = this.state.foods.map(food =>{
      return (
        <div key={food.id} onClick={this.onDeleteClick}>
          <li className='food-name' value={food.id}>{food.name}</li>
          <li className='food-cal' value={food.id} >{food.total_calories}</li>
        </div>
      ) 
    })
    return(
      <div className='food'>
        <h3>Food</h3>
        <div className='food-data'>
        <ul className='food-name-list'>
          {allFoods}
        </ul>
        </div>
        <div>
          <form onSubmit={this.onFoodFormSubmit}>
            <label htmlFor='food'>
              <input type='text' name='name' placeholder='food' onChange={ this.onFoodFormChange }/>
            </label>
            <label htmlFor='calories'>
              <input type='text' name='calories' placeholder='calories' onChange={ this.onFoodFormChange }/>
            </label>
            <button type='submit'>Add Food</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Food;