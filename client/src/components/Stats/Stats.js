import React from 'react';
import './Stats.css'

import { getUser, updateUser } from '../../services/userApi';

class Stats extends React.Component{
  constructor(){
    super();
    this.state={
      user: [],
      updatedUser: {},
      show: false
    }
  }

  async componentDidMount() {
    const user = await getUser(1);
    this.setState({
      user: user
    });
  };

  showModal = async (event) => {
    const id = 1;
    const user = await getUser(id);

    this.setState({
      show: true,
      updatedUser: user,
      id: id
    });
  };

  hideModal = () => {
    this.setState({
      show: false
    });
  };

  onUserFormChange = (event) => {
    const element = event.target
    const name = element.name
    let value = element.value

    if (name === 'current_weight' ||  name === 'goal_weight' || name === 'calorie_intake' ) {
        value = parseInt(value);
    }

    const newState = {}
    newState[name] = value

    this.setState(newState)
  }

  onUpdateClick = async (event) => {
    event.preventDefault();
    const id = this.state.id;

    let updatedUser= {
      current_weight: this.state.current_weight,
      goal_weight: this.state.goal_weight,
      calorie_intake: this.state.calorie_intake
    }

    await updateUser(id, updatedUser);
    const user = await getUser(id);
      this.setState({
        user: user
      })
    this.hideModal();
  }


  render(){
    const modal = (this.state.show && this.state.updatedUser) ?
            <div className='modal'>
              <section className="modal-content">
              <form onSubmit={this.onUpdateClick}>
                <label htmlFor='current-weight'>
                  <input type='text' name='current_weight' placeholder={this.state.updatedUser.current_weight} onChange={ this.onUserFormChange }/>
                </label>
                <label htmlFor='goal-weight'>
                  <input type='text' name='goal_weight' placeholder={this.state.updatedUser.goal_weight}  onChange={ this.onUserFormChange }/>
                </label>
                <label htmlFor='calorie-limit'>
                  <input type='text' name='calorie_limit' placeholder={this.state.updatedUser.calorie_intake}  onChange={ this.onUserFormChange }/>
                </label>
                <button type='submit'>Update Stats</button>
              </form>
                <button onClick={this.hideModal}>Close</button>
              </section>
            </div> : null;
    return(
      <div className='stats'>
        <h1>My Stats</h1>
        <div>
          <h3>Current Weight: <br/>{this.state.user.current_weight} lbs</h3>
          <h3>Goal Weight: <br/>{this.state.user.goal_weight} lbs</h3>
          <h3>Calorie Limit: <br/>{this.state.user.calorie_intake}</h3>
          <button onClick={this.showModal}>Update</button>
        </div>
        {modal}
      </div>
    )
  }
}

export default Stats
