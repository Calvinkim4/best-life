import React from 'react'
import './Exercise.css'

import { getExercise, getAllExercises, createExercise, updateExercise, deleteExercise } from '../../services/exerciseApi';

class Exercise extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      exercises: props.exercises,
      show: false,
      updatedExercise: {}
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
        exercises: allExercises
      })
  }

  onUpdateClick = async (event) => {
    event.preventDefault();
    const id = this.state.id;

    let updatedExercise = {
      name: this.state.updatedExercise,
      total_calories: this.state.updatedCalories
    }

    await updateExercise(this.props.userId, this.props.entryId, id, updatedExercise);
    const allExercises = await getAllExercises(this.props.userId, this.props.entryId);
      this.setState({
        exercises: allExercises
      })

  }

  showModal = async (event) => {
    const id = event.target.value;
    const exercise = await getExercise(this.props.userId, this.props.entryId, id);

    this.setState({ 
      show: true,
      updatedExercise: exercise,
      id: id
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
        <div key={exercise.id}>
          <li className='exercise-name' value={exercise.id}>{exercise.name}</li>
          <li className='exercise-cal'  value={exercise.id} >{exercise.total_calories}</li>
          <button value={exercise.id} onClick={this.showModal}>Update</button>
          <button value={exercise.id} onClick={this.onDeleteClick}>Delete</button>
        </div>
      ) 
    })

    const modal = (this.state.show && this.state.updatedExercise) ? 
            <div className='modal'>
              <section className="modal-content">
              <form onSubmit={this.onUpdateClick}>
                <label htmlFor='food'>
                  <input type='text' name='updatedExercise' placeholder={this.state.updatedExercise.name} onChange={ this.onExerciseFormChange }/>
                </label>
                <label htmlFor='calories'>
                  <input type='text' name='updatedCalories' placeholder={this.state.updatedExercise.total_calories}  onChange={ this.onExerciseFormChange }/>
                </label>
                <button type='submit'>Update Exercise</button>
              </form>
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
          </div>

          {modal}

      </div>

    )
  }
}

export default Exercise;
