import React from 'react'
import './Exercise.css'

class Exercise extends React.Component{
  render(){
    return(
      <div className='exercise'>
      <h3>Exercise</h3>
      <div className='exercise-data'>
      <ul className='exercise-name-list'>
        <li className='exercise-name'>Deadlifts</li>
        <li className='exercise-name'>Squats</li>
        <li className='exercise-name'>HIIT Cardio</li>
        <li className='exercise-name'>Jump rope</li>
        <li className='exercise-name'>Burpees</li>
      </ul>
      <ul className='exercise-cal-list'>
        <li className='exercise-cal'>116</li>
        <li className='exercise-cal'>532</li>
        <li className='exercise-cal'>380</li>
        <li className='exercise-cal'>200</li>
        <li className='exercise-cal'>250</li>
      </ul>
      </div>
    </div>
    )
  }
}

export default Exercise;