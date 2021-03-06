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
    const user = await getUser(this.props.userId);
    this.setState({
      user: user
    });
  };

  showModal = async (event) => {
    const id = this.props.userId;
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
                  <input type='text' name='calorie_intake' placeholder={this.state.updatedUser.calorie_intake}  onChange={ this.onUserFormChange }/>
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
          <h2 className='stat-title'>Current Weight <br/><span>{this.state.user.current_weight} </span>lbs</h2>
          <h2 className='stat-title'>Goal Weight <br/><span>{this.state.user.goal_weight} </span>lbs</h2>
          <h2 className='stat-title'>Calorie Limit <br/><span>{this.state.user.calorie_intake}</span></h2>
          <button className='login-btn' onClick={this.showModal}>Update</button>
        </div>
        {modal}
      </div>
    )
  }
}

export default Stats
