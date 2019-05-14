import React from 'react'
import './Exercise.css'

class Exercise extends React.Component{

  render(){
    const exerciseName = this.props.exercises.map(exercise =>{
      return   <li className='exercise-name'>{exercise.name}</li>
    })
    const exerciseCal = this.props.exercises.map(exercise =>{
      return   <li className='exercise-cal'>{exercise.total_calories}</li>
    })

    return(
      <div className='exercise'>
      <h3>Exercise</h3>
      <div className='exercise-data'>
      <ul className='exercise-name-list'>
        {exerciseName}
      </ul>
      <ul className='exercise-cal-list'>
        {exerciseCal}
      </ul>
      </div>
    </div>
    )
  }
}

export default Exercise;
