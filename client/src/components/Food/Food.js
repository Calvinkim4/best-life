import React from 'react';
import './Food.css'

import { createFood, getAllFood } from '../../services/foodApi';

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
  
  render(){

    const allFoodNames = this.state.foods.map(food =>{
      return <li key={food.id} className='food-name'>{food.name}</li>
    })
    const allFoodCals = this.state.foods.map(food =>{
      return <li key={food.id} className='food-cal'>{food.total_calories}</li>
    })
    return(
      <div className='food'>
        <h3>Food</h3>
        <div className='food-data'>
        <ul className='food-name-list'>
        {allFoodNames}
        </ul>
        <ul className='food-cal-list'>
        {allFoodCals}
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