import React from 'react';
import './Food.css'

class Food extends React.Component{
  
  render(){
    const allFoods = this.props.foods.map(food =>{
      return <li className='food-name'>{food.name}</li>
    })
    return(
      <div className='food'>
        <h3>Food</h3>
        <div className='food-data'>
        <ul className='food-name-list'>
        {allFoods}
        </ul>
        <ul className='food-cal-list'>
          <li className='food-cal'>116</li>
          <li className='food-cal'>532</li>
          <li className='food-cal'>380</li>
          <li className='food-cal'>200</li>
          <li className='food-cal'>250</li>
        </ul>
        </div>

      </div>
    )
  }
}

export default Food;