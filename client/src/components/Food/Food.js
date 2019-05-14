import React from 'react';
import './Food.css'

class Food extends React.Component{
  
  render(){
    const allFoodNames = this.props.foods.map(food =>{
      return <li className='food-name'>{food.name}</li>
    })
    const allFoodCals = this.props.foods.map(food =>{
      return <li className='food-cal'>{food.total_calories}</li>
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

      </div>
    )
  }
}

export default Food;