import React from 'react'
import './Exercise.css'

import { getAllExercises, createExercise } from '../../services/exerciseApi';

class Exercise extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      exercises: props.exercises
    }
  }

  onExerciseFormChange = (event) => {
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

  onExerciseFormSubmit = async (event) => {
      event.preventDefault();

      let newExercise = {
        name: this.state.name,
        total_calories: this.state.calories
      }

      await createExercise(this.props.userId, this.props.entryId, newExercise);
      const allExercises = await getAllExercises(this.props.userId, this.props.entryId);
      this.setState({
        exercises: allExercises
      })

  }

  render(){
    const exerciseName = this.state.exercises.map(exercise =>{
      return   <li key={exercise.id} className='exercise-name'>{exercise.name}</li>
    })
    const exerciseCal = this.state.exercises.map(exercise =>{
      return   <li key={exercise.id} className='exercise-cal'>{exercise.total_calories}</li>
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
        <button className='update-btn'>update</button>
        <button>Add Exercise</button>
      </div>

      


      <div>
          <form onSubmit={this.onExerciseFormSubmit}>
            <label htmlFor='food'>
              <input type='text' name='name' placeholder='exercise' onChange={ this.onExerciseFormChange }/>
            </label>
            <label htmlFor='calories'>
              <input type='text' name='calories' placeholder='calories' onChange={ this.onExerciseFormChange }/>
            </label>
            <button type='submit'>Add Exercise</button>
          </form>
        </div>
    </div>

    )
  }
}

export default Exercise;
