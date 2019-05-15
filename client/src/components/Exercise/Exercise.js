import React from 'react'
import './Exercise.css'

import { getAllExercises, createExercise, updateExercise, deleteExercise } from '../../services/exerciseApi';

class Exercise extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      exercises: props.exercises,
      show: false
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

  onDeleteClick = async (event) => {
    event.preventDefault();
    const id = event.target.value;
    await deleteExercise(this.props.userId, this.props.entryId, id);
    const allExercises = await getAllExercises(this.props.userId, this.props.entryId);
      this.setState({
        exercises: allExercises,
        updatedExercise: '',
        updatedCalories: 0
      })
  }

  onUpdateClick = async (event) => {
    event.preventDefault();
    const id = event.target.value;

    let updatedExercise = {
      name: this.state.name,
      total_calories: this.state.calories
    }

    await deleteExercise(this.props.userId, this.props.entryId, id);
    const allExercises = await getAllExercises(this.props.userId, this.props.entryId);
      this.setState({
        exercises: allExercises
      })
  }

  showModal = () => {
    this.setState({ 
      show: true 
    });
  };

  hideModal = () => {
    this.setState({ 
      show: false 
    });
  };

  render(){
    const allExercises = this.state.exercises.map(exercise =>{
      return (
        <div key={exercise.id} onClick={this.showModal}>
          <li className='exercise-name' value={exercise.id}>{exercise.name}</li>
          <li className='exercise-cal'  value={exercise.id} >{exercise.total_calories}</li>
          <button>Update</button>
          <button>Delete</button>
        </div>
      ) 
    })

    const modal = this.state.show ? 
            <div className='modal'>
              <section className="modal-content">
                <button onClick={this.hideModal}>Close</button>
              </section>
            </div> : null;

    return(
      <div className='exercise'>
      <h3>Exercise</h3>
      <div className='exercise-data'>
      <ul className='exercise-name-list'>
        {allExercises}
      </ul>
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
          {/* <button>Update Exercise</button>
          <button>Delete Exercise</button> */}
        </div>

        {modal}

    </div>

    )
  }
}

export default Exercise;
