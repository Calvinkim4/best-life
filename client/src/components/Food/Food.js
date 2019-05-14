import React from 'react';
import './Food.css'

class Food extends React.Component{
  constructor{
    super():
    this.state={
      food: [],
    }
  }

  render(){
    return(
      <div className='food'>
        <h3>Food</h3>
        <div className='food-data'>
        <ul className='food-name-list'>
          <li className='food-name'>Watermelon</li>
          <li className='food-name'>Burger</li>
          <li className='food-name'>French Fries</li>
          <li className='food-name'>Sourpatch Kids</li>
          <li className='food-name'>Snickers</li>
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
