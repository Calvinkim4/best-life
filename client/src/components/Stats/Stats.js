import React from 'react';
import './Stats.css'
import { getUser } from '../../services/userApi';

class Stats extends React.Component{
  constructor(){
    super();
    this.state={
      user: []
    }
  }
  
  async componentDidMount() {
    const user = await getUser(1);
    this.setState({
      user: user
    });

  }

  render(){
    return(
      <div className='stats'>
        <h1>My Stats</h1>
        <div>
          <h3>Current Weight: {this.state.user.current_weight} lbs</h3>
          <h3>Goal Weight: {this.state.user.goal_weight} lbs</h3>
          <h3>Calorie Limit: {this.state.user.calorie_intake}</h3> 
        </div>
      </div>
    )
  }
}

export default Stats